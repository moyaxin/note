部分linux指令的摘录
<!-- more -->
# linux常用命令
pwd : 显示当前所在的路径

ll : 显示当前所在目录下的所有的文件及文件夹的**详细信息**

ls : 显示当前所在目录下的所有的文件及文件夹的**信息简略**

cd .. :返回上一层目录cd 文件夹名称:进入某个文件夹

**ctrl+c :** **中断**

ctrl+insert : 拷贝

shift+insert : 粘贴

**ifconfig**  打印网卡信息

**reboot 重启**

**clear**  **清除屏幕历史命令记录**

tar zxvf  文件名   解压文件

unzip   文件名   解压zip文件

ip addr 查看端口

## 文件操作命令

**创建目录: mkdir   目录名**

vi 和 vim 都是编辑文件

**:wq** **保存并退出**

:q 不保存退出(适用于没有编辑时):

q! 强制退出

chmod +x + ~ 授权  ("~"s 要授权的东西)

touch 创建空文件. (相当于在windows中右键新建文档)

cat 预览文件全部内容(cat 文件名.后缀)

echo ‘内容’ >> 文件名  向文件中添加一些内容

**复制**

cp a.txt  abc/b.txt

```
拷贝a.txt到当前目录下的abc目录下,拷贝后的文件名为b.txt,要求:目录abc已经存在
```

cp -r abc bbb

```
复制文件夹abc到新的文件夹bbb,里面的内容都会被同时复制
```

**剪切**

mv aa.txt abc

**删除**

rm dd.txt

rm -f dd.txt  (不用询问)
如果是目录就是
rm -rf 删除目录且不询问

## 端口
#### 查找所有运行的端口
netstat -ano
#### 查看被占用端口对应的 PID
netstat -aon|findstr "8081"
#### 查看指定 PID 的进程
tasklist|findstr "9088"
#### 结束进程
taskkill /T /F /PID 9088 

## 防火墙

查看防火墙80端口是否开放

firewall-cmd --query-port=80/tcp

开放防火墙端口80

firewall-cmd --zone=public --add-port=80/tcp --permanent

关闭80端口

firewall-cmd --zone=public --remove-port=80/tcp--permanent

配置立即生效

firewall-cmd --reload

查看防火墙状态

systemctl status firewalld

关闭防火墙

systemctl stop firewalld

打开防火墙

systemctl start firewalld

开放一段端口

firewall-cmd --zone=public --add-port=22-9999/tcp --permanent

查看开放的端口列表

firewall-cmd --zone=public --list-ports

## zookeeper

**启动:**  cd /usr/local/zookeeper/bin

			  ./zkServier.sh  start

**停止:**    ./zkServier.sh  stop

## nginx

**启动:**    cd /usr/local/nginx/sbin

			 ./nginx

**查看运行状态:**    ps aux | grep nginx

**停止:**     ./nginx -s quit

**重新加载配置文件:**  ./nginx -s reload

**重启建议先停止在启动**

## redis

**启动:**      cd /usr/local/redis/bin

              ./redis-server redis.conf
```java
[root@localhost redis-5.0.8]# cd utils/
[root@localhost utils]# ./install_server.sh
```
重启:   systemctl restart redis_6379.service

**查看:**     ps aux|grep redis
ps -ef |grep redis

systemctl status redis_6379.service

**关闭:**     ./redis-cli shutdown

**测试:**      ./redis-cli

## rabbitMQ

**启动:**    cd /usr/local/rabbitmq/sbin

./rabbitmq-server -detached

```
报错
Warning: PID file not written; -detached was passed.
```

./rabbitmqctl start_app 用这个启动

**停止命令:**  ./rabbitmqctl stop_app

如果无法停止，使用 kill -9 进程号进行关闭

**访问:** [http://120.78.216.13:15672/](http://120.78.216.13:15672/)

## ftp服务器

启动 ftp 服务：

systemctl start vsftpd.service

查看状态

systemctl status vsftpd.service

重启 ftp 服务：

systemctl restart vsftpd.service

停止ftp服务

systemctl stop vsftpd.service
## docker容器
### 安装
yum install -y docker
开启DOCKER服务   systemctl start docker.service
查看dock版本    docker version
设置开机启动    systemctl enable docker.service
查看状态:    systemctl status docker
配置文件:
vim /etc/docker/daemon.json
```java
{
 "registry-mirrors": ["http://hub-mirror.c.163.com"] 
}
```
**加载daemon文件 **        systemctl daemon-reload 
重启                   systemctl restart docker.service
## 
## redis:


**Redis 中的其他命令**

```
echo value 测试 redis 是否链接 如果已链接返回 echo 命令后给定的值 (相当于回音)

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
```


# 
