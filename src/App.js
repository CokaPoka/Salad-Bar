import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import './App.css';
import PublicRoute from './layout/public/PublicRoute'
import Backdrop from './layout/public/components/Backdrop/Backdrop'
import Toolbar from './layout/public/components/Toolbar/Toolbar'
import SideDrawer from './layout/public/components/SideDrawer/SideDrawer'
// import Register from './layout/public/components/Register/Register'
import PrivateRoute from './layout/private/PrivateRoute';
import AddIngredient from './layout/private/components/AddIngredinet/AddIngredient'
import AllIngredients from './layout/private/components/Ingrediants/AllIngredients'
import SaladMaker from './layout/private/components/SaladMaker/SaladMaker';
import { getIngredient } from './Service/service';
import SaladsPreview from './layout/private/components/SaladsPreview/SaladsPreview';
import Home from './layout/public/components/Home/Home';
import { isLogin } from './Service/AuthService';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideDrawerOpen: false,
      ingredients: [],
      filteredIngredients: [],
      cartItems: [],
      sortType: "asc",
    }

    this.drawerToggleClickHandler = this.drawerToggleClickHandler.bind(this);
    this.backdropClickHandler = this.backdropClickHandler.bind(this);
    this.sort = this.sort.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleAddCart = this.handleAddCart.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
    this.removeAllIngFromBasket = this.removeAllIngFromBasket.bind(this);

  }

  componentDidMount() {
    getIngredient().then(res => res.data)
    .then(data => {
      let sorted = data.ingredients.sort(function (a, b) {
        return a.calories - b.calories
      })
      this.setState({
        ingredients: sorted,
        filteredIngredients: sorted
      })
      if (localStorage.getItem('cartItems')) {
        this.setState({ cartItems: JSON.parse(localStorage.getItem('cartItems')) })
      }
    })
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })

  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }

  sort = (sortType) => {
    if (sortType === "asc") {
      this.setState({
        filteredIngredients: this.state.filteredIngredients.sort(function (a, b) {
          return a.calories - b.calories
        }), sortType: "asc"
      });
    } else if (sortType === "desc") {
      this.setState({
        filteredIngredients: this.state.filteredIngredients.sort(function (a, b) {
          return b.calories - a.calories
        }), sortType: "desc"
      });
    }
  }

  handleSearch(e) {
    const searchValue = e.target.value
    let copyList = [...this.state.ingredients];
    let filtered = copyList.filter(ingredient =>
      ingredient.name.toLowerCase().startsWith(searchValue.toLowerCase()))
    this.setState({
      filteredIngredients: filtered
    })
  }

  handleAddCart(e, ingredient) {
    this.setState(state => {
      const cartItems = state.cartItems;
      let ingrediantAlreadyInCart = false;
      cartItems.forEach(element => {
        if (element._id === ingredient._id) {
          ingrediantAlreadyInCart = true;
        }
      });
      if (!ingrediantAlreadyInCart) {
        cartItems.push({ ...ingredient });
      }
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return cartItems;
    })
  }

  handleRemoveFromCart(e, item) {
    this.setState(state => {
      const cartItems = state.cartItems;
      const index = cartItems.map(function (element) {
        return element._id
      }).indexOf(item._id);
      if (index > -1) { cartItems.splice(index, 1); }
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return cartItems;
    })
  }

  removeAllIngFromBasket() {
    this.setState(state => {
      let cartItems = state.cartItems;
      cartItems = [];
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return cartItems;
    })
  }

  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <>
        <Router>
          <Toolbar drawerToggleClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <Switch>
            <PrivateRoute exact path="/addingredient">
              <AddIngredient
                ingredients={this.state.filteredIngredients} />
            </PrivateRoute>
            <PrivateRoute exact path="/ingredients">
              <AllIngredients
                ingredients={this.state.filteredIngredients}
                handleSearch={this.handleSearch} sort={this.sort}
                length={this.state.filteredIngredients.length}
                handleAddCart={this.handleAddCart}
                cartItems={this.state.cartItems}
                handleRemoveFromCart={this.handleRemoveFromCart} />
            </PrivateRoute>
            <PrivateRoute exact path="/saladmaker">
              <SaladMaker
                ingredients={this.state.filteredIngredients}
                handleRemoveFromCart={this.handleRemoveFromCart}
                cartItems={this.state.cartItems}
                removeAllIngFromBasket={this.removeAllIngFromBasket} />
            </PrivateRoute>
            <PrivateRoute exact path="/saladspreview">
              <SaladsPreview />
            </PrivateRoute>
            <PublicRoute component={Home} path="/home" />
            <Redirect from="/" to={isLogin() ? "/addingredient" : "/home"} />
          </Switch>
        </Router>
      </>

    );
  }
}

export default App;
