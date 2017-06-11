import React from 'react';
import '../../css/reset.css';
import '../../css/fonts.css';
import './style.scss';
import Helmet from 'react-helmet';

class ZorgIndex extends React.Component {
  static propTypes = {
    data: React.PropTypes.object,
    routes: React.PropTypes.object
  };

  render () {
    const data = this.props.routes[this.props.routes.length - 1].page.data;

    return (
      <div>
        <Helmet
          title="Planl | Eenvoudig een afspraak met je huisarts"
        />

        <div id="hero">
          <div className="background" />

          <div className="container">
            <div className="content">

              Hallo

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ZorgIndex;