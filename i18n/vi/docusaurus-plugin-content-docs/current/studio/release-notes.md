---
id: release-notes
title: Ghi chú phát hành
sidebar_label: Ghi chú phát hành
sidebar_position: 2
description: Tính năng mới, cải tiến và sửa lỗi trong từng phiên bản Akabot Studio.
---

# Akabot Studio — Ghi chú phát hành

## v3.2.0 — Tháng 4 năm 2026

### Tính năng mới
- **Tạo workflow bằng AI** — Mô tả quy trình bằng ngôn ngữ tự nhiên; Studio tự động tạo khung workflow.
- **Hỗ trợ nhiều màn hình** — Neo canvas và bảng thuộc tính trên các màn hình riêng biệt.
- **Cải tiến tìm kiếm activity** — Tìm kiếm mờ khớp với tên activity một phần và nhãn thuộc tính.

### Cải tiến
- Tốc độ bước qua trong trình gỡ lỗi nhanh hơn 40% trên workflow có hơn 200 activity.
- Cập nhật các mẫu dự án để sử dụng phiên bản gói activity mới nhất.
- Bảng biến nay nhóm biến theo phạm vi (workflow, sequence, toàn cục).

### Sửa lỗi
- Sửa lỗi crash khi kéo activity vào container sequence bị thu gọn.
- Sửa số dòng không chính xác trong thông báo lỗi cho các khối Try/Catch lồng nhau.
- Khắc phục sự cố mất lịch sử undo sau khi lưu workflow.

---

## v3.1.0 — Tháng 1 năm 2026

### Tính năng mới
- **Bản đồ thu nhỏ canvas** — Điều hướng workflow lớn bằng lớp phủ bản đồ thu nhỏ ở góc dưới bên phải.
- **Xác thực thuộc tính nội tuyến** — Các thuộc tính bắt buộc được tô sáng ngay khi để trống.
- **Trình xem diff Git** — Xem diff song song của các thay đổi workflow trước khi commit.

### Cải tiến
- Hộp thoại Xuất bản lên Center hiển thị lựa chọn môi trường và nhóm robot đích.
- Cải thiện thời gian khởi động 25% bằng cách tải lười metadata gói activity.

### Sửa lỗi
- Sửa lỗi activity trình duyệt không khởi chạy được trên máy có nhiều profile Chrome.
- Sửa lỗi liên kết đối số khi gọi file workflow có đối số đầu ra.

---

## v3.0.0 — Tháng 9 năm 2025

### Tính năng mới
- **Thiết kế lại Akabot Studio 3.0** — Giao diện mới ưu tiên chế độ tối với bảng có thể thay đổi kích thước và bảng lệnh (`Ctrl+P`).
- **Hỗ trợ ARM64 gốc** — Studio chạy gốc trên thiết bị Windows ARM64.
- **Trình phân tích workflow** — Engine phân tích tĩnh gắn cờ code không thể truy cập, biến không dùng đến và vi phạm quy tắc đặt tên.

### Thay đổi không tương thích ngược
- Dự án tạo trong v2.x phải được migrate bằng **File → Migrate Project** trước khi mở trong v3.0.
- Trình ghi UI dựa trên Silverlight cũ đã bị xóa. Hãy sử dụng trình ghi đa trình duyệt mới.

### Sửa lỗi
- Khắc phục rò rỉ bộ nhớ khi chạy phiên gỡ lỗi lâu dài.
- Sửa xử lý hết hạn token khi xuất bản lên Center có bật SSO.
