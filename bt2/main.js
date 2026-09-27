let choice = 1;

let rawMemberCode = "   gym-vip-2024   ";
let memberName = "nguyễn văn a";
let cleanMemberCode = "";
let cleanMemberName = "";
let isRegistered = false;

let packageName = "VIP";
let months = 6;
let ptSessions = 2;

let packagePricePerMonth = 0;
let basePrice = 0;
let ptPrice = 0;
let subtotalPrice = 0;
let discountPercent = 0;
let discountAmount = 0;
let finalPayment = 0;

let checkInCode = "   gym-vip-2024   ";
let cleanCheckInCode = "";
let isCheckInValid = false;

let registeredMembers = 0;
let totalRevenue = 0;
let checkInCount = 0;

do {
  console.log("\n================ HỆ THỐNG QUẢN LÝ HỘI VIÊN GYM ================");
  console.log("1. Đăng ký và chuẩn hóa hồ sơ hội viên mới");
  console.log("2. Tính tiền gói tập và áp dụng chính sách giảm giá");
  console.log("3. Quét mã thẻ check-in tại cửa quay");
  console.log("4. Xuất báo cáo thống kê ca trực và thoát");
  console.log("===============================================================");

  switch (choice) {
    case 1:
      cleanMemberCode = rawMemberCode.trim().toUpperCase();
      cleanMemberName = memberName.trim().toUpperCase();

      if (cleanMemberCode.length >= 8) {
        isRegistered = true;
        registeredMembers = registeredMembers + 1;
        console.log("-> Đăng ký thành công hội viên:", cleanMemberName);
        console.log("-> Mã thẻ hội viên đã chuẩn hóa:", cleanMemberCode);
      } else {
        isRegistered = false;
        console.log("-> LỖI: Mã thẻ hội viên không hợp lệ!");
      }
      break;

    case 2:
      if (isRegistered === false) {
        console.log("-> LỖI: Chưa có thông tin đăng ký! Vui lòng thực hiện Chức năng 1 trước.");
        break;
      }

      if (packageName === "STANDARD") {
        packagePricePerMonth = 500000;
      } else if (packageName === "VIP") {
        packagePricePerMonth = 800000;
      } else {
        packagePricePerMonth = 500000;
      }

      basePrice = packagePricePerMonth * months;
      ptPrice = ptSessions * 300000;
      subtotalPrice = basePrice + ptPrice;

      if (months >= 12) {
        discountPercent = 0.25;
      } else if (months >= 6) {
        discountPercent = 0.15;
      } else {
        discountPercent = 0;
      }

      discountAmount = basePrice * discountPercent;
      finalPayment = subtotalPrice - discountAmount;
      totalRevenue = totalRevenue + finalPayment;

      console.log("\n----------------------------------------");
      console.log("          HÓA ĐƠN ĐĂNG KÝ GÓI TẬP        ");
      console.log("----------------------------------------");
      console.log("Hội viên        : " + cleanMemberName);
      console.log("Mã thẻ          : " + cleanMemberCode);
      console.log("Gói tập         : " + packageName);
      console.log("Thời gian       : " + months + " tháng");
      console.log("Số buổi PT      : " + ptSessions + " buổi");
      console.log("----------------------------------------");
      console.log("Tiền gói tập    : " + basePrice + " VNĐ");
      console.log("Tiền thuê PT    : " + ptPrice + " VNĐ");
      console.log("Giảm giá gói    : " + discountAmount + " VNĐ (" + (discountPercent * 100) + "%)");
      console.log("----------------------------------------");
      console.log("TỔNG THANH TOÁN : " + finalPayment + " VNĐ");
      console.log("----------------------------------------");
      break;

    case 3:
      cleanCheckInCode = checkInCode.trim().toUpperCase();

      if (cleanCheckInCode.startsWith("GYM-") && cleanCheckInCode.endsWith("2024")) {
        isCheckInValid = true;
        checkInCount = checkInCount + 1;
        console.log("-> Check-in THÀNH CÔNG cho mã thẻ:", cleanCheckInCode);
      } else {
        isCheckInValid = false;
        console.log("-> Check-in THẤT BẠI: Mã thẻ không đúng định dạng!");
      }
      break;

    case 4:
      console.log("\n================ BÁO CÁO TỔNG KẾT CA TRỰC ================");
      console.log("Tổng số hội viên mới đăng ký : " + registeredMembers);
      console.log("Tổng số lượt check-in qua cửa : " + checkInCount);
      console.log("Tổng doanh thu thu được       : " + totalRevenue + " VNĐ");
      console.log("==========================================================");
      console.log("-> Đã thoát chương trình thành công!");
      break;

    default:
      console.log("-> Lựa chọn không hợp lệ! Vui lòng chọn từ 1 đến 4.");
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