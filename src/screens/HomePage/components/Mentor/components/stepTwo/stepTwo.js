import React from "react";

export const StepTwo = (props) => {
    return (
        <div>
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="title"> Vui lòng đọc kĩ và điền đầy đủ thông tin</label><br/>
                <label className="uk-form-label" htmlFor="title">(*) Trường bắt buộc</label>
            </div>
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="fullName">Họ và tên *:</label>
                <div className="uk-form-controls">
                    <input onChange={props.handleInputChange} className="uk-input" name="fullName" id="fullName" type="text" placeholder="" />
                </div>
            </div>
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="phoneNumber">Số điện thoại *:</label>
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
                <label className="uk-form-label" htmlFor="job">Nghề nghiệp:</label>
                <div className="uk-form-controls">
                    <input onChange={props.handleInputChange} className="uk-input" name="job" id="job" type="text" placeholder="" />
                </div>
            </div>
            <div className="uk-margin">
                <label className="uk-form-label" name="experience" htmlFor="experience">Kinh nghiệm *:</label>
                <div className="uk-form-controls">
                    <textarea onChange={props.handleInputChange} className="uk-textarea" id="experience" type="text" placeholder=""></textarea>
                </div>
            </div>
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="facebookLink">Địa chỉ Facebook:</label>
                <div className="uk-form-controls">
                    <input onChange={props.handleInputChange} className="uk-input" name="facebookLink" id="facebookLink" type="text" placeholder="" />
                </div>
            </div>

        </div>
    )
}