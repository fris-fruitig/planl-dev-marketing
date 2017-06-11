import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import Frontpage from '../components/Frontpage';

class Wrapper extends React.Component {
  static propTypes = {
    route: React.PropTypes.object,
    location: React.PropTypes.object
  };

  render () {
    const pathArray = this.props.location.pathname.split('/');
    const language = pathArray[1];

    return (
      <div>
        <Helmet
          title={`${config.siteTitle}`}
        />

        <Frontpage
          data={this.props.route.page.data}
          language={language}
        />
      </div>
    );
  }

}

export default Wrapper;