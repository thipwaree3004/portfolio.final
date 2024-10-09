window.onload = pageLoad;

function pageLoad(){
    document.getElementById("start").onclick = startGame;
}

function startGame(){
    alert("Ready");
    clearScreen(); // ลบกล่องเก่าออกก่อนเริ่มเกมใหม่
    addBox();
    timeStart();
}

function timeStart(){
    var TIMER_TICK = 1000;
    var timer = null;
    var min = 0.5; // 0.5 minute
    var second = min * 60; 
    var x = document.getElementById('clock');
    x.innerHTML = second; // แสดงเวลาเริ่มต้น

    // ตั้งเวลาโดยใช้ setInterval
    timer = setInterval(timeCount, TIMER_TICK);
    
    function timeCount(){
        var allbox = document.querySelectorAll("#layer div");
        second--; 
        x.innerHTML = second; // อัปเดตเวลาบนจอ

        // ตรวจสอบสถานะเกม
        if (allbox.length == 0 && second > 0) {
            alert("You win!");
            clearInterval(timer);
            clearScreen();
        } else if (second <= 0) {
            if (allbox.length > 0) {
                alert("Game over");
            }
            clearInterval(timer);
            clearScreen();
        }
    }
}

function addBox(){
    var numbox = parseInt(document.getElementById("numbox").value, 10);
    var gameLayer = document.getElementById("layer");
    var colorDrop = document.getElementById("color").value;
    
    // ลบกล่องเก่าก่อนเพิ่มกล่องใหม่
    clearScreen();

    for (var i = 0; i < numbox; i++) {
        var tempbox = document.createElement("div");
        tempbox.className = "square " + colorDrop;
        tempbox.id = "box" + i;
        tempbox.style.position = "absolute"; // ต้องเพิ่มการกำหนดตำแหน่งเป็น absolute
        tempbox.style.left = Math.random() * (475) + "px"; // ปรับให้ไม่เกินขอบ
        tempbox.style.top = Math.random() * (475) + "px"; // ปรับให้ไม่เกินขอบ
        tempbox.style.width = "25px"; // กำหนดขนาดกล่อง
        tempbox.style.height = "25px"; // กำหนดขนาดกล่อง
        tempbox.style.backgroundColor = colorDrop; // ใช้สีที่เลือก

        gameLayer.appendChild(tempbox);
        bindBox(tempbox);
    }
}

function bindBox(box){
    // เมื่อกดกล่อง กล่องจะถูกลบ
    box.onclick = function(){
        box.parentNode.removeChild(box);
    };
}

function clearScreen(){
    // ลบกล่องทั้งหมดออกจาก layer
    var allbox = document.querySelectorAll("#layer div");
    
    // ลบ node ทั้งหมด
    for (var i = 0; i < allbox.length; i++) {
        allbox[i].parentNode.removeChild(allbox[i]);
    }
}
