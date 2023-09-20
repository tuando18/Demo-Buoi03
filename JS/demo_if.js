console.log("\tDemo IF");

// ví dụ: nhập vào điểm và thông báo kết quả
let diemSo = Number(prompt("Nhập điểm số"));

console.log("\tDemo if");
if (diemSo >= 5) {
    console.log("Chúc mừng bạn đã qua môn");
}

if (diemSo < 5) {
    console.log("Chúc mừng bạn đã trượt môn");
}

// demo if else
console.log("\tDemo if else");
if (diemSo >= 5) {
    console.log("Chúc mừng bạn đã qua môn");
} else {
    console.log("Chúc mừng bạn đã trượt môn");
}

//demo if else if
console.log("\tDemo if else if");
// ví dụ: nhập vào số thứ in ra chữ thứ đó
let thuNumber = Number(prompt("Nhập vào thứ trong tuần: "));

if (thuNumber == 2) {
    console.log("Hôm nay là thứ hai");
} else if (thuNumber == 3) {
    console.log("Hôm nay là thứ ba");
} else if (thuNumber == 4) {
    console.log("Hôm nay là thứ tư");
} else if (thuNumber == 5) {
    console.log("Hôm nay là thứ năm");
} else if (thuNumber == 6) {
    console.log("Hôm nay là thứ sáu");
} else if (thuNumber == 7) {
    console.log("Hôm nay là thứ bảy");
} else if (thuNumber == 8) {
    console.log("Hôm nay là chủ nhật");
} else {
    console.log("Không có thứ thỏa mãn");
}

// demo switch
console.log("\tDemo switch");
switch (thuNumber) {
    case 2:
        console.log("Hôm nay là thứ hai");
        break;
    case 3: 
        console.log("Hôm nay là thứ ba");
        break;
    default: 
        console.log("Không có thứ thỏa mãn");
        break;
}

// lưu ý: nên dùng switch khi quá dài
// nâng cao
// câu lệnh if rút gọn
console.log("\tDemo if rút gọn");
console.log(diemSo >= 5 ? "Bạn đã qua môn" : "Bạn đã tạch môn");

// so sánh ===
// ví dụ: so sánh số 10 với string 10
// ví dụ: so sánh số 10 với === "10"
if (10 == "10") {
    console.log(true);
} else {
    console.log(false);
}
// kq: true
if (10 === "10") {
    console.log(true);
} else {
    console.log(false);
}// kq: false
 
if (10 === Number("10")) {
    console.log(true);
} else {
    console.log(false);
}
