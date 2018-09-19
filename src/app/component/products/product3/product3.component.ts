import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product3',
  templateUrl: './product3.component.html',
  styleUrls: ['./product3.component.css']
})
export class Product3Component implements OnInit {
  
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  slideIndex = 1;

  constructor() { 
    
  }
  showDivs(n) {
    let i;
    let x = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    let dots = document.getElementsByClassName("demo") as HTMLCollectionOf<HTMLElement>;
    if (n > x.length) {this.slideIndex = 1}    
    if (n < 1) {this.slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
       dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[this.slideIndex-1].style.display = "block";  
    dots[this.slideIndex-1].className += " w3-white";
  }

  ngOnInit() {
    
  this.showDivs(this.slideIndex);

  }
 
  currentDiv(n) {
    this.showDivs(this.slideIndex = n);
  }
  
  
}
