const app = Vue.createApp({
  data() {
    return {
      rosterTitle: "球員介紹",
      rosterDesc: "中科大男排，帥氣的男球員們",

      players: [
        /*{
          name: "麥宸源 - 小麥",
          role: "大砲？？",
          roleClass: "role",
          height: 175,
          hand: "右",
          number: 19,
          desc: "大家好 我是小麥 喜歡運動、玩遊戲，我人很好相處的，但大家都說我很兇？？？，夢想是考飛官，所以還在朝著夢想邁進🫡",
          photoClass: "player__photo--1",
          stats: [
            { label: "進攻", value: 88 },
            { label: "發球", value: 76 },
            { label: "防守", value: 70 }
          ],
          links: { highlight: "#", data: "#" }
        },
        {
          name: "林詠德 - 室內哥？",
          role: "欄中、大砲",
          roleClass: "role--2",
          height: 188,
          hand: "右",
          number: 1,
          desc: "直接跳過大一，大二才跑回來球隊的人肯定不是因為只打室內場，到現在還是每個位置都打一點超好笑，每天都在期待自己會變成舉球員，自由攻擊的時候手上都不會拿球（都在搶舉球的工作）",
          photoClass: "player__photo--2",
          stats: [
            { label: "組織", value: 90 },
            { label: "防守", value: 78 },
            { label: "發球", value: 72 }
          ],
          links: { highlight: "#", data: "#" }
        },
        {
          name: "江立帆 - 貝貝",
          role: "自由（非自願）",
          roleClass: "role--3",
          height: 168,
          hand: "右",
          number: 4,
          desc: "【🚶⚡腳步也能發電？日本的創新實驗】在東京最繁忙的車站裡，每一個人匆忙的腳步，都可能化為電力！日本早在幾年前就開始測試 壓電地板 (Piezoelectric Tiles) ——當人們走過時，地板會把壓力轉換成電能。雖然單一腳步所產生的電量非常微小，但當上百萬人每天穿梭於車站，累積起來的能量足以點亮 LED 燈、資訊螢幕，甚至小型裝置。這並不是要靠腳步來取代核電或太陽能，而是一種前瞻性的想像：👉 日常生活的動作，也能被轉化為乾淨能源。👉 城市未來或許能「靠居民的步伐發電」。目前這類技術仍屬於實驗性質，規模不大，但它象徵著 科技與日常結合的無限可能。✨",
          photoClass: "player__photo--3",
          stats: [
            { label: "接發", value: 92 },
            { label: "防守", value: 89 },
            { label: "速度", value: 86 }
          ],
          links: { highlight: "#", data: "#" }
        },
        {
          name: "游孟豪 - 阿豪",
          role: "暫無",
          roleClass: "role",
          height: 175,
          hand: "右",
          number: 5,
          desc: "我是大一新生打的很爛請多指教。",
          photoClass: "player__photo--4",
          stats: [
            { label: "進攻", value: 88 },
            { label: "發球", value: 76 },
            { label: "防守", value: 70 }
          ],
          links: { highlight: "#", data: "#" }
        },
        {
          name: "黃翊恩 - EN",
          role: "欄中",
          roleClass: "role--2",
          height: 175,
          hand: "右",
          number: 6,
          desc: "大家好 我是黃翊恩 可以叫我EN 每天只要起床都在想要吃什麼 有推薦的跟我說一下。最後提醒近視又愛打球的人 珍惜生命 保護眼鏡",
          photoClass: "player__photo--5",
          stats: [
            { label: "進攻", value: 88 },
            { label: "發球", value: 76 },
            { label: "防守", value: 70 }
          ],
          links: { highlight: "#", data: "#" }
        },
        {
          name: "蘇子洋 - 戰地記者",
          role: "舉球",
          roleClass: "role--3",
          height: 175,
          hand: "右",
          number: 7,
          desc: "身為舊時代的殘黨中的一員，今年可謂是非常艱苦的一年，還少了馬爾科（去考研究所了），為了繼承學長們的意志，所以二技繼續留在球隊尋找那所謂的ONE PIECE， 沒想到剛啟程就碰上了青雉 一度以為要被凍死直到大結局..... To Be Continued",
          photoClass: "player__photo--6",
          stats: [
            { label: "進攻", value: 88 },
            { label: "發球", value: 76 },
            { label: "防守", value: 70 }
          ],
          links: { highlight: "#", data: "#" }
        },
        {
          name: "鄭傑宇 - 阿傑",
          role: "舉球",
          roleClass: "role",
          height: 175,
          hand: "右",
          number: 10,
          desc: "你好 我是鄭傑宇 我喜歡聽歌打牌和貓咪 我家有6隻貓 那隻黑色的叫七筒 喜歡聽老歌 王傑最帥 然後 開心就好",
          photoClass: "player__photo--7",
          stats: [
            { label: "進攻", value: 88 },
            { label: "發球", value: 76 },
            { label: "防守", value: 70 }
          ],
          links: { highlight: "#", data: "#" }
        },
        {
          name: "古承翰 - 古翰",
          role: "自由",
          roleClass: "role--2",
          height: 175,
          hand: "右",
          number: 11,
          desc: "大家好我是古承翰 位子是L 可以叫我古翰就好我也會踢足球 有時候用腳比用手接的好",
          photoClass: "player__photo--8",
          stats: [
            { label: "進攻", value: 88 },
            { label: "發球", value: 76 },
            { label: "防守", value: 70 }
          ],
          links: { highlight: "#", data: "#" }
        },
        {
          name: "潘瑋凡 - 小潘",
          role: "攔中",
          roleClass: "role--3",
          height: 175,
          hand: "右",
          number: 12,
          desc: "大家好 我是每天早上3、4點早早就睡了 晚上5、6點就早早起床的自律男孩 最喜歡打排球 不喜歡會發光的桌子 請大家多多指教",
          photoClass: "player__photo--9",
          stats: [
            { label: "進攻", value: 88 },
            { label: "發球", value: 76 },
            { label: "防守", value: 70 }
          ],
          links: { highlight: "#", data: "#" }
        },
        {
          name: "大風車 - 風車",
          role: "副位",
          roleClass: "role",
          height: 175,
          hand: "右",
          number: 16,
          desc: "大家好 目前正在努力瘦回大一的時候 也在努力修我的肩膀 平常最喜歡看各種運動的比賽 足球 網球 籃球 什麼都看 但還是最喜歡排球 最的球隊喜歡法國國家隊 就是東京奧運看他們拿金牌才開始喜歡打排球的 然後最喜歡的球員是法國隊的N‘gapeth和荷蘭隊的Nimir 最喜歡的歌手是Laufey 請大家多多指教🙏",
          photoClass: "player__photo--10",
          stats: [
            { label: "進攻", value: 88 },
            { label: "發球", value: 76 },
            { label: "防守", value: 70 }
          ],
          links: { highlight: "#", data: "#" }
        },
        {
          name: "曾科誠 - 科誠",
          role: "副攻",
          roleClass: "role--2",
          height: 175,
          hand: "右",
          number: 17,
          desc: "明明在中科待了四年但是才18歲 可是身體卻跟老人一樣堪憂希望我右肩胛的肌肉可以趕快長出來",
          photoClass: "player__photo--11",
          stats: [
            { label: "進攻", value: 88 },
            { label: "發球", value: 76 },
            { label: "防守", value: 70 }
          ],
          links: { highlight: "#", data: "#" }
        },
        {
          name: "吳崇瑜",
          role: "自由",
          roleClass: "role--3",
          height: 175,
          hand: "右",
          number: 18,
          desc: "我的名字叫吳崇瑜 20歲。住在杜王町東北部的別墅區一帶，未婚。我在龜友連鎖店服務。每天都要加班到晚上8點才能回家。我不抽煙，酒僅止於淺嚐。晚上11點睡，每天要睡足8個小時。睡前，我一定喝一杯溫牛奶，然後做20分鐘的柔軟操，上了床，馬上熟睡。一覺到天亮，決不把疲勞和壓力留到第二天。醫生都說我很正常",
          photoClass: "player__photo--12",
          stats: [
            { label: "進攻", value: 88 },
            { label: "發球", value: 76 },
            { label: "防守", value: 70 }
          ],
          links: { highlight: "#", data: "#" }
        },
        {
          name: "陳興晟 - 興晟",
          role: "大砲 or 副位",
          roleClass: "role",
          height: 175,
          hand: "右",
          number: 20,
          desc: "大家好我是名字正著念倒著念都是是陳興晟的陳興晟，那個最後一個字唸ㄔㄥˊ有時候會要求自己自律但有時候又有點懶惰 時不時就會發呆放空看起來很笨 腦回路有點獨特的19歲小孩 生活大概也只剩下排球吃飯睡覺了吧謝謝大家",
          photoClass: "player__photo--13",
          stats: [
            { label: "進攻", value: 88 },
            { label: "發球", value: 76 },
            { label: "防守", value: 70 }
          ],
          links: { highlight: "#", data: "#" }
        },*/
      ]
    };
  },

  mounted() {
    // 年份
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    this.$nextTick(() => initAnimations());
  }
}).mount("#app");

function initAnimations() {
  if (!window.gsap || !window.ScrollTrigger) {
    console.warn("GSAP / ScrollTrigger 未載入");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const hero = document.querySelector(".hero");
  const bg = document.querySelector(".hero__bg");
  const glow = document.querySelector(".hero__glow");

  if (hero && bg) {
    gsap.to(bg, {
      yPercent: 12,
      ease: "none",
      scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true }
    });
  }

  if (hero && glow) {
    gsap.to(glow, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true }
    });
  }

  document.querySelectorAll(".player__photo").forEach((photo) => {
    gsap.to(photo, {
      y: 22,
      ease: "none",
      scrollTrigger: {
        trigger: photo.closest(".card"),
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  });

  gsap.utils.toArray(".reveal").forEach((el) => {
  gsap.fromTo(
    el,
    { autoAlpha: 0, y: 24 },
    {
      autoAlpha: 1,
      y: 0,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        end: "bottom 20%",
        toggleActions: "play none play reverse"
      }
    }
  );
});


  ScrollTrigger.refresh();
}

$.ajax({
  url: "/players",
  method: "GET",
  dataType: "json",
  success: function(data) {
    app.players = data.players;
  },
  error: function(error) {
    // 處理錯誤
  }
});

