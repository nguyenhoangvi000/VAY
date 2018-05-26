import React from "react";

export const StepFour = (props) => {
    return (
        <div>
            <div className="uk-margin">
                <label className="uk-form-label">Bạn cam kết gặp gỡ các mentor hàng tháng (online hoặc offline) để VAY có thể cập nhật tình hình của bạn và có những sự hỗ trợ khi cần thiết.</label>
                <div className="uk-form-controls">
                    <label className="uk-form-label"><input onChange={props.handleInputChange} className="uk-radio" id="radioAgree" name="radioAgree" type="radio" value="Yes" checked={true} /> Tôi đồng ý</label><br />
                    <label className="uk-form-label"><input onChange={props.handleInputChange} className="uk-radio" id="radioNotAgree" name="radioAgree" type="radio" value="No" /> Tôi không đồng ý</label>
                </div>
            </div>
        </div>
    )
}