import { LitElement, html, customElement,css } from 'lit-element';

@customElement('app-footer')
export class Footer extends LitElement {

    static get styles() {
        return css`
          footer{
              position:fixed;
              left:0;
              bottom:0;
              background-color: #999;
              width:100%;
              padding:5px 0px;
              margin-top:20px;
          }
          p{
              float:right;
              padding-right:5%;
              font-weight:bold;
          }
        `;
      }

    render(){
        return html
        `<footer><p>@2020 All Rights Reserved<p></footer>`;
    }
}   