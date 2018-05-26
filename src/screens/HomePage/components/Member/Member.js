import React from 'react';

import s1 from '../../../../assets/images/s1.png';
import s2 from '../../../../assets/images/s2.png';
import s5 from '../../../../assets/images/s5.jpg';

export const Member = (props) => {
    return (
        <div className="row member-section">
            <div className="col-8 mx-auto">
                <h6 className="sub-header">Thành viên</h6>
                <hr className="uk-divider-icon" />
                <div className="row">
                    <div className="col-12 col-lg-4" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
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
                    <div className="col-12 col-lg-4" uk-scrollspy="cls: uk-animation-slide-right; repeat: true">
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
    )
}