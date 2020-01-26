import { Component } from 'react'
import ReactGA from 'react-ga'

export default () => Composed =>  
    class extends Component { 
        static getInitialProps(ctx) { 
            return Composed.getInitialProps(ctx)
        }  

        componentDidMount(){ 
            console.log('Page View')
            ReactGA.initialize("ID_ANALYTICS")
            ReactGA.pageview(window.location.pathname)
        }
        
        render(){ 
            return <Composed {...this.props} />
        }
    }
