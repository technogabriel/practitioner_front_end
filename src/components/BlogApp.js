import { LitElement, html, css } from 'lit';
import { BlogPostModel } from '../models/BlogPostModel.js';


const posts = [
  {
    id:1,
    title: 'Creando una app con components',
    author: 'Adan',
    date :'03/08/2022',
    content: 'Contenido del Post ...',
    categories: ['Desarrollo web', 'LitElement'],
    highlighted: true, 
  },
  {
    id:2,
    title: 'Otro post de mi app con components',
    author: 'Gabriel',
    date :'08/08/2022',
    content: 'Contenido del Post ...',
    categories: ['Desarrollo web', 'LitElement'],
    highlighted: false, 
  },
].map(data => new BlogPostModel(data));

export class BlogApp extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      /* :host {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: stretch;
        height: 100%;
      }

      header {
        background-color: #1d83d6;
        padding: 1rem;
      }

      .main-content {
        padding: 1rem 3rem;
      }

      .articles {
        width: 70%;
      }

      aside {
        background-color: #fca8d7;
        width: 30%;
      }

      footer {
        background-color: #262c30;
      }

      .main-content {
        display: flex;
        flex-direction: row;
      } */

    `;
  }

  updated(changedProperties){
    changedProperties.forEach((oldValue, key) => {
      console.log("la propiedad '"+ key + "' cambio de '" + oldValue + "' a " + this[key])
    });
  }

  constructor() {
    super();

  }

  toggleHighLightPost(psotId){
    this.post = this.post.map(post => {
        if(post.id === psotId){
            return { ...this.post, highlighted: !post.highlighted};
        }
        return post;
    });
}


  render() {
    return html`
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">

    <header class ="text-bg-primary pt-5 pb-4">
      <div class="container">
        <div class="row">
          <div class="col">
            <h1>titulo del blog</h1>
          </div>
        </div>
      </div>
    </header>

    <div class="container min-vh-100">
      <div class="row">
        <div class="col-12 col-md8 col-lg-9 articles">
          ${posts.map(
            post =>
              html `<div class="mt-4 mb-5"></div><blog-post .post=${post}></blog-post>
          </div>`
          )}
        </div>
        <aside class="col-4 col-lg-3 d-none d-md-block">Barra Lateral</aside>
      </div>
    </div>
    <footer class="text-bg-dark">
      <div class="container">
        <div class="row">
          <div class="col">Footer</div>
        </div>
      </div>
    </footer>
    `;
  }
}

export default BlogApp;
