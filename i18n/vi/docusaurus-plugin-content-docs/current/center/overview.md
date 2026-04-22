---
id: overview
title: Akabot Center
sidebar_label: Tổng quan
sidebar_position: 1
description: Điều phối, lên lịch và giám sát tất cả robot tự động hóa từ một nơi duy nhất.
---

# Akabot Center

Akabot Center là máy chủ điều phối doanh nghiệp — bảng điều khiển duy nhất để triển khai, lên lịch và giám sát mọi robot và workflow trong tổ chức. Đội vận hành sử dụng Center để quản lý đội robot, xử lý các mục công việc trong hàng đợi và theo dõi kết quả thực thi theo thời gian thực.

## Tính năng chính

- **Quản lý robot** — Đăng ký robot attended và unattended, phân quyền và theo dõi trạng thái kết nối.
- **Điều phối quy trình** — Triển khai workflow đã xuất bản lên bất kỳ robot nào theo yêu cầu hoặc theo lịch.
- **Hàng đợi công việc** — Đưa các mục dữ liệu có cấu trúc vào hàng đợi và để robot xử lý song song.
- **Lên lịch** — Định nghĩa lịch chạy theo cron hoặc kích hoạt theo sự kiện mà không cần viết code.
- **Giám sát & cảnh báo** — Nhật ký thực thi thời gian thực, bảng thống kê thành công/thất bại và cảnh báo qua email.
- **Kiểm soát quyền truy cập** — Quản lý người dùng, nhóm và phân quyền theo môi trường (Dev, UAT, Prod).

## Tổng quan kiến trúc

```
Akabot Studio  ──xuất bản──▶  Akabot Center  ──điều phối──▶  Akabot Agent
                                      │
                             Hàng đợi / Lịch chạy
```

## Bắt đầu

| Bước | Mô tả |
|------|-------|
| 1 | [Cài đặt máy chủ Akabot Center](/docs/latest/installation/server-installation) |
| 2 | Tạo môi trường và thêm máy robot |
| 3 | Xuất bản workflow từ Akabot Studio |
| 4 | Tạo lịch hoặc kích hoạt chạy thủ công |
| 5 | Theo dõi kết quả trên bảng điều khiển |

## Bước tiếp theo

- [Kết nối Agent với Akabot Center](/docs/latest/connect-center)
- [Lên lịch chạy Agent](/docs/latest/schedule)
- [Hướng dẫn quản trị](/docs/latest/admin/overview)
