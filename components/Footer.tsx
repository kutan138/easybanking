/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-3">
            <div className="footer__left">
              <div className="footer__logo">
                <img src="/images/logo-dark.svg" alt="" />
              </div>
              <div className="footer__social">
                <div className="footer__social__item">
                  <img src="/images/icon-facebook.svg" alt="" />
                </div>
                <div className="footer__social__item">
                  <img src="/images/icon-instagram.svg" alt="" />
                </div>
                <div className="footer__social__item">
                  <img src="/images/icon-twitter.svg" alt="" />
                </div>
                <div className="footer__social__item">
                  <img src="/images/icon-youtube.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="footer__link">
              <ul>
                <li>
                  <a href="/">About Us</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/">Careers</a>
                </li>
                <li>
                  <a href="">Support</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-md-3">
            <div className="footer__cta">
              <a className="btn btn--primary">Request Invite</a>
              <div className="footer__copyright">
                © EasyBank. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
