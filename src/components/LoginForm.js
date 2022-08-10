import { html, LitElement } from 'lit';
import { authorization } from '../auth/Authorization.js';

export class LoginForm extends LitElement {
  static get properties() {
    return {
      showForm: {
        type: Boolean,
        attribute: false,
      },
    };
  }

  async handleLogin(event) {
    event.preventDefault();
    const { form } = event.submitter;
    const username = form.querySelector('#login-username').value;
    const password = form.querySelector('#login-password').value;
    await authorization.login(username, password);
    this.dispatchEvent(new CustomEvent('login'));
  }


  render() {
    return html`<link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
        crossorigin="anonymous"
      />
      <div class="text-end">
        ${this.showForm
          ? html`<form @submit=${this.handleLogin}>
              <div class="row mb-2 no-gutter">
                <div class="col ps-0">
                  <label for="login-username" class="form-label visually-hidden"
                    >Email</label
                  >
                  <input
                    type="text"
                    name="username"
                    class="form-control form-control-sm"
                    id="login-username"
                    placeholder="Username"
                  />
                </div>
                <div class="col ps-0">
                  <label
                    for="login-form-password"
                    class="form-label visually-hidden"
                    >Password</label
                  >
                  <input
                    type="password"
                    name="password"
                    class="form-control form-control-sm"
                    id="login-password"
                    placeholder="Password"
                  />
                </div>
              </div>
              <button type="submit" class="btn btn-light btn-sm text-primary">
                Iniciar sesión
              </button>
            </form>`
          : html`<button
              class="btn btn-link btn-small text-light"
              @click=${() => {
                this.showForm = !this.showForm;
              }}
            >
              Iniciar sesión
            </button> `}
      </div> `;
  }
}

export default LoginForm;