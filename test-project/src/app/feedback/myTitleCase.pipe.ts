import { TitleCasePipe } from '@angular/common';
import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'titleCase'
})

export class MyTitleCasePipe implements PipeTransform{
    transform(value: any) {
        if(value){
            return this.titleCase(value);
        }
        return null;
    }
    private titleCase(str:string){
        let words: string[] = [];
        words = this.createWords(str);
        for(let i = 0; i < words.length; i++){
            let word = words[i];
            word = word.toLowerCase();
            console.log(word);
            if(word == "the" || word == "of"){
                if(i === 0){
                    word = word.substring(0,1).toUpperCase()+word.substring(1,word.length);
                }
            }else{
                word = word.substring(0,1).toUpperCase()+word.substring(1,word.length);
            }
            words[i] = word;
        }
        return this.combineWords(words);
    }
    private createWords(str:string){
        let words: string[] = [];
        while(str.indexOf(" ")!=-1){
            const strIndex=str.indexOf(" ");
            if(strIndex != 0){
                words.push(str.substring(0,strIndex));
            }
            str = str.substring(strIndex+1);
        }
        words.push(str);
        return words
    }
    private combineWords(words: string[]) {
        let finalStr = "";
        words.forEach(word =>{
            finalStr += word;
            finalStr += " ";
        });
        finalStr = finalStr.substring(0, finalStr.length);     
        return finalStr; 
    }
}


