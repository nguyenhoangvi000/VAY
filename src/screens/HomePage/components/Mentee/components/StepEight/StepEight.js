import React from "react";

export const StepEight = (props) => {
    return (
        <div>
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="title">Thông tin cá nhân</label><br />
                <label className="uk-form-label" htmlFor="title">(*) Trường bắt buộc</label>
            </div>
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="facebookLinkMentee">Địa chỉ Facebook *:</label>
                <div className="uk-form-controls">
                    <input onChange={props.handleInputChange} className="uk-input" name="facebookLinkMentee" id="facebookLinkMentee" type="text" placeholder="" />
                </div>
            </div>
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="markResultMentee">Kết quả điểm học tập tích lũy (ví dụ: 8.2/10 của học kỳ/năm học)*:</label>
                <div className="uk-form-controls">
                    <input onChange={props.handleInputChange} className="uk-input" name="markResultMentee" id="markResultMentee" type="text" placeholder="" />
                </div>
            </div>
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="linkImageMark">Link bảng điểm kết quả học tập*:</label>
                <div className="uk-form-controls">
                    <input onChange={props.handleInputChange} className="uk-input" name="linkImageMark" id="linkImageMark" type="text" placeholder="" />
                </div>
            </div>
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="archivementMentee">Các thành tích khác nếu có:</label>
                <div className="uk-form-controls">
                    <input onChange={props.handleInputChange} className="uk-input" name="archivementMentee" id="archivementMentee" type="text" placeholder="" />
                </div>
            </div>
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="linkCardMentee">Link hình 2 mặt chứng minh nhân dân*:</label>
                <div className="uk-form-controls">
                    <input onChange={props.handleInputChange} className="uk-input" name="linkCardMentee" id="linkCardMentee" type="text" placeholder="" />
                </div>
            </div>
        </div>
    )
}