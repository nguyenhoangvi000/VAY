import React from "react";

export const StepTwo = (props) => {
    return (
        <div>
            <div className="uk-margin">
                <label className="uk-form-label">Sau khi học xong và có việc làm, VAY mong muốn bạn sẽ đóng góp lại cho cộng đồng 5-10% thu nhập hàng tháng của bạn (tối đa 2tr/tháng) cho đến khi trả xong để VAY hướng tới giai đoạn 2, huy động có trả lãi cho cộng đồng nhằm tăng cường năng lực tài chính và chủ động hỗ trợ bền vững cho các bạn trẻ tiếp theo.</label>
                <div className="uk-form-controls">
                    <label className="uk-form-label"><input onChange={props.handleInputChange} className="uk-radio" id="radioAgreeReturnMoney" name="agreeReturnMoney" type="radio" value="Yes" checked={true} /> Tôi đồng ý</label><br />
                    <label className="uk-form-label"><input onChange={props.handleInputChange} className="uk-radio" id="radioNotAgreeReturnMoney" name="agreeReturnMoney" type="radio" value="No" /> Tôi không đồng ý</label>
                </div>
            </div>
        </div>
    )
}