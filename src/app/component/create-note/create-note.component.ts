import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  Description:any;
  isVisible:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

  expandCreateNote(){
    if(this.isVisible){
      this.isVisible=false;
    }
    else{
      this.isVisible=true;
    }
  }

}
