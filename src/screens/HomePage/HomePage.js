import React, { Component } from 'react';

import { Story } from './components/Story/index';
import { Scheme } from './components/Scheme/index';
import { Member } from './components/Member/index';
import { Mentor } from './components/Mentor/index';
import { Mentee } from './components/Mentee/index';


import mentor from '../../assets/images/mentor.jpg';
import mentee from '../../assets/images/mentee.jpg';
import bank from '../../assets/images/bank.jpg';
import paypal from '../../assets/images/paypal.png';
import invester from '../../assets/images/invester.jpg';

import './homePage.scss';


export default class HomePage extends Component {

  constructor(props) {
    super(props);
    this.child = React.createRef();
    this.child1 = React.createRef();
    this.state = {
      isScrollToFooter: false,
      showMembersModal: false
    }
  }

  registerMentor = () => {
    this.child.current.toggleMentor();
  }
  registerMentee = () => {
    this.child1.current.toggleMentee();
  }

  showMembers = () => {
    this.setState({
      showMembersModal: !this.state.showMembersModal
    })
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isBottom = window.pageYOffset > 2500;
      if (isBottom !== this.state.isScrollToFooter) {
        this.setState({ isScrollToFooter: isBottom })
      }
    });
  }

  render() {
    return (
      <div className="homepage-container">
        <div className="uk-position-relative uk-visible-toggle uk-light" uk-slideshow="animation: slide">
          <ul className="uk-slideshow-items">
            <li>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 background-section">
                    <div className="container">
                      <div className="row">
                        <div className="col-12 col-sm-8">
                          <h3 className="main-header uk-text-left">Hỗ trợ và trao cơ hội nghề nghiệp cho thế hệ trẻ Việt Nam</h3>
                          <p className="uk-text-left white-text">Vietnamese and Youth (VaY) là một tổ chức phi lợi nhuận được xây dựng với mong muốn hỗ trợ và giúp đỡ các bạn trẻ Việt Nam. Với mong muốn tạo ra một thế hệ trẻ có ý thức về tài chính, dám sống, dám tự chịu trách nhiệm và dám cho đi.</p>
                          <button className="uk-button uk-button-default">Tìm hiểu thêm</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 background-section">
                    <div className="container">
                      <div className="row">
                        <div className="col-12 col-sm-8">
                          <h1 className="main-header uk-text-left">Hỗ trợ và trao cơ hội nghề nghiệp cho thế hệ trẻ Việt Nam</h1>
                          <button className="uk-button uk-button-default">Tìm hiểu thêm</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <a className="uk-position-center-left uk-position-small uk-hidden-hover" uk-slideshow-item="previous"></a>
          <a className="uk-position-center-right uk-position-small uk-hidden-hover" uk-slideshow-item="next"></a>
        </div>
        <div className="container-fluid">
          <div className="uk-offcanvas-content investor-list-section">
            <button className={this.state.isScrollToFooter ? "uk-animation-slide-left uk-animation-reverse" : "uk-button uk-button-default"} uk-toggle="target: #donation-list" type="button">Danh sách ủng hộ</button>
            <div id="donation-list" uk-offcanvas="mode: slide; overlay: true">
              <div uk-sticky="true" duration="5000" className="uk-offcanvas-bar">
                <button type="button" className="close uk-offcanvas-close" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <div className="container">
                  <p className="">Xin chân thành cám ơn các Thầy, Cô, bạn bè, cùng các anh chị em đã chung tay đóng góp cho Vietnamese and Youth (VAY). </p>
                  <p>Ngoài ra, Thừa xin phép ghi tên mọi người theo cách gọi thân quen thay vì để họ tên đầy đủ. Ai muốn được ghi rõ họ tên thì báo Thừa sửa lại nhé. </p>
                  <p>Tự tin là không bỏ sót tên của anh chị em nào, nhưng nếu có thì vui lòng nhắn tin cho Thừa kiểm tra lại và ghi thêm vào nhe mọi người. Vô cùng xin lỗi nếu có sơ sót này!</p>
                  <div className="col-12 col-md-10 mx-auto">
                    <p className="uk-heading-divider">Tháng 11/2017</p>
                    <table className="table table-bordered uk-table uk-table-striped">
                      <thead>
                        <tr>
                          <th>Họ tên</th>
                          <th>Tháng 11/2017</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Thừa</td>
                          <td>1.600.000đ</td>
                        </tr>
                        <tr>
                          <td>T.Phùng- Sở KHCN</td>
                          <td>10,000,000 ₫</td>
                        </tr>
                        <tr>
                          <td>Chị Thủy Tiên - SGTech</td>
                          <td>500,000 ₫</td>
                        </tr>
                        <tr>
                          <td>Bạn Võ Kim Bang -SH97</td>
                          <td>1,000,000 ₫</td>
                        </tr>
                        <tr>
                          <td>aLong-VEF staff</td>
                          <td>1,000,000 ₫</td>
                        </tr>
                        <tr>
                          <td>aThái Hà - VEF 03</td>
                          <td>500,000 ₫</td>
                        </tr>
                        <tr>
                          <td>Nghi-bóng bàn</td>
                          <td>3,000,000 ₫</td>
                        </tr>
                        <tr>
                          <td>A HO-LE </td>
                          <td>2,000,000 ₫</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="uk-offcanvas-content how-to-donate">
            <button className={this.state.isScrollToFooter ? "uk-animation-slide-right uk-animation-reverse" : "uk-button uk-button-default"} uk-toggle="target: #how-to-donate" type="button">Ủng hộ chúng tôi</button>
            <div id="how-to-donate" uk-offcanvas="mode: slide; flip: true; overlay: true">
              <div uk-sticky="true" duration="5000" className="uk-offcanvas-bar">
                <button type="button" className="close uk-offcanvas-close" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <div className="container">
                  <div className="col-12 col-md-6 mx-auto">
                    <h3>Cảm ơn sự quan tâm và ủng hộ của bạn cho VAY</h3>
                    <p>Tiền ủng hộ các em nhỏ cho dự án VAY xin vui lòng gửi về:</p>
                    <table className="table table-bordered uk-table uk-table-striped">
                      <thead>
                        <tr>
                          <th className="image-header">
                            <img className="img-bank" src={bank} alt="" />
                          </th>
                          <th>
                            <p><b>Chủ tài khoản:</b> Trần Nguyễn Nhị Thừa. </p>
                            <p><b>Ngân hàng:</b> Vietcombank </p>
                            <p><b>Chi nhánh:</b> Chi nhánh Bến Thành, HCM. </p>
                            <p><b>Số tài khoản:</b> 033 1000 458 658. </p>
                          </th>
                        </tr>
                      </thead>
                    </table>
                    <table className="table table-bordered uk-table uk-table-striped">
                      <thead>
                        <tr>
                          <th className="image-header">
                            <img className="img-bank" src={paypal} alt="" />
                          </th>
                          <th className="image-header">
                            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                              <input type="hidden" name="cmd" value="_donations" />
                              <input type="hidden" name="business" value="tnt8@cornell.edu" />
                              <input type="hidden" name="lc" value="US" />
                              <input type="hidden" name="item_name" value="Vietnamese and Youth" />
                              <input type="hidden" name="item_number" value="VAY" />
                              <input type="hidden" name="no_note" value="0" />
                              <input type="hidden" name="currency_code" value="USD" />
                              <input type="hidden" name="bn" value="PP-DonationsBF:btn_donateCC_LG.gif:NonHostedGuest" />
                              <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                              <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                            </form>
                          </th>
                        </tr>
                      </thead>
                    </table>
                    <p><b>Lưu ý:</b> 1% số tiền bạn đóng góp sẽ được sử dụng cho chi phí vận hành, để có thể duy trì VAY hỗ trợ nhiều các bạn trẻ hơn nữa</p>
                    <p>Bạn cũng có thể gửi các công việc partime hỗ trợ cho các em qua email: <a href="mailto: vay365vn@gmail.com">vay365vn@gmail.com</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Story />
          <Scheme />
          <Member showMembers={this.showMembers} showMembersModal={this.state.showMembersModal} />
          <div className="row register-section">
            <div className="col-9 mx-auto">
              <h6 className="sub-header">Đăng kí</h6>
              <hr className="uk-divider-icon" />
            </div>
            <div className="col-12 col-md-10 mx-auto">
              <div className="row">
                <div className="col-12 col-md-4" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
                  <div className="uk-text-center">
                    <div className="uk-inline-clip uk-transition-toggle" tabIndex="0">
                      <img src={mentor} alt="" />
                      <div className="uk-position-center uk-panel"><h1 className="white-text">HƯỚNG DẪN (MENTOR)</h1></div>
                      <div className="uk-transition-fade uk-position-cover uk-position-small uk-overlay uk-overlay-default uk-flex uk-flex-column uk-flex-center uk-flex-middle">
                        <p className="uk-text-justify">Bạn là người sẽ theo dõi quá trình học tập và làm việc của các bạn học sinh sinh viên nhận được sự giúp đỡ của VAY và đưa ra những sự trợ giúp khi cần thiết.</p>
                        <button onClick={this.registerMentor} className="uk-button uk-button-danger">Đăng kí</button>
                        <Mentor ref={this.child} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4" uk-scrollspy="cls: uk-animation-fade; repeat: true">
                  <div className="uk-text-center">
                    <div className="uk-inline-clip uk-transition-toggle" tabIndex="0">
                      <img src={mentee} alt="" />
                      <div className="uk-position-center uk-panel"><h1 className="white-text">NHẬN HỖ TRỢ (MENTEE)</h1></div>
                      <div className="uk-transition-fade uk-position-cover uk-position-small uk-overlay uk-overlay-default uk-flex uk-flex-column uk-flex-center uk-flex-middle">
                        <p className="uk-text-justify">Bạn sẽ nhận được sự giúp đỡ của VAY về chi phí và được người hướng dẫn hỗ trợ trong suốt quá trình học tập</p>
                        <button onClick={this.registerMentee} className="uk-button uk-button-danger">Đăng kí</button>
                        <Mentee ref={this.child1} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4" uk-scrollspy="cls: uk-animation-slide-right; repeat: true">
                  <div className="uk-text-center">
                    <div className="uk-inline-clip uk-transition-toggle" tabIndex="0">
                      <img src={invester} alt="" />
                      <div className="uk-position-center uk-panel"><h1 className="white-text">ỦNG HỘ (DONOR)</h1></div>
                      <div className="uk-transition-fade uk-position-cover uk-position-small uk-overlay uk-overlay-default uk-flex uk-flex-column uk-flex-center uk-flex-middle">
                        <p className="uk-text-justify">Bạn sẽ hỗ trợ nguồn kinh phí để giúp đỡ các em sinh viên học sinh, và hỗ trợ VAY trong công tác vận hành</p>
                        <div className="uk-nav-divider"></div>
                        <button uk-toggle="target: #how-to-donate" className="uk-button uk-button-danger">Đăng kí</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}