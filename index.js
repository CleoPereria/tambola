let startArr= JSON.parse(localStorage.getItem("numbers"));


setTimeout(() => {


        // console.log(document.querySelectorAll('.btn'))

        let oldArr = JSON.parse(localStorage.getItem("numbers"));

        oldArr.forEach(element => {
            $('#'+element+'').addClass('active');
        });
}, (10));



function checkNum(value){

    // console.log(value.target.className); 

if(localStorage.getItem("numbers")){

    let oldArr = JSON.parse(localStorage.getItem("numbers"));
    
    if(oldArr.includes(value.target.value)){

         const num = value.target.value;
         const filtered = oldArr.filter( item => item != num);
         localStorage.setItem("numbers",JSON.stringify(filtered));
         $(value.target).toggleClass('active');
    }else{
        oldArr.push(value.target.value);
        localStorage.setItem("numbers",JSON.stringify(oldArr));
        $(value.target).addClass('active');
    }
    // console.log(oldArr)

}else{
    
    let arr = [...value.target.value];
    localStorage.setItem("numbers",JSON.stringify(arr))
    $(value.target).addClass('active');
    
}

}


$('.reset').click(()=>{
    localStorage.removeItem("numbers");
    console.log('removed')
    location.reload();
})


