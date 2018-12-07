import React, { Component } from 'react';

export default class NoMatch extends Component {
  render() {
    return (
      <div style={{textAlign: 'center', background: '#fff', width: '100%'}}>
        <img src={require('./404.jpg')} alt="404" style={{ height: '100%'}} />
      </div>
    );
  }
}