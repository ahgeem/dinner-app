import { useState } from "react";

const categories = ["전체", "🇰🇷 한식", "🇯🇵 일식", "🌍 양식"];

const channelLabel = {
  "김밀란": "김밀란",
  "정육왕": "정육왕",
  "은수저": "은수저",
  "육식맨": "육식맨",
  "킴서울": "킴서울",
  "셰프이원일": "셰프이원일",
};

const menus = [
  {
    id: 1, category: "🇰🇷 한식", channel: "킴서울",
    name: "김치볶음밥", time: "15분", difficulty: 1,
    desc: "묵은 김치 하나로 뚝딱! 버터 한 조각이 감칠맛의 비결.",
    cardBg: "#FFE454", fontColor: "#B8860B",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&q=80",
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
      { icon: "🍚", title: "밥 볶기", desc: "밥을 넣고 간장 1작은술을 둘러요. 주걱으로 탁탁 누르듯 센불에서 3~4분 볶아요." },
      { icon: "🍳", title: "달걀 프라이", desc: "볶음밥을 한쪽으로 밀고 빈 공간에 달걀을 깨요. 노른자는 반숙으로!" },
      { icon: "✨", title: "마무리", desc: "불 끄고 참기름 한 바퀴, 통깨 솔솔. 달걀 터뜨려 비비면 최고예요 🥄" },
    ],
    youtube: "https://www.youtube.com/@%ED%82%B4%EC%84%9C%EC%9A%B8",
  },
  {
    id: 2, category: "🇰🇷 한식", channel: "킴서울",
    name: "된장찌개", time: "25분", difficulty: 2,
    desc: "구수하고 따뜻한 엄마 손맛. 두부와 애호박만 있으면 완성!",
    cardBg: "#A8E6A3", fontColor: "#2D6B27",
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&q=80",
    tips: "💡 된장은 체에 밭쳐 풀어야 덩어리 없이 깔끔해요. 마지막 청양고추 한 개로 칼칼함 업!",
    ingredients: [
      { name: "된장", amount: "2큰술" },
      { name: "두부", amount: "반 모" },
      { name: "애호박", amount: "반 개" },
      { name: "양파", amount: "반 개" },
      { name: "다진 마늘", amount: "1작은술" },
      { name: "멸치 육수", amount: "2컵" },
    ],
    steps: [
      { icon: "🔪", title: "재료 썰기", desc: "두부 1.5cm 사각형, 애호박 반달, 양파 큼직하게 썰어요." },
      { icon: "🍶", title: "육수 끓이기", desc: "냄비에 육수를 넣고 중불로 끓여요. 된장을 체에 밭쳐 풀어요." },
      { icon: "🥦", title: "야채·두부", desc: "야채 먼저 5분, 두부 넣고 2~3분 더 끓여요." },
      { icon: "🌶️", title: "마무리", desc: "청양고추 어슷 썰어 한소끔 더 끓이면 완성!" },
    ],
    youtube: "https://www.youtube.com/@%ED%82%B4%EC%84%9C%EC%9A%B8",
  },
  {
    id: 3, category: "🇰🇷 한식", channel: "정육왕",
    name: "대패삼겹 파김치볶음", time: "20분", difficulty: 1,
    desc: "정육왕 스타일! 대패삼겹살과 파김치의 환상 조합.",
    cardBg: "#FFB347", fontColor: "#8B4500",
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=400&q=80",
    tips: "💡 파김치가 없으면 김치+대파로 대체 가능해요!",
    ingredients: [
      { name: "대패삼겹살", amount: "200g" },
      { name: "파김치", amount: "1컵" },
      { name: "고추장", amount: "1큰술" },
      { name: "간장", amount: "1큰술" },
      { name: "참기름·통깨", amount: "마무리용" },
    ],
    steps: [
      { icon: "🔥", title: "파김치 볶기", desc: "팬에 기름 없이 파김치를 먼저 볶아요." },
      { icon: "🥩", title: "고기 넣기", desc: "대패삼겹살 넣고 센불에서 볶아요." },
      { icon: "🌶️", title: "양념하기", desc: "고추장+간장 넣고 1~2분 더 볶아요." },
      { icon: "✨", title: "마무리", desc: "참기름+통깨. 뜨거운 밥에 올려 비벼먹으면 최고!" },
    ],
    youtube: "https://www.youtube.com/@meatcreator",
  },
  {
    id: 4, category: "🇰🇷 한식", channel: "정육왕",
    name: "소고기 뭇국", time: "30분", difficulty: 2,
    desc: "정육왕 고기 손질법으로 만드는 깊고 구수한 소고기 뭇국.",
    cardBg: "#D4A5A5", fontColor: "#5C1A1A",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80",
    tips: "💡 소고기는 찬물에 30분 담가 핏물을 제거해야 국물이 깔끔해요!",
    ingredients: [
      { name: "소고기 국거리", amount: "150g" },
      { name: "무", amount: "1/4개" },
      { name: "다진 마늘", amount: "1큰술" },
      { name: "국간장", amount: "2큰술" },
      { name: "참기름", amount: "1큰술" },
      { name: "물", amount: "4컵" },
    ],
    steps: [
      { icon: "🥩", title: "핏물 빼기", desc: "소고기를 찬물에 30분 담가 핏물을 빼요." },
      { icon: "🔥", title: "고기·무 볶기", desc: "참기름 두르고 고기+나박 썬 무를 볶아요." },
      { icon: "💧", title: "물 붓고 끓이기", desc: "물 4컵, 국간장, 마늘 넣고 끓여요." },
      { icon: "🌿", title: "마무리", desc: "약불 15분 끓이고 대파 올리면 완성!" },
    ],
    youtube: "https://www.youtube.com/@meatcreator",
  },
  {
    id: 5, category: "🇰🇷 한식", channel: "육식맨",
    name: "수퍼 크리스피 삼겹살", time: "40분", difficulty: 3,
    desc: "육식맨 명예의 전당! 껍질이 과자처럼 바삭한 삼겹살.",
    cardBg: "#FF8A80", fontColor: "#7F0000",
    image: "https://images.unsplash.com/photo-1562802378-063ec186a863?w=400&q=80",
    tips: "💡 껍질에 포크로 50번 이상 찔러야 해요. 소금 절임 후 냉장 하루 숙성이 핵심!",
    ingredients: [
      { name: "삼겹살 (껍질 있는 것)", amount: "500g 통으로" },
      { name: "굵은 소금", amount: "넉넉히" },
      { name: "후추", amount: "약간" },
      { name: "쌈장·상추", amount: "곁들임용" },
    ],
    steps: [
      { icon: "🍖", title: "껍질 손질", desc: "껍질 면에 포크로 구멍을 50번 이상 빽빽하게 찔러요." },
      { icon: "🧂", title: "소금 절임·숙성", desc: "껍질 면에 굵은 소금 뿌리고 냉장고에 하루(최소 4시간) 숙성해요." },
      { icon: "🔥", title: "오븐 굽기", desc: "소금 닦고 200도 40분. 마지막 5분은 230도로 바삭하게!" },
      { icon: "✨", title: "마무리", desc: "껍질이 과자처럼 바삭하면 완성! 쌈장에 상추 곁들이면 최고 🐷" },
    ],
    youtube: "https://www.youtube.com/@YOOXICMAN",
  },
  {
    id: 6, category: "🇰🇷 한식", channel: "육식맨",
    name: "순두부찌개", time: "20분", difficulty: 2,
    desc: "돼지기름으로 깊은 맛을 낸 칼칼한 순두부찌개.",
    cardBg: "#F48FB1", fontColor: "#6A0032",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80",
    tips: "💡 삼겹살을 먼저 볶아 돼지기름을 내면 국물 맛이 완전히 달라져요!",
    ingredients: [
      { name: "순두부", amount: "1봉지 400g" },
      { name: "삼겹살", amount: "50g" },
      { name: "달걀", amount: "1개" },
      { name: "고춧가루", amount: "1.5큰술" },
      { name: "다진 마늘", amount: "1큰술" },
      { name: "멸치 육수", amount: "1.5컵" },
    ],
    steps: [
      { icon: "🥩", title: "돼지기름 내기", desc: "기름 없이 삼겹살을 볶아 기름을 내요." },
      { icon: "🔥", title: "고추기름", desc: "고춧가루 약불 30초 볶아요. 육수 부어요." },
      { icon: "🫙", title: "순두부 넣기", desc: "순두부 넣고 국간장·새우젓으로 간하고 끓여요." },
      { icon: "🥚", title: "달걀 마무리", desc: "약불로 달걀 깨 넣고 반숙 되면 완성!" },
    ],
    youtube: "https://www.youtube.com/@YOOXICMAN",
  },
  {
    id: 7, category: "🇯🇵 일식", channel: "킴서울",
    name: "돈코츠 스타일 라면", time: "10분", difficulty: 1,
    desc: "우유 한 컵이 비법! 집 라면으로 돈코츠 느낌 내기.",
    cardBg: "#FFD54F", fontColor: "#7A5200",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80",
    tips: "💡 우유를 넣으면 국물이 뽀얗고 부드러워져요. 달걀은 찬물에서 7분 삶으면 반숙!",
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
      { icon: "🍝", title: "면 삶기", desc: "면+숙주 넣고 포장지보다 30초 짧게 삶아요." },
      { icon: "🍥", title: "토핑", desc: "반숙 달걀, 대파, 버터 한 조각 올리면 완성!" },
    ],
    youtube: "https://www.youtube.com/@%ED%82%B4%EC%84%9C%EC%9A%B8",
  },
  {
    id: 8, category: "🇯🇵 일식", channel: "육식맨",
    name: "규동 (소고기 덮밥)", time: "20분", difficulty: 2,
    desc: "요시노야 부럽지 않은 집밥 규동! 달콤짭짤한 소고기.",
    cardBg: "#90CAF9", fontColor: "#0D2B5E",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80",
    tips: "💡 미림을 쓰면 더 정통 규동 맛! 달걀노른자를 가운데 올리면 진짜 일식집 느낌이에요.",
    ingredients: [
      { name: "얇은 소고기", amount: "200g" },
      { name: "양파", amount: "1개 채 썰기" },
      { name: "간장·미림", amount: "각 3큰술" },
      { name: "설탕", amount: "1큰술" },
      { name: "달걀노른자", amount: "1개 토핑용" },
    ],
    steps: [
      { icon: "🧅", title: "양파 볶기", desc: "기름 두르고 양파 중불에서 5분. 갈색빛 돌면 달달한 맛이 생겨요." },
      { icon: "🥩", title: "소스+고기", desc: "간장+미림+설탕+물 소스 붓고 팔팔 끓인 뒤 소고기 넣어요." },
      { icon: "🍖", title: "고기 익히기", desc: "색 변하는 순간 불 줄이고 1~2분만 익혀요." },
      { icon: "🍚", title: "완성", desc: "밥 위에 올리고 달걀노른자 가운데 올리면 완성! 🥢" },
    ],
    youtube: "https://www.youtube.com/@YOOXICMAN",
  },
  {
    id: 9, category: "🌍 양식", channel: "김밀란",
    name: "알리오 올리오", time: "20분", difficulty: 2,
    desc: "김밀란 정통 이탈리아식! 마늘과 올리브오일만으로.",
    cardBg: "#A5D6A7", fontColor: "#1B4A1E",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&q=80",
    tips: "💡 마늘은 절대 태우면 안 돼요! 약불에서 천천히 황금빛 될 때까지. 면수가 소스의 핵심이에요.",
    ingredients: [
      { name: "스파게티면", amount: "100g" },
      { name: "마늘", amount: "5~6쪽 슬라이스" },
      { name: "엑스트라버진 올리브오일", amount: "5큰술" },
      { name: "페페론치노", amount: "2~3개" },
      { name: "면수", amount: "한 국자 필수!" },
    ],
    steps: [
      { icon: "💧", title: "면 삶기", desc: "소금 넉넉히 넣은 물에 면을 포장지보다 2분 짧게 삶아요. 면수 꼭 남겨두세요!" },
      { icon: "🧄", title: "마늘 오일", desc: "약불에서 올리브오일+마늘+페페론치노를 천천히. 황금빛이 되면 OK!" },
      { icon: "🍝", title: "면 넣고 유화", desc: "면 넣고 면수 조금씩 부으며 볶아요. 크리미한 소스가 만들어져요." },
      { icon: "✨", title: "마무리", desc: "파슬리 다져서 올리고 올리브오일 한 바퀴. 🇮🇹" },
    ],
    youtube: "https://www.youtube.com/@Kimmilan",
  },
  {
    id: 10, category: "🌍 양식", channel: "김밀란",
    name: "봉골레 파스타", time: "25분", difficulty: 2,
    desc: "김밀란 대표 레시피! 바지락에서 우러난 깊은 바다 향.",
    cardBg: "#80DEEA", fontColor: "#00363A",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&q=80",
    tips: "💡 바지락은 소금물(물 1L + 소금 2큰술)에 1시간 해감이 생명!",
    ingredients: [
      { name: "스파게티면", amount: "100g" },
      { name: "바지락", amount: "300g 해감 필수" },
      { name: "마늘", amount: "4쪽 슬라이스" },
      { name: "화이트와인 or 맛술", amount: "50ml" },
      { name: "올리브오일", amount: "4큰술" },
    ],
    steps: [
      { icon: "🐚", title: "해감하기", desc: "바지락을 소금물에 1시간 담가요." },
      { icon: "🧄", title: "마늘 볶기", desc: "올리브오일에 마늘+페페론치노 약불에서 볶아요." },
      { icon: "🍷", title: "바지락+와인", desc: "바지락 넣고 화이트와인 부어요. 뚜껑 덮고 조개 입 벌릴 때까지!" },
      { icon: "🍝", title: "면 넣고 완성", desc: "삶은 면+면수 넣고 유화시켜요. 파슬리 올리면 완성!" },
    ],
    youtube: "https://www.youtube.com/@Kimmilan",
  },
  {
    id: 11, category: "🌍 양식", channel: "은수저",
    name: "정통 까르보나라", time: "25분", difficulty: 3,
    desc: "은수저의 로마식 까르보나라! 생크림 없이 달걀과 치즈만으로.",
    cardBg: "#FFCC80", fontColor: "#6D3A00",
    image: "https://images.unsplash.com/photo-1608756687911-aa1599ab3bd9?w=400&q=80",
    tips: "💡 생크림은 절대 넣으면 안 돼요! 불에서 내린 뒤 소스를 섞어야 크리미해요.",
    ingredients: [
      { name: "스파게티면", amount: "100g" },
      { name: "판체타 or 베이컨", amount: "80g" },
      { name: "달걀노른자", amount: "3개" },
      { name: "파마산 치즈", amount: "40g 강판에 갈기" },
      { name: "후추", amount: "많이! 핵심 재료" },
    ],
    steps: [
      { icon: "🥚", title: "소스 준비", desc: "달걀노른자+간 치즈+후추 넉넉히 섞어요. 면수 1~2큰술 넣어 농도 조절해요." },
      { icon: "🥓", title: "판체타 굽기", desc: "기름 없이 판체타를 바삭하게 구워요." },
      { icon: "🍝", title: "면 볶기", desc: "삶은 면을 판체타 팬에 넣고 면수 한 국자. 불을 꺼요!" },
      { icon: "🧀", title: "소스 섞기", desc: "달걀+치즈 소스 붓고 빠르게 섞어요. 후추 한 번 더 갈면 완성!" },
    ],
    youtube: "https://www.youtube.com/@%EC%88%98%EC%A0%80",
  },
  {
    id: 12, category: "🌍 양식", channel: "셰프이원일",
    name: "팬 스테이크 + 버섯 소스", time: "30분", difficulty: 3,
    desc: "버터 배스팅으로 만드는 레스토랑급 팬 스테이크.",
    cardBg: "#CE93D8", fontColor: "#3A0050",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?w=400&q=80",
    tips: "💡 굽기 30분 전 상온에 꺼내두세요. 차가운 고기를 바로 구우면 겉은 타고 속은 안 익어요!",
    ingredients: [
      { name: "스테이크용 소고기", amount: "200g 두께 2cm+" },
      { name: "버터", amount: "2큰술" },
      { name: "마늘", amount: "3쪽 통으로" },
      { name: "양송이버섯", amount: "5개" },
      { name: "생크림 or 우유", amount: "100ml" },
      { name: "굵은 소금·후추", amount: "밑간용" },
    ],
    steps: [
      { icon: "🥩", title: "고기 준비", desc: "상온 30분 + 키친타월 물기 제거 + 소금·후추 앞뒤 뿌리기." },
      { icon: "🔥", title: "시어링", desc: "연기 날 때까지 달궈요. 앞면 2분 → 뒷면 2분. 절대 누르지 마세요!" },
      { icon: "🧈", title: "버터 배스팅", desc: "버터+마늘+허브 넣고 약불. 버터를 고기에 계속 끼얹어요. 1분 반복!" },
      { icon: "🍄", title: "버섯 소스 & 휴지", desc: "고기 꺼내 5분 휴지 필수! 같은 팬에 버섯+우유+버터로 소스 만들어요." },
    ],
    youtube: "https://www.youtube.com/@%EC%85%B0%ED%94%84%EC%9D%B4%EC%9B%90%EC%9D%BC",
  },
];

const DifficultyDots = ({ level, color }) => (
  <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
    {[1,2,3].map(i => (
      <div key={i} style={{
        width: 8, height: 8, borderRadius: "50%",
        background: i <= level ? color : `${color}44`
      }}/>
    ))}
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
    <div style={{
      minHeight: "100vh",
      background: "#FBF8F4",
      fontFamily: "'Arial Black', 'Helvetica Neue', Arial, 'Apple SD Gothic Neo', sans-serif",
      paddingBottom: 60
    }}>

      {/* Header */}
      {!selected && (
        <div style={{ padding: "36px 20px 0", background: "#FBF8F4", position: "sticky", top: 0, zIndex: 100, paddingBottom: 16 }}>
          <p style={{ margin: "0 0 4px", fontSize: 11, fontWeight: 900, color: "#C8B89A", letterSpacing: 4 }}>TONIGHT'S MENU</p>
          <h1 style={{ margin: "0 0 20px", fontSize: 36, fontWeight: 900, color: "#1A1A1A", letterSpacing: "-2px", lineHeight: 1.1, fontStyle: "italic" }}>
            오늘 뭐<br/>먹을까요?
          </h1>
          <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 4, scrollbarWidth: "none" }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} style={{
                padding: "10px 20px", borderRadius: 30, whiteSpace: "nowrap", border: "none", flexShrink: 0,
                background: activeCategory === cat ? "#1A1A1A" : "#EDE8E2",
                color: activeCategory === cat ? "#fff" : "#888",
                fontWeight: 900, fontSize: 13, cursor: "pointer",
                fontFamily: "'Arial Black', Helvetica, sans-serif",
                transition: "all 0.15s"
              }}>{cat}</button>
            ))}
          </div>
        </div>
      )}

      {/* Card Grid */}
      {!selected && (
        <div style={{ padding: "20px 16px 0" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 14
          }}>
            {filtered.map(menu => (
              <div key={menu.id}
                onClick={() => { setSelected(menu); setOpenStep(null); }}
                style={{
                  background: menu.cardBg,
                  borderRadius: 24,
                  overflow: "hidden",
                  cursor: "pointer",
                  boxShadow: "0 4px 18px rgba(0,0,0,0.10)",
                  transition: "transform 0.18s, box-shadow 0.18s",
                  display: "flex", flexDirection: "column",
                }}
                onMouseEnter={e => { e.currentTarget.style.transform="translateY(-5px) rotate(1deg)"; e.currentTarget.style.boxShadow="0 12px 32px rgba(0,0,0,0.16)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform="translateY(0) rotate(0deg)"; e.currentTarget.style.boxShadow="0 4px 18px rgba(0,0,0,0.10)"; }}
              >
                {/* Top content */}
                <div style={{ padding: "16px 14px 10px" }}>
                  <div style={{ marginBottom: 6 }}>
                    <span style={{
                      fontSize: 10, fontWeight: 900, color: menu.fontColor,
                      opacity: 0.7, letterSpacing: 1, textTransform: "uppercase",
                      fontFamily: "'Arial Black', Helvetica, sans-serif"
                    }}>{channelLabel[menu.channel]}</span>
                  </div>
                  <h2 style={{
                    margin: "0 0 10px", fontSize: 18, fontWeight: 900,
                    color: menu.fontColor, letterSpacing: "-0.5px", lineHeight: 1.2,
                    fontFamily: "'Arial Black', 'Helvetica Neue', Arial, sans-serif",
                    wordBreak: "keep-all"
                  }}>{menu.name}</h2>
                </div>

                {/* Food image */}
                <div style={{ margin: "0 10px", borderRadius: 16, overflow: "hidden", height: 130, background: `${menu.cardBg}cc`, flexShrink: 0 }}>
                  {!imgError[menu.id] ? (
                    <img
                      src={menu.image} alt={menu.name}
                      onError={() => setImgError(p=>({...p,[menu.id]:true}))}
                      style={{ width:"100%", height:"100%", objectFit:"cover" }}
                    />
                  ) : (
                    <div style={{ width:"100%", height:"100%", display:"flex", alignItems:"center", justifyContent:"center", fontSize:48 }}>🍽️</div>
                  )}
                </div>

                {/* Bottom */}
                <div style={{ padding: "10px 14px 14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:6 }}>
                    <span style={{ fontSize:14 }}>⏱</span>
                    <span style={{ fontSize:12, fontWeight:900, color:menu.fontColor }}>{menu.time}</span>
                  </div>
                  <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                    <DifficultyDots level={menu.difficulty} color={menu.fontColor}/>
                    <button onClick={e=>toggleLike(menu.id,e)} style={{
                      background:"rgba(255,255,255,0.4)", border:"none", borderRadius:"50%",
                      width:28, height:28, cursor:"pointer", fontSize:14,
                      display:"flex", alignItems:"center", justifyContent:"center"
                    }}>{liked[menu.id]?"❤️":"🤍"}</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Detail View */}
      {selected && (
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          {/* Hero */}
          <div style={{ background: selected.cardBg, padding: "48px 24px 28px", position: "relative" }}>
            <button onClick={() => setSelected(null)} style={{
              background: "rgba(255,255,255,0.4)", border: "none", borderRadius: 20,
              padding: "8px 16px", cursor: "pointer", fontSize: 13,
              color: selected.fontColor, fontWeight: 900, marginBottom: 16,
              fontFamily: "'Arial Black', Helvetica, sans-serif"
            }}>← 뒤로</button>

            <p style={{ margin:"0 0 6px", fontSize:11, fontWeight:900, color:selected.fontColor, opacity:0.6, letterSpacing:2, textTransform:"uppercase" }}>
              {channelLabel[selected.channel]} · {selected.category}
            </p>
            <h2 style={{
              margin:"0 0 12px", fontSize:34, fontWeight:900, lineHeight:1.1,
              color:selected.fontColor, letterSpacing:"-1.5px",
              fontFamily:"'Arial Black','Helvetica Neue',Arial,sans-serif",
              fontStyle:"italic"
            }}>{selected.name}</h2>
            <p style={{ margin:"0 0 16px", fontSize:14, color:selected.fontColor, opacity:0.8, lineHeight:1.6 }}>{selected.desc}</p>
            <div style={{ display:"flex", gap:14, alignItems:"center" }}>
              <span style={{ fontWeight:900, fontSize:13, color:selected.fontColor }}>⏱ {selected.time}</span>
              <DifficultyDots level={selected.difficulty} color={selected.fontColor}/>
            </div>

            {/* Image */}
            <div style={{ marginTop:20, borderRadius:20, overflow:"hidden", height:200, background:`${selected.cardBg}99` }}>
              {!imgError[selected.id] ? (
                <img src={selected.image} alt={selected.name}
                  onError={() => setImgError(p=>({...p,[selected.id]:true}))}
                  style={{ width:"100%", height:"100%", objectFit:"cover" }}/>
              ) : (
                <div style={{ width:"100%", height:"100%", display:"flex", alignItems:"center", justifyContent:"center", fontSize:80, opacity:0.3 }}>🍽️</div>
              )}
            </div>
          </div>

          <div style={{ padding: "0 18px" }}>
            {/* Tip */}
            <div style={{
              background: selected.cardBg + "55", borderRadius:20, padding:"16px 18px",
              margin:"16px 0", fontSize:13, color:"#444", lineHeight:1.8,
              borderLeft:`4px solid ${selected.cardBg}`
            }}>{selected.tips}</div>

            {/* Ingredients */}
            <div style={{ background:"#fff", borderRadius:24, padding:"20px 18px", marginBottom:14, boxShadow:"0 2px 16px rgba(0,0,0,0.06)" }}>
              <h3 style={{ margin:"0 0 14px", fontSize:18, fontWeight:900, color:"#1A1A1A", fontFamily:"'Arial Black',Helvetica,sans-serif" }}>🛒 재료</h3>
              <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
                {selected.ingredients.map((ing,i) => (
                  <div key={i} style={{ display:"flex", justifyContent:"space-between", padding:"10px 14px", background:selected.cardBg+"33", borderRadius:14 }}>
                    <span style={{ fontWeight:900, color:"#333", fontSize:14 }}>{ing.name}</span>
                    <span style={{ color:"#777", fontSize:13, fontWeight:700 }}>{ing.amount}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Steps */}
            <div style={{ background:"#fff", borderRadius:24, padding:"20px 18px", marginBottom:14, boxShadow:"0 2px 16px rgba(0,0,0,0.06)" }}>
              <h3 style={{ margin:"0 0 14px", fontSize:18, fontWeight:900, color:"#1A1A1A", fontFamily:"'Arial Black',Helvetica,sans-serif" }}>👩‍🍳 만드는 법</h3>
              <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
                {selected.steps.map((step,i) => (
                  <div key={i} onClick={() => setOpenStep(openStep===i?null:i)} style={{
                    background: openStep===i ? selected.cardBg+"44" : "#F8F4F0",
                    border:`2px solid ${openStep===i ? selected.cardBg : "transparent"}`,
                    borderRadius:18, padding:"14px 16px", cursor:"pointer", transition:"all 0.2s"
                  }}>
                    <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                      <span style={{
                        background: selected.cardBg, color: selected.fontColor,
                        width:28, height:28, borderRadius:"50%",
                        display:"flex", alignItems:"center", justifyContent:"center",
                        fontSize:13, fontWeight:900, flexShrink:0
                      }}>{i+1}</span>
                      <span style={{ fontSize:16 }}>{step.icon}</span>
                      <span style={{ fontWeight:900, color:"#1A1A1A", fontSize:14, flex:1, fontFamily:"'Arial Black',Helvetica,sans-serif" }}>{step.title}</span>
                      <span style={{ color:"#CCC" }}>{openStep===i?"▲":"▼"}</span>
                    </div>
                    {openStep===i && <p style={{ margin:"12px 0 0 38px", fontSize:14, color:"#555", lineHeight:1.8, fontFamily:"Arial,sans-serif", fontWeight:400 }}>{step.desc}</p>}
                  </div>
                ))}
              </div>
            </div>

            {/* YouTube */}
            <a href={selected.youtube} target="_blank" rel="noopener noreferrer" style={{
              display:"flex", alignItems:"center", justifyContent:"center", gap:10,
              background:"#FF0000", color:"#fff", borderRadius:20, padding:"16px",
              textDecoration:"none", fontWeight:900, fontSize:15,
              boxShadow:"0 4px 20px rgba(255,0,0,0.3)", marginBottom:28,
              fontFamily:"'Arial Black',Helvetica,sans-serif"
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
