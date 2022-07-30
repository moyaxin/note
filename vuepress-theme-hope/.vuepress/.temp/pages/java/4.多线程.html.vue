<template><div><p>多线程</p>
<!-- more -->
<h1 id="_4-多线程" tabindex="-1"><a class="header-anchor" href="#_4-多线程" aria-hidden="true">#</a> 4.多线程</h1>
<h3 id="_1、基本概念-程序、进程、线程" tabindex="-1"><a class="header-anchor" href="#_1、基本概念-程序、进程、线程" aria-hidden="true">#</a> 1、基本概念：程序、进程、线程</h3>
<h4 id="_1-1、程序" tabindex="-1"><a class="header-anchor" href="#_1-1、程序" aria-hidden="true">#</a> 1.1、程序</h4>
<ul>
<li>概念：是为完成特定任务、用某种语言编写的一组指令的集合。即指一段静态的代码。</li>
</ul>
<h4 id="_1-2、进程" tabindex="-1"><a class="header-anchor" href="#_1-2、进程" aria-hidden="true">#</a> 1.2、进程</h4>
<ul>
<li>概念：程序的一次执行过程，或是正在运行的一个程序。</li>
<li>说明：进程作为资源分配的单位，系统在运行时会为每个进程分配不同的内存区域。</li>
</ul>
<h4 id="_1-3、线程" tabindex="-1"><a class="header-anchor" href="#_1-3、线程" aria-hidden="true">#</a> 1.3、线程</h4>
<ul>
<li>概念：进程可进一步细化为线程，是一个程序内部的一条执行路径。</li>
<li>说明：线程作为调度和执行的单位，每个线程拥有独立的运行栈和程序计数器(pc)，线程切换的开销小。</li>
<li>每个线程，拥有自己独立的：虚拟机栈、程序计数器</li>
<li>多个线程，共享同一个进程中的结构：方法区、堆</li>
</ul>
<h4 id="_1-4、单核cpu和多核cpu的理解" tabindex="-1"><a class="header-anchor" href="#_1-4、单核cpu和多核cpu的理解" aria-hidden="true">#</a> 1.4、单核CPU和多核CPU的理解</h4>
<ul>
<li>单核CPU，其实是一种假的多线程，因为在一个时间单元内，也只能执行一个线程的任务。但是因为CPU时间单元特别短，因此感觉不出来。</li>
<li>如果是多核的话，才能更好的发挥多线程的效率。</li>
<li>一个Java应用程序java.exe，其实至少有三个线程：main()主线程，gc()垃圾回收线程，异常处理线程。当然如果发生异常，会影响主线程。</li>
</ul>
<h4 id="_1-5、并行与并发" tabindex="-1"><a class="header-anchor" href="#_1-5、并行与并发" aria-hidden="true">#</a> 1.5、并行与并发</h4>
<ul>
<li>并行：多个CPU同时执行多个任务。</li>
<li>并发：一个CPU（采用时间片）同时执行多个任务。</li>
</ul>
<h4 id="_1-6、使用多线程的优点" tabindex="-1"><a class="header-anchor" href="#_1-6、使用多线程的优点" aria-hidden="true">#</a> 1.6、使用多线程的优点</h4>
<ul>
<li>背景：以单个CPU为例，只使用单个线程先后完成多个任务（调用多个方法），肯定比用多个线程来完成用的时间更短，为何仍需多线程呢？</li>
<li>多线程程序的优点：
<ul>
<li>1、提高应用程序的响应。对图形化界面更有意义，可增强用户体验。</li>
<li>2、提高计算机系统CPU的利用率</li>
<li>3、改善程序结构。将既长又复杂的进程分为多个线程，独立运行，利于理解和修改</li>
</ul>
</li>
</ul>
<h4 id="_1-7、何时需要多线程" tabindex="-1"><a class="header-anchor" href="#_1-7、何时需要多线程" aria-hidden="true">#</a> 1.7、何时需要多线程</h4>
<ul>
<li>程序需要同时执行两个或多个任务</li>
<li>程序需要实现一些需要等待的任务时，如用户输入、文件读写操作、网络操作、搜索等。</li>
<li>需要一些后台运行的程序时。</li>
</ul>
<h3 id="_2、线程的创建和使用" tabindex="-1"><a class="header-anchor" href="#_2、线程的创建和使用" aria-hidden="true">#</a> 2、线程的创建和使用</h3>
<h4 id="_2-1、创建多线程的方式一-继承thread类" tabindex="-1"><a class="header-anchor" href="#_2-1、创建多线程的方式一-继承thread类" aria-hidden="true">#</a> 2.1、创建多线程的方式一：继承Thread类</h4>
<ul>
<li>1、创建一个继承于Thread类的子类</li>
<li>2、重写Thread类的run() --&gt; 将此线程执行的操作声明在run()中</li>
<li>3、创建Thread类的子类的对象</li>
<li>4、通过此对象调用start()，start()的作用：
<ul>
<li>1、启动当前线程</li>
<li>2、调用当前线程的run()</li>
</ul>
</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//1、创建一个继承于Thread类的子类</span>
 <span class="token keyword">class</span> <span class="token class-name">MyThread</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span> <span class="token punctuation">{</span>
     <span class="token comment">//2、重写Thread类的run()</span>
     <span class="token annotation punctuation">@Override</span>
     <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                 <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ThreadTest</span> <span class="token punctuation">{</span>
     <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token comment">//3、创建Thread类的子类的对象</span>
         <span class="token class-name">MyThread</span> t1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
         <span class="token comment">//4、通过此对象调用start()</span>
         t1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
         <span class="token comment">// 或者通过创建Thread类的匿名子类的方式</span>
         <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             <span class="token annotation punctuation">@Override</span>
             <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                 <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                     <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                         <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">":"</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
                     <span class="token punctuation">}</span>
                 <span class="token punctuation">}</span>
             <span class="token punctuation">}</span>
         <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>注意点1：我们不能通过直接调用run()的方式启动线程</li>
<li>注意点2：再启动一个线程需要重新创建一个线程的对象，不可以让已经start()的线程再start()，否则会报IllegalThreadStateException异常</li>
</ul>
<h4 id="_2-2、thread类的有关方法" tabindex="-1"><a class="header-anchor" href="#_2-2、thread类的有关方法" aria-hidden="true">#</a> 2.2、Thread类的有关方法</h4>
<ul>
<li>void start():启动当前线程，调用当前线程的run()</li>
<li>run():通常需要重写Thread类中的此方法，将创建的线程要执行的操作声明在此方法中</li>
<li>String getName():获取当前线程的名字</li>
<li>void setName(String name):设置当前线程的名字</li>
<li>static Thread currentThread():静态方法，获取执行当前代码的线程</li>
<li>static void yield():释放当前CPU的执行权</li>
<li>join():在线程a中调用线程b的join()，此时线程a就进入阻塞状态，直到线程b完全执行完以后，线程a才结束阻塞状态</li>
<li>static void sleep(long millitime):让当前线程“睡眠”指定的millitime毫秒。在指定的millitime毫秒时间内，当前线程是阻塞状态。</li>
<li>stop():已过时。当执行此方法时，强制结束当前线程。</li>
<li>boolean isAlive():判断当前线程是否存活</li>
</ul>
<h4 id="_2-3、线程的调度" tabindex="-1"><a class="header-anchor" href="#_2-3、线程的调度" aria-hidden="true">#</a> 2.3、线程的调度</h4>
<ul>
<li>调度策略
<ul>
<li>时间片</li>
<li>抢占式：高优先级的线程抢占CPU</li>
</ul>
</li>
<li>Java的调度方法
<ul>
<li>同优先级线程组成先进先出队列，使用时间片策略</li>
<li>对高优先级，使用优先调度的抢占式策略</li>
</ul>
</li>
</ul>
<h4 id="_2-4、线程的优先级" tabindex="-1"><a class="header-anchor" href="#_2-4、线程的优先级" aria-hidden="true">#</a> 2.4、线程的优先级</h4>
<ul>
<li>线程的优先等级
<ul>
<li>MAX_PRIORITY:10</li>
<li>MIN_PRIORITY:1</li>
<li>NORM_PRIORITY:5 --&gt; 默认优先级</li>
</ul>
</li>
<li>涉及的方法
<ul>
<li>getPriority():获取线程的优先级</li>
<li>setPriority(int newPriority):设置线程的优先级</li>
</ul>
</li>
<li>线程创建时继承父线程的优先级</li>
<li>低优先级只是获得调度的概率低，并非一定是在高优先级线程之后才被调度</li>
</ul>
<h4 id="_2-5、创建多线程的方式二-实现runnable接口" tabindex="-1"><a class="header-anchor" href="#_2-5、创建多线程的方式二-实现runnable接口" aria-hidden="true">#</a> 2.5、创建多线程的方式二：实现Runnable接口</h4>
<ul>
<li>1、创建一个实现了Runnable接口的类</li>
<li>2、实现类去实现Runnable中的抽象方法：run()</li>
<li>3、创建实现类的对象</li>
<li>4、将此对象作为参数传递到Thread类的构造器中，创建Thread类的对象</li>
<li>5、通过Thread类的对象调用start()</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//1、创建一个实现了Runnable接口的类</span>
 <span class="token keyword">class</span> <span class="token class-name">MThread</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span> <span class="token punctuation">{</span>
     <span class="token comment">//2、实现类去实现Runnable中的抽象方法：run()</span>
     <span class="token annotation punctuation">@Override</span>
     <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                 <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 
 <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ThreadTest1</span> <span class="token punctuation">{</span>
     <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token comment">//3、创建实现类的对象</span>
         <span class="token class-name">MThread</span> mThread <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token comment">//4、将此对象作为参数传递到Thread类的构造器中，创建Thread类的对象</span>
         <span class="token class-name">Thread</span> t1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>mThread<span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token comment">//5、通过Thread类的对象调用start():启动线程，调用当前线程的run() --> 调用了Runnable类型的target的run()</span>
         t1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
         <span class="token comment">//再启动一个线程</span>
         <span class="token class-name">Thread</span> t2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>mThread<span class="token punctuation">)</span><span class="token punctuation">;</span>
         t2<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-6、比较创建线程的两种方式" tabindex="-1"><a class="header-anchor" href="#_2-6、比较创建线程的两种方式" aria-hidden="true">#</a> 2.6、比较创建线程的两种方式</h4>
<ul>
<li>开发中：优先选择实现Runnable接口的方式
<ul>
<li>1、实现的方式没有类的单继承性的局限性</li>
<li>2、实现的方式更适合来处理多个线程有共享数据的情况</li>
</ul>
</li>
<li>联系：public class Thread implements Runnable</li>
<li>相同点：两种方式都需要重写run()，将线程要执行的逻辑声明在run()中</li>
</ul>
<h3 id="_3、线程的生命周期及五种状态" tabindex="-1"><a class="header-anchor" href="#_3、线程的生命周期及五种状态" aria-hidden="true">#</a> 3、线程的生命周期及五种状态</h3>
<p><img src="https://cdn.nlark.com/yuque/0/2022/png/26424970/1647690768930-73d8c92e-4cc3-4c99-949e-4f4da9a6c696.png#crop=0&amp;crop=0&amp;crop=1&amp;crop=1&amp;id=SZBgS&amp;originHeight=492&amp;originWidth=876&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;title=" alt="" loading="lazy">
<strong>新建(new)</strong>：新创建了一个线程对象。
<strong>可运行(runnable)</strong>：线程对象创建后，当调用线程对象的 start()方法，该线程处于就绪状态，等待被线程调度选中，获取cpu的使用权。
<strong>运行(running)</strong>：可运行状态(runnable)的线程获得了cpu时间片（timeslice），执行程序代码。
注：就绪状态是进入到运行状态的唯一入口，也就是说，线程要想进入运行状态执行，首先必须处于就绪状态中；
<strong>阻塞(block)</strong>：处于运行状态中的线程由于某种原因，暂时放弃对 CPU的使用权，停止执行，此时进入阻塞状态，直到其进入到就绪状态，才 有机会再次被 CPU 调用以进入到运行状态。</p>
<hr>
<p><strong>阻塞的情况分三种:</strong>
(一). 等待阻塞：运行状态中的线程执行 wait()方法，JVM会把该线程放入等待队列(waitting queue)中，使本线程进入到等待阻塞状态；(二). 同步阻塞：线程在获取 synchronized 同步锁失败(因为锁被其它线程所占用)，则JVM会把该线程放入锁池(lock pool)中，线程会进入同步阻塞状态；(三). 其他阻塞: 通过调用线程的 sleep()或 join()或发出了 I/O 请求时，线程会进入到阻塞状态。当 sleep()状态超时、join()等待线程终止或者超时、或者 I/O 处理完毕时，线程重新转入就绪状态。</p>
<hr>
<p><strong>死亡(dead)</strong>：线程run()、main()方法执行结束，或者因异常退出了run()方法，则该线程结束生命周期。死亡的线程不可再次复生。</p>
<h3 id="_4、线程的同步" tabindex="-1"><a class="header-anchor" href="#_4、线程的同步" aria-hidden="true">#</a> 4、线程的同步</h3>
<h4 id="_4-1、线程同步方式一-同步代码块" tabindex="-1"><a class="header-anchor" href="#_4-1、线程同步方式一-同步代码块" aria-hidden="true">#</a> 4.1、线程同步方式一：同步代码块</h4>
<p>synchronized(同步监视器) {
     // 需要被同步的代码
 }</p>
<ul>
<li>1、操作共享数据的代码，即为需要被同步的代码</li>
<li>2、共享数据：多个线程共同操作的变量。</li>
<li>3、同步监视器，俗称：锁。任何一个类的对象，都可以充当锁。
<ul>
<li>要求：多个线程必须要共用同一把锁。</li>
</ul>
</li>
<li>补充：在实现Runnable接口创建多线程的方式中，我们可以考虑使用this充当同步监视器</li>
<li>在继承Thread类创建多线程的方式中，慎用this充当同步监视器，考虑使用当前类充当同步监视器</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code> <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Window1</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span><span class="token punctuation">{</span>
     <span class="token keyword">private</span> <span class="token keyword">int</span> ticket <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
     <span class="token class-name">Object</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
     <span class="token annotation punctuation">@Override</span>
     <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             <span class="token comment">//正确，只要保证多个线程使用同一个对象当做锁即可</span>
             <span class="token comment">// synchronized (obj) {</span>
             <span class="token comment">// 此时的this：唯一的Window1的对象</span>
             <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                 <span class="token keyword">if</span> <span class="token punctuation">(</span>ticket <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                     <span class="token keyword">try</span> <span class="token punctuation">{</span>
                         <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                     <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                         e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                     <span class="token punctuation">}</span>
                     <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">":"</span> <span class="token operator">+</span> ticket<span class="token punctuation">)</span><span class="token punctuation">;</span>
                     ticket<span class="token operator">--</span><span class="token punctuation">;</span>
                 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                     <span class="token keyword">break</span><span class="token punctuation">;</span>
                 <span class="token punctuation">}</span>
             <span class="token punctuation">}</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Window2</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span><span class="token punctuation">{</span>
     <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> ticket <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
     <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Object</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
     <span class="token annotation punctuation">@Override</span>
     <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             <span class="token comment">//正确</span>
             <span class="token comment">// synchronized (obj) {</span>
             <span class="token comment">// 错误，因为通过继承Thread方式，需要通过不同的对象来创建线程</span>
             <span class="token comment">// 此时的this代表着不同的对象 </span>
             <span class="token comment">// synchronized (this) {</span>
             <span class="token comment">// 正确，Class clazz = Window2.class，Window2.class只会加载一次</span>
             <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token class-name">Window2</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                 <span class="token keyword">if</span> <span class="token punctuation">(</span>ticket <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                     <span class="token keyword">try</span> <span class="token punctuation">{</span>
                         <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                     <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                         e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                     <span class="token punctuation">}</span>
                     <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">":"</span> <span class="token operator">+</span> ticket<span class="token punctuation">)</span><span class="token punctuation">;</span>
                     ticket<span class="token operator">--</span><span class="token punctuation">;</span>
                 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                     <span class="token keyword">break</span><span class="token punctuation">;</span>
                 <span class="token punctuation">}</span>
             <span class="token punctuation">}</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>好处：同步的方式，解决了线程的安全问题。</li>
<li>局限性：操作同步代码时，只能有一个线程参与，其他线程等待。相当于一个单线程的过程，效率低。</li>
</ul>
<h4 id="_4-2、线程同步方式二-同步方法" tabindex="-1"><a class="header-anchor" href="#_4-2、线程同步方式二-同步方法" aria-hidden="true">#</a> 4.2、线程同步方式二：同步方法</h4>
<ul>
<li>同步方法仍然涉及到同步监视器，只是不需要我们显式的声明。</li>
<li>非静态的同步方法，同步监视器是：this；静态的同步方法，同步监视器是：当前类本身</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Window3</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span><span class="token punctuation">{</span>
     <span class="token keyword">private</span> <span class="token keyword">int</span> ticket <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
 
     <span class="token annotation punctuation">@Override</span>
     <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
 
     <span class="token keyword">private</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> show <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//同步监视器：this</span>
         <span class="token keyword">if</span> <span class="token punctuation">(</span>ticket <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             <span class="token keyword">try</span> <span class="token punctuation">{</span>
                 <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                 e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span>
             <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">":"</span> <span class="token operator">+</span> ticket<span class="token punctuation">)</span><span class="token punctuation">;</span>
             ticket<span class="token operator">--</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Window4</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span> <span class="token punctuation">{</span>
     <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> ticket <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
 
     <span class="token annotation punctuation">@Override</span>
     <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
 
     <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> show <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//同步监视器：Window4.class</span>
         <span class="token keyword">if</span> <span class="token punctuation">(</span>ticket <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             <span class="token keyword">try</span> <span class="token punctuation">{</span>
                 <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                 e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span>
             <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">":"</span> <span class="token operator">+</span> ticket<span class="token punctuation">)</span><span class="token punctuation">;</span>
             ticket<span class="token operator">--</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-3、设计模式-单例模式" tabindex="-1"><a class="header-anchor" href="#_4-3、设计模式-单例模式" aria-hidden="true">#</a> 4.3、设计模式：单例模式</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code> <span class="token comment">// 饿汉式</span>
 <span class="token keyword">class</span> <span class="token class-name">Bank</span> <span class="token punctuation">{</span>
     <span class="token comment">// 1、私有化类的构造器</span>
     <span class="token keyword">private</span> <span class="token class-name">Bank</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
     <span class="token comment">// 2、内部创建类的对象</span>
     <span class="token comment">// 4、要求此对象也必须声明为静态的</span>
     <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Bank</span> instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bank</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token comment">// 3、提供公共的静态的方法，返回类的对象</span>
     <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Bank</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 
 <span class="token comment">// 懒汉式方式一：同步方法</span>
 <span class="token keyword">class</span> <span class="token class-name">Order</span> <span class="token punctuation">{</span>
     <span class="token comment">// 1、私有化类的构造器</span>
     <span class="token keyword">private</span> <span class="token class-name">Order</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
     <span class="token comment">// 2、声明当前类对象，没有初始化</span>
     <span class="token comment">// 4、此对象也必须声明为static的</span>
     <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Order</span> instance <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
     <span class="token comment">// 3、声明public、static的返回当前类对象的方法</span>
     <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">synchronized</span> <span class="token class-name">Order</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">if</span> <span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Order</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
         <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 
 <span class="token comment">// 懒汉式方式二：同步代码块</span>
 <span class="token keyword">class</span> <span class="token class-name">Order</span> <span class="token punctuation">{</span>
     <span class="token comment">// 1、私有化类的构造器</span>
     <span class="token keyword">private</span> <span class="token class-name">Order</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
     <span class="token comment">// 2、声明当前类对象，没有初始化</span>
     <span class="token comment">// 4、此对象也必须声明为static的</span>
     <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Order</span> instance <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
     <span class="token comment">// 3、声明public、static的返回当前类对象的方法</span>
     <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Order</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">// 方式一：效率稍差</span>
     <span class="token comment">// synchronized (Order.class) {</span>
     <span class="token comment">//     if (instance == null) {</span>
     <span class="token comment">//      instance = new Order();</span>
     <span class="token comment">//     }</span>
     <span class="token comment">//     return instance;</span>
     <span class="token comment">// }</span>
     <span class="token comment">// 方式二：效率更高</span>
     <span class="token keyword">if</span> <span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token class-name">Order</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">if</span> <span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Order</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
       <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
         <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-4、线程的死锁问题" tabindex="-1"><a class="header-anchor" href="#_4-4、线程的死锁问题" aria-hidden="true">#</a> 4.4、线程的死锁问题</h4>
<ul>
<li>死锁
<ul>
<li>不同的线程分别占用对方需要的同步资源不放弃，都在等待对方放弃自己需要的同步资源，就形成了线程的死锁</li>
<li>出现死锁后，不会出现异常，不会出现提示，只是所有的线程都处于阻塞状态，无法继续</li>
</ul>
</li>
<li>解决方法
<ul>
<li>专门的算法、原则</li>
<li>尽量减少同步资源的定义</li>
<li>尽量避免嵌套同步</li>
</ul>
</li>
</ul>
<h4 id="_4-5、线程同步方式三-lock-锁" tabindex="-1"><a class="header-anchor" href="#_4-5、线程同步方式三-lock-锁" aria-hidden="true">#</a> 4.5、线程同步方式三：Lock（锁）</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Window</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span> <span class="token punctuation">{</span>
     <span class="token keyword">private</span> <span class="token keyword">int</span> ticket <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
     <span class="token comment">// 1、实例化ReentrantLock</span>
     <span class="token keyword">private</span> <span class="token class-name">ReentrantLock</span> lock <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReentrantLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
     <span class="token annotation punctuation">@Override</span>
     <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             <span class="token keyword">try</span> <span class="token punctuation">{</span>
                 <span class="token comment">// 2、调用锁定方法lock()</span>
                 lock<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
                 <span class="token keyword">if</span> <span class="token punctuation">(</span>ticket <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                     <span class="token keyword">try</span> <span class="token punctuation">{</span>
                         <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                     <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                         e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                     <span class="token punctuation">}</span>
 
                     <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">":"</span> <span class="token operator">+</span> ticket<span class="token punctuation">)</span><span class="token punctuation">;</span>
                     ticket<span class="token operator">--</span><span class="token punctuation">;</span>
                 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                     <span class="token keyword">break</span><span class="token punctuation">;</span>
                 <span class="token punctuation">}</span>
             <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
                 <span class="token comment">// 3、调用解锁方法：unlock()</span>
                 lock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>面试题：synchronized与lock的异同？
<ul>
<li>相同：二者都可以解决线程安全问题</li>
<li>不同：synchronized机制在执行完相应的同步代码以后，自动的释放同步监视器；Lock需要手动的启动同步(Lock())，同时结束同步也需要手动的实现(unlock())</li>
</ul>
</li>
<li>优先使用顺序：
<ul>
<li>Lock --&gt; 同步代码块 --&gt; 同步方法</li>
</ul>
</li>
</ul>
<h3 id="_5、线程的通信" tabindex="-1"><a class="header-anchor" href="#_5、线程的通信" aria-hidden="true">#</a> 5、线程的通信</h3>
<ul>
<li>涉及到的三个方法：
<ul>
<li>wait()：一旦执行此方法，当前线程就进入阻塞状态，并释放同步监视器</li>
<li>notify()：一旦执行此方法，就会唤醒被wait()的一个线程。如果有多个线程被wait，就唤醒优先级高的线程。</li>
<li>notifyAll()：一旦执行此方法，就会唤醒所有被wait的线程</li>
</ul>
</li>
<li>说明：
<ul>
<li>wait()，notify()，notifyAll()三个方法必须使用在同步代码块或同步方法中</li>
<li>wait()，notify()，notifyAll()三个方法的调用者必须是同步代码块或同步方法中的同步监视器，否则会出现IllegalMonitorStateException异常</li>
<li>wait()，notify()，notifyAll()三个方法是定义在java.lang.Object类中</li>
</ul>
</li>
<li>面试题：sleep() 和 wait() 的异同？
<ul>
<li>相同点：一旦执行方法，都可以使得当前的线程进入阻塞状态</li>
<li>不同点：
<ul>
<li>1、两个方法声明的位置不同：Thread类中声明sleep()，Object类中声明wait()</li>
<li>2、调用的要求不同：sleep()可以在任何需要的场景下调用。wait()必须使用在同步代码块中</li>
<li>3、关于是否释放同步监视器：如果两个方法都使用在同步代码块或同步方法中，sleep()不会释放锁，wait()会释放锁</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="_6、jdk5-0新增线程创建方式" tabindex="-1"><a class="header-anchor" href="#_6、jdk5-0新增线程创建方式" aria-hidden="true">#</a> 6、JDK5.0新增线程创建方式</h3>
<h4 id="_6-1、新增方式一-实现callable接口" tabindex="-1"><a class="header-anchor" href="#_6-1、新增方式一-实现callable接口" aria-hidden="true">#</a> 6.1、新增方式一：实现Callable接口</h4>
<ul>
<li>与使用Runnable相比，Callable功能更强大些
<ul>
<li>相比run()方法，可以有返回值</li>
<li>方法可以抛出异常</li>
<li>支持泛型的返回值</li>
<li>需要借助FutureTask类，比如获取返回结果</li>
</ul>
</li>
<li>Future接口
<ul>
<li>可以对具体Runnable、Callable任务的执行结果进行取消、查询是否完成、获取结果等。</li>
<li>FutrueTask是Futrue接口的唯一实现类</li>
<li>FutrueTask同时实现了Runnable，Future接口。它既可以作为Runnable被线程执行，又可以作为Future得到Callable的返回值</li>
</ul>
</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code> <span class="token comment">// 1、创建一个实现Callable的实现类</span>
 <span class="token keyword">class</span> <span class="token class-name">NumThread</span> <span class="token keyword">implements</span> <span class="token class-name">Callable</span> <span class="token punctuation">{</span>
     <span class="token comment">// 2、实现call方法，将此线程需要执行的操作声明在call()中</span>
     <span class="token annotation punctuation">@Override</span>
     <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
         <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
         <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                 <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
                 sum <span class="token operator">+=</span> i<span class="token punctuation">;</span>
             <span class="token punctuation">}</span>
         <span class="token punctuation">}</span>
         <span class="token keyword">return</span> sum<span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 
 <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ThreadNew</span> <span class="token punctuation">{</span>
     <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token comment">// 3、创建Callable接口实现类的对象</span>
         <span class="token class-name">NumThread</span> numThread <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NumThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token comment">// 4、将此Callable接口实现类的对象作为传递到FutureTask构造器中，创建FutureTask的对象</span>
         <span class="token class-name">FutureTask</span> futureTask <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FutureTask</span><span class="token punctuation">(</span>numThread<span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token comment">// 5、将FutureTask的对象作为参数传递到Thread类的构造器中，创建Thread对象，并调用start()</span>
         <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>futureTask<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
         <span class="token keyword">try</span> <span class="token punctuation">{</span>
             <span class="token comment">// 6、获取Callable中call方法的返回值</span>
             <span class="token comment">// get()返回值即为FutureTask构造器参数Callable实现类重写的call()的返回值</span>
             <span class="token class-name">Object</span> sum <span class="token operator">=</span> futureTask<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"总和为："</span> <span class="token operator">+</span> sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ExecutionException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
             e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
             e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-2、新增方式二-使用线程池" tabindex="-1"><a class="header-anchor" href="#_6-2、新增方式二-使用线程池" aria-hidden="true">#</a> 6.2、新增方式二：使用线程池</h4>
<ul>
<li>背景：经常创建和销毁、使用量特别大的资源，比如并发情况下的线程，对性能影响很大</li>
<li>思路：提前创建好多个线程，放入线程池中，使用时直接获取，使用完放回池中。可以避免频繁创建销毁、实现重复利用。</li>
<li>好处：
<ul>
<li>提高响应速度（减少了创建新线程的时间）</li>
<li>降低资源消耗（重复利用线程池中线程，不需要每次都创建）</li>
<li>便于线程管理
<ul>
<li>corePoolSize：核心池的大小</li>
<li>maximumPoolSize：最大线程数</li>
<li>keepAliveTime：线程没有任务时最多保持多长时间后会终止</li>
</ul>
</li>
</ul>
</li>
<li>ExecutorService：真正的线程池接口。常见子类ThreadPoolExecutor
<ul>
<li>void execute(Runnable command)：执行任务/命令，没有返回值，一般用来执行Runnable</li>
<li>Future submit(Callable task)：执行任务，有返回值，一般用来执行Callable</li>
<li>void shutdown()：关闭连接池</li>
</ul>
</li>
<li>Executors：工具类、线程池的工厂类，用于创建并返回不同类型的线程池
<ul>
<li>Executors.newCachedThreadPool()：创建一个可根据需要创建新线程的线程池</li>
<li>Executors.newFixedThreadPool(n)：创建一个可重用固定线程数的线程池</li>
<li>Executors.newSingleThreadPool()：创建一个只有一个线程的线程池</li>
<li>Executors.newScheduledThreadPool(n)：创建一个线程池，它可安排在给定延迟后运行命令或者定期地执行</li>
</ul>
</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code> <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ThreadPool</span> <span class="token punctuation">{</span>
     <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token comment">// 1、提供指定线程数量的线程池</span>
         <span class="token class-name">ExecutorService</span> service <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newFixedThreadPool</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token comment">// 2、执行指定的线程的操作。需要提供实现Runnable接口或Callable接口实现类的对象</span>
         service<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">NumberThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 适用于实现Runnable接口的线程</span>
         service<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">NumberThread1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 适用于实现Callable接口的线</span>
         <span class="token comment">// 3、关闭连接池</span>
         service<span class="token punctuation">.</span><span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7、附加-关于锁的操作" tabindex="-1"><a class="header-anchor" href="#_7、附加-关于锁的操作" aria-hidden="true">#</a> 7、附加：关于锁的操作</h3>
<h4 id="_7-1、释放锁的操作" tabindex="-1"><a class="header-anchor" href="#_7-1、释放锁的操作" aria-hidden="true">#</a> 7.1、释放锁的操作</h4>
<ul>
<li>当前线程的同步方法、同步代码块执行结束</li>
<li>当前线程在同步代码块、同步方法中遇到break、return终止了该代码块、该方法的继续执行。</li>
<li>当前线程在同步代码块、同步方法中出现了未处理的Error或Exception，导致异常结束</li>
<li>当前线程在同步代码块、同步方法中执行了线程对象的wait()方法，当前线程暂停，并释放锁</li>
</ul>
<h4 id="_7-2、不会释放锁的操作" tabindex="-1"><a class="header-anchor" href="#_7-2、不会释放锁的操作" aria-hidden="true">#</a> 7.2、不会释放锁的操作</h4>
<ul>
<li>线程执行同步代码块或同步方法时，程序调用Thread.sleep()、Thread.yield()方法暂停当前线程的执行</li>
<li>线程执行同步代码块时，其他线程调用了该线程的suspend()方法将该线程挂起，该线程不会释放锁（同步监视器）
<ul>
<li>应尽量避免使用suspend()和resume()来控制线程</li>
</ul>
</li>
</ul>
</div></template>
