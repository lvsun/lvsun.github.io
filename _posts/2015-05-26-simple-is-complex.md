---
layout: post
title:  "简单即复杂，复杂即简单"
date:   2015-05-26 12:06:07 +0100
categories: 感悟
published: true
---

这句话来源于今天一节数学理论课后的脑洞大开。

这句话用真实的生活例子来讲，可以比作iPhone的设计：看起来简洁美丽，用起来得心应手，简单。但是一打开机身，除了电池外就是密密麻麻的主板，这里的复杂度已经上了几个等级，复杂。但这些复杂归根到底又终究不过是电势高低，一高一低正是（1，0），如此简单。

如果用数学方式理解，简单就是所有的递归函数（Rekursion）都会最终“归根到底”，找到一个他最初开始的地方。复杂就是用这些“归根到底”的地方竟然能建起一座你想不到的数学大厦。数学最根本的就是逻辑学，但是讲出来实在晦涩，还是函数的例子好理解些：比如众人熟知的斐波那契数列:

![no interface found]({{"/assets/img/2015-05/fibonacci.pdf" | absolute_url}})

最初开始的地方就只有`f(1)=f(2)=1`
这么简单。后面不管你带入什么，都是前两个数的和。从另一个角度上来说，后面`f(n)`的含义其实就是让`n`不断收敛，减小到最后成为1或者2折中最初的情况。

你可能会讲，这个又有什么复杂？但其实这个数列却解释了很多大自然的生长序列规律。首先，数列里越往后（`n`越大），你所得到的两个值之间的比例也就越接近黄金比例的值。进一步讲，黄金比例是自然届很多生物在生长时所运用的策略。比如大树的枝桠，海螺等。
这些看起来复杂的东西却用一个小小两行方程解释了出来，不可谓“简单”美丽。

简单即复杂，复杂即简单在这时换一种说法，就是万物皆有规律，看透了即是简单，看不透即来复杂。

当年图灵用几个简单的方程，就创造了图灵机制（Turing-Mechanismus），绘出了奶牛身上那好像复杂没有规律的图案（见图灵论文：_The Chemical Basis of Morphogenesis_）。而他却始终看不透人性，最终死在了自己手里，可叹可惜。

看透了往往是看到了这个事物的根基，看到了这个事物收敛到了一个你最初定义的维度。而那些看不透的事物，其实只是你还没有找到他的根基。在混沌机制里，简单的基础规则却会形成无比复杂的事物，一个小小的变动却会带来无比复杂的巨变。这也算是给蝴蝶效应的另一种解释吧。在数学这么“简单”的世界里，最基础的规则也许往往只有一个，造出的东西却可以让你惊叹不已，举一个非常有意思的例子，阿克曼函数(Ackermannfunktion 的变种，来自Rózsa Péter）：

![no interface found]({{"/assets/img/2015-05/fibonacci.pdf" | absolute_url}})

这个函数只有一个收敛值，那就是在函数`a(n,m)`中，一旦n等于0时，那么立即结束，返回值`m+1`。后面的函数定义都是为了让`n`收敛到最初的函数。这么简简单单的三行定义，却大大超出了我们人类现有的计算能力。这个函数的计算复杂程度，增长超过了几乎一切函数，小小的带入值就能算出惊天的数字：`a(4,2)= 2 * 10 的19728次方`。正因如此，他常被人来举证，说明有些函数是可计算算的，但是又不是“简单”的递归。

上面的例子也很好说明了为什么现实中很多事物如此复杂，因为他们正是建立在多多少的“初始函数”上，ackermann里一个尚且如此，那么现实中那么多会造成什么效果呢？混沌。但是这并不是我们放任不管的理由，只要我们试图解释，不断研究，混沌有一天也可能被我们所了解，我们所要做的，就是去茧抽丝，剥离一切，寻找那最初的东西。这也是为什么一个国家的学科基础研究越深，取得的成就也就越大。《三体》中智子锁死了人类的物理研究，就相当于锁死了人类进步的阶梯。

p.s. 对于心情浮躁的朋友们（他们很可能只看到最后一句），这片文章的结论就是，歇一下，偶尔想想为什么反而能让你心静如水。