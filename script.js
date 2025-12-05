function redirectTo(url) {
    window.location.href = url;
}

// Update Clock
function updateClock() {
    const options = { timeZone: 'Asia/Kolkata', hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const time = new Intl.DateTimeFormat('en-US', options).format(new Date());
    document.getElementById('clock').textContent = time;
}
document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector(".menu-icon");
    const sidebarMenu = document.querySelector(".sidebar-menu");
    const closeBtn = document.querySelector(".close-btn");

    menuIcon.addEventListener("click", function() {
        sidebarMenu.classList.add("open");
    });

    closeBtn.addEventListener("click", function() {
        sidebarMenu.classList.remove("open");
    });

    // Ensure clicking outside the menu closes it
    document.addEventListener("click", function(event) {
        if (!sidebarMenu.contains(event.target) && !menuIcon.contains(event.target)) {
            sidebarMenu.classList.remove("open");
        }
    });
});
setInterval(updateClock, 1000);
updateClock();
// Open Sidebar and Shift Content
function openMenu() {
    document.body.classList.add("sidebar-open");
}

