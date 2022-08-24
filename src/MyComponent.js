import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <body>
          Yo wat up {this.props.name}
        </body>
      </div>
    );
  }
}

export default MyComponent;