let area = (function(){
    function getCircle (x){
        return Math.PI * Math.pow(x,2);
    };
    function getRectangle(x,y){
        return x*y;
    };
    function getTriangle(x,y){
        return x*y/2;
    };
    return {
      circleArea:getCircle,
      rectangleArea:getRectangle,
      triangleArea:getTriangle
    };
   })()