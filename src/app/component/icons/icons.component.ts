import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/noteServices/note.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input()noteCard:any;
  noteId: any;
  
  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
  }

  deletenote(){
    let reqdata = {
       noteIdList: [this.noteCard.id],
      isDeleted: true,
    }
    this.noteService.deleteNote(reqdata).subscribe((response: any) => {
      console.log('Delete Notes',response);
  
    })
  }

  Onarchive(){
    let reqdata = {
       noteIdList: [this.noteCard.id],
      isArchived:true
    }
    this.noteService.archiveNote(reqdata).subscribe((response: any) => {
      console.log( 'Archived Notes',response);

    })
  }
}

