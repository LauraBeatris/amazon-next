import React, { Component } from 'react';
import ReactGA from 'react-ga';

export default () => Composed => {
    return class extends Component {
        static getInitialProps(ctx) {
            if (Composed.getInitialProps) return Composed.getInitialProps(ctx);
            return {};
        }

        componentDidMount() {
            if (process.env.NODE_ENV === 'production') {
                ReactGA.initialize(process.env.GA_ID);
                ReactGA.pageview(window.location.pathname);
            }
        }

        render() {
            return <Composed {...this.props} />;
        }
    };
};
