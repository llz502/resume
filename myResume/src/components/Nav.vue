<template>
    <div class="nav-wrap">
        <div :class="{nav_space}"></div>
        <header :class="{tabs_global,aboutMe, portfolio, technology,contact}">
            <div class="menu-wrap" @click="navcontent()">
                <div class="menu-box">
                    <div class="menu-inner"></div>
                </div>
            </div>
            <div :class="{nav_content}">
                <router-link to="/AboutMe" tag="li" class="item" @click.native="aboutMeActive()">
                    <a href="javascript:;">About Me</a>
                </router-link>
                <router-link to="/Portfolio" tag="li" class="item" @click.native="portfolioActive()">
                    <a href="javascript:;">Portfolio</a>
                </router-link>
                <router-link to="/TechnologyStack" tag="li" class="item" @click.native="technologyActive()">
                    <a href="javascript:;">Technology Stack</a>
                </router-link>
                <router-link to="/Contact" tag="li" class="item" @click.native="contactActive()">
                    <a href="javascript:;">Contact</a>
                </router-link>
                <div class="log" :class="{log_toggle}">
                    <a href="" title="简书">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-jianshu"></use>
                        </svg>
                    </a>
                    <a href="" title="github">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-github"></use>
                        </svg>
                    </a>
                    <a href="" title="QQ">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-qq"></use>
                        </svg>
                    </a>
                    <a href="" title="微信">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-weixin"></use>
                        </svg>
                    </a>
                </div>      
            </div>
        </header>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                tabs_global:true,
                aboutMe:true,
                portfolio:false,
                technology:false,
                contact:false,
                nav_content:true,
                nav_space:true,
                log_toggle:true,
            }
        },
        computed:{
        },
        methods:{
            navcontent() {
                this.nav_content=!this.nav_content
                this.nav_space=!this.nav-space
                this.log_toggle=!this.log_toggle
            },
            aboutMeActive() {
                this.aboutMe=true
                this.portfolio=this.technology=this.contact=false
            },
            portfolioActive() {
                this.portfolio=true
                this.aboutMe=this.technology=this.contact=false
            },
            technologyActive() {
                this.technology=true
                this.aboutMe=this.portfolio=this.contact=false
            },
            contactActive() {
                this.contact=true
                this.aboutMe=this.portfolio=this.technology=false
            }
        }
    }

</script>
<style scoped>
    .nav-wrap{
    }
    .nav_space{

    }
    .tabs_global {
        background: #bdbdbd;
        position: fixed;
        top: 0px;
        left: 0px;
        bottom: 0;
        width: 260px;
        z-index: 1;
        background: linear-gradient(to bottom, #4ad391 33%, #4cc4ef 100%);
        padding-top: 0px;
    }
    .menu-wrap{
        display: none;
    }

    .tabs_global.aboutMe{
        background: linear-gradient(to bottom, #4ad391 33%, #4cc4ef 100%);
    }

    .tabs_global.portfolio {
        background: linear-gradient(to bottom, #d36b3f 0%, #6b5f87 100%);
        background-image: linear-gradient(rgb(211, 107, 63) 0%, rgb(107, 95, 135) 100%);
    }

    .tabs_global.technology {
        background: linear-gradient(to bottom, #f8c663 33%, #f16767 100%);
        background-image: linear-gradient(rgb(248, 198, 99) 33%, rgb(241, 103, 103) 100%);
    }

    .tabs_global.contact {
        background: linear-gradient(to bottom, rgb(1, 3, 28) 33%, rgb(46, 90, 103) 100%);
    }

    .tabs_global::before {
        content: "";
        display: block;
        margin: 50px auto;
        width: 130px;
        height: 126px;
        background: url(../assets/images/myImg.png);
        background-size: 130px 126px;
        border-radius: 50%;
    }

    .tabs_global .item {
        font-family: "futura-pt", sans-serif;
        font-style: normal;
        font-weight: 400;
        letter-spacing: 2px;
        text-transform: uppercase;
        line-height: 42px;
        display: block;
        width: 100%;
        margin: 0;
    }

    .tabs_global .item:hover {
        background: #fff;
    }

    .tabs_global .item:hover>a {
        color: #404040;
    }

    .tabs_global a {
        color: #fff;
    }

    .log {
        position: absolute;
        bottom: 40px;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
    }

    .log a {
        display: inline-block;
        width: 30px;
        height: 30px;
        position: relative;
        text-align: center;
        overflow: hidden;
        margin: 0 1px;
    }

    .log a::after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 30px;
        height: 30px;
        background: RGB(76, 198, 223);
        border-radius: 50%;
        z-index: -1;
    }

    .log a::after:hover {}

    .log>a>.icon {
        width: 100%;
        height: 100%;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
        color: #fff;
        line-height: 30px;
    }

    .log>a>.icon:hover {
        color: RGB(64, 64, 64);
    }

    @media screen and (max-width: 768px){
        .nav_space {
            top: 0px;
        left: 0px;
        bottom: 0;
        width: 260px;
        }
        .nav_content{
            display: none;
        }
        .tabs_global{
            bottom: auto;
            right: 0;
            width: auto;
        }
        .tabs_global::before{
            content: "llz's Resume";
            margin:0;
            height: 52px;
            width: 100%;
            padding: 10px;
            background: none;
            font-size: 24px;
            color: #fff;
            border-bottom: 1px solid #ddd;
            text-align: left;
        }
        .menu-wrap{
            display: block;
            float: right;
            position: absolute;
            z-index: 1;
            top: 0;
            right: 0;
            padding: 13px 30px;
            display: inline-block;
            cursor: pointer;
            vertical-align: middle;
        }
        .menu-box{
            width: 30px;
            height: 24px;
            position: relative;
        }
        .menu-inner{
            width: 30px;
            height: 3px;
            background-color: #fff;
            border-radius: 3px;
            position: absolute; 
            top: 50%;
            margin-top: -2px;
        }
        .menu-inner::before,.menu-inner::after{
            content: "";
            display: block;
            width: 30px;
            height: 3px;
            background-color: #fff;
            border-radius: 3px;
            position: absolute;
        }
        .menu-inner::before{
            top: -8px;
        }
        .menu-inner::after{
            bottom: -8px;
        }
        .log_toggle{
            display: none;
        }
    }
</style>