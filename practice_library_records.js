// 1. Khởi tạo mảng gồm 3 phiếu ban đầu
// Mỗi phần tử là một đối tượng chứa thông tin phiếu mượn
let borrowRecords = [
  { recordId: "PM01", studentId: "SV101", bookTitle: "JavaScript Basics", borrowDays: 10, isReturned: false },
  { recordId: "PM02", studentId: "SV102", bookTitle: "Node.js in Action", borrowDays: 20, isReturned: false },
  { recordId: "PM03", studentId: "SV103", bookTitle: "Database Design", borrowDays: 14, isReturned: false }
];

// 2. Thêm mới PM04
borrowRecords.push({
  recordId: "PM04",
  studentId: "SV104",
  bookTitle: "Clean Code",
  borrowDays: 18,
  isReturned: false
});
// lệnh push() dùng để chèn trực tiếp 1 phần tử mới vào cuối mảng

// 3. Quá hạn > 14 ngày thì tính phạt
for (let i = 0; i < borrowRecords.length; i++) {
  if (borrowRecords[i].borrowDays > 14) {
    let tienPhat = (borrowRecords[i].borrowDays - 14) * 5000;
    console.log(borrowRecords[i].recordId + " bị phạt: " + tienPhat);
  }
}
// duyệt qua từng phần tử, nếu borrowDays lớn hơn 14 thì lấy số ngày dư ra nhân với 5000

// 4. Trả sách PM01
borrowRecords[0].isReturned = true;
// truy cập trực tiếp phần tử đầu tiên (vị trí 0) và đổi trạng thái isReturned thành true

// 5. Xóa PM03 (nằm ở vị trí số 2)
borrowRecords.splice(2, 1);
// splice(2, 1) nghĩa là đứng tại vị trí số 2 và xóa đi đúng 1 phần tử

// 6. In ra bảng
console.table(borrowRecords);
// console.table() dùng để in mảng ra màn hình dưới dạng bảng kẻ ô cho dễ nhìn


