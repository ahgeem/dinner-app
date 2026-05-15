import { useState, useRef } from "react";

const categories = ["전체", "🇰🇷 한식", "🇯🇵 일식", "🌍 양식"];

const channelColors = {
  "김밀란": { bg: "#1B4332", text: "#fff", label: "🍝 김밀란" },
  "정육왕": { bg: "#7B2D00", text: "#fff", label: "🥩 정육왕" },
  "은수저": { bg: "#1A237E", text: "#fff", label: "🥄 은수저" },
  "육식맨": { bg: "#B71C1C", text: "#fff", label: "🔥 육식맨" },
  "킴서울": { bg: "#4A148C", text: "#fff", label: "🍳 킴서울" },
  "셰프이원일": { bg: "#004D40", text: "#fff", label: "👨‍🍳 셰프이원일" },
};

const menus = [
  // ─── 한식 ───
  {
    id: 1, category: "🇰🇷 한식", channel: "킴서울",
    name: "김치볶음밥", time: "15분", difficulty: 1,
    desc: "묵은 김치 하나로 뚝딱! 버터 한 조각이 감칠맛의 비결이에요.",
    cardBg: "#FF6B6B", textColor: "#fff",
    tips: "💡 버터를 먼저 녹인 뒤 김치를 볶으면 감칠맛이 훨씬 깊어져요. 달걀은 반숙으로 터뜨려 비비면 최고!",
    ingredients: [
      { name: "묵은 김치", amount: "1컵 (잘 익은 것)" },
      { name: "밥", amount: "2공기" },
      { name: "달걀", amount: "2개" },
      { name: "버터", amount: "1큰술" },
      { name: "간장", amount: "1작은술" },
      { name: "참기름·통깨", amount: "마무리용" },
    ],
    steps: [
      { icon: "🔥", title: "김치 볶기", desc: "팬을 중불로 달군 뒤 버터를 녹여요. 김치를 넣고 2~3분 볶아요. 버터가 김치 신맛을 잡아주면서 고소한 향이 올라와요." },
      { icon: "🍚", title: "밥 볶기", desc: "밥을 넣고 간장 1작은술을 둘러요. 주걱으로 탁탁 누르듯 센불에서 3~4분 볶아요. 살짝 눌린 부분이 생기면 더 맛있어요!" },
      { icon: "🍳", title: "달걀 프라이", desc: "볶음밥을 한쪽으로 밀고 빈 공간에 달걀을 깨요. 노른자는 반숙으로! 흰자가 익으면 볶음밥과 살짝 섞어요." },
      { icon: "✨", title: "마무리", desc: "불 끄고 참기름 한 바퀴, 통깨·김가루 솔솔. 달걀을 터뜨려 비비며 먹으면 최고예요 🥄" },
    ],
    youtube: "https://www.youtube.com/@%ED%82%B4%EC%84%9C%EC%9A%B8",
    emoji: "🍳"
  },
  {
    id: 2, category: "🇰🇷 한식", channel: "킴서울",
    name: "된장찌개", time: "25분", difficulty: 2,
    desc: "구수하고 따뜻한 엄마 손맛. 두부와 애호박만 있으면 오늘 저녁 완성!",
    cardBg: "#4CAF50", textColor: "#fff",
    tips: "💡 된장은 체에 밭쳐 풀어야 덩어리 없이 깔끔해요. 마지막 청양고추 한 개로 칼칼함 업!",
    ingredients: [
      { name: "된장", amount: "2큰술" },
      { name: "두부", amount: "반 모" },
      { name: "애호박", amount: "반 개" },
      { name: "양파", amount: "반 개" },
      { name: "다진 마늘", amount: "1작은술" },
      { name: "멸치 다시마 육수", amount: "2컵" },
      { name: "청양고추", amount: "1개 (선택)" },
    ],
    steps: [
      { icon: "🔪", title: "재료 썰기", desc: "두부 1.5cm 사각형, 애호박 반달, 양파 큼직하게 썰어요." },
      { icon: "🍶", title: "육수 끓이기", desc: "냄비에 육수를 넣고 중불로 끓여요. 끓으면 된장을 체에 밭쳐 풀고 다진 마늘을 넣어요." },
      { icon: "🥦", title: "야채·두부 넣기", desc: "양파, 애호박 먼저 5분 끓이고, 두부를 넣어 2~3분 더 끓여요. 두부는 오래 끓이면 뚫려요!" },
      { icon: "🌶️", title: "간 맞추기", desc: "싱거우면 된장을 더 풀거나 국간장으로 맞춰요. 청양고추 어슷 썰어 넣고 한 번 더 끓이면 완성!" },
    ],
    youtube: "https://www.youtube.com/@%ED%82%B4%EC%84%9C%EC%9A%B8",
    emoji: "🍲"
  },
  {
    id: 3, category: "🇰🇷 한식", channel: "정육왕",
    name: "대패삼겹 파김치볶음", time: "20분", difficulty: 1,
    desc: "정육왕 스타일! 대패삼겹살과 파김치의 환상 조합. 밥 두 공기는 기본이에요.",
    cardBg: "#FF8C00", textColor: "#fff",
    tips: "💡 대패삼겹살은 냉동 상태에서 썰어야 얇게 썰려요. 파김치가 없으면 김치+대파로 대체 가능해요!",
    ingredients: [
      { name: "대패삼겹살", amount: "200g" },
      { name: "파김치", amount: "1컵 (없으면 묵은 김치+대파)" },
      { name: "고추장", amount: "1큰술" },
      { name: "간장", amount: "1큰술" },
      { name: "참기름·통깨", amount: "마무리용" },
      { name: "밥", amount: "2공기" },
    ],
    steps: [
      { icon: "🔥", title: "파김치 볶기", desc: "팬에 기름 없이 파김치를 먼저 볶아요. 파김치에서 기름이 나오면서 향이 올라와요." },
      { icon: "🥩", title: "고기 넣기", desc: "대패삼겹살을 넣고 센불에서 볶아요. 고기가 익으면서 기름이 나오는데 따로 버릴 필요 없어요." },
      { icon: "🌶️", title: "양념하기", desc: "고추장 + 간장을 넣고 골고루 섞어요. 센불에서 1~2분 더 볶아 양념을 캐러멜라이즈해요." },
      { icon: "✨", title: "마무리", desc: "참기름 한 바퀴, 통깨 솔솔. 뜨거운 밥에 올려 비벼 먹으면 세상 어떤 음식도 필요 없어요!" },
    ],
    youtube: "https://www.youtube.com/@meatcreator",
    emoji: "🥓"
  },
  {
    id: 4, category: "🇰🇷 한식", channel: "정육왕",
    name: "소고기 뭇국", time: "30분", difficulty: 2,
    desc: "정육왕 고기 손질법으로 만드는 깊고 구수한 소고기 뭇국. 해장에도 최고!",
    cardBg: "#795548", textColor: "#fff",
    tips: "💡 소고기는 찬물에 30분 담가 핏물을 제거해야 국물이 깔끔해요. 무는 나박 썰기로 해야 잘 익어요!",
    ingredients: [
      { name: "소고기 (국거리용)", amount: "150g" },
      { name: "무", amount: "1/4개" },
      { name: "다진 마늘", amount: "1큰술" },
      { name: "국간장", amount: "2큰술" },
      { name: "참기름", amount: "1큰술" },
      { name: "물", amount: "4컵" },
      { name: "대파·소금", amount: "마무리용" },
    ],
    steps: [
      { icon: "🥩", title: "고기 핏물 빼기", desc: "소고기를 찬물에 30분 담가 핏물을 빼요. 이 과정이 국물 맑기를 결정해요!" },
      { icon: "🔥", title: "고기·무 볶기", desc: "냄비에 참기름을 두르고 고기를 볶아요. 색이 변하면 나박 썬 무를 넣고 2분 더 볶아요." },
      { icon: "💧", title: "물 붓고 끓이기", desc: "물 4컵을 붓고 국간장, 다진 마늘을 넣어요. 센불로 끓이다가 거품을 걷어내요." },
      { icon: "🌿", title: "마무리", desc: "약불로 줄여 15분 더 끓여요. 소금으로 간 맞추고 대파를 송송 썰어 넣으면 완성!" },
    ],
    youtube: "https://www.youtube.com/@meatcreator",
    emoji: "🍜"
  },
  {
    id: 5, category: "🇰🇷 한식", channel: "육식맨",
    name: "수퍼 크리스피 삼겹살", time: "40분", difficulty: 3,
    desc: "육식맨 명예의 전당 레시피! 껍질이 과자처럼 바삭한 삼겹살의 신세계.",
    cardBg: "#C62828", textColor: "#fff",
    tips: "💡 삼겹살 껍질에 포크로 구멍을 빽빽하게 내야 바삭해져요. 소금 절임 후 냉장 하루 숙성이 핵심!",
    ingredients: [
      { name: "삼겹살 (껍질 있는 것)", amount: "500g (통으로)" },
      { name: "굵은 소금", amount: "넉넉히" },
      { name: "후추", amount: "약간" },
      { name: "식용유", amount: "약간" },
      { name: "쌈장·상추", amount: "곁들임용" },
    ],
    steps: [
      { icon: "🍖", title: "껍질 손질", desc: "삼겹살 껍질 면에 포크로 구멍을 빽빽하게 내요. 이게 바삭함의 핵심! 최소 50번 이상 찔러요." },
      { icon: "🧂", title: "소금 절임·숙성", desc: "껍질 면에만 굵은 소금을 넉넉히 뿌려요. 랩 씌워 냉장고에 하루(최소 4시간) 숙성해요." },
      { icon: "🔥", title: "오븐 or 에어프라이어", desc: "소금을 닦아내고 200도에서 40분 구워요. 마지막 5분은 230도 올려 껍질을 완전 바삭하게!" },
      { icon: "✨", title: "마무리", desc: "껍질이 과자처럼 바삭하면 완성! 쌈장에 상추 곁들이면 세상 최고의 삼겹살이에요 🐷" },
    ],
    youtube: "https://www.youtube.com/@YOOXICMAN",
    emoji: "🥩"
  },
  {
    id: 6, category: "🇰🇷 한식", channel: "육식맨",
    name: "된장찌개 (육식맨 ver.)", time: "25분", difficulty: 2,
    desc: "육식맨이 2024년 처음 선보인 집밥 된장찌개. 고기 편법으로 깊은 맛을 내요.",
    cardBg: "#558B2F", textColor: "#fff",
    tips: "💡 육식맨 팁: 삼겹살을 먼저 볶아 파기름처럼 돼지기름을 내면 국물 맛이 완전히 달라져요!",
    ingredients: [
      { name: "삼겹살 (작게)", amount: "50g (육수용)" },
      { name: "된장", amount: "2큰술" },
      { name: "두부", amount: "반 모" },
      { name: "애호박·양파", amount: "각 반 개" },
      { name: "다진 마늘", amount: "1큰술" },
      { name: "멸치 육수", amount: "2컵" },
      { name: "청양고추", amount: "1~2개" },
    ],
    steps: [
      { icon: "🥩", title: "돼지기름 내기", desc: "냄비에 기름 없이 삼겹살을 볶아 기름을 내요. 고기는 건져내도 되고 그대로 두어도 OK." },
      { icon: "🍶", title: "된장 풀기", desc: "육수를 붓고 된장을 체에 밭쳐 풀어요. 다진 마늘 넣고 중불로 끓여요." },
      { icon: "🥦", title: "야채·두부 넣기", desc: "애호박, 양파 넣고 5분, 두부 넣고 2~3분 더 끓여요." },
      { icon: "🌶️", title: "마무리", desc: "청양고추 어슷 썰어 넣고 한소끔 끓이면 완성. 돼지기름 덕분에 국물이 엄청 깊어요!" },
    ],
    youtube: "https://www.youtube.com/@YOOXICMAN",
    emoji: "🍲"
  },

  // ─── 일식 ───
  {
    id: 7, category: "🇯🇵 일식", channel: "킴서울",
    name: "돈코츠 스타일 라면", time: "10분", difficulty: 1,
    desc: "우유 한 컵이 비법! 집에서 라면으로 돈코츠 느낌 내기.",
    cardBg: "#F57F17", textColor: "#fff",
    tips: "💡 우유를 넣으면 국물이 뽀얗고 부드러워져요. 달걀은 찬물에서 7분 삶으면 반숙 완성!",
    ingredients: [
      { name: "라면", amount: "1봉지" },
      { name: "우유", amount: "200ml" },
      { name: "달걀", amount: "1개 (반숙)" },
      { name: "숙주나물", amount: "한 줌" },
      { name: "대파·버터", amount: "마무리용" },
    ],
    steps: [
      { icon: "🥚", title: "반숙 달걀", desc: "찬물에서 끓기 시작 후 7분. 바로 찬물에 담가요." },
      { icon: "🔥", title: "국물 끓이기", desc: "물 1.5컵 + 우유 200ml 끓이고 스프는 반만 넣어요." },
      { icon: "🍝", title: "면 삶기", desc: "면 + 숙주 넣고 포장지보다 30초 짧게 삶아요." },
      { icon: "🍥", title: "토핑", desc: "반숙 달걀, 대파, 버터 한 조각 올리면 완성!" },
    ],
    youtube: "https://www.youtube.com/@%ED%82%B4%EC%84%9C%EC%9A%B8",
    emoji: "🍜"
  },
  {
    id: 8, category: "🇯🇵 일식", channel: "육식맨",
    name: "규동 (소고기 덮밥)", time: "20분", difficulty: 2,
    desc: "요시노야 부럽지 않은 집밥 규동! 달콤짭짤한 소고기가 밥 위에 듬뿍.",
    cardBg: "#3949AB", textColor: "#fff",
    tips: "💡 미림을 쓰면 더 정통 규동 맛! 달걀노른자를 가운데 올리면 진짜 일식집 느낌이에요.",
    ingredients: [
      { name: "얇은 소고기 (불고기용)", amount: "200g" },
      { name: "양파", amount: "1개 채 썰기" },
      { name: "간장·미림", amount: "각 3큰술" },
      { name: "설탕", amount: "1큰술" },
      { name: "물", amount: "100ml" },
      { name: "달걀노른자", amount: "1개 토핑용" },
      { name: "밥", amount: "2공기" },
    ],
    steps: [
      { icon: "🧅", title: "양파 볶기", desc: "기름 두르고 양파를 중불에서 5분 볶아요. 갈색빛 돌면 달달한 맛이 생겨요." },
      { icon: "🥩", title: "소스+고기", desc: "간장+미림+설탕+물 섞어 소스 만들어 붓고 팔팔 끓인 뒤 소고기 펼쳐 넣어요." },
      { icon: "🍖", title: "고기 익히기", desc: "색 변하는 순간 불 줄이고 소스 끼얹으며 1~2분만 익혀요." },
      { icon: "🍚", title: "완성", desc: "밥 위에 고기+양파 올리고 달걀노른자를 가운데 올리면 완성! 🥢" },
    ],
    youtube: "https://www.youtube.com/@YOOXICMAN",
    emoji: "🍱"
  },

  // ─── 양식 ───
  {
    id: 9, category: "🌍 양식", channel: "김밀란",
    name: "알리오 올리오", time: "20분", difficulty: 2,
    desc: "김밀란 셰프의 정통 이탈리아식! 마늘과 올리브오일만으로 이 맛이 나온다고?",
    cardBg: "#1B4332", textColor: "#fff",
    tips: "💡 김밀란 핵심 팁: 마늘은 절대 태우면 안 돼요! 약불에서 천천히 황금빛이 될 때까지. 면수가 소스의 핵심이에요.",
    ingredients: [
      { name: "스파게티면", amount: "100g" },
      { name: "마늘", amount: "5~6쪽 (얇게 슬라이스)" },
      { name: "엑스트라버진 올리브오일", amount: "5큰술" },
      { name: "페페론치노", amount: "2~3개 (청양고추 대체 가능)" },
      { name: "면수", amount: "한 국자 필수!" },
      { name: "파슬리·소금", amount: "마무리용" },
    ],
    steps: [
      { icon: "💧", title: "면 삶기", desc: "소금 넉넉히 넣은 물에 면을 포장지보다 2분 짧게 삶아요. 면수 꼭 한 국자 남겨두세요!" },
      { icon: "🧄", title: "마늘 오일 만들기", desc: "약불에서 올리브오일 + 슬라이스 마늘 + 페페론치노를 천천히 볶아요. 마늘이 황금빛이 되면 OK. 절대 태우지 마세요!" },
      { icon: "🍝", title: "면 넣고 유화", desc: "면을 넣고 면수를 조금씩 부으며 세게 볶아요. 오일과 면수가 섞이면서 크리미한 소스가 생겨요. 이걸 '만테까레'라고 해요!" },
      { icon: "✨", title: "마무리", desc: "파슬리 다져서 올리고 좋은 올리브오일 한 바퀴 둘러요. 단순하지만 이게 진짜 이탈리아 맛이에요 🇮🇹" },
    ],
    youtube: "https://www.youtube.com/@Kimmilan",
    emoji: "🍝"
  },
  {
    id: 10, category: "🌍 양식", channel: "김밀란",
    name: "봉골레 파스타", time: "25분", difficulty: 2,
    desc: "김밀란 대표 레시피! 바지락에서 우러난 깊은 바다 향이 면에 쏙 배어요.",
    cardBg: "#0D47A1", textColor: "#fff",
    tips: "💡 바지락은 해감이 생명! 소금물(물 1L + 소금 2큰술)에 1시간 담가두세요. 화이트와인이 없으면 맛술로 대체 가능해요.",
    ingredients: [
      { name: "스파게티면", amount: "100g" },
      { name: "바지락", amount: "300g (해감 필수)" },
      { name: "마늘", amount: "4쪽 슬라이스" },
      { name: "화이트와인 or 맛술", amount: "50ml" },
      { name: "올리브오일", amount: "4큰술" },
      { name: "페페론치노·파슬리", amount: "취향껏" },
    ],
    steps: [
      { icon: "🐚", title: "해감하기", desc: "바지락을 소금물(물 1L + 소금 2큰술)에 1시간 담가요. 어두운 곳에 두면 더 잘 뱉어요." },
      { icon: "🧄", title: "마늘 볶기", desc: "올리브오일에 마늘 + 페페론치노를 약불에서 향이 날 때까지 볶아요." },
      { icon: "🍷", title: "바지락 + 와인", desc: "바지락을 넣고 화이트와인을 부어요. 뚜껑 덮고 센불에서 조개가 입을 벌릴 때까지 찌다가 뚜껑 열고 국물을 조려요." },
      { icon: "🍝", title: "면 넣고 완성", desc: "삶은 면과 면수 한 국자 넣고 오일과 국물을 유화시켜요. 파슬리 올리면 완성!" },
    ],
    youtube: "https://www.youtube.com/@Kimmilan",
    emoji: "🦪"
  },
  {
    id: 11, category: "🌍 양식", channel: "은수저",
    name: "까르보나라", time: "25분", difficulty: 3,
    desc: "은수저의 정통 로마식 까르보나라! 생크림 없이 달걀과 치즈만으로 만드는 진짜 까르보나라.",
    cardBg: "#E65100", textColor: "#fff",
    tips: "💡 은수저 핵심 팁: 생크림은 절대 넣으면 안 돼요! 온도가 너무 높으면 달걀이 스크램블드에그가 되니 불에서 내린 뒤 섞어요.",
    ingredients: [
      { name: "스파게티면", amount: "100g" },
      { name: "판체타 or 베이컨", amount: "80g" },
      { name: "달걀노른자", amount: "3개" },
      { name: "페코리노 로마노 or 파마산 치즈", amount: "40g 강판에 갈기" },
      { name: "후추", amount: "많이! 핵심 재료" },
      { name: "면수", amount: "한 국자" },
    ],
    steps: [
      { icon: "🥚", title: "소스 준비", desc: "볼에 달걀노른자 + 간 치즈 + 후추 넉넉히 섞어요. 여기에 면수 1~2큰술 넣어 농도를 조절해요." },
      { icon: "🥓", title: "판체타 굽기", desc: "팬에 기름 없이 판체타를 바삭하게 구워요. 이 기름이 소스 베이스가 돼요." },
      { icon: "🍝", title: "면 볶기", desc: "삶은 면을 판체타 팬에 넣고 면수 한 국자 부어 볶아요. 불을 끄거나 팬을 내려요!" },
      { icon: "🧀", title: "소스 섞기", desc: "달걀+치즈 소스를 붓고 빠르게 섞어요. 온도가 낮아야 크리미하게 완성돼요. 후추 한 번 더 갈면 완성!" },
    ],
    youtube: "https://www.youtube.com/@%EC%88%98%EC%A0%80",
    emoji: "🍝"
  },
  {
    id: 12, category: "🌍 양식", channel: "셰프이원일",
    name: "팬 스테이크 + 버섯 소스", time: "30분", difficulty: 3,
    desc: "레스토랑 부럽지 않아요! 버터 배스팅으로 만드는 고급진 팬 스테이크.",
    cardBg: "#4E342E", textColor: "#fff",
    tips: "💡 굽기 30분 전 상온에 꺼내두세요. 차가운 고기를 바로 구우면 겉은 타고 속은 안 익어요!",
    ingredients: [
      { name: "스테이크용 소고기 (안심·등심)", amount: "200g 두께 2cm 이상" },
      { name: "버터", amount: "2큰술" },
      { name: "마늘", amount: "3쪽 통으로" },
      { name: "로즈마리 or 타임", amount: "1가지" },
      { name: "양송이버섯", amount: "5개" },
      { name: "생크림 or 우유", amount: "100ml" },
      { name: "굵은 소금·후추", amount: "밑간용" },
    ],
    steps: [
      { icon: "🥩", title: "고기 준비", desc: "상온 30분 + 키친타월로 물기 제거 + 굵은 소금·후추 앞뒤 뿌리기. 이게 전부예요!" },
      { icon: "🔥", title: "시어링", desc: "팬을 연기 날 때까지 달궈요. 앞면 2분 → 뒷면 2분. 절대 누르지 마세요! 육즙이 빠져나와요." },
      { icon: "🧈", title: "버터 배스팅", desc: "버터 + 마늘 + 허브 넣고 약불로. 녹은 버터를 고기 위에 숟가락으로 계속 끼얹어요. 1분간 반복!" },
      { icon: "🍄", title: "버섯 소스 & 휴지", desc: "고기 꺼내 5분 휴지(필수!). 같은 팬에 버섯 볶다가 우유 + 버터로 소스 만들어 끼얹으면 완성!" },
    ],
    youtube: "https://www.youtube.com/@%EC%85%B0%ED%94%84%EC%9D%B4%EC%9B%90%EC%9D%BC",
    emoji: "🥩"
  },
  {
    id: 13, category: "🌍 양식", channel: "은수저",
    name: "뇨끼 버터 파르미지아노", time: "30분", difficulty: 2,
    desc: "은수저가 소개한 정통 이탈리아 뇨끼! 감자와 밀가루만으로 만드는 폭신한 덩어리.",
    cardBg: "#6A1B9A", textColor: "#fff",
    tips: "💡 감자는 삶지 말고 오븐이나 전자레인지로 익혀야 수분이 적어 뇨끼가 쫄깃해요!",
    ingredients: [
      { name: "감자", amount: "300g" },
      { name: "밀가루", amount: "80~100g" },
      { name: "달걀노른자", amount: "1개" },
      { name: "버터", amount: "3큰술" },
      { name: "파마산 치즈", amount: "40g 강판에 갈기" },
      { name: "소금·후추", amount: "적당히" },
    ],
    steps: [
      { icon: "🥔", title: "감자 익히기", desc: "감자를 전자레인지에서 5~7분 돌리거나 오븐 200도에서 40분 구워요. 삶으면 수분이 많아져요!" },
      { icon: "🫙", title: "뇨끼 반죽", desc: "감자를 으깨고 밀가루 + 달걀노른자 + 소금 섞어요. 반죽이 너무 질면 밀가루 조금 더. 손에 안 붙을 때까지만 반죽해요." },
      { icon: "💧", title: "뇨끼 빚고 삶기", desc: "반죽을 길게 밀어 1.5cm씩 잘라요. 포크로 홈 내면 소스가 잘 붙어요. 끓는 소금물에 뇨끼가 떠오르면 30초 후 건져요." },
      { icon: "🧈", title: "버터 소스", desc: "팬에 버터를 녹이고 뇨끼를 노릇하게 구워요. 파마산 치즈 팍팍 뿌리면 완성! 세이지 잎 올리면 더 고급스러워요." },
    ],
    youtube: "https://www.youtube.com/@%EC%88%98%EC%A0%80",
    emoji: "🫓"
  },
];

const DifficultyDots = ({ level }) => (
  <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
    {[1,2,3].map(i => (
      <div key={i} style={{
        width: 7, height: 7, borderRadius: "50%",
        background: i <= level ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)"
      }}/>
    ))}
    <span style={{ fontSize: 10, color: "rgba(255,255,255,0.8)", marginLeft: 3 }}>
      {level === 1 ? "쉬움" : level === 2 ? "보통" : "어려움"}
    </span>
  </div>
);

export default function App() {
  const [selected, setSelected] = useState(null);
  const [activeCategory, setActiveCategory] = useState("전체");
  const [liked, setLiked] = useState({});
  const [openStep, setOpenStep] = useState(null);
  const dragRef = useRef(null);
  const startXRef = useRef(0);
  const [currentIdx, setCurrentIdx] = useState(0);

  const filtered = activeCategory === "전체" ? menus : menus.filter(m => m.category === activeCategory);

  const toggleLike = (id, e) => {
    e && e.stopPropagation();
    setLiked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const ch = selected ? channelColors[selected.channel] : null;

  return (
    <div style={{
      minHeight: "100vh",
      background: "#F5F0EB",
      fontFamily: "'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif",
      paddingBottom: 60,
    }}>
      {/* Header */}
      <div style={{
        padding: "28px 24px 0",
        background: "#F5F0EB",
        position: "sticky", top: 0, zIndex: 100,
        paddingBottom: 16,
      }}>
        <div style={{ marginBottom: 4 }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: "#A0927E", letterSpacing: 2, textTransform: "uppercase" }}>Tonight's Menu</span>
        </div>
        <h1 style={{ margin: "0 0 16px", fontSize: 30, fontWeight: 900, color: "#1A1A1A", letterSpacing: "-1px", lineHeight: 1.2 }}>
          오늘 뭐<br/>먹을까요? 🍽️
        </h1>
        {!selected && (
          <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 4 }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => { setActiveCategory(cat); setCurrentIdx(0); }} style={{
                padding: "8px 18px", borderRadius: 24, whiteSpace: "nowrap",
                border: "none",
                background: activeCategory === cat ? "#1A1A1A" : "#E8E0D8",
                color: activeCategory === cat ? "#fff" : "#666",
                fontWeight: 700, fontSize: 13, cursor: "pointer",
                transition: "all 0.2s", flexShrink: 0
              }}>{cat}</button>
            ))}
          </div>
        )}
      </div>

      {/* Card Stack */}
      {!selected && (
        <div style={{ padding: "20px 24px 0" }}>
          <p style={{ margin: "0 0 16px", fontSize: 13, color: "#A0927E", fontWeight: 600 }}>
            {filtered.length}개의 레시피 · 카드를 탭해서 확인하세요
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {filtered.map((menu, idx) => (
              <div key={menu.id}
                onClick={() => { setSelected(menu); setOpenStep(null); }}
                style={{
                  background: menu.cardBg,
                  borderRadius: 28,
                  overflow: "hidden",
                  cursor: "pointer",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  position: "relative",
                  minHeight: 200,
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px) rotate(0.5deg)"; e.currentTarget.style.boxShadow = "0 16px 48px rgba(0,0,0,0.2)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0) rotate(0deg)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.15)"; }}
              >
                {/* Channel badge */}
                <div style={{
                  position: "absolute", top: 18, left: 18,
                  background: "rgba(255,255,255,0.2)",
                  backdropFilter: "blur(4px)",
                  borderRadius: 20, padding: "4px 12px",
                  fontSize: 11, fontWeight: 800, color: "#fff",
                  letterSpacing: 0.5
                }}>{channelColors[menu.channel]?.label}</div>

                {/* Like */}
                <button onClick={e => toggleLike(menu.id, e)} style={{
                  position: "absolute", top: 14, right: 14,
                  background: "rgba(255,255,255,0.2)", border: "none",
                  borderRadius: "50%", width: 36, height: 36,
                  cursor: "pointer", fontSize: 18, display: "flex",
                  alignItems: "center", justifyContent: "center"
                }}>{liked[menu.id] ? "❤️" : "🤍"}</button>

                {/* Big emoji */}
                <div style={{
                  position: "absolute", right: 20, bottom: 60,
                  fontSize: 80, opacity: 0.25, userSelect: "none"
                }}>{menu.emoji}</div>

                {/* Content */}
                <div style={{ padding: "60px 22px 22px" }}>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", marginBottom: 6, fontWeight: 600 }}>
                    {menu.category}
                  </div>
                  <h2 style={{ margin: "0 0 8px", fontSize: 26, fontWeight: 900, color: "#fff", letterSpacing: "-0.5px", lineHeight: 1.2 }}>
                    {menu.name}
                  </h2>
                  <p style={{ margin: "0 0 16px", fontSize: 13, color: "rgba(255,255,255,0.8)", lineHeight: 1.6, maxWidth: "80%" }}>
                    {menu.desc}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <DifficultyDots level={menu.difficulty}/>
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,0.8)", fontWeight: 700 }}>⏱ {menu.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Detail */}
      {selected && (
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          {/* Hero Card */}
          <div style={{
            background: selected.cardBg, minHeight: 260,
            position: "relative", padding: "24px 24px 28px",
          }}>
            <button onClick={() => setSelected(null)} style={{
              background: "rgba(255,255,255,0.2)", border: "none",
              borderRadius: 20, padding: "8px 16px", cursor: "pointer",
              fontSize: 13, color: "#fff", fontWeight: 700, marginBottom: 20,
              backdropFilter: "blur(4px)"
            }}>← 뒤로</button>

            <div style={{
              position: "absolute", right: 20, top: 20,
              fontSize: 100, opacity: 0.2, userSelect: "none"
            }}>{selected.emoji}</div>

            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", marginBottom: 8, fontWeight: 700, letterSpacing: 1 }}>
              {channelColors[selected.channel]?.label} · {selected.category}
            </div>
            <h2 style={{ margin: "0 0 10px", fontSize: 32, fontWeight: 900, color: "#fff", letterSpacing: "-1px", lineHeight: 1.1 }}>
              {selected.name}
            </h2>
            <p style={{ margin: "0 0 18px", fontSize: 14, color: "rgba(255,255,255,0.85)", lineHeight: 1.7 }}>
              {selected.desc}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <DifficultyDots level={selected.difficulty}/>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", fontWeight: 700 }}>⏱ {selected.time}</span>
            </div>
          </div>

          <div style={{ padding: "0 20px" }}>
            {/* Tip */}
            <div style={{
              background: "#fff", borderRadius: 20, padding: "16px 18px",
              margin: "16px 0", fontSize: 13, color: "#555", lineHeight: 1.8,
              boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              borderLeft: `4px solid ${selected.cardBg}`
            }}>{selected.tips}</div>

            {/* Ingredients */}
            <div style={{ background: "#fff", borderRadius: 20, padding: "20px 18px", marginBottom: 14, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <h3 style={{ margin: "0 0 14px", fontSize: 16, fontWeight: 800, color: "#1A1A1A" }}>🛒 재료</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {selected.ingredients.map((ing, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "8px 12px", background: "#F8F4F0", borderRadius: 12 }}>
                    <span style={{ fontWeight: 700, color: "#333", fontSize: 14 }}>{ing.name}</span>
                    <span style={{ color: "#888", fontSize: 13 }}>{ing.amount}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Steps */}
            <div style={{ background: "#fff", borderRadius: 20, padding: "20px 18px", marginBottom: 14, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <h3 style={{ margin: "0 0 14px", fontSize: 16, fontWeight: 800, color: "#1A1A1A" }}>👩‍🍳 만드는 법</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {selected.steps.map((step, i) => (
                  <div key={i} onClick={() => setOpenStep(openStep===i?null:i)} style={{
                    background: openStep===i ? "#F8F4F0" : "#FAFAFA",
                    borderRadius: 16, padding: "14px 16px", cursor: "pointer",
                    border: openStep===i ? `2px solid ${selected.cardBg}` : "2px solid transparent",
                    transition: "all 0.2s"
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{
                        background: selected.cardBg, color: "#fff",
                        width: 28, height: 28, borderRadius: "50%",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 13, fontWeight: 900, flexShrink: 0
                      }}>{i+1}</span>
                      <span style={{ fontSize: 16 }}>{step.icon}</span>
                      <span style={{ fontWeight: 700, color: "#333", fontSize: 14, flex: 1 }}>{step.title}</span>
                      <span style={{ color: "#CCC", fontSize: 14 }}>{openStep===i?"▲":"▼"}</span>
                    </div>
                    {openStep===i && <p style={{ margin: "12px 0 0 38px", fontSize: 14, color: "#555", lineHeight: 1.8 }}>{step.desc}</p>}
                  </div>
                ))}
              </div>
            </div>

            {/* YouTube */}
            <a href={selected.youtube} target="_blank" rel="noopener noreferrer" style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
              background: "#FF0000", color: "#fff", borderRadius: 20,
              padding: "16px", textDecoration: "none", fontWeight: 800, fontSize: 15,
              boxShadow: "0 4px 20px rgba(255,0,0,0.3)", marginBottom: 8
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.8 15.5V8.5l6.3 3.5-6.3 3.5z"/>
              </svg>
              {channelColors[selected.channel]?.label} 채널에서 영상 보기
            </a>
            <p style={{ textAlign: "center", color: "#B0A090", fontSize: 12, marginTop: 6, marginBottom: 20 }}>
              채널 홈으로 이동해요 🎬
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
