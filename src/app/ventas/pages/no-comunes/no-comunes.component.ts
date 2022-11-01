import { Component,} from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent  {

  constructor() { }

    // i18nSelect
    nombre: string = 'Susana';
    genero: string = 'femenino';
   
    invitacionMapa = {
      'masculino': 'invitarlo',
      'femenino' : 'invitarla'
    }

      // i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Hernando', 'Eduardo','Fernando'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarCliente(){
    this.nombre = "FRANCO"
    this.genero = "masculino"
  }

  borrarCliente(){
    this.clientes.pop()
  }

    // KeyValue Pipe
    persona = {
      nombre: 'Fernando',
      edad: 35,
      direccion: 'Ottawa, Canadá'
    }

    // JsonPipe
    heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
  ]


    
  // Async Pipe
 // miObservable = interval(); // 0,1,2,3,4,5,6,

  valorPromesa = new Promise( (resolve, reject) => {

    setTimeout(() => {
      resolve( 'Tenemos data de promesa' );
    }, 3500 );

  });

}
