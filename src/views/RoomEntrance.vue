<template>
<div class="room-bg" @click="blurWin">
  <div>
      <div class="sp-room my-room"><a class="button-label">我的房间</a></div>
      <!-- 搜索和排序房间的区块 -->
      <div class="room-select-label">
          <span>房间选择</span>
          <a href="#" class="button-label">人数</a>
          <a href="#" class="button-label">标签</a>
          <a href="#" class="button-label">名称</a>
          <span>
              <input type="text">
              <button>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
              </button>
          </span>
      </div>
      <!-- 房间展示列表块 -->
      <div class="room-list">
          <!-- 向左切换块(查找房间) -->
          <div class="turn-button">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
          </div>
          <div class="room-items">
            <div class="room-item"></div>
            <div class="room-item"></div>
            <div class="room-item"></div>
            <div class="room-item"></div>
          </div>
          <!-- 向右切换块(查找房间) -->
          <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
          </div>
      </div>
      <!-- 下面的按键块 -->
      <div class="create-join-button">
          <div class="sp-room"><a class="button-label">创建房间</a></div>
          <div class="sp-room"><a class="button-label">加入房间</a></div>
      </div>
      <!-- 两个小选项块 -->
      <div class="side-buttton">
            <div @click.stop="onclickWin"><svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                </svg>
            </div>
            <div class="outside-select" v-show="SmallWinflag" @click.stop="onclickWin">
                <a>我的信息</a>
                <a>创建房间</a>
            </div>
          <div><svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg></div>
      </div>
  </div>
</div>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
    name:'RoomEntrance',
    setup() {
        var SmallWinflag = ref(false);
        function onclickWin() {
            SmallWinflag.value = true
        }
        function blurWin() {
            SmallWinflag.value = false
        }
        return {
            SmallWinflag,
            onclickWin,
            blurWin,
        }
    }
}
</script>

<style scoped>
.room-bg {
    background-color: #a5b5ed;
    @apply w-screen p-8;
}

.room-bg > div {
    @apply rounded-2xl;
    background-color: #dde3f9;
    min-width: 1024px;
}

/* 按键的css设置 as人数, 标签, 名称, 我的房间 */
.button-label {
    background: #6682df;
    @apply inline-block text-gray-50;
    box-shadow: 5px 5px 5px #2a50cc;
}

.sp-room {
    font-family: '方正姚体';
    @apply flex place-content-center text-5xl font-bold;
}
.sp-room a {
    @apply py-8 px-20 rounded-2xl;
}

/* 我的房间的单独设置 */
.my-room a{
    @apply my-5;
}

.room-select-label {
    @apply ml-4 text-xl;
}
.room-select-label > span:nth-of-type(1) {
    @apply px-5 pr-6 text-3xl border-l-8 inline-block w-44 mr-2 font-bold text-2xl;
    color: #4871de;
    border-color: #a5b5ed;
    text-align-last: justify;
    font-family: '方正姚体';
}

.room-select-label > a {
    @apply mr-9 px-8 py-1 rounded-md relative -top-1 font-bold text-2xl;
    font-family: '黑体';
}

.room-select-label > span:nth-of-type(2) {
    @apply relative -top-1 ml-2;
}

.room-select-label > span:nth-of-type(2) > input {
    @apply px-4 rounded-l-full py-2 outline-none text-base w-72;
}

.room-select-label > span:nth-of-type(2) > button {
    @apply bg-white h-10 pr-3 rounded-r-full relative text-blue-600;
    top: 6px;
}

/* 点击后激活事件 */
.room-select-label > a:active {
    background-color: #374fa0;
}

/* room列表处 */
.room-list {
    @apply h-48 my-6 relative;
}

/* 两个刷新键的css设置 */
.room-list > div:first-child {
    @apply absolute left-0 -top-1 pr-8 text-gray-300;
    background: linear-gradient(to right, rgb(247, 247, 247), transparent);
    padding-top: 5.5rem;
    padding-bottom: 5.5rem;
}

.room-list > div:last-child {
    @apply absolute right-0 -top-1 pl-8 text-gray-300;
    background: linear-gradient(to left, rgb(247, 247, 247), transparent);
    padding-top: 5.5rem;
    padding-bottom: 5.5rem;
}

/* 多个房间页面 */
.room-items {
    @apply ml-3 mr-10 flex;
}

/* 单个房间页面 */
.room-item {
    @apply inline-block ml-7 h-44 bg-gray-500 mt-2 rounded-xl w-1/4;
}

/* 创建和加入按钮设置 */
.create-join-button div{
    @apply mb-4;
} 

.side-buttton {
    @apply relative -mt-8 text-gray-50;
}

.side-buttton > div {
    @apply inline-block ml-5 mb-3 p-1 rounded-xl;
    background-color: #a5c0e8;
    border-color: #6682df;
    border-width: 3.5px;
}

.side-buttton > div:last-child {
    @apply absolute mr-5 mb-3 right-0;
}

/* 多个选择框 */
.outside-select {
    @apply font-bold absolute;
    font-family: '黑体';
    color: #3e5299;
    border-block-color: 6682df;
    top: -80px;
    left: 60px;
}

.outside-select > a {
    @apply block px-4 py-1;
}


</style>