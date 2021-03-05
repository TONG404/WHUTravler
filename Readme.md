# Readme

零杯壹组---夕阳红车队

主题：武大探险

本项目可通过访问链接：http://134.175.92.228:8080/ 进行效果演示。

## 简介

我们组选择武大探险作为主题，希望开发的网页能够具备一定游戏性，同时也能让同学们了解到武大不为人知的一面。

整个项目可分为三大板块：学在武大，吃在武大，玩在武大，从各个角度出发，接触武大的不同维度。

![image-20201204225933790](C:\Users\86159\AppData\Roaming\Typora\typora-user-images\image-20201204225933790.png)

每个板块中，完成任务可以获得拼图碎片，集齐拼图碎片就可以拼出精美卡贴！

![image-20201204225947360](C:\Users\86159\AppData\Roaming\Typora\typora-user-images\image-20201204225947360.png)

## Part1---学在武大

辗转教学楼，图书馆，每一位武大郎都曾有过渴望力量的那段时光！

![image-20201204230018209](C:\Users\86159\AppData\Roaming\Typora\typora-user-images\image-20201204230018209.png)

出发吧！探访各大教学楼，搜集各方面知识，赢得碎片！

![image-20201204230024000](C:\Users\86159\AppData\Roaming\Typora\typora-user-images\image-20201204230024000.png)

![image-20201204230031230](C:\Users\86159\AppData\Roaming\Typora\typora-user-images\image-20201204230031230.png)

## Part2---吃在武大

学累了？来一场有关美食的冒险吧！

在武大地图上自由探索，去寻找你记忆中那些拥有美食的地点吧！

你可以用鼠标自由控制小人在武大地图上漫步，探访各大食堂，小吃！

![image-20201204230046124](C:\Users\86159\AppData\Roaming\Typora\typora-user-images\image-20201204230046124.png)

你可以去找平日里吃得多的食堂，也可以去找找自己未曾发现过的新美食！

![image-20201204230100193](C:\Users\86159\AppData\Roaming\Typora\typora-user-images\image-20201204230100193.png)

打卡点也藏有拼图碎片，快去寻找吧！

![image-20201204230106188](C:\Users\86159\AppData\Roaming\Typora\typora-user-images\image-20201204230106188.png)

## Part3---玩在武大

武大这么大，我想去看看！

有哪些地方曾经留下了你的足迹，又有哪些地方你还未曾涉足呢？

快来玩在武大板块打卡吧！点击你去过的区域进行填色，生成属于你的武大地图！

![image-20201204230434845](C:\Users\86159\AppData\Roaming\Typora\typora-user-images\image-20201204230434845.png)

在这里，你还可以进行冷知识问答！你对武大究竟了解多少呢？快来试试吧！

![image-20201204230158623](C:\Users\86159\AppData\Roaming\Typora\typora-user-images\image-20201204230158623.png)

## Part4---碎片仓库

学过了，吃饱了，玩累了。

来看看咱们这次冒险的战果吧！

我们收集了这么多碎片，究竟能否拼出最终图片呢？

还差几块？赶紧再次踏上冒险吧！

![image-20201204090823091](C:\Users\86159\AppData\Roaming\Typora\typora-user-images\image-20201204090823091.png)

## 技术使用

主要使用原生JavaScript编写，后端框架使用了Django。

学在武大主要实现机制为投骰子移步，主要采用settimeout方法实现。

吃在武大通过修改背景图的方位，实现人物移动，并配合鼠标点击坐标判定移动方向。

玩在武大，首先在武大地图上勾勒出SVG轮廓，转化为path对象，然后借助JavaScript，实现填色，问答等功能。

## 组员分工

吴轲：主要负责后端框架，吃在武大，玩在武大，碎片仓库模块。

李宛童：主要负责前端设计，学在武大部分，承担了部分美工UI设计工作。

花子涵：主要负责美工设计，完成了大部分UI图的设计工作。

邓罗奥：主要负责编写游戏机制，设计问答题库，整理静态资源等工作。