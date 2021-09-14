import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'shorten'
})

export class ShortenPipe implements PipeTransform{
    transform(value: any, limit?: number) {
        if(value){
            let lastChar = (limit)?limit:50;
            return value.substring(0,lastChar)+"...";
        }else{
            return null;
        }
    }
    
}