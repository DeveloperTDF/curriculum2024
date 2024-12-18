import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent  implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}

  onClick(){
    this.router.navigate(['/experiencia']);
  }
  titulos(){
    this.router.navigate(['/titulos'])
  }
  informacion(){
    this.router.navigate(['/informacion'])
  }
  aplicaciones(){
    this.router.navigate(['/aplicaciones'])
  }
}
