---
sticky: true
date: 2020-7-30
category:
- 工具
tag:
- 入门
---
Docker消除了重复的、平凡的配置任务

并在整个开发生命周期中用于快速、简单和可移植的应用程序开发
<!-- more -->
# Docker 
## 1.Docker 简介
Docker  是基于 Go 语言实现的开源容器项目。利用操作系统本身已有的机制和特性，

可以实现远超传统虚拟机的轻量级虚拟化。它是内核级的虚拟化。期望达到使项目运行环境“一次封装，到处运行的目的”。



利用 docker 创建的运行环境叫做 docker 容器，容器是通过 docker 镜像创建的，docker

镜像文件可以放在私有仓库中也可以放在共有仓库中。



官网地址：https://www.docker.com

Docker Hub官网: https://hub.docker.com/

## 2.**使用Docker的优势**

容器除了运行其中应用外，基本不消耗额外的系统资源，使得应用的性能很高，同时系统的开销尽量小。传统虚拟机方式运行 10 个不同的应用就要起 10 个虚拟机，而Docker 只需要启动 10 个隔离的应用即可。具体说来，Docker 在如下几个方面具有较大的优势。

**1、更快速的交付和部署**

对开发和运维（devop）人员来说，最希望的就是一次创建或配置，可以在任意地方正常运行。

开发者可以使用一个标准的镜像来构建一套开发容器，开发完成之后，运维人员可以直接使用这个容器来部署代码。 Docker 可以快速创建容器，快速迭代应用程序，并让整个过程全程可见，使团队中的其他成员更容易理解应用程序是如何创建和工作的。 Docker 容器很轻很快！容器的启动时间是秒级的，大量地节约开发、测试、部署的时间。

**2、更高效的虚拟化**

Docker 容器的运行不需要额外的 hypervisor(管理程序) 支持，它是内核级的虚拟化，因此可以实现更高的性能和效率。

**3、更轻松的迁移和扩展**

Docker 容器几乎可以在任意的平台上运行，包括物理机、虚拟机、公有云、私有云、个人电脑、服务器等。 这种兼容性可以让用户把一个应用程序从一个平台直接迁移到另外一个。

**4、更简单的管理**

使用 Docker，只需要小小的修改，就可以替代以往大量的更新工作。所有的修改都以增量的方式被分发和更新，从而实现自动化并且高效的管理。

> Docker 和 VM 的对比 

**结构区别**

![img](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2025/1649582239980-1baae095-afd0-4108-bf93-3a244a529b5c.png)

**应用区别**

Docker：面向内核、软件，docker 是秒级别的

虚拟机：面向硬件的，分钟级别

![img](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2025/1649582264381-a57e4898-7604-4026-ba7a-04e8dcae3512.png)

## 3.Docker 特点

1. **效率高**

用户只需要几分钟，就可以把自己的程序“Docker 化”。Docker 依赖于“写时复制”（copy-on-write）模型，使修改应用程序也非常迅速，可以说达到“随心所致，代码即改”的境界。随后，就可以创建容器来运行应用程序了。大多数 Docker 容器只需要不到 1 秒中即可启动。由于去除了管理程序的开销，Docker 容器拥有很高的性能，同时同一台宿主机中也可以运行更多的容器，使用户尽可能的充分利用系统资源。

1. **职责明确**

使用 Docker，开发人员只需要关心容器中运行的应用程序，而运维人员只需要关心如何管理容器。Docker 设计的目的就是要加强开发人员写代码的开发环境与应用程序要部署的生产环境一致性。从而降低那种“开发时一切正常，肯定是运维的问题（测试环境都是正常的，上线后出了问题就归结为肯定是运维的问题）”

1. **结构完整**

Docker 的目标之一就是缩短代码从开发、测试到部署、上线运行的周期，让你的应用程序具备可移植性，易于构建，并易于协作。（通俗一点说，Docker 就像一个集装箱，里面可以装很多物件，如果需要这些物件的可以直接将该集装箱拿走，而不需要从该集装箱中一件件的取。）

1.  **契合微服务架构**

Docker 还鼓励面向服务的体系结构和微服务架构。Docker 推荐单个容器只运行一个应用程序或进程，这样就形成了一个分布式的应用程序模型，在这种模型下，应用程序或者服务都可以表示为一系列内部互联的容器，从而使分布式部署应用程序，扩展或调试应用程序都变得非常简单，同时也提高了程序的内省性。

## 4.Docker 架构

![img](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2025/1649582364403-50dbacbd-d379-4027-90cb-1681c0b6b22b.png)

| Docker 镜像(Images)    | Docker 镜像是用于创建 Docker 容器的模板，比如 Tomcat。       |
| ---------------------- | ------------------------------------------------------------ |
| Docker 容器(Container) | 容器是独立运行的一个或一组应用，是镜像运行时的实体。         |
| Docker 客户端(Client)  | Docker 客户端通过命令行或者其他工具使用 Docker SDK (https://docs.docker.com/develop/sdk/) 与 Docker 的守护进程通信。 |
| Docker 主机(Host)      | 一个物理或者虚拟的机器用于执行 Docker 守护进程和容器。       |
| Docker Registry        | Docker 仓库用来保存镜像，可以理解为代码控制中的代码仓库。Docker Hub(https://hub.docker.com) 提供了庞大的镜像集合供使用。一个 Docker Registry 中可以包含多个仓库（Repository）；每个仓库可以包含多个标签（Tag）；每个标签对应一个镜像。通常，一个仓库会包含同一个软件不同版本的镜像，而标签就常用于对应该软件的各个版本。我们可以通过 <仓库名>:<标签> 的格式来指定具体是这个软件哪个版本的镜像。如果不给出标签，将以 **latest** 作为默认标签。 |

**1 Docker daemon（Docker 守护进程）**

Docker daemon 是一个运行在宿主机（DOCKER_HOST）的后台进程。我们可通过Docker 客户端与之通信。

**2 Client（Docker 客户端）**

Docker 客户端是 Docker 的用户界面，它可以接受用户命令和配置标识，并与 Docker daemon 通信。图中docker build/docker pull/docker run等都是 Docker 的相关命令。

**3 Images（Docker 镜像）**

Docker 镜像是一个只读模板，它包含创建 Docker 容器的说明。它和系统安装光盘有点像——我们使用系统安装光盘安装系统，同理，我们使用 Docker 镜像运行 Docker镜像中的程序。说白了docker镜像从概念上讲类似于vm里面的iso文件，就是一个只读的模板。

**4 Container（容器）**

容器是镜像的可运行实例。镜像和容器的关系有点类似于面向对象中，类和对象的关系。我们可通过 Docker API 或者 CLI 命令来启停、移动、删除容器。也可以这么理解:容器与镜像的关系有点像进程与程序的关系，运行中的镜像就叫容器

**5 Registry（仓库）**

Docker Registry 是一个集中存储与分发镜像的服务。我们构建完 Docker 镜像后，就可在当前宿主机上运行。但如果想要在其他机器上运行这个镜像，我们就需要手动拷贝。此时，我们可借助 Docker Registry 来避免镜像的手动拷贝。

一个 Docker Registry 可包含多个 Docker 仓库；每个仓库可包含多个镜像标签；每个标签对应一个 Docker 镜像。这跟 Maven 的仓库有点类似，如果把 Docker Registry 比作 Maven 仓库的话，那么 Docker 仓库就可理解为某 jar 包的路径，而镜像标签则可理解为 jar 包的版本号。


## 5.Docker安装与使用

### 5.1安装Docker
```
yum install -y docker
```

开启Docker服务 
```
systemctl start docker.service
```

查看安装结果  
```
docker version
```
查看 Docker 状态 
```
docker info
```
设置开机启动  
```
systemctl enable docker.service
```
### 5.2设置镜像加速(阿里云)

访问https://www.aliyun.com/

在 控制台中找到镜像加速器

![image-20220506151724367](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2025/image-20220506151724367.png)

```
vim /etc/docker/daemon.json
复制加速地址
{ 
	"registry-mirrors": ["https://****"] 
}
重新加载
systemctl daemon-reload
重启docker
systemctl restart docker

然后就可以在docker info中查看镜像地址
```

## 6.Docker常用命令

### 6.1. 帮助启动类命令

```java
启动docker： systemctl start docker
停止docker： systemctl stop docker
重启docker： systemctl restart docker
查看docker状态： systemctl status docker
开机启动： systemctl enable docker
查看docker概要信息： docker info
查看docker总体帮助文档： docker --help
查看docker命令帮助文档： docker 具体命令 --help
```

### 6.2镜像命令

1. **列出本地主机上的镜像**  

```
docker images
```
![img](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2025/1649582937951-662dfc27-5837-450c-bdca-5ab474e0db68.png)



```java
REPOSITORY：镜像所在的仓库名称
TAG：镜像标签
IMAGE ID：镜像 ID
CREATED：镜像的创建日期（不是获取该镜像的日期）
SIZE：镜像大小
```

 -a :列出本地所有的镜像（含历史映像层）

 -q :只显示镜像ID。



2. 搜索镜像  

```
docker search 某个XXX镜像名字
```

在网站https://hub.docker.com中搜索该镜像

![img](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2025/1649582937951-662dfc27-5837-450c-bdca-5ab474e0db68.png)

```java
NAME：仓库名称
DESCRIPTION：镜像描述
STARS：用户评价，反应一个镜像的受欢迎程度
OFFICIAL：是否官方
AUTOMATED：自动构建，表示该镜像由 Docker Hub 自动构建流程创建的
```

--limit : 只列出N个镜像，默认25个



3. 下载镜像   

```
docker pull 某个XXX镜像名字
```

后面可以加版本号



4. 查看镜像/容器/数据卷所占的空间  


```
 docker system df
```


5. 删除镜像
```
docker rmi 某个XXX镜像名字ID
docker rmi  -f  镜像ID
```

强制删除镜像(无需询问):可以不先删除容器,直接删除镜像    docker rmi -f --force 镜像id

删除多个:  
```
docker rmi -f 镜像名1:TAG 镜像名2:TAG
```

### 6.3容器命令

**有镜像才能创建容器， 这是根本前提**

1.  **列出当前所有****正在运行****的容器**

```
docker ps
```

-a :列出当前所有正在运行的容器+历史上运行过的

-l :显示最近创建的容器。

-n：显示最近n个创建的容器。

-q :静默模式，只显示容器编号。



3. **退出容器**

 **exit**

 run进去容器，exit退出，容器停止

 **ctrl+p+q**

> run进去容器，ctrl+p+q退出，容器不停止



3. **启动已停止运行的容器**
```
 docker start 容器ID或者容器名
```


暂停容器
``` 
docker pause mysql
```


恢复容器
``` 
docker unpause mysql
```

4.  重启容器

``` 
 docker restart 容器ID或者容器名
 ```

5.  停止容器

```  
docker stop 容器ID或者容器名
```

6. 强制停止容器

``` 
 docker kill 容器ID或容器名
```

7.  删除已停止的容器

```
 docker rm 容器ID 
```

 强制删除镜像  docker rmi -f --force 镜像名称或镜像的ID

一次性删除多个容器实例: 
``` 
docker rm -f $(docker ps -a -q)

docker ps -a -q | xargs docker rm
```

8. 启动守护式容器(后台服务器)

``` 
 docker run -d 容器名
```

9.  redis 前后台启动演示case

前台交互式启动

 ``` 
 docker run -it redis:6.0.8
 ```

后台守护式启动

``` 
docker run -d redis:6.0.8
```

11. 查看容器日志

``` 
docker logs 容器ID
```

查看容器的最后5行日志信息

```  
docker logs -f -t --tail 5 mysql
```

12. 查看容器内运行的进程

``` 
docker top 容器ID
```

13. 查看容器内部细节
``` 
 docker inspect 容器ID
```

14. 进入正在运行的容器并以命令行交互 :star:

```  
docker exec -it 容器ID /bin/bash
```

15.从宿主机拷文件到容器里面

最新的tomcat中没有ROOT目录,拷贝一个进去

```  
docker cp /usr/local/app/ROOT mytomcat1:/usr/local/tomcat/webapps
```
16.备份容器(把容器翻译成镜像)
```  
docker commit -p  容器id  新的镜像名称
```

其中，-p 后第一个参数是要备份的容器的ID，第二个参数是新的镜像名称。此时，这个新镜像就已经保存下来了，
可以执行下面的命令来查看镜像：
```  
docker images
```
启动备份的容器
```  
docker run -d -p 6379:6379的新镜像
```


运行容器

```angular2html
docker run --name mysql -p 3306:3306 -d 新的镜像名称
```

---

::: warning 警告
docker需要防火墙启动,且安装对于软件的时候开放对于端口

查看防火墙状态:   systemctl status firewalld

配置立即生效:   firewall-cmd --reload

开放8080端口:  firewall-cmd --zone=public --add-port=8080/tcp --permanent

查看9200端口是否开放:  netstat -anlp | grep :9200
:::



## 7.安装容器

### 7.1mysql

拉取镜像  

```angular2html
docker pull mysql
```

创建容器

```angular2html
docker run --name mysql2 -e MYSQL_ROOT_PASSWORD=root-p 3307:3306 -d mysql

```

::: info 解释
mysql2 : 新建的容器名
mysql   : 本地镜像images的名字
-d, --detach=false， 指定容器运行于前台还是后台，默认为false
–name=""， 指定容器名字，后续可以通过名字进行容器管理，links特性需要使用名字
-p, --publish=[]， 指定容器暴露的端口
-e, --env=[]， 指定环境变量，容器中可以使用该环境变量
如果版本号是latest,在创建容器时,可以省略版本号,否则一定要加版本号
:::

![image-20220506152536229](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2025/image-20220506152536229.png)

创建过程:

![image-20220506152658618](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2025/image-20220506152658618.png)

---

连接mysql报2058错误

原因:分析是 mysql 密码加密方法变了

::: tip 自定义提示
解决方案：
1.进入name为mysql2的容器
docker exec -it mysql2 /bin/bash
2.进入mysql
mysql -uroot -p
输入root
3.修改密码
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'root';
4.退出mysql容器的命令:
exit
:::

### 7.2tomcat
安装
```
docker pull tomcat
docker run --name mytomcat -d -p 8081:8080 tomcat
```

::: info 解释
8081是宿主机端口,8080的是tomcat容器端口
8080映射到8081,安装完会自带jdk,可以进入容器,
通过java -version查看自带jdk的版本号
:::

最新的tomcat的webapps中没有ROOT目录,上传一个到宿主机再从宿主机拷贝到容器中

```
docker cp /usr/local/app/ROOT mytomcat:/usr/local/tomcat/webapps
```

![image-20220506153042793](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2025/image-20220506153042793.png)

### 7.3Nginx

```
docker pull Nginx
docker run --name mynginx -p 81:80 -d nginx
```

nginx.conf配置文件在 /etc/nginx/ 下面

但容器中 vi或者vim命令无效 可以使用如下命令

````
apt-get update
apt-get install vim -y
````

```angular2html
vim nginx.conf
```

也可以使用把容器中的配置文件拷贝到宿主机上,在宿主机上修改好,再拷贝到容器中

###  7.4redis

```
docker search redis
docker pull redis
```



在宿主机上挂载redis.config配置文件(docker镜像redis 默认无配置文件)

1.在宿主机上创建redis持久化的数据目录 mkdir /usr/local/redis/data

2.把redis中的redis.conf目录放在这个目录中，再执行一下命令：

```
docker run -d --restart=always -v /usr/local/redis/data:/data -v /usr/local/redis/data.redis.conf:/etc/redis/redis.conf --name myredis2 -p 6379:6379 redis redis-server /etc/redis/redis.conf  --requirepass "123456" --appendonly yes --bind 0.0.0.0 --protected-mode no
```


::: info 命令说明
在docker中启动redis一定要把：daemonize 设置为 no，这个
很重要，如果不是no docker会一直启动失败，原因是docker本身
需要后台运行，而这个配置选项也是以守护进程启动，两者会冲突

1.-p 6379:6379：
第一个端口是宿主机端口(服务器端口)，第二个端口是容器端口(容器是一个个沙箱外部不不能访问的)，将容器的6379端口映射到宿主机的6379端口上，这样可以通过访问宿主机6379来访问redis;

2.–name myredis2 ：
容器的名字 redis方便以后操作容器（docker start myredis2 ;docker stop myredis2 等等);

3.-v /usr/local/redis/data.redis.conf:/etc/redis/redis.conf
挂载持久化配置
/usr/local/redis/data.redis.conf：
是宿主机(服务器)你自己的redis.conf文件路径
/etc/redis/redis.conf: 
容器内部的redis.conf文件路径，
不用手动创建，
容器启动时会把上边宿主机的redis.conf自动映射到该目录下. 
这样在修改宿主机上的redis.conf文件时候就不用进入到容器内部去修改了

4.-v /usr/local/redis/data:/data：
挂载持久化文件
/usr/local/redis是宿主机中持久化文件的位置，
/data是容器中持久化文件的位置

5.-d ：
后台启动

6.redis ：
创建容器的redis镜像

7.redis-server /etc/redis/redis.conf
指定用配置文件的方式启动redis

8. –appendonly yes 开启持久化
:::


### 7.5rabbitmq

```
docker pull macintoshplus/rabbitmq-management
docker run -d --name rabbitmq -e RABBITMQ_DEFAULT_USER=admin -e RABBITMQ_DEFAULT_PASS=admin -p 15672:15672 -p 5672:5672 macintoshplus/rabbitmq-management
```

::: info 命令说明
【-e RABBITMQ_DEFAULT_USER=admin -e RABBITMQ_DEFAULT_PASS=admin】
  
    是设置web管理平台的用户名和密码

【 -p 15672:15672】 是控制台docker映射到系统的对应端口

【 -p 5672:5672】 是应用程序的访问端口
:::


## 8.配置阿里云镜像仓库

当前我们创建的镜像都在本地,如果本地服务器出问题,容易丢失了.

解决: 

在阿里云容器镜像服务中，创建镜像仓库。并依据镜像仓库信息完成镜像的 push 和pull。

<img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2025/image-20220506154333924.png" style="zoom:50%;" />

<img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2025/image-20220506154259049.png" alt="image-20220506154259049" style="zoom:50%;" />

1.  登录阿里云Docker Registry

```
 docker login --username=[阿里云的用户名] registry.cn-shenzhen.aliyuncs.com
```

2. 从Registry中拉取镜像

```
docker pull registry.cn-shenzhen.aliyuncs.com/yaxin831/test:[镜像版本号] 
```

3. 将镜像推送到Registry

```
$ docker login --username=[阿里云的用户名] registry.cn-shenzhen.aliyuncs.com
$ docker tag [ImageId] registry.cn-shenzhen.aliyuncs.com/yaxin831/test:[镜像版本号]
$ docker push registry.cn-shenzhen.aliyuncs.com/yaxin831/test:[镜像版本号]
```

### 8.1配置本地镜像仓库

1.下载本地仓库镜像

```
docker pull registry
```

2.修改 Docker Service 配置

```
vi /usr/lib/systemd/system/docker.service
```

找到 Service 节点，在 ExecStart 属性末尾增加新参数，值为：

--insecure-registry 192.168.50.131:5000  (192.168.160.138  改自己linux的ip)

![image-20220506155321703](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2025/image-20220506155321703.png)

3. 修改 Docker Daemon 配置

```
vi /etc/docker/daemon.json

{

	"insecure-registries":["192.168.160.138:5000"]

}
```

4. 重启 Docker 服务

```
systemctl daemon-reload

systemctl restart docker
```

5. 创建并启动本地仓库容器

```
docker run -p 5000:5000 -v /opt/registry:/var/lib/registry --name registry -d registry
```

会在opt目录下创建registry目录/opt/registry:/var/lib/registry  本地目录映射到容器中的目录/var/lib/registry

6. 浏览器查看本地仓库

[http://192.168.160.138:5000/v2](http://ip:5000/v2)/_catalog

v2 : 为版本号

_catalog :  查看日志

7. push 镜像

```
改本地镜像名
docker tag [ImageId] ip:5000/[镜像名称]:[镜像版本号]               
上传
docker push ip:5000/[镜像名称]:[镜像版本号]
```

## 9.使用docker容器部署项目
### 9.1提前安装好docker


### 9.2创建Dockerfile文件

```
FROM openjdk:8u102
# Copy local code to the container image.
WORKDIR /app
COPY pom.xml .
COPY src ./src
# Build a release artifact.
ADD target salary-1.0-SNAPSHOT.jar
# Run the web service on container startup.
CMD ["java","-jar","/qingyuan/target/salary-1.0-SNAPSHOT.jar","--spring.profiles.active=prod"]
```
::: info 解释
Dockerfile 用于指定构建 Docker 镜像的方法

Dockerfile 一般情况下不需要完全从 0 自己写，建议去 github、gitee 等托管平台参考同类项目（比如 springboot）

Docker 构建优化：减少尺寸、减少构建时间（比如多阶段构建，可以丢弃之前阶段不需要的内容）

:::

```
- FROM 依赖的基础镜像
- WORKDIR 工作目录
- COPY 从本机复制文件
- RUN 执行命令
- CMD / ENTRYPOINT（附加额外参数）指定运行容器时默认执行的命令
```

### 9.3 构建镜像



```
docker build -t user-backend:v0.0.1  1
```





### 9.4启动

```
docker run -p 80:80 -d user-backend:v0.0.1
```



虚拟化

1. 端口映射：把本机的资源（实际访问地址）和容器内部的资源（应用启动端口）进行关联
2. 目录映射：把本机的端口和容器应用的端口进行关联