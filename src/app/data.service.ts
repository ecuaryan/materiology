import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import { LIVER_WORKFLOW, LIVER_WORKFLOW_NOTES } from '../data/liver-workflow';

@Injectable()
export class DataService {
  private liverOptions$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(LIVER_WORKFLOW.options);
  private liverOptions = LIVER_WORKFLOW.options;
  private liverNotes$ = LIVER_WORKFLOW_NOTES;

  getLiverOptions() { return this.liverOptions$; }
  getLiverOptionsNoObservable() { return this.liverOptions; }
  getLiverNotes() { return this.liverNotes$; }

  getLiverOptionNoObservable(id: number) {
    let option;
    this.getLiverOptionsNoObservable().forEach(liverOption => {

      if (liverOption.id === id) {
        option = liverOption;

        if (option.noteIds) {
          option.notes = [];
          option.noteIds.map( liverNoteId => {
            const note = this.getLiverNote(liverNoteId);
            option.notes.push(note);
          });
        }
      }
    });

    return option;
  }

  getLiverOption(id: number) {
    return this.getLiverOptions().map(liverOptions => {
      const option = liverOptions.find(liverOption => liverOption.id === id);
      if (option.noteIds) {
        option.notes = [];
        option.noteIds.map( liverNoteId => {
          const note = this.getLiverNote(liverNoteId);
          option.notes.push(note);
        });
      }
      return option;
    });
  }

  getLiverNote(id: number) {
    return this.getLiverNotes().find(liverNote => liverNote.id === id);
  }

  getLiverWorkflowTitle() {
    return LIVER_WORKFLOW.title;
  }

  getLiverWorkflowSubtitle() {
    return LIVER_WORKFLOW.subtitle;
  }
}


