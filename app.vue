<script setup>
const works = reactive([
  {
    title: '蒔栽',
    type: '線上購物網站',
    dep: '從後端到前端都由我獨立製作的小型電商網站。<br />後端使用了Express.js 搭配 Mongodb，並串接了 imgur 用為圖片儲存，前端則使用 Nuxt.js 搭配 pinia，並試著使用 Nuxt 的 useCookie() 將購物車及登入紀錄持久化，金流嘗試串接 Line pay ( sandbox )。<br />功能包含註冊會員、購物車、結帳、查看訂單 ...等。',
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
    dep: '',
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
    dep: '',
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
    dep: '',
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
    dep: '',
    src: '/web_gif_05.gif',
    links: [
      {
        name: '專案連結',
        link: 'https://shopkits.eink.com/en/product'
      }
    ]
  }
])
</script>

<template>
  <div class="background"></div>
  <div class="outer">
    <div class="heading">
      <div class="wrapper">
        <div class="corner">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <p class="date">2023 / 06 / 11</p>
        <h1 class="title">RESUMES</h1>
      </div>
    </div>
    <div class="intro">
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
          </div>
          <p class="text">
            我是 陳聖元 / Eric chen<br /><br />
            商業設計系畢業後就馬上進入美編的工作，在工作的過程中接觸到網頁相關的領域後，就對網頁產生了興趣，便投入於學習中。<br /><br />
            後來很幸運的進入了威德數位設計擔任前端工程師，累積了很多的作品及經驗，在與團隊的合作之下，產出不少形象及購物網站，也寫了各種小工具致力於加速製作網站的速度，後期也幫助新進人員能快速的適應工作環境及解決初期遇到的問題。<br /><br />
            <span><Icon name="ri:road-map-line" />　台灣 · 台中市</span>
            <br />
            <span>
              <a href="baiyanchen0214@gmail.com">
                <Icon name="ri:mail-line" />　baiyanchen0214@gmail.com</a
              >
            </span>
            <br />
            <span><Icon name="ri:phone-line" />　0980381643</span>
          </p>
        </div>
      </div>
    </div>
    <div class="skill">
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
            <p class="dep">獨立設計後端欄位，並制定 API 路由</p>
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
    <div class="works">
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
              <a class="photo" :href="item.links[0].link" target="_blank">
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
        <div class="corner">
          <span></span>
          <span></span>
        </div>
        <div class="container">
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
      max-width: 400px
      width: 100%
      height: 30px
      content: ''

.intro
  .container
    display: flex
    gap: 40px
  .shot
    position: relative
    flex-shrink: 0
    aspect-ratio: 200 / 250
    max-width: 220px
    width: 100%
    &::before
      position: absolute
      top: 0
      left: 0
      display: block
      border-radius: 15px
      background-color: $yellow
      width: 100%
      height: 100%
      opacity: .15
      content: ''
    img
      border-radius: 10px
      border: 4px solid $yellow
      display: block
      width: 100%
      height: 100%
      object-fit: cover
  span
    font-size: px(14)

.skill
  .container
    display: flex
    gap: 20px
  .group
    flex: 1
    width: 100%
  .title
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
        transform: translate3d(-15px, -5px, 0)
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
    display: flex
    align-items: center
    border-bottom: 1px solid rgba($black, .5)
    span
      width: 50%
    .type
      border-right: 1px solid rgba($black, .5)
      text-align: center
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
  .photo
    position: relative
    display: block
    flex-shrink: 0
    width: 100%
    aspect-ratio: 16 / 9
    img
      display: block
      width: 100%
      height: 100%
      border-radius: 10px
      object-fit: cover
      object-position: center top
  .content
    margin-top: 20px
    padding: 0 10px
  .dep
    font-size: px(14)
  .links
    margin-top: 20px
    display: flex
    gap: 20px

.footer
  font-size: px(14)
  text-align: center
  .wrapper
    background: url(./public/background_ground.png)
    background-size: cover
    background-repeat: no-repeat
    background-position: center 72%
</style>
