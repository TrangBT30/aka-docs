---
id: release-notes
title: Ghi chú phát hành
sidebar_label: Ghi chú phát hành
sidebar_position: 2
description: Tính năng mới, cải tiến và sửa lỗi trong từng phiên bản Akabot Agent.
---

# Akabot Agent — Ghi chú phát hành

## v3.2.0 — Tháng 4 năm 2026

### Tính năng mới
- **Thao tác nhanh từ khay hệ thống** — Khởi động, dừng hoặc kiểm tra trạng thái workflow trực tiếp từ khay hệ thống.
- **Trigger REST cục bộ** — Hiển thị endpoint HTTP cục bộ có thể cấu hình để ứng dụng và script khởi động lần chạy attended theo chương trình.
- **Engine tác vụ nhận thức** — Vòng lặp suy luận tích hợp cho workflow agent cần lập kế hoạch và thích nghi các bước trong thời gian chạy.

### Cải tiến
- Giảm thời gian khởi động agent từ ~4 giây xuống dưới 1 giây trên máy có SSD.
- Khoảng thời gian heartbeat hiện có thể cấu hình (mặc định 30 giây, tối thiểu 5 giây).
- Cải thiện logic kết nối lại khi mất kết nối Center trong lúc chạy.

### Sửa lỗi
- Sửa lỗi agent không tiếp tục sau khi Windows thức dậy từ chế độ ngủ.
- Khắc phục selector tự động hóa UI không khớp trên ứng dụng có cây trợ năng động.
- Sửa phím tắt trigger attended xung đột với phím tắt toàn cục của Microsoft Teams.

---

## v3.1.0 — Tháng 1 năm 2026

### Tính năng mới
- **Trợ lý trigger attended** — Bong bóng nổi hiển thị các tác vụ attended đang chờ và nút chạy một cú nhấp.
- **Bộ nhớ đệm gói offline** — Agent có thể chạy phiên bản gói đã đồng bộ lần cuối khi Center không thể truy cập.
- **Thông tin xác thực theo quy trình** — Mỗi quy trình có thể tham chiếu mục Credential Store riêng mà không cần chia sẻ.

### Cải tiến
- Tải gói từ Center sử dụng đồng bộ delta — chỉ các file đã thay đổi mới được truyền.
- Logs được ghi bất đồng bộ để tránh chặn thực thi activity trên đĩa chậm.

### Sửa lỗi
- Sửa lỗi file lock ngăn xoay vòng log trên agent chạy workflow unattended 24/7.
- Sửa trường hợp agent đăng ký tên máy trùng lặp sau khi thay đổi hostname hệ điều hành.

---

## v3.0.0 — Tháng 9 năm 2025

### Tính năng mới
- **Kiến trúc dịch vụ Agent 3.0** — Agent được cài đặt như Windows service với tùy chọn mạo danh phiên người dùng.
- **Lưu trữ phần tử bảo mật** — Selector UI nhạy cảm có thể được mã hóa và lưu trong kho thông tin xác thực của nền tảng.
- **Bảng lịch sử chạy** — Giao diện nhúng hiển thị 50 lần thực thi cục bộ gần nhất với trạng thái, thời gian và quyền truy cập log.

### Thay đổi không tương thích ngược
- Agent v2.x không thể kết nối với Center v3.0. Cả hai phải được nâng cấp cùng nhau.
- Trình khởi chạy `.exe` cũ được thay thế bằng trình cài đặt Windows service.

### Sửa lỗi
- Khắc phục lỗi ngắt quãng trong driver tự động hóa SAP GUI ở cài đặt DPI cao.
- Sửa lỗi crash khi workflow cố gắng truy cập chia sẻ mạng trong quá trình khởi tạo agent.
