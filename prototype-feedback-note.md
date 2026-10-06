# Prototype Feedback Note — Kịch bản luyện tập S01

> Dữ liệu luyện tập do AI tạo từ persona, dùng để diễn tập cách ghi chép và tổng hợp. Không phải phiên test với người dùng thật.

- Persona: S01 — quen tìm kiếm, nhớ từ khóa, ưu tiên quyền kiểm soát.
- Người biên soạn tài liệu: Codex; thứ tự: A → B → C.

| Dữ kiện | A | B | C |
|---|---|---|---|
| First action | Gõ “nhu cầu” vào ô tìm | Mô tả ý nhớ bằng một câu | Đọc ngay ứng viên đầu tiên |
| Do dự/hiểu sai | Đổi từ khóa một lần | Dừng để so hai kết quả gần nghĩa | Ban đầu chưa biết vì sao hệ thống gợi ý note 03 |
| Evidence | Mở nguồn note 01 trước khi viết | Mở nguồn note 01; bỏ note 04 thiếu nguồn | Mở nguồn note 01 sau khi đọc lý do |
| Recovery | Đổi “sản phẩm” sang “nhu cầu” | Loại note 04, giữ note 01 | Tắt gợi ý rồi mở tìm thủ công để kiểm tra lại |
| Outcome | Hoàn thành task trong kịch bản | Hoàn thành task trong kịch bản | Hoàn thành task trong kịch bản |
| Evidence trái kỳ vọng | Tìm từ khóa đã đủ, không cần AI | B hữu ích nhưng có thêm bước đọc ứng viên | C không tiết kiệm nhiều vì vẫn kiểm tra lại |

Persona chọn **A** vì cơ chế dễ đoán và tự kiểm soát. Trade-off: phải nhớ một từ khóa đủ gần với note.

## OBSERVED TRONG KỊCH BẢN
Luồng được xây dựng để persona ưu tiên tìm chủ động, kiểm nguồn và tránh note thiếu nguồn.

## INTERPRETED
A có thể phù hợp với người có chiến lược tìm kiếm rõ; B/C chỉ tạo thêm giá trị khi user không nhớ từ khóa hoặc cần khởi động nhanh.

## NEXT CHANGE ĐỀ XUẤT
Giữ bộ lọc nguồn và làm nhãn “Thiếu nguồn” nổi bật ở mọi option.

## STILL UNPROVEN
Chưa biết người thật có hành động như persona, có hoàn thành độc lập hoặc tiết kiệm thời gian hay không.
