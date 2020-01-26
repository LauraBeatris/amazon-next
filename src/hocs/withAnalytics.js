import { Component } from 'react'
import ReactGA from 'react-ga'

export default () => Composed =>  {
    return class extends Component {
        static getInitialProps(ctx) { 
            return Composed.getInitialProps(ctx)
        }  

        componentDidMount(){ 
            if (process.env.NODE_ENV === 'production'){ 
                ReactGA.initialize(process.env.GA_ID)
                ReactGA.pageview(window.location.pathname)
            }
        }
        
        render(){ 
            return <Composed {...this.props} />
        }
    }
}