$(document).ready(function () {
    let $home_user_bar = $("#home_user_bar");
   let $sub_bar = $("#sub_bar");
   let $total_bar = $("#total_bar");

    let $ul = $("#home_user_bar").addClass("nav ");
    let $li1 = $("<li>").text("1").css("color", "red").addClass("px-3");
    let $li2 = $("<li>").text("2").css("color", "blue").css("border-left", "1px solid #aaaaaa").addClass("px-3");
    let $li3 = $("<li>").text("3").css("color", "green").css("border-left", "1px solid #aaaaaa").addClass("px-3");

    $li1.mouseenter(function () {
      $sub_bar.css("display","block");
      $("#sub_bar").children().remove();
      let $subUl = $("<ul>").addClass("sub-nav").appendTo($sub_bar);
      let $subLi1 = $("<li>").addClass("sub-px-3").appendTo($subUl);
      $("<a>").attr("href", "https://www.naver.com").text("1-1").css("text-decoration","none").appendTo($subLi1);
      let $subLi2 = $("<li>").addClass("sub-px-3").appendTo($subUl);
        $("<a>").attr("href", "https://google.com").text("1-2").css("text-decoration","none").appendTo($subLi2);
      let $subLi3 = $("<li>").addClass("sub-px-3").appendTo($subUl);
        $("<a>").attr("href", "https://www.daum.net").text("1-3").css("text-decoration","none").appendTo($subLi3);

    });
    $li2.mouseenter(function () {
      $sub_bar.css("display","block");
      $("#sub_bar").children().remove();
      let $subUl = $("<ul>").addClass("sub-nav").appendTo($sub_bar);
      let $subLi1 = $("<li>").addClass("sub-px-3").appendTo($subUl);
      $("<a>").attr("href", "https://www.naver.com").text("2-1").css("text-decoration","none").appendTo($subLi1);
      let $subLi2 = $("<li>").addClass("sub-px-3").appendTo($subUl);
        $("<a>").attr("href", "https://google.com").text("2-2").css("text-decoration","none").appendTo($subLi2);
      let $subLi3 = $("<li>").addClass("sub-px-3").appendTo($subUl);
        $("<a>").attr("href", "https://www.daum.net").text("2-3").css("text-decoration","none").appendTo($subLi3);

    });
    $li3.mouseenter(function () {
      $sub_bar.css("display","block");
      $("#sub_bar").children().remove();
      let $subUl = $("<ul>").addClass("sub-nav").appendTo($sub_bar);
      let $subLi1 = $("<li>").addClass("sub-px-3").appendTo($subUl);
      $("<a>").attr("href", "https://www.naver.com").text("3-1").css("text-decoration","none").appendTo($subLi1);
      let $subLi2 = $("<li>").addClass("sub-px-3").appendTo($subUl);
        $("<a>").attr("href", "https://google.com").text("3-2").css("text-decoration","none").appendTo($subLi2);
      let $subLi3 = $("<li>").addClass("sub-px-3").appendTo($subUl);
        $("<a>").attr("href", "https://www.daum.net").text("3-3").css("text-decoration","none").appendTo($subLi3);

    });


    $total_bar.mouseleave(function () {
      $("#sub_bar").css("display","none");
      
    });
    $ul.append($li1, $li2, $li3);


  });