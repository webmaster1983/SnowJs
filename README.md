SnowJs
======

Small Javascript snippet under a kilobyte that adds snow to your website

How to snow:

Add this piece of code right after the begining of your &lt;body&gt; tag

```
<canvas id="snow"></canvas><script>var a=document.getElementById("snow"),d=a.getContext("2d"),e=[];a.style.position="fixed";a.style.width="100vw";a.style.height="100vh";a.height=a.offsetHeight;a.width=a.offsetWidth;function r(){return Math.random()};window.onresize=function(){a.height=a.offsetHeight;a.width=a.offsetWidth}; setInterval(function(){d.clearRect(0,0,a.width,a.height);d.beginPath();if(.3<r()){var b=r(),f=.1+.9*b,c={};c.x=1.5*a.width*r()-.5*a.width;c.y=-20;c.d=2*f*(r()/2+.5);c.e=5*f;c.b=5*b;c.c=function(){this.x+=this.d;this.y+=this.e;this.a()};c.a=function(){d.beginPath();d.arc(this.x,this.y,this.b,0,2*Math.PI,!1);d.fillStyle="#FFF";d.fill()};e.push(c)}for(b=0;b<e.length;b++)e[b].y>a.height?e.splice(b,1):e[b].c()},16);</script>
```
