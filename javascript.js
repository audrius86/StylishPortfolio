function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }


let advbox2 = document.getElementById('advbox');

window.onscroll = function () {
    if (document.documentElement.scrollTop > advbox2.getBoundingClientRect().top) {
        advbox2.style.visibility = 'visible';
    } else {
    	advbox2.style.visibility = 'hidden';
    }
}