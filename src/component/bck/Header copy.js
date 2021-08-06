import React,{Component} from "react";

class Header extends Component{
    constructor(){
        super()

        this.state={
            title:"my React App",
            keyword:"user text here"
        }
    }
    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({keyword:event.target.value?event.target.value:'User text Here'})
    }
    render(){
        return(
            <React.Fragment>
                <center>
                    <h1>{this.state.title}</h1>
                    <input type="text" onChange={this.handleChange}/>
                    <h2>{this.state.keyword}</h2>
                    <hr/>
                </center>
            </React.Fragment>
        )

    }
}

export default Header;
