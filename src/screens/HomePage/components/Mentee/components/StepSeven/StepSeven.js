import React from "react";

export const StepSeven = (props) => {
    return (
        <div>
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="title"> Thông tin cá nhân của bạn </label><br />
                <p className="uk-form-label uk-text-break">VAY sẽ chỉ đưa thông tin về Họ Tên, Quê quán, Trường học hiện tại, Số tiền cần hỗ trợ,  Mục đích sử dụng tiền, Kết quả điểm học tập tích lũy, và hình ảnh rõ mặt của bạn lên website. Những thông tin còn lại VAY sẽ lưu giữ bảo mật cho bạn hoặc chỉ đăng khi có sự đồng ý của bạn. </p>
                <p className="uk-form-label">(*) Trường bắt buộc</p>
            </div>
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="fullName">Họ và tên *:</label>
                <div className="uk-form-controls">
                    <input onChange={props.handleInputChange} className="uk-input" name="fullNameMentee" id="fullNameMentee" type="text" placeholder="" />
                </div>
            </div>
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="DOBMentee">Năm sinh*:</label>
                <div className="uk-form-controls">
                    <input onChange={props.handleInputChange} className="uk-input" name="DOBMentee" id="DOBMentee" type="text" placeholder="" />
                </div>
            </div>
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="homeTownMentee">Quê quán*:</label>
                <div className="uk-form-controls">
                    <input onChange={props.handleInputChange} className="uk-input" name="homeTownMentee" id="homeTownMentee" type="text" placeholder="" />
                </div>
            </div>
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="schoolMentee">Trường học hiện tại*:</label>
                <div className="uk-form-controls">
                    <input onChange={props.handleInputChange} className="uk-input" name="schoolMentee" id="schoolMentee" type="text" placeholder="" />
                </div>
            </div>
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="numberOfMoney">Số tiền cần hỗ trợ*:</label>
                <div className="uk-form-controls">
                    <input onChange={props.handleInputChange} className="uk-input" name="numberOfMoney" id="numberOfMoney" type="text" placeholder="" />
                </div>
            </div>
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="purposeUsingMoney">Mục đích sử dụng tiền*:</label>
                <div className="uk-form-controls">
                    <input onChange={props.handleInputChange} className="uk-input" name="purposeUsingMoney" id="purposeUsingMoney" type="text" placeholder="" />
                </div>
            </div>
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="phoneNumberMentee">Số điện thoại/Zalo/Viber *:</label>
                <div className="uk-form-controls">
                    <input onChange={props.handleInputChange} className="uk-input" name="phoneNumberMentee" id="phoneNumberMentee" type="text" placeholder="" />
                </div>
            </div>
            
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="emailMentee">Email *:</label>
                <div className="uk-form-controls">
                    <input onChange={props.handleInputChange} className="uk-input" name="emailMentee" id="emailMentee" type="text" placeholder="" />
                </div>
            </div>
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="linkAvatarMentee">Link ảnh rõ mặt *:</label>
                <div className="uk-form-controls">
                    <input onChange={props.handleInputChange} className="uk-input" name="linkAvatarMentee" id="linkAvatarMentee" type="text" placeholder="" />
                </div>
            </div>
        </div>
    )
}