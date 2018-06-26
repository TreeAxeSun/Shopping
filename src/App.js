import React, { Component } from 'react';
import ListItems from './listItems'
import './App.css';
import { Route, Link } from 'react-router-dom'
import Cart from './cart.js'


class App extends Component {
  state = { 
    items: [
      {
        name: " 貂蝉キュベレイ",
        price: 1080, 
        imageURL: "http://bandai-hobby.net/images/153_2176_s_869u3dmihvnydr4se9ib5u7c88za.jpg",
        description: "麗しき女将軍”貂蝉キュベレイが装いを新たに再キット化！"
      },
      {
        name: "黄蓋グフ",
        price: 1080,
        imageURL: "http://bandai-hobby.net/images/153_2175_s_t7xk210lwrgerg6perv1hjufmzaj.jpg",
        description: "歴戦の老将軍 黄蓋グフが装いを新たに再キット化！"
      },
      {
        name: "カクアシュタロン",
        price: 1080,
        imageURL: 'http://bandai-hobby.net/images/153_2174_s_tiljdj9ieura9eg4rn6iik0gtkab.jpg',
        description: "「冷徹なる暗殺者」賈詡アシュタロンが装いを新たに再キット化！"
      },
      {
        name: "袁紹バウ",
        price: 1080,
        imageURL: 'http://bandai-hobby.net/images/153_2173_s_fqx4d6ykj0u9ue3wg34embevbewc.jpg',
        description: "河北の雄、袁紹バウが装いを新たに再キット化！"
      }
    ],
    cart: []
  }

  addToCart = (item) => {
    this.setState(state => {
      return {cart: state.cart.concat(item)}
    })
  }

  removeFromCart = (item) => {
    this.setState(state => {
      const newArray = [...state.cart]
      newArray.splice(newArray.indexOf(item), 1)
      return { cart: newArray }
    })
  }

  render() {
    return (
      <div>
        <Route path="/cart" render={({ history }) => (
          <Cart items={this.state.cart} onRemoveFromCart={this.removeFromCart}/>
        )}/>

        <Route exact path="/" render={() => {
          return(
            <div>
              <Link to="/cart">You have {this.state.cart.length} items in your cart.</Link>
              <ListItems items={this.state.items} onAddToCart={this.addToCart}/>
            </div>
          )}}/>
      </div>
    );
  }
}

export default App;
