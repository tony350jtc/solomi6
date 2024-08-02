import { Component } from '@angular/core';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  //definimos propiedad publica como info del tipo array
  public info: Card[];

  constructor() {
    this.info = [
      {
        idcard: "1",
        titulo: "mandarinas",
        descripcion: "son naranjas de otoño",
        imagen: "https://th.bing.com/th/id/OIP.vgBYyhJZDiFk_SQDu36h_QHaE0?rs=1&pid=ImgDetMain",
        alt: "foto de mandarinas"
      },
      {
        idcard: "2",
        titulo: "manzanas",
        descripcion: "son rojas, verdes o amarillas",
        imagen: "https://th.bing.com/th/id/R.fe735a8b194c468b968535c94b9afcdb?rik=5TU1d1qd3aUi1w&riu=http%3a%2f%2fbienestaraldia.com%2fwp-content%2fuploads%2f2021%2f04%2fVariedad-Mananas-Washington.jpg&ehk=5fyUIgH5Vn%2f%2bOvgUDWoiZE1hc%2foyHOpAdu3Wi7k4hLI%3d&risl=&pid=ImgRaw&r=0",
        alt: "foto de manzanas"
      },
      {
        idcard: "3",
        titulo: "melon",
        descripcion: "ahi distintos tipos",
        imagen: "https://th.bing.com/th/id/OIP.knjuH8htBtymU-JGgH1kBwHaEK?rs=1&pid=ImgDetMain",
        alt: "foto de melones"
      }
    ]
  }
}
