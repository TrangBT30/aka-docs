---
id: overview
title: Activities
sidebar_label: Tổng quan
sidebar_position: 1
description: Danh mục đầy đủ các activity tích hợp sẵn và tùy chỉnh để xây dựng workflow tự động hóa.
---

# Activities

Activity là khối xây dựng cơ bản của mọi workflow Akabot. Mỗi activity đóng gói một hành động đơn lẻ, có thể tái sử dụng — nhấp chuột, đọc ô tính, gọi API, hoặc ghi vào cơ sở dữ liệu. Bạn kết hợp các activity trên canvas Studio để mô hình hóa bất kỳ quy trình nghiệp vụ nào.

## Danh mục Activity

| Danh mục | Ví dụ |
|----------|-------|
| **Tự động hóa giao diện** | Click, Nhập văn bản, Lấy Text, Tìm phần tử, Chụp màn hình |
| **Trình duyệt** | Mở trình duyệt, Điều hướng, Điền biểu mẫu, Trích xuất bảng |
| **File & Thư mục** | Đọc file, Ghi file, Di chuyển file, Nén/Giải nén |
| **Excel / CSV** | Đọc vùng, Ghi ô, Lọc bảng, Xuất CSV |
| **Email** | Gửi email, Lấy email, Di chuyển thư, Trả lời |
| **Cơ sở dữ liệu** | Thực thi truy vấn, Chèn hàng, Chèn hàng loạt, Stored Procedure |
| **HTTP / API** | HTTP Request, Giải mã JSON, Gọi REST Service |
| **Điều phối** | Thêm Queue Item, Lấy Transaction, Đặt Asset |
| **AI & Nhận thức** | Phân loại tài liệu, Trích xuất dữ liệu, Phân tích cảm xúc |
| **Luồng điều khiển** | If, While, For Each, Try/Catch, Parallel |

## Activity tùy chỉnh

Bạn có thể mở rộng thư viện activity bằng cách xây dựng gói riêng sử dụng [Akabot SDK](/docs/latest/sdk/overview). Activity tùy chỉnh được phân phối dưới dạng gói NuGet và hiển thị cùng với các activity tích hợp sẵn trong bảng palette của Studio.

## Bước tiếp theo

- [Hướng dẫn Studio](/docs/latest/studio-tutorials) — Xem activity hoạt động thực tế.
- [SDK — Tạo activity tùy chỉnh](/docs/latest/sdk/custom-activities/create-activity)
