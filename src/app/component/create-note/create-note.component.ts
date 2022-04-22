import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { NoteService } from 'src/app/Services/noteServices/note.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  description:any;
  title:any;
  isVisible:boolean=true;
  constructor(private httpAddNote: NoteService) { }

  @Output() getNoteList = new EventEmitter();

  ngOnInit(): void {
  }

  fieldClick(){
    this.isVisible=!this.isVisible;
  }

  addnote(title: { value: string; },description: { value: string; }){
    if(title.value===''||description.value===''){
      this.fieldClick();
    }
    else{
      this.fieldClick();
      var noteData = {
        title: title.value,
        description: description.value,
      };
      this.httpAddNote.createNote(noteData).subscribe(
        (response) => {
          console.log(response);
           this.getNoteList.emit();
        },
        (error) => {
          console.log('Note Error: ', error);
        }
      );
    }    
  }

}
