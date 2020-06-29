function nav() {
    if (window.innerWidth < 993) {
        document.querySelector(".toggler").addEventListener("change", () => {
            if (document.querySelector(".toggler").checked == true) {
                document.querySelector("nav>div").style.background = "rgba(252, 252, 252, 0.97)";
                document.querySelector("nav>div").style.height = "220px";
                document.getElementById("navi").style.opacity = "1";
                document.getElementById("navi").style.transitionDelay = "0.4s";
                document.querySelector("nav>div").style.transitionDelay = "0s";
            } else {
                document.getElementById("navi").style.opacity = "0";
                document.querySelector("nav>div").style.background = "rgba(252, 252, 252, 0.90";
                document.querySelector("nav>div").style.height = "60px";
                document.getElementById("navi").style.transitionDelay = "0s";
                document.querySelector("nav>div").style.transitionDelay = "0.4s";
            }
        })
    }
}

window.addEventListener("resize", () => {
    if (window.innerWidth < 993) {
        document.getElementById("navi").style.opacity = "0";
        document.querySelector("nav>div").style.background = "rgba(252, 252, 252, 0.90";
        document.querySelector("nav>div").style.height = "60px";
        document.getElementById("navi").style.transitionDelay = "0s";
        document.querySelector("nav>div").style.transitionDelay = "0.4s";
    } else {
        document.getElementById("navi").style.opacity = "1";
    }
})