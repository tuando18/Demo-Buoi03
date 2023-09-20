console.log("\tDemo hàm");
// có 3 loại hàm
// 1. hàm bình thường (không có tham số, không có giá trị trả về)

// 2. hàm có tham số (có thể có 1 hoặc nhiều tham số)

// 3. hàm có giá trị trả về

console.log("\tDemo hàm cơ bản");
// cấu trúc khai báo hàm
function xinChao() {
    console.log("Xin Chào");
    console.log("Do Van Tuan");
    console.log("I am Dev");
}

xinChao();

console.log("\tDemo hàm có tham số");
function xinChaoCoThamSo(thamSo01, thamSo02) {
    console.log(thamSo01);
    console.log(thamSo02);
}

// gọi hàm truyền vào tham số
xinChaoCoThamSo("Đây là tham số 01" , "Đây là tham số 02");

// ví dụ
function xinChaoTheoQuocGia(quocGiaParam) {
    if (quocGiaParam == "vn") {
        console.log("Xin Chào");
    } else if (quocGiaParam == "name") {
        console.log("Do Van Tuan");
    } else if (quocGiaParam == "nn") {
        console.log("I am Dev");
    } else {
        console.log("Xin chào tôi có thể giúp gì cho bạn");
    }
}
let quocGia = prompt("Mời bạn điền thông tin (vn, name, nn): ");
xinChaoTheoQuocGia(quocGia);

console.log("\tDemo hàm có giá trị trả về");
// khai báo hàm có giá trị trả về
function hamCoGiaTriTraVe() {
    return "Đây là hàm có giá trị trả về";
}
let giaTriNhanDuocTuHam = hamCoGiaTriTraVe();
console.log("Gía trị nhận được từ hàm: ", giaTriNhanDuocTuHam);

// ví dụ: viết hàm trả về tên khi ng dùng nhập họ và tên
function timTen(hoVaTenThamSo) {
    // cách 1: tìm last index of dấu cách
    // sau đó dùng substring để cắt chuỗi
    hoVaTenThamSo = hoVaTenThamSo.trim();
    let lastIndexOfSpace = hoVaTenThamSo.lastIndexOf(" ");
    let ten = hoVaTenThamSo.substring(lastIndexOfSpace + 1, hoVaTenThamSo.length);
    
    return ten;
}

let hoVaTen = prompt("Nhập họ và tên: ");
let ten = timTen(hoVaTen)
console.log(ten);

function timTen02(hoVaTenThamSo) {
    // ép kiểu string về array theo dấu cách
    // phần tử cuối cùng của mảng chính là tên
    hoVaTenThamSo = hoVaTenThamSo.trim();
    let arr = hoVaTenThamSo.split(" ");
    return arr[arr.length - 1];
}
let tenCach02 = timTen02(hoVaTen);
console.log("Cách 2: ", tenCach02);