<template><div><p>讲解一下linux的用户管理、权限管理还有进程相关知识</p>
<!-- more -->
<h1 id="_1-linux功能管理" tabindex="-1"><a class="header-anchor" href="#_1-linux功能管理" aria-hidden="true">#</a> 1.linux功能管理</h1>
<h2 id="_1-基本用户管理" tabindex="-1"><a class="header-anchor" href="#_1-基本用户管理" aria-hidden="true">#</a> 1. 基本用户管理</h2>
<ul>
<li>Linux系统是一个多用户多任务的分时操作系统，任何一个要使用系统资源的用户，都必须首先向系统管理员申请一个账号，然后以这个账号的身份进入系统。</li>
<li>用户的账号一方面可以帮助系统管理员对使用系统的用户进行跟踪，并控制他们对系统资源的访问；另一方面也可以帮助用户组织文件，并为用户提供安全性保护。</li>
<li>每个用户账号都拥有一个唯一的用户名和各自的口令。</li>
<li>要完成的工作主要有如下几个方面：
<ul>
<li>用户账号的添加、删除与修改。</li>
<li>用户口令的管理。</li>
<li>用户组的管理。</li>
</ul>
</li>
</ul>
<h3 id="_1-1添加用户" tabindex="-1"><a class="header-anchor" href="#_1-1添加用户" aria-hidden="true">#</a> 1.1添加用户</h3>
<p>添加用户：useradd [选项] 用户名。</p>
<ul>
<li>选项:
<ul>
<li>-c comment 指定一段注释性描述。</li>
<li>-d 目录 指定用户主目录，如果此目录不存在，则同时使用-m选项，可以创建主目录。</li>
<li>-g 用户组 指定用户所属的用户组。</li>
<li>-G 用户组，用户组 指定用户所属的附加组。</li>
<li>-s Shell文件 指定用户的登录Shell。</li>
<li>-u 用户号 指定用户的用户号，如果同时有-o选项，则可以重复使用其他用户的标识号。</li>
<li>-f [缓冲天数] 指定在密码过期后多少天即关闭该帐号。</li>
<li>-e 有效期限 指定帐号的有效期限；</li>
<li>-M：不要自动建立用户的登入目录；</li>
</ul>
</li>
<li>用户名:
<ul>
<li>指定新账号的登录名。</li>
</ul>
</li>
</ul>
<p><strong>例：</strong></p>
<ol>
<li>useradd –d /home/sam -m sam
<ul>
<li>此命令创建了一个用户sam，其中-d和-m选项用来为登录名sam产生一个主目录 /home/sam（/home为默认的用户主目录所在的父目录）。</li>
</ul>
</li>
<li>useradd -s /bin/sh -g group –G adm,root gem
<ul>
<li>新建了一个用户gem，该用户的登录Shell是 /bin/sh，它属于group用户组，同时又属于adm和root用户组，其中group用户组是其主组。</li>
</ul>
</li>
</ol>
<h3 id="_1-2-用户口令的管理" tabindex="-1"><a class="header-anchor" href="#_1-2-用户口令的管理" aria-hidden="true">#</a> 1.2 用户口令的管理</h3>
<p>指定和修改用户口令: passwd 选项 用户名
参数说明</p>
<ul>
<li>选项：
<ul>
<li>-l 锁定口令，即禁用账号。</li>
<li>-u 口令解锁。</li>
<li>-d 使账号无口令。</li>
<li>-f 强迫用户下次登录时修改口令。</li>
</ul>
</li>
</ul>
<p>** 注意事项**</p>
<ul>
<li>如果默认用户名，则修改当前用户的口令。
<ul>
<li>假设当前用户是sam，则下面的命令修改该用户自己的口令：passwd sam</li>
</ul>
</li>
<li>普通用户修改自己的口令时，passwd命令会先询问原口令，验证后再要求用户输入两遍新口令，如果两次输入的口令一致，则将这个口令指定给用户；</li>
<li>超级用户为用户指定口令时，就不需要知道原口令。</li>
</ul>
<p><strong>例：</strong></p>
<ol>
<li>passwd -l sam
<ul>
<li>用 -l(lock) 选项锁定某一用户，使其不能登录</li>
</ul>
</li>
<li>passwd -d sam
<ul>
<li>为用户指定空口令</li>
</ul>
</li>
</ol>
<h3 id="_1-3-删除帐号" tabindex="-1"><a class="header-anchor" href="#_1-3-删除帐号" aria-hidden="true">#</a> 1.3 删除帐号</h3>
<p>删除帐号: userdel 选项 用户名</p>
<ul>
<li>常用的选项是 -r，它的作用是把用户的主目录一起删除。
<ul>
<li>userdel -r sam</li>
</ul>
</li>
</ul>
<h3 id="_1-4-修改帐号" tabindex="-1"><a class="header-anchor" href="#_1-4-修改帐号" aria-hidden="true">#</a> 1.4 修改帐号</h3>
<p>修改已有用户的信息: usermod 选项 用户名</p>
<ul>
<li>常用的选项包括-c, -d, -m, -g, -G, -s, -u以及-o等，这些选项的意义与useradd命令中的选项一样，可以为用户指定新的资源值。</li>
</ul>
<h3 id="_1-5-查询用户信息" tabindex="-1"><a class="header-anchor" href="#_1-5-查询用户信息" aria-hidden="true">#</a> 1.5 查询用户信息</h3>
<ul>
<li>查询用户信息: id 用户名
<ul>
<li>用户不存在是返回“无此用户”</li>
</ul>
</li>
<li>查看当前用户/登录用户：who am i</li>
</ul>
<h3 id="_1-6-切换用户" tabindex="-1"><a class="header-anchor" href="#_1-6-切换用户" aria-hidden="true">#</a> 1.6 切换用户</h3>
<ul>
<li>切换用户：su - 切换用户名
<ul>
<li>从权限高切换到权限低的用户不需要输密码。</li>
<li>返回切换前的用户：exit</li>
</ul>
</li>
</ul>
<h2 id="_2-用户组的管理" tabindex="-1"><a class="header-anchor" href="#_2-用户组的管理" aria-hidden="true">#</a> 2. 用户组的管理</h2>
<p>每个用户都有一个用户组，系统可以对一个用户组中的所有用户进行集中管理。不同Linux 系统对用户组的规定有所不同，如Linux下的用户属于与它同名的用户组，这个用户组在创建用户时同时创建。用户组的管理涉及用户组的添加、删除和修改。组的增加、删除和修改实际上就是对/etc/group文件的更新。</p>
<h3 id="_2-1-增加一个新的用户组" tabindex="-1"><a class="header-anchor" href="#_2-1-增加一个新的用户组" aria-hidden="true">#</a> 2.1 增加一个新的用户组</h3>
<p>增加一个新的用户组: groupadd 选项 用户组</p>
<ul>
<li>-g GID 指定新用户组的组标识号（GID）。</li>
<li>-o 一般与-g选项同时使用，表示新用户组的GID可以与系统已有用户组的GID相同。</li>
</ul>
<p>例：</p>
<ol>
<li>groupadd -g 101 group2
<ul>
<li>向系统中增加了一个新组group1，新组的组标识号是在当前已有的最大组标识号的基础上加1。</li>
</ul>
</li>
<li>groupadd -g 101 group2
<ul>
<li>向系统中增加了一个新组group2，同时指定新组的组标识号是101。</li>
</ul>
</li>
</ol>
<h3 id="_2-2-删除用户组" tabindex="-1"><a class="header-anchor" href="#_2-2-删除用户组" aria-hidden="true">#</a> 2.2 删除用户组</h3>
<p>删除用户组: groupmod 选项 用户组</p>
<ul>
<li>-g GID 为用户组指定新的组标识号。</li>
<li>-o 与-g选项同时使用，用户组的新GID可以与系统已有用户组的GID相同。</li>
<li>-n新用户组 将用户组的名字改为新名字</li>
</ul>
<p>例</p>
<ol>
<li>groupmod -g 102 group2
<ul>
<li>将组group2的组标识号修改为102。</li>
</ul>
</li>
<li>groupmod –g 10000 -n group3 group2
<ul>
<li>将组group2的标识号改为10000，组名修改为group3。</li>
</ul>
</li>
</ol>
<h3 id="_2-3-组的切换" tabindex="-1"><a class="header-anchor" href="#_2-3-组的切换" aria-hidden="true">#</a> 2.3 组的切换</h3>
<p>用户可以在登录后，使用命令newgrp切换到其他用户组，这个命令的参数就是目的用户组。例如：</p>
<ul>
<li>$ newgrp root
<ul>
<li>这条命令将当前用户切换到root用户组，前提条件是root用户组确实是该用户的主组或附加组。类似于用户账号的管理，用户组的管理也可以通过集成的系统管理工具来完成。</li>
</ul>
</li>
</ul>
<h2 id="_3-与用户账号有关的系统文件" tabindex="-1"><a class="header-anchor" href="#_3-与用户账号有关的系统文件" aria-hidden="true">#</a> 3. 与用户账号有关的系统文件</h2>
<h3 id="_3-1-etc-passwd-文件" tabindex="-1"><a class="header-anchor" href="#_3-1-etc-passwd-文件" aria-hidden="true">#</a> 3.1 /etc/passwd 文件</h3>
<p>用户（user）的配置文件，记录用户的各种信息。</p>
<ul>
<li>每行的含义：
<ol>
<li>&quot;用户名&quot;是代表用户账号的字符串。
<ul>
<li>通常长度不超过8个字符，并且由大小写字母和/或数字组成。登录名中不能有冒号(😃，因为冒号在这里是分隔符。</li>
<li>为了兼容起见，登录名中最好不要包含点字符(.)，并且不使用连字符(-)和加号(+)打头。</li>
</ul>
</li>
<li>“口令”一些系统中，存放着加密后的用户口令字。
<ul>
<li>虽然这个字段存放的只是用户口令的加密串，不是明文，但是由于/etc/passwd文件对所有用户都可读，所以这仍是一个安全隐患。因此，现在许多Linux 系统（如SVR4）都使用了shadow技术，把真正的加密后的用户口令字存放到/etc/shadow文件中，而在/etc/passwd文件的口令字段中只存放一个特殊的字符，例如“x”或者“*”。</li>
</ul>
</li>
<li>“用户标识号”是一个整数，系统内部用它来标识用户。
<ul>
<li>一般情况下它与用户名是一一对应的。如果几个用户名对应的用户标识号是一样的，系统内部将把它们视为同一个用户，但是它们可以有不同的口令、不同的主目录以及不同的登录Shell等。</li>
<li>通常用户标识号的取值范围是0～65 535。0是超级用户root的标识号，1～99由系统保留，作为管理账号，普通用户的标识号从100开始。在Linux系统中，这个界限是500。</li>
</ul>
</li>
<li>“组标识号”字段记录的是用户所属的用户组。
<ul>
<li>它对应着/etc/group文件中的一条记录。</li>
</ul>
</li>
<li>“注释性描述”字段记录着用户的一些个人情况。
<ul>
<li>例如用户的真实姓名、电话、地址等，这个字段并没有什么实际的用途。在不同的Linux 系统中，这个字段的格式并没有统一。在许多Linux系统中，这个字段存放的是一段任意的注释性描述文字，用做finger命令的输出。</li>
</ul>
</li>
<li>“主目录”，也就是用户的起始工作目录。
<ul>
<li>它是用户在登录到系统之后所处的目录。在大多数系统中，各用户的主目录都被组织在同一个特定的目录下，而用户主目录的名称就是该用户的登录名。各用户对自己的主目录有读、写、执行（搜索）权限，其他用户对此目录的访问权限则根据具体情况设置。</li>
</ul>
</li>
<li>用户登录后，要启动一个进程，负责将用户的操作传给内核，这个进程是用户登录到系统后运行的命令解释器或某个特定的程序，即Shell。
<ul>
<li>Shell是用户与Linux系统之间的接口。Linux的Shell有许多种，每种都有不同的特点。常用的有sh(Bourne Shell), csh(C Shell), ksh(Korn Shell), tcsh(TENEX/TOPS-20 type C Shell), bash(Bourne Again Shell)等。</li>
<li>系统管理员可以根据系统情况和用户习惯为用户指定某个Shell。如果不指定Shell，那么系统使用sh为默认的登录Shell，即这个字段的值为/bin/sh。</li>
<li>用户的登录Shell也可以指定为某个特定的程序（此程序不是一个命令解释器）。</li>
<li>利用这一特点，我们可以限制用户只能运行指定的应用程序，在该应用程序运行结束后，用户就自动退出了系统。有些Linux 系统要求只有那些在系统中登记了的程序才能出现在这个字段中。</li>
</ul>
</li>
<li>系统中有一类用户称为伪用户（pseudo users）。
<ul>
<li>这些用户在/etc/passwd文件中也占有一条记录，但是不能登录，因为它们的登录Shell为空。它们的存在主要是方便系统管理，满足相应的系统进程对文件属主的要求。</li>
</ul>
</li>
</ol>
</li>
</ul>
<h3 id="_3-2-etc-shadow-文件" tabindex="-1"><a class="header-anchor" href="#_3-2-etc-shadow-文件" aria-hidden="true">#</a> 3.2 /etc/shadow 文件</h3>
<p>口令配置文件</p>
<ul>
<li>每行的含义：
<ol>
<li>&quot;登录名&quot;是与/etc/passwd文件中的登录名相一致的用户账号</li>
<li>&quot;口令&quot;字段存放的是加密后的用户口令字，长度为13个字符。如果为空，则对应用户没有口令，登录时不需要口令；如果含有不属于集合 { ./0-9A-Za-z }中的字符，则对应的用户不能登录。</li>
<li>&quot;最后一次修改时间&quot;表示的是从某个时刻起，到用户最后一次修改口令时的天数。时间起点对不同的系统可能不一样。例如在SCO Linux 中，这个时间起点是1970年1月1日。</li>
<li>&quot;最小时间间隔&quot;指的是两次修改口令之间所需的最小天数。</li>
<li>&quot;最大时间间隔&quot;指的是口令保持有效的最大天数。</li>
<li>&quot;警告时间&quot;字段表示的是从系统开始警告用户到用户密码正式失效之间的天数。</li>
<li>&quot;不活动时间&quot;表示的是用户没有登录活动但账号仍能保持有效的最大天数。</li>
<li>&quot;失效时间&quot;字段给出的是一个绝对的天数，如果使用了这个字段，那么就给出相应账号的生存期。期满后，该账号就不再是一个合法的账号，也就不能再用来登录了。</li>
</ol>
</li>
</ul>
<h3 id="_3-3-etc-group-文件" tabindex="-1"><a class="header-anchor" href="#_3-3-etc-group-文件" aria-hidden="true">#</a> 3.3 /etc/group 文件</h3>
<p>组（group）的配置文件，用户组的所有信息都存放在/etc/group文件中。</p>
<ul>
<li>每行含义：
<ol>
<li>&quot;组名&quot;是用户组的名称，由字母或数字构成。与/etc/passwd中的登录名一样，组名不应重复。</li>
<li>&quot;口令&quot;字段存放的是用户组加密后的口令字。一般Linux 系统的用户组都没有口令，即这个字段一般为空，或者是*。</li>
<li>&quot;组标识号&quot;与用户标识号类似，也是一个整数，被系统内部用来标识组。</li>
<li>&quot;组内用户列表&quot;是属于这个组的所有用户的列表/b]，不同用户之间用逗号(,)分隔。这个用户组可能是用户的主组，也可能是附加组。</li>
</ol>
</li>
</ul>
<h1 id="_2-组和权限管理" tabindex="-1"><a class="header-anchor" href="#_2-组和权限管理" aria-hidden="true">#</a> 2.组和权限管理</h1>
<h2 id="_2-1-linux组基本介绍" tabindex="-1"><a class="header-anchor" href="#_2-1-linux组基本介绍" aria-hidden="true">#</a> 2.1.Linux组基本介绍</h2>
<ul>
<li>Linux中每个用户属于一个组，不能独立于组以外。所以在Linux中每个文件存在组的概念：
<ol>
<li>所有者</li>
<li>所在组</li>
<li>其他组</li>
<li>改变用户所在组</li>
</ol>
</li>
<li>查看文件所有者：ls -ahl</li>
<li>修改文件所有者：chown (用户名) (文件名)</li>
<li>修改文件所在组：chgrp (组名) (文件名)</li>
</ul>
<h2 id="_2-2-文件属性" tabindex="-1"><a class="header-anchor" href="#_2-2-文件属性" aria-hidden="true">#</a> 2.2.文件属性</h2>
<h3 id="_2-2-1-ls-l" tabindex="-1"><a class="header-anchor" href="#_2-2-1-ls-l" aria-hidden="true">#</a> 2.2.1 ls -l</h3>
<p><strong>查看当前目录下所有可见文件的详细属性</strong>
<img src="https://cdn.nlark.com/yuque/0/2022/png/26424970/1657356029835-7f355782-2c6a-4e47-b0c6-65c80d4dd188.png#clientId=u400aef21-034f-4&amp;crop=0&amp;crop=0&amp;crop=1&amp;crop=1&amp;from=paste&amp;height=271&amp;id=u2b325452&amp;margin=[object Object]&amp;name=image.png&amp;originHeight=542&amp;originWidth=1170&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;size=136073&amp;status=done&amp;style=none&amp;taskId=u0c891ee0-116f-44e4-acc0-22550c957f2&amp;title=&amp;width=585" alt="image.png" loading="lazy"></p>
<ul>
<li>在Linux中第一个字符代表这个文件是目录、文件或链接文件等等。
<ul>
<li>当为[ d ]则是目录</li>
<li>当为[ - ]则是文件；</li>
<li>若是[ l ]则表示为链接文档(link file)；</li>
<li>若是[ b ]则表示为装置文件里面的可供储存的接口设备(可随机存取装置)；</li>
<li>若是[ c ]则表示为装置文件里面的串行端口设备，例如键盘、鼠标(一次性读取装置)。</li>
</ul>
</li>
<li>接下来的字符中，以三个为一组，且均为『rwx』 的三个参数的组合。[ r ]代表可读(read)、[ w ]代表可写(write)、[ x ]代表可执行(execute)。 要注意的是，这三个权限的位置不会改变，如果没有权限，就会出现减号[ - ]而已。每个文件的属性由左边第一部分的10个字符来确定（如下图）</li>
</ul>
<p><img src="https://cdn.nlark.com/yuque/0/2022/png/26424970/1657356124732-23bece13-22c8-47c1-9ed5-b1a0d9ec5a93.png#clientId=u400aef21-034f-4&amp;crop=0&amp;crop=0&amp;crop=1&amp;crop=1&amp;from=paste&amp;height=193&amp;id=ub202793c&amp;margin=[object Object]&amp;name=image.png&amp;originHeight=386&amp;originWidth=892&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;size=158431&amp;status=done&amp;style=none&amp;taskId=u63b685e9-34e0-4efb-9f0e-ac737ec1c8c&amp;title=&amp;width=446" alt="image.png" loading="lazy"></p>
<h3 id="_2-2-2-rwx权限详解" tabindex="-1"><a class="header-anchor" href="#_2-2-2-rwx权限详解" aria-hidden="true">#</a> 2.2.2 rwx权限详解</h3>
<ul>
<li>rwx作用到文件：
<ul>
<li>r：read，可读。读取查看。</li>
<li>w：write，可以修改。但不代表可以删除该文件。删除一个文件的前提条件是对该文件所在的目录有写权限，才能删除该文件。</li>
<li>x：execute，可执行。可以被执行。</li>
</ul>
</li>
<li>rwx作用到目录：
<ul>
<li>r：可以读取，ls查看目录内容。</li>
<li>w：可以修改，目录内创建+删除+重命名目录。</li>
<li>x：可执行，可以进入该目录。</li>
</ul>
</li>
</ul>
<h3 id="_2-2-3-修改权限" tabindex="-1"><a class="header-anchor" href="#_2-2-3-修改权限" aria-hidden="true">#</a> 2.2.3 修改权限</h3>
<h4 id="_1-chgrp-更改文件属组" tabindex="-1"><a class="header-anchor" href="#_1-chgrp-更改文件属组" aria-hidden="true">#</a> 1.chgrp：更改文件属组</h4>
<ul>
<li>chgrp [-R] 属组名 文件名
<ul>
<li>-R：递归更改文件属组，就是在更改某个目录文件的属组时，如果加上-R的参数，那么该目录下的所有文件的属组都会更改。</li>
</ul>
</li>
</ul>
<h4 id="_2-chown-更改文件属主-也可以同时更改文件属组" tabindex="-1"><a class="header-anchor" href="#_2-chown-更改文件属主-也可以同时更改文件属组" aria-hidden="true">#</a> 2.chown：更改文件属主，也可以同时更改文件属组</h4>
<ul>
<li>chown [–R] 属主名 文件名</li>
</ul>
<h4 id="_3-chmod-更改文件9个属性" tabindex="-1"><a class="header-anchor" href="#_3-chmod-更改文件9个属性" aria-hidden="true">#</a> 3.chmod：更改文件9个属性</h4>
<ul>
<li>Linux文件属性有两种设置方法，一种是数字，一种是符号。</li>
<li>Linux文件的基本权限就有九个，分别是owner/group/others三种身份各有自己的read/write/execute权限。</li>
<li>我们可以使用数字来代表各个权限，各权限的分数对照表如下：
<ul>
<li>r:4</li>
<li>w:2</li>
<li>x:1</li>
</ul>
</li>
<li>每种身份(owner/group/others)各自的三个权限(r/w/x)分数是需要累加的，例如当权限为： [-rwxrwx---] 分数则是：
<ul>
<li>owner = rwx = 4+2+1 = 7</li>
<li>group = rwx = 4+2+1 = 7</li>
<li>others= --- = 0+0+0 = 0</li>
</ul>
</li>
</ul>
<h5 id="使用数字修改权限" tabindex="-1"><a class="header-anchor" href="#使用数字修改权限" aria-hidden="true">#</a> 使用数字修改权限</h5>
<p><strong>chmod [-R] xyz 文件或目录</strong></p>
<ul>
<li>xyz : 就是刚刚提到的数字类型的权限属性，为 rwx 属性数值的相加。</li>
<li>-R : 进行递归(recursive)的持续变更，亦即连同次目录下的所有文件都会变更</li>
<li>举例来说，如果要将.bashrc这个文件所有的权限都设定启用</li>
</ul>
<h5 id="使用符号修改权限" tabindex="-1"><a class="header-anchor" href="#使用符号修改权限" aria-hidden="true">#</a> 使用符号修改权限</h5>
<p><img src="https://cdn.nlark.com/yuque/0/2022/png/26424970/1657356698289-82859cbb-34e2-4bee-a9c0-5f7d764444d0.png#clientId=u504ddcb5-3965-4&amp;crop=0&amp;crop=0&amp;crop=1&amp;crop=1&amp;from=paste&amp;height=187&amp;id=u470c9ce8&amp;margin=[object Object]&amp;name=image.png&amp;originHeight=374&amp;originWidth=1198&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;size=278205&amp;status=done&amp;style=none&amp;taskId=u028ef7e6-a899-4e71-920c-983a62a9427&amp;title=&amp;width=599" alt="image.png" loading="lazy"></p>
<h1 id="_3-进程管理" tabindex="-1"><a class="header-anchor" href="#_3-进程管理" aria-hidden="true">#</a> 3.进程管理</h1>
<h2 id="_3-1-进程管理基础" tabindex="-1"><a class="header-anchor" href="#_3-1-进程管理基础" aria-hidden="true">#</a> 3.1. 进程管理基础</h2>
<ul>
<li>在Linux中，每个执行的**程序（代码）**都称为一个进程。每个进程都分配一个ID号</li>
<li>每一个进程，都会对应一个父进程，而这个父进程可以复制多个子进程。例如www服务器。</li>
<li>每个进程都可能以两种方式存在。前台和后台。
<ul>
<li>前台进程：用户目前的屏幕上可以进行操作的。</li>
<li>后台进程：实际在操作，但由于屏幕上无法看到的进程，通常使用后台方式执行。</li>
</ul>
</li>
<li>一般系统的服务都是以后台进程的方式存在，而且都会常驻在系统中，直到关机才结束。</li>
</ul>
<h2 id="_3-2-显示系统执行的进程" tabindex="-1"><a class="header-anchor" href="#_3-2-显示系统执行的进程" aria-hidden="true">#</a> 3.2 显示系统执行的进程</h2>
<p>ps [选项]：查看目前系统中，有哪些正在执行，以及它们执行的状况</p>
<ul>
<li>ps -a：显示当前终端的所有进程信息。</li>
<li>ps -u：以用户的格式显示进程信息。</li>
<li>ps -x：显示后台进程运行的参数。</li>
<li>ps -axu | grep xxx：过滤得到xxx的信息。</li>
<li>ps -ef：以全格式显示当前所有的进程，查看进程的父进程。</li>
<li>-e：显示所有进程。</li>
<li>-f：全格式。</li>
</ul>
<blockquote>
<p>ps -axu显示信息选项</p>
</blockquote>
<table>
<thead>
<tr>
<th><strong>字段</strong></th>
<th><strong>说明</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>USER</td>
<td>用户说明</td>
</tr>
<tr>
<td>PID</td>
<td>进程识别号</td>
</tr>
<tr>
<td>%CPU</td>
<td>进程占用cpu百分比</td>
</tr>
<tr>
<td>%MEM</td>
<td>进程占用物理内存百分比</td>
</tr>
<tr>
<td>VSZ</td>
<td>进程占用虚拟内存大小(KB)</td>
</tr>
<tr>
<td>RSS</td>
<td>进程占用物理内存大小(KB)</td>
</tr>
<tr>
<td>TTY</td>
<td>终端机号</td>
</tr>
<tr>
<td>STAT</td>
<td>进程状态，S睡眠，s代表是会话的先导进程，N代表进程拥有比普通进程更高的优先级，R正在运行，D短期等待，Z僵死进程，T被跟踪或被停止</td>
</tr>
<tr>
<td>STARTED</td>
<td>进程启动的时间</td>
</tr>
<tr>
<td>TIME</td>
<td>此进程所消耗的CPU时间</td>
</tr>
<tr>
<td>COMMAND</td>
<td>正在执行的命令或进程名</td>
</tr>
</tbody>
</table>
<blockquote>
<p>ps -ef显示信息解释</p>
</blockquote>
<table>
<thead>
<tr>
<th><strong>字段</strong></th>
<th><strong>说明</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>UID</td>
<td>用户id</td>
</tr>
<tr>
<td>PID</td>
<td>进程id</td>
</tr>
<tr>
<td>PPID</td>
<td>父进程</td>
</tr>
<tr>
<td>C</td>
<td>CPU用于执行优先级的因子，数值越大，表明cpu密集型运算，执行优先级会降低，数值越小，表明是I/O密集运算，执行优先级会提高</td>
</tr>
<tr>
<td>STIME</td>
<td>进程启动时间</td>
</tr>
<tr>
<td>TTY</td>
<td>终端机号</td>
</tr>
<tr>
<td>TIME</td>
<td>此进程所消耗的CPU时间</td>
</tr>
<tr>
<td>CMD</td>
<td>启动所用的命令和参数</td>
</tr>
</tbody>
</table>
<h2 id="_3-3-终止进程" tabindex="-1"><a class="header-anchor" href="#_3-3-终止进程" aria-hidden="true">#</a> 3.3 终止进程</h2>
<p>若是某个进程执行一半需要停止时，或是消耗了很大的系统资源时，此时可以考虑停止该进程，使用kill命令来完成此任务</p>
<ul>
<li>kill [选项] 进程号：通过进程号杀死进程
<ul>
<li>-9：表示强迫进程立刻停止</li>
</ul>
</li>
<li>killall 进程名称：通过进程名称杀死进程，也支持通配符，这在系统因负载过大而变得很慢时很有用</li>
</ul>
<h2 id="_3-4-查看进程树" tabindex="-1"><a class="header-anchor" href="#_3-4-查看进程树" aria-hidden="true">#</a> 3.4 查看进程树</h2>
<ul>
<li>查看进程树：pstree [选项]
<ul>
<li>-p：显示进程的PID</li>
<li>-u：显示进程的所属用户</li>
</ul>
</li>
</ul>
<h2 id="_3-4-服务-service-管理" tabindex="-1"><a class="header-anchor" href="#_3-4-服务-service-管理" aria-hidden="true">#</a> 3.4 服务(Service)管理</h2>
<blockquote>
<p>服务(Service)本质就是进程，但是是运行在后台的，通常都会监听某个端口，等待其它程序的请求，比如(mysql,sshd 防火墙等),因此我们又称为守护进程。</p>
</blockquote>
<h3 id="管理指令" tabindex="-1"><a class="header-anchor" href="#管理指令" aria-hidden="true">#</a> 管理指令</h3>
<ul>
<li>查看防火墙情况 systemctl status firewalld</li>
</ul>
<h3 id="服务的运行级别-runlevel" tabindex="-1"><a class="header-anchor" href="#服务的运行级别-runlevel" aria-hidden="true">#</a> 服务的运行级别（runlevel）</h3>
<ul>
<li>查看或修改默认级别：vim /etc/inittab</li>
</ul>
<h3 id="开机流程" tabindex="-1"><a class="header-anchor" href="#开机流程" aria-hidden="true">#</a> 开机流程</h3>
<p><img src="https://cdn.nlark.com/yuque/0/2022/png/26424970/1657360493017-5c9cd108-780d-4978-bee9-5f8fcd515e70.png#clientId=u16c38eba-5f80-4&amp;crop=0&amp;crop=0&amp;crop=1&amp;crop=1&amp;from=paste&amp;height=197&amp;id=u2d1c29c6&amp;margin=[object Object]&amp;name=image.png&amp;originHeight=394&amp;originWidth=1116&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;size=43893&amp;status=done&amp;style=none&amp;taskId=u26fd5e40-99d7-40cb-810d-3d9d0594620&amp;title=&amp;width=558" alt="image.png" loading="lazy"></p>
<h3 id="chkconfig指令" tabindex="-1"><a class="header-anchor" href="#chkconfig指令" aria-hidden="true">#</a> chkconfig指令</h3>
<p>chkconfig：可以给每个服务的各个运行级别设置自启动/关闭</p>
<ul>
<li>查看xxx服务：chkconfig –list | grep xxx</li>
<li>查看服务的状态：chkconfig 服务名 --list</li>
<li>给服务的运行级别设置自启动：chkconfig –level 5 服务名 on/off</li>
<li>要所有运行级别关闭或开启：chkconfig 服务名 on/off</li>
<li><strong>chkconfig重新设置后需要重新启动才能生效</strong></li>
</ul>
<h2 id="_3-5-动态监控进程" tabindex="-1"><a class="header-anchor" href="#_3-5-动态监控进程" aria-hidden="true">#</a> 3.5 动态监控进程</h2>
<p>top [选项]</p>
<ul>
<li>-d 秒数：指定top命令每隔几秒更新。默认是3秒。</li>
<li>-i：使top不显示任何闲置或者僵死进程。</li>
<li>-p：通过指定监控进程ID来仅仅监控某个进程的状态。</li>
</ul>
<blockquote>
<p>top与ps相似，都是用来显示正在执行的进程，top的不同之处在于top执行一段时间可以更新正在运行的进程</p>
</blockquote>
<p>q ：退出</p>
<h2 id="_3-6查看网络情况" tabindex="-1"><a class="header-anchor" href="#_3-6查看网络情况" aria-hidden="true">#</a> 3.6查看网络情况</h2>
<p>netstat [选项]</p>
<ul>
<li>-an：按一定顺序排列输出</li>
<li>-p：显示哪个进程在调用</li>
</ul>
</div></template>
