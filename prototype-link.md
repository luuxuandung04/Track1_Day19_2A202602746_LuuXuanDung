> **CHƯA CẬP NHẬT THEO BẢN CHỐT CHẶNG 1–3:** tài liệu/HTML dưới đây là bản thử cũ với task tạo note precision/recall. Bản chính thức chuyển sang tìm lại note và nguồn trong lúc làm Lab; cần cập nhật ở chặng 4–5 trước khi dùng test. Xem three-option-design-sheet.md.

# Prototype A/B/C

Mở [prototype/index.html](prototype/index.html) bằng Chrome/Edge. Chọn A, B hoặc C; mỗi option có cùng fixture và phần kiểm tra/lưu. Nút Về bối cảnh đưa về common context; “Reset phiên” xóa note của cả ba trong phiên.

Không cần cài đặt hoặc mạng. Các gợi ý AI là output mô phỏng dựng sẵn theo lựa chọn; không có model thật. Nội dung chỉ lưu trong bộ nhớ trang, refresh sẽ mất. Sau khi lưu có thể tải file note để xem lại.

Link online A/B/C dùng cho giảng viên/TA: **chưa publish**. Repo cục bộ không phải link chia sẻ. Nếu nộp file, gửi cả thư mục prototype; nếu cần URL, publish sau khi người học chọn nơi hosting.

## Kiểm tra test-ready

- A: viết note; thử gợi ý khung; edit, lưu, tải; mở nguồn; bỏ và undo.
- B: chọn trọng tâm; tạo nháp; chỉnh; đổi trọng tâm/tạo lại; undo; lưu.
- C: thấy nháp chưa xác nhận; kiểm nguồn; chỉnh hoặc bỏ; undo; lưu.
- Không lưu note trống; lưu không gửi dữ liệu; đổi option không trộn note.
- Reset đưa cả ba về baseline cùng task/fixture.
- Kiểm bằng người ngoài nhóm tự thao tác, chưa có dữ liệu chứng minh đã qua gate 4.
