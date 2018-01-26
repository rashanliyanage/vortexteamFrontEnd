import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtersp'
})
export class FilterPipeSp implements PipeTransform {

  transform( organizerArray: any, organizername?: any): any {
    if(organizername === undefined){return  organizerArray}
    return  organizerArray.filter(function(organizer){
        return organizer.name.toLowerCase().includes(organizername.toLowerCase());

    });
  }

}
