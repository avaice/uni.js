window.onload = function(){
    let dom = document.querySelectorAll('p');
    for(let j = 0; j < dom.length; j++){
        
        const element = dom[j];
        //console.log(element.innerHTML.length)
        const n = Math.floor(element.innerHTML.length / 2);
        const mark = (element.innerHTML.length % 2 == 1 ? "✹" : "") ;
        element.innerHTML = "";
        for(let i = 0; i < n; i++){
            element.innerHTML = element.innerHTML + "うに";
        }
        element.innerHTML = element.innerHTML + mark;
        ;

    }
    
}

