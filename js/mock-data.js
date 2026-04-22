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
            response: "根據<a href='#' data-side-panel='leave-policy' class='text-primary hover:underline font-semibold'>《2026年度員工特別休假實施辦法》<sup class='text-[10px] ml-0.5'>1</sup></a>及本行人資部規範：<a href='#' data-side-panel='leave-calc' class='text-primary hover:underline font-semibold'>行員在行連續服務滿 6 個月以上未滿 1 年者，給予特別休假 3 日；服務滿 1 年以上未滿 2 年者，給予 7 日<sup class='text-[10px] ml-0.5'>2</sup></a>。詳細的假勤管理、遞延規則與請假程序，請參閱下方引用的規範文件。",
            sources: [
                {
                    title: "2026年度員工特別休假實施辦法",
                    keyword: "2026年度員工特別休假實施辦法",
                    id: "leave-policy",
                    fileInfo: "2026年度員工特別休假實施辦法.pdf",
                    link: "assistant-files.html?q=2026年度員工特別休假實施辦法",
                    content: `
                        <h4 class="text-lg font-bold mb-4 text-primary"><span style="background-color: #ffff00;" class="px-1 text-text">2026年度員工特別休假實施辦法</span></h4>
                        <p class="mb-4 text-sm leading-relaxed">本辦法依據本行《員工工作規則》及勞動基準法相關規定訂定之，旨在規範 2026 年度員工特別休假之核給、實施及管理事宜。</p>
                        
                        <div class="space-y-4">
                            <section>
                                <h5 class="font-bold text-text mb-2">一、適用對象</h5>
                                <p class="text-sm text-textMuted leading-relaxed pl-4">本行全體正式編制員工（含試用期內之員工）。</p>
                            </section>
                            
                            <section>
                                <h5 class="font-bold text-text mb-2">二、特別休假核給基準</h5>
                                <p class="text-sm text-textMuted leading-relaxed pl-4 mb-2">員工於本行繼續工作滿一定期間者，每年應依下列規定給予特別休假。</p>
                            </section>
                            
                            <section>
                                <h5 class="font-bold text-text mb-2">三、實施方式</h5>
                                <p class="text-sm text-textMuted leading-relaxed pl-4">1. 特別休假期由員工與主管協商排定之。但本行基於企業經營上之急迫需求或員工因個人因素，得與他方協商調整。</p>
                                <p class="text-sm text-textMuted leading-relaxed pl-4 mt-1">2. 員工應於特別休假實施前三日完成請假手續。</p>
                            </section>
                            
                            <section>
                                <h5 class="font-bold text-text mb-2">四、遞延與結算</h5>
                                <p class="text-sm text-textMuted leading-relaxed pl-4">年度終了未請畢之特別休假，經勞雇雙方協商，得遞延至次一年度實施。於次一年度終了或契約終止仍未請畢之天數，本行應發給工資。</p>
                            </section>
                        </div>
                    `
                },
                {
                    title: "特休計算方式",
                    keyword: "特休計算方式",
                    id: "leave-calc",
                    fileInfo: "特休計算方式.pdf",
                    link: "assistant-files.html?q=特休計算方式",
                    content: `
                        <h4 class="text-lg font-bold mb-4 text-primary">特別休假計算方式說明</h4>
                        <p class="mb-4 text-sm text-textMuted leading-relaxed"><span style="background-color: #ffff00;">本行特別休假採「周年制」計算，即以員工之到職日作為起算基準。</p>
                        <ul class="list-disc pl-9 text-sm text-textMuted space-y-1">
                            <li><span style="background-color: #ffff00;">六個月以上一年未滿者：三日。</span></li>
                            <li><span style="background-color: #ffff00;">一年以上二年未滿者：七日。</span></li>
                            <li><span style="background-color: #ffff00;">二年以上三年未滿者：十日。</span></li>
                            <li><span style="background-color: #ffff00;">三年以上五年未滿者：每年十四日。</span></li>
                            <li><span style="background-color: #ffff00;">五年以上十年未滿者：每年十五日。</span></li>
                            <li><span style="background-color: #ffff00;">十年以上者：每一年加給一日，加至三十日為止。</span></li>
                        </ul>
                        <div class="my-4">
                        <div class="space-y-4">

                            <section>
                                 <h5 class="font-bold text-text mb-2">【案例說明】</h5>
                                     <p class="mb-4 text-sm text-textMuted leading-relaxed">假設 A 員工到職日為 2025/08/01：</p>
                                     <ul class="list-disc pl-9 text-sm text-textMuted space-y-1">
                                        <li>滿 6 個月（2026/02/01）：取得 3 天特休，須於 2026/07/31 前請畢。</li>
                                        <li>滿 1 年（2026/08/01）：再取得 7 天特休，須於 2027/07/31 前請畢。</li>
                                        <li>滿 2 年（2027/08/01）：再取得 10 天特休，須於 2028/07/31 前請畢。</li>
                                     </ul>
                            </section>
                            
                            <section>
                                <h5 class="font-bold text-text mb-2">【注意事項】</h5>
                                <ul class="list-disc pl-9 text-sm text-textMuted space-y-1">
                                    <li>計算天數時，如有不足一日之部分，以一日計。</li>
                                    <li>年資之計算包含試用期間。</li>
                                    <li>留職停薪期間不計入年資。</li>
                                </ul>
                            </section>
                        </div>
                    `
                }
            ]
        },
        {
            keywords: ['薪資', '薪水'],
            response: "薪資給付相關規定屬於機密資訊，請至本行內部人資系統查詢您的個人薪資單，或聯繫人資部薪酬組。",
            sources: []
        }
    ]
};
