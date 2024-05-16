import { Component } from '@angular/core';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrl: './promociones.component.css'
})
export class PromocionesComponent {
  promociones = [
    {
      "titulo": "Jordan retro 4",
      "imagen": "../../../assets/img/jordanretro4.jpg",
      "descripcion": "Perfectos para la cancha y el día a día, capturan la esencia de un ícono. ¡Hazlos tuyos y marca tendencia en cada paso.",
      "precio": "$4,800",
      "icono": "fa-solid fa-shoe-prints",
      "categoria": "jordan4",
      "color": "#d50000 "
    },
    {
      "titulo": "Jordan retro 1",
      "imagen": "../../../assets/img/jordanretro1.jpg",
      "descripcion": "Durabilidad, comodidad y una estética atemporal que nunca pasa de moda.",
      "precio": "$4,500",
      "icono": "fa-solid fa-shoe-prints",
      "categoria": "jordan1",
      "color": "#d50000 "
    },
    {
      "titulo": "Jorda 12",
      "imagen": "../../../assets/img/jorda12.jpg",
      "descripcion": "Descubre la elegancia y el rendimiento en cada paso con las Jordan 12 Retro. ",
      "precio": "$2,000",
      "icono": "fa-solid fa-shoe-prints",
      "categoria": "jorda12",
      "color": "#d50000 "
    },
    {
      "titulo": "Jordan retro 99",
      "imagen": "../../../assets/img/jordanretro99.jpg",
      "descripcion": "Descubre la elegancia y el rendimiento en cada paso con las Jordan Retro 99. ",
      "precio": "$8,000",
      "icono": "fa-solid fa-shoe-prints",
      "categoria": "jordan99",
      "color": "#d50000 "
    },
    {
      "titulo": "Jordan retro 7",
      "imagen": "../../../assets/img/jordanretro7.jpeg",
      "descripcion": "Descubre la elegancia y comodidad de los Jordan Retro 7.",
      "precio": "$9,000",
      "icono": "fa-solid fa-shoe-prints",
      "categoria": "jordan7",
      "color": "#d50000 "
    },
    {
      "titulo": "Jordan Louis Vuitton",
      "imagen": "../../../assets/img/jordanlv.png",
      "descripcion": "Descubre la major experencia con un modelo de lujo.",
      "precio": "$300",
      "icono": "fa-solid fa-shoe-prints",
      "categoria": "jordanlv",
      "color": "#d50000 "
    }

  ]
}
