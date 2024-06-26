<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
	<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
		<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
			<!DOCTYPE html>
			<html>

			<head>
				<meta charset="UTF-8">
				<title>게시판</title>
				<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
					integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
					crossorigin="anonymous" />
				<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
					integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
					crossorigin="anonymous">

					</script>
				<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
				<script type="text/javascript">
					/*
					 $.ajax({
					 type : `http method type`,
					 url : `url`,
					 data : `서버에 전송할 데이터`,
					 contentType : "전송할 데이터 타입",
					 //기본 값 : "application / x-www-form-urlencoded; charset = UTF-8"  
					 dataType : '서버로 부터 수신할 데이터 타입',
					 //아무것도 지정하지 않으면 jQuery는 응답의 MIME 유형을 기반으로 해석을 시도
					 error : `에러 발생시 수행할 함수`,
					 success : `성공시 수행할 함수`
					}); 
					 */

					$(document).ready(function () {
						function boardList() {
							$.ajax({
								type: "GET",
								url: "${pageContext.request.contextPath}/boards/list",
								success: function (result) {
									let list = result;

									console.log(list);
									let container = $("#container");
									$('<table bordered="1" >').appendTo(container);
									let table = $("table");
									let tr1 = $('<tr>').appendTo(table);

									$('<th>번호</th>').appendTo(tr1);
									$('<th>이름</th>').appendTo(tr1);
									$('<th>제목</th>').appendTo(tr1);
									$('<th>날짜</th>').appendTo(tr1);
									$('<th>조회 수</th>').appendTo(tr1);
									$('</tr>').appendTo(table);
									let listArea = $('#boardList');
									$.each(list, function (index, item) {
										let tr2 = $('<tr>').appendTo(table);
										$('<td>').appendTo(tr2).text(item.bid);
										$('<td>').appendTo(tr2).text(item.bname);

										$('<td>').appendTo(tr2).text(item.btitle);
										$('<td>').appendTo(tr2).text(item.bdate);
										$('<td>').appendTo(tr2).text(item.bhit);
										$('</tr>').appendTo(table);
									});

								},
								error: function (e) {
									console.log(e);
								}
							});

						}

						function getBoard(id) {
							$.ajax({
								type: "GET",
								url: "${pageContext.request.contextPath}/boards/list/" + id,
								success: function (result) {
									console.log(result);
								},
								error: function (e) {
									console.log(e);
								}
							});

						}

						function deleteBoard(id) {
							$.ajax({
								type: "DELETE",
								url: "${pageContext.request.contextPath}/boards/list/" + id,
								success: function (result) {
									console.log('Success Delete!' + result);
								},
								error: function (e) {
									console.log(e);
								}
							});
						}

						function writeBoard(board) {
							$.ajax({
								type: "Post",
								contentType: 'application/json; charset=utf-8',
								url: "${pageContext.request.contextPath}/boards/",
								data: JSON.stringify(board),
								success: function (result) {
									console.log(result);
								},
								error: function (e) {
									console.log(e);
								}
							});
						}
						let board = {
							bname: "홍길동",
							bcontent: "포스트로 인서트",
							btitle: "안녕히"

						}

						function modifyBoard(board) {
							$.ajax({
								type: "PUT",
								contentType: 'application/json; charset=utf-8',
								url: "${pageContext.request.contextPath}/boards/" + board.bid,
								data: JSON.stringify(board),
								success: function (result) {
									console.log(result);
								},
								error: function (e) {
									console.log(e);
								}
							});
						}
						 let board1 = {
							bid: 1030,
							bname: "고구마",
							bcontent: "호박 교체",
							btitle: "바뀜"

						}

						function pageBoard() {
							$.ajax({
								type: "get",
								url: "${pageContext.request.contextPath}/boards/list/page",
								success: function (result) {
									console.log(result);
									console.log(result.criteria.amount);
									let pageArea = $("#page");
									let htmls = "";
									if (result.prev == true) {
										htmls += "<a href='${pageContext.request.contextPath}/boards/list/paging?pageNum='" + (result.startPage - 1) * 10 - 9 + "'&amount=10'><<</a>"
									}
									$.each(result, function (index, item) {


									})
									if (result.next == true) {
										htmls += "<a href='${pageContext.request.contextPath}/boards/list/paging?pageNum='" + (result.startPage + 1) * 10 - 9 + "'&amount=10'>>></a>"
									}
									pageArea.append(htmls);
								},
								error: function (e) {
									console.log(e);
								}
							})
						};

						//writeBoard(board);
						modifyBoard(board1);

						boardList();
						//pageBoard(); 

						//getBoard(123);
						//deleteBoard(2w52);

					})
				</script>
				<style>
					td,
					th {
						min-width: 100px;
						padding-right: 1em;
						padding-left: 1em;
						border: 1px solid #cccccc;
						text-align: center;
					}
				</style>
			</head>

			<body>
				<div id="container"></div>
				<div id="page"></div>
			</body>

			</html>