import React from "react";

export const StepNine = (props) => {
    return (
        <div>
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="title">Câu hỏi phụ (nhưng mang tính quyết định cao)</label><br />
                <label className="uk-form-label" htmlFor="title">(*) Trường bắt buộc</label>
            </div>
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="wishMentee">Bạn mong muốn điều gì trong 5-10 năm tới?</label>
                <div className="uk-form-controls">
                    <textarea onChange={props.handleInputChange} className="uk-input" name="wishMentee" id="wishMentee" type="text" placeholder="" ></textarea>
                </div>
            </div>
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="dreamMentee">Mơ ước lớn lao nhất trong đời của bạn (nếu có) là gì?</label>
                <div className="uk-form-controls">
                    <textarea onChange={props.handleInputChange} className="uk-input" name="dreamMentee" id="dreamMentee" type="text" placeholder="" ></textarea>
                </div>
            </div>
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="stuckMentee">Những khó khăn hiện tại của bạn</label>
                <div className="uk-form-controls">
                    <textarea onChange={props.handleInputChange} className="uk-input" name="stuckMentee" id="stuckMentee" type="text" placeholder="" ></textarea>
                </div>
            </div>
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="planMentee">Kế hoạch của bạn khi nhận được khoản hỗ trợ là gì?</label>
                <div className="uk-form-controls">
                    <textarea onChange={props.handleInputChange} className="uk-input" name="planMentee" id="planMentee" type="text" placeholder="" ></textarea>
                </div>
            </div>
        </div>
    )
}