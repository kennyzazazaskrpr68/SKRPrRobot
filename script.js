



const searchContainer = document.getElementById('searchContainer');
const searchPlaceholder = document.getElementById('searchPlaceholder');
const searchInput = document.getElementById('searchInput');
const clearBtn = document.getElementById('clearBtn');
const containers = document.querySelectorAll('#itemList .item');

// เมื่อคลิกที่ container → เปลี่ยนเป็น input
searchContainer.addEventListener('click', () => {
    searchPlaceholder.style.display = "none";
    searchInput.style.display = "block";
    clearBtn.style.display = searchInput.value ? "inline" : "none";
    searchInput.focus();
    searchContainer.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
});

// filter เมื่อพิมพ์
searchInput.addEventListener('input', () => {
    const keyword = searchInput.value.toLowerCase();

    clearBtn.style.display = keyword ? "inline" : "none";

    containers.forEach(container => {
        // เอาข้อความหัวข้อจาก <p> ภายในแต่ละ .item มาเช็ค
        const title = container.querySelector('p').textContent.toLowerCase();
        if (title.includes(keyword)) {
            container.style.display = "block"; // โชว์ถ้าหัวข้อมีคำค้น
        } else {
            container.style.display = "none"; // ซ่อนถ้าไม่มี
        }
    });
});


// ปุ่ม clear
clearBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // กันไม่ให้กลับไป placeholder
    searchInput.value = "";
    clearBtn.style.display = "none";

    containers.forEach(container => container.style.display = "block"); // รีเซ็ต div ทั้งหมด
    searchInput.focus();
});

// เมื่อ blur → กลับเป็น placeholder ถ้าไม่ได้พิมพ์
searchInput.addEventListener('blur', () => {
    if (!searchInput.value) {
        searchInput.style.display = "none";
        clearBtn.style.display = "none";
        searchPlaceholder.style.display = "block";
        searchContainer.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
    }
});

// กด Enter (ถ้าจะทำ action อื่น)
searchInput.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        console.log("ค้นหา: " + searchInput.value);
        searchInput.blur();
    }
});



