import React, {Component} from 'react';
import axios from 'axios';

let info = async()=>{
let response= await axios.get('https://swapi.dev/api/people/');
    return await response;
}


info()

export default class Content extends Component {
    
    render() {
        return (

            `${info.length}`

        );
      }
}

