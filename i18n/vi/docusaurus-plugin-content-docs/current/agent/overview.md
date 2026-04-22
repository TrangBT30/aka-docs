---
id: overview
title: Akabot Agent
sidebar_label: Tổng quan
sidebar_position: 1
description: Triển khai và chạy các agent tự động hóa thông minh trên máy tính để bàn và máy chủ.
---

# Akabot Agent

Akabot Agent là thành phần runtime chạy trên máy — máy tính để bàn hoặc máy chủ — và thực thi các workflow tự động hóa được điều phối bởi Akabot Center hoặc kích hoạt cục bộ. Agent có thể chạy ở chế độ attended (cùng với người dùng) hoặc unattended (hoàn toàn tự động, 24/7).

## Các loại Agent

| Loại | Mô tả |
|------|-------|
| **Attended** | Chạy trên máy tính của người dùng và có thể tương tác với phiên đăng nhập hiện tại. Kích hoạt thủ công hoặc bằng phím tắt. |
| **Unattended** | Chạy trên máy chủ hoặc máy ảo không có người dùng. Kích hoạt từ xa qua Akabot Center. |
| **Testing** | Dùng cho phát triển cục bộ và gỡ lỗi. Không tính vào giấy phép. |

## Tính năng chính

- **Runtime nhẹ** — Chiếm ít tài nguyên; chạy như Windows service hoặc tiến trình user-mode.
- **Kênh bảo mật** — Mọi giao tiếp với Akabot Center đều được mã hóa và xác thực bằng token.
- **Cập nhật tự động** — Agent tải xuống bản cập nhật gói workflow từ Center trước mỗi lần chạy.
- **Kích hoạt cục bộ** — Agent có thể được kích hoạt bởi sự kiện hệ thống file, phím tắt hoặc lệnh gọi REST.
- **Khả năng nhận thức** — Tích hợp với Akabot Vision và các mô hình AI cho xử lý tài liệu thông minh.

## Bắt đầu

| Bước | Mô tả |
|------|-------|
| 1 | [Cài đặt Akabot Agent](/docs/latest/installation/agent-installation) |
| 2 | Kết nối agent với Akabot Center |
| 3 | Gán gói workflow cho agent |
| 4 | Kích hoạt chạy từ Center hoặc cục bộ |

## Bước tiếp theo

- [Xây dựng Agent đầu tiên](/docs/latest/first-agent)
- [Kết nối Agent với Akabot Center](/docs/latest/connect-center)
- [Lên lịch chạy Agent](/docs/latest/schedule)
