import React from 'react';
import AddFish from './AddFish';


class Inventory extends React.Component{
    render() { 
        return (
            <div className="inventory">
                <AddFish addFish={this.props.addFish}/>                
                <button onClick={this.props.loadSampleFishes}>load samples</button>
            </div>
        );
    }
}

export default Inventory;