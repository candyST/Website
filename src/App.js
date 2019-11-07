import React, { Component } from 'react';
// import Categories from './components/Categories';
// import Navigation from './components/Navigation';
// import PictureList from './components/PictureList';
// import NavigationResponsive from './components/NavigationResponsive';
// import CategoriesResponsive from './components/CategoriesResponsive';
import './styles/App.css';
// import Hidden from '@material-ui/core/Hidden';
import PictureListResponsive from './components/PictureListResponsive'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
    };
  }

  handleDrawerOpen = () => {
    this.setState({
      open: true
    })
  }

  handleDrawerClose = () => {
    this.setState({
      open: false
    })
  }


  render() {
    return (
      <div>
        {/* <Hidden mdUp>
          <NavigationResponsive />
        </Hidden>
        <Hidden smDown>
          <Navigation />
        </Hidden>
        <div classsName="contain">
          <Hidden smDown>
            <Categories
              handleDrawerOpen={this.handleDrawerOpen}
              handleDrawerClose={this.handleDrawerClose}
              open={this.state.open} />
          </Hidden>
          <Hidden mdUp>
            <CategoriesResponsive />
          </Hidden>
          <PictureList
            open={this.state.open} /> */}
        <PictureListResponsive />
        {/* </div> */}


      </div >
    );
  }
}

export default App;
