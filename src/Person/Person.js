import React,{Component} from 'react'
import './Person.css'

class Person extends Component{

    render(props){
        return (
            <div className='Person'>
    <p1>Name : {this.props.name}</p1><br/>
    <p1>Age : {this.props.age}</p1>
    </div>
        )
    }
}

export default Person;