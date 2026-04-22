---
id: overview
title: Integration Service
sidebar_label: Tổng quan
sidebar_position: 1
description: Kết nối Akabot với các ứng dụng doanh nghiệp, API và dịch vụ bên thứ ba.
---

# Integration Service

Akabot Integration Service cung cấp lớp kết nối low-code nối liền Akabot với các ứng dụng doanh nghiệp, nền tảng đám mây và API bên thứ ba. Thay vì viết các lệnh gọi HTTP tùy chỉnh trong mỗi workflow, nhóm cấu hình kết nối và trigger có thể tái sử dụng một lần và dùng ở mọi nơi.

## Tính năng chính

- **Connector tích hợp sẵn** — Kết nối có sẵn cho 200+ ứng dụng bao gồm SAP, Salesforce, ServiceNow, Microsoft 365, Jira và các dịch vụ đám mây lớn.
- **Hỗ trợ REST & SOAP** — Cấu hình bất kỳ endpoint HTTP nào thành kết nối được đặt tên; Integration Service xử lý xác thực, thử lại và ánh xạ lỗi.
- **Trigger theo sự kiện** — Tự động khởi động workflow khi xảy ra sự kiện bên ngoài — email mới, gửi biểu mẫu, webhook từ ứng dụng SaaS.
- **Chuyển đổi dữ liệu** — Ánh xạ và chuyển đổi payload giữa các hệ thống bằng trình ánh xạ trường trực quan hoặc biểu thức JSONata.
- **Kho kết nối** — Thông tin xác thực và token OAuth được lưu trữ an toàn và không bao giờ lộ cho nhà phát triển workflow.
- **Giám sát trạng thái** — Trạng thái kết nối thời gian thực cho mọi kết nối đã cấu hình với cảnh báo khi có lỗi.

## Mẫu tích hợp phổ biến

| Mẫu | Mô tả |
|-----|-------|
| **Trigger theo sự kiện** | Webhook từ hệ thống bên ngoài tự động khởi chạy workflow Akabot. |
| **Đọc & đồng bộ** | Lấy dữ liệu từ hệ thống nguồn, chuyển đổi và ghi vào hệ thống đích. |
| **Callback khi hoàn thành** | Sau khi workflow hoàn thành, gửi kết quả về hệ thống gốc. |
| **Polling** | Định kỳ kiểm tra API bên ngoài để tìm bản ghi mới và xử lý từng bản ghi như một mục hàng đợi. |

## Phương thức xác thực được hỗ trợ

- API Key / Bearer Token
- OAuth 2.0 (Authorization Code, Client Credentials)
- Xác thực cơ bản (Basic Authentication)
- Dựa trên chứng chỉ (mTLS)

## Bắt đầu

1. Mở Akabot Center và điều hướng đến **Integration Service**.
2. Duyệt danh mục connector và chọn ứng dụng mục tiêu.
3. Cấu hình xác thực và kiểm tra kết nối.
4. Sử dụng connector trong Studio qua nhóm activity **Integration Service**.

## Bước tiếp theo

- [Tham chiếu API](/docs/latest/api-reference/overview) — Quản lý kết nối theo chương trình.
- [Akabot Hub](/docs/latest/hub/overview) — Tìm connector được cộng đồng xuất bản.
