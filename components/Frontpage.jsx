import React from 'react';
import '../css/reset.css';
import '../css/fonts.css';
import '../css/main.scss';
import 'font-awesome/scss/font-awesome.scss';
import 'zenscroll';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

class Index extends React.Component {
  static propTypes = {
    data: React.PropTypes.object,
    language: React.PropTypes.string
  };

  componentDidMount() {
    // Reveal magic
    // Import here because scrollreveal needs the window and that is unavailable in isomorphic
    try {
      const ScrollReveal = require('scrollreveal');
      ScrollReveal()
        .reveal('.project')
        .reveal('img');
    }
    catch (error ) {
      console.log(error); // eslint-disable-line
    }
  }

  render () {
    const data = this.props.data;

    return (
      <div>
        <div id="hero">
          <div className="background" />

          <div className="container">
            <div className="content">

              <div className="language-selector">
                <Link
                  to={prefixLink('/')}
                  className={this.props.language === '' && 'active'}
                >
                  NL
                </Link>
                <span> | </span>
                <Link
                  to={prefixLink('/en/')}
                  className={this.props.language === 'en' && 'active'}
                >
                  EN
                </Link>
              </div>

              <img
                src={require('../images/planl-logo.svg')}
                id="planl-logo-hero"
              />

              <h1>
                {data.hero.title.firstLine}
                <br />
                {data.hero.title.secondLine}
              </h1>
              <p>
                {data.hero.content}
              </p>

              <a
                className="button"
                href="#what-we-do"
              >
                <i
                  className="fa fa-terminal"
                  aria-hidden="true"
                />
                {data.hero.button}
              </a>
            </div>
          </div>
        </div>

        <div
          className="section container"
          id="what-we-do"
        >

          <div className="content">
            <div>
              <h1>{data.about.what.title}</h1>
              <p>
                {data.about.what.content}
              </p>

              <div>
                <a
                  className="button"
                  href="#projects-section"
                >
                  <i
                    className="fa fa-terminal"
                    aria-hidden="true"
                  />
                  {data.about.what.button}
                </a>
              </div>
            </div>

            <div>
              <h1>{data.about.way.title}</h1>
              <p>
                {data.about.way.content.firstParagraph}
              </p>
              <p>
                {data.about.way.content.secondParagraph}
              </p>
            </div>
          </div>

        </div>

        <div
          className="section container"
          id="partner-section"
        >

          <div className="content">
            <h1>{data.partners.title}</h1>
            <div id="partner-logos">
              <div>
                <img
                  src={require('../images/umcg-logo.png')}
                  id="umcg-logo"
                  width={144}
                  height={68}
                />
              </div>
              <div>
                <img
                  src={require('../images/ut-logo.png')}
                  id="ut-logo"
                  width={267}
                  height={21}
                />
              </div>
              <div>
                <img
                  src={require('../images/ggd-logo.png')}
                  id="ggd-logo"
                  width={105}
                  height={54}
                />
              </div>
              <div>
                <img
                  src={require('../images/healthicare-logo.png')}
                  id="healthicare-logo"
                  width={180}
                  height={48}
                />
              </div>
              <div>
                <img
                  src={require('../images/interreg-logo.png')}
                  id="interreg-logo"
                  width={155}
                  height={54}
                />
              </div>
              <div>
                <img
                  src={require('../images/cee-spot-logo.svg')}
                  id="cee-spot-logo"
                  width={155}
                  height={54}
                />
              </div>
            </div>

          </div>
        </div>



        <div
          className="section container"
          id="projects-section"
        >

          <div className="content">
            <h1>{data.work.title}</h1>

            <div
              className="project"
              id="project-planl-care"
            >
              <div className="project-content">
                <h1>{data.work.care.title}</h1>
                <p>{data.work.care.meta} <br /> {data.work.care.content}</p>
              </div>
              <div>
                <img
                  src={require('images/iphone-planl-care.png')}
                  height="217"
                  width="217"
                />
              </div>
            </div>

            <div
              className="project"
              id="project-meetyourtwin"
            >
              <div className="project-content">
                <h1>{data.work.meetyourtwin.title}</h1>
                <p>{data.work.meetyourtwin.content}</p>
              </div>
              <div>
                <img
                  src={require('images/iphone-meetyourtwin.png')}
                  height="217"
                  width="217"
                />
              </div>
            </div>

            <div
              className="project"
              id="project-ggd-twente"
            >
              <div className="project-content">
                <h1>{data.work.ggdtwente.title}</h1>
                <p>{data.work.ggdtwente.content}</p>
              </div>
              <div>
                <img
                  src={require('images/iphone-ggd.png')}
                  height="217"
                  width="217"
                />
              </div>
            </div>

          </div>
        </div>

        <div className="section container">
          <div className="content">

            <h1>{data.contact.title}</h1>
            <p>{data.contact.content}</p>
            <a href="mailto:info@planl.nl">
              <span className="medium underline">
                <i
                  className="fa fa-paper-plane"
                  aria-hidden="true"
                />
                info@planl.nl
              </span>
            </a>
            <p>
              <span className="bold">The Planl HQ</span> <br />
              Brouwerijstraat 1 <br />
              7523 XC Enschede <br />
              The Netherlands
            </p>

          </div>
        </div>

        <div id="planl-map" />
        <div id="footer">
          <div className="container">
            <img
              src={require('images/planl-logo.svg')}
              id="planl-logo-footer"
            />

            <div className="content">
              <h1>Together we turn your idea into reality.</h1>
              <hr />
              <h2>Custom iOS, Android & web development.</h2>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Index;