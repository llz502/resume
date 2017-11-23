<template>
    <div class="aboutMe-wrap">
        <div class="aboutMe">
            <h1>Individual Resume</h1>
            <h2>Name</h2>
            <p>林立镇</p>
            <h2>Educational Background</h2>
            <p>闽南师范大学 | 数学与应用数学 | 本科 | 学士</p>
            <h2>Date Of Birth</h2>
            <p>1993年 | 05月</p>
            <h2>Career Intentions</h2>
            <p>前端开发 | 并对接触后端有较强兴趣</p>
            <h2>Blog</h2>
            <h3>简书:</h3>
            <span>
                <a href="http://www.jianshu.com/u/085c1a648228">www.jianshu.com/u/085c1a648228</a>
            </span>
            <h3>GitHub:</h3>
            <span>
                <a href="https://github.com/llz502">github.com/llz502</a>
            </span>
        </div>
    </div>
</template>
<style scoped>
    .aboutMe-wrap{
        font-family: Georgia, "Times New Roman", Times, serif;
        height: 100%;
        text-align: left;
        padding: 50px 50px;
        background: RGB(15,2,11);
        color: #fff;
        background-color: RGB(5,18,26);
        background-image: url(../assets/images/aboutMe-bg.png);
        background-size:cover; 
    }
    .aboutMe{
        height: 100%;
    }
    h1{
        padding: 20px 0;
        font-size: 28px;
        padding-bottom: 20px;
        margin: 0 0 30px 0;
        font-weight: normal;
        background: url(../assets/images/templatemo_divider.png) bottom repeat-x;
        position: relative;
    }
    h1::before{
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        border-bottom: 1px solid rgb(70, 69, 69);
        position: absolute;
        bottom: 1px;
        transform: scaleY(.5);
    }
    h1::after{
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        border-bottom: 1px solid RGB(0,0,0);
        position: absolute;
        bottom: 0;
        transform: scaleY(.5);
    }
    h2{
        padding: 10px 0;
    }
    h3{
        padding: 10px 0;
    }
    h3:first-of-type{
        padding: 0px 0px 10px;
    }
    p{
        font-family: 隶书, "Times New Roman", Times, serif;
        color: #a2979e;
        font-size: 23px;
    }
</style>