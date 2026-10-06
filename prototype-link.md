# Prototype tương tác — Ba phương án A/B/C

Link nguyên mẫu Lovable: https://lovable.dev/preview/RHUlgfq54zFv3SbigcdY3sJDqX6yDJ3X

- [A — Tự tìm](https://id-preview--ef1fd8a5-1c22-415d-9e3a-b01bbca80717.lovable.app/)
- [B — Note nhanh & tìm kết hợp](https://id-preview--ef1fd8a5-1c22-415d-9e3a-b01bbca80717.lovable.app/prototype-b)
- [C — Chủ động gom](https://id-preview--ef1fd8a5-1c22-415d-9e3a-b01bbca80717.lovable.app/prototype-c)

Đã kiểm tra khả năng truy cập trong phiên ẩn danh (không cần đăng nhập tài khoản) trước khi gửi cho tester.

## Cách chuẩn bị cùng bối cảnh test (Baseline Setup)

1. Mở từng phương án trong cửa sổ trình duyệt mới, kiểm tra kho dữ liệu có đúng 4 ghi chú mẫu.
2. Phương án A và C mặc định hiển thị bài Lab. Với Phương án B, người điều phối nhấp nút **Bài Lab trước khi bàn giao quyền thao tác cho người dùng**, để cả ba phương án đều bắt đầu ở cùng yêu cầu “Kiểm chứng nhu cầu”. Đây là bước chuẩn bị môi trường, hoàn toàn không mớm lời hay hướng dẫn cách tìm kiếm.
3. Phần nháp ban đầu để trống, panel AI Notes mở sẵn: Phương án A ô từ khóa để trống; Phương án B ô mô tả để trống (chưa có kết quả); Phương án C giữ panel gợi ý tự động khởi động.
4. Không tạo thêm ghi chú mới trong lượt thực hiện nhiệm vụ chính. Phương án B có chức năng tạo ghi chú nhanh trên slide nhưng nằm ngoài phạm vi đo lường của bài kiểm tra truy xuất này.
5. Sau mỗi lượt thử nghiệm, làm mới phiên (reset) hoặc mở cửa sổ mới để đảm bảo người dùng tiếp theo không bị ảnh hưởng bởi dữ liệu của người trước.

## Fixture dữ liệu hiển thị

| Thẻ | Nội dung ghi chú mẫu | Nguồn hiển thị |
|---|---|---|
| **01** | Làm rất tốt một thứ không ai cần vẫn không tạo ra giá trị. | Design the Experiment · Slide 6 |
| **02** | Kiểm chứng vấn đề trước khi tối ưu giải pháp. | Design the Experiment · Slide 5 |
| **03** | Prototype đủ thật để người học ra quyết định, chưa cần làm cả sản phẩm. | Design the Experiment · Slide 9 |
| **04** | Đừng nhầm làm đúng với làm thứ cần làm. | *Thiếu nguồn* |

Nguồn mở từ ghi chú 01 hiển thị nhãn **NGUỒN MINH HỌA**. Các số slide đóng vai trò dữ liệu mẫu (fixture) phục vụ kịch bản thử nghiệm đối chiếu, giúp quan sát xem người dùng có thực sự kiểm chứng nguồn gốc trước khi trích dẫn hay không.

## Kiểm tra kỹ thuật trước phiên thử nghiệm (Technical Pre-check)

Trước khi tiến hành các phiên thử nghiệm người dùng thực tế, nhóm đã rà soát kỹ thuật trên giao diện:
- **Phương án A:** Hiển thị đủ 4 ghi chú, ghi chú thiếu nguồn bị khóa mở/sao chép, mở nguồn ghi chú 01 thành công và có đường quay lại rõ ràng.
- **Phương án B:** Chuyển sang giao diện Bài Lab, nhập thử câu “làm sản phẩm tốt nhưng không ai cần” trả về đúng 3 ứng viên (01/02/04) kèm lý do giải thích; ghi chú 04 hiển thị nhãn thiếu nguồn đúng quy cách.
- **Phương án C:** Kiểm tra panel gợi ý theo ngữ cảnh hoạt động ổn định, các thao tác giữ/bỏ ghi chú và chuyển sang tìm kiếm thủ công hoạt động trơn tru.

Thư mục `prototype/` cục bộ là bản mã nguồn HTML/CSS/JS cơ bản ban đầu; bản nguyên mẫu chính thức dùng cho bài thử nghiệm là các đường dẫn Lovable phía trên.
