import React, { Component } from 'react';
import ReactGA from 'react-ga';

export default () => Composed => {
    class withAnalytics extends Component {
        componentDidMount() {
            if (process.env.NODE_ENV === 'production') {
                ReactGA.initialize(process.env.GA_ID);
                ReactGA.pageview(window.location.pathname);
            }
        }

        render() {
            return <Composed {...this.props} />;
        }
    }

    if (Composed.getInitialProps)
        withAnalytics.getInitialProps = ctx => {
            return Composed.getInitialProps(ctx);
        };

    return withAnalytics;
};
