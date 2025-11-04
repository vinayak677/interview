const { Component } = require("react");

class ErrorBoundary extends Component{
    constructor(props){
       super(props);
       this.state = {hasError: false}
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error){
        console.log(error)
    }

    render(){
        if(this.state.hasError){
            return <h2>has some error value</h2>
        }
        return this.props.children
    }

}
export default ErrorBoundary