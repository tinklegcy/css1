let p=document.getElementsByClassName('img-g')[0];
let timer=setInterval(move,2000);
function move(){
    if(parseInt(p.style.left)>-1200){
        p.style.left=parseInt(p.style.left)-300+'px'
        p.style.transition='left 1s';
        if(parseInt(p.style.left)<=-1200){
            console.log('t')
            setTimeout(function(){
                p.style.left='0px'
                p.style.transition='left 0s';
            },1000)
        }
    }else{
        p.style.left='0px'
        p.style.transition='left 0s';
    }
}