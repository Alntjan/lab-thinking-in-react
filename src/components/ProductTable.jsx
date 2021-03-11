import React, {Component} from 'react';
import ProductRow from './ProductRow';

class ProductTable extends Component {

  render() { 
    const {products} = this.props
    return <div className='product-table-container'>
     <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          return <ProductRow key={product.id} name={product.name} price={product.price} stock={product.stocked}/>
        })}
      </tbody>
    </table>
      <ProductRow />
  </div>
  }
}

export default ProductTable;