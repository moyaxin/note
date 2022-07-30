<template><div><p>枚举类&amp;注解</p>
<!-- more -->
<h1 id="_6-枚举类-注解" tabindex="-1"><a class="header-anchor" href="#_6-枚举类-注解" aria-hidden="true">#</a> 6.枚举类&amp;注解</h1>
<h3 id="_1、枚举类的使用" tabindex="-1"><a class="header-anchor" href="#_1、枚举类的使用" aria-hidden="true">#</a> 1、枚举类的使用</h3>
<h4 id="_1-1、枚举类的使用" tabindex="-1"><a class="header-anchor" href="#_1-1、枚举类的使用" aria-hidden="true">#</a> 1.1、枚举类的使用</h4>
<ul>
<li>枚举类的理解：类的对象只有有限个，确定的。我们称此类为枚举类</li>
<li>当需要定义一组常量时，强烈建议使用枚举类</li>
<li>如果枚举类中只有一个对象，则可以作为单例模式的实现方式</li>
</ul>
<h4 id="_1-2、如何定义枚举类" tabindex="-1"><a class="header-anchor" href="#_1-2、如何定义枚举类" aria-hidden="true">#</a> 1.2、如何定义枚举类</h4>
<ul>
<li>方式一：jdk 5.0之前，自定义枚举类</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code> <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Season</span> <span class="token punctuation">{</span>
     <span class="token comment">// 1、声明Seaon对象的属性：private final修饰</span>
     <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> seasonName<span class="token punctuation">;</span>
     <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> seasonDesc<span class="token punctuation">;</span>
 
     <span class="token comment">// 2、私有化类的构造器，并给对象属性赋值</span>
     <span class="token keyword">private</span> <span class="token class-name">Season</span><span class="token punctuation">(</span><span class="token class-name">String</span> seasonName<span class="token punctuation">,</span> <span class="token class-name">String</span> seasonDesc<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">this</span><span class="token punctuation">.</span>seasonName <span class="token operator">=</span> seasonName<span class="token punctuation">;</span>
         <span class="token keyword">this</span><span class="token punctuation">.</span>seasonDesc <span class="token operator">=</span> seasonDesc<span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
 
     <span class="token comment">// 3、提供当前枚举类的多个对象：public static final的</span>
     <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Season</span> SPRING <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Season</span><span class="token punctuation">(</span><span class="token string">"春天"</span><span class="token punctuation">,</span> <span class="token string">"春暖花开"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Season</span> SUMMER <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Season</span><span class="token punctuation">(</span><span class="token string">"夏天"</span><span class="token punctuation">,</span> <span class="token string">"夏日炎炎"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Season</span> AUTUMN <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Season</span><span class="token punctuation">(</span><span class="token string">"秋天"</span><span class="token punctuation">,</span> <span class="token string">"秋高气爽"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Season</span> WINTER <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Season</span><span class="token punctuation">(</span><span class="token string">"冬天"</span><span class="token punctuation">,</span> <span class="token string">"冬日可爱"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
● 方式二：jdk <span class="token number">5.0</span>，可以使用<span class="token keyword">enum</span>关键字定义枚举类
● 定义的枚举类默认继承于<span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>Enum</span>类
 <span class="token keyword">interface</span> <span class="token class-name">Info</span> <span class="token punctuation">{</span>
     <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
 
 <span class="token comment">// 使用enum关键字枚举类</span>
 <span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">Season1</span> <span class="token keyword">implements</span> <span class="token class-name">Info</span><span class="token punctuation">{</span>
     <span class="token comment">// 1、提供当前枚举类的对象，多个对象之间用","隔开，末尾对象用";"结束</span>
     <span class="token function">SPRING</span><span class="token punctuation">(</span><span class="token string">"春天"</span><span class="token punctuation">,</span> <span class="token string">"春暖花开"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token annotation punctuation">@Override</span>
         <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span><span class="token punctuation">,</span>
     <span class="token function">SUMMER</span><span class="token punctuation">(</span><span class="token string">"夏天"</span><span class="token punctuation">,</span> <span class="token string">"夏日炎炎"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token annotation punctuation">@Override</span>
         <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span><span class="token punctuation">,</span>
     <span class="token function">AUTUMN</span><span class="token punctuation">(</span><span class="token string">"秋天"</span><span class="token punctuation">,</span> <span class="token string">"秋高气爽"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token annotation punctuation">@Override</span>
         <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span><span class="token punctuation">,</span>
     <span class="token function">WINTER</span><span class="token punctuation">(</span><span class="token string">"冬天"</span><span class="token punctuation">,</span> <span class="token string">"冬日可爱"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token annotation punctuation">@Override</span>
         <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span><span class="token punctuation">;</span>
 
     <span class="token comment">// 2、声明Season对象的属性：private final修饰</span>
     <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> seasonName<span class="token punctuation">;</span>
     <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> seasonDesc<span class="token punctuation">;</span>
 
     <span class="token comment">// 3、私有化类的构造器，并给对象属性赋值</span>
     <span class="token keyword">private</span> <span class="token class-name">Season1</span><span class="token punctuation">(</span><span class="token class-name">String</span> seasonName<span class="token punctuation">,</span> <span class="token class-name">String</span> seasonDesc<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">this</span><span class="token punctuation">.</span>seasonName <span class="token operator">=</span> seasonName<span class="token punctuation">;</span>
         <span class="token keyword">this</span><span class="token punctuation">.</span>seasonDesc <span class="token operator">=</span> seasonDesc<span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
 
     <span class="token comment">// 一般都是各个枚举类对象分别实现接口，不推荐在类中实现抽象方法</span>
     <span class="token comment">// @Override</span>
     <span class="token comment">// public void show() {</span>
     <span class="token comment">//</span>
     <span class="token comment">// }</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-3、enum类的主要方法" tabindex="-1"><a class="header-anchor" href="#_1-3、enum类的主要方法" aria-hidden="true">#</a> 1.3、Enum类的主要方法</h4>
<ul>
<li>value()：返回枚举类型的对象数组。该方法可以很方便地遍历所有的枚举类</li>
<li>valueOf(String str)：可以把一个字符串转为对应的枚举类对象。要求字符串必须是枚举类对象的&quot;名字&quot;。如不是，会有运行时异常：illegalArgumentException</li>
<li>toString()：返回当前枚举类对象常量的名称</li>
</ul>
<h3 id="_2、注解的使用" tabindex="-1"><a class="header-anchor" href="#_2、注解的使用" aria-hidden="true">#</a> 2、注解的使用</h3>
<h4 id="_2-1、注解的概述" tabindex="-1"><a class="header-anchor" href="#_2-1、注解的概述" aria-hidden="true">#</a> 2.1、注解的概述</h4>
<ul>
<li>从JDK 5.0开始，Java增加了对元数据的支持，也就是Annotation(注解)</li>
<li>Annotation其实就是代码里的特殊标记，这些标记可以在编译、类加载、运行时被读取，并执行相应的处理。通过使用Annotation，程序员可以在不改变原有逻辑的情况下，在源文件中嵌入一些补充信息。</li>
<li>框架 = 注解 + 反射 + 设计模式</li>
</ul>
<h4 id="_2-2、常见的annotation示例" tabindex="-1"><a class="header-anchor" href="#_2-2、常见的annotation示例" aria-hidden="true">#</a> 2.2、常见的Annotation示例</h4>
<ul>
<li>示例一：生成文档相关的注解</li>
<li>示例二：在编译时进行格式检查(JDK内置的三个基本注解)
<ul>
<li>@Override：限定重写父类方法，该注解只能用于方法</li>
<li>@Deprecated：用于表示所修饰的元素(类，方法等)已过时。通常是因为所修饰的结构危险或存在更好的选择</li>
<li>@SuppressWarnings：抑制编译器警告</li>
</ul>
</li>
<li>示例三：跟踪代码依赖性，实现代替配置文件功能</li>
</ul>
<h4 id="_2-3、如何自定义注解-参照-suppresswarnings定义" tabindex="-1"><a class="header-anchor" href="#_2-3、如何自定义注解-参照-suppresswarnings定义" aria-hidden="true">#</a> 2.3、如何自定义注解：参照@SuppressWarnings定义</h4>
<ul>
<li>注解声明为：@interface</li>
<li>内部定义成员，通常使用value表示</li>
<li>可以指定成员的默认值，使用default定义</li>
<li>如果自定义注解没有成员，表明是一个标识作用</li>
</ul>
<p></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span>TYPE<span class="token punctuation">,</span> FIELD<span class="token punctuation">,</span> METHOD<span class="token punctuation">,</span> PARAMETER<span class="token punctuation">,</span> CONSTRUCTOR<span class="token punctuation">,</span> LOCAL_VARIABLE<span class="token punctuation">}</span><span class="token punctuation">)</span>
 <span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span>SOURCE<span class="token punctuation">)</span>
 <span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">MyAnnotation</span> <span class="token punctuation">{</span>
     <span class="token comment">// 多个参数：此时的value是个成员，不是方法</span>
     <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token comment">// 单个参数：如果有默认值，则如此定义</span>
     <span class="token comment">// String value() default "Hello";</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>如果注解有成员，在使用注解时，需要指明成员的值</li>
<li>自定义注解必须配上注解的信息处理流程(使用反射)才有意义</li>
<li>自定义注解通常都会指明两个元注解：Retention、Target</li>
</ul>
<h4 id="_2-4、jdk提供的4种元注解" tabindex="-1"><a class="header-anchor" href="#_2-4、jdk提供的4种元注解" aria-hidden="true">#</a> 2.4、JDK提供的4种元注解</h4>
<ul>
<li>元注解：对现有的注解进行解释说明的注解</li>
<li>Retention：指定所修饰的Annotation的生命周期：SOURCE\CLASS(默认值)\RUNTIME，只有声明为RUNTIME生命周期的注解，才能通过反射获取</li>
<li>Target：用于指定被修饰的Annotation能用于修饰哪些程序元素</li>
<li>Documented：表示所修饰的注解在被javadoc解析时，保留下来</li>
<li>Inherited：被它修饰的Annotation将具有继承性</li>
</ul>
<h4 id="_2-5、jdk-8中注解的新特性-可重复注解、类型注解" tabindex="-1"><a class="header-anchor" href="#_2-5、jdk-8中注解的新特性-可重复注解、类型注解" aria-hidden="true">#</a> 2.5、JDK 8中注解的新特性：可重复注解、类型注解</h4>
<ul>
<li>可重复注解：
<ul>
<li>在MyAnnotation上声明@Repeatable，成员值为MyAnnotations.class</li>
<li>MyAnnotation的Target和Retention等元注解与MyAnnotations相同</li>
</ul>
</li>
<li>类型注解：
<ul>
<li>ElementType.TYPE_PARAMETER：表示该注解能写在类型变量的声明语句中（如：泛型声明）</li>
<li>ElementType.TYPE_USE：表示该注解能写在使用类型的任何语句中</li>
</ul>
</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code> <span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span>TYPE<span class="token punctuation">,</span> FIELD<span class="token punctuation">,</span> METHOD<span class="token punctuation">,</span> PARAMETER<span class="token punctuation">,</span> CONSTRUCTOR<span class="token punctuation">,</span> LOCAL_VARIABLE<span class="token punctuation">}</span><span class="token punctuation">)</span>
 <span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span>SOURCE<span class="token punctuation">)</span>
 <span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">MyAnnotations</span> <span class="token punctuation">{</span>
     <span class="token class-name">MyAnnotation</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
 
 <span class="token annotation punctuation">@Repeatable</span><span class="token punctuation">(</span><span class="token class-name">MyAnnotations</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
 <span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span>TYPE<span class="token punctuation">,</span> FIELD<span class="token punctuation">,</span> METHOD<span class="token punctuation">,</span> PARAMETER<span class="token punctuation">,</span> CONSTRUCTOR<span class="token punctuation">,</span> LOCAL_VARIABLE<span class="token punctuation">}</span><span class="token punctuation">)</span>
 <span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span>SOURCE<span class="token punctuation">)</span>
 <span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">MyAnnotation</span> <span class="token punctuation">{</span>
     <span class="token class-name">String</span> <span class="token function">value1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">"Hello"</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
