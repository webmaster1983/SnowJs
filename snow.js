var a=document.getElementById("snow"),d=a.getContext("2d"),e=[],f=Math;a.style.pointerEvents="none";a.style.position="fixed";a.style.width="100vw";a.style.height="100vh";a.height=a.offsetHeight;a.width=a.offsetWidth;window.onresize=function(){a.height=a.offsetHeight;a.width=a.offsetWidth}; setInterval(function(){d.clearRect(0,0,a.width,a.height);d.beginPath();if(.3<f.random()){var b=f.random(),g=.05+.95*b,c={};c.x=1.5*a.width*f.random()-.5*a.width;c.y=-9;c.c=2*g*(f.random()/2+.5);c.d=5*g;c.a=5*b;c.b=function(){var t=this;t.x+=t.c;t.y+=t.d;d.beginPath();d.arc(t.x,t.y,t.a,0,2*f.PI,!1);d.fillStyle="#FFF";d.fill()};e.push(c)}for(b=0;b<e.length;b++)e[b].y>a.height?e.splice(b,1):e[b].b()},16);
