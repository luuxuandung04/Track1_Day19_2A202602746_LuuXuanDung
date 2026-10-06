# Track1_Day19_2A202602746_LuuXuanDung

Tài liệu bài thử nghiệm cá nhân — Hoàn thiện **Chặng 1–6** với dữ liệu thử nghiệm người dùng thực tế — 05/10/2026.

## 1. Thông tin cá nhân và nhóm

- MHV: 2A202602746 · Lưu Xuân Dũng · GitHub: luuxuandung04.
- Nhóm 3aecaykhe: Nguyễn Văn An, Lưu Xuân Dũng, Nguyễn Long Khánh.
- Case B — AI Notes: Personal Learning Notes.
- Baseline: https://github.com/luuxuandung04/Track1_Day17_2A202602746_LuuXuanDung
- Đề bài: https://vlearn.dev/course/k04-l34-p2-t1/reader?day=D05&part=codelab-f3fc688af6874124b3d45f0d65a5a14e-s11-doc

## 2. Hypothesis Problem

Khi cần ôn tập hoặc dùng lại kiến thức đã học trong khóa online (VLearn) sau một thời gian, người học tự ghi chú gặp khó khăn trong việc tiếp cận đúng ý cần dùng và quay về nội dung gốc, vì ghi chú nằm phân tán (theo từng slide trên nền tảng, hoặc ở công cụ riêng tách khỏi slide) và AI bên ngoài không biết ngữ cảnh bài học, dẫn đến phải dò lại slide, chuyển qua lại giữa nhiều công cụ và mất thêm công để tìm lại.

Chi tiết phân tích dữ liệu phỏng vấn, bằng chứng thực tế và phản chứng tại [Chặng 1: Evidence Snapshot](evidence-snapshot.md).

## 3. Three Solution Options

| A (Tự tìm) | B (Tìm theo ý nhớ) | C (Chủ động gom) |
|---|---|---|
| Gom note và nguồn, người dùng tìm theo từ khóa | AI tìm note theo ý nhớ người dùng mô tả, trả ứng viên nguyên bản | AI chủ động gom note liên quan ngữ cảnh khi mở Lab |

Ở cả ba phương án, người học luôn giữ quyền tự chủ: đọc đối chiếu nguồn gốc và tự tay viết câu có dẫn nguồn vào bài Lab. Phương án B không viết hộ câu văn hay giải thích thay; Phương án C không tự ý chèn nội dung vào nháp.

- [Chặng 2–3: Design Sheet và Human–AI Decision Table](three-option-design-sheet.md).
- Prototype tương tác thực tế trên Lovable:
  - [A — Tự tìm](https://id-preview--ef1fd8a5-1c22-415d-9e3a-b01bbca80717.lovable.app/)
  - [B — Note nhanh & tìm kết hợp](https://id-preview--ef1fd8a5-1c22-415d-9e3a-b01bbca80717.lovable.app/prototype-b)
  - [C — Chủ động gom](https://id-preview--ef1fd8a5-1c22-415d-9e3a-b01bbca80717.lovable.app/prototype-c)
- Chi tiết cấu hình thử nghiệm và kịch bản: xem [Prototype Link & Fixture](prototype-link.md) và [Chặng 5: Test Plan](test-plan.md).

## 4. Đóng góp cá nhân & Phân công nhóm

- **Lưu Xuân Dũng:** Phụ trách chính Phương án B (Tìm note theo ý nhớ & ghi chú nhanh), chuẩn hóa kịch bản thử nghiệm Chặng 5, trực tiếp facilitate phiên thử nghiệm với người dùng T01, tổng hợp dữ liệu phản hồi và đề xuất Next Change.
- **Nguyễn Văn An:** Phụ trách Phương án A (Tìm kiếm từ khóa), chuẩn bị fixture ghi chú, trực tiếp facilitate phiên thử nghiệm với người dùng T02.
- **Nguyễn Long Khánh:** Phụ trách Phương án C (Gợi ý chủ động theo ngữ cảnh), rà soát cơ chế phục hồi (recovery), trực tiếp facilitate phiên thử nghiệm với người dùng T03.
- **Cả nhóm:** Đồng thuận về Problem Hypothesis, hoàn thiện bảng Human–AI Decision Table, và tham gia phiên tổng hợp Group Feedback Synthesis.

## 5. Prototype Feedback — Thử nghiệm người dùng thực tế

Đã hoàn thành thử nghiệm thực tế với ba người dùng độc lập:
- [T01 — Minh Tâm (Dũng facilitate)](prototype-feedback-note.md): Người nhớ từ khóa tốt, ưu tiên kiểm soát → chọn **Phương án A**.
- [T02 — Tuấn Kiệt (An facilitate)](feedback-templates/an-feedback-note.md): Người nhớ ý niệm nhưng quên thuật ngữ chính xác → chọn **Phương án B**.
- [T03 — Thảo My (Khánh facilitate)](feedback-templates/khanh-feedback-note.md): Người cần tra cứu nhanh khi làm bài Lab → chọn **Phương án C**.
- [Bản tổng hợp phản hồi nhóm (Group Feedback Synthesis)](group-feedback-synthesis.md): Phân tích chi tiết 4 pattern hành vi và điểm đánh đổi (trade-offs) thực tế.

**Group Next Change:** Thêm trạng thái xác thực nguồn hai bước: chuyển trạng thái từ `[Chưa mở nguồn]` sang `[Đã kiểm tra nguồn]` và tạm khóa nút sao chép dẫn nguồn cho đến khi người dùng nhấp mở slide bài giảng gốc ít nhất một lần.  
**Still Unproven:** Hành vi khi quy mô kho ghi chú lên tới hàng trăm thẻ, độ chính xác của tìm kiếm ngữ nghĩa khi đối chiếu nhiều khái niệm tương tự, và mức độ ma sát thực tế khi bắt buộc người dùng mở slide kiểm tra.

## 6. AI Support Log

Xem [AI Support Log](ai-support-log.md): Bảng phân định chi tiết trách nhiệm việc AI làm (sinh mã giao diện Lovable, rà soát cấu trúc checklist) so với việc con người làm (phỏng vấn người dùng, ra quyết định thiết kế, trực tiếp điều phối 3 phiên thử nghiệm và tự sửa các lỗi thiên kiến tự động hóa của AI).

## 7. Trạng thái các chặng

- [x] Chặng 1: Evidence, Hypothesis và phản chứng được chọn lọc từ dữ liệu phỏng vấn.
- [x] Chặng 2: Three Solution Options (A/B/C) và Comparison Contract; B tìm theo ý nhớ.
- [x] Chặng 3: Human–AI Decision Table, ranh giới quyền kiểm soát và cơ chế recovery.
- [x] Phân công nhóm: Option A — An, Option B — Dũng, Option C — Khánh.
- [x] Chặng 4: Bộ prototype A/B/C tương tác trên Lovable, kho 4 ghi chú mẫu và nhãn nguồn minh họa.
- [x] Chặng 5: Test Plan chuẩn hóa với Outcome Task, 5 trọng tâm quan sát và kịch bản baseline đồng nhất.
- [x] Chặng 6: Hoàn thành 3 phiên thử nghiệm người dùng thực tế (T01, T02, T03), tổng hợp pattern và thống nhất Group Next Change.
- [x] Đóng góp cá nhân, AI Support Log và checklist hoàn chỉnh cho bài thử nghiệm.

## 8. Đánh giá tương tác & Heuristic Review

Xem [Báo cáo đánh giá tương tác và Heuristic Review](usability-review.md) nhằm phân tích luồng trải nghiệm của ba nhóm người dùng và đề xuất chuẩn hóa điểm bắt đầu thử nghiệm.
