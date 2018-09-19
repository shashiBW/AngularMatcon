import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-service',
  templateUrl: './nav-service.component.html',
  styleUrls: ['./nav-service.component.css']
})
export class NavServiceComponent implements OnInit {
  displaydiv :any;
  displayresponcediv:any ;
  public show:boolean = false;
  constructor() { 
    
  }
  
  ngOnInit() {
    
  }
 
  mouseover(){
    //console.log("mouse hoverd");
    this.displaydiv = "flex";

  }
  mouseleave(){
    //console.log("mouse leave");
    this.displaydiv = "none";
  }
  OnProductsDropdown(){
    
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.displayresponcediv = "block";
    else
      this.displayresponcediv = "none";
  }
  
}

