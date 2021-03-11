import React, { Component } from 'react';
import ProductRow from './ProductRow';
export default class ProductTable extends Component {
  render() {
    return (
      <div>
        <div>
          <p>name: price:</p>
        </div>

        {this.props.products.map((product) => {
          return <ProductRow key={product.name} {...product} />;
        })}
      </div>
    );
  }
}
