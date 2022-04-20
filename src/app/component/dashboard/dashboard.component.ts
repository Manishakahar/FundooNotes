import { Component, OnInit, ElementRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userLogin: boolean = false;
  email:any;
  firstName:any;
  lastName:any;
  
  constructor(private el: ElementRef,media: MediaMatcher, private router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }
  
  SearchProp(el:HTMLElement,color:string){
    el.style.backgroundColor=color;
  }
  

  
  ngOnInit(): void {

  }
  mobileQuery: MediaQueryList;


}
