import { style } from "@angular/animations";

export class Tag {
    static readonly ANGULAR = new  Tag('Angular', 'red');
    static readonly TYPESCRIPT = new Tag('Typescript', 'Navy');
    static readonly REACT = new Tag('React', 'Blue');
    static readonly JAVASCRIPT = new Tag('Javascript', 'Orange');
    static readonly SPRING_BOOT = new Tag('Spring Boot', 'Green');
    static readonly JAVA = new Tag('Java', 'DarkOrange');


    private constructor(private readonly key: string, public readonly color:string){

    }
    toString(){
        return this.key;
    }
}