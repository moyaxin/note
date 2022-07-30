<template><div><p>java集合</p>
<!-- more -->
<h1 id="_7-java集合" tabindex="-1"><a class="header-anchor" href="#_7-java集合" aria-hidden="true">#</a> 7.java集合</h1>
<h3 id="_1、java集合框架概述" tabindex="-1"><a class="header-anchor" href="#_1、java集合框架概述" aria-hidden="true">#</a> 1、Java集合框架概述</h3>
<h4 id="_1-1、集合框架的概述" tabindex="-1"><a class="header-anchor" href="#_1-1、集合框架的概述" aria-hidden="true">#</a> 1.1、集合框架的概述</h4>
<ul>
<li>集合、数组都是对多个数据进行存储操作的结构，简称Java容器。</li>
<li>说明：此时的存储，主要指的是内存层面的存储，不涉及到持久化的存储</li>
<li>数组在存储多个数据方面的特点：
<ul>
<li>一旦初始化以后，其长度就确定了</li>
<li>数组一旦定义好，其元素的类型也就确定了。我们也就只能操作指定类型的数据了。比如：String[] arr;int[] arr1;Object[] arr2;</li>
</ul>
</li>
<li>数组在存储多个数据方面的缺点：
<ul>
<li>一旦初始化以后，其长度就不可修改</li>
<li>数组中提供的方法非常有限，对于添加、删除、插入数据等操作，非常不便，同时效率不高。</li>
<li>获取数组中实际元素的个数的需求，数组没有现成的属性或方法可用。</li>
<li>数组存储数据的特点：有序、可重复。对于无序、不可重复的需求，不能满足。</li>
</ul>
</li>
</ul>
<h4 id="_1-2、集合框架" tabindex="-1"><a class="header-anchor" href="#_1-2、集合框架" aria-hidden="true">#</a> 1.2、集合框架</h4>
<ul>
<li>Coolection接口：单列集合，用来存储一个一个的对象
<ul>
<li>List接口：存储有序的、可重复的数据
<ul>
<li>ArrrayList、LinkedList、Vector</li>
</ul>
</li>
<li>Set接口：存储无序的、不可重复的数据
<ul>
<li>HashSet、LinkedHashSet、TreeSet</li>
</ul>
</li>
</ul>
</li>
<li>Map接口：双列集合，用来存储一对(key-value)一对的数据
<ul>
<li>HashMap、LinkedHashMap、TreeMap、Hashtable、Properties</li>
</ul>
</li>
</ul>
<h3 id="_2、collection接口方法" tabindex="-1"><a class="header-anchor" href="#_2、collection接口方法" aria-hidden="true">#</a> 2、Collection接口方法</h3>
<ul>
<li>添加
<ul>
<li>add(Object obj)</li>
<li>addAll(Conllection coll)</li>
</ul>
</li>
<li>获取有效元素的个数
<ul>
<li>int size()</li>
</ul>
</li>
<li>清空集合
<ul>
<li>void clear()</li>
</ul>
</li>
<li>是否是空集合
<ul>
<li>boolean isEmpty()</li>
</ul>
</li>
<li>是否包含某个元素
<ul>
<li>boolean contains(Object obj)：是通过元素的equals方法来判断是否是同一个对象</li>
<li>boolean containsAll(Collection c)：也是调用元素的equals方法来比较的。拿两个集合的元素挨个比较。</li>
</ul>
</li>
<li>删除
<ul>
<li>boolean remove(Object obj)：通过元素的equals方法判断是否是要删除的那个元素。只会删除找到的第一个元素</li>
<li>boolean removeAll(Collection coll)：取当前集合的差集</li>
</ul>
</li>
<li>取两个集合的交集
<ul>
<li>boolean retainAll(Collection c)：把交集的结果存在当前集合中，不影响c</li>
</ul>
</li>
<li>集合是否相等
<ul>
<li>boolean equals(Object obj)</li>
</ul>
</li>
<li>转成对象数组
<ul>
<li>Object[] toArray()</li>
</ul>
</li>
<li>获取集合对象的哈希值
<ul>
<li>hashCode()</li>
</ul>
</li>
<li>遍历
<ul>
<li>iterator()：返回迭代器对象，用于集合遍历</li>
</ul>
</li>
</ul>
<p>拓展：数组 --&gt; 集合：调用Arrays类的静态方法asList()</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> list <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token string">"AA"</span><span class="token punctuation">,</span> <span class="token string">"BB"</span><span class="token punctuation">,</span> <span class="token string">"CC"</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token comment">// Arrays.asList会优先将其当做一个元素，而不会自动装箱当做是两个元素</span>
 <span class="token class-name">List</span> arr1 <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">123</span><span class="token punctuation">,</span> <span class="token number">456</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>arr1<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
 
 <span class="token class-name">List</span> arr2 <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">123</span><span class="token punctuation">,</span> <span class="token number">456</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>arr2<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 2</span>
 <span class="token comment">// 推荐写法：避免错误</span>
 <span class="token class-name">List</span> arr3 <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">,</span> <span class="token number">456</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>arr3<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、iterator迭代器接口" tabindex="-1"><a class="header-anchor" href="#_3、iterator迭代器接口" aria-hidden="true">#</a> 3、Iterator迭代器接口</h3>
<h4 id="_3-1、iterator迭代器概述" tabindex="-1"><a class="header-anchor" href="#_3-1、iterator迭代器概述" aria-hidden="true">#</a> 3.1、Iterator迭代器概述</h4>
<ul>
<li>Iterator对象称为迭代器，主要用于遍历Collection集合中的元素</li>
<li>GOF给迭代器模式的定义为：提供一种方法访问一个容器(container)对象中各个元素，而又不需暴露该对象的内部细节。迭代器模式，就是为容器而生。</li>
</ul>
<h4 id="_3-1、iterator的使用" tabindex="-1"><a class="header-anchor" href="#_3-1、iterator的使用" aria-hidden="true">#</a> 3.1、Iterator的使用</h4>
<ul>
<li>内部的方法：hasNext()和next()</li>
<li>集合对象每次调用iterator()方法都得到一个全新的迭代器对象</li>
<li>内部定义了remove()，可以在遍历的时候，删除集合中的元素。如果还未调用next()或在上一次调用next方法之后已经调用了remove方法，再调用remove会报IllegalStateException</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code> <span class="token class-name">Iterator</span> iterator <span class="token operator">=</span> coll<span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token comment">// hasNext()：判断是否还有下一个元素</span>
 <span class="token keyword">while</span> <span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">// next()：1、指针下移；2、将下移以后集合位置上的元素返回</span>
     <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
foreach遍历集合时，内部仍然调用了迭代器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、conllection子接口一-list" tabindex="-1"><a class="header-anchor" href="#_4、conllection子接口一-list" aria-hidden="true">#</a> 4、Conllection子接口一：List</h3>
<h4 id="_4-1、list框架" tabindex="-1"><a class="header-anchor" href="#_4-1、list框架" aria-hidden="true">#</a> 4.1、List框架</h4>
<ul>
<li>Collection接口：单列集合，用来存储一个一个的对象
<ul>
<li>List接口：存储有序的、可重复的数据
<ul>
<li>ArrayList：作为List接口的主要实现类：线程不安全，效率高；底层使用Object[] elementData存储</li>
<li>LinkedList：对于频繁的插入、删除操作，使用此类效率比ArrayList高；底层使用双向链表存储</li>
<li>Vector：作为List接口的古老实现类；线程安全的，效率低；底层使用Object[] elementData存储</li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="_4-2、arraylist的源码分析" tabindex="-1"><a class="header-anchor" href="#_4-2、arraylist的源码分析" aria-hidden="true">#</a> 4.2、ArrayList的源码分析</h4>
<ul>
<li>ArrayList的源码分析</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code> <span class="token doc-comment comment">/**
  * 1、JDK 7情况下
  *  ArrayList list = new ArrayList();//底层创建了长度是10的Object[]数组elementData
  *  list.add(123);//elementData[0] = new Integer(123);
  *  ...
  *  list.add(11);如果此次的添加导致底层elementData数组容量不够，则扩容。
  *  默认情况下，扩容为原来的容量的1.5倍，同时需要将原有数组中的数据复制到新的数组中
  *
  *  结论：建议开发中使用带参的构造器：ArrayList list = new ArrayList(int capacity)
  *
  * 2、JDK 8中ArrayList的变化：
  *  ArrayList list = new ArrayList();//底层Object[] elementData初始化为<span class="token punctuation">{</span><span class="token punctuation">}</span>.并没有创建长度是10的Object[]数组elementData
  *
  *  list.add(123);//第一次调用add()时，底层才创建了长度10的数组，并将数据123添加到elementData[0]
  *  ...
  *  后续的添加和扩容操作与JDK 7无异
  *
  * 3、小结：JDK 7中的ArrayList的对象的创建类似于单例的饿汉式，而JDK 8中的ArrayList的对象
  *          的创建类似于单例的懒汉式，延迟了数组的创建，节省内存。
  */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>LinkedList的源码分析</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code> <span class="token doc-comment comment">/**
  * LinkedList list = new LinkedList(); 内部声明了Node类型的first和last属性，默认值为null
  * list.add(123);//将123封装到Node中，创建了Node对象。
  * 
  * 其中，Node的定义：体现了LinkedList的双向链表的说法
  * private static class Node<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>E</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>
  *      E item;
  *      Node<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>E</span><span class="token punctuation">></span></span> next;
  *      Node<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>E</span><span class="token punctuation">></span></span> prev;
  *
  *      Node(Node<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>E</span><span class="token punctuation">></span></span> prev, E element, Node<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>E</span><span class="token punctuation">></span></span> next) <span class="token punctuation">{</span>
  *         this.item = element;
  *         this.next = next;
  *         this.prev = prev;
  *      <span class="token punctuation">}</span>
  * <span class="token punctuation">}</span>
  */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Vector的源码分析：JDK 7和JDK 8中通过Vector()构造器创建对象时，底层都创建了长度为10的数组，在扩容方面，默认扩容为原来数组长度的2倍。</li>
</ul>
<h4 id="_4-3、面试题-arraylist、linkedlist、vector三者的异同" tabindex="-1"><a class="header-anchor" href="#_4-3、面试题-arraylist、linkedlist、vector三者的异同" aria-hidden="true">#</a> 4.3、面试题：ArrayList、LinkedList、Vector三者的异同？</h4>
<ul>
<li>同：三个类都是实现了List接口，存储数据的特点相同：存储有序的、可重复的数据</li>
<li>不同：见4.1、List框架</li>
</ul>
<h4 id="_4-4、list接口方法" tabindex="-1"><a class="header-anchor" href="#_4-4、list接口方法" aria-hidden="true">#</a> 4.4、List接口方法</h4>
<ul>
<li>List除了从Collection集合继承的方法外，List集合里添加了一些根据索引来操作集合元素的方法</li>
<li>void add(int inde, Object ele)：在index位置插入ele元素</li>
<li>boolean addAll(int index, Collection eles)：从index位置开始将eles中所有元素添加进来</li>
<li>Object get(int index)：获取指定index位置的元素</li>
<li>int indexOf(Object obj)：返回obj在集合中首次出现的位置</li>
<li>int lastIndexOf(Object obj)：返回obj在当前集合中末次出现的位置</li>
<li>Object remove(int index)：移除指定index位置的元素，并返回此元素</li>
<li>Object set(int index, Object ele)：设置指定index位置的元素为ele</li>
<li>List subList(int fromIndex, int toIndex)：返回从fromIndex到toIndex位置的子集合</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code> <span class="token doc-comment comment">/**
  * 区分List中remove(int index)和remove(Object obj)
  */</span>
 <span class="token annotation punctuation">@Test</span>
 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testListRemove</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token class-name">List</span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token function">updateList</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token comment">// updateList1(list);</span>
     <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
 
 <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">updateList</span><span class="token punctuation">(</span><span class="token class-name">List</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">// 注意区分是调用下标还是对象的remove方法</span>
     <span class="token comment">// list.remove(2); // [1, 2]</span>
     <span class="token comment">// list.remove(new Integer(2)); // [1, 3]</span>
 <span class="token punctuation">}</span>
 
 <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">updateList1</span><span class="token punctuation">(</span><span class="token class-name">Collection</span> coll<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">// 多态，此时父类只有remove(Object obj)的方法</span>
     coll<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, 3]</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、conllection子接口二-set" tabindex="-1"><a class="header-anchor" href="#_5、conllection子接口二-set" aria-hidden="true">#</a> 5、Conllection子接口二：Set</h3>
<h4 id="_5-1、set接口的框架" tabindex="-1"><a class="header-anchor" href="#_5-1、set接口的框架" aria-hidden="true">#</a> 5.1、Set接口的框架</h4>
<ul>
<li>Collection接口：单列集合，用来存储一个一个的对象
<ul>
<li>Set接口：存储无序的，不可重复的数据
<ul>
<li>HashSet：作为Set接口的主要实现类：线程不安全；可以存储null值
<ul>
<li>LinkedHashSet：作为HashSet的子类；遍历其内部数据时，可以按照添加的顺序进行遍历。对于频繁的遍历操作，LinkedHashSet效率高于HashSet</li>
</ul>
</li>
<li>TreeSet：可以按照添加对象的指定属性，进行排序</li>
</ul>
</li>
</ul>
</li>
</ul>
<p>Set接口中没有额外定义新的方法，使用的都是Collection中声明过的方法。</p>
<h4 id="_5-2、无序性与不可重复性-hashset为例" tabindex="-1"><a class="header-anchor" href="#_5-2、无序性与不可重复性-hashset为例" aria-hidden="true">#</a> 5.2、无序性与不可重复性（HashSet为例）</h4>
<ul>
<li>无序性：不等于随机性。存储的数据在底层数组中并非按照数组索引的顺序添加，而是根据数据的哈希值决定的。</li>
<li>不可重复性：保证添加的元素按照equals()判断时，不能返回true。即：相同的元素只能添加一个。
<ul>
<li>前提是哈希值相同，才会进行equals()判断</li>
</ul>
</li>
</ul>
<h4 id="_5-3、hashset的源码分析" tabindex="-1"><a class="header-anchor" href="#_5-3、hashset的源码分析" aria-hidden="true">#</a> 5.3、HashSet的源码分析</h4>
<ul>
<li>我们向HashSet中添加元素a，首先调用元素a所在类的hashCode()方法，计算元素a的哈希值，此哈希值接着通过某种算法计算出在HashSet底层数组中的存放位置（即为：索引位置），判断数组此位置上是否已经有元素：
<ul>
<li>如果此位置上没有其他元素，则元素a添加成功。 ---&gt; 情况1</li>
<li>如果此位置上有其他元素b（或以链表形式存在的多个元素），则比较元素a与元素b的hash值：
<ul>
<li>如果hash值不相同，则元素a添加成功。 ---&gt; 情况2</li>
<li>如果hash值相同，进而需要调用元素a所在类的equals()方法：
<ul>
<li>equals()返回true，元素a添加失败</li>
<li>equals()返回false，则元素a添加成功。 ---&gt; 情况3</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>对于添加成功的情况2和情况3而言：元素a与已经存在指定索引位置上数据以链表的方式存储。
<ul>
<li>JDK 7：元素a放在数组中，指向原来的元素。</li>
<li>JDK 8：原来的元素在数组中，指向元素a</li>
<li>总结：七上八下</li>
</ul>
</li>
<li>HashSet底层：数组+链表的结构</li>
</ul>
<p>要求：向Set中添加的数据，其所在的类一定要重写hashCode()和equals()。要求：重写的hashCode()和equals()尽可能保持一致性：相等的对象必须具有相等的散列码。重写两个方法的小技巧：对象中用作equals()方法比较的Field，都应该用来计算hashCode值</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code> <span class="token class-name">HashSet</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token comment">// Person类中重写了hashCode()和equals()方法</span>
 <span class="token class-name">Person</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token number">1001</span><span class="token punctuation">,</span> <span class="token string">"AA"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token class-name">Person</span> p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token number">1002</span><span class="token punctuation">,</span> <span class="token string">"BB"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
 set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>p1<span class="token punctuation">)</span><span class="token punctuation">;</span>
 set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>p2<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>set<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [Person{id=1002, name='BB'}, Person{id=1001, name='AA'}]</span>

 p1<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"CC"</span><span class="token punctuation">;</span>
 set<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>p1<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>set<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [Person{id=1002, name='BB'}, Person{id=1001, name='CC'}]</span>

 set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token number">1001</span><span class="token punctuation">,</span> <span class="token string">"CC"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>set<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [Person{id=1002, name='BB'}, Person{id=1001, name='CC'}, </span>
<span class="token class-name">Person</span><span class="token punctuation">{</span>id<span class="token operator">=</span><span class="token number">1001</span><span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token char">'CC'</span><span class="token punctuation">}</span><span class="token punctuation">]</span>

 set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token number">1001</span><span class="token punctuation">,</span> <span class="token string">"AA"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>set<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [Person{id=1002, name='BB'}, Person{id=1001, name='CC'}, </span>
<span class="token class-name">Person</span><span class="token punctuation">{</span>id<span class="token operator">=</span><span class="token number">1001</span><span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token char">'CC'</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>id<span class="token operator">=</span><span class="token number">1001</span><span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token char">'AA'</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token class-name">Person</span><span class="token punctuation">{</span>id<span class="token operator">=</span><span class="token number">1002</span><span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token char">'BB'</span><span class="token punctuation">}</span><span class="token punctuation">,</span> 
<span class="token class-name">Person</span><span class="token punctuation">{</span>id<span class="token operator">=</span><span class="token number">1001</span><span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token char">'CC'</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>id<span class="token operator">=</span><span class="token number">1001</span><span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token char">'CC'</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>id<span class="token operator">=</span><span class="token number">1001</span><span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token char">'AA'</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-4、为什么用eclipse-idea重写hashcode方法-有31这个数字" tabindex="-1"><a class="header-anchor" href="#_5-4、为什么用eclipse-idea重写hashcode方法-有31这个数字" aria-hidden="true">#</a> 5.4、为什么用Eclipse/IDEA重写hashCode方法，有31这个数字？</h4>
<ul>
<li>选择系数的时候要选择尽量大的系数。因为如果计算出来的hash地址越大，所谓的“冲突”就越少，查找起来效率也会提高。（减少冲突）</li>
<li>并且31只占用了5bits，相乘造成数据溢出的概率较少。</li>
<li>31可以由i*31==(i&lt;&lt;5)-1表示，现在很多虚拟机里面都有做相关优化。（提高算法效率）</li>
<li>31是一个素数，素数作用就是如果我用一个数字来乘以这个素数，那么最终出来的结果只能被素数本身和被乘数还有1来整除！（减少冲突）</li>
</ul>
<h4 id="_5-5、linkedhashset的使用" tabindex="-1"><a class="header-anchor" href="#_5-5、linkedhashset的使用" aria-hidden="true">#</a> 5.5、LinkedHashSet的使用</h4>
<ul>
<li>LinkedHashSet作为HashSet的子类，在添加数据的同时，每个数据还维护了两个引用，记录此数据前一个数据和后一个数据</li>
<li>优点：对于频繁的遍历操作，LinkedHashSet效率高于HashSet</li>
</ul>
<h4 id="_5-5、treeset的使用" tabindex="-1"><a class="header-anchor" href="#_5-5、treeset的使用" aria-hidden="true">#</a> 5.5、TreeSet的使用</h4>
<ul>
<li>向TreeSet中添加数据，要求是相同的类的对象</li>
<li>两种排列方法：自然排序（实现Comparable接口）和定制排序（Comparator）</li>
<li>自然排序中，比较两个对象是否相同的标准为：compareTo()返回0，不再是equals()</li>
<li>定制排序中，比较两个对象是否相同的标准为：compare()返回0，不再是equals()</li>
</ul>
<h3 id="_6、map接口" tabindex="-1"><a class="header-anchor" href="#_6、map接口" aria-hidden="true">#</a> 6、Map接口</h3>
<h4 id="_6-1、map接口的框架" tabindex="-1"><a class="header-anchor" href="#_6-1、map接口的框架" aria-hidden="true">#</a> 6.1、Map接口的框架</h4>
<ul>
<li>Map：双列数据，存储key-value对的数据
<ul>
<li>HashMap：作为Map的主要实现类；线程不安全的，效率高；可以存储null的key和value
<ul>
<li>LinkedHashMap：保证在遍历map元素时，可以按照添加的顺序实现遍历。原因：在原有的HashMap底层结构基础上，添加了一对指针，指向前一个和后一个元素，对于频繁的遍历操作，此类执行效率高于HashMap</li>
</ul>
</li>
<li>TreeMap：保证按照添加的key-value对进行排序；实现排序遍历。此时考虑key的自然排序或定制排序。底层使用红黑树</li>
<li>Hashtable：作为古老的实现类；线程安全的，效率低；不能存储null的key和value
<ul>
<li>Properties：常用来处理配置文件。key和value都是String类型</li>
</ul>
</li>
</ul>
</li>
</ul>
<p>HashMap的底层：数组+链表(JDK 7及之前)或数组+链表+红黑树(JDK 8)</p>
<h4 id="_6-2、map结构的理解-以hashmap为例" tabindex="-1"><a class="header-anchor" href="#_6-2、map结构的理解-以hashmap为例" aria-hidden="true">#</a> 6.2、Map结构的理解（以HashMap为例）</h4>
<ul>
<li>Map中的key：无序的、不可重复的，使用Set存储所有的key --&gt; key所在的类要重写equals()和hashCode()</li>
<li>Map中的value：无序的、可重复的，使用Collection存储所有的value --&gt; value所在的类型要重写equals()</li>
<li>一个键值对：key-value构成了一个Entry对象</li>
<li>Map中的entry：无序的、不可重复的，使用Set存储所有的entry</li>
</ul>
<h4 id="_6-3、hashmap的底层实现原理-以jdk-7为例" tabindex="-1"><a class="header-anchor" href="#_6-3、hashmap的底层实现原理-以jdk-7为例" aria-hidden="true">#</a> 6.3、HashMap的底层实现原理？（以JDK 7为例）</h4>
<p>/**
  * HashMap map = new HashMap();
  * 在实例化以后，底层创建了长度是16的一对数组Entry[] table
  * ...可能已经执行过多次put...
  * map.put(key1, value1):
  *  首先，调用key1所在类的hashCode()计算key1哈希值，此哈希值经过某种算法计算以后，得到在Entry数组中的存放位置。
  *  如果此位置上的数据为空，此时的key1-value1添加成功。 ---&gt; 情况1
  *  如果此位置上的数据不为空，（意味着此位置上存在一个或多个数据（以链表形式）），比较key1和已经存在的一个或多个数据的哈希值：
  *      如果key1的哈希值与已经存在的数据的哈希值都不相同，此时key1-value1添加成功。 ---&gt; 情况2
  *      如果key1的哈希值和已经存在的某一个数据（key2-value2）的哈希值相同，继续比较：调用key1所在类的equals(key2)
  *          如果equals()返回false：此时key1-value1添加成功。---&gt; 情况3
  *          如果equals()返回true：使用value1替换value2
  *
  *  补充：关于情况2和情况3：此时key1-value1和原来的数据以链表的方法存储。
  *
  *  在不断的添加过程中，会涉及到扩容问题，当超过临界值(且要存放的位置非空)时，扩容。默认的扩容方式：扩容为原来容量的2倍，并将原有的数据复制过来。
  */</p>
<ul>
<li>JDK 8相较于JDK 7在底层实现方面的不同：
<ul>
<li>1、new HashMap()：底层没有创建一个长度为16的数组</li>
<li>2、JDK 8底层的数组是：Node[]，而非Entry[]</li>
<li>3、首次调用put()方法时，底层创建长度为16的数组</li>
<li>4、JDK 7的底层结构只有：数组+链表。JDK 8中底层结构：数组+链表+红黑树。
<ul>
<li>形成链表时，依旧符合“七上八下”(JDK 7：新的元素指向旧的元素。JDK 8：旧的元素指向新的元素)</li>
<li>当数组的某一个索引位置上的元素以链表形式存在的数据个数 &gt; 8 且当前数组的长度 &gt; 64时，此时此索引位置上的所有数据改为使用红黑树存储。</li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="_6-4、hashmap源码中的重要常量" tabindex="-1"><a class="header-anchor" href="#_6-4、hashmap源码中的重要常量" aria-hidden="true">#</a> 6.4、HashMap源码中的重要常量</h4>
<ul>
<li>DEFAULT_INITIAL_CAPACITY：HashMap的默认值，16</li>
<li>DEFAULT_LOAD_FACTOR：HashMap的默认加载因子：0.75</li>
<li>threahold：扩容的临界值，=容器*填充因子：16 * 0.75 =&gt; 12</li>
<li>TREEIFY_THRESHOLD：Bucket中链表长度大于该默认值，转化为红黑树：8</li>
<li>MIN_TREEIFY_CAPACITY：桶中的Node被树化时最小的hash表容量：64</li>
</ul>
<p>面试题：负载因子值的大小，对HashMap有什么影响？1、负载因子的大小决定了HashMap的数据密度2、负载因子越大密度越大，发生碰撞的几率越高，数组中的链表越容易长，造成查询或插入时的比较次数增多，性能会下降。3、负载因子越小，就越容易触发扩容，数据密度也越小，意味着发生碰撞的几率越小，数组中的链表也就越短，查询和插入时比较的次数也越小，性能会更高。但是会浪费一定的内容空间。而且经常扩容也会影响性能，建议初始化预设大一点的空间4、按照其他语言的参考及研究经验，会考虑将负载因子设置在0.7~0.75，此时平均检索长度接近于常数</p>
<h4 id="_6-5、linkedhashmap的底层原理" tabindex="-1"><a class="header-anchor" href="#_6-5、linkedhashmap的底层原理" aria-hidden="true">#</a> 6.5、LinkedHashMap的底层原理</h4>
<ul>
<li>LinkedHashMap底层使用的结构与HashMap相同，因为LinkedHashMap继承于HashMap</li>
<li>区别就在于：LinkedHashMap内部提供了Entry，替换HashMap中的Node</li>
<li>HashMap中的内部类：Node</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> <span class="token keyword">implements</span> <span class="token class-name">Map<span class="token punctuation">.</span>Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>
   <span class="token keyword">final</span> <span class="token keyword">int</span> hash<span class="token punctuation">;</span>
   <span class="token keyword">final</span> <span class="token class-name">K</span> key<span class="token punctuation">;</span>
   <span class="token class-name">V</span> value<span class="token punctuation">;</span>
   <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> next<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
● <span class="token class-name">LinkedHashMap</span>中的内部类：<span class="token class-name">Entry</span>
 <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> <span class="token keyword">extends</span> <span class="token class-name">HashMap<span class="token punctuation">.</span>Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>
   <span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> before<span class="token punctuation">,</span> after<span class="token punctuation">;</span><span class="token comment">// 能够记录添加的元素的先后顺序</span>
   <span class="token class-name">Entry</span><span class="token punctuation">(</span><span class="token keyword">int</span> hash<span class="token punctuation">,</span> <span class="token class-name">K</span> key<span class="token punctuation">,</span> <span class="token class-name">V</span> value<span class="token punctuation">,</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">super</span><span class="token punctuation">(</span>hash<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> next<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-5、map接口常用方法" tabindex="-1"><a class="header-anchor" href="#_6-5、map接口常用方法" aria-hidden="true">#</a> 6.5、Map接口常用方法</h4>
<ul>
<li>添加、删除、修改操作：
<ul>
<li>Object put(Object key, Object value)：指定key-value添加到(或修改)当前map对象中</li>
<li>void putAll(Map m)：将m中的所有key-value对存放到当前map中</li>
<li>Object remove(Object key)：移除指定key的key-value对，并返回value</li>
<li>void clear()：清空当前map中的所有数据</li>
</ul>
</li>
<li>元素查询的操作：
<ul>
<li>Object get(Object key)：获取指定key对应的value</li>
<li>boolean containsKey(Object key)：是否包含指定的key</li>
<li>boolean containsValue(Object value)：是否包含指定的value</li>
<li>int size()：返回map中key-value对的个数</li>
<li>boolean isEmpty()：判断当前map是否为空</li>
<li>boolean equals(Object obj)：判断当前map和参数对象obj是否相等</li>
</ul>
</li>
<li>元视图操作的方法：
<ul>
<li>Set keySet()：返回所有key构成的Set集合</li>
<li>Collection values()：返回所有value构成的Collection集合</li>
<li>Set entrySet()：返回所有key-value对构成的Set集合</li>
</ul>
</li>
</ul>
<h3 id="_7、collections工具类" tabindex="-1"><a class="header-anchor" href="#_7、collections工具类" aria-hidden="true">#</a> 7、Collections工具类</h3>
<ul>
<li>Collections是一个操作Set、List和Map等集合的工具类</li>
<li>Collections中提供了一系列静态的方法对集合元素进行排序、查询和修改等操作，还提供了对集合对象设置不可变、对集合对象实现同步控制等方法</li>
<li>排序操作：(均为static方法)
<ul>
<li>reverse(List)：反转List中元素的顺序</li>
<li>shuffle(List)：对List集合元素进行随机排序</li>
<li>sort(List)：根据元素的自然顺序对指定List集合元素按升序排序</li>
<li>sort(List, Comparator)：根据指定的Comparator产生的顺序对List集合元素进行排序</li>
<li>swap(List, int, int)：将指定list集合中的i处元素和j处元素进行交换</li>
</ul>
</li>
<li>查找、替换
<ul>
<li>Object max(Collection)：根据元素的自然顺序，返回给定集合中的最大值</li>
<li>Object max(Collection, Comparator)：根据Comparator指定的顺序，返回给定集合中的最大元素</li>
<li>Object min(Collection)</li>
<li>Object min(Collection, Comparator)</li>
<li>int frequency(Collection, Object)：返回指定集合中指定元素的出现次数</li>
<li>void copy(List dest, List src)：将src中的内容复制到dest中</li>
<li>boolean replaceAll(List list, Object oldVal, Object newVal)：使用新值替换List对象的所有旧值</li>
</ul>
</li>
<li>同步控制
<ul>
<li>synchronizedXxx()：将指定集合包装成线程同步的集合，从而可以解决多线程并发访问集合时的线程安全问题</li>
<li>synchronizedList(List list)</li>
<li>synchronizedMap(Map map)</li>
</ul>
</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code> <span class="token class-name">List</span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">43</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">765</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">97</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token comment">// 报异常：java.lang.IndexOutOfBoundsException: Source does not fit in dest</span>
 <span class="token comment">// List dest = new ArrayList();</span>
 <span class="token comment">// Collections.copy(dest, list);</span>
 <span class="token comment">// The destination list must be at least as long as the source list. </span>
 <span class="token comment">// If it is longer, the remaining elements in the destination list are unaffected.</span>
 <span class="token class-name">List</span> dest <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">[</span>list<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>dest<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//list.size();</span>
 <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">copy</span><span class="token punctuation">(</span>dest<span class="token punctuation">,</span> list<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>dest<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h2>
</div></template>
