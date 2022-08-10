import { LitElement, html, css } from 'lit';
import {authorization} from '../auth/authorization.js';
import {getPosts, updatedPost} from '../backend/posts.js';


export class BlogApp extends LitElement {
  static get properties() {
    return {
      title: {
        type: String,
      },
      posts: {
        type: Array,
        attribute: false,
      },
      loading: {
        type: Boolean,
        attribute: false,
      },
    };
  }

  constructor() {
    super();
    this.title = 'My app';
    this.posts = [];
    this.loading = false;
    this.isLoggedIn = authorization.isLoggedIn();
  }

  async connectedCallback(){
    super.connectedCallback();

    this.loading = true;
    const posts = await getPosts();
    this.posts = posts;
    this.loading = false;
  }

  
  replacePost(postId, updatedPost){
    this.posts = this.posts.map(post =>{
      if(post.id === postId){
        return updatedPost;  
      }
      return post;
    });
  }

  toggleHighlightPost(postId) {
    this.posts.forEach(async post => {
      if (post.id === postId){
        const updatePost = await updatedPost(postId, {
          highlighted: !post.highlighted,
        });
        this.replacePost(postId, updatePost);
      }
    });
  }

  handleLogin(){
    this.isLoggedIn = true;
  }

  render() {
    return html`
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
        crossorigin="anonymous"
      />
      <div class="h-100 d-flex flex-column">
        <header class="text-bg-primary">
          <div class="container">
            <div class="row align-items-center">
              <div class="col pt-5 pb-4">
                <h1>Título del blog</h1>
              </div>
              <div class="col-6 col-lg-4">
                ${!this.isLoggedIn
                  ? html`<login-form @login=${this.handleLogin}></login-form>`
                  : ''}
              </div>
            </div>
          </div>
        </header>
        <div class="container py-4">
          <div class="row">
            <div class="col-12 col-md-8 col-lg-9 articles">
              ${this.loading
                ? html`<div class="mt-4 mb-5">Cargando posts...</div>`
                : this.posts.map(
                    post =>
                      html`<div class="mt-4 mb-5">
                        <blog-post
                          .post=${post}
                          @toggle-highlight-post="${() =>
                            this.toggleHighlightPost(post.id)}"
                        >
                        </blog-post>
                      </div>`
                  )}
            </div>
            <div class="col-4 col-lg-3 d-none d-md-block">
              <blog-sidebar
                .highlightedPosts=${this.posts.filter(post => post.highlighted)}
              ></blog-sidebar>
            </div>
          </div>
        </div>
        <footer class="text-bg-dark mt-auto py-5">
          <div class="container">
            <div class="row">
              <div class="col">
                Blog creado con 💙 durante el curso BBVA Practitioner Frontend.
              </div>
            </div>
          </div>
        </footer>
      </div>
    `;
  }
}

export default BlogApp;