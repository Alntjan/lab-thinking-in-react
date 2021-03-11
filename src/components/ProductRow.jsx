import React, {Component} from 'react';

class ProductRow extends Component {

  render() { 
    const {name, price, stock} = this.props
    return <tr style={{color: stock ? 'black' : 'red' }}><td>{name}</td><td>{price}</td></tr>
  }
}

export default ProductRow;