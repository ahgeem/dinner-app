import { useState } from "react";

const categories = ["전체", "🇰🇷 한식", "🇯🇵 일식", "🌍 양식"];

const channelColors = {
  "김밀란": "#1B4332",
  "정육왕": "#7B2D00",
  "은수저": "#1A237E",
  "육식맨": "#B71C1C",
  "킴서울": "#4A148C",
  "셰프이원일": "#004D40",
};

const menus = [
  {
    id: 1, category: "🇰🇷 한식", channel: "킴서울",
    name: "김치볶음밥", time: "15분", difficulty: 1,
    desc: "묵은 김치 하나로 뚝딱! 버터 한 조각이 감칠맛의 비결.",
    cardBg: "#FF6B6B",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&q=80",
    tips: "💡 버터를 먼저 녹인 뒤 김치를 볶으면 감칠맛이 훨씬 깊어져요. 달걀은 반숙으로 터뜨려 비비면 최고!",
    ingredients: [
      { name: "묵은 김치", amount: "1컵" },
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
      { icon: "✨", title: "마무리", desc: "불 끄고 참기름 한 바퀴, 통깨·김가루 솔솔. 달걀 터뜨려 비비면서 먹으면 최고예요 🥄" },
    ],
    youtube: "https://www.youtube.com/@%ED%82%B4%EC%84%9C%EC%9A%B8",
  },
  {
    id: 2, category: "🇰🇷 한식", channel: "킴서울",
    name: "된장찌개", time: "25분", difficulty: 2,
    desc: "구수하고 따뜻한 엄마 손맛. 두부와 애호박만 있으면 완성!",
    cardBg: "#4CAF50",
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&q=80",
    tips: "💡 된장은 체에 밭쳐 풀어야 덩어리 없이 깔끔해요. 마지막 청양고추 한 개로 칼칼함 업!",
    ingredients: [
      { name: "된장", amount: "2큰술" },
      { name: "두부", amount: "반 모" },
      { name: "애호박", amount: "반 개" },
      { name: "양파", amount: "반 개" },
      { name: "다진 마늘", amount: "1작은술" },
      { name: "멸치 육수", amount: "2컵" },
      { name: "청양고추", amount: "1개 (선택)" },
    ],
    steps: [
      { icon: "🔪", title: "재료 썰기", desc: "두부 1.5cm 사각형, 애호박 반달, 양파 큼직하게 썰어요." },
      { icon: "🍶", title: "육수 끓이기", desc: "냄비에 육수를 넣고 중불로 끓여요. 끓으면 된장을 체에 밭쳐 풀고 다진 마늘을 넣어요." },
      { icon: "🥦", title: "야채·두부 넣기", desc: "양파, 애호박 먼저 5분 끓이고, 두부를 넣어 2~3분 더 끓여요." },
      { icon: "🌶️", title: "마무리", desc: "청양고추 어슷 썰어 넣고 한소끔 끓이면 완성!" },
    ],
    youtube: "https://www.youtube.com/@%ED%82%B4%EC%84%9C%EC%9A%B8",
  },
  {
    id: 3, category: "🇰🇷 한식", channel: "정육왕",
    name: "대패삼겹 파김치볶음", time: "20분", difficulty: 1,
    desc: "정육왕 스타일! 대패삼겹살과 파김치의 환상 조합.",
    cardBg: "#FF8C00",
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80",
    tips: "💡 대패삼겹살은 냉동 상태에서 썰어야 얇게 썰려요. 파김치가 없으면 김치+대파로 대체 가능해요!",
    ingredients: [
      { name: "대패삼겹살", amount: "200g" },
      { name: "파김치", amount: "1컵" },
      { name: "고추장", amount: "1큰술" },
      { name: "간장", amount: "1큰술" },
      { name: "참기름·통깨", amount: "마무리용" },
    ],
    steps: [
      { icon: "🔥", title: "파김치 볶기", desc: "팬에 기름 없이 파김치를 먼저 볶아요." },
      { icon: "🥩", title: "고기 넣기", desc: "대패삼겹살을 넣고 센불에서 볶아요." },
      { icon: "🌶️", title: "양념하기", desc: "고추장 + 간장을 넣고 골고루 섞어 센불에서 1~2분 더 볶아요." },
      { icon: "✨", title: "마무리", desc: "참기름 한 바퀴, 통깨 솔솔. 뜨거운 밥에 올려 비벼 먹으면 최고!" },
    ],
    youtube: "https://www.youtube.com/@meatcreator",
  },
  {
    id: 4, category: "🇰🇷 한식", channel: "정육왕",
    name: "소고기 뭇국", time: "30분", difficulty: 2,
    desc: "정육왕 고기 손질법으로 만드는 깊고 구수한 소고기 뭇국.",
    cardBg: "#795548",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80",
    tips: "💡 소고기는 찬물에 30분 담가 핏물을 제거해야 국물이 깔끔해요!",
    ingredients: [
      { name: "소고기 국거리", amount: "150g" },
      { name: "무", amount: "1/4개" },
      { name: "다진 마늘", amount: "1큰술" },
      { name: "국간장", amount: "2큰술" },
      { name: "참기름", amount: "1큰술" },
      { name: "물", amount: "4컵" },
      { name: "대파·소금", amount: "마무리용" },
    ],
    steps: [
      { icon: "🥩", title: "핏물 빼기", desc: "소고기를 찬물에 30분 담가 핏물을 빼요." },
      { icon: "🔥", title: "고기·무 볶기", desc: "냄비에 참기름 두르고 고기를 볶아요. 무 나박 썰어 넣고 2분 더 볶아요." },
      { icon: "💧", title: "물 붓고 끓이기", desc: "물 4컵, 국간장, 마늘 넣고 센불로 끓이다 거품 걷어요." },
      { icon: "🌿", title: "마무리", desc: "약불 15분 끓이고 소금 간 맞추고 대파 송송 썰어 넣으면 완성!" },
    ],
    youtube: "https://www.youtube.com/@meatcreator",
  },
  {
    id: 5, category: "🇰🇷 한식", channel: "육식맨",
    name: "수퍼 크리스피 삼겹살", time: "40분", difficulty: 3,
    desc: "육식맨 명예의 전당! 껍질이 과자처럼 바삭한 삼겹살의 신세계.",
    cardBg: "#C62828",
    image: "https://images.unsplash.com/photo-1562802378-063ec186a863?w=600&q=80",
    tips: "💡 껍질에 포크로 구멍을 빽빽하게 내야 바삭해져요. 소금 절임 후 냉장 하루 숙성이 핵심!",
    ingredients: [
      { name: "삼겹살 (껍질 있는 것)", amount: "500g 통으로" },
      { name: "굵은 소금", amount: "넉넉히" },
      { name: "후추", amount: "약간" },
      { name: "쌈장·상추", amount: "곁들임용" },
    ],
    steps: [
      { icon: "🍖", title: "껍질 손질", desc: "껍질 면에 포크로 구멍을 50번 이상 빽빽하게 찔러요." },
      { icon: "🧂", title: "소금 절임·숙성", desc: "껍질 면에만 굵은 소금 뿌리고 냉장고에 하루(최소 4시간) 숙성해요." },
      { icon: "🔥", title: "오븐 굽기", desc: "소금 닦고 200도에서 40분. 마지막 5분은 230도로 껍질 완전 바삭하게!" },
      { icon: "✨", title: "마무리", desc: "껍질이 과자처럼 바삭하면 완성! 쌈장에 상추 곁들이면 최고예요 🐷" },
    ],
    youtube: "https://www.youtube.com/@YOOXICMAN",
  },
  {
    id: 6, category: "🇰🇷 한식", channel: "육식맨",
    name: "순두부찌개", time: "20분", difficulty: 2,
    desc: "육식맨 스타일! 돼지기름으로 깊은 맛을 낸 칼칼한 순두부찌개.",
    cardBg: "#E91E8C",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80",
    tips: "💡 삼겹살을 먼저 볶아 돼지기름을 내면 국물 맛이 완전히 달라져요!",
    ingredients: [
      { name: "순두부", amount: "1봉지 400g" },
      { name: "삼겹살 (소량)", amount: "50g" },
      { name: "달걀", amount: "1개" },
      { name: "고춧가루", amount: "1.5큰술" },
      { name: "다진 마늘", amount: "1큰술" },
      { name: "멸치 육수", amount: "1.5컵" },
      { name: "국간장·새우젓", amount: "각 0.5큰술" },
    ],
    steps: [
      { icon: "🥩", title: "돼지기름 내기", desc: "냄비에 기름 없이 삼겹살을 볶아 기름을 내요." },
      { icon: "🔥", title: "고추기름", desc: "고춧가루를 넣어 약불에서 30초 볶아요. 빨갛게 물들면 육수 부어요." },
      { icon: "🫙", title: "순두부 넣기", desc: "순두부를 넣고 국간장·새우젓으로 간하고 2~3분 보글보글 끓여요." },
      { icon: "🥚", title: "달걀 마무리", desc: "약불로 줄이고 달걀을 깨 넣어요. 반숙 되면 바로 상에 올려요!" },
    ],
    youtube: "https://www.youtube.com/@YOOXICMAN",
  },
  {
    id: 7, category: "🇯🇵 일식", channel: "킴서울",
    name: "돈코츠 스타일 라면", time: "10분", difficulty: 1,
    desc: "우유 한 컵이 비법! 집 라면으로 돈코츠 느낌 내기.",
    cardBg: "#F57F17",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80",
    tips: "💡 우유를 넣으면 국물이 뽀얗고 부드러워져요. 달걀은 찬물에서 7분 삶으면 반숙 완성!",
    ingredients: [
      { name: "라면", amount: "1봉지" },
      { name: "우유", amount: "200ml" },
      { name: "달걀", amount: "1개 반숙" },
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
  },
  {
    id: 8, category: "🇯🇵 일식", channel: "육식맨",
    name: "규동 (소고기 덮밥)", time: "20분", difficulty: 2,
    desc: "요시노야 부럽지 않은 집밥 규동! 달콤짭짤한 소고기가 밥 위에 듬뿍.",
    cardBg: "#3949AB",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80",
    tips: "💡 미림을 쓰면 더 정통 규동 맛! 달걀노른자를 가운데 올리면 진짜 일식집 느낌이에요.",
    ingredients: [
      { name: "얇은 소고기", amount: "200g" },
      { name: "양파", amount: "1개 채 썰기" },
      { name: "간장·미림", amount: "각 3큰술" },
      { name: "설탕", amount: "1큰술" },
      { name: "물", amount: "100ml" },
      { name: "달걀노른자", amount: "1개 토핑용" },
    ],
    steps: [
      { icon: "🧅", title: "양파 볶기", desc: "기름 두르고 양파 중불에서 5분. 갈색빛 돌면 달달한 맛이 생겨요." },
      { icon: "🥩", title: "소스+고기", desc: "간장+미림+설탕+물 섞어 소스 붓고 팔팔 끓인 뒤 소고기 펼쳐 넣어요." },
      { icon: "🍖", title: "고기 익히기", desc: "색 변하는 순간 불 줄이고 소스 끼얹으며 1~2분만 익혀요." },
      { icon: "🍚", title: "완성", desc: "밥 위에 올리고 달걀노른자를 가운데 올리면 완성! 🥢" },
    ],
    youtube: "https://www.youtube.com/@YOOXICMAN",
  },
  {
    id: 9, category: "🌍 양식", channel: "김밀란",
    name: "알리오 올리오", time: "20분", difficulty: 2,
    desc: "김밀란 정통 이탈리아식! 마늘과 올리브오일만으로 이 맛이?",
    cardBg: "#1B4332",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600&q=80",
    tips: "💡 마늘은 절대 태우면 안 돼요! 약불에서 천천히 황금빛 될 때까지. 면수가 소스의 핵심이에요.",
    ingredients: [
      { name: "스파게티면", amount: "100g" },
      { name: "마늘", amount: "5~6쪽 슬라이스" },
      { name: "엑스트라버진 올리브오일", amount: "5큰술" },
      { name: "페페론치노", amount: "2~3개" },
      { name: "면수", amount: "한 국자 필수!" },
      { name: "파슬리·소금", amount: "마무리용" },
    ],
    steps: [
      { icon: "💧", title: "면 삶기", desc: "소금 넉넉히 넣은 물에 면을 포장지보다 2분 짧게 삶아요. 면수 꼭 한 국자 남겨두세요!" },
      { icon: "🧄", title: "마늘 오일", desc: "약불에서 올리브오일 + 슬라이스 마늘 + 페페론치노를 천천히 볶아요. 마늘이 황금빛이 되면 OK!" },
      { icon: "🍝", title: "면 넣고 유화", desc: "면을 넣고 면수를 조금씩 부으며 세게 볶아요. 크리미한 소스가 만들어져요." },
      { icon: "✨", title: "마무리", desc: "파슬리 다져서 올리고 올리브오일 한 바퀴. 단순하지만 진짜 이탈리아 맛이에요 🇮🇹" },
    ],
    youtube: "https://www.youtube.com/@Kimmilan",
  },
  {
    id: 10, category: "🌍 양식", channel: "김밀란",
    name: "봉골레 파스타", time: "25분", difficulty: 2,
    desc: "김밀란 대표 레시피! 바지락에서 우러난 깊은 바다 향.",
    cardBg: "#0D47A1",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&q=80",
    tips: "💡 바지락은 소금물(물 1L + 소금 2큰술)에 1시간 해감이 생명! 화이트와인 없으면 맛술 OK.",
    ingredients: [
      { name: "스파게티면", amount: "100g" },
      { name: "바지락", amount: "300g 해감 필수" },
      { name: "마늘", amount: "4쪽 슬라이스" },
      { name: "화이트와인 or 맛술", amount: "50ml" },
      { name: "올리브오일", amount: "4큰술" },
      { name: "페페론치노·파슬리", amount: "취향껏" },
    ],
    steps: [
      { icon: "🐚", title: "해감하기", desc: "바지락을 소금물에 1시간 담가요. 어두운 곳에 두면 더 잘 뱉어요." },
      { icon: "🧄", title: "마늘 볶기", desc: "올리브오일에 마늘 + 페페론치노를 약불에서 향이 날 때까지 볶아요." },
      { icon: "🍷", title: "바지락 + 와인", desc: "바지락 넣고 화이트와인 부어요. 뚜껑 덮고 조개 입 벌릴 때까지 찌다가 국물 조려요." },
      { icon: "🍝", title: "면 넣고 완성", desc: "삶은 면과 면수 한 국자 넣고 유화시켜요. 파슬리 올리면 완성!" },
    ],
    youtube: "https://www.youtube.com/@Kimmilan",
  },
  {
    id: 11, category: "🌍 양식", channel: "은수저",
    name: "정통 까르보나라", time: "25분", difficulty: 3,
    desc: "은수저의 로마식 까르보나라! 생크림 없이 달걀과 치즈만으로.",
    cardBg: "#E65100",
    image: "https://images.unsplash.com/photo-1608756687911-aa1599ab3bd9?w=600&q=80",
    tips: "💡 생크림은 절대 넣으면 안 돼요! 온도가 너무 높으면 달걀이 스크램블드에그가 되니 불에서 내린 뒤 섞어요.",
    ingredients: [
      { name: "스파게티면", amount: "100g" },
      { name: "판체타 or 베이컨", amount: "80g" },
      { name: "달걀노른자", amount: "3개" },
      { name: "페코리노 or 파마산 치즈", amount: "40g 강판에 갈기" },
      { name: "후추", amount: "많이! 핵심 재료" },
      { name: "면수", amount: "한 국자" },
    ],
    steps: [
      { icon: "🥚", title: "소스 준비", desc: "볼에 달걀노른자 + 간 치즈 + 후추 넉넉히 섞어요. 면수 1~2큰술 넣어 농도 조절해요." },
      { icon: "🥓", title: "판체타 굽기", desc: "기름 없이 판체타를 바삭하게 구워요. 이 기름이 소스 베이스예요." },
      { icon: "🍝", title: "면 볶기", desc: "삶은 면을 판체타 팬에 넣고 면수 한 국자 부어 볶아요. 불을 꺼요!" },
      { icon: "🧀", title: "소스 섞기", desc: "달걀+치즈 소스 붓고 빠르게 섞어요. 후추 한 번 더 갈면 완성!" },
    ],
    youtube: "https://www.youtube.com/@%EC%88%98%EC%A0%80",
  },
  {
    id: 12, category: "🌍 양식", channel: "셰프이원일",
    name: "팬 스테이크 + 버섯 소스", time: "30분", difficulty: 3,
    desc: "버터 배스팅으로 만드는 레스토랑급 팬 스테이크.",
    cardBg: "#4E342E",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80",
    tips: "💡 굽기 30분 전 상온에 꺼내두세요. 차가운 고기를 바로 구우면 겉은 타고 속은 안 익어요!",
    ingredients: [
      { name: "스테이크용 소고기", amount: "200g 두께 2cm+" },
      { name: "버터", amount: "2큰술" },
      { name: "마늘", amount: "3쪽 통으로" },
      { name: "로즈마리·타임", amount: "1가지" },
      { name: "양송이버섯", amount: "5개" },
      { name: "생크림 or 우유", amount: "100ml" },
      { name: "굵은 소금·후추", amount: "밑간용" },
    ],
    steps: [
      { icon: "🥩", title: "고기 준비", desc: "상온 30분 + 키친타월 물기 제거 + 굵은 소금·후추 앞뒤 뿌리기." },
      { icon: "🔥", title: "시어링", desc: "연기 날 때까지 달궈요. 앞면 2분 → 뒷면 2분. 절대 누르지 마세요!" },
      { icon: "🧈", title: "버터 배스팅", desc: "버터 + 마늘 + 허브 넣고 약불로. 녹은 버터를 고기에 계속 끼얹어요. 1분간 반복!" },
      { icon: "🍄", title: "버섯 소스 & 휴지", desc: "고기 꺼내 5분 휴지 필수! 같은 팬에 버섯 볶다가 우유 + 버터로 소스 만들어요." },
    ],
    youtube: "https://www.youtube.com/@%EC%85%B0%ED%94%84%EC%9D%B4%EC%9B%90%EC%9D%BC",
  },
];

const channelLabel = {
  "김밀란": "🍝 김밀란",
  "정육왕": "🥩 정육왕",
  "은수저": "🥄 은수저",
  "육식맨": "🔥 육식맨",
  "킴서울": "🍳 킴서울",
  "셰프이원일": "👨‍🍳 셰프이원일",
};

const DifficultyDots = ({ level, dark }) => (
  <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
    {[1,2,3].map(i => (
      <div key={i} style={{
        width: 8, height: 8, borderRadius: "50%",
        background: i <= level
          ? (dark ? "#fff" : "#1A1A1A")
          : (dark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.15)")
      }}/>
    ))}
    <span style={{ fontSize: 11, color: dark ? "rgba(255,255,255,0.8)" : "#888", marginLeft: 3, fontWeight: 600 }}>
      {level === 1 ? "쉬움" : level === 2 ? "보통" : "어려움"}
    </span>
  </div>
);

export default function App() {
  const [selected, setSelected] = useState(null);
  const [activeCategory, setActiveCategory] = useState("전체");
  const [liked, setLiked] = useState({});
  const [openStep, setOpenStep] = useState(null);
  const [imgError, setImgError] = useState({});

  const filtered = activeCategory === "전체" ? menus : menus.filter(m => m.category === activeCategory);

  const toggleLike = (id, e) => {
    e && e.stopPropagation();
    setLiked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div style={{ minHeight: "100vh", background: "#F2EDE8", fontFamily: "'Apple SD Gothic Neo','Noto Sans KR',sans-serif", paddingBottom: 60 }}>

      {/* Header */}
      <div style={{ padding: "32px 22px 0", position: "sticky", top: 0, zIndex: 100, background: "#F2EDE8", paddingBottom: 16 }}>
        {!selected && <>
          <p style={{ margin: "0 0 4px", fontSize: 12, fontWeight: 800, color: "#B0A090", letterSpacing: 3 }}>TONIGHT'S MENU</p>
          <h1 style={{ margin: "0 0 18px", fontSize: 32, fontWeight: 900, color: "#1A1A1A", letterSpacing: "-1.5px", lineHeight: 1.15 }}>
            오늘 뭐<br/>먹을까요? 🍽️
          </h1>
          <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 4, scrollbarWidth: "none" }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} style={{
                padding: "9px 20px", borderRadius: 30, whiteSpace: "nowrap", border: "none", flexShrink: 0,
                background: activeCategory === cat ? "#1A1A1A" : "#E4DDD7",
                color: activeCategory === cat ? "#fff" : "#666",
                fontWeight: 700, fontSize: 13, cursor: "pointer", transition: "all 0.2s"
              }}>{cat}</button>
            ))}
          </div>
        </>}
      </div>

      {/* Card List */}
      {!selected && (
        <div style={{ padding: "16px 22px 0" }}>
          <p style={{ margin: "0 0 14px", fontSize: 12, color: "#B0A090", fontWeight: 700 }}>
            {filtered.length}개의 레시피
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {filtered.map(menu => (
              <div key={menu.id}
                onClick={() => { setSelected(menu); setOpenStep(null); }}
                style={{
                  borderRadius: 28, overflow: "hidden", cursor: "pointer",
                  boxShadow: "0 6px 28px rgba(0,0,0,0.13)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  background: "#fff",
                }}
                onMouseEnter={e => { e.currentTarget.style.transform="translateY(-5px) rotate(0.4deg)"; e.currentTarget.style.boxShadow="0 14px 40px rgba(0,0,0,0.18)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform="translateY(0) rotate(0deg)"; e.currentTarget.style.boxShadow="0 6px 28px rgba(0,0,0,0.13)"; }}
              >
                {/* Image area */}
                <div style={{ position: "relative", height: 220, background: menu.cardBg, overflow: "hidden" }}>
                  {!imgError[menu.id] ? (
                    <img
                      src={menu.image}
                      alt={menu.name}
                      onError={() => setImgError(p => ({...p, [menu.id]: true}))}
                      style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.85 }}
                    />
                  ) : (
                    <div style={{ width:"100%", height:"100%", background: menu.cardBg, display:"flex", alignItems:"center", justifyContent:"center", fontSize: 80, opacity: 0.3 }}>🍽️</div>
                  )}
                  {/* Gradient overlay */}
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.55) 100%)" }}/>

                  {/* Channel badge */}
                  <div style={{
                    position: "absolute", top: 14, left: 14,
                    background: channelColors[menu.channel] || "#333",
                    borderRadius: 20, padding: "5px 13px",
                    fontSize: 11, fontWeight: 800, color: "#fff",
                  }}>{channelLabel[menu.channel]}</div>

                  {/* Like */}
                  <button onClick={e => toggleLike(menu.id, e)} style={{
                    position: "absolute", top: 10, right: 12,
                    background: "rgba(255,255,255,0.2)", border: "none", borderRadius: "50%",
                    width: 38, height: 38, cursor: "pointer", fontSize: 18,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    backdropFilter: "blur(4px)"
                  }}>{liked[menu.id] ? "❤️" : "🤍"}</button>

                  {/* Title on image */}
                  <div style={{ position: "absolute", bottom: 16, left: 16, right: 16 }}>
                    <p style={{ margin: "0 0 4px", fontSize: 11, color: "rgba(255,255,255,0.75)", fontWeight: 700 }}>{menu.category}</p>
                    <h2 style={{ margin: 0, fontSize: 24, fontWeight: 900, color: "#fff", letterSpacing: "-0.5px", lineHeight: 1.2, textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>{menu.name}</h2>
                  </div>
                </div>

                {/* Bottom info */}
                <div style={{ padding: "14px 18px 16px", background: "#fff" }}>
                  <p style={{ margin: "0 0 12px", fontSize: 13, color: "#777", lineHeight: 1.6 }}>{menu.desc}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <DifficultyDots level={menu.difficulty} dark={false}/>
                    <span style={{ fontSize: 12, color: "#999", fontWeight: 700 }}>⏱ {menu.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Detail View */}
      {selected && (
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          {/* Hero */}
          <div style={{ position: "relative", height: 320, background: selected.cardBg, overflow: "hidden" }}>
            {!imgError[selected.id] ? (
              <img src={selected.image} alt={selected.name}
                onError={() => setImgError(p => ({...p, [selected.id]: true}))}
                style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.8 }}/>
            ) : (
              <div style={{ width:"100%", height:"100%", display:"flex", alignItems:"center", justifyContent:"center", fontSize: 100, opacity: 0.2 }}>🍽️</div>
            )}
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7) 100%)" }}/>

            <button onClick={() => setSelected(null)} style={{
              position: "absolute", top: 16, left: 16,
              background: "rgba(255,255,255,0.2)", border: "none", borderRadius: 20,
              padding: "8px 16px", cursor: "pointer", fontSize: 13, color: "#fff",
              fontWeight: 700, backdropFilter: "blur(4px)"
            }}>← 뒤로</button>

            <div style={{ position: "absolute", bottom: 20, left: 20, right: 20 }}>
              <div style={{ marginBottom: 6 }}>
                <span style={{
                  background: channelColors[selected.channel], borderRadius: 16,
                  padding: "4px 12px", fontSize: 11, fontWeight: 800, color: "#fff"
                }}>{channelLabel[selected.channel]}</span>
              </div>
              <h2 style={{ margin: "0 0 8px", fontSize: 30, fontWeight: 900, color: "#fff", letterSpacing: "-1px", lineHeight: 1.1 }}>{selected.name}</h2>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <DifficultyDots level={selected.difficulty} dark={true}/>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", fontWeight: 700 }}>⏱ {selected.time}</span>
              </div>
            </div>
          </div>

          <div style={{ padding: "0 20px" }}>
            {/* Desc + Tip */}
            <div style={{ background: "#fff", borderRadius: 20, padding: "18px 20px", margin: "16px 0", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <p style={{ margin: "0 0 12px", fontSize: 14, color: "#555", lineHeight: 1.7 }}>{selected.desc}</p>
              <div style={{ borderTop: "1px solid #F0EAE4", paddingTop: 12, fontSize: 13, color: "#666", lineHeight: 1.8, borderLeft: `3px solid ${selected.cardBg}`, paddingLeft: 12 }}>
                {selected.tips}
              </div>
            </div>

            {/* Ingredients */}
            <div style={{ background: "#fff", borderRadius: 20, padding: "20px 18px", marginBottom: 14, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <h3 style={{ margin: "0 0 14px", fontSize: 16, fontWeight: 800, color: "#1A1A1A" }}>🛒 재료</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {selected.ingredients.map((ing, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "9px 14px", background: "#F8F3EE", borderRadius: 12 }}>
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
                    background: openStep===i ? "#F8F3EE" : "#FAFAFA",
                    border: `2px solid ${openStep===i ? selected.cardBg : "transparent"}`,
                    borderRadius: 16, padding: "14px 16px", cursor: "pointer", transition: "all 0.2s"
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ background: selected.cardBg, color: "#fff", width: 28, height: 28, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 900, flexShrink: 0 }}>{i+1}</span>
                      <span style={{ fontSize: 16 }}>{step.icon}</span>
                      <span style={{ fontWeight: 700, color: "#333", fontSize: 14, flex: 1 }}>{step.title}</span>
                      <span style={{ color: "#CCC" }}>{openStep===i?"▲":"▼"}</span>
                    </div>
                    {openStep===i && <p style={{ margin: "12px 0 0 38px", fontSize: 14, color: "#555", lineHeight: 1.8 }}>{step.desc}</p>}
                  </div>
                ))}
              </div>
            </div>

            {/* YouTube */}
            <a href={selected.youtube} target="_blank" rel="noopener noreferrer" style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
              background: "#FF0000", color: "#fff", borderRadius: 20, padding: "16px",
              textDecoration: "none", fontWeight: 800, fontSize: 15,
              boxShadow: "0 4px 20px rgba(255,0,0,0.3)", marginBottom: 24
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.8 15.5V8.5l6.3 3.5-6.3 3.5z"/>
              </svg>
              {channelLabel[selected.channel]} 채널 보러가기
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
