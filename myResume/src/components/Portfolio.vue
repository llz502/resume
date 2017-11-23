<template>
    <div class="portfolio-wrap">
        <div  class="portfolio-inner" onselect="return false;">
            <a v-for="(photo,index) in photos" target="__blank" class="photo photo_position" :href="photo.link">
                <div class="photo_wraper">
                    <div class="side side_front ">
                        <p class="image"><img :src="photo.src" alt=""></p>
                        <p class="caption">{{photo.caption}}</p>
                    </div>
                    <div class="side side_back">
                        <p class="technology">
                            {{photo.technology}}
                        </p>
                        <p class="application">
                            {{photo.application}}
                        </p>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                photos: [
                    { link: 'https://llz502.github.io/Imitation_DisneyApp/preview/', src: './src/assets/images/disney-home.png', 
                    caption: '迪士尼视频官网', technology: "技术栈：vue、vuex、vue-router、vue-resource、vue-axio、jquery、vue-loader、vue-cli、animate.css",
                    application: "功能 迪士尼动画资讯 看动画 登录 响应式 电脑端和移动端一套式" },
                    { link: 'https://llz502.github.io/copyYunYinYueDemo/preview/index.html', src: './src/assets/images/yunyinyue-bg.png', 
                    caption: '网易云音乐', technology: "技术栈：jquery、leancloud",
                    application: "功能 选歌 听歌 看榜单 看歌词 搜歌" },
                    { link: 'https//llz502.github.io/react-login-product/preview/index.html', src: './src/assets/images/notepad.png', 
                    caption: 'React-Notepad-App', technology: "技术栈：jquery leancloud react ",
                    application: "功能 记录事件 删除事件 注册 登录 邮箱找回密码 获取相应用户信息和记录信息" },
                    { link: 'https://llz502.github.io/chat-room/preview/index.html', src: './src/assets/images/chat-room.png', 
                    caption: 'ChatRoom', technology: "技术栈：gulp node socket.io jquery bootstrap ",
                    application: "功能 功能多人聊天室，多人同时登录，对话，系统消息；需要服务器，才能实现全部功能" },
                    { link: '//llz502.github.io/user-registration-form/index.html', src: './src/assets/images/user-form.png', 
                    caption: '用户信息登记表', technology: "技术栈：vue、jquery、bootstrap",
                    application: "功能 用户信息添加，单个删除，全部删除" },
                    { link: '//llz502.github.io/notepad-js/index.html', src: './src/assets/images/notepad-js.png', 
                    caption: '备忘录', technology: "技术栈：normalize、store、jquery、jquery.datetimepicker.min.css",
                    application: "功能 按照时间记录事件 删除事件" },
                ]
            }
        }
    }

</script>
<style scoped>
    .portfolio-wrap {
        -webkit-perspective: 800px;
        background-color: RGB(1,26,112);
        background-image: url(../assets/images/portfolio-bg.png);
        background-size: cover;
        padding-bottom: 50px;
    }
    .portfolio-inner::after{
        content: "";
        display: block;
        clear: both;
    }
    /* 海报样式 */

    .photo {
        display: block;
        color: blue;
        width: 100%;
        z-index: 1;
        box-shadow: 0 0 1px rgba(0, 0, 0, .01);
    }

    .photo .side {
        width: 100%;
        height: 100%;
        background-color: rgba(75, 75, 247, 0.562);
        position: absolute;
        top: 0;
        right: 0;
        box-sizing: border-box;
        padding: 10px;
        border:1px solid #ccc;
        box-shadow: 0 0 6px #ccc;
        border-radius: 5px;
        color: #fff;
        font-size: 27px;
    }

    .photo .side_front .image {
        width: 100%;
        overflow: hidden;
    }

    .photo .side_front .image img {
        width: 100%;
        height: auto;
    }

    .photo .side_front .caption {
        text-align: center;
        font-size: 32px;
        line-height: 50px;
        color: #fff;
        padding: 15px auto;
    }

    .photo .side_back .desc {
        color: #666;
        font-size: 14px;
        line-height: 1.5em;
    }
    /* 当前选中的海报样式 */

    .photo_position {
        float: left;
        padding: 15px 15px 0 15px;
    }

    .photo_back {
        -webkit-transform: rotateY(180deg);
        padding: 15px 0 0 15px;
    }
    /* 负责翻转 */

    .photo_wraper {
        width: 100%;
        padding-top:65%; 
        -webkit-transform-style: preserve-3d;
        -webkit-transition: all 1s;
    }

    .photo_wraper .side_front {
        -webkit-transform: rotateY(0deg);
    }

    .photo_wraper .side_back {
        -webkit-transform: rotateY(180deg);
        /* display: none; */
    }

    .photo_wraper .side {
        -webkit-backface-visibility: hidden;
    }

    .photo>.photo_wraper {
        -webkit-transform: rotateY(0deg);
        
    }

    .photo:hover>.photo_wraper {
        
        -webkit-transform: rotateY(180deg);
    }
</style>
 