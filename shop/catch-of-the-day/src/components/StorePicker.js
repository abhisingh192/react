import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component{

   
    

    goToStore(event)  {
        event.preventDefault();
        const val = this.myInput.value;
        this.props.history.push(`/store/${val}`)

    };

    render() {
        return (
            <form className = "store-selector" onSubmit={this.goToStore.bind(this)}>   
                <h2>Please enter a Store</h2>
                <input 
                type="text" 
                ref={(value) => this.myInput = value}
                required 
                placeholder="Store Name" 
                defaultValue={getFunName()} 
                />
                <button type ="submit">Visit Store</button>
            </form>
        );
    }
}

export default StorePicker;