import AbstractView from './absctract-view';

export class FooterView extends AbstractView {
  public getTemplate(): string {
    return `<footer>
                <div class="footer__row">
                  <a href="https://github.com/SonKn1ght" class="footer__link-git">
                    <img src="./assets/img/github-icon.svg" alt="github icon" width="40">
                   </a>
                  <a href="https://rs.school/js/" class="footer__link-rss">
                    <img src="./assets/img/rs_school_js.svg" alt="rs school" width="110">
                  </a>
                 </div>
              <p class="footer__text">SonKn1ght, 2020</p>
            </footer>`;
  }
}
