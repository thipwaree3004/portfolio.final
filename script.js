function navigateToPage(page) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.add('hidden')); // ซ่อนทุกหน้า

    switch(page) {
        case 'aboutPage':
            document.getElementById('aboutPage').classList.remove('hidden');
            break;
        case 'assignmentPage':
            document.getElementById('assignmentPage').classList.remove('hidden');
            break;
        case 'projects':
            window.location.href = 'Project.html'; // นำทางไปยังไฟล์ Project.html
            break;
        case 'contact':
            document.getElementById('contact').classList.remove('hidden'); // แสดงหน้า Contact
            break;
        default:
            alert("ไม่พบหน้า");
    }
}

