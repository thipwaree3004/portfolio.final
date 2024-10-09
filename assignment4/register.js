window.onload = pageLoad;

function pageLoad() {
    // ตั้งค่าเริ่มต้นหรือเพิ่ม event listeners ได้ที่นี่
}

function validateForm() {
    const form = document.forms['myRegister'];
    const firstname = form['firstname'].value;
    const gender = form['gender'].value;
    const bday = form['bday'].value;
    const email = form['email'].value;
    const username = form['username'].value;
    const password = form['password'].value;
    const retypePassword = form['retype_password'].value;
    const errorMsg = document.getElementById('errormsg');

    // ตรวจสอบข้อมูลที่จำเป็น
    if (!firstname || !gender || !bday || !email || !username || !password || !retypePassword) {
        errorMsg.textContent = 'Please fill out all required fields.';
        return false;
    }

    // ตรวจสอบรหัสผ่าน
    if (password !== retypePassword) {
        errorMsg.textContent = 'Passwords do not match.';
        return false;
    }

    // บันทึกข้อมูลลงใน localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    // ข้อมูลถูกต้อง
    errorMsg.textContent = 'Registration successful!';
    setTimeout(() => {
        window.location.href = 'login.html';  // เปลี่ยนหน้าไปยังหน้า Login หลังจากสำเร็จ
    }, 1000);  // รอ 1 วินาทีก่อนเปลี่ยนหน้า
    return false;  // หยุดการส่งฟอร์ม
}
