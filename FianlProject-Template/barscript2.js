$(document).ready(function () {
  let $home_user_bar = $("#home_user_bar");
  let $sub_bar = $("#sub_bar");
  let $total_bar = $("#total_bar");

  let $ul = $("#home_user_bar").addClass("nav ");
  let $li1 = $("<li>").text("쇼핑하기").css("color", "red").addClass("px-3 py-2").attr("id", "nav-links");
  let $li2 = $("<li>").text("공지사항 둘러보기").css("color", "blue").addClass("px-3 py-2").attr("id", "nav-links");
  let $li3 = $("<li>").text("위치 찾아보기").css("color", "green").addClass("px-3 py-2").attr("id", "nav-links");
  let $barbtn = $("<button>").addClass("btn btn-ouyline-dark").attr("id", "barbtn").text("☰");
  let $link1_1 = $("<a>").attr("href", "https://www.naver.com").text("1-1").css("text-decoration", "none");
  let $link1_2 = $("<a>").attr("href", "https://www.naver.com").text("1-2").css("text-decoration", "none");
  let $link1_3 = $("<a>").attr("href", "https://www.naver.com").text("1-3").css("text-decoration", "none");
  let $link2_1 = $("<a>").attr("href", "https://www.naver.com").text("2-1").css("text-decoration", "none");
  let $link2_2 = $("<a>").attr("href", "https://www.naver.com").text("2-2").css("text-decoration", "none");
  let $link2_3 = $("<a>").attr("href", "https://www.naver.com").text("2-3").css("text-decoration", "none");
  let $link3_1 = $("<a>").attr("href", "https://www.naver.com").text("3-1").css("text-decoration", "none");
  let $link3_2 = $("<a>").attr("href", "https://www.naver.com").text("3-2").css("text-decoration", "none");
  let $link3_3 = $("<a>").attr("href", "https://www.naver.com").text("3-3").css("text-decoration", "none");

  let side_h = $(window).height();
  let $side_bar = $("#side_bar").css("height", side_h);

  $side_bar.append($link1_1,$link1_2,$link1_3,$link2_1,$link2_2,$link2_3,$link3_1,$link3_2,$link3_3);

  function hideSideBar() {
    $side_bar.css("animation", "slideLeftFromIn 0.3s ease-in-out forwards");
    setTimeout(function() {
        $side_bar.css("display", "none");
    }, 300);
  }
  function showSideBar() {
      $side_bar.css("animation", "slideInFromLeft 0.3s ease-in-out forwards");
      $side_bar.css("display","block");
  }


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
    $sub_bar.css("display","block");
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
    $sub_bar.css("display","block");
    $("#sub_bar").children().remove();
    let $subUl = $("<ul>").addClass("sub-nav").appendTo($sub_bar);
    let $subLi1 = $("<li>").addClass("sub-px-3").appendTo($subUl);
    $link3_1.appendTo($subLi1);
    let $subLi2 = $("<li>").addClass("sub-px-3").appendTo($subUl);
    $link3_2.appendTo($subLi2);
    let $subLi3 = $("<li>").addClass("sub-px-3").appendTo($subUl);
    $link3_3.appendTo($subLi3);

  });

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


  $ul.append($li1, $li2, $li3, $barbtn);
});
