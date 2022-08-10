import { html, LitElement } from 'lit';

export class BlogSideBar extends LitElement {
  static get properties() {
    return {
      highlightedPosts: {
        type: Array,
      },

    };
  }

  render() {
    return html`<link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
        crossorigin="anonymous"
      />
      <aside class="p-4">
        <h3 class="mb-3 fs-5 text-uppercase">Posts destacados</h3>
        ${this.highlightedPosts.map(post => html`<div>${post.title}</div>`)}
        <hr class="my-4" />
        <h3 class="mb-3 fs-5 text-uppercase">Categorías</h3>
        <div class="alert alert-warning">
          TODO: incluír acá una lista de categorías
        </div>
      </aside>`;
  }
}

export default BlogSideBar;