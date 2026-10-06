# Chặng 6 — Group Feedback Synthesis từ 3 phiên thử nghiệm người dùng

Bản tổng hợp kết quả thử nghiệm trực tiếp từ ba phiên người dùng thực tế ngoài nhóm (T01, T02, T03) nhằm so sánh ba cơ chế tìm lại và sử dụng ghi chú trong bài Lab (Option A, B, C).

| Nội dung so sánh | T01 — Minh Tâm (Dũng facilitate) | T02 — Tuấn Kiệt (An facilitate) | T03 — Thảo My (Khánh facilitate) | Pattern & Khác biệt quan sát được |
|---|---|---|---|---|
| **Thứ tự thử nghiệm** | A → B → C | B → C → A | C → A → B | Đã xoay vòng thứ tự để giảm thiểu ảnh hưởng của thói quen thao tác lặp lại. |
| **Hành động đầu tiên (First action)** | Nhấp ô tìm kiếm, gõ từ khóa ngắn. | Nhập nguyên câu mô tả ý nhớ bằng ngôn ngữ tự nhiên. | Đọc ngay danh sách ghi chú do hệ thống gợi ý sẵn. | Mỗi cơ chế kích hoạt một thói quen tương tác và điểm xuất phát hoàn toàn khác nhau. |
| **Điểm ngập ngừng (Breakdown)** | Từ khóa ban đầu chưa khớp ngay, phải đổi từ khóa. | Gõ câu dài vào ô tìm kiếm từ khóa ở A bị rỗng kết quả; phân vân giữa hai note gần nghĩa ở B. | Suýt bấm sao chép dẫn chứng ở C mà quên mở xem slide bài học gốc. | Trạng thái nguồn và độ sát nghĩa của từ khóa là hai yếu tố gây do dự chính. |
| **Kiểm tra nguồn học liệu** | Luôn mở nguồn slide trước khi bắt đầu viết câu nháp. | Loại bỏ ngay ghi chú thiếu nguồn dù nội dung rất hay; mở nguồn ghi chú có slide kiểm chứng. | Ban đầu định dán ngay, sau đó khựng lại đọc nhãn nguồn rồi mới mở kiểm chứng. | Người dùng có xu hướng ưu tiên ghi chú có nguồn gốc rõ ràng, nhưng ở C cần lời nhắc để tránh bỏ sót. |
| **Cách xử lý & Phục hồi (Recovery)** | Đổi từ khóa linh hoạt; thử nghiệm từ khóa đồng nghĩa. | Rút gọn câu mô tả dài thành từ khóa ngắn khi sang A; loại bỏ ứng viên không nguồn ở B. | Đóng bớt gợi ý không sát; bật chế độ tìm kiếm thủ công để đối chiếu chéo. | Cả ba người dùng đều cần và chủ động sử dụng đường lui (fallback) về tìm kiếm thủ công. |
| **Phương án lựa chọn** | **Phương án A** | **Phương án B** | **Phương án C** | Không có phương án áp đảo tuyệt đối; lựa chọn phụ thuộc vào việc người học nhớ từ khóa hay nhớ ý niệm và áp lực thời gian. |
| **Trade-off thực tế** | Quyền kiểm soát cao ↔ Bắt buộc phải nhớ từ khóa phù hợp. | Không cần nhớ từ vựng chính xác ↔ Tốn thêm thời gian đọc và đánh giá các ứng viên AI. | Thao tác nhanh nhất, không mất công khởi động ↔ Rủi ro thiên kiến tự động hóa (bỏ qua bước đọc kiểm chứng). | Cả ba cơ chế đều tạo ra những đánh đổi có ý nghĩa rõ rệt trong trải nghiệm học tập. |

---

## Pattern rút ra từ các phiên thử nghiệm

1. **Tính xác thực của nguồn quan trọng hơn độ gần nghĩa:**  
   Cả ba người dùng đều sẵn sàng bỏ qua một ghi chú có nội dung rất hay nếu ghi chú đó bị gắn nhãn "Thiếu nguồn", và ưu tiên chọn ghi chú có liên kết trực tiếp tới slide bài học để đưa vào bài Lab.

2. **Tìm kiếm thủ công là cơ chế phục hồi (Recovery) bắt buộc:**  
   Dù ở Phương án B hay C, khi người dùng nghi ngờ kết quả do hệ thống đưa ra hoặc muốn chắc chắn không bỏ sót, họ đều tìm cách chuyển sang chế độ gõ tìm kiếm thủ công để tự mình kiểm tra lại.

3. **Phân hóa rõ rệt theo trạng thái trí nhớ của người học:**  
   - Người nhớ rõ thuật ngữ sẽ thấy A nhanh gọn và đáng tin cậy nhất.  
   - Người chỉ nhớ mang máng ý niệm (concept) sẽ thấy B là cứu cánh thực sự vì không bị bế tắc do từ khóa.  
   - Người đang chịu áp lực thời gian hoàn thành bài tập sẽ đánh giá cao C nhờ khả năng giảm tải thao tác bắt đầu.

4. **Nguy cơ thiên kiến tự động hóa (Automation Bias) ở Phương án C:**  
   Khi hệ thống gợi ý sẵn quá tiện lợi, người dùng rất dễ hình thành quán tính bấm nút sao chép trích dẫn vào bài làm ngay mà không mở học liệu gốc để đọc lại bối cảnh, ảnh hưởng tiêu cực đến mục tiêu học tập sâu.

---

## Group Next Change — Đề xuất cải tiến thống nhất của nhóm

**Bổ sung cơ chế xác thực nguồn hai bước trên cả ba phương án:**  
- Thiết lập trạng thái rõ ràng trên thẻ ghi chú: chuyển từ `[Chưa mở nguồn]` sang `[Đã kiểm tra nguồn]`.  
- **Khóa tạm thời tính năng sao chép dẫn nguồn**, chỉ kích hoạt nút sau khi người dùng đã thực sự nhấp mở xem nội dung slide học liệu gốc ít nhất một lần trong phiên làm việc.

*Cơ sở từ dữ liệu thử nghiệm:*  
- T02 chủ động loại bỏ note 04 vì thiếu nguồn;  
- T03 suýt bấm sao chép ngay khi chưa mở kiểm tra slide ở Phương án C;  
- T01 nhấn mạnh sự an tâm khi tự mình nhìn thấy slide nguồn.  
Cải tiến này giữ nguyên vai trò quyết định của người học, ngăn ngừa việc trích dẫn cẩu thả mà không làm mất đi tính nhanh nhạy của từng cơ chế.

---

## Still Unproven — Những điểm cần tiếp tục kiểm chứng

1. **Quy mô dữ liệu thực tế:** Trong bài thử nghiệm, kho dữ liệu chỉ gồm 4 ghi chú mẫu. Khi người học tích lũy hàng trăm ghi chú qua nhiều tuần học, liệu cơ chế tìm từ khóa (A) có bị quá tải và cơ chế tìm theo ý (B) có xếp hạng đúng thứ tự ưu tiên hay không?
2. **Ma sát của cơ chế khóa nút:** Việc bắt buộc phải mở slide nguồn mới được sao chép có tạo ra cảm giác gượng ép hoặc gây khó chịu cho người dùng khi họ đã thực sự thuộc bài hay không?
3. **Hiệu quả ghi nhớ dài hạn:** Chưa có dữ liệu theo dõi sau 1–2 tuần để kiểm chứng xem người dùng phương án A (tự tìm) có ghi nhớ kiến thức tốt hơn người dùng phương án C (được gợi ý sẵn) trong các bài kiểm tra thực tế hay không.
