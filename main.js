// QUAN LY TUYEN SINH
function tinhDiemkhuvuc(khuvuc) {
  if (khuvuc == "A") {
    return 2;
  } else if (khuvuc == "B") {
    return 1;
  } else if (khuvuc == "C") {
    return 0.5;
  } else {
    return 0;
  }
}

function tinhDiemdoituong(doituong) {
  if (doituong == "1") {
    return 2.5;
  } else if (doituong == "2") {
    return 1.5;
  } else if (doituong == "3") {
    return 1;
  } else {
    return 0;
  }
}
//ket qua
function ketquaQLTS() {
  var inputDiemchuan = document.getElementById("diemchuan").value * 1;
  var inputDiem1 = document.getElementById("diem1").value * 1;
  var inputDiem2 = document.getElementById("diem2").value * 1;
  var inputDiem3 = document.getElementById("diem3").value * 1;
  var inputKhuvuc = document.getElementById("khuvuc").value;
  var inputDoituong = document.getElementById("doituong").value;
  var diemKhuvuc = tinhDiemkhuvuc(inputKhuvuc);
  var diemDoituong = tinhDiemdoituong(inputDoituong);
  var tongDiem =
    inputDiem1 + inputDiem2 + inputDiem3 + diemDoituong + diemKhuvuc;
  if (inputDiem1 == 0 || inputDiem2 == 0 || inputDiem3 == 0) {
    document.getElementById(
      "result_QLTS"
    ).innerText = `Ban da rot. Do co mon 0 diem`;
  } else if (tongDiem < inputDiemchuan) {
    document.getElementById(
      "result_QLTS"
    ).innerText = `Ban da rot. Tong Diem: ${tongDiem}`;
  } else {
    document.getElementById(
      "result_QLTS"
    ).innerText = `Ban da dau. Tong Diem: ${tongDiem}`;
  }
}

// TINH TIEN DIEN

function ketquaTiendien() {
  var inputHoten = document.getElementById("hoten").value;
  var inputSokw = document.getElementById("KW").value * 1;
  var tienDien = 0;
  if (inputSokw >= 0 && inputSokw <= 50) {
    tienDien = 500 * inputSokw;
  } else if (inputSokw <= 100) {
    tienDien = 50 * 500 + (inputSokw - 50) * 650;
  } else if (inputSokw <= 200) {
    tienDien = 50 * 500 + 50 * 650 + (inputSokw - 100) * 850;
  } else if (inputSokw <= 350) {
    tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (inputSokw - 200) * 1100;
  } else {
    tienDien =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (inputSokw - 350) * 1300;
  }

  document.getElementById(
    "result_tiendien"
  ).innerHTML = `Ho ten: ${inputHoten} <br> Tien dien: ${new Intl.NumberFormat(
    "de-DE",
    { style: "currency", currency: "VND" }
  ).format(tienDien)}`;
}

// TINH THUE
function ketquaThue() {
  var inputTen = document.getElementById("ten").value;
  var inputThunhapnam = document.getElementById("thunhapnam").value * 1;
  var inputSonguoithuthuoc =
    document.getElementById("songuoiphuthuoc").value * 1;

  var thuNhapchiuthue =
    inputThunhapnam - 4000000 - inputSonguoithuthuoc * 1600000;

  //   % CUA TONG THU NHAP CHIU THUE ------------------------->>>>>>>>>>>>>>>>>

  var tienThue = 0;

  if (thuNhapchiuthue <= 60e6) {
    tienThue = thuNhapchiuthue * 0.05;
  } else if (thuNhapchiuthue <= 120e6) {
    tienThue = thuNhapchiuthue * 0.1;
  } else if (thuNhapchiuthue <= 210e6) {
    tienThue = thuNhapchiuthue * 0.15;
  } else if (thuNhapchiuthue <= 384e6) {
    tienThue = thuNhapchiuthue * 0.2;
  } else if (thuNhapchiuthue <= 624e6) {
    tienThue = thuNhapchiuthue * 0.25;
  } else if (thuNhapchiuthue <= 960e6) {
    tienThue = thuNhapchiuthue * 0.3;
  } else {
    tienThue = thuNhapchiuthue * 0.35;
  }

  //   CHIA TUNG DOAN ------------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>

  //   var thueDen60 = thuNhapchiuthue * 0.05;
  //   var thueTren60den120 = 60e6 * 0.05 + (thuNhapchiuthue - 60e6) * 0.1;
  //   var thueTren120den210 =
  //     60e6 * 0.05 + 60e6 * 0.1 + (thuNhapchiuthue - 120e6) * 0.15;
  //   var thueTren210den384 =
  //     60e6 * 0.05 + 60e6 * 0.1 + 90e6 * 0.15 + (thuNhapchiuthue - 210e6) * 0.2;
  //   var thueTren384den624 =
  //     60e6 * 0.05 +
  //     60e6 * 0.1 +
  //     90e6 * 0.15 +
  //     174e6 * 0.2 +
  //     (thuNhapchiuthue - 384e6) * 0.25;
  //   var thueTren624den960 =
  //     60e6 * 0.05 +
  //     60e6 * 0.1 +
  //     90e6 * 0.15 +
  //     174e6 * 0.2 +
  //     240e6 * 0.25 +
  //     (thuNhapchiuthue - 624e6) * 0.3;
  //   var thueTren960 =
  //     60e6 * 0.05 +
  //     60e6 * 0.1 +
  //     90e6 * 0.15 +
  //     174e6 * 0.2 +
  //     240e6 * 0.25 +
  //     336e6 * 0.3 +
  //     (thuNhapchiuthue - 960e6) * 0.35;

  //   var tienThue = 0;

  //   if (thuNhapchiuthue <= 60e6) {
  //     tienThue = thueDen60;
  //   } else if (thuNhapchiuthue <= 120e6) {
  //     tienThue = thueTren60den120;
  //   } else if (thuNhapchiuthue <= 210e6) {
  //     tienThue = thueTren120den210;
  //   } else if (thuNhapchiuthue <= 384e6) {
  //     tienThue = thueTren210den384;
  //   } else if (thuNhapchiuthue <= 624e6) {
  //     tienThue = thueTren384den624;
  //   } else if (thuNhapchiuthue <= 960e6) {
  //     tienThue = thueTren624den960;
  //   } else {
  //     tienThue = thueTren960;
  //   }

  document.getElementById(
    "result_tienthue"
  ).innerHTML = `Ho ten: ${inputTen} <br> Tien thue thu nhap ca nhan: ${new Intl.NumberFormat(
    "de-DE",
    { style: "currency", currency: "VND" }
  ).format(tienThue)}`;
}

// TINH TIEN CAP

function showSelectedOption() {
  var selectElement = document.getElementById("KH").value;

  var anSoketnoi = document.getElementById("doanhnghiep-ketnoi");
  anSoketnoi.style.display = "none";

  var hienSoketnoi = document.getElementById(selectElement + "-ketnoi");

  if (hienSoketnoi) {
    hienSoketnoi.style.display = "block";
  }
}

function tinhPhidichvucoban(ketnoi) {
  var giaTien;
  if (ketnoi > "0" && ketnoi <= "10") {
    giaTien = 75;
  } else {
    var inputKetnoi = document.getElementById("soketnoi").value * 1;
    giaTien = 75 + (inputKetnoi - 10) * 5;
  }
  return giaTien;
}
function ketquaTiencap() {
  var inputKH = document.getElementById("KH").value;
  var inputKetnoi = document.getElementById("soketnoi").value * 1;
  var inputMaKH = document.getElementById("maKH").value;
  var inputKenhCC = document.getElementById("kenhCC").value * 1;
  var giaKetnoi = tinhPhidichvucoban(inputKetnoi);

  var tienCapDan = 25 + 7.5 * inputKenhCC;
  var tienCapdoanhnghiep = 15 + giaKetnoi + 50 * inputKenhCC;

  var tiencap;
  if (inputKH == "") {
    alert("Hay chon loai khach hang");
  } else if (inputKH == "nhadan") {
    tiencap = tienCapDan;
  } else {
    tiencap = tienCapdoanhnghiep;
  }
  document.getElementById(
    "result_tiencap"
  ).innerHTML = `Ma KH: ${inputMaKH} <br> Tien cap: ${new Intl.NumberFormat(
    "de-DE",
    { style: "currency", currency: "USD" }
  ).format(tiencap)}`;
}
