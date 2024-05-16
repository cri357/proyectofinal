import { Component } from '@angular/core';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent {
  empleados = [
    {
      nombre: 'Christian Martinez Torrealba',
      puesto: 'Dueño',
      descripcion: 'Fundador de la empresa Tienda jordan.',
      foto: '../../../assets/img/chef.jpg',
      destacado: true
    },
    {
      nombre: 'Jose Maria Rivera',
      puesto: 'Vendedor',
      descripcion: 'Pasión por los detalles y por el servico al cliente.',
      foto: '../../../assets/img/jose.jpg',
      destacado: false
    },
    {
      nombre: 'Samanta Martinez Torrealba',
      puesto: 'Gerente de tienda',
      descripcion: 'Amable y siempre listo para ayudar en lo que se necesite en la tienda.',
      foto: '../../../assets/img/samanta.jpg',
      destacado: false
    },
    {
      nombre: 'Cesar Estrada Rivera',
      puesto: 'Administrador de la tieneda',
      descripcion: 'Encargada de que todo funcione a la perfección en nuestro tienda.',
      foto: '../../../assets/img/cesar.jpg',
      destacado: true
    }
  ];
}
