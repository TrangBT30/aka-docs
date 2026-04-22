---
id: release-notes
title: Ghi chú phát hành
sidebar_label: Ghi chú phát hành
sidebar_position: 2
description: Tính năng mới, cải tiến và sửa lỗi trong từng phiên bản Akabot Center.
---

# Akabot Center — Ghi chú phát hành

## v3.2.0 — Tháng 4 năm 2026

### Tính năng mới
- **Điều phối Autopilot** — Mô tả điều kiện kích hoạt và mục tiêu bằng ngôn ngữ tự nhiên; Center tự động tạo lịch và cấu hình hàng đợi.
- **Bảng theo dõi sức khỏe robot** — Giao diện mới hiển thị CPU, bộ nhớ và trạng thái phiên cho mọi robot đang kết nối theo thời gian thực.
- **Trình hướng dẫn thăng cấp môi trường** — Quy trình hướng dẫn thăng cấp gói quy trình từ Dev → UAT → Prod với các cổng phê duyệt.

### Cải tiến
- Mức độ ưu tiên mục hàng đợi tăng từ 3 lên 10 cấp để kiểm soát điều phối chi tiết hơn.
- Tìm kiếm nhật ký thực thi hỗ trợ regex và bộ lọc phạm vi ngày.
- Thời gian phản hồi API cho endpoint `/processes` và `/jobs` cải thiện 35%.

### Sửa lỗi
- Sửa điều kiện tranh chấp gây điều phối công việc trùng lặp khi hai lịch kích hoạt trong cùng một giây.
- Khắc phục dấu thời gian "last seen" không chính xác cho robot ở múi giờ GMT+7.
- Sửa phân trang bị lỗi trong nhật ký kiểm toán khi lọc theo người dùng.

---

## v3.1.0 — Tháng 1 năm 2026

### Tính năng mới
- **Đa thuê bao** — Một cài đặt Center duy nhất có thể lưu trữ nhiều tenant độc lập với người dùng, robot và quy trình riêng biệt.
- **Webhook trigger** — Khởi động quy trình qua HTTP POST đến từ bất kỳ hệ thống bên ngoài nào.
- **Theo dõi SLA** — Định nghĩa thời gian hoàn thành dự kiến theo hàng đợi; Center cảnh báo khi các mục vi phạm SLA.

### Cải tiến
- Giao diện quản lý vai trò được thiết kế lại với các mẫu nhóm quyền (Operator, Developer, Admin).
- Giới hạn kích thước tải lên gói tăng từ 50 MB lên 200 MB.

### Sửa lỗi
- Sửa lỗi vô hiệu hóa lịch không ngăn được trigger đang chờ tiếp theo.
- Sửa số liệu thông lượng hàng đợi khi các mục bị từ bỏ và thử lại.

---

## v3.0.0 — Tháng 9 năm 2025

### Tính năng mới
- **Cổng Center 3.0** — Giao diện web được thiết kế lại hoàn toàn trên React với khả năng truy cập được cải thiện (WCAG 2.1 AA).
- **Chế độ khả dụng cao** — Chuyển đổi dự phòng active-passive với bầu chọn leader tự động.
- **Nhật ký kiểm toán chi tiết** — Mọi lệnh gọi API, đăng nhập và thay đổi cấu hình đều được ghi lại với địa chỉ IP và user agent.

### Thay đổi không tương thích ngược
- REST API v2 (`/api/v2/`) đã lỗi thời. Hãy migrate sang `/api/v3/` trước khi phát hành v4.0.
- Khóa máy robot từ v2.x phải được đăng ký lại sau khi nâng cấp.

### Sửa lỗi
- Khắc phục deadlock cơ sở dữ liệu khi xử lý hàng đợi đồng thời cao.
- Sửa đồng bộ nhóm LDAP thất bại âm thầm khi máy chủ thư mục trả về kết quả không đầy đủ.
