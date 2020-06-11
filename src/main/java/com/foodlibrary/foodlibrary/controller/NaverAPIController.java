package com.foodlibrary.foodlibrary.controller;
// 네이버 검색 API 예제 - blog 검색

import com.foodlibrary.foodlibrary.entity.Product;
import com.foodlibrary.foodlibrary.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLEncoder;
import java.util.*;

@RestController
public class NaverAPIController {

    @Autowired
    private ProductService service;

    @RequestMapping(value = "/naverBlogs/{productNumber}", method = RequestMethod.POST)
    public ResponseEntity<List<NaverBlog>> naverBlogs(@PathVariable String productNumber){
        String clientId = "0tliAfAEbA2N8x00LbuY"; //애플리케이션 클라이언트 아이디값"
        String clientSecret = "dj6bJofA1a"; //애플리케이션 클라이언트 시크릿값"

        Product product = service.getOneProduct(productNumber);
        String text = null;

        try {
            text = URLEncoder.encode(product.getPrdlstnm(), "UTF-8");
        } catch (UnsupportedEncodingException e) {
            throw new RuntimeException("검색어 인코딩 실패", e);
        }

        String apiURL = "https://openapi.naver.com/v1/search/blog?query=" + text +"&display=30" ;    // json 결과
        //String apiURL = "https://openapi.naver.com/v1/search/blog.xml?query="+ text; // xml 결과

        Map<String, String> requestHeaders = new HashMap<>();
        requestHeaders.put("X-Naver-Client-Id", clientId);
        requestHeaders.put("X-Naver-Client-Secret", clientSecret);
        String responseBody = get(apiURL, requestHeaders);
        responseBody = responseBody.replaceAll(",", "\n");
        String[] resItems=responseBody.split("\"items\": \\[");
        String resItem = resItems[1];

        int index = resItem.split("\"title\": \"").length-1;
        List<NaverBlog> naverBlogs = new ArrayList<NaverBlog>();

        for(int i=0; i < index; i++){
            String link = resItem.split("\"link\": \"")[i+1].split("\"")[0];
            String title =resItem.split("\"title\": \"")[i+1].split("\"")[0];
            String description =resItem.split("\"description\": \"")[i+1].split("\"")[0];
            String bloggerName = resItem.split("\"bloggername\": \"")[i+1].split("\"")[0];
            String postDate = resItem.split("\"postdate\": \"")[i+1].split("\"")[0];
            naverBlogs.add(new NaverBlog(link,title,description,bloggerName,postDate));
        }

        return new ResponseEntity<List<NaverBlog>>(naverBlogs, HttpStatus.OK);
    }

    static class NaverBlog {
        public String link;
        public String title;
        public String description;
        public String bloggerName;
        public String postDate;

        NaverBlog(String link, String title, String description, String bloggerName, String postDate) {
            this.link = link;
            this.title = title;
            this.description = description;
            this.bloggerName = bloggerName;
            this.postDate = postDate;
        }
    }

    private static String get(String apiUrl, Map<String, String> requestHeaders) {
        HttpURLConnection con = connect(apiUrl);
        try {
            con.setRequestMethod("GET");
            for (Map.Entry<String, String> header : requestHeaders.entrySet()) {
                con.setRequestProperty(header.getKey(), header.getValue());
            }
            int responseCode = con.getResponseCode();
            if (responseCode == HttpURLConnection.HTTP_OK) { // 정상 호출
                return readBody(con.getInputStream());
            } else { // 에러 발생
                return readBody(con.getErrorStream());
            }
        } catch (IOException e) {
            throw new RuntimeException("API 요청과 응답 실패", e);
        } finally {
            con.disconnect();
        }
    }

    private static HttpURLConnection connect(String apiUrl) {
        try {
            URL url = new URL(apiUrl);
            return (HttpURLConnection) url.openConnection();
        } catch (MalformedURLException e) {
            throw new RuntimeException("API URL이 잘못되었습니다. : " + apiUrl, e);
        } catch (IOException e) {
            throw new RuntimeException("연결이 실패했습니다. : " + apiUrl, e);
        }
    }

    private static String readBody(InputStream body) {
        InputStreamReader streamReader = new InputStreamReader(body);

        try (BufferedReader lineReader = new BufferedReader(streamReader)) {
            StringBuilder responseBody = new StringBuilder();

            String line;
            while ((line = lineReader.readLine()) != null) {
                responseBody.append(line);
            }

            return responseBody.toString();
        } catch (IOException e) {
            throw new RuntimeException("API 응답을 읽는데 실패했습니다.", e);
        }
    }
}