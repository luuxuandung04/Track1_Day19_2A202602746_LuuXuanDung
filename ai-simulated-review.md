# Review mô phỏng ba persona — 06/10/2026

**Do Codex tạo bằng phân tích thiết kế và giao diện đã đọc ngày 05/10. Không có người dùng thật, không có phiên test mới ngày 06/10, không phải ba Feedback Notes đạt gate 5.** Các persona là giả định, không đại diện An-P01/Dũng-P01/SV1/SV2. Không tạo quote, thời gian hay lựa chọn được coi là kết quả đo.

## Cơ sở đã quan sát

A hiển thị 4 note và tìm từ khóa; mở note 01 thấy nguồn minh họa và đường quay lại. B mặc định ở slide, chuyển được sang Lab; truy vấn mẫu “làm sản phẩm tốt nhưng không ai cần” trả ứng viên 01/02/04, note 04 thiếu nguồn. C hiển thị note liên quan, lý do, giữ/bỏ, tắt gợi ý và tìm thủ công trong lần đọc giao diện trước. Những nút nhìn thấy không đồng nghĩa mọi chức năng đã được kiểm thử. Giữ nguyên prototype theo yêu cầu người học.

## Persona S01 — người nhớ từ khóa, muốn tự chọn

- Giả định: biết từ “nhu cầu”, quen dùng search, ưu tiên nguồn rõ.
- A: có thể phù hợp vì tìm chủ động, tự đọc note; rủi ro từ khóa không xuất hiện trong note cần tìm.
- B: mô tả ý có thể giúp khi từ khóa không khớp, nhưng thêm việc đọc ứng viên AI.
- C: có thể thấy gợi ý không cần thiết; tắt gợi ý/tìm thủ công là đường kiểm soát cần thiết.
- Giả thuyết preference để test: A. Chưa có lựa chọn thực tế.
- Cần quan sát thật: user có tự đổi từ khóa, tìm được note 01 và kiểm nguồn trước khi viết không?

## Persona S02 — nhớ ý nhưng quên thuật ngữ

- Giả định: nhớ “làm tốt mà không ai cần”, không biết nhãn khái niệm.
- A: có nguy cơ thử nhiều từ rồi dừng; chưa đo số lần tìm hoặc thời gian.
- B: kết quả truy vấn mẫu đã quan sát cho thấy cơ chế trả note gốc có thể hỗ trợ. Rủi ro user chọn note 04 gần nghĩa nhưng không có nguồn.
- C: các ứng viên có thể hữu ích, nhưng không chắc user biết vì sao được gợi ý.
- Giả thuyết preference để test: B. Chưa có lựa chọn thực tế.
- Cần quan sát thật: có nhận ra thiếu nguồn, chuyển sang note có nguồn và tự viết câu không?

## Persona S03 — đang làm Lab, ít thời gian

- Giả định: muốn dùng nhanh một ý nhưng vẫn cần dẫn nguồn.
- A: phải khởi động tìm; đổi lại control rõ.
- B: cần mô tả trước; entry point slide có thể làm lệch khỏi nhiệm vụ Lab nếu không chuẩn bị baseline.
- C: gợi ý sẵn có thể giảm bước khởi động; rủi ro chọn ngay mà không kiểm nguồn.
- Giả thuyết preference để test: C. Chưa có lựa chọn thực tế.
- Cần quan sát thật: có mở nguồn hay chỉ sao chép, có biết tắt/bỏ gợi ý khi sai không?

## Tổng hợp mô phỏng

Ba persona gợi ba trade-off cần kiểm: control/nhớ từ khóa ở A; mô tả/kiểm ứng viên ở B; ít thao tác/nguy cơ bỏ qua review ở C. Đây là dự đoán phân tích, không phải pattern từ ba tester.

## Next Change đề xuất từ review AI

**Chuẩn hóa điểm bắt đầu của cả A/B/C tại cùng bài Lab, giữ cùng kho 4 note và nháp trống.** Cơ sở: A/C mở Lab, B mặc định mở slide và có tạo note nhanh ngoài task retrieval. Điểm bắt đầu khác có thể ảnh hưởng phép so sánh.

Người học yêu cầu giữ prototype: trước mắt áp dụng trong test-plan bằng facilitator chuẩn bị Bài Lab trước lượt B. Nếu có iteration sau, cân nhắc sửa default entry point; chưa sửa ứng dụng, chưa coi đây là quyết định nhóm sau test.

## Still Unproven

Chưa biết người thật chọn gì, có hoàn thành độc lập không, có đọc nguồn và recovery không; chưa chứng minh time saving, độ phổ biến pain, học tập dài hạn hay giá trị AI thật. Chưa kiểm đủ clipboard/save/reset/undo/persistence. AI mô phỏng không thay kiểm thử ngoài nhóm.
