/**
 *  Tinh Thue TNCN
 * - Dau Vao : Nhap Ten, Tien Luong,So Nguoi Phu thuoc
 * - Xu Ly: Dung cong thuc tinh Thue
 *   + Thu nhập chịu thuế = Tổng thu nhập năm - 4tr- Số người phụ thuộc * 1.6tr
 *   + xu lý theo bang so lieu khoang thu nhap chiu thue & % Thue suat
 *  - Dau Ra
 *     + Print Kqua tính thue
 */

const getTaxRate = (taxableIncome) => {
  if (taxableIncome <= 0) return 0;
  else if (taxableIncome <= 60) return 0.05;
  else if (taxableIncome <= 120) return 0.1;
  else if (taxableIncome <= 210) return 0.15;
  else if (taxableIncome <= 384) return 0.2;
  else if (taxableIncome <= 624) return 0.25;
  else if (taxableIncome <= 960) return 0.3;
  else return 0.35;
};

function calculateTax() {
  const name = document.getElementById("name").value;
  const income = parseFloat(document.getElementById("income").value);
  const dependents = parseFloat(document.getElementById("dependents").value);
  const messageBox = document.getElementById("messageBox");
  const result = document.getElementById("result");

  // Reset message box
  messageBox.classList.add("hidden");
  messageBox.textContent = "";
  result.textContent = "";

  if (!name || isNaN(income) || isNaN(dependents)) {
    messageBox.textContent = "⚠️ Vui lòng nhập đầy đủ thông tin hợp lệ.";
    messageBox.classList.remove("hidden");
    return;
  }

  const taxableIncome = income - 4 - dependents * 1.6;
  const taxRate = getTaxRate(taxableIncome);
  const taxAmount = taxableIncome > 0 ? taxableIncome * taxRate : 0;

  document.getElementById("result").innerHTML = `
    👤 <strong>${name}</strong><br>
    📊 Thu nhập chịu thuế: <strong>${taxableIncome.toFixed(2)} triệu</strong><br>
    💸 Thuế phải trả: <strong>${taxAmount.toFixed(2)} triệu VNĐ</strong><br>
    🧾 Thuế suất: <strong>${taxRate * 100}%</strong> `;
}
