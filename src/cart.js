import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Cart extends Component {
  render() {
    return (
      <div>
        <Link to="/">Back to the order page</Link>
        {this.props.items.length > 0 && 
         <div>
          <ul>
            {this.props.items.map((item) => (
              <li>
                <div>{item.name}</div>
                <div>{item.price}</div>
                <button onClick={() => this.props.onRemoveFromCart(item)}>Remove From Cart</button>
              </li>
            ))}
          </ul>
          <h2>Total: {this.props.items.reduce((acc, curr) => { return acc + curr.price }, 0)}</h2>
          </div>
        }
        {this.props.items.length === 0 && 
          <div>Your cart is empty</div>
        }
        
      </div>
    )
  }
}

export default Cart