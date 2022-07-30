<template><div><p>反射</p>
<!-- more -->
<h1 id="_11-反射" tabindex="-1"><a class="header-anchor" href="#_11-反射" aria-hidden="true">#</a> 11.反射</h1>
<h3 id="_1、反射的概述" tabindex="-1"><a class="header-anchor" href="#_1、反射的概述" aria-hidden="true">#</a> 1、反射的概述</h3>
<h4 id="_1-1、本章的主要内容" tabindex="-1"><a class="header-anchor" href="#_1-1、本章的主要内容" aria-hidden="true">#</a> 1.1、本章的主要内容</h4>
<ul>
<li>Java反射机制概述</li>
<li>理解Class类并获取Class实例</li>
<li>类的加载与ClassLoader的理解</li>
<li>创建运行时类的对象</li>
<li>获取运行时类的完成结构</li>
<li>调用运行时类的指定结构</li>
<li>反射的应用：动态代理</li>
</ul>
<h4 id="_1-2、关于反射的理解" tabindex="-1"><a class="header-anchor" href="#_1-2、关于反射的理解" aria-hidden="true">#</a> 1.2、关于反射的理解</h4>
<ul>
<li>Reflection（反射）是被视为动态语言的关键，反射机制允许程序在执行期借助于Reflection API取得任何类的内部信息，并能直接操作任意对象的内容属性及方法。</li>
</ul>
<p>框架 = 反射 + 注解 + 设计模式
<img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2025/image-20220614103131946.png#crop=0&amp;crop=0&amp;crop=1&amp;crop=1&amp;id=r9oQq&amp;originHeight=548&amp;originWidth=1143&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;title=" alt="" loading="lazy"></p>
<h4 id="_1-3、体会反射机制的-动态性" tabindex="-1"><a class="header-anchor" href="#_1-3、体会反射机制的-动态性" aria-hidden="true">#</a> 1.3、体会反射机制的“动态性”</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * 体会反射的动态性
 */</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> test2 <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> classPath <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
        <span class="token keyword">switch</span> <span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token number">0</span><span class="token operator">:</span>
                classPath <span class="token operator">=</span> <span class="token string">"java.util.Date"</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
                classPath <span class="token operator">=</span> <span class="token string">"java.lang.Object"</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span>
                classPath <span class="token operator">=</span> <span class="token string">"com.atguigu.java.Person"</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Object</span> obj <span class="token operator">=</span> <span class="token function">getInstance</span><span class="token punctuation">(</span>classPath<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * 创建一个指定类的对象
 * <span class="token keyword">@param</span> <span class="token parameter">classPath</span> 指定类的全类名
*/</span>
<span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token class-name">String</span> classPath<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
<span class="token class-name">Class</span> clazz <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span>classPath<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span>  clazz<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-4、反射机制能提供的功能" tabindex="-1"><a class="header-anchor" href="#_1-4、反射机制能提供的功能" aria-hidden="true">#</a> 1.4、反射机制能提供的功能</h4>
<ul>
<li>在运行时判断任意一个对象所属的类</li>
<li>在运行时构造任意一个类的对象</li>
<li>在运行时判断任意一个类所具有的成员变量和方法</li>
<li>在运行时获取泛型信息</li>
<li>在运行时调用任意一个对象的成员变量和方法</li>
<li>在运行时处理注解</li>
<li>生成动态代理</li>
</ul>
<h4 id="_1-5、相关api" tabindex="-1"><a class="header-anchor" href="#_1-5、相关api" aria-hidden="true">#</a> 1.5、相关API</h4>
<ul>
<li>java.lang.Class：反射的源头</li>
<li>java.lang.reflect.Method</li>
<li>java.lang.reflect.Field</li>
<li>java.lang.reflect.Constructor</li>
</ul>
<h3 id="_2、class类的理解与获取class的实例" tabindex="-1"><a class="header-anchor" href="#_2、class类的理解与获取class的实例" aria-hidden="true">#</a> 2、Class类的理解与获取Class的实例</h3>
<h4 id="_2-1、class类的理解" tabindex="-1"><a class="header-anchor" href="#_2-1、class类的理解" aria-hidden="true">#</a> 2.1、Class类的理解</h4>
<ul>
<li>类的加载过程
<ul>
<li>程序经过javac.exe命令以后，会生成一个或多个字节码文件(.class结尾)。接着我们使用java.exe命令对某个字节码文件进行解释运行。相当于将某个字节码文件加载到内存中。此过程就称为类的加载。加载到内存中的类，我们就称为运行时类，此运行时类，就作为Class的一个实例。</li>
</ul>
</li>
<li>换句话说，Class的实例就对应着一个运行时类</li>
<li>加载到内存中的运行时类，会缓存一定的时间。在此时间之内，我们可以通过不同的方式来获取此运行时类。</li>
</ul>
<h4 id="_2-2、获取class实例的几种方式" tabindex="-1"><a class="header-anchor" href="#_2-2、获取class实例的几种方式" aria-hidden="true">#</a> 2.2、获取Class实例的几种方式</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ClassNotFoundException</span> <span class="token punctuation">{</span>
    <span class="token comment">// 方式一：调用运行时类的属性：.class</span>
    <span class="token class-name">Class</span> clazz1 <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>clazz1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 方式二：通过运行时类的对象，调用getClass()</span>
    <span class="token class-name">Person</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Class</span> clazz2 <span class="token operator">=</span> p1<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>clazz2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 方式三：调用Class的静态方法：forName(String classPath)</span>
    <span class="token class-name">Class</span> clazz3 <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">"com.atguigu.java.Person"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>clazz3<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 方式四：使用类的加载器：ClassLoader(了解)</span>
    <span class="token class-name">ClassLoader</span> classLoader <span class="token operator">=</span> <span class="token class-name">ReflectionTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Class</span> clazz4 <span class="token operator">=</span> classLoader<span class="token punctuation">.</span><span class="token function">loadClass</span><span class="token punctuation">(</span><span class="token string">"com.atguigu.java.Person"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>clazz4<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>clazz1 <span class="token operator">==</span> clazz2<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// true</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>clazz1 <span class="token operator">==</span> clazz3<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// true</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>clazz1 <span class="token operator">==</span> clazz4<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-3、总结-创建类的对象的方式" tabindex="-1"><a class="header-anchor" href="#_2-3、总结-创建类的对象的方式" aria-hidden="true">#</a> 2.3、总结：创建类的对象的方式</h4>
<ul>
<li>方式一：new + 构造器</li>
<li>方式二：要创建Xxx类的对象，可以考虑：Xxx、Xxxs、XxxFactory、XxxBuilder类中查看是否有静态方法的存在。可以调用其静态方法，创建Xxx对象</li>
<li>方式三：通过反射</li>
</ul>
<h4 id="_2-4、class实例可以是哪些结构的说明" tabindex="-1"><a class="header-anchor" href="#_2-4、class实例可以是哪些结构的说明" aria-hidden="true">#</a> 2.4、Class实例可以是哪些结构的说明</h4>
<ul>
<li>class：外部类，成员（成员内部类，静态内部类），局部内部类，匿名内部类</li>
<li>interface：接口</li>
<li>[]：数组</li>
<li>enum：枚举</li>
<li>annotation：注解<a href="/interface">@interface </a></li>
<li>primitive type：基本数据类型</li>
<li>void</li>
</ul>
<h3 id="_3、了解classloader" tabindex="-1"><a class="header-anchor" href="#_3、了解classloader" aria-hidden="true">#</a> 3、了解ClassLoader</h3>
<h4 id="_3-1、类的加载过程-了解" tabindex="-1"><a class="header-anchor" href="#_3-1、类的加载过程-了解" aria-hidden="true">#</a> 3.1、类的加载过程（了解）</h4>
<ul>
<li>当程序主动使用某个类时，如果该类还未被加载到内存中，则系统会通过如下三个步骤来对该类进行初始化。
<ul>
<li>类的加载：将类的class文件读入内存，并为之创建一个java.lang.Class对象。此过程由类加载器完成</li>
<li>类的链接：将类的二进制数据合并到JRE中</li>
<li>类的初始化：JVM负责对类进行初始化</li>
</ul>
</li>
</ul>
<h4 id="_3-2、类的加载器的作用" tabindex="-1"><a class="header-anchor" href="#_3-2、类的加载器的作用" aria-hidden="true">#</a> 3.2、类的加载器的作用</h4>
<ul>
<li>类加载的作用：将class文件字节码内容加载到内存中，并将这些静态数据转换成方法区的运行时数据结构，然后在堆中生成一个代表这个类的java.lang.Class对象，作为方法区中类数据的访问入口。</li>
<li>类缓存：标准的JavaSE类加载器可以按要求查找类，但一旦某个类被加载到类加载器中，它将维持加载（缓存）一段时间。不过JVM垃圾回收机制可以回收这些Class对象。</li>
</ul>
<h4 id="_3-3、类的加载器的分类" tabindex="-1"><a class="header-anchor" href="#_3-3、类的加载器的分类" aria-hidden="true">#</a> 3.3、类的加载器的分类</h4>
<ul>
<li>引导类加载器：用C++编写的，是JVM自带的类加载器，<strong>负责Java平台核心库</strong>，用来装载核心类库。该加载器无法直接获取</li>
<li>扩展类加载器：负责jre/lib/ext目录下的jar包或-D java.ext.dirs指定目录下的jar包装入工作库</li>
<li>系统类加载器：负责java -classpath 或 -D java.class.path所指的目录下的类与jar包装入工作，是最常用的加载器</li>
</ul>
<h4 id="_3-4、java类编译、运行的执行过程" tabindex="-1"><a class="header-anchor" href="#_3-4、java类编译、运行的执行过程" aria-hidden="true">#</a> 3.4、Java类编译、运行的执行过程</h4>
<p><img src="https://cdn.nlark.com/yuque/0/2022/png/26424970/1655202380922-16dae19f-20bc-43da-9f1f-28c76c4d6031.png#clientId=u82e939a2-1a10-4&amp;crop=0&amp;crop=0&amp;crop=1&amp;crop=1&amp;from=paste&amp;height=94&amp;id=u4f1d8ab8&amp;name=image.png&amp;originHeight=94&amp;originWidth=956&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;size=10913&amp;status=done&amp;style=none&amp;taskId=ud8ba50bc-5aaa-4c95-8002-cd89e0571e7&amp;title=&amp;width=956" alt="image.png" loading="lazy"></p>
<h4 id="_3-5、使用classloader加载src目录下的配置文件" tabindex="-1"><a class="header-anchor" href="#_3-5、使用classloader加载src目录下的配置文件" aria-hidden="true">#</a> 3.5、使用Classloader加载src目录下的配置文件</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token class-name">Properties</span> pros <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 读取配置文件的方式一：</span>
    <span class="token comment">// FileInputStream fis = new FileInputStream("src\\jdbc1.properties");</span>
    <span class="token comment">// pros.load(fis);</span>
    <span class="token comment">// 读取配置文件的方式二：</span>
    <span class="token class-name">ClassLoader</span> classLoader <span class="token operator">=</span> <span class="token class-name">ClassLoaderTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">InputStream</span> is <span class="token operator">=</span> classLoader<span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span><span class="token string">"jdbc1.properties"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    pros<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>is<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">String</span> user <span class="token operator">=</span> pros<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">"user"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> password <span class="token operator">=</span> pros<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">"password"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"user = "</span> <span class="token operator">+</span> user <span class="token operator">+</span> <span class="token string">",password = "</span> <span class="token operator">+</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、反射应用一-创建运行时类的对象" tabindex="-1"><a class="header-anchor" href="#_4、反射应用一-创建运行时类的对象" aria-hidden="true">#</a> 4、反射应用一：创建运行时类的对象</h3>
<ul>
<li>newInstance()：调用此方法，创建对应的运行时类的对象。内部调用了运行时类的空参的构造器</li>
<li>要想此方法正常的创建运行时类的对象，要求：
<ul>
<li>1、运行时类必须提供空参的构造器</li>
<li>2、空参的构造器的访问权限得够。通常，设置为public</li>
</ul>
</li>
<li>在JavaBean中要求提供一个public的空参构造器。原因：
<ul>
<li>1、便于通过反射，创建运行时类的对象</li>
<li>2、便于子类继承此运行时类时，默认调用super()时，保证父类有此构造器</li>
</ul>
</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InstantiationException</span><span class="token punctuation">,</span> <span class="token class-name">IllegalAccessException</span> <span class="token punctuation">{</span>
    <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">></span></span> clazz <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>

    <span class="token class-name">Person</span> person <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、反射应用二-获取运行时类的完整结构" tabindex="-1"><a class="header-anchor" href="#_5、反射应用二-获取运行时类的完整结构" aria-hidden="true">#</a> 5、反射应用二：获取运行时类的完整结构</h3>
<h4 id="_5-1、获取属性" tabindex="-1"><a class="header-anchor" href="#_5-1、获取属性" aria-hidden="true">#</a> 5.1、获取属性</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Class</span> clazz <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
    <span class="token comment">// 获取属性结构</span>
    <span class="token comment">// getFields()：获取当前运行时类及其父类中声明为public访问权限的属性</span>
    <span class="token class-name">Field</span><span class="token punctuation">[</span><span class="token punctuation">]</span> fields <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getFields</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Field</span> f <span class="token operator">:</span> fields<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// getDeclaredFields()：获取当前运行时类中声明的所有属性。（不包含父类中声明的属性）</span>
    <span class="token class-name">Field</span><span class="token punctuation">[</span><span class="token punctuation">]</span> declaredFields <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getDeclaredFields</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Field</span> f <span class="token operator">:</span> declaredFields<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-2、获取方法" tabindex="-1"><a class="header-anchor" href="#_5-2、获取方法" aria-hidden="true">#</a> 5.2、获取方法</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> test1 <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Class</span> clazz <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
    <span class="token comment">// getMethods()：获取当前运行时类及其所有父类中声明为public权限的方法</span>
    <span class="token class-name">Method</span><span class="token punctuation">[</span><span class="token punctuation">]</span> methods <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getMethods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Method</span> m <span class="token operator">:</span> methods<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// getDeclaredMethods()：获取当前运行时类中声明的所有方法。（不包含父类中声明的方法）</span>
    <span class="token class-name">Method</span><span class="token punctuation">[</span><span class="token punctuation">]</span> declaredMethods <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getDeclaredMethods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Method</span> m <span class="token operator">:</span> declaredMethods<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-3、获取其他结构" tabindex="-1"><a class="header-anchor" href="#_5-3、获取其他结构" aria-hidden="true">#</a> 5.3、获取其他结构</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * 获取构造器结构
 */</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> test1 <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Class</span> clazz <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
    <span class="token comment">// getConstructors()：获取当前运行时类中声明为public的构造器</span>
    <span class="token class-name">Constructor</span><span class="token punctuation">[</span><span class="token punctuation">]</span> constructors <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getConstructors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Constructor</span> c <span class="token operator">:</span> constructors<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// getDeclaredConstructors()：获取当前运行时类中声明的所有构造器</span>
    <span class="token class-name">Constructor</span><span class="token punctuation">[</span><span class="token punctuation">]</span> declaredConstructors <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getDeclaredConstructors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Constructor</span> c <span class="token operator">:</span> declaredConstructors<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * 获取运行时类的父类
 */</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> test2 <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Class</span> clazz <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
    <span class="token class-name">Class</span> superclass <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getSuperclass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>superclass<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * 获取运行时类的带泛型的父类
 */</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> test3 <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Class</span> clazz <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
    <span class="token class-name">Type</span> genericSuperclass <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getGenericSuperclass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>genericSuperclass<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * 获取运行时类的带泛型的父类的泛型
 */</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> test4 <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Class</span> clazz <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
    <span class="token class-name">Type</span> genericSuperclass <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getGenericSuperclass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">ParameterizedType</span> paramType <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">ParameterizedType</span><span class="token punctuation">)</span> genericSuperclass<span class="token punctuation">;</span>
    <span class="token comment">// 获取泛型类型</span>
    <span class="token class-name">Type</span><span class="token punctuation">[</span><span class="token punctuation">]</span> actualTypeArguments <span class="token operator">=</span> paramType<span class="token punctuation">.</span><span class="token function">getActualTypeArguments</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Type</span> type <span class="token operator">:</span> actualTypeArguments<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>type<span class="token punctuation">.</span><span class="token function">getTypeName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * 获取运行时类实现的接口
 */</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> test5 <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Class</span> clazz <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
    <span class="token class-name">Class</span><span class="token punctuation">[</span><span class="token punctuation">]</span> interfaces <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getInterfaces</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Class</span> c <span class="token operator">:</span> interfaces<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//获取运行时类的父类实现的接口</span>
    <span class="token class-name">Class</span><span class="token punctuation">[</span><span class="token punctuation">]</span> interfaces1 <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getSuperclass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getInterfaces</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Class</span> c <span class="token operator">:</span> interfaces1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * 获取运行时类所在的包
 */</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> test6 <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Class</span> clazz <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
    <span class="token class-name">Package</span> pack <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getPackage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>pack<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * 获取运行时类声明的注解
 */</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> test7 <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Class</span> clazz <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
    <span class="token class-name">Annotation</span><span class="token punctuation">[</span><span class="token punctuation">]</span> annotations <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getAnnotations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Annotation</span> annos <span class="token operator">:</span> annotations<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>annos<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6、反射应用三-调用运行时类的指定结构" tabindex="-1"><a class="header-anchor" href="#_6、反射应用三-调用运行时类的指定结构" aria-hidden="true">#</a> 6、反射应用三：调用运行时类的指定结构</h3>
<h4 id="_6-1、调用指定的属性" tabindex="-1"><a class="header-anchor" href="#_6-1、调用指定的属性" aria-hidden="true">#</a> 6.1、调用指定的属性</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> testField1 <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">Class</span> clazz <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
        <span class="token comment">// 创建运行时类的对象</span>
        <span class="token class-name">Person</span> p <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">)</span> clazz<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 1、getDeclaredField(String fieldName)：获取运行时类中指定变量名的属性</span>
        <span class="token class-name">Field</span> name <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 2、保证当前属性时可访问的</span>
        name<span class="token punctuation">.</span><span class="token function">setAccessible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 3、获取、设置指定对象的此属性值</span>
        name<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> <span class="token string">"Tom"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-2、调用指定的方法" tabindex="-1"><a class="header-anchor" href="#_6-2、调用指定的方法" aria-hidden="true">#</a> 6.2、调用指定的方法</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> testMethod <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token class-name">Class</span> clazz <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
    <span class="token comment">// 创建运行时类的对象</span>
    <span class="token class-name">Person</span> p <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">)</span> clazz<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 1、获取指定的某个方法</span>
    <span class="token comment">// getDeclaredMethod()：参数1指明获取的方法的名称 参数2指明获取的方法的形参类型</span>
    <span class="token class-name">Method</span> show <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getDeclaredMethod</span><span class="token punctuation">(</span><span class="token string">"show"</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 2、保证当前方法是可访问的</span>
    show<span class="token punctuation">.</span><span class="token function">setAccessible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 3、调用方法的invoke()：参数1方法的调用者 参数2给方法形参赋值的实参</span>
    <span class="token comment">// invoke()的返回值即为对应类中调用的方法的返回值</span>
    <span class="token class-name">Object</span> returnValue <span class="token operator">=</span> show<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> <span class="token string">"CHN"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>returnValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 如何调用静态方法</span>
    <span class="token class-name">Method</span> showDesc <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getDeclaredMethod</span><span class="token punctuation">(</span><span class="token string">"showDesc"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    showDesc<span class="token punctuation">.</span><span class="token function">setAccessible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 如果调用的运行时类中的方法没有返回值，则此invoke()返回null</span>
    <span class="token comment">// Object returnVal = showDesc.invoke(null);</span>
    <span class="token class-name">Object</span> returnVal <span class="token operator">=</span> showDesc<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>returnVal<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-3、调用指定的构造器" tabindex="-1"><a class="header-anchor" href="#_6-3、调用指定的构造器" aria-hidden="true">#</a> 6.3、调用指定的构造器</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testConstructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token class-name">Class</span> clazz <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
    <span class="token comment">// 1、获取指定的构造器</span>
    <span class="token comment">// getDeclaredConstructor()：参数指明构造器的参数列表</span>
    <span class="token class-name">Constructor</span> constructor <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getDeclaredConstructor</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 2、保证此构造器是可访问的</span>
    constructor<span class="token punctuation">.</span><span class="token function">setAccessible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 3、调用此构造器创建运行时类的对象</span>
    <span class="token class-name">Person</span> per <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">)</span> constructor<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token string">"Tom"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>per<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7、反射应用四-动态代理" tabindex="-1"><a class="header-anchor" href="#_7、反射应用四-动态代理" aria-hidden="true">#</a> 7、反射应用四：动态代理</h3>
<h4 id="_7-1、代理模式的原理" tabindex="-1"><a class="header-anchor" href="#_7-1、代理模式的原理" aria-hidden="true">#</a> 7.1、代理模式的原理</h4>
<ul>
<li>使用一个代理将对象包装起来，然后用该代理对象取代原始对象。任何对原始对象的调用都要通过代理。代理对象决定是否以及何时将方法调用转到原始对象上。</li>
</ul>
<h4 id="_7-2、静态代理" tabindex="-1"><a class="header-anchor" href="#_7-2、静态代理" aria-hidden="true">#</a> 7.2、静态代理</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 被代理类</span>
<span class="token class-name">Class</span> <span class="token class-name">MyThread</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">// 代理类</span>
<span class="token class-name">Class</span> <span class="token class-name">Thread</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">// 代理操作</span>
main <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">MyThread</span> t <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Thread</span> thread <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span>
    thread<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 启动线程；调用线程的run()</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>静态代理的缺点
<ul>
<li>代理类和目标对象的类都是在编译期间确定下来，不利于程序的扩展。</li>
<li>每一个代理类只能为一个接口服务，这样一来程序开发中必然产生过多的代理。</li>
</ul>
</li>
</ul>
<h4 id="_7-3、动态代理的特点" tabindex="-1"><a class="header-anchor" href="#_7-3、动态代理的特点" aria-hidden="true">#</a> 7.3、动态代理的特点</h4>
<ul>
<li>动态代理是指客户通过代理类来调用其它对象的方法，并且是在程序<strong>运行时根据需要动态创建</strong>目标类的代理对象。</li>
</ul>
<h4 id="_7-4、动态代理的实现" tabindex="-1"><a class="header-anchor" href="#_7-4、动态代理的实现" aria-hidden="true">#</a> 7.4、动态代理的实现</h4>
<ul>
<li>需要解决的两个主要问题：
<ul>
<li>问题一：如何根据加载到内存中的被代理类，动态创建一个代理类及其对象 --&gt; 通过Proxy.newProxyInstance()实现</li>
<li>问题二：当通过代理类的对象调用方法a时，如何动态的去调用被代理类中的同名方法a --&gt; 通过InvocationHandler接口的实现类及其方法invoke()</li>
</ul>
</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * 动态代理体会：反射的动态性
 */</span>
<span class="token keyword">interface</span> <span class="token class-name">Human</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> <span class="token function">getBelief</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token class-name">String</span> food<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 被代理类</span>
<span class="token keyword">class</span> <span class="token class-name">SuperMan</span> <span class="token keyword">implements</span> <span class="token class-name">Human</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getBelief</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"I believe I can fly!"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token class-name">String</span> food<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"我喜欢吃"</span> <span class="token operator">+</span> food<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">HumanUtil</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> method1 <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"=======通用方法一======="</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> method2 <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"=======通用方法二======="</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">ProxyFactory</span> <span class="token punctuation">{</span>
    <span class="token comment">// 调用此方法，返回一个代理类的对象。解决问题一</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Object</span> <span class="token function">getProxyInstance</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// obj：被代理类的对象</span>
        <span class="token class-name">MyInvocationHandler</span> handler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyInvocationHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        handler<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name">Proxy</span><span class="token punctuation">.</span><span class="token function">newProxyInstance</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> obj<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getInterfaces</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">MyInvocationHandler</span> <span class="token keyword">implements</span> <span class="token class-name">InvocationHandler</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Object</span> obj<span class="token punctuation">;</span><span class="token comment">// 需要使用被代理类的对象进行赋值</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">bind</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>obj <span class="token operator">=</span> obj<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 当我们通过代理类的对象，调用方法a时，就会自动的调用如下的方法：invoke()</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">invoke</span><span class="token punctuation">(</span><span class="token class-name">Object</span> proxy<span class="token punctuation">,</span> <span class="token class-name">Method</span> method<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
        <span class="token class-name">HumanUtil</span> util <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HumanUtil</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        util<span class="token punctuation">.</span><span class="token function">method1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// method：即为代理类对象调用的方法，此方法也就作为了被代理类对象要调用的方法</span>
        <span class="token comment">// obj：被代理类的对象</span>
        <span class="token class-name">Object</span> returnValue <span class="token operator">=</span> method<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
        util<span class="token punctuation">.</span><span class="token function">method2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 上述方法的返回值就作为当前类中的invoke()返回值</span>
        <span class="token keyword">return</span> returnValue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProxyTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SuperMan</span> superMan <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SuperMan</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// proxyInstance：代理类的对象</span>
        <span class="token class-name">Human</span> proxyInstance <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Human</span><span class="token punctuation">)</span> <span class="token class-name">ProxyFactory</span><span class="token punctuation">.</span><span class="token function">getProxyInstance</span><span class="token punctuation">(</span>superMan<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 当通过代理类对象调用方法时，会自动的调用被代理类中同名的方法</span>
        <span class="token class-name">String</span> belief <span class="token operator">=</span> proxyInstance<span class="token punctuation">.</span><span class="token function">getBelief</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>belief<span class="token punctuation">)</span><span class="token punctuation">;</span>
        proxyInstance<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token string">"四川麻辣烫"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h2>
</div></template>
