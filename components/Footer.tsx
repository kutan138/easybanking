/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Link from "next/link";

const Footer: NextPage = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-2">
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
          <div className="col-xs-12 col-md-7">
            <div className="footer__link">
              <ul>
                <li>
                  <Link href="/">About Us</Link>
                </li>
                <li>
                  <Link href="">Contact</Link>
                </li>
                <li>
                  <Link href="">Blog</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link href="/">Careers</Link>
                </li>
                <li>
                  <Link href="">Support</Link>
                </li>
                <li>
                  <Link href="">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-md-3">
            <div className="footer__cta">
              <button className="btn btn--primary">Request Invite</button>
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
