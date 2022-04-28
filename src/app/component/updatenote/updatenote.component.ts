import { Component, OnInit, Inject } from '@angular/core';
import { NoteService } from 'src/app/Services/noteServices/note.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA,} from '@angular/material/dialog';

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent implements OnInit {
  noteTitle: string = '';
  noteDescription: string = '';
  id: any;

  constructor(public dialogRef: MatDialogRef<UpdatenoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private httpPost: NoteService) { }

  ngOnInit(): void {
    console.log(this.data.noteid);
    this.noteTitle = this.data.noteid.title;
    this.noteDescription = this.data.noteid.description;
    this.id = this.data.noteid.id;
  }
  Onclose() {
    let reqdata = {
      title: this.noteTitle,
      description: this.noteDescription,
      noteId: this.id,
    }
    this.httpPost.updateNote(reqdata).subscribe((respone) => {
      console.log('update response: ', respone)
    })
  }
}

