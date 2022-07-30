<template><div><p>泛型</p>
<!-- more -->
<h1 id="_8-泛型" tabindex="-1"><a class="header-anchor" href="#_8-泛型" aria-hidden="true">#</a> 8.泛型</h1>
<h3 id="_1、为什么要有泛型" tabindex="-1"><a class="header-anchor" href="#_1、为什么要有泛型" aria-hidden="true">#</a> 1、为什么要有泛型</h3>
<h4 id="_1-1、泛型的概念" tabindex="-1"><a class="header-anchor" href="#_1-1、泛型的概念" aria-hidden="true">#</a> 1.1、泛型的概念</h4>
<ul>
<li>所谓泛型，就是允许在定义类、接口时通过一个标识表示类中某个属性的类型或者是某个方法的返回值及参数类型。这个类型参数将在使用时（例如，继承或实现这个接口，用这个类型声明变量、创建对象时）确定（即传入实际的类型参数，也称为类型实参）。</li>
</ul>
<p>Java的泛型其实是一种伪泛型，这是因为Java在编译期间，所有的泛型信息都会被擦掉，正确理解泛型概念的首要前提是理解类型擦除。Java的泛型基本上都是在编译器这个层次上实现的，在生成的字节码中是不包含泛型中的类型信息的，使用泛型的时候加上类型参数，在编译器编译的时候会去掉，这个过程成为<strong>类型擦除</strong>。</p>
<h4 id="_1-2、泛型的引入背景" tabindex="-1"><a class="header-anchor" href="#_1-2、泛型的引入背景" aria-hidden="true">#</a> 1.2、泛型的引入背景</h4>
<ul>
<li>集合容器类在设计阶段/声明阶段不能确定这个容器到底实际存的是什么类型的对象，所以在JDK1.5之前只能把元素类型设计为Object，JDK1.5之后使用泛型来解决。因为这个时候除了元素的类型不确定，其他的部分是确定的，例如关于这个元素如何保存，如何管理等是确定的，因此此时把元素的类型设计成一个参数，这个类型参数叫做泛型。</li>
</ul>
<h3 id="_2、在集合中使用泛型" tabindex="-1"><a class="header-anchor" href="#_2、在集合中使用泛型" aria-hidden="true">#</a> 2、在集合中使用泛型</h3>
<ul>
<li>集合接口或集合类在JDK5.0时都修改为带泛型的结构</li>
<li>在实例化集合类时，可以指明具体的泛型类型</li>
<li>指明完以后，在集合类或接口中凡是定义类或接口时，内部结构（比如：方法、构造器、属性等）使用到类的泛型的位置，都指定为实例化的泛型类型
<ul>
<li>比如：add(E e) ---&gt; 实例化以后：add(Integer e)</li>
</ul>
</li>
<li>注意点：泛型的类型必须是类，不能是基本数据类型。需要用到基本数据类型的位置，拿包装类替换</li>
<li>如果实例化时，没有指明泛型的类型，默认类型为java.lang.Object类型</li>
</ul>
<h3 id="_3、自定义泛型结构" tabindex="-1"><a class="header-anchor" href="#_3、自定义泛型结构" aria-hidden="true">#</a> 3、自定义泛型结构</h3>
<ul>
<li>泛型类可能有多个参数，此时应将多个参数一起放在尖括号内。比如：&lt;E1,E2,E3&gt;</li>
<li>泛型类的构造器如下：public GenericClass(){}</li>
<li>实例化后，操作原来泛型位置的结构必须与指定的泛型类型一致。</li>
<li>泛型不同的引用不能相互赋值
<ul>
<li>尽管在编译时<code v-pre>ArrayList&lt;String&gt;</code>和<code v-pre>ArrayList&lt;Interger&gt;</code>是两种类型，但是，在运行时只有一个ArrayList被加载到JVM中。</li>
</ul>
</li>
<li>泛型如果不指定，将被擦除，泛型对应的类型均按照Object处理，但不等价于Object。经验：泛型要使用一路都用。要不用，一路都不要用。</li>
<li>如果泛型结构是一个接口或抽象类，则不可以创建泛型类的对象</li>
<li>JDK1.7，泛型的简化操作：<code v-pre>ArrayList&lt;Fruit&gt; flist = new ArrayList&lt;&gt;();</code></li>
<li>泛型的指定中不能使用基本数据类型，可以使用包装类替换</li>
<li>在类/接口上声明的泛型，在本类或本接口中即代表某种类型，可以作为非静态属性的类型、非静态方法的参数类型、非静态方法的返回值类型。但在静态方法中不能使用类的泛型。</li>
<li>异常类不能是泛型的</li>
<li>不能使用<code v-pre>new E[]</code>。但是可以：<code v-pre>E[] elements = (E[])new Object[capacity];</code></li>
<li>父类有泛型，子类可以选择保留泛型也可以选择指定泛型类型：
<ul>
<li>子类不保留父类的泛型：按需实现
<ul>
<li>没有类型，擦除</li>
<li>具体类型</li>
</ul>
</li>
<li>子类保留父类的泛型：泛型子类
<ul>
<li>全部保留</li>
<li>部分保留</li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * 自定义泛型类
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">></span></span>
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Order</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> orderName<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> orderId<span class="token punctuation">;</span>

    <span class="token comment">//类的内部结构就可以使用类的泛型</span>
    <span class="token keyword">private</span> <span class="token class-name">T</span> orderT<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Order</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Order</span><span class="token punctuation">(</span><span class="token class-name">String</span> orderName<span class="token punctuation">,</span> <span class="token keyword">int</span> orderId<span class="token punctuation">,</span> <span class="token class-name">T</span> orderT<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>orderName <span class="token operator">=</span> orderName<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>orderId <span class="token operator">=</span> orderId<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>orderT <span class="token operator">=</span> orderT<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">T</span> <span class="token function">getOrderT</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> orderT<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setOrderT</span><span class="token punctuation">(</span><span class="token class-name">T</span> orderT<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>orderT <span class="token operator">=</span> orderT<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 泛型方法：在方法中出现了泛型的结构，泛型参数与类的泛型参数没有任何关系</span>
    <span class="token comment">// 换句话说，泛型方法所属的类是不是泛型类都没有关系</span>
    <span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span> <span class="token function">copyFormArrayToList</span><span class="token punctuation">(</span><span class="token class-name">E</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">E</span> e <span class="token operator">:</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">return</span> list<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> 
    <span class="token comment">// 泛型方法，可以声明为静态的。原因：泛型参数是在调用方法时确定的。并非在实例化类时确定的。</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span> <span class="token function">copyFormArrayToList1</span><span class="token punctuation">(</span><span class="token class-name">E</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Fatherr</span><span class="token generics"><span class="token punctuation">&lt;</span>T1<span class="token punctuation">,</span> T2<span class="token punctuation">></span></span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
<span class="token comment">// 子类不保留父类的泛型</span>
<span class="token comment">// 1、没有类型，擦除</span>
<span class="token keyword">class</span> <span class="token class-name">Son1</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">A</span><span class="token punctuation">,</span> <span class="token class-name">B</span><span class="token punctuation">></span></span> <span class="token keyword">extends</span> <span class="token class-name">Father</span> <span class="token punctuation">{</span>
  <span class="token comment">//等价于 class Son extends Father&lt;Object, Object></span>
<span class="token punctuation">}</span>
<span class="token comment">// 2、具体类型</span>
<span class="token keyword">class</span> <span class="token class-name">Son2</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">A</span><span class="token punctuation">,</span> <span class="token class-name">B</span><span class="token punctuation">></span></span> <span class="token keyword">extends</span> <span class="token class-name">Father</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Ineger</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
<span class="token comment">// 子类保留父类的泛型</span>
<span class="token comment">// 1、全部保留</span>
<span class="token keyword">class</span> <span class="token class-name">Son3</span><span class="token generics"><span class="token punctuation">&lt;</span>T1<span class="token punctuation">,</span> T2<span class="token punctuation">,</span> <span class="token class-name">A</span><span class="token punctuation">,</span> <span class="token class-name">B</span><span class="token punctuation">></span></span> <span class="token keyword">extends</span> <span class="token class-name">Father</span><span class="token generics"><span class="token punctuation">&lt;</span>T1<span class="token punctuation">,</span> T2<span class="token punctuation">></span></span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
<span class="token comment">// 2、部分保留</span>
<span class="token keyword">class</span> <span class="token class-name">Son4</span><span class="token generics"><span class="token punctuation">&lt;</span>T2<span class="token punctuation">,</span> <span class="token class-name">A</span><span class="token punctuation">,</span> <span class="token class-name">B</span><span class="token punctuation">></span></span> <span class="token keyword">extends</span> <span class="token class-name">Father</span><span class="token generics"><span class="token punctuation">&lt;</span>T1<span class="token punctuation">,</span> T2<span class="token punctuation">></span></span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、泛型在继承上的体现" tabindex="-1"><a class="header-anchor" href="#_4、泛型在继承上的体现" aria-hidden="true">#</a> 4、泛型在继承上的体现</h3>
<ul>
<li>虽然类A是类B的父类，但是<code v-pre>G&lt;A&gt;</code>和<code v-pre>G&lt;B&gt;</code>二者不具备子父类关系，二者是并列关系
<ul>
<li>补充：类A是类B的父类，<code v-pre>A&lt;G&gt;</code>是<code v-pre>B&lt;G&gt;</code>的父类</li>
</ul>
</li>
</ul>
<h3 id="_5、通配符的使用" tabindex="-1"><a class="header-anchor" href="#_5、通配符的使用" aria-hidden="true">#</a> 5、通配符的使用</h3>
<ul>
<li>使用类型通配符：<code v-pre>?</code>
<ul>
<li><code v-pre>List&lt;?&gt;</code>是<code v-pre>List&lt;String&gt;</code>、<code v-pre>List&lt;Object&gt;</code>等各种泛型List的父类</li>
</ul>
</li>
<li>读取<code v-pre>List&lt;?&gt;</code>的对象list中的元素时，永远是安全的，因为不管list的真实类型是什么，它包含的都是Object</li>
<li>写入list中的元素时，不行。因为我们不知道元素类型，不能向其中添加对象。
<ul>
<li>唯一的例外是null，它是所有类型的成员</li>
</ul>
</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> list <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> list1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    list1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"AA"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    list1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"BB"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    list1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"CC"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span>list1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    list <span class="token operator">=</span> list1<span class="token punctuation">;</span>
    <span class="token comment">// 添加：对于List&lt;?>不能向其内部添加数据</span>
    <span class="token comment">// list.add("AA");</span>
    <span class="token comment">// list.add("?");</span>
    <span class="token comment">// 除了添加null</span>
    list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//获取（读取）：允许读取数据，读取的数据类型为Object</span>
    <span class="token class-name">Object</span> o <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> iterator <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Object</span> obj <span class="token operator">=</span> iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>&lt;? extentds A&gt;</code> (无穷小, A]
<ul>
<li>只允许泛型为A及A子类的引用调用</li>
</ul>
</li>
<li><code v-pre>&lt;? super A&gt;</code> [A, 无穷大)
<ul>
<li>只允许泛型为A及A父类的引用调用</li>
</ul>
</li>
</ul>
</div></template>
