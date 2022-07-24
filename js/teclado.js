const botoes=document.querySelectorAll("button");
const audio=document.querySelectorAll("audio");

for(let item of botoes){
    item.onclick=function(){
        item.style.backgroundColor="#D7D5D5";
        setTimeout(function(){item.style.backgroundColor="white"},100);
        for(let el of audio){
            if(el.querySelector("source").getAttribute("src")==item.getAttribute("id")){
                el.pause();
                el.currrntTime=0;
                el.play();
            }
        }
    }
}