const reset = document.querySelector("#reset");

function resetUserInfo(){
    localStorage.clear();
    location.reload();
}


reset.addEventListener("click",resetUserInfo);


// window.addEventListener ("load", function() {
//   document.body.style.visibility = 'visible';
// });