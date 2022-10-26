function logHello(){
    console.log('Hello');
}
//logHello();
function helloSomeone(name){
    console.log(`こんにちは${name}さん`);
}
//helloSomeone('てつのり');

function circleArea(radius){
    console.log(radius*radius*Math.PI);
}
//circleArea(4);
function helloRect(width,height){
    console.log(width*height);
}
//helloRect(20,30);

function circleArea(radius){
    return radius*radius*Math.PI;
}
//console.log(circleArea(5));
let tetsu = {
    height:'163cm',
    weight:'61kg',
    anime:'古見さん'
};
console.log(tetsu);
console.log(tetsu.anime);

function showModal(){
    console.log('showModalの実行テスト')
    let modal = document.querySelector("#modal");
    modal.innerHTML = 'ボタンが押されました';
}
function changeRed(){
    console.log('赤の実行テスト')
    let modal2 = document.querySelector("#modal2").style.backgroundColor = "#f00";
    modal2.innerHTML = '赤いよ';
}
function changeYellow(){
    console.log('黄色の実行テスト')
    let modal2 = document.querySelector("#modal2").style.backgroundColor = "#ffd800";
    modal2.innerHTML = '黄色いよ';
}
function changeGreen(){
    console.log('緑色の実行テスト')
    let modal2 = document.querySelector("#modal2").style.backgroundColor = "#008000";
    modal2.innerHTML = '緑色よ';
}

