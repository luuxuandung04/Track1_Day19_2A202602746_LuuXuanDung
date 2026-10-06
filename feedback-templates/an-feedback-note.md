# Prototype Feedback Note — Kịch bản luyện tập S02

> Dữ liệu luyện tập do AI tạo từ persona, dùng để diễn tập cách ghi chép và tổng hợp. Không phải phiên test với người dùng thật.

- Persona: S02 — nhớ ý nhưng quên thuật ngữ, thường mô tả bằng ngôn ngữ tự nhiên.
- Người biên soạn tài liệu: Codex; thứ tự: B → C → A.

| Dữ kiện | B | C | A |
|---|---|---|---|
| First action | Nhập “làm sản phẩm tốt nhưng không ai cần” | Đọc lý do liên quan dưới mỗi note | Gõ nguyên cả câu nhớ được vào ô từ khóa |
| Do dự/hiểu sai | Phân vân note 01 và 04 | Do dự vì có ba gợi ý cùng lúc | Không thấy kết quả tốt với câu dài, phải rút gọn |
| Evidence | Chọn note 01 vì có nguồn; bỏ 04 | Mở nguồn note 01 | Mở nguồn sau khi tìm được note 01 |
| Recovery | Loại ứng viên thiếu nguồn | Bỏ note 03 không sát task | Rút từ khóa thành “nhu cầu” |
| Outcome | Hoàn thành task trong kịch bản | Hoàn thành task trong kịch bản | Hoàn thành sau khi đổi truy vấn |
| Evidence trái kỳ vọng | Lý do khớp giúp chọn nhưng không thay kiểm nguồn | Chủ động gợi ý vẫn cần lọc | A vẫn dùng được khi user biết cách rút từ khóa |

Persona chọn **B** vì có thể diễn đạt ý nhớ mà không cần biết thuật ngữ chính xác. Trade-off: phải đọc và kiểm tra nhiều ứng viên AI.

## OBSERVED TRONG KỊCH BẢN
Luồng nhấn mạnh khả năng phát hiện note 04 gần nghĩa nhưng thiếu nguồn, rồi chuyển sang note 01.

## INTERPRETED
B tạo khác biệt rõ nhất khi user nhớ nghĩa nhưng không nhớ từ khóa; nguồn và lý do khớp cần đặt cạnh nhau.

## NEXT CHANGE ĐỀ XUẤT
Ở B, ưu tiên ứng viên có nguồn và giải thích ngắn vì sao khớp; vẫn hiển thị note thiếu nguồn ở nhóm riêng.

## STILL UNPROVEN
Chưa biết semantic search thật có xếp đúng, user có hiểu lý do khớp và có kiểm nguồn hay không.
