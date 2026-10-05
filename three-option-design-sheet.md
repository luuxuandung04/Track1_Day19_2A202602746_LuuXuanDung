# Three-option Design Sheet

Trạng thái: đề xuất Codex dựa trên evidence; nhóm cần review và chốt. Hypothesis Problem xem README; A/B/C là tên option, khác với giả thuyết pain A/B của Day17.

## Comparison Contract

| Thành phần giữ chung | Quyết định |
|---|---|
| User | Người học có nội dung mới, cần giữ ý và điểm chưa hiểu để xem lại |
| Situation | Vừa học đoạn bài mẫu về precision/recall, có hai dấu vết cá nhân |
| Task | Tạo, kiểm tra và lưu note cá nhân từ cùng bài và dấu vết |
| Desired outcome | Lưu một note có ý cần nhớ, câu hỏi chưa hiểu và nguồn để xem lại |
| Fixture | S1: precision; S2: recall; S3: trade-off; highlight precision, câu hỏi về bỏ sót |
| Chung ~70% | Header, source panel, fixture, trình soạn note, nút xem nguồn/lưu/undo/reset |
| Khác chủ yếu | User tự tạo; AI hỏi rồi tạo; AI tạo trước user review |

Không yêu cầu tester học thuộc kiến thức. Bài mẫu và output đều được soạn cho prototype, không phải dữ liệu interview.

## Options và trade-off

| | A — User tạo | B — Cùng tạo | C — AI tạo trước |
|---|---|---|---|
| Mechanism | Khung trống để user tự viết; gợi ý cấu trúc tùy chọn | User trả lời trọng tâm, AI tạo outline/nháp | AI tạo nháp ngay từ dấu vết và bài |
| Trigger | User chọn mở khung/gợi ý | User chọn mục tiêu, bấm tạo | User mở option C; nháp xuất hiện |
| User làm | Chọn ý, viết note, gán câu hỏi/nguồn | Chọn trọng tâm, cung cấp câu hỏi, chỉnh nháp | Kiểm tra sự phù hợp, sửa/bỏ nháp |
| AI làm | Gợi ý tiêu đề khi được yêu cầu; không chọn thay nội dung | Tổ chức theo trọng tâm đã trả lời | Chọn/tổ chức nội dung ban đầu |
| Trade-off | Agency cao nhưng tốn công tạo note | Cá nhân hóa nhưng câu hỏi gây thêm ma sát | Bắt đầu nhanh nhưng nguy cơ bỏ qua review và mất cách diễn đạt cá nhân |

Distance check: A–B khác ở ai tạo câu chữ; B–C khác ở việc hỏi trước hay tạo trước; A–C khác ở người khởi tạo nội dung. Không cố tình làm một option tệ, cùng công cụ edit/source/recovery cho cả ba.

## Human–AI Decision Table

| Decision | A | B | C |
|---|---|---|---|
| Expectation | User tự tạo; AI chỉ gợi ý khung | Hỏi một trọng tâm; tạo nháp để chỉnh | Nháp đã được AI mô phỏng tạo, chưa xác nhận |
| Act / Ask / Don't Act | Don't Act khi user chưa yêu cầu | Ask trước khi Act; cần trọng tâm | Act để tạo nháp, Don't Act với lưu/xác nhận |
| Capability/limit | Không suy diễn user đã hiểu | Chỉ dùng fixture và trả lời hiện tại | Không chứng minh độ đúng hay hiểu của user |
| Evidence | S1/S2/S3 và dấu vết hiển thị cùng note | Như A; thêm trọng tâm do user chọn | Như A; nhãn nháp và câu hỏi còn mở |
| Uncertainty | Điểm chưa hiểu giữ dạng câu hỏi | Không giải thích chắc chắn thay user | Không biến câu hỏi thành kết luận; yêu cầu tự kiểm tra |
| Control | Tự viết, gợi ý tùy chọn, edit/reject/undo | Sửa trọng tâm, tạo lại, edit/reject/undo | Edit/reject/undo, trở về tự viết |
| Recovery | Undo về note trước hành động; reset fixture | Như A; tạo lại không xóa vĩnh viễn note cũ | Bỏ nháp về trống hoặc undo để lấy lại |
| Save/data | User bấm lưu; lưu trong bộ nhớ trang | Như A | Như A |

Không gửi dữ liệu lên server; không học từ feedback; refresh đóng phiên sẽ mất note. Không có model/API thật. Có thể tải note đã xác nhận thành file văn bản để mở lại; nguồn nằm trong prototype. Tất cả option cho phép tổ chức theo câu hỏi, không ép theo bài để tôn trọng E7/E8.

## Annotation dành cho nhóm, không hiện cho tester

| Option | We expect | Watch for | Do not explain |
|---|---|---|---|
| A | Tự viết theo ý riêng | Effort, có dùng gợi ý khung không | Viết sẵn nội dung hộ tester |
| B | Trả lời trọng tâm rồi sửa nháp | Câu hỏi có giúp hay cản trở | Gợi ý chọn trọng tâm nào |
| C | Review trước khi lưu | Bỏ qua nguồn, sửa/bỏ nháp | Khẳng định nháp đúng hoặc tiết kiệm thời gian |
