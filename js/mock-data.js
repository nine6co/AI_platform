/**
 * mock-data.js
 * 存放 AI 助理的模擬回覆資料與關鍵字對照表
 */

const AI_MOCK_DATA = {
    // 根據情境選擇器 (Context Select) 的回覆
    responses: {
        'hr': "華寶正在為您查詢人資相關法規，請稍候...",
        'deposit': "華寶正在為您檢索存匯業務的最新規範內容。",
        'accounting': "華寶正在為您翻閱會計作業準則與規範。",
        'wealth': "華寶正在為您查詢財富管理相關辦法的詳細條文...",
        'fx': "華寶正在為您檢索外匯交易與管理規章，請稍候。",
        'credit': "華寶正在為您彙整徵信授信管理辦法的相關資訊。",
        'center': "華寶正在為您查詢勤務中心 555 的相關作業流程。",
        'none': "華寶正在為您進行跨部門全域規範檢索，請稍等片刻。",
        'default': "您好！我是華寶，很高興為您服務。請問您想查詢哪方面的規範？"
    },

    // 關鍵字對照表 (優先級較高)
    keywordMappings: [
        {
            keywords: ['特休', '特別休假'],
            response: "根據<a href='assistant-files.html?q=2026年度員工特別休假實施辦法' target='_blank' class='text-primary hover:underline font-semibold'>《2026年度員工特別休假實施辦法》<sup class='text-[10px] ml-0.5'>1</sup></a>及本行人資部規範：<a href='assistant-files.html?q=特休計算方式' target='_blank' class='text-primary hover:underline font-semibold'>行員在行連續服務滿 6 個月以上未滿 1 年者，給予特別休假 3 日；服務滿 1 年以上未滿 2 年者，給予 7 日<sup class='text-[10px] ml-0.5'>2</sup></a>。詳細的假勤管理、遞延規則與請假程序，請參閱下方引用的規範文件。",
            sources: [
                { title: "2026年度員工特別休假實施辦法", keyword: "2026年度員工特別休假實施辦法", link: "assistant-files.html?q=2026年度員工特別休假實施辦法" },
                { title: "特休計算方式", keyword: "特休計算方式", link: "assistant-files.html?q=特休計算方式" }
            ]
        },
        {
            keywords: ['薪資', '薪水'],
            response: "薪資給付相關規定屬於機密資訊，請至本行內部人資系統查詢您的個人薪資單，或聯繫人資部薪酬組。",
            sources: []
        }
    ]
};
