import React from "react";

export const StepThree = (props) => {
    return (
        <div>
            <div className="uk-margin">
                <label className="uk-form-label">Trong thời gian nhận hỗ trợ từ VAY, hàng tháng bạn sẽ đóng góp cho VAY 200.000 vnd như một cách học về quản lý tài chính và giữ lời hứa.</label>
                <div className="uk-form-controls">
                    <label className="uk-form-label"><input onChange={props.handleInputChange} className="uk-radio" id="radioAgree" name="radioAgree" type="radio" value="Yes" checked={true} /> Tôi đồng ý</label><br />
                    <label className="uk-form-label"><input onChange={props.handleInputChange} className="uk-radio" id="radioNotAgree" name="radioAgree" type="radio" value="No" /> Tôi không đồng ý</label>
                </div>
            </div>
        </div>
    )
}