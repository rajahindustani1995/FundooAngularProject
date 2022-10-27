import { Pipe, PipeTransform } from '@angular/core';
import { NotesService } from '../Services/notesService/notes.service';

@Pipe({
  name: 'filters'
})
export class FiltersPipe implements PipeTransform {

  transform(value:any, args?:any) {
    
    if(!args ){
      return value;
    }else{
      args=args;
    }
    //console.log(value)
    return value.filter((note:any) =>{
      return note.title.toLowerCase().includes(args) || note.discription.toLowerCase().includes(args);
    })
    
  
   }
}
