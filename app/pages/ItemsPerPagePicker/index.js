import React, { Component } from "react";
import PropTypes from "prop-types";
import Dropdown from "../../components/Dropdown";
import { withRouter } from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import * as appActions from "../../ducks/app";
import c from "classnames";
import "./items-per-page-picker.scss";
import { ITEM_PER_DROPDOWN } from '../../constants/ui';

@withRouter
@connect(
  (state) => ({
    itemsPerPage: state.app.itemsPerPage,
  }),
  (dispatch) => ({
    setItemsPerPage: (itemsPerPage) => dispatch(appActions.setItemsPerPage(itemsPerPage)),
  })
)
export default class ItemsPerPagePicker extends Component {
  static propTypes = {
    className: PropTypes.string,
    itemsPerPage: PropTypes.number.isRequired,
    setItemsPerPage: PropTypes.func.isRequired,
  };

  render() {
    const {
      className,
      itemsPerPage,
      setItemsPerPage,
    } = this.props;

    return (
      <div className={c("items-per-page-picker", className)}>
        <Dropdown
          reversed
          items={ITEM_PER_DROPDOWN}
          currentIndex={ITEM_PER_DROPDOWN.findIndex((x) => x.value === itemsPerPage)}
          onChange={(i) => {
            setItemsPerPage(i);
          }}
        />
      </div>
    );
  }
}
