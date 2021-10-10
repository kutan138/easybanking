/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { Layout } from "../components";

const Home: NextPage = () => {
  return (
    <Layout>
      <section className="hero">
        <div className="container">
          <div className="hero__image"></div>
          <div className="hero__text">
            <h1>Next generation digital banking</h1>
            <p>
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <button className="btn btn--primary">Request Invite</button>
          </div>
        </div>
      </section>
      <section className="feature">
        <div className="container">
          <div className="feature__info">
            <h2>Why choose Easybank ?</h2>
            <p>
              We leverage Open Banking to turn your bank account into your
              financial hub. <br /> Control your finances like never before.
            </p>
          </div>
          <div className="feature__list">
            <div className="feature__item">
              <div className="feature__icon">
                <img src="/images/icon-budgeting.svg" alt="" />
              </div>
              <div className="feature__title">Online Banking</div>
              <div className="feature__desc">
                Our modern web and mobile applications allow you to keep track
                of your finances wherever you are in the world.
              </div>
            </div>
            <div className="feature__item">
              <div className="feature__icon">
                <img src="/images/icon-budgeting.svg" alt="" />
              </div>
              <div className="feature__title">Simple Budgeting</div>
              <div className="feature__desc">
                See exactly where your money goes each month. Receive
                notifications when you’re close to hitting your limits.
              </div>
            </div>
            <div className="feature__item">
              <div className="feature__icon">
                <img src="/images/icon-budgeting.svg" alt="" />
              </div>
              <div className="feature__title">Fast Onboarding</div>
              <div className="feature__desc">
                We don’t do branches. Open your account in minutes online and
                start taking control of your finances right away.
              </div>
            </div>
            <div className="feature__item">
              <div className="feature__icon">
                <img src="/images/icon-budgeting.svg" alt="" />
              </div>
              <div className="feature__title">Open API</div>
              <div className="feature__desc">
                Manage your savings, investments, pension, and much more from
                one account. Tracking your money has never been easier.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="article">
        <div className="container">
          <h2>Latest article</h2>
          <div className="article__list row">
            <div className="col-sm-6 col-md-3">
              <div className="article__item">
                <div className="article__image">
                  <img src="https://codercoder-easybank.pages.dev/images/image-currency.jpg" />
                </div>
                <div className="article__body">
                  <div className="article__author">By Claire Robinson</div>
                  <div className="article__title">
                    Recive money in any currency with no fees
                  </div>
                  <div className="article__desc">
                    The world is getting smaller and we&apos;re becoming more
                    mobile. So why should you be force to only receive money in
                    single
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="article__item">
                <div className="article__image">
                  <img src="https://codercoder-easybank.pages.dev/images/image-restaurant.jpg" />
                </div>
                <div className="article__body">
                  <div className="article__author">By Wilson Hutton</div>
                  <div className="article__title">
                    Treat yourself without worrying about money
                  </div>
                  <div className="article__desc">
                    Our simple budgeting feature allows you to separate out your
                    spending and set realistic limits each month. That means you
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="article__item">
                <div className="article__image">
                  <img src="https://codercoder-easybank.pages.dev/images/image-plane.jpg" />
                </div>
                <div className="article__body">
                  <div className="article__author">By Claire Robinson</div>
                  <div className="article__title">
                    Take your Easybank card wherever you go
                  </div>
                  <div className="article__desc">
                    We want you to enjoy your travels. This is why we don’t
                    charge any fees on purchases while you’re abroad. We’ll even
                    show you
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="article__item">
                <div className="article__image">
                  <img src="https://codercoder-easybank.pages.dev/images/image-confetti.jpg" />
                </div>
                <div className="article__body">
                  <div className="article__author">By Claire Robinson</div>
                  <div className="article__title">
                    Our invite-only Beta accounts are now live!
                  </div>
                  <div className="article__desc">
                    After a lot of hard work by the whole team, we’re excited to
                    launch our closed beta. It’s easy to request an invite
                    through the site
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
