/**
 *  Quan Ly Tuyen Sinh
 *  - Dau Vao: Khai Bao Bien  Diem Khu Vuc Diem Doi Tuong
 * - Xu Ly: su Dung Function Cho khu Vuc Diem Doi Tuong Diem Khu Vuc 
 * & check condition diem mon hoc bat ky diem 0
 * -Result: Print Kqua Dau or Rot tuy theo Diem Doi Tuong & Diem Khu Vuc 
 */

// Function GetArea Bonus
function getAreaBonus(area) {
      switch (area) {
        case 'A': return 2;
        case 'B': return 1;
        case 'C': return 0.5;
        default: return 0;
      }
    }
// Function GetObject Bonus
    function getObjectBonus(object) {
      switch (object) {
        case '1': return 2.5;
        case '2': return 1.5;
        case '3': return 1;
        default: return 0;
      }
    }

    function checkResult() {
      const passMark = parseFloat(document.getElementById("passMark").value);
      const score1 = parseFloat(document.getElementById("score1").value);
      const score2 = parseFloat(document.getElementById("score2").value);
      const score3 = parseFloat(document.getElementById("score3").value);
      const area = document.getElementById("area").value;
      const object = document.getElementById("object").value;

      const resultDiv = document.getElementById("result");

    // Check if any subject is 0
    //   if ([score1, score2, score3].some(score => score === 0)) -- use Array Method Type .some()
    if(score1 === 0 || score2 === 0 || score3 === 0){
        resultDiv.textContent = "Failed có 1 môn bất kỳ điểm 0";
        resultDiv.classList.remove("text-green-600");
        resultDiv.classList.add("text-red-600");
        return;
      }

      const areaBonus = getAreaBonus(area);
      const objectBonus = getObjectBonus(object);
      const totalScore = score1 + score2 + score3 + areaBonus + objectBonus;

      if (totalScore >= passMark) {
        resultDiv.textContent = `Đã Đạt Điểm Yêu Cầu ✅ | Total Score: ${totalScore}`;
        resultDiv.classList.remove("text-red-600");
        resultDiv.classList.add("text-green-600");
      } else {
        resultDiv.textContent = `Điểm Chuẩn Ko đạt Yêu Cầu or chưa đủ thông tin & nhập điểm môn học ❌ | Total Score: ${totalScore}`;
        resultDiv.classList.remove("text-green-600");
        resultDiv.classList.add("text-red-600");
      }
    }