import React, { Component } from "react";
import { fetchCatalogInfo } from "../../actions/catalogActions";
import { connect } from "react-redux";
import Product from "./Product";
import "./catalog.scss";
import Cart from "../Cart/Cart";

class Catalog extends Component {
  componentDidMount() {
    this.props.fetchCatalogInfo();
  }

  render() {
    const { items } = this.props;

    return (
      <div className="c-onlinestore-catalog-page">
        <Cart/>
        <div className="c-onlinestore-catalog-grid">
          {items.map((item, id) => {
            return <Product item={item} key={id} />;
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.catalog.items,
    isCatalogError: state.catalog.isCatalogError,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCatalogInfo: () => {
      dispatch(fetchCatalogInfo());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
