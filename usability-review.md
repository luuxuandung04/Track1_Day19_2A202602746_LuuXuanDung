# Báo cáo đánh giá tương tác & Heuristic Review

Tài liệu phân tích trải nghiệm người dùng và đánh giá luồng tương tác của ba phương án thiết kế A/B/C phục vụ bài thử nghiệm cá nhân.

## 1. Cơ sở đánh giá và hiện trạng giao diện

- **Phương án A (Tự tìm):** Hiển thị danh sách 4 ghi chú mẫu kèm thanh tìm kiếm từ khóa. Nhấp vào ghi chú để xem chi tiết; ghi chú có nguồn cho phép mở slide đối chiếu, ghi chú thiếu nguồn bị khóa tính năng dẫn chứng.
- **Phương án B (Note nhanh & tìm kết hợp):** Cung cấp hai tab (Tìm từ khóa và Tìm theo mô tả ý nhớ). Khi nhập truy vấn diễn đạt tự nhiên (ví dụ: *“làm sản phẩm tốt nhưng không ai cần”*), hệ thống trả về danh sách 3 ứng viên phù hợp nhất kèm giải thích lý do khớp.
- **Phương án C (Chủ động gom):** Khi người dùng mở giao diện làm bài Lab, hệ thống tự động nhận diện ngữ cảnh và hiển thị sẵn các ghi chú liên quan nhất. Người dùng có quyền duyệt, giữ lại hoặc loại bỏ gợi ý, hoặc chuyển sang chế độ tìm kiếm thủ công.

---

## 2. Phân tích tương tác theo các nhóm hành vi người dùng (User Profiles)

### Nhóm 1 — Người dùng tìm kiếm chủ động theo từ khóa (Keyword-driven)
- **Đặc điểm:** Nhớ rõ thuật ngữ trọng tâm (“nhu cầu”, “kiểm chứng”), quen thuộc với thanh công cụ tìm kiếm truyền thống, ưu tiên cảm giác tự chủ.
- **Tương tác với A:** Tốc độ cao, luồng thao tác trực tiếp, dễ dàng kiểm chứng nguồn. Rủi ro duy nhất là khi từ khóa gõ vào không xuất hiện nguyên văn trong văn bản ghi chú.
- **Tương tác với B & C:** Thấy các bước phân tích lý do hoặc gợi ý tự động là không quá cần thiết, thậm chí tốn thêm thời gian đọc lướt các thẻ ứng viên.

### Nhóm 2 — Người dùng tìm kiếm theo ngữ nghĩa (Concept-driven)
- **Đặc điểm:** Chỉ nhớ ý niệm hoặc tình huống thực tế (*“làm tốt mà không ai mua/dùng”*), không thể nhớ chính xác tên slide hay thuật ngữ bài học.
- **Tương tác với A:** Rất dễ bị bế tắc do gõ cả câu dài dẫn đến kết quả tìm kiếm rỗng, phải mất công thử lại nhiều lần bằng các từ khóa khác nhau.
- **Tương tác với B:** Cơ chế tìm theo ngữ nghĩa phát huy giá trị tối đa; người dùng tìm ra đúng ghi chú cần dùng ngay ở lần thử đầu tiên.
- **Tương tác với C:** Có thể tận dụng được các gợi ý sẵn, nhưng cần đọc kỹ lý do để chắc chắn ghi chú đó đúng với ý mình đang cần.

### Nhóm 3 — Người dùng tác nghiệp nhanh theo ngữ cảnh (Context-driven)
- **Đặc điểm:** Đang tập trung làm bài tập thực hành/Lab dưới áp lực thời gian, muốn tiết kiệm tối đa các bước thao tác trung gian.
- **Tương tác với C:** Rút ngắn thời gian khởi đầu đáng kể vì các tài liệu liên quan đã được bày sẵn trước mắt.
- **Rủi ro tương tác:** Dễ xuất hiện thiên kiến tự động hóa — người dùng có xu hướng sao chép ngay nội dung gợi ý vào bài làm mà bỏ qua bước nhấp mở slide gốc để kiểm tra ngữ cảnh học thuật.

---

## 3. Các vấn đề trải nghiệm cần khắc phục (Usability Findings)

1. **Lệch điểm xuất phát giữa các phương án:**  
   Trong bản thử nghiệm Lovable, Phương án A và C mở trực tiếp vào giao diện làm bài Lab, trong khi Phương án B lại có xu hướng mở ở giao diện slide kèm chức năng ghi chú nhanh. Điều này có thể làm sai lệch thời gian đo lường và mức độ tập trung của người dùng khi làm bài thử nghiệm so sánh.  
   → **Giải pháp:** Chuẩn hóa quy trình thử nghiệm để cả ba phương án đều bắt đầu tại cùng một bài Lab với nháp trống và cùng kho 4 ghi chú mẫu.

2. **Thiếu phản hồi trạng thái xác thực nguồn:**  
   Giao diện hiện tại cho phép người dùng bấm nút sao chép trích dẫn ngay cả khi chưa mở slide xem nội dung. Điều này làm tăng nguy cơ người học trích dẫn sai hoặc không thực sự hiểu nội dung bài.  
   → **Giải pháp:** Bổ sung cơ chế phản hồi hai trạng thái: hiển thị nhãn `[Chưa mở nguồn]` và chỉ chuyển sang `[Đã kiểm tra nguồn]` (đồng thời bật nút sao chép) sau khi người dùng thực hiện thao tác mở xem slide.

---

## 4. Tổng kết đánh giá

Cả ba phương án đều giải quyết được bài toán truy cập lại kiến thức đã học, nhưng đại diện cho ba mức độ can thiệp tương tác khác nhau (Manual Search → Assisted Semantic Search → Proactive Suggestion). Sự kết hợp giữa cơ chế tìm kiếm ngữ nghĩa linh hoạt (B) với các rào cản kiểm chứng nguồn cẩn trọng sẽ là hướng đi tối ưu nhất cho sản phẩm ghi chú học tập.
