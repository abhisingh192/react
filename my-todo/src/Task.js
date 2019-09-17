import React from 'react'
import { Button, ListGroup } from 'react-bootstrap';


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
                <li key={i} data-key={i}>{ x}
                    <Button variant = "primary" bsPrefix="mr-3" onClick={this.editTask.bind(this,i)}>Edit</Button>
                    <Button variant = "danger" bsPrefix="mr-3" onClick={this.deleteTask.bind(this,i)}>Delete</Button>
                </li>
            )
        })
    
            return (
                <ListGroup>
                    <ListGroup.Item bsPrefix="mt-3">
                         {temp1}
                    </ListGroup.Item>

                </ListGroup>
                
                   
            );

        

        
    }
}

export default Task;