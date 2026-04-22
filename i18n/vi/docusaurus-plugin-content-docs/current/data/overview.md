---
id: overview
title: Data Service
sidebar_label: Tổng quan
sidebar_position: 1
description: Lưu trữ, truy vấn và quản lý dữ liệu có cấu trúc được sử dụng trong các workflow tự động hóa.
---

# Data Service

Akabot Data Service cung cấp kho dữ liệu có schema được quản lý, cho phép các workflow tự động hóa đọc và ghi dữ liệu trong thời gian chạy. Dịch vụ này loại bỏ nhu cầu duy trì cơ sở dữ liệu bên ngoài cho trạng thái workflow, bảng tra cứu, nhật ký kiểm tra hoặc giao tiếp giữa các quy trình.

## Tính năng chính

- **Trình xây dựng schema** — Định nghĩa entity (bảng) và trường dữ liệu trực quan với xác thực kiểu, không cần viết SQL.
- **CRUD từ workflow** — Activity tích hợp sẵn cho phép workflow tạo, đọc, cập nhật và xóa bản ghi trong thời gian chạy.
- **Lịch sử bản ghi** — Mọi thay đổi đều được ghi phiên bản để kiểm tra dữ liệu nào workflow đã đọc hoặc ghi.
- **Kiểm soát quyền truy cập** — Hạn chế robot, quy trình hoặc người dùng nào có thể đọc hoặc chỉnh sửa mỗi entity.
- **REST API** — Truy vấn hoặc chỉnh sửa bản ghi từ hệ thống bên ngoài qua Data Service REST API.
- **Xuất / Nhập** — Xuất dữ liệu entity sang CSV/Excel hoặc nhập hàng loạt dữ liệu mẫu.

## Trường hợp sử dụng phổ biến

| Trường hợp | Mô tả |
|------------|-------|
| **Bảng tra cứu** | Lưu mã sản phẩm, ID nhân viên, hoặc quy tắc định tuyến mà nhiều workflow dùng chung. |
| **Trạng thái quy trình** | Theo dõi tiến độ của các quy trình nhiều bước chạy lâu dài. |
| **Nhật ký kiểm tra** | Ghi lại đầu vào, đầu ra và quyết định của mỗi lần thực thi workflow. |
| **Cấu hình** | Tập trung các cài đặt theo môi trường có thể cập nhật mà không cần triển khai lại workflow. |

## Bắt đầu

1. Mở Akabot Center và điều hướng đến **Data Service**.
2. Tạo entity mới và định nghĩa các trường dữ liệu.
3. Sử dụng các activity **Data Service** trong Studio để đọc hoặc ghi bản ghi.

## Bước tiếp theo

- [Tham chiếu API](/docs/latest/api-reference/overview) — Truy vấn Data Service qua REST.
- [Hướng dẫn quản trị](/docs/latest/admin/overview) — Quản lý phân quyền và hạn mức lưu trữ.
