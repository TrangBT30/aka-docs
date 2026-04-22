---
id: overview
title: Akabot Vision
sidebar_label: Tổng quan
sidebar_position: 1
description: Trích xuất và hiểu thông tin từ tài liệu, hình ảnh và nội dung phi cấu trúc.
---

# Akabot Vision

Akabot Vision là module xử lý tài liệu thông minh (IDP) đọc, phân loại và trích xuất dữ liệu có cấu trúc từ các nguồn phi cấu trúc — hóa đơn quét, hợp đồng, biểu mẫu, email và hình ảnh. Vision kết hợp OCR, học máy và mẫu trích xuất có thể cấu hình để biến tài liệu giấy và kỹ thuật số thành dữ liệu có thể xử lý cho các workflow.

## Tính năng chính

- **Công cụ OCR** — Trích xuất văn bản độ chính xác cao từ PDF quét, hình ảnh (PNG, JPEG, TIFF) và tài liệu kỹ thuật số.
- **Phân loại tài liệu** — Tự động định tuyến tài liệu đến mẫu trích xuất phù hợp dựa trên nội dung.
- **Trích xuất trường** — Định nghĩa quy tắc trích xuất bằng trình chỉnh sửa mẫu trực quan; không cần kiến thức ML.
- **Phát hiện bảng** — Xác định và trích xuất bảng nhiều hàng từ hóa đơn, đơn đặt hàng và báo cáo.
- **Điểm tin cậy** — Mỗi trường trích xuất có điểm tin cậy để các mục độ tin cậy thấp được chuyển cho người xem xét.
- **Con người trong vòng lặp** — Trạm xác thực tích hợp cho phép nhân viên xem xét và sửa các trích xuất không chắc chắn.

## Loại tài liệu được hỗ trợ

- Hóa đơn và đơn đặt hàng
- Tài liệu nhận dạng (hộ chiếu, CMND/CCCD)
- Hợp đồng và thỏa thuận pháp lý
- Sao kê ngân hàng và báo cáo tài chính
- Hồ sơ y tế và biểu mẫu
- Loại tài liệu tùy chỉnh qua huấn luyện mẫu

## Bắt đầu

1. Tải tài liệu mẫu lên cổng Vision.
2. Tạo loại tài liệu và gán nhãn các trường bằng trình chỉnh sửa mẫu.
3. Huấn luyện mô hình và xác thực độ chính xác trích xuất.
4. Sử dụng activity **Vision** trong Studio để gửi tài liệu và lấy dữ liệu đã trích xuất.

## Bước tiếp theo

- [Tham chiếu Activity](/docs/latest/activities/overview) — Danh mục activity Vision.
- [Data Service](/docs/latest/data/overview) — Lưu trữ dữ liệu đã trích xuất cho các quy trình tiếp theo.
