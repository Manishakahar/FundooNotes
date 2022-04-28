import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/noteServices/note.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  notesarchive: any
  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.GetAllArchiveNotes()
  }

  GetAllArchiveNotes() {
    this.noteService.getArchiveNote().subscribe((response: any) => {
      this.notesarchive = response.data.data;
      console.log(this.notesarchive);
    }, error => {
      console.log("Archive Error:", error)
    })
  }
  unarchive(e:any){ 
    this.GetAllArchiveNotes();
   }
}
