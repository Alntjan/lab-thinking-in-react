import React, { Component } from 'react';
import './styles.css';

export default class ProductRow extends Component {
  render() {
    const { name, price, stocked } = this.props;
    return (
      <div>
        <p className={stocked ? 'outOfStock' : ''}>
          {name} {price}
        </p>
      </div>
    );
  }
}
