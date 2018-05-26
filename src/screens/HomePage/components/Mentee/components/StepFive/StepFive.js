import React from "react";

export const StepFive = (props) => {
    return (
        <div>
            <div className="uk-margin">
                <label className="uk-form-label">Nếu phát hiện bạn sử dụng tiền không đúng mục đích đã nêu, VAY sẽ ngừng hỗ trợ bạn tại bất kì thời điểm nào. </label>
                <div className="uk-form-controls">
                    <label className="uk-form-label"><input onChange={props.handleInputChange} className="uk-radio" id="radioAgree" name="radioAgree" type="radio" value="Yes" checked={true} /> Tôi đồng ý</label><br />
                    <label className="uk-form-label"><input onChange={props.handleInputChange} className="uk-radio" id="radioNotAgree" name="radioAgree" type="radio" value="No" /> Tôi không đồng ý</label>
                </div>
            </div>
            <div className="uk-margin">
                <label className="uk-form-label">Nếu bạn không tuân thủ chính sách của VAY như đã đồng ý, hoặc có ý định phá hoại cộng đồng, hoặc có ý đồ không lương thiện, sau khi bị cảnh cáo 2 lần, bạn sẽ bị đưa vào "danh sách đen" (black list/ scam report) và thông tin này sẽ được đăng tải trong cộng đồng và chia sẻ trên các mạng xã hội, ngân hàng, nhà tuyển dụng, công ty cho vay .... Mục tiêu của VAY là xây dựng một thế hệ trẻ tích cực, biết vì người khác, dám làm dám chịu .... Đừng phụ tấm lòng và niềm tin mà cộng đồng VAY đã dành cho bạn.</label>
                <div className="uk-form-controls">
                    <label className="uk-form-label"><input onChange={props.handleInputChange} className="uk-radio" id="radioAgree" name="radioAgree" type="radio" value="Yes" checked={true} /> Tôi đồng ý</label><br />
                    <label className="uk-form-label"><input onChange={props.handleInputChange} className="uk-radio" id="radioNotAgree" name="radioAgree" type="radio" value="No" /> Tôi không đồng ý</label>
                </div>
            </div>
        </div>
    )
}