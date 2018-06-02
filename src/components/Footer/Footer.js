import React, { Component } from 'react';
import { FacebookFanpage } from './components/FacebookFanpage/index';

import logo from '../../assets/images/vay_logo_dark.png';

import './footer.scss';

export default class Header extends Component {

  render() {
    return (
      <footer className="footer-container ">
        <div className="container footer-content uk-flex-between uk-flex uk-flex-column uk-text-left">
          <div className="footer-widget row">
            <div className="col-12 col-md-4">
              <img className="logo-image" src={logo} alt="" />
              <p className="uk-text-left organization-name">® 2018 Vietnamese and Youth. </p>
              <p className="uk-text-left">All Rights Reserved</p>
            </div>
            <div className="col-12 col-md-4">
              <div className="col-12 col-md-6">
                <p className="uk-text-left spacing-footer-content">THÔNG TIN LIÊN HỆ</p>
                <p onClick={() => { window.location.href = "mailto: vay365vn@gmail.com" }} className="uk-text-left email-vay">vay365vn@gmail.com</p>
              </div>
            </div>
            {/* <div className="col-12 col-md-3 facebook-fanpage"></div> */}
            <div className="col-12 col-md-4 facebook-fanpage">
              <FacebookFanpage />
            </div>
          </div>
          <div className="footer-pane row">
            <div className="col-8 mx-auto">
              <h6 className="uk-text-center">Designed by Vi Hoang</h6>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}