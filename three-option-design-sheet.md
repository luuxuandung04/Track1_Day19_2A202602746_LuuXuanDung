# Three-Option Design Sheet — Chặng 2–3

Nhóm **3aecaykhe** · Case B — AI Notes: Personal Learning Notes.
Bản chốt tài liệu theo yêu cầu Dũng ngày 05/10/2026. Chặng 1 xem [Evidence Snapshot](evidence-snapshot.md). Option B được thay bằng tìm ghi chú theo ý nhớ; Chặng 3 được hoàn thiện từ decisions này, cần các thành viên cùng review khi build.

## Chặng 2 — Solution Parking Lot

| # | Hướng | AI / không AI | Nguồn trong tổng hợp nhóm |
|---|---|---|---|
| 1 | Tổng hợp note từ highlight/câu hỏi/bài, có nguồn và review | AI | Directive, An, Dũng |
| 2 | Câu hỏi ôn tập từ note đã xác nhận | AI | An, Dũng |
| 3 | Cornell/Outline cạnh bài | Không AI | An, Dũng, Khánh |
| 4 | Bookmark/highlight gắn vị trí bài | Không AI | An, Dũng, Khánh |
| 5 | Dừng ngắn để tự ghi ý/câu hỏi | Không AI | An |
| 6 | Chia sẻ note tự nguyện | Không AI | An, Dũng, Khánh |
| 7 | Gom note, link nguồn, tìm chung slide–note | Không AI | An-P01 feature request, SV1 |
| 8 | Hỏi đáp khóa học có nguồn | AI | Nhánh từng đề xuất; không chọn cho B vì dễ sang AI Tutor |
| 9 | Note theo câu hỏi lớn xuyên buổi | Không AI | SV2 |
| 10 | Tìm note theo ý user nhớ, trả note gốc để chọn | AI | Điều chỉnh B trong trao đổi với Dũng; solution hypothesis, chưa có evidence user yêu cầu |

Chọn #7 → A; #10 → B; #1 thích nghi sang gom note khi quay lại Lab → C. Chưa coi các cơ chế này được user validated.

## Comparison Contract — giữ nguyên A/B/C

| Thành phần | Quyết định |
|---|---|
| Target user | Học viên VLearn có nền tech, tự ghi chú; giới hạn segment để test, chưa kết luận tech là nguyên nhân pain |
| Situation | Đang làm Lab, cần ý đã học, không nhớ buổi/slide |
| Task | Tìm ý “làm rất tốt một thứ không ai cần”, biết nguồn, tự viết một câu có dẫn nguồn vào nháp Lab |
| Desired outcome | Câu nháp đúng ý học liệu và có nguồn buổi/slide/mốc video |
| Fixture | 3 buổi Day15–17, 4 slide, 5 note mẫu theo từ khóa; một note không nguồn. Đây là kế hoạch fixture, chưa có bộ dữ liệu đã xác minh. |
| Chung ~70% | Kho dữ liệu, context Lab, thẻ note/nguồn, phần nháp, chèn nguồn và undo |

## Ba cơ chế

| Thành phần | A — Gom note, tự tìm | B — Tìm note theo ý nhớ | C — Chủ động gom note liên quan |
|---|---|---|---|
| Mechanism | Tìm từ khóa trên note/slide trong một nơi | AI đối chiếu mô tả với note, đưa 2–3 ứng viên nguyên bản; hỏi thu hẹp khi cần | Mở Lab, AI đề xuất sẵn note liên quan context kèm lý do |
| User | Gõ từ khóa, đọc, mở nguồn, tự viết câu và chèn nguồn | Mô tả ý nhớ, chọn note, đối chiếu nguồn, tự viết và chèn nguồn | Duyệt/giữ/bỏ note đề xuất, mở nguồn, tự viết câu và chèn nguồn |
| AI | Không suy luận; khớp từ khóa | Tìm theo nghĩa/xếp ứng viên; không giảng giải hay viết câu hộ | Chọn/gom note theo context; không tự sửa nháp hoặc tạo kiến thức |
| Trigger | User chủ động tìm | User chủ động mô tả | Hệ thống kích hoạt khi mở Lab; user có thể tắt |
| Trade-off | Control cao, có thể đủ; cần nhớ từ khóa | Hữu ích khi quên từ khóa; có thể ghép nhầm và cần kiểm tra | Có thể giảm công tìm, chưa đo; có thể sai/nhiễu hoặc làm user bỏ qua kiểm tra |

Ví dụ B: user nhập “Mình nhớ ý làm sản phẩm tốt nhưng chẳng ai cần”; AI trả các note gốc từ fixture, lý do khớp và nguồn có thật. Không tạo nguồn Day/slide khi chưa có dữ liệu. Note thiếu nguồn giữ nhãn “Chưa gắn nguồn”; không dùng làm dẫn chứng đã xác minh.

## Distance check

- A–B: khớp từ khóa so với đối chiếu ý nghĩa mô tả; user đều tự diễn giải và viết.
- B–C: user nói nhu cầu trước so với AI khởi động từ context Lab.
- A–C: user tự tìm so với AI chọn ứng viên trước để user duyệt.

A là baseline không AI có chủ ý, giúp kiểm tra truy cập nhanh có đủ không. B và C chỉ hỗ trợ tìm/gom note; quyền chọn evidence và câu đưa vào Lab vẫn thuộc user.

Phân công **đề xuất, chưa xác nhận**: A — An; B — Dũng; C — Khánh. Chốt tài liệu không đồng nghĩa đã build hay đã nhận ownership.

## Chặng 3 — Human–AI Decision Table

| Decision | A | B | C |
|---|---|---|---|
| Expectation | Tìm theo từ khóa trong kho note/slide | Tìm note của bạn từ ý bạn nhớ; kết quả là ứng viên | Gợi ý note có thể liên quan Lab; không tự đưa vào bài |
| Role & agency | User chọn, kiểm nguồn, viết; hệ thống khớp chữ | AI xếp ứng viên; user quyết định note đúng và câu viết | AI khởi tạo danh sách; user giữ/bỏ và quyết định dùng |
| Act / Ask / Don't Act | Act tìm sau thao tác user; Don't Act suy diễn | Act tìm khi được yêu cầu; Ask khi nhiều cách hiểu; Don't Act trả lời kiến thức ngoài note | Act gợi ý lúc mở Lab nếu bật; Don't Act tự chèn/sửa bài; tắt thì dừng |
| Capability/limit | Không có kết quả có thể do khác từ khóa | Không đảm bảo ứng viên đúng ý; không tìm thấy thì báo, không bịa đáp án | Context có thể thiếu; gợi ý có thể không phù hợp |
| Evidence | Note gốc, vị trí khớp, nguồn có thật | Note gốc, lý do khớp mô tả, nguồn có thật | Note gốc, lý do liên quan task, nguồn có thật |
| Uncertainty | Note không nguồn có nhãn; không tự gắn | “Có thể phù hợp”, nhiều ứng viên; không phần trăm chắc chắn giả | “Có thể liên quan”; lý do/giới hạn thay điểm tin cậy giả |
| Control | Sửa từ khóa, bỏ kết quả, tự chọn/chèn nguồn, undo | Sửa mô tả, loại ứng viên, hỏi thu hẹp, chuyển tìm từ khóa, undo | Giữ/bỏ, tắt panel, mở tìm chủ động, undo |
| Recovery | Không thấy → đổi từ khóa/duyệt kho note | Sai/không thấy → mô tả lại hoặc A; không thêm kiến thức để lấp | Sai/nhiễu → dismiss/tắt, quay A hoặc B; nháp hiện tại được giữ |
| Feedback/data | Dữ liệu fixture dùng cho phiên; user có thể reset | Mô tả chỉ dùng phiên; không mặc định ghi nhớ/học từ feedback | Chỉ context Lab/fixture; không ngầm đọc dữ liệu ngoài phạm vi |

Critical interaction: tìm/chọn evidence rồi tự dùng vào nháp. Hậu quả AI ghép sai là dẫn sai nguồn hoặc hiểu sai ý; vì vậy cả B/C chỉ đề xuất, có kiểm nguồn và user quyết định. Không tự overwrite nháp. Reset phải rõ việc xóa dữ liệu phiên; tắt gợi ý không xóa nháp.

## Gates 2–3 — đối chiếu tài liệu

Gate 2: cùng contract, khác cơ chế/trigger. Gate 3: có expectation, agency, evidence/uncertainty và recovery. Chưa coi prototype test-ready hoặc coach đã chấm đạt; phải thể hiện decisions này khi build chặng 4.
