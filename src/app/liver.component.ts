import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Util } from './util.component';
import { Location } from '@angular/common';
import { DataService } from './data.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'liver',
  templateUrl: './liver.component.html',
  styleUrls: ['./liver.component.scss']
})
export class LiverComponent implements OnInit {

  selectedOption: any;
  availableOptions: any;
  title: string;
  subtitle: string;
  option: string;

  constructor(
    private service: DataService,
    private route: ActivatedRoute,
    private location: Location,
    public util: Util
  ) {}

  ngOnInit() {
    this.title = this.service.getLiverWorkflowTitle();
    this.subtitle = this.service.getLiverWorkflowSubtitle();
    this.route.data
      .subscribe((data: { option: string }) => {
        this.selectedOption = data.option;
        this.availableOptions = [];
        if (this.selectedOption.linkOptionIds) {
          for ( let i = 0; i < this.selectedOption.linkOptionIds.length; i++ ) {
            this.availableOptions.push(this.service.getLiverOptionNoObservable(this.selectedOption.linkOptionIds[i]));
          }
        }
      });
  }

  goBack() {
    this.location.back();
  }

  isBackButtonDisabled() {
    return this.location.isCurrentPathEqualTo('/liver');
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
