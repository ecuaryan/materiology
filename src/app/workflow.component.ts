import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilComponent } from './util.component';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-workflow-component',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss']
})
export class WorkflowComponent implements OnInit {

  selectedOption: any;
  availableOptions: any;
  title: string;
  subtitle: string;
  workflow: any;

  constructor(private route: ActivatedRoute, private location: Location, public util: UtilComponent) {}

  ngOnInit() {
    this.route.data.subscribe((data: { workFlow: any }) => {
      this.workflow = data.workFlow;
      this.title = this.workflow.title;
      this.subtitle = this.workflow.subtitle;
      this.route.paramMap.subscribe(paramMap => {
        let id = +paramMap.get('id');
        if (!id && this.workflow.defaultId) {
          id = this.workflow.defaultId;
        } else if (!id) {
          id = 1;
        }
        this.selectedOption = this.workflow.options.find( option => option.id === id);
        this.availableOptions = [];
        if (this.selectedOption.linkOptionIds) {
          for ( let i = 0; i < this.selectedOption.linkOptionIds.length; i++ ) {
            this.availableOptions.push(this.getOption(this.selectedOption.linkOptionIds[i]));
          }
        }
      });
    });
  }


  getOption(id: number) {
    let theOption;
    this.workflow.options.forEach(option => {

      if (option.id === id) {
        theOption = option;

        if (option.noteIds) {
          option.notes = [];
          option.noteIds.map( noteId => {
            const note = this.getNote(noteId);
            option.notes.push(note);
          });
        }
      }
    });

    return theOption;
  }

  getNote(id: number) {
    return this.workflow.notes.find(note => note.id === id);
  }

  goBack() {
    this.location.back();
  }

  isBackButtonDisabled() {
    return this.location.isCurrentPathEqualTo('/' + this.workflow.rootPath)
    || this.location.isCurrentPathEqualTo('/' + this.workflow.rootPath + '/' + this.workflow.defaultId ? this.workflow.defaultId : 1);
  }

  openNotesDialog(title, notes) {
    let noteElements = '';
    notes.forEach(note => {
      if (note.title && notes.length > 1) {
        noteElements += '<p><strong>' + note.title + ':</strong></p>';
      }
      noteElements += '<div>' + note.body + '</div>';
    });

    const settings = {
      width: '650px',
      title: title,
      htmlContent: noteElements,
      rightButtonText: 'close'
    };
    this.util.openSimpleDialog(settings);
  }
}
