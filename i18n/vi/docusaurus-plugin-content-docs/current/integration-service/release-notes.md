---
id: release-notes
title: Ghi chú phát hành
sidebar_label: Ghi chú phát hành
sidebar_position: 2
description: Tính năng mới, cải tiến và sửa lỗi trong từng phiên bản Akabot Integration Service.
---

# Integration Service — Ghi chú phát hành

## v3.2.0 — Tháng 4 năm 2026

### Tính năng mới
- **Event mesh** — Xuất bản sự kiện từ một workflow và đăng ký trong workflow khác mà không cần ghép cứng; hỗ trợ fan-out đến nhiều subscriber.
- **Connector GraphQL** — Truy vấn và thay đổi API GraphQL với hỗ trợ introspection schema đầy đủ và biến.
- **Kiểm tra sức khỏe kết nối** — Kiểm tra kết nối theo lịch với cảnh báo tự động và huy hiệu trạng thái sức khỏe trong Center.

### Connector mới
- Workday (Nhân sự & Tài chính)
- HubSpot (CRM)
- Twilio (SMS & Thoại)
- Azure Service Bus (nhắn tin)

### Cải tiến
- Làm mới token OAuth 2.0 được xử lý minh bạch mà không làm gián đoạn workflow.
- Trình chỉnh sửa chuyển đổi payload hỗ trợ biểu thức JSONata v2 với chế độ unit-test.
- Chính sách thử lại hiện có thể cấu hình mỗi connector: số lần thử tối đa, chiến lược trì hoãn (cố định / lũy thừa) và mã lỗi có thể thử lại.

### Sửa lỗi
- Sửa connector Salesforce mất session token sau đúng 2 giờ do lỗi tính thời gian hết hạn.
- Khắc phục deadlock khi hai workflow đồng thời làm mới cùng token OAuth dùng chung.
- Sửa sự kiện webhook bị mất khi workflow nhận đang ở mức đồng thời tối đa.

---

## v3.1.0 — Tháng 1 năm 2026

### Tính năng mới
- **Mẫu đồng bộ hai chiều** — Các mẫu đồng bộ có sẵn cho các cặp phổ biến (SAP ↔ Salesforce, Jira ↔ ServiceNow) có thể cấu hình bằng wizard.
- **Ký yêu cầu** — Ký HMAC-SHA256 cho các lệnh gọi webhook đi để hệ thống nhận có thể xác minh tính xác thực.
- **Nhóm kết nối** — Gom nhiều kết nối vào một nhóm được đặt tên và tham chiếu nhóm trong workflow; hoán đổi môi trường bằng cách thay đổi một cài đặt.

### Connector mới
- Microsoft Dynamics 365
- Google Workspace (Sheets, Drive, Gmail)
- Slack

### Cải tiến
- Danh mục connector tăng từ 150 lên 200+ ứng dụng.
- Mức độ chi tiết log cho các lệnh gọi tích hợp hiện có thể cấu hình (chỉ lỗi / tóm tắt / payload đầy đủ).

### Sửa lỗi
- Sửa connector SOAP với header WS-Security thất bại trên runtime .NET 8.
- Sửa ánh xạ trường cho connector sử dụng định dạng ngày ISO 8601 với offset múi giờ.

---

## v3.0.0 — Tháng 9 năm 2025

### Tính năng mới
- **Ra mắt Integration Service v3** — Lớp kết nối low-code mới với trình tạo connector trực quan và kho kết nối tập trung.
- **200+ connector tích hợp sẵn** — Connector có sẵn cho các nền tảng ERP, CRM, ITSM và đám mây lớn.
- **Event trigger** — Khởi động bất kỳ workflow nào để phản hồi webhook đến hoặc sự kiện polling từ hệ thống đã kết nối.

### Thay đổi không tương thích ngược
- Định nghĩa connector tùy chỉnh từ Integration Service v2 phải được migrate sang spec connector YAML mới.
- Activity `InvokeConnector` v2 được thay thế bằng các activity đặc thù cho ứng dụng được tạo từ schema connector.

### Sửa lỗi
- Khắc phục sự cố cạn kiệt connection pool dưới tải lượng lệnh gọi API cao và liên tục.
- Sửa connector SAP RFC thất bại âm thầm khi module RFC trả về mã trả về khác không.
