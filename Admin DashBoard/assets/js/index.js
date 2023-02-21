let ul =document.querySelectorAll('.lsit li');
function activeLink(){
    ul.forEach(function(item){
        item.classList.remove('hovered');
    });
    this.classList.add('hovered');
}
ul.forEach(function(item){
    item.addEventListener('mouseover',activeLink);
});
// ============ menu bar =============
let menu = document.querySelector('.Menu');
let navigation = document.querySelector('.navigation');
let bars = document.querySelector('.icon-bars');
bars.onclick = function(){
    navigation.classList.toggle('active');
    menu.classList.toggle('active');
};

// get element div recent orders
let recentOrder = document.querySelectorAll('.listRecent li #Status');
recentOrder[0].style.color = 'black';
recentOrder.forEach(function(item){
    // item.innerHTML.style.color = 'black';
    if(item.innerHTML === 'Delivered'){
        item.style.background = '#8de02c';
    }
    if(item.innerHTML === 'Pending'){
        item.style.background = '#e9b10a';
        
    }
    if(item.innerHTML === 'Return'){
        item.style.background = '#0021c3';
    }
    if(item.innerHTML === 'In Progress'){
        item.style.background = '#1795ce';
    }
});
let iconClose = document.querySelector('#close');
let nav = document.querySelector('.navigation');
console.log(nav);
iconClose.addEventListener('click', function(){
    navigation.classList.add('activeClose');
    event.preventDefault();
});
bars.addEventListener('click',()=>{
    navigation.classList.remove('activeClose');
});


