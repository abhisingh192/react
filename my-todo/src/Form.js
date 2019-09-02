import React from 'react'

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
                <button onClick={this.addTask.bind(this)}>Add</button> 
            </form>
                
               
        );
    }
}

export default Form;