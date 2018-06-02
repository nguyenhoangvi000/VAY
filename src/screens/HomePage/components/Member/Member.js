import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

import s1 from '../../../../assets/images/s1.png';
import s2 from '../../../../assets/images/s2.png';
import s3 from '../../../../assets/images/s3.png';
import s4 from '../../../../assets/images/s4.png';
import s5 from '../../../../assets/images/s5.jpg';
import anhkhanh from '../../../../assets/images/anhkhanh.png';
import anhnhut from '../../../../assets/images/anhnhut.png';
import chiha from '../../../../assets/images/chiha.png';

import './member.scss';

export const Member = (props) => {
    return (
        <div className=" member-section">
            <div className="row">
                <div className="col-12 col-md-8 mx-auto">
                    <h6 className="sub-header">Thành viên</h6>
                    <hr className="uk-divider-icon" />
                    <div className="row">
                        <div onClick={() => { window.open('https://www.facebook.com/thua.tran.9') }} className="col-12 col-lg-4" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
                            <div className="uk-card uk-card-default">
                                <div className="uk-card-media-top">
                                    <img className="image-card uk-border-rounded" src={s1} alt="" />
                                </div>
                                <div className="uk-card-body">
                                    <dl className="uk-description-list">
                                        <dt className="uk-text-lead">TS. TRẦN NGUYỄN NHỊ THỪA</dt>
                                        <dd className="uk-text-meta">ĐH. Cornell, Hoa Kỳ.</dd>
                                        <dd className="uk-text-meta">Đồng sáng lập Vietnamese And Youth (VAY).</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4" uk-scrollspy="cls: uk-animation-fade; repeat: true">
                            <div className="uk-card uk-card-default">
                                <div className="uk-card-media-top">
                                    <img className="image-card uk-border-rounded" src={s5} alt="" />
                                </div>
                                <div className="uk-card-body">
                                    <dl className="uk-description-list">
                                        <dt className="uk-text-lead">GS TS. NGUYỄN KỲ PHÙNG</dt>
                                        <dd className="uk-text-meta">Phó giám đốc Sở KHCN Tp.HCM.</dd>
                                        <dd className="uk-text-meta">Đồng sáng lập Vietnamese And Youth (VAY).</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4" onClick={() => { window.open("https://www.facebook.com/vihoang000") }} uk-scrollspy="cls: uk-animation-slide-right; repeat: true">
                            <div className="uk-card uk-card-default">
                                <div className="uk-card-media-top">
                                    <img className="image-card uk-border-rounded" src={s2} alt="" />
                                </div>
                                <div className="uk-card-body">
                                    <dl className="uk-description-list">
                                        <dt className="uk-text-lead">NGUYỄN HOÀNG VĨ</dt>
                                        <dd className="uk-text-meta">Phụ trách Công nghệ VAY.</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12 col-md-8 center-block mx-auto">
                    <button onClick={props.showMembers} className="uk-button uk-button-default">VAY cũng xin cảm ơn</button>
                </div>
            </div>
            <Modal className="modal-member" isOpen={props.showMembersModal} toggle={props.showMembers}>
                <ModalHeader toggle={props.showMembers}>Xin cảm ơn những đóng góp của</ModalHeader>
                <ModalBody>
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <div className="uk-card uk-card-default">
                                <div className="uk-card-media-top d-flex flex-row justify-content-center">
                                    <img className="image-card" src={s3} alt="" />
                                </div>
                                <div className="uk-card-body">
                                    <dl className="uk-description-list">
                                        <dt className="uk-text-lead">ThS. Huỳnh Trâm</dt>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="uk-card uk-card-default">
                                <div className="uk-card-media-top d-flex flex-row justify-content-center">
                                    <img className="image-card uk-border-rounded" src={s4} alt="" />
                                </div>
                                <div className="uk-card-body">
                                    <dl className="uk-description-list">
                                        <dt className="uk-text-lead">ThS. Hưng Trương</dt>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="uk-card uk-card-default">
                                <div className="uk-card-media-top d-flex flex-row justify-content-center">
                                    <img className="image-card uk-border-rounded" src={anhkhanh} alt="" />
                                </div>
                                <div className="uk-card-body">
                                    <dl className="uk-description-list">
                                        <dt className="uk-text-lead">Anh Nguyễn Khánh Trường</dt>
                                    </dl>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-4">
                            <div className="uk-card uk-card-default">
                                <div className="uk-card-media-top d-flex flex-row justify-content-center">
                                    <img className="image-card uk-border-rounded" src={anhnhut} alt="" />
                                </div>
                                <div className="uk-card-body">
                                    <dl className="uk-description-list">
                                        <dt className="uk-text-lead">Anh Nhựt</dt>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="uk-card uk-card-default">
                                <div className="uk-card-media-top d-flex flex-row justify-content-center">
                                    <img className="image-card uk-border-rounded" src={chiha} alt="" />
                                </div>
                                <div className="uk-card-body">
                                    <dl className="uk-description-list">
                                        <dt className="uk-text-lead">Chị Hà</dt>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </div>
    )
}