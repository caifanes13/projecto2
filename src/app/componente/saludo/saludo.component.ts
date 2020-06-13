import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ny-org-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent {

  @Input() nombre:string;
  @Output() saludar: EventEmitter<String> = new EventEmitter<String>();

  public nombres: Array<String>= [];
  public nombreLista: string=" ";

  constructor() { 
  }

  onClick(){
    this.saludar.emit('Hola desde el componente hijoo!');
  }


  onButtonClick(){
    this.nombres.push((document.getElementById("nombre1") as HTMLInputElement).value);
    //this.nombreLista = '';
    console.log(this.nombres);
    (document.getElementById("nombre1") as HTMLInputElement).value="";
    (document.getElementById("nombre1") as HTMLInputElement).focus();



    //console.log(this.nombres);
  }
  }
  