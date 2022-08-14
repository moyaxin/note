---
sticky: true
date: 2020-08-15
category:
- 杂文
tag:
- 技术
---
使用java根据ip获取ip归属地
<!-- more -->
# 根据ip获取位置信息

这里用了两种方法：

1.<a href="#table2">Ip2region</a>免费，但不全（大部分情况够用）

2.调用[百度api](#table1) 接口，有限制（想要不限制要付钱,也可以使用其他第三方）

## <a id="table2">Ip2region  1.0版本</a>

Ip2region开源项目，github地址：

https://github.com/lionsoul2014/ip2region

### 介绍：

ip2region - 准确率99.9%的离线IP地址定位库，0.0x毫秒级查询，ip2region.db数据库只有数MB，提供了java,php,c,python,nodejs,golang,c#等查询绑定和Binary,B树,内存三种查询算法。

**标准化的数据格式**

```
城市Id|国家|区域|省份|城市|ISP
```

只有中国的数据精确到了城市，其他国家有部分数据只能定位到国家，后前的选项全部是0，已经包含了全部你能查到的大大小小的国家（请忽略前面的城市Id，个人项目需求）

**体积小**

包含了全部的IP，生成的数据库文件ip2region.db只有几MB，最小的版本只有1.5MB，随着数据的详细度增加数据库的大小也慢慢增大，目前还没超过8MB。

**查询速度快**

全部的查询客户端单次查询都在0.x毫秒级别，内置了三种查询算法

1. memory算法：整个数据库全部载入内存，单次查询都在0.1x毫秒内，C语言的客户端单次查询在0.00x毫秒级别。
2. binary算法：基于二分查找，基于ip2region.db文件，不需要载入内存，单次查询在0.x毫秒级别。
3. b-tree算法：基于btree算法，基于ip2region.db文件，不需要载入内存，单词查询在0.x毫秒级别，比binary算法更快。

任何客户端b-tree都比binary算法快，当然memory算法固然是最快的！

### 使用：

1.**pom.xml引入**

```
<dependency>
    <groupId>org.lionsoul</groupId>
    <artifactId>ip2region</artifactId>
    <version>1.7.2</version>
</dependency>
```

2.**下载ip2region.db2**

git clone https://gitee.com/lionsoul/ip2region.git

然后找到ip2region/v1.0/data/ip2region.db

将其复制到resource下

3.编写ip2region 工具类调用

```
/**
 * 根据ip获取地址
 */
public class AddressUtil {

    private static Logger log = LoggerFactory.getLogger(AddressUtil.class);



    public static void main(String[] args) {
                String ipLocation = getCityInfo("118.250.180.192");
//        String ipLocation = getCityInfo("100.122.64.101");
        System.out.println(ipLocation);
    }

    /**
     * 获取省份地址
     * @param ip
     * @return
     */
    public static String getIPLocationPro(String ip){
        String cityInfo = getCityInfo(ip);
        log.info("获取ip归属地地址:"+cityInfo);
        String [] str = cityInfo.split("\\|");
        for (int i = 0; i < str.length; i++) {
            String string1 = str[i];
            if (string1.equals("内网IP"))
                return "未知";
        }
        return str[2];
    }


    @SuppressWarnings("all")
    public static String getCityInfo(String ip) {
        log.info("ip地址:"+ip);
        //db
//        String dbPath = AddressUtil.class.getResource("/ip2region/ip2region.db").getPath();
//        File file1 = new File(dbPath);
        ClassPathResource resource = new ClassPathResource("/ip2region/ip2region.db", AddressUtil.class.getClass().getClassLoader());
        byte[] bytes = new byte[0];
        try {
            bytes = IOUtils.toByteArray(resource.getInputStream());
        } catch (IOException e) {
            e.printStackTrace();
        }

        //查询算法
        int algorithm = DbSearcher.MEMORY_ALGORITYM; //B-tree
        try {
            DbConfig config = new DbConfig();
            DbSearcher searcher = new DbSearcher(config, bytes);
            //define the method
            Method method = null;
            switch (algorithm) {
                case DbSearcher.BTREE_ALGORITHM:
                    method = searcher.getClass().getMethod("btreeSearch", String.class);
                    break;
                case DbSearcher.BINARY_ALGORITHM:
                    method = searcher.getClass().getMethod("binarySearch", String.class);
                    break;
                case DbSearcher.MEMORY_ALGORITYM:
                    method = searcher.getClass().getMethod("memorySearch", String.class);
                    break;
            }
            DataBlock dataBlock = null;
            if (Util.isIpAddress(ip) == false) {
                log.error("Error: Invalid ip address");
            }
            log.info("开始查询.....");
            dataBlock = (DataBlock) method.invoke(searcher, ip);
            return dataBlock.getRegion();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }


}
```

## 调用其他各大地图平台提供的Api接口

1.百度（下面具体举例）

2.高德地图 [文档接口](https://lbs.amap.com/api/webservice/guide/api/ipconfig)

3.腾讯地图 [文档接口](https://lbs.qq.com/service/webService/webServiceGuide/webServiceIp)

## 调用<a id="table1">百度api</a>

### 介绍：

普通IP定位

普通IP定位是一套以HTTP/HTTPS形式提供的轻量级定位接口，用户可以通过该服务，根据IP定位来获取大致位置。目前该服务同时支持 IPv4 和 IPv6 来获取位置信息。

功能介绍

利用IP获取大致位置，调用API接口，返回请求参数中指定上网IP的大致位置信息（一般为城市级别），位置信息包括：经纬度、省、市等地址信息。

普通IP定位服务目前不支持海外场景。

如果请求参数中未指定上网IP，则默认返回当前服务请求来源的IP所对应的大致位置信息。

注意：该服务所返回的经纬度信息只是一个大概的位置，一般为城市中心点。

请求的url

```
https://api.map.baidu.com/location/ip?ak=您的AK&ip=您的IP&coor=bd09ll //GET请求 
```

### 使用:

访问文档，获取密钥（ak）

[百度ip定位文档](https://lbsyun.baidu.com/index.php?title=webapi/ip-api)

![image-20220811204408978](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/2025/202208112044816.png)

然后使用httpclientutil工具类（可参考我后面写的）,直接调用

调用接口方法：

```
public static String getIpLocationByBaidu(String ip){
        String getUserIPUrl ="https://api.map.baidu.com/location/ip?ak=你的ak&ip="+ip+"&coor=bd09ll";
        JSONObject getUserIPUrlResult = HttpClientUtil.doGetJson(getUserIPUrl);
        String status = getUserIPUrlResult.getString("status");
        log.info("百度查询接口状态是否正常:{},只要不是0都不正常",status);
        if (!status.equals("0")){
            return "未知";
        }
        JSONObject jsonObject = getUserIPUrlResult.getJSONObject("content").getJSONObject("address_detail");
        String province = jsonObject.getString("province");
        String city = jsonObject.getString("city");
        log.info("通过百度api查询省份:[{}],和城市:[{}]",province,city);
        return province;
    }
```

httpClientUtil工具类

```
public class HttpClientUtil {

    private static final Logger LOGGER = LoggerFactory.getLogger(HttpClientUtil.class);

    private static CloseableHttpClient client =  HttpClients.custom().build();

    /**
     * 发送get请求
     * @param url
     * @return
     * @throws IOException
     */
    public static JSONObject doGetJson(String url,Map<String, String> headerMap,Map<String, Object> paramMap) {
        LOGGER.info("HttpClientUtil发送get请求输入参数:url={},headerMap={},paramMap={}",url,headerMap,paramMap);
        JSONObject jsonObject = new JSONObject();
        HttpGet httpGet = null;
        try {
            HttpClient client = HttpClientBuilder.create().build();
            if(paramMap!=null){
                url = url+"?";
                for(Map.Entry<String,Object> param : paramMap.entrySet()){
                    url = url + param.getKey()+"="+param.getValue()+"&";
                }
                url = url.substring(0,url.length()-1);
            }
            url = URLDecoder.decode(url, "UTF-8");
            httpGet = new HttpGet(url);
            if(headerMap!=null){
                for(Map.Entry<String,String> header : headerMap.entrySet()){
                    httpGet.setHeader(header.getKey(),header.getValue());
                }
            }
            HttpResponse response = client.execute(httpGet);
            HttpEntity entity = response.getEntity();
            if (entity != null) {
                String result = EntityUtils.toString(entity, "UTF-8");
                jsonObject = JSON.parseObject(result);
            }
            LOGGER.info("HttpClientUtil发送发送get请求返回结果:{},参数:url={},headerMap={},paramMap={}",jsonObject.toJSONString(),url,headerMap,paramMap);
            return jsonObject;
        }catch (Exception e){
            LOGGER.info("HttpClientUtil发送发送get请求执行异常,参数:url={},headerMap={},paramMap={},异常:{}",url,headerMap,paramMap,e);
            return jsonObject;
        }finally {
            if(httpGet!=null){
                httpGet.releaseConnection();
            }

        }
    }

    public static JSONObject doGetJson(String url) {
        return doGetJson(url,null,null);
    }

    /**
     * 无请求头参数传递json参数发送post请求
     * @param url 请求连接
     * @param paramMap 请求参数
     * @return
     */
    public static String doPostJsonWithoutHeader(String url, Map<String, Object> paramMap){
        return doPost(url,paramMap,null,true);
    }

    /**
     * 无请求头参数传递表单参数发送post请求
     * @param url 请求连接
     * @param paramMap 请求参数
     * @return
     */
    public static String doPostFormdataWithoutHeader(String url, Map<String, Object> paramMap){
        return doPost(url,paramMap,null,false);
    }

    /**
     * 传递json参数发送post请求
     * @param url 请求连接
     * @param paramMap 请求参数
     * @param headerMap 请求参数
     * @return
     */
    public static String doPostJson(String url, Map<String, Object> paramMap,Map<String, String> headerMap){
        return doPost(url,paramMap,headerMap,true);
    }

    /**
     * 传递json参数发送post请求
     *
     * @param url      请求连接
     * @param paramMap 请求参数
     */
    public static String doPostJson(String url, Map<String, Object> paramMap) {
        return doPost(url, paramMap, null, true);
    }

    /**
     * 传递表单参数发送post请求
     * @param url 请求连接
     * @param paramMap 请求参数
     * @param headerMap 请求头参数
     * @return
     */
    public static String doPostFormdata(String url, Map<String, Object> paramMap,Map<String, String> headerMap){
        return doPost(url,paramMap,headerMap,false);
    }


    /**
     * 发送post请求
     * @param url 请求连接
     * @param paramMap 请求参数
     * @param headerMap 请求头参数
     * @param isJson 是否传递json参数
     * @return
     */
    public static String doPost(String url, Map<String, Object> paramMap,Map<String, String> headerMap,boolean isJson){
        LOGGER.info("HttpClientUtil发送post请求输入参数:url={},paramMap={},headerMap={},isJson={}",url,paramMap,headerMap,isJson);
        HttpPost post = null;
        try {
            HttpClientBuilder builder = HttpClients.custom();
            CloseableHttpClient client = builder.build();
            post = new HttpPost(url);
            if(isJson){
                if(paramMap!=null){
                    String body = JSON.toJSONString(paramMap);
                    post.setEntity(new StringEntity(body,"utf-8"));
                }
                post.setHeader("Content-Type","application/json;charset=utf-8");
            }else {
                if(paramMap!=null){
                    List<NameValuePair> nameValuePairList = Lists.newArrayListWithCapacity(paramMap.size());
                    for(Map.Entry<String,Object> param : paramMap.entrySet()){
                        nameValuePairList.add(new BasicNameValuePair(param.getKey(),String.valueOf(param.getValue())));
                    }
                    StringEntity entity = new UrlEncodedFormEntity(nameValuePairList, "UTF-8");
                    post.setEntity(entity);
                }
                post.setHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
            }
            if(headerMap!=null){
                for(Map.Entry<String,String> param : headerMap.entrySet()){
                    post.setHeader(param.getKey(),param.getValue());
                }
            }
            HttpResponse resp = client.execute(post);
            int code = resp.getStatusLine().getStatusCode();
            String responseStr = EntityUtils.toString(resp.getEntity(), "utf-8");
            LOGGER.info("HttpClientUtil发送post请求返回结果:{},参数:url={},paramMap={},headerMap={},isJson={}",responseStr,url,paramMap,headerMap,isJson);
            if (code == 200) {
                return responseStr;
            }
            return null;
        }catch (Exception e){
            LogUtils.alert("HttpClientUtil发送post请求执行异常,参数:url={},paramMap={},headerMap={},isJson={},异常:{}",url,paramMap,headerMap,isJson,e);
            return null;
        }finally {
            if(post!=null){
                post.releaseConnection();
            }
        }
    }


    /**
     * 发送post请求
     * @param url 请求连接
     * @param param 请求参数
     * @param headerMap 请求头参数
     * @param isJson 是否传递json参数
     * @return
     */
    public static String doPostString(String url, String param,Map<String, String> headerMap,boolean isJson){
        LOGGER.info("HttpClientUtil发送post请求输入参数:url={},paramMap={},headerMap={},isJson={}",url,param,headerMap,isJson);
        HttpPost post = null;
        try {
            post = new HttpPost(url);
            if(isJson){
                if(param!=null){
//                    String body = JSON.toJSONString(paramMap);
                    post.setEntity(new StringEntity(param, ContentType.APPLICATION_JSON));
                }
                post.setHeader("Content-Type","application/json;charset=utf-8");
            }
            HttpResponse resp = client.execute(post);
            int code = resp.getStatusLine().getStatusCode();
            String responseStr = EntityUtils.toString(resp.getEntity(), "utf-8");
            LOGGER.info("HttpClientUtil发送post请求返回结果:{},参数:url={},paramMap={},headerMap={},isJson={}",responseStr,url,param,headerMap,isJson);
            if (code == 200) {
                return responseStr;
            }
            return null;
        }catch (Exception e){
            LOGGER.info("HttpClientUtil发送post请求执行异常,参数:url={},paramMap={},headerMap={},isJson={},异常:{}",url,param,headerMap,isJson,e);
            return null;
        }finally {
            if(post!=null){
                post.releaseConnection();
            }
        }
    }

    /**
     * 发送post请求
     * @param url 请求连接
     * @param param 请求参数
     * @param isJson 是否传递json参数
     * @return
     */
    public static String doPostStringV2(String url, String param,boolean isJson){
        LOGGER.info("HttpClientUtil发送post请求输入参数:url={},paramMap={},isJson={}",url,param,isJson);
        HttpPost post = null;
        try {
            post = new HttpPost(url);
            if(isJson){
                if(param!=null){
//                    String body = JSON.toJSONString(paramMap);
                    post.setEntity(new StringEntity(param, ContentType.APPLICATION_JSON));
                }
                post.setHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8");
            }
            HttpResponse resp = client.execute(post);
            int code = resp.getStatusLine().getStatusCode();
            String responseStr = EntityUtils.toString(resp.getEntity(), "utf-8");
            LOGGER.info("HttpClientUtil发送post请求返回结果:{},参数:url={},paramMap={},isJson={}",responseStr,url,param,isJson);
            if (code == 200) {
                return responseStr;
            }
            return null;
        }catch (Exception e){
            LOGGER.info("HttpClientUtil发送post请求执行异常,参数:url={},paramMap={},isJson={},异常:{}",url,param,isJson,e);
            return null;
        }finally {
            if(post!=null){
                post.releaseConnection();
            }
        }
    }

}


```

