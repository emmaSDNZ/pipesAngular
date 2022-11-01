
import { Pipe, PipeTransform } from '@angular/core';

//el decordador me dice que es un pipe 
@Pipe({
    //defino la propiedad name: es el nombre del pipe - OBLIGATOTRIO
    name: 'mayusculas'
})

//todos los pipes necesitan el metodo PipeTransform
// PipeTransform ejecuta el metodo cuando se usa el pipe
export class MayusculasPipe implements PipeTransform {


    //tranform: retora una transformacion en donde se llame
    //recibe argumentos:
    // valor: STR <- el valor se por el valor en la llamada.
    // | pipe: arguments: argumentes1 : argumentes2(opcional)

    // {{ "nosotros" | mayusculas : false}}
    transform( valor: string, enMayusculas: boolean = true ): string {

        // if ( enMayusculas ) {
        //     return valor.toUpperCase();
        // } else {
        //     return valor.toLocaleLowerCase();
        // }
        return ( enMayusculas ) 
            ? valor.toUpperCase() 
            : valor.toLocaleLowerCase();
    }

}