document.addEventListener("DOMContentLoaded",function(){
  var a=document.querySelector(".m3-top-app-bar");
  if(a){
    var b=!1;
    window.addEventListener("scroll",function(){
      var c=window.scrollY>8;
      if(c!==b){b=c;a.classList.toggle("scrolled",c)}
    })
  }
  
  document.querySelectorAll(".ripple, .m3-button, .m3-nav-tab, .m3-icon-button, .m3-fab, .m3-drawer-item, .m3-nav-bar-item, .m3-chip").forEach(function(g){
    g.classList.add("ripple");
    g.addEventListener("pointerdown",function(h){
      var i=g.getBoundingClientRect();
      var j=h.clientX-i.left;
      var k=h.clientY-i.top;
      var l=Math.min(Math.max(i.width,i.height),120);
      var m=document.createElement("span");
      m.className="ripple-effect";
      m.style.width=l+"px";
      m.style.height=l+"px";
      m.style.left=j-l/2+"px";
      m.style.top=k-l/2+"px";
      g.appendChild(m);
      setTimeout(function(){m.remove()},500)
    })
  });
  var n=new IntersectionObserver(function(o){
    o.forEach(function(p){
      if(p.isIntersecting){
        p.target.style.animationPlayState="running";
        n.unobserve(p.target)
      }
    })
  },{threshold:0.1});
  document.querySelectorAll(".animate-fade-in").forEach(function(q){n.observe(q)})
});

document.addEventListener("DOMContentLoaded",function(){var y=new Date();var o=y.getTimezoneOffset();var t=y.getTime()+o*60000-8*3600000;var c=new Date(t);document.querySelectorAll(".footer-year").forEach(function(e){e.textContent=c.getFullYear()})});