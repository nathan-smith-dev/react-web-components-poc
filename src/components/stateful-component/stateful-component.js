import React, { Component } from 'react';
import ListWrapper from '../list-wrapper/list-wrapper';

class StatefulComponent extends Component {
  state = {
    items: ['item1', 'item2', 'item3', 'item4']
  };

  render() {
    return (
      <div>
        <ListWrapper items={this.state.items} />
        <div>
          <button onClick={this.handleUpdateItems}>Update Items</button>
        </div>
      </div>
    );
  }

  handleUpdateItems = () => {
    this.setState({
      items: ['A', 'B', 'C', 'D']
    });
  };
}

export default StatefulComponent;
