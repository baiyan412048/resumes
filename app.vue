<script setup>
const works = reactive([
  {
    title: '蒔栽',
    type: '線上購物網站',
    dep: '從後端到前端都由我獨立製作的小型電商網站。<br />後端使用了Express.js 搭配 Mongodb，並串接了 imgur 用為圖片儲存，前端則使用 Nuxt.js 搭配 pinia，並試著使用 Nuxt 的 useCookie() 將購物車及登入紀錄持久化，金流則嘗試串接 Line pay ( sandbox )。<br />功能包含註冊會員、購物車、結帳、查看訂單 ...等。',
    src: '/web_gif_01.gif',
    links: [
      {
        name: '作品連結',
        link: 'https://shop.baiyan777.com/'
      },
      {
        name: 'Github',
        link: 'https://github.com/baiyan412048/plants'
      }
    ]
  },
  {
    title: '久勝旗幟',
    type: '線上購物網站',
    dep: '此專案的特殊需求為線上客製旗幟樣式。<br />我使用 Fabric.js 做為基底打造線上客製的功能，使用者完成客製後，會將 canvas 轉換為 png 再 POST 給後端紀錄。<br />使用者的操作也需記錄下來，在購物車的地方可再次回到產品做編輯。',
    src: '/web_gif_02.gif',
    links: [
      {
        name: '專案連結',
        link: 'https://www.jsflag.com/tw'
      }
    ]
  },
  {
    title: '元太科技 ESG',
    type: '形象網站',
    dep: '基本的形象網站，較著重在物件的進場效果及互動效果。',
    src: '/web_capture_03.jpeg',
    links: [
      {
        name: '專案連結',
        link: 'https://esg.eink.com/tw'
      }
    ]
  },
  {
    title: '元太科技形象網站',
    type: '形象網站',
    dep: '投資人專區有大量的表格，有特別寫了 CSS 樣板方便切版執行，以及針對不同的表格製作不同的 RWD 樣式',
    src: '/web_capture_04.jpeg',
    links: [
      {
        name: '專案連結',
        link: 'https://tw.eink.com'
      }
    ]
  },
  {
    title: '元太科技購物網站',
    type: '線上購物網站',
    dep: '元太科技三個專案剛好都由我負責，部分的樣式皆有沿用，在前期就已經規劃好共用樣板的製作，加速完成網站切版。',
    src: '/web_gif_05.gif',
    links: [
      {
        name: '專案連結',
        link: 'https://shopkits.eink.com/en/product'
      }
    ]
  }
])

// 錨點判斷區間陣列
const anchorPoints = reactive([])
// 錨點判斷區間事件
const anchorFollow = () => {
  const scrollTop = window.scrollY

  // 由底開始判斷
  // Array.some() return true 中斷
  anchorPoints.reverse().some(({ target, start, end }) => {
    if (scrollTop >= start && scrollTop <= end) {
      const $control = document.querySelectorAll('[anchor-control]')
      const name = target.getAttribute('anchor-target')

      $control.forEach((el) => el.classList.remove('active'))
      $control.forEach((el) => {
        if (el.getAttribute('anchor-control') == name) {
          el.classList.add('active')
        }
      })
      return true
    }
  })
}

// 錨點點擊事件
const anchorMethod = (target) => {
  window.scrollTo({
    top: document.querySelector(`[anchor-target="${target}"]`).offsetTop - 20,
    behavior: 'smooth'
  })
}

// 作品 Emoji 動畫
// Emoji Array
const emojis = reactive(['👻', '👺', '💀', '😍', '🧠', '👅', '🥳', '😻', '💯'])
// Emoji fonts size
const fonts = reactive(['30px', '32px', '34px', '36px', '38px', '40px'])
// Emoji mouseenter
const worksEmojiEnter = ($event) => {
  const $target = $event.target
  // 加入結構
  $target.insertAdjacentHTML(
    'beforeEnd',
    `<div class='emoji'><span>${
      emojis[(Math.random() * emojis.length) | 0]
    }</span></div>`
  )
  // top
  $target.querySelector('.emoji').style.top = `${
    ((Math.random() * $target.offsetHeight) | 0) + 1
  }px`
  // left
  $target.querySelector('.emoji').style.left = `${
    ((Math.random() * $target.offsetWidth) | 0) + 1
  }px`
  // font size
  $target.querySelector('.emoji').style.fontSize =
    fonts[(Math.random() * fonts.length) | 0]
  // opacity
  $target.querySelector('.emoji').style.opacity = 1
  // transform
  $target.querySelector('.emoji').style.transform = `rotate(${
    ((Math.random() * (10 + 10)) | 0) - 10
  }deg)`
}
// Emoji mouseleave
const worksEmojiLeave = ($event) => {
  $event.target.querySelector('.emoji').remove()
}

// go top
const goTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onBeforeMount(() => {
  window.removeEventListener('scroll', anchorFollow)
})

onMounted(() => {
  // 計算判斷區間
  anchorPoints.push(
    ...[...document.querySelectorAll('[anchor-target]')].map((el) => {
      return {
        target: el,
        start: el.offsetTop - window.innerHeight / 2,
        end: el.offsetTop + el.offsetHeight - window.innerHeight / 2
      }
    })
  )

  // 初始樣式
  anchorFollow()
  // 綁定卷軸事件
  window.addEventListener('scroll', anchorFollow)

  // 進場動畫
  const callback = (entries) => {
    entries.forEach((entry) => {
      const { target, isIntersecting } = entry
      if (isIntersecting) {
        target.classList.add('active')
      }
    })
  }
  const observer = new IntersectionObserver(callback, {
    threshold: 0.1
  })
  document.querySelectorAll('[observer]').forEach((el) => {
    observer.observe(el)
  })
})

useHead({
  title: 'RESUMES | Baiyan777'
})
</script>

<template>
  <div class="background"></div>
  <div class="elevator">
    <ul>
      <li anchor-control="intro" @click="anchorMethod('intro')">簡介</li>
      <li anchor-control="skill" @click="anchorMethod('skill')">技術</li>
      <li anchor-control="works" @click="anchorMethod('works')">作品</li>
    </ul>
  </div>
  <div class="outer">
    <div class="heading" observer>
      <div class="wrapper">
        <div class="corner">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <p class="date">2023 / 06 / 11</p>
        <h1 class="title">
          <span>RESUMES</span>
        </h1>
      </div>
    </div>
    <div class="intro" observer anchor-target="intro">
      <div class="wrapper">
        <div class="corner">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="container">
          <div class="shot">
            <img src="/pic.jpg" loading="lazy" alt="" />
            <div class="emoji">
              <span class="👍">👍</span>
              <span class="☀️">☀️</span>
            </div>
          </div>
          <p class="text">
            我是 陳聖元 / Eric chen<br /><br />
            商業設計系畢業後就馬上進入美編的工作，在工作的過程中接觸到網頁相關的領域後，就對網頁產生了興趣，便投入於學習中。<br /><br />
            後來很幸運的進入了威德數位設計擔任前端工程師，累積了很多的作品及經驗，在與團隊的合作之下，產出不少形象及購物網站，也寫了各種小工具致力於加速製作網站的速度，後期也協助新進人員能快速的適應工作環境及解決初期遇到的問題。<br /><br />
            <span><Icon name="ri:road-map-line" />　台灣 · 台中市</span>
            <br />
            <span>
              <a href="mailto:baiyanchen0214@gmail.com">
                <Icon name="ri:mail-line" />　baiyanchen0214@gmail.com</a
              >
            </span>
            <br />
            <span><Icon name="ri:phone-line" />　0980381643</span>
          </p>
        </div>
      </div>
    </div>
    <div class="skill" observer anchor-target="skill">
      <div class="wrapper">
        <div class="corner">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="container">
          <div class="group">
            <p class="title">Front-end</p>
            <p class="dep">
              可獨立依照設計稿切版，並製作 RWD 網站。<br />
              能獨立開發專案中的特殊功能需求。<br />
              能串接 API，並與後端溝通欄位調整。
            </p>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>Vue3</li>
              <li>Nuxt.js</li>
            </ul>
          </div>
          <div class="group">
            <p class="title">Back-end</p>
            <p class="dep">獨立設計資料庫欄位，並制定 API 路由</p>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Mongodb</li>
              <li>RESTful API</li>
            </ul>
          </div>
          <div class="group">
            <p class="title">Other</p>
            <ul>
              <li>Git</li>
              <li>Postman</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="works" observer anchor-target="works">
      <div class="wrapper">
        <div class="corner">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="container">
          <p class="tip">
            <span>作品 & 專案</span>
          </p>
          <ul>
            <li v-for="(item, key) in works" :key="key">
              <div class="head">
                <span class="type">{{ item.type }}</span>
                <span class="index"></span>
              </div>
              <p class="title">
                <a :href="item.links[0].link" target="_blank">
                  {{ item.title }}
                </a>
              </p>
              <a
                class="photo"
                :href="item.links[0].link"
                target="_blank"
                @mouseenter="worksEmojiEnter"
                @mouseleave="worksEmojiLeave"
              >
                <img :src="item.src" loading="lazy" alt="" />
              </a>
              <div class="content">
                <p class="dep" v-html="item.dep"></p>
                <div class="links">
                  <a
                    v-for="(a, index) in item.links"
                    :key="index"
                    :href="a.link"
                    target="_blank"
                  >
                    <Icon v-if="a.name == 'Github'" name="ri:github-line" />
                    <Icon v-else name="ri:link-m" />
                    {{ a.name }}
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="wrapper">
        <div class="container">
          <div class="to-top" @click="goTop">
            <Icon name="ri:arrow-up-line" />
          </div>
          <a href="https://github.com/baiyan412048">site by baiyan412048</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
@import '@/assets/base/_variable.sass'
@import '@/assets/base/_mixin.sass'
@import '@/assets/base/_function.sass'

body
  padding: 30px
  background: $gray url(./public/background.jpg)
  background-size: 300px 300px
  background-repeat: repeat
  font-family: $sans
  font-weight: 500
  line-height: 1.6

.elevator
  padding: 10px
  position: fixed
  bottom: 10px
  right: 10px
  border-radius: 10px
  background-color: rgba(#fff, .5)
  backdrop-filter: blur(1px)
  li
    padding: 10px 20px
    border-radius: 10px
    font-size: px(14)
    cursor: pointer
    transition: background .2s
    &:not(:last-child)
      margin-bottom: 10px
    +hover
      background-color: rgba($yellow, .8)
    &.active
      background-color: rgba($yellow, .8)

.outer
  margin: 0 auto
  max-width: 960px
  width: 100%
  .wrapper
    padding: 40px
    position: relative
  .corner
    position: absolute
    top: 0
    left: 0
    z-index: -1
    width: 100%
    height: 100%
    pointer-events: none
    span
      position: absolute
      width: 20px
      height: 20px
      background-color: $yellow
      &::before
        position: absolute
        top: 0
        left: 0
        background: $gray url(./public/background.jpg)
        background-size: 300px 300px
        background-repeat: repeat
        width: 100%
        height: 100%
        content: ''
      &:nth-child(1)
        top: 0
        left: 0
        &::before
          border-radius: 500px 0 0 0
      &:nth-child(2)
        top: 0
        right: 0
        &::before
          border-radius: 0 500px 0 0
      &:nth-child(3)
        bottom: 0
        left: 0
        &::before
          border-radius: 0 0 0 500px
      &:nth-child(4)
        bottom: 0
        right: 0
        &::before
          border-radius: 0 0 500px 0

.heading
  &.active
    .title
      &::before
        max-width: 400px
        transition: max-width 1s .2s cubic-bezier(0.22, 1, 0.36, 1)
      span
        opacity: 1
        transition: opacity .4s
  .date
    margin-bottom: 10px
    font-size: px(20)
    font-family: $one
    text-align: center
    letter-spacing: 10px
  .title
    position: relative
    z-index: 1
    font-size: px(100)
    line-height: 1
    font-family: $one
    text-align: center
    letter-spacing: 5px
    &::before
      position: absolute
      top: 50%
      left: 50%
      transform: translate3d(-50%, -50%, 0)
      z-index: -1
      display: block
      background-color: $yellow
      max-width: 0
      width: 100%
      height: 30px
      content: ''
    span
      opacity: 0

.intro
  &.active
    .shot
      &::before
        opacity: .15
        transition: opacity .4s
    .text
      opacity: 1
      transition: opacity .4s
  .container
    display: flex
    gap: 40px
  .shot
    position: relative
    flex-shrink: 0
    border: 4px solid $yellow
    border-radius: 15px
    aspect-ratio: 200 / 250
    max-width: 220px
    width: 100%
    +hover
      .emoji
        .👍
          opacity: 1
          transform: rotate(-15deg) translateZ(0)
        .☀️
          opacity: 1
          transform: translateZ(0)
    &::before
      position: absolute
      top: 0
      left: 0
      z-index: 1
      display: block
      background-color: $yellow
      width: 100%
      height: 100%
      content: ''
    img
      border-radius: 10px
      display: block
      width: 100%
      height: 100%
      object-fit: cover
  .emoji
    position: absolute
    top: 0
    left: 0
    z-index: 2
    width: 100%
    height: 100%
    font-family: emoji
    .👍
      position: absolute
      bottom: 5%
      left: -10%
      transform: rotate(15deg) translate3d(15px, 15px, 0)
      font-size: px(38)
      opacity: 0
      transition: opacity .4s, transform .4s
    .☀️
      position: absolute
      top: 5%
      right: -7%
      font-size: px(32)
      transform: translate3d(10px, -10px, 0)
      opacity: 0
      transition: opacity .4s, transform .4s
  .text
    opacity: 0
    span
      font-size: px(14)

.skill
  &.active
    .group
      opacity: 1
      transform: translateZ(0)
      transition: opacity .6s, transform .6s
      &:nth-child(2)
        transition-delay: .2s
      &:nth-child(3)
        transition-delay: .4s
  .container
    display: flex
    gap: 20px
  .group
    opacity: 0
    transform: translate3d(0, 10px, 0)
    width: calc((100% - 40px) / 3)
  .title
    padding: 0 10px
    display: inline-block
    background-color: rgba($yellow, .5)
    font-size: px(20)
    font-family: $serif
    font-weight: 700
  .dep
    margin-top: 10px
    font-size: px(14)
  ul
    margin-top: 10px
  li
    display: flex
    align-items: center
    &::before
      margin-right: 8px
      display: block
      border-radius: 500px
      background-color: $yellow
      width: 4px
      height: 4px
      content: ''

.works
  &.active
    .tip
      span
        &::before
          transform: translate3d(-15px, -5px, 0) scale(1)
          transition: transform .8s
    .head
      &::before
        width: 100%
        transition: width .6s .4s
      .type
        &::after
          height: 100%
          transition: height .6s .2s
    .title,
    .photo,
    .content
      opacity: 1
      transform: translateZ(0)
      transition: opacity .8s, transform .8s
    .title
      transition-delay: .6s
    .photo
      transition-delay: .7s
    .content
      transition-delay: .8s

  .tip
    margin-bottom: 30px
    font-size: px(24)
    font-family: $serif
    text-align: center
    span
      position: relative
      z-index: 1
      display: inline-block
      &::before
        position: absolute
        top: 0
        left: 0
        transform: translate3d(-15px, -5px, 0) scale(0)
        z-index: -1
        display: block
        border-radius: 500px
        background-color: $yellow
        width: 30px
        height: 30px
        content: ''
  ul
    display: flex
    gap: 40px
    flex-wrap: wrap
    counter-reset: li
  li
    width: calc((100% - 40px) / 2)
    counter-increment: li
    // &:nth-child(odd)
    &:nth-child(even)
      .group
        flex-direction: row-reverse
  .head
    margin-bottom: 20px
    padding: 10px 0
    position: relative
    display: flex
    align-items: center
    &::before
      position: absolute
      bottom: 0
      left: 0
      display: block
      background-color: rgba($black, .5)
      width: 0
      height: 1px
      content: ''
    span
      width: 50%
    .type
      position: relative
      // border-right: 1px solid rgba($black, .5)
      text-align: center
      &::after
        position: absolute
        top: 0
        right: 0
        display: block
        background-color: rgba($black, .5)
        width: 1px
        height: 0
        content: ''
    .index
      &::before
        display: block
        font-size: px(32)
        font-family: 'Concert One', cursive
        line-height: 1
        text-align: center
        content: '#'counter(li, decimal-leading-zero)
  .title
    margin-bottom: 20px
    font-size: px(24)
    font-family: $serif
    text-align: center
    opacity: 0
    transform: translate3d(0, 10px, 0)
  .photo
    position: relative
    display: block
    flex-shrink: 0
    width: 100%
    aspect-ratio: 16 / 9
    opacity: 0
    transform: translate3d(0, 10px, 0)
    img
      display: block
      width: 100%
      height: 100%
      border-radius: 10px
      object-fit: cover
      object-position: center top
  .emoji
    position: absolute
    opacity: 0
    transition: opacity .4s
    span
      display: block
      transform: translate3d(-50%, -50%, 0)
  .content
    margin-top: 20px
    padding: 0 10px
    opacity: 0
    transform: translate3d(0, 10px, 0)
  .dep
    font-size: px(14)
  .links
    margin-top: 20px
    display: flex
    gap: 20px

.footer
  margin-top: 20px
  font-size: px(14)
  text-align: center
  .wrapper
    padding-top: 10px
    background: url(./public/background_ground.png)
    background-size: cover
    background-repeat: no-repeat
    background-position: center 72%
  .container
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
  .to-top
    display: inline-block
    font-size: px(20)
    cursor: pointer
</style>
