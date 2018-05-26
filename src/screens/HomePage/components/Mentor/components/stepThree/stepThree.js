import React from "react";

export const StepThree = (props) => {
    return (
        <div>
            <div className="uk-margin">
                <label className="uk-form-label" name="moreHelp" htmlFor="moreHelp">Bạn nghĩ bạn sẽ giúp gì cho các bạn trẻ trong cộng đồng VAY:</label>
                <div className="uk-form-controls">
                    <textarea onChange={props.handleInputChange} className="uk-textarea" id="moreHelp" type="text" placeholder=""></textarea>
                </div>
            </div>
            <div className="uk-margin">
                <label className="uk-form-label" name="experience" htmlFor="experience">Bạn cam kết sẽ gặp trực tiếp bạn trẻ mà mình phụ trách mỗi tháng 1 lần và luôn hỗ trợ bạn ấy trực tuyến khi cần chứ?</label>
                <div className="uk-form-controls">
                    <label className="uk-form-label"><input onChange={props.handleInputChange} className="uk-radio" id="radioAgree" name="radioAgree" type="radio" value="Yes" checked={true} /> Tôi đồng ý</label><br />
                    <label className="uk-form-label"><input onChange={props.handleInputChange} className="uk-radio" id="radioNotAgree" name="radioAgree" type="radio" value="No" /> Tôi không đồng ý</label>
                </div>
            </div>
        </div>
    )
}