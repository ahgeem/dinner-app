import { useState } from "react";

const categories = ["전체", "🇰🇷 한식", "🇯🇵 일식", "🌍 양식"];

const FONT = "'Escoredream', 'Apple SD Gothic Neo', sans-serif";

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
  "kimchi-rice": `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="60" cy="85" rx="48" ry="14" fill="#E8B89A" opacity="0.4"/>
    <ellipse cx="60" cy="80" rx="46" ry="28" fill="#F5DEB3"/>
    <ellipse cx="60" cy="72" rx="40" ry="22" fill="#FFFDE7"/>
    <ellipse cx="60" cy="70" rx="36" ry="18" fill="#FFF9C4"/>
    <ellipse cx="45" cy="65" rx="8" ry="5" fill="#EF5350" opacity="0.85"/>
    <ellipse cx="62" cy="60" rx="10" ry="6" fill="#EF5350" opacity="0.8"/>
    <ellipse cx="75" cy="67" rx="7" ry="4" fill="#EF5350" opacity="0.7"/>
    <ellipse cx="55" cy="72" rx="6" ry="4" fill="#EF5350" opacity="0.75"/>
    <circle cx="70" cy="55" r="14" fill="#FFFDE7" stroke="#FFD54F" stroke-width="2"/>
    <circle cx="70" cy="55" r="8" fill="#FFD600"/>
    <circle cx="68" cy="53" r="2" fill="#FFF176" opacity="0.8"/>
  </svg>`,
  "doenjang": `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 55 Q22 97 60 97 Q98 97 98 55 Z" fill="#FFF8E1"/>
    <ellipse cx="60" cy="55" rx="38" ry="16" fill="#8FBC8F" opacity="0.6"/>
    <circle cx="45" cy="52" r="5" fill="#FFFFFF" opacity="0.9"/>
    <circle cx="60" cy="48" r="6" fill="#FFFFFF" opacity="0.85"/>
    <circle cx="74" cy="53" r="4" fill="#FFFFFF" opacity="0.9"/>
    <circle cx="50" cy="60" r="4" fill="#228B22" opacity="0.7"/>
    <circle cx="68" cy="57" r="5" fill="#228B22" opacity="0.6"/>
    <rect x="52" y="20" width="16" height="38" rx="8" fill="#C8A97A"/>
  </svg>`,
  "daepae": `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="60" cy="88" rx="44" ry="12" fill="#FF8C00" opacity="0.2"/>
    <rect x="20" y="52" width="80" height="40" rx="12" fill="#FFF3E0"/>
    <ellipse cx="60" cy="52" rx="40" ry="14" fill="#FFCC80"/>
    <ellipse cx="48" cy="50" rx="12" ry="7" fill="#FF7043" opacity="0.8"/>
    <ellipse cx="65" cy="46" rx="14" ry="8" fill="#FF5722" opacity="0.7"/>
    <ellipse cx="76" cy="52" rx="10" ry="6" fill="#FF7043" opacity="0.75"/>
    <ellipse cx="38" cy="58" rx="8" ry="4" fill="#66BB6A" opacity="0.7"/>
    <ellipse cx="72" cy="60" rx="7" ry="3.5" fill="#66BB6A" opacity="0.6"/>
  </svg>`,
  "beef-soup": `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 58 Q18 96 60 96 Q102 96 102 58 Z" fill="#FFF8E1"/>
    <ellipse cx="60" cy="58" rx="42" ry="16" fill="#D4A574" opacity="0.5"/>
    <ellipse cx="44" cy="56" rx="10" ry="6" fill="#8B4513" opacity="0.7"/>
    <ellipse cx="62" cy="52" rx="12" ry="7" fill="#795548" opacity="0.6"/>
    <ellipse cx="76" cy="58" rx="9" ry="5" fill="#8B4513" opacity="0.65"/>
    <ellipse cx="52" cy="64" rx="8" ry="4" fill="#FFFFFF" opacity="0.7"/>
    <ellipse cx="68" cy="62" rx="7" ry="3.5" fill="#FFFFFF" opacity="0.6"/>
    <path d="M48 30 Q52 22 56 30" stroke="#81C784" stroke-width="2" fill="none"/>
    <path d="M56 28 Q60 20 64 28" stroke="#66BB6A" stroke-width="2" fill="none"/>
  </svg>`,
  "crispy-samgyup": `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="60" cy="88" rx="44" ry="12" fill="#8B0000" opacity="0.15"/>
    <rect x="22" y="50" width="76" height="38" rx="14" fill="#5D4037"/>
    <rect x="26" y="50" width="68" height="32" rx="10" fill="#795548"/>
    <rect x="30" y="52" width="60" height="24" rx="8" fill="#A1887F"/>
    <ellipse cx="44" cy="58" rx="8" ry="4" fill="#FFAB91" opacity="0.7"/>
    <ellipse cx="60" cy="55" rx="10" ry="4.5" fill="#FFAB91" opacity="0.6"/>
    <ellipse cx="75" cy="59" rx="7" ry="3.5" fill="#FFAB91" opacity="0.65"/>
    <ellipse cx="36" cy="78" rx="10" ry="7" fill="#66BB6A" opacity="0.85"/>
    <ellipse cx="82" cy="76" rx="9" ry="6" fill="#81C784" opacity="0.8"/>
  </svg>`,
  "sundubujjigae": `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 60 Q20 98 60 98 Q100 98 100 60 Z" fill="#FF5252" opacity="0.15"/>
    <ellipse cx="60" cy="60" rx="40" ry="16" fill="#FF7043" opacity="0.5"/>
    <ellipse cx="44" cy="58" rx="9" ry="6" fill="#FFFFFF" opacity="0.9"/>
    <ellipse cx="62" cy="54" rx="11" ry="7" fill="#FFFFFF" opacity="0.85"/>
    <ellipse cx="76" cy="60" rx="8" ry="5" fill="#FFFFFF" opacity="0.9"/>
    <circle cx="60" cy="52" r="7" fill="#FFEB3B" opacity="0.85"/>
    <circle cx="60" cy="52" r="4" fill="#FF6F00" opacity="0.9"/>
    <rect x="52" y="22" width="16" height="40" rx="8" fill="#8B4513" opacity="0.6"/>
  </svg>`,
  "ramen": `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 60 Q18 96 60 96 Q102 96 102 60 Z" fill="#FFF8E1"/>
    <path d="M28 58 Q40 52 52 60 Q64 68 76 58 Q88 50 96 58" stroke="#E8B88A" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M30 63 Q42 57 54 65 Q66 73 78 63 Q88 55 96 63" stroke="#E8B88A" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M32 68 Q44 62 56 70 Q66 76 76 68" stroke="#E8B88A" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <ellipse cx="42" cy="55" rx="10" ry="6" fill="#FFCCBC" opacity="0.9"/>
    <circle cx="74" cy="52" r="8" fill="#FFFDE7" stroke="#FFD54F" stroke-width="1.5"/>
    <circle cx="74" cy="52" r="5" fill="#FFD600" opacity="0.9"/>
    <path d="M56 30 Q60 22 64 30" stroke="#81C784" stroke-width="2" fill="none"/>
    <path d="M52 28 Q56 20 60 28" stroke="#66BB6A" stroke-width="2" fill="none"/>
  </svg>`,
  "gyudon": `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="60" cy="82" rx="44" ry="20" fill="#F5DEB3"/>
    <ellipse cx="60" cy="68" rx="34" ry="12" fill="#FFF9C4"/>
    <ellipse cx="46" cy="63" rx="12" ry="7" fill="#8B4513" opacity="0.75"/>
    <ellipse cx="63" cy="58" rx="14" ry="8" fill="#A0522D" opacity="0.8"/>
    <ellipse cx="76" cy="64" rx="11" ry="6" fill="#8B4513" opacity="0.7"/>
    <circle cx="72" cy="54" r="8" fill="#FFFDE7" stroke="#FFD54F" stroke-width="1.5"/>
    <circle cx="72" cy="54" r="5" fill="#FF8F00" opacity="0.85"/>
  </svg>`,
  "aglio": `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 65 Q16 98 60 98 Q104 98 104 65 Z" fill="#FFF9C4" opacity="0.8"/>
    <path d="M25 62 C35 55 45 72 55 62 C65 52 75 70 85 62 C90 58 94 62 96 62" stroke="#F5CBA7" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <path d="M28 68 C38 61 48 78 58 68 C68 58 78 76 88 68" stroke="#F5CBA7" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <path d="M30 74 C40 67 50 80 60 74 C70 68 78 78 86 74" stroke="#F5CBA7" stroke-width="3" fill="none" stroke-linecap="round"/>
    <circle cx="42" cy="62" r="5" fill="#DEB887" opacity="0.8"/>
    <circle cx="66" cy="58" r="6" fill="#DEB887" opacity="0.75"/>
    <circle cx="42" cy="68" r="4" fill="#A5D6A7" opacity="0.9"/>
    <circle cx="70" cy="70" r="4" fill="#A5D6A7" opacity="0.85"/>
  </svg>`,
  "vongole": `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 65 Q16 98 60 98 Q104 98 104 65 Z" fill="#FFF9E6"/>
    <path d="M25 62 C38 55 50 70 62 60 C74 50 84 68 96 60" stroke="#F0C070" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M28 68 C40 61 52 76 64 66 C76 56 86 72 96 66" stroke="#F0C070" stroke-width="3" fill="none" stroke-linecap="round"/>
    <ellipse cx="40" cy="60" rx="8" ry="5" fill="#D2B48C" opacity="0.8"/>
    <ellipse cx="55" cy="56" rx="7" ry="4" fill="#C8A060" opacity="0.8" transform="rotate(-15,55,56)"/>
    <ellipse cx="70" cy="58" rx="8" ry="5" fill="#D2B48C" opacity="0.75"/>
    <ellipse cx="82" cy="54" rx="7" ry="4" fill="#C8A060" opacity="0.7" transform="rotate(10,82,54)"/>
    <circle cx="44" cy="68" r="3" fill="#A5D6A7" opacity="0.9"/>
    <circle cx="66" cy="66" r="3" fill="#A5D6A7" opacity="0.85"/>
  </svg>`,
  "carbonara": `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 65 Q16 98 60 98 Q104 98 104 65 Z" fill="#FFFDE7"/>
    <path d="M25 60 C35 53 48 70 60 60 C72 50 82 68 96 60" stroke="#F5DEB3" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M28 67 C38 60 50 77 62 67 C74 57 84 73 96 67" stroke="#F5DEB3" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <ellipse cx="42" cy="58" rx="9" ry="5" fill="#8B4513" opacity="0.7"/>
    <ellipse cx="65" cy="55" rx="8" ry="4" fill="#795548" opacity="0.65"/>
    <ellipse cx="78" cy="62" rx="7" ry="4" fill="#8B4513" opacity="0.6"/>
    <circle cx="50" cy="50" r="6" fill="#FFD700" opacity="0.5"/>
    <circle cx="68" cy="47" r="5" fill="#FFD700" opacity="0.4"/>
  </svg>`,
  "steak": `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="60" cy="88" rx="46" ry="12" fill="#5D4037" opacity="0.2"/>
    <ellipse cx="60" cy="72" rx="42" ry="20" fill="#5D4037"/>
    <ellipse cx="60" cy="68" rx="34" ry="14" fill="#8D6E63"/>
    <ellipse cx="60" cy="65" rx="20" ry="8" fill="#A1887F" opacity="0.5"/>
    <ellipse cx="40" cy="80" rx="12" ry="8" fill="#4CAF50" opacity="0.85"/>
    <ellipse cx="82" cy="78" rx="10" ry="7" fill="#81C784" opacity="0.8"/>
    <ellipse cx="60" cy="83" rx="8" ry="5" fill="#A5D6A7" opacity="0.7"/>
  </svg>`,
};

const menus = [
  { id:1, category:"🇰🇷 한식", channel:"킴서울", name:"김치볶음밥", time:"15분", difficulty:1, desc:"묵은 김치 하나로 뚝딱! 버터 한 조각이 감칠맛의 비결.", color:"#FFF5F5", border:"#FFB3B3", accent:"#FF7070", tag:"15분 완성", tagBg:"#FFE0E0", imageSvg:"kimchi-rice",
    tips:"💡 버터를 먼저 녹인 뒤 김치를 볶으면 감칠맛이 훨씬 깊어져요. 달걀은 반숙으로 터뜨려 비비면 최고!",
    ingredients:[{name:"묵은 김치",amount:"1컵"},{name:"밥",amount:"2공기"},{name:"달걀",amount:"2개"},{name:"버터",amount:"1큰술"},{name:"간장",amount:"1작은술"},{name:"참기름·통깨",amount:"마무리용"}],
    steps:[{icon:"🔥",title:"김치 볶기",desc:"팬을 중불로 달군 뒤 버터를 녹여요. 김치를 넣고 2~3분 볶아요. 버터가 신맛을 잡아주면서 고소한 향이 올라와요."},{icon:"🍚",title:"밥 볶기",desc:"밥을 넣고 간장 1작은술을 둘러요. 주걱으로 탁탁 누르듯 센불에서 3~4분 볶아요."},{icon:"🍳",title:"달걀 프라이",desc:"볶음밥을 한쪽으로 밀고 빈 공간에 달걀을 깨요. 노른자는 반숙으로!"},{icon:"✨",title:"마무리",desc:"불 끄고 참기름 한 바퀴, 통깨 솔솔. 달걀 터뜨려 비비면 최고예요 🥄"}],
    youtube:"https://www.youtube.com/@%ED%82%B4%EC%84%9C%EC%9A%B8" },

  { id:2, category:"🇰🇷 한식", channel:"킴서울", name:"된장찌개", time:"25분", difficulty:2, desc:"구수하고 따뜻한 엄마 손맛. 두부와 애호박만 있으면 완성!", color:"#F2FFF2", border:"#A8D8A8", accent:"#4CAF50", tag:"건강 집밥", tagBg:"#D6F5D6", imageSvg:"doenjang",
    tips:"💡 된장은 체에 밭쳐 풀어야 덩어리 없이 깔끔해요. 마지막 청양고추 한 개로 칼칼함 업!",
    ingredients:[{name:"된장",amount:"2큰술"},{name:"두부",amount:"반 모"},{name:"애호박",amount:"반 개"},{name:"양파",amount:"반 개"},{name:"다진 마늘",amount:"1작은술"},{name:"멸치 육수",amount:"2컵"},{name:"청양고추",amount:"1개 선택"}],
    steps:[{icon:"🔪",title:"재료 썰기",desc:"두부 1.5cm 사각형, 애호박 반달, 양파 큼직하게 썰어요."},{icon:"🍶",title:"육수 끓이기",desc:"냄비에 육수를 넣고 중불로 끓여요. 된장을 체에 밭쳐 풀고 다진 마늘을 넣어요."},{icon:"🥦",title:"야채·두부 넣기",desc:"야채 먼저 5분 끓이고, 두부를 넣어 2~3분 더 끓여요."},{icon:"🌶️",title:"마무리",desc:"청양고추 어슷 썰어 넣고 한소끔 더 끓이면 완성!"}],
    youtube:"https://www.youtube.com/@%ED%82%B4%EC%84%9C%EC%9A%B8" },

  { id:3, category:"🇰🇷 한식", channel:"정육왕", name:"대패삼겹 파김치볶음", time:"20분", difficulty:1, desc:"정육왕 스타일! 대패삼겹살과 파김치의 환상 조합.", color:"#FFF8F0", border:"#FFCC80", accent:"#FF9800", tag:"빠른 요리", tagBg:"#FFE0B2", imageSvg:"daepae",
    tips:"💡 파김치가 없으면 김치+대파로 대체 가능해요! 센불에서 빠르게 볶아야 더 맛있어요.",
    ingredients:[{name:"대패삼겹살",amount:"200g"},{name:"파김치",amount:"1컵"},{name:"고추장",amount:"1큰술"},{name:"간장",amount:"1큰술"},{name:"참기름·통깨",amount:"마무리용"}],
    steps:[{icon:"🔥",title:"파김치 볶기",desc:"팬에 기름 없이 파김치를 먼저 볶아요."},{icon:"🥩",title:"고기 넣기",desc:"대패삼겹살 넣고 센불에서 볶아요."},{icon:"🌶️",title:"양념하기",desc:"고추장+간장 넣고 1~2분 더 볶아요."},{icon:"✨",title:"마무리",desc:"참기름+통깨. 뜨거운 밥에 올려 비벼먹으면 최고!"}],
    youtube:"https://www.youtube.com/@meatcreator" },

  { id:4, category:"🇰🇷 한식", channel:"정육왕", name:"소고기 뭇국", time:"30분", difficulty:2, desc:"정육왕 고기 손질법으로 만드는 깊고 구수한 소고기 뭇국.", color:"#FFF8F0", border:"#FFAB91", accent:"#E64A19", tag:"해장 최고", tagBg:"#FFE0D0", imageSvg:"beef-soup",
    tips:"💡 소고기는 찬물에 30분 담가 핏물을 제거해야 국물이 깔끔해요!",
    ingredients:[{name:"소고기 국거리",amount:"150g"},{name:"무",amount:"1/4개"},{name:"다진 마늘",amount:"1큰술"},{name:"국간장",amount:"2큰술"},{name:"참기름",amount:"1큰술"},{name:"물",amount:"4컵"},{name:"대파·소금",amount:"마무리용"}],
    steps:[{icon:"🥩",title:"핏물 빼기",desc:"소고기를 찬물에 30분 담가 핏물을 빼요."},{icon:"🔥",title:"고기·무 볶기",desc:"참기름 두르고 고기+나박 썬 무를 볶아요."},{icon:"💧",title:"물 붓고 끓이기",desc:"물 4컵, 국간장, 마늘 넣고 끓여요."},{icon:"🌿",title:"마무리",desc:"약불 15분 끓이고 대파 올리면 완성!"}],
    youtube:"https://www.youtube.com/@meatcreator" },

  { id:5, category:"🇰🇷 한식", channel:"육식맨", name:"수퍼 크리스피 삼겹살", time:"40분", difficulty:3, desc:"육식맨 명예의 전당! 껍질이 과자처럼 바삭한 삼겹살.", color:"#FFF0F0", border:"#EF9A9A", accent:"#C62828", tag:"특별한 날", tagBg:"#FFCDD2", imageSvg:"crispy-samgyup",
    tips:"💡 껍질에 포크로 50번 이상 찔러야 해요. 소금 절임 후 냉장 하루 숙성이 핵심!",
    ingredients:[{name:"삼겹살 (껍질 있는 것)",amount:"500g 통으로"},{name:"굵은 소금",amount:"넉넉히"},{name:"후추",amount:"약간"},{name:"쌈장·상추",amount:"곁들임용"}],
    steps:[{icon:"🍖",title:"껍질 손질",desc:"껍질 면에 포크로 50번 이상 빽빽하게 찔러요."},{icon:"🧂",title:"소금 절임·숙성",desc:"껍질 면에 굵은 소금 뿌리고 냉장고에 하루(최소 4시간) 숙성해요."},{icon:"🔥",title:"오븐 굽기",desc:"소금 닦고 200도 40분. 마지막 5분은 230도로 바삭하게!"},{icon:"✨",title:"마무리",desc:"껍질이 과자처럼 바삭하면 완성! 쌈장에 상추 곁들이면 최고 🐷"}],
    youtube:"https://www.youtube.com/@YOOXICMAN" },

  { id:6, category:"🇰🇷 한식", channel:"육식맨", name:"순두부찌개", time:"20분", difficulty:2, desc:"돼지기름으로 깊은 맛을 낸 칼칼한 순두부찌개.", color:"#FFF0F8", border:"#FFB3D6", accent:"#E91E8C", tag:"칼칼 매콤", tagBg:"#FFE0F0", imageSvg:"sundubujjigae",
    tips:"💡 삼겹살을 먼저 볶아 돼지기름을 내면 국물 맛이 완전히 달라져요!",
    ingredients:[{name:"순두부",amount:"1봉지 400g"},{name:"삼겹살",amount:"50g"},{name:"달걀",amount:"1개"},{name:"고춧가루",amount:"1.5큰술"},{name:"다진 마늘",amount:"1큰술"},{name:"멸치 육수",amount:"1.5컵"}],
    steps:[{icon:"🥩",title:"돼지기름 내기",desc:"기름 없이 삼겹살을 볶아 기름을 내요."},{icon:"🔥",title:"고추기름",desc:"고춧가루 약불 30초 볶아요. 육수 부어요."},{icon:"🫙",title:"순두부 넣기",desc:"순두부 넣고 국간장·새우젓으로 간하고 끓여요."},{icon:"🥚",title:"달걀 마무리",desc:"약불로 달걀 깨 넣고 반숙 되면 완성!"}],
    youtube:"https://www.youtube.com/@YOOXICMAN" },

  { id:7, category:"🇯🇵 일식", channel:"킴서울", name:"돈코츠 스타일 라면", time:"10분", difficulty:1, desc:"우유 한 컵이 비법! 집 라면으로 돈코츠 느낌 내기.", color:"#FFFBF0", border:"#FFD580", accent:"#FFA000", tag:"10분 완성", tagBg:"#FFF0C0", imageSvg:"ramen",
    tips:"💡 우유를 넣으면 국물이 뽀얗고 부드러워져요. 달걀은 찬물에서 7분 삶으면 반숙!",
    ingredients:[{name:"라면",amount:"1봉지"},{name:"우유",amount:"200ml"},{name:"달걀",amount:"1개 반숙"},{name:"숙주나물",amount:"한 줌"},{name:"대파·버터",amount:"마무리용"}],
    steps:[{icon:"🥚",title:"반숙 달걀",desc:"찬물에서 끓기 시작 후 7분. 바로 찬물에 담가요."},{icon:"🔥",title:"국물 끓이기",desc:"물 1.5컵 + 우유 200ml 끓이고 스프는 반만 넣어요."},{icon:"🍝",title:"면 삶기",desc:"면+숙주 넣고 포장지보다 30초 짧게 삶아요."},{icon:"🍥",title:"토핑",desc:"반숙 달걀, 대파, 버터 한 조각 올리면 완성!"}],
    youtube:"https://www.youtube.com/@%ED%82%B4%EC%84%9C%EC%9A%B8" },

  { id:8, category:"🇯🇵 일식", channel:"육식맨", name:"규동 (소고기 덮밥)", time:"20분", difficulty:2, desc:"요시노야 부럽지 않은 집밥 규동! 달콤짭짤한 소고기.", color:"#F0F8FF", border:"#90CAF9", accent:"#1976D2", tag:"일식 감성", tagBg:"#E3F2FD", imageSvg:"gyudon",
    tips:"💡 미림을 쓰면 더 정통 규동 맛! 달걀노른자를 가운데 올리면 진짜 일식집 느낌이에요.",
    ingredients:[{name:"얇은 소고기",amount:"200g"},{name:"양파",amount:"1개 채 썰기"},{name:"간장·미림",amount:"각 3큰술"},{name:"설탕",amount:"1큰술"},{name:"달걀노른자",amount:"1개 토핑용"}],
    steps:[{icon:"🧅",title:"양파 볶기",desc:"기름 두르고 양파 중불에서 5분. 갈색빛 돌면 달달한 맛이 생겨요."},{icon:"🥩",title:"소스+고기",desc:"간장+미림+설탕+물 소스 붓고 팔팔 끓인 뒤 소고기 넣어요."},{icon:"🍖",title:"고기 익히기",desc:"색 변하는 순간 불 줄이고 1~2분만 익혀요."},{icon:"🍚",title:"완성",desc:"밥 위에 올리고 달걀노른자 가운데 올리면 완성! 🥢"}],
    youtube:"https://www.youtube.com/@YOOXICMAN" },

  { id:9, category:"🌍 양식", channel:"김밀란", name:"알리오 올리오", time:"20분", difficulty:2, desc:"김밀란 정통 이탈리아식! 마늘과 올리브오일만으로.", color:"#F0FFF0", border:"#A5D6A7", accent:"#2E7D32", tag:"정통 이탈리안", tagBg:"#C8E6C9", imageSvg:"aglio",
    tips:"💡 마늘은 절대 태우면 안 돼요! 약불에서 천천히 황금빛 될 때까지. 면수가 소스의 핵심이에요.",
    ingredients:[{name:"스파게티면",amount:"100g"},{name:"마늘",amount:"5~6쪽 슬라이스"},{name:"엑스트라버진 올리브오일",amount:"5큰술"},{name:"페페론치노",amount:"2~3개"},{name:"면수",amount:"한 국자 필수!"}],
    steps:[{icon:"💧",title:"면 삶기",desc:"소금 넉넉히 넣은 물에 면을 포장지보다 2분 짧게 삶아요. 면수 꼭 남겨두세요!"},{icon:"🧄",title:"마늘 오일",desc:"약불에서 올리브오일+마늘+페페론치노를 천천히. 황금빛이 되면 OK!"},{icon:"🍝",title:"면 넣고 유화",desc:"면 넣고 면수 조금씩 부으며 볶아요. 크리미한 소스가 만들어져요."},{icon:"✨",title:"마무리",desc:"파슬리 다져서 올리고 올리브오일 한 바퀴. 🇮🇹"}],
    youtube:"https://www.youtube.com/@Kimmilan" },

  { id:10, category:"🌍 양식", channel:"김밀란", name:"봉골레 파스타", time:"25분", difficulty:2, desc:"김밀란 대표 레시피! 바지락에서 우러난 깊은 바다 향.", color:"#F0F8FF", border:"#80DEEA", accent:"#00838F", tag:"바다 향 가득", tagBg:"#E0F7FA", imageSvg:"vongole",
    tips:"💡 바지락은 소금물(물 1L + 소금 2큰술)에 1시간 해감이 생명!",
    ingredients:[{name:"스파게티면",amount:"100g"},{name:"바지락",amount:"300g 해감 필수"},{name:"마늘",amount:"4쪽 슬라이스"},{name:"화이트와인 or 맛술",amount:"50ml"},{name:"올리브오일",amount:"4큰술"}],
    steps:[{icon:"🐚",title:"해감하기",desc:"바지락을 소금물에 1시간 담가요."},{icon:"🧄",title:"마늘 볶기",desc:"올리브오일에 마늘+페페론치노 약불에서 볶아요."},{icon:"🍷",title:"바지락+와인",desc:"바지락 넣고 화이트와인 부어요. 뚜껑 덮고 조개 입 벌릴 때까지!"},{icon:"🍝",title:"면 넣고 완성",desc:"삶은 면+면수 넣고 유화시켜요. 파슬리 올리면 완성!"}],
    youtube:"https://www.youtube.com/@Kimmilan" },

  { id:11, category:"🌍 양식", channel:"은수저", name:"정통 까르보나라", time:"25분", difficulty:3, desc:"은수저의 로마식 까르보나라! 생크림 없이 달걀과 치즈만으로.", color:"#FFF8F0", border:"#FFCC80", accent:"#E65100", tag:"로마 정통", tagBg:"#FFE0B2", imageSvg:"carbonara",
    tips:"💡 생크림은 절대 넣으면 안 돼요! 불에서 내린 뒤 소스를 섞어야 크리미해요.",
    ingredients:[{name:"스파게티면",amount:"100g"},{name:"판체타 or 베이컨",amount:"80g"},{name:"달걀노른자",amount:"3개"},{name:"파마산 치즈",amount:"40g 강판에 갈기"},{name:"후추",amount:"많이! 핵심 재료"}],
    steps:[{icon:"🥚",title:"소스 준비",desc:"달걀노른자+간 치즈+후추 넉넉히 섞어요. 면수 1~2큰술 넣어 농도 조절해요."},{icon:"🥓",title:"판체타 굽기",desc:"기름 없이 판체타를 바삭하게 구워요."},{icon:"🍝",title:"면 볶기",desc:"삶은 면을 판체타 팬에 넣고 면수 한 국자. 불을 꺼요!"},{icon:"🧀",title:"소스 섞기",desc:"달걀+치즈 소스 붓고 빠르게 섞어요. 후추 한 번 더 갈면 완성!"}],
    youtube:"https://www.youtube.com/@%EC%88%98%EC%A0%80" },

  { id:12, category:"🌍 양식", channel:"셰프이원일", name:"팬 스테이크 + 버섯 소스", time:"30분", difficulty:3, desc:"버터 배스팅으로 만드는 레스토랑급 팬 스테이크.", color:"#F8F0FF", border:"#CE93D8", accent:"#7B1FA2", tag:"특별한 날", tagBg:"#EDE0FF", imageSvg:"steak",
    tips:"💡 굽기 30분 전 상온에 꺼내두세요. 차가운 고기를 바로 구우면 겉은 타고 속은 안 익어요!",
    ingredients:[{name:"스테이크용 소고기",amount:"200g 두께 2cm+"},{name:"버터",amount:"2큰술"},{name:"마늘",amount:"3쪽 통으로"},{name:"양송이버섯",amount:"5개"},{name:"생크림 or 우유",amount:"100ml"},{name:"굵은 소금·후추",amount:"밑간용"}],
    steps:[{icon:"🥩",title:"고기 준비",desc:"상온 30분 + 키친타월 물기 제거 + 소금·후추 앞뒤 뿌리기."},{icon:"🔥",title:"시어링",desc:"연기 날 때까지 달궈요. 앞면 2분 → 뒷면 2분. 절대 누르지 마세요!"},{icon:"🧈",title:"버터 배스팅",desc:"버터+마늘+허브 넣고 약불. 버터를 고기에 계속 끼얹어요. 1분 반복!"},{icon:"🍄",title:"버섯 소스 & 휴지",desc:"고기 꺼내 5분 휴지 필수! 같은 팬에 버섯+우유+버터로 소스 만들어요."}],
    youtube:"https://www.youtube.com/@%EC%85%B0%ED%94%84%EC%9D%B4%EC%9B%90%EC%9D%BC" },
];

const DifficultyBar = ({ level, accent }) => (
  <div style={{ display:"flex", gap:4, alignItems:"center" }}>
    {[1,2,3].map(i => (
      <div key={i} style={{ width:18, height:7, borderRadius:4, background: i<=level ? accent : `${accent}33` }}/>
    ))}
    <span style={{ fontSize:11, color:"#999", marginLeft:4, fontWeight:600 }}>
      {level===1?"쉬움":level===2?"보통":"어려움"}
    </span>
  </div>
);

export default function App() {
  const [selected, setSelected] = useState(null);
  const [activeCategory, setActiveCategory] = useState("전체");
  const [liked, setLiked] = useState({});
  const [openStep, setOpenStep] = useState(null);

  const filtered = activeCategory==="전체" ? menus : menus.filter(m=>m.category===activeCategory);
  const toggleLike = (id,e) => { e&&e.stopPropagation(); setLiked(p=>({...p,[id]:!p[id]})); };

  return (
    <div style={{ minHeight:"100vh", background:"linear-gradient(160deg,#FFF0F5 0%,#F0F5FF 55%,#F5FFF0 100%)", fontFamily:FONT, paddingBottom:60 }}>

      {/* Header */}
      <div style={{ textAlign:"center", padding:"30px 20px 18px", background:"rgba(255,255,255,0.75)", backdropFilter:"blur(12px)", borderBottom:"2px dashed #FFD6E8", marginBottom:20, position:"sticky", top:0, zIndex:100 }}>
        <div style={{ fontSize:36, marginBottom:4 }}>🍽️</div>
        <h1 style={{ margin:0, fontSize:26, fontWeight:900, color:"#FF7BAC", letterSpacing:"-1px", fontFamily:FONT }}>오늘 뭐 먹지?</h1>
        <p style={{ margin:"6px 0 14px", color:"#BBB", fontSize:13, fontWeight:500 }}>집에서 만드는 든든한 저녁 레시피 🌙</p>
        {!selected && (
          <div style={{ display:"flex", gap:8, justifyContent:"center", flexWrap:"wrap" }}>
            {categories.map(cat=>(
              <button key={cat} onClick={()=>setActiveCategory(cat)} style={{
                padding:"7px 18px", borderRadius:24, border: activeCategory===cat?"2px solid #FF7BAC":"2px solid #F0D0DA",
                background: activeCategory===cat?"#FF7BAC":"white", color: activeCategory===cat?"white":"#FF7BAC",
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
            <div key={menu.id} onClick={()=>{setSelected(menu);setOpenStep(null);}}
              style={{ background:menu.color, border:`2px solid ${menu.border}`, borderRadius:28, overflow:"hidden", cursor:"pointer", boxShadow:"0 4px 16px rgba(0,0,0,0.07)", transition:"transform 0.18s, box-shadow 0.18s" }}
              onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-6px)";e.currentTarget.style.boxShadow="0 12px 32px rgba(0,0,0,0.13)";}}
              onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="0 4px 16px rgba(0,0,0,0.07)";}}
            >
              {/* Illustration */}
              <div style={{ height:140, background:`linear-gradient(135deg,${menu.border}55,${menu.border}22)`, display:"flex", alignItems:"center", justifyContent:"center", position:"relative" }}>
                <div style={{ width:130, height:130 }} dangerouslySetInnerHTML={{__html:illustrations[menu.imageSvg]}}/>
                <button onClick={e=>toggleLike(menu.id,e)} style={{ position:"absolute", top:10, right:12, background:"rgba(255,255,255,0.85)", border:"none", borderRadius:"50%", width:34, height:34, cursor:"pointer", fontSize:16, display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 2px 8px rgba(0,0,0,0.1)" }}>
                  {liked[menu.id]?"❤️":"🤍"}
                </button>
                <span style={{ position:"absolute", top:10, left:12, background:`${channelColors[menu.channel]}`, borderRadius:14, padding:"3px 10px", fontSize:10, fontWeight:800, color:"#fff", letterSpacing:0.5 }}>
                  {channelLabel[menu.channel]}
                </span>
              </div>
              <div style={{ padding:"14px 18px 18px" }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:8 }}>
                  <span style={{ background:menu.tagBg, padding:"4px 12px", borderRadius:20, fontSize:11, fontWeight:800, color:menu.accent }}>{menu.tag}</span>
                  <span style={{ fontSize:12, color:"#AAA", fontWeight:700 }}>⏱ {menu.time}</span>
                </div>
                <h2 style={{ margin:"0 0 6px", fontSize:20, fontWeight:900, color:"#222", letterSpacing:"-0.5px", fontFamily:FONT }}>{menu.name}</h2>
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
              <h2 style={{ margin:"10px 0 8px", fontSize:28, fontWeight:900, color:"#222", letterSpacing:"-1px", fontFamily:FONT }}>{selected.name}</h2>
              <p style={{ margin:"0 0 14px", fontSize:14, color:"#666", lineHeight:1.7, fontWeight:400 }}>{selected.desc}</p>
              <DifficultyBar level={selected.difficulty} accent={selected.accent}/>
              <div style={{ marginTop:14, background:"rgba(255,255,255,0.8)", borderRadius:14, padding:"12px 16px", fontSize:13, color:"#666", lineHeight:1.8, border:`1.5px dashed ${selected.border}`, fontWeight:400 }}>{selected.tips}</div>
            </div>
          </div>

          {/* Ingredients */}
          <div style={{ background:"white", borderRadius:22, padding:"20px 20px", marginBottom:14, border:`2px solid ${selected.border}`, boxShadow:"0 3px 12px rgba(0,0,0,0.05)" }}>
            <h3 style={{ margin:"0 0 14px", fontSize:17, fontWeight:900, color:"#333", fontFamily:FONT }}>🛒 재료 <span style={{fontSize:12,fontWeight:500,color:"#AAA"}}>(2인분 기준)</span></h3>
            <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
              {selected.ingredients.map((ing,i)=>(
                <div key={i} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", background:selected.color, borderRadius:12, padding:"10px 14px" }}>
                  <span style={{ fontWeight:800, color:"#333", fontSize:14, fontFamily:FONT }}>{ing.name}</span>
                  <span style={{ color:"#888", fontSize:13, fontWeight:500 }}>{ing.amount}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Steps */}
          <div style={{ background:"white", borderRadius:22, padding:"20px 20px", marginBottom:14, border:`2px solid ${selected.border}`, boxShadow:"0 3px 12px rgba(0,0,0,0.05)" }}>
            <h3 style={{ margin:"0 0 14px", fontSize:17, fontWeight:900, color:"#333", fontFamily:FONT }}>👩‍🍳 만드는 법</h3>
            <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              {selected.steps.map((step,i)=>(
                <div key={i} onClick={()=>setOpenStep(openStep===i?null:i)} style={{ background:openStep===i?selected.color:"#FAFAFA", border:`1.5px solid ${openStep===i?selected.border:"#F0F0F0"}`, borderRadius:16, padding:"14px 16px", cursor:"pointer", transition:"all 0.2s" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                    <span style={{ background:selected.accent, color:"white", width:28, height:28, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", fontSize:13, fontWeight:900, flexShrink:0, fontFamily:FONT }}>{i+1}</span>
                    <span style={{fontSize:16}}>{step.icon}</span>
                    <span style={{ fontWeight:800, color:"#333", fontSize:14, flex:1, fontFamily:FONT }}>{step.title}</span>
                    <span style={{color:"#CCC"}}>{openStep===i?"▲":"▼"}</span>
                  </div>
                  {openStep===i && <p style={{ margin:"12px 0 0 38px", fontSize:14, color:"#666", lineHeight:1.8, fontWeight:400 }}>{step.desc}</p>}
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
          <p style={{ textAlign:"center", color:"#CCC", fontSize:12, marginTop:6, marginBottom:24, fontWeight:500 }}>채널 홈으로 이동해요 🎬</p>
        </div>
      )}
    </div>
  );
}
