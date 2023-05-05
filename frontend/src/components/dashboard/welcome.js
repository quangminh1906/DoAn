import React from "react";
import "./welcome.css";
import { Button } from "antd";

export default function welcome() {
  return (
    <div>
      {" "}
      <h2>
        <b>Những gì admin có thể làm</b>
      </h2>
      <h3>1.Với giáo viên</h3>
      <h4> Liệt kê danh sách các giáo viên trên hệ thống</h4>
      <ul>
        <li>Thêm mới - Thêm tài khoản giáo viên mới.</li>
        <li>Sửa thông tin giáo viên</li>
        <li>Xóa tài khoản giáo viên</li>
      </ul>
      <h3>2.Với các môn học</h3>
      <h4> Liệt kê các môn có trên hệ thống.</h4>
      <ul>
        <li>Thêm mới - Thêm một môn học mới </li>
        <li>Chỉnh sửa tên môn.</li>
      </ul>
      <br />
      <h2>
        <b>Những gì giáo viên có thể làm</b>
      </h2>
      <h3>1. Với các câu hỏi</h3>
      <h4> Liệt kê ra tất cả các câu hỏi.</h4>
      <ul>
        <li>Thêm mới - Tạo câu hỏi mới.</li>
        <li>Chi tiết câu hỏi</li>
        <li>Xóa câu hỏi</li>
      </ul>
      <h3>2. Với các kiểm tra</h3>
      <h4> Liệt kê các bài kiểm tra</h4>
      <ul>
        <li>Chi tiết bài kiểm tra</li>
        <li>Các câu hỏi trong bài kiểm tra</li>
      </ul>
      <h4>Tạo một bài kiểm tra mới</h4>
      <ul>
        <ol>
          <li>Nhập vào các thông tin cơ bản cho bài kiểm tra</li>
          <li>Chọn câu hỏi</li>
          <ul>
            <li>
              Các câu hỏi - Chọn &gt; Tự chọn câu hỏi theo ý mình. Click Tiếp
              tục để tiếp tục.
            </li>
          </ul>
        </ol>
        <li>Thông tin cơ bản của một bài kiểm tra</li>
        <ul>
          <li>Link đăng ký - Link để cho học sinh đăng ký kiểm tra.</li>
          <li>Đóng đăng ký - Click để đóng link đăng k.</li>
          <li>Tải lại - Click để xem danh sách học sinh đã đăng ký.</li>
          <li>Bắt đầu kiểm tra - Click để bắt đầu bài kiểm tra.</li>
          <li>Kết thúc kiểm tra - Click để kết thúc kiểm tra.</li>
        </ul>
        <p>
          <b>Lưu ý-</b>Link bài kiểm tra đã được gửi đến địa chỉ email của học
          sinh đã đăng ký. Học sinh sẽ bấm vào link đó để bắt đầu kiểm tra.
        </p>
      </ul>
    </div>
  );
}
