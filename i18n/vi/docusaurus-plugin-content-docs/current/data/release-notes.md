---
id: release-notes
title: Ghi chú phát hành
sidebar_label: Ghi chú phát hành
sidebar_position: 2
description: Tính năng mới, cải tiến và sửa lỗi trong từng phiên bản Akabot Data Service.
---

# Data Service — Ghi chú phát hành

## v3.2.0 — Tháng 4 năm 2026

### Tính năng mới
- **Trường tính toán** — Định nghĩa các trường chỉ đọc có giá trị được tính từ công thức trên các trường khác trong cùng entity.
- **Quan hệ entity** — Liên kết bản ghi giữa các entity với tham chiếu kiểu khóa ngoại.
- **API upsert hàng loạt** — Chèn hoặc cập nhật tối đa 5.000 bản ghi trong một yêu cầu duy nhất.

### Cải tiến
- Query API hỗ trợ tham số OData `$orderBy`, `$top` và `$skip` để phân trang phía máy chủ.
- Thời gian lưu giữ lịch sử bản ghi hiện có thể cấu hình theo entity (mặc định 90 ngày).
- Activity Studio hiển thị gợi ý tự động hoàn thành cho tên entity và đường dẫn trường.

### Sửa lỗi
- Sửa deadlock khi hai workflow thực hiện upsert đồng thời trên cùng một bản ghi.
- Khắc phục dấu thời gian `updatedAt` không chính xác khi bản ghi được chỉnh sửa qua REST API.
- Sửa xuất sang Excel thất bại cho entity có hơn 65.000 bản ghi.

---

## v3.1.0 — Tháng 1 năm 2026

### Tính năng mới
- **Mã hóa cấp trường** — Đánh dấu các trường riêng lẻ là mã hóa lúc lưu trữ; giá trị giải mã chỉ được trả về cho người gọi được ủy quyền.
- **Webhook** — Kích hoạt lệnh gọi HTTP đi khi bản ghi được tạo, cập nhật hoặc xóa.
- **Nhập từ CSV** — Nhập hàng loạt bản ghi trực tiếp từ file CSV trong cổng Center.

### Cải tiến
- Số lượng entity tối đa mỗi tenant tăng từ 50 lên 200.
- Số lượng trường tối đa mỗi entity tăng từ 50 lên 150.
- Phản hồi REST API bao gồm header `X-Request-Id` để truy vết phân tán.

### Sửa lỗi
- Sửa lỗi migration schema khiến thứ tự trường bị mất sau khi nâng cấp Center.
- Sửa lỗi kiểm tra quyền cho phép người dùng chỉ đọc gọi endpoint xóa.

---

## v3.0.0 — Tháng 9 năm 2025

### Tính năng mới
- **Ra mắt Data Service v3** — Kho NoSQL mới theo schema thay thế hệ thống assets Orchestrator cũ.
- **Trình tạo schema trực quan** — Tạo và chỉnh sửa schema entity trực tiếp trong giao diện web Center mà không có thời gian ngừng hoạt động.
- **Gói activity Studio** — Activity `Tạo bản ghi`, `Lấy bản ghi`, `Cập nhật bản ghi` và `Xóa bản ghi` chính thức.

### Thay đổi không tương thích ngược
- API `Assets` Orchestrator cũ đã lỗi thời; hãy migrate dữ liệu dựa trên asset sang entity Data Service.
- Các asset hiện tại chỉ đọc trong v3.0 và sẽ bị xóa trong v4.0.

### Sửa lỗi
- Khắc phục lỗi 500 không được xử lý khi xóa entity có tham chiếu bản ghi đang hoạt động.
