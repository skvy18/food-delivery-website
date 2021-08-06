import React,{Component} from 'react';
import './Search.css';
import {withRouter} from 'react-router-dom';

const lurl = "https://back-zom.herokuapp.com/location";
const rurl = "https://back-zom.herokuapp.com/restaurents?city=";

class Search extends Component{
    constructor(){
        super()

        this.state={
            location:'',
            restaurents:''
        }
    }

     // Display city data 
    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.city} key={item.city}>
                       {item.name}|{item.city_name}
                    </option>
                )
            })
        }
    }

    // Display restaurent data 
    renderRestaurent = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item._id}>
                        {item.name} | {item.locality}
                    </option>
                )
            })
        }
    }

    // Load restaurent wrt to City 
    handleCity = (event) => {
        const cityid = event.target.value
        const  rrurl = `${rurl}${cityid}`
        fetch(rrurl,{Method:'GET'})
        .then((res) =>  res.json())
        .then((data) => {this.setState({restaurents:data})})
    }

     
    render(){
        return(
            <div className="imageContainer">
                <div id="logo">
                    e!
                </div>
                <div className="heading">
                    Find the best restaurants,cafes, bars
                </div>
                <div className="locationSelector">
                    <select className="locationDropDown" onChange={this.handleCity}>
                        <option>----SELECT CITY---------</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select className="locationDropDown" onChange={this.handleRest}>
                        <option>----SELECT RESTAURENTS---------</option>
                        {this.renderRestaurent(this.state.restaurents)}
                    </select>
                   
                </div>
            </div>
        )
    }

    // Call City Api on Page Load
    componentDidMount(){
        fetch(lurl,{Method:'GET'})
        .then((res) =>  res.json())
        .then((data) => {this.setState({location:data})})
    }
}

export default withRouter(Search);
