$(document).ready(function () {
  let $home_user_bar = $("#home_user_bar").addClass("nav ");
  let $sub_bar = $("#sub_bar");
  let $total_bar = $("#total_bar");

  //상강 카테고리 바 분류
  let $ul = $("<ul>").attr("id", "list_category").appendTo($home_user_bar);
  let $li1 = $("<li>").css("order", "1").text("가구").addClass("px-3 py-2").attr("id", "nav-links").appendTo($ul);
  let $li2 = $("<li>").css("order", "2").text("패브릭").addClass("px-3 py-2").attr("id", "nav-links").appendTo($ul);
  let $li3 = $("<li>").css("order", "3").text("쇼핑하기").addClass("px-3 py-2").attr("id", "nav-links").appendTo($ul);
  let $li4 = $("<li>").css("order", "4").text("공지사항 둘러보기").addClass("px-3 py-2").attr("id", "nav-links").appendTo($ul);
  let $li5 = $("<li>").css("order", "5").text("위치 찾아보기").addClass("px-3 py-2").attr("id", "nav-links").appendTo($ul);

  //카테고리 분류 바 순서대로 링크
  let $link1_1 = $("<a>").attr("href", "https://www.naver.com").addClass("button").text("1-1").css("text-decoration", "none");
  let $link1_2 = $("<a>").attr("href", "https://www.naver.com").addClass("button").text("1-2").css("text-decoration", "none");
  let $link1_3 = $("<a>").attr("href", "https://www.naver.com").addClass("button").text("1-3").css("text-decoration", "none");
  let $link2_1 = $("<a>").attr("href", "https://www.naver.com").addClass("button").text("2-1").css("text-decoration", "none");
  let $link2_2 = $("<a>").attr("href", "https://www.naver.com").addClass("button").text("2-2").css("text-decoration", "none");
  let $link2_3 = $("<a>").attr("href", "https://www.naver.com").addClass("button").text("2-3").css("text-decoration", "none");
  let $link3_1 = $("<a>").attr("href", "https://www.naver.com").addClass("button").text("3-1").css("text-decoration", "none");
  let $link3_2 = $("<a>").attr("href", "https://www.naver.com").addClass("button").text("3-2").css("text-decoration", "none");
  let $link3_3 = $("<a>").attr("href", "https://www.naver.com").addClass("button").text("3-3").css("text-decoration", "none");
  let $link4_1 = $("<a>").attr("href", "https://www.naver.com").addClass("button").text("4-1").css("text-decoration", "none");
  let $link4_2 = $("<a>").attr("href", "https://www.naver.com").addClass("button").text("4-2").css("text-decoration", "none");
  let $link4_3 = $("<a>").attr("href", "https://www.naver.com").addClass("button").text("4-3").css("text-decoration", "none");
  let $link5_1 = $("<a>").attr("href", "https://www.naver.com").addClass("button").text("5-1").css("text-decoration", "none");
  let $link5_2 = $("<a>").attr("href", "https://www.naver.com").addClass("button").text("5-2").css("text-decoration", "none");



  let $searchForm = $("#searchForm");
  let $searchIn = $("<input>").attr("placeholder", "search").attr("id", "searchIn").appendTo($searchForm);
  let $searchBtn = $("<button>").attr("id", "searchBtn").attr("type", "submit");
  $("<img>").attr("src", "sear.png").attr("id", "searchImg").appendTo($searchBtn);//검색창 돋보기 이미지 경로
  $searchBtn.appendTo($searchForm);
  let $cartLink = $("#cart_link").attr("href", " http://www.naver.com");//카트 이미지 버튼
  let $userLink = $("#user_link").attr("href", " http://www.google.com");//로그인 이미지 버튼 링크
  let $cartImgPath = $("#cart_img").attr("src", "cartShop.png");//카트 이미지 경로
  let $loginImgPath = $("#login_img").attr("src", "login.png");//로그인 이미지 경로


  $li1.mouseenter(function () {
    $sub_bar.css("display", "block");
    $("#sub_bar").children().remove();
    let $subUl = $("<ul>").addClass("sub-nav").appendTo($sub_bar);
    let $subLi1 = $("<li>").addClass("sub-px-3").appendTo($subUl);
    $link1_1.appendTo($subLi1);
    let $subLi2 = $("<li>").addClass("sub-px-3").appendTo($subUl);
    $link1_2.appendTo($subLi2);
    let $subLi3 = $("<li>").addClass("sub-px-3").appendTo($subUl);
    $link1_3.appendTo($subLi3);
  });
  $li2.mouseenter(function () {
    $sub_bar.css("display", "block");
    $("#sub_bar").children().remove();
    let $subUl = $("<ul>").addClass("sub-nav").appendTo($sub_bar);
    let $subLi1 = $("<li>").addClass("sub-px-3").appendTo($subUl);
    $link2_1.appendTo($subLi1);
    let $subLi2 = $("<li>").addClass("sub-px-3").appendTo($subUl);
    $link2_2.appendTo($subLi2);
    let $subLi3 = $("<li>").addClass("sub-px-3").appendTo($subUl);
    $link2_3.appendTo($subLi3);

  });
  $li3.mouseenter(function () {
    $sub_bar.css("display", "block");
    $("#sub_bar").children().remove();
    let $subUl = $("<ul>").addClass("sub-nav").appendTo($sub_bar);
    let $subLi1 = $("<li>").addClass("sub-px-3").appendTo($subUl);
    $link3_1.appendTo($subLi1);
    let $subLi2 = $("<li>").addClass("sub-px-3").appendTo($subUl);
    $link3_2.appendTo($subLi2);
    let $subLi3 = $("<li>").addClass("sub-px-3").appendTo($subUl);
    $link3_3.appendTo($subLi3);

  });
  $li4.mouseenter(function () {
    $sub_bar.css("display", "block");
    $("#sub_bar").children().remove();
    let $subUl = $("<ul>").addClass("sub-nav").appendTo($sub_bar);
    let $subLi1 = $("<li>").addClass("sub-px-3").appendTo($subUl);
    $link4_1.appendTo($subLi1);
    let $subLi2 = $("<li>").addClass("sub-px-3").appendTo($subUl);
    $link4_2.appendTo($subLi2);
    let $subLi3 = $("<li>").addClass("sub-px-3").appendTo($subUl);
    $link4_3.appendTo($subLi3);

  });
  $li5.mouseenter(function () {
    $sub_bar.css("display", "block");
    $("#sub_bar").children().remove();
    let $subUl = $("<ul>").addClass("sub-nav").appendTo($sub_bar);
    let $subLi1 = $("<li>").addClass("sub-px-3").appendTo($subUl);
    $link5_1.appendTo($subLi1);
    let $subLi2 = $("<li>").addClass("sub-px-3").appendTo($subUl);
    $link5_2.appendTo($subLi2);
    let $subLi3 = $("<li>").addClass("sub-px-3").appendTo($subUl);
    $link5_3.appendTo($subLi3);

  });
  let $link5_3 = $("<a>").attr("href", "https://www.naver.com").addClass("button").text("5-3").css("text-decoration", "none");

  let $barbtn = $(".top_btn").addClass("btn btn-ouyline-dark").attr("id", "barbtn").text("☰");
  let side_h = $(window).height();
  let $side_bar = $("#side_bar").css("height", side_h);

  $side_bar.append($link1_1, $link1_2, $link1_3, $link2_1, $link2_2, $link2_3, $link3_1, $link3_2, $link3_3,
    $link4_1, $link4_2, $link4_3, $link5_1, $link5_2, $link5_3);

  function hideSideBar() {
    $side_bar.css("animation", "slideLeftFromIn 0.3s ease-in-out forwards");
    setTimeout(function () {
      $side_bar.css("display", "none");
    }, 300);
  }
  function showSideBar() {
    $side_bar.css("animation", "slideInFromLeft 0.3s ease-in-out forwards");
    $side_bar.css("display", "block");
  }


  $barbtn.on("click", function () {

    if ($side_bar.css("display") === "block") {
      hideSideBar();
    } else {
      showSideBar();
    }
  });


  $(window).on("click", function (event) {

    if ($side_bar.css("display") === "block" && !$(event.target).closest('#barbtn').length) {
      hideSideBar();
    }
  });


  $total_bar.mouseleave(function () {
    $sub_bar.css("display", "none");
  });





  $ul.append($li1, $li2, $li3);
});
