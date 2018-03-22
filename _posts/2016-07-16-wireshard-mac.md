---
layout: post
title:  "mac 下使用 Wireshark 的 loopback 模式"
date:   2016-07-16 12:06:07 +0100
categories: tech mac
published: true
---

如果想在本地测试，需要调到 loopbak 模式。这样就可以看到本地的通信包。

有时会出现找不到任何接口的状态：`no interface found`
![no interface found]({{"/assets/img/2016-07/loopback.png" | absolute_url}})

这是因为一些文件的权限被改动了，在`/dev` 下有很多”bpf”文件，这些应该就是网络记录的相关文件（存疑，有待进一步考证）。所以为了用wireshark应该把权限改回来。步骤如下：
首先是改动之前，可以看到相关文件的权限:

{% highlight bash %}
 ☁  /dev  ls -l bpf* print
ls: print: No such file or directory
crw-------  1 root  wheel   23,   0 Jun 30 13:24 bpf0
crw-------  1 root  wheel   23,   1 Jun 30 13:24 bpf1
crw-------  1 root  wheel   23,   2 Jul  8 18:29 bpf2
crw-------  1 root  wheel   23,   3 Jul  8 18:29 bpf3
crw-------  1 root  wheel   23,   4 Jul  5 03:47 bpf4
crw-------  1 root  wheel   23,   4 Jul  5 03:47 bpf5
{% endhighlight %}

执行命令，改动之后：

{% highlight bash %}
☁  /dev  sudo chmod 644 bpf*
☁  /dev  ls -l bpf* print
ls: print: No such file or directory
crw-r--r--  1 root  wheel   23,   0 Jun 30 13:24 bpf0
crw-r--r--  1 root  wheel   23,   1 Jun 30 13:24 bpf1
crw-r--r--  1 root  wheel   23,   2 Jul  8 18:29 bpf2
crw-r--r--  1 root  wheel   23,   3 Jul  8 18:29 bpf3
crw-r--r--  1 root  wheel   23,   4 Jul  5 03:47 bpf4
crw-r--r--  1 root  wheel   23,   5 Jul  9 11:38 bpf5
{% endhighlight %}

这里执行命令用到了`chmod`(change mode)，后面的数字是8进制数字代表了不同组的权限：
* 6 ->二进制转换-> 110
* 4 ->二进制转换-> 100
* 4 ->二进制转换-> 100
* => 644 ->二进制转换-> 110 100 100 -> `rw- r—- r—-`

之后，问题解决：
![no interface found]({{"/assets/img/2016-07/loopback1.png" | absolute_url}})