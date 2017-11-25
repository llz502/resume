<template>
    <div class="contact-wrap">
        <dl>
            <dt>
                <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-dianhua"></use>
                </svg>
            </dt>
            <dd>18859661183</dd>
        </dl>
        <dl>
            <dt>
                <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-qq1"></use>
                </svg>
            </dt>
            <dd>1872132961</dd>
        </dl>
        <dl>
            <dt>
                <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-qqyouxiang"></use>
                </svg>
            </dt>
            <dd>1872132961@qq.com</dd>
        </dl>
        <dl>
            <dt>
                <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xinlangyouxiang"></use>
                </svg>
            </dt>
            <dd>llzc305@sina.com</dd>
        </dl>
        <dl>
            <dt><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-weixin2"></use>
                </svg>
            </dt>
            <dd>
                <img src="../assets/images/erweima.png" alt="微信二维码">
            </dd>
        </dl>
    </div>
</template>
<style scoped>
    dl,dt,dd{
        margin: 0;
        padding: 0;
    }
    .contact-wrap{
        font-size: 23px;
        font-weight: bold;
        color: #3fadbd;
        padding-top: 30px;
        text-align: left;
        background-color: RGB(0,13,21);
        background-image: url(../assets/images/contact-bg.png);
        background-size: cover;
        padding-bottom: 50px;
        padding-left: 50px;
    }
    dl{
        margin: 30px auto;
    }
    .contact-wrap .icon{
        width: 45px;
        height: 45px;
    }
    dl img{
        width: 150px;
        vertical-align: top;
        border-radius: 20px;
    }
    @media screen and (max-width:375px) {
        .contact-wrap{
            word-wrap:break-all; 
            width:auto;
            overflow:auto;
        }
    }
</style>