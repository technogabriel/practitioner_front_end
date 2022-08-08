import { html, css, LitElement } from "lit";
import { BlogPostModel } from "../models/BlogPostModel.js";

export class BlogPost extends LitElement {
    static get properties() {
        return {
            post: { type: BlogPostModel },
        };
    }

    static get styles() {
        return css`
            .post-author,
            .post-date{
            font-size: 0.8rem;
            }
        `;
    }

    highlightPost(e) {
        alert(`Se destacó el post:  ${ this.post.title }."`);
       }

    render() {
        return html`
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"/>

        <article>
            <div class="d-flex align-items-baseline justify-content-between">
                <h3>${this.post.title}</h3>
                <div class="ml-5">
                    ${this.post.categories.map(
            category =>
                html`<span class="badge bg-secondary mx-1">${category}</span>`
        )}
                </div>
            </div>
            <p class="text-muted mb-0 post-author">por ${this.post.author}</p>   
            <p>publicado el ${this.post.date.toFormat("dd' de 'MMMM")}</p>

            ${this.post.highlighted ? html`<span>Post destacado</span>` : ''}

            <p>${this.post.content}</p>
        </article> 
        <button @click="${this.highlightPost}">Destacar</button>   
        `;
    }
}