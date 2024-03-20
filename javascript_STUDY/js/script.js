const canvas = document.getElementById('canvas');
 
// 캔버스 너비와 높이 설정, 브라우저 크기에 맞춰서 어느 위치에도 그릴 수 있음
canvas.width = window.innerWidth; // window.innerWidth는 현재 브라우저 너비를 칭함
canvas.height = window.innerHeight; // window.innerHeight는 현재 브라우저 높이
 
// getContext('2d') 함수 리턴값을 ctx에 할당해 ctx로 랜더링과 도형을 그릴 수 있음
const ctx = canvas.getContext('2d');
