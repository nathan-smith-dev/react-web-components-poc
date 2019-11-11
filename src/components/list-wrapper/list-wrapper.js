import React, { Component } from 'react';
import 'ns-web-components-poc';

export class ListWrapper extends Component {
  constructor(props) {
    super(props);
    this.listRef = React.createRef();
  }

  componentDidMount() {
    this.listRef.current.items = this.props.items;
    this.listRef.current.addEventListener('listEmitted', event =>
      console.log('List emitted', event.detail)
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.items !== prevProps.items) {
      this.listRef.current.items = this.props.items;
    }
  }

  render() {
    return <ns-list ref={this.listRef}></ns-list>;
  }
}

export default ListWrapper;
