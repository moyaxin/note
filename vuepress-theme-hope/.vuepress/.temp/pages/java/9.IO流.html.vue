<template><div><p>IO流</p>
<!-- more -->
<h1 id="_9-io流" tabindex="-1"><a class="header-anchor" href="#_9-io流" aria-hidden="true">#</a> 9.IO流</h1>
<h3 id="_1、file类的使用" tabindex="-1"><a class="header-anchor" href="#_1、file类的使用" aria-hidden="true">#</a> 1、File类的使用</h3>
<h4 id="_1-1、file类的理解" tabindex="-1"><a class="header-anchor" href="#_1-1、file类的理解" aria-hidden="true">#</a> 1.1、File类的理解</h4>
<ul>
<li>File类的一个对象，代表一个文件或一个文件目录(俗称：文件夹)</li>
<li>File类声明在java.io包下</li>
<li>File类中涉及到关于文件或文件目录的创建、删除、重命名、修改时间、文件大小等方法，并未涉及到写入或读取文件内容的操作。如果需要读取或写入文件内容，必须使用IO流来完成。</li>
<li>后续File类的对象常会作为参数传递到流的构造器中，指明读取或写入的“终点”</li>
</ul>
<h4 id="_1-2、file的实例化" tabindex="-1"><a class="header-anchor" href="#_1-2、file的实例化" aria-hidden="true">#</a> 1.2、File的实例化</h4>
<ul>
<li>常见构造器
<ul>
<li>File(String filePath)</li>
<li>File(String parentPath, String childPath)</li>
<li>File(File parentFile, String childPath)</li>
</ul>
</li>
<li>路径的分类
<ul>
<li>相对路径：相较于某个路径下，指明的路径</li>
<li>绝对路径：包含盘符在内的文件或文件目录的路径</li>
</ul>
</li>
<li>路径分隔符
<ul>
<li>public static final String separator：根据操作系统，动态的提供分隔符</li>
</ul>
</li>
</ul>
<h4 id="_1-3、常用方法" tabindex="-1"><a class="header-anchor" href="#_1-3、常用方法" aria-hidden="true">#</a> 1.3、常用方法</h4>
<ul>
<li>File类的获取功能
<ul>
<li>public String getAbsolutePath()：获取绝对路径</li>
<li>public String getPath()：获取路径</li>
<li>public String getName()：获取名称</li>
<li>public String getParent()：获取上层文件目录。若无，返回null</li>
<li>public long length()：获取文件长度（即：字节数）。不能获取目录的长度。</li>
<li>public long lastModified()：获取最后一次的修改时间，毫秒值</li>
<li>public String[] list()：获取指定目录下的所有文件或文件目录的名称数组</li>
<li>public File[] listFiles()：获取指定目录下的所有文件或文件目录的File数组</li>
</ul>
</li>
<li>File类的重命名功能
<ul>
<li>public boolean renameTo(File dest)：把文件重命名为指定的文件路径。要想保证返回true，需要源文件在硬盘中存在，且目标文件不能在硬盘中存在</li>
</ul>
</li>
<li>File类的判断功能
<ul>
<li>public boolean isDirectory()：判断是否是文件目录</li>
<li>public boolean isFile()：判断是否是文件</li>
<li>public boolean exists()：判断是否存在</li>
<li>public boolean canRead()：判断是否可读</li>
<li>public boolean canWrite()：判断是否可写</li>
<li>public boolean isHidden()：判断是否隐藏</li>
</ul>
</li>
<li>File类的创建功能
<ul>
<li>public boolean creatNewFile()：创建文件。若文件存在，则不创建，返回false</li>
<li>public boolean mkdir()：创建文件目录。如果文件目录存在，就不创建了。如果此文件目录的上层目录不存在，也不创建。</li>
<li>public boolean mkdirs()：创建文件目录。如果上层文件目录不存在，一并创建</li>
</ul>
</li>
<li>File类的删除功能
<ul>
<li>public boolean delete()：删除文件或文件夹。要删除一个文件目录，请注意该文件目录内不能包含文件或文件目录</li>
</ul>
</li>
</ul>
<h3 id="_2、io原理及流的分类" tabindex="-1"><a class="header-anchor" href="#_2、io原理及流的分类" aria-hidden="true">#</a> 2、IO原理及流的分类</h3>
<h4 id="_2-1、流的分类" tabindex="-1"><a class="header-anchor" href="#_2-1、流的分类" aria-hidden="true">#</a> 2.1、流的分类</h4>
<ul>
<li>按操作数据单位不同分为：字节流、字符流</li>
<li>按数据流的流向不同分为：输入流、输出流</li>
<li>按流的角色的不同分为：节点流、处理流</li>
</ul>
<h4 id="_2-2、流的体系结构" tabindex="-1"><a class="header-anchor" href="#_2-2、流的体系结构" aria-hidden="true">#</a> 2.2、流的体系结构</h4>
<table>
<thead>
<tr>
<th><strong>分类</strong></th>
<th><strong>字节输入流</strong></th>
<th><strong>字节输出流</strong></th>
<th><strong>字符输入流</strong></th>
<th><strong>字符输出流</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>抽象基类</td>
<td><strong>InputStream</strong></td>
<td><strong>OutputStream</strong></td>
<td><strong>Reader</strong></td>
<td><strong>Writer</strong></td>
</tr>
<tr>
<td>访问文件</td>
<td><strong>FileInputStream</strong></td>
<td><strong>FileOutputStream</strong></td>
<td><strong>FileReader</strong></td>
<td><strong>FileWriter</strong></td>
</tr>
<tr>
<td>访问数组</td>
<td>ByteArrayInputStream</td>
<td>ByteArrayOutputStream</td>
<td>CharArrayReader</td>
<td>CharArrayWriter</td>
</tr>
<tr>
<td>访问管道</td>
<td>PipedInputStream</td>
<td>PipedOutputStream</td>
<td>PipedReader</td>
<td>PipedWriter</td>
</tr>
<tr>
<td>访问字符串</td>
<td></td>
<td></td>
<td>StringReader</td>
<td>StringWriter</td>
</tr>
<tr>
<td>缓冲流</td>
<td><strong>BufferedInputStream</strong></td>
<td><strong>BufferedOutputStream</strong></td>
<td><strong>BufferedReader</strong></td>
<td><strong>BufferedWriter</strong></td>
</tr>
<tr>
<td>转换流</td>
<td></td>
<td></td>
<td><strong>InputStreamReader</strong></td>
<td><strong>OutputStreamWriter</strong></td>
</tr>
<tr>
<td>对象流</td>
<td><strong>ObjectInputStream</strong></td>
<td><strong>ObjectOutputStream</strong></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td>FilterInputStream</td>
<td>FilterOutputStream</td>
<td>FilterReader</td>
<td>FilterWriter</td>
</tr>
<tr>
<td>打印流</td>
<td></td>
<td>PrintStream</td>
<td></td>
<td>PrintWriter</td>
</tr>
<tr>
<td>推回输入流</td>
<td>PushbackInputStream</td>
<td></td>
<td>PushbackReader</td>
<td></td>
</tr>
<tr>
<td>特殊流</td>
<td>DataInputStream</td>
<td>DataOutputStream</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="_2-3、输入、输出的标准化过程" tabindex="-1"><a class="header-anchor" href="#_2-3、输入、输出的标准化过程" aria-hidden="true">#</a> 2.3、输入、输出的标准化过程</h4>
<ul>
<li>输入过程
<ul>
<li>创建File类的对象，指明读取的数据的来源。（要求此文件一定要存在）</li>
<li>创建相应的输入流，将File类的对象作为参数，传入流的构造器中</li>
<li>具体的读入过程</li>
<li>关闭流资源</li>
</ul>
</li>
<li>输出过程
<ul>
<li>创建File类的对象，指明写出的数据的位置。（不要求此文件一定要存在）</li>
<li>创建相应的输出流，将File类的对象作为参数，传入流的构造器中</li>
<li>具体的写出过程</li>
<li>关闭流资源</li>
</ul>
</li>
</ul>
<p>说明：程序中出现的异常需要使用try-catch-finally处理</p>
<h3 id="_3、节点流-或文件流" tabindex="-1"><a class="header-anchor" href="#_3、节点流-或文件流" aria-hidden="true">#</a> 3、节点流（或文件流）</h3>
<h4 id="_3-1、filereader的使用" tabindex="-1"><a class="header-anchor" href="#_3-1、filereader的使用" aria-hidden="true">#</a> 3.1、FileReader的使用</h4>
<ul>
<li>read()的理解：返回读入的一个字符。如果达到文件末尾，返回-1</li>
<li>异常的处理：为了保证流资源一定可以执行关闭操作。需要使用try-catch-finally处理</li>
<li>读入的文件一定要存在，否则就会报FileNotFoundException</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
 <span class="token keyword">public</span> <span class="token keyword">void</span> testFileReader1 <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token class-name">FileReader</span> fr <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
     <span class="token keyword">try</span> <span class="token punctuation">{</span>
         <span class="token comment">// 1、File类的实例化</span>
         <span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"hello.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
         <span class="token comment">// 2、FileReader流的实例化</span>
         fr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
         <span class="token comment">// 3、读入的操作</span>
         <span class="token comment">// read(char[] cbuf)：返回每次读入cbuf数组中的字符的个数。如果达到文件末尾则返回-1</span>
         <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> cbuf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
         <span class="token keyword">int</span> len<span class="token punctuation">;</span>
         <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>len <span class="token operator">=</span> fr<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>cbuf<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             <span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>cbuf<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">FileNotFoundException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
         <span class="token keyword">if</span> <span class="token punctuation">(</span>fr <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             <span class="token comment">// 4、关闭资源</span>
             <span class="token keyword">try</span> <span class="token punctuation">{</span>
                 fr<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                 e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2、filewriter的使用" tabindex="-1"><a class="header-anchor" href="#_3-2、filewriter的使用" aria-hidden="true">#</a> 3.2、FileWriter的使用</h4>
<ul>
<li>输出操作，对应的File可以不存在。并不会报异常</li>
<li>File对应的硬盘中的文件如果不存在，在输出的过程中，会自动创建此文件。</li>
<li>File对应的硬盘中的文件如果存在：
<ul>
<li>如果流使用的构造器是：FileWriter(file, false) / FileWriter(file)：对原有文件的覆盖</li>
<li>如果流使用的构造器是：FileWriter(file, true)：不会对原有文件覆盖，而是在原有文件基础上追加内容</li>
</ul>
</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
 <span class="token keyword">public</span> <span class="token keyword">void</span> testFileWriter <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token class-name">FileWriter</span> fw <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
     <span class="token keyword">try</span> <span class="token punctuation">{</span>
         <span class="token comment">// 1、提供File类的对象，指明写出到的文件</span>
         <span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"hello1.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
         <span class="token comment">// 2、提供FileWriter的对象，用于数据的写出</span>
         fw <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileWriter</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
         <span class="token comment">// 3、写出的操作</span>
         fw<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">"I have a dream!\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         fw<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">"you need to have a dream!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
         <span class="token comment">// 4、流资源的关闭</span>
         <span class="token keyword">if</span> <span class="token punctuation">(</span>fw <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             <span class="token keyword">try</span> <span class="token punctuation">{</span>
                 fw<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                 e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3、文本文件的复制" tabindex="-1"><a class="header-anchor" href="#_3-3、文本文件的复制" aria-hidden="true">#</a> 3.3、文本文件的复制</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
 <span class="token keyword">public</span> <span class="token keyword">void</span> testFileReaderFileWriter <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token class-name">FileReader</span> fr <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
     <span class="token class-name">FileWriter</span> fw <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
 
     <span class="token keyword">try</span> <span class="token punctuation">{</span>
         <span class="token comment">// 1、创建File类的对象，指明读入和写出的文件</span>
         <span class="token class-name">File</span> srcFile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"hello.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token class-name">File</span> destFile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"hello2.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
         <span class="token comment">// 2、创建输入流和输出流的对象</span>
         fr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span>srcFile<span class="token punctuation">)</span><span class="token punctuation">;</span>
         fw <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileWriter</span><span class="token punctuation">(</span>destFile<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
         <span class="token comment">// 3、数据的读入和写出操作</span>
         <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> cbuf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
         <span class="token keyword">int</span> len<span class="token punctuation">;</span> <span class="token comment">// 记录每次读入到cbuf数组中的字符的个数</span>
         <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>len <span class="token operator">=</span> fr<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>cbuf<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             <span class="token comment">// 每次写出len个字符</span>
             fw<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>cbuf<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
         <span class="token comment">// 4、关闭流资源</span>
         <span class="token keyword">if</span> <span class="token punctuation">(</span>fw <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             <span class="token keyword">try</span> <span class="token punctuation">{</span>
                 fw<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                 e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span>
         <span class="token punctuation">}</span>
         <span class="token keyword">if</span> <span class="token punctuation">(</span>fr <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             <span class="token keyword">try</span> <span class="token punctuation">{</span>
                 fr<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                 e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-4、fileinputstream-fileoutputstream的使用" tabindex="-1"><a class="header-anchor" href="#_3-4、fileinputstream-fileoutputstream的使用" aria-hidden="true">#</a> 3.4、FileInputStream/FileOutputStream的使用</h4>
<ul>
<li>对于文本文件(.txt, .java, .c, .cpp)，使用字符流处理</li>
<li>对于非文本文件(.jpg, .mp3, .mp4, .avi, .doc, .ppt,...)，使用字节流处理</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
   * 实现对图片的复制操作
   */</span>
 <span class="token annotation punctuation">@Test</span>
 <span class="token keyword">public</span> <span class="token keyword">void</span> testFileInputOutputStream <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token class-name">FileInputStream</span> fis <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
     <span class="token class-name">FileOutputStream</span> fos <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
     <span class="token keyword">try</span> <span class="token punctuation">{</span>
         <span class="token comment">// 1、造文件</span>
         <span class="token class-name">File</span> srcFile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"爱情与友情.jpg"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token class-name">File</span> destFile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"爱情与友情2.jpg"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token comment">// 2、造流</span>
         fis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>srcFile<span class="token punctuation">)</span><span class="token punctuation">;</span>
         fos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span>destFile<span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token comment">// 3、复制的过程</span>
         <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> buffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
         <span class="token keyword">int</span> len<span class="token punctuation">;</span>
         <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>len <span class="token operator">=</span> fis<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             fos<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>buffer<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
         <span class="token comment">// 4、关闭流</span>
         <span class="token keyword">if</span> <span class="token punctuation">(</span>fis <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             <span class="token keyword">try</span> <span class="token punctuation">{</span>
                 fis<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                 e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span>
         <span class="token punctuation">}</span>
         <span class="token keyword">if</span> <span class="token punctuation">(</span>fos <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             <span class="token keyword">try</span> <span class="token punctuation">{</span>
                 fos<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                 e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：IDEA中：如果大家开发使用JUnit中的单元测试方法测试，相对路径即为当前Module下。如果使用main()测试，相对路径即为当前的Project下。Eclipse中：不管使用单元测试方法还是使用main()测试，相对路径都是当前的Project下</p>
<h3 id="_4、缓冲流" tabindex="-1"><a class="header-anchor" href="#_4、缓冲流" aria-hidden="true">#</a> 4、缓冲流</h3>
<h4 id="_4-1、缓冲流涉及到的类" tabindex="-1"><a class="header-anchor" href="#_4-1、缓冲流涉及到的类" aria-hidden="true">#</a> 4.1、缓冲流涉及到的类</h4>
<ul>
<li>BufferedInputStream</li>
<li>BufferedOutputSteam</li>
<li>BufferedReader</li>
<li>BufferedWriter</li>
</ul>
<h4 id="_4-2、作用" tabindex="-1"><a class="header-anchor" href="#_4-2、作用" aria-hidden="true">#</a> 4.2、作用</h4>
<ul>
<li>提高流的读取、写入的速度。</li>
<li>提高读写速度的原因：内部提供了一个缓冲区。默认情况下是8kb</li>
</ul>
<p>public class BufferedInputStream extends FilterInputStream {
 
     private static int DEFAULT_BUFFER_SIZE = 8192;
 
 }</p>
<h4 id="_4-3、典型代码" tabindex="-1"><a class="header-anchor" href="#_4-3、典型代码" aria-hidden="true">#</a> 4.3、典型代码</h4>
<ul>
<li>使用BufferedInputStream和BufferedOutputStream：处理非文本文件</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code> <span class="token annotation punctuation">@Test</span>
 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">copyFileWithBuffered</span><span class="token punctuation">(</span><span class="token class-name">String</span> srcPath<span class="token punctuation">,</span> <span class="token class-name">String</span> destPath<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token class-name">BufferedInputStream</span> bis <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
     <span class="token class-name">BufferedOutputStream</span> bos <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
     <span class="token keyword">try</span> <span class="token punctuation">{</span>
         <span class="token comment">// 1、造文件</span>
         <span class="token class-name">File</span> srcFile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>srcPath<span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token class-name">File</span> destFile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>destPath<span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token comment">// 2、造流</span>
         <span class="token comment">// 2.1、造节点流</span>
         <span class="token class-name">FileInputStream</span> fis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>srcFile<span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token class-name">FileOutputStream</span> fos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span>destFile<span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token comment">// 2.2、造缓冲流</span>
         bis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedInputStream</span><span class="token punctuation">(</span>fis<span class="token punctuation">)</span><span class="token punctuation">;</span>
         bos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedOutputStream</span><span class="token punctuation">(</span>fos<span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token comment">// 3、复制的细节：读取、写入</span>
         <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> buffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
         <span class="token keyword">int</span> len<span class="token punctuation">;</span>
         <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>len <span class="token operator">=</span> bis<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             bos<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>buffer<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token comment">// bos.flush(); //刷新缓冲区</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
         <span class="token comment">// 4、资源关闭</span>
         <span class="token comment">// 要求：先关闭外层的流，再关闭内层的流</span>
         <span class="token keyword">if</span> <span class="token punctuation">(</span>bis <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             <span class="token keyword">try</span> <span class="token punctuation">{</span>
                 bis<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                 e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span>
         <span class="token punctuation">}</span>
         <span class="token keyword">if</span> <span class="token punctuation">(</span>bos <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             <span class="token keyword">try</span> <span class="token punctuation">{</span>
                 bos<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                 e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span>
         <span class="token punctuation">}</span>
 
         <span class="token comment">// 说明：关闭外层流的同时，内层流也会自动的进行关闭。关于内层流的关闭，我们可以省略</span>
         <span class="token comment">// fos.close();</span>
         <span class="token comment">// fis.close();</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用BufferedReader和BufferedWriter:处理文本文件</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
 <span class="token keyword">public</span> <span class="token keyword">void</span> testBufferedReaderBufferedWriter <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token class-name">BufferedReader</span> br <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
     <span class="token class-name">BufferedWriter</span> bw <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
     <span class="token keyword">try</span> <span class="token punctuation">{</span>
         <span class="token comment">// 创建文件和相应的流</span>
         br <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"dbcp.txt"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         bw <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedWriter</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileWriter</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"dbcp1.txt"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
         <span class="token comment">// 读写操作</span>
         <span class="token comment">// 方式一：使用char[]数组</span>
         <span class="token comment">// char[] cbuf = new char[1024];</span>
         <span class="token comment">// int len;</span>
         <span class="token comment">// while ((len = br.read(cbuf)) != -1) {</span>
         <span class="token comment">//     bw.write(cbuf, 0, len);</span>
         <span class="token comment">// }</span>
         <span class="token comment">// 方式二：使用String</span>
         <span class="token class-name">String</span> data<span class="token punctuation">;</span>
         <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>data <span class="token operator">=</span> br<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             <span class="token comment">// 方法一：</span>
             <span class="token comment">// bw.write(data + "\n"); // data中不包含换行符</span>
             <span class="token comment">// 方法二：</span>
             bw<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
             bw<span class="token punctuation">.</span><span class="token function">newLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 提供换行的操作</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
         <span class="token comment">// 关闭资源</span>
         <span class="token keyword">if</span> <span class="token punctuation">(</span>br <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             <span class="token keyword">try</span> <span class="token punctuation">{</span>
                 br<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                 e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span>
         <span class="token punctuation">}</span>
 
         <span class="token keyword">if</span> <span class="token punctuation">(</span>bw <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             <span class="token keyword">try</span> <span class="token punctuation">{</span>
                 bw<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                 e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
 
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、转换流" tabindex="-1"><a class="header-anchor" href="#_5、转换流" aria-hidden="true">#</a> 5、转换流</h3>
<h4 id="_5-1、转换流涉及到的类-属于字符流" tabindex="-1"><a class="header-anchor" href="#_5-1、转换流涉及到的类-属于字符流" aria-hidden="true">#</a> 5.1、转换流涉及到的类：属于字符流</h4>
<ul>
<li>InputStreamReader：将一个字节的输入流转换为字符的输入流
<ul>
<li>解码：字节、字节数组 ---&gt; 字符数组、字符串</li>
</ul>
</li>
<li>OutputStreamWriter：将一个字符的输出流转换为字节的输出流
<ul>
<li>编码：字符数组、字符串 ---&gt; 字节、字节数组</li>
</ul>
</li>
</ul>
<p>说明：编码决定了解码的方式</p>
<h4 id="_5-2、作用" tabindex="-1"><a class="header-anchor" href="#_5-2、作用" aria-hidden="true">#</a> 5.2、作用</h4>
<ul>
<li>提供字节流与字符流之间的转换</li>
</ul>
<h4 id="_5-3、典型实现" tabindex="-1"><a class="header-anchor" href="#_5-3、典型实现" aria-hidden="true">#</a> 5.3、典型实现</h4>
<ul>
<li>文件编码的方式（比如：GBK），决定了解析时使用的字符集（也只能是GBK）</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
 <span class="token keyword">public</span> <span class="token keyword">void</span> test2 <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token class-name">InputStreamReader</span> isr <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
     <span class="token class-name">OutputStreamWriter</span> osw <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
     <span class="token keyword">try</span> <span class="token punctuation">{</span>
         <span class="token comment">// 1、造文件、造流</span>
         <span class="token class-name">File</span> file1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"dbcp.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token class-name">File</span> file2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"dbcp_gbk.txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
         <span class="token class-name">FileInputStream</span> fis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>file1<span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token class-name">FileOutputStream</span> fos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span>file2<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
         <span class="token comment">// isr = new InputStreamReader(fis); // 使用系统默认的字符集</span>
         isr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span>fis<span class="token punctuation">,</span> <span class="token string">"utf-8"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         osw <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OutputStreamWriter</span><span class="token punctuation">(</span>fos<span class="token punctuation">,</span> <span class="token string">"gbk"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
         <span class="token comment">// 2、读写过程</span>
         <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> cbuf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
         <span class="token keyword">int</span> len<span class="token punctuation">;</span>
         <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>len <span class="token operator">=</span> isr<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>cbuf<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             osw<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>cbuf<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
         <span class="token comment">// 3、关闭资源</span>
         <span class="token keyword">if</span> <span class="token punctuation">(</span>isr <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             <span class="token keyword">try</span> <span class="token punctuation">{</span>
                 isr<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                 e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span>
         <span class="token punctuation">}</span>
 
         <span class="token keyword">if</span> <span class="token punctuation">(</span>osw <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             <span class="token keyword">try</span> <span class="token punctuation">{</span>
                 osw<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                 e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-4、常见的编码表" tabindex="-1"><a class="header-anchor" href="#_5-4、常见的编码表" aria-hidden="true">#</a> 5.4、常见的编码表</h4>
<ul>
<li>ASCII：美国标准信息交换码。用一个字节的7位可以表示。</li>
<li>ISO8859-1：拉丁码、欧洲码表。用一个字节的8位表示</li>
<li>GB2312：中国的中文编码表。最多两个字节编码所有字符</li>
<li>GBK：中国的中文编码表升级，融合了更多的中文文字符号。最多两个字节编码</li>
<li>Unicode：国际标准码，融合了目前人类使用的所有字符。为每个字符分配唯一的字符码。所有的文字都用两个字节来表示。</li>
<li>UTF-8：变长的编码方法，可用1-4个字节来表示一个字符。</li>
</ul>
<h3 id="_6、其它的流的使用" tabindex="-1"><a class="header-anchor" href="#_6、其它的流的使用" aria-hidden="true">#</a> 6、其它的流的使用</h3>
<h4 id="_6-1、标准输入、输出流" tabindex="-1"><a class="header-anchor" href="#_6-1、标准输入、输出流" aria-hidden="true">#</a> 6.1、标准输入、输出流</h4>
<ul>
<li><a href="http://System.in" target="_blank" rel="noopener noreferrer">System.in<ExternalLinkIcon/></a>：标准的输入流，默认从键盘输入</li>
<li>System.out：标准的输出流，默认从控制台输出</li>
<li>修改默认的输入和输出行为
<ul>
<li>System类的setIn(InputStream is)/setOut(PrintStream ps)方式重新指定输入和输出的流</li>
</ul>
</li>
</ul>
<h4 id="_6-2、打印流" tabindex="-1"><a class="header-anchor" href="#_6-2、打印流" aria-hidden="true">#</a> 6.2、打印流</h4>
<ul>
<li>PrintStream和PrintWriter</li>
<li>提供了一些列重载的print()和println()方法，用于多种数据类型的输出</li>
<li>System.out返回的是PrintStream的实例</li>
</ul>
<h4 id="_6-3、数据流" tabindex="-1"><a class="header-anchor" href="#_6-3、数据流" aria-hidden="true">#</a> 6.3、数据流</h4>
<ul>
<li>DataInputStream和DataOutputStream</li>
<li>用于读取或写出基本数据类型的变量或字符串</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token class-name">DataOutputStream</span> dos <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
     <span class="token keyword">try</span> <span class="token punctuation">{</span>
         dos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataOutputStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token string">"data.txt"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
         dos<span class="token punctuation">.</span><span class="token function">writeUTF</span><span class="token punctuation">(</span><span class="token string">"刘建辰"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         dos<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 刷新操作，将内存中的数据写入文件</span>
         dos<span class="token punctuation">.</span><span class="token function">writeInt</span><span class="token punctuation">(</span><span class="token number">23</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         dos<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         dos<span class="token punctuation">.</span><span class="token function">writeBoolean</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         dos<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">FileNotFoundException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
         <span class="token keyword">if</span> <span class="token punctuation">(</span>dos <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             <span class="token keyword">try</span> <span class="token punctuation">{</span>
                 dos<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                 e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 
 <span class="token doc-comment comment">/**
   * 注意点：读取不同类型的数据的顺序要与当初写入文件时，保存的数据的顺序一致
   */</span>
 <span class="token annotation punctuation">@Test</span>
 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test4</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token class-name">DataInputStream</span> dis <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
     <span class="token keyword">try</span> <span class="token punctuation">{</span>
         dis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataInputStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">"data.txt"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
         <span class="token class-name">String</span> name <span class="token operator">=</span> dis<span class="token punctuation">.</span><span class="token function">readUTF</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token keyword">int</span> age <span class="token operator">=</span> dis<span class="token punctuation">.</span><span class="token function">readInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token keyword">boolean</span> isMale <span class="token operator">=</span> dis<span class="token punctuation">.</span><span class="token function">readBoolean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
         <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>isMale<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
         <span class="token keyword">if</span> <span class="token punctuation">(</span>dis <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             <span class="token keyword">try</span> <span class="token punctuation">{</span>
                 dis<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                 e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7、对象流" tabindex="-1"><a class="header-anchor" href="#_7、对象流" aria-hidden="true">#</a> 7、对象流</h3>
<h4 id="_7-1、对象流" tabindex="-1"><a class="header-anchor" href="#_7-1、对象流" aria-hidden="true">#</a> 7.1、对象流</h4>
<ul>
<li>ObjectInputStream：内存中的对象 ---&gt; 存储中的文件、通过网络传输出去（序列化过程）</li>
<li>ObjectOutputSteam：存储中的文件、通过网络接受过来 ---&gt; 内存中的对象（反序列化过程）</li>
</ul>
<h4 id="_7-2、对象的序列化机制" tabindex="-1"><a class="header-anchor" href="#_7-2、对象的序列化机制" aria-hidden="true">#</a> 7.2、对象的序列化机制</h4>
<ul>
<li>对象序列化机制允许把内存中的Java对象转换成平台无关的二进制流，从而允许把这种二进制流持久地保存在磁盘上，或通过网络将这种二进制流传输到另一个网络节点。</li>
<li>当其它程序获取了这种二进制流，就可以恢复成原来的Java对象</li>
</ul>
<h4 id="_7-3、序列化代码实现" tabindex="-1"><a class="header-anchor" href="#_7-3、序列化代码实现" aria-hidden="true">#</a> 7.3、序列化代码实现</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
 <span class="token keyword">public</span> <span class="token keyword">void</span> testObjectOutputSteam <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token class-name">ObjectOutputStream</span> oos <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
     <span class="token keyword">try</span> <span class="token punctuation">{</span>
         <span class="token comment">// 1、造流</span>
         oos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectOutputStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token string">"object.dat"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token comment">// 2、读写过程</span>
         oos<span class="token punctuation">.</span><span class="token function">writeObject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">"我爱北京天安门"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         oos<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
         <span class="token comment">// 3、关闭资源</span>
         <span class="token keyword">if</span> <span class="token punctuation">(</span>oos <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             <span class="token keyword">try</span> <span class="token punctuation">{</span>
                 oos<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                 e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-4、反序列化代码实现" tabindex="-1"><a class="header-anchor" href="#_7-4、反序列化代码实现" aria-hidden="true">#</a> 7.4、反序列化代码实现</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
 <span class="token keyword">public</span> <span class="token keyword">void</span> testObjectInputSteam <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token class-name">ObjectInputStream</span> ois <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
     <span class="token keyword">try</span> <span class="token punctuation">{</span>
         ois <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectInputStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">"object.dat"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
         <span class="token class-name">Object</span> obj <span class="token operator">=</span> ois<span class="token punctuation">.</span><span class="token function">readObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> obj<span class="token punctuation">;</span>
 
         <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ClassNotFoundException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
         <span class="token keyword">if</span> <span class="token punctuation">(</span>ois <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             <span class="token keyword">try</span> <span class="token punctuation">{</span>
                 ois<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                 e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-5、实现序列化的对象所属的类需要满足的条件" tabindex="-1"><a class="header-anchor" href="#_7-5、实现序列化的对象所属的类需要满足的条件" aria-hidden="true">#</a> 7.5、实现序列化的对象所属的类需要满足的条件</h4>
<ul>
<li>需要实现接口：Serializable</li>
<li>当前类提供一个全局常量：serialVersionUID</li>
<li>除了当前类需要实现Serializable接口之外，还必须保证其内部所有属性也必须是可序列化的。（默认情况下，基本数据类型可序列化）</li>
</ul>
<p>补充：ObjectOutputSteam和ObjectInputStream不能序列化static和transient修饰的成员变量</p>
<h3 id="_8、随机存取文件流" tabindex="-1"><a class="header-anchor" href="#_8、随机存取文件流" aria-hidden="true">#</a> 8、随机存取文件流</h3>
<h4 id="_8-1、随机存取文件流" tabindex="-1"><a class="header-anchor" href="#_8-1、随机存取文件流" aria-hidden="true">#</a> 8.1、随机存取文件流</h4>
<ul>
<li>RandomAccessFile</li>
</ul>
<h4 id="_8-2、使用说明" tabindex="-1"><a class="header-anchor" href="#_8-2、使用说明" aria-hidden="true">#</a> 8.2、使用说明</h4>
<ul>
<li>RandomAccessFile直接继承于java.lang.Object类，实现了DataInput和DataOutput接口</li>
<li>RandomAccessFile既可以作为一个输入流，又可以作为一个输出流</li>
<li>如果RandomAccessFile作为输出流时，写出到的文件如果不存在，则在执行过程中自动创建。如果写出到的文件存在，则会对原文件内容进行覆盖。（默认情况下，从头覆盖）</li>
<li>可以通过相关的操作，实现RandomAccessFile“插入”数据的效果。seek(int pos)</li>
</ul>
<h4 id="_8-3、典型代码" tabindex="-1"><a class="header-anchor" href="#_8-3、典型代码" aria-hidden="true">#</a> 8.3、典型代码</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code> <span class="token doc-comment comment">/**
  * 实现复制功能
  */</span>
 <span class="token annotation punctuation">@Test</span>
 <span class="token keyword">public</span> <span class="token keyword">void</span> test1 <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token class-name">RandomAccessFile</span> raf1 <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
     <span class="token class-name">RandomAccessFile</span> raf2 <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
     <span class="token keyword">try</span> <span class="token punctuation">{</span>
         <span class="token comment">// 1、造流</span>
         raf1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RandomAccessFile</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"爱情与友情.jpg"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"r"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         raf2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RandomAccessFile</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"爱情与友情1.jpg"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"rw"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token comment">// 2、读写过程</span>
         <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> buffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
         <span class="token keyword">int</span> len<span class="token punctuation">;</span>
         <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>len <span class="token operator">=</span> raf1<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             raf2<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>buffer<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
         <span class="token comment">// 3、关闭资源</span>
         <span class="token keyword">if</span> <span class="token punctuation">(</span>raf1 <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             <span class="token keyword">try</span> <span class="token punctuation">{</span>
                 raf1<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                 e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span>
         <span class="token punctuation">}</span>
         <span class="token keyword">if</span> <span class="token punctuation">(</span>raf2 <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             <span class="token keyword">try</span> <span class="token punctuation">{</span>
                 raf2<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                 e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token doc-comment comment">/**
  * 使用RandomAccessFile实现数据的插入效果
  */</span>
 <span class="token annotation punctuation">@Test</span>
 <span class="token keyword">public</span> <span class="token keyword">void</span> test3 <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token class-name">RandomAccessFile</span> raf1 <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
     <span class="token keyword">try</span> <span class="token punctuation">{</span>
         raf1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RandomAccessFile</span><span class="token punctuation">(</span><span class="token string">"hello.txt"</span><span class="token punctuation">,</span> <span class="token string">"rw"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
         raf1<span class="token punctuation">.</span><span class="token function">seek</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将指针调到角标为3的位置</span>
         <span class="token comment">// 保存指针3后面的所有数据到StringBuilder中</span>
         <span class="token class-name">StringBuilder</span> buildr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"hello.txt"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> buffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
         <span class="token keyword">int</span> len<span class="token punctuation">;</span>
         <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>len <span class="token operator">=</span> raf1<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             buildr<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>buffer<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
 
         <span class="token comment">// 调回指针，写入“xyz”</span>
         raf1<span class="token punctuation">.</span><span class="token function">seek</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         raf1<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">"xyz"</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
         <span class="token comment">// 将StringBuilder中的数据写入到文件中</span>
         raf1<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>buildr<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
         <span class="token keyword">if</span> <span class="token punctuation">(</span>raf1 <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             <span class="token keyword">try</span> <span class="token punctuation">{</span>
                 raf1<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                 e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token punctuation">}</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9、nio-2中path、paths、files类的使用" tabindex="-1"><a class="header-anchor" href="#_9、nio-2中path、paths、files类的使用" aria-hidden="true">#</a> 9、NIO.2中Path、Paths、Files类的使用</h3>
<h4 id="_9-1、nio的使用说明" tabindex="-1"><a class="header-anchor" href="#_9-1、nio的使用说明" aria-hidden="true">#</a> 9.1、NIO的使用说明</h4>
<ul>
<li>Java NIO(New IO, Non-Blocking IO)是从Java 1.4版本开始引入的一套新的IO API，可以替代标准的Java IO API。</li>
<li>NIO与原来的IO同样的作用和目的，但是使用的方式完全不同，NIO支持面向缓冲区的(IO是面向流的)、基于通道的IO操作</li>
<li>NIO将以更高效的方式进行文件的读写操作</li>
<li>随着JDK 7的发布，Java对NIO进行了极大的扩展，增强了对文件处理和文件系统特性的支持，以至于我们称他们为NIO.2</li>
</ul>
<h4 id="_9-2、path的使用" tabindex="-1"><a class="header-anchor" href="#_9-2、path的使用" aria-hidden="true">#</a> 9.2、Path的使用</h4>
<ul>
<li>Path替换原有的File类</li>
<li>Paths类提供了静态get()方法用来获取Path对象：
<ul>
<li>static Path get(String first, String ... more)：用于将多个字符串串连成路径</li>
<li>static Path get(URI uri)：返回指定uri对应的Parh路径</li>
</ul>
</li>
<li>常用方法：
<ul>
<li>String toString()：返回调用Path对象的字符串表示形式</li>
<li>boolean startsWith(String path)：判断是否以path路径开始</li>
<li>boolean endsWith(String path)：判断是否以path路径结束</li>
<li>boolean isAbsolute()：判断是否是绝对路径</li>
<li>Path getParent()：返回path对象包含整个路径，不包含Path对象指定的文件路径</li>
<li>Path getRoot()：返回调用Path对象的根路径</li>
<li>Path getFileName()：返回与调用Path对象关联的文件名</li>
<li>int getNameCount()：返回Path根目录后面元素的数量</li>
<li>Path getName(int idx)：返回指定索引位置idx的路径名称</li>
<li>Path toAbsolutePath()：作为绝对路径返回调用Path对象</li>
<li>Path resolve(Path p)：合并两个路径，返回合并后的路径对应的Path对象</li>
<li>File toFile()：将Path转换为File类的对象</li>
</ul>
</li>
</ul>
<h4 id="_9-3、files工具类" tabindex="-1"><a class="header-anchor" href="#_9-3、files工具类" aria-hidden="true">#</a> 9.3、Files工具类</h4>
<ul>
<li>作用：操作文件或文件目录的工具类</li>
<li>常用方法：
<ul>
<li>Path copy(Path src, Path dest, CopyOption ... how)：文件的复制</li>
<li>Path createDirectory(Path path, FileAttribute&lt;?&gt; ... attr)：创建一个目录</li>
<li>Path createFile(Path path, FileAttribute&lt;?&gt; ... arr)：创建一个文件</li>
<li>void delete(Path path)：删除一个文件/目录，如果不存在，执行报错</li>
<li>void deleteIfExists(Path path)：Path对应的文件/目录如果存在，执行删除</li>
<li>Path move(Path src, Path dest, CopyOption ... how)：将src移动到dest位置</li>
<li>long size(Path path)：返回指定文件的大小</li>
</ul>
</li>
<li>用于判断：
<ul>
<li>boolean exists(Path path, LinkOption ... opts)：判断文件是否存在</li>
<li>boolean isDirectory(Path path, LinkOption ... opts)：判断是否是目录</li>
<li>boolean isRegularFile(Path path, LinkOption ... opts)：判断是否是文件</li>
<li>boolean isHidden(Path path)：判断是否是隐藏文件</li>
<li>boolean isReadable(Path path)：判断文件是否可读</li>
<li>boolean isWritable(Path path)：判断文件是否可写</li>
<li>boolean notExists(Path path, LinkOption ... opts)：判断文件是否不存在</li>
</ul>
</li>
<li>用于操作内存
<ul>
<li>SeekableByteChannel newByteChannel(Path path, OpenOption ... how)：获取与指定文件的连接，how指定打开方式</li>
<li>DirectoryStream<Path> newDirectoryStream(Path path)：打开path指定的目录</li>
<li>InputStream newInputStream(Path path, OpenOption ... how)：获取InputStream对象</li>
<li>OutputStream newOutputStream(Path path, OpenOption ... how)：获取OutputStream对象</li>
</ul>
</li>
</ul>
</div></template>
