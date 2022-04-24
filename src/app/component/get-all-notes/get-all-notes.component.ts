import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/noteServices/note.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {


  constructor(private httpGetAllNote: NoteService) { }
  list: any = [];
  notes: any;
  noteList: any = [];

  ngOnInit(): void {
    this.getAllNotes();
  }
  getAllNotes() {    // Api integartion for api notes 
    this.httpGetAllNote.getNoteList().subscribe(
      (resp) => {
        this.list = resp;
        this.noteList = this.list.data.data;
        this.notes = this.noteList
        console.log(resp);
      },
      (error) => {
        console.log('Get Note Error', error);
      }
    )
  }
}






