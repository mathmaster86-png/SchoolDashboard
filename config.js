/**
 * 성지여자고등학교 학년부 대시보드 공통 설정 파일
 * ------------------------------------------------------------
 * 1. APPS_SCRIPT_URL이 비어("") 있으면 자동으로 [로컬 테스트 모드]로 동작합니다.
 *    (이 브라우저의 localStorage에 저장되므로 혼자 테스트할 때 편리합니다.)
 * 2. 구글 시트 + Apps Script 배포 후 발급받은 웹앱 URL(/exec)을 아래에 넣으면
 *    즉시 [구글 시트 연동 모드]로 전환됩니다.
 * 3. 학년명, 반 수, 사이드바 링크, 시정표는 연동 후 admin.html에서 웹으로 수정할 수 있습니다.
 */
window.DASHBOARD_ENV = {
    // ▼ 여기에 Google Apps Script 웹앱 배포 URL을 붙여넣으세요. (비워두면 로컬 테스트 모드)
    APPS_SCRIPT_URL: "https://script.google.com/macros/s/AKfycbxCFPhXeuc6tdajTPzb-cfzdOS9h_p0gAJ4YUZLXoB4RcyNlp5jRtt5EUw49vVJNvzB6w/exec"
};

window.DEFAULT_CONFIG = {
    schoolName: "성지여자고등학교",
    gradeName: "3학년부",
    classCount: 8,
    weatherLabel: "창원(마산) 날씨",
    weatherLat: 35.1980,
    weatherLon: 128.5599,
    neisOfficeCode: "S10",
    dinnerSwitchHour: 14, // 오후 2시(14시) 이후 석식 탭 자동 선택

    // 사이드바 바로가기 (group: 1~4 색상 구분)
    shortcuts: [
        { group: 1, icon: "🏢", title: "업무포털 (경남)", url: "https://gne.eduptl.kr/bpm_lgn_lg00_001.do?noEpSession" },
        { group: 1, icon: "💬", title: "아이톡톡", url: "https://newtab.itt.link/v3/index.do" },
        { group: 1, icon: "🟩", title: "네이버", url: "https://www.naver.com" },
        { group: 1, icon: "🔔", title: "학교종이", url: "https://schoolbell-e.com/ko/main/home" },

        { group: 2, icon: "🏫", title: "성지여자고등학교", url: "http://sungji-h.gne.go.kr/" },
        { group: 2, icon: "📑", title: "학년 업무시트 (설정필요)", url: "https://docs.google.com/spreadsheets" },
        { group: 2, icon: "📋", title: "학년 명렬표 (설정필요)", url: "https://docs.google.com/spreadsheets" },

        { group: 3, icon: "🤖", title: "ChatGPT", url: "https://chatgpt.com" },
        { group: 3, icon: "✨", title: "제미나이", url: "https://gemini.google.com" },
        { group: 3, icon: "🧮", title: "이음AI", url: "https://ieumai.com/" },
        { group: 3, icon: "🎨", title: "미리캔버스", url: "https://www.miricanvas.com/" },

        { group: 4, icon: "📚", title: "경남교육연수", url: "https://www.gneti.or.kr" },
        { group: 4, icon: "💻", title: "온라인 전달연수", url: "https://www.gnlec.kr/" },
        { group: 4, icon: "🎓", title: "대입정보포털 어디가", url: "https://www.adiga.kr" }
    ],

    // 일과표 설정 (정규 7교시 + 방과후 + 석식 + 야간자율학습 기본 템플릿)
    // ※ 3월 개학 후 실제 시정표에 맞춰 admin.html에서 손쉽게 수정할 수 있습니다.
    schedule: {
        weekendMessage: "주말입니다. 편안한 휴일 보내세요! 🌿",
        beforeMessage: "일과 시작 전입니다. 오늘도 힘찬 하루 보내세요! ☀️",
        afterMessage: "모든 일과가 종료되었습니다. 고생하셨습니다! 👏",
        defaultWeekday: [
            { start: "08:20", end: "08:30", label: "조회 시간입니다." },
            { start: "08:30", end: "09:20", label: "현재 1교시 수업 중입니다." },
            { start: "09:20", end: "09:30", label: "지금은 쉬는 시간입니다." },
            { start: "09:30", end: "10:20", label: "현재 2교시 수업 중입니다." },
            { start: "10:20", end: "10:30", label: "지금은 쉬는 시간입니다." },
            { start: "10:30", end: "11:20", label: "현재 3교시 수업 중입니다." },
            { start: "11:20", end: "11:30", label: "지금은 쉬는 시간입니다." },
            { start: "11:30", end: "12:20", label: "현재 4교시 수업 중입니다." },
            { start: "12:20", end: "13:20", label: "점심 시간입니다. 🍱" },
            { start: "13:20", end: "14:10", label: "현재 5교시 수업 중입니다." },
            { start: "14:10", end: "14:20", label: "지금은 쉬는 시간입니다." },
            { start: "14:20", end: "15:10", label: "현재 6교시 수업 중입니다." },
            { start: "15:10", end: "15:20", label: "지금은 쉬는 시간입니다." },
            { start: "15:20", end: "16:10", label: "현재 7교시 수업 중입니다." },
            { start: "16:10", end: "16:30", label: "청소 및 종례 시간입니다. 🧹" },
            { start: "16:30", end: "17:50", label: "방과후 수업 시간입니다. 📘" },
            { start: "17:50", end: "18:50", label: "석식 시간입니다. 🍽️" },
            { start: "18:50", end: "20:10", label: "야간자율학습 1교시 중입니다. 🌙" },
            { start: "20:10", end: "20:20", label: "야간자율학습 쉬는 시간입니다." },
            { start: "20:20", end: "21:40", label: "야간자율학습 2교시 중입니다. 🌙" }
        ],
        // 요일별 예외 시간표 (키: "1"=월, "2"=화, "3"=수, "4"=목, "5"=금 / null이면 평일 기본 사용)
        dayOverrides: {
            "1": null,
            "2": null,
            "3": null,
            "4": null,
            "5": null
        }
    }
};
