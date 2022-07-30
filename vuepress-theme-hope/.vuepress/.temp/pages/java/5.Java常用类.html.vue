<template><div><p>java常用类</p>
<!-- more -->
<h1 id="_5-java常用类" tabindex="-1"><a class="header-anchor" href="#_5-java常用类" aria-hidden="true">#</a> 5.java常用类</h1>
<h3 id="_1、字符串相关的类" tabindex="-1"><a class="header-anchor" href="#_1、字符串相关的类" aria-hidden="true">#</a> 1、字符串相关的类</h3>
<h4 id="_1-1、字符串相关的类-string" tabindex="-1"><a class="header-anchor" href="#_1-1、字符串相关的类-string" aria-hidden="true">#</a> 1.1、字符串相关的类：String</h4>
<ul>
<li>String声明为final的，不可被继承</li>
<li>String实现了Serializable接口：表示字符串是支持序列化的；实现了Comparable接口：表示String可以比较大小</li>
<li>String内部定义了final char[] value用于存储字符串数据</li>
<li>String：代表不可变的字符序列。简称：不可变性。
<ul>
<li>1、当对字符串重新赋值时，需要重新指定内存区域赋值，不能使用原有的value进行赋值。</li>
<li>2、当对现有的字符串进行连接操作时，也需要重新指定内存区域赋值，不能使用原有的value进行赋值</li>
<li>3、当调用String的replace()方法修改指定字符或字符串时，也需要重新指定内存区域赋值，不能使用原有的value进行赋值</li>
</ul>
</li>
<li>通过字面量的方式（区别于new）给一个字符串赋值，此时的字符串声明在字符串常量池中</li>
<li>字符串常量池中是不会存储相同内容的字符串的</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code> <span class="token doc-comment comment">/**
  *  String的实例化方式
  *  方式一：通过字面量定义的方式
  *  方式二：通过new + 构造器的方式
  *
  *  面试题：String s = new String("abc");方式创建对象，在内存中创建了几个对象？
  *  答：两个：一个是堆空间中new结构，另一个是char[]对应的常量池中的数据："abc"
  */</span>
 <span class="token annotation punctuation">@Test</span>
 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">// 通过字面量定义的方式：此时的s1和s2的数据javaEE声明在方法区中的字符串常量池中。</span>
     <span class="token class-name">String</span> s1 <span class="token operator">=</span> <span class="token string">"javaEE"</span><span class="token punctuation">;</span>
     <span class="token class-name">String</span> s2 <span class="token operator">=</span> <span class="token string">"javaEE"</span><span class="token punctuation">;</span>
     <span class="token comment">// 通过new + 构造器的方式：此时的s3和s4保存的地址值，是数据在堆空间中开辟空间以后对应的地址值</span>
     <span class="token class-name">String</span> s3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">"javaEE"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token class-name">String</span> s4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">"javaEE"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
     <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s1 <span class="token operator">==</span> s2<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// true</span>
     <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s1 <span class="token operator">==</span> s3<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// false</span>
     <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s1 <span class="token operator">==</span> s4<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// false</span>
     <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s3 <span class="token operator">==</span> s4<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// false</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>常量与常量的拼接结果在常量池。且常量池中不会存在相同内容的常量。</li>
<li>只要其中有一个是变量，结果就在堆中。</li>
<li>如果拼接的结果是调用intern()方法，返回值就在常量池中</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code> <span class="token class-name">String</span> s1 <span class="token operator">=</span> <span class="token string">"hello"</span><span class="token punctuation">;</span>
 <span class="token class-name">String</span> s2 <span class="token operator">=</span> <span class="token string">"world"</span><span class="token punctuation">;</span>
 <span class="token class-name">String</span> s3 <span class="token operator">=</span> <span class="token string">"hello"</span> <span class="token operator">+</span> <span class="token string">"world"</span><span class="token punctuation">;</span>
 <span class="token class-name">String</span> s4 <span class="token operator">=</span> s1 <span class="token operator">+</span> <span class="token string">"world"</span><span class="token punctuation">;</span>
 <span class="token class-name">String</span> s5 <span class="token operator">=</span> s1 <span class="token operator">+</span> s2<span class="token punctuation">;</span>
 <span class="token class-name">String</span> s6 <span class="token operator">=</span> <span class="token punctuation">(</span>s1 <span class="token operator">+</span> s2<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">intern</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token keyword">final</span> <span class="token class-name">String</span> s7 <span class="token operator">=</span> <span class="token string">"hello"</span><span class="token punctuation">;</span> <span class="token comment">// 此时的s7是一个常量</span>
 <span class="token class-name">String</span> s8 <span class="token operator">=</span> s7 <span class="token operator">+</span> <span class="token string">"world"</span><span class="token punctuation">;</span>
 
 <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s3 <span class="token operator">==</span> s4<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// false</span>
 <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s3 <span class="token operator">==</span> s5<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// false</span>
 <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s4 <span class="token operator">==</span> s5<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// false</span>
 <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s3 <span class="token operator">==</span> s6<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// true</span>
 <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s3 <span class="token operator">==</span> s8<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2、字符串相关的类-string常用方法" tabindex="-1"><a class="header-anchor" href="#_1-2、字符串相关的类-string常用方法" aria-hidden="true">#</a> 1.2、字符串相关的类：String常用方法</h4>
<ul>
<li>int length()：返回字符串的长度：return value.length</li>
<li>char charAt(int index)：返回某索引处的字符return value[index]</li>
<li>boolean isEmpty()：判断是否是空字符串：return value.length == 0</li>
<li>String toLowerCase()：使用默认语言环境，将String中的所有字符转换为小写</li>
<li>String toUpperCase()：使用默认语言环境，将String中的所有字符转换为大写</li>
<li>String trim()：返回字符串的副本，忽略首部空白和尾部空白</li>
<li>boolean equals(Object obj)：比较字符串的内容是否相同</li>
<li>boolean equalsIgnoreCase(String anotherString)：与equals方法类似，忽略大小写</li>
<li>String concat(String str)：将指定字符串连接到此字符串的结尾。等价于用&quot;+&quot;</li>
<li>int compareTo(String anotherString)：比较两个字符串的大小</li>
<li>String substring(int beginIndex)：返回一个新的字符串，它是此字符串从beginIndex开始截取到最后的一个子字符串</li>
<li>String substring(int beginIndex, int endIndex)：返回一个新的字符串，它是此字符串从beginIndex开始截取到endIndex（不包含）的一个子字符串</li>
<li>boolean endsWith(String suffix)：测试此字符串是否以指定的后缀结束</li>
<li>boolean startsWith(String prefix)：测试此字符串是否以指定的前缀开始</li>
<li>boolean startsWith(String prefix, int toffset)：测试此字符串从指定索引开始的子字符串是否以指定的前缀开始</li>
<li>boolean contains(CharSequence s)：当且仅当此字符串包含指定的char值序列时，返回true</li>
<li>int indexOf(String str)：返回指定子字符串在此字符串中第一次出现处的索引</li>
<li>int indexOf(String str, int fromIndex)：返回指定子字符串在此字符串中第一次出现处的索引，从指定的索引开始</li>
<li>int lastIndexOf(String str)：返回指定子字符串在此字符串中最右边出现处的索引</li>
<li>int lastIndexOf(String str, int fromIndex)：返回指定子字符串在此字符串中最后一次出现处的索引，从指定的索引开始反向搜索</li>
<li>String replace(char oldChar, char new Char)：返回一个新的字符串，它是通过用newChar替换此字符串中出现的所有oldChar得到的</li>
<li>String replace(CharSequence target, CharSequence replacement)：使用指定的字面值替换序列替换此字符串所有匹配字面值目标序列的子字符串</li>
<li>String replaceAll(String regex, String replacement)：使用给定的replacement替换此字符串所有匹配给定的正则表达式的子字符串</li>
<li>String replaceFirst(String regex, String replacement)：使用给定的replacement替换此字符串匹配给定的正则表达式的第一个子字符串</li>
<li>boolean matches(String regex)：告知此字符串是否匹配给定的正则表达式</li>
<li>String[] split(String regex)：根据给定正则表达式的匹配拆分此字符串</li>
<li>String[] split(String regex, int limit)：根据匹配给定的正则表达式来拆分此字符串，最多不超过limit个，如果超过了，剩下的全部都放到最后一个元素中</li>
</ul>
<h4 id="_1-3、string与基本数据类型、包装类之间的转换" tabindex="-1"><a class="header-anchor" href="#_1-3、string与基本数据类型、包装类之间的转换" aria-hidden="true">#</a> 1.3、String与基本数据类型、包装类之间的转换</h4>
<ul>
<li>String --&gt; 基本数据类型、包装类：调用包装类的静态方法：parseXxx(str)</li>
<li>基本数据类型、包装类 --&gt; String：调用String重载的valueOf(xxx)</li>
</ul>
<h4 id="_1-4、string与char-之间的转换" tabindex="-1"><a class="header-anchor" href="#_1-4、string与char-之间的转换" aria-hidden="true">#</a> 1.4、String与char[]之间的转换</h4>
<ul>
<li>String --&gt; char[]：调用String的toCharArray()</li>
<li>char[] --&gt; String：调用String的构造器</li>
</ul>
<h4 id="_1-5、string与byte-之间的转换" tabindex="-1"><a class="header-anchor" href="#_1-5、string与byte-之间的转换" aria-hidden="true">#</a> 1.5、String与byte[]之间的转换</h4>
<ul>
<li>String --&gt; byte[]：调用String的getBytes()</li>
<li>byte[] --&gt; String：调用String的构造器</li>
</ul>
<h4 id="_1-6、string、stringbuffer、stringbuilder三者的异同" tabindex="-1"><a class="header-anchor" href="#_1-6、string、stringbuffer、stringbuilder三者的异同" aria-hidden="true">#</a> 1.6、String、StringBuffer、StringBuilder三者的异同？</h4>
<ul>
<li>String：不可变的字符序列；底层使用final char[]存储</li>
<li>StringBuffer：可变的字符序列；线程安全的，效率低；底层使用char[]存储</li>
<li>StringBuilder：可变的字符序列；JDK 5.0新增的，线程不安全的，效率高；底层使用char[]存储</li>
</ul>
<h4 id="_1-7、stringbuffer源码分析" tabindex="-1"><a class="header-anchor" href="#_1-7、stringbuffer源码分析" aria-hidden="true">#</a> 1.7、StringBuffer源码分析</h4>
<ul>
<li>扩容问题：如果要添加的数据底层数组盛不下了，那就需要扩容底层的数组。默认情况下，扩容为原来容量的2倍+2，同时将原有数组中的元素复制到新的数组中</li>
<li>指导意义：开发中建议大家使用：StringBuffer(int capacity) 或 StringBuilder(int capacity)</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code> <span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// char[] value = new char[0];</span>
 <span class="token class-name">String</span> str1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">"abc"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// char[] value = new char[]{'a','c','c'};</span>
 
 <span class="token class-name">StringBuffer</span> sb1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// char[] value = new char[16];底层创建了一个长度是16的数组</span>
 <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sb1<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//0</span>
 sb1<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token char">'a'</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//value[0] = 'a';</span>
 sb1<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token char">'b'</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//value[1] = 'b';</span>
 
 <span class="token class-name">StringBuffer</span> sb2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuffer</span><span class="token punctuation">(</span><span class="token string">"abc"</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//char[] value = new char["abc".length() + 16];</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-8、stringbuffer类的常用方法" tabindex="-1"><a class="header-anchor" href="#_1-8、stringbuffer类的常用方法" aria-hidden="true">#</a> 1.8、StringBuffer类的常用方法</h4>
<ul>
<li>StringBuffer append(xxx)：提供了很多的append()方法，用于进行字符串拼接</li>
<li>StringBuffer delete(int start, int end)：删除指定位置的内容</li>
<li>StringBuffer replace(int start, int end, String str)：把[start, end)位置替换为str</li>
<li>StringBuffer insert(int offset, xxx)：在指定位置插入xxx</li>
<li>StringBuffer reverse()：把当前字符序列逆转</li>
</ul>
<h4 id="_1-9、对比string、stringbuffer、stringbuilder三者的效率" tabindex="-1"><a class="header-anchor" href="#_1-9、对比string、stringbuffer、stringbuilder三者的效率" aria-hidden="true">#</a> 1.9、对比String、StringBuffer、StringBuilder三者的效率</h4>
<ul>
<li>从高到低排列：StringBuilder &gt; StringBuffer &gt; String</li>
</ul>
<h4 id="_1-10、string与stringbuffer、stringbuilder之间的转换" tabindex="-1"><a class="header-anchor" href="#_1-10、string与stringbuffer、stringbuilder之间的转换" aria-hidden="true">#</a> 1.10、String与StringBuffer、StringBuilder之间的转换</h4>
<ul>
<li>String --&gt; StringBufferr、StringBuilder：调用StringBuffer、StringBuilder构造器</li>
<li>StringBufferr、StringBuilder --&gt; String：
<ul>
<li>调用String构造器</li>
<li>StringBuffer、StringBuilder的toString()</li>
</ul>
</li>
</ul>
<h3 id="_2、jdk-8之前的日期时间api" tabindex="-1"><a class="header-anchor" href="#_2、jdk-8之前的日期时间api" aria-hidden="true">#</a> 2、JDK 8之前的日期时间API</h3>
<h4 id="_2-1、java-lang-system类" tabindex="-1"><a class="header-anchor" href="#_2-1、java-lang-system类" aria-hidden="true">#</a> 2.1、java.lang.System类</h4>
<ul>
<li>System类提供的public static long currentTimeMillis()用来返回当前时间与1970年1月1日0时0分0秒之间以毫秒为单位的时间差。</li>
</ul>
<h4 id="_2-2、java-util-date类" tabindex="-1"><a class="header-anchor" href="#_2-2、java-util-date类" aria-hidden="true">#</a> 2.2、java.util.Date类</h4>
<ul>
<li>表示特定的瞬间，精确到毫秒</li>
<li>构造器：
<ul>
<li>Date()：使用无参构造器创建的对象可以获取本地当前时间</li>
<li>Date(long date)</li>
</ul>
</li>
<li>常用方法
<ul>
<li>getTime()：返回自1970年1月1日 00:00:00 GMT 以来此Date对象表示的毫秒数</li>
<li>toString()：把此Date对象转换为以下的形式的String：dow mon dd hh:mm:ss zzz yyyy</li>
</ul>
</li>
</ul>
<h4 id="_2-3、java-text-simpledateformat类" tabindex="-1"><a class="header-anchor" href="#_2-3、java-text-simpledateformat类" aria-hidden="true">#</a> 2.3、java.text.SimpleDateFormat类</h4>
<ul>
<li>Date类的API不易于国际化，大部分被废弃了，java.text.SimpleDateFormat类是一个不与语言环境有关的方式来格式化和解析日期的具体类</li>
<li>格式化：
<ul>
<li>SimpleDateFormat()：默认的模式和语言环境创建对象</li>
<li>public SimpleDateFormat(String pattern)：该构造方法可以用参数pattern指定的格式创建一个对象</li>
<li>public String format(Date date)：格式化时间对象date</li>
</ul>
</li>
<li>解析：
<ul>
<li>public Date parse(String source)：从给定字符串的开始解析文本，以生成一个日期</li>
</ul>
</li>
</ul>
<h4 id="_2-4、java-util-calendar类" tabindex="-1"><a class="header-anchor" href="#_2-4、java-util-calendar类" aria-hidden="true">#</a> 2.4、java.util.Calendar类</h4>
<ul>
<li>Calendar是一个抽象基类，主要用于完成日期字段之间相互操作的功能</li>
<li>获取Calendar实例的方法
<ul>
<li>使用Calendar.getInstance()方法</li>
<li>调用它的子类GregorianCalendar的构造器</li>
</ul>
</li>
<li>一个Calendar的实例是系统时间的抽象表示，通过get(int field)方法来取得想要的时间信息。比如YEAR、MONTH、DAY_OF_WEEK、HOUR_OF_DAY、MINUTE、SECOND
<ul>
<li>public void set(int field, int value)</li>
<li>public void add(int field, int amount)</li>
<li>public final Date getTime()</li>
<li>public final void setTime(Date date)</li>
</ul>
</li>
<li>注意
<ul>
<li>获取月份时：一月是0，二月是1，以此类推，12月是11</li>
<li>获取星期时：周日是1，周一是2，以此类推，周六是7</li>
</ul>
</li>
</ul>
<h3 id="_3、jdk-8中新日期时间api" tabindex="-1"><a class="header-anchor" href="#_3、jdk-8中新日期时间api" aria-hidden="true">#</a> 3、JDK 8中新日期时间API</h3>
<h4 id="_3-1、新日期时间api出现的原因" tabindex="-1"><a class="header-anchor" href="#_3-1、新日期时间api出现的原因" aria-hidden="true">#</a> 3.1、新日期时间API出现的原因</h4>
<ul>
<li>可变性：像日期和时间这样的类应该是不可变的</li>
<li>偏移性：Date中的年份是从1900开始的，而月份都是从0开始</li>
<li>格式化：格式化只对Date有用，Calender则不行</li>
<li>此外，它们都不是线程安全的；不能处理闰秒等</li>
</ul>
<h4 id="_3-2、localdate、localtime、localdatetime类" tabindex="-1"><a class="header-anchor" href="#_3-2、localdate、localtime、localdatetime类" aria-hidden="true">#</a> 3.2、LocalDate、LocalTime、LocalDateTime类</h4>
<ul>
<li>它们的实例是不可变的对象，分别表示使用ISO-8601日历系统的日期、时间、日期和时间。</li>
<li>创建方法：
<ul>
<li>now() / now(ZoneId zone)：静态方法，根据当前时间创建对象/指定时区的对象</li>
<li>of()：静态方法，根据指定日期/时间创建对象</li>
</ul>
</li>
<li>get类的方法：
<ul>
<li>getDayOfMonth()/getDayOfYear()：获得月份天数(1-31)/获得年份天数(1-366)</li>
<li>getDayOfWeek()：获得星期几(返回一个DayOfWeek枚举值)</li>
<li>getMonth()：获得月份，返回一个Month枚举值</li>
<li>getMonthValue()/getYear()：获得月份(1-12)/获得年份</li>
<li>getHour()/getMinute()/getSecond()：获得当前对象对应的小时、分钟、秒</li>
</ul>
</li>
<li>set类的方法：
<ul>
<li>withDayOfMonth()/withDayOfYear()/withMonth()/withYear()：将月份天数、年份天数、月份、年份修改为指定的值并返回新的对象</li>
</ul>
</li>
<li>操作类的方法：
<ul>
<li>plusDays()/plusWeeks()/plusMonths()/plusYears()/plusHours()：向当前对象添加几天、几周、几个月、几年、几小时</li>
<li>minusMonths()/minusWeeks()/minusDays()/minusYears()/minusHours()：从当前对象减去几月、几周、几天、几年、几小时</li>
</ul>
</li>
</ul>
<h4 id="_3-3、瞬时-instant" tabindex="-1"><a class="header-anchor" href="#_3-3、瞬时-instant" aria-hidden="true">#</a> 3.3、瞬时：Instant</h4>
<ul>
<li>时间线上的一个瞬时点，同样的，在Java中也是从1970年开始，但以毫秒为单位</li>
<li>常用方法：
<ul>
<li>now()：静态方法，返回默认UTC时区的Instant类的对象</li>
<li>ofEpochMilli(long epochMilli)：静态方法，返回在1970-01-01 00:00:00基础上加上指定毫秒数之后的Instant类的对象</li>
<li>atOffset(ZoneOffset offset)：结合即时的偏移来创建一个OffsetDateTime</li>
<li>toEpochMilli()：返回1970-01-01 00:00:00到当前时间的毫秒数，即为时间戳</li>
</ul>
</li>
</ul>
<h4 id="_3-4、java-time-format-datetimeformatter类" tabindex="-1"><a class="header-anchor" href="#_3-4、java-time-format-datetimeformatter类" aria-hidden="true">#</a> 3.4、java.time.format.DateTimeFormatter类</h4>
<ul>
<li>预定义的标准格式。如：ISO_LOCAL_DATE_TIME;ISO_LOCAL_DATE;ISO_LOCAL_TIME</li>
<li>本地化相关的格式。如ofLocalizedDateTime(FormatStyle.LONG)</li>
<li>自定义的格式。如：ofPattern(&quot;yyyy-MM-dd hh:mm:ss E&quot;)</li>
<li>常用方法：
<ul>
<li>ofPattern(String pattern)：静态方法，返回一个指定字符串格式的DateTimeFormatter</li>
<li>format(TemporalAccessor t)：格式化一个日期、时间，返回字符串</li>
<li>parse(CharSequence test)：将指定格式的字符序列解析为一个日期、时间</li>
</ul>
</li>
</ul>
<h3 id="_4、java比较器" tabindex="-1"><a class="header-anchor" href="#_4、java比较器" aria-hidden="true">#</a> 4、Java比较器</h3>
<h4 id="_4-1、方式一-自然排列-java-lang-comparable" tabindex="-1"><a class="header-anchor" href="#_4-1、方式一-自然排列-java-lang-comparable" aria-hidden="true">#</a> 4.1、方式一：自然排列：java.lang.Comparable</h4>
<ul>
<li>Comparable接口强行对实现它的每个类的对象进行整体排序。这种排序被称为类的自然排序</li>
<li>实现Comparable的类必须实现compareTo(Object obj)方法，两个对象即通过compareTo(Object obj)方法的返回值来比较大小。
<ul>
<li>如果当前对象this大于形参对象obj，则返回正整数</li>
<li>如果当前对象this小于形参对象obj，则返回负整数</li>
<li>如果当前对象this等于形参对象obj，则返回零</li>
</ul>
</li>
<li>实现Comparable接口的对象列表（和数组）可以通过Collections.sort或Arrays.sort进行自动排列。</li>
</ul>
<h4 id="_4-2、方式二-定制排序-java-util-comparator" tabindex="-1"><a class="header-anchor" href="#_4-2、方式二-定制排序-java-util-comparator" aria-hidden="true">#</a> 4.2、方式二：定制排序：java.util.Comparator</h4>
<ul>
<li>当元素的类型没有实现java.lang.Comparable接口而又不方便修改代码，或者实现了java.lang.Comparable接口的排序规则不适合当前的操作，那么可以考虑使用Comparator的对象来排序</li>
<li>重写compare(Object o1, Object o2)方法，比较o1和o2的大小
<ul>
<li>如果方法返回正整数，表示o1大于o2</li>
<li>如果方法返回0，表示相等</li>
<li>返回负整数，表示o1小于o2</li>
</ul>
</li>
<li>可以将Comparator传递给sort方法(如Collections.sort或Arrays.sort)，从而允许在排序顺序上实现精确控制</li>
</ul>
<h3 id="_5、system类" tabindex="-1"><a class="header-anchor" href="#_5、system类" aria-hidden="true">#</a> 5、System类</h3>
<ul>
<li>System类代表系统，系统级的很多属性和控制方法都放置在该类的内部。</li>
<li>成员变量：
<ul>
<li>in：标准输入流（键盘输入）</li>
<li>out：标准输出流（显示器）</li>
<li>err：标准错误输出流（显示器）</li>
</ul>
</li>
<li>成员方法：
<ul>
<li>native long currentTimeMillis()：该方法的作用是返回当前的计算机时间，时间的表达格式为当前计算机时间和GMT时间（格林威治时间）1970年1月1日0时0分0秒所差的毫秒数。</li>
<li>void exit(int status)：该方法的作用是退出程序。其中status的值为0代表正常退出，非零代表异常退出。</li>
<li>void gc()：该方法的作用是请求系统进行垃圾回收。至于系统是否立刻回收，则取决于系统中垃圾回收算法的实现以及系统执行时的情况。</li>
<li>String getProperty(String key)：该方法的作用是获得系统中属性名为key的属性对应的值。
<ul>
<li>java.version：java运行时环境版本</li>
<li>java.home：java安装目录</li>
<li><a href="http://os.name" target="_blank" rel="noopener noreferrer">os.name<ExternalLinkIcon/></a>：操作系统的名称</li>
<li>os.version：操作系统的版本</li>
<li><a href="http://user.name" target="_blank" rel="noopener noreferrer">user.name<ExternalLinkIcon/></a>：用户的账户名称</li>
<li>user.home：用户的主目录</li>
<li>user.dir：用户的当前工作目录</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="_6、math类" tabindex="-1"><a class="header-anchor" href="#_6、math类" aria-hidden="true">#</a> 6、Math类</h3>
<ul>
<li>abs：绝对值</li>
<li>acos,asin,atan,cos,sin,tan：三角函数</li>
<li>sqrt：平方根</li>
<li>pow(double a, double b)：a的b次幂</li>
<li>log：自然对数</li>
<li>exp：e为底指数</li>
<li>max(double a, double b)</li>
<li>min(double a, double b)</li>
<li>random()：返回0.0到1.0的随机数</li>
<li>long round(double a)：double型数据a转换为long型（四舍五入）</li>
<li>toDegrees(double angrad)：弧度--&gt;角度</li>
<li>toRadians(double angdeg)：角度--&gt;弧度</li>
</ul>
<h3 id="_7、biginteger与bigdecimal" tabindex="-1"><a class="header-anchor" href="#_7、biginteger与bigdecimal" aria-hidden="true">#</a> 7、BigInteger与BigDecimal</h3>
<h4 id="_7-1-biginteger类" tabindex="-1"><a class="header-anchor" href="#_7-1-biginteger类" aria-hidden="true">#</a> 7.1 BigInteger类</h4>
<ul>
<li>java.math包的BigInteger可以表示不可变的任意精度的整数</li>
<li>构造器：
<ul>
<li>BigInteger(String val)：根据字符串构建BigInteger对象</li>
</ul>
</li>
<li>常用方法：
<ul>
<li>public BigInteger abs()：返回此BigInteger的绝对值的BigInteger</li>
<li>BigInteger add(BigInteger val)：返回其值为(this+val)的BigInteger</li>
<li>BigInteger subtract(BigInteger val)：返回其值为(this-val)的BigInteger</li>
<li>BigInteger multiply(BigInteger val)：返回其值为(this*val)的BigInteger</li>
<li>BigInteger divide(BigInteger val)：返回其值为(this/val)的BigInteger。整数相除只保留整数部分</li>
<li>BigInteger remainder(BigInteger val)：返回其值为(this%val)的BigInteger</li>
<li>BigInteger[] divideAndRemainder(BigInteger val)：返回包含(this/val)后跟(this%val)的两个BigInteger的数组</li>
<li>BigInteger pow(int exponent)：返回其值为(this的exponent次方)的BigInteger</li>
</ul>
</li>
</ul>
<h4 id="_7-2-bigdecimal类" tabindex="-1"><a class="header-anchor" href="#_7-2-bigdecimal类" aria-hidden="true">#</a> 7.2 BigDecimal类</h4>
<ul>
<li>BigDecimal类支持不可变的、任意精度的有符号十进制定点数</li>
<li>构造器：
<ul>
<li>public BigDecimal(double val)</li>
<li>public BigDecimal(String val)</li>
</ul>
</li>
<li>常用方法：
<ul>
<li>public BigDecimal add(BigDecimal augend)</li>
<li>public BigDecimal subtract(BigDecimal subtrahend)</li>
<li>public BigDecimal multiply(BigDecimal multiplicand)</li>
<li>public BigDecimal divide(BigDecimal divisor, int scale, int roundingMode)</li>
</ul>
</li>
</ul>
</div></template>
