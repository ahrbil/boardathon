import {TimelineMax, Expo, Circ} from "gsap";

let tl = new TimelineMax;

tl.set(".container", {backgroundSize: "1700px 1300px"})
.fromTo(".progress", 3, {left:-500}, {left:0, ease:Circ.easeInOut})
.fromTo(".loaderinfo", 1, {autoAlpha: 1}, {autoAlpha:0})
.staggerFromTo(".bgslice", 1, {y:"0"}, {y:"100%",ease:Expo.easeInOut},0.2,"-=0.6")
.fromTo(".container", 1, {backgroundSize: "1700px 1300px"}, {backgroundSize: "1400px 1000px",ease: Expo.easeInOut},"-=1")
.add("withbgfadeout","-=1")
.fromTo(".middel .h1box", 1, {width: 0} ,{width: "450", ease:Circ.easeInOut},"withbgfadeout")
.fromTo(".play", 1, {scale: 0}, {scale:1, ease:Circ.easeInOut},"withbgfadeout+=0.3")
.fromTo(".scrollfor", 0.4, {opacity:0}, {opacity:1, ease:Circ.easeInOut})
.fromTo("footer", 0.5, {y:200}, {y:0, ease:Circ.easeInOut},"withbgfadeout+=0.3")
.staggerFromTo("footer h2, footer p", 0.6, {y:30,opacity:0}, {y:0,opacity:1, ease:Circ.easeInOut}, 0.06,"withbgfadeout+=0.4")
.fromTo(".logo", 0.4, {y: -100}, {y:0, ease:Circ.easeInOut},"withbgfadeout+=0.2")
.fromTo(".menu", 0.4, {y: -100}, {y:0, ease:Circ.easeInOut},"withbgfadeout+=0.2")
.fromTo(".scrollfor .line", 0.7, {height:0}, {height:60})
.set(".loaderbg", {autoAlpha:0});

