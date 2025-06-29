//GLOBAL VAR
// MESSAGE//
let myMessage01 = "THEO DÕI QUẠT HÚT BỤI";
let myMessage02 = "THEO DÕI QUẠT HÚT ỐNG KHÓI" ;
let myMessage03 =  "SỬA THANH CÀO SILO THÀNH PHẨM 3 THANH/CA";
let myMessage04 = null;
let myMessage05 = null;

// TASK
// ROW 0//
let   task00_priority = "none";//danger -warning; 3; primary; 4 secondary; 5 success; //
const  task00_mach  =  "machine" ;
const  task00_content =  "task";
const  task00_start  = "start date";
const  task00_end = "end date";
const  task00_assign = "assgn";
const  task00_employ = "employ";
const  task00_support = "support";
const  task00_notes = "Notes";
// ROW 1
let  task01_priority = "primary";//1: danger; 2 warning; 3; primary; 4 secondary; 5 success; //
const  task01_mach =  "Lò hơi";
const  task01_content =  "Sửa chữa và lắp lại bơm";
const  task01_start  ="";
const  task01_end ="";
const  task01_assign =" ";
const  task01_employ ="";
const  task01_support ="";
const  task01_notes ="Chờ vật tư";

// ROW 2//
let  task02_priority = "warnjng";//1: danger; 2 warning; 3; primary; 4 secondary; 5 success; //
const  task02_mach  =  "Bộ trao đổi nhiệt<br> Máy gia ẩm thân lá 01" ;
const  task02_content =  "Hoàn thiện lắp đặt";
const  task02_start  = "03/07/2025";
const  task02_end = "10/07/2025";
const  task02_assign = "Hoà";
const  task02_employ = "Văn Hưng";
const  task02_support = "Duy Hưng";
const  task02_notes = "-";


// ROW 3//
let   task03_priority = "warning";//1: danger; 2 warning; 3; primary; 4 secondary; 5 success; //
const  task03_mach  =  "Phòng đào tạo<br>Chữ KHATOCO" ;
const  task03_content =  "Chuyển ổ cắm điện <br> Thay 02 bóng đèn ở sảnh<br> Mang kệ đựng bình chữa cháy, thay bảng tiêu lệnh mới(không đóng đè lên cái cũ) <br>Nghiên cứu keo dán lại chữ Khatoco";
const  task03_start  = "30/06/2025";
const  task03_end = "02/07/2025";
const  task03_assign = "";
const  task03_employ = "Duy Hưng, Mật Thủy";
const  task03_support = "_";
const  task03_notes = "Dán lại chữ Khatoco kết hợp với bảo vệ";
// ROW 4//
let   task04_priority = "danger";//danger -warning; 3; primary; 4 secondary; 5 success; //
const  task04_mach  =  "Máy sấy lá" ;
const  task04_content =  "Thay ổ bi cánh quạt khoang sấy số 06";
const  task04_start  = "30/06/2025";
const  task04_end = "30/06/2025";
const  task04_assign = "";
const  task04_employ = "Ca B";
const  task04_support = "---";
const  task04_notes = "";

// ROW 5//
let   task05_priority = "warning";//danger -warning; 3; primary; 4 secondary; 5 success; //
const  task05_mach  =  "Tủ điều khiển bơm PCCC<br> Kho Diên Phú" ;
const  task05_content =  "Làm gọn tủ điện và thay thiết bị";
const  task05_start  = "04/07/2025";
const  task05_end = "05/07/2025";
const  task05_assign = "---";
const  task05_employ = "M. Thuỷ và D. Hưng";
const  task05_support = "";
const  task05_notes = "Làm giờ hành chính, a Yên và Hòa phụ trách tắt mở điện 2 ngày này";
// ROW 6//
let   task06_priority = "warning";//danger -warning; 3; primary; 4 secondary; 5 success; //
const  task06_mach  =  "Buồng dập bụi bê tông<br> Tủ điều khiển" ;
const  task06_content =  "Làm mạch báo mức nước và bảo vệ mô tơ";
const  task06_start  = "30/06/2025";
const  task06_end = "03/07/2025";
const  task06_assign = "M Thuỷ";
const  task06_employ = "M Thuỷ & D. Hưng";
const  task06_support = "---";
const  task06_notes = "---";
// ROW 7//
let   task07_priority = "danger";//danger -warning; 3; primary; 4 secondary; 5 success; //
const  task07_mach  =  "Máy hút bụi <br> Đầu máy cắt" ;
const  task07_content =  "Gắn mô tơ và hoàn thiện phần đầu ra quạt";
const  task07_start  ="30/06/2025";
const  task07_end = "30/06/2025";
const  task07_assign = "";
const  task07_employ = "ca A";
const  task07_support = "";
const  task07_notes="Kiểm tra đo đạc trước và sau khi lắp có tải và không tải";
// ROW 8//
let   task08_priority = "warning";//danger -warning; 3; primary; 4 secondary; 5 success; //
const  task08_mach  =  "Quạt thổi phân li" ;
const  task08_content =  "Thay ổ bi <br> Sửa vành";
const  task08_start  = "30/06/2025";
const  task08_end = "30/06/2025";
const  task08_assign = "";
const  task08_employ = "Ca B";
const  task08_support = "";
const  task08_notes = "";

// ROW 09//
let   task09_priority = "warning";//danger -warning; 3; primary; 4 secondary; 5 success; //
const  task09_mach="Phòng kế hoạch" ;
const  task09_content =  "Sửa kệ chứa hàng";
const  task09_start  = "01/07/2025";
const  task09_end = "10/07/2025";
const  task09_assign = "";
const  task09_employ = "ca A";
const  task09_support = "";
const  task09_notes = "Cắt gom các kệ hỏng ";
// ROW 10//
let   task10_priority = "none";//danger -warning; 3; primary; 4 secondary; 5 success; //
const  task10_mach  =  "Các bộ trao đổi nhiệt hỏng" ;
const  task10_content =  "Kiểm tra đánh dấu các vị trí xì<>Lên phương án tự sửa chữa nếu được";
const  task10_start  = "";
const  task10_end = "";
const  task10_assign = "Hoà";
const  task10_employ = "Huy Yên";
const  task10_support = "";
const  task10_notes = "a Yên kiểm tra và đánh dấu các chổ xì<br> Hoà lên phương án và mua dụng cụ để sửa";
