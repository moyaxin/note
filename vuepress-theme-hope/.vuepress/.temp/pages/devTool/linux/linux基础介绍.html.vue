<template><div><p>一款免费，开源，安全，高效，稳定，处理高并发很强悍的操作系统</p>
<!-- more -->
<h1 id="linux基本介绍" tabindex="-1"><a class="header-anchor" href="#linux基本介绍" aria-hidden="true">#</a> linux基本介绍</h1>
<h2 id="_1-linux介绍" tabindex="-1"><a class="header-anchor" href="#_1-linux介绍" aria-hidden="true">#</a> 1. Linux介绍</h2>
<ul>
<li>Linux 是一款免费，开源，安全，高效，稳定，处理高并发很强悍的操作系统</li>
<li>Linux创始人——linux（林纳斯）</li>
<li>linux主要发行版本
<ul>
<li>Ubuntu、RedHat、CentOS</li>
</ul>
</li>
</ul>
<h2 id="_2-linux和unix关系" tabindex="-1"><a class="header-anchor" href="#_2-linux和unix关系" aria-hidden="true">#</a> 2.Linux和Unix关系</h2>
<p><img src="https://cdn.nlark.com/yuque/0/2022/png/26424970/1657351038658-e9bf56dc-4d93-4077-a8c9-7b46bce72f21.png#clientId=u7f15b2f8-353c-4&amp;crop=0&amp;crop=0&amp;crop=1&amp;crop=1&amp;from=paste&amp;height=304&amp;id=ufa695134&amp;margin=[object Object]&amp;name=image.png&amp;originHeight=608&amp;originWidth=1270&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;size=625668&amp;status=done&amp;style=none&amp;taskId=u43f1f6f8-8951-49c5-b41e-959321309bf&amp;title=&amp;width=635" alt="image.png" loading="lazy"></p>
<h2 id="_3-linux基本目录" tabindex="-1"><a class="header-anchor" href="#_3-linux基本目录" aria-hidden="true">#</a> 3.Linux基本目录</h2>
<ul>
<li>Linux的文件系统采用级层式子的树状目录结构，</li>
<li>最上层是根目录“/”</li>
<li>Linux是以文件的形式管理我们的设备，<strong>Linux世界里，一切皆文件。</strong></li>
</ul>
<p>目录介绍</p>
<ul>
<li>/bin： 是Binary的缩写，这个目录存放着最经常使用的命令。</li>
<li>/sbin：s就是Super User的意思，这里存放的是系统管理员使用的系统管理程序。</li>
<li>/home：存放普通用户的主目录，在Linux中每个用户都有一个自己的目录，一般该目录名是以用户的账号命名的。</li>
<li>/root：该目录为系统管理员，也称作超级权限者的用户主目录。</li>
<li>/lib：系统开机所需要最基本的动态连接共享库，其作用类似于Windows里的DLL文件。几乎所有的应用程序都需要用到这些共享库。</li>
<li>/lost+found：这个目录一般情况下是空的，当系统非法关机后，这里就存放了一些文件。</li>
<li>/etc：所有的系统管理所需要的配置文件和子目录my.conf。</li>
<li>/usr/local：这是一个非常重要的目录，用户的很多应用程序和文件都放在这个目录下，类似与windows下的program files目录。</li>
<li>/boot：存放的是启动Linux时使用的一些核心文件，包括一些连接文件以及镜像文件。</li>
<li>/proc：这个目录是一个虚拟的目录，它是系统内存的映射，访问这个目录来获取系统信息。</li>
<li>/srv：service的缩写，该目录存放一些服务启动之后需要提供的数据。</li>
<li>/sys：这是linux2.6内核的一个很大的变化。该目录下安装了2.6内核中新出现的一个文件系统sysfs。</li>
<li>/tmp：这个目录是用来存放一些临时文件的。</li>
<li>/dev：类似windows的设备管理器，把所有的硬件用文件的形式存储。</li>
<li>/media：linux系统会自动识别一些设备，例如U盘光驱等等，当识别后，linux会把识别的设备挂载到这个目录下。</li>
<li>/mnt：系统提供该目录是为了让用户临时挂载别的文件系统的，我们可以将外部的存储挂载在/mnt/上，然后进入该目录就可以查看里面的内容了。</li>
<li>/opt：这是给主机额外安装软件所摆放的目录，如安装ORACLE数据库就可放到该目录下。默认为空。</li>
<li>/usr/local：这是另一个给主机额外安装软件所安装的目录，一般是通过编译源码的方式安装的程序。</li>
<li>/var：这个目录中存放着在不断扩充着的东西，习惯将经常被修改的目录放在这个目录下，包括各种日志文件。</li>
<li>/selinux：SELinux是一种安全子系统，它能控制程序只能访问特定文件。</li>
</ul>
<h2 id="_4-文件目录类指令" tabindex="-1"><a class="header-anchor" href="#_4-文件目录类指令" aria-hidden="true">#</a> 4.文件目录类指令</h2>
<h3 id="_4-1-文件剪贴删除复制重名等" tabindex="-1"><a class="header-anchor" href="#_4-1-文件剪贴删除复制重名等" aria-hidden="true">#</a> 4.1 文件剪贴删除复制重名等</h3>
<ul>
<li>pwd：Print Working Directory，显示当前工作目录的绝对路径。</li>
<li>ls：-a：显示当前目录所有的文件和目录，包括隐藏的；
<ul>
<li>-l：以列表的方式显示信息。</li>
</ul>
</li>
<li>cd：cd ~：回到自己的家目录；cd …：回到当前目录的上一级目录。</li>
<li>mkdir：创建目录；-p：创建多级目录。</li>
<li>rmdir：删除空目录。rmdir不能删除非空的目录。如果需要删除非空的目录，需要使用rm -rf。</li>
<li>cp：拷贝文件到指定目录；
<ul>
<li>-r：递归复制整个文件夹。强制覆盖不提示的方法：</li>
<li>cp命令改为\cp</li>
</ul>
</li>
<li>rm：移除文件或目录；
<ul>
<li>-r：递归删除整个文件夹；</li>
<li>-f：强制删除不提示。</li>
</ul>
</li>
<li>mv：移动文件与目录或重命名，两种功能！</li>
<li>touch：创建空文件。可以一次性创建多个文件</li>
<li>ln 给文件创建一个软连接
<ul>
<li>用法:ln -s<a href="#">源文件或目录</a></li>
</ul>
</li>
</ul>
<h3 id="_4-2-文件查看" tabindex="-1"><a class="header-anchor" href="#_4-2-文件查看" aria-hidden="true">#</a> 4.2 文件查看</h3>
<ul>
<li>cat：查看文件内容。只能浏览文件，而不能修改文件。
<ul>
<li>-n：显示行号。</li>
<li>结尾加上 | more：分页显示，不会全部一下显示完。</li>
</ul>
</li>
<li>more：是一个基于VI编辑器的文本过滤器，它以全屏幕的方式按页显示文本文件的内容。more还内置了很多快捷键：
<ul>
<li>空白键（Space）：向下翻一页</li>
<li>Enter：向下翻一行</li>
<li>q：立刻离开more，不再显示该文件内容</li>
<li>Ctrl + F：向下滚动一屏</li>
<li>Ctrl + B：返回上一屏</li>
<li>= :输出当前行的行号</li>
<li>:f 输出文件名和当前行的行号</li>
</ul>
</li>
<li>less：用来分屏查看文件内容，与more相似，但是更强大，支持各种显示终端。less指令在显示文件内容时，并不是一次将整个文件加载之后才显示，而是根据显示需要加载内容。对于显示大型文件具有较高的效率。</li>
<li>head：显示文件的开头部分。-n 5：看前面5行内容。</li>
<li>tail：输出文件中尾部的内容。
<ul>
<li>-n 5：看后面5行内容。</li>
<li>-f：时事追踪该文档的所有更新</li>
</ul>
</li>
<li>
<blockquote>
<p>指令：输出重定向。如果不存在会创建文件，否则会将原来的文件内容覆盖。</p>
</blockquote>
</li>
<li>
<blockquote>
<blockquote>
<p>指令：追加。如果不存在会创建文件，否则不会覆盖原来的文件内容，而是追加到文件的尾部。</p>
</blockquote>
</blockquote>
</li>
<li>echo：输出内容到控制台。</li>
<li>history：查看历史指令</li>
</ul>
<h3 id="_4-3-时间和日期" tabindex="-1"><a class="header-anchor" href="#_4-3-时间和日期" aria-hidden="true">#</a> 4.3 时间和日期</h3>
<ul>
<li>date：显示当前日期和时间
<ul>
<li>date “+%Y”：显示当前年份</li>
<li>date “+%d”：显示当前月份</li>
<li>date “+%Y-%m-%d %H:%M:%S”：显示年-月-日 时：分：秒</li>
<li>设置日期：date -s 字符串时间</li>
</ul>
</li>
<li>cal：查看日历指令；
<ul>
<li>cal [月] [年份]：显示某一年或月的日历</li>
</ul>
</li>
</ul>
<h3 id="_4-4-搜索查找类" tabindex="-1"><a class="header-anchor" href="#_4-4-搜索查找类" aria-hidden="true">#</a> 4.4 搜索查找类</h3>
<ul>
<li>find：从指定目录向下递归的遍历其各个子目录，将满足条件的文件或者目录显示在终端。
<ul>
<li>find (搜索范围) -name (文件名)：按照指定的文件名查找模式查找文件。</li>
<li>find (搜索范围) -user (用户名)：按照指定的用户名查找模式查找文件。</li>
<li>find (搜索范围) -size (+多少/-多少/多少)：按照指定的文件大小查找模式查找文件（大于多少/小于多少/等于多少）</li>
<li>查询 /目录下所有.txt的文件：find / -name *.txt</li>
</ul>
</li>
<li>locate：locate (搜索文件)
<ul>
<li>可以快速定位文件路径。locate指令利用事先建立的系统中所有文件名称及路径的locate数据库实现快速定位给定的文件。</li>
<li>locate指令无需遍历整个文件系统，查询速度较快。为了保证查询结果的准确度，管理员必须定期更新locate时刻。</li>
<li>在第一次运行之前，必须使用updatedb指令创建locate数据库。</li>
</ul>
</li>
<li>grep：过滤查找，表示将前一个命令的处理结果输出传递给后面的命令处理。经常跟管道一起使用。
<ul>
<li>grep [选项] 查找内容 源文件</li>
<li>-n：显示匹配行及行号。</li>
<li>-i：忽略大小写字母。</li>
<li>cat hello.txt | grep yes</li>
</ul>
</li>
</ul>
<h3 id="_4-5-压缩和解压类" tabindex="-1"><a class="header-anchor" href="#_4-5-压缩和解压类" aria-hidden="true">#</a> 4.5 压缩和解压类</h3>
<ul>
<li>gzip/gunzip：压缩文件/解压
<ul>
<li>gzip (文件)：压缩为.gz文件，原来文件不保留。</li>
<li>gunzip (文件)：解压缩，同样也不保留源文件。</li>
</ul>
</li>
<li>zip/unzip：压缩文件/解压
<ul>
<li>zip [选项] (压缩后文件xxx.zip) (将要压缩的文件)</li>
<li>unzip [选项] (要解压的文件xxx.zip)</li>
<li>zip -r：递归压缩，即压缩目录</li>
<li>unzip -d (目录)：指定解压后的文件的存放目录</li>
</ul>
</li>
<li>tar：打包指令，最后打包后的文件是.tar.gz的文件
<ul>
<li>tar [选项] xxx.tar.gz (打包的内容)</li>
<li>-c：产生.tar打包文件</li>
<li>-v：显示详细信息</li>
<li>-f：指定压缩后的文件名</li>
<li>-z：打包同时压缩</li>
<li>-x：解压.tar文件</li>
<li>压缩：tar -zcvf (压缩后文件名) (要压缩的文件)</li>
<li>解压：tar -zxvf (要解压的文件)</li>
<li>解压到指定目录：tar -zxvf (要解压的文件) -C (指定目录)，指定解压到的目录要存在。</li>
</ul>
</li>
</ul>
<h2 id="_5-vi和vim编辑命令" tabindex="-1"><a class="header-anchor" href="#_5-vi和vim编辑命令" aria-hidden="true">#</a> 5.vi和vim编辑命令</h2>
<h3 id="_1-vi和vim的基本介绍" tabindex="-1"><a class="header-anchor" href="#_1-vi和vim的基本介绍" aria-hidden="true">#</a> 1.vi和vim的基本介绍</h3>
<ul>
<li>所有Linux系统都会内置vi文本编辑器</li>
<li>vim是vi的升级版，可以主动以字体颜色分辨语法的正确性，代码补完和编译，错误跳转等功能。</li>
</ul>
<h3 id="_2-vi和vim的三种模式" tabindex="-1"><a class="header-anchor" href="#_2-vi和vim的三种模式" aria-hidden="true">#</a> 2. vi和vim的三种模式</h3>
<p>1.正常模式</p>
<ul>
<li>在正常模式下，我们可以使用快捷键。</li>
<li>用vim打开一个文件就直接进入一般模式</li>
<li>可以使用【删除字符】或【删除整行】来处理文档内容，也可以使用【复制黏贴按钮】</li>
</ul>
<p>2.插入/编辑模式</p>
<ul>
<li>在这个模式下，可以编辑文件内容。</li>
<li>按下i,I,o,O,a,A,r,R等字母就可进入编辑模式</li>
</ul>
<p>3.命令行模式</p>
<ul>
<li>在这个模式中，可以利用指令完成读取，存盘，替换，离开，显示行号的等动作。</li>
<li>wq保存退出</li>
<li>q无修改直接退出</li>
<li>q!不保存修改直接退出</li>
</ul>
<h3 id="_3-vim-的文件指令" tabindex="-1"><a class="header-anchor" href="#_3-vim-的文件指令" aria-hidden="true">#</a> 3.Vim 的文件指令</h3>
<blockquote>
<p>正常模式下</p>
</blockquote>
<p>删除当前行 ：dd
最末行：G，最首行：gg
撤销： u</p>
<blockquote>
<p><strong>命令模式下</strong></p>
</blockquote>
<p>设置文件行号：set nu
取消文件行号：set nonu
光标移动到某行：输入行号这个数</p>
<h3 id="_4-操作命令" tabindex="-1"><a class="header-anchor" href="#_4-操作命令" aria-hidden="true">#</a> 4.操作命令</h3>
<h4 id="_4-1插入" tabindex="-1"><a class="header-anchor" href="#_4-1插入" aria-hidden="true">#</a> 4.1插入</h4>
<table>
<thead>
<tr>
<th><strong>指令</strong></th>
<th><strong>说明</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>i</td>
<td>在当前位置生前插入</td>
</tr>
<tr>
<td>I</td>
<td>在当前行首插入</td>
</tr>
<tr>
<td>a</td>
<td>在当前位置后插入</td>
</tr>
<tr>
<td>A</td>
<td>在当前行尾插入</td>
</tr>
<tr>
<td>o</td>
<td>在当前行之后插入一行</td>
</tr>
<tr>
<td>O</td>
<td>在当前行之前插入一行</td>
</tr>
</tbody>
</table>
<h4 id="_4-2游标移动" tabindex="-1"><a class="header-anchor" href="#_4-2游标移动" aria-hidden="true">#</a> 4.2游标移动</h4>
<table>
<thead>
<tr>
<th><strong>指令</strong></th>
<th><strong>说明</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>gg</td>
<td>移动到文件头。 = [[</td>
</tr>
<tr>
<td>G（shift + g）</td>
<td>移动到文件尾。 = ]]</td>
</tr>
<tr>
<td>行數 → G</td>
<td>移動到第 n 行</td>
</tr>
<tr>
<td>冒号+行号，回车</td>
<td>比如跳到240行就是 :240回车</td>
</tr>
<tr>
<td>h</td>
<td>左移一个字符</td>
</tr>
<tr>
<td>l</td>
<td>右移一个字符，这个命令很少用，一般用w代替。</td>
</tr>
<tr>
<td>k</td>
<td>上移一个字符</td>
</tr>
<tr>
<td>j</td>
<td>下移一个字符</td>
</tr>
<tr>
<td>w</td>
<td>向前移动一个单词（光标停在单词首部）</td>
</tr>
<tr>
<td>b</td>
<td>向后移动一个单词 2b 向后移动2个单词</td>
</tr>
<tr>
<td>e</td>
<td>同w，只不过是光标停在单词尾部</td>
</tr>
<tr>
<td>ge</td>
<td>同b，光标停在单词尾部。</td>
</tr>
<tr>
<td>^</td>
<td>移动到本行第一个非空白字符上。</td>
</tr>
<tr>
<td>0</td>
<td>移动到本行第一个字符上</td>
</tr>
<tr>
<td>HOME</td>
<td>移动到本行第一个字符。同0健。</td>
</tr>
<tr>
<td>$</td>
<td>移动到行尾 3$ 移动到下面3行的行尾</td>
</tr>
<tr>
<td>f（find）</td>
<td>fx将找到光标后第一个为x的字符，3fd将找到第三个为d的字符。</td>
</tr>
<tr>
<td>F</td>
<td>同f，反向查找</td>
</tr>
</tbody>
</table>
<h4 id="_4-3撤销和重做" tabindex="-1"><a class="header-anchor" href="#_4-3撤销和重做" aria-hidden="true">#</a> 4.3撤销和重做</h4>
<table>
<thead>
<tr>
<th><strong>指令</strong></th>
<th><strong>说明</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>u</td>
<td>撤销（Undo）</td>
</tr>
<tr>
<td>U</td>
<td>撤销对整行的操作</td>
</tr>
<tr>
<td>Ctrl + r</td>
<td>重做（Redo），即撤销的撤销。</td>
</tr>
</tbody>
</table>
<h4 id="_4-4删除命令" tabindex="-1"><a class="header-anchor" href="#_4-4删除命令" aria-hidden="true">#</a> 4.4删除命令</h4>
<table>
<thead>
<tr>
<th><strong>指令</strong></th>
<th><strong>说明</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>x</td>
<td>删除当前字符</td>
</tr>
<tr>
<td>3x</td>
<td>删除当前光标开始向后三个字符</td>
</tr>
<tr>
<td>X</td>
<td>删除当前字符的前一个字符。X=dh</td>
</tr>
<tr>
<td>dl</td>
<td>删除当前字符， dl=x</td>
</tr>
<tr>
<td>dh</td>
<td>删除前一个字符</td>
</tr>
<tr>
<td>dd</td>
<td>删除当前行</td>
</tr>
<tr>
<td>dj</td>
<td>删除上一行</td>
</tr>
<tr>
<td>dk</td>
<td>删除下一行</td>
</tr>
<tr>
<td>10d</td>
<td>删除当前行开始的10行。</td>
</tr>
<tr>
<td>D</td>
<td>删除当前字符至行尾。D=d$</td>
</tr>
<tr>
<td>d$</td>
<td>删除当前字符之后的所有字符（本行）</td>
</tr>
<tr>
<td>kdgg</td>
<td>删除当前行之前所有行（不包括当前行）</td>
</tr>
<tr>
<td>jdG（jd shift + g）</td>
<td>删除当前行之后所有行（不包括当前行）</td>
</tr>
<tr>
<td>:1,10d</td>
<td>删除1-10行</td>
</tr>
<tr>
<td>:11,$d</td>
<td>删除11行及以后所有的行</td>
</tr>
<tr>
<td>:1,$d</td>
<td>删除所有行</td>
</tr>
<tr>
<td>J(shift + j)</td>
<td>删除两行之间的空行，实际上是合并两行。</td>
</tr>
</tbody>
</table>
<h4 id="_4-5拷贝-剪贴和粘贴" tabindex="-1"><a class="header-anchor" href="#_4-5拷贝-剪贴和粘贴" aria-hidden="true">#</a> 4.5拷贝，剪贴和粘贴</h4>
<table>
<thead>
<tr>
<th><strong>指令</strong></th>
<th><strong>说明</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>yy</td>
<td>拷贝当前行</td>
</tr>
<tr>
<td>nyy</td>
<td>拷贝当前后开始的n行，比如2yy拷贝当前行及其下一行。</td>
</tr>
<tr>
<td>p</td>
<td>在当前光标后粘贴,如果之前使用了yy命令来复制一行，那么就在当前行的下一行粘贴。</td>
</tr>
<tr>
<td>shift+p</td>
<td>在当前行前粘贴</td>
</tr>
<tr>
<td>:1,10 co 20</td>
<td>将1-10行插入到第20行之后。</td>
</tr>
<tr>
<td>:1,$ co $</td>
<td>将整个文件复制一份并添加到文件尾部。</td>
</tr>
<tr>
<td>ddp</td>
<td>交换当前行和其下一行</td>
</tr>
<tr>
<td>xp</td>
<td>交换当前字符和其后一个字符</td>
</tr>
<tr>
<td>ndd</td>
<td>剪切当前行之后的n行。利用p命令可以对剪切的内容进行粘贴</td>
</tr>
<tr>
<td>:1,10d</td>
<td>将1-10行剪切。利用p命令可将剪切后的内容进行粘贴。</td>
</tr>
<tr>
<td>:1, 10 m 20</td>
<td>将第1-10行移动到第20行之后。</td>
</tr>
</tbody>
</table>
<p>正常模式下按v（逐字）或V（逐行）进入可视模式，然后用jklh命令移动即可选择某些行或字符，再按y即可复制</p>
<h4 id="_4-5退出命令" tabindex="-1"><a class="header-anchor" href="#_4-5退出命令" aria-hidden="true">#</a> 4.5退出命令</h4>
<table>
<thead>
<tr>
<th><strong>指令</strong></th>
<th><strong>说明</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>:wq</td>
<td>保存并退出</td>
</tr>
<tr>
<td>ZZ</td>
<td>保存并退出</td>
</tr>
<tr>
<td>:q!</td>
<td>强制退出并忽略所有更改</td>
</tr>
<tr>
<td>:e!</td>
<td>放弃所有修改，并打开原来文件。</td>
</tr>
<tr>
<td>:q</td>
<td>未修改直接退出</td>
</tr>
</tbody>
</table>
<h4 id="_4-6注释命令" tabindex="-1"><a class="header-anchor" href="#_4-6注释命令" aria-hidden="true">#</a> 4.6注释命令</h4>
<p>:%s/^/#/g  注释整个文档</p>
<h3 id="_5-vim拓展教程" tabindex="-1"><a class="header-anchor" href="#_5-vim拓展教程" aria-hidden="true">#</a> 5.Vim拓展教程</h3>
<p><a href="https://www.runoob.com/linux/linux-vim.html" target="_blank" rel="noopener noreferrer">菜鸟教程vim链接<ExternalLinkIcon/></a></p>
<h3 id="_6-关机、重启和用户登录注销" tabindex="-1"><a class="header-anchor" href="#_6-关机、重启和用户登录注销" aria-hidden="true">#</a> 6.关机、重启和用户登录注销</h3>
<h4 id="_1-关机-重启命令" tabindex="-1"><a class="header-anchor" href="#_1-关机-重启命令" aria-hidden="true">#</a> 1. 关机&amp;重启命令</h4>
<h5 id="_1-1-shutdown" tabindex="-1"><a class="header-anchor" href="#_1-1-shutdown" aria-hidden="true">#</a> 1.1 shutdown</h5>
<ul>
<li>shutdown -h now：表示立即关机</li>
<li>shutdown -h 1：表示1分钟后关机</li>
<li>shutdown -r now：立即重启</li>
</ul>
<h5 id="_1-2-halt" tabindex="-1"><a class="header-anchor" href="#_1-2-halt" aria-hidden="true">#</a> 1.2 halt</h5>
<ul>
<li>halt：直接使用，关机</li>
</ul>
<h5 id="_1-3-reboot" tabindex="-1"><a class="header-anchor" href="#_1-3-reboot" aria-hidden="true">#</a> 1.3 reboot</h5>
<ul>
<li>reboot 重启系统</li>
</ul>
<h5 id="_1-4-sync" tabindex="-1"><a class="header-anchor" href="#_1-4-sync" aria-hidden="true">#</a> 1.4 sync</h5>
<ul>
<li>sync：把内存的数据同步到磁盘上</li>
</ul>
<p>当我们关机或者重启时，都应该先执行一下sync，防止数据丢失。</p>
<h4 id="_2-用户登录注销" tabindex="-1"><a class="header-anchor" href="#_2-用户登录注销" aria-hidden="true">#</a> 2. 用户登录注销</h4>
<ul>
<li>登录时少用root账号登录，以避免操作失误的损失</li>
<li>平时可登录普通账户，再用“su - 用户名”切换成管理员登录</li>
</ul>
<h5 id="_2-1-logout" tabindex="-1"><a class="header-anchor" href="#_2-1-logout" aria-hidden="true">#</a> 2.1 logout</h5>
<ul>
<li>logout：注销用户</li>
</ul>
<p>在图形运行级别无效，在运行级别3有效。</p>
<h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h2>
</div></template>
