
/* var n=0;
while(n<=50){
    n++;
}
alert(n);*/

/*while(判斷){
    若判斷的結果是正確的(true)，執行大括號中的區塊程式碼。

    直到判斷結果式錯誤的(false)，才會跳離整個迴圈結構。
}*/
/*
    for(初始區塊;判斷;迴圈區塊){
        判斷概念同while迴圈。
        *初始區塊：進入迴圈時，只有先執行一次初始化區塊
        *迴圈區塊：迴圈在繞的時候會先執行一次ｉ++再做一次判斷;再繞一次上來再做一次判斷
    }

*/

/*var n=0;
while(n<=100){
    if(n==50){
        break;
    }
    n++;
}
alert(n);

Result：n印出50*/

/*var x=0;
for(var n=0;n<=100;n++){
    if(n%4==0){
        continue;
    }
    x++;
}
alert(x);

Result：n印出75

function 函式名稱(){

}*/

/*
看到函式，要注意函式的開頭結尾
以下為函式的本體
function text(){
    alert("Hello World");
}
直到函式呼叫出現↓
text();
找到相同函式名稱跳進函式內部進行運作，內部跑完後跳回text();
接著進行text();以下程式碼
*/
/*function text(messege 參數的名稱){
    alert(messege);
}
text("Hello World");
text("Hello JavaScript");
*/

/*function getSum(max){
    var sum=0;
    for(n=1;n<=max;n++){
        sum+=n;
    }
    alert(sum);
    return sum;
}
var result = getSum(50)*getSum(100);
alert(result);*/

/*var add=function(n1,n2){
    alert(n1+n2);
}
add(31,15);
var test=add; 
函式add後面沒加上小括號代表函式本身(沒有流程，函式沒有呼叫)

有加上( )和數字，代表函式會帶入再帶出來(是一個流程)

把函式丟到新的變數裡，這新的變數test代表Add
test(10,20);*/
/*var x=3; //全域變數
function test(){
    var y=5;  //區域變數
    var x=9;
    alert(x+y);
}
test();
alert(x);
//外部的程式碼，不能使用內部的變數。
*/
/*var point=new Object();
//物件中有一個成為x(y,getPosition)，用.做出一個成員
point.x=3; //屬性
point.y=4;
point.getPosition=function (){ //方法
    alert(this.x + "," + this.y);
    //this代表物件本身(point)
};
//只有物件中裝的是function，才較方法，其他皆為屬性
*/

/*var player = new Object();
player.name = "John";
player.hp = 100;

player.fight = function () {
    this.hp = this.hp - 2;
};
player.rest = function () {
    this.hp++;
};
player.report = function () {
    alert(this.name + ":" + this.hp);  //alert(); 明確的告訴瀏覽器我們要顯示出來。
};

player.fight(); //只做資料操作
player.rest();  //只做資料操作
player.report();
*/

/*function Player(name,hp){ //建構物件函式
    //this代表新建的空白物件
    this.name=name;
    this.hp=hp;
    
    this.fight=function(){
        this.hp-=2;
    };
    this.reset=function(){
        this.hp++;
    };
    this.report=function(){
        alert(this.name +":"+this.hp);
    };
}

var player=new Player("John",100);//新建好的物件，用變數接起來
player.report();

var player2=new Player("Bob",80);
player2.report();
*/

//alert(window.screen.width+"x"+window.screen.height);
/*function change(){
    var spanObj=document.getElementById("emotion");
    spanObj.innerHTML="bad";
}*/

/*function toggleMenu(number){ //參數
    var menu=document.getElementById("menu-"+number);
    menu.classList.toggle("hide");
}*/
/*function over(element){
    element.style.color="red";
}
function out(element){
    element.style.color="black";
}*/
//用Javascript的程式，動態的註冊事件處理器
/*function init() {
    var btn = document.getElementById("btn");
    btn.onclick=function(){  //舊式寫法
        alert("clicked");
    }
    var handler = function () { //準備一個事件處理器 (對應事件的函式)
        alert("clicked");
    };
    btn.addEventListener("click",handler);//事件的註冊，把處理器和事件做出一個關聯
    第一個參數:事件名稱
      第二個參數:事件處理函式(事件處理器)
    
}*/
/*function init(){
    var btn=document.getElementById("btn");
    var span=document.getElementById("span");
    //建立一個事件(函式)處理器
    var handler=function(e){
      alert(e.clientX + "," + e.clientY);
       span.classList.toggle("red");
       //span.style.color="red";
    };
    //對btn物件，註冊事件處理器
    btn.addEventListener("click",handler);
    document.addEventListener("keydown",function(e){
        alert(e.keyCode);
    });
}*/
/*var timer;
var btn;
function init(){
    timer=document.getElementById("timer");
    btn=document.getElementById("btn");
    window.setInterval(countDown,1000); //一秒鐘後請執行countDown這個函式，跳出警告視窗
}
function countDown(){
    timer.innerHTML=timer.innerHTML-1;
   if(timer.innerHTML>0){ //還沒有倒數到0，繼續倒數
        //window.setTimeout(countDown,1000);
    }else{ //若已經倒數到0，做該做的工作
        document.location="http://www.yahoo.com.tw/";
    }
}*/

/*1.內容需要時，才跟伺服器要求，用Javascript和伺服器做連線，用程式來做網路連線，稱為Ajax
2.在不重新加載整個網頁的情況下，對網頁的某部分進行更新
*/
/*function getData(pageName){
    //Ajaz: XMLHttpRequest 物件專門和伺服器做連接
    var req= new XMLHttpRequest(); 
    req.open("GET","http://127.0.0.1"+pageName);
    req.onload=function(){ //load事件，偵測連線的狀態結束
        //連線完成，做連線後的處理
        var content=document.getElementById("content");
        content.innerHTML=this.responseText;
    }
    req.send(); //送出連線
}*/

/*
//物件格式
/*var point=new Object();
point.x=3;
point.y=4;
point.get=function(){
    alert(this.x +","+this.y);
};*/
//JSON寫法
/*
var point={
    "x":3,
    "y":4,
    "get":function(){
        alert(this.x +","+this.y);
}};
//point.get();

var jsonStr=JSON.stringify(point);
console.log(jsonStr);
var plainObj=JSON.parse(jsonStr);
console.log(plainObj);
alert(plainObj.x);
*/

/*
//x=10;
alert(x); //顯示undefind
var x=10; //只有宣告被提升
alert(x);//故再次呼叫印出才會顯示10

//變數2種寫法
//1.
var x; 
x=10;
alert(x);
//宣告變數
//給定初始(值)資料
//使用變數


//2.
var x=10;
alert(x);
//2.的提升，JS的做法如下：
var x;
alert(x);
x=10;


//JS引擎 會對變數及函式宣告Hositing(提升)


text(); //將text();呼叫寫在最上面
function text(){
    alert("Hello");
}

//function 2種寫法
//1.
function text(){ //基本函式宣告，就會整個被提升到text();上方，因此可正常執行
    alert("Hello");
}
text();
//2.
var text=function(){ //此寫法只有變數會被提升，函式建立沒有被提升;提升到text();上方的只有var text;，因此無法執行
    alert("Hello");
}
text();
//此寫法的提升會如同以下：
var text; //只有宣告被提升
text(); //呼叫函式
text=function(){ //結果：不是一個函式
    alert("Hello"); 
};
*/
//只有宣告被提升

//呼叫函式

//結果：text不是一個函式
