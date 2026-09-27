let choice = 1;

let rawCardCode = "   gym-vip-2024   ";
let cleanCardCode = "";
let isValidCard = false;
let isVip = false;

let lockerZone = "";
let freeItem = "";

let rawItemLog = "TOWEL:2|LOCK:1";
let cleanItemLog = "";

let towelQuantity = 0;
let lockQuantity = 0;

let towelFee = 0;
let lockFee = 0;
let totalItemFee = 0;
let depositFee = 0;
let totalPayment = 0;

let tempLog = "";
let separatorIndex = -1;
let itemSegment = "";
let colonIndex = -1;
let itemType = "";
let itemQtyNum = 0;

do {
  console.log("\n================ HỆ THỐNG QUẢN LÝ TỦ ĐỒ & VẬT TƯ ================");
  console.log("1. Tiếp nhận và xác thực thẻ hội viên");
  console.log("2. Ghi nhận chuỗi vật tư mượn thêm");
  console.log("3. In phiếu bàn giao tủ đồ và tính tổng phụ phí vật tư");
  console.log("4. Đóng ca làm việc và thoát");
  console.log("==================================================================");

  switch (choice) {
    case 1:
      cleanCardCode = rawCardCode.trim().toUpperCase();

      if (cleanCardCode.startsWith("GYM-") && cleanCardCode.length >= 8) {
        isValidCard = true;
        isVip = cleanCardCode.includes("-VIP-");

        if (isVip === true) {
          lockerZone = "ZONE-A";
          freeItem = "1 Khăn tắm lớn (Miễn phí)";
        } else {
          lockerZone = "ZONE-B";
          freeItem = "Không có";
        }

        console.log("-> Xác thực thẻ THÀNH CÔNG:", cleanCardCode);
        console.log("-> Hạng thẻ:", isVip ? "VIP" : "STANDARD");
        console.log("-> Tủ đồ phân bổ:", lockerZone);
      } else {
        isValidCard = false;
        console.log("-> LỖI: Thẻ hội viên không hợp lệ!");
      }
      break;

    case 2:
      if (isValidCard === false) {
        console.log("-> LỖI: Cần quét thẻ hợp lệ ở bước 1 trước!");
        break;
      }

      cleanItemLog = rawItemLog.trim().toUpperCase();
      towelQuantity = 0;
      lockQuantity = 0;

      tempLog = cleanItemLog + "|";

      while (tempLog.length > 0) {
        separatorIndex = tempLog.indexOf("|");

        if (separatorIndex === -1) {
          break;
        }

        itemSegment = tempLog.slice(0, separatorIndex);
        tempLog = tempLog.slice(separatorIndex + 1);

        colonIndex = itemSegment.indexOf(":");

        if (colonIndex !== -1) {
          itemType = itemSegment.slice(0, colonIndex);
          itemQtyNum = Number(itemSegment.slice(colonIndex + 1));

          if (itemType === "TOWEL") {
            towelQuantity = towelQuantity + itemQtyNum;
          } else if (itemType === "LOCK") {
            lockQuantity = lockQuantity + itemQtyNum;
          }
        }
      }

      console.log("-> Đã ghi nhận vật tư mượn thêm:");
      console.log("   + Khăn tắm :", towelQuantity, "cái");
      console.log("   + Khóa phụ :", lockQuantity, "cái");
      break;

    case 3:
      if (isValidCard === false) {
        console.log("-> LỖI: Cần quét thẻ hợp lệ ở bước 1 trước!");
        break;
      }

      towelFee = towelQuantity * 20000;
      lockFee = lockQuantity * 15000;
      totalItemFee = towelFee + lockFee;

      if (towelQuantity > 0 || lockQuantity > 0) {
        depositFee = 50000;
      } else {
        depositFee = 0;
      }

      totalPayment = totalItemFee + depositFee;

      console.log("\n----------------------------------------");
      console.log("      PHIẾU BÀN GIAO TỦ ĐỒ & VẬT TƯ      ");
      console.log("----------------------------------------");
      console.log("Mã thẻ hội viên : " + cleanCardCode);
      console.log("Hạng thẻ        : " + (isVip ? "VIP" : "STANDARD"));
      console.log("Khu vực tủ đồ   : " + lockerZone);
      console.log("Ưu đãi kèm theo : " + freeItem);
      console.log("----------------------------------------");
      console.log("Khăn tắm mượn   : " + towelQuantity + " cái (" + towelFee + " VNĐ)");
      console.log("Khóa phụ mượn   : " + lockQuantity + " cái (" + lockFee + " VNĐ)");
      console.log("----------------------------------------");
      console.log("Tổng phí vật tư : " + totalItemFee + " VNĐ");
      console.log("Tiền đặt cọc     : " + depositFee + " VNĐ");
      console.log("----------------------------------------");
      console.log("TỔNG THANH TOÁN : " + totalPayment + " VNĐ");
      console.log("----------------------------------------");
      break;

    case 4:
      console.log("-> Đã đóng ca làm việc. Cảm ơn!");
      break;

    default:
      console.log("-> Lựa chọn không đúng! Vui lòng chọn từ 1 đến 4.");
      break;
  }

  if (choice === 1) {
    choice = 2;
  } else if (choice === 2) {
    choice = 3;
  } else if (choice === 3) {
    choice = 4;
  }

} while (choice !== 4);