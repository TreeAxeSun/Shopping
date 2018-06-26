import React, { Component } from 'react';

class ListItems extends Component {
  render() {
    return (
      <ol>
        {this.props.items.map(item => {
          return (
            <li>
              <div><img src={item.imageURL} width="150"/></div>
              <div>{item.name}</div>
              <div>{item.price}</div>
              <button onClick={() => this.props.onAddToCart(item)}>Add to Cart</button>
            </li>
          )
        })}
      </ol>
    )
  }
}

export default ListItems 