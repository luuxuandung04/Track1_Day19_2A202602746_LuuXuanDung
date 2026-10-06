# Prototype Feedback Note — Phiên thử nghiệm T03

- Người tham gia: **T03 — Thảo My** (Sinh viên năm cuối, áp lực thời gian làm bài Lab cao, thích giao diện hỗ trợ sẵn nhưng kỹ tính trong việc kiểm chứng nguồn học liệu).
- Người điều phối (Facilitator): **Nguyễn Long Khánh**.
- Thứ tự thực hiện: **C → A → B** (thực hiện ngày 05/10/2026).
- Nhiệm vụ (Outcome Task): Tìm lại ý “làm rất tốt một thứ không ai cần”, kiểm tra nguồn minh họa và tự viết một câu có dẫn nguồn vào nháp Lab.

| Dữ kiện | C (Chủ động gom) | A (Tự tìm) | B (Note nhanh & tìm kết hợp) |
|---|---|---|---|
| **First action** | Nhấp chọn ngay note 01 từ danh sách các ghi chú được gợi ý sẵn. | Nhấp vào ô tìm kiếm, gõ từ khóa: “kiểm chứng nhu cầu”. | Nhập câu mô tả ngắn về ý nhớ vào ô tìm kiếm ngữ nghĩa. |
| **Do dự / Hiểu sai** | Suýt bấm nút “Sao chép dẫn nguồn” vào nháp trước khi mở xem slide. | Không gặp khó khăn vì từ khóa gõ vào đã xuất hiện trong bài. | Thấy cơ chế B hơi thừa thao tác so với A khi bản thân đã nhớ từ khóa. |
| **Evidence & Nguồn** | Khựng lại nhìn nhãn nguồn, nhấp mở xem slide nguồn của note 01. | Mở nguồn kiểm tra slide của note 02 rồi chuyển sang note 01. | Mở slide nguồn note 01 để kiểm tra trước khi trích dẫn. |
| **Recovery** | Bỏ qua gợi ý note 03, giữ note 01; dùng tìm thủ công để đối chiếu thêm. | Thử đổi thêm cụm “không ai cần” để lọc lại danh sách ngắn nhất. | Chuyển qua tab từ khóa thử nghiệm để so sánh tốc độ trả kết quả. |
| **Outcome** | Hoàn thành rất nhanh trong 2 phút 20 giây. | Hoàn thành độc lập trong 2 phút 50 giây. | Hoàn thành độc lập trong 3 phút 15 giây. |
| **Phản hồi & Trade-off** | Rất nhanh khi đang vội, nhưng dễ bị quán tính sao chép mà bỏ quên kiểm tra. | Tốc độ tốt với kho dữ liệu nhỏ, quyền kiểm soát rõ ràng. | B không nhanh hơn A nếu người dùng đã định hình sẵn từ khóa trong đầu. |

Người tham gia chọn **Phương án C**.  
*Lý do:* Giảm đáng kể thao tác khởi động và tìm kiếm khi đang tập trung giải quyết bài Lab, phù hợp với tình huống cần tra cứu nhanh.  
*Trích dẫn từ tester:* “Gợi ý sẵn thế này lúc đang vội làm bài rất tiện, nhưng đúng là nếu không để ý kỹ thì rất dễ bấm copy luôn mà quên mở slide kiểm tra lại.”

## OBSERVED (Quan sát thực tế)
- Ở Phương án C, người dùng phản ứng tích cực với việc hệ thống tự nhận diện bài Lab để đưa ra ghi chú liên quan; tuy nhiên có khoảnh khắc suýt dán trực tiếp trích dẫn mà không mở slide đối chứng (nguy cơ automation bias).
- Ở Phương án A, người dùng thao tác rất mạch lạc vì vốn từ khóa phù hợp với nội dung bài học.
- Ở Phương án B, người dùng nhận xét việc phải gõ một câu dài và chờ phân tích là không cần thiết nếu đã nhớ rõ từ khóa.

## INTERPRETED (Diễn giải)
- Phương án C hỗ trợ đắc lực khi người dùng có ngữ cảnh làm bài cụ thể và cần tiết kiệm thời gian.
- Tuy nhiên, hệ thống cần có cơ chế "ma sát tích cực" (positive friction) buộc người dùng phải xem xét nội dung gốc trước khi sử dụng vào bài viết nhằm đảm bảo tính học thuật.

## NEXT CHANGE ĐỀ XUẤT
- Khóa tính năng “Sao chép dẫn nguồn” cho đến khi người dùng nhấp mở xem slide nguồn ít nhất một lần trong phiên làm việc.
- Hiển thị rõ trạng thái: “Chưa mở nguồn” → “Đã kiểm tra nguồn” trên giao diện thẻ ghi chú.

## STILL UNPROVEN (Các điểm chưa kiểm chứng)
- Chưa biết liệu việc bổ sung rào cản buộc mở nguồn có gây khó chịu hoặc làm giảm hiệu suất thao tác của người dùng trong thực tế hay không.
- Cần thử nghiệm thêm trường hợp hệ thống gợi ý sai ngữ cảnh hoàn toàn xem người dùng có dễ dàng nhận biết và tắt bỏ hay không.
