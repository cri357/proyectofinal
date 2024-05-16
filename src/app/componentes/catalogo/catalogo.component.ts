import { Component , OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent implements OnInit {

  
  catalogo = [
  {
  "categoria": "tenis",
  "imagen": "../../assets/img/jordanretro99.jpg"
},
{
  "categoria": "pans",
  "imagen": "../../assets/img/pans.png"
},
{
  "categoria": "pans",
  "imagen": "../../assets/img/pans1.png"
},
{
  "categoria": "playeras",
  "imagen": "../../assets/img/play.png"
},
{
  "categoria": "tenis",
  "imagen": "../../assets/img/jordanlv.png"
},
{
  "categoria": "playeras",
  "imagen": "../../assets/img/play1.png"
},
{
  "categoria": "chamarra",
  "imagen": "../../assets/img/cham.png"
},
{
  "categoria": "pans",
  "imagen": "../../assets/img/pans2.png"
},
{
  "categoria": "tenis",
  "imagen": "../../assets/img/jordanretro1.jpg"
},
{
  "categoria": "chamarra",
  "imagen": "../../assets/img/cham1.png"
},
{
  "categoria": "pans",
  "imagen": "../../assets/img/pans3.png"
},
{
  "categoria": "chamarra",
  "imagen": "../../assets/img/cham2.png"
},

{
  "categoria": "playeras",
  "imagen": "../../assets/img/play2.png"
}

  ]

  ngOnInit()
  {
   $("#todos").click(function(){
    var valor = $("#todos").text().toLowerCase().replace(/\s/g,",");
    if(valor == 'todos'){
      console.log("entro a todo en el if y su valor es" +valor);
      $('dif.filtros div').fadeIn('slow').removeClass('hidden'); 
    }
   });
    
   $("#todos").click(function(){
    var valor = $("#tenis").text().toLowerCase().replace(/\s/g,",");
    if(valor == 'tenis'){
      console.log("entro a todo en el if y su valor es" +valor);
      $('.filtros div').each(function(){
      if($('.filtros div').hasClass(valor)){
        console.log("entro a tenis");
        $('div.filtros div.tenis').fadeOut('slow').addClass('hidden');
      }else{
      console.log("entro a diferentes de tenis")
      $('div.filtros div.playeras').fadeOut('normal').addClass('hidden');
      $('div.filtros div.pans').fadeOut('normal').addClass('hidden');
      $('div.filtros div.chamarras').fadeOut('normal').addClass('hidden');
        
      }

      });
    }
   });


}

}
