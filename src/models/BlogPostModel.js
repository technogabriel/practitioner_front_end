import { DateTime } from "luxon";

export class BlogPostModel{
    constructor(data){
        this.id = data.id;
    this.title = data.title;
    this.author = data.author;
    this.date = DateTime.fromISO(data.created_at, {
      locale: 'es-AR',
    });
    this.content = data.content;
    this.categories = data.categories;
    this.highlighted = data.highlighted;
 
    }
}