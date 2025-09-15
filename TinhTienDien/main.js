/**
 *  Tinh Tien Dien
 * Dau Vao: Nhap Ten Kh & so KWH
 * - Xu Ly:
 *   - Tinh & Xuat Tien tra theo rule kwh
 *     + 50Kwh Đầu -> 500đ ; 50Kwh kế 650đ
 *       100Kwh kế 850đ, 150Kwh kế 1100đ, còn lại 1300Kwh
 * - Dau ra
 *  + Print Result calculate
 */

const calculateElectricityBill = (kw) => {
  let total = 0;
  if (kw <= 50) {
    total = kw * 500;
  } else if (kw <= 100) {
    total = 50 * 500 + (kw - 50) * 650;
  } else if (kw <= 200) {
    total = 50 * 500 + 50 * 650 + (kw - 100) * 850;
  } else if (kw <= 350) {
    total = 50 * 500 + 50 * 650 + 100 * 850 + (kw - 200) * 1100;
  } else {
    total = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (kw - 350) * 1300;
  }
  return total;
};

const calculateBill = () => {
  const name = document.getElementById("name").value.trim();
  const kw = parseFloat(document.getElementById("kw").value);
  const resultDiv = document.getElementById("result");

  if (!name || isNaN(kw) || kw < 0) {
    resultDiv.textContent = "❌ Vui lòng nhập tên và số Kw hợp lệ!";
    resultDiv.classList.replace("text-green-700", "text-red-600");
    return;
  }

  const total = calculateElectricityBill(kw);

  resultDiv.classList.replace("text-red-600", "text-green-700");
  resultDiv.textContent = `Khách hàng ${name} cần thanh toán: ${total.toLocaleString()} đồng`;
};
