function mousee(num){
    if(num==1){
        document.querySelector('.buttons').style.display = 'block'
        document.querySelector('#img').style.display = 'block'
        document.querySelector('#hover').style.display = 'none'
    }
    if(num==2){
        document.querySelector('#buttons2').style.display = 'block'
        document.querySelector('#img2').style.display = 'block'
        document.querySelector('#hover2').style.display = 'none'
    }
    if(num==3){
        document.querySelector('#buttons3').style.display = 'block'
        document.querySelector('#img3').style.display = 'block'
        document.querySelector('#hover3').style.display = 'none'
    }
    if(num==4){
        document.querySelector('#buttons4').style.display = 'block'
        document.querySelector('#img4').style.display = 'block'
        document.querySelector('#hover4').style.display = 'none'
    }
}

function mouseo(num){
    if(num==1){
        document.querySelector('.buttons').style.display = 'none'
        document.querySelector('#img').style.display = 'none'
        document.querySelector('#hover').style.display = 'block'
    }
    if(num==2){
        document.querySelector('#buttons2').style.display = 'none'
        document.querySelector('#img2').style.display = 'none'
        document.querySelector('#hover2').style.display = 'block'
    }
    if(num==3){
        document.querySelector('#buttons3').style.display = 'none'
        document.querySelector('#img3').style.display = 'none'
        document.querySelector('#hover3').style.display = 'block'
    }
    if(num==4){
        document.querySelector('#buttons4').style.display = 'none'
        document.querySelector('#img4').style.display = 'none'
        document.querySelector('#hover4').style.display = 'block'
    }
}