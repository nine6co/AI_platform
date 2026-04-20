/**
 * sidebar.js
 * Sidebar 收合/展開邏輯 — 共用於所有頁面
 * 依賴：lucide（需在此 script 之前載入）
 */

// 初始化 Lucide Icons
lucide.createIcons();

// Sidebar Toggle Logic
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebarToggleIcon = document.getElementById('sidebarToggleIcon');

if (sidebarToggle) {
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('w-64');
        sidebar.classList.toggle('w-20');
        sidebar.classList.toggle('collapsed');

        // 旋轉 Icon
        if (sidebar.classList.contains('collapsed')) {
            sidebarToggleIcon.classList.add('rotate-180');
        } else {
            sidebarToggleIcon.classList.remove('rotate-180');
        }
    });
}
