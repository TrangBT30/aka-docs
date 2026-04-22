---
id: release-notes
title: Ghi chú phát hành
sidebar_label: Ghi chú phát hành
sidebar_position: 2
description: Tính năng mới, cải tiến và sửa lỗi trong từng phiên bản Akabot Hub.
---

# Akabot Hub — Ghi chú phát hành

## v3.2.0 — Tháng 4 năm 2026

### Tính năng mới
- **Tìm kiếm bằng AI** — Tìm kiếm ngữ nghĩa hiểu ý định thay vì từ khóa chính xác; tìm tài sản bằng cách mô tả những gì bạn cần.
- **Đồ thị phụ thuộc** — Xem workflow và gói nào phụ thuộc vào gói activity trước khi xuất bản bản cập nhật.
- **Kênh riêng tư** — Tạo kênh chỉ mời trong Hub để chia sẻ tài sản với một nhóm hoặc dự án cụ thể.

### Cải tiến
- Nhập tài sản vào Studio xác thực tính tương thích với phiên bản Studio hiện tại trước khi tải xuống.
- Hồ sơ nhà xuất bản hiển thị số lượt tải xuống, xếp hạng trung bình và SLA thời gian phản hồi.
- Trình chỉnh sửa changelog hỗ trợ Markdown với bảng xem trước trực tiếp.

### Sửa lỗi
- Sửa tìm kiếm tài sản trả về kết quả cũ trong tối đa 60 giây sau khi tài sản mới được xuất bản.
- Khắc phục ghim vào phiên bản cụ thể trong Studio tải phiên bản mới nhất thay vì phiên bản được ghim.
- Sửa xem trước hình thu nhỏ bị hỏng cho các gói tải lên từ macOS với thuộc tính mở rộng.

---

## v3.1.0 — Tháng 1 năm 2026

### Tính năng mới
- **Quy trình phê duyệt quản trị** — Quản trị viên định nghĩa chuỗi phê duyệt nhiều bước; tài sản ở trạng thái nháp cho đến khi tất cả người phê duyệt đồng ý.
- **Phân tích sử dụng** — Nhà xuất bản có thể xem xu hướng tải xuống, lượt cài đặt đang hoạt động và tỷ lệ áp dụng phiên bản cho tài sản của họ.
- **Bộ sưu tập** — Nhóm các tài sản liên quan vào bộ sưu tập được đặt tên để nhập hàng loạt một cú nhấp.

### Cải tiến
- Xác thực gói NuGet kiểm tra các phụ thuộc dễ bị tổn thương đã biết và cảnh báo nhà xuất bản.
- Kết quả tìm kiếm cổng Hub có thể lọc theo loại tài sản, xếp hạng, tương thích Studio và giấy phép.
- API REST được thêm vào để xuất bản tài sản theo chương trình như một phần của quy trình CI/CD.

### Sửa lỗi
- Sửa lỗi xóa bộ sưu tập cũng xóa các tài sản cơ bản.
- Sửa xếp hạng sao không cập nhật theo thời gian thực sau khi gửi đánh giá.

---

## v3.0.0 — Tháng 9 năm 2025

### Tính năng mới
- **Ra mắt Akabot Hub v3** — Marketplace được xây dựng lại với feed tương thích NuGet, REST API và tích hợp deep-link Studio.
- **Nhập một cú nhấp** — Cài đặt bất kỳ tài sản Hub nào trực tiếp vào dự án Studio đang hoạt động từ trong cổng Hub.
- **Hệ thống xếp hạng và đánh giá** — Để lại phản hồi có cấu trúc với xếp hạng 1–5 sao và đánh giá văn bản tự do.

### Thay đổi không tương thích ngược
- Gói tài sản Hub v2 (`.abpkg`) phải được xuất bản lại dưới dạng gói NuGet tiêu chuẩn để xuất hiện trong Hub v3.

### Sửa lỗi
- Khắc phục lỗi quyền cho phép người dùng khách tải xuống tài sản riêng tư qua URL trực tiếp.
