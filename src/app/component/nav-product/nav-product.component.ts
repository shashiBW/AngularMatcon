import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-product',
  templateUrl: './nav-product.component.html',
  styleUrls: ['./nav-product.component.css']
})
export class NavProductComponent implements OnInit {
  displaydiv :any = 'none';
  displayresponcediv:any ;
  public show:boolean = false;
  constructor() {     
  }
  
  ngOnInit() {
    
  }
  
  mouseover(){
    this.displaydiv = "flex";

  }
  // OnNavClick(){
  //   if(this.displaydiv == "flex"){

  //     this.displaydiv = "none";
  //   }else{
  //     console.log("ghjkljkl");
  //   }
      
  // }
  mouseleave(){
    this.displaydiv = "none";
  }
  
  OnProductsDropdown(){
    
    this.show = !this.show;

    if(this.show)  
      this.displayresponcediv = "block";
    else
      this.displayresponcediv = "none";
  }
  
}

