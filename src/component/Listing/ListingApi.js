import React,{Component} from 'react';
import axios from 'axios';
import ListingDisplay from './ListingDisplay';

const url = "https://back-zom.herokuapp.com/restaurents?mealtype="

class ListingApi extends Component{
    constructor(props){
        super()

        this.state={
            hotelist:''
        }
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        Filter Here
                    </div>
                    <div className="col-md-10">
                        <ListingDisplay listdata={this.state.hotelist}/>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){
       var mealtype = this.props.match.params.id
       axios.get(`${url}${mealtype}`)
       .then((response) =>  {this.setState({hotelist:response.data})})
    }
}

export default ListingApi;