window.onload = loginLoad;

function loginLoad() {
    // เช็คว่ามีข้อความการลงทะเบียนสำเร็จหรือไม่
    const loginMsg = document.getElementById('loginMsg');
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('registered') === 'true') {
        loginMsg.textContent = 'Registration successful! You can log in now.';
    }
}

function checkLogin() {
    const form = document.forms['myLogin'];
    const username = form['username'].value;
    const password = form['password'].value;

    // ข้อมูลที่เก็บไว้ใน localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // ตรวจสอบข้อมูลที่กรอก
    if (username === storedUsername && password === storedPassword) {
        // ข้อมูลถูกต้อง
        alert('Login successful!');
        return true;  // ส่งผลให้ฟอร์มทำงาน
    } else {
        // ข้อมูลไม่ถูกต้อง
        alert('Invalid username or password. Please try again.');
        return false;  // ป้องกันการส่งฟอร์ม
    }
}
