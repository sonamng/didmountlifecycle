import React,{Component} from "react";
class App extends Component{
    constructor(){
        super();
        console.log("constructor");
    }

    componentDidMount(){
        console.log("componentDidMount");
    }

    render(){
        console.log("render");
        return(
            <div>
                <h1>life cycle method</h1>

            </div>
        )
    }
}
export default App;




