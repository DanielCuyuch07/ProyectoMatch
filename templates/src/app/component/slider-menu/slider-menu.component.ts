import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-menu',
  templateUrl: './slider-menu.component.html',
  styleUrls: ['./slider-menu.component.css']
})
export class SliderMenuComponent implements OnInit {
  menuSeleccionado: boolean = false;

  botonMenuClic() {
    this.menuSeleccionado = true;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
