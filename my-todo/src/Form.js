import React from 'react'
import { Button } from 'react-bootstrap';


class Form extends React.Component {

    addTask(event){
        event.preventDefault();
        let val = this.myRef.value;
        this.props.addTaskToState(val);
        this.myRef.value = "";   
    }

    render() {
        return (
            <form>
                <input 
                type="text" 
                ref={value => this.myRef=value}
                placeholder="enter a task"/>
                <Button variant = "success" bsPrefix="mr-3" onClick={this.addTask.bind(this)}>Add</Button> 
            </form>
                
               
        );
    }
}

export default Form;