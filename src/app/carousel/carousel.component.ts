import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  constructor(private router: Router) { }

  titulo: any = 'Casa Magnífica';

  foto: any = 'https://i.ibb.co/JKzFtzj/casa.jpg';

  
}
