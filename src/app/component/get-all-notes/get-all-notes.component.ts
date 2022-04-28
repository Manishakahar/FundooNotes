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
      (resp: any) => {


        this.notes = resp.data.data;
        console.log(resp);
        this.noteList = this.notes.filter((data: any) => {
          console.log(data.isDeleted)
          return data.isDeleted === false && data.isArchived === false;
        })
      },
      (error) => {
        console.log('Get Note Error', error)
      });
  }

  autoRefresh(data: any) {   // this for auoto Refresh 
    console.log("refresh", data);
    this.getAllNotes();
  }
  colourchanged(e: any) {
    console.log(e);
    this.getAllNotes();
  }
  update(e: any) {
    console.log(e);
    this.getAllNotes();
  }
  trash(data: any) {
    console.log("refresh", data);
    this.getAllNotes();
  }
  archive(data: any) {
    console.log("refresh", data);
    this.getAllNotes();
  }
}






