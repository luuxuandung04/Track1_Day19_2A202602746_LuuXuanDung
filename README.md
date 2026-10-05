# Track1_Day19_2A202602746_LuuXuanDung

Repo chuẩn bị bài lab Multiple Prototypes & Human–AI Design, ngày 05/10/2026.
Tên Day19 theo yêu cầu người học; đề VLearn của buổi Day18+19 hiện yêu cầu tên `Track1_Day18_MHV_HoVaTen`. Cần đối chiếu tên trước khi nộp.

## 1. Thông tin cá nhân và nhóm

- MHV: **2A202602746**; họ tên: **Lưu Xuân Dũng**.
- Nhóm: **3aecaykhe**; thành viên: Lưu Xuân Dũng, Nguyễn Văn An, Nguyễn Long Khánh.
- Case giữ nguyên Day17: **Case B — AI Notes: Personal Learning Notes**.
- Baseline: [repo Day17](https://github.com/luuxuandung04/Track1_Day17_2A202602746_LuuXuanDung).
- Đề: https://vlearn.dev/course/k04-l34-p2-t1/reader?day=D05&part=codelab-f3fc688af6874124b3d45f0d65a5a14e-s11-doc
- Trạng thái: đã có evidence snapshot, thiết kế A/B/C, prototype HTML mô phỏng và hướng dẫn test; **chưa có phiên test A/B/C thật hoặc quyết định nhóm sau test**.

## 2. Hypothesis Problem

**Giả thuyết làm việc kế thừa Day17, cần nhóm chốt:** Khi theo dõi bài giảng có nhiều nội dung mới, người học gặp khó khăn trong việc chọn lọc và lưu ý quan trọng vì phải đồng thời hiểu bài và quyết định nội dung cần giữ, dẫn đến có thể bỏ sót ý hoặc phải xem lại học liệu để chuẩn bị ôn tập.

Barrier và consequence là giả thuyết, chưa được xác nhận. P01 có tín hiệu khó hiểu thuật ngữ; SV1 có hành vi ghi từ khóa và pain tìm lại; SV2 có cách ghi riêng đáp ứng nhu cầu. Không gộp ba người thành một hành vi hoặc coi họ đã thử prototype. Giả thuyết cạnh tranh B (khó tìm/hiểu lại ghi chú) được SV1 hỗ trợ mạnh hơn A; giữ B trong phần Still Unproven, không tự đổi problem. Xem [Evidence Snapshot](evidence-snapshot.md).

## 3. Three Solution Options

| Option | Cơ chế | Quyền quyết định |
|---|---|---|
| A | User chọn dấu vết và tự viết note; AI chỉ gợi ý cấu trúc theo yêu cầu | User chọn nội dung và cấu trúc |
| B | AI hỏi trọng tâm trước, rồi tạo nháp từ dấu vết và câu trả lời | User định hướng, sửa và xác nhận |
| C | AI tạo nháp trước từ cùng dấu vết; user review sau | AI khởi tạo; user có quyền bỏ, sửa, lưu |

- [Design Sheet](three-option-design-sheet.md) · [Prototype và cách mở](prototype-link.md).
- Mở `prototype/index.html` bằng trình duyệt; không cần cài đặt, mạng, API hoặc model thật.
- Nội dung mẫu do Codex tạo, không phải lời người tham gia hay bài giảng thật.

## 4. Đóng góp của tôi trong nhóm

Người học đã cung cấp repo Day17, transcript của anh Khánh và yêu cầu chuẩn bị repo này. Codex đã tổ chức evidence, đề xuất thiết kế và tạo code prototype. Chưa có xác nhận Dũng phụ trách option nào, nhóm đã thông qua thiết kế hay ai đã thực hiện test. Không ghi các việc do AI tạo thành đóng góp cá nhân đã làm.

**Dũng bổ sung sau khi thực hiện:** option chịu trách nhiệm: [chưa xác nhận]; phần tự thiết kế/chỉnh sửa: [chưa ghi]; shared context/content: [chưa ghi]; phiên facilitate: [chưa diễn ra]; đóng góp tổng hợp: [chưa ghi].

## 5. Prototype Feedback

- [Test Prompt](test-plan.md).
- [Feedback Note cá nhân của Dũng](prototype-feedback-note.md): mẫu chưa điền, không lấy P01/SV1/SV2 làm tester đã test.
- [Group Feedback Synthesis](group-feedback-synthesis.md): chưa có ba feedback prototype.
- Next Change sau test: chưa chốt. Không dùng số người thích option để kết luận validated.
- Still Unproven: pain chọn/lưu trong lúc học có phổ biến không; AI có làm giảm công sức hay tăng kiểm tra; user có mở lại note; hiệu quả dài hạn và kết quả học tập.

## 6. AI Support Log

[AI Support Log](ai-support-log.md) ghi nguồn, những gì AI đã tạo, giới hạn và phần người học cần tự phản ánh.

## Checklist trước khi nộp

- [x] Repo cá nhân, README sáu phần, evidence có nguồn và giới hạn.
- [x] Ba cơ chế cùng context, task, fixture và desired outcome; bảng Human–AI decisions.
- [x] Có prototype chạy cục bộ, review/edit/reject/undo/reset và nội dung mô phỏng.
- [ ] Nhóm chốt Hypothesis Problem, options và phân công; xác nhận tên Day18/Day19.
- [ ] Bổ sung Practice Note của An; ba nguồn người tham gia hiện có không đồng nghĩa mỗi thành viên đã nộp một note.
- [ ] Người ngoài nhóm tự dùng cả A/B/C; ghi nhận kiểm tra test-ready thực tế.
- [ ] Mỗi thành viên test đủ A/B/C với một người ngoài nhóm; có ba Feedback Notes độc lập.
- [ ] Chốt một Group Next Change có evidence, ghi Still Unproven.
- [ ] Dũng điền đóng góp/reflection thật và AI Support Log cá nhân.
- [ ] Có link chia sẻ prototype/artifact mở được với giảng viên/TA.

Repo được chuẩn bị cục bộ; chưa tạo hoặc đăng lên GitHub.
