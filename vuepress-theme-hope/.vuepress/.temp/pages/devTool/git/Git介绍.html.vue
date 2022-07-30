<template><div><p>Git是分布式代码托管的标杆，这里将提供如何学习Git，以及Git工作流的总结，和常用的操作命令</p>
<!-- more -->
<h1 id="git基本介绍" tabindex="-1"><a class="header-anchor" href="#git基本介绍" aria-hidden="true">#</a> git基本介绍</h1>
<h2 id="版本控制" tabindex="-1"><a class="header-anchor" href="#版本控制" aria-hidden="true">#</a> 版本控制</h2>
<p>版本控制（Revision control）是一种在开发的过程中用于管理我们对文件、目录或工程等内容的修改历史，方便查看更改历史记录，备份以便恢复以前的版本的软件工程技术。</p>
<blockquote>
<p><strong>用于管理多人协同开发项目的技术.</strong></p>
</blockquote>
<ul>
<li>实现跨区域多人协同开发</li>
<li>追踪和记载一个或者多个文件的历史记录</li>
<li>组织和保护你的源代码和文档</li>
<li>统计工作量</li>
<li>并行开发、提高开发效率</li>
<li>跟踪记录整个软件的开发过程</li>
<li>减轻开发人员的负担，节省时间，同时降低人为错误</li>
</ul>
<h3 id="常见版本控制工具" tabindex="-1"><a class="header-anchor" href="#常见版本控制工具" aria-hidden="true">#</a> 常见版本控制工具</h3>
<ul>
<li><strong>Git</strong></li>
<li><strong>SVN</strong>（Subversion）</li>
<li>CVS（Concurrent Versions System）</li>
<li>VSS（Micorosoft Visual SourceSafe）</li>
<li>TFS（Team Foundation Server）</li>
<li>Visual Studio Online</li>
</ul>
<h3 id="版本控制分类" tabindex="-1"><a class="header-anchor" href="#版本控制分类" aria-hidden="true">#</a> 版本控制分类</h3>
<p><strong>1、本地版本控制</strong>
记录文件每次的更新，可以对每个版本做一个快照，或是记录补丁文件，适合个人用，如RCS。</p>
<p><strong>2、集中版本控制  SVN</strong>
所有的版本数据都保存在服务器上，协同开发者从服务器上同步更新或上传自己的修改,代表产品：SVN、CVS、VSS</p>
<p><strong>3、分布式版本控制 	Git</strong>
所有版本信息仓库全部同步到本地的每个用户，这样就可以在本地查看所有版本历史，可以离线在本地提交，只需在连网时push到相应的服务器或其他用户那里。由于每个用户那里保存的都是所有的版本数据，只要有一个用户的设备没有问题就可以恢复所有的数据，但这增加了本地存储空间的占用.
不会因为服务器损坏或者网络问题，造成不能工作的情况！</p>
<h3 id="git与svn的主要区别" tabindex="-1"><a class="header-anchor" href="#git与svn的主要区别" aria-hidden="true">#</a> Git与SVN的主要区别</h3>
<p><strong>SVN是集中式版本控制系统</strong>，版本库是集中放在中央服务器的，而工作的时候，用的都是自己的电脑，所以首先要从中央服务器得到最新的版本，然后工作，完成工作后，需要把自己做完的活推送到中央服务器。集中式版本控制系统是必须联网才能工作，对网络带宽要求较高。
<strong>Git是分布式版本控制系统</strong>，没有中央服务器，每个人的电脑就是一个完整的版本库，工作的时候不需要联网了，因为版本都在自己电脑上。协同的方法是这样的：比如说自己在电脑上改了文件A，其他人也在电脑上改了文件A，这时，你们两之间只需把各自的修改推送给对方，就可以互相看到对方的修改了。Git可以直接看到更新了哪些代码和文件！
<strong>Git是目前世界上最先进的分布式版本控制系统。</strong></p>
<h2 id="软件下载" tabindex="-1"><a class="header-anchor" href="#软件下载" aria-hidden="true">#</a> 软件下载</h2>
<p>[git官网] <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">https://git-scm.com/<ExternalLinkIcon/></a>
淘宝镜像下载：<a href="http://npm.taobao.org/mirrors/git-for-windows/" target="_blank" rel="noopener noreferrer">http://npm.taobao.org/mirrors/git-for-windows/<ExternalLinkIcon/></a></p>
<h1 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h1>
<p>前往<a href="https://git-scm.com/downloads" target="_blank" rel="noopener noreferrer">git官网<ExternalLinkIcon/></a>下载git安装包，下载后默认next直接安装。</p>
<h3 id="启动git" tabindex="-1"><a class="header-anchor" href="#启动git" aria-hidden="true">#</a> 启动Git</h3>
<p>**Git Bash：**Unix与Linux风格的命令行，使用最多，推荐最多
**Git CMD：**Windows风格的命令行
<strong>Git GUI</strong>：图形界面的Git，不建议初学者使用，尽量先熟悉常用命令</p>
<h3 id="常用的linux命令" tabindex="-1"><a class="header-anchor" href="#常用的linux命令" aria-hidden="true">#</a> 常用的Linux命令</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>1）cd : 改变目录。
2）cd . . 回退到上一个目录，直接cd进入默认目录
3）pwd : 显示当前所在的目录路径。
4）ls(ll):  都是列出当前目录中的所有文件，只不过ll(两个ll)列出的内容更为详细。
5）touch : 新建一个文件 如 touch index.js 就会在当前目录下新建一个index.js文件。
6）rm:  删除一个文件, rm index.js 就会把index.js文件删除。
7）mkdir:  新建一个目录,就是新建一个文件夹。
8）rm -r :  删除一个文件夹, rm -r src 删除src目录
rm -rf / 切勿在Linux中尝试！删除电脑中全部文件！
9）mv 移动文件, mv index.html src index.html 是我们要移动的文件, src 是目标文件夹,当然, 这样写,必须保证文件和目标文件夹在同一目录下。
10）reset 重新初始化终端/清屏。
11）clear 清屏。
12）history 查看命令历史。
13) help 帮助。
14）exit 退出。
15）#表示注释
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git配置" tabindex="-1"><a class="header-anchor" href="#git配置" aria-hidden="true">#</a> Git配置</h3>
<p>查看配置 git config -l</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>#查看系统config
git config --system --list
#查看当前用户（global）配置
git config --global  --list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Git相关的配置文件地址：</strong>
1）、Git\etc\gitconfig  ：Git 安装目录下的 gitconfig   --system 系统级
2）、C:\Users\ {用户名} \ .gitconfig   只适用于当前登录用户的配置  --global 全局
<strong>设置用户名与邮箱（用户标识，必要）</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>#名称
git config --global user.name "MoYaXin" 
git config --global user.name "tongren" 
#邮箱
git config --global user.email 1413378838@qq.com
git config --global user.email tongren@shushi.pro
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git基本理论-重要" tabindex="-1"><a class="header-anchor" href="#git基本理论-重要" aria-hidden="true">#</a> Git基本理论（重要）</h2>
<p>Git本地有三个工作区域：工作目录（Working Directory）、暂存区(Stage/Index)、资源库(Repository或Git Directory)。如果在加上远程的git仓库(Remote Directory)就可以分为四个工作区域。文件在这四个区域之间的转换关系如下：</p>
<ul>
<li>Workspace：工作区，就是你平时存放项目代码的地方</li>
<li>Index / Stage：暂存区，用于临时存放你的改动，事实上它只是一个文件，保存即将提交到文件列表信息</li>
<li>Repository：仓库区（或本地仓库），就是安全存放数据的位置，这里面有你提交到所有版本的数据。其中HEAD指向最新放入仓库的版本</li>
<li>Remote：远程仓库，托管代码的服务器，可以简单的认为是你项目组中的一台电脑用于远程数据交换</li>
<li>Directory：使用Git管理的一个目录，也就是一个仓库，包含我们的工作空间和Git的管理空间。</li>
<li>WorkSpace：需要通过Git进行版本控制的目录和文件，这些目录和文件组成了工作空间。</li>
<li>.git：存放Git管理信息的目录，初始化仓库的时候自动创建。</li>
<li>Index/Stage：暂存区，或者叫待提交更新区，在提交进入repo之前，我们可以把所有的更新放在暂存区。</li>
<li>Local Repo：本地仓库，一个存放在本地的版本库；HEAD会只是当前的开发分支（branch）。</li>
<li>Stash：隐藏，是一个工作状态保存栈，用于保存/恢复WorkSpace中的临时状态。</li>
</ul>
<h3 id="工作流程" tabindex="-1"><a class="header-anchor" href="#工作流程" aria-hidden="true">#</a> 工作流程</h3>
<p>git的工作流程一般是这样的：
１、在工作目录中添加、修改文件；
２、将需要进行版本管理的文件放入暂存区域；
３、将暂存区域的文件提交到git仓库。
因此，git管理的文件有三种状态：已修改（modified）,已暂存（staged）,已提交(committed)</p>
<h2 id="git项目搭建" tabindex="-1"><a class="header-anchor" href="#git项目搭建" aria-hidden="true">#</a> Git项目搭建</h2>
<h3 id="本地仓库搭建" tabindex="-1"><a class="header-anchor" href="#本地仓库搭建" aria-hidden="true">#</a> 本地仓库搭建</h3>
<p>创建本地仓库的方法有两种：一种是创建全新的仓库，另一种是克隆远程仓库。
1、创建全新的仓库，需要用GIT管理的项目的根目录执行：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 在当前目录新建一个Git代码库
$ git init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2、执行后可以看到，仅仅在项目目录多出了一个.git目录，关于版本等的所有信息都在这个目录里面。</p>
<h3 id="克隆远程仓库" tabindex="-1"><a class="header-anchor" href="#克隆远程仓库" aria-hidden="true">#</a> 克隆远程仓库</h3>
<p>1、另一种方式是克隆远程目录，由于是将远程服务器上的仓库完全镜像一份至本地！</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 克隆一个项目和它的整个代码历史(版本信息)
$ git clone [url]  
# git clone https://gitee.com/moyaxin/git_study.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、去 gitee 或者 github 上克隆一个测试！</p>
<h3 id="git文件操作" tabindex="-1"><a class="header-anchor" href="#git文件操作" aria-hidden="true">#</a> Git文件操作</h3>
<h4 id="文件的四种状态" tabindex="-1"><a class="header-anchor" href="#文件的四种状态" aria-hidden="true">#</a> 文件的四种状态</h4>
<p>版本控制就是对文件的版本控制，要对文件进行修改、提交等操作，首先要知道文件当前在什么状态，不然可能会提交了现在还不想提交的文件，或者要提交的文件没提交上。</p>
<ul>
<li>Untracked: 未跟踪, 此文件在文件夹中, 但并没有加入到git库, 不参与版本控制. 通过git add 状态变为Staged.</li>
<li>Unmodify: 文件已经入库, 未修改, 即版本库中的文件快照内容与文件夹中完全一致. 这种类型的文件有两种去处, 如果它被修改, 而变为Modified. 如果使用git rm移出版本库, 则成为Untracked文件</li>
<li>Modified: 文件已修改, 仅仅是修改, 并没有进行其他的操作. 这个文件也有两个去处, 通过git add可进入暂存staged状态, 使用git  checkout 则丢弃修改过, 返回到unmodify状态, 这个git checkout即从库中取出文件, 覆盖当前修改 !</li>
<li>Staged: 暂存状态. 执行git commit则将修改同步到库中, 这时库中的文件和本地文件又变为一致, 文件为Unmodify状态. 执行git reset HEAD filename取消暂存, 文件状态为Modified</li>
</ul>
<h3 id="查看文件状态" tabindex="-1"><a class="header-anchor" href="#查看文件状态" aria-hidden="true">#</a> 查看文件状态</h3>
<p>上面说文件有4种状态，通过如下命令可以查看到文件的状态：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>#查看指定文件状态
git status [filename]
#查看所有文件状态
git status
# git add .                  添加所有文件到暂存区
# git commit -m "消息内容"    提交暂存区中的内容到本地仓库 -m 提交信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="忽略文件" tabindex="-1"><a class="header-anchor" href="#忽略文件" aria-hidden="true">#</a> 忽略文件</h4>
<p>有些时候我们不想把某些文件纳入版本控制中，比如数据库文件，临时文件，设计文件等
在主目录下建立&quot;.gitignore&quot;文件，此文件有如下规则：</p>
<ol>
<li>忽略文件中的空行或以井号（#）开始的行将会被忽略。</li>
<li>可以使用Linux通配符。例如：星号（*）代表任意多个字符，问号（？）代表一个字符，方括号（[abc]）代表可选字符范围，大括号（{string1,string2,...}）代表可选的字符串等。</li>
<li>如果名称的最前面有一个感叹号（!），表示例外规则，将不被忽略。</li>
<li>如果名称的最前面是一个路径分隔符（/），表示要忽略的文件在此目录下，而子目录中的文件不忽略。</li>
<li>如果名称的最后面是一个路径分隔符（/），表示要忽略的是此目录下该名称的子目录，而非文件（默认文件或目录都忽略）。</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>#为注释*.txt        #忽略所有 .txt结尾的文件,这样的话上传就不会被选中
！!lib.txt     #但lib.txt除外
/temp        #仅忽略项目根目录下的TODO文件,不包括其它目录temp
build/       #忽略build/目录下的所有文件
doc/*.txt    #会忽略 doc/notes.txt 但不包括doc/server/arch.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用码云" tabindex="-1"><a class="header-anchor" href="#使用码云" aria-hidden="true">#</a> 使用码云</h2>
<p>1、注册登录码云，完善个人信息
2、设置本机绑定SSH公钥，实现免密码登录！（免密码登录，这一步挺重要的，码云是远程仓库，我们是平时工作在本地仓库！)
3、将公钥信息public key 添加到码云账户中即可！
4、使用码云创建一个自己的仓库！
许可证：开源是否可以随意转载，开源但是不能商业使用，不能转载，...  限制！
5、克隆到本地！</p>
<h1 id="更多学习" tabindex="-1"><a class="header-anchor" href="#更多学习" aria-hidden="true">#</a> 更多学习</h1>
<p>[Git 大全]   <a href="https://gitee.com/all-about-git" target="_blank" rel="noopener noreferrer">https://gitee.com/all-about-git<ExternalLinkIcon/></a></p>
</div></template>
