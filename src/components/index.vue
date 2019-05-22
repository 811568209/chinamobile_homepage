<template>
    <div style="">
        <div style="" id="headLog">
            <div style="">
                <span style="">欢迎来到中国移动网站 :</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span >&nbsp;{{userIfo.username}}</span>
                <span class="loginout"  v-show="userIfo.username" @click="logout()">退出</span>
                <span class="loginout"  v-show="!userIfo.username" @click="login()">登陆</span>
            </div>
        </div>

        <div id="header" >
            <div class="header_ad1 mycontainer" v-if="header_advertis==2" >
                <img src="../assets/image/20190329170523066ono.jpg" alt="">
                <span @click="pagechang2('header_advertis',0)">
                    <img src="../assets/image/jl_close.jpg" alt=""  style="width: 100%">
                </span>
            </div>
            <div class="header_ad2 mycontainer" v-if="header_advertis==1" style="overflow: hidden;width: 1200px;height: 450px">
                <img src="../assets/image/201902281704523343Ar.jpg" alt="" v-show="header_advertis==1">
                <span @click="pagechang2('header_advertis',2)">
                    <img src="../assets/image/jl_close.jpg" alt=""  style="width: 100%">
                </span>
            </div>
            <div style="height: 20px"></div>
            <div id="hearer" class="clear mycontainer" >
                <div class="logo float_l">
                    <a href="#">
                        <img src="../assets/image/201805181516251275sK.png" alt="">
                    </a>
                </div>
                <div class="float_l">
                    <span class="move_top">深圳</span>
                    <span class="glyphicon glyphicon-chevron-down move_top"></span>
                </div>
                <div id="search" class="float_r">
                    <label for="search">
                        <input type="text" class="float_r" name="search" v-model="input_dat" @keyup.enter="jump()">
                    </label>
                    <img src="../assets/../assets/image/timg.jpg" alt="" class="float_r" @click="jump()">
                    <div>
                        <ul>
                            <li>卡劵</li>
                            <li>通话记录查询</li>
                            <li>电子发票</li>
                            <li>4G飞享套餐</li>
                            <li>流量加油包</li>
                            <li>彩铃</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="sub_hear" class="clear mycontainer" >
                <div class="service float_l">
                    全部产品服务
                </div>
                <ul class="float_l">
                    <li>首页</li>
                    <li>移动商城</li>
                    <li>网上营业厅</li>
                    <li>我的移动</li>
                    <li>服务中心</li>
                </ul>
            </div>
            <div id="banner" class="clear">
                <div class="mycontainer">
                    <div class="wapper" >
                        <ul style="position: relative">
                            <li @mouseover="wapperinner('a',1)" @mouseout="wapperinner('a',0)">
                                <div class="border" :class="{borderColor:wapperinne.a==1}">
                                    <div >
                                        <span class="glyphicon glyphicon-briefcase"></span> 办业务 <span class="glyphicon glyphicon-chevron-right psrealation"></span>
                                    </div>
                                </div>
                                <div class="wapperinner" v-show="wapperinne.a==1">
                                    <dl>
                                        <dt><a href="http://shop.10086.cn/list/140_100_100_1_0_0_0_0.html" target="_blank">主套餐</a><span style="">></span></dt>
                                        <dd style=";">
                                            <a href="https://service.bj.10086.cn/poffice/package/showpackage.action?PACKAGECODE=CXBXLCX2018" target="_blank">畅享放心用套餐</a>
                                            <a href="https://service.bj.10086.cn/poffice/jsp/package/2017/4GZXZH201712/4gzx.jsp" target="_blank">畅享套餐</a>
                                            <a href="http://shop.10086.cn/list/140_100_100_1_0_0_0_0.html" target="_blank" class="more">更多</a>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><a href="http://shop.10086.cn/list/146_100_100_0_0_0_0.html" target="_blank">流量业务</a><span style="">></span></dt>
                                        <dd>
                                            <a href="https://shop.10086.cn/goods/100_100_1057340_1042980.html" target="_blank">放心用流量包</a>
                                            <a href="https://service.bj.10086.cn/poffice/package/showpackage.action?PACKAGECODE=GPRSYW&productShowCode=sjllkxb" target="_blank">畅游包</a>
                                            <a href="https://shop.10086.cn/goods/100_100_1057755_1043302.html" target="_blank">幸福流量年包</a>
                                            <a href="http://shop.10086.cn/i/?f=rechargegprs" target="_blank">流量直充</a>
                                            <a href="http://shop.10086.cn/list/146_100_100_0_0_0_0.html" target="_blank" class="more">更多</a>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><a href="http://www.10086.cn/kdzq/index/" target="_blank">家庭业务</a><span style="">></span></dt>
                                        <dd>
                                            <a href="https://service.bj.10086.cn/poffice/package/showKdysl.action?PACKAGECODE=YDKD50M" target="_blank">50M光宽带</a>
                                            <a href="https://service.bj.10086.cn/poffice/package/showKdysl.action?PACKAGECODE=YDKD100M" target="_blank">100M光宽带</a>
                                            <a href="https://service.bj.10086.cn/poffice/package/showKdysl.action?PACKAGECODE=YDKD200M" target="_blank">200M光宽带</a>
                                            <a href="http://www.10086.cn/kdzq/index/" target="_blank" class="more">更多</a>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><a href="http://www.10086.cn/roaming/index/" target="_blank">国际/港澳台</a><span style="">></span></dt>
                                        <dd>
                                            <a href="http://www.10086.cn/roaming/yewu/ktgn/" target="_blank">开通漫游功能</a>
                                            <a href="http://www.10086.cn/roaming/yewu/ydyl/" target="_blank">一带一路多国流量</a>
                                            <a href="http://www.10086.cn/roaming/yewu/europe/" target="_blank">欧洲多国流量包</a>
                                            <a href="#" target="_blank"></a>
                                            <a href="http://www.10086.cn/roaming/index/" target="_blank" class="more">更多</a>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><a href="https://service.bj.10086.cn/poffice/jsp/my/index_md.jsp" target="_blank">基础服务</a><span style="">></span></dt>
                                        <dd>
                                            <a href="http://www.10086.cn/events/heduohao/" target="_blank">和多号</a>
                                            <a href="https://service.bj.10086.cn/poffice/package/showpackage.action?PACKAGECODE=KFMMYW" target="_blank">客服密码业务</a>
                                            <a href="https://service.bj.10086.cn/poffice/package/ywcxtest.action?PACKAGECODE=CXNEW" target="_blank" class="more">更多</a>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><a href="http://www.10086.cn/migu/" target="_blank">生活&娱乐</a><span style="">></span></dt>
                                        <dd>
                                            <a href="http://www.10086.cn/migu/dm/list_indexc.html" target="_blank">咪咕圈圈</a>
                                            <a href="http://www.10086.cn/migu/music/list_indexc.html" target="_blank">咪咕音乐</a>
                                            <a href="https://service.bj.10086.cn/poffice/package/showpackage.action?PACKAGECODE=SPLLTHB" target="_blank">视频会员包</a>
                                            <a href="http://www.10086.cn/migu/" target="_blank" class="more">更多</a>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><a href="http://www.10086.cn/support/service/events/" target="_blank">优惠活动</a><span style="">></span></dt>
                                        <dd>
                                            <a href="http://service.bj.10086.cn/bjyd/web/hk/ydwk.html" target="_blank">1元1GB王卡</a>
                                            <a href="http://www.10086.cn/support/service/events/" target="_blank" class="more">更多</a>
                                        </dd>
                                    </dl>

                                </div>
                            </li >
                            <li @mouseover.stop="wapperinner('b',1)" @mouseout.stop="wapperinner('b',0)">
                                <div class="border" :class="{borderColor:wapperinne.b==1}">
                                    <div >
                                        <span class="glyphicon glyphicon-phone"></span> 买手机 <span class="glyphicon glyphicon-chevron-right psrealation"></span>
                                    </div>
                                </div>
                                <div class="wapperinner"  v-show="wapperinne.b==1">
                                    <dl>
                                        <dt><a href="http://shop.10086.cn/list/101_100_100_0_0_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_1_100|100">热点关注</a></dt>
                                        <dd>
                                            <a href="http://shop.10086.cn/hd/events/225512.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_1_1_100|100">办合约享优惠</a>
                                            <a href="http://shop.10086.cn/goods/100_100_1045290_1040664.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_1_2_100|100">iPhone X</a>
                                            <a href="https://shop.10086.cn/goods/100_100_1058296_1044382.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_1_3_100|100">华为P20</a>
                                            <a href="http://shop.10086.cn/list/101_100_100_0_0_0_0.html" target="_blank" class="more" wtcode="INDEX_HOME_C_ZDH_2_1_MORE_100|100" style="border-right: none;">更多</a>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><a href="http://shop.10086.cn/list/101_100_100_1_0_0_0_0_0_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_2_100|100">经典品牌</a></dt>
                                        <dd><a href="http://shop.10086.cn/list/101_100_100_1_0_0_19_0_0_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_2_1_100|100">海尔</a><a href="http://shop.10086.cn/list/101_100_100_1_0_0_18_0_0_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_2_2_100|100">荣耀</a><a href="http://shop.10086.cn/list/101_100_100_1_0_0_17_0_0_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_2_3_100|100">联想</a><a href="http://shop.10086.cn/list/101_100_100_1_0_0_16_0_0_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_2_4_100|100">美图</a><a href="http://shop.10086.cn/list/101_100_100_1_0_0_15_0_0_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_2_5_100|100">酷派</a><a href="http://shop.10086.cn/list/101_100_100_1_0_0_14_0_0_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_2_6_100|100">锤子</a><a href="http://shop.10086.cn/list/101_100_100_1_0_0_13_0_0_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_2_7_100|100">CMCC</a><a href="http://shop.10086.cn/list/101_100_100_1_0_0_12_0_0_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_2_8_100|100">金立</a><a href="http://shop.10086.cn/list/101_100_100_1_0_0_11_0_0_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_2_9_100|100">诺基亚</a><a href="http://shop.10086.cn/list/101_100_100_1_0_0_10_0_0_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_2_10_100|100">中兴</a><a href="http://shop.10086.cn/list/101_100_100_1_0_0_9_0_0_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_2_11_100|100">天语</a><a href="http://shop.10086.cn/list/101_100_100_1_0_0_8_0_0_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_2_12_100|100">飞利浦</a><a href="http://shop.10086.cn/list/101_100_100_1_0_0_7_0_0_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_2_13_100|100">三星</a><a href="http://shop.10086.cn/list/101_100_100_1_0_0_6_0_0_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_2_14_100|100">VIVO</a><a href="http://shop.10086.cn/list/101_100_100_1_0_0_5_0_0_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_2_15_100|100">魅族</a><a href="http://shop.10086.cn/list/101_100_100_1_0_0_4_0_0_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_2_16_100|100">OPPO</a><a href="http://shop.10086.cn/list/101_100_100_1_0_0_3_0_0_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_2_17_100|100">华为</a><a href="http://shop.10086.cn/list/101_100_100_1_0_0_2_0_0_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_2_18_100|100">苹果</a><a href="http://shop.10086.cn/list/101_100_100_1_0_0_1_0_0_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_2_19_100|100">小米</a><a class="more" href="http://shop.10086.cn/list/101_100_100_1_0_0_0_0_0_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_2_MORE_100|100" style="border-right: none;">更多</a>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><a href="http://shop.10086.cn/list/101_100_100_1_0_0_0_0_0_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_3_100|100">价位段</a></dt>
                                        <dd><a href="http://shop.10086.cn/list/101_100_100_1_0_0_0_6_0_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_3_1_100|100">3000以上</a><a href="http://shop.10086.cn/list/101_100_100_1_0_0_0_5_0_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_3_2_100|100">2000-2999</a><a href="http://shop.10086.cn/list/101_100_100_1_0_0_0_4_0_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_3_3_100|100">1000-1999</a><a href="http://shop.10086.cn/list/101_100_100_1_0_0_0_3_0_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_3_4_100|100">700-999</a><a href="http://shop.10086.cn/list/101_100_100_1_0_0_0_2_0_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_3_5_100|100">300-699</a><a href="http://shop.10086.cn/list/101_100_100_1_0_0_0_1_0_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_3_6_100|100">0-299</a><a class="more" href="http://shop.10086.cn/list/101_100_100_1_0_0_0_0_0_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_3_MORE_100|100" style="border-right: none;">更多</a>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><a href="http://shop.10086.cn/list/101_100_100_1_0_0_0_0_0_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_4_100|100">屏幕尺寸</a></dt>
                                        <dd><a href="http://shop.10086.cn/list/101_100_100_1_0_0_0_0_5_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_4_1_100|100">5.6英寸以上</a><a href="http://shop.10086.cn/list/101_100_100_1_0_0_0_0_4_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_4_2_100|100">5.0-5.6英寸</a><a href="http://shop.10086.cn/list/101_100_100_1_0_0_0_0_3_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_4_3_100|100">4.1-4.9英寸</a><a href="http://shop.10086.cn/list/101_100_100_1_0_0_0_0_2_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_4_4_100|100">3.0-4.0英寸</a><a href="http://shop.10086.cn/list/101_100_100_1_0_0_0_0_1_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_4_5_100|100">3.0英寸以下</a><a class="more" href="http://shop.10086.cn/list/101_100_100_1_0_0_0_0_0_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_4_MORE_100|100" style="border-right: none;">更多</a>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><a href="http://shop.10086.cn/list/101_100_100_1_0_0_0_0_0_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_4_100|100">屏幕尺寸</a></dt>
                                        <dd><a href="http://shop.10086.cn/list/101_100_100_1_0_0_0_0_5_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_4_1_100|100">5.6英寸以上</a><a href="http://shop.10086.cn/list/101_100_100_1_0_0_0_0_4_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_4_2_100|100">5.0-5.6英寸</a><a href="http://shop.10086.cn/list/101_100_100_1_0_0_0_0_3_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_4_3_100|100">4.1-4.9英寸</a><a href="http://shop.10086.cn/list/101_100_100_1_0_0_0_0_2_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_4_4_100|100">3.0-4.0英寸</a><a href="http://shop.10086.cn/list/101_100_100_1_0_0_0_0_1_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_4_5_100|100">3.0英寸以下</a><a class="more" href="http://shop.10086.cn/list/101_100_100_1_0_0_0_0_0_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_4_MORE_100|100" style="border-right: none;">更多</a>
                                        </dd>
                                    </dl>
                                    <dl style=";">
                                        <dt><a href="http://shop.10086.cn/list/101_100_100_1_0_0_0_0_0_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_5_100|100">购买方式</a></dt>
                                        <dd><a href="http://shop.10086.cn/list/101_100_100_1_0_0_0_0_0_2_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_5_1_100|100">裸机</a><a href="http://shop.10086.cn/list/101_100_100_1_0_0_0_0_0_1_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_5_2_100|100">合约机</a><a class="more" href="http://shop.10086.cn/list/101_100_100_1_0_0_0_0_0_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_5_MORE_100|100" style="border-right: none;">更多</a>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><a href="http://shop.10086.cn/list/101_100_100_1_2_0_0_0_0_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_6_100|100">热门机型</a></dt>
                                        <dd>
                                            <a href="https://shop.10086.cn/goods/100_100_1060459_1047820.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_6_1_100|100">荣耀9i</a>
                                            <a href="https://shop.10086.cn/goods/100_100_1060274_1047445.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_6_2_100|100">Find X</a>
                                            <a href="https://shop.10086.cn/goods/100_100_1060484_1047886.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_6_3_100|100">荣耀7A</a>
                                            <a href="https://shop.10086.cn/goods/100_100_1059913_1046820.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_6_4_100|100">vivo NEX</a>
                                            <a href="http://shop.10086.cn/list/101_100_100_1_2_0_0_0_0_0_0.html" target="_blank" class="more" wtcode="INDEX_HOME_C_ZDH_2_6_MORE_100|100" style="border-right: none;">更多</a>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><a href="http://shop.10086.cn/list/101_100_100_0_0_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_7_100|100">精品推荐</a></dt>
                                        <dd>
                                            <a href="http://shop.10086.cn/i/?f=packremainqry" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_7_1_100|100">套餐余量查询</a>
                                            <a href="http://shop.10086.cn/i/?f=recharhisqry" target="_blank" wtcode="INDEX_HOME_C_ZDH_2_7_2_100|100">交费记录查询</a>
                                            <a href="http://shop.10086.cn/list/101_100_100_0_0_0_0.html" target="_blank" class="more" wtcode="INDEX_HOME_C_ZDH_2_7_MORE_100|100" style="border-right: none;">更多</a>
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                            <li @mouseover.stop="wapperinner('c',1)" @mouseout.stop="wapperinner('c',0)">
                                <div class="border" :class="{borderColor:wapperinne.c==1}">
                                    <div >
                                        <span class="glyphicon glyphicon-credit-card "></span> 套餐/靓号 <span class="glyphicon glyphicon-chevron-right psrealation"></span>
                                    </div>
                                </div>
                                <div class="wapperinner"  v-show="wapperinne.c==1">
                                    <dl>
                                        <dt><a href="http://shop.10086.cn/list/134_100_100_1_0_0_0_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_3_1_100|100">号段</a></dt>
                                        <dd><a href="http://shop.10086.cn/list/134_100_100_1_0_0_19_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_3_1_1_100|100">188</a><a href="http://shop.10086.cn/list/134_100_100_1_0_0_18_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_3_1_2_100|100">187</a><a href="http://shop.10086.cn/list/134_100_100_1_0_0_17_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_3_1_3_100|100">184</a><a href="http://shop.10086.cn/list/134_100_100_1_0_0_16_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_3_1_4_100|100">183</a><a href="http://shop.10086.cn/list/134_100_100_1_0_0_15_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_3_1_5_100|100">182</a><a href="http://shop.10086.cn/list/134_100_100_1_0_0_14_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_3_1_6_100|100">178</a><a href="http://shop.10086.cn/list/134_100_100_1_0_0_13_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_3_1_7_100|100">159</a><a href="http://shop.10086.cn/list/134_100_100_1_0_0_12_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_3_1_8_100|100">158</a><a href="http://shop.10086.cn/list/134_100_100_1_0_0_11_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_3_1_9_100|100">157</a><a href="http://shop.10086.cn/list/134_100_100_1_0_0_10_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_3_1_10_100|100">152</a><a href="http://shop.10086.cn/list/134_100_100_1_0_0_9_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_3_1_11_100|100">151</a><a href="http://shop.10086.cn/list/134_100_100_1_0_0_8_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_3_1_12_100|100">150</a><a href="http://shop.10086.cn/list/134_100_100_1_0_0_7_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_3_1_13_100|100">147</a><a href="http://shop.10086.cn/list/134_100_100_1_0_0_6_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_3_1_14_100|100">139</a><a href="http://shop.10086.cn/list/134_100_100_1_0_0_5_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_3_1_15_100|100">138</a><a href="http://shop.10086.cn/list/134_100_100_1_0_0_4_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_3_1_16_100|100">137</a><a href="http://shop.10086.cn/list/134_100_100_1_0_0_3_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_3_1_17_100|100">136</a><a href="http://shop.10086.cn/list/134_100_100_1_0_0_2_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_3_1_18_100|100">135</a><a href="http://shop.10086.cn/list/134_100_100_1_0_0_1_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_3_1_19_100|100">134</a><a class="more" href="http://shop.10086.cn/list/134_100_100_1_0_0_0_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_3_1_MORE_100|100" style="border-right: none;">更多</a>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><a href="http://shop.10086.cn/list/134_100_100_1_0_0_0_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_3_2_100|100">尾号规则</a></dt>
                                        <dd><a href="http://shop.10086.cn/list/134_100_100_1_0_0_0_7_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_3_2_1_100|100">尾号ABAC</a><a href="http://shop.10086.cn/list/134_100_100_1_0_0_0_6_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_3_2_2_100|100">尾号ABCD</a><a href="http://shop.10086.cn/list/134_100_100_1_0_0_0_5_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_3_2_3_100|100">尾号AAAA</a><a href="http://shop.10086.cn/list/134_100_100_1_0_0_0_4_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_3_2_4_100|100">尾号ABAB</a><a href="http://shop.10086.cn/list/134_100_100_1_0_0_0_3_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_3_2_5_100|100">尾号ABBA</a><a href="http://shop.10086.cn/list/134_100_100_1_0_0_0_2_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_3_2_6_100|100">尾号AAAB</a><a href="http://shop.10086.cn/list/134_100_100_1_0_0_0_1_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_3_2_7_100|100">尾号AABB</a><a class="more" href="http://shop.10086.cn/list/134_100_100_1_0_0_0_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_3_2_MORE_100|100" style="border-right: none;">更多</a>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><a href="http://shop.10086.cn/list/134_100_100_1_0_0_0_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_3_3_100|100">谐音选号</a></dt>
                                        <dd><a href="http://shop.10086.cn/list/134_100_100_1_0_0_0_0_9.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_3_3_1_100|100">一往情深1573</a><a href="http://shop.10086.cn/list/134_100_100_1_0_0_0_0_8.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_3_3_2_100|100">我要发518</a><a href="http://shop.10086.cn/list/134_100_100_1_0_0_0_0_7.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_3_3_3_100|100">要发要发6868</a><a href="http://shop.10086.cn/list/134_100_100_1_0_0_0_0_6.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_3_3_4_100|100">一路发168</a><a href="http://shop.10086.cn/list/134_100_100_1_0_0_0_0_5.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_3_3_5_100|100">六六大顺666</a><a href="http://shop.10086.cn/list/134_100_100_1_0_0_0_0_4.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_3_3_6_100|100">发发发888</a><a href="http://shop.10086.cn/list/134_100_100_1_0_0_0_0_3.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_3_3_7_100|100">生生世世3344</a><a href="http://shop.10086.cn/list/134_100_100_1_0_0_0_0_2.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_3_3_8_100|100">我爱你520</a><a href="http://shop.10086.cn/list/134_100_100_1_0_0_0_0_1.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_3_3_9_100|100">一生一世1314</a><a class="more" href="http://shop.10086.cn/list/134_100_100_1_0_0_0_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_3_3_MORE_100|100" style="border-right: none;">更多</a>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><a href="http://shop.10086.cn/list/140_100_100_0_0_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_3_4_100|100">套餐</a></dt>
                                        <dd>
                                            <a href="http://service.bj.10086.cn/bjyd/web/hk/cxbxl.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_3_4_1_100|100">无限卡</a>
                                            <a href="http://service.bj.10086.cn/bjyd/web/hk/ydwk.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_3_4_2_100|100">移动王卡</a>
                                            <a href="" target="_blank" wtcode="INDEX_HOME_C_ZDH_3_4_3_100|100" style="display: none;"></a>
                                            <a href="" target="_blank" wtcode="INDEX_HOME_C_ZDH_3_4_4_100|100" style="display: none;"></a>
                                            <a href="http://shop.10086.cn/list/140_100_100_0_0_0_0.html" target="_blank" class="more" wtcode="INDEX_HOME_C_ZDH_3_4_MORE_100|100" style="border-right: none;">更多</a>
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                            <li @mouseover.stop="wapperinner('d',1)" @mouseout.stop="wapperinner('d',0)">
                                <div class="border" :class="{borderColor:wapperinne.d==1}">
                                    <div >
                                        <span class="glyphicon glyphicon-home "></span> 家庭业务<span class="glyphicon glyphicon-chevron-right psrealation"></span>
                                    </div>
                                </div>
                                <div class="wapperinner"  v-show="wapperinne.d==1">
                                    <dl>
                                        <dt><a href="http://www.10086.cn/kdzq/index/" target="_blank" wtcode="INDEX_HOME_C_ZDH_4_1_100|100">宽带办理</a></dt>
                                        <dd>
                                            <a href="https://service.bj.10086.cn/poffice/package/showKDZQ.action?PACKAGECODE=JTKDBZ&amp;isCheck=1" target="_blank" wtcode="INDEX_HOME_C_ZDH_4_1_1_100|100">家庭宽带</a>
                                            <a href="https://service.bj.10086.cn/poffice/renewal/mainOfRenewal.action" target="_blank" wtcode="INDEX_HOME_C_ZDH_4_1_2_100|100">宽带续费</a>
                                            <a href="http://service.bj.10086.cn/bjyd/web/service/hmzhnsxj/index.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_4_1_3_100|100">摄像头优惠购</a>
                                            <a href="" target="_blank" wtcode="INDEX_HOME_C_ZDH_4_1_4_100|100" style="display: none;"></a>
                                            <a href="http://www.10086.cn/kdzq/index/" target="_blank" class="more" wtcode="INDEX_HOME_C_ZDH_4_1_MORE_100|100" style="border-right: none;">更多</a>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><a href="https://service.bj.10086.cn/poffice/package/showKDZQ.action?PACKAGECODE=JTKDBZ&amp;isCheck=1" target="_blank" wtcode="INDEX_HOME_C_ZDH_4_2_100|100">带宽</a></dt>
                                        <dd>
                                            <a href="https://service.bj.10086.cn/poffice/package/showKdysl.action?PACKAGECODE=YDKD50M" target="_blank" wtcode="INDEX_HOME_C_ZDH_4_2_1_100|100">50M光宽带</a>
                                            <a href="https://service.bj.10086.cn/poffice/package/showKdysl.action?PACKAGECODE=YDKD100M" target="_blank" wtcode="INDEX_HOME_C_ZDH_4_2_2_100|100">100M光宽带</a>
                                            <a href="https://service.bj.10086.cn/poffice/package/showKdysl.action?PACKAGECODE=YDKD200M" target="_blank" wtcode="INDEX_HOME_C_ZDH_4_2_3_100|100">200M光宽带</a>
                                            <a href="" target="_blank" wtcode="INDEX_HOME_C_ZDH_4_2_4_100|100" style="display: none; border-right: none;"></a>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><a href="http://service.bj.10086.cn/poffice/package/showKDZQ.action?PACKAGECODE=JTKDBZ&amp;isCheck=1" target="_blank" wtcode="INDEX_HOME_C_ZDH_4_3_100|100">宽带服务</a></dt>
                                        <dd>
                                            <a href="https://service.bj.10086.cn/poffice/package/showpackage.action?from=bj&amp;PACKAGECODE=JTKDBZ&amp;isCheck=1#" target="_blank" wtcode="INDEX_HOME_C_ZDH_4_3_1_100|100">开通小区查询</a>
                                            <a href="https://service.bj.10086.cn/poffice/jsp/package/kdbzcx/query_kdbz_info.jsp" target="_blank" wtcode="INDEX_HOME_C_ZDH_4_3_2_100|100">报装进度查询</a>
                                            <a href="https://service.bj.10086.cn/poffice/jsp/package/kdbzcx/query_jkbzgd_info.jsp" target="_blank" wtcode="INDEX_HOME_C_ZDH_4_3_3_100|100">报障进度查询</a>
                                            <a href="https://service.bj.10086.cn/poffice/bb/uc.action" target="_blank" wtcode="INDEX_HOME_C_ZDH_4_3_4_100|100">宽带自助服务</a>
                                            <a href="https://service.bj.10086.cn/bjyd/web/service/mobile/kdzz/index.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_4_3_5_100|100">宽带自助排障</a>
                                            <a href="https://service.bj.10086.cn/poffice/bb/bbindex.action" target="_blank" wtcode="INDEX_HOME_C_ZDH_4_3_6_100|100">宽带密码管理</a>
                                            <a href="" target="_blank" wtcode="INDEX_HOME_C_ZDH_4_3_7_100|100" style="display: none; border-right: none;"></a>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><a href="https://service.bj.10086.cn/poffice/package/showpackage.action?from=bj&amp;PACKAGECODE=HJT&amp;isCheck=1" target="_blank" wtcode="INDEX_HOME_C_ZDH_4_4_100|100">家庭尊享</a></dt>
                                        <dd>
                                            <a href="http://service.bj.10086.cn/bjyd/web/service/hmzhnsxj/index.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_4_4_1_100|100">家用摄像头</a>
                                            <a href="https://service.bj.10086.cn/poffice/package/showKDZQ.action?PACKAGECODE=JTKDBZ&amp;isCheck=1" target="_blank" wtcode="INDEX_HOME_C_ZDH_4_4_2_100|100">家庭宽带</a>
                                            <a href="https://service.bj.10086.cn/poffice/package/showpackage.action?from=bj&amp;PACKAGECODE=HJT" target="_blank" wtcode="INDEX_HOME_C_ZDH_4_4_3_100|100">和家庭分享季</a>
                                            <a href="http://service.bj.10086.cn/autumn/num/wnfk/showFontPage.action" target="_blank" wtcode="INDEX_HOME_C_ZDH_4_4_4_100|100">万能副卡</a>
                                            <a href="" target="_blank" wtcode="INDEX_HOME_C_ZDH_4_4_5_100|100" style="display: none;"></a>
                                            <a href="" target="_blank" wtcode="INDEX_HOME_C_ZDH_4_4_6_100|100" style="display: none; border-right: none;"></a>
                                        </dd>
                                    </dl>

                                </div>
                            </li>
                            <li @mouseover.stop="wapperinner('e',1)" @mouseout.stop="wapperinner('e',0)">
                                <div class="border" :class="{borderColor:wapperinne.e==1}">
                                    <div >
                                        <span class="glyphicon glyphicon-th-large "></span> 智能硬件<span class="glyphicon glyphicon-chevron-right psrealation"></span>
                                    </div>
                                </div>
                                <div class="wapperinner"  v-show="wapperinne.e==1">
                                    <dl>
                                        <dt><a href="http://shop.10086.cn/list/128_100_100_0_0_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_5_1_100|100">热门推荐</a></dt>
                                        <dd>
                                            <a href="http://shop.10086.cn/goods/100_100_1039172_1035962.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_5_1_1_100|100">中国移动儿童手表</a>
                                            <a href="http://shop.10086.cn/goods/100_100_1037289_1029929.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_5_1_2_100|100">乐心手环</a>
                                            <a href="http://shop.10086.cn/goods/100_100_1042702_1036637.html?WT.ac=res_search_042_371_5e6a4430ead349989c22f44137860acd_1042702" target="_blank" wtcode="INDEX_HOME_C_ZDH_5_1_3_100|100">小米盒子3c</a>
                                            <a href="https://shop.10086.cn/goods/100_100_1034433_1026647.html?" target="_blank" wtcode="INDEX_HOME_C_ZDH_5_1_4_100|100">和目C15摄像头</a>
                                            <a href="http://service.bj.10086.cn/bjyd/web/service/hmzhnsxj/index.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_5_1_5_100|100" style="border-right: none;">摄像头优惠购</a>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><a href="http://shop.10086.cn/list/128_100_100_1_0_0_0_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_5_2_100|100">品牌</a></dt>
                                        <dd><a href="http://shop.10086.cn/list/128_100_100_1_0_0_13_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_5_2_1_100|100">三星</a><a href="http://shop.10086.cn/list/128_100_100_1_0_0_12_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_5_2_2_100|100">华为</a><a href="http://shop.10086.cn/list/128_100_100_1_0_0_11_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_5_2_3_100|100">Nokia</a><a href="http://shop.10086.cn/list/128_100_100_1_0_0_10_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_5_2_4_100|100">LG</a><a href="http://shop.10086.cn/list/128_100_100_1_0_0_9_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_5_2_5_100|100">HTC</a><a href="http://shop.10086.cn/list/128_100_100_1_0_0_8_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_5_2_6_100|100">摩托罗拉</a><a href="http://shop.10086.cn/list/128_100_100_1_0_0_7_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_5_2_7_100|100">中兴</a><a href="http://shop.10086.cn/list/128_100_100_1_0_0_6_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_5_2_8_100|100">联想</a><a href="http://shop.10086.cn/list/128_100_100_1_0_0_5_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_5_2_9_100|100">其他</a><a href="http://shop.10086.cn/list/128_100_100_1_0_0_4_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_5_2_10_100|100">苹果</a><a href="http://shop.10086.cn/list/128_100_100_1_0_0_3_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_5_2_11_100|100">海信</a><a href="http://shop.10086.cn/list/128_100_100_1_0_0_2_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_5_2_12_100|100">酷派</a><a href="http://shop.10086.cn/list/128_100_100_1_0_0_1_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_5_2_13_100|100">小米</a><a class="more" href="http://shop.10086.cn/list/128_100_100_1_0_0_0_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_5_2_MORE_100|100" style="border-right: none;">更多</a></dd>
                                    </dl>
                                    <dl>
                                        <dt><a href="http://shop.10086.cn/list/128_100_100_0_0_0_0.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_5_3_100|100">手机配件</a></dt>
                                        <dd>
                                            <a href="http://shop.10086.cn/goods/100_100_1039172_1035962.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_5_3_1_100|100">中国移动儿童手表</a>
                                            <a href="http://shop.10086.cn/goods/100_100_1037289_1029929.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_5_3_2_100|100">乐心手环</a>
                                            <a href="http://shop.10086.cn/goods/100_100_1045453_1040581.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_5_3_3_100|100">壳膜套装</a>
                                            <a href="http://shop.10086.cn/goods/100_100_1038667_1031880.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_5_3_4_100|100">小米手环2</a>
                                            <a href="http://shop.10086.cn/goods/100_100_1044886_1039748.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_5_3_5_100|100">VR眼镜</a>
                                            <a href="http://shop.10086.cn/goods/100_100_1045420_1040540.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_5_3_6_100|100">小米移动电源2</a>
                                            <a href="http://shop.10086.cn/goods/100_100_1040772_1034989.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_5_3_7_100|100">绅士熊警报器</a>
                                            <a href="http://shop.10086.cn/goods/100_100_1040480_1034387.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_5_3_8_100|100">绅士熊智能版</a>
                                            <a href="http://shop.10086.cn/list/128_100_100_0_0_0_0.html" target="_blank" class="more" wtcode="INDEX_HOME_C_ZDH_5_3_MORE_100|100" style="border-right: none;">更多</a>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><a href="http://shop.10086.cn/hd/events/288787.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_5_4_100|100">智能设备</a></dt>
                                        <dd>
                                            <a href="http://search.10086.cn/shop/list?key=%E5%92%8C%E7%9B%AE&amp;provinceId=100&amp;cityId=100" target="_blank" wtcode="INDEX_HOME_C_ZDH_5_4_1_100|100">家用摄像头</a>
                                            <a href="https://shop.10086.cn/goods/100_100_1060697_1048239.html?" target="_blank" wtcode="INDEX_HOME_C_ZDH_5_4_2_100|100">智能早教机器人</a>
                                            <a href="https://shop.10086.cn/goods/100_100_1043996_1038212.html?" target="_blank" wtcode="INDEX_HOME_C_ZDH_5_4_3_100|100">行车记录仪</a>
                                            <a href="https://shop.10086.cn/goods/100_100_1060075_1047099.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_5_4_4_100|100">和目智能门锁</a>
                                            <a href="http://shop.10086.cn/goods/100_100_1022530_1015912.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_5_4_5_100|100">和路由</a>
                                            <a href="http://shop.10086.cn/goods/100_100_1056674_1042893.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_5_4_6_100|100">路由器双频</a>
                                            <a href="https://shop.10086.cn/goods/100_100_1034095_1025369.html?" target="_blank" wtcode="INDEX_HOME_C_ZDH_5_4_7_100|100">和目C13摄像头</a>
                                            <a href="http://service.bj.10086.cn/bjyd/web/service/hmzhnsxj/index.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_5_4_8_100|100">摄像头优惠购</a>
                                            <a href="http://shop.10086.cn/hd/events/288787.html" target="_blank" class="more" wtcode="INDEX_HOME_C_ZDH_5_4_MORE_100|100" style="border-right: none;">更多</a>
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                            <li @mouseover.stop="wapperinner('f',1)" @mouseout.stop="wapperinner('f',0)">
                                <div class="border" :class="{borderColor:wapperinne.f==1}">
                                    <div >
                                        <span class="glyphicon glyphicon-user"></span> 查询服务<span class="glyphicon glyphicon-chevron-right psrealation"></span>
                                    </div>
                                </div>
                                <div class="wapperinner"  v-show="wapperinne.f==1">
                                    <dl>
                                        <dt><a href="http://shop.10086.cn/i/?f=home" target="_blank" wtcode="INDEX_HOME_C_ZDH_6_1_100|100">我的账户</a></dt>
                                        <dd>
                                            <a href="http://shop.10086.cn/i/?f=billqry" target="_blank" wtcode="INDEX_HOME_C_ZDH_6_1_1_100|100">账单查询</a>
                                            <a href="http://shop.10086.cn/i/?f=billdetailqry" target="_blank" wtcode="INDEX_HOME_C_ZDH_6_1_2_100|100">详单查询</a>
                                            <a href="http://shop.10086.cn/i/?f=packremainqry" target="_blank" wtcode="INDEX_HOME_C_ZDH_6_1_3_100|100">套餐余量查询</a>
                                            <a href="http://shop.10086.cn/i/?f=recharhisqry" target="_blank" wtcode="INDEX_HOME_C_ZDH_6_1_4_100|100">交费记录查询</a>
                                            <a href="http://shop.10086.cn/i/?f=pointqry" target="_blank" wtcode="INDEX_HOME_C_ZDH_6_1_5_100|100">积分明细查询</a>
                                            <a href="http://shop.10086.cn/i/?f=belongqry" target="_blank" wtcode="INDEX_HOME_C_ZDH_6_1_6_100|100">归属地查询</a>
                                            <a href="http://shop.10086.cn/i/?f=mycoupons" target="_blank" wtcode="INDEX_HOME_C_ZDH_6_1_7_100|100">我的卡券</a>
                                            <a href="http://shop.10086.cn/i/?f=busiqrydeal" target="_blank" wtcode="INDEX_HOME_C_ZDH_6_1_8_100|100">业务查询退订</a>
                                            <a href="http://shop.10086.cn/i/?f=home" target="_blank" wtcode="INDEX_HOME_C_ZDH_6_1_9_100|100" style="border-right: none;">余额查询</a>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><a href="http://shop.10086.cn/i/?f=home" target="_blank" wtcode="INDEX_HOME_C_ZDH_6_2_100|100">我的信息</a></dt>
                                        <dd>
                                            <a href="http://shop.10086.cn/i/?f=custinfoqry" target="_blank" wtcode="INDEX_HOME_C_ZDH_6_2_1_100|100">个人信息</a>
                                            <a href="http://shop.10086.cn/i/?f=recaddrmag" target="_blank" wtcode="INDEX_HOME_C_ZDH_6_2_2_100|100">收货地址</a>
                                            <a href="http://shop.10086.cn/i/?f=invoicemag" target="_blank" wtcode="INDEX_HOME_C_ZDH_6_2_3_100|100">发票信息</a>
                                            <a href="http://shop.10086.cn/i/?f=passwordmg" target="_blank" wtcode="INDEX_HOME_C_ZDH_6_2_4_100|100">安全设置</a>
                                            <a href="http://service.bj.10086.cn/einvoice/queryInvoice.action" target="_blank" id="myinvoice" wtcode="INDEX_HOME_C_ZDH_6_2_5_100|100" style="border-right: none;">我的发票</a>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><a href="https://www.10086.cn/support/service/events/bj/index_100_100.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_6_3_100|100">我的优惠</a></dt>
                                        <dd>
                                            <a href="https://service.bj.10086.cn/poffice/package/showKDZQ.action?PACKAGECODE=JTKDBZ&amp;isCheck=1" target="_blank" wtcode="INDEX_HOME_C_ZDH_6_3_1_100|100" style="border-right: none;">宽带免费用</a>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><a href="http://shop.10086.cn/i/?f=home" target="_blank" wtcode="INDEX_HOME_C_ZDH_6_4_100|100">我的订单</a></dt>
                                        <dd>
                                            <a href="http://shop.10086.cn/i/?f=myorders" target="_blank" wtcode="INDEX_HOME_C_ZDH_6_4_1_100|100">商品订单</a>
                                            <a href="http://shop.10086.cn/i/?f=mypreorders" target="_blank" wtcode="INDEX_HOME_C_ZDH_6_4_2_100|100">预购订单</a>
                                            <a href="http://shop.10086.cn/i/?f=rechargerecord" target="_blank" wtcode="INDEX_HOME_C_ZDH_6_4_3_100|100">充值订单</a>
                                            <a href="http://shop.10086.cn/i/?f=myfav" target="_blank" wtcode="INDEX_HOME_C_ZDH_6_4_4_100|100" style="border-right: none;">我的收藏</a>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><a href="http://shop.10086.cn/i/?f=home" target="_blank" wtcode="INDEX_HOME_C_ZDH_6_5_100|100">我的消息</a></dt>
                                        <dd>
                                            <a href="http://shop.10086.cn/i/?f=advicearrival" target="_blank" wtcode="INDEX_HOME_C_ZDH_6_5_1_100|100">消息订阅</a>
                                            <a href="http://shop.10086.cn/i/?f=mynews" target="_blank" wtcode="INDEX_HOME_C_ZDH_6_5_2_100|100">消息查看</a>
                                            <a href="http://shop.10086.cn/i/?f=msgremind" target="_blank" wtcode="INDEX_HOME_C_ZDH_6_5_3_100|100" style="border-right: none;">消息提醒设置</a>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><a href="http://shop.10086.cn/i/?f=home" target="_blank" wtcode="INDEX_HOME_C_ZDH_6_6_100|100">售后服务</a></dt>
                                        <dd>
                                            <a href="http://shop.10086.cn/i/?f=returnorderqry" target="_blank" wtcode="INDEX_HOME_C_ZDH_6_6_1_100|100" style="border-right: none;">退货申请查询</a>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><a href="http://shop.10086.cn/i/?f=home" target="_blank" wtcode="INDEX_HOME_C_ZDH_6_7_100|100">我的邮箱</a></dt>
                                        <dd>
                                            <a href="http://shop.10086.cn/i/?f=remail" target="_blank" wtcode="INDEX_HOME_C_ZDH_6_7_1_100|100" style="border-right: none;">139邮箱</a>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><a href="http://www.10086.cn/support/selfservice/" target="_blank" wtcode="INDEX_HOME_C_ZDH_6_8_100|100">其它查询</a></dt>
                                        <dd>
                                            <a href="" target="_blank" wtcode="INDEX_HOME_C_ZDH_6_8_1_100|100" style="display: none;"></a>
                                            <a href="" target="_blank" wtcode="INDEX_HOME_C_ZDH_6_8_2_100|100" style="display: none;"></a>
                                            <a href="http://www.10086.cn/support/terminalapp/terminal/cmterminal/indexc.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_6_8_3_100|100">自主品牌售后点</a>
                                            <a href="http://www.10086.cn/support/terminalapp/terminal/indexc.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_6_8_4_100|100">终端售后点查询</a>
                                            <a href="http://www.10086.cn/support/selfservice/" target="_blank" class="more" wtcode="INDEX_HOME_C_ZDH_6_8_MORE_100|100" style="border-right: none;">更多</a>
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                            <li @mouseover.stop="wapperinner('g',1)" @mouseout.stop="wapperinner('g',0)">
                                <div class="border" :class="{borderColor:wapperinne.g==1}">
                                    <div >
                                        <span class="glyphicon glyphicon-heart"></span> 特色专区<span class="glyphicon glyphicon-chevron-right psrealation"></span>
                                    </div>
                                </div>
                                <div class="wapperinner" v-show="wapperinne.g==1" >
                                    <dl>
                                        <dt><a href="http://www.10086.cn/support/service/events/" target="_blank" wtcode="INDEX_HOME_C_ZDH_7_1_100|100">优惠专区</a></dt>
                                        <dd>
                                            <a href="http://shop.10086.cn/hd/events/225512.html?WT.mc_id=1803_ZDHYJ_PCZY1" target="_blank" wtcode="INDEX_HOME_C_ZDH_7_1_1_100|100">iPhone X</a>
                                            <a href="" target="_blank" wtcode="INDEX_HOME_C_ZDH_7_1_2_100|100" style="display: none;"></a>
                                            <a href="" target="_blank" wtcode="INDEX_HOME_C_ZDH_7_1_3_100|100" style="display: none;"></a>
                                            <a href="http://www.10086.cn/support/service/events/" target="_blank" class="more" wtcode="INDEX_HOME_C_ZDH_7_1_MORE_100|100" style="border-right: none;">更多</a>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><a href="http://www.10086.cn/4G/index/" target="_blank" wtcode="INDEX_HOME_C_ZDH_7_2_100|100">4G专区</a></dt>
                                        <dd>
                                            <a href="http://www.10086.cn/4G/index/#F1" target="_blank" wtcode="INDEX_HOME_C_ZDH_7_2_1_100|100">4G手机</a>
                                            <a href="http://www.10086.cn/4G/index/#F2" target="_blank" wtcode="INDEX_HOME_C_ZDH_7_2_2_100|100">4G套餐</a>
                                            <a href="http://www.10086.cn/4G/index/#F3" target="_blank" wtcode="INDEX_HOME_C_ZDH_7_2_3_100|100">4G换卡</a>
                                            <a href="http://www.10086.cn/4G/index/#F4" target="_blank" wtcode="INDEX_HOME_C_ZDH_7_2_4_100|100">4G知识</a>
                                            <a href="http://www.10086.cn/4G/index/" target="_blank" class="more" wtcode="INDEX_HOME_C_ZDH_7_2_MORE_100|100" style="border-right: none;">更多</a>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><a href="http://www.10086.cn/roaming/index/" target="_blank" wtcode="INDEX_HOME_C_ZDH_7_3_100|100">国际/港澳台</a></dt>
                                        <dd>
                                            <a href="http://www.10086.cn/roaming/search/" target="_blank" wtcode="INDEX_HOME_C_ZDH_7_3_1_100|100">国家和地区搜索</a>
                                            <a href="http://www.10086.cn/roaming/yewu/index/" target="_blank" wtcode="INDEX_HOME_C_ZDH_7_3_2_100|100">推荐业务</a>
                                            <a href="http://www.10086.cn/roaming/zizhu/index/" target="_blank" wtcode="INDEX_HOME_C_ZDH_7_3_3_100|100">自助服务</a>
                                            <a href="http://www.10086.cn/roaming/notice/" target="_blank" wtcode="INDEX_HOME_C_ZDH_7_3_4_100|100">最新消息</a>
                                            <a href="http://www.10086.cn/roaming/index/" target="_blank" class="more" wtcode="INDEX_HOME_C_ZDH_7_3_MORE_100|100" style="border-right: none;">更多</a>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><a href="http://www.10086.cn/fee/" target="_blank" wtcode="INDEX_HOME_C_ZDH_7_4_100|100">资费专区</a></dt>
                                        <dd>
                                            <a href="http://www.10086.cn/4G/index/#F2" target="_blank" wtcode="INDEX_HOME_C_ZDH_7_4_1_100|100">4G资费</a>
                                            <a href="http://www.10086.cn/roaming/index/" target="_blank" wtcode="INDEX_HOME_C_ZDH_7_4_2_100|100">国际/港澳台资费</a>
                                            <a href="http://www.10086.cn/fee/" target="_blank" wtcode="INDEX_HOME_C_ZDH_7_4_3_100|100">其它资费</a>
                                            <a href="http://www.10086.cn/fee/" target="_blank" class="more" wtcode="INDEX_HOME_C_ZDH_7_4_MORE_100|100" style="border-right: none;">更多</a>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><a href="http://www.10086.cn/kdzq/index/" target="_blank" wtcode="INDEX_HOME_C_ZDH_7_5_100|100">宽带专区</a></dt>
                                        <dd>
                                            <a href="http://www.10086.cn/kdzq/index/#F1" target="_blank" wtcode="INDEX_HOME_C_ZDH_7_5_1_100|100">业务介绍</a>
                                            <a href="http://www.10086.cn/kdzq/index/#F2" target="_blank" wtcode="INDEX_HOME_C_ZDH_7_5_2_100|100">宽带服务</a>
                                            <a href="http://www.10086.cn/kdzq/help/" target="_blank" wtcode="INDEX_HOME_C_ZDH_7_5_3_100|100">宽带问题知多少</a>
                                            <a href="http://www.10086.cn/kdtsjf/" target="_blank" wtcode="INDEX_HOME_C_ZDH_7_5_4_100|100">宽带提速降费专区</a>
                                            <a href="http://www.10086.cn/kdzq/index/" target="_blank" class="more" wtcode="INDEX_HOME_C_ZDH_7_5_MORE_100|100" style="border-right: none;">更多</a>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt><a href="http://www.10086.cn/migu/index/indexc.html" target="_blank" wtcode="INDEX_HOME_C_ZDH_7_6_100|100">咪咕专区</a></dt>
                                        <dd>
                                            <a href="http://www.10086.cn/migu/game/" target="_blank" wtcode="INDEX_HOME_C_ZDH_7_6_1_100|100">咪咕游戏</a>
                                            <a href="http://www.10086.cn/migu/dm/" target="_blank" wtcode="INDEX_HOME_C_ZDH_7_6_2_100|100">咪咕圈圈</a>
                                            <a href="http://www.10086.cn/migu/music" target="_blank" wtcode="INDEX_HOME_C_ZDH_7_6_3_100|100">咪咕音乐</a>
                                            <a href="http://www.10086.cn/migu/read" target="_blank" wtcode="INDEX_HOME_C_ZDH_7_6_4_100|100">咪咕阅读</a>
                                            <a href="http://www.10086.cn/migu/index/indexc.html" target="_blank" class="more" wtcode="INDEX_HOME_C_ZDH_7_6_MORE_100|100" style="border-right: none;">更多</a>
                                        </dd>
                                    </dl>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="rotate"  @mouseover="carousel_inter_stop()" @mouseout="carousel_inter_star()">
                        <!--carousel1-->
                        <div class="rotateinner" :class="{tran:carousel_1_tran}" :style="carousel_1">
                            <div style="" v-for="(item,idx) in carousel1">
                                <a href=""><img :src="item.img" alt=""></a>
                                <span style="font-size: 30px;position: relative;top: -40px">{{idx+1}}</span>
                            </div>
                        </div>
                        <div class="rotateli">
                            <ul style="">
                                <li v-for="item in carousel_1.number " style="">
                                    <div style=""  @mouseover="carousel_tag(-item+1)" :class="{active:carousel_1.i==-item+1}" class="rotate2">

                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="prev1 click" @click="carousel_front()" v-show="stylechang.next1==1"></div>
                        <div class="next1 click" @click="carousel_next()"  v-show="stylechang.next1==1"></div>
                    </div>
                    <div class="wapperright">
                    <div class="wapperright1 clear">
                        <ul>
                            <li><div><img src="../assets/image/20171110105225101nAb.gif" alt=""></div><span>话费查询</span></li>
                            <li><div><img src="../assets/../assets/image/20171110105416173b2B.gif" alt=""></div><span>流量查询</span></li>
                            <li><div><img src="../assets/../assets/image/20171110105801360HAQ.png" alt=""></div><span>国际/港澳台</span></li>
                            <li><div><img src="../assets/image/20171110105837896vpd.gif" alt=""></div><span>积分兑换</span></li>
                            <li><div><img src="../assets/image/20171110105921267onM.gif" alt=""></div><span>优惠专区</span></li>
                            <li><div><img src="../assets/image/20171116155618937YNP.jpg" alt=""></div><span>业务办理</span></li>
                        </ul>
                    </div>
                    <hr style="width: 80%">
                    <div class="wapperright2 clear">
                        <ul class="click">
                            <li><a href="#" style="text-decoration: none">
                                <div class="textsize" @click.prevent="page.ul=1" :class="{textsize2:page.ul==1}">话 费</div></a>
                            </li>
                            <li><a href="#" style="text-decoration: none">
                                <div class="textsize" @click.prevent="page.ul=2" :class="{textsize2:page.ul==2}">流 量</div></a>
                            </li>
                        </ul>
                        <input type="text">
                        <ul class="smomey clear click" v-show="page.ul==1">
                            <li><a href=""><div @click.prevent="page.li1=1" :class="{hover:page.li1==1}">30元</div></a></li>
                            <li><a href=""><div @click.prevent="page.li1=2" :class="{hover:page.li1==2}">50元</div></a></li>
                            <li><a href=""><div @click.prevent="page.li1=3" :class="{hover:page.li1==3}">100元</div></a></li>
                            <li><a href=""><div @click.prevent="page.li1=4" :class="{hover:page.li1==4}">300元</div></a></li>
                            <li><a href=""><div @click.prevent="page.li1=5" :class="{hover:page.li1==5}">其他</div></a></li>
                        </ul>
                        <ul class="smomey clear click ul2"  v-show="page.ul==2">
                            <li><a href=""><div @click.prevent="page.li2=1" :class="{hover:page.li2==1}"><span>1G</span><hr ><span>30元</span></div></a></li>
                            <li><a href=""><div @click.prevent="page.li2=2" :class="{hover:page.li2==2}"><span>2G</span><hr ><span>50元</span></div></a></li>
                            <li><a href=""><div @click.prevent="page.li2=3" :class="{hover:page.li2==3}"><span>3G</span><hr ><span>70元</span></div></a></li>
                            <li><a href=""><div @click.prevent="page.li2=4" :class="{hover:page.li2==4}"><span>5G</span><hr ><span>100元</span></div></a></li>
                            <li><a href=""><div @click.prevent="page.li2=5" :class="{hover:page.li2==5}"><span>10G</span><hr ><span>150元</span></div></a></li>
                        </ul>
                        <div class="sbutton click">
                            <a href="">立刻充值</a>
                        </div>
                    </div>
                </div>
                </div>
                <div style="" class="backg" :style="{background:carousel1[-carousel_1.i].color}" v-if="carousel1[1]"></div>
            </div>
        </div>



        <div id="container" >
        <div id="nav" class="clear">
            <div class="navright float_l">
                <!--carousel2-->
                <a href="" v-if="carousel2[0]"><img :src="carousel2[0].img" alt=""></a>
            </div>
            <div class="navleft float_l" @mouseover="carouse2_2_stop()" @mouseout="carouse2_2_star()">
                <div :style="{width:carousel_2_2.width,left:carousel_2_2.left}" :class="{tran3:carousel_2_tran}">
                    <!--开始-->
                    <div v-for="item in carousel2_2"  style="">
                        <div class="navlimar">
                            <h4 class="h44">{{item.title}}</h4>
                            <span>{{item.introduce}}</span>
                        </div>
                        <img :src="item.img" alt="">
                    </div>
                    <div v-for="item in carousel2_2" style="">
                        <div class="navlimar">
                            <h4 class="h44">{{item.title}}</h4>
                            <span>{{item.introduce}}</span>
                        </div>
                        <img :src="item.img" alt="">
                    </div>
                </div>
                <div class="prev" @click="carouse2_2_state(1)"></div>
                <div class="next" @click="carouse2_2_state(2)"></div>
            </div>
        </div>
        <div id="main" style="">
            <div style="" id="lou">
                <ul>
                    <li>1F</li>
                    <li>2F</li>
                    <li>3F</li>
                    <li>4F</li>
                    <li>5F</li>
                    <li>返回顶部</li>
                </ul>
            </div>
            <div id="f1" class="f">
                <div class="divw clear">
                    <a href="" class="float_l"><h3><span>1F 享优惠</span></h3></a>
                    <ul class="float_r">
                        <li class="float_r"><a href="">提速降费</a></li>
                        <li class="float_r"><a href="">全部</a></li>
                    </ul>
                </div>
                <div class="f1inner" v-if="f1[0]">
                    <div class="col1">
                        <div class="col1inner1">
                            <a href=""><img :src="f1[0].img" alt=""></a>
                        </div>
                        <div class="col1inner2">
                            <a href="">
                                <div class="float_r ">
                                    <img :src="f1[1].img" alt="" >
                                </div>
                                <div class="float_r col1box21">
                                    <h4>{{f1[1].title}}</h4>
                                    <p>{{f1[1].introduce}}</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col2">
                        <a href="">
                            <div class="col2inner1">
                                <div>
                                    <h4>{{f1[2].title}}</h4>
                                    <p>{{f1[2].introduce}}</p>
                                </div>
                                <img :src="f1[2].img" alt="">
                            </div>
                        </a>
                        <a href="">
                            <div class="col2inner2">
                                <div>
                                    <h4>{{f1[3].title}}</h4>
                                    <p>{{f1[3].introduce}}</p>
                                </div>
                                <img :src="f1[3].img" alt="">
                            </div>
                        </a>
                    </div>
                    <div class="col3">
                        <a href="">
                            <div>
                                <h4>{{f1[4].title}}</h4>
                                <p>{{f1[4].introduce}}</p>
                            </div>
                            <img :src="f1[4].img" alt="">
                        </a>
                    </div>
                    <div class="col4">
                        <div class="col4inner1">
                            <a href="">
                                <div>
                                    <h4>{{f1[5].title}}</h4>
                                    <p>{{f1[5].introduce}}</p>
                                </div>
                                <img :src="f1[5].img" alt="">
                            </a>
                        </div>
                        <div class="col4inner1">
                            <a href="">
                                <div>
                                    <h4>{{f1[6].title}}</h4>
                                    <p>{{f1[6].introduce}}</p>
                                </div>
                                <img :src="f1[6].img" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="f2" class="f">
                <div class="divw clear">
                    <a href="" class="float_l"><h3><span>2F 业务推荐</span></h3></a>
                    <ul class="float_r">
                        <li class="float_r"><a href="">全部</a></li>
                    </ul>
                </div>
                <div class="f2inner" v-if="f2[0]">
                    <div class="f2col1">
                        <div class="f2col1inner1">
                            <a href=""><img :src="f2[0].img" alt=""></a>
                        </div>
                        <div class="f2col1inner2 ">
                            <a href="">
                                <div class="float_r ">
                                    <img :src="f2[1].img" alt="" >
                                </div>
                                <div class="float_r f2col1box21">
                                    <h4>{{f2[1].title}}</h4>
                                    <p>{{f2[1].introduce}}</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="f2col234">
                        <a href="">
                            <div class="f2col234inner1">
                                <div>
                                    <h4>{{f2[2].title}}</h4>
                                    <p>{{f2[2].introduce}}</p>
                                </div>
                                <img :src="f2[2].img" alt="">
                            </div>
                        </a>
                        <a href="">
                            <div class="f2col234inner2">
                                <div>
                                    <h4>{{f2[3].title}}</h4>
                                    <p>{{f2[3].introduce}}</p>
                                </div>
                                <img :src="f2[3].img" alt="">
                            </div>
                        </a>
                    </div>
                    <div class="f2col234">
                        <a href="">
                            <div class="f2col234inner1">
                                <div>
                                    <h4>{{f2[4].title}}</h4>
                                    <p>{{f2[4].introduce}}</p>
                                </div>
                                <img :src="f2[4].img" alt="">
                            </div>
                        </a>
                        <a href="">
                            <div class="f2col234inner2">
                                <div>
                                    <h4>{{f2[5].title}}</h4>
                                    <p>{{f2[5].introduce}}</p>
                                </div>
                                <img :src="f2[5].img" alt="">
                            </div>
                        </a>
                    </div>
                    <div class="f2col234">
                        <a href="">
                            <div class="f2col234inner1">
                                <div>
                                    <h4>{{f2[6].title}}</h4>
                                    <p>{{f2[6].introduce}}</p>
                                </div>
                                <img :src="f2[6].img" alt="">
                            </div>
                        </a>
                        <a href="">
                            <div class="f2col234inner2">
                                <div>
                                    <h4>{{f2[7].title}}</h4>
                                    <p>{{f2[7].introduce}}</p>
                                </div>
                                <img :src="f2[7].img" alt="">
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div id="f3" class="f">
                <div class="divw clear">
                    <a href="" class="float_l"><h3><span>3F 手机专区</span></h3></a>
                    <ul class="float_r">
                        <li class="float_r"><a href="">千元机</a></li>
                        <li class="float_r"><a href="">合约机</a></li>
                        <li class="float_r"><a href="">全部</a></li>
                    </ul>
                </div>
                <div class="f3inner" v-if="f3[0]">
                    <div class="f3col1">
                        <a href="">
                            <div class="f3col1inner1">
                                <div>
                                    <h4>{{f3[0].title}}</h4>
                                    <p>{{f3[0].introduce}}</p>
                                    <span>{{f3[0].price | myCurrent}}</span>
                                </div>
                                <img :src="f3[0].img" alt="">
                            </div>
                        </a>
                        <div class="f3col1inner2 ">
                            <div v-for="(item,key,idx) in f3_3[0]">
                                <a href="" v-if="test(key)"><img :src="item" alt=""></a>
                            </div>
                        </div>
                    </div>
                    <div class="f3col234">
                        <div class="f3col234inner1">
                            <a href="">
                                <div>
                                    <h4>{{f3[2].title}}</h4>
                                    <p>{{f3[2].introduce}}</p>
                                    <span>{{f3[2].price | myCurrent}}</span>
                                </div>
                                <img :src="f3[2].img" alt="">
                            </a>
                        </div>
                        <div class="f3col234inner2">
                            <a href="">
                                <div>
                                    <h4>{{f3[3].title}}</h4>
                                    <p>{{f3[3].introduce}}</p>
                                    <span>{{f3[3].price | myCurrent}}</span>
                                </div>
                                <img :src="f3[3].img" alt="">
                            </a>
                        </div>
                    </div>
                    <div class="f3col234">
                        <div class="f3col234inner1">
                            <a href="">
                                <div>
                                    <h4>{{f3[4].title}}</h4>
                                    <p>{{f3[4].introduce}}</p>
                                    <span>{{f3[4].price | myCurrent}}</span>
                                </div>
                                <img :src="f3[4].img" alt="">
                            </a>
                        </div>
                        <div class="f3col234inner2">
                            <a href="">
                                <div>
                                    <h4>{{f3[5].title}}</h4>
                                    <p>{{f3[5].introduce}}</p>
                                    <span>{{f3[5].price | myCurrent}}</span>
                                </div>
                                <img :src="f3[5].img" alt="">
                            </a>
                        </div>
                    </div>
                    <div class="f3col234">
                        <div class="f3col234inner1">
                            <a href="">
                                <div>
                                    <h4>{{f3[6].title}}</h4>
                                    <p>{{f3[6].introduce}}</p>
                                    <span>{{f3[6].price | myCurrent}}</span>
                                </div>
                                <img :src="f3[6].img" alt="">
                                <!--<img :src="require('../assets/'+f3[6].img" alt="">-->
                            </a>
                        </div>
                        <div class="f3col234inner2">
                            <a href="">
                                <div>
                                    <h4>{{f3[7].title}}</h4>
                                    <p>{{f3[7].introduce}}</p>
                                    <span>{{f3[7].price | myCurrent}}</span>
                                </div>
                                <img :src="f3[7].img" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="f4" class="f">
                <div class="divw clear">
                    <a href="" class="float_l"><h3><span>4F 智能硬件</span></h3></a>
                    <ul class="float_r">
                        <li class="float_r"><a href="">智联品质生活</a></li>
                        <li class="float_r"><a href="">全部</a></li>
                    </ul>
                </div>
                <div class="f4inner" v-if="f4[0]">
                    <div class="f4col">
                        <a href="" v-for="(item,idx) in f4_4">
                            <div class="f4colinner">
                                <div>
                                    <h4>{{item.title}}</h4>
                                    <p>{{item.introduce}}</p>
                                    <span>{{item.price | myCurrent}}</span>
                                </div>
                                <img :src="item.img" alt="">
                            </div>
                        </a>
                    </div>
                    <div class="f4col234">
                        <div class="f4col234inner1">
                            <a href="">
                                <div>
                                    <h4>{{f4[4].title}}</h4>
                                    <p>{{f4[4].introduce}}</p>
                                    <span>{{f4[4].price | myCurrent}}</span>
                                </div>
                                <img :src="f4[4].img" alt="">
                            </a>
                        </div>
                        <div class="f4col234inner2">
                            <a href="">
                                <div>
                                    <h4>{{f4[5].title}}</h4>
                                    <p>{{f4[5].introduce}}</p>
                                    <span>{{f4[5].price | myCurrent}}</span>
                                </div>
                                <img :src="f4[5].img" alt="">
                            </a>
                        </div>
                    </div>
                    <div class="f4col3">
                        <div>
                            <h4>{{f4[6].title}}</h4>
                            <p>{{f4[6].introduce}}</p>
                            <span>{{f4[6].price | myCurrent}}</span>
                        </div>
                        <img :src="f4[6].img" alt="">
                    </div>
                    <div class="f4col234">
                        <div class="f4col234inner1">
                            <a href="">
                                <div>
                                    <h4>{{f4[7].title}}</h4>
                                    <p>{{f4[7].introduce}}</p>
                                    <span>{{f4[7].price | myCurrent}}</span>
                                </div>
                                <img :src="f4[7].img" alt="">
                            </a>
                        </div>
                        <div class="f4col234inner2">
                            <a href="">
                                <div>
                                    <h4>{{f4[8].title}}</h4>
                                    <p>{{f4[8].introduce}}</p>
                                    <span>{{f4[8].price | myCurrent}}</span>
                                </div>
                                <img :src="f4[8].img" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="f5" class="f">
                <div class="divw clear">
                    <a href="" class="float_l"><h3><span>5F 咪咕娱乐</span></h3></a>
                    <ul class="float_r">
                        <li class="float_r"><a href="">一生所爱</a></li>
                        <li class="float_r"><a href="">贝拉日记</a></li>
                        <li class="float_r"><a href="">王者荣耀</a></li>
                        <li class="float_r"><a href="">全部</a></li>
                    </ul>
                </div>
                <div class="clear">
                    <ul class="f5ul">
                        <li v-if="f5_1[0]" v-for="(item,idx) in f5_1" @mouseover.stop="activechang(item.id)" :class="{active:isactive==item.id}">
                            <div>
                                <a href="" class="f5a">
                                    <h4 :class="{active2:isactive==item.id}">{{item.title}}</h4>
                                </a>
                                <a href="" class="f5a2">
                                    <p>{{item.introduce}}</p>
                                </a>
                            </div>
                        </li>
                    </ul>
                    <div class="f5col1inner1">
                        <!--muisc-->
                        <div class="music" v-show="isactive==1">
                            <div class="title">
                                <h4>新歌打榜</h4>
                                <div>
                                    <span>{{page.music}}</span>
                                    <span>/ 2</span>
                                </div>
                                <div>
                                    <img src="../assets/image/f5/prev3.jpg" alt="" @click="pagechang(1,1)">
                                    <img src="../assets/image/f5/next3.jpg" alt="" @click="pagechang(1,2)">
                                </div>
                            </div>
                            <div class="f5col1inner2" v-show="page.music==1">
                                <ul>
                                    <li v-for="item in f5_2[0]" title="点击播放音乐">
                                        <div>
                                            <!--<img :src="item.img" alt="">-->
                                            <img :src="item.pic" alt="" style="width: 100%" @click="goplay($event)">
                                            <audio :src="item.url" preload="metadata"></audio>
                                        </div>
                                        <div>
                                            <!--<h5>{{item.title}}</h5>-->
                                            <!--<p>{{item.introduce}}</p>-->
                                            <h5>{{item.name | string_length(8)}}</h5>
                                            <p>{{item.singer | string_length(8)}}</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="f5col1inner2" v-show="page.music==2">
                                <ul>
                                    <li v-for="item in f5_2[1]" title="点击播放音乐">
                                        <div>
                                            <!--<img :src="item.img" alt="">-->
                                            <img :src="item.pic" alt="" style="width: 100%" @click="goplay($event)">
                                            <audio :src="item.url" preload="metadata"></audio>
                                        </div>
                                        <div>
                                            <!--<h5>{{item.title}}</h5>-->
                                            <!--<p>{{item.introduce}}</p>-->
                                            <h5>{{item.name | string_length(8)}}</h5>
                                            <p>{{item.singer | string_length(8)}}</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!--game-->
                        <div class="game" v-show="isactive==2">
                            <div class="title">
                                <h4>热门游戏</h4>
                                <div>
                                    <span>{{page.game}}</span>
                                    <span>/ 2</span>
                                </div>
                                <div>
                                    <img src="../assets/image/f5/prev3.jpg" alt="" @click="pagechang(2,1)">
                                    <img src="../assets/image/f5/next3.jpg" alt="" @click="pagechang(2,2)">
                                </div>
                            </div>
                            <div class="f5col1inner2" v-show="page.game==1">
                                <ul>
                                    <li v-for="item in f5_2[2]">
                                        <div>
                                            <img :src="item.img" alt="">
                                        </div>
                                        <div>
                                            <h5>{{item.title}}</h5>
                                            <p>{{item.introduce}}</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="f5col1inner2" v-show="page.game==2">
                                <ul>
                                    <li v-for="item in f5_2[3]">
                                        <div>
                                            <img :src="item.img" alt="">
                                        </div>
                                        <div>
                                            <h5>{{item.title}}</h5>
                                            <p>{{item.introduce}}</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!--read-->
                        <div class="read" v-show="isactive==3">
                            <div class="title">
                                <h4>重磅推荐</h4>
                                <div>
                                    <span>{{page.read}}</span>
                                    <span>/ 2</span>
                                </div>
                                <div>
                                    <img src="../assets/image/f5/prev3.jpg" alt="" @click="pagechang(3,1)">
                                    <img src="../assets/image/f5/next3.jpg" alt="" @click="pagechang(3,2)">
                                </div>
                            </div>
                            <div class="f5col1inner2" v-show="page.read==1">
                                <ul>
                                    <li v-for="item in f5_2[4]">
                                        <div>
                                            <img :src="item.img" alt="">
                                        </div>
                                        <div>
                                            <h5>{{item.title}}</h5>
                                            <p>{{item.introduce}}</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="f5col1inner2" v-show="page.read==2">
                                <ul>
                                    <li v-for="item in f5_2[5]">
                                        <div>
                                            <img :src="item.img" alt="">
                                        </div>
                                        <div>
                                            <h5>{{item.title}}</h5>
                                            <p>{{item.introduce}}</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!--漫画-->
                        <div class="read" v-show="isactive==4">
                            <div class="title">
                                <h4>精品动漫</h4>
                                <div>
                                    <span>{{page.cartoon}}</span>
                                    <span>/ 2</span>
                                </div>
                                <div>
                                    <img src="../assets/image/f5/prev3.jpg" alt="" @click="pagechang(4,1)">
                                    <img src="../assets/image/f5/next3.jpg" alt="" @click="pagechang(4,2)">
                                </div>
                            </div>
                            <div class="f5col1inner2" v-show="page.cartoon==1">
                                <ul>
                                    <li v-for="item in f5_2[6]">
                                        <div>
                                            <img :src="item.img" alt="">
                                        </div>
                                        <div>
                                            <h5>{{item.title}}</h5>
                                            <p>{{item.introduce}}</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="f5col1inner2" v-show="page.cartoon==2">
                                <ul>
                                    <li v-for="item in f5_2[7]">
                                        <div>
                                            <img :src="item.img" alt="">
                                        </div>
                                        <div>
                                            <h5>{{item.title}}</h5>
                                            <p>{{item.introduce}}</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div class="f5col2inner1">
                        <ul @mouseover="stopsetInterval()" @mouseout="starInterval()">
                            <li v-for="(item,idx) in f5_3_1" :class="{active3:f5_3==idx+1}" ><img :src="item.img" alt="" :title="item.title"></li>
                        </ul>
                        <ul >
                            <div style="">
                                <div style="">
                                    <li  v-for="idx in 3"><div :class="{active:f5_3==idx}" @mouseover="changef5_3(idx)"></div></li>
                                </div>
                            </div>
                        </ul>
                    </div>


                    <div class="f5col2inner2">
                        <div style="">
                            <h4>流行乐风向标</h4>
                            <div>
                                <img src="../assets/image/f5/prev3.jpg" alt="" @click="pagechang(5,1)">
                                <img src="../assets/image/f5/next3.jpg" alt="" @click="pagechang(5,2)">
                            </div>
                            <div>
                                <span>{{page.popular_music}}</span>
                                <span>/ 2</span>
                            </div>
                        </div>
                        <div class="hiden" :class="{show:page.popular_music==1}" >
                            <ul class="imgg" >
                                <li v-for="item in f5_4[1]" title="点击播放音乐">
                                    <a  class="aa">
                                        <!--<img :src="item.img" alt="">-->
                                        <!--<p>{{item.title}}</p>-->
                                        <img :src="item.pic" alt="" width="80%;" @click="goplay($event)">
                                        <p>{{item.name | string_length(8)}}</p>
                                        <audio :src="item.url" preload="metadata"></audio>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="hiden" :class="{show:page.popular_music==2}" >
                            <ul class="imgg" >
                                <li v-for="item in f5_4[2]" title="点击播放音乐">
                                    <a class="aa">
                                        <!--<img :src="item.img" alt="">-->
                                        <!--<p>{{item.title}}</p>-->
                                        <img :src="item.pic" alt="" width="80%;" @click="goplay($event)">
                                        <p>{{item.name | string_length(8)}}</p>
                                        <audio :src="item.url" preload="metadata"></audio>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <div id="like" class="f">
                <div class="divw clear">
                    <a href="" class="float_l"><h3><span>猜你喜欢</span></h3></a>
                    <ul class="float_r">
                        <li class="float_r" @click="changpage()">换一换 <span><img src="../assets/image/like/change.png" alt=""></span></li>
                    </ul>
                </div>
                <div class="col">
                    <div v-for="(item,idx) in f6_like">
                        <a href="">
                            <h4>{{item.title | string_length(9)}}</h4>
                            <p class="pp">{{item.price | myCurrent}}</p>
                            <img :src="item.img" alt="">
                            <p>{{item.introduce}}</p>
                        </a>
                    </div>
                </div>
            </div>
            <div id="special" class="f">
                <div class="divw clear">
                    <a href="" class="float_l"><h3><span>特色专区</span></h3></a>
                </div>
                <div class="specinner">
                    <div>
                        <a href=""><img src="../assets/image/special/20171120112158838cWd.jpg" alt=""></a>
                        <a href="">
                            <h4>国际/港澳台业务专区</h4>
                            <p>随时随地，沟通不下线</p>
                        </a>
                    </div>
                    <div>
                        <a href=""><img src="../assets/image/special/20180929092228214afh.png" alt=""></a>
                        <a href="">
                            <h4>资费专区</h4>
                            <p>自由选择，随心组合</p>
                        </a>
                    </div>
                    <div>
                        <a href=""><img src="../assets/image/special/20171120112730855WdP.jpg" alt=""></a>
                        <a href="">
                            <h4>VoLTE专区</h4>
                            <p>高品质音、视频通话服务</p>
                        </a>
                    </div>
                    <div>
                        <a href=""><img src="../assets/image/special/20171120113111370WFn.jpg" alt=""></a>
                        <a href="">
                            <h4>宽带专区</h4>
                            <p>畅快网络，极速光纤全家共享</p>
                        </a>
                    </div>
                </div>
            </div>

            <div id="foot" class="f">
                <div class="divw clear foot1">
                    <a href="" style="">
                        <img src="../assets/image/foot/indexgg.gif" alt="">
                        <span>公告：</span>
                    </a>
                    <ul>
                        <li style="display: block">
                            <a href=""><span>-&nbsp&nbsp&nbsp</span>{{'中央第六巡视组巡视中国移动通信集团有限公司党组工作动员会召开' | string_length(20)}}</a>
                            <span>2019-04-03</span>
                        </li>
                        <li v-show="foot1_page==2">
                            <a href=""><span>-&nbsp&nbsp&nbsp</span>关于4月2日网站系统升级的紧急公告</a>
                            <span>2019-04-02</span>
                        </li>
                        <li v-show="foot1_page==3">
                            <a href=""><span>-&nbsp&nbsp&nbsp</span>关于3月28日系统升级的公告</a>
                            <span>2019-03-28</span>
                        </li>
                        <li v-show="foot1_page==4">
                            <a href=""><span>-&nbsp&nbsp&nbsp</span>关于3月29日升级系统升级的公告</a>
                            <span>2019-03-29</span>
                        </li>
                    </ul>
                    <div style="">
                        <a href="" @click.prevent="pagechang2('foot1_page')">< </a>
                        <a href="" @click.prevent="pagechang2('foot1_page')">> </a>
                    </div>
                </div>

                <div class="clear foot2">
                    <div >
                        <a href="" class="aaa" >
                            <span>查看更多 ></span>
                        </a>
                    </div>
                    <span>
                        <img src="../assets/image/foot/gzdt.jpg" alt="">
                    </span>
                    <ul >
                        <li>
                            <a href="" >
                                <span>-&nbsp&nbsp&nbsp</span>
                                <span class="spann">{{'国企领导上讲台国企骨干担任校外辅导员活动在清华大学启动' | string_length(20)}}</span>
                                <span>2019-03-28</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span>-&nbsp&nbsp&nbsp</span>
                                <span class="spann">{{'国资委党委召开巡视工作会议 部署2019年第一轮巡视工作' | string_length(20)}}</span>
                                <span>2019-03-28</span>
                            </a>
                        </li>
                        <li>
                            <a href="" >
                                <span>-&nbsp&nbsp&nbsp</span>
                                <span class="spann">{{'肖亚庆：实现各种所有制经济共进共赢共同发展' | string_length(20)}}</span>
                                <span>2019-03-28</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span>-&nbsp&nbsp&nbsp</span>
                                <span class="spann">{{'郝鹏赴河北调研国资委定点扶贫和央企参与雄安新区建设工作  强调要在贯彻落实党中央决策部署中作表率' | string_length(20)}}</span>
                                <span>2019-03-28</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="clear foot3">
                    <div >
                        <div>
                            <span style="">服务渠道</span>
                            <div style="" >
                                <a href="">自助终端</a>
                            </div>
                            <div >
                                <a href="">10086热线</a>
                            </div>
                            <div >
                                <a href="">实体营业厅</a>
                            </div>
                            <div >
                                <a href="">短信营业厅</a>
                            </div>
                            <div >
                                <a href="">网上营业厅</a>
                            </div>
                            <div >
                                <a href="">客户端/掌上营业厅</a>
                            </div>
                        </div>

                        <div>
                            <span style="">站点导航</span>
                            <div style="" >
                                <a href="">MM</a>
                            </div>
                            <div >
                                <a href="">和飞信</a>
                            </div>
                            <div >
                                <a href="">和包</a>
                            </div>
                            <div >
                                <a href="">咪咕阅读</a>
                            </div>
                            <div >
                                <a href="">139邮箱</a>
                            </div>
                            <div >
                                <a href="">能力开放商店</a>
                            </div>
                        </div>

                        <div>
                            <span style="">便捷服务</span>
                            <div style="" >
                                <a href="">账单查询</a>
                            </div>
                            <div >
                                <a href="">详单查询</a>
                            </div>
                            <div >
                                <a href="">套餐余量查询</a>
                            </div>
                            <div >
                                <a href="">业务状态查询</a>
                            </div>
                            <div >
                                <a href="">交费记录查询</a>
                            </div>
                            <div >
                                <a href="">资料下载中心</a>
                            </div>
                        </div>

                        <div>
                            <span style="">产品推荐</span>
                            <div style="" >
                                <a href="">资费专区</a>
                            </div>
                            <div >
                                <a href="">畅享套餐</a>
                            </div>
                            <div >
                                <a href="">家庭宽带</a>
                            </div>
                            <div >
                                <a href="">流量畅游包</a>
                            </div>
                            <div >
                                <a href="">4G无限卡</a>
                            </div>
                            <div >
                                <a href="">畅享放心用套餐</a>
                            </div>
                        </div>

                        <div>
                            <span style="">服务指南</span>
                            <div style="" >
                                <a href="">购物指南</a>
                            </div>
                            <div >
                                <a href="">付款方式</a>
                            </div>
                            <div >
                                <a href="">物流配送</a>
                            </div>
                            <div >
                                <a href="">售后服务</a>
                            </div>
                            <div >
                                <a href="">个人中心</a>
                            </div>
                            <div >
                                <a href="">网站服务协议</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="clear footend" style="">
                    <a href="" style="width: 860px;">
                        <span>新闻中心 | 诚聘英才 | 企业合作 | 站点导航 | 中移信息技术公司 | 中国移动设计院 | 中国移动香港公司 | 政企客户分公司 | 数字家庭合作联盟 | 网站地图 | 友情链接</span>
                    </a>
                    <a href="" style="width: 600px;">
                        <span> 掌上营业厅：wap.10086.cn 语音自助服务：10086 短信营业厅：10086 自助终端 营业厅 中国移动客户端下载</span>
                    </a>
                    <a href="" style="width: 400px;">
                        <span>Copyright©1999-2019  中国移动  版权所有    本网站支持IPv6访问</span>
                    </a>
                    <a href="" style="width: 450px;">
                        <span>中华人民共和国增值电信业务经营许可证  经营许可证编号：A2.B1.B2-20100001</span>
                    </a>
                    <a href="" style="width: 300px;">
                        <img src="../assets/image/foot/knetSealLogo.png" alt="">
                        <img src="../assets/image/foot/gov.gif" alt=""><span>京ICP备05002571号</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    import $ from 'jquery'
    export default{
        data(){
            return {
                userIfo:{id:-1, username: "", password: "", userinput: "",msg:""},
                carousel1:[{color:''}],//轮播1数据
                carousel2:[],//轮播2数据
                carousel2_2:[],//轮播2v-for数据
                f1:[],//1楼数据
                f2:[],//2楼数据
                f3:[],//3楼数据
                f3_3:[],//3楼v-for数据
                f4:[],//4楼数据
                f4_4:[],//4楼v-for数据
                isactive:1,//5楼左标题
                page:{"music":1,"game":1,"read":1,"cartoon":1,"popular_music":1,"ul":1,"li1":1,"li2":1},//5楼左2页码,右下页码
                f5_1:[],//5楼数据
                f5:[],//5楼左2数据
                f5_2:[[],[],[],[],[],[],[],[]],//5楼左2数据
                f5_3:1,//5楼右上图片切换
                timer1:-1,//5楼右上图片切换，计时器
                f5_3_1:[],//5楼右上图片数据
                f5_4:[[],[],[]],
                val:"天语N1 双卡双待 老人机备用机学生机",
                f6_like_page:{"totlerow":0,"pagesize":5,"":0,"totlepage":0,"nowpage":1},
                f6_like:[],
                foot1_page:2,
                header_advertis:0,
                input_dat:'',
                wapperinne:{'a':0,'b':0,'c':0,'d':0,'e':0,'f':0,'g':0,},
                carousel_1:{'width':705*(8+1)+'px','left':0+'px','onewidth':705,'number':8,'i':0},
                carousel_1_tran:true,
                time:{'timer4':0,'timer5':0,'timer6':0,'time7':0,'8':0},
                contine1:true,
                stylechang:{'next1':0},
                address:'2444f679p9.wicp.vip:37469',//localhost,192.168.0.134，2444f679p9.wicp.vip:37469 , 51271f1.cpolar.io
                myblackground:{'background': '#EEFECF'},
                carousel_2_2:{'width':235*6*2+'px','left':0+'px','onewidth':235,'number':6,'i_left':6,'i_right':8,'state':2},
                carousel_2_tran:true,
            }
        },
        computed: {

        },
        mounted: function () {
            var url=`http://${this.address}/htdocs/htdocs/my%20project/project%202/data/index/accesToCarousel_1.php`;
            this.$http.get(url).then(function (data) {//轮播1数据
                this.carousel1=data.body;
                this.scraddress(this.carousel1);
//                console.log(this.carousel1)
                this.carousel1.push(this.carousel1[0])
//                console.log(this.carousel1)
                this.carousel_1.number=this.carousel1.length-1
                this.carousel_1.width=705*(this.carousel1.length)+'px'


            });
            url=`http://${this.address}/htdocs/htdocs/my%20project/project%202/data/index/accesToCarousel_2.php`;
            this.$http.get(url).then(function (data) {//轮播2数据
                this.carousel2=data.body;
                this.scraddress(this.carousel2);
                this.carousel2_2=this.carousel2.slice(1)
                console.log(this.carousel2_2)
            });
            url=`http://${this.address}/htdocs/htdocs/my%20project/project%202/data/index/accesTOf1.php`;
            this.$http.get(url).then(function (data) {//1楼数据
                this.f1=data.body;
                this.scraddress(this.f1);
            });
            url=`http://${this.address}/htdocs/htdocs/my%20project/project%202/data/index/accesTOf2.php`;
            this.$http.get(url).then(function (data) {//2楼数据
                this.f2=data.body;
                this.scraddress(this.f2);
            });
            url=`http://${this.address}/htdocs/htdocs/my%20project/project%202/data/index/accesTOf3.php`;
            this.$http.get(url).then(function (data) {//3楼数据
                this.f3=data.body;
                this.scraddress(this.f3);
                this.f3_3=this.f3.slice(1,2);
            });
            url=`http://${this.address}/htdocs/htdocs/my%20project/project%202/data/index/accesTOf4.php`;
            this.$http.get(url).then(function (data) {//4楼数据
                this.f4=data.body;
                this.scraddress(this.f4);
                this.f4_4=this.f4.slice(0,4);
            });
            url=`http://${this.address}/htdocs/htdocs/my%20project/project%202/data/index/accesTOf5_1.php`;
            this.$http.get(url).then(function (data) {//5楼左标题数据
                this.f5_1=data.body;
                this.scraddress(this.f5_1);
            });
            url=`http://${this.address}/htdocs/htdocs/my%20project/project%202/data/index/accesTOf5_2.php`;
            this.$http.get(url).then(function (data) {//5楼左2页面数据
                this.f5=data.body;
                this.scraddress(this.f5);
//                this.f5_2[0]=this.f5.slice(0,5);
//                this.f5_2[1]=this.f5.slice(5,10);
                this.f5_2[2]=this.f5.slice(10,15);
                this.f5_2[3]=this.f5.slice(15,20);
                this.f5_2[4]=this.f5.slice(20,25);
                this.f5_2[5]=this.f5.slice(25,30);
                this.f5_2[6]=this.f5.slice(30,35);
                this.f5_2[7]=this.f5.slice(35,40);
            });
            url=`http://${this.address}/htdocs/htdocs/my%20project/project%202/data/index/accesTOf5_3.php`;
            this.$http.get(url).then(function (data) {//5楼右上数据
                this.f5_3_1=data.body;
                this.scraddress(this.f5_3_1);

            });
            url=`http://${this.address}/htdocs/htdocs/my%20project/project%202/data/index/accesTOf5_4.php`;
            url=`https://api.itooi.cn/music/netease/songList?key=579621905&id=3778678&limit=20&offset=0`
            this.$http.get(url).then(function (data) {//5楼右上数据
//                this.f5_4[0]=data.body;
                var rando=Math.floor(Math.random()*50);
                this.f5_4[0]=data.body.data.songs.slice(rando,rando+10);
                this.f5_2[0]=data.body.data.songs.slice(rando+10,rando+15);
                this.f5_2[1]=data.body.data.songs.slice(rando+15,rando+20);
                this.scraddress(this.f5_4[0]);
                this.scraddress(this.f5_2[0]);
                this.scraddress(this.f5_2[1]);
//                console.log(this.f5_4[0])
                this.f5_4[1]=this.f5_4[0].slice(0,5)
                this.f5_4[2]=this.f5_4[0].slice(5,10)
                console.log(this.f5_2[0],555)
            });
//            credentials:true
//            url=`http://localhost/htdocs/htdocs/my%20project/project%202/data/login/accesTOIsLogin.php`;
//            this.$http.get(url,{headers: {},credentials:true }).then(function (data) {//5楼右上数据
//                console.log(data)
//            });
//            url=`http://${this.address}/htdocs/htdocs/my%20project/project%202/data/login/accesTOLogin22.php`;
//            this.$http.post(url,{emulateJSON:true,withCredentials:true}).then(function (data) {//5楼右上数据
//                console.log(data)
//            });

            $.ajax({
                type:"get",
                url:`http://${this.address}/htdocs/htdocs/my%20project/project%202/data/login/accesTOIsLoginWithJosnp.php`,
                dataType:"jsonp"
            }).then((data)=>{
                console.log(data.msg)
                if(data.msg=="logout"){
                    this.userIfo.msg=data.msg
                    console.log(this.userIfo.username)
                }else{
                    this.userIfo=data;
                    console.log(this.userIfo.username)
                }
            });

            this.f6_likefun();//get function
            this.f6_likefun2();//post function
            this.starInterval();

            this.carousel_inter()
//            setInterval(()=>{
//                console.log(this.f5_2[0])
//            },500)
            this.carouse2_2setinte_right()


            window.addEventListener('scroll',()=>{//添加楼层滚动监听
                var scrollTop=document.body.scrollTop||document.documentElement.scrollTop
                var innerHeight=window.innerHeight
                var navHeight=this.getTotalTop(document.getElementById("nav"))
                document.getElementById("lou").style.display= scrollTop>=navHeight ?  "block" : "none"

                var f1Top=this.getTotalTop(document.querySelector('#f1'))
                var f2Top=this.getTotalTop(document.querySelector('#f2'))
                var f3Top=this.getTotalTop(document.querySelector('#f3'))
                var f4Top=this.getTotalTop(document.querySelector('#f4'))
                var f5Top=this.getTotalTop(document.querySelector('#f5'))
                var f6Top=this.getTotalTop(document.querySelector('#like'))
                var f7Top=this.getTotalTop(document.querySelector('#special'))
                var liArray2=document.querySelectorAll("#main>div:first-child>ul>li")

                this.changlic(0,f1Top,f2Top,f3Top)
                this.changlic(1,f2Top,f3Top,f4Top)
                this.changlic(2,f3Top,f4Top,f5Top)
                this.changlic(3,f4Top,f5Top,f6Top)
                this.changlic(4,f5Top,f6Top,f7Top)
            })
            var liArray=document.querySelectorAll("#main>div:first-child>ul>li")
            console.log(liArray)
            var f1Top=this.getTotalTop(document.querySelector('#f1'))
            var f2Top=this.getTotalTop(document.querySelector('#f2'))
            var innerHeight=window.innerHeight
            var hh=(innerHeight-(f2Top-f1Top))/2
//            console.log(hh,"555")
            for(let i=0;i<liArray.length;i++) {
                var userAgent = navigator.userAgent
                var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
                var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
                var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
                if (liArray[i].innerHTML!='返回顶部') {
                    liArray[i].onclick = () => {
                        var direction = document.querySelector("#f" + (i + 1));
                        var height = this.getTotalTop(direction)-100
                        console.log(isIE,isEdge,isIE11)
                        if (isIE || isEdge || isIE11){
                            window.scroll(0,height)
                        }else{
                            window.scroll({top: height, behavior: "smooth"})
                        }
                    }
                } else {
                    liArray[i].onclick = () => {
                        console.log(isIE,isEdge,isIE11)
                        if (isIE || isEdge || isIE11){
                            window.scroll(0,0)
                        }else{
                            window.scroll({top:0, behavior: "smooth"})
                        }
                    }
                }
            }
            window.onload =()=>
            {
                this.headersTimeout()
                console.log("onload")
            };
            $(document).ready(()=>{
                console.log("document.read")

            })

        },

        methods: {
            goplay:function (e) {
                var tar=e.target.parentNode.querySelector("audio")
                var tarparent=document.querySelectorAll("audio")
                console.log(tar.paused)
                if(tar.paused){
                    for(var i=0;i<tarparent.length;i++){
                        tarparent[i].pause()
                    }
                    tar.play()
                }else{
                    tar.pause()
                }
            },
            login:function () {
                this.$router.push("/login")
            },
            logout:function () {
                var url=`http://${this.address}/htdocs/htdocs/my%20project/project%202/data/login/accesTOIsLogout.php`;
//                this.$http.get(url,{emulateJSON:true,withCredentials:true}).then(function (data) {//5楼右上数据
//                  console.log(data)
////                    userIfo:{id:-1, username: "", password: "", userinput: "",msg:""},
//                    this.userIfo={username:''}
//                });
                $.ajax({
                    type:"get",
                    url:`http://${this.address}/htdocs/htdocs/my%20project/project%202/data/login/accesTOIsLogout.php`,
                    dataType:"jsonp"
                }).then((data)=>{
                    console.log(data)
                    this.userIfo={username:''}
                })
            },
            changlic:function (val1,val2,val3,val4) {//楼层滚动亮灯
                var liArray2=document.querySelectorAll("#main>div:first-child>ul>li")
                var scrollTop=document.documentElement.scrollTop||document.body.scrollTop
                var val5=val2,val6=val3
                var innerHeight=window.innerHeight
//                console.log(innerHeight-(val6-val5))
                if((innerHeight-(val3-val2))/2>0){
                liArray2[val1].className=
                    scrollTop+(innerHeight-(val3-val2))/2>=val2 &&
                    scrollTop+(innerHeight-(val4-val3))/2<val3 ? 'bg' : '';
//                    console.log(val1,scrollTop+(innerHeight-(val3-val2))/2,val2,"ggg")
                }
                else{
                    liArray2[val1].className=
                        scrollTop>=val5-105 &&
                        scrollTop<val6-105 ? 'bg' : '';
//                    console.log(val1,scrollTop,val5-105,"ggg")
                }
            },
            getTotalTop:function (elem) {
                var sum=0;
                do{
                    sum=elem.offsetTop+sum;
                    elem=elem.offsetParent;
                }while(elem!=null)
                    return sum
            },
            carouse2_2_stop:function () {
                clearInterval(this.time.time7);
                clearInterval(this.time.time8);
            },
            carouse2_2_state:function (val) {
                this.carousel_2_2.state=val
                if(val==1){
//                    clearInterval(this.time.time7);
//                    clearInterval(this.time.time8);
                    this.carouse2_2_left()
                }else{
//                    clearInterval(this.time.time8);
//                    clearInterval(this.time.time7);
                    this.carouse2_2_right()
                }
            },
            carouse2_2_star:function () {
                if(this.carousel_2_2.state==2){
                    clearInterval(this.time.time8);
                    this.carouse2_2setinte_right()
                }else{
                    clearInterval(this.time.time7);
                    this.carouse2_2setinte_left()
                }
            },
            carouse2_2setinte_right:function(){
                this.time.time7=setInterval(this.carouse2_2_right,3500)
            },
            carouse2_2setinte_left:function(){
                this.time.time8=setInterval(this.carouse2_2_left,3500)
            },
            carouse2_2_right:function () {
                var len=parseInt(this.carousel_2_2.left)
                this.carousel_2_tran=true
                this.carousel_2_2.left=len-this.carousel_2_2.onewidth+'px'
                if(parseInt(this.carousel_2_2.left)==-this.carousel_2_2.i_right*this.carousel_2_2.onewidth){
                    setTimeout(()=>{
                        this.carousel_2_tran=false
                        this.carousel_2_2.left=(-this.carousel_2_2.i_right+this.carousel_2_2.number)*this.carousel_2_2.onewidth+'px'
                    },500)
                }

            },
            carouse2_2_left:function () {
                var len=parseInt(this.carousel_2_2.left)
                if(len==0){
                        this.carousel_2_tran=false
                        console.log(-this.carousel_2_2.i_left*this.carousel_2_2.onewidth+'px')
                        this.carousel_2_2.left=-this.carousel_2_2.i_left*this.carousel_2_2.onewidth+'px'
                        setTimeout(()=>{
                            this.carousel_2_tran=true
                            this.carousel_2_2.left=-(this.carousel_2_2.i_left-1)*this.carousel_2_2.onewidth+'px'
                        },1)
                }else {
                    this.carousel_2_tran=true
                    this.carousel_2_2.left=len+this.carousel_2_2.onewidth+'px'
                }
            },
            carousel_tag:function (val) {
                this.carousel_1_tran = true;
                this.carousel_1.left=this.carousel_1.onewidth*val+'px'
            },
            carousel_front:function () {
                if(this.contine1==true) {
                    this.carousel_1_tran = true;
                    var i = parseInt(this.carousel_1.left)
                    if (i <= this.carousel_1.onewidth * this.carousel_1.number) {
                        if(i==0){
                            this.carousel_1_tran = false;
                            this.carousel_1.left =-this.carousel_1.onewidth * (this.carousel_1.number)+ "px";
                            setTimeout(()=>{
                                this.carousel_1_tran = true;
                                this.carousel_1.left =-this.carousel_1.onewidth * (this.carousel_1.number-1)+ "px";
                            },1)
//                            console.log(this.carousel_1.left, this.carousel_1.onewidth * (this.carousel_1.number-1))
                            }else{
                                this.carousel_1.left = i + this.carousel_1.onewidth + "px";
                                if (parseInt(this.carousel_1.left) == 0) {
                                    var timer5 = setTimeout(() => {
                                        this.carousel_1_tran = false;
                                        this.carousel_1.left = -this.carousel_1.onewidth * this.carousel_1.number + "px";
                                    }, 500)
                                }
                        }
                    } else {
                        this.carousel_1.left = 0 + "px";
                    }
                    this.contine1=false
                    setTimeout(()=>{
                        this.contine1=true
                    },500)
                }else{
                    return
                }
            },
            carousel_next:function () {
                if(this.contine1==true) {
                    this.carousel_1_tran = true;
                    var i = parseInt(this.carousel_1.left)
                    if (i > -this.carousel_1.onewidth * this.carousel_1.number) {
                        this.carousel_1.left = i - this.carousel_1.onewidth + "px";
                        if (parseInt(this.carousel_1.left) == -this.carousel_1.onewidth * this.carousel_1.number) {
                            var timer5 = setTimeout(() => {
                                this.carousel_1_tran = false;
                                this.carousel_1.left = 0 + "px";
                            }, 500)
                        }
                    } else {
                        this.carousel_1.left = 0 + "px";
                    }
                    this.contine1=false
                    setTimeout(()=>{
                        this.contine1=true
                    },500)
                }
            },
            carousel_inter_stop:function () {
                clearInterval(this.time.timer4)
                this.stylechang.next1=1

            },
            carousel_inter_star:function () {
                this.time.timer4=setInterval(this.carousel_h,3000)
                this.stylechang.next1=0
            },
            carousel_inter:function () {
                this.time.timer4=setInterval(this.carousel_h,3000)
            },
            carousel_h:function () {
                this.carousel_1_tran=true;
                var i=parseInt(this.carousel_1.left)
                if(i>-this.carousel_1.onewidth*this.carousel_1.number) {
                    this.carousel_1.left = i - this.carousel_1.onewidth + "px";
                    if(parseInt(this.carousel_1.left)==-this.carousel_1.onewidth*this.carousel_1.number){
                        var timer5=setTimeout(()=>{
                            this.carousel_1_tran=false;
                            this.carousel_1.left =0+ "px";
                        },500)
                    }
                }else{
                    this.carousel_1.left =0+ "px";
                }
            },
           scraddress:function (ab) {
                var chatimg=[];
               for(var key in ab[0]){
                    var val=key.match(/^.{0,3}img.{0,}$/gi)
                    if(val){
                        chatimg.push(key)
                    }
                }
                for(var i=0;i<chatimg.length;i++){
                    for(var j=0;j<ab.length;j++){
                        if(ab[j][chatimg[i]]){//当img为空时不添加require
                            ab[j][chatimg[i]] = require("../assets/" + ab[j][chatimg[i]]);
                        }
                    }
                }
            },
            test(val){//匹配img
               var rezult=val.match(/^.{0,3}img.{0,}$/gi);
               if(rezult){
                   return true
               }else {
                   return false
               }
            },
            activechang:function (val) {
                this.isactive=val;
            },
            pagechang:function (val1,val2) {
                val1==1 ? this.page.music=val2 :
                    val1==2 ? this.page.game=val2 :
                        val1==3 ? this.page.read=val2 :
                            val1==4 ? this.page.cartoon=val2 :
                            this.page.popular_music=val2;
            },
            pagechang2:function (val,val2) {
                if(val=='foot1_page'){
                    if(this.foot1_page<4){
                        this.foot1_page++
                    }else{
                        this.foot1_page=2
                    }
                }
                if(val="header_advertis"){
                    this.header_advertis=val2
                }
            },
            advertis:function () {
                this.f5_3++
                if(this.f5_3>3){
                    this.f5_3=1
                }
                this.foot1_page++
                if(this.foot1_page>4){
                    this.foot1_page=2
                }
            },
            stopsetInterval:function () {
                clearInterval(this.timer1)
            },
            starInterval:function () {
                this.timer1= setInterval(this.advertis, 1500);
            },
            changef5_3:function (val) {
                this.f5_3=val
                this.stopsetInterval()
            },
            f6_likefun:function () {
                var url=`http://${this.address}/htdocs/htdocs/my%20project/project%202/data/index/accesTOf6_like.php`;
                url+="?pagesize="+this.f6_like_page.pagesize+"&nowpage="+this.f6_like_page.nowpage;
//                通过拼参数实现地址栏传参，开头?多个参数用&连接
                this.$http.get(url).then(function (data) {//5楼右上数据
                    this.f6_like=data.body[1];
                    this.scraddress(this.f6_like);
                    this.f6_like_page=data.body[0]
                });
            },
            f6_likefun2:function () {
                var url=`http://${this.address}/htdocs/htdocs/my%20project/project%202/data/index/accesTOf6_like.php`;
                var data={nowpage:this.f6_like_page.nowpage,pagesize:this.f6_like_page.pagesize}
//                post 发送数据到后端，需要第三个参数 {emulateJSON:true}。
//                emulateJSON 的作用： 如果Web服务器无法处理编码为 application/json 的请求，你可以启用 emulateJSON 选项
                this.$http.post(url,data,{headers: {},emulateJSON:true}).then(function (data) {
                    this.f6_like=data.body[1];
                    this.scraddress(this.f6_like);
                    this.f6_like_page=data.body[0]
                })
            },
            header_change:function () {
                this.header_advertis=2
            },
            headersTimeout:function () {
                var timedelay=200
                var timer3=setTimeout(this.header_change,timedelay+5000)
                setTimeout(()=> {
                    this.header_advertis=1
                },timedelay)
            },
            jump:function () {
                this.$router.push("/search/"+this.input_dat)
            },


//            function () {
//                this.$http.get('http://localhost/curl.php', {}, {headers: {}, emulateJSON: true}
//                ).then(function (res) {
//
//                })
//            }
//            headers get方法里面不用填写参数，如果是post方式发送请求 则要设置'Access-Control-Allow-Origin': '*'

            changpage:function () {
                if(this.f6_like_page.nowpage<this.f6_like_page.totlepage){
                    this.f6_like_page.nowpage++
                }else{
                    this.f6_like_page.nowpage=1;
                }
                this.f6_likefun()
            },
            wapperinner:function (val1,val2) {
//                this.wapperinne.val1=val2
                val1=='a' ? this.wapperinne.a=val2 :
                     val1=='b' ? this.wapperinne.b=val2 :
                         val1=='c' ? this.wapperinne.c=val2 :
                             val1=='d' ? this.wapperinne.d=val2 :
                                 val1=='e' ? this.wapperinne.e=val2 :
                                     val1=='f' ? this.wapperinne.f=val2 :
                                         this.wapperinne.g=val2
            }
        },

        filters:{
            myCurrent:function(myInput){
                if(myInput>=1000){
                    var qian= parseInt(myInput/1000);
                    var bai=myInput-qian*1000;
                    return qian+","+bai+"元";
                }else if(myInput==0){
                    return "售罄"
                }else {
                    return myInput+"元";
                }
            },
            string_length:function (myInput,ars) {
                if(myInput.length>ars){
                    return myInput.slice(0,ars)+"..."
                }else {
                    return myInput
                }
            }
        },
        watch:{
            isactive:function () {

            },
            'carousel_1.left':{
                deep:true,
                handler:function (newval,oldval) {
                    this.carousel_1.i= parseInt(newval)/this.carousel_1.onewidth
                    if(parseInt(newval)/this.carousel_1.onewidth==-this.carousel_1.number){
                        this.carousel_1.i=0
                    }
//                    this.myblackground.blackground=this.carousel1[-this.carousel_1.i].color
//                    var myblackground={'blackground':this.carousel1[-this.carousel_1.i].color}
//                    Object.assign(this.myblackground,myblackground)
//                    console.log(this.myblackground)
                },
            },
        }


    }
</script>


<style scoped>
    /*div{box-sizing: border-box}*/
    /*#foot div{border: solid 1px #E8E8E8;}*/
    #headLog {height: 20px;background-color: whitesmoke;margin: 0 auto}
    #headLog>div{width: 1200px;height: 20px;margin:0 auto;position: relative;text-align: left}
    #headLog>div>span{float: left;margin-right: 10px}
    #headLog>div>.loginout  {height: 20px;color: red;cursor: pointer}
    #main img{transition: all 0.2s linear}
    #main img:hover{transform: scale(1.1)}
    /*.f1inner{overflow: hidden}*/
</style>
