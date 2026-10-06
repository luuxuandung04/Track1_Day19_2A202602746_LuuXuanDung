# AI Support Log — Nhật ký sử dụng AI & Phân định trách nhiệm

Nhật ký ghi nhận minh bạch quá trình phối hợp cùng các công cụ AI (Lovable, Gemini, Claude) trong bài thử nghiệm cá nhân Case B — AI Notes: Personal Learning Notes.

---

## 1. Bảng phân định công việc: AI làm gì vs. Con người làm gì

| Hạng mục / Chặng | AI hỗ trợ (Phạm vi công cụ) | Con người thực hiện (Dũng & Nhóm) | Lý do không giao toàn quyền cho AI |
|---|---|---|---|
| **Chặng 1: Problem & Hypothesis** | Gợi ý tổng hợp cấu trúc các đoạn trích từ transcript; rà soát lỗi chính tả và định dạng bảng. | Trực tiếp phỏng vấn (Dũng phỏng vấn Minh Tâm); phân biệt evidence thực tế vs. diễn giải; xác định rào cản truy cập lại note khi làm Lab. | AI không thể tự cảm nhận bối cảnh học tập thực tế và dễ nhầm tưởng phát biểu mong muốn (feature request) là vấn đề thật (pain point). |
| **Chặng 2: Solution Options** | Brainstorm danh sách ý tưởng mở rộng trong Solution Parking Lot (#1 – #10). | Chọn lọc 3 phương án cốt lõi (A: Tự tìm, B: Tìm theo ý nhớ, C: Chủ động gợi ý); xây dựng Comparison Contract với cùng 1 task và kho 4 ghi chú mẫu. | Tránh để AI mở rộng tính năng lan man sang AI Tutor hay chatbot trả lời hộ bài tập; giữ đúng trọng tâm hỗ trợ truy xuất ghi chú. |
| **Chặng 3: Human–AI Decisions** | Gợi ý các cặp trạng thái kiểm soát (Act / Ask / Don't Act) và cơ chế undo/reset. | Trực tiếp thiết lập ranh giới quyền tự chủ (Agency): AI không bao giờ được tự viết câu hoặc sửa nháp; người học luôn là người đọc slide và viết câu. | Quyết định đạo đức và phương pháp sư phạm: người học phải tự viết để đảm bảo hiểu bài và ghi nhớ kiến thức. |
| **Chặng 4: Prototype tương tác** | Lovable sinh mã nguồn giao diện ban đầu (React/Tailwind, thanh tìm kiếm, thẻ note, panel gợi ý). | Rà soát giao diện, gắn nhãn “Nguồn minh họa” và “Thiếu nguồn”; kiểm tra tính khả dụng của các nút bấm; thiết lập môi trường baseline sạch trước khi test. | Mã nguồn do AI sinh thường thiếu các xử lý tình huống biên (edge cases) và dễ tạo cảm giác dữ liệu thật gây hiểu lầm. |
| **Chặng 5: Test Plan** | Đề xuất cấu trúc khung 5 trọng tâm quan sát và bảng ghi chú theo chuẩn usability testing. | Soạn thảo Outcome Task trung tính, không mớm lời; phân công người điều phối (Dũng — T01, An — T02, Khánh — T03); chuẩn hóa quy trình mở sẵn Bài Lab cho Option B. | AI có xu hướng gợi ý các câu hỏi dẫn dắt mang tính cảm tính ("Bạn có thấy tiện không?"); con người phải chuẩn hóa thành quan sát hành vi khách quan. |
| **Chặng 6: Usability Testing** | *Không can thiệp.* Toàn bộ dữ liệu xuất phát từ người dùng thật. | Trực tiếp điều phối 3 phiên thử nghiệm độc lập; quan sát điểm ngập ngừng, thao tác phục hồi; ghi chép Feedback Notes; đúc kết 4 pattern và Group Next Change. | Dữ liệu kiểm thử chỉ có giá trị khi xuất phát từ hành vi và phản xạ thực tế của người dùng thật. |

---

## 2. Chi tiết đánh giá phản biện & Những điểm con người tự sửa

### 2.1 Tôi đã dùng AI cho việc gì và đã chọn / bỏ gợi ý nào?
- **Đã chọn:**
  - Sử dụng Lovable để đẩy nhanh tốc độ tạo khung giao diện prototype tương tác cho 3 phương án A/B/C, giúp người dùng có công cụ trực quan để thử nghiệm thay vì chỉ nhìn bản vẽ wireframe tĩnh.
  - Sử dụng LLM để phản biện cấu trúc so sánh, kiểm tra xem các cơ chế ở Phương án A, B, C có thực sự tạo ra khoảng cách tương tác (interaction distance) rõ ràng hay không.
- **Đã loại bỏ:**
  - *Bỏ gợi ý biến Option B thành AI Chatbot giải thích bài:* AI từng đề xuất Option B có thể trả lời câu hỏi và tóm tắt luôn bài học. Nhóm đã kiên quyết loại bỏ vì điều đó biến sản phẩm thành AI Tutor, vi phạm giả thuyết ban đầu về hỗ trợ ghi chú cá nhân.
  - *Bỏ các câu hỏi khảo sát định tính do AI đề xuất:* Loại bỏ các câu hỏi như "Bạn đánh giá độ thông minh của AI mấy điểm?" vì không đo lường được hành vi thực tế của người học khi gặp khó khăn.

### 2.2 AI đã sai, hời hợt hoặc thiên kiến ở đâu?
1. **Lệch điểm xuất phát (Entry Point Discrepancy) trong Prototype:**
   - Khi sinh mã nguồn cho Option B, Lovable mặc định mở ra màn hình slide bài giảng kèm công cụ tạo ghi chú nhanh, trong khi Option A và C lại mở trực tiếp vào bài Lab. Sự khác biệt này làm lệch bối cảnh thử nghiệm và khiến người dùng mất tập trung vào nhiệm vụ chính là tìm lại ghi chú để làm bài Lab.
2. **Nguy cơ gây ra Thiên kiến tự động hóa (Automation Bias):**
   - Ở Option C, AI thiết kế luồng quá "mượt" khi cho phép người dùng bấm sao chép dẫn chứng vào bài nháp ngay lập tức mà không có bất kỳ bước kiểm tra nào. Điều này khuyến khích hành vi học vẹt và sao chép thụ động.
3. **Ảo giác về độ tin cậy của nguồn (Source Hallucination):**
   - Bản nháp giao diện ban đầu của AI không phân biệt rõ ràng giữa ghi chú đã có nguồn kiểm chứng và ghi chú thiếu nguồn, khiến người thử nghiệm dễ tin rằng mọi ghi chú AI gợi ý đều có giá trị như nhau.

### 2.3 Tôi và nhóm đã tự kiểm chứng và sửa lại như thế nào?
1. **Chuẩn hóa quy trình điều phối baseline:**
   - Trong kịch bản Chặng 5, người điều phối chủ động bấm chuyển sang giao diện Bài Lab cho Option B trước khi bàn giao quyền điều khiển cho tester, đảm bảo cả 3 phương án bắt đầu tại cùng một trạng thái.
2. **Thiết lập cơ chế kiểm chứng nguồn hai bước (Group Next Change):**
   - Bổ sung yêu cầu chuyển trạng thái từ `[Chưa mở nguồn]` sang `[Đã kiểm tra nguồn]`. Khóa nút "Sao chép dẫn nguồn" cho tới khi người dùng nhấp mở slide bài học ít nhất một lần.
3. **Minh bạch hóa dữ liệu mẫu (Fixture Transparency):**
   - Tự tay gắn nhãn `[NGUỒN MINH HỌA]` cho các ghi chú 01, 02, 03 và gắn nhãn nổi bật `[Thiếu nguồn]` cho ghi chú 04 để kiểm tra phản xạ phản biện của người dùng.

---

## 3. Bài học rút ra về sự phối hợp Người – Máy (Human-AI Collaboration)

1. **AI là công cụ khuếch đại tốc độ thực thi, không thay thế việc ra quyết định:**  
   AI giúp hoàn thành giao diện prototype trong vài giờ thay vì nhiều ngày, nhưng nếu con người không kiểm soát chặt chẽ bối cảnh bài toán và ranh giới quyền tự chủ (agency), sản phẩm rất dễ đi chệch hướng thành một công cụ giải bài hộ thiếu giá trị sư phạm.
2. **Càng tự động hóa cao, càng cần thiết kế rào cản kiểm chứng:**  
   Thử nghiệm thực tế với người dùng T03 chứng minh rằng gợi ý chủ động (Option C) rất hấp dẫn nhưng dễ dẫn tới sự cẩu thả. Vai trò thiết kế của con người là cài đặt các "ma sát tích cực" (positive friction) để bảo vệ tư duy phản biện của người học.
3. **Dữ liệu thực tế từ con người là thước đo duy nhất:**  
   Mọi phán đoán của AI về độ tiện lợi chỉ là giả định lý thuyết cho đến khi được kiểm chứng qua ánh mắt do dự, câu hỏi ngập ngừng và thao tác bấm nhầm thực tế của người dùng ngoài nhóm trong các phiên thử nghiệm Chặng 6.
