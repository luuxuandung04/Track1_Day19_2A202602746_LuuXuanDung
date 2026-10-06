# Chặng 6 — Group Feedback Synthesis từ kịch bản luyện tập

> Tổng hợp dưới đây dùng ba persona AI tạo (S01–S03). Đây là dữ liệu luyện tập, không phải ba phiên test ngoài nhóm và không thay thế Gate 5 bằng người dùng thật.

| Nội dung | S01 — Dũng | S02 — An | S03 — Khánh | Pattern / khác biệt trong kịch bản |
|---|---|---|---|---|
| Thứ tự | A–B–C | B–C–A | C–A–B | Đã xoay thứ tự để diễn tập |
| First action | Tìm từ khóa | Mô tả ý nhớ | Duyệt gợi ý sẵn | Mỗi cơ chế có điểm khởi động khác nhau |
| Breakdown | Đổi từ khóa | Phân vân note gần nghĩa | Suýt bỏ qua kiểm nguồn | Nguồn và độ phù hợp là điểm quyết định |
| Kiểm nguồn | Mở nguồn trước viết | Loại note thiếu nguồn | Ban đầu định sao chép trước khi mở | Hai persona kiểm sớm; một persona cần nhắc trạng thái |
| Recovery | Đổi query/tìm thủ công | Loại ứng viên | Bỏ gợi ý/tìm thủ công | Cả ba cần đường quay về tìm chủ động |
| Option chọn | A | B | C | Không có option thắng; lựa chọn phụ thuộc cách nhớ và áp lực thời gian |
| Trade-off | Control ↔ nhớ từ khóa | Không cần từ khóa ↔ đọc ứng viên | Ít thao tác ↔ automation bias | Ba cơ chế tạo trade-off có ý nghĩa |

## Pattern học được từ bài diễn tập

1. Note có nguồn được ưu tiên hơn note gần nghĩa nhưng thiếu nguồn.
2. Tìm thủ công là recovery chung cần giữ trong B/C.
3. A phù hợp khi nhớ từ khóa; B khi nhớ ý; C khi context task rõ và user muốn bắt đầu nhanh.
4. C có rủi ro lớn nhất về việc dùng gợi ý trước khi kiểm chứng.

## Group Next Change cho iteration luyện tập

**Thêm trạng thái kiểm chứng nguồn nhất quán trên A/B/C: “Chưa mở nguồn” → “Đã kiểm tra nguồn”; chỉ bật thao tác sao chép dẫn nguồn sau khi user đã mở nguồn trong phiên.**

Evidence từ kịch bản: S02 loại note 04 vì thiếu nguồn; S03 suýt sao chép trước khi mở nguồn; S01 chủ động kiểm nguồn ở mọi option. Thay đổi này giữ user quyết định câu viết, giảm nguy cơ dùng dẫn chứng chưa kiểm tra và không làm ba cơ chế giống nhau.

## Still Unproven

Ba persona không chứng minh hành vi người thật. Chưa biết trạng thái bắt buộc mở nguồn có tạo ma sát, semantic search thật có xếp đúng, pain có phổ biến, hoặc giải pháp cải thiện việc học dài hạn. Cần ba người ngoài nhóm dùng cùng task để kiểm chứng.
