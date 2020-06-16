# FoodLibrary  
Team. Mealing - 고석준, 나경욱, 이상윤, 천수빈
## Overview
 사용자 맞춤형 식품 추천 웹 서비스
 HACCP 인증을 받은 식품들을 검색할 수 있다. 검색 시 개인이 가지고 있는 알러지, 지병에 대한 정보를 입력받아 필터링을 수행하여 결과를 볼 수 있는 서비스를 제공한다.  
 상품의 정보는 제조사, 원재료 및 원산지, 영양성분표, 회원 리뷰, 네이버 블로그 리뷰를 제공한다. 또한 네이버 블로그, 회원 리뷰에 자주 언급된 단어들을 워드클라우드로 제공한다.  
 마지막으로 식품을 구매할 수 있도록 네이버 쇼핑 사이트로 이동해 구매를 유도한다.

## Project info
 * 개발 환경 - Window, MacOs  
 * 개발 언어 - Java, JSX, HSQL  
 * 개발 도구 - React, SpringBoot, Bootstrap, Hibernate  
 * DataBase - MariaDB
 
## Description
 * 사용자 맞춤형 검색 결과 지원  
   사용자의 개개인의 필터링 설정에 따라 맞춤형 식품 검색 결과 제공
 
 * 회원 가입 및 아이디, 비밀번호 찾기  
    * 회원가입 시 개인 필터링 정보 설정 가능  
    * e-mail을 통한 아이디, 비밀번호 찾기 가능
 
 * 식품 상세 정보 제공
    * 식품 별 영양정보 및 리뷰, 네이버 블로그 검색 결과 리스트 제공
    * 식품 별 키워드를 워드 클라우드로 시각화
    * 회원 리뷰 서비스 및 찜, 좋아요 기능 제공
    * 네이버 쇼핑으로 구매 유도 가능
 
 * 실시간 검색어 순위 및 식품 랭킹 서비스
    * 실시간 검색어 : Topbar에서 실시간 확인 가능
    * 렝킹 서비스 : 실시간 클릭량, 리뷰량, 성별, 나이별 랭킹 제공
 
 
