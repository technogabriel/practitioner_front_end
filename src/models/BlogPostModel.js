import { DateTime } from "luxon";

export class BlogPostModel{
    constructor(data){
        this.id = data.id;
    this.title = data.title;
    this.author = data.author;
    this.date = DateTime.fromFormat(data.date, 'dd/MM/yyyy', {
      locale: 'es-AR',
    });
    this.content = data.content;
    this.categories = data.categories;
    this.highlighted = data.highlighted;
 
    }
}