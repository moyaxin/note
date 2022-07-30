<template><div><p>异常处理</p>
<!-- more -->
<h1 id="_3-异常处理" tabindex="-1"><a class="header-anchor" href="#_3-异常处理" aria-hidden="true">#</a> 3.异常处理</h1>
<h3 id="_1、异常体系结构" tabindex="-1"><a class="header-anchor" href="#_1、异常体系结构" aria-hidden="true">#</a> 1、异常体系结构</h3>
<ul>
<li>java.lang.Throwable
<ul>
<li>java.lang.Error：一般不编写针对性的代码进行处理</li>
<li>java.lang.Exception：可以进行异常的处理
<ul>
<li>编译时异常(checked)
<ul>
<li>IOException
<ul>
<li>FileNotFoundException</li>
</ul>
</li>
<li>ClassNotFoundException  找不到某个类</li>
<li>SQLException</li>
<li>InterruptedException  当阻塞方法收到中断请求的时候就会抛出中断异常</li>
</ul>
</li>
<li>运行时异常(unchecked)
<ul>
<li>NullPointerException    空指针引用异常</li>
<li>ArrayIndexOutOfBoundsException  数组下标越界</li>
<li>ClassCastException  类型转换异常</li>
<li>NumberFormatException  数字格式异常</li>
<li>InputMismatchException  输入类型不匹配异常</li>
<li>ArithmeticException  算术运算异常</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="自定义异常" tabindex="-1"><a class="header-anchor" href="#自定义异常" aria-hidden="true">#</a> 自定义异常</h4>
<p>在 Java 中你可以自定义异常。编写自己的异常类时需要记住下面的几点。</p>
<ul>
<li>所有异常都必须是 Throwable 的子类。</li>
<li>如果希望写一个检查性异常类，则需要继承 Exception 类。</li>
<li>如果你想写一个运行时异常类，那么需要继承 RuntimeException 类</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> throw new RuntimeException("您输入的数字不合法");
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2、异常处理的方式一-try-catch-finally" tabindex="-1"><a class="header-anchor" href="#_2、异常处理的方式一-try-catch-finally" aria-hidden="true">#</a> 2、异常处理的方式一：try-catch-finally</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code> <span class="token keyword">try</span> <span class="token punctuation">{</span>
   <span class="token comment">//可能出现异常的代码</span>
 <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>异常类型<span class="token number">1</span> 变量名<span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">//处理异常的方式1</span>
 <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>异常类型<span class="token number">2</span> 变量名<span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">//处理异常的方式2</span>
 <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>异常类型<span class="token number">3</span> 变量名<span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">//处理异常的方式3</span>
 <span class="token punctuation">}</span>
 <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
 <span class="token keyword">finally</span> <span class="token punctuation">{</span>
   <span class="token comment">//一定会执行的代码</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="try-catch-finally的说明" tabindex="-1"><a class="header-anchor" href="#try-catch-finally的说明" aria-hidden="true">#</a> try-catch-finally的说明</h4>
<ul>
<li>使用try将可能出现异常代码包装起来。在执行过程之，一旦出现异常，就会生成一个对应异常类的对象，根据此对象的类型，去catch中进行匹配</li>
<li>一旦try中的异常对象匹配到某一个catch时，就进入catch中进行异常的处理。一旦处理完成，就跳出当前的try-catch结构（在没有写finally的情况）。继续执行其后的代码</li>
<li>catch中的异常类型如果没有子父类关系，则谁声明在上，谁声明在下无所谓；如果满足子父类关系，则要求子类一定声明在父类的上面，否则报错。</li>
<li>常用的异常对象处理的方式：
<ul>
<li>String getMessage()</li>
<li>printStackTrace()</li>
</ul>
</li>
<li>在try结构中声明的变量，在出了try结构以后，就不能再被调用</li>
<li>try-catch-finally结构可以嵌套</li>
</ul>
<h4 id="try-catch-finally的体会" tabindex="-1"><a class="header-anchor" href="#try-catch-finally的体会" aria-hidden="true">#</a> try-catch-finally的体会</h4>
<ul>
<li>使用try-catch-finally处理编译时异常，使得程序在编译时就不再报错，但是运行时仍可能报错。相当于我们使用try-catch-finally将一个编译时可能出现的异常，延迟到运行时出现。</li>
<li>开发中，由于运行时异常比较常见，所以我们通常就不针对运行时异常编写try-catch-finally了。针对编译时异常，我们一定要考虑异常的处理。</li>
</ul>
<h4 id="finally的说明" tabindex="-1"><a class="header-anchor" href="#finally的说明" aria-hidden="true">#</a> finally的说明</h4>
<ul>
<li>finally是可选的</li>
<li>finally中声明的是一定会被执行的代码。即使catch中又出现异常了，try中有return语句，catch中有return语句等情况。</li>
<li>像数据库连接、输入输出流、网络编程Socket等资源，JVM是不能自动的回收的，我们需要自己手动的进行资源的释放。此时的资源释放，就需要声明在finally中。</li>
</ul>
<h3 id="_3、异常处理的方式二-throws-异常类型" tabindex="-1"><a class="header-anchor" href="#_3、异常处理的方式二-throws-异常类型" aria-hidden="true">#</a> 3、异常处理的方式二：throws + 异常类型</h3>
<ul>
<li>&quot;throws + 异常类型&quot;写在方法的声明处。指明此方法执行时，可能会抛出的异常类型。一旦当方法体执行时，出现异常，仍会在异常代码处生成一个异常类的对象，此对象满足throws后异常类型时，就会被抛出。异常代码后续的代码，就不再执行！</li>
<li>try-catch-finally：真正的将异常给处理掉了；throws的方式只是将异常抛给了方法的调用者，并没有真正将异常处理掉。</li>
<li>开发中如何选择使用try-catch-finally还是使用throws？
<ul>
<li>如果父类中被重写的方法没有throws方式处理异常，则子类重写的方法也不能使用throws，意味着如果子类重写的方法中有异常，必须使用try-catch-finally方式处理</li>
<li>执行的方法a中，先后又调用了另外的几个方法，这几个方法是递进关系执行的。我们建议这几个方法使用throws的方式进行处理。而执行的方法a可以考虑是用try-catch-finally方式进行处理。</li>
</ul>
</li>
</ul>
<h3 id="_4、自定义异常类" tabindex="-1"><a class="header-anchor" href="#_4、自定义异常类" aria-hidden="true">#</a> 4、自定义异常类</h3>
<ul>
<li>继承于现有的异常结构：RuntimeException、Exception</li>
<li>提供全局常量：serialVersionUID</li>
<li>提供重载的构造器</li>
</ul>
</div></template>
