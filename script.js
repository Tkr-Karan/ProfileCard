let social = document.querySelector(".social");
let shareDetail = document.querySelector(".share-detail");

let shareFlag = true;

social.addEventListener("click", function(){
    // shareDetail.style.display = "none";
    if(shareFlag){
        
        shareDetail.style.display = "flex";
        shareFlag = false;
    }else{
        
        shareDetail.style.display = "none";
        shareFlag = true;
    }
})