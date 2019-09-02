import React from 'react'

class Task extends React.Component {
    
    deleteTask(key){
    this.props.delTaskFromState(key);   
}

    editTask(key){

    }


    
    render() {
        const temp = this.props.taskList;
        const temp1 = temp.map( (x,i) => {
            return(
                <li key={i} data-key={i}>{x}
                    <button onClick={this.editTask.bind(this,i)}>Edit</button>
                    <button onClick={this.deleteTask.bind(this,i)}>Delete</button>
                </li>
            )
        })
    
            return (
                <ul>
                  {temp1}
                </ul>
                   
            );

        

        
    }
}

export default Task;