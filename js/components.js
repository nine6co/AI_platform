/**
 * components.js — 動態載入共用 Component
 *
 * 使用方式：各頁面 <body> 加上 data-page="[key]"
 * Keys: index | assistant | assistant-files |
 *       translation | translation-history | transcription | minutes
 */
(async function () {
    const page = document.body.dataset.page || 'index';

    // 並行載入 sidebar + topbar-user
    const isIframe = window.self !== window.top;

    // 如果在 iframe 中，隱藏 sidebar 與 header
    if (isIframe) {
        document.documentElement.classList.add('is-in-iframe');
        // 延後執行，確保元素已存在
        setTimeout(() => {
            const sb = document.getElementById('sidebar-placeholder');
            if (sb) sb.style.display = 'none';
            const header = document.querySelector('header');
            if (header) header.style.display = 'none';
        }, 0);
    }

    const tasks = [];

    // 檢查是否已經有內容 (針對 hardcoded demo.html)
    const hasSidebar = document.getElementById('sidebar');
    const hasTopbar = document.getElementById('userMenuContainer');

    if (!isIframe && !hasSidebar) {
        tasks.push(inject('sidebar-placeholder', 'components/sidebar.html'));
    }

    if (!hasTopbar) {
        tasks.push(inject('topbar-user-placeholder', 'components/topbar-user.html'));
    }

    if (tasks.length > 0) {
        await Promise.all(tasks);
    }

    // 暴露方法給 SPA 模式使用
    window.AI_COMPONENTS = {
        applySidebarActive: applySidebarActive
    };

    applySidebarActive(page);
    lucide.createIcons();
    initSidebarToggle();
    initUserDropdown();

    /* ── SPA Sync ────────────────────────────────────── */
    // 如果在 iframe 中，通知父視窗頁面已變更
    if (window.self !== window.top) {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const h2 = document.querySelector('h2');
        const breadcrumb = document.querySelector('header nav');

        window.parent.postMessage({
            type: 'PAGE_CHANGED',
            url: currentPage,
            title: h2 ? h2.innerText : document.title.split(' - ').pop(),
            breadcrumbHtml: breadcrumb ? breadcrumb.innerHTML : ''
        }, '*');
    }

    /* ── helpers ─────────────────────────────────────── */

    async function inject(id, url) {
        const el = document.getElementById(id);
        if (!el) return;
        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error(res.status);
            el.outerHTML = await res.text();
        } catch (e) {
            console.warn('[components.js] 載入失敗:', url, e.message);
        }
    }

    function applySidebarActive(page) {
        const sidebar = document.getElementById('sidebar');
        if (!sidebar) return;

        // 1. 先恢復所有項目到預設狀態
        const allItems = sidebar.querySelectorAll('.sidebar-item');
        allItems.forEach(item => {
            // 恢復基本樣式
            if (item.classList.contains('sidebar-sub-item')) {
                item.className = 'sidebar-item sidebar-sub-item flex items-center space-x-3 px-4 py-2.5 rounded-lg text-textMuted hover:bg-gray-100 hover:text-primary transition-colors group cursor-pointer ml-1';
            } else {
                item.className = 'sidebar-item flex items-center space-x-3 px-4 py-3 rounded-lg text-textMuted hover:bg-gray-100 hover:text-primary transition-colors group cursor-pointer';
            }

            // 恢復圖示與文字樣式
            const icon = item.querySelector('i');
            if (icon) icon.className = icon.className.replace('text-white', 'text-textMuted').replace('text-primary', 'text-textMuted');

            const text = item.querySelector('.sidebar-text');
            if (text) text.className = text.className.replace('font-bold', 'font-medium');

            // 處理 nav-main 特別的箭頭
            if (item.id === 'nav-main') {
                item.className = 'sidebar-item flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-100 text-text transition-colors group cursor-pointer';
                const arrow = item.querySelector('.sidebar-arrow');
                if (arrow) arrow.className = 'w-4 h-4 text-text flex-shrink-0 sidebar-arrow transition-transform';
            }
        });

        const navGroup = document.getElementById('nav-group');
        if (!navGroup) return;

        // sub-item key 對應（多頁共用同一 active 項目）
        const KEY_MAP = {
            'assistant': 'assistant',
            'assistant-files': 'assistant',
            'translation': 'translation',
            'translation-history': 'translation',
            'transcription': 'transcription',
            'minutes': 'minutes',
            'regulations': 'regulations',
            'simulation': 'simulation',
            'outline': 'outline',
        };

        if (page === 'index') {
            // 儀表版模式
            navGroup.classList.add('sidebar-nav-group');
            navGroup.classList.remove('sidebar-sub-expanded');

            // 靜音 (保持預設) 儀表版 連結 (因為尚未建置子頁)
            const dashboardLink = document.getElementById('nav-dashboard');
            if (dashboardLink) {
                dashboardLink.className = 'sidebar-item flex items-center space-x-3 px-4 py-3 rounded-lg text-textMuted hover:bg-gray-100 hover:text-primary transition-colors group cursor-pointer';
                const icon = dashboardLink.querySelector('i');
                if (icon) icon.className = icon.className.replace('text-white', 'text-textMuted');
                const text = dashboardLink.querySelector('.sidebar-text');
                if (text) text.className = 'font-medium sidebar-text pl-3';
            }

            // 亮起 生成式AI應用入口 (主分類)
            const mainLink = document.getElementById('nav-main');
            if (mainLink) {
                mainLink.className =
                    'sidebar-item flex items-center justify-between px-4 py-3 ' +
                    'rounded-lg bg-primary text-white shadow-sm transition-colors group cursor-pointer';
                const sparkles = mainLink.querySelector('[data-lucide="sparkles"]');
                if (sparkles) sparkles.className = 'w-5 h-5 text-white flex-shrink-0';
                const arrow = mainLink.querySelector('.sidebar-arrow');
                if (arrow) arrow.className = 'w-4 h-4 text-white flex-shrink-0 sidebar-arrow transition-transform';
            }
        } else {
            // 子頁面：sub-menu 預設展開
            navGroup.classList.add('sidebar-sub-expanded');
            navGroup.classList.remove('sidebar-nav-group');

            // 靜音 (保持預設) 儀表版
            const dashboardLink = document.getElementById('nav-dashboard');
            if (dashboardLink) {
                dashboardLink.className = 'sidebar-item flex items-center space-x-3 px-4 py-3 rounded-lg text-textMuted hover:bg-gray-100 hover:text-primary transition-colors group cursor-pointer';
                const icon = dashboardLink.querySelector('i');
                if (icon) icon.className = icon.className.replace('text-white', 'text-textMuted');
                const text = dashboardLink.querySelector('.sidebar-text');
                if (text) text.className = 'font-medium sidebar-text pl-3';
            }

            // 亮起 生成式AI應用入口 (主分類，作為父容器)
            const mainLink = document.getElementById('nav-main');
            if (mainLink) {
                mainLink.className =
                    'sidebar-item flex items-center justify-between px-4 py-3 ' +
                    'rounded-lg bg-primary text-white shadow-sm transition-colors group cursor-pointer';
                const sparkles = mainLink.querySelector('[data-lucide="sparkles"]');
                if (sparkles) sparkles.className = 'w-5 h-5 text-white flex-shrink-0';
                const arrow = mainLink.querySelector('.sidebar-arrow');
                if (arrow) arrow.className = 'w-4 h-4 text-white flex-shrink-0 sidebar-arrow transition-transform';
            }

            const activeKey = KEY_MAP[page];
            if (!activeKey) return;

            const item = document.querySelector(`[data-nav-key="${activeKey}"]`);
            if (!item) return;

            item.className =
                'sidebar-item sidebar-sub-item flex items-center space-x-3 px-4 py-2.5 ' +
                'rounded-lg bg-blue-50 text-primary transition-colors group cursor-pointer ml-1';

            const icon = item.querySelector('i');
            if (icon) icon.className = icon.className
                .replace('text-textMuted', 'text-primary')
                .replace('group-hover:text-primary', '');

            const text = item.querySelector('.sidebar-text');
            if (text) text.className = 'font-bold text-[13px] sidebar-text pl-3';
        }
    }

    function initSidebarToggle() {
        const sidebar = document.getElementById('sidebar');
        const btn = document.getElementById('sidebarToggle');
        const btnIcon = document.getElementById('sidebarToggleIcon');
        if (!sidebar || !btn || !btnIcon) return;

        btn.addEventListener('click', () => {
            sidebar.classList.toggle('w-64');
            sidebar.classList.toggle('w-20');
            sidebar.classList.toggle('collapsed');
            btnIcon.classList.toggle('rotate-180', sidebar.classList.contains('collapsed'));
        });
    }

    function initUserDropdown() {
        const container = document.getElementById('userMenuContainer');
        const btn = document.getElementById('userMenuButton');
        const dropdown = document.getElementById('userDropdown');
        const arrow = document.getElementById('userMenuArrow');

        // Modal Elements
        const logoutBtn = document.getElementById('logoutBtn');
        const modal = document.getElementById('logoutModal');
        const modalContent = document.getElementById('logoutModalContent');
        const modalCancel = document.getElementById('logoutCancel');
        const modalConfirm = document.getElementById('logoutConfirm');
        const modalClose = document.getElementById('logoutClose');
        const modalBackdrop = document.getElementById('logoutModalBackdrop');

        if (!container || !btn || !dropdown) return;

        // Toggle Dropdown
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isHidden = dropdown.classList.contains('hidden');
            if (isHidden) {
                dropdown.classList.remove('hidden');
                setTimeout(() => {
                    dropdown.classList.add('opacity-100', 'translate-y-0');
                    dropdown.classList.remove('opacity-0', '-translate-y-2');
                }, 10);
                if (arrow) arrow.classList.add('rotate-180');
            } else {
                closeDropdown();
            }
        });

        // Click Logout -> Open Modal
        if (logoutBtn && modal) {
            logoutBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                closeDropdown();
                openModal();
            });
        }

        // Modal Controls
        if (modal) {
            [modalCancel, modalClose, modalBackdrop].forEach(el => {
                if (el) el.addEventListener('click', closeModal);
            });

            if (modalConfirm) {
                modalConfirm.addEventListener('click', () => {
                    console.log('[Auth] Logging out...');
                    // 這裡執行實際登出邏輯 (例如清除 token、跳轉頁面)
                    window.location.href = 'index.html';
                });
            }
        }

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!container.contains(e.target)) closeDropdown();
        });

        /* ── internal helpers ── */
        function closeDropdown() {
            dropdown.classList.add('hidden');
            dropdown.classList.add('opacity-0', '-translate-y-2');
            dropdown.classList.remove('opacity-100', 'translate-y-0');
            if (arrow) arrow.classList.remove('rotate-180');
        }

        function openModal() {
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            // Animation
            setTimeout(() => {
                modalContent.classList.add('opacity-100', 'scale-100');
                modalContent.classList.remove('opacity-0', 'scale-95');
            }, 10);
        }

        function closeModal() {
            modalContent.classList.add('opacity-0', 'scale-95');
            modalContent.classList.remove('opacity-100', 'scale-100');
            setTimeout(() => {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
            }, 300);
        }
    }
})();
