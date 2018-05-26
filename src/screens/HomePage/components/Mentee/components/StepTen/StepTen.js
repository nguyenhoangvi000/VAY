import React from "react";

export const StepTen = (props) => {
    return (
        <div>
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="title"> Câu hỏi phụ</label><br />
                <label className="uk-form-label" htmlFor="title">(*) Trường bắt buộc</label>
            </div>
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="successorMentee">Bạn có sẵn lòng trở thành mentor cho các bạn tiếp theo trong năm sau hay không?</label>
                <div className="uk-form-controls">
                    <textarea onChange={props.handleInputChange} className="uk-input" name="successorMentee" id="successorMentee" type="text" placeholder="" ></textarea>
                </div>
            </div>
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="planGraduate">Bạn có kế hoạch gì sau khi hoàn tất việc học ?</label>
                <div className="uk-form-controls">
                    <textarea onChange={props.handleInputChange} className="uk-input" name="planGraduate" id="planGraduate" type="text" placeholder="" ></textarea>
                </div>
            </div>
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="whyhelpMentee">Tại sao VAY nên hỗ trợ cho bạn ?</label>
                <div className="uk-form-controls">
                    <textarea onChange={props.handleInputChange} className="uk-input" name="whyhelpMentee" id="whyhelpMentee" type="text" placeholder="" ></textarea>
                </div>
            </div>
            <div className="uk-margin">
                <label className="uk-form-label" htmlFor="ifnotMentee">Bạn sẽ làm gì nếu không nhận được sự hỗ trợ từ VAY?</label>
                <div className="uk-form-controls">
                    <textarea onChange={props.handleInputChange} className="uk-input" name="ifnotMentee" id="ifnotMentee" type="text" placeholder="" ></textarea>
                </div>
            </div>
            <div className="uk-form-controls">
                <p className="uk-form-label uk-text-break">Bạn nghĩ gì về chính sách đóng góp lại cho cộng đồng VAY với mức 5-10% thu nhập cho đến khi hết nợ sau khi bạn tốt nghiệp và có việc làm?</p>
                <div className="uk-form-controls">
                    <textarea onChange={props.handleInputChange} className="uk-input" name="donateMentee" id="donateMentee" type="text" placeholder=""></textarea>
                </div>
            </div>
        </div>
    )
}