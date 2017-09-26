$( () => {
const $container = $('.menu_item')
console.log($container)

$container.on('click', function(){
  $('ul.nav_container').toggleClass("jq_nav")

})

})


//toggle jquery hide and show jquery
$('example-class').toggle();

//toggle class
// $('.example-class').toggleClass('active')
//will toggle a css class jquery will remove the class if it is applied.
//first select the class want to effect. Then select the css class want to apply on and off.
//the class active does not need a .
