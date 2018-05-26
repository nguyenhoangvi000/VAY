import React from "react";

export const StepSix = (props) => {
    return (
        <div>
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="title"> Thông tin người hoặc tổ chức giới thiệu bạn cho VAY </label><br />
                <p className="uk-form-label uk-text-break" htmlFor="title">Bạn cần có ít nhất 1 người viết thư giới thiệu về bạn cho VAY để có ĐỦ ĐIỀU KIỆN nhận được sự hỗ trợ từ cộng đồng VAY. Vui lòng gửi và yêu cầu người giới thiệu cho bạn điền những thông tin trong Reference Form theo đường link dưới đây. Xin cám ơn. <a target="_blank" href="https://docs.google.com/forms/d/13cvtEX5D5DqdCmTB7ayOKIdr7P4nrKMEcvvBsA481hc/edit?ts=5a5b24b4">https://docs.google.com/forms/d/13cvtEX5D5DqdCmTB7ayOKIdr7P4nrKMEcvvBsA481hc/edit?ts=5a5b24b4</a></p>
                <label className="uk-form-label" htmlFor="title">(*) Trường bắt buộc</label>
            </div>
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="fullName">Họ và tên người giới thiệu *:</label>
                <div className="uk-form-controls">
                    <input onChange={props.handleInputChange} className="uk-input" name="fullNamePresenter" id="fullNamePresenter" type="text" placeholder="" />
                </div>
            </div>
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="phoneNumber">Số điện thoại/Zalo/Viber *:</label>
                <div className="uk-form-controls">
                    <input onChange={props.handleInputChange} className="uk-input" name="phoneNumberPresenter" id="phoneNumberPresenter" type="text" placeholder="" />
                </div>
            </div>
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="email">Email *:</label>
                <div className="uk-form-controls">
                    <input onChange={props.handleInputChange} className="uk-input" name="emailPresenter" id="emailPresenter" type="text" placeholder="" />
                </div>
            </div>
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="facebookLink">Địa chỉ Facebook:</label>
                <div className="uk-form-controls">
                    <input onChange={props.handleInputChange} className="uk-input" name="facebookLinkPresenter" id="facebookLinkPresenter" type="text" placeholder="" />
                </div>
            </div>
            <div className="uk-form-controls">
                <p className="uk-form-label uk-text-break">Bạn đã gửi đường link Reference Form cho người giới thiệu chưa? <a target="_blank" href="https://docs.google.com/forms/d/13cvtEX5D5DqdCmTB7ayOKIdr7P4nrKMEcvvBsA481hc/edit?ts=5a5b24b4">https://docs.google.com/forms/d/13cvtEX5D5DqdCmTB7ayOKIdr7P4nrKMEcvvBsA481hc/edit?ts=5a5b24b4</a></p>
                <label className="uk-form-label"><input onChange={props.handleInputChange} className="uk-radio" id="radioAgreeSendLinkToPresenter" name="radioAgreeSendLinkToPresenter" type="radio" value="Yes" checked={true} /> Tôi đồng ý</label><br />
                <label className="uk-form-label"><input onChange={props.handleInputChange} className="uk-radio" id="radioNotAgreeSendLinkToPresenter" name="radioNotAgreeSendLinkToPresenter" type="radio" value="No" /> Tôi không đồng ý</label>
            </div>
        </div>
    )
}