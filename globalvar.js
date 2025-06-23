//GLOBAL VAR
// MESSAGE//
let myMessage01 = "THEO DÕI QUẠT HÚT ỐNG KHÓI";
let myMessage02 = "CHÚ Ý CÁC CÔNG VIỆC HÀNG NGÀY VÀ ĐINH KỲ";
let myMessage03 =  "MỞ CHỊU NHIỆT CHỈ DÙNG CHO QUẠT HÚT ỐNG KHÓI, QUẠT HÚT LÒ HƠI VÀ QUẠT HÚT MÁY XỬ LÝ MÙI ";
let myMessage04 ="  SỬ DỤNG 1 CÂY BƠM MỠ RIÊNG CHO MỞ CHỊU NHIỆT - CƠ ĐIỆN CHỊU TRÁCH NHIỆM QUẢN LÝ";
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
let  task01_priority = "warning";//1: danger; 2 warning; 3; primary; 4 secondary; 5 success; //
const  task01_mach =  "P. Đào Tạo";
const  task01_content =  "-Thay bóng đèn WC<br>-Gắn máy sấy tay ở 2 WC<br>-Gắn thêm CB, ổ cắm cho các vị trí lắp đặt các máy khác";
const  task01_start  ="20/06/2025";
const  task01_end ="24/06/2025";
const  task01_assign ="***";
const  task01_employ ="Mật Thuỷ <br> Duy Hưng";
const  task01_support ="Minh Khánh<br> Văn Hưng";
const  task01_notes ="***";
// ROW 2//
let  task02_priority = "danger";//1: danger; 2 warning; 3; primary; 4 secondary; 5 success; //
const  task02_mach  =  "Bộ trao đổi nhiệt<br> Máy gia ẩm thân lá 01" ;
const  task02_content =  "Làm bộ trao đổi nhiệt";
const  task02_start  = "20/06/2025";
const  task02_end = "28/06/2025";
const  task02_assign = "Hoà";
const  task02_employ = "KT Cơ khí";
const  task02_support = "-";
const  task02_notes = "-";
// ROW 3//
let   task03_priority = "warning";//1: danger; 2 warning; 3; primary; 4 secondary; 5 success; //
const  task03_mach  =  "Quạt hút ống khói lò hơi" ;
const  task03_content =  "Gắn chốt lavet buli quạt";
const  task03_start  = "23/06/2025";
const  task03_end = "23/06/2025";
const  task03_assign = "_";
const  task03_employ = "_";
const  task03_support = "_";
const  task03_notes = "Theo dõi máy thường xuyên";
// ROW 4//
let   task04_priority = "none";//danger -warning; 3; primary; 4 secondary; 5 success; //
const  task04_mach  =  "Phòng đào tạo" ;
const  task04_content =  "Tháo cục nóng máy lạnh";
const  task04_start  = "---";
const  task04_end = "---";
const  task04_assign = "---";
const  task04_employ = "---";
const  task04_support = "---";
const  task04_notes = "Khi có lắp đặt máy mới";

// ROW 5//
let   task05_priority = "primary";//danger -warning; 3; primary; 4 secondary; 5 success; //
const  task05_mach  =  "Tủ điều khiển bơm PCCC<br> Kho Diên Phú" ;
const  task05_content =  "Làm gọn tủ điện và thay thiết bị";
const  task05_start  = "---";
const  task05_end = "---";
const  task05_assign = "---";
const  task05_employ = "M. Thuỷ; D. Hưng";
const  task05_support = "---";
const  task05_notes = "---";
// ROW 6//
let   task06_priority = "none";//danger -warning; 3; primary; 4 secondary; 5 success; //
const  task06_mach  =  "Buồng dập bụi bê tông<br> Tủ điều khiển" ;
const  task06_content =  "Làm mạch báo mức nước và bảo vệ mô tơ";
const  task06_start  = "---";
const  task06_end = "---";
const  task06_assign = "M Thuỷ";
const  task06_employ = "M Thuỷ & D. Hưng";
const  task06_support = "---";
const  task06_notes = "---";
// ROW 7//
let   task07_priority = "warning";//danger -warning; 3; primary; 4 secondary; 5 success; //
const  task07_mach  =  "Máy hút bụi <br> Đầu máy cắt" ;
const  task07_content =  "Gắn mô tơ và hoàn thiện";
const  task07_start  = "---";
const  task07_end = "---";
const  task07_assign = "---";
const  task07_employ = "---";
const  task07_support = "---";
const  task07_notes = "Chờ quấn mô tơ";
// ROW 8//
let   task08_priority = "none";//danger -warning; 3; primary; 4 secondary; 5 success; //
const  task08_mach  =  "Quạt thổi phân li" ;
const  task08_content =  "Thay ổ bi <br> Sửa vành";
const  task08_start  = "24/06/2025";
const  task08_end = "24/06/2025";
const  task08_assign = "";
const  task08_employ = "";
const  task08_support = "";
const  task08_notes = "";
// ROW 9//
let   task09_priority = "none";//danger -warning; 3; primary; 4 secondary; 5 success; //
const  task09_mach  =  "Các bộ trao đổi nhiệt hỏng" ;
const  task09_content =  "Kiểm tra đánh dấu các vị trí xì<>Lên phương án tự sửa chữa nếu được";
const  task09_start  = "";
const  task09_end = "";
const  task09_assign = "Hoà";
const  task09_employ = "Huy Yên";
const  task09_support = "";
const  task09_notes = "a Yên kiểm tra và đánh dấu các chổ xì<br> Hoà lên phương án và mua dụng cụ để sửa";
// ROW 10//
let   task10_priority = "success";//danger -warning; 3; primary; 4 secondary; 5 success; //
const  task10_mach  =  "" ;
const  task10_content =  "";
const  task10_start  = "";
const  task10_end = "";
const  task10_assign = "";
const  task10_employ = "";
const  task10_support = "";
const  task10_notes = "";

