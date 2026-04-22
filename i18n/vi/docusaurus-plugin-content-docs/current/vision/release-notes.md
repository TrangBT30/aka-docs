---
id: release-notes
title: Ghi chú phát hành
sidebar_label: Ghi chú phát hành
sidebar_position: 2
description: Tính năng mới, cải tiến và sửa lỗi trong từng phiên bản Akabot Vision.
---

# Akabot Vision — Ghi chú phát hành

## v3.2.0 — Tháng 4 năm 2026

### Tính năng mới
- **Trích xuất tạo sinh** — Sử dụng mô hình ngôn ngữ lớn để trích xuất trường từ tài liệu mà không cần mẫu định sẵn.
- **Hỗ trợ chữ viết tay** — Engine OCR xử lý chữ in nghiêng và nội dung kết hợp in/viết tay với mô hình HTR mới.
- **Hàng đợi xử lý hàng loạt** — Gửi hàng trăm tài liệu trong một lệnh gọi API duy nhất; Vision xử lý bất đồng bộ và đăng kết quả lên webhook.

### Cải tiến
- Độ chính xác phát hiện bảng trên hóa đơn phức tạp có tiêu đề lồng nhau tăng từ 87% lên 94%.
- Giao diện trạm xác thực được thiết kế lại: điều hướng chỉ bằng bàn phím, chấp nhận hàng loạt cho trang có độ tin cậy cao.
- Huấn luyện mô hình giờ cần ít mẫu được gán nhãn hơn 30% để đạt độ chính xác sẵn sàng sản xuất.

### Sửa lỗi
- Sửa điểm tin cậy hiển thị 0% cho PDF nhiều trang sau trang thứ 10.
- Khắc phục lỗi xoay tài liệu 180° trong tiền xử lý làm hỏng ánh xạ tọa độ trường.
- Sửa trình chỉnh sửa mẫu trích xuất không lưu thay đổi khi chuyển loại tài liệu mà không lưu rõ ràng.

---

## v3.1.0 — Tháng 1 năm 2026

### Tính năng mới
- **Tách tài liệu** — Tự động phát hiện và tách các bộ PDF đa tài liệu thành các file riêng lẻ trước khi phân loại.
- **Phát hiện chữ ký** — Loại trường mới phát hiện sự có mặt hoặc vắng mặt của chữ ký trong vùng xác định.
- **REST API v2** — Endpoint trích xuất đồng bộ cho tài liệu dưới 5 MB; không cần polling.

### Cải tiến
- Độ chính xác mô hình tiếng Việt cải thiện 18% sau khi tái huấn luyện trên corpus mở rộng.
- Thông lượng xử lý tăng lên 500 trang/phút mỗi tenant (tăng từ 200).
- Kết quả trích xuất bao gồm tọa độ bounding box cho mỗi giá trị được trích xuất.

### Sửa lỗi
- Sửa lỗi ngắt quãng khi xử lý file TIFF với nén CCITT Group 4.
- Sửa trích xuất trường trên tài liệu có văn bản RTL kết hợp với nội dung LTR.

---

## v3.0.0 — Tháng 9 năm 2025

### Tính năng mới
- **Ra mắt Akabot Vision v3** — Được xây dựng lại trên pipeline OCR và trích xuất dựa trên transformer.
- **Trình chỉnh sửa mẫu không cần code** — Vẽ vùng trường trên hình ảnh tài liệu và gán nhãn — không cần file cấu hình.
- **Trạm human-in-the-loop** — Giao diện web nhúng để người xem xét xác thực và sửa các trích xuất không chắc chắn.

### Thay đổi không tương thích ngược
- Định dạng mẫu Vision v2 (`.vtemplate`) không tương thích với v3. Tạo lại mẫu bằng trình chỉnh sửa mới.
- Python SDK v2 cho Vision đã lỗi thời; sử dụng REST API hoặc gói activity Studio mới.

### Sửa lỗi
- Khắc phục sự cố cạn kiệt bộ nhớ khi xử lý file PDF lớn hơn 100 MB.
