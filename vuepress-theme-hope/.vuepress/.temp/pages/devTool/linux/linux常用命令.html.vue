<template><div><p>部分linux指令的摘录</p>
<!-- more -->
<h1 id="linux常用命令" tabindex="-1"><a class="header-anchor" href="#linux常用命令" aria-hidden="true">#</a> linux常用命令</h1>
<p>pwd : 显示当前所在的路径</p>
<p>ll : 显示当前所在目录下的所有的文件及文件夹的<strong>详细信息</strong></p>
<p>ls : 显示当前所在目录下的所有的文件及文件夹的<strong>信息简略</strong></p>
<p>cd .. :返回上一层目录cd 文件夹名称:进入某个文件夹</p>
<p><strong>ctrl+c :</strong> <strong>中断</strong></p>
<p>ctrl+insert : 拷贝</p>
<p>shift+insert : 粘贴</p>
<p><strong>ifconfig</strong>  打印网卡信息</p>
<p><strong>reboot 重启</strong></p>
<p><strong>clear</strong>  <strong>清除屏幕历史命令记录</strong></p>
<p>tar zxvf  文件名   解压文件</p>
<p>unzip   文件名   解压zip文件</p>
<p>ip addr 查看端口</p>
<h2 id="文件操作命令" tabindex="-1"><a class="header-anchor" href="#文件操作命令" aria-hidden="true">#</a> 文件操作命令</h2>
<p><strong>创建目录: mkdir   目录名</strong></p>
<p>vi 和 vim 都是编辑文件</p>
<p><strong>:wq</strong> <strong>保存并退出</strong></p>
<p>:q 不保存退出(适用于没有编辑时):</p>
<p>q! 强制退出</p>
<p>chmod +x + ~ 授权  (&quot;~&quot;s 要授权的东西)</p>
<p>touch 创建空文件. (相当于在windows中右键新建文档)</p>
<p>cat 预览文件全部内容(cat 文件名.后缀)</p>
<p>echo ‘内容’ &gt;&gt; 文件名  向文件中添加一些内容</p>
<p><strong>复制</strong></p>
<p>cp a.txt  abc/b.txt</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>拷贝a.txt到当前目录下的abc目录下,拷贝后的文件名为b.txt,要求:目录abc已经存在
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>cp -r abc bbb</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>复制文件夹abc到新的文件夹bbb,里面的内容都会被同时复制
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>剪切</strong></p>
<p>mv aa.txt abc</p>
<p><strong>删除</strong></p>
<p>rm dd.txt</p>
<p>rm -f dd.txt  (不用询问)
如果是目录就是
rm -rf 删除目录且不询问</p>
<h2 id="端口" tabindex="-1"><a class="header-anchor" href="#端口" aria-hidden="true">#</a> 端口</h2>
<h4 id="查找所有运行的端口" tabindex="-1"><a class="header-anchor" href="#查找所有运行的端口" aria-hidden="true">#</a> 查找所有运行的端口</h4>
<p>netstat -ano</p>
<h4 id="查看被占用端口对应的-pid" tabindex="-1"><a class="header-anchor" href="#查看被占用端口对应的-pid" aria-hidden="true">#</a> 查看被占用端口对应的 PID</h4>
<p>netstat -aon|findstr &quot;8081&quot;</p>
<h4 id="查看指定-pid-的进程" tabindex="-1"><a class="header-anchor" href="#查看指定-pid-的进程" aria-hidden="true">#</a> 查看指定 PID 的进程</h4>
<p>tasklist|findstr &quot;9088&quot;</p>
<h4 id="结束进程" tabindex="-1"><a class="header-anchor" href="#结束进程" aria-hidden="true">#</a> 结束进程</h4>
<p>taskkill /T /F /PID 9088</p>
<h2 id="防火墙" tabindex="-1"><a class="header-anchor" href="#防火墙" aria-hidden="true">#</a> 防火墙</h2>
<p>查看防火墙80端口是否开放</p>
<p>firewall-cmd --query-port=80/tcp</p>
<p>开放防火墙端口80</p>
<p>firewall-cmd --zone=public --add-port=80/tcp --permanent</p>
<p>关闭80端口</p>
<p>firewall-cmd --zone=public --remove-port=80/tcp--permanent</p>
<p>配置立即生效</p>
<p>firewall-cmd --reload</p>
<p>查看防火墙状态</p>
<p>systemctl status firewalld</p>
<p>关闭防火墙</p>
<p>systemctl stop firewalld</p>
<p>打开防火墙</p>
<p>systemctl start firewalld</p>
<p>开放一段端口</p>
<p>firewall-cmd --zone=public --add-port=22-9999/tcp --permanent</p>
<p>查看开放的端口列表</p>
<p>firewall-cmd --zone=public --list-ports</p>
<h2 id="zookeeper" tabindex="-1"><a class="header-anchor" href="#zookeeper" aria-hidden="true">#</a> zookeeper</h2>
<p><strong>启动:</strong>  cd /usr/local/zookeeper/bin</p>
<pre><code>		  ./zkServier.sh  start
</code></pre>
<p><strong>停止:</strong>    ./zkServier.sh  stop</p>
<h2 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> nginx</h2>
<p><strong>启动:</strong>    cd /usr/local/nginx/sbin</p>
<pre><code>		 ./nginx
</code></pre>
<p><strong>查看运行状态:</strong>    ps aux | grep nginx</p>
<p><strong>停止:</strong>     ./nginx -s quit</p>
<p><strong>重新加载配置文件:</strong>  ./nginx -s reload</p>
<p><strong>重启建议先停止在启动</strong></p>
<h2 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> redis</h2>
<p><strong>启动:</strong>      cd /usr/local/redis/bin</p>
<p>./redis-server redis.conf</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token punctuation">[</span>root<span class="token annotation punctuation">@localhost</span> redis<span class="token operator">-</span><span class="token number">5.0</span><span class="token number">.8</span><span class="token punctuation">]</span># cd utils<span class="token operator">/</span>
<span class="token punctuation">[</span>root<span class="token annotation punctuation">@localhost</span> utils<span class="token punctuation">]</span># <span class="token punctuation">.</span>/install_server<span class="token punctuation">.</span>sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>重启:   systemctl restart redis_6379.service</p>
<p><strong>查看:</strong>     ps aux|grep redis
ps -ef |grep redis</p>
<p>systemctl status redis_6379.service</p>
<p><strong>关闭:</strong>     ./redis-cli shutdown</p>
<p><strong>测试:</strong>      ./redis-cli</p>
<h2 id="rabbitmq" tabindex="-1"><a class="header-anchor" href="#rabbitmq" aria-hidden="true">#</a> rabbitMQ</h2>
<p><strong>启动:</strong>    cd /usr/local/rabbitmq/sbin</p>
<p>./rabbitmq-server -detached</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>报错
Warning: PID file not written; -detached was passed.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>./rabbitmqctl start_app 用这个启动</p>
<p><strong>停止命令:</strong>  ./rabbitmqctl stop_app</p>
<p>如果无法停止，使用 kill -9 进程号进行关闭</p>
<p><strong>访问:</strong> <a href="http://120.78.216.13:15672/" target="_blank" rel="noopener noreferrer">http://120.78.216.13:15672/<ExternalLinkIcon/></a></p>
<h2 id="ftp服务器" tabindex="-1"><a class="header-anchor" href="#ftp服务器" aria-hidden="true">#</a> ftp服务器</h2>
<p>启动 ftp 服务：</p>
<p>systemctl start vsftpd.service</p>
<p>查看状态</p>
<p>systemctl status vsftpd.service</p>
<p>重启 ftp 服务：</p>
<p>systemctl restart vsftpd.service</p>
<p>停止ftp服务</p>
<p>systemctl stop vsftpd.service</p>
<h2 id="docker容器" tabindex="-1"><a class="header-anchor" href="#docker容器" aria-hidden="true">#</a> docker容器</h2>
<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3>
<p>yum install -y docker
开启DOCKER服务   systemctl start docker.service
查看dock版本    docker version
设置开机启动    systemctl enable docker.service
查看状态:    systemctl status docker
配置文件:
vim /etc/docker/daemon.json</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token punctuation">{</span>
 <span class="token string">"registry-mirrors"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"http://hub-mirror.c.163.com"</span><span class="token punctuation">]</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**加载daemon文件 **        systemctl daemon-reload
重启                   systemctl restart docker.service</p>
<h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h2>
<h2 id="redis-1" tabindex="-1"><a class="header-anchor" href="#redis-1" aria-hidden="true">#</a> redis:</h2>
<p><strong>Redis 中的其他命令</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>echo value 测试 redis 是否链接 如果已链接返回 echo 命令后给定的值 (相当于回音)

与ping-->PONG一样的意思

expire key time(s) 设置一个 key 的过期时间 单位秒。时间到达后会删除 key 及 value(使用场景:美团APP,电影票订单下单时候没有来得及支付,自动取消这个订单)

ttl key 查询已设置过期时间的 key 的剩余时间 如果返回-2 表示该键值对已经过期被删除

type key 查询key的数据类型

persist 移除给定 key 的过期时间

select dbindex 选择数据库(0-15)redis内默认有16个库,默认使用0库（select 1）

move key dbIndex 将当前数据库中的 key 转移到其他数据库中 (相当于是剪切)

dbsize 返回当前数据库中的 key 的数目 info 获取服务器的信息和统计
flushdb  删除当前库中的所有的key

flushall 删除所有16个数据库中的所有 key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a> </h1>
</div></template>
