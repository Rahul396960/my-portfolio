
// $('.imgs').hide();
var img1=document.getElementById('img1');
var img2=document.getElementById('img2');
var img3=document.getElementById('img3');
var blur=document.getElementById('blur');
// var close=document.querySelectorAll('.close');
var imgs=document.querySelector('.imgs')
// var imgs1=document.querySelector('#imgs1')
// var imgs2=document.querySelector('#imgs2')
// var imgs3=document.querySelector('#imgs3')

img1.addEventListener('click',()=>
{
 blur.classList.toggle('active');
//  $ ('#imgs1').show();
$('#imgs1').css('visibility','visible');
$('.imgs').css('z-index','1000');
 })

 img2.addEventListener('click',()=>
{
 blur.classList.toggle('active');
//  $('#imgs2').show();
$('#imgs2').css('visibility','visible');
$('.imgs').css('z-index','1000');
 })

 img3.addEventListener('click',()=>
{
 blur.classList.toggle('active');
//  $('#imgs3').show();
$('#imgs3').css('visibility','visible');
$('.imgs').css('z-index','1000');
 })

 $ ('.close').click(()=>
 {
   blur.classList.toggle('active');
   $('.imgs').css('visibility','hidden');
   $('.imgs').css('z-index','-1000');

   // $('.imgs').hide();
 })


// var imgr=document.querySelector('.imgr');
var imgl=document.querySelector('.imgl');
var closer=document.querySelector('.closer');

 $('.imgbg > img ').click((e)=>
{
  imgs.classList.toggle('is-active');
  imgl.classList.toggle('is-active');
  var src=e.target.getAttribute('src');
  console.log("src: " + src);
  $(".imgl > img").attr("src",src);
})

closer.addEventListener('click',()=>
{
  imgs.classList.toggle('is-active');
  imgl.classList.toggle('is-active');
})












// imgr.forEach(item=>{item.addEventListener('click',()=>
// {
//   imgs.classList.toggle('is-active');
//   imgl.classList.toggle('is-active');
// })
// })