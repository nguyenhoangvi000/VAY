import React from "react";
import diagram from '../../../../assets/images/diagramUpdate.png';

export const Scheme = (props) => {
    return (
        <div className="row scheme-section">
            <div className="col-12 col-md-8 mx-auto">
                <h6 className="sub-header">Mô hình</h6>
                <hr className="uk-divider-icon" />
                <div className="col-9 mx-auto">
                    <img src={diagram} alt="" />
                </div>
                <p className="uk-text-justify">Cộng đồng sẽ hỗ trợ cho các em có hoàn cảnh khó khăn có tiền để đi học (học đại học hoặc học nghề).</p>
                <p className="uk-text-justify">Ngoài ra VAY còn kết nối các em với các anh chị lớn (mentors) để chia sẻ kinh nghiệm, tâm tư tình cảm, định hướng nghề nghiệp, đào tạo kỹ năng sống, kỹ năng mềm ...</p>
                <p className="uk-text-justify">Thêm nữa, cộng đồng cũng là nơi cung cấp và hỗ trợ việc làm bán thời gian (part time) trong khi còn đi học hoặc công việc chính thức (full time) sau này cho các em vì những em trưởng thành từ VAY sẽ có tư duy (mindset) và kỹ năng (soft skills) sẵn sàng cho nhu cầu doanh nghiệp và xã hội.</p>
                <p className="uk-text-justify">Để đổi lại, sau khi hoàn tất việc học và có việc làm, các em sẽ đóng góp lại cho cộng đồng 5 - 10% thu nhập hằng tháng cho đến khi TRẢ HẾT SỐ TIỀN ĐÃ ĐƯỢC HỖ TRỢ. Đây sẽ là nguồn tiền giúp dự án phát triển bền vững và ít phụ thuộc vào nguồn tiền từ thiện, cũng như có khả năng hoàn vốn và/hoặc trả lãi cho mọi người để dự án có thể phát triển mạnh mẽ, giúp đỡ được nhiều đối tượng hơn trong thời gian dài.</p>
            </div>
        </div>
    )
}