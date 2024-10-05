let userchoise = document.querySelectorAll('.img-style');
let cpuchoise = document.querySelectorAll('.cpu-style');

for (let i = 0; i < userchoise.length; i++) {
    userchoise[i].addEventListener("click", () => {
        hiddenitem(i);
        let randnum = Math.floor((Math.random() * 10) / 4);
        cpuchoise[randnum].classList.remove("hidden");
        gamelogic(i, randnum);
    });
}
function hiddenitem(i) {
    for (let j = 0; j < userchoise.length; j++) {
        if (j !== i) {
            userchoise[j].classList.add("hidden");
        }
    }
}
function gamelogic(user, cpu) {
    if (user !== cpu) {
        if (user == 0) {
            if (cpu == 1) {
                document.querySelector('#cpuresult').innerHTML = Number(document.querySelector('#cpuresult').innerHTML) + 1;
                reload();
            }
            else {
                document.querySelector('#userresult').innerHTML = Number(document.querySelector('#userresult').innerHTML) + 1;
                reload();
            }
        }
        else if (user == 1) {
            if (cpu == 2) {
                document.querySelector('#cpuresult').innerHTML = Number(document.querySelector('#cpuresult').innerHTML) + 1;
                reload();
            }
            else {
                document.querySelector('#userresult').innerHTML = Number(document.querySelector('#userresult').innerHTML) + 1;
                reload();
            }
        }
        else if (user == 2) {
            if (cpu == 0) {
                document.querySelector('#cpuresult').innerHTML = Number(document.querySelector('#cpuresult').innerHTML) + 1;
                reload();
            }
            else {
                document.querySelector('#userresult').innerHTML = Number(document.querySelector('#userresult').innerHTML) + 1;
                reload();
            }
        }


    }
    else {
        reload();
    }
    let UserWinCheck = Number(document.querySelector("#userresult").textContent);
    let CpurWinCheck = Number(document.querySelector("#cpuresult").textContent);
    console.log(UserWinCheck, CpurWinCheck);
    if(UserWinCheck==2){
        Swal.fire({
            icon: 'success',
            title: 'You Win😍😍...',
          });
          setTimeout(()=>refresh(),2000);  
          
    }
    else if(CpurWinCheck==2){
        Swal.fire({
            icon: 'error',
            title: 'Cpu Won😒😒...',
          });
        setTimeout(()=>refresh(),2000);  
    }
    
}

function reload() {
    setTimeout(() => {
        for (let i = 0; i < userchoise.length; i++) {
            userchoise[i].classList.remove("hidden");
            cpuchoise[i].classList.add("hidden");
            count = 0;
        }
    }, 1000);
}

function refresh() {

    location.reload();
}
document.addEventListener("keypress",(q)=>{
    if(q.key=='r'){
        refresh();
    }
})
const mydate= new Date();
console.log(mydate);