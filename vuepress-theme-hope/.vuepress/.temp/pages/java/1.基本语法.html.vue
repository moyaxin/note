<template><div><p>java 基本语法</p>
<!-- more -->
<h1 id="_1-基本语法" tabindex="-1"><a class="header-anchor" href="#_1-基本语法" aria-hidden="true">#</a> 1.基本语法</h1>
<h3 id="_1、关键字与保留字" tabindex="-1"><a class="header-anchor" href="#_1、关键字与保留字" aria-hidden="true">#</a> 1、关键字与保留字</h3>
<h4 id="关键字的定义和特点" tabindex="-1"><a class="header-anchor" href="#关键字的定义和特点" aria-hidden="true">#</a> 关键字的定义和特点</h4>
<ul>
<li>被Java语言赋予了特殊含义，用做专门用途的字符串（单词）</li>
<li>关键字中所有字母都为小写</li>
</ul>
<h4 id="保留字的定义" tabindex="-1"><a class="header-anchor" href="#保留字的定义" aria-hidden="true">#</a> 保留字的定义</h4>
<ul>
<li>现有Java版本尚未使用，但以后版本可能会作为关键字使用。命名标识符时要避免使用这些保留字。</li>
</ul>
<p>总结：48个关键字、2个保留字、3个字面值</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code> 用于定义数据类型的关键字
 <span class="token keyword">class</span> <span class="token keyword">interface</span> <span class="token keyword">enum</span> <span class="token keyword">byte</span> <span class="token keyword">short</span> <span class="token keyword">int</span> <span class="token keyword">long</span> <span class="token keyword">float</span> <span class="token keyword">double</span> <span class="token keyword">char</span> <span class="token keyword">boolean</span> <span class="token keyword">void</span>
 用于定义流程控制的关键字
 <span class="token keyword">if</span> <span class="token keyword">else</span> <span class="token keyword">switch</span> <span class="token keyword">case</span> <span class="token keyword">default</span> <span class="token keyword">while</span> <span class="token keyword">do</span> <span class="token keyword">for</span> <span class="token keyword">break</span> <span class="token keyword">continue</span> <span class="token keyword">return</span>
 用于定义访问权限修饰符的关键字
 <span class="token keyword">private</span> <span class="token keyword">protected</span> <span class="token keyword">public</span>
 用于定义类，函数，变量修饰符的关键字
 <span class="token keyword">abstract</span> <span class="token keyword">final</span> <span class="token keyword">static</span> <span class="token keyword">synchronized</span>
 用于定义类与类之间关系的关键字
 <span class="token keyword">extends</span> <span class="token keyword">implements</span>
 用于定义建立实例及引用实例，判断实例的关键字
 <span class="token keyword">new</span> <span class="token keyword">this</span> <span class="token keyword">super</span> <span class="token keyword">instanceof</span>
 用于异常处理的关键字
 <span class="token keyword">try</span> <span class="token keyword">catch</span> <span class="token keyword">finally</span> <span class="token keyword">throw</span> <span class="token keyword">throws</span>
 用于包的关键字
 <span class="token keyword">package</span> <span class="token keyword">import</span>
 其他修饰符关键字
 <span class="token keyword">native</span> <span class="token keyword">strictfp</span> <span class="token keyword">transient</span> <span class="token keyword">volatile</span> <span class="token keyword">assert</span>
 
 保留字
 <span class="token keyword">goto</span> <span class="token keyword">const</span>
 
 用于定义数据类型值的字面值
 <span class="token boolean">true</span> <span class="token boolean">false</span> <span class="token keyword">null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、标识符" tabindex="-1"><a class="header-anchor" href="#_2、标识符" aria-hidden="true">#</a> 2、标识符</h3>
<h4 id="标识符的定义" tabindex="-1"><a class="header-anchor" href="#标识符的定义" aria-hidden="true">#</a> 标识符的定义</h4>
<ul>
<li>Java对各种变量、方法和类等要素命名时使用的字符序列称为标识符</li>
</ul>
<p>技巧：凡是自己可以起名字的地方都叫标识符</p>
<h4 id="定义合法标识符规则" tabindex="-1"><a class="header-anchor" href="#定义合法标识符规则" aria-hidden="true">#</a> 定义合法标识符规则</h4>
<ul>
<li>由26个英文字母大小写，0-9，_或$组成</li>
<li>数字不可以开头</li>
<li>不可以使用关键字和保留字，但能包含关键字和保留字</li>
<li>Java中严格区分大小写，长度无限制</li>
<li>标识符不能包含空格</li>
</ul>
<h4 id="java中的名称命名规范" tabindex="-1"><a class="header-anchor" href="#java中的名称命名规范" aria-hidden="true">#</a> Java中的名称命名规范</h4>
<ul>
<li>包名：多单词组成时所有字母都小写：xxxyyyzzz</li>
<li>类名、接口名：多单词组成时，所有单词的首字母大写：XxxYyyZzz</li>
<li>变量名、方法名：多单词组成时，第一个单词首字母小写，第二个单词开始每个单词首字母大写：xxxYyyZzz</li>
<li>常量名：所有字母都大写，多单词时每个单词用下划线连接：XXX_YYY_ZZZ</li>
</ul>
<p>注意点：1、在起名字时，为了提高阅读性，要尽量有意义，“见名知意”。2、Java采用unicode字符集，因此标识符也可以使用汉字声明，但是不建议使用。</p>
<h3 id="_3、变量" tabindex="-1"><a class="header-anchor" href="#_3、变量" aria-hidden="true">#</a> 3、变量</h3>
<h4 id="变量的概念" tabindex="-1"><a class="header-anchor" href="#变量的概念" aria-hidden="true">#</a> 变量的概念</h4>
<ul>
<li>内存中的一个存储区域</li>
<li>该区域的数据可以在同一类型范围内不断变化</li>
<li>变量是程序中最基本的存储单元，包含<strong>变量类型</strong>、<strong>变量名</strong>、<strong>存储的值</strong></li>
</ul>
<h4 id="变量的作用" tabindex="-1"><a class="header-anchor" href="#变量的作用" aria-hidden="true">#</a> 变量的作用</h4>
<ul>
<li>用于在内存中保存数据</li>
</ul>
<h4 id="使用变量注意" tabindex="-1"><a class="header-anchor" href="#使用变量注意" aria-hidden="true">#</a> 使用变量注意</h4>
<ul>
<li><strong>Java中每个变量必须先声明，后使用</strong></li>
<li>使用变量名来访问这块区域的数据</li>
<li>变量的作用域：其定义所在的一对{}内</li>
<li>变量只有在其作用域内才有效</li>
<li>同一个作用域内，不能定义重名的变量</li>
</ul>
<h4 id="变量的分类" tabindex="-1"><a class="header-anchor" href="#变量的分类" aria-hidden="true">#</a> 变量的分类</h4>
<p>按数据类型分类</p>
<ul>
<li>基本数据类型
<ul>
<li>数值型
<ul>
<li>整数类型 <strong>(byte short int long)</strong></li>
<li>浮点类型 <strong>(float double)</strong></li>
</ul>
</li>
<li>字符型 <strong>(char)</strong></li>
<li>布尔型 <strong>(boolean)</strong></li>
</ul>
</li>
<li>引用数据类型
<ul>
<li>类 <strong>(class)</strong></li>
<li>接口 <strong>(interface)</strong></li>
<li>数组 <strong>([])</strong></li>
</ul>
</li>
</ul>
<p>按声明位置分类</p>
<ul>
<li>成员变量
<ul>
<li>实例变量 <strong>(不以static修饰)</strong></li>
<li>类变量 <strong>(以static修饰)</strong></li>
</ul>
</li>
<li>局部变量
<ul>
<li>形参 <strong>(方法、构造器中定义的变量)</strong></li>
<li>方法局部变量 <strong>(在方法内部定义)</strong></li>
<li>代码块局部变量 <strong>(在代码块内定义)</strong></li>
</ul>
</li>
</ul>
<h4 id="整数变量-byte、short、int、long" tabindex="-1"><a class="header-anchor" href="#整数变量-byte、short、int、long" aria-hidden="true">#</a> 整数变量：byte、short、int、long</h4>
<ul>
<li>Java各整数类型有固定的表数范围和字段长度，不受具体OS的影响，以保证Java程序的可移植性。</li>
<li>Java的整型常量默认为int型，声明long型常量须加l或者L</li>
<li>Java程序中变量通常声明为int型，除非不足以表示较大的数，才使用long
| <strong>类型</strong> | <strong>占用存储空间</strong> | <strong>表数范围</strong> |
| --- | --- | --- |
| byte | 1字节=8bit位 | -128~127 |
| short | 2字节 | -<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mn>15</mn></msup></mrow><annotation encoding="application/x-tex">2^{15}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">15</span></span></span></span></span></span></span></span></span></span></span></span>~<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mn>15</mn></msup></mrow><annotation encoding="application/x-tex">2^{15}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">15</span></span></span></span></span></span></span></span></span></span></span></span>-1 |
| int | 4字节 | -<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mn>31</mn></msup></mrow><annotation encoding="application/x-tex">2^{31}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">31</span></span></span></span></span></span></span></span></span></span></span></span>~<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mn>31</mn></msup></mrow><annotation encoding="application/x-tex">2^{31}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">31</span></span></span></span></span></span></span></span></span></span></span></span>-1(约21亿) |
| long | 8字节 | -<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mn>63</mn></msup></mrow><annotation encoding="application/x-tex">2^{63}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">63</span></span></span></span></span></span></span></span></span></span></span></span>~<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mn>63</mn></msup></mrow><annotation encoding="application/x-tex">2^{63}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">63</span></span></span></span></span></span></span></span></span></span></span></span>-1 |</li>
</ul>
<p>bit：计算机中的最小存储单位。byte：计算机中基本存储单元。</p>
<h4 id="浮点类型-float、double" tabindex="-1"><a class="header-anchor" href="#浮点类型-float、double" aria-hidden="true">#</a> 浮点类型：float、double</h4>
<ul>
<li>与整数类型类似，Java浮点类型也有固定的表数范围和字段长度，不受具体操作系统的影响</li>
<li>浮点型常量有两种表示形式：
<ul>
<li>十进制数形式</li>
<li>科学计数法形式</li>
</ul>
</li>
<li>float：单精度，尾数可以精确到7位有效数字。很多情况下，精度很难满足需求。</li>
<li>double：双精度，精度是float的两倍。通常采用此类型。</li>
<li>Java的浮点型常量默认是double型，声明float型常量，须后加f或F。
| <strong>类型</strong> | <strong>占用存储空间</strong> | <strong>表数范围</strong> |
| --- | --- | --- |
| float | 4字节 | -3.403E38~3.403E38 |
| double | 8字节 | -1.798E308~1.798E308 |</li>
</ul>
<p>注意点：float表示数值的范围比long还大</p>
<h4 id="字符类型-char" tabindex="-1"><a class="header-anchor" href="#字符类型-char" aria-hidden="true">#</a> 字符类型：char</h4>
<ul>
<li>char型数据用来表示通常意义上“字符”（2字节）</li>
<li>Java中所有字符都使用Unicode编码，故一个字符可以存储一个字母，一个汉字，或其他书面语的一个字符。</li>
<li>字符型变量的三种表现形式：
<ul>
<li>字符常量是用单引号''括起来的单个字符。</li>
<li>Java中还允许使用转义字符''来将其后的字符转变为特殊字符型常量。</li>
<li>直接使用Unicode值来表示字符型常量。</li>
</ul>
</li>
<li>char类型是可以进行运算的。因为它都对应有Unicode编码。</li>
</ul>
<p>char c1 = 'a'; // 编译通过
 // char c2 = 'AB'; // 编译不通过
 char c3 = '中'; // 编译通过
 char c4 = '\n'; // 编译通过
 char c5 = '\u0043'; // 编译通过
 // char c6 = ''; // 编译不通过
 char c7 = 97; // a, 开发中极其少见
常用ASCII码值： 'a' == 97; 'A' == 65;</p>
<h4 id="布尔型-boolean" tabindex="-1"><a class="header-anchor" href="#布尔型-boolean" aria-hidden="true">#</a> 布尔型：boolean</h4>
<ul>
<li>只能取两个值之一：true、false</li>
<li>常常在条件判断、循环结构中使用</li>
</ul>
<h4 id="基本数据类型转换" tabindex="-1"><a class="header-anchor" href="#基本数据类型转换" aria-hidden="true">#</a> 基本数据类型转换</h4>
<ul>
<li>自动类型转换：容量小的类型自动转换为容量大的数据类型。数据类型按容量大小排序为：char、byte、short --&gt; int --&gt; long --&gt; float --&gt; double</li>
<li>有多种类型的数据混合运算时，系统首先自动将所有数据类型转换为容量最大的那种数据类型，然后再进行计算</li>
<li>byte,short,char之间不会互相转换，他们三者在计算时首先转换为int类型</li>
</ul>
<p>Java在做运算的时候，如果操作数均在int范围内，那么一律在int的空间内运算。</p>
<ul>
<li>boolean类型不能与其它数据类型运算</li>
<li>当把任何基本数据类型的值和字符串(String)进行连接运算时(+)，基本数据类型的值将自动转化为字符串(String)类型</li>
</ul>
<p>说明：此时的容量大小指的是表示数的范围的大小。比如：float容量要大于long的容量</p>
<h4 id="强制类型转换" tabindex="-1"><a class="header-anchor" href="#强制类型转换" aria-hidden="true">#</a> 强制类型转换</h4>
<ul>
<li>自动类型转换的逆过程，将容量大的数据类型转换为容量小的数据类型。使用时要加上强制转换符：()，但可能造成<strong>精度降低或溢出</strong>，格外要注意</li>
</ul>
<p>double d1 = 12.9;
   int i1 = (int)d1; // 12，截断操作
 
   int i2 = 128;
   byte b = (byte)i2; // -128</p>
<ul>
<li>通常，字符串不能直接转换为基本类型，但通过基本类型对应的包装类则可以实现把字符串转换为基本类型</li>
</ul>
<p>String a = &quot;43&quot;;
   int i = Integer.parseInt(a);</p>
<ul>
<li>boolean类型不可以转换为其它的数据类型</li>
</ul>
<p>说明：整型常量，默认类型是int型；浮点型常量，默认类型是double型。
   byte b = 12;
   // byte b1 = b + 1; // 编译失败
   // float f1 = b + 12.3; // 编译失败</p>
<h4 id="字符串类型-string" tabindex="-1"><a class="header-anchor" href="#字符串类型-string" aria-hidden="true">#</a> 字符串类型：String</h4>
<ul>
<li>String不是基本数据类型，属于引用数据类型</li>
<li>使用方式与基本数据类型一致。</li>
<li>一个字符串可以串接另一个字符串，也可以直接串接其他类型的数据。</li>
</ul>
<p>String str = &quot;abcd&quot;;
   str = str + &quot;xyz&quot;;
   int n = 100;
   str = str + n; // abcdxyz100</p>
<h3 id="_4、进制" tabindex="-1"><a class="header-anchor" href="#_4、进制" aria-hidden="true">#</a> 4、进制</h3>
<ul>
<li>所有数字在计算机底层都是以<strong>二进制</strong>形式存在。</li>
<li>对于整数，有四种表示方式：
<ul>
<li>二进制(binary)：0,1，满2进1，以0b或0B开头</li>
<li>十进制(decimal)：0-9，满10进1</li>
<li>八进制(octal)：0-7，满8进1，以数字0开头表示</li>
<li>十六进制(hex)：0-9及A-F，满16进1，以0x或0X开头表示。此处的A-F不区分大小写。</li>
</ul>
</li>
<li>Java整数常量默认是int类型，当用二进制定义整数时，其第32位(最高位)是符号位：当是long类型时，二进制默认占64位，第64位是符号位</li>
<li>二进制的整数有如下三种形式：
<ul>
<li>原码：直接将一个数值换成二进制数。最高位是符号位</li>
<li>负数的反码：是对原码按位取反，只有最高位(符号位)确认为1</li>
<li>负数的补码：其反码加1</li>
</ul>
</li>
<li>计算机以二进制<strong>补码</strong>的形式保持所有的整数
<ul>
<li>正数的原码、反码、补码都相同</li>
<li>负数的补码是其反码+1</li>
</ul>
</li>
</ul>
<h3 id="_5、运算符" tabindex="-1"><a class="header-anchor" href="#_5、运算符" aria-hidden="true">#</a> 5、运算符</h3>
<p>运算符是一种特殊的符号，用以表示数据的运算、赋值和比较等。</p>
<ul>
<li>算术运算符</li>
<li>赋值运算符</li>
<li>比较运算符（关系运算符）</li>
<li>逻辑运算符</li>
<li>位运算符</li>
<li>三元运算符</li>
</ul>
<h4 id="算术运算符" tabindex="-1"><a class="header-anchor" href="#算术运算符" aria-hidden="true">#</a> 算术运算符</h4>
<table>
<thead>
<tr>
<th><strong>运算符</strong></th>
<th><strong>运算</strong></th>
<th><strong>范例</strong></th>
<th><strong>结果</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>+</td>
<td>正号</td>
<td>+3</td>
<td>3</td>
</tr>
<tr>
<td>-</td>
<td>负号</td>
<td>b=4; -b</td>
<td>-4</td>
</tr>
<tr>
<td>+</td>
<td>加</td>
<td>5+5</td>
<td>10</td>
</tr>
<tr>
<td>-</td>
<td>减</td>
<td>6-4</td>
<td>2</td>
</tr>
<tr>
<td>*</td>
<td>乘</td>
<td>3*4</td>
<td>12</td>
</tr>
<tr>
<td>/</td>
<td>除</td>
<td>5/5</td>
<td>1</td>
</tr>
<tr>
<td>%</td>
<td>取模(取余)</td>
<td>7%5</td>
<td>2</td>
</tr>
<tr>
<td>++</td>
<td>自增(前)，先运算后取值</td>
<td>a=2;b=++a;</td>
<td>a=3;b=3</td>
</tr>
<tr>
<td>++</td>
<td>自增(后)，先取值后运算</td>
<td>a=2;b=a++;</td>
<td>a=3;b=2</td>
</tr>
<tr>
<td>--</td>
<td>自减(前)，先运算后取值</td>
<td>a=2;b=--a;</td>
<td>a=1;b=1</td>
</tr>
<tr>
<td>--</td>
<td>自减(后)，先取值后运算</td>
<td>a=2;b=a--;</td>
<td>a=1;b=2</td>
</tr>
<tr>
<td>+</td>
<td>字符串连接</td>
<td>&quot;He&quot;+&quot;llo&quot;</td>
<td>&quot;Hello&quot;</td>
</tr>
</tbody>
</table>
<p><strong>疑难点1：%取余运算，结果的符号与被模数的符号相同</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code> <span class="token keyword">int</span> m1 <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>
 <span class="token keyword">int</span> n1 <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
 <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"m1 % n1 = "</span> <span class="token operator">+</span> m1 <span class="token operator">%</span> n1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// m1 % n1 = 2</span>
 <span class="token keyword">int</span> m2 <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">12</span><span class="token punctuation">;</span>
 <span class="token keyword">int</span> n2 <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
 <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"m1 % n1 = "</span> <span class="token operator">+</span> m2 <span class="token operator">%</span> n2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// m1 % n1 = -2</span>
 <span class="token keyword">int</span> m3 <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>
 <span class="token keyword">int</span> n3 <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">;</span>
 <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"m1 % n1 = "</span> <span class="token operator">+</span> m3 <span class="token operator">%</span> n3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// m1 % n1 = 2</span>
 <span class="token keyword">int</span> m4 <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">12</span><span class="token punctuation">;</span>
 <span class="token keyword">int</span> n4 <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">;</span>
 <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"m1 % n1 = "</span> <span class="token operator">+</span> m4 <span class="token operator">%</span> n4<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// m1 % n1 = -2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>疑难点2：++ 和 -- 不会改变变量本身的数据类型</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code> <span class="token keyword">short</span> s <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
 <span class="token comment">//s = s + 1; //编译失败</span>
 s <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">short</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>s <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//正确</span>
 s<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">//正确</span>
 
 <span class="token keyword">byte</span> b <span class="token operator">=</span> <span class="token number">127</span><span class="token punctuation">;</span>
 b<span class="token operator">++</span><span class="token punctuation">;</span>
 <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//-128</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="赋值运算符" tabindex="-1"><a class="header-anchor" href="#赋值运算符" aria-hidden="true">#</a> 赋值运算符</h4>
<p>符号：= 拓展赋值运算符：+=,-=,*=,/=,%=</p>
<ul>
<li>当=两侧数据类型不一致时，可以使用自动类型转换或使用强制类型转换原则进行处理</li>
<li>支持连续赋值</li>
</ul>
<p>int i, j;
 //连续赋值
 i = j = 10;
<strong>疑难点：拓展赋值运算符不会改变变量本身的数据类型</strong>
 short s = 10;
 //s = s + 2; //编译失败
 s += 2;
 System.out.println(s); //12
 int i = 1;
 i *= 0.1;
 System.out.println(i); // 0</p>
<h4 id="比较运算符" tabindex="-1"><a class="header-anchor" href="#比较运算符" aria-hidden="true">#</a> 比较运算符</h4>
<table>
<thead>
<tr>
<th><strong>运算符</strong></th>
<th><strong>运算</strong></th>
<th><strong>范例</strong></th>
<th><strong>结果</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>==</td>
<td>相等于</td>
<td>4==3</td>
<td>false</td>
</tr>
<tr>
<td>!=</td>
<td>不等于</td>
<td>4!=3</td>
<td>true</td>
</tr>
<tr>
<td>&lt;</td>
<td>小于</td>
<td>4&lt;3</td>
<td>false</td>
</tr>
<tr>
<td>&gt;</td>
<td>大于</td>
<td>4&gt;3</td>
<td>true</td>
</tr>
<tr>
<td>&lt;=</td>
<td>小于等于</td>
<td>4&lt;=3</td>
<td>false</td>
</tr>
<tr>
<td>&gt;=</td>
<td>大于等于</td>
<td>4&gt;=3</td>
<td>true</td>
</tr>
<tr>
<td>instanceof</td>
<td>检查是否是类的对象</td>
<td>&quot;Hello&quot; instanceof String</td>
<td>true</td>
</tr>
</tbody>
</table>
<ul>
<li>比较运算符的结果都是boolean型，也就是要么是true，要么是false。</li>
<li><strong>比较运算符==不能误写成=</strong></li>
<li>
<blockquote>
<p>&lt;&gt;=&lt;=：只能使用在数值类型的数据之间</p>
</blockquote>
</li>
<li>==：不仅可以使用在数值类型数据之间，还可以使用在其他引用类型变量之间。</li>
</ul>
<h4 id="逻辑运算符" tabindex="-1"><a class="header-anchor" href="#逻辑运算符" aria-hidden="true">#</a> 逻辑运算符</h4>
<p>&amp;-逻辑与|-逻辑或!-逻辑非&amp;&amp;-短路与||-短路或^-逻辑异或</p>
<table>
<thead>
<tr>
<th><strong>a</strong></th>
<th><strong>b</strong></th>
<th><strong>a&amp;b</strong></th>
<th><strong>a&amp;&amp;b</strong></th>
<th><strong>a|b</strong></th>
<th><strong>a||b</strong></th>
<th><strong>!a</strong></th>
<th><strong>a^b</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>true</td>
<td>true</td>
<td>true</td>
<td>true</td>
<td>true</td>
<td>true</td>
<td>false</td>
<td>false</td>
</tr>
<tr>
<td>true</td>
<td>false</td>
<td>false</td>
<td>false</td>
<td>true</td>
<td>true</td>
<td>false</td>
<td>true</td>
</tr>
<tr>
<td>false</td>
<td>true</td>
<td>false</td>
<td>false</td>
<td>true</td>
<td>true</td>
<td>true</td>
<td>true</td>
</tr>
<tr>
<td>false</td>
<td>false</td>
<td>false</td>
<td>false</td>
<td>false</td>
<td>false</td>
<td>true</td>
<td>false</td>
</tr>
</tbody>
</table>
<p><strong>区分 &amp; 与 &amp;&amp;</strong></p>
<ul>
<li>相同点1：&amp;与&amp;&amp;的运算结果相同</li>
<li>相同点2：当符号左边为true时，二者都会执行符号右边的运算</li>
<li>不同点：当符号左边为false时，&amp;继续执行符号右边的运算，&amp;&amp;不再执行符号右边的运算</li>
</ul>
<p><strong>区分 | 与 ||</strong></p>
<ul>
<li>相同点1：|与||的运算结果相同</li>
<li>相同点2：当符号左边是false时，二者都会执行符号右边的运算</li>
<li>不同点1：当符号左边是true时，|继续执行符号右边的运算，而||不再执行符号右边的运算</li>
</ul>
<h4 id="位运算符" tabindex="-1"><a class="header-anchor" href="#位运算符" aria-hidden="true">#</a> 位运算符</h4>
<table>
<thead>
<tr>
<th><strong>运算符</strong></th>
<th><strong>运算</strong></th>
<th><strong>范例</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>&lt;&lt;</td>
<td>左移</td>
<td>3 &lt;&lt; 2 = 12 --&gt; 3<em>2</em>2=12</td>
</tr>
<tr>
<td>&gt;&gt;</td>
<td>右移</td>
<td>3 &gt;&gt; 1 = 1 --&gt; 3/2=1</td>
</tr>
<tr>
<td>&gt;&gt;&gt;</td>
<td>无符号右移</td>
<td>3 &gt;&gt;&gt; 1 = 1 --&gt; 3/2=1</td>
</tr>
<tr>
<td>&amp;</td>
<td>与运算</td>
<td>6 &amp; 3 = 2</td>
</tr>
<tr>
<td>|</td>
<td>或运算</td>
<td>6 | 3 = 7</td>
</tr>
<tr>
<td>^</td>
<td>异或运算</td>
<td>6 ^ 3 = 5</td>
</tr>
<tr>
<td>~</td>
<td>取反运算</td>
<td>~6 = -7</td>
</tr>
</tbody>
</table>
<p>位运算时直接对整数的二进制进行的运算</p>
<table>
<thead>
<tr>
<th><strong>运算符</strong></th>
<th><strong>描述</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>&lt;&lt;</td>
<td>空位补0，被移除的高位丢弃，空缺位补0</td>
</tr>
<tr>
<td>&gt;&gt;</td>
<td>被移除的二进制最高位是0，右移后，空缺位补0，若最高位是1，空缺位补1</td>
</tr>
<tr>
<td>&gt;&gt;&gt;</td>
<td>被移位二进制最高位无论是0或者是1，空缺位都用0补</td>
</tr>
<tr>
<td>&amp;</td>
<td>二进制位进行&amp;运算，只有1&amp;1时结果是1，否则是0</td>
</tr>
<tr>
<td>|</td>
<td>二进制位进行|运算，只有0|0时结果是0，否则是1</td>
</tr>
<tr>
<td>^</td>
<td>相同二进制进行\<sup>运算结果是0：1\</sup>1=0,0\<sup>0=0；不相同二进制位\</sup>运算结果是1：1\<sup>0=1，0\</sup>1=1</td>
</tr>
<tr>
<td>~</td>
<td>各二进制码按补码各位取反</td>
</tr>
</tbody>
</table>
<p>m = k ^ n = (m ^ n) ^ n</p>
<h4 id="三元运算符" tabindex="-1"><a class="header-anchor" href="#三元运算符" aria-hidden="true">#</a> 三元运算符</h4>
<ul>
<li>格式：(条件表达式) ? 表达式1 : 表达式2;</li>
<li>表达式1和表达式2为同种类型</li>
</ul>
<p><strong>三元运算符与if-else的联系与区别</strong></p>
<ul>
<li>三元运算符可简化if-else语句</li>
<li>三元运算符要求必须返回一个结果</li>
<li>if后的代码块可有多个语句</li>
</ul>
<p><strong>附加：运算符的优先级</strong></p>
<table>
<thead>
<tr>
<th></th>
<th><strong>. () {} ; ,</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>R--&gt;L</td>
<td>++--~!(data type)</td>
</tr>
<tr>
<td>L--&gt;R</td>
<td>*/%</td>
</tr>
<tr>
<td>L--&gt;R</td>
<td>+-</td>
</tr>
<tr>
<td>L--&gt;R</td>
<td>&lt;&lt;&gt;&gt;&gt;&gt;&gt;</td>
</tr>
<tr>
<td>L--&gt;R</td>
<td>&lt;&gt;&lt;=&gt;=instanceof</td>
</tr>
<tr>
<td>L--&gt;R</td>
<td>==!=</td>
</tr>
<tr>
<td>L--&gt;R</td>
<td>&amp;</td>
</tr>
<tr>
<td>L--&gt;R</td>
<td>^</td>
</tr>
<tr>
<td>L--&gt;R</td>
<td>\|</td>
</tr>
<tr>
<td>L--&gt;R</td>
<td>&amp;&amp;</td>
</tr>
<tr>
<td>L--&gt;R</td>
<td>\|\|</td>
</tr>
<tr>
<td>R--&gt;L</td>
<td>? :</td>
</tr>
<tr>
<td>R--&gt;L</td>
<td>=*=/=%=</td>
</tr>
<tr>
<td></td>
<td>+=-=&lt;&lt;=&gt;&gt;=</td>
</tr>
<tr>
<td></td>
<td>&gt;&gt;&gt;=&amp;=^=\|=</td>
</tr>
</tbody>
</table>
<h3 id="_6、程序流程控制" tabindex="-1"><a class="header-anchor" href="#_6、程序流程控制" aria-hidden="true">#</a> 6、程序流程控制</h3>
<ul>
<li>程序控制语句是用来控制程序中各语句执行顺序的语句，可以把语句组合成能完成一定功能的小逻辑模块。</li>
<li>其流程控制方式采用结构化程序设计中规定的三种基本流程结果，即：顺序结构、分支结构、循环结构</li>
</ul>
<h4 id="分支结构" tabindex="-1"><a class="header-anchor" href="#分支结构" aria-hidden="true">#</a> 分支结构</h4>
<p><strong>if-else结构</strong></p>
<ul>
<li>else 结构是可选的</li>
<li>针对与条件表达式：
<ul>
<li>如果多个条件表达式之间是“互斥”关系（或没有交集的关系），哪个判断和执行语句声明在上面还是下面，无所谓。</li>
<li>如果多个条件表达式之间有交集的关系，需要根据实际情况，考虑清楚应该将哪个结构声明在上面。</li>
<li>如果多个条件表达式之间有包含关系，通常情况下，需要将范围小的声明在范围大的上面。否则，范围小的就没有机会执行</li>
</ul>
</li>
<li>if-else 结构是可以互相嵌套的。</li>
<li>如果if-else结构中的执行语句只有一行时，对应的一对{}可以省略的。但是，不建议大家省略。</li>
<li>多个if-else时，if-else的配对方式采用就近原则进行配对</li>
</ul>
<p><strong>switch-case结构</strong>
 switch(表达式){
   case 常量1:
     语句1;
     // break;
   case 常量2:
     语句2;
     // break;
   ... ...
   case 常量N:
     语句N;
     // break;
   default:
     语句;
     // break;
 }</p>
<ul>
<li>根据switch表达式中的值，依次匹配各个case中的常量。一旦匹配成功，则进入相应的case结构中，调用其执行语句。当调用完执行语句以后，则仍然继续向下执行其他case结构中的执行语句，直到遇到break关键字或此switch-case结构末尾结束为止。</li>
<li>break，可以使用在switch-case结构中，表示一旦执行到此关键字，就跳出switch-case结构</li>
<li>switch结构中的表达式，只能是如下的6种数据类型之一：byte、short、char、int、枚举类型（JDK5.0新增）、String类型（JDK7.0新增）</li>
<li>case 之后只能声明常量，不能声明范围。</li>
<li>break 关键字是可选的</li>
<li>default：相当于if-else结构中的else。default结构是可选的，而且位置是灵活的。</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code> <span class="token keyword">int</span> number <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
 <span class="token comment">// Console: zero</span>
 <span class="token keyword">switch</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">default</span><span class="token operator">:</span>
     <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"other"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">case</span> <span class="token number">0</span><span class="token operator">:</span>
     <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"zero"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token keyword">break</span><span class="token punctuation">;</span>
   <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
     <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"one"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token keyword">break</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>凡是可以使用switch-case的结构，都可以转换为if-else。反之，不成立。</li>
<li>当发现既可以使用switch-case且switch中表达式的取值情况不太多，又可以使用if-else时，我们优先选择使用switch-case。原因：switch-case执行效率稍高。</li>
</ul>
<h4 id="循环结构" tabindex="-1"><a class="header-anchor" href="#循环结构" aria-hidden="true">#</a> 循环结构</h4>
<p>循环语句的四个组成部分</p>
<ul>
<li>初始化部分</li>
<li>循环条件部分</li>
<li>循环体部分</li>
<li>迭代部分</li>
</ul>
<p><strong>for循环结构</strong>
 for(初始化部分;循环条件部分;迭代部分) {
   循环体部分
 }
 
 执行过程：初始化部分-循环条件部分-循环体部分-迭代部分-循环条件部分-循环体部分-迭代部分- ... - 循环条件部分
<strong>while循环结构</strong>
 初始化部分
 while(循环条件部分) {
   循环体部分
   迭代部分
 }
 
 执行过程：初始化部分-循环条件部分-循环体部分-迭代部分-循环条件部分-循环体部分-迭代部分- ... - 循环条件部分</p>
<ul>
<li>写while循环千万小心不要丢了迭代条件。一旦丢了，就可能导致死循环！</li>
<li>写程序需要避免出现死循环。</li>
<li>for循环和while循环是可以相互转换的。区别在于for循环和while循环的初始化条件部分的作用范围不同。</li>
</ul>
<p><strong>do-while循环结构</strong>
 初始化部分
 do{
   循环体部分
   迭代部分
 }while(循环条件部分);
 
 执行过程：初始化部分-循环体部分-迭代部分-循环条件部分-循环体部分-迭代部分- ... - 循环条件部分</p>
<ul>
<li>do-while循环至少会执行一次循环体！</li>
<li>开发中，使用for和while更多一些。较少使用do-while</li>
</ul>
<p><strong>特殊关键字的使用</strong></p>
<table>
<thead>
<tr>
<th></th>
<th><strong>适用范围</strong></th>
<th><strong>不同点</strong></th>
<th><strong>相同点</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>break</td>
<td>switch-case和循环结构中</td>
<td>结束当前循环</td>
<td>关键字后面不能声明执行语句</td>
</tr>
<tr>
<td>continue</td>
<td>循环结构中</td>
<td>结束当次循环</td>
<td>关键字后面不能声明执行语句</td>
</tr>
</tbody>
</table>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code> label<span class="token operator">:</span> <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">4</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
           <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">%</span> <span class="token number">4</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
               <span class="token comment">//break; //默认跳出包裹此关键字最近的一层循环</span>
               <span class="token comment">//continue;</span>
               
               <span class="token comment">//break label; //结束指定标识的一层循环结构</span>
               <span class="token keyword">continue</span> label<span class="token punctuation">;</span> <span class="token comment">//结束指定标识的一层循环结构当次循环</span>
             <span class="token punctuation">}</span>
           <span class="token punctuation">}</span>
         <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>return：并非专门用于结束循环的，它的功能是结束一个方法。当一个方法执行到一个return语句时，这个方法将被结束。</li>
<li>与break和continue不同的是，return直接结束整个方法，不管这个return处于多少层循环之内</li>
</ul>
<h3 id="_7、数组" tabindex="-1"><a class="header-anchor" href="#_7、数组" aria-hidden="true">#</a> 7、数组</h3>
<ul>
<li>数组(Array)，是多个相同类型数据按一定顺序排列的集合，并使用一个名字命名，并通过编号的方式对这些数据进行统一管理。</li>
<li>数组本身是<strong>引用数据类型</strong>，而数组中的元素可以是任何数据类型，包括基本数据类型和引用数据类型。</li>
<li>创建数组对象会在内存中开辟一整块连续的空间，而数组名中引用的是这块连续空间的首地址。</li>
<li>数组的长度一旦确定，就不能修改。</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code> <span class="token comment">//1.一维数组的声明和初始化     </span>
 <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> ids<span class="token punctuation">;</span><span class="token comment">//声明</span>
 <span class="token comment">//1.1静态初始化：数组的初始化和数组元素的赋值操作同时进行</span>
 ids <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">1001</span><span class="token punctuation">,</span><span class="token number">1002</span><span class="token punctuation">,</span><span class="token number">1003</span><span class="token punctuation">,</span><span class="token number">1004</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
 <span class="token comment">//1.2动态初始化：数组的初始化和数组元素的赋值操作分开进行</span>
 <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> names <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>数组元素的默认初始化值</strong></p>
<ul>
<li>数组元素是整型：0</li>
<li>数组元素是浮点型：0.0</li>
<li>数组元素是char型：0或者'\u0000'，而非'0'</li>
<li>数组元素是boolean型：false</li>
<li>数组元素是引用数据类型：null</li>
</ul>
<p>对于二维数组的理解：我们可以看成是一维数组array1又作为另一个一维数组array2的元素而存在。其实，从数组底层的运行机制来看，其实没有多维数组。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code> <span class="token comment">//一些错误的写法</span>
 <span class="token comment">//int[] ids;</span>
 <span class="token comment">//ids = {1,2,2}; //编译错误</span>
 <span class="token comment">//一些正确但是不标准的写法</span>
 <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">//类型推断</span>
 <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr2<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 数组[]位置可以随意</span>
 <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr3<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
 <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> strArray1<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token string">"222"</span><span class="token punctuation">,</span> <span class="token string">"2222"</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token string">"111"</span><span class="token punctuation">,</span> <span class="token string">"3333"</span><span class="token punctuation">,</span> <span class="token string">"5555"</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="附加-arrays工具类的使用" tabindex="-1"><a class="header-anchor" href="#附加-arrays工具类的使用" aria-hidden="true">#</a> 附加：Arrays工具类的使用</h3>
<ul>
<li>java.util.Arrays类即为操作数组的工具类，包含了用来操作数组的各种方法
| <strong>方法</strong> | <strong>作用</strong> |
| --- | --- |
| boolean equals(int[] a,int[] b) | 判断两个数组是否相等 |
| String toString(int[] a) | 输出数组信息 |
| void fill(int[] a,int val) | 将指定值填充到数组之中 |
| void sort(int[] a) | 对数组进行排序 |
| int binarySearch(int[] a,int key) | 对排列后的数组进行二分法检索指定的值 |</li>
</ul>
</div></template>
