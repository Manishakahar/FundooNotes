import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { NoteService } from 'src/app/Services/noteServices/note.service';
import { ActivatedRoute } from '@angular/router';
import { ArchiveComponent } from '../archive/archive.component';
import { TrashComponent } from '../trash/trash.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() noteCard: any;
  @Output() trashNoteToRefresh = new EventEmitter<any>();
  @Output() archiveNoteToRefresh = new EventEmitter<any>();
  @Output() changeColorOfNote = new EventEmitter<any>();
  noteId: any;
  id: any;
  isArchiveNotesComponent = false;
  isTrashNotesComponent = false;
  constructor(private noteService: NoteService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.noteCard)
    let Component = this.router.snapshot.component;
    if (Component == ArchiveComponent) {
      this.isArchiveNotesComponent = true;
      console.log(this.isArchiveNotesComponent);
    }
    if (Component == TrashComponent) {
      this.isTrashNotesComponent = true;
      console.log(this.isTrashNotesComponent);
    }
  }
  Deletenote() {
    let reqdata = {
      noteIdList: [this.noteCard.id],
      isDeleted: true,
    }
    this.noteService.deleteNote(reqdata).subscribe((response: any) => {
      console.log('Delete Notes', response); 
      this.trashNoteToRefresh.emit(Response)
    })
  }

  Onarchive() {
    let reqdata = {
      noteIdList: [this.noteCard.id],
      isArchived: true,
    }
    this.noteService.archiveNote(reqdata).subscribe((response: any) => {
      console.log('Archived Notes', response);
      this.archiveNoteToRefresh.emit(Response)
    })
  }

  Unarchive() {
    let reqdata = {
      noteIdList: [this.noteCard.id],
      isArchived: false
    }
    this.noteService.archiveNote(reqdata).subscribe((response: any) => {
      console.log('Unarchived Notes', response);
      this.changeColorOfNote.emit("Note is unarchived");

    })
  }

  Deleteforever() {
    let reqdata = {
      noteIdList: [this.noteCard.id],
      isDeleted: true,
    }
    this.noteService.deleteForever(reqdata).subscribe((response: any) => {
      console.log(' Deleteforever', response);
      this.changeColorOfNote.emit(response)
    })
  }

  Restorenote() {
    let reqdata = {
      noteIdList: [this.noteCard.id],
      isDeleted: false,
    }
    this.noteService.deleteNote(reqdata).subscribe((response: any) => {
      console.log('Restorenote', response);
      this.changeColorOfNote.emit("Note is Restored");
    })
  }

  colors: Array<any> = [
    { bgColorValue: '#fff', name: 'white' },
    { bgColorValue: '#f28b82', name: 'red' },
    { bgColorValue: '#fbbc04', name: 'orange' },
    { bgColorValue: '#fff00', name: 'yellow' },
    { bgColorValue: '#ccff90', name: 'green' },
    { bgColorValue: '#a7ffeb', name: 'teal' },
    { bgColorValue: '#cbf0f8', name: 'Blue' },
    { bgColorValue: '#aecbfa', name: 'darkblue' },
    { bgColorValue: '#d7aefb', name: 'purple' },
    { bgColorValue: '#fdcfe8', name: 'pink' },
    { bgColorValue: '#e6c9a8', name: 'brown' },
    { bgColorValue: '#e8eaed', name: 'grey' }
  ]
  setColor(noteColor: any) {
    this.noteCard.noteColor = noteColor;
    let reqdata = {
      noteIdList: [this.noteCard.id],
      color: noteColor
    }
    console.log(reqdata);
    this.noteService.ColorNotes(reqdata).subscribe((response: any) => {
      console.log('color Notes', response);
      this.changeColorOfNote.emit("Note is unarchived");
    })
  }
}


