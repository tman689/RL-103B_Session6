let choice = 1;

let rawOrderCode = "   vip-shaker-02   ";
let cleanOrderCode = "";
let isValidCode = false;

let isVip = false;
let itemCode = "";
let itemName = "";
let quantity = 0;
let unitPrice = 0;

let subtotal = 0;
let discount = 0;
let total = 0;

do {
  console.log("\n================ MENU PHÒNG GYM ================");
  console.log("1. Nhập và chuẩn hóa mã đơn hàng");
  console.log("2. Tính tiền và in hóa đơn phụ kiện");
  console.log("3. Thoát chương trình");
  console.log("================================================");

  switch (choice) {
    case 1:
      cleanOrderCode = rawOrderCode.trim().toUpperCase();

      if (cleanOrderCode.length >= 8) {
        isValidCode = true;
        console.log("-> Làm sạch mã thành công:", cleanOrderCode);
      } else {
        isValidCode = false;
        console.log("-> LỖI: Mã đơn hàng phải có từ 8 ký tự trở lên!");
      }
      break;

    case 2:
      if (isValidCode === false) {
        console.log("-> LỖI: Bạn cần nhập mã đúng ở bước 1 trước!");
        break;
      }

      isVip = cleanOrderCode.startsWith("VIP-");

      itemCode = cleanOrderCode.slice(4, 10);
      quantity = Number(cleanOrderCode.slice(11, 13));

      if (itemCode === "SHAKER") {
        itemName = "Bình lắc";
        unitPrice = 120000;
      } else if (itemCode === "GLOVES") {
        itemName = "Găng tay tập tạ";
        unitPrice = 180000;
      } else if (itemCode === "STRAP-") {
        itemName = "Dây kéo lưng";
        unitPrice = 150000;
      } else {
        itemName = "Phụ kiện Gym";
        unitPrice = 100000;
      }

      subtotal = unitPrice * quantity;

      if (isVip === true) {
        discount = subtotal * 0.1;
      } else {
        discount = 0;
      }

      total = subtotal - discount;

      console.log("\n----------------------------------------");
      console.log("         HÓA ĐƠN BÁN LẺ PHỤ KIỆN         ");
      console.log("----------------------------------------");
      console.log("Mã đơn hàng : " + cleanOrderCode);
      console.log("Sản phẩm    : " + itemName);
      console.log("Đơn giá     : " + unitPrice + " VNĐ");
      console.log("Số lượng    : " + quantity);
      console.log("----------------------------------------");
      console.log("Thành tiền  : " + subtotal + " VNĐ");
      console.log("Giảm giá VIP: " + discount + " VNĐ");
      console.log("----------------------------------------");
      console.log("TỔNG TIỀN   : " + total + " VNĐ");
      console.log("----------------------------------------");
      break;

    case 3:
      console.log("-> Cảm ơn bạn đã dùng chương trình. Tạm biệt!");
      break;

    default:
      console.log("-> Lựa chọn không đúng! Vui lòng chọn 1, 2 hoặc 3.");
      break;
  }

  if (choice === 1) {
    choice = 2;
  } else if (choice === 2) {
    choice = 3;
  }

} while (choice !== 3);