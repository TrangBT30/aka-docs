---
id: release-notes
title: Ghi chú phát hành
sidebar_label: Ghi chú phát hành
sidebar_position: 2
description: Tính năng mới, cải tiến và sửa lỗi trong từng phiên bản Akabot Insight.
---

# Akabot Insight — Ghi chú phát hành

## v3.2.0 — Tháng 4 năm 2026

### Tính năng mới
- **Phát hiện bất thường bằng AI** — Insight tự động gắn cờ các đợt giảm bất thường về tỷ lệ thành công hoặc thông lượng và hiển thị các nguyên nhân gốc rễ có thể xảy ra.
- **Chỉ số tùy chỉnh** — Định nghĩa chỉ số được tính toán bằng trình chỉnh sửa công thức kết hợp dữ liệu thực thi thô với dữ liệu kinh doanh từ Data Service.
- **Liên kết chia sẻ bảng điều khiển** — Tạo URL chia sẻ chỉ đọc cho bất kỳ bảng điều khiển nào; người nhận không cần đăng nhập.

### Cải tiến
- Thời gian render bảng điều khiển cho biểu đồ với hơn 1 triệu điểm dữ liệu giảm 55%.
- Email báo cáo theo lịch bao gồm bảng tóm tắt nhúng để người nhận không cần mở tệp đính kèm.
- Bảng bộ lọc hỗ trợ chọn nhiều tên quy trình, nhóm robot và môi trường.

### Sửa lỗi
- Sửa biểu đồ sử dụng robot hiển thị giá trị trên 100% khi có các cửa sổ công việc chồng chéo.
- Khắc phục widget bảng điều khiển mất vị trí sau khi làm mới trình duyệt trên Firefox.
- Sửa báo cáo theo lịch không gửi khi thời gian báo cáo rơi vào thay đổi đồng hồ tiết kiệm ánh sáng ban ngày.

---

## v3.1.0 — Tháng 1 năm 2026

### Tính năng mới
- **Máy tính tiết kiệm FTE** — Nhập thời gian xử lý tác vụ trung bình và khối lượng; Insight tính toán FTE tương đương ước tính và tiết kiệm chi phí.
- **Giao diện so sánh quy trình** — So sánh KPI cho hai hoặc nhiều quy trình song song trên một biểu đồ duy nhất.
- **Khoan sâu đến log công việc** — Nhấp vào bất kỳ điểm dữ liệu nào trên biểu đồ để mở danh sách log thực thi đã lọc cho khoảng thời gian đó.

### Cải tiến
- Cửa sổ lưu giữ dữ liệu mở rộng lên 24 tháng (tăng từ 12 tháng).
- Xuất sang Excel tôn trọng các bộ lọc bảng điều khiển đã áp dụng.
- Giới hạn tốc độ API Insight tăng từ 60 lên 300 yêu cầu/phút mỗi tenant.

### Sửa lỗi
- Sửa widget thông lượng hàng đợi đếm các mục bị từ bỏ là đã hoàn thành thành công.
- Sửa xử lý múi giờ trong báo cáo theo lịch cho tenant ở UTC+5:30 và UTC+5:45.

---

## v3.0.0 — Tháng 9 năm 2025

### Tính năng mới
- **Ra mắt Akabot Insight v3** — Engine phân tích mới với thời gian phản hồi truy vấn dưới một giây trên tập dữ liệu lên đến 500 triệu hàng.
- **Thư viện bảng điều khiển tích hợp sẵn** — 12 bảng điều khiển có sẵn cho sức khỏe quy trình, đội robot, quản lý hàng đợi và phân tích ngoại lệ.
- **Trình tạo bảng điều khiển kéo-thả** — Xây dựng bảng điều khiển tùy chỉnh mà không cần viết truy vấn; chọn từ 20 loại widget.

### Thay đổi không tương thích ngược
- Định nghĩa bảng điều khiển tùy chỉnh Insight v2 (xuất JSON) không thể nhập trong v3. Xây dựng lại bảng điều khiển bằng trình tạo mới.

### Sửa lỗi
- Khắc phục tổng hợp không chính xác cho các quy trình có nhánh song song tạo ra nhiều mục log mỗi giao dịch.
