<template><div><p>面向对象</p>
<!-- more -->
<h1 id="_2-面向对象" tabindex="-1"><a class="header-anchor" href="#_2-面向对象" aria-hidden="true">#</a> 2.面向对象</h1>
<h3 id="_1、面向过程与面向对象" tabindex="-1"><a class="header-anchor" href="#_1、面向过程与面向对象" aria-hidden="true">#</a> 1、面向过程与面向对象</h3>
<h4 id="面向过程-pop-与面向对象-oop" tabindex="-1"><a class="header-anchor" href="#面向过程-pop-与面向对象-oop" aria-hidden="true">#</a> 面向过程(POP)与面向对象(OOP)</h4>
<ul>
<li>二者都是一种思想，面向对象是相对于面向过程而言的。面向过程，强调的是功能行为，以函数为最小单位，考虑怎么做。面向对象，将功能封装进对象，强调具备了功能的对象，以类/对象为最小单位，考虑谁来做。</li>
<li>面向对象更加强调运用人类在日常的思维逻辑中采用的思想方法与原则，如抽象、分类、继承、聚合、多态等。</li>
</ul>
<h4 id="面向对象的三大特征" tabindex="-1"><a class="header-anchor" href="#面向对象的三大特征" aria-hidden="true">#</a> 面向对象的三大特征</h4>
<ul>
<li>封装性</li>
<li>继承性</li>
<li>多态性</li>
</ul>
<h4 id="面向对象的思想概述" tabindex="-1"><a class="header-anchor" href="#面向对象的思想概述" aria-hidden="true">#</a> 面向对象的思想概述</h4>
<ul>
<li>程序员从面向过程的<strong>执行者</strong>转化成了面向对象的<strong>指挥者</strong></li>
<li>面向对象分析方法分析问题的思路和步骤：
<ul>
<li>根据问题需要，选择问题所针对的<strong>现实世界的实体</strong>。</li>
<li>从实体中寻找解决问题相关的属性和功能，这些属性和功能就形成了<strong>概念世界中的类</strong>。</li>
<li>把抽象的实体用计算机语言进行描述，<strong>形成计算机世界中的类的定义</strong>。即借助某种程序语言，把类构造成计算机能够识别和处理的数据结构。</li>
<li>把<strong>类实例化成计算机世界中的对象</strong>。对象是计算机世界中解决问题的最终工具。</li>
</ul>
</li>
</ul>
<h3 id="_2、java语言基本元素-类和对象" tabindex="-1"><a class="header-anchor" href="#_2、java语言基本元素-类和对象" aria-hidden="true">#</a> 2、Java语言基本元素：类和对象</h3>
<h4 id="类和对象" tabindex="-1"><a class="header-anchor" href="#类和对象" aria-hidden="true">#</a> 类和对象</h4>
<ul>
<li>类(Class)和对象(Object)是面向对象的核心概念。
<ul>
<li>类是对一类事物的描述，是<strong>抽象的</strong>、概念上的定义</li>
<li>对象是<strong>实际存在的</strong>的该类事物的每个个体，因而也称为<strong>实例</strong>。</li>
</ul>
</li>
</ul>
<h4 id="类和对象的使用-面向对象思想落地的实现" tabindex="-1"><a class="header-anchor" href="#类和对象的使用-面向对象思想落地的实现" aria-hidden="true">#</a> 类和对象的使用（面向对象思想落地的实现）</h4>
<ul>
<li>创建类，设计类的成员</li>
<li>创建类的对象</li>
<li>通过&quot;对象.属性&quot;或&quot;对象.方法&quot;调用对象的结构</li>
</ul>
<blockquote>
<p>如果创建了一个类的多个对象，则每个对象都独立的拥有一套类的(非static的)属性。意味着：如果我们修改一个对象的属性a，则不影响另外一个对象属性a的值。</p>
</blockquote>
<h4 id="对象的创建和使用-内存解析" tabindex="-1"><a class="header-anchor" href="#对象的创建和使用-内存解析" aria-hidden="true">#</a> 对象的创建和使用：内存解析</h4>
<ul>
<li><strong>堆(Heap)</strong>，此内存区域的唯一目的就是<strong>存放对象实例</strong>，几乎所有的对象实例都在这里分配内存。这一点在Java虚拟机规范中的描述是：所有的对象实例以及数组都要在堆上分配。</li>
<li>通常所说的<strong>栈(Stack)</strong>，是指虚拟机栈。虚拟机栈用于<strong>存储局部变量</strong>等。局部变量表存放了编译期可知长度的各种基本数据类型(boolean、byte、char、short、int、float、long、double)、对象引用(reference类型，它不等同于对象本身，是对象在堆内存的首地址)。方法执行完，自动释放。</li>
<li><strong>方法区(Method Area)</strong>，用于存储已被虚拟机加载的<strong>类信息、常量、静态变量、即时编译器编译后的代码</strong>等数据</li>
</ul>
<h3 id="_3、类的成员之一-属性" tabindex="-1"><a class="header-anchor" href="#_3、类的成员之一-属性" aria-hidden="true">#</a> 3、类的成员之一：属性</h3>
<h4 id="属性-成员变量-vs-局部变量" tabindex="-1"><a class="header-anchor" href="#属性-成员变量-vs-局部变量" aria-hidden="true">#</a> 属性(成员变量) VS 局部变量</h4>
<ul>
<li>相同点
<ul>
<li>定义变量的格式：数据类型 变量名 = 变量值</li>
<li>先声明，后使用</li>
<li>变量都有其对应的作用域</li>
</ul>
</li>
<li>不同点
<ul>
<li>在类中声明的位置不同。属性直接定义在类的一对{}内；局部变量声明在方法内、方法形参、代码块内、构造器形参、构造器内部的变量</li>
<li>关于权限修饰符的不同。属性可以在声明属性时，指明其权限，使用权限修饰符。常用的权限修饰符：private、public、缺省、protected。局部变量不可以使用权限修饰符。</li>
<li>默认初始化值的情况
<ul>
<li>属性：类的属性，根据其类型，都有默认初始化值。整型(byte、short、int、long)：0；浮点型(float、double)：0.0；字符型(char)：0(或'\u0000')；布尔型(boolean)：false；引用数据类型(类、数组、接口)：null</li>
<li>局部变量：没有默认初始值。意味着，我们在调用局部变量之前，一定要显式赋值。特别地，形参在调用时，我们赋值即可。</li>
</ul>
</li>
<li>在内存中加载的位置：属性加载在堆空间中(非static)；局部变量加载在栈空间</li>
</ul>
</li>
</ul>
<h3 id="_4、类的成员之二-方法" tabindex="-1"><a class="header-anchor" href="#_4、类的成员之二-方法" aria-hidden="true">#</a> 4、类的成员之二：方法</h3>
<h4 id="方法的声明" tabindex="-1"><a class="header-anchor" href="#方法的声明" aria-hidden="true">#</a> 方法的声明</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>权限修饰符 返回值类型 方法名<span class="token punctuation">(</span>形参列表<span class="token punctuation">)</span><span class="token punctuation">{</span>
  方法体
<span class="token punctuation">}</span>
<span class="token comment">// 注意：static、final、abstract来修饰的方法，后面再讲</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="返回值类型-有返回值-vs-没有返回值" tabindex="-1"><a class="header-anchor" href="#返回值类型-有返回值-vs-没有返回值" aria-hidden="true">#</a> 返回值类型：有返回值 VS 没有返回值</h4>
<ul>
<li>如果方法有返回值，则必须在方法声明时，指定返回值的类型。同时，方法中，需要使用return关键字来返回指定类型的变量或常量：“return 数据”。</li>
<li>如果方法没有返回值，则方法声明时，使用void来表示。通常，没有返回值的方法中，就不需要使用return。但是，如果使用的话，只能“return;”表示结束此方法的意思。</li>
</ul>
<h4 id="return-关键字的使用" tabindex="-1"><a class="header-anchor" href="#return-关键字的使用" aria-hidden="true">#</a> return 关键字的使用</h4>
<ul>
<li>使用范围：使用在方法体中</li>
<li>作用：1、结束方法；2、针对于有返回值类型的方法，使用&quot;return 数据&quot;方法返回所要的数据。</li>
<li>注意点：return关键字后面不可以声明执行语句。</li>
</ul>
<h4 id="方法的使用" tabindex="-1"><a class="header-anchor" href="#方法的使用" aria-hidden="true">#</a> 方法的使用</h4>
<ul>
<li>方法的使用中，可以调用当前类的属性或方法。特殊的，方法A中又调用了方法A：递归方法</li>
<li>方法中不可以定义方法。</li>
</ul>
<h4 id="理解-万事万物皆对象" tabindex="-1"><a class="header-anchor" href="#理解-万事万物皆对象" aria-hidden="true">#</a> 理解“万事万物皆对象”</h4>
<ul>
<li>在Java语言范畴中，我们都将功能、结构等封装到类中，通过类的实例化，来调用具体的功能接口
<ul>
<li>Scanner, String等</li>
<li>文件：File</li>
<li>网络资源：URL</li>
</ul>
</li>
<li>涉及到Java与前端Html、后端的数据库交互时，前后端的结构在Java层面交互时，都体现为类和对象。</li>
</ul>
<h4 id="方法的重载-overload" tabindex="-1"><a class="header-anchor" href="#方法的重载-overload" aria-hidden="true">#</a> 方法的重载(overload)</h4>
<ul>
<li>重载的概念：在同一个类中，允许存在一个以上的同名方法，只要它们的参数个数或者参数类型不同即可。</li>
<li>重载的特点：与返回值类型无关，只看参数列表，且参数列表必须不同（参数个数或参数类型）。调用时，根据方法参数列表的不同来区分。</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 返回两个整数的和</span>
<span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">return</span> x<span class="token operator">+</span>y<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token comment">// 返回三个整数的和</span>
<span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> y<span class="token punctuation">,</span> <span class="token keyword">int</span> z<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">return</span> x<span class="token operator">+</span>y<span class="token operator">+</span>z<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token comment">// 返回两个小数的和</span>
<span class="token keyword">double</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">double</span> x<span class="token punctuation">,</span> <span class="token keyword">double</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">return</span> x<span class="token operator">+</span>y<span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="可变个数的形参" tabindex="-1"><a class="header-anchor" href="#可变个数的形参" aria-hidden="true">#</a> 可变个数的形参</h4>
<blockquote>
<p>JavaSE 5.0中提供了Varargs(variable number of arguments)机制，允许直接定义能和多个实参相匹配的形参。从而，可以用一种更简单的方式，来传递个数可以变的实参。</p>
</blockquote>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// JDK 5.0以前：采用数组形参来定义方法，传入多个同一类型的变量</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> books<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// JDK 5.0：采用可变个数形参来定义方法，传入多个同一类型变量</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>books<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>声明格式：方法名(参数的类型名...参数名)</li>
<li>可变参数：方法参数部分指定类型的参数个数是可变多个：0个，1个或多个</li>
<li>可变个数形参的方法和同名的方法之间，彼此构成重载</li>
<li>可变参数方法的使用与方法参数部分使用数组是一致的</li>
<li><strong>方法的参数部分有可变形参，需要放在形参声明的最后</strong></li>
<li>在一个方法的形参位置，最多只能声明一个可变个数形参</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">DemoTest</span> test <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DemoTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  test<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// show(int i)</span>
  test<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// show(String s)</span>
  test<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">,</span><span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// show(String ... s)</span>
  test<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// show(String ... s)</span>
  test<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span><span class="token string">"AA"</span><span class="token punctuation">,</span> <span class="token string">"BB"</span><span class="token punctuation">,</span> <span class="token string">"CC"</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// show(String ... s)</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"show(int i)"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"show(String s)"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token class-name">String</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"show(String ... s)"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="方法参数的值传递机制" tabindex="-1"><a class="header-anchor" href="#方法参数的值传递机制" aria-hidden="true">#</a> 方法参数的值传递机制</h4>
<p><strong>Java的实参值如何传入方法呢？</strong></p>
<ul>
<li>Java里方法的参数传递方式只有一种：值传递。即将实际参数值的副本(复制品)传入方法内，而参数本身不受影响。
<ul>
<li>形参是基本数据类型：将实参基本数据类型变量的“数据值”传递给形参</li>
<li>形参是引用数据类型：将实参引用数据类型变量的“地址值”传递给形参</li>
</ul>
</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//地址值</span>
<span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span><span class="token char">'a'</span><span class="token punctuation">,</span> <span class="token char">'b'</span><span class="token punctuation">,</span> <span class="token char">'c'</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// println()方法被重载，所以输出的不是地址值</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>arr1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//abc</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、面向对象特征之一-封装性" tabindex="-1"><a class="header-anchor" href="#_5、面向对象特征之一-封装性" aria-hidden="true">#</a> 5、面向对象特征之一：封装性</h3>
<h4 id="四种访问权限修饰符" tabindex="-1"><a class="header-anchor" href="#四种访问权限修饰符" aria-hidden="true">#</a> 四种访问权限修饰符</h4>
<ul>
<li>Java权限修饰符public、protected、private置于类的成员定义前，用来限定对象对该类成员的访问权限
| 修饰符 | 类内部 | 同一个包 | 不同包的子类 | 同一个工程 |
| --- | --- | --- | --- | --- |
| private | Yes |  |  |  |
| (缺省) | Yes | Yes |  |  |
| protected | Yes | Yes | Yes |  |
| public | Yes | Yes | Yes | Yes |</li>
</ul>
<p>对于class的权限修饰只可以用public和default(缺省)。</p>
<ul>
<li>public类可以在任意地方被访问。</li>
<li>default类只可以被同一个包内部的类访问。</li>
</ul>
<h4 id="什么是封装性" tabindex="-1"><a class="header-anchor" href="#什么是封装性" aria-hidden="true">#</a> 什么是封装性？</h4>
<ul>
<li>隐藏对象内部的复杂性，只对外公开简单的接口。便于外界调用，从而提高系统的可拓展性、可维护性。通俗的说，把该隐藏的隐藏起来，该暴露的暴露出去。这就是封装性的设计思想。</li>
</ul>
<h4 id="封装性的体现" tabindex="-1"><a class="header-anchor" href="#封装性的体现" aria-hidden="true">#</a> 封装性的体现</h4>
<ul>
<li>Java规定的四种权限（从小到大排列）：private、缺省、protected、public</li>
<li>4种权限可以修饰类及类的内部结构：属性、方法、构造器、内部类</li>
<li>具体的，4中权限都可以用来修饰类的内部结构：属性、方法、构造器、内部类；修饰类的话，只能使用：缺省、public</li>
</ul>
<blockquote>
<p>总结：Java提供了4种权限修饰符来修饰类及类的内部结构，体现类及类的内部结构在被调用时的可见性的大小</p>
</blockquote>
<h3 id="_6、类的成员之三-构造器" tabindex="-1"><a class="header-anchor" href="#_6、类的成员之三-构造器" aria-hidden="true">#</a> 6、类的成员之三：构造器</h3>
<p>构造器的作用</p>
<ul>
<li>创建对象</li>
<li>初始化对象的信息</li>
</ul>
<p>说明</p>
<ul>
<li>如果没有显示的定义类的构造器的话，则系统默认提供一个空参的构造器，默认构造器的权限修饰符与类修饰符一致</li>
<li>定义构造器的格式：权限修饰符 类名(形参列表){}</li>
<li>一个类中定义的多个构造器，彼此构成重载</li>
<li>一旦我们显式的定义了类的构造器之后，系统就不再提供默认的空参构造器</li>
<li>一个类中，至少会有一个构造器</li>
</ul>
<p>属性赋值的过程</p>
<ul>
<li>默认初始化</li>
<li>显式初始化</li>
<li>构造器中的初始化</li>
<li>通过“对象.属性”或“对象.方法”的方式赋值</li>
</ul>
<h3 id="_7、拓展知识" tabindex="-1"><a class="header-anchor" href="#_7、拓展知识" aria-hidden="true">#</a> 7、拓展知识</h3>
<p>JavaBean</p>
<ul>
<li>JavaBean是一种Java语言写成的可重用组件。</li>
<li>所谓JavaBean，是指符合如下标准的Java类：
<ul>
<li>类是公共的</li>
<li>有一个无参的公共的构造器</li>
<li>有属性，且有对应的get、set方法</li>
</ul>
</li>
</ul>
<p>UML类图</p>
<ul>
<li><code v-pre>+</code>表示public类型，<code v-pre>-</code>表示private类型，<code v-pre>#</code>表示protected类型</li>
<li>方法的写法：方法的类型(+、-) 方法名(参数名: 参数类型): 返回值类型</li>
<li>属性：<code v-pre>:</code>前是属性名，<code v-pre>:</code>后是属性的类型</li>
</ul>
<h3 id="_8、关键字-this" tabindex="-1"><a class="header-anchor" href="#_8、关键字-this" aria-hidden="true">#</a> 8、关键字：this</h3>
<ul>
<li>this可以用来修饰、调用：属性、方法、构造器</li>
<li>this修饰属性和方法时可以理解为：当前对象或当前正在创建的对象
<ul>
<li>在类的方法中，我们可以使用“this.属性”或者“this.方法”的方式，调用当前对象属性或方法。但是通常情况下，我们都选择省略&quot;this.&quot;。特殊情况下，如果方法的形参和类的属性同名时，我们必须显示的使用“this.变量”的方式，表明此变量是属性，而非形参。</li>
<li>在类的构造器中，我们可以使用“this.属性”或“this.方法”的方式，调用当前正在创建的对象属性或方法，但是通常情况下，我们都选择省略&quot;this.&quot;。特殊情况下，如果构造器的形参和类的属性同名时，我们必须显式的使用“this.变量”的方式，表明此变量是属性，而非形参。</li>
</ul>
</li>
<li>this调用构造器
<ul>
<li>我们在类的构造器中，可以显式的使用“this(形参列表)”方式，调用本类中指定的其他构造器</li>
<li>构造器中不能通过“this(形参列表)”方式调用自己</li>
<li>如果一个类中有n个构造器，则最多有n-1个构造器中使用了“this(形参列表)”</li>
<li>规定，“this(形参列表)”必须声明在当前构造器的首行，因此构造器内部，最多只能声明一个“this(形参列表)”，用来调用其他的构造器</li>
</ul>
</li>
</ul>
<h3 id="_9、关键字-package" tabindex="-1"><a class="header-anchor" href="#_9、关键字-package" aria-hidden="true">#</a> 9、关键字：package</h3>
<ul>
<li>为了更好的实现项目中类的管理，提供了包的概念</li>
<li>使用package声明类或接口所属的包，声明在源文件的首行</li>
<li>包，属于标识符，遵循标识符的命名规则、规范(xxxyyyzzz)、“见名知意”</li>
<li>每“.”一次，就表示一层文件目录</li>
</ul>
<blockquote>
<p>补充：同一个包下，不能命名同名的接口、类；不同包下，可以命名同名的接口、类。</p>
</blockquote>
<h3 id="_10、关键字-import" tabindex="-1"><a class="header-anchor" href="#_10、关键字-import" aria-hidden="true">#</a> 10、关键字：import</h3>
<ul>
<li>在源文件中使用import显示的导入指定包下的类或接口</li>
<li>声明在包的声明和类的声明之间</li>
<li>如果需要导入多个类或者接口，那么就并列显式多个import语句即可</li>
<li>举例：可以使用java.util.*的方式，一次性导入util包下的所有的类或接口</li>
<li>如果导入的类或接口是java.lang包下的，或者是当前包下的，则可以省略此import语句</li>
<li>如果在代码中使用不同包下的同名的类。那么就需要使用类的全类名的方式指明调用的是哪个类</li>
<li>如果已导入java.a包下的类。那么如果需要使用a包的子包下的类的话，仍然需要导入。</li>
<li>import static组合的使用：调用指定类或接口下的静态的属性或方法</li>
</ul>
<h3 id="_11、面向对象特征之二-继承性" tabindex="-1"><a class="header-anchor" href="#_11、面向对象特征之二-继承性" aria-hidden="true">#</a> 11、面向对象特征之二：继承性</h3>
<h4 id="继承性的好处" tabindex="-1"><a class="header-anchor" href="#继承性的好处" aria-hidden="true">#</a> 继承性的好处</h4>
<ul>
<li>减少了代码的冗余，提高了代码的复用性</li>
<li>便于功能的拓展</li>
<li>为之后多态性的使用，提供了前提</li>
</ul>
<h4 id="继承性的说明" tabindex="-1"><a class="header-anchor" href="#继承性的说明" aria-hidden="true">#</a> 继承性的说明</h4>
<ul>
<li>继承性的格式： class A extends B{}</li>
<li>体现：一旦子类A继承父类B以后，子类A中就获取了父类B中的声明的所有的属性和方法。特别的，父类中声明为private的属性或方法，子类继承父类以后，仍然认为获取了父类中的私有的结构。只是因为封装性的影响，使得子类不能直接调用父类的结构而已。</li>
<li>子类继承父类以后，还可以声明自己特有的属性或方法：实现功能的拓展</li>
</ul>
<h4 id="java中关于继承性的规定" tabindex="-1"><a class="header-anchor" href="#java中关于继承性的规定" aria-hidden="true">#</a> Java中关于继承性的规定</h4>
<ul>
<li>一个类可以被多个子类继承</li>
<li>Java中类的单继承性：一个类只能有一个父类</li>
<li>子父类是相对的概念</li>
<li>子类直接继承的父类称为直接父类；间接继承的父类称为间接父类</li>
<li>子类继承父类以后，就获取了直接父类以及所有间接父类中声明的属性和方法</li>
</ul>
<p>补充说明</p>
<ul>
<li>如果我们没有显示的声明一个类的父类的话，则此类继承于java.lang.Object类</li>
<li>所有的java类（除java.lang.Object类之外）都直接或间接的继承于java.lang.Object类</li>
<li>意味着，所有的java类都具有java.lang.Object类声明的功能。</li>
</ul>
<h4 id="方法的重写-override-overwrite" tabindex="-1"><a class="header-anchor" href="#方法的重写-override-overwrite" aria-hidden="true">#</a> 方法的重写(override/overwrite)</h4>
<ul>
<li>重写：子类继承父类以后，可以对父类中同名同参数的方法，进行覆盖操作</li>
<li>应用：重写以后，当创建子类对象以后，通过子类对象调用子父类中的同名同参数的方法时，实际执行的是子类重写父类的方法</li>
<li>重写的规定
<ul>
<li>子类重写的方法的方法名和形参列表与父类被重写的方法的方法名和形参列表相同</li>
<li>子类重写的方法的权限修饰符不小于父类被重写的方法的权限修饰符
<ul>
<li>特殊情况：子类不能重写父类中声明为private权限的方法</li>
</ul>
</li>
<li>返回值类型：
<ul>
<li>父类被重写的方法的返回值类型是void，则子类重写的方法的返回值类型只能是void</li>
<li>父类被重写的方法的返回值类型是A类型，则子类重写的方法的返回值类型可以是A类或A类的子类</li>
<li>父类被重写的方法的返回值类型是基本数据类型(比如：double)，则子类重写的方法的返回值类型必须是相同的。</li>
</ul>
</li>
<li>子类重写的方法抛出的异常类型不大于父类被重写的方法抛出的异常类型</li>
<li>子类和父类中的同名同参数的方法要么都声明为非static的（考虑重写），要么都声明为static的（不是重写）。</li>
</ul>
</li>
</ul>
<h3 id="_12、关键字-super" tabindex="-1"><a class="header-anchor" href="#_12、关键字-super" aria-hidden="true">#</a> 12、关键字：super</h3>
<ul>
<li>super可以用来调用：属性、方法、构造器</li>
<li>super的使用
<ul>
<li>我们可以在子类的方法或构造器中。通过使用&quot;super.属性&quot;或&quot;super.方法&quot;的方式，显式的调用父类中声明的属性或方法。但是，通常情况下，我们习惯省略&quot;super.&quot;</li>
<li>特殊情况：当子类和父类中定义了同名的属性时，我们要想要在子类中调用父类中声明的属性，则必须显式的使用&quot;super.属性&quot;的方式，表明调用的是父类中声明的属性，否则默认是调用子类的属性。</li>
<li>特殊情况：当子类重写了父类中的方法以后，我们想在子类中的方法中调用父类中被重写的方法时，则必须显式使用&quot;super.方法&quot;的方式，表明调用的是父类中被重写的方法，否则默认是调用子类的方法。</li>
</ul>
</li>
<li>super调用构造器
<ul>
<li>我们可以在子类的构造器中显式的使用&quot;super(形参列表)&quot;的方式，调用父类中声明的指定的构造器</li>
<li>&quot;super(形参列表)&quot;的使用，必须声明在子类构造器的首行</li>
<li>我们在类的构造器中，针对于&quot;this(形参列表)&quot;或&quot;super(形参列表)&quot;只能二选一，不能同时出现</li>
<li>在构造器的首行，没有显示的声明&quot;this(形参列表)&quot;或&quot;super(形参列表)&quot;，则默认调用的是父类中的空参的构造器</li>
<li>在类的多个构造器中，至少有一个类的构造器中使用了&quot;super(形参列表)&quot;，调用父类中的构造器</li>
</ul>
</li>
</ul>
<h4 id="子类对象实例化的全过程" tabindex="-1"><a class="header-anchor" href="#子类对象实例化的全过程" aria-hidden="true">#</a> 子类对象实例化的全过程</h4>
<ul>
<li>从结果上来看：（继承性）
<ul>
<li>子类继承父类以后，就获取了父类中声明的属性或方法。</li>
<li>创建子类的对象，在堆空间中，就会加载所有父类中声明的属性</li>
</ul>
</li>
<li>从过程上来看：
<ul>
<li>当我们通过父类的构造器创建子类对象时，我们一定会直接或间接的调用其父类的构造器，进而调用父类的父类的构造器，直到调用了java.lang.Object类中空参的构造器为止。正因为加载过所有的父类的结构，所以才可以看到内存中有父类中的结构，子类对象才可以考虑进行调用。</li>
</ul>
</li>
<li>明确：虽然创建子类对象时，调用了父类的构造器，但是自始至终就创建过一个对象，即为new的子类对象。</li>
</ul>
<h3 id="_13、面向对象特征之三-多态性" tabindex="-1"><a class="header-anchor" href="#_13、面向对象特征之三-多态性" aria-hidden="true">#</a> 13、面向对象特征之三：多态性</h3>
<ul>
<li>理解多态性：可以理解为一个事物的多种形态。</li>
<li>何为多态性：
<ul>
<li>对象的多态性：父类的引用指向子类的对象（或子类的对象赋给父类的引用）</li>
</ul>
</li>
<li>多态的使用，虚拟方法调用
<ul>
<li>有了对象的多态性以后，我们在编译期，只能调用父类中声明的方法，但在运行期，我们实际执行的是子类重写父类的方法。</li>
<li>总结：编译，看左边；运行，看右边。</li>
</ul>
</li>
<li>多态性的使用前提：
<ul>
<li>类的继承关系</li>
<li>方法的重写</li>
</ul>
</li>
<li>对象的多态性，只适用于方法，不适用于属性（编译和运行都看左边）</li>
</ul>
<h4 id="区分方法的重载与重写" tabindex="-1"><a class="header-anchor" href="#区分方法的重载与重写" aria-hidden="true">#</a> 区分方法的重载与重写</h4>
<ul>
<li>二者定义的不同：
<ul>
<li>重载：在同一个类中，允许存在一个以上的同名方法，只要它们的参数个数或者参数类型不同即可。</li>
<li>重写：子类继承父类以后，可以对父类中同名同参数的方法，进行覆盖操作</li>
</ul>
</li>
<li>从编译和运行的角度看：
<ul>
<li>重载，是指允许存在多个同名方法，而这些方法的参数不同。编译器根据方法不同的参数表，对同名方法的名称做修饰。对于编译器而言，这些同名方法就成了不同的方法。它们的调用地址在编译期就绑定了。Java的重载是可以包括父类和子类的，即子类可以重载父类的同名不同参数的方法。</li>
<li>所以：对于重载而言，在方法调用之前，编译期就已经确定了所要调用的方法，这称为“早绑定”或“静态绑定”</li>
<li>而对于多态，只有等到方法调用的那一刻，解释器运行器才会确定所要调用的具体方法，这称为“晚绑定”或“动态绑定”。</li>
</ul>
</li>
</ul>
<h4 id="instanceof-操作符" tabindex="-1"><a class="header-anchor" href="#instanceof-操作符" aria-hidden="true">#</a> instanceof 操作符</h4>
<ul>
<li>instanceof 关键字的使用：a instanceof A：判断对象a是否是类A的实例。如果是，返回true；如果不是，返回false</li>
<li>使用情境： 为了避免在向下转型时出现ClassCastException的异常，我们在向下转型之前，先进行instanceof的判断，一旦返回true，就进行向下转型。如果返回false，就不进行向下转型。</li>
<li>如果类B是类A的父类，且a instanceof A返回true，则a instanceof B也返回true</li>
</ul>
<h4 id="和equals的区别" tabindex="-1"><a class="header-anchor" href="#和equals的区别" aria-hidden="true">#</a> ==和equals的区别</h4>
<ul>
<li>==既可以比较基本类型也可以比较引用类型。对于基本类型就是比较值，对于引用类型就是比较内存地址</li>
<li>equals的话，它是属于java.lang.Object类里面的方法，如果该方法没有被重写过默认也是==；我们可以看到String等类的equals方法是被重写过的，而且String类在日常开发中用的比较多，久而久之，形成了equals是比较值的错误观点</li>
<li>具体要看自定义类里有没有重写Object的equals方法来判断</li>
<li>通常情况下，重写equals方法，会比较类中的相应属性是否都相等</li>
</ul>
<h4 id="java中的junit单元测试" tabindex="-1"><a class="header-anchor" href="#java中的junit单元测试" aria-hidden="true">#</a> Java中的JUnit单元测试</h4>
<ul>
<li>创建Java类，进行单元测试。此时的Java类要求：
<ul>
<li>此类是public的</li>
<li>此类提供公共的无参的构造器</li>
</ul>
</li>
<li>此类中声明单元测试方法。此时的单元测试方法的权限是public，没有返回值，没有形参</li>
<li>此单元测试方法上需要声明注解：<a href="/Test">@Test </a></li>
<li>写完代码后，左键双击单元测试方法名，右键：run as - JUnit Test</li>
<li>说明：如果执行结果没有任何异常：绿条；如果执行结果出现异常：红条</li>
</ul>
<h3 id="_14、包装类-wrapper-的使用" tabindex="-1"><a class="header-anchor" href="#_14、包装类-wrapper-的使用" aria-hidden="true">#</a> 14、包装类(Wrapper)的使用</h3>
<table>
<thead>
<tr>
<th>基本数据类型</th>
<th>包装类</th>
</tr>
</thead>
<tbody>
<tr>
<td>byte</td>
<td>Byte</td>
</tr>
<tr>
<td>short</td>
<td>Short</td>
</tr>
<tr>
<td>int</td>
<td><strong>Integer</strong></td>
</tr>
<tr>
<td>long</td>
<td>Long</td>
</tr>
<tr>
<td>float</td>
<td>Float</td>
</tr>
<tr>
<td>double</td>
<td>Double</td>
</tr>
<tr>
<td>boolean</td>
<td>Boolean</td>
</tr>
<tr>
<td>char</td>
<td><strong>Character</strong></td>
</tr>
</tbody>
</table>
<blockquote>
<p>Byte、Short、Integer、Long、Float、Double的父类为Number；Boolean、Character的父类为Object</p>
</blockquote>
<h4 id="基本类型、包装类与string类间的转换" tabindex="-1"><a class="header-anchor" href="#基本类型、包装类与string类间的转换" aria-hidden="true">#</a> 基本类型、包装类与String类间的转换</h4>
<ul>
<li>基本数据类型 --&gt; 包装类：自动装箱</li>
<li>包装类 --&gt; 基本数据类型：自动拆箱</li>
<li>基本数据类型 --&gt; String类：String类的valueOf()方法</li>
<li>String类 --&gt; 基本数据类型：调用相应包装类的parseXxx(String)静态方法</li>
<li>包装类 --&gt; String类：包装类对象的toString()方法</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 使用parseBoolean时，如果s非空且在忽略大小写的情况下等于true，则返回true；否则返回false</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">parseBoolean</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">"true"</span><span class="token punctuation">.</span><span class="token function">equalsIgnoreCase</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 三元运算符运算过程中会尽量使两边的类型一致，所以new Integer(1)被自动提升了类型</span>
<span class="token class-name">Object</span> o1 <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token operator">?</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Double</span><span class="token punctuation">(</span><span class="token number">2.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>o1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1.0</span>

<span class="token class-name">Object</span> o2<span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  o2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  o2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Double</span><span class="token punctuation">(</span><span class="token number">2.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>o2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Integer内部定义了IntegerCache结构，IntegerCache中定义了Integer[]，保存了从-128到127范围的整数。如果我们使用自动装箱的方式，给Integer赋值的范围在-128到127范围内时，可以直接使用数组中的元素，不用再去new了。目的为了提高效率</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Integer</span> i <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Integer</span> j <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i <span class="token operator">==</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// false</span>

<span class="token class-name">Integer</span> m <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token class-name">Integer</span> n <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>m <span class="token operator">==</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// true</span>

<span class="token class-name">Integer</span> x <span class="token operator">=</span> <span class="token number">128</span><span class="token punctuation">;</span>
<span class="token class-name">Integer</span> y <span class="token operator">=</span> <span class="token number">128</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>x <span class="token operator">==</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_15、关键字-static" tabindex="-1"><a class="header-anchor" href="#_15、关键字-static" aria-hidden="true">#</a> 15、关键字：static</h3>
<ul>
<li>使用static修饰属性：静态变量（或类变量）
<ul>
<li>属性，按是否使用static修饰，又分为：静态属性 vs 非静态属性（实例变量）
<ul>
<li>实例变量：我们创建了类的多个对象，每个对象都独立拥有一套类中的非静态属性。当修改其中一个对象的非静态属性时，不会导致其他对象中同样的属性值修改</li>
<li>静态变量：我们创建了类的多个对象，多个对象共享同一个静态变量。当通过某一个对象修改静态变量时，会导致其他对象调用此静态变量时，是修改过了的</li>
</ul>
</li>
<li>static修饰属性的其他说明
<ul>
<li>静态变量随着类的加载而加载。可以通过&quot;类.静态变量&quot;的方式进行调用</li>
<li>静态变量的加载要早于对象的创建</li>
<li>由于类只会加载一次，则静态变量在内存中也只会存在一份：存在方法区的静态域中</li>
</ul>
</li>
</ul>
</li>
<li>使用static修饰方法：静态方法
<ul>
<li>随着类的加载而加载，可以通过&quot;类.静态方法&quot;的方式进行调用</li>
<li>静态方法中，只能调用静态的方法或属性；非静态方法中，既可以调用非静态的方法或属性，也可以调用静态的方法或属性</li>
</ul>
</li>
<li>static注意点
<ul>
<li>在静态的方法内，不能使用this关键字、super关键字</li>
</ul>
</li>
<li>开发中，如何确定一个属性是否要声明为static的？
<ul>
<li>属性可以被多个对象所共享的，不会随着对象的不同而不同</li>
<li>类中的常量也常常声明为static</li>
</ul>
</li>
<li>开发中，如何确定一个方法是否要声明为static的？
<ul>
<li>操作静态属性的方法，通常设置为static的</li>
<li>工具类中的方法，习惯上声明为static的</li>
</ul>
</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * 单例设计模式：
 * 1、所谓的类的单例设计模式，就是采取一定的方法保证在整个的软件系统中，对某个类只能存在一个对象实例。
 * 2、如何实现？
 * 	饿汉式 vs 懒汉式
 * 3、区分饿汉式和懒汉式
 * 	饿汉式：
 * 		坏处：对象加载时间过长。
 * 		好处：饿汉式是线程安全的
 * 	懒汉式：
 * 		好处：延迟对象的创建。
 * 		目前的写法坏处：线程不安全。(到多线程内容时，再修改)
 */</span>

<span class="token comment">// 饿汉式</span>
<span class="token keyword">class</span> <span class="token class-name">Bank</span> <span class="token punctuation">{</span>
	<span class="token comment">// 1、私有化类的构造器</span>
	<span class="token keyword">private</span> <span class="token class-name">Bank</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		
	<span class="token punctuation">}</span>
	<span class="token comment">// 2、内部创建类的对象</span>
	<span class="token comment">// 4、要求此对象也必须声明为静态的</span>
	<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Bank</span> instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bank</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 3、提供公共的静态的方法，返回类的对象</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Bank</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> instance<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 懒汉式</span>
<span class="token keyword">class</span> <span class="token class-name">Order</span> <span class="token punctuation">{</span>
	<span class="token comment">// 1、私有化类的构造器</span>
	<span class="token keyword">private</span> <span class="token class-name">Order</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		
	<span class="token punctuation">}</span>
	<span class="token comment">// 2、声明当前类对象，没有初始化</span>
	<span class="token comment">// 4、此对象也必须声明为static的</span>
	<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Order</span> instance <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token comment">// 3、声明public、static的返回当前类对象的方法</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Order</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Order</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> instance<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_16、类的成员之四-代码块-或初始化块" tabindex="-1"><a class="header-anchor" href="#_16、类的成员之四-代码块-或初始化块" aria-hidden="true">#</a> 16、类的成员之四：代码块（或初始化块）</h3>
<ul>
<li>代码块的作用：用来初始化类、对象</li>
<li>代码块如果有修饰的话，只能使用static</li>
<li>分类：静态代码块 VS 非静态代码块</li>
<li>静态代码块
<ul>
<li>内部可以有输出语句</li>
<li>随着类的加载而执行，而且只执行一次</li>
<li>作用：初始化类的信息</li>
<li>如果一个类中定义了多个静态代码块，则按照声明的先后顺序执行</li>
<li>静态代码块的执行要优先于非静态代码块的执行</li>
<li>静态代码块内只能调用静态的属性、静态的方法，不能调用非静态的结构</li>
</ul>
</li>
<li>非静态代码块
<ul>
<li>内部可以有输出语句</li>
<li>随着对象的创建而执行</li>
<li>每创建一个对象，就执行一次非静态代码块</li>
<li>作用：可以在创建对象时，对对象的属性等进行初始化</li>
<li>如果一个类中定义了多个非静态代码块，则按照声明的先后顺序执行</li>
<li>非静态代码块内可以调用静态的属性、静态的方法，或非静态的属性、非静态的方法</li>
</ul>
</li>
</ul>
<blockquote>
<p>总结：由夫及子，静态先行</p>
</blockquote>
<h4 id="属性赋值的过程" tabindex="-1"><a class="header-anchor" href="#属性赋值的过程" aria-hidden="true">#</a> 属性赋值的过程</h4>
<ul>
<li>默认初始化</li>
<li>显式初始化/在代码块中赋值</li>
<li>构造器中初始化</li>
<li>有了对象以后，可以通过&quot;对象.属性&quot;或&quot;对象.方法&quot;的方式，进行赋值</li>
</ul>
<blockquote>
<p>显式初始化和在代码块中赋值的顺序先后取决于代码先后顺序</p>
</blockquote>
<h3 id="_17、关键字-final" tabindex="-1"><a class="header-anchor" href="#_17、关键字-final" aria-hidden="true">#</a> 17、关键字：final</h3>
<ul>
<li>final可以用来修饰的结构：类、方法、变量</li>
<li>final用来修饰一个类：此类不能被其他类所继承。</li>
<li>final用来修饰方法：表明此方法不可以被重写</li>
<li>final用来修饰变量：此时的&quot;变量&quot;就称为是一个常量
<ul>
<li>final修饰属性：可以考虑赋值的位置有：显示初始化、代码块中初始化、构造器中初始化</li>
<li>final修饰局部变量：尤其是使用final修饰形参时，表明此形参是一个常量。当我们调用此方法时，给常量形参赋一个实参。一旦赋值以后，就只能在方法体内使用此形参，但不能进行重新赋值。</li>
</ul>
</li>
</ul>
<blockquote>
<p>static final 用来修饰属性：全局变量</p>
</blockquote>
<h3 id="_18、关键字-abstract" tabindex="-1"><a class="header-anchor" href="#_18、关键字-abstract" aria-hidden="true">#</a> 18、关键字：abstract</h3>
<ul>
<li>abstract可以用来修饰的结构：类、方法</li>
<li>abstract修饰类：抽象类
<ul>
<li>此类不能实例化</li>
<li>抽象类中一定要有构造器，便于子类实例化时调用(涉及：子类对象实例化的全过程)</li>
<li>开发中，都会提供抽象类的子类，让子类对象实例化，完成相关的操作</li>
</ul>
</li>
<li>abstract修饰方法：抽象方法
<ul>
<li>抽象方法只要方法的声明，没有方法体</li>
<li>包含抽象方法的类，一定是一个抽象类。反之，抽象类中可以没有抽象方法的。</li>
<li>若子类重写了父类中的所有抽象方法后，此子类才可以实例化；若子类没有重写父类中的所有的抽象方法，则此子类也是一个抽象类，需要使用abstract修饰</li>
</ul>
</li>
</ul>
<blockquote>
<p>注意点：abstract不能用来修饰：属性、构造器等结构；abstract不能用来修饰私有方法、静态方法、final的方法、final的类</p>
</blockquote>
<h4 id="匿名对象" tabindex="-1"><a class="header-anchor" href="#匿名对象" aria-hidden="true">#</a> 匿名对象</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">method</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//匿名对象</span>

<span class="token class-name">Worker</span> worker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">method1</span><span class="token punctuation">(</span>worker<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//非匿名的类非匿名的对象</span>

<span class="token function">method1</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//非匿名的类匿名的对象</span>

<span class="token comment">// 创建匿名子类的非匿名对象</span>
<span class="token class-name">Person</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"吃东西"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 创建匿名子类的匿名对象</span>
<span class="token function">method1</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"吃东西"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_19、关键字-interface" tabindex="-1"><a class="header-anchor" href="#_19、关键字-interface" aria-hidden="true">#</a> 19、关键字：interface</h3>
<ul>
<li>Java中，接口和类是并列的两个结构</li>
<li>如何定义接口，定义接口中的成员
<ul>
<li>JDK7及以前：只能定义全局变量和抽象方法
<ul>
<li>全局常量：public static final的，但是书写时，可以省略不写</li>
<li>抽象方法：public abstract的</li>
</ul>
</li>
<li>JDK8：除了定义全局常量和抽象方法之外，还可以定义静态方法、默认方法</li>
</ul>
</li>
<li>接口中不能定义构造器！意味着接口不可以实例化</li>
<li>Java开发中，接口通过让类去实现(implements)的方式来使用。如果实现类覆盖了接口中的所有抽象方法，则此实现类就可以实例化；如果实现类没有覆盖接口中所有的抽象方法，则此实现类仍为一个抽象类。</li>
<li>Java类可以实现多个接口：弥补了Java单继承性的局限性。格式：class AA extends BB implements CC,DD,EE</li>
<li>接口与接口之间可以继承，而且可以多继承。格式：interface AA extends BB,CC</li>
<li>接口的具体使用，体现了多态性</li>
<li>接口，实际上可以看做是一种规范</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">interface</span> <span class="token class-name">Flyable</span> <span class="token punctuation">{</span>
  <span class="token comment">// 全局变量</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> MAX_SPEED <span class="token operator">=</span> <span class="token number">7900</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> MIN_SPEED <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 省略了public static final</span>

  <span class="token comment">// 抽象方法</span>
  <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 省略了public abstract</span>
  <span class="token keyword">void</span> <span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// Interfaces cannot have constructors</span>
  <span class="token comment">// public Flyable() {}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">interface</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">C</span> <span class="token keyword">extends</span> <span class="token class-name">B</span> <span class="token keyword">implements</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">pX</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 编译不通过，因为x是不明确的</span>
    <span class="token comment">// System.out.println(x);</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">super</span><span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">A</span><span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>JDK8：除了定义全局常量和抽象方法之外，还可以定义静态方法、默认方法</p>
</blockquote>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">CompareA</span> <span class="token punctuation">{</span>
  <span class="token comment">// 静态方法</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">method1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"CompareA：北京"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 默认方法</span>
  <span class="token keyword">public</span> <span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">method2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"CompareA：上海"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">method3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"CompareA：上海"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SubClass</span> <span class="token keyword">extends</span> <span class="token class-name">SuperClass</span> <span class="token keyword">implements</span> <span class="token class-name">CompareA</span><span class="token punctuation">,</span> <span class="token class-name">CompareB</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"SubClass：上海"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"SubClass：深圳"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 知识点5：如何在子类(或实现类)的方法中调用父类、接口中被重写的方法</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">myMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">method3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//调用了自己定义的重写的方法</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">method3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//调用的是父类中声明的</span>
    <span class="token comment">//调用接口中的默认方法</span>
    <span class="token class-name">CompareA</span><span class="token punctuation">.</span><span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">method3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">CompareB</span><span class="token punctuation">.</span><span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">method3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SubClassTest</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">SubClass</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SubClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 知识点1：接口中定义的静态方法，只能通过接口来调用</span>
    <span class="token comment">// s.method1(); // 编译错误</span>
    <span class="token comment">// SubClass.method1(); // 编译错误</span>
    <span class="token class-name">CompareA</span><span class="token punctuation">.</span><span class="token function">method1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 知识点2：通过实现类的对象，可以调用接口中的默认方法。</span>
    <span class="token comment">// 如果实现类重写了接口中的默认方法，调用时，仍然调用的是重写以后的方法。</span>
    s<span class="token punctuation">.</span><span class="token function">method2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 知识点3：如果子类（或实现类）继承的父类和实现的接口中声明了同名同参数的默认方法,</span>
    <span class="token comment">// 那么子类在没有重写此方法的情况下，默认调用的是父类中的同名同参数的方法(类优先原则)。</span>
    <span class="token comment">// 知识点4：如果实现类实现了多个接口，而这多个接口中定义了同名同参数的默认方法，</span>
    <span class="token comment">//那么在实现类没有重写此方法的情况下，会报错——接口冲突</span>
    <span class="token comment">//这就需要我们必须在实现类中重写此方法</span>
    s<span class="token punctuation">.</span><span class="token function">method3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_20、类的内部成员之五-内部类" tabindex="-1"><a class="header-anchor" href="#_20、类的内部成员之五-内部类" aria-hidden="true">#</a> 20、类的内部成员之五：内部类</h3>
<ul>
<li>Java中允许将一个类A声明在另一个类B中，则类A就是内部类，类B称为外部类</li>
<li>内部类的分类：成员内部类（静态、非静态） VS 局部内部类（方法内、代码块内、构造器内）</li>
<li>成员内部类：
<ul>
<li>作为外部类的成员：
<ul>
<li>调用外部类的结构</li>
<li>可以被static修饰</li>
<li>可以被4种不同的权限修饰</li>
</ul>
</li>
<li>作为一个类：
<ul>
<li>类内可以定义属性、方法、构造器等</li>
<li>可以被final修饰，表示此类不能被继承。言外之意，不使用final就可以被继承</li>
<li>可以被abstract修饰</li>
</ul>
</li>
</ul>
</li>
<li>如何实例化成员内部类的对象</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 创建Dog实例（静态的成员内部类）：</span>
<span class="token class-name">Person<span class="token punctuation">.</span>Dog</span> dog <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person<span class="token punctuation">.</span>Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dog<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 创建Bird实例（非静态的成员内部类）：</span>
<span class="token comment">// Person.Bird bird = new Person.Bird(); // 编译错误</span>
<span class="token class-name">Person</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Person<span class="token punctuation">.</span>Bird</span> bird <span class="token operator">=</span> p<span class="token punctuation">.</span><span class="token keyword">new</span> <span class="token class-name">Bird</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bird<span class="token punctuation">.</span><span class="token function">sing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>如何在成员内部类中区分调用外部类的结构</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sing</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 调用外部类的非静态方法</span>
  <span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 调用外部类的非静态属性</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">display</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 方法的形参</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 内部类的属性</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 外部类的属性</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>开发中局部内部类的使用</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">Comparable</span> <span class="token function">getComparable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Comparable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compareTo</span><span class="token punctuation">(</span><span class="token class-name">Object</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>在局部内部类的方法中(比如：show)，如果要调用外部类所声明的方法(比如：method)中的局部变量(比如：num)的话，要求此局部变量声明为final的。
<ul>
<li>JDK 7及之前版本：要求此局部变量显式的声明为final的</li>
<li>JDK 8及之后版本：可以省略final的声明</li>
</ul>
</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//局部变量-JDK 8及之后，final可以省略</span>
  <span class="token keyword">final</span> <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
  <span class="token keyword">class</span> <span class="token class-name">AA</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> show <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// num = 20;</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>成员内部类和局部内部类，在编译之后，都会生成字节码文件。格式：
<ul>
<li>成员内部类：外部类$内部类名.class</li>
<li>局部内部类：外部类$数字 内部类名.class</li>
</ul>
</li>
</ul>
</div></template>
