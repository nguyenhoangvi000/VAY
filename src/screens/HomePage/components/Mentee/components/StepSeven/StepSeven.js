import React from "react";

export const StepSeven = (props) => {
    return (
        <div>
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="title"> Thông tin người hoặc tổ chức giới thiệu bạn cho VAY </label><br />
                <p className="uk-form-label uk-text-break" htmlFor="title">VAY sẽ chỉ đưa thông tin về Họ Tên, Quê quán, Trường học hiện tại, Số tiền cần hỗ trợ,  Mục đích sử dụng tiền, Kết quả điểm học tập tích lũy, và hình ảnh rõ mặt của bạn lên website. Những thông tin còn lại VAY sẽ lưu giữ bảo mật cho bạn hoặc chỉ đăng khi có sự đồng ý của bạn. </p>
                <label className="uk-form-label" htmlFor="title">(*) Trường bắt buộc</label>
            </div>
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="fullName">Họ và tên *:</label>
                <div className="uk-form-controls">
                    <input onChange={props.handleInputChange} className="uk-input" name="fullName" id="fullName" type="text" placeholder="" />
                </div>
            </div>
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="facebookLink">Năm sinh*:</label>
                <div className="uk-form-controls">
                    <input onChange={props.handleInputChange} className="uk-input" name="facebookLink" id="facebookLink" type="text" placeholder="" />
                </div>
            </div>
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="facebookLink">Quê quán*:</label>
                <div className="uk-form-controls">
                    <input onChange={props.handleInputChange} className="uk-input" name="facebookLink" id="facebookLink" type="text" placeholder="" />
                </div>
            </div>
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="facebookLink">Trường học hiện tại*:</label>
                <div className="uk-form-controls">
                    <input onChange={props.handleInputChange} className="uk-input" name="facebookLink" id="facebookLink" type="text" placeholder="" />
                </div>
            </div>
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="facebookLink">Số tiền cần hỗ trợ*:</label>
                <div className="uk-form-controls">
                    <input onChange={props.handleInputChange} className="uk-input" name="facebookLink" id="facebookLink" type="text" placeholder="" />
                </div>
            </div>
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="facebookLink">Mục đích sử dụng tiền*:</label>
                <div className="uk-form-controls">
                    <input onChange={props.handleInputChange} className="uk-input" name="facebookLink" id="facebookLink" type="text" placeholder="" />
                </div>
            </div>
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="phoneNumber">Số điện thoại/Zalo/Viber *:</label>
                <div className="uk-form-controls">
                    <input onChange={props.handleInputChange} className="uk-input" name="phoneNumber" id="phoneNumber" type="text" placeholder="" />
                </div>
            </div>
            
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="email">Email *:</label>
                <div className="uk-form-controls">
                    <input onChange={props.handleInputChange} className="uk-input" name="email" id="email" type="text" placeholder="" />
                </div>
            </div>
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="email">Link ảnh rõ mặt *:</label>
                <div className="uk-form-controls">
                    <input onChange={props.handleInputChange} className="uk-input" name="email" id="email" type="text" placeholder="" />
                </div>
            </div>
        </div>
    )
}