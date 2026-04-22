---
id: release-notes
title: Ghi chú phát hành
sidebar_label: Ghi chú phát hành
sidebar_position: 2
description: Tính năng mới, cải tiến và sửa lỗi trong từng phiên bản thư viện Akabot Activities.
---

# Activities — Ghi chú phát hành

## v3.2.0 — Tháng 4 năm 2026

### Activity mới
- **`Phân loại tài liệu`** — Phân loại tài liệu bằng AI với ngưỡng độ tin cậy có thể cấu hình.
- **`Gửi tin nhắn Teams`** — Đăng tin nhắn và thẻ adaptive lên kênh hoặc chat Microsoft Teams.
- **`Hợp nhất PDF`** — Kết hợp nhiều file PDF thành một với thứ tự trang có thể cấu hình.
- **`Đọc mã vạch`** — Giải mã mã QR và mã vạch 1D từ hình ảnh hoặc vùng màn hình.

### Cải tiến
- Activity `HTTP Request` hỗ trợ tải lên multipart/form-data và phản hồi streaming.
- Hiệu suất `Excel — Đọc vùng` cải thiện 60% cho trang tính có hơn 10.000 hàng.
- `Tìm phần tử` thử lại với back-off lũy thừa trước khi ném ngoại lệ timeout.

### Sửa lỗi
- Sửa `Gửi email` bỏ qua người nhận CC khi trường BCC được điền.
- Khắc phục chế độ ghi đè `Ghi file` làm hỏng file lớn hơn 2 GB.
- Sửa `Lấy Text` trả về chuỗi rỗng trên một số ứng dụng dựa trên Electron.

---

## v3.1.0 — Tháng 1 năm 2026

### Activity mới
- **`SAP — Đăng nhập`** và **`SAP — Đọc bảng`** — Activity tự động hóa SAP GUI gốc.
- **`Nén file`** / **`Giải nén`** — Hỗ trợ ZIP, 7z và TAR với bảo vệ mật khẩu.
- **`Văn bản — Trích xuất bằng Regex`** — Trích xuất các nhóm capture được đặt tên từ văn bản bằng biểu thức chính quy.

### Cải tiến
- `Trình duyệt — Trích xuất bảng` xử lý các ô hợp nhất và thuộc tính rowspan/colspan.
- `Cơ sở dữ liệu — Thực thi truy vấn` hỗ trợ tham số được đặt tên để ngăn SQL injection.
- Tất cả activity phát ra các mục log có cấu trúc có thể tiêu thụ bởi Akabot Insight.

### Sửa lỗi
- Sửa `For Each Row` bỏ qua hàng cuối cùng trong DataTable khi bảng có đúng một cột.
- Sửa `Di chuyển file` trên Windows khi nguồn và đích ở trên các ổ đĩa khác nhau.

---

## v3.0.0 — Tháng 9 năm 2025

### Activity mới
- **`Gọi Python Script`** — Chạy script Python và lấy stdout, stderr và mã thoát.
- **`Gọi REST API`** — Client REST đơn giản hóa với hỗ trợ OAuth 2.0 và API key tích hợp.
- **`Đọc văn bản PDF`** — Trích xuất văn bản thuần từ file PDF gốc và quét.

### Thay đổi không tương thích ngược
- Các activity `Screen Scraping cũ` đã bị xóa. Thay thế bằng `Lấy Text` hoặc `Tìm phần tử`.
- `Gửi Email SMTP` đổi tên thành `Gửi Email`; thuộc tính `SmtpHost` được lấy từ asset Connection được đặt tên.

### Sửa lỗi
- Khắc phục `Nhập vào` ngẫu nhiên chèn ký tự thừa trên hệ thống có bố cục bàn phím không phải US.
- Sửa `Chụp màn hình` chụp ảnh trống khi được gọi trong phiên nền (unattended).
