console.log("\tDemo Vòng Lặp");

let tenArr = ["Anh", "Bảo", "Chung", "Duy"]

// 1. vòng lặp for bình thường
console.log("\tDemo vòng lặp for");
for (let i = 0; i < tenArr.length; i++) {
    console.log(tenArr[i]);
}

// 2. vòng lặp for of
console.log("\tDemo for of");
for (let item of tenArr) {
    console.log(item);
}

// 3. while
console.log("\tDemo while");
let i = 0;
while (i < tenArr.length) {
    console.log(tenArr[i]);
    i++
}
// 4. do while
console.log("\tDemo do while");
let i2 = 0;
do {
    console.log(tenArr[i2]);
    i2++
} while (i2 < tenArr.length);

// ứng dụng do while
// let soNhapVao;
// let giaiDacBiet = Math.floor(Math.random() * 10);
// do {
//     soNhapVao = Number(prompt("Mời bạn dự đoán giải"));
// } while (giaiDacBiet !== soNhapVao);
// console.log("Giải đặc biệt: ", giaiDacBiet);

console.log("\tDemo break");
// ktra xem danh sách có điểm trung bình ko
let diemArr = [10,9,4,8,7,3,2];
for (let i = 0; i < diemArr.length; i++) {
    console.log(diemArr[i]);
    if (diemArr[i] < 5) {
        break;
    }
}

console.log("\tDemo for of");
for (let item of diemArr) {
    console.log(item);
    if (item < 5) {
        break;
    }
}