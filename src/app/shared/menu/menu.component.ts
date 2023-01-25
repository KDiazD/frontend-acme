import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }


  itemsMenu = [
    {
      name: "Inicio",
      url: "/"
    },
    {
      name: "Asesores",
      url: "/asesores"
    },
    {
      name: "Comisiones",
      url: "/comisiones"
    },
    {
      name: "Ventas",
      url: "/ventas"
    }
  ]

  ngOnInit(): void {
  }

}
