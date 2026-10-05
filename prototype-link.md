# Prototype hiện tại — giữ nguyên theo yêu cầu Dũng

Link người học cung cấp: https://lovable.dev/preview/RHUlgfq54zFv3SbigcdY3sJDqX6yDJ3X

[A — Tự tìm](https://id-preview--ef1fd8a5-1c22-415d-9e3a-b01bbca80717.lovable.app/) · [B — Note nhanh & tìm kết hợp](https://id-preview--ef1fd8a5-1c22-415d-9e3a-b01bbca80717.lovable.app/prototype-b) · [C — Chủ động gom](https://id-preview--ef1fd8a5-1c22-415d-9e3a-b01bbca80717.lovable.app/prototype-c)

Đây là URL preview quan sát ngày 05/10/2026; cần kiểm lại khả năng mở khi không đăng nhập trước khi gửi tester/TA. Không khẳng định preview có thời hạn hoặc quyền truy cập cố định.

## Cách chuẩn bị cùng bối cảnh test

1. Mở option trong phiên trình duyệt mới, kiểm kho có đúng 4 note mẫu.
2. A/C mặc định ở bài Lab. Với B, facilitator mở nút **Bài Lab trước khi giao quyền thao tác**, để cả ba bắt đầu ở yêu cầu “Kiểm chứng nhu cầu”. Đây là chuẩn bị môi trường, không mớm cách tìm note.
3. Nháp trống, panel AI Notes mở; A từ khóa trống, B mô tả trống/chưa có kết quả, C giữ gợi ý tự khởi động.
4. Không tạo note mới trong lượt task chính. B có chức năng note nhanh trên slide nhưng ngoài phạm vi so sánh retrieval. Nếu tester tự đi sang slide/tạo note, ghi đó là hành vi/breakdown.
5. Chưa xác nhận reset/undo và persistence đầy đủ. Reload không được mặc định là reset; kiểm note/nháp/trạng thái. Nếu không trở về baseline, dùng browser profile/phiên thử nghiệm mới và xác minh trước lượt tiếp.

## Fixture đang hiển thị

| Note | Nội dung mẫu | Nguồn hiển thị |
|---|---|---|
| 01 | Làm rất tốt một thứ không ai cần vẫn không tạo ra giá trị. | Design the Experiment · Slide 6 |
| 02 | Kiểm chứng vấn đề trước khi tối ưu giải pháp. | Design the Experiment · Slide 5 |
| 03 | Prototype đủ thật để người học ra quyết định, chưa cần làm cả sản phẩm. | Design the Experiment · Slide 9 |
| 04 | Đừng nhầm làm đúng với làm thứ cần làm. | Thiếu nguồn |

Nguồn mở từ note 01 có nhãn **NGUỒN MINH HỌA** và “Nguồn mô phỏng để thử nghiệm; chưa phải trích dẫn từ tài liệu gốc”. Các số slide là fixture prototype, không chứng minh vị trí trong bài giảng thật. Chỉ đánh giá thao tác/đối chiếu trong fixture; không đánh giá học thuật bằng trích dẫn giả lập này.

## Phạm vi kiểm tra của Codex

A: nhìn thấy 4 note, note thiếu nguồn khóa mở/sao chép, đã mở nguồn 01 và thấy đường quay lại. B: đã chuyển sang Bài Lab, nhập “làm sản phẩm tốt nhưng không ai cần”, nhận 3 ứng viên (01/02/04) có lý do; note 04 không nguồn. C: lần xem trước thấy gợi ý, giữ/bỏ, tắt gợi ý/tìm thủ công. Chưa kiểm đủ mọi nhánh tạo note, giữ nháp, clipboard, undo/reset/persistence. Đây là kiểm tra agent, không phải feedback của tester ngoài nhóm.

Thư mục prototype/ cục bộ là bản precision/recall cũ, được giữ làm lịch sử; **không dùng cho bài nộp hiện tại**. Prototype chính là các link Lovable trên.
