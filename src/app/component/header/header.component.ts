import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('popOverState' , [
      state('close',style({
        transform: 'rotate(90deg)',
        position: 'absolute'

      })),
      state('open',style({
        transform: 'rotate(0deg)',
        position: 'absolute'

      })),
      
      transition('close <=> open',animate('1000ms')),
    ]),
    trigger('MenuOverState' , [
      
      state('menuclose',style({
        height: '0px',
        //transition: '0px 3ms',
        opacity:'0',    
      })),
      state('menuopen',style({
        height: '530px',
        //transition: '530px 3ms',
        opacity:'1',
      })),

      transition('menuclose <=> menuopen',animate('1000ms ease-in')),


    ]),
    trigger('MenuIcon' , [
      state('iconclose',style({
        transform: 'rotate(90deg)',
      })),
      state('iconopen',style({
        transform:'rotate(0deg)'

      })),
      transition('iconclose <=> iconopen',animate('1000ms'))
    ])
  ]
})
export class HeaderComponent implements OnInit {
  displaydiv :any;
  
  stateName = 'close';
  menustate = 'menuclose';
  menuIcon = 'iconclose';
  constructor() { }

  ngOnInit() {
  }
  
  OnMenuClick(){
    console.log("menu open");
    this.stateName = (this.stateName === 'open' ? 'close':'open');
    this.menustate = (this.menustate === 'menuopen'? 'menuclose':'menuopen');
    this.menuIcon  = (this.menuIcon === 'iconclose'? 'iconopen':'iconclose');
  }
  
}
