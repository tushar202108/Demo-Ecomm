const nav = document.getElementById('navbar');
const bar = document.getElementById('bar');

if(bar){
   bar.addEventListener('click',()=>{
       nav.classList.add('active');
   })

}
const cross = document.getElementById('close');
cross.addEventListener('click',()=>{
   nav.classList.remove('active');
})
let hero = document.getElementById('hero');
window.addEventListener('scroll', () => {
   if (window.scrollY > 150) {
      hero.style.backgroundImage = "url('https://static.zara.net/assets/public/845f/378d/222741b2b526/8bf824cf7a6d/image-portrait-ipad-fill-2ffa4872-9018-4344-a3f3-6c637221eda6-default_0.jpg?ts=1715676118554&w=2080')";
      document.querySelectorAll('#hero h1,#hero h2,#hero h4, #hero p').forEach(e=>{
         e.style.color="black";

      })
   }
   if(window.scrollY<30)
   {
      hero.style.backgroundImage="url('https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F79%2F8a%2F798a331799a566c1ce545aa29179f272e3b8cd69.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]')";

      document.querySelector('#hero h1').style.color = "#72bbb7";
      document.querySelector(' #hero h2').style.color="rgb(99, 185, 99)";
      document.querySelector(' #hero h4').style.color="#438582";
      document.querySelector(' #hero p').style.color="#088178";
}
});



 
