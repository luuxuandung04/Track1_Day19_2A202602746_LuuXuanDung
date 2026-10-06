# Track1_Day19_2A202602746_LuuXuanDung

Tài liệu đã cập nhật **Chặng 1–5**, bộ ghi nhận Chặng 6 sẵn dùng — 05/10/2026. Tên Day19 theo yêu cầu Dũng; đề VLearn buổi Day18+19 ghi Day18, cần đối chiếu trước nộp.

## 1. Thông tin cá nhân và nhóm

- MHV: 2A202602746 · Lưu Xuân Dũng · GitHub: luuxuandung04.
- Nhóm 3aecaykhe: Nguyễn Văn An, Lưu Xuân Dũng, Nguyễn Long Khánh.
- Case B — AI Notes: Personal Learning Notes.
- Baseline: https://github.com/luuxuandung04/Track1_Day17_2A202602746_LuuXuanDung
- Đề: https://vlearn.dev/course/k04-l34-p2-t1/reader?day=D05&part=codelab-f3fc688af6874124b3d45f0d65a5a14e-s11-doc

## 2. Hypothesis Problem

Khi cần ôn tập hoặc dùng lại kiến thức đã học trong khóa online (VLearn) sau một thời gian, người học tự ghi chú gặp khó khăn trong việc tiếp cận đúng ý cần dùng và quay về nội dung gốc, vì ghi chú nằm phân tán (theo từng slide trên nền tảng, hoặc ở công cụ riêng tách khỏi slide) và AI bên ngoài không biết ngữ cảnh bài học, dẫn đến phải dò lại slide, chuyển qua lại giữa nhiều công cụ và mất thêm công để tìm lại.

Đây là giả thuyết nhóm chọn theo bản tổng hợp, chưa validated. [Chặng 1: evidence và phản chứng](evidence-snapshot.md) phân biệt An-P01/Dũng-P01/SV1/SV2, ghi nguồn An qua tổng hợp nhóm và giới hạn ASR.

## 3. Three Solution Options

| A | B | C |
|---|---|---|
| Gom note và nguồn, user tìm từ khóa | AI tìm note theo ý user nhớ, trả ứng viên nguyên bản | AI chủ động gom note liên quan khi mở Lab |

User ở cả ba chọn note, kiểm nguồn và tự viết câu có dẫn nguồn vào nháp Lab. B không giảng giải/viết câu hộ; C không tự chèn bài.

[Chặng 2–3: Design Sheet và Human–AI Decision Table](three-option-design-sheet.md).

Prototype chính là bản Lovable người học cung cấp, giữ nguyên theo yêu cầu. [A — Tự tìm](https://id-preview--ef1fd8a5-1c22-415d-9e3a-b01bbca80717.lovable.app/) · [B — Note nhanh & tìm kết hợp](https://id-preview--ef1fd8a5-1c22-415d-9e3a-b01bbca80717.lovable.app/prototype-b) · [C — Chủ động gom](https://id-preview--ef1fd8a5-1c22-415d-9e3a-b01bbca80717.lovable.app/prototype-c)

B có note nhanh ngoài task; chuẩn bị B ở Bài Lab trước lượt test. Fixture 4 note và nguồn minh họa được đồng bộ với tài liệu. Prototype precision/recall cục bộ là lịch sử, không dùng nộp. Xem [Prototype](prototype-link.md) và [Kịch bản test đã chuẩn bị](test-plan.md).

## 4. Đóng góp cá nhân

Dũng cung cấp bản tổng hợp nhóm, yêu cầu đổi B, xác nhận đã làm xong chặng 4 và gửi prototype Lovable; yêu cầu giữ nguyên prototype. Codex biên tập repo, cập nhật B và hoàn thiện bảng Human–AI. Phân công A–An/B–Dũng/C–Khánh vẫn là đề xuất chưa xác nhận; chưa ghi việc AI tạo thành việc cá nhân đã thực hiện.

Phần Dũng tự bổ sung sau khi làm: owner option, chỉnh sửa thực tế, shared artifact, facilitate và tổng hợp feedback.

## 5. Prototype Feedback

Đã hoàn thành bộ diễn tập với ba persona AI: [S01](prototype-feedback-note.md), [S02](feedback-templates/an-feedback-note.md), [S03](feedback-templates/khanh-feedback-note.md) và [bản tổng hợp](group-feedback-synthesis.md). Đây là dữ liệu luyện tập, không phải test ngoài nhóm; Interview Day17 không phải feedback prototype.

Next Change của bài diễn tập: thêm trạng thái “Chưa mở nguồn/Đã kiểm tra nguồn” và chỉ bật sao chép dẫn nguồn sau khi mở nguồn. Still Unproven: hành vi người thật, độ phổ biến/công sức/hậu quả tìm lại, giá trị AI thật và hiệu quả học tập.

## 6. AI Support Log

[AI Support Log](ai-support-log.md): nguồn AI hỗ trợ, giới hạn và reflection cá nhân cần tự điền.

## Trạng thái chặng

- [x] Chặng 1: evidence/hypothesis/phản chứng theo tổng hợp nhóm.
- [x] Chặng 2: A/B/C và comparison contract; B tìm note theo ý nhớ.
- [x] Chặng 3: Human–AI Decision Table và control/recovery.
- [ ] Nhóm xác nhận phân công; rà nguồn/mốc chưa đối chiếu audio.
- [x] Chặng 4: có bộ A/B/C Lovable, fixture 4 note và nguồn/AI mô phỏng; người học xác nhận đã build.
- [ ] Gate 4: tester ngoài nhóm tự hoàn thành task; reset/undo và truy cập không đăng nhập cần xác minh.
- [x] Chặng 5: outcome task, năm observation focus, script, baseline và lịch ba phiên đã chuẩn bị.
- [x] Chặng 6 dạng luyện tập: ba persona AI, ba feedback scenarios và một Next Change.
- [ ] Gate 5 thực tế: ba tester ngoài nhóm dùng đủ A/B/C.
- [ ] Đóng góp/reflection cá nhân, link chia sẻ và tên repo đúng yêu cầu nộp.

Repo cục bộ, chưa publish GitHub. Sources giữ cục bộ và được gitignore.

## Review bổ sung do AI mô phỏng

Xem [review ba persona và Next Change đề xuất](ai-simulated-review.md). Đây là phân tích giả định, không phải test ngoài nhóm; gate 5 và Next Change từ dữ liệu người thật vẫn chờ feedback.
