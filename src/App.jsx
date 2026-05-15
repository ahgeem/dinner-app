import { useState } from "react";

const categories = ["전체", "🇰🇷 한식", "🇯🇵 일식", "🌍 양식"];
const FONT = "'Nanum Gothic', 'Apple SD Gothic Neo', sans-serif";

const channelColors = {
  "김밀란": "#1B4332", "정육왕": "#7B2D00",
  "은수저": "#1A237E", "육식맨": "#B71C1C",
  "킴서울": "#4A148C", "셰프이원일": "#004D40",
};
const channelLabel = {
  "김밀란": "🍝 김밀란", "정육왕": "🥩 정육왕",
  "은수저": "🥄 은수저", "육식맨": "🔥 육식맨",
  "킴서울": "🍳 킴서울", "셰프이원일": "👨‍🍳 셰프이원일",
};

const illustrations = {
  "kimchi-rice": `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><ellipse cx="60" cy="85" rx="48" ry="14" fill="#E8B89A" opacity="0.4"/><ellipse cx="60" cy="80" rx="46" ry="28" fill="#F5DEB3"/><ellipse cx="60" cy="72" rx="40" ry="22" fill="#FFFDE7"/><ellipse cx="60" cy="70" rx="36" ry="18" fill="#FFF9C4"/><ellipse cx="45" cy="65" rx="8" ry="5" fill="#EF5350" opacity="0.85"/><ellipse cx="62" cy="60" rx="10" ry="6" fill="#EF5350" opacity="0.8"/><ellipse cx="75" cy="67" rx="7" ry="4" fill="#EF5350" opacity="0.7"/><ellipse cx="55" cy="72" rx="6" ry="4" fill="#EF5350" opacity="0.75"/><circle cx="70" cy="55" r="14" fill="#FFFDE7" stroke="#FFD54F" stroke-width="2"/><circle cx="70" cy="55" r="8" fill="#FFD600"/><circle cx="68" cy="53" r="2" fill="#FFF176" opacity="0.8"/></svg>`,
  "doenjang": `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><path d="M22 55 Q22 97 60 97 Q98 97 98 55 Z" fill="#FFF8E1"/><ellipse cx="60" cy="55" rx="38" ry="16" fill="#8FBC8F" opacity="0.6"/><circle cx="45" cy="52" r="5" fill="#FFFFFF" opacity="0.9"/><circle cx="60" cy="48" r="6" fill="#FFFFFF" opacity="0.85"/><circle cx="74" cy="53" r="4" fill="#FFFFFF" opacity="0.9"/><circle cx="50" cy="60" r="4" fill="#228B22" opacity="0.7"/><circle cx="68" cy="57" r="5" fill="#228B22" opacity="0.6"/><rect x="52" y="20" width="16" height="38" rx="8" fill="#C8A97A"/></svg>`,
  "daepae": `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><ellipse cx="60" cy="88" rx="44" ry="12" fill="#FF8C00" opacity="0.2"/><rect x="20" y="52" width="80" height="40" rx="12" fill="#FFF3E0"/><ellipse cx="60" cy="52" rx="40" ry="14" fill="#FFCC80"/><ellipse cx="48" cy="50" rx="12" ry="7" fill="#FF7043" opacity="0.8"/><ellipse cx="65" cy="46" rx="14" ry="8" fill="#FF5722" opacity="0.7"/><ellipse cx="76" cy="52" rx="10" ry="6" fill="#FF7043" opacity="0.75"/><ellipse cx="38" cy="58" rx="8" ry="4" fill="#66BB6A" opacity="0.7"/><ellipse cx="72" cy="60" rx="7" ry="3.5" fill="#66BB6A" opacity="0.6"/></svg>`,
  "beef-soup": `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><path d="M18 58 Q18 96 60 96 Q102 96 102 58 Z" fill="#FFF8E1"/><ellipse cx="60" cy="58" rx="42" ry="16" fill="#D4A574" opacity="0.5"/><ellipse cx="44" cy="56" rx="10" ry="6" fill="#8B4513" opacity="0.7"/><ellipse cx="62" cy="52" rx="12" ry="7" fill="#795548" opacity="0.6"/><ellipse cx="76" cy="58" rx="9" ry="5" fill="#8B4513" opacity="0.65"/><ellipse cx="52" cy="64" rx="8" ry="4" fill="#FFFFFF" opacity="0.7"/><ellipse cx="68" cy="62" rx="7" ry="3.5" fill="#FFFFFF" opacity="0.6"/><path d="M48 30 Q52 22 56 30" stroke="#81C784" stroke-width="2" fill="none"/><path d="M56 28 Q60 20 64 28" stroke="#66BB6A" stroke-width="2" fill="none"/></svg>`,
  "crispy-samgyup": `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><ellipse cx="60" cy="88" rx="44" ry="12" fill="#8B0000" opacity="0.15"/><rect x="22" y="50" width="76" height="38" rx="14" fill="#5D4037"/><rect x="26" y="50" width="68" height="32" rx="10" fill="#795548"/><rect x="30" y="52" width="60" height="24" rx="8" fill="#A1887F"/><ellipse cx="44" cy="58" rx="8" ry="4" fill="#FFAB91" opacity="0.7"/><ellipse cx="60" cy="55" rx="10" ry="4.5" fill="#FFAB91" opacity="0.6"/><ellipse cx="75" cy="59" rx="7" ry="3.5" fill="#FFAB91" opacity="0.65"/><ellipse cx="36" cy="78" rx="10" ry="7" fill="#66BB6A" opacity="0.85"/><ellipse cx="82" cy="76" rx="9" ry="6" fill="#81C784" opacity="0.8"/></svg>`,
  "sundubujjigae": `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><path d="M20 60 Q20 98 60 98 Q100 98 100 60 Z" fill="#FF5252" opacity="0.15"/><ellipse cx="60" cy="60" rx="40" ry="16" fill="#FF7043" opacity="0.5"/><ellipse cx="44" cy="58" rx="9" ry="6" fill="#FFFFFF" opacity="0.9"/><ellipse cx="62" cy="54" rx="11" ry="7" fill="#FFFFFF" opacity="0.85"/><ellipse cx="76" cy="60" rx="8" ry="5" fill="#FFFFFF" opacity="0.9"/><circle cx="60" cy="52" r="7" fill="#FFEB3B" opacity="0.85"/><circle cx="60" cy="52" r="4" fill="#FF6F00" opacity="0.9"/><rect x="52" y="22" width="16" height="40" rx="8" fill="#8B4513" opacity="0.6"/></svg>`,
  "ramen": `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><path d="M18 60 Q18 96 60 96 Q102 96 102 60 Z" fill="#FFF8E1"/><path d="M28 58 Q40 52 52 60 Q64 68 76 58 Q88 50 96 58" stroke="#E8B88A" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M30 63 Q42 57 54 65 Q66 73 78 63 Q88 55 96 63" stroke="#E8B88A" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M32 68 Q44 62 56 70 Q66 76 76 68" stroke="#E8B88A" stroke-width="2.5" fill="none" stroke-linecap="round"/><ellipse cx="42" cy="55" rx="10" ry="6" fill="#FFCCBC" opacity="0.9"/><circle cx="74" cy="52" r="8" fill="#FFFDE7" stroke="#FFD54F" stroke-width="1.5"/><circle cx="74" cy="52" r="5" fill="#FFD600" opacity="0.9"/><path d="M56 30 Q60 22 64 30" stroke="#81C784" stroke-width="2" fill="none"/><path d="M52 28 Q56 20 60 28" stroke="#66BB6A" stroke-width="2" fill="none"/></svg>`,
  "gyudon": `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><ellipse cx="60" cy="82" rx="44" ry="20" fill="#F5DEB3"/><ellipse cx="60" cy="68" rx="34" ry="12" fill="#FFF9C4"/><ellipse cx="46" cy="63" rx="12" ry="7" fill="#8B4513" opacity="0.75"/><ellipse cx="63" cy="58" rx="14" ry="8" fill="#A0522D" opacity="0.8"/><ellipse cx="76" cy="64" rx="11" ry="6" fill="#8B4513" opacity="0.7"/><circle cx="72" cy="54" r="8" fill="#FFFDE7" stroke="#FFD54F" stroke-width="1.5"/><circle cx="72" cy="54" r="5" fill="#FF8F00" opacity="0.85"/></svg>`,
  "aglio": `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><path d="M16 65 Q16 98 60 98 Q104 98 104 65 Z" fill="#FFF9C4" opacity="0.8"/><path d="M25 62 C35 55 45 72 55 62 C65 52 75 70 85 62 C90 58 94 62 96 62" stroke="#F5CBA7" stroke-width="3.5" fill="none" stroke-linecap="round"/><path d="M28 68 C38 61 48 78 58 68 C68 58 78 76 88 68" stroke="#F5CBA7" stroke-width="3.5" fill="none" stroke-linecap="round"/><circle cx="42" cy="62" r="5" fill="#DEB887" opacity="0.8"/><circle cx="66" cy="58" r="6" fill="#DEB887" opacity="0.75"/><circle cx="42" cy="68" r="4" fill="#A5D6A7" opacity="0.9"/><circle cx="70" cy="70" r="4" fill="#A5D6A7" opacity="0.85"/></svg>`,
  "vongole": `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><path d="M16 65 Q16 98 60 98 Q104 98 104 65 Z" fill="#FFF9E6"/><path d="M25 62 C38 55 50 70 62 60 C74 50 84 68 96 60" stroke="#F0C070" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M28 68 C40 61 52 76 64 66 C76 56 86 72 96 66" stroke="#F0C070" stroke-width="3" fill="none" stroke-linecap="round"/><ellipse cx="40" cy="60" rx="8" ry="5" fill="#D2B48C" opacity="0.8"/><ellipse cx="55" cy="56" rx="7" ry="4" fill="#C8A060" opacity="0.8" transform="rotate(-15,55,56)"/><ellipse cx="70" cy="58" rx="8" ry="5" fill="#D2B48C" opacity="0.75"/><circle cx="44" cy="68" r="3" fill="#A5D6A7" opacity="0.9"/></svg>`,
  "carbonara": `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><path d="M16 65 Q16 98 60 98 Q104 98 104 65 Z" fill="#FFFDE7"/><path d="M25 60 C35 53 48 70 60 60 C72 50 82 68 96 60" stroke="#F5DEB3" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M28 67 C38 60 50 77 62 67 C74 57 84 73 96 67" stroke="#F5DEB3" stroke-width="3.5" fill="none" stroke-linecap="round"/><ellipse cx="42" cy="58" rx="9" ry="5" fill="#8B4513" opacity="0.7"/><ellipse cx="65" cy="55" rx="8" ry="4" fill="#795548" opacity="0.65"/><circle cx="50" cy="50" r="6" fill="#FFD700" opacity="0.5"/></svg>`,
  "steak": `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><ellipse cx="60" cy="88" rx="46" ry="12" fill="#5D4037" opacity="0.2"/><ellipse cx="60" cy="72" rx="42" ry="20" fill="#5D4037"/><ellipse cx="60" cy="68" rx="34" ry="14" fill="#8D6E63"/><ellipse cx="60" cy="65" rx="20" ry="8" fill="#A1887F" opacity="0.5"/><ellipse cx="40" cy="80" rx="12" ry="8" fill="#4CAF50" opacity="0.85"/><ellipse cx="82" cy="78" rx="10" ry="7" fill="#81C784" opacity="0.8"/></svg>`,
};

const menus = [
  { id:1, category:"🇰🇷 한식", channel:"킴서울", name:"김치볶음밥", time:"15분", difficulty:1,
    desc:"묵은 김치 하나로 뚝딱! 버터 한 조각이 감칠맛의 비결.", color:"#FFF5F5", border:"#FFB3B3", accent:"#FF7070", tag:"15분 완성", tagBg:"#FFE0E0", imageSvg:"kimchi-rice",
    tips:"💡 김치는 신맛이 강한 묵은지일수록 볶음밥이 맛있어요. 버터를 먼저 녹인 뒤 김치를 넣으면 신맛은 잡고 고소함은 올라가요. 달걀은 완전히 익히지 말고 반숙 상태로 두었다가 밥에 터뜨려 비비면서 먹으면 정말 맛있어요!",
    ingredients:[{name:"묵은 김치",amount:"1컵 (신맛 강한 것)"},{name:"밥",amount:"2공기 (차가운 밥도 OK)"},{name:"달걀",amount:"2개"},{name:"버터",amount:"1큰술 (없으면 참기름)"},{name:"간장",amount:"1작은술"},{name:"참기름·통깨·김가루",amount:"마무리용"}],
    steps:[
      {icon:"🔥",title:"버터에 김치 볶기",desc:"팬을 중불로 달군 뒤 버터 1큰술을 넣어요. 버터가 완전히 녹으면 김치를 넣고 2~3분간 볶아요. 김치가 기름을 머금으면서 볶음 특유의 고소한 향이 올라오는데, 이때 김치 색이 짙어지고 약간 투명해지면 다음 단계로 넘어가요."},
      {icon:"🍚",title:"밥 넣고 센불에 볶기",desc:"볶은 김치 위에 밥을 넣고 간장 1작은술을 둘러요. 주걱으로 밥알이 뭉치지 않도록 탁탁 누르고 펼치면서 센불에서 3~4분 볶아요. 바닥에 살짝 눌어붙는 부분이 생기면 더 맛있어요. 고슬고슬하게 볶이면 OK!"},
      {icon:"🍳",title:"달걀 반숙으로 익히기",desc:"볶음밥을 팬 한쪽으로 밀어두고, 빈 공간에 달걀을 깨 넣어요. 흰자 테두리가 익기 시작하면 노른자 주변을 살짝 저어서 반숙 상태를 만들어요. 완전히 익히면 나중에 비볐을 때 뻑뻑해지니까 촉촉한 반숙이 포인트예요!"},
      {icon:"✨",title:"마무리 & 플레이팅",desc:"불을 끄고 참기름을 팬 가장자리를 따라 한 바퀴 둘러요. 그릇에 담고 통깨와 김가루를 솔솔 뿌려요. 먹을 때 달걀을 터뜨려서 밥에 골고루 비비며 먹으면 노른자가 소스 역할을 해서 정말 맛있어요 🥄"}
    ],
    youtube:"https://www.youtube.com/@%ED%82%B4%EC%84%9C%EC%9A%B8" },

  { id:2, category:"🇰🇷 한식", channel:"킴서울", name:"된장찌개", time:"25분", difficulty:2,
    desc:"구수하고 따뜻한 엄마 손맛. 두부와 애호박만 있으면 완성!", color:"#F2FFF2", border:"#A8D8A8", accent:"#2E7D32", tag:"건강 집밥", tagBg:"#D6F5D6", imageSvg:"doenjang",
    tips:"💡 된장을 끓는 물에 직접 덩어리째 넣으면 잘 안 풀려요. 반드시 체나 숟가락으로 으깨면서 육수에 풀어야 국물이 부드럽고 깔끔해요. 집된장이 있으면 시판 된장보다 훨씬 깊은 맛이 나요!",
    ingredients:[{name:"된장",amount:"2큰술 (집된장 추천)"},{name:"두부 (모두부)",amount:"반 모"},{name:"애호박",amount:"반 개"},{name:"양파",amount:"반 개"},{name:"표고버섯",amount:"2개 (없어도 OK)"},{name:"다진 마늘",amount:"1작은술"},{name:"멸치 다시마 육수",amount:"2컵 (없으면 물)"},{name:"청양고추",amount:"1개 (선택)"}],
    steps:[
      {icon:"🔪",title:"재료 썰기",desc:"두부는 1.5cm 두께의 사각형으로, 애호박은 반달 모양으로, 양파는 큼직하게 썰어요. 버섯은 한입 크기로 찢거나 썰어요. 청양고추를 넣으면 칼칼하고 시원한 맛이 나는데, 이건 취향껏 결정해요."},
      {icon:"🍶",title:"육수 끓이고 된장 풀기",desc:"냄비에 멸치 다시마 육수(또는 물) 2컵을 넣고 중불로 끓여요. 끓기 시작하면 된장 2큰술을 체에 밭쳐 국물에 풀어 넣어요. 덩어리가 남으면 숟가락으로 눌러서 완전히 녹여요. 다진 마늘도 이때 함께 넣어요."},
      {icon:"🥦",title:"야채 넣고 끓이기",desc:"양파, 애호박, 버섯을 넣고 5분간 중불에서 끓여요. 야채가 살짝 투명해지면서 부드러워지면 두부를 조심스럽게 넣어요. 두부는 너무 오래 끓이면 속이 뚫리고 식감이 나빠지니까 2~3분만 더 끓여요."},
      {icon:"🌶️",title:"간 맞추고 마무리",desc:"국물을 한 스푼 떠서 맛을 봐요. 싱거우면 된장을 조금 더 풀거나 국간장으로 간을 맞춰요. 청양고추를 어슷 썰어 넣고 한 번 더 끓이면 완성! 뚝배기에 담아 올리면 더 맛있어요 🍲"}
    ],
    youtube:"https://www.youtube.com/@%ED%82%B4%EC%84%9C%EC%9A%B8" },

  { id:3, category:"🇰🇷 한식", channel:"정육왕", name:"대패삼겹 파김치볶음", time:"20분", difficulty:1,
    desc:"정육왕 스타일! 대패삼겹살과 파김치의 환상 조합.", color:"#FFF8F0", border:"#FFCC80", accent:"#E65100", tag:"빠른 요리", tagBg:"#FFE0B2", imageSvg:"daepae",
    tips:"💡 대패삼겹살은 기름기가 있어서 식용유를 따로 두르지 않아도 돼요. 파김치가 없을 땐 잘 익은 김치에 대파를 송송 썰어 넣으면 비슷한 맛이 나요. 센불에서 빠르게 볶아야 고기가 질겨지지 않아요!",
    ingredients:[{name:"대패삼겹살",amount:"200g"},{name:"파김치 (없으면 묵은김치+대파)",amount:"1컵"},{name:"고추장",amount:"1큰술"},{name:"간장",amount:"1큰술"},{name:"설탕",amount:"0.5작은술 (선택)"},{name:"참기름·통깨",amount:"마무리용"},{name:"밥",amount:"2공기"}],
    steps:[
      {icon:"🔥",title:"파김치 먼저 볶기",desc:"식용유 없이 팬에 파김치를 먼저 넣고 중불에서 볶아요. 파김치에서 수분이 날아가면서 볶음 특유의 구수한 향이 올라와요. 1~2분 정도 볶아서 파김치가 살짝 익으면 다음 단계로 넘어가요."},
      {icon:"🥩",title:"대패삼겹살 넣고 센불에 볶기",desc:"대패삼겹살을 펼쳐 넣고 센불로 올려요. 고기가 겹치지 않게 넓게 펼쳐야 골고루 익어요. 고기에서 기름이 나오면서 파김치와 섞이는데, 이때 색이 변하기 시작하면 고추장과 간장을 넣어요."},
      {icon:"🌶️",title:"양념 넣고 캐러멜라이징",desc:"고추장 1큰술 + 간장 1큰술을 넣고 빠르게 섞어요. 양념이 골고루 입혀지면 센불에서 1~2분 더 볶아요. 이때 양념이 살짝 탈 듯 볶아야 맛있는 '불맛'이 생겨요. 양념 색이 진해지고 윤기가 나면 완성 신호!"},
      {icon:"✨",title:"마무리 & 밥에 올리기",desc:"불을 끄고 참기름 한 바퀴, 통깨 솔솔 뿌려요. 뜨거운 밥 위에 올려서 고추장을 조금 더 추가해 비벼 먹으면 세상에서 제일 맛있는 한 끼가 완성돼요. 상추에 싸먹어도 너무 맛있어요! 🥬"}
    ],
    youtube:"https://www.youtube.com/@meatcreator" },

  { id:4, category:"🇰🇷 한식", channel:"정육왕", name:"소고기 뭇국", time:"30분", difficulty:2,
    desc:"정육왕 고기 손질법으로 만드는 깊고 구수한 소고기 뭇국.", color:"#FFF8F0", border:"#FFAB91", accent:"#BF360C", tag:"해장 최고", tagBg:"#FFE0D0", imageSvg:"beef-soup",
    tips:"💡 소고기는 굽기 전 찬물에 30분 이상 담가 핏물을 빼야 국물이 탁하지 않고 깔끔해요. 무는 너무 작게 썰면 퍼져버리니 나박 모양으로 도톰하게 썰어야 씹는 맛이 살아요!",
    ingredients:[{name:"소고기 국거리용",amount:"150g"},{name:"무",amount:"1/4개"},{name:"다진 마늘",amount:"1큰술"},{name:"국간장",amount:"2큰술"},{name:"참기름",amount:"1큰술"},{name:"물",amount:"4컵"},{name:"대파",amount:"1/3대"},{name:"소금·후추",amount:"마무리 간용"}],
    steps:[
      {icon:"🥩",title:"소고기 핏물 빼기",desc:"소고기를 찬물에 담가 30분 이상 두어 핏물을 빼요. 물이 빨개지면 한 번 갈아줘요. 이 과정을 건너뛰면 국물이 탁하고 잡내가 날 수 있어요. 핏물 뺀 고기는 키친타월로 물기를 살짝 닦아요."},
      {icon:"🔥",title:"고기와 무 볶기",desc:"냄비에 참기름 1큰술을 두르고 소고기를 넣어 중불에서 볶아요. 고기 색이 변하면 나박 썬 무(가로세로 3~4cm, 두께 1cm 정도)를 넣고 2분 더 볶아요. 참기름에 볶는 과정이 국물의 깊은 맛을 만들어요."},
      {icon:"💧",title:"물 붓고 센불에 끓이기",desc:"물 4컵을 붓고 국간장 2큰술, 다진 마늘 1큰술을 넣어요. 센불로 올려 끓이다가 거품이 올라오면 숟가락으로 걷어내요. 거품을 걷어야 국물이 맑고 깨끗해요. 끓어오르면 중불로 줄여요."},
      {icon:"🌿",title:"약불에 푹 끓여 완성",desc:"중약불에서 15분 더 끓여요. 무가 완전히 익어서 젓가락으로 쉽게 찔릴 정도가 되면 소금으로 마지막 간을 맞추고 대파를 송송 썰어 넣어요. 후추를 약간 갈아 넣으면 향이 더 좋아요 🍲"}
    ],
    youtube:"https://www.youtube.com/@meatcreator" },

  { id:5, category:"🇰🇷 한식", channel:"육식맨", name:"수퍼 크리스피 삼겹살", time:"40분", difficulty:3,
    desc:"육식맨 명예의 전당! 껍질이 과자처럼 바삭한 삼겹살의 신세계.", color:"#FFF0F0", border:"#EF9A9A", accent:"#B71C1C", tag:"특별한 날", tagBg:"#FFCDD2", imageSvg:"crispy-samgyup",
    tips:"💡 껍질에 구멍을 많이 낼수록 바삭함이 달라져요! 최소 50번 이상은 찔러야 해요. 소금 절임 후 냉장 숙성이 핵심인데, 이 과정에서 껍질의 수분이 빠져나와 오븐에서 훨씬 바삭하게 구워져요.",
    ingredients:[{name:"삼겹살 (껍질 있는 것)",amount:"500g 통으로"},{name:"굵은 소금",amount:"2큰술 (껍질용)"},{name:"후추",amount:"약간 (살코기용)"},{name:"쌈장",amount:"곁들임용"},{name:"상추·깻잎",amount:"곁들임용"}],
    steps:[
      {icon:"🍖",title:"껍질에 포크로 구멍 내기",desc:"삼겹살 껍질 면을 위로 오게 놓고 포크로 빽빽하게 구멍을 내요. 최소 50번 이상, 가능하면 100번도 OK! 구멍이 많을수록 기름이 잘 빠지고 껍질이 과자처럼 바삭해져요. 살코기 면은 건드리지 않아도 돼요."},
      {icon:"🧂",title:"소금 절임 후 냉장 숙성",desc:"껍질 면에만 굵은 소금을 넉넉하게 펴 발라요. 살코기 면에는 후추만 살짝. 키친타월 위에 올려 랩을 씌우고 냉장고에서 최소 4시간, 가능하면 하루 숙성해요. 이 과정에서 껍질 수분이 제거돼서 바삭함이 생겨요."},
      {icon:"🔥",title:"오븐 or 에어프라이어로 굽기",desc:"숙성 후 껍질의 소금을 키친타월로 깨끗이 닦아내요. 200도로 예열한 오븐에 껍질 면을 위로 해서 35~40분 구워요. 마지막 5분은 230도로 올려 껍질을 완전히 바삭하게 만들어요. 에어프라이어는 200도 25~30분이면 OK!"},
      {icon:"✨",title:"휴지 후 썰어 서빙",desc:"오븐에서 꺼낸 뒤 5분간 그대로 두어 육즙이 안정되게 해요(휴지). 껍질이 정말 과자처럼 바삭바삭할 거예요! 먹기 좋은 크기로 썰어 상추, 깻잎, 쌈장과 함께 내면 완성. 껍질 부분을 제일 먼저 먹어야 바삭함을 즐길 수 있어요 🐷"}
    ],
    youtube:"https://www.youtube.com/@YOOXICMAN" },

  { id:6, category:"🇰🇷 한식", channel:"육식맨", name:"순두부찌개", time:"20분", difficulty:2,
    desc:"돼지기름으로 깊은 맛을 낸 칼칼한 순두부찌개.", color:"#FFF0F8", border:"#FFB3D6", accent:"#880E4F", tag:"칼칼 매콤", tagBg:"#FFE0F0", imageSvg:"sundubujjigae",
    tips:"💡 고춧가루를 기름에 먼저 볶아 '고추기름'을 만드는 게 색과 맛의 핵심이에요. 이 과정 없이 그냥 넣으면 색도 흐리고 맛도 밋밋해져요. 달걀은 불 끄기 직전에 넣어야 예쁜 반숙이 돼요!",
    ingredients:[{name:"순두부",amount:"1봉지 (400g)"},{name:"삼겹살 (소량)",amount:"50g (육수 깊이용)"},{name:"달걀",amount:"1개"},{name:"고춧가루",amount:"1~1.5큰술"},{name:"참기름",amount:"1큰술"},{name:"다진 마늘",amount:"1큰술"},{name:"멸치 다시마 육수",amount:"1.5컵"},{name:"국간장·새우젓",amount:"각 0.5큰술"}],
    steps:[
      {icon:"🥩",title:"삼겹살로 돼지기름 내기",desc:"냄비(또는 뚝배기)에 기름 없이 삼겹살을 넣고 중불에서 볶아요. 삼겹살에서 기름이 나오면서 냄비 바닥을 코팅해요. 이 돼지기름이 국물 맛을 완전히 다르게 만들어줘요. 고기는 건져내도 되고 그냥 두어도 돼요."},
      {icon:"🔥",title:"고추기름 만들기 (핵심!)",desc:"삼겹살 기름 위에 참기름을 추가하고 고춧가루를 넣어요. 약불에서 30초~1분 천천히 볶아요. 고춧가루가 기름에 녹으면서 선명한 빨간색 고추기름이 만들어져요. 이 색이 나와야 찌개가 예쁜 빨간색이 돼요. 타지 않게 주의!"},
      {icon:"🫙",title:"육수 붓고 순두부 넣기",desc:"다진 마늘을 넣고 1분 볶다가 멸치 다시마 육수를 부어요. 팔팔 끓으면 순두부를 봉지에서 짜거나 숟가락으로 큼직하게 떠 넣어요. 국간장과 새우젓으로 간을 맞추고 2~3분 더 끓여요. 너무 저으면 순두부가 부서져요."},
      {icon:"🥚",title:"달걀로 마무리",desc:"불을 약불로 줄이고 달걀을 가운데에 조심스럽게 깨 넣어요. 뚜껑을 덮고 1분 정도 기다리면 흰자는 익고 노른자는 반숙 상태가 돼요. 대파를 송송 썰어 올리고 바로 상에 내야 해요. 뚝배기가 뜨거우니 조심! 🌶️"}
    ],
    youtube:"https://www.youtube.com/@YOOXICMAN" },

  { id:7, category:"🇯🇵 일식", channel:"킴서울", name:"돈코츠 스타일 라면", time:"10분", difficulty:1,
    desc:"우유 한 컵이 비법! 집 라면으로 돈코츠 느낌 내기.", color:"#FFFBF0", border:"#FFD580", accent:"#E65100", tag:"10분 완성", tagBg:"#FFF0C0", imageSvg:"ramen",
    tips:"💡 우유를 넣으면 국물이 뽀얗고 부드러워지면서 진짜 돈코츠 느낌이 나요. 스프는 절반만 넣는 게 포인트 — 우유가 들어가면 짠맛이 더 강하게 느껴지거든요. 숙주는 생으로 넣어도 되고, 살짝 데쳐도 좋아요!",
    ingredients:[{name:"라면 (사리면 추천)",amount:"1봉지"},{name:"우유",amount:"200ml"},{name:"달걀",amount:"1개 (반숙용)"},{name:"숙주나물",amount:"한 줌"},{name:"대파 (흰 부분)",amount:"5cm"},{name:"버터",amount:"0.5큰술"},{name:"참기름·통깨",amount:"마무리용"}],
    steps:[
      {icon:"🥚",title:"반숙 달걀 미리 준비",desc:"찬물에 달걀을 넣고 끓이기 시작해요. 물이 끓으면 정확히 7분! 타이머를 맞추는 게 중요해요. 7분 후 바로 찬물에 옮겨 담아 5분간 식혀요. 찬물에 담가야 껍질과 흰자 사이에 공간이 생겨서 껍질이 쉽게 벗겨져요."},
      {icon:"🔥",title:"국물 끓이기",desc:"냄비에 물 1.5컵과 우유 200ml를 함께 넣고 끓여요. 끓기 시작하면 라면 스프를 절반만 넣고 맛을 봐요. 우유가 들어가면 스프가 더 짭짤하게 느껴지니까 조금씩 추가하면서 입맛에 맞게 맞춰요. 소금으로도 조절 가능해요."},
      {icon:"🍝",title:"면과 숙주 함께 삶기",desc:"국물이 팔팔 끓으면 면과 숙주나물을 함께 넣어요. 포장지에 적힌 시간보다 30초 짧게 삶아야 탱탱한 식감이 살아요. 면이 다 익으면 버터 한 조각을 넣어요. 버터가 녹으면서 국물이 더 고소해져요."},
      {icon:"🍥",title:"토핑 올려 완성",desc:"그릇에 면과 국물을 담고, 반으로 자른 반숙 달걀, 대파, 버터 조각을 올려요. 참기름을 한 바퀴 둘러주면 향이 확 살아나요. 통깨도 솔솔 뿌리면 완성! 젓가락으로 달걀 노른자를 터뜨려서 국물에 섞어 먹으면 정말 맛있어요 🍜"}
    ],
    youtube:"https://www.youtube.com/@%ED%82%B4%EC%84%9C%EC%9A%B8" },

  { id:8, category:"🇯🇵 일식", channel:"육식맨", name:"규동 (소고기 덮밥)", time:"20분", difficulty:2,
    desc:"요시노야 부럽지 않은 집밥 규동! 달콤짭짤한 소고기.", color:"#F0F8FF", border:"#90CAF9", accent:"#0D47A1", tag:"일식 감성", tagBg:"#E3F2FD", imageSvg:"gyudon",
    tips:"💡 소고기는 너무 오래 익히면 질겨지니까 색이 변하는 순간 불을 줄이는 게 핵심이에요. 미림이 없으면 맛술로 대체 가능하고, 설탕 대신 매실청을 쓰면 더 깔끔한 단맛이 나요!",
    ingredients:[{name:"얇은 소고기 (불고기용)",amount:"200g"},{name:"양파",amount:"1개 (채 썰기)"},{name:"간장",amount:"3큰술"},{name:"미림 or 맛술",amount:"3큰술"},{name:"설탕",amount:"1큰술"},{name:"물",amount:"100ml"},{name:"달걀노른자",amount:"1개 (토핑용)"},{name:"밥",amount:"2공기"}],
    steps:[
      {icon:"🧅",title:"양파 충분히 볶기",desc:"팬에 기름을 두르고 채 썬 양파를 중불에서 5분 이상 볶아요. 양파가 투명해지고 살짝 갈색빛이 돌기 시작하면 단맛이 최대치로 올라온 상태예요. 이 단계를 충분히 해야 규동 특유의 달콤한 맛이 나요."},
      {icon:"🥩",title:"소스 만들고 고기 넣기",desc:"간장 3큰술 + 미림 3큰술 + 설탕 1큰술 + 물 100ml를 한 볼에 섞어 소스를 만들어요. 볶은 양파 위에 소스를 붓고 팔팔 끓여요. 끓어오르면 소고기를 펼쳐 넣어요. 고기가 겹치지 않게 최대한 넓게 펼쳐야 골고루 익어요."},
      {icon:"🍖",title:"고기 익히기 (타이밍이 핵심!)",desc:"소고기 색이 변하기 시작하는 순간 바로 불을 중불로 줄여요. 소스를 숟가락으로 고기 위에 끼얹으면서 1~2분만 더 익혀요. 완전히 익히면 질겨지니 살짝 핑크빛이 사라지는 정도가 딱 좋아요. 국물이 자작하게 남으면 완성!"},
      {icon:"🍚",title:"밥에 올려 완성",desc:"따뜻한 밥을 그릇에 담고 소고기와 양파를 국물과 함께 듬뿍 올려요. 가운데에 달걀노른자를 올리면 진짜 일식집 규동 완성! 노른자를 터뜨려 밥과 고기에 섞어 먹으면 엄청나게 고소해요. 생강 초절임을 곁들이면 더 정통 느낌 🥢"}
    ],
    youtube:"https://www.youtube.com/@YOOXICMAN" },

  { id:9, category:"🌍 양식", channel:"김밀란", name:"알리오 올리오", time:"20분", difficulty:2,
    desc:"김밀란 정통 이탈리아식! 마늘과 올리브오일만으로.", color:"#F0FFF0", border:"#A5D6A7", accent:"#1B5E20", tag:"정통 이탈리안", tagBg:"#C8E6C9", imageSvg:"aglio",
    tips:"💡 마늘은 절대 태우면 안 돼요! 황금빛이 되기 직전에 불을 끄거나 면을 바로 넣어야 해요. 탄 마늘은 쓴맛이 나서 전체 요리를 망쳐요. 면수(파스타 삶은 물)를 꼭 한 국자 남겨두세요 — 소스의 농도와 유화를 만드는 핵심이에요!",
    ingredients:[{name:"스파게티면",amount:"100g (1인분 = 동전 크기)"},{name:"마늘",amount:"5~6쪽 (얇게 슬라이스)"},{name:"엑스트라버진 올리브오일",amount:"5큰술 (아끼지 말 것!)"},{name:"페페론치노",amount:"2~3개 (청양고추 대체 가능)"},{name:"면수",amount:"한 국자 필수!"},{name:"파슬리",amount:"마무리용"},{name:"소금",amount:"면 삶는 물용 (넉넉히)"}],
    steps:[
      {icon:"💧",title:"면 소금물에 삶기",desc:"큰 냄비에 물을 넉넉히 붓고 소금을 손가락 세 꼬집 이상 넣어요 (바닷물보다 덜 짠 정도). 물이 팔팔 끓으면 면을 넣고 포장지 시간보다 2분 짧게 삶아요. 면수를 반드시 한 국자 남겨두는 걸 잊지 마세요!"},
      {icon:"🧄",title:"마늘 오일 천천히 만들기",desc:"팬에 올리브오일 5큰술을 넣고 약불로 켜요. 슬라이스한 마늘과 페페론치노를 넣고 아주 천천히 볶아요. 마늘이 지글지글 소리를 내면서 황금빛으로 변할 때까지 2~3분. 절대 서두르지 마세요. 이 과정이 요리의 80%예요!"},
      {icon:"🍝",title:"면 넣고 유화시키기",desc:"삶은 면을 물기를 살짝 털고 팬에 넣어요. 면수를 2~3큰술 붓고 팬을 세게 흔들거나 집게로 빠르게 섞어요. 오일과 면수가 만나 뽀얀 유화 소스가 만들어져요. 이걸 이탈리아어로 '만테까레'라고 해요. 면수를 조금씩 추가하며 농도를 맞춰요."},
      {icon:"✨",title:"마무리 플레이팅",desc:"그릇을 미리 따뜻하게 데워두면 더 좋아요. 면을 담고 남은 올리브오일을 한 바퀴 둘러요. 파슬리를 다져서 솔솔 뿌리고, 페페론치노를 조금 올리면 완성! 단순하지만 이게 진짜 이탈리아 가정식 맛이에요 🇮🇹"}
    ],
    youtube:"https://www.youtube.com/@Kimmilan" },

  { id:10, category:"🌍 양식", channel:"김밀란", name:"봉골레 파스타", time:"25분", difficulty:2,
    desc:"김밀란 대표 레시피! 바지락에서 우러난 깊은 바다 향.", color:"#F0F8FF", border:"#80DEEA", accent:"#006064", tag:"바다 향 가득", tagBg:"#E0F7FA", imageSvg:"vongole",
    tips:"💡 바지락 해감은 절대 생략하면 안 돼요! 소금물(물 1L + 소금 30g) + 어두운 곳에서 1시간이 기본이에요. 조개가 입을 벌리지 않으면 이미 죽은 것이니 버려야 해요. 화이트와인이 없으면 맛술이나 청주로 대체 가능해요.",
    ingredients:[{name:"스파게티면",amount:"100g"},{name:"바지락",amount:"300g (해감 필수)"},{name:"마늘",amount:"4쪽 (얇게 슬라이스)"},{name:"화이트와인 or 맛술",amount:"50ml"},{name:"엑스트라버진 올리브오일",amount:"4큰술"},{name:"페페론치노",amount:"2개"},{name:"파슬리·소금",amount:"마무리용"}],
    steps:[
      {icon:"🐚",title:"바지락 해감하기",desc:"물 1L에 소금 30g을 녹여 소금물을 만들어요. 바지락을 넣고 어두운 곳(뚜껑을 덮거나 신문지를 올려)에서 1시간 해감해요. 해감 후 여러 번 물로 씻어 껍데기에 붙은 모래를 제거해요. 이 과정이 요리의 성패를 좌우해요!"},
      {icon:"🧄",title:"마늘 오일 볶기",desc:"올리브오일에 슬라이스 마늘과 페페론치노를 넣고 약불에서 천천히 볶아요. 마늘 향이 오일에 충분히 배어 나올 때까지 2분 정도. 알리오 올리오와 같은 방식이에요. 마늘이 황금빛이 되면 준비 완료!"},
      {icon:"🍷",title:"바지락+와인으로 찌기",desc:"해감한 바지락을 팬에 넣고 화이트와인을 부어요. 뚜껑을 덮고 센불에서 조개가 입을 벌릴 때까지 2~3분 쪄요. 입을 벌린 조개는 꺼내고, 남은 국물을 2~3분 더 졸여 농도를 높여요. 이 국물이 최고의 소스예요!"},
      {icon:"🍝",title:"면 넣고 유화해서 완성",desc:"삶은 면과 면수 한 국자를 팬에 넣어요. 빠르게 섞으면서 오일과 조개 국물을 유화시켜요. 꺼내뒀던 조개를 다시 넣고 한 번 더 섞어요. 파슬리를 다져서 올리고 올리브오일을 한 바퀴 둘러주면 완성! 🌊"}
    ],
    youtube:"https://www.youtube.com/@Kimmilan" },

  { id:11, category:"🌍 양식", channel:"은수저", name:"정통 까르보나라", time:"25분", difficulty:3,
    desc:"은수저의 로마식 까르보나라! 생크림 없이 달걀과 치즈만으로.", color:"#FFF8F0", border:"#FFCC80", accent:"#BF360C", tag:"로마 정통", tagBg:"#FFE0B2", imageSvg:"carbonara",
    tips:"💡 까르보나라에 생크림은 절대 넣으면 안 돼요 — 이탈리아 현지에서는 불법(?)이라고 할 정도로 금기예요! 온도 조절이 핵심인데, 팬이 너무 뜨거우면 달걀이 익어서 스크램블드에그가 돼버려요. 반드시 불을 끈 뒤에 소스를 넣어요!",
    ingredients:[{name:"스파게티면",amount:"100g"},{name:"판체타 or 베이컨",amount:"80g (두껍게 썬 것)"},{name:"달걀노른자",amount:"3개 (전란 1개 추가 가능)"},{name:"페코리노 로마노 or 파마산 치즈",amount:"40g (강판에 갈기)"},{name:"후추",amount:"많이! 진짜 핵심 재료"},{name:"면수",amount:"2~3큰술"}],
    steps:[
      {icon:"🥚",title:"소스 미리 만들어두기",desc:"볼에 달걀노른자 3개를 넣고 강판에 간 치즈를 넣어요. 후추를 정말 넉넉하게 갈아 넣어요 (까르보나라는 후추 요리라고 할 정도로 중요해요). 면수 2~3큰술을 넣어 농도를 물처럼 묽게 만들어요. 이 소스를 미리 준비해두어야 해요."},
      {icon:"🥓",title:"판체타 바삭하게 굽기",desc:"팬에 기름 없이 판체타(또는 베이컨)를 중불에서 바삭하게 구워요. 기름이 충분히 나와서 팬 바닥이 코팅될 정도가 되면 판체타를 한쪽으로 밀어두어요. 이 기름이 소스의 베이스가 되니까 버리면 안 돼요!"},
      {icon:"🍝",title:"면 넣고 불 끄기",desc:"삶은 면을 판체타 팬에 넣고 면수 한 국자를 부어요. 중불에서 1분 정도 섞다가 반드시 불을 꺼요! 팬을 불에서 내리고 30초 기다려요. 팬 온도가 너무 높으면 다음 단계에서 달걀이 익어버려요."},
      {icon:"🧀",title:"소스 붓고 빠르게 섞기",desc:"불을 끈 팬에 달걀+치즈 소스를 한 번에 붓고 집게나 주걱으로 아주 빠르게 섞어요. 소스가 면에 코팅되면서 크리미하고 윤기 있는 상태가 되면 성공! 그릇에 담고 후추를 듬뿍 갈아 올리면 정통 까르보나라 완성 🧀"}
    ],
    youtube:"https://www.youtube.com/@%EC%88%98%EC%A0%80" },

  { id:12, category:"🌍 양식", channel:"셰프이원일", name:"팬 스테이크 + 버섯 소스", time:"30분", difficulty:3,
    desc:"버터 배스팅으로 만드는 레스토랑급 팬 스테이크.", color:"#F8F0FF", border:"#CE93D8", accent:"#4A148C", tag:"특별한 날", tagBg:"#EDE0FF", imageSvg:"steak",
    tips:"💡 고기는 굽기 30분 전에 냉장고에서 꺼내 상온에 두는 게 필수예요. 차가운 고기를 바로 구우면 겉은 타고 속은 안 익어요. 키친타월로 표면 물기를 완전히 제거해야 마이야르 반응(갈색 크러스트)이 제대로 일어나요!",
    ingredients:[{name:"스테이크용 소고기 (안심·등심)",amount:"200g (두께 2cm 이상)"},{name:"버터",amount:"2큰술"},{name:"마늘",amount:"3쪽 (통으로)"},{name:"로즈마리 or 타임",amount:"1~2가지"},{name:"양송이버섯",amount:"5개"},{name:"생크림 or 우유",amount:"100ml"},{name:"굵은 소금·후추",amount:"밑간용 (넉넉히)"}],
    steps:[
      {icon:"🥩",title:"고기 상온 준비 + 밑간",desc:"굽기 30분 전에 냉장고에서 꺼내요. 키친타월로 고기 표면 물기를 완전히 닦아요 (이게 갈색 크러스트의 핵심!). 굵은 소금을 앞뒤로 넉넉히 뿌리고 후추도 충분히 갈아요. 소금은 아끼지 말고 제법 두껍게 뿌려야 해요."},
      {icon:"🔥",title:"팬 완전히 달구고 시어링",desc:"스테인리스 or 무쇠 팬을 연기가 살짝 날 때까지 3~4분 완전히 달궈요. 기름을 살짝 두르고 고기를 넣어요. 앞면 2분 동안 절대 움직이지 마세요! 뒤집어서 뒷면도 2분. 이때 생기는 갈색 크러스트가 풍미의 전부예요."},
      {icon:"🧈",title:"버터 배스팅으로 촉촉하게",desc:"불을 약불로 줄이고 버터 2큰술 + 통마늘 + 허브를 넣어요. 버터가 녹으면서 거품이 나기 시작하면 숟가락으로 녹은 버터를 고기 위에 계속 끼얹어요. 이걸 '배스팅'이라고 해요. 1분간 반복하면 고기가 윤기 나고 향긋해져요."},
      {icon:"🍄",title:"5분 휴지 + 버섯 소스",desc:"고기를 꺼내 도마에 올리고 5분간 건드리지 않아요 (휴지). 이 시간에 육즙이 고기 속으로 재분배돼요. 같은 팬에 버섯을 볶다가 우유 100ml + 남은 버터를 넣고 소스를 만들어요. 고기를 썰어 담고 소스를 끼얹으면 레스토랑급 완성! 🍷"}
    ],
    youtube:"https://www.youtube.com/@%EC%85%B0%ED%94%84%EC%9D%B4%EC%9B%90%EC%9D%BC" },
];

const DifficultyBar = ({ level, accent }) => (
  <div style={{ display:"flex", gap:4, alignItems:"center" }}>
    {[1,2,3].map(i => (
      <div key={i} style={{ width:18, height:7, borderRadius:4, background: i<=level ? accent : `${accent}33` }}/>
    ))}
    <span style={{ fontSize:11, color:"#999", marginLeft:4, fontWeight:700 }}>
      {level===1?"쉬움":level===2?"보통":"어려움"}
    </span>
  </div>
);

export default function App() {
  const [selected, setSelected] = useState(null);
  const [activeCategory, setActiveCategory] = useState("전체");
  const [liked, setLiked] = useState({});

  const filtered = activeCategory==="전체" ? menus : menus.filter(m=>m.category===activeCategory);
  const toggleLike = (id,e) => { e&&e.stopPropagation(); setLiked(p=>({...p,[id]:!p[id]})); };

  return (
    <div style={{ minHeight:"100vh", background:"linear-gradient(160deg,#FFF0F5 0%,#F0F5FF 55%,#F5FFF0 100%)", fontFamily:FONT, paddingBottom:60 }}>

      {/* Header */}
      <div style={{ textAlign:"center", padding:"30px 20px 18px", background:"rgba(255,255,255,0.75)", backdropFilter:"blur(12px)", borderBottom:"2px dashed #FFD6E8", marginBottom:20, position:"sticky", top:0, zIndex:100 }}>
        <div style={{ fontSize:36, marginBottom:4 }}>🍽️</div>
        <h1 style={{ margin:0, fontSize:26, fontWeight:900, color:"#FF7BAC", letterSpacing:"-1px", fontFamily:FONT }}>오늘 뭐 먹지?</h1>
        <p style={{ margin:"6px 0 14px", color:"#BBB", fontSize:13, fontWeight:700 }}>집에서 만드는 든든한 저녁 레시피 🌙</p>
        {!selected && (
          <div style={{ display:"flex", gap:8, justifyContent:"center", flexWrap:"wrap" }}>
            {categories.map(cat=>(
              <button key={cat} onClick={()=>setActiveCategory(cat)} style={{
                padding:"7px 18px", borderRadius:24,
                border: activeCategory===cat?"2px solid #FF7BAC":"2px solid #F0D0DA",
                background: activeCategory===cat?"#FF7BAC":"white",
                color: activeCategory===cat?"white":"#FF7BAC",
                fontWeight:800, fontSize:13, cursor:"pointer", fontFamily:FONT, transition:"all 0.15s"
              }}>{cat}</button>
            ))}
          </div>
        )}
      </div>

      {/* Cards */}
      {!selected && (
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:18, padding:"0 18px", maxWidth:980, margin:"0 auto" }}>
          {filtered.map(menu=>(
            <div key={menu.id} onClick={()=>setSelected(menu)}
              style={{ background:menu.color, border:`2px solid ${menu.border}`, borderRadius:28, overflow:"hidden", cursor:"pointer", boxShadow:"0 4px 16px rgba(0,0,0,0.07)", transition:"transform 0.18s, box-shadow 0.18s" }}
              onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-6px)";e.currentTarget.style.boxShadow="0 12px 32px rgba(0,0,0,0.13)";}}
              onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="0 4px 16px rgba(0,0,0,0.07)";}}
            >
              <div style={{ height:140, background:`linear-gradient(135deg,${menu.border}55,${menu.border}22)`, display:"flex", alignItems:"center", justifyContent:"center", position:"relative" }}>
                <div style={{ width:130, height:130 }} dangerouslySetInnerHTML={{__html:illustrations[menu.imageSvg]}}/>
                <button onClick={e=>toggleLike(menu.id,e)} style={{ position:"absolute", top:10, right:12, background:"rgba(255,255,255,0.85)", border:"none", borderRadius:"50%", width:34, height:34, cursor:"pointer", fontSize:16, display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 2px 8px rgba(0,0,0,0.1)" }}>
                  {liked[menu.id]?"❤️":"🤍"}
                </button>
                <span style={{ position:"absolute", top:10, left:12, background:channelColors[menu.channel], borderRadius:14, padding:"3px 10px", fontSize:10, fontWeight:800, color:"#fff" }}>
                  {channelLabel[menu.channel]}
                </span>
              </div>
              <div style={{ padding:"14px 18px 18px" }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:8 }}>
                  <span style={{ background:menu.tagBg, padding:"4px 12px", borderRadius:20, fontSize:11, fontWeight:800, color:menu.accent }}>{menu.tag}</span>
                  <span style={{ fontSize:12, color:"#AAA", fontWeight:700 }}>⏱ {menu.time}</span>
                </div>
                <h2 style={{ margin:"0 0 6px", fontSize:20, fontWeight:900, color:menu.accent, letterSpacing:"-0.5px", fontFamily:FONT }}>{menu.name}</h2>
                <p style={{ margin:"0 0 12px", fontSize:13, color:"#888", lineHeight:1.6, fontWeight:400 }}>{menu.desc}</p>
                <DifficultyBar level={menu.difficulty} accent={menu.accent}/>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Detail */}
      {selected && (
        <div style={{ maxWidth:600, margin:"0 auto", padding:"0 16px" }}>
          <button onClick={()=>setSelected(null)} style={{ background:"white", border:`2px solid ${selected.border}`, borderRadius:20, padding:"8px 18px", cursor:"pointer", fontSize:13, color:selected.accent, fontWeight:800, marginBottom:16, fontFamily:FONT }}>
            ← 목록으로
          </button>

          {/* Hero */}
          <div style={{ borderRadius:28, overflow:"hidden", border:`2px solid ${selected.border}`, boxShadow:"0 6px 24px rgba(0,0,0,0.09)", marginBottom:16 }}>
            <div style={{ height:200, background:`linear-gradient(135deg,${selected.border}77,${selected.border}33)`, display:"flex", alignItems:"center", justifyContent:"center" }}>
              <div style={{width:180,height:180}} dangerouslySetInnerHTML={{__html:illustrations[selected.imageSvg]}}/>
            </div>
            <div style={{ background:selected.color, padding:"22px 24px 24px" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:8 }}>
                <span style={{ background:selected.tagBg, padding:"4px 14px", borderRadius:20, fontSize:12, fontWeight:800, color:selected.accent }}>{selected.tag}</span>
                <span style={{ fontSize:13, color:"#AAA", fontWeight:700 }}>⏱ {selected.time}</span>
              </div>
              <div style={{ marginBottom:6 }}>
                <span style={{ background:channelColors[selected.channel], borderRadius:12, padding:"3px 10px", fontSize:11, fontWeight:800, color:"#fff" }}>{channelLabel[selected.channel]}</span>
              </div>
              <h2 style={{ margin:"10px 0 8px", fontSize:28, fontWeight:900, color:selected.accent, letterSpacing:"-1px", fontFamily:FONT }}>{selected.name}</h2>
              <p style={{ margin:"0 0 14px", fontSize:14, color:"#666", lineHeight:1.7, fontWeight:400 }}>{selected.desc}</p>
              <DifficultyBar level={selected.difficulty} accent={selected.accent}/>
              <div style={{ marginTop:14, background:"rgba(255,255,255,0.8)", borderRadius:14, padding:"12px 16px", fontSize:13, color:"#555", lineHeight:1.9, border:`1.5px dashed ${selected.border}`, fontWeight:400 }}>{selected.tips}</div>
            </div>
          </div>

          {/* Ingredients */}
          <div style={{ background:"white", borderRadius:22, padding:"20px", marginBottom:14, border:`2px solid ${selected.border}`, boxShadow:"0 3px 12px rgba(0,0,0,0.05)" }}>
            <h3 style={{ margin:"0 0 14px", fontSize:17, fontWeight:900, color:selected.accent, fontFamily:FONT }}>🛒 재료 <span style={{fontSize:12,fontWeight:700,color:"#AAA"}}>(2인분 기준)</span></h3>
            <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
              {selected.ingredients.map((ing,i)=>(
                <div key={i} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", background:selected.color, borderRadius:12, padding:"10px 14px" }}>
                  <span style={{ fontWeight:800, color:selected.accent, fontSize:14, fontFamily:FONT }}>{ing.name}</span>
                  <span style={{ color:"#888", fontSize:13, fontWeight:700 }}>{ing.amount}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Steps — 항상 전부 열려있음 */}
          <div style={{ background:"white", borderRadius:22, padding:"20px", marginBottom:14, border:`2px solid ${selected.border}`, boxShadow:"0 3px 12px rgba(0,0,0,0.05)" }}>
            <h3 style={{ margin:"0 0 14px", fontSize:17, fontWeight:900, color:selected.accent, fontFamily:FONT }}>👩‍🍳 만드는 법</h3>
            <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
              {selected.steps.map((step,i)=>(
                <div key={i} style={{ background:selected.color, border:`1.5px solid ${selected.border}`, borderRadius:16, padding:"16px 18px" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10 }}>
                    <span style={{ background:selected.accent, color:"white", width:28, height:28, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", fontSize:13, fontWeight:900, flexShrink:0 }}>{i+1}</span>
                    <span style={{fontSize:18}}>{step.icon}</span>
                    <span style={{ fontWeight:900, color:selected.accent, fontSize:15, fontFamily:FONT }}>{step.title}</span>
                  </div>
                  <p style={{ margin:0, fontSize:14, color:"#555", lineHeight:1.9, fontWeight:400, paddingLeft:38 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* YouTube */}
          <a href={selected.youtube} target="_blank" rel="noopener noreferrer" style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:10, background:"linear-gradient(135deg,#FF4444,#FF1111)", color:"white", borderRadius:20, padding:"16px 20px", textDecoration:"none", fontWeight:900, fontSize:15, boxShadow:"0 4px 18px rgba(255,68,68,0.35)", marginBottom:8, fontFamily:FONT }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.8 15.5V8.5l6.3 3.5-6.3 3.5z"/>
            </svg>
            {channelLabel[selected.channel]} 채널 보러가기
          </a>
          <p style={{ textAlign:"center", color:"#CCC", fontSize:12, marginTop:6, marginBottom:24, fontWeight:700 }}>채널 홈으로 이동해요 🎬</p>
        </div>
      )}
    </div>
  );
}
