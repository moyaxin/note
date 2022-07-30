<template><div><p>jdk8新特性</p>
<!-- more -->
<h1 id="_12-jdk8新特性" tabindex="-1"><a class="header-anchor" href="#_12-jdk8新特性" aria-hidden="true">#</a> 12.jdk8新特性</h1>
<h3 id="_1、java8的新特性概述" tabindex="-1"><a class="header-anchor" href="#_1、java8的新特性概述" aria-hidden="true">#</a> 1、Java8的新特性概述</h3>
<h3 id="_2、lambda表达式" tabindex="-1"><a class="header-anchor" href="#_2、lambda表达式" aria-hidden="true">#</a> 2、Lambda表达式</h3>
<h4 id="_2-1、lambda表达式使用前后的对比" tabindex="-1"><a class="header-anchor" href="#_2-1、lambda表达式使用前后的对比" aria-hidden="true">#</a> 2.1、Lambda表达式使用前后的对比</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> test1  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Runnable</span> r1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"我爱北京天安门"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    r1<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 使用lambda表达式</span>
    <span class="token class-name">Runnable</span> r2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"我爱北京天安门"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    r2<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> test2 <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> com1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> o1<span class="token punctuation">,</span> <span class="token class-name">Integer</span> o2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">compare</span><span class="token punctuation">(</span>o1<span class="token punctuation">,</span> o2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>com1<span class="token punctuation">.</span><span class="token function">compare</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// Lambda表达式的写法</span>
    <span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> com2 <span class="token operator">=</span> <span class="token punctuation">(</span>o1<span class="token punctuation">,</span> o2<span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">compare</span><span class="token punctuation">(</span>o1<span class="token punctuation">,</span> o2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>com2<span class="token punctuation">.</span><span class="token function">compare</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 方法引用</span>
    <span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> com3 <span class="token operator">=</span> <span class="token class-name">Integer</span> <span class="token operator">::</span> <span class="token function">compare</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>com3<span class="token punctuation">.</span><span class="token function">compare</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>new Thread(new Runnable() {
            @Override
            public void run() {
                System.out.println("The runable now is using!");
            }
}).start();
//用lambda
new Thread(() -> System.out.println("It's a lambda function!")).start();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2、lambda表达式的基本语法" tabindex="-1"><a class="header-anchor" href="#_2-2、lambda表达式的基本语法" aria-hidden="true">#</a> 2.2、Lambda表达式的基本语法</h4>
<ul>
<li>
<p>举例：(o1, o2) -&gt; Integer.compare(o1, o2);</p>
</li>
<li>
<p>格式：</p>
</li>
<li>
<ul>
<li>-&gt;：lambda操作符或箭头操作符</li>
<li>-&gt;左边：lambda形参列表（其实就是接口中的抽象方法的形参列表）</li>
<li>-&gt;右边：lambda体（其实就是重写的抽象方法的方法体）</li>
</ul>
</li>
</ul>
<h4 id="_2-3、如何使用-分为六种情况" tabindex="-1"><a class="header-anchor" href="#_2-3、如何使用-分为六种情况" aria-hidden="true">#</a> 2.3、如何使用：分为六种情况</h4>
<ul>
<li>
<p>语法格式一：无参，无返回值</p>
</li>
<li>
<ul>
<li><code v-pre>Runnable r1 = () -&gt; {System.out.println(&quot;Hello Lambda!&quot;);};</code></li>
</ul>
</li>
<li>
<p>语法格式二：Lambda需要一个参数，但是没有返回值</p>
</li>
<li>
<ul>
<li><code v-pre>Consumer&lt;String&gt; con = (String str) -&gt; {System.out.println(str);};</code></li>
</ul>
</li>
<li>
<p>语法格式三：数据类型可以省略，因为可由编译器推断得出，称为“类型推断”</p>
</li>
<li>
<ul>
<li><code v-pre>Consumer&lt;String&gt; con = (str) -&gt; {System.out.println(str);};</code></li>
</ul>
</li>
<li>
<p>语法格式四：Lambda若只需要一个参数时，参数的小括号可以省略</p>
</li>
<li>
<ul>
<li><code v-pre>Consumer&lt;String&gt; con = str -&gt; {System.out.println(str);};</code></li>
</ul>
</li>
<li>
<p>语法格式五：Lambda需要两个或以上的参数，多条执行语句，并且可以有返回值</p>
</li>
<li>
<ul>
<li><code v-pre>Comparator&lt;Integer&gt; com = (x, y) -&gt; {System.out.println(&quot;实现函数式接口方法！&quot;); return Integer.compare(x, y);};</code></li>
</ul>
</li>
<li>
<p>语法格式六：当Lambda体只有一条语句时，return与大括号若有，都可以省略</p>
</li>
<li>
<ul>
<li><code v-pre>Comparator&lt;Integer&gt; com = (x, y) -&gt; Integer.compare(x, y);</code></li>
</ul>
</li>
</ul>
<p>总结六种情况：
-&gt;左边：lambda形参列表的参数类型可以省略（类型推断）；如果lambda形参列表只有一个参数，其一对()也可以省略
-&gt;右边：lambda体应该使用一对{}包裹；如果lambda体只有一条执行语句（可能是return语句，省略这一对{}和return关键字）</p>
<h3 id="_3、函数式接口" tabindex="-1"><a class="header-anchor" href="#_3、函数式接口" aria-hidden="true">#</a> 3、函数式接口</h3>
<h4 id="_3-1、函数式接口的使用说明" tabindex="-1"><a class="header-anchor" href="#_3-1、函数式接口的使用说明" aria-hidden="true">#</a> 3.1、函数式接口的使用说明</h4>
<ul>
<li>如果一个接口中，只声明了一个抽象方法，则此接口就称为函数式接口</li>
<li>我们可以在一个接口上使用@FunctionalInterface注解，这样做可以检查它是否是一个函数式接口</li>
<li>Lambda表达式的本质：作为函数式接口的实例</li>
</ul>
<h4 id="_3-2、java8中关于lambda表达式提供的4个基本的函数式接口" tabindex="-1"><a class="header-anchor" href="#_3-2、java8中关于lambda表达式提供的4个基本的函数式接口" aria-hidden="true">#</a> 3.2、Java8中关于Lambda表达式提供的4个基本的函数式接口</h4>
<table>
<thead>
<tr>
<th>函数式接口</th>
<th>参数类型</th>
<th>返回类型</th>
<th>用途</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>Consumer&lt;T&gt;</code>消费型接口</td>
<td>T</td>
<td>void</td>
<td>对类型为T的对象应用操作，包含方法：void accept(T t)</td>
</tr>
<tr>
<td><code v-pre>Supplier&lt;T&gt;</code>供给型接口</td>
<td>无</td>
<td>T</td>
<td>返回类型为T的对象，包含方法：T get()</td>
</tr>
<tr>
<td><code v-pre>Function&lt;T, R&gt;</code>函数型接口</td>
<td>T</td>
<td>R</td>
<td>对类型为T的对象应用操作，并返回结果。结果是R类型的对象。包含方法：R apply(T t)</td>
</tr>
<tr>
<td><code v-pre>Predicate&lt;T&gt;</code>断定型接口</td>
<td>T</td>
<td>boolean</td>
<td>确定类型为T的对象是否满足某约束，并返回boolean值。包含方法：boolean test(T t)</td>
</tr>
</tbody>
</table>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>public class LambdaTest3 {
    //    消费型接口 Consumer&lt;T>     void accept(T t)
    @Test
    public void test1() {
        //未使用Lambda表达式
        Learn("java", new Consumer&lt;String>() {
            @Override
            public void accept(String s) {
                System.out.println("消费什么" + s);
            }
        });
        System.out.println("====================");
        //使用Lambda表达
        Learn("html", s -> System.out.println("消费什么？ " + s));

    }

    private void Learn(String s, Consumer&lt;String> stringConsumer) {
        stringConsumer.accept(s);
    }

    //    供给型接口 Supplier&lt;T>     T get()
    @Test
    public void test2() {
        //未使用Lambda
        Supplier&lt;String> sp = new Supplier&lt;String>() {
            @Override
            public String get() {
                return new String("我可以提供");
            }
        };
        System.out.println(sp.get());
        System.out.println("====================");
        //使用Lambda表达
        Supplier&lt;String> sp1 = () -> new String("我用lambda提供");
        System.out.println(sp1.get());
    }

    //函数型接口 Function&lt;T,R>   R apply(T t)
    @Test
    public void test3() {
        //使用Lambda表达式
        Employee employee = new Employee(1, "Alice", 18, 10000);

        Function&lt;Employee, String> func1 =e->e.getName();
        System.out.println(func1.apply(employee));
        System.out.println("====================");

        //使用方法引用
        Function&lt;Employee,String>func2 = Employee::getName;
        System.out.println(func2.apply(employee));

    }

    //断定型接口 Predicate&lt;T>    boolean test(T t)
    @Test
    public void test4() {
        //使用匿名内部类
        Function&lt;Double, Long> func = new Function&lt;Double, Long>() {
            @Override
            public Long apply(Double aDouble) {
                return Math.round(aDouble);
            }
        };
        System.out.println(func.apply(10.5));

        //使用Lambda表达式
        Function&lt;Double, Long> func1 = d -> Math.round(d);
        System.out.println(func1.apply(12.3));

        //使用方法引用
        Function&lt;Double,Long>func2 = Math::round;
        System.out.println(func2.apply(12.6));

    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3、总结" tabindex="-1"><a class="header-anchor" href="#_3-3、总结" aria-hidden="true">#</a> 3.3、总结</h4>
<ul>
<li>
<p>何时使用lambda表达式？</p>
</li>
<li>
<ul>
<li>当需要对一个函数式接口实例化的时候，可以使用lambda表达式</li>
</ul>
</li>
<li>
<p>何时使用给定的函数式接口？</p>
</li>
<li>
<ul>
<li>如果我们开发中需要定义一个函数式接口，首先看看在已有的JDK提供的函数式接口是否提供了能满足需求的函数式接口。如果有，则直接调用即可，不需要自己再自定义了。</li>
</ul>
</li>
</ul>
<h3 id="_4、方法引用" tabindex="-1"><a class="header-anchor" href="#_4、方法引用" aria-hidden="true">#</a> 4、方法引用</h3>
<h4 id="_4-1、理解" tabindex="-1"><a class="header-anchor" href="#_4-1、理解" aria-hidden="true">#</a> 4.1、理解</h4>
<ul>
<li>方法引用可以看做是Lambda表达式深层次的表达。换句话说，方法引用就是Lambda表达式，也就是函数式接口的一个实例，通过方法的名字来指向一个方法。</li>
</ul>
<h4 id="_4-2、使用情境" tabindex="-1"><a class="header-anchor" href="#_4-2、使用情境" aria-hidden="true">#</a> 4.2、使用情境</h4>
<ul>
<li>当要传递给Lambda体的操作，已经有实现的方法了，可以使用方法引用</li>
</ul>
<h4 id="_4-3、格式" tabindex="-1"><a class="header-anchor" href="#_4-3、格式" aria-hidden="true">#</a> 4.3、格式</h4>
<ul>
<li>类(或对象) :: 方法名</li>
</ul>
<h4 id="_4-4、分为如下的三种情况" tabindex="-1"><a class="header-anchor" href="#_4-4、分为如下的三种情况" aria-hidden="true">#</a> 4.4、分为如下的三种情况</h4>
<ul>
<li>对象 :: 非静态方法 --&gt; 情况1</li>
<li>类 :: 静态方法 --&gt; 情况2</li>
<li>类 :: 非静态方法 --&gt; 情况3</li>
</ul>
<h4 id="_4-5、要求" tabindex="-1"><a class="header-anchor" href="#_4-5、要求" aria-hidden="true">#</a> 4.5、要求</h4>
<ul>
<li>要求接口中的抽象方法的形参列表和返回值类型与方法引用的方法的形参列表和返回值类型相同！（针对于情况1和情况2）</li>
<li>当函数式接口方法的第一个参数是需要引用方法的调用者，并且第二个参数是需要引用方法的参数（或无参数）时：ClassName :: methodName（针对于情况3）</li>
</ul>
<h4 id="_4-6、使用建议" tabindex="-1"><a class="header-anchor" href="#_4-6、使用建议" aria-hidden="true">#</a> 4.6、使用建议</h4>
<ul>
<li>如果给函数式接口提供实例，恰好满足方法引用的使用情境，大家就可以考虑使用方法引用给函数式接口提供实例。如果大家不熟悉方法引用，那么还可以使用lambda表达式。</li>
</ul>
<h4 id="_4-7、使用举例" tabindex="-1"><a class="header-anchor" href="#_4-7、使用举例" aria-hidden="true">#</a> 4.7、使用举例</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 情况一：对象 :: 实例方法</span>
<span class="token comment">// Consumer中的void accept(T t)</span>
<span class="token comment">// PrintStream中的void println(T t)</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> test1 <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Consumer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> con1 <span class="token operator">=</span> str <span class="token operator">-></span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
    con1<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token string">"北京"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 方法引用</span>
    <span class="token class-name">PrintStream</span> ps <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">;</span>
    <span class="token class-name">Consumer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> con2 <span class="token operator">=</span> ps<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">;</span>
    con2<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token string">"beijing"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 情况二：类 :: 静态方法</span>
<span class="token comment">// Comparator中int compare(T t1, T t2)</span>
<span class="token comment">// Integer中的int compare(T t1, T t2)</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> test3 <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> com1 <span class="token operator">=</span> <span class="token punctuation">(</span>t1<span class="token punctuation">,</span> t2<span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">compare</span><span class="token punctuation">(</span>t1<span class="token punctuation">,</span> t2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>com1<span class="token punctuation">.</span><span class="token function">compare</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token number">21</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 方法引用</span>
    <span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> com2 <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token operator">::</span><span class="token function">compare</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>com2<span class="token punctuation">.</span><span class="token function">compare</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 情况三：类 :: 实例方法</span>
<span class="token comment">// Comparator中的int compare(T t1, T t2)</span>
<span class="token comment">// String中的int t1.compareTo(t2)</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> test5 <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> com1 <span class="token operator">=</span> <span class="token punctuation">(</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span> <span class="token operator">-></span> s1<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>com1<span class="token punctuation">.</span><span class="token function">compare</span><span class="token punctuation">(</span><span class="token string">"abc"</span><span class="token punctuation">,</span> <span class="token string">"abd"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 方法引用</span>
    <span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> com2 <span class="token operator">=</span> <span class="token class-name">String</span> <span class="token operator">::</span> <span class="token function">compareTo</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>com2<span class="token punctuation">.</span><span class="token function">compare</span><span class="token punctuation">(</span><span class="token string">"adb"</span><span class="token punctuation">,</span> <span class="token string">"abm"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、构造器引用与数组引用" tabindex="-1"><a class="header-anchor" href="#_5、构造器引用与数组引用" aria-hidden="true">#</a> 5、构造器引用与数组引用</h3>
<h4 id="_5-1、构造器引用格式" tabindex="-1"><a class="header-anchor" href="#_5-1、构造器引用格式" aria-hidden="true">#</a> 5.1、构造器引用格式</h4>
<ul>
<li>类名::new</li>
</ul>
<h4 id="_5-2、构造器引用使用要求" tabindex="-1"><a class="header-anchor" href="#_5-2、构造器引用使用要求" aria-hidden="true">#</a> 5.2、构造器引用使用要求</h4>
<ul>
<li>和方法引用类似，函数式接口的抽象方法的形参列表和构造器的形参列表一致。抽象方法的返回值类型即为构造器所属的类的类型</li>
</ul>
<h4 id="_5-3、构造器引用举例" tabindex="-1"><a class="header-anchor" href="#_5-3、构造器引用举例" aria-hidden="true">#</a> 5.3、构造器引用举例</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 构造器引用</span>
<span class="token comment">// Supplier的T get()</span>
<span class="token comment">// Employee的空参构造器：Employee()</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> test1 <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Supplier</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">></span></span> sup <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Supplier</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token class-name">Employee</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Employee</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">// lambda表达式</span>
    <span class="token class-name">Supplier</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">></span></span> sup1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token keyword">new</span> <span class="token class-name">Employee</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sup1<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 构造器引用</span>
    <span class="token class-name">Supplier</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">></span></span> sup2 <span class="token operator">=</span> <span class="token class-name">Employee</span> <span class="token operator">::</span> <span class="token keyword">new</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sup2<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// Function中的R apply(T t)</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> test2 <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Function</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Employee</span><span class="token punctuation">></span></span> func1 <span class="token operator">=</span> id <span class="token operator">-></span> <span class="token keyword">new</span> <span class="token class-name">Employee</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>func1<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token number">1001</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 构造器引用</span>
    <span class="token class-name">Function</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Employee</span><span class="token punctuation">></span></span> func2 <span class="token operator">=</span> <span class="token class-name">Employee</span> <span class="token operator">::</span> <span class="token keyword">new</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>func2<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token number">1002</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-4、数组引用格式" tabindex="-1"><a class="header-anchor" href="#_5-4、数组引用格式" aria-hidden="true">#</a> 5.4、数组引用格式</h4>
<ul>
<li>数组类型[]::new</li>
</ul>
<h4 id="_5-5、数组引用举例" tabindex="-1"><a class="header-anchor" href="#_5-5、数组引用举例" aria-hidden="true">#</a> 5.5、数组引用举例</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 数组引用</span>
<span class="token comment">// Function中的R apply(T t)</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> test4 <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Function</span><span class="token operator">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span> func1 <span class="token operator">=</span> length <span class="token operator">-></span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span>length<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>func1<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 数组引用</span>
    <span class="token class-name">Function</span><span class="token operator">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span> func2 <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">::</span> <span class="token keyword">new</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>func2<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6、stream-api" tabindex="-1"><a class="header-anchor" href="#_6、stream-api" aria-hidden="true">#</a> 6、Stream API</h3>
<h4 id="_6-1、stream-api的理解" tabindex="-1"><a class="header-anchor" href="#_6-1、stream-api的理解" aria-hidden="true">#</a> 6.1、Stream API的理解</h4>
<ul>
<li>Stream关注的是对数据的运算，与CPU打交道；集合关注的是数据的存储，与内存打交道</li>
<li>Java 8提供了一套API，使用这套API可以对内存中的数据进行过滤、排序、映射、归约等操作。类似SQL对数据库中表的相关操作。</li>
</ul>
<h4 id="_6-2、注意点" tabindex="-1"><a class="header-anchor" href="#_6-2、注意点" aria-hidden="true">#</a> 6.2、注意点</h4>
<ul>
<li>Stream自己不会存储元素</li>
<li>Stream不会改变源对象。相反，他们会返回一个持有结果的新的Stream</li>
<li>Stream操作是延迟执行的。这意味着他们会等到需要结果的时候才执行</li>
</ul>
<h4 id="_6-3、stream的使用流程" tabindex="-1"><a class="header-anchor" href="#_6-3、stream的使用流程" aria-hidden="true">#</a> 6.3、Stream的使用流程</h4>
<ul>
<li>Stream的实例化</li>
<li>一系列的中间操作（过滤、映射、...）</li>
<li>终止操作</li>
</ul>
<h4 id="_6-4、使用流程的注意点" tabindex="-1"><a class="header-anchor" href="#_6-4、使用流程的注意点" aria-hidden="true">#</a> 6.4、使用流程的注意点</h4>
<ul>
<li>一个中间操作链，对数据源的数据进行处理</li>
<li>一旦执行终止操作，就执行中间操作链，并产生结果。之后，不会再被使用。</li>
</ul>
<h4 id="_6-5、步骤一-stream实例化" tabindex="-1"><a class="header-anchor" href="#_6-5、步骤一-stream实例化" aria-hidden="true">#</a> 6.5、步骤一：Stream实例化</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 创建Stream方式一：通过集合</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> test1 <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">></span></span> employees <span class="token operator">=</span> <span class="token class-name">EmployeeData</span><span class="token punctuation">.</span><span class="token function">getEmployees</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// default Stream&lt;E> stream()：返回一个顺序流</span>
    <span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">></span></span> stream <span class="token operator">=</span> employees<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// default Stream&lt;E> parallelStream()：返回一个并行流</span>
    <span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">></span></span> parallelStream <span class="token operator">=</span> employees<span class="token punctuation">.</span><span class="token function">parallelStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 创建Stream方式二：通过数组</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> test2 <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">// 调用Arrays类的static &lt;T> Stream&lt;T> stream(T[] array)：返回一个流</span>
    <span class="token class-name">IntStream</span> stream <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 创建Stream方式三：通过Stream的of()</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> test3 <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> stream <span class="token operator">=</span> <span class="token class-name">Stream</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 创建Stream方式四：创建无限流</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> test4 <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 迭代</span>
    <span class="token comment">// public static &lt;T> Stream&lt;T> iterate(final T seed, final UnaryOperator&lt;T> f)</span>
    <span class="token comment">// 遍历前10个偶数</span>
    <span class="token class-name">Stream</span><span class="token punctuation">.</span><span class="token function">iterate</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> t <span class="token operator">-></span> t <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">limit</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 生成</span>
    <span class="token comment">// public static &lt;T> Stream&lt;T> generate(Supplier&lt;T> s)</span>
    <span class="token class-name">Stream</span><span class="token punctuation">.</span><span class="token function">generate</span><span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token operator">::</span><span class="token function">random</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">limit</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-6、步骤二-中间操作" tabindex="-1"><a class="header-anchor" href="#_6-6、步骤二-中间操作" aria-hidden="true">#</a> 6.6、步骤二：中间操作</h4>
<ul>
<li>
<p>筛选与切片</p>
</li>
<li>
<ul>
<li>filter(Predicate p)：接收Lambda，从流中排除某些元素</li>
<li>distinct()：筛选，通过流所生成元素的hashCode()和equals()去除重复元素</li>
<li>limit(long maxSize)：截断流，使其元素不超过给定数量</li>
<li>skip(long n)：跳过元素，返回一个扔掉了前n个元素的流。若流中元素不足n个，则返回一个空流。与limit(n)互补</li>
</ul>
</li>
<li>
<p>映射</p>
</li>
<li>
<ul>
<li>map(Function f)：接收一个函数作为参数，该函数会被应用到每个元素上，并将其映射成一个新的元素</li>
<li>mapToDouble(ToDoubleFunction f)：接收一个函数作为参数，该函数会被应用到每个元素上，产生一个新的DoubleStream</li>
<li>mapToInt(ToIntFunction f)：接收一个函数作为参数，该函数会被应用到每个元素上，产生一个新的IntStream</li>
<li>mapToLong(ToLongFunction f)：接收一个函数作为参数，该函数会被应用到每个元素上，产生一个新的LongStream</li>
<li>flatMap(Function f)：接收一个函数作为参数，将流中的每个值都换成另一个流，然后把所有流连接成一个流</li>
</ul>
</li>
<li>
<p>排序</p>
</li>
<li>
<ul>
<li>sorted()：产生一个新流，其中按自然顺序排序</li>
<li>sorted(Comparator com)：产生一个新流，其中按比较器顺序排序</li>
</ul>
</li>
<li></li>
<li>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>public class demo2 {
    /*
    筛选与切片，注意执行终止操作后，Stream流就被关闭了，使用时需要再次创建Stream
     */
    @Test
    public void test() {
        //利用集合创建一个Stream
        List&lt;Employee> employees=EmployeeData.getEmployees();
        //返回一个顺序流
        Stream&lt;Employee> stream = employees.stream();
        //返回一个并行流
//        Stream&lt;Employee> stream1 = employees.parallelStream();


        //filter(Predicate p)——接收 Lambda ， 从流中排除某些元素。查询员工表中薪资大于6000的员工信息
//        stream.filter(emp->emp.getSalary()>6000).forEach(System.out::println);

        //limit(n)——截断流，使其元素不超过给定数量。
//        stream.limit(2).forEach(System.out::println);

        //skip(n) —— 跳过元素，返回一个扔掉了前 n 个元素的流。若流中元素不足 n 个，则返回一个空流。与 limit(n) 互补
//        stream.skip(3).forEach(System.out::println);

        //distinct()——筛选，通过流所生成元素的 hashCode() 和 equals() 去除重复元素
        //先尝试加几个数据看看，再调用distinct看看
        employees.add(new Employee(1010,"刘庆东",56,8000));
        employees.add(new Employee(1010,"刘庆东",56,8000));
//        stream.forEach(System.out::println);
        stream.distinct().forEach(System.out::println);
    }
    /*
    映射
     */
    @Test
    public void test1(){
        //map(Function f)——接收一个函数作为参数，将元素转换成其他形式或提取信息，该函数会被应用到每个元素上，并将其映射成一个新的元素
        //获取员工姓名长度大于3的员工的姓名
        List&lt;Employee> employees=EmployeeData.getEmployees();
        Stream&lt;String> stringStream = employees.stream().map(Employee::getName);
        stringStream.filter(name -> name.length()>3).forEach(System.out::println);
    }
    //排序
    @Test
    public void test2(){
        List&lt;Employee> employees=EmployeeData.getEmployees();
        employees.stream().sorted((e1,e2)->{
            //先根据age排序
            int ageValue=Integer.compare(e1.getAge(),e2.getAge());
            if (ageValue!=0){
                return ageValue;
            }else {
                //如果age一样，就根据salary排序
                return Double.compare(e1.getSalary(),e2.getSalary());
            }
        }
        ).forEach(System.out::println);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li></li>
</ul>
<h4 id="_6-7、步骤三-终止操作" tabindex="-1"><a class="header-anchor" href="#_6-7、步骤三-终止操作" aria-hidden="true">#</a> 6.7、步骤三：终止操作</h4>
<ul>
<li>
<p>匹配与查找</p>
</li>
<li>
<ul>
<li>allMatch(Predicate p)：检查是否匹配所有元素</li>
<li>anyMatch(Predicate p)：检查是否至少匹配一个元素</li>
<li>noneMatch(Predicate p)：检查是否没有匹配所有元素</li>
<li>findFirst()：返回第一个元素</li>
<li>findAny()：返回当前流中的任意元素</li>
<li>count()：返回流中元素总数</li>
<li>max(Comparator c)：返回流中最大值</li>
<li>min(Comparator c)：返回流中最小值</li>
<li>forEach(Consumer c)：内部迭代（使用Collection接口需要用户去做迭代，称为外部迭代。相反，Stream API使用内部迭代——它帮你把迭代做了）</li>
</ul>
</li>
<li>
<p>归约</p>
</li>
<li>
<ul>
<li>reduce(T iden, BinaryOperator b)：可以将流中元素反复结合起来，得到一个值。返回T</li>
<li>reduce(BinaryOperator b)：可以将流中元素反复结合起来，得到一个值。返回<code v-pre>Optional&lt;T&gt;</code></li>
</ul>
</li>
<li>
<p>收集</p>
</li>
<li>
<ul>
<li>collect(Collector c)：将流转换为其他形式。接收一个Collector接口的实现，用于给Stream中元素做汇总的方法(Collector通过Collectors提供实例)</li>
</ul>
</li>
<li>
<ul>
<li>
<ul>
<li>toList()</li>
<li>toSet()</li>
<li>toCollection()</li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> //匹配和查找
    @Test
    public void test(){
        List&lt;Employee> employees=EmployeeData.getEmployees();
        //allMatch(Predicate p)——检查是否匹配所有元素
        boolean b = employees.stream().allMatch(e -> e.getAge() > 18);
        System.out.println("是否所有的员工的年龄都大于18:"+b);
        //anyMatch(Predicate p)——检查是否至少匹配一个元素
        boolean b1 = employees.stream().anyMatch(e -> e.getName().equals("雷军"));
        System.out.println("是否存在员工的姓名是雷军：" + b1);
        //noneMatch(Predicate p)——检查是否没有匹配的元素。
        boolean noneMatch = employees.stream().noneMatch(e -> e.getName().startsWith("雷"));
        System.out.println("是否存在员工姓'雷':"+noneMatch);
        //findFirst——返回第一个元素
        Optional&lt;Employee> first = employees.stream().findFirst();
        System.out.println("返回第一个元素:"+first);
        //findAny——返回当前流中的任意元素
        Optional&lt;Employee> employee = employees.parallelStream().findAny();
        System.out.println("返回当前流中的任意元素"+employee);
        //count——返回流中元素的总个数
        long count = employees.stream().filter(e -> e.getSalary()>5000).count();
        System.out.println(count);
        //max(Comparator c)——返回流中最大值
        Stream&lt;Double> salaryStream = employees.stream().map(e -> e.getSalary());
        Optional&lt;Double> maxSalary = salaryStream.max(Double::compareTo);
        System.out.println("最高薪资:"+maxSalary);
        //min(Comparator c)——返回流中最小值
        Optional&lt;Double> minSalary = employees.stream().map(e -> e.getSalary()).min(Double::compareTo);
        System.out.println(minSalary);

    }
    //归约和收集
    @Test
    public void test2(){
        //reduce(T identity, BinaryOperator)——可以将流中元素反复结合起来，得到一个值。返回 T
        //练习1：计算1-10的自然数的和
        List&lt;Integer> list = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        Integer sum = list.stream().reduce(0, Integer::sum);
        System.out.println(sum);

        //reduce(BinaryOperator) ——可以将流中元素反复结合起来，得到一个值。返回 Optional&lt;T>
        //练习2：计算公司所有员工工资的总和
        List&lt;Employee> employees = EmployeeData.getEmployees();
        Optional&lt;Double> sumSalary = employees.stream().map(e -> e.getSalary()).reduce(Double::sum);
        System.out.println(sumSalary);

        //collect(Collector c)——将流转换为其他形式。接收一个 Collector接口的实现，用于给Stream中元素做汇总的方法
        //练习1：查找工资大于6000的员工，结果返回为一个List或Set
        List&lt;Employee> employeeList = employees.stream().filter(e -> e.getSalary() > 6000).collect(Collectors.toList());
        employeeList.forEach(System.out::println);
        System.out.println();
        Set&lt;Employee> employeeSet = employees.stream().filter(e -> e.getSalary() > 6000).collect(Collectors.toSet());
        employeeSet.forEach(System.out::println);

    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7、optional类的使用" tabindex="-1"><a class="header-anchor" href="#_7、optional类的使用" aria-hidden="true">#</a> 7、Optional类的使用</h3>
<h4 id="_7-1、理解" tabindex="-1"><a class="header-anchor" href="#_7-1、理解" aria-hidden="true">#</a> 7.1、理解</h4>
<ul>
<li>为了解决Java中的空指针问题而生！</li>
<li><code v-pre>Optional&lt;T&gt;</code>类(java.util.Optional)是一个容器类，它可以保存类型T的值，代表这个值存在。或者仅仅保存null，表示这个值不存在。原来用null表示一个值不存在，现在Optional可以更好的表达这个概念。并且可以避免空指针异常。</li>
</ul>
<h4 id="_7-2、常用方法" tabindex="-1"><a class="header-anchor" href="#_7-2、常用方法" aria-hidden="true">#</a> 7.2、常用方法</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code> <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//empty():创建的Optional对象内部的value = null</span>
        <span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">></span></span> empty <span class="token operator">=</span> <span class="token class-name">Optional</span><span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//optional封装的数据是否包含数据</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>empty<span class="token punctuation">.</span><span class="token function">isPresent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        System.out.println(empty.get());</span>

        <span class="token class-name">String</span> str<span class="token operator">=</span><span class="token string">"hello world!"</span><span class="token punctuation">;</span>
        <span class="token comment">//of(T t):封装数据t生成Optional对象。要求t非空，否则报错。</span>
        <span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> op1 <span class="token operator">=</span> <span class="token class-name">Optional</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//get()通常与of()方法搭配使用。用于获取内部的封装的数据value</span>
        <span class="token class-name">String</span> str1 <span class="token operator">=</span> op1<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//ofNullable(T t) ：封装数据t赋给Optional内部的value。不要求t非空</span>
        op1 <span class="token operator">=</span> <span class="token class-name">Optional</span><span class="token punctuation">.</span><span class="token function">ofNullable</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>op1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//orElse(T t1):如果Optional内部的value非空，则返回此value值。如果</span>
        <span class="token comment">//value为空，则返回t1.</span>
        <span class="token class-name">String</span> str2 <span class="token operator">=</span> op1<span class="token punctuation">.</span><span class="token function">orElse</span><span class="token punctuation">(</span><span class="token string">"shanghai"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8、date-time-api" tabindex="-1"><a class="header-anchor" href="#_8、date-time-api" aria-hidden="true">#</a> 8、Date-Time API</h3>
<h4 id="_8-1-常用时间api" tabindex="-1"><a class="header-anchor" href="#_8-1-常用时间api" aria-hidden="true">#</a> 8.1 常用时间API</h4>
<h5 id="_1、date" tabindex="-1"><a class="header-anchor" href="#_1、date" aria-hidden="true">#</a> 1、Date</h5>
<p>（1）初步使用</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span>  <span class="token function">data_test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Date</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//创建一个当时的时间对象，就是new的那一瞬间，精确到毫秒</span>
        <span class="token class-name">Date</span> date1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1000</span><span class="token operator">*</span><span class="token number">60</span><span class="token operator">*</span><span class="token number">60</span><span class="token operator">*</span><span class="token number">24</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//获取明天的当前时间</span>
        <span class="token class-name">Date</span> date2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"当前时间"</span><span class="token operator">+</span>date2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"明天的当前时间"</span><span class="token operator">+</span>date1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"be："</span><span class="token operator">+</span>date1<span class="token punctuation">.</span><span class="token function">before</span><span class="token punctuation">(</span>date2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//判断date1的时间是否在date2之前</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"af："</span><span class="token operator">+</span>date1<span class="token punctuation">.</span><span class="token function">after</span><span class="token punctuation">(</span>date2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//判断date1的时间是否在date2之后</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>date2<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>date1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>date2<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>
                date<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//时间毫秒数</span>
                        <span class="token operator">+</span><span class="token string">","</span><span class="token operator">+</span><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>
<span class="token class-name">Mon</span> <span class="token class-name">Jul</span> <span class="token number">04</span> <span class="token number">14</span><span class="token operator">:</span><span class="token number">51</span><span class="token operator">:</span><span class="token number">58</span> CST <span class="token number">2022</span>
当前时间<span class="token class-name">Mon</span> <span class="token class-name">Jul</span> <span class="token number">04</span> <span class="token number">14</span><span class="token operator">:</span><span class="token number">51</span><span class="token operator">:</span><span class="token number">58</span> CST <span class="token number">2022</span>
明天的当前时间<span class="token class-name">Tue</span> <span class="token class-name">Jul</span> <span class="token number">05</span> <span class="token number">14</span><span class="token operator">:</span><span class="token number">51</span><span class="token operator">:</span><span class="token number">58</span> CST <span class="token number">2022</span>
be：<span class="token boolean">false</span>
af：<span class="token boolean">true</span>
<span class="token operator">-</span><span class="token number">1</span>
<span class="token number">1</span>
<span class="token number">1656917518560</span><span class="token punctuation">,</span><span class="token number">1656917518569</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）构造方法</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建一个当时的时间对象，就是new的那一瞬间，精确到毫秒。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token keyword">long</span> date<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建一个时间对象，需要传入一个时间戳，代表时间戳表示的时间。</p>
<p>（3）常用方法</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>boolean after(Date when)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>测试此日期是否在指定日期之后</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>boolean before(Date when)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>测试此日期是否在指定日期之前</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>getTime()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回自1970年1月1日以来，由此 Date对象表示的00:00:00 GMT的毫秒数</p>
<h5 id="_2、calendar" tabindex="-1"><a class="header-anchor" href="#_2、calendar" aria-hidden="true">#</a> 2、Calendar</h5>
<p>（1）简介</p>
<p>一个相对比较新的日期类，Calendar是一个抽象类，它本身就是日历的意思</p>
<p>（2）初始化</p>
<ul>
<li>Calendar类是一个日历抽象类，提供了一组对“年月日时分秒星期”等日期信息的操作的函数，并针对不同国家和地区的日历提供了相应的子类，即本地化。比如公历GregorianCalendar，佛历BuddhistCalendar，日本帝国历JapaneseImperialCalendar等。</li>
<li>从JDK1.1版本开始，在处理日期和时间时，系统推荐使用Calendar类进行实现(Date的一些方法都过时了)。在设计上，Calendar类的功能要比Date类强大很多，而且在实现方式上也比Date类要复杂一些，下面就介绍一下Calendar类的使用。</li>
</ul>
<p>（3）常用的方法</p>
<p>日历的功能啊：</p>
<p>获得年、月、日？设置年、月、日？比较两个日期，看看星期几？其实这个类的方法特别多。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>calendar<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">int</span> field<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>用来获取实例化的Calendar对象储存的“年月日时分秒星期”等等信息。方法的参数通过Calendar.XXXX的形式填写，比如要想获取年份信息就用Calendar.YEAR、月份Calendar.MONTH、日期Calendar.Date、时Calendar.HOUR、分Calendar.MINUTE、秒Calendar.SECOND等等。</p>
<p>所以使用<code v-pre>calendar.get(1)</code> 也是能够获取到年份的，</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>calendar<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">int</span> field<span class="token punctuation">,</span> <span class="token keyword">int</span> value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
calendar<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token keyword">int</span> year<span class="token punctuation">,</span> <span class="token keyword">int</span> month<span class="token punctuation">,</span> <span class="token keyword">int</span> date<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>set方法有很多重载的方法</p>
<p>具体的参数 field 就是上边的Calendar.YEAR、Calendar.MONTH....</p>
<p>当然Calendar有非常多的方法：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> field<span class="token punctuation">,</span> <span class="token keyword">int</span> amount<span class="token punctuation">)</span>
根据日历的规则，将指定的时间量添加或减去给定的日历字段。
    
<span class="token function">after</span><span class="token punctuation">(</span><span class="token class-name">Object</span> when<span class="token punctuation">)</span>
返回 <span class="token class-name">Calendar</span>是否 <span class="token class-name">Calendar</span>指定时间之后的时间 <span class="token class-name">Object</span> 。
    
<span class="token function">before</span><span class="token punctuation">(</span><span class="token class-name">Object</span> when<span class="token punctuation">)</span>
返回此 <span class="token class-name">Calendar</span>是否 <span class="token class-name">Calendar</span>指定的时间之前指定的时间 <span class="token class-name">Object</span> 。
    
<span class="token class-name">Date</span>	<span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
返回一个 <span class="token class-name">Date</span>表示此物体 <span class="token class-name">Calendar</span>的时间值（毫秒从偏移 <span class="token class-name">Epoch</span> “）。
    
<span class="token keyword">long</span>	<span class="token function">getTimeInMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
以毫秒为单位返回此日历的时间值。
    
<span class="token class-name">TimeZone</span>	<span class="token function">getTimeZone</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
获取时区。
    
<span class="token keyword">int</span>	<span class="token function">getWeeksInWeekYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
返回由这个 <span class="token class-name">Calendar</span>表示的星期内的星期 <span class="token class-name">Calendar</span> 。
    
<span class="token keyword">int</span>	<span class="token function">getWeekYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
返回这个 <span class="token class-name">Calendar</span> 。
    
<span class="token keyword">void</span>	<span class="token function">setTime</span><span class="token punctuation">(</span><span class="token class-name">Date</span> date<span class="token punctuation">)</span>
使用给定的 <span class="token class-name">Date</span>设置此日历的时间。
    
<span class="token keyword">void</span>	<span class="token function">setTimeInMillis</span><span class="token punctuation">(</span><span class="token keyword">long</span> millis<span class="token punctuation">)</span>
从给定的长值设置此日历的当前时间。
    
<span class="token keyword">void</span>	<span class="token function">setTimeZone</span><span class="token punctuation">(</span><span class="token class-name">TimeZone</span> value<span class="token punctuation">)</span>
以给定的时区值设置时区。
    
<span class="token class-name">Instant</span>	<span class="token function">toInstant</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
将此对象转换为<span class="token class-name">Instant</span> 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3、时区timezone" tabindex="-1"><a class="header-anchor" href="#_3、时区timezone" aria-hidden="true">#</a> 3、时区TimeZone</h5>
<p>时区也是通过静态方法获取</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">TimeZone</span><span class="token punctuation">.</span><span class="token function">getDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//sun.util.calendar.ZoneInfo[id="Asia/Shanghai",offset=28800000,dstSavings=0,useDaylight=false,transitions=31,lastRule=null]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>static String[]</th>
<th>getAvailableIDs()获取支持的所有可用ID。</th>
</tr>
</thead>
<tbody>
<tr>
<td>static String[]</td>
<td>getAvailableIDs(int rawOffset)根据给定的时区偏移（以毫秒为单位）获取可用ID。</td>
</tr>
<tr>
<td>static TimeZone</td>
<td>getDefault()获取Java虚拟机的默认值 <code v-pre>TimeZone</code> 。</td>
</tr>
<tr>
<td>static TimeZone</td>
<td>getTimeZone(String ID)获取给定ID的 <code v-pre>TimeZone</code> 。</td>
</tr>
<tr>
<td>static TimeZone</td>
<td>getTimeZone(ZoneId zoneId)获取 <code v-pre>TimeZone</code>对于给定 <code v-pre>zoneId</code> 。</td>
</tr>
<tr>
<td>static void</td>
<td>setDefault(TimeZone zone)设置 <code v-pre>TimeZone</code>由返回 <code v-pre>getDefault</code>方法。</td>
</tr>
</tbody>
</table>
<p>比如现在想获取美国的时间：</p>
<p>注：美国本土横跨西五区至西八区，共四个时区，每个时区对应一个标准时间。以华盛顿的西五区为例，西五区的id就是（GMT-05:00）；</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Calendar</span> calendar <span class="token operator">=</span> <span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    calendar<span class="token punctuation">.</span><span class="token function">setTimeZone</span><span class="token punctuation">(</span><span class="token class-name">TimeZone</span><span class="token punctuation">.</span><span class="token function">getTimeZone</span><span class="token punctuation">(</span><span class="token string">"GMT-08:00"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>calendar<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span>HOUR_OF_DAY<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>结果：</p>
</blockquote>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Mon Jul 04 15:00:19 CST 2022
23
美国华盛顿的时间是23点，我们的是15点
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4、zoneid" tabindex="-1"><a class="header-anchor" href="#_4、zoneid" aria-hidden="true">#</a> 4、ZoneId</h5>
<p>ZoneId是指区域ID，可以这样表示 Europe/London Asia/Shanghai America/New_York Japan</p>
<p>就是地区的表示方法</p>
<h5 id="_5、simpledateformat" tabindex="-1"><a class="header-anchor" href="#_5、simpledateformat" aria-hidden="true">#</a> 5、simpleDateFormat</h5>
<p>我们有这种需求，将时间显示成 1999年10月1号。</p>
<p>java给我们提供了时间的格式化器。</p>
<p>（2）构造方法</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>用默认的模式和默认语言环境的日期格式符号构造 <code v-pre>SimpleDateFormat</code>。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>SimpleDateFormat(String pattern); 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>用给定的模式和日期符号构造 <code v-pre>SimpleDateFormat</code>。</p>
<ul>
<li>yyyy 代表年 yy只显示后两位</li>
<li>MM 代表月</li>
<li>dd 代表日</li>
<li>HH代表小时 24小时制 hh 12小时</li>
<li>mm代表分钟</li>
<li>ss代表秒</li>
</ul>
<p>yyyy年MM月dd日 HH小时mm分ss秒 就是一种日期时间模式。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">SimpleDateFormat</span> simpleDateFormat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">"yyyy年MM月dd日  HH小时mm分ss秒"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> format <span class="token operator">=</span> simpleDateFormat<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>format<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token number">2022</span>年<span class="token number">07</span>月<span class="token number">04</span>日 <span class="token number">15</span>时<span class="token number">06</span>分<span class="token number">42</span>秒
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）主要方法</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">applyPattern</span><span class="token punctuation">(</span><span class="token class-name">String</span> pattern<span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>给定的模式字符串应用于此日期格式。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">String</span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token class-name">Date</span> date<span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将日期格式化成日期/时间字符串。–进行了重写</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Date</span> <span class="token function">parse</span><span class="token punctuation">(</span><span class="token class-name">String</span> source<span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>从给定字符串的开始解析文本以生成日期。–进行了重写</p>
<h4 id="_8-2、jdk8常用时间api" tabindex="-1"><a class="header-anchor" href="#_8-2、jdk8常用时间api" aria-hidden="true">#</a> 8.2、jdk8常用时间API</h4>
<h5 id="_1、instant" tabindex="-1"><a class="header-anchor" href="#_1、instant" aria-hidden="true">#</a> 1、Instant</h5>
<p>在时间线上的瞬间点。</p>
<p>（1）构造一个Instant</p>
<p><img src="https://ydlclass.com/doc21xnv/assets/image-20210811143150372.5e221071.png" alt="image-20210811143150372" loading="lazy"></p>
<p>既然<code v-pre>Instant</code>可以代替<code v-pre>Date</code>类，那它肯定可以获取当前时间：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> Instant instant = Instant.now();

当前时间：2022-07-04T07:10:31.048Z
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以加上时区：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>System.out.println(instant.atZone(ZoneId.systemDefault()));

当前时间：2022-07-04T15:10:31.048+08:00[Asia/Shanghai]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）获取时间戳</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Instant instant = Instant.now();

// 当前时间戳:单位为秒
System.out.println(instant.getEpochSecond());
// 当前时间戳:单位为毫秒
System.out.println(instant.toEpochMilli());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，也可以通过<code v-pre>System.currentTimeMillis()</code>获取当前毫秒数。</p>
<p>（3）将时间戳转换为Instant</p>
<p>根据秒数时间戳转换：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Instant instant = Instant.now();
System.out.println(instant);

long epochSecond = instant.getEpochSecond();
System.out.println(Instant.ofEpochSecond(epochSecond));
System.out.println(Instant.ofEpochSecond(epochSecond, instant.getNano()));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据毫秒数时间戳转换：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Instant instant = Instant.now();
System.out.println(instant);

long epochMilli = instant.toEpochMilli();
System.out.println(Instant.ofEpochMilli(epochMilli));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（4）将表达式转换为Instant</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>String text = "2020-06-10T08:46:55.967Z";
Instant parseInstant = Instant.parse(text);
System.out.println("秒时间戳:" + parseInstant.getEpochSecond());
System.out.println("毫秒时间戳:" + parseInstant.toEpochMilli());
System.out.println("纳秒:" + parseInstant.getNano());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Instant给我们提供了非常多的实用的方法，我们要独自尝试。</p>
<h5 id="_2、duration" tabindex="-1"><a class="header-anchor" href="#_2、duration" aria-hidden="true">#</a> 2、Duration</h5>
<p>Duration（持续时间）是TemporalAmount（时间量）的子类。</p>
<p>主要用在，instant的日期计算</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Instant</span> instant <span class="token operator">=</span> <span class="token class-name">Instant</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 当前的时间加五天</span>
<span class="token class-name">Instant</span> plus <span class="token operator">=</span> instant<span class="token punctuation">.</span><span class="token function">plus</span><span class="token punctuation">(</span><span class="token class-name">Duration</span><span class="token punctuation">.</span><span class="token function">ofDays</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token function">ofInstant</span><span class="token punctuation">(</span>plus<span class="token punctuation">,</span><span class="token class-name">ZoneId</span><span class="token punctuation">.</span><span class="token function">systemDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以轻易的通过of方法获取一段持续的时间，用来做计算。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Duration</span><span class="token punctuation">.</span><span class="token function">ofDays</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Duration</span><span class="token punctuation">.</span><span class="token function">ofHours</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Duration</span><span class="token punctuation">.</span><span class="token function">ofMinutes</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Duration</span><span class="token punctuation">.</span><span class="token function">ofSeconds</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Duration</span><span class="token punctuation">.</span><span class="token function">ofMillis</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 次方法时通用的，第一个参数是数字，第二个是单位，ChronoUnit是一个枚举类，就是枚举了一堆的时间单位：年月日时分秒。</span>
<span class="token class-name">Duration</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token class-name">ChronoUnit</span><span class="token punctuation">.</span>YEARS<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3、localdate" tabindex="-1"><a class="header-anchor" href="#_3、localdate" aria-hidden="true">#</a> 3、LocalDate</h5>
<p>（1）获取当前日期</p>
<p>使用<code v-pre>LocalDate</code>获取当前日期非常简单</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"LocalDate.now() = "</span> <span class="token operator">+</span> <span class="token class-name">LocalDate</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token number">2022</span><span class="token operator">-</span><span class="token number">07</span><span class="token operator">-</span><span class="token number">04</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不用任何格式化，输出结果就非常友好，如果使用<code v-pre>Date</code>，输出这样的格式，还得配合<code v-pre>SimpleDateFormat</code>指定<code v-pre>yyyy-MM-dd</code>进行格式化。</p>
<p>（2）获取年月日</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">LocalDate</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">LocalDate</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">LocalDate</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getMonthValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token number">2022</span>
JULY
<span class="token number">7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）指定日期</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">LocalDate</span> of <span class="token operator">=</span> <span class="token class-name">LocalDate</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token number">2022</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token number">2022</span><span class="token operator">-</span><span class="token number">06</span><span class="token operator">-</span><span class="token number">26</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（4）比较日期是否相等</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">LocalDate</span> of <span class="token operator">=</span> <span class="token class-name">LocalDate</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token number">2022</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>of<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">LocalDate</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">?</span><span class="token string">"相同"</span><span class="token operator">:</span><span class="token string">"不同"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
不同
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（5）获取日期是本周/本月/本年的第几天</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">LocalDate</span> today <span class="token operator">=</span> <span class="token class-name">LocalDate</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Today:"</span> <span class="token operator">+</span> today<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Today is:"</span> <span class="token operator">+</span> today<span class="token punctuation">.</span><span class="token function">getDayOfWeek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"今天是本周的第"</span> <span class="token operator">+</span> today<span class="token punctuation">.</span><span class="token function">getDayOfWeek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"天"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"今天是本月的第"</span> <span class="token operator">+</span> today<span class="token punctuation">.</span><span class="token function">getDayOfMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"天"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"今天是本年的第"</span> <span class="token operator">+</span> today<span class="token punctuation">.</span><span class="token function">getDayOfYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"天"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">Today</span><span class="token operator">:</span><span class="token number">2022</span><span class="token operator">-</span><span class="token number">07</span><span class="token operator">-</span><span class="token number">04</span>
<span class="token class-name">Today</span> is<span class="token operator">:</span>MONDAY
今天是本周的第<span class="token number">1</span>天
今天是本月的第<span class="token number">4</span>天
今天是本年的第<span class="token number">185</span>天
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（6）判断是否为闰年</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">LocalDate</span> today <span class="token operator">=</span> <span class="token class-name">LocalDate</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>today<span class="token punctuation">.</span><span class="token function">getYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">" is leap year:"</span> <span class="token operator">+</span> today<span class="token punctuation">.</span><span class="token function">isLeapYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4、localtime-localdatetime" tabindex="-1"><a class="header-anchor" href="#_4、localtime-localdatetime" aria-hidden="true">#</a> 4、LocalTime&amp;LocalDateTime</h5>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>System.out.println(LocalDate.now());//本地日期
System.out.println(LocalTime.now());//本地时间
System.out.println(LocalDateTime.now());//本地日前时间
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5、datetimeformatter" tabindex="-1"><a class="header-anchor" href="#_5、datetimeformatter" aria-hidden="true">#</a> 5、DateTimeFormatter</h5>
<p>JDK8中推出了<code v-pre>java.time.format.DateTimeFormatter</code>来处理日期格式化问题，《阿里巴巴Java开发手册》中也是建议使用<code v-pre>DateTimeFormatter</code>代替<code v-pre>SimpleDateFormat</code>，因为SimpleDateFormate不是线程安全的。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">LocalDate</span> today <span class="token operator">=</span> <span class="token class-name">LocalDate</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">DateTimeFormatter</span> dateTimeFormatter <span class="token operator">=</span> <span class="token class-name">DateTimeFormatter</span><span class="token punctuation">.</span><span class="token function">ofPattern</span><span class="token punctuation">(</span><span class="token string">"yyyy年MM月dd日"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">String</span> format <span class="token operator">=</span> today<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>dateTimeFormatter<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>format<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token number">2021</span>年<span class="token number">08</span>月<span class="token number">11</span>日
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>LocalDateTime today = LocalDateTime.now();
DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ISO_DATE_TIME;

String format = today.format(dateTimeFormatter);
System.out.println(format);

2021-08-11T14:55:08.259
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_6-类型相互转换" tabindex="-1"><a class="header-anchor" href="#_6-类型相互转换" aria-hidden="true">#</a> 6. 类型相互转换</h5>
<p>（1）Instant和Date</p>
<p>JDK8中，<code v-pre>Date</code>新增了<code v-pre>from()</code>方法，将<code v-pre>Instant</code>转换为<code v-pre>Date</code>，代码如下所示：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Date</span> date <span class="token operator">=</span> <span class="token class-name">Date</span><span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>instant<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Instant</span> dateToInstant <span class="token operator">=</span> date<span class="token punctuation">.</span><span class="token function">toInstant</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（2）Instance和LocalDateTime</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">LocalDateTime</span> localDateTime <span class="token operator">=</span> <span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token function">ofInstant</span><span class="token punctuation">(</span>instant<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Instant instant1 = LocalDateTime.now().toInstant(ZoneOffset.UTC);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（3）Date和LocalDateTime</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Date</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Instant</span> instant <span class="token operator">=</span> date<span class="token punctuation">.</span><span class="token function">toInstant</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">LocalDateTime</span> localDateTimeOfInstant <span class="token operator">=</span> <span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token function">ofInstant</span><span class="token punctuation">(</span>instant<span class="token punctuation">,</span> <span class="token class-name">ZoneId</span><span class="token punctuation">.</span><span class="token function">systemDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">LocalDateTime</span> localDateTime <span class="token operator">=</span> <span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Instant</span> toInstant <span class="token operator">=</span> localDateTime<span class="token punctuation">.</span><span class="token function">atZone</span><span class="token punctuation">(</span><span class="token class-name">ZoneId</span><span class="token punctuation">.</span><span class="token function">systemDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toInstant</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Date</span> dateFromInstant <span class="token operator">=</span> <span class="token class-name">Date</span><span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>toInstant<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-3关于时间的常用场景" tabindex="-1"><a class="header-anchor" href="#_8-3关于时间的常用场景" aria-hidden="true">#</a> 8.3关于时间的常用场景</h4>
<h5 id="_1-格式化" tabindex="-1"><a class="header-anchor" href="#_1-格式化" aria-hidden="true">#</a> 1.格式化</h5>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
//format yyyy-MM-dd
LocalDate date = LocalDate.now();
System.out.println(String.format("date format : %s", date));

//format HH:mm:ss
LocalTime time = LocalTime.now().withNano(0);//纳秒变化值
System.out.println(String.format("time format : %s", time));

//format yyyy-MM-dd HH:mm:ss
LocalDateTime dateTime = LocalDateTime.now();
DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
String dateTimeStr = dateTime.format(dateTimeFormatter);
System.out.println(String.format("dateTime format : %s", dateTimeStr));

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-日期计算" tabindex="-1"><a class="header-anchor" href="#_2-日期计算" aria-hidden="true">#</a> 2.日期计算</h5>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> //一周后的日期
 LocalDate localDate = LocalDate.now();
 //方法1
 LocalDate after = localDate.plus(1, ChronoUnit.WEEKS);//ChronoUnit:一组标准的日期单位。
 //方法2
 LocalDate after2 = localDate.plusWeeks(1);
 System.out.println("一周后日期：" + after);

//算两个日期间隔多少天，计算间隔多少年，多少月
LocalDate date1 = LocalDate.parse("2022-02-26");
LocalDate date2 = LocalDate.parse("2022-12-23");
Period period = Period.between(date1, date2);
System.out.println("date1 到 date2 相隔："
+ period.getYears() + "年"
+ period.getMonths() + "月"
+ period.getDays() + "天");//得到的天是抛去年月以外的天数，并不是总天数
//打印结果是 “date1 到 date2 相隔：0年9月27天”
//如果要获取纯粹的总天数应该用下面的方法
long day = date2.toEpochDay() - date1.toEpochDay();
System.out.println(date2 + "和" + date2 + "相差" + day + "天");
//打印结果：2022-12-23和2022-12-23相差300天
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-获取指定日期" tabindex="-1"><a class="header-anchor" href="#_3-获取指定日期" aria-hidden="true">#</a> 3.获取指定日期</h5>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>LocalDate today = LocalDate.now();
//获取当前月第一天:2022-07-01
LocalDate firstDayOfThisMonth = today.with(TemporalAdjusters.firstDayOfMonth());
// 取本月最后一天:2022-07-31
LocalDate lastDayOfThisMonth = today.with(TemporalAdjusters.lastDayOfMonth());
//取下一天:2022-08-01
LocalDate nextDay = lastDayOfThisMonth.plusDays(1);
//当年最后一天:2022-12-31
LocalDate lastday = today.with(TemporalAdjusters.lastDayOfYear());
//2022年最后一个周日:2022-12-25
LocalDate lastMondayOf2022 = LocalDate.parse("2022-1231").with(TemporalAdjusters.lastInMonth(DayOfWeek.SUNDAY));

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-时区" tabindex="-1"><a class="header-anchor" href="#_4-时区" aria-hidden="true">#</a> 4.时区</h5>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> //当前时区时间
 ZonedDateTime zonedDateTime = ZonedDateTime.now();
 System.out.println("当前时区时间: " + zonedDateTime);
 //当前时区时间: 2022-07-04T15:41:28.101+08:00[Asia/Shanghai]

//东京时间
ZoneId zoneId = ZoneId.of(ZoneId.SHORT_IDS.get("JST"));
ZonedDateTime tokyoTime = zonedDateTime.withZoneSameInstant(zoneId);
System.out.println("东京时间: " + tokyoTime);
//东京时间: 2022-07-04T16:41:28.101+09:00[Asia/Tokyo]

// ZonedDateTime 转 LocalDateTime
LocalDateTime localDateTime = tokyoTime.toLocalDateTime();
System.out.println("东京时间转当地时间: " + localDateTime);
//东京时间转当地时间: 2022-07-04T16:41:28.101


//LocalDateTime 转 ZonedDateTime
ZonedDateTime localZoned = localDateTime.atZone(ZoneId.systemDefault());
System.out.println("本地时区时间: " + localZoned);
//本地时区时间: 2022-07-04T16:41:28.101+08:00[Asia/Shanghai]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
