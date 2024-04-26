var icon = document.getElementById("dark-theme");

icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "dark theme icon/sun.png";
    }else{
        icon.src ="dark theme icon/moon.png";
    }
}

