function rem(){
    let html=document.documentElement||document.body;

    html.style.fontSize=html.clientWidth/5.3+"px";
}
rem();
window.onresize=rem;