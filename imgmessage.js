const params = new URLSearchParams(window.location.search);
const value = params.get('value'); // ดึงค่า value=???
let container = document.getElementById('displayimagetutorialid');
let descontainer = document.getElementById('displaydescriptiontutorialid');
console.log(value); // แสดงค่าใน console


if (value === '1001') {
    descontainer.innerHTML += '<p style="width:500px;margin:auto;font-size:18px;color:#333;">ท่าOK, ท่ารับทราบ, ท่าโอเค วิธีการทำท่านี้คือ นำนิ้วโป้งและนิ้วชี้มาชนกันให้เป็นวงกลม ส่วนนิ้วที่เหลือเหยียดตตึงออกไป ท่านี้เป็นที่รู้จักกันทั่วโลกในความหมายว่า ตกลง ดี ถูกต้อง หรือเยียม</p>';
    container.innerHTML += '<img src="https://lh3.googleusercontent.com/d/1KlfBwggGmiPo-Gii0KFPSa5wgabgbeRg" style="width:500px;margin:auto;display:block;margin-top:20px;">';
    
} else if (value === '1002') {
  descontainer.innerHTML += '<p style="width:500px;margin:auto;font-size:18px;color:#333;">ท่าท่าชากา, ท่าสวัสดี, ท่าลาก่อน, ท่าขอบคุณ วิธีการทำท่านี้คือ กำมือแล้วเหยียดนิ้วโป้งและนิ้วก้อยออกให้ตั้งตรง มีความหมายว่า สวัสดี ลาก่อน ขอบคุณ ไม่เป็นไร หรือ ผ่อนคลาย เป็นต้น นิยมในวัฒนธรรมการเล่นกระดานโต้คลื่นและในฮาวาย</p>';
    container.innerHTML += '<img src="https://lh3.googleusercontent.com/d/1KlfBwggGmiPo-Gii0KFPSa5wgabgbeRg" style="width:500px;margin:auto;display:block;margin-top:20px;">';

} else if (value === '1003') {
  descontainer.innerHTML += '<p style="width:500px;margin:auto;font-size:18px;color:#333;">ท่าหยุด, ท่าพอแล้ว, ท่าว่างเปล่า วิธีการทำคือ การแบมือ โดยหงายฝ่ามือไปด้านหน้า มักใช้สื่อความหมายว่า หยุด พอแล้ว ไปให้พ้น ว่างเปล่า ไม่เหลือะไรแล้ว เป็นต้น</p>';
    container.innerHTML += '<img src="https://lh3.googleusercontent.com/d/1KlfBwggGmiPo-Gii0KFPSa5wgabgbeRg" style="width:500px;margin:auto;display:block;margin-top:20px;">';

} else if (value === '1004') {
  descontainer.innerHTML += '<p style="width:500px;margin:auto;font-size:18px;color:#333;">ท่าชี้ การกำมือแล้วใช้นิ้วชี้เหยยียดออกไปในทิศทางใดทิศทางหนึ่ง มักใช้เพื่อระบุตำแหน่งของ บุคคล สิ่งของ หรือทิศทาง โดยทั่วไปมีความหมายว่าไปทางนั้น อยู่ตรงนั้น หรือคนนั้น เป็นต้น</p>';
    container.innerHTML += '<img src="https://lh3.googleusercontent.com/d/1KlfBwggGmiPo-Gii0KFPSa5wgabgbeRg" style="width:500px;margin:auto;display:block;margin-top:20px;">';

} else if (value === '1005') {
  descontainer.innerHTML += '<p style="width:500px;margin:auto;font-size:18px;color:#333;">ท่างอนิ้วชี้, ท่าเรียก, ท่าเชิญชวน วิธีการทำคือ การกันมือให้เหลือแต่นิ้วชี้จากนั้นก็งอนิ้วชี้เข้าหาตัว มักใช้เพื่อเรียกร้องความสนใจหรือเชิญชวนให้เข้ามาหา มีความหมายว่า มานี่ หรือเข้ามาใกล้ๆ</p>';
    container.innerHTML += '<img src="https://lh3.googleusercontent.com/d/1KlfBwggGmiPo-Gii0KFPSa5wgabgbeRg" style="width:500px;margin:auto;display:block;margin-top:20px;">';

} else if (value === '1006') {
  descontainer.innerHTML += '<p style="width:500px;margin:auto;font-size:18px;color:#333;">ท่าสัญญา, ทาชูนิ้วก้อย วิธีการทำคือ กำมือแล้วเหยียดนิ้วก้อนตรงออกมา มักใช้ในบริบทของการสัญญา หรือเกี่ยวก้อยกันนะ</p>';
    container.innerHTML += '<img src="https://lh3.googleusercontent.com/d/1KlfBwggGmiPo-Gii0KFPSa5wgabgbeRg" style="width:500px;margin:auto;display:block;margin-top:20px;">';

} else if (value === '1007') {
  descontainer.innerHTML += '<p style="width:500px;margin:auto;font-size:18px;color:#333;">ท่าชูสองนิ้ว, ท่าชัยชนะ, ท่าสันติภาพ วิธีการทำคือ การกำมือโดยให้นิ้วชี้ และนิ้วกลางเหยียดออกเป็นรูปตัวVเหมือนการเซลฟี มักใช้เพื่อแสดงสันติภาพ แต่ข้อควรระวังคือ หากทำท่านี้ โดยฝ่ามือหันเข้าหาตัว ในบางประเทศ มีความหมายไม่สุภาพด้วย</p>';
    container.innerHTML += '<img src="https://lh3.googleusercontent.com/d/1KlfBwggGmiPo-Gii0KFPSa5wgabgbeRg" style="width:500px;margin:auto;display:block;margin-top:20px;">';

} else if (value === '1008') {
  descontainer.innerHTML += '<p style="width:500px;margin:auto;font-size:18px;color:#333;">ท่ารัก หรือท่า I Love You วิธีการทำคือ การชูนิ้วก้อน นิ้วชี้ และนิ้วโป้งเหยียดตรง ส่วนนิ้วที่เหลือหุบเอาไว้ ใช้เพื่อแสดงความรัก และความผูกพัน</p>';
    container.innerHTML += '<img src="https://lh3.googleusercontent.com/d/1KlfBwggGmiPo-Gii0KFPSa5wgabgbeRg" style="width:500px;margin:auto;display:block;margin-top:20px;">';

} else if (value === '1009') {
  descontainer.innerHTML += '<p style="width:500px;margin:auto;font-size:18px;color:#333;">ท่าแสดงควมแข็งแกร่ง, ท่าโกรธ, ท่ามุ่งมัน, ท่าขมขู่ ทำได้โดย การกำมือแน่น มักใช้เพื่อแสดงความแข็งแกร่ง ความมุ่งมั่น ความโกรธ การขมขู่ ขึ้นอยู่กับบริบทการใช้ ในบางครั้งอาจใช้เป็นการรวมน้ำหนึ่งน้ำใจเดียวกัน</p>';
    container.innerHTML += '<img src="https://lh3.googleusercontent.com/d/1KlfBwggGmiPo-Gii0KFPSa5wgabgbeRg" style="width:500px;margin:auto;display:block;margin-top:20px;">';

} else if (value === '1010') {
  descontainer.innerHTML += '<p style="width:500px;margin:auto;font-size:18px;color:#333;">ยังไม่เปิดสอน</p>';
    container.innerHTML += '<img src="https://lh3.googleusercontent.com/d/1KlfBwggGmiPo-Gii0KFPSa5wgabgbeRg" style="width:500px;margin:auto;display:block;margin-top:20px;">';

}


