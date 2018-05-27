import $ from 'jquery';
import React, {
  Component
} from 'react';

import logo from '../../assets/images/vay_logo_white.png';
import logoDark from '../../assets/images/vay.png';

import './header.scss';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  componentDidMount() {
    $(document).scroll(() => {
      var $nav = $(".navbar");
      var $logo = $(".logo-image");
      $nav.toggleClass('scrolled', $(document).scrollTop() > $nav.height());
      if ($(document).scrollTop() > $nav.height()) {
        $logo.attr('src', logoDark);
      } else {
        $logo.attr('src', logo);
      }
    });
  }


  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="header-container" >
        <div className="header" >
          <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-faded" >
            <div className="container" >
              <a className="mr-auto navbar-brand" href="/" > < img className="logo-image" src={logo} alt="logo" /> </a>
              <button type="button" className="navbar-toggler" >
                <span className="navbar-toggler-icon" > </span>
              </button >
              <div className="collapse navbar-collapse" >
                <ul className="ml-sm-auto uk-navbar-nav navbar-nav" >
                  <li className="nav-item" > { /* onClick={() => { goToAnchor('about-us'); }}  */}
                    <a className="nav-link uk-button-text" href="/#about-us" > Về chúng tôi </a> </li>
                  <li className="nav-item" > { /* onClick={() => { goToAnchor('our-services'); }} */}
                    <a className="nav-link uk-button-text" href="/#our-services" > Mô hình
                          </a>
                  </li>
                  <li className="nav-item" >
                    <a onClick={
                      () => {
                        this.props.history.push('/career');
                      }
                    } className="nav-link uk-button-text" > Thành viên </a>
                  </li >
                  <li className="nav-item" >
                    <a onClick={
                      () => {
                        this.props.history.push('/career');
                      }
                    } className="nav-link uk-button-text" > Hoạt động </a>
                  </li >
                  <li className="nav-item" > { /* onClick={() => { goToAnchor('our-projects'); }} */}
                    <a className="nav-link uk-button-text" href="/#our-projects" > Đăng kí </a>
                  </li >
                  <li className="nav-item" >
                    <a onClick={
                      () => {
                        this.props.history.push('/career');
                      }
                    }
                      className="nav-link uk-button-text" > Liên hệ </a> </li >
                </ul>
              </div >
            </div>
          </nav>
        </div>
      </div>

    )
  }
}