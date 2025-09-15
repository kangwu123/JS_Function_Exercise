/**
 * Tỉnh Tien Cap 
 * - Dau Vao: cho Ma Khach hang,Loai Kh,So Kenh,So Ket Noi
 * - Xu Ly :
 *  + Cho Doanh Nghiep: Phi Xu ly ->4.5$ ; cơ bản->20.5$ thuê cc ->7.5$ /kenh
 *  + Cho Ca Nhan : Phi Xu ly ->15$; co ban -> 75$ / 10 Ket noi dau, Từ kết nối 11+ thêm 5$
 * Thuê cc 50$/kenh
 *   - Formula cho Nha Dan
 *     Total = Processing Fee + Basic Service Fee + (Premium Channel Fee × Number of Premium Channels)
📊      ex: Total = 4.5 + 20.5 + (7.5 *  Số kênh cao cấp)
 *   - Formula cho Doanh Nghiep
        + if Number connection <= 10 -> Service Fee = 75 
        + else > 11 -> Gán new value Service Fee = 75 + ((Số kết nối - 10) × 5)
          => Total = 15 + Service Fee + (50 × Số kênh cao cấp)
 * - Result: Slpit to Function Tinh Bill & Type Khach Hang use condition
 *      then Print Result 
 */

// Handle Type Customer
const handleCustomerTypeChange = () => {
  const type = document.getElementById('customerType').value;
  const connectionsDiv = document.getElementById('connectionsDiv');
  
  if (type === 'business') {
    connectionsDiv.classList.remove('hidden');
  } else {
    connectionsDiv.classList.add('hidden');
    document.getElementById('connections').value = '';
  }
};
//  Handle calculateBill
 function calculateBill() {
      const type = document.getElementById('customerType').value;
      const premiumChannels = Number(document.getElementById('premiumChannels').value || 0);
      const connections = Number(document.getElementById('connections').value || 0);

      let total = 0;

      if (type === 'residential') {
        total = 4.5 + 20.5 + (7.5 * premiumChannels);
      } else if (type === 'business') {
        let serviceFee = 75;
        if (connections > 10) {
          serviceFee += (connections - 10) * 5;
        }
        total = 15 + serviceFee + (50 * premiumChannels);
      }

      document.getElementById('result').textContent = `Tổng hóa đơn: ${total.toFixed(2)} $`;
    }