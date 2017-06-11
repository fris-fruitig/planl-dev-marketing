import ReactGA from 'react-ga';
ReactGA.initialize('UA-87795102-2');

exports.onRouteUpdate = (state, page, pages) => {
  ReactGA.pageview(state.pathname);
};