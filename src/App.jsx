import { useState } from "react";

const categories = ["전체", "🇰🇷 한식", "🇯🇵 일식", "🌍 양식"];

const menus = [
  {
    id: 1, category: "🇰🇷 한식",
    emoji: "🍳", name: "김치볶음밥",
    tag: "15분 완성", tagColor: "#FFE0E0",
    difficulty: 1, time: "15분",
    desc: "묵은 김치 하나로 뚝딱! 냉장고 재료로 만드는 최고의 야식.",
    color: "#FFF5F5", border: "#FFB3B3", accent: "#FF7070",
    tips: "💡 버터를 먼저 녹인 뒤 김치를 볶으면 감칠맛이 훨씬 깊어져요. 달걀은 반숙으로 터뜨려 비비면 최고!",
    ingredients: [
      { name: "묵은 김치", amount: "1컵 (잘 익은 것일수록 Good!)" },
      { name: "밥", amount: "2공기 (차가운 밥도 OK)" },
      { name: "달걀", amount: "2개" },
      { name: "버터", amount: "1큰술 (없으면 참기름)" },
      { name: "간장", amount: "1작은술" },
      { name: "참기름", amount: "마무리용 약간" },
      { name: "통깨 · 김가루", amount: "취향껏" },
    ],
    steps: [
      { icon: "🔥", title: "김치 볶기", desc: "팬을 중불로 달군 뒤 버터를 녹여요. 김치를 넣고 2~3분간 볶아주세요. 버터가 김치 신맛을 잡아주면서 고소한 향이 올라와요." },
      { icon: "🍚", title: "밥 넣고 볶기", desc: "밥을 넣고 간장 1작은술을 둘러요. 밥알이 뭉치지 않도록 주걱으로 탁탁 누르듯 3~4분간 센불에서 볶아요. 살짝 눌린 부분이 생기면 더 맛있어요!" },
      { icon: "🍳", title: "달걀 프라이", desc: "볶음밥을 한쪽으로 밀어두고, 빈 공간에 달걀을 깨 넣어요. 노른자는 반숙으로 두는 게 포인트! 흰자가 익으면 볶음밥과 살짝 섞어요." },
      { icon: "✨", title: "마무리", desc: "불을 끄고 참기름을 한 바퀴 둘러요. 그릇에 담고 통깨와 김가루를 솔솔 뿌리면 완성! 달걀을 터뜨려 비비면서 먹으면 최고예요 🥄" },
    ],
    youtube: "https://www.youtube.com/results?search_query=킴서울+김치볶음밥",
    imageSvg: "kimchi-rice"
  },
  {
    id: 2, category: "🇰🇷 한식",
    emoji: "🍲", name: "된장찌개",
    tag: "건강 집밥", tagColor: "#D6F5D6",
    difficulty: 2, time: "25분",
    desc: "구수하고 따뜻한 엄마 손맛. 두부와 애호박만 있으면 오늘 저녁 걱정 끝!",
    color: "#F2FFF2", border: "#A8D8A8", accent: "#4CAF50",
    tips: "💡 된장은 끓는 물에 직접 넣지 말고 체에 밭쳐 풀어야 덩어리 없이 깔끔해요. 마지막에 청양고추 한 개 추가하면 칼칼함 업!",
    ingredients: [
      { name: "된장", amount: "2큰술 (집된장이면 더 깊은 맛)" },
      { name: "두부", amount: "반 모 (모두부 또는 부침용)" },
      { name: "애호박", amount: "반 개" },
      { name: "양파", amount: "반 개" },
      { name: "표고버섯 or 느타리버섯", amount: "2~3개 (없어도 OK)" },
      { name: "다진 마늘", amount: "1작은술" },
      { name: "멸치 다시마 육수", amount: "2컵 (티백 육수나 물도 가능)" },
      { name: "청양고추", amount: "1개 (선택)" },
    ],
    steps: [
      { icon: "🔪", title: "재료 썰기", desc: "두부는 1.5cm 두께 사각형으로, 애호박은 반달 모양으로, 양파는 큼직하게 썰어요. 버섯도 한입 크기로 찢거나 썰어 준비해요." },
      { icon: "🍶", title: "육수 끓이기", desc: "냄비에 육수(또는 물 2컵)를 넣고 중불로 끓여요. 끓기 시작하면 된장을 체에 밭쳐 국물에 풀어 넣고 다진 마늘도 함께 넣어요." },
      { icon: "🥦", title: "야채 넣기", desc: "양파, 애호박, 버섯을 먼저 넣고 5분간 끓여요. 야채가 살짝 투명해지면 두부를 넣고 2~3분 더 끓여요." },
      { icon: "🌶️", title: "간 맞추고 마무리", desc: "국물을 한 스푼 떠서 맛을 봐요. 싱거우면 된장을 조금 더 풀거나 국간장으로 간을 맞춰요. 청양고추를 어슷 썰어 넣고 한 번 더 끓이면 완성!" },
    ],
    youtube: "https://www.youtube.com/results?search_query=킴서울+된장찌개",
    imageSvg: "doenjang"
  },
  {
    id: 3, category: "🇰🇷 한식",
    emoji: "🥘", name: "순두부찌개",
    tag: "칼칼 매콤", tagColor: "#FFE0F0",
    difficulty: 2, time: "20분",
    desc: "뚝배기에 보글보글! 부드러운 순두부와 칼칼한 국물의 환상 조합.",
    color: "#FFF0F8", border: "#FFB3D6", accent: "#E91E8C",
    tips: "💡 고춧가루를 먼저 기름에 볶아 고추기름을 만들면 색이 예쁘고 맛이 훨씬 깊어요. 달걀은 불 끄기 직전에 넣어 반숙으로 유지하세요!",
    ingredients: [
      { name: "순두부", amount: "1봉지 (400g)" },
      { name: "달걀", amount: "1개" },
      { name: "바지락 or 새우", amount: "한 줌 (냉동도 OK)" },
      { name: "고춧가루", amount: "1~1.5큰술" },
      { name: "참기름", amount: "1큰술" },
      { name: "다진 마늘", amount: "1큰술" },
      { name: "멸치 다시마 육수", amount: "1.5컵" },
      { name: "국간장", amount: "0.5큰술, 새우젓 0.5큰술" },
    ],
    steps: [
      { icon: "🔥", title: "고추기름 만들기", desc: "냄비 or 뚝배기에 참기름을 두르고, 고춧가루를 넣어 약불에서 30초 볶아요. 기름이 빨갛게 물들면서 고소한 향이 올라와요. 이 단계가 맛의 핵심!" },
      { icon: "🦐", title: "해물 볶기", desc: "다진 마늘과 바지락(또는 새우)을 넣고 1분간 볶아요. 해물에서 감칠맛 나는 즙이 나오기 시작하면 육수를 붓고 중불로 끓여요." },
      { icon: "🫙", title: "순두부 넣기", desc: "국물이 끓어오르면 순두부를 봉지째 짜거나 숟가락으로 덜어 넣어요. 국간장·새우젓으로 간하고 2~3분 더 보글보글 끓여요." },
      { icon: "🥚", title: "달걀로 마무리", desc: "불을 약불로 줄이고 달걀을 깨 넣어요. 노른자가 살짝 반숙이 될 때까지만 기다렸다가 바로 상에 올려요. 대파를 송송 썰어 올리면 완성!" },
    ],
    youtube: "https://www.youtube.com/results?search_query=킴서울+순두부찌개",
    imageSvg: "sundubujjigae"
  },
  {
    id: 4, category: "🇯🇵 일식",
    emoji: "🍜", name: "돈코츠 스타일 라면",
    tag: "든든한 한 끼", tagColor: "#FFF0D0",
    difficulty: 1, time: "10분",
    desc: "집에서 라면 하나로 돈코츠 느낌내기! 우유 한 컵이 비법이에요.",
    color: "#FFFBF0", border: "#FFD580", accent: "#FFA000",
    tips: "💡 우유를 넣으면 국물이 뽀얗고 부드러워져요. 달걀은 찬물에서 7분 삶으면 반숙 완성! 숙주나물을 살짝 데쳐 넣으면 훨씬 풍성해져요.",
    ingredients: [
      { name: "라면", amount: "1봉지 (사리면 추천)" },
      { name: "우유", amount: "200ml" },
      { name: "달걀", amount: "1개 (반숙 준비)" },
      { name: "숙주나물", amount: "한 줌" },
      { name: "대파", amount: "흰 부분 5cm" },
      { name: "참기름 · 통깨", amount: "마무리용" },
      { name: "버터", amount: "0.5큰술" },
    ],
    steps: [
      { icon: "🥚", title: "반숙 달걀 준비", desc: "찬물에 달걀을 넣고 끓기 시작한 후 정확히 7분! 건져서 바로 찬물에 담가야 껍질이 쉽게 벗겨져요." },
      { icon: "🔥", title: "국물 끓이기", desc: "물 1.5컵과 우유 200ml를 함께 끓여요. 수프 스프를 반만 넣고 짠 정도를 체크해요." },
      { icon: "🍝", title: "면 삶기", desc: "국물이 끓으면 면과 숙주나물을 넣어요. 면 포장지보다 30초 짧게 삶아야 탱탱한 식감이 살아요." },
      { icon: "🍥", title: "토핑 올리기", desc: "그릇에 면과 국물을 담고, 반숙 달걀, 대파, 버터 한 조각을 올려요. 참기름을 한 바퀴 둘러주면 향이 살아나요!" },
    ],
    youtube: "https://www.youtube.com/results?search_query=집에서+돈코츠라멘+라면+레시피",
    imageSvg: "ramen"
  },
  {
    id: 5, category: "🇯🇵 일식",
    emoji: "🍱", name: "규동 (소고기 덮밥)",
    tag: "일식 감성", tagColor: "#E8F4FF",
    difficulty: 2, time: "20분",
    desc: "달콤짭짤한 소고기가 밥 위에 듬뿍! 요시노야 부럽지 않은 집밥 규동.",
    color: "#F0F8FF", border: "#90CAF9", accent: "#1976D2",
    tips: "💡 소고기는 얇게 썬 불고기용이 베스트! 설탕 대신 미림을 쓰면 더 정통 규동 맛이 나요. 달걀노른자를 올리면 진짜 일식집 느낌!",
    ingredients: [
      { name: "얇은 소고기 (불고기용)", amount: "200g" },
      { name: "양파", amount: "1개 (채 썰기)" },
      { name: "밥", amount: "2공기" },
      { name: "간장", amount: "3큰술" },
      { name: "미림 or 맛술", amount: "3큰술" },
      { name: "설탕", amount: "1큰술" },
      { name: "물", amount: "100ml" },
      { name: "달걀노른자", amount: "1개 (토핑용)" },
    ],
    steps: [
      { icon: "🧅", title: "양파 볶기", desc: "팬에 약간의 기름을 두르고 채 썬 양파를 중불에서 5분 볶아요. 양파가 투명하고 살짝 갈색빛이 돌면 달달한 맛이 생겨요." },
      { icon: "🥩", title: "소스 만들고 고기 넣기", desc: "간장 + 미림 + 설탕 + 물을 섞어 소스를 만들어요. 양파 위에 소스를 붓고 팔팔 끓인 뒤, 소고기를 펼쳐 넣어요." },
      { icon: "🍖", title: "고기 익히기", desc: "소고기는 색이 변하는 순간 불을 줄이고 소스를 고기 위에 끼얹으며 1~2분만 더 익혀요. 국물이 자작하게 남도록 조절해요." },
      { icon: "🍚", title: "밥 위에 올리기", desc: "그릇에 밥을 담고 소고기와 양파를 듬뿍 올려요. 가운데 달걀노른자를 올리면 완성! 생강 초절임을 곁들이면 진짜 규동 완성 🥢" },
    ],
    youtube: "https://www.youtube.com/results?search_query=집에서+규동+소고기덮밥+레시피",
    imageSvg: "gyudon"
  },
  {
    id: 6, category: "🌍 양식",
    emoji: "🍝", name: "베이컨 크림 파스타",
    tag: "분위기 있는", tagColor: "#EDE0FF",
    difficulty: 2, time: "25분",
    desc: "생크림 없어도 괜찮아요! 우유 + 치즈로 만드는 꾸덕하고 진한 크림 파스타.",
    color: "#F8F0FF", border: "#CE93D8", accent: "#8E24AA",
    tips: "💡 면수(파스타 삶은 물)를 꼭 한 국자 남겨두세요! 소스 농도 맞출 때 아주 요긴하게 써요.",
    ingredients: [
      { name: "파스타면 (스파게티)", amount: "100g" },
      { name: "베이컨", amount: "4줄" },
      { name: "양송이버섯", amount: "3개" },
      { name: "양파", amount: "1/4개" },
      { name: "마늘", amount: "3쪽" },
      { name: "우유", amount: "200ml" },
      { name: "버터", amount: "1큰술" },
      { name: "파마산 치즈 (또는 체다치즈)", amount: "30g" },
      { name: "소금 · 후추", amount: "적당히" },
    ],
    steps: [
      { icon: "💧", title: "면 삶기", desc: "넉넉한 물에 소금을 넣고 끓이다가 파스타를 넣어요. 포장지 시간보다 1~2분 짧게 삶아야 소스에 볶을 때 딱 알맞게 익어요. 면수 한 국자는 꼭 남겨두세요!" },
      { icon: "🥓", title: "베이컨 · 채소 볶기", desc: "팬에 버터를 녹이고 마늘을 약불에서 1분 볶아요. 베이컨을 넣고 바삭하게, 양파·버섯도 넣어 중불에서 3분간 볶아요." },
      { icon: "🥛", title: "크림소스 만들기", desc: "우유를 넣고 중불로 끓여요. 보글보글 끓으면 치즈를 넣고 계속 저어요. 소스가 살짝 걸쭉해지면 삶은 파스타를 넣고 잘 섞어요." },
      { icon: "✨", title: "간 맞추고 완성", desc: "소금·후추로 간하고 파스타가 소스를 충분히 흡수할 때까지 1~2분 더 볶아요. 파마산 치즈를 갈아 올리고 파슬리를 올리면 완성! 🌿" },
    ],
    youtube: "https://www.youtube.com/results?search_query=셰프이원일+크림파스타",
    imageSvg: "pasta"
  },
  {
    id: 7, category: "🌍 양식",
    emoji: "🥩", name: "팬 스테이크 + 버섯 소스",
    tag: "특별한 날", tagColor: "#FFE0D0",
    difficulty: 3, time: "30분",
    desc: "레스토랑 부럽지 않아요! 팬 하나로 만드는 고급진 스테이크 한 상.",
    color: "#FFF5F0", border: "#FFAB91", accent: "#E64A19",
    tips: "💡 고기는 굽기 전 30분 이상 상온에 꺼내두세요. 차가운 상태에서 구우면 겉은 타고 속은 안 익어요!",
    ingredients: [
      { name: "스테이크용 소고기 (안심 or 등심)", amount: "200g (두께 2cm 이상)" },
      { name: "버터", amount: "2큰술" },
      { name: "마늘", amount: "3쪽 (통으로)" },
      { name: "로즈마리 or 타임", amount: "1가지 (없어도 OK)" },
      { name: "양송이버섯", amount: "5개" },
      { name: "생크림 or 우유", amount: "100ml" },
      { name: "간장", amount: "1큰술 (소스용)" },
      { name: "소금 · 후추", amount: "굵은 소금이면 더 좋아요" },
    ],
    steps: [
      { icon: "🥩", title: "고기 준비", desc: "굽기 30분 전에 냉장고에서 꺼내 상온 보관! 키친타월로 표면 물기를 꼼꼼히 닦고, 굵은 소금과 후추를 앞뒤로 넉넉히 뿌려요." },
      { icon: "🔥", title: "센불에 굽기 (시어링)", desc: "팬을 완전히 달궈 연기가 올라올 정도로 예열! 기름을 살짝 두르고 앞면 2분 → 뒷면 2분. 절대 누르지 마세요! 육즙이 다 빠져나와요." },
      { icon: "🧈", title: "버터 배스팅", desc: "불을 약불로 줄이고 버터 + 통마늘 + 허브를 넣어요. 녹은 버터를 숟가락으로 고기 위에 계속 끼얹어요. 1분간 반복하면 고기가 윤기 나고 향긋해져요." },
      { icon: "🍄", title: "버섯 소스 & 휴지", desc: "고기를 꺼내 5분 휴지! 같은 팬에 버섯을 볶다가 우유 + 간장 + 남은 버터를 넣고 끓여 소스를 만들어요. 고기를 썰어 담고 소스를 끼얹으면 완성! 🍷" },
    ],
    youtube: "https://www.youtube.com/results?search_query=셰프이원일+팬스테이크",
    imageSvg: "steak"
  },
];

const illustrations = {
  "kimchi-rice": `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><ellipse cx="60" cy="85" rx="48" ry="14" fill="#E8B89A" opacity="0.4"/><ellipse cx="60" cy="80" rx="46" ry="28" fill="#F5DEB3"/><ellipse cx="60" cy="72" rx="40" ry="22" fill="#FFFDE7"/><ellipse cx="60" cy="70" rx="36" ry="18" fill="#FFF9C4"/><ellipse cx="45" cy="65" rx="8" ry="5" fill="#EF5350" opacity="0.85"/><ellipse cx="62" cy="60" rx="10" ry="6" fill="#EF5350" opacity="0.8"/><ellipse cx="75" cy="67" rx="7" ry="4" fill="#EF5350" opacity="0.7"/><ellipse cx="55" cy="72" rx="6" ry="4" fill="#EF5350" opacity="0.75"/><circle cx="70" cy="55" r="14" fill="#FFFDE7" stroke="#FFD54F" stroke-width="2"/><circle cx="70" cy="55" r="8" fill="#FFD600"/><circle cx="68" cy="53" r="2" fill="#FFF176" opacity="0.8"/></svg>`,
  "doenjang": `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><path d="M22 55 Q22 97 60 97 Q98 97 98 55 Z" fill="#FFF8E1"/><ellipse cx="60" cy="55" rx="38" ry="16" fill="#8FBC8F" opacity="0.6"/><circle cx="45" cy="52" r="5" fill="#FFFFFF" opacity="0.9"/><circle cx="60" cy="48" r="6" fill="#FFFFFF" opacity="0.85"/><circle cx="74" cy="53" r="4" fill="#FFFFFF" opacity="0.9"/><circle cx="50" cy="60" r="4" fill="#228B22" opacity="0.7"/><circle cx="68" cy="57" r="5" fill="#228B22" opacity="0.6"/><rect x="52" y="20" width="16" height="38" rx="8" fill="#C8A97A"/></svg>`,
  "sundubujjigae": `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><path d="M20 60 Q20 98 60 98 Q100 98 100 60 Z" fill="#FF5252" opacity="0.15"/><ellipse cx="60" cy="60" rx="40" ry="16" fill="#FF7043" opacity="0.5"/><ellipse cx="44" cy="58" rx="9" ry="6" fill="#FFFFFF" opacity="0.9"/><ellipse cx="62" cy="54" rx="11" ry="7" fill="#FFFFFF" opacity="0.85"/><ellipse cx="76" cy="60" rx="8" ry="5" fill="#FFFFFF" opacity="0.9"/><circle cx="60" cy="52" r="7" fill="#FFEB3B" opacity="0.85"/><circle cx="60" cy="52" r="4" fill="#FF6F00" opacity="0.9"/><rect x="52" y="22" width="16" height="40" rx="8" fill="#8B4513" opacity="0.6"/></svg>`,
  "ramen": `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><path d="M18 60 Q18 96 60 96 Q102 96 102 60 Z" fill="#FFF8E1"/><path d="M28 58 Q40 52 52 60 Q64 68 76 58 Q88 50 96 58" stroke="#E8B88A" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M30 63 Q42 57 54 65 Q66 73 78 63 Q88 55 96 63" stroke="#E8B88A" stroke-width="3" fill="none" stroke-linecap="round"/><ellipse cx="42" cy="55" rx="10" ry="6" fill="#FFCCBC" opacity="0.9"/><circle cx="74" cy="52" r="8" fill="#FFFDE7" stroke="#FFD54F" stroke-width="1.5"/><circle cx="74" cy="52" r="5" fill="#FFD600" opacity="0.9"/></svg>`,
  "gyudon": `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><ellipse cx="60" cy="82" rx="44" ry="20" fill="#F5DEB3"/><ellipse cx="60" cy="68" rx="34" ry="12" fill="#FFF9C4"/><ellipse cx="46" cy="63" rx="12" ry="7" fill="#8B4513" opacity="0.75"/><ellipse cx="63" cy="58" rx="14" ry="8" fill="#A0522D" opacity="0.8"/><ellipse cx="76" cy="64" rx="11" ry="6" fill="#8B4513" opacity="0.7"/><circle cx="72" cy="54" r="8" fill="#FFFDE7" stroke="#FFD54F" stroke-width="1.5"/><circle cx="72" cy="54" r="5" fill="#FF8F00" opacity="0.85"/></svg>`,
  "pasta": `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><path d="M16 65 Q16 98 60 98 Q104 98 104 65 Z" fill="#FFF9C4" opacity="0.8"/><path d="M25 62 C35 55 45 72 55 62 C65 52 75 70 85 62 C90 58 94 62 96 62" stroke="#F5CBA7" stroke-width="3.5" fill="none" stroke-linecap="round"/><path d="M28 68 C38 61 48 78 58 68 C68 58 78 76 88 68" stroke="#F5CBA7" stroke-width="3.5" fill="none" stroke-linecap="round"/><path d="M30 74 C40 67 50 80 60 74 C70 68 78 78 86 74" stroke="#F5CBA7" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="66" cy="56" r="7" fill="#FFCCBC" opacity="0.85"/><circle cx="42" cy="66" r="4" fill="#A5D6A7" opacity="0.9"/></svg>`,
  "steak": `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><ellipse cx="60" cy="72" rx="42" ry="20" fill="#5D4037"/><ellipse cx="60" cy="68" rx="34" ry="14" fill="#8D6E63"/><ellipse cx="60" cy="65" rx="20" ry="8" fill="#A1887F" opacity="0.5"/><ellipse cx="40" cy="80" rx="12" ry="8" fill="#4CAF50" opacity="0.85"/><ellipse cx="82" cy="78" rx="10" ry="7" fill="#81C784" opacity="0.8"/></svg>`
};

const DifficultyBar = ({ level }) => (
  <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
    {[1,2,3].map(i => (
      <div key={i} style={{
        width: 18, height: 8, borderRadius: 4,
        background: i <= level ? "#FF7BAC" : "#F0D0D8"
      }}/>
    ))}
    <span style={{ fontSize: 11, color: "#999", marginLeft: 4 }}>
      {level === 1 ? "쉬움" : level === 2 ? "보통" : "어려움"}
    </span>
  </div>
);

export default function App() {
  const [selected, setSelected] = useState(null);
  const [activeCategory, setActiveCategory] = useState("전체");
  const [liked, setLiked] = useState({});
  const [openStep, setOpenStep] = useState(null);

  const filtered = activeCategory === "전체" ? menus : menus.filter(m => m.category === activeCategory);

  const toggleLike = (id, e) => {
    e.stopPropagation();
    setLiked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(160deg, #FFF0F5 0%, #F0F5FF 55%, #F5FFF0 100%)",
      fontFamily: "'Segoe UI', 'Apple SD Gothic Neo', sans-serif",
      paddingBottom: 48,
    }}>
      <div style={{
        textAlign: "center", padding: "30px 20px 18px",
        background: "rgba(255,255,255,0.7)", backdropFilter: "blur(12px)",
        borderBottom: "2px dashed #FFD6E8", marginBottom: 20,
        position: "sticky", top: 0, zIndex: 100
      }}>
        <div style={{ fontSize: 36, marginBottom: 4 }}>🍽️</div>
        <h1 style={{ margin: 0, fontSize: 24, fontWeight: 900, color: "#FF7BAC" }}>오늘 뭐 먹지?</h1>
        <p style={{ margin: "6px 0 14px", color: "#BBB", fontSize: 13 }}>집에서 만드는 든든한 저녁 레시피 🌙</p>
        {!selected && (
          <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} style={{
                padding: "6px 16px", borderRadius: 20,
                border: activeCategory === cat ? "2px solid #FF7BAC" : "2px solid #F0D0DA",
                background: activeCategory === cat ? "#FF7BAC" : "white",
                color: activeCategory === cat ? "white" : "#FF7BAC",
                fontWeight: 700, fontSize: 13, cursor: "pointer"
              }}>{cat}</button>
            ))}
          </div>
        )}
      </div>

      {!selected && (
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 18, padding: "0 18px", maxWidth: 980, margin: "0 auto"
        }}>
          {filtered.map(menu => (
            <div key={menu.id} onClick={() => { setSelected(menu); setOpenStep(null); }}
              style={{
                background: menu.color, border: `2px solid ${menu.border}`,
                borderRadius: 24, overflow: "hidden", cursor: "pointer",
                boxShadow: "0 4px 16px rgba(0,0,0,0.06)", transition: "transform 0.15s, box-shadow 0.15s"
              }}
              onMouseEnter={e => { e.currentTarget.style.transform="translateY(-5px)"; e.currentTarget.style.boxShadow="0 10px 28px rgba(0,0,0,0.11)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="0 4px 16px rgba(0,0,0,0.06)"; }}
            >
              <div style={{
                height: 130, background: `linear-gradient(135deg,${menu.border}55,${menu.border}22)`,
                display: "flex", alignItems: "center", justifyContent: "center", position: "relative"
              }}>
                <div style={{ width: 120, height: 120 }} dangerouslySetInnerHTML={{ __html: illustrations[menu.imageSvg] }}/>
                <button onClick={e=>toggleLike(menu.id,e)} style={{
                  position:"absolute", top:10, right:12, background:"rgba(255,255,255,0.8)",
                  border:"none", borderRadius:"50%", width:32, height:32, cursor:"pointer", fontSize:16
                }}>{liked[menu.id] ? "❤️" : "🤍"}</button>
                <span style={{
                  position:"absolute", top:10, left:12, background:"rgba(255,255,255,0.85)",
                  borderRadius:12, padding:"2px 10px", fontSize:11, fontWeight:700, color:"#777"
                }}>{menu.category}</span>
              </div>
              <div style={{ padding: "16px 18px 18px" }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:8 }}>
                  <span style={{ background:menu.tagColor, padding:"3px 10px", borderRadius:20, fontSize:11, fontWeight:700, color:"#666" }}>{menu.tag}</span>
                  <span style={{ fontSize:12, color:"#AAA" }}>⏱ {menu.time}</span>
                </div>
                <h2 style={{ margin:"0 0 6px", fontSize:19, fontWeight:800, color:"#333" }}>{menu.emoji} {menu.name}</h2>
                <p style={{ margin:"0 0 12px", fontSize:13, color:"#888", lineHeight:1.6 }}>{menu.desc}</p>
                <DifficultyBar level={menu.difficulty}/>
              </div>
            </div>
          ))}
        </div>
      )}

      {selected && (
        <div style={{ maxWidth: 600, margin: "0 auto", padding: "0 16px" }}>
          <button onClick={() => setSelected(null)} style={{
            background:"white", border:`2px solid ${selected.border}`, borderRadius:20,
            padding:"8px 18px", cursor:"pointer", fontSize:13, color:selected.accent,
            fontWeight:700, marginBottom:16
          }}>← 목록으로</button>

          <div style={{ borderRadius:28, overflow:"hidden", border:`2px solid ${selected.border}`, boxShadow:"0 6px 24px rgba(0,0,0,0.08)", marginBottom:16 }}>
            <div style={{ height:180, background:`linear-gradient(135deg,${selected.border}77,${selected.border}33)`, display:"flex", alignItems:"center", justifyContent:"center" }}>
              <div style={{width:160, height:160}} dangerouslySetInnerHTML={{__html:illustrations[selected.imageSvg]}}/>
            </div>
            <div style={{ background:selected.color, padding:"20px 22px 22px" }}>
              <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:8}}>
                <span style={{background:selected.tagColor, padding:"3px 12px", borderRadius:20, fontSize:12, fontWeight:700, color:"#666"}}>{selected.tag}</span>
                <span style={{fontSize:13, color:"#AAA"}}>⏱ {selected.time}</span>
              </div>
              <h2 style={{margin:"0 0 6px", fontSize:26, fontWeight:900, color:"#333"}}>{selected.emoji} {selected.name}</h2>
              <p style={{margin:"0 0 12px", fontSize:14, color:"#777", lineHeight:1.7}}>{selected.desc}</p>
              <DifficultyBar level={selected.difficulty}/>
              <div style={{ marginTop:14, background:"rgba(255,255,255,0.75)", borderRadius:14, padding:"12px 16px", fontSize:13, color:"#666", lineHeight:1.7, border:`1.5px dashed ${selected.border}` }}>{selected.tips}</div>
            </div>
          </div>

          <div style={{ background:"white", borderRadius:22, padding:"20px 22px", marginBottom:14, border:`2px solid ${selected.border}`, boxShadow:"0 3px 12px rgba(0,0,0,0.05)" }}>
            <h3 style={{margin:"0 0 14px", fontSize:16, fontWeight:800, color:"#444"}}>🛒 재료 <span style={{fontSize:12, fontWeight:500, color:"#AAA"}}>(2인분 기준)</span></h3>
            <div style={{display:"flex", flexDirection:"column", gap:8}}>
              {selected.ingredients.map((ing, i) => (
                <div key={i} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", background:selected.color, borderRadius:12, padding:"9px 14px" }}>
                  <span style={{fontWeight:700, color:"#444", fontSize:14}}>{ing.name}</span>
                  <span style={{color:"#888", fontSize:13}}>{ing.amount}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background:"white", borderRadius:22, padding:"20px 22px", marginBottom:16, border:`2px solid ${selected.border}`, boxShadow:"0 3px 12px rgba(0,0,0,0.05)" }}>
            <h3 style={{margin:"0 0 14px", fontSize:16, fontWeight:800, color:"#444"}}>👩‍🍳 만드는 법</h3>
            <div style={{display:"flex", flexDirection:"column", gap:10}}>
              {selected.steps.map((step, i) => (
                <div key={i} onClick={() => setOpenStep(openStep===i ? null : i)}
                  style={{ background: openStep===i ? selected.color : "#FAFAFA", border:`1.5px solid ${openStep===i ? selected.border : "#F0F0F0"}`, borderRadius:16, padding:"14px 16px", cursor:"pointer" }}
                >
                  <div style={{display:"flex", alignItems:"center", gap:12}}>
                    <span style={{ background:selected.accent, color:"white", width:28, height:28, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", fontSize:13, fontWeight:900, flexShrink:0 }}>{i+1}</span>
                    <span style={{fontSize:16}}>{step.icon}</span>
                    <span style={{fontWeight:700, color:"#333", fontSize:14, flex:1}}>{step.title}</span>
                    <span style={{color:"#CCC"}}>{openStep===i ? "▲" : "▼"}</span>
                  </div>
                  {openStep===i && <p style={{margin:"12px 0 0 40px", fontSize:14, color:"#666", lineHeight:1.8}}>{step.desc}</p>}
                </div>
              ))}
            </div>
          </div>

          <a href={selected.youtube} target="_blank" rel="noopener noreferrer"
            style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:10, background:"linear-gradient(135deg,#FF4444,#FF1111)", color:"white", borderRadius:20, padding:"15px 20px", textDecoration:"none", fontWeight:800, fontSize:15, boxShadow:"0 4px 18px rgba(255,68,68,0.38)" }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.8 15.5V8.5l6.3 3.5-6.3 3.5z"/>
            </svg>
            유튜브에서 영상 보기
          </a>
        </div>
      )}
    </div>
  );
}