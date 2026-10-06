# Prototype Feedback Note — Kịch bản luyện tập S03

> Dữ liệu luyện tập do AI tạo từ persona, dùng để diễn tập cách ghi chép và tổng hợp. Không phải phiên test với người dùng thật.

- Persona: S03 — đang làm Lab, ít thời gian, muốn hệ thống gợi ý trước.
- Người biên soạn tài liệu: Codex; thứ tự: C → A → B.

| Dữ kiện | C | A | B |
|---|---|---|---|
| First action | Chọn ngay note 01 từ danh sách gợi ý | Gõ “kiểm chứng nhu cầu” | Nhập mô tả ngắn về ý nhớ |
| Do dự/hiểu sai | Suýt sao chép nguồn mà chưa mở slide | Không gặp khó khi từ khóa đúng | Thấy B giống A khi đã biết từ khóa |
| Evidence | Quay lại mở nguồn note 01 | Mở nguồn note 02 rồi note 01 | Mở nguồn note 01 |
| Recovery | Bỏ note 03, giữ 01; dùng tìm thủ công để đối chiếu | Sửa từ khóa từ “kiểm chứng” sang “không ai cần” | Chuyển tab từ mô tả sang từ khóa để so sánh |
| Outcome | Hoàn thành task trong kịch bản | Hoàn thành task trong kịch bản | Hoàn thành task trong kịch bản |
| Evidence trái kỳ vọng | Gợi ý trước có thể khiến bỏ qua kiểm nguồn | A không quá chậm với fixture nhỏ | B không hơn A khi user đã biết đúng từ khóa |

Persona chọn **C** vì giảm bước khởi động. Trade-off: nguy cơ chấp nhận gợi ý sẵn mà không kiểm chứng.

## OBSERVED TRONG KỊCH BẢN
Luồng cố tình chứa một khoảnh khắc bỏ qua nguồn để kiểm tra vai trò của cảnh báo và control.

## INTERPRETED
C hữu ích cho task có context rõ, nhưng cần buộc user nhận biết trạng thái nguồn trước khi dùng dẫn chứng.

## NEXT CHANGE ĐỀ XUẤT
Không cho “Sao chép dẫn nguồn” nếu chưa mở nguồn lần đầu trong phiên; hiển thị trạng thái “Đã kiểm tra nguồn”.

## STILL UNPROVEN
Chưa biết ma sát bắt buộc mở nguồn có gây khó chịu hoặc làm giảm tốc độ task với người thật hay không.
