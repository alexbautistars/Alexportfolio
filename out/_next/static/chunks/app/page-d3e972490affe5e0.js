(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1486:function(e,t,A){Promise.resolve().then(A.bind(A,969)),Promise.resolve().then(A.bind(A,2285)),Promise.resolve().then(A.bind(A,9495)),Promise.resolve().then(A.t.bind(A,5878,23)),Promise.resolve().then(A.t.bind(A,2972,23)),Promise.resolve().then(A.bind(A,1772)),Promise.resolve().then(A.bind(A,3249)),Promise.resolve().then(A.bind(A,2603)),Promise.resolve().then(A.bind(A,724)),Promise.resolve().then(A.bind(A,2812)),Promise.resolve().then(A.bind(A,4607)),Promise.resolve().then(A.bind(A,5479)),Promise.resolve().then(A.bind(A,5930)),Promise.resolve().then(A.bind(A,463)),Promise.resolve().then(A.bind(A,6557)),Promise.resolve().then(A.bind(A,1086)),Promise.resolve().then(A.bind(A,9566)),Promise.resolve().then(A.bind(A,6921)),Promise.resolve().then(A.bind(A,1662)),Promise.resolve().then(A.bind(A,9838)),Promise.resolve().then(A.bind(A,2167)),Promise.resolve().then(A.bind(A,4350)),Promise.resolve().then(A.bind(A,9076)),Promise.resolve().then(A.bind(A,546)),Promise.resolve().then(A.bind(A,5666)),Promise.resolve().then(A.bind(A,3513)),Promise.resolve().then(A.bind(A,853)),Promise.resolve().then(A.bind(A,4895)),Promise.resolve().then(A.bind(A,3207)),Promise.resolve().then(A.bind(A,4788)),Promise.resolve().then(A.bind(A,141)),Promise.resolve().then(A.bind(A,9077)),Promise.resolve().then(A.bind(A,5765)),Promise.resolve().then(A.bind(A,533)),Promise.resolve().then(A.bind(A,1356)),Promise.resolve().then(A.bind(A,5993)),Promise.resolve().then(A.bind(A,8565)),Promise.resolve().then(A.bind(A,5994)),Promise.resolve().then(A.bind(A,1085)),Promise.resolve().then(A.bind(A,3738)),Promise.resolve().then(A.bind(A,1389)),Promise.resolve().then(A.bind(A,9434)),Promise.resolve().then(A.bind(A,7116)),Promise.resolve().then(A.bind(A,6712)),Promise.resolve().then(A.bind(A,5348)),Promise.resolve().then(A.bind(A,7331)),Promise.resolve().then(A.bind(A,6714)),Promise.resolve().then(A.bind(A,7753)),Promise.resolve().then(A.bind(A,8590)),Promise.resolve().then(A.bind(A,1643)),Promise.resolve().then(A.bind(A,2363)),Promise.resolve().then(A.bind(A,8914)),Promise.resolve().then(A.bind(A,2245)),Promise.resolve().then(A.bind(A,9013)),Promise.resolve().then(A.bind(A,3198)),Promise.resolve().then(A.bind(A,9551)),Promise.resolve().then(A.bind(A,9456)),Promise.resolve().then(A.bind(A,147)),Promise.resolve().then(A.bind(A,6563)),Promise.resolve().then(A.bind(A,6839)),Promise.resolve().then(A.bind(A,86)),Promise.resolve().then(A.bind(A,1268)),Promise.resolve().then(A.bind(A,8190)),Promise.resolve().then(A.bind(A,6408)),Promise.resolve().then(A.bind(A,2634)),Promise.resolve().then(A.bind(A,9698)),Promise.resolve().then(A.bind(A,4423)),Promise.resolve().then(A.bind(A,425)),Promise.resolve().then(A.bind(A,6200)),Promise.resolve().then(A.bind(A,3598)),Promise.resolve().then(A.bind(A,2816)),Promise.resolve().then(A.bind(A,6575)),Promise.resolve().then(A.bind(A,5671)),Promise.resolve().then(A.bind(A,2965)),Promise.resolve().then(A.bind(A,6908)),Promise.resolve().then(A.bind(A,3333)),Promise.resolve().then(A.bind(A,9287)),Promise.resolve().then(A.bind(A,1965)),Promise.resolve().then(A.bind(A,1202)),Promise.resolve().then(A.bind(A,1400)),Promise.resolve().then(A.bind(A,4402)),Promise.resolve().then(A.bind(A,5181)),Promise.resolve().then(A.bind(A,2236)),Promise.resolve().then(A.bind(A,6645))},969:function(e,t,A){"use strict";A.r(t);var i=A(7437),s=A(7882),r=A.n(s);t.default=e=>{let{animationPath:t,width:A}=e;return(0,i.jsx)(r(),{loop:!0,autoplay:!0,animationData:t,style:{width:"95%"}})}},2285:function(e,t,A){"use strict";A.r(t);var i=A(7437),s=A(2265);t.default=e=>{let{children:t,identifier:A}=e;return(0,s.useEffect)(()=>{let e=document.querySelector(".glow-container-".concat(A)),t=document.querySelectorAll(".glow-card-".concat(A)),i={proximity:40,spread:80,blur:12,gap:32,vertical:!1,opacity:0},s=e=>{for(let A of t){let t=A.getBoundingClientRect();(null==e?void 0:e.x)>t.left-i.proximity&&(null==e?void 0:e.x)<t.left+t.width+i.proximity&&(null==e?void 0:e.y)>t.top-i.proximity&&(null==e?void 0:e.y)<t.top+t.height+i.proximity?A.style.setProperty("--active",1):A.style.setProperty("--active",i.opacity);let s=[t.left+.5*t.width,t.top+.5*t.height],r=180*Math.atan2((null==e?void 0:e.y)-s[1],(null==e?void 0:e.x)-s[0])/Math.PI;r=r<0?r+360:r,A.style.setProperty("--start",r+90)}};return document.body.addEventListener("pointermove",s),e.style.setProperty("--gap",i.gap),e.style.setProperty("--blur",i.blur),e.style.setProperty("--spread",i.spread),e.style.setProperty("--direction",i.vertical?"column":"row"),s(),()=>{document.body.removeEventListener("pointermove",s)}},[A]),(0,i.jsx)("div",{className:"glow-container-".concat(A," glow-container"),children:(0,i.jsxs)("article",{className:"glow-card glow-card-".concat(A," h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent w-full"),children:[(0,i.jsx)("div",{className:"glows"}),t]})})}},9495:function(e,t,A){"use strict";A.r(t),A.d(t,{default:function(){return h}});var i=A(7437),s=A(4906),r=A(2265),n=A(476),d=A(7409),a=A(257),h=function(){let[e,t]=(0,r.useState)({email:!1,required:!1}),[A,h]=(0,r.useState)(!1),[l,u]=(0,r.useState)({name:"",email:"",message:""}),c=()=>{l.email&&l.message&&l.name&&t({...e,required:!1})},o=async A=>{if(A.preventDefault(),l.email&&l.message&&l.name){if(e.email)return;t({...e,required:!1})}else{t({...e,required:!0});return}try{h(!0),await s.Z.post("".concat(a.env.NEXT_PUBLIC_APP_URL,"/api/contact"),l),d.Am.success("Message sent successfully!"),u({name:"",email:"",message:""})}catch(e){var i,r;d.Am.error(null==e?void 0:null===(r=e.response)||void 0===r?void 0:null===(i=r.data)||void 0===i?void 0:i.message)}finally{h(!1)}};return(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:"font-medium mb-5 text-[#16f2b3] text-xl uppercase",children:"Contact with me"}),(0,i.jsxs)("div",{className:"max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5",children:[(0,i.jsx)("p",{className:"text-sm text-[#d3d8e8]",children:"If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."}),(0,i.jsxs)("div",{className:"mt-6 flex flex-col gap-4",children:[(0,i.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,i.jsx)("label",{className:"text-base",children:"Your Name: "}),(0,i.jsx)("input",{className:"bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2",type:"text",maxLength:"100",required:!0,onChange:e=>u({...l,name:e.target.value}),onBlur:c,value:l.name})]}),(0,i.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,i.jsx)("label",{className:"text-base",children:"Your Email: "}),(0,i.jsx)("input",{className:"bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2",type:"email",maxLength:"100",required:!0,value:l.email,onChange:e=>u({...l,email:e.target.value}),onBlur:()=>{var A;c(),t({...e,email:(A=l.email,!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(A))})}}),e.email&&(0,i.jsx)("p",{className:"text-sm text-red-400",children:"Please provide a valid email!"})]}),(0,i.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,i.jsx)("label",{className:"text-base",children:"Your Message: "}),(0,i.jsx)("textarea",{className:"bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2",maxLength:"500",name:"message",required:!0,onChange:e=>u({...l,message:e.target.value}),onBlur:c,rows:"4",value:l.message})]}),(0,i.jsxs)("div",{className:"flex flex-col items-center gap-3",children:[e.required&&(0,i.jsx)("p",{className:"text-sm text-red-400",children:"All fiels are required!"}),(0,i.jsx)("button",{className:"flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold",role:"button",onClick:o,disabled:A,children:A?(0,i.jsx)("span",{children:"Sending Message..."}):(0,i.jsxs)("span",{className:"flex items-center gap-1",children:["Send Message",(0,i.jsx)(n.hlH,{size:20})]})})]})]})]})]})}},3249:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/ayla.19ea4d31.jpg",height:4501,width:4501,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGnB//EABYQAAMAAAAAAAAAAAAAAAAAAAETFP/aAAgBAQABBQIMo//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABcQAAMBAAAAAAAAAAAAAAAAAAABETL/2gAIAQEABj8Cdwf/xAAXEAEAAwAAAAAAAAAAAAAAAAAhAAEx/9oACAEBAAE/IbjYGf/aAAwDAQACAAMAAAAQC//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Qf//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAECAQE/EK//xAAbEAEAAQUBAAAAAAAAAAAAAAABEQAhMVFxof/aAAgBAQABPxA4OqDLZ5nflf/Z",blurWidth:8,blurHeight:8}},2603:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/crefin.7d465e7f.jpg",height:2e3,width:3e3,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAVAQEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAABpAn/AP/EABUQAQEAAAAAAAAAAAAAAAAAABIi/9oACAEBAAEFAqX/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAwEBPwGP/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwF//8QAFhAAAwAAAAAAAAAAAAAAAAAAADJB/9oACAEBAAY/Amp//8QAGBAAAgMAAAAAAAAAAAAAAAAAAREAQfD/2gAIAQEAAT8hYNbRP//aAAwDAQACAAMAAAAQ9//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Qf//EABkQAQADAQEAAAAAAAAAAAAAAAERITEAYf/aAAgBAQABPxBtaxiMA9Z3/9k=",blurWidth:8,blurHeight:5}},724:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/real-estate.aafb3b94.jpg",height:2e3,width:3e3,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAG8E//EABYQAQEBAAAAAAAAAAAAAAAAAAIBE//aAAgBAQABBQKp7//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAEDAQE/AY//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAgEBPwGv/8QAGRAAAQUAAAAAAAAAAAAAAAAAAAEREjEy/9oACAEBAAY/Atq06P/EABgQAAIDAAAAAAAAAAAAAAAAAAABITFx/9oACAEBAAE/IYGgWD//2gAMAwEAAgADAAAAEPP/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/ED//xAAZEAACAwEAAAAAAAAAAAAAAAABEQAhMaH/2gAIAQEAAT8QJdQoUFGd2f/Z",blurWidth:8,blurHeight:5}},2812:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/travel.374bd821.jpg",height:4500,width:4500,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABvhP/xAAWEAADAAAAAAAAAAAAAAAAAAACERL/2gAIAQEAAQUCZV//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AX//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AX//xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oACAEBAAY/An//xAAYEAEBAAMAAAAAAAAAAAAAAAABEQAhUf/aAAgBAQABPyFWkQeu7c//2gAMAwEAAgADAAAAEP8A/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oACAEDAQE/EAy//8QAFREBAQAAAAAAAAAAAAAAAAAAAQD/2gAIAQIBAT8QW//EABoQAAICAwAAAAAAAAAAAAAAAAERACExUWH/2gAIAQEAAT8QNiLYGErxIPc//9k=",blurWidth:8,blurHeight:8}},4607:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/adobe-xd.ea44eb0c.svg",height:50,width:50,blurWidth:0,blurHeight:0}},5479:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/adobeaudition.6ac54c6a.svg",height:256,width:256,blurWidth:0,blurHeight:0}},5930:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/after-effects.a9c72355.svg",height:50,width:50,blurWidth:0,blurHeight:0}},463:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/angular.4bea2a47.svg",height:272,width:256,blurWidth:0,blurHeight:0}},6557:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/aws.ac2256dd.svg",height:153,width:256,blurWidth:0,blurHeight:0}},1086:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/azure.56a922c9.svg",height:244,width:256,blurWidth:0,blurHeight:0}},9566:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/blender.b6202fd4.svg",height:219,width:256,blurWidth:0,blurHeight:0}},6921:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/bootstrap.c61c87af.svg",height:256,width:256,blurWidth:0,blurHeight:0}},1662:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/bulma.ce338197.svg",height:373,width:256,blurWidth:0,blurHeight:0}},9838:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/c.8cdb6389.svg",height:288,width:256,blurWidth:0,blurHeight:0}},2167:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/canva.85fed86e.svg",height:44,width:44,blurWidth:0,blurHeight:0}},4350:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/capacitorjs.cb203835.svg",height:256,width:256,blurWidth:0,blurHeight:0}},9076:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/coffeescript.22e2f988.svg",height:206,width:256,blurWidth:0,blurHeight:0}},546:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/cplusplus.d8945732.svg",height:288,width:256,blurWidth:0,blurHeight:0}},5666:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/csharp.39ee24d6.svg",height:288,width:256,blurWidth:0,blurHeight:0}},3513:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/css.18a757c4.svg",height:290,width:256,blurWidth:0,blurHeight:0}},853:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/dart.de9a7e9f.svg",height:256,width:256,blurWidth:0,blurHeight:0}},4895:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/deno.7465a370.svg",height:256,width:256,blurWidth:0,blurHeight:0}},3207:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/django.47c79307.svg",height:256,width:256,blurWidth:0,blurHeight:0}},4788:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/docker.1fd925da.svg",height:50,width:50,blurWidth:0,blurHeight:0}},141:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/fastify.f1401f4e.svg",height:165,width:256,blurWidth:0,blurHeight:0}},9077:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/figma.1029bdd0.svg",height:384,width:256,blurWidth:0,blurHeight:0}},5765:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/firebase.00a078b9.svg",height:351,width:256,blurWidth:0,blurHeight:0}},533:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/flutter.4975c7c9.svg",height:299,width:256,blurWidth:0,blurHeight:0}},1356:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/gcp.10375a69.svg",height:77,width:95,blurWidth:0,blurHeight:0}},5993:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/gimp.7c585e39.svg",height:256,width:296,blurWidth:0,blurHeight:0}},8565:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/git.50ce77c0.svg",height:256,width:256,blurWidth:0,blurHeight:0}},5994:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/go.2398d0ba.svg",height:192,width:512,blurWidth:0,blurHeight:0}},1085:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/graphql.1445d48c.svg",height:288,width:256,blurWidth:0,blurHeight:0}},3738:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/haxe.193d4b30.svg",height:256,width:256,blurWidth:0,blurHeight:0}},1389:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/html.017306fd.svg",height:290,width:256,blurWidth:0,blurHeight:0}},9434:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/illustrator.82356208.svg",height:50,width:50,blurWidth:0,blurHeight:0}},7116:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/ionic.2515af68.svg",height:256,width:256,blurWidth:0,blurHeight:0}},6712:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/java.28962703.svg",height:346,width:256,blurWidth:0,blurHeight:0}},5348:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/javascript.b181c09e.svg",height:256,width:256,blurWidth:0,blurHeight:0}},7331:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/julia.e82a371c.svg",height:330,width:512,blurWidth:0,blurHeight:0}},6714:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/kotlin.de8eaa2b.svg",height:256,width:256,blurWidth:0,blurHeight:0}},7753:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/lightroom.dbe8fbea.svg",height:256,width:256,blurWidth:0,blurHeight:0}},8590:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/markdown.d252a99f.svg",height:158,width:256,blurWidth:0,blurHeight:0}},1643:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/materialui.f63da241.svg",height:204,width:256,blurWidth:0,blurHeight:0}},2363:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/matlab.b345c227.svg",height:234,width:257,blurWidth:0,blurHeight:0}},8914:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/memsql.fe5acef9.svg",height:184,width:256,blurWidth:0,blurHeight:0}},2245:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/microsoftoffice.c275d93f.svg",height:326,width:256,blurWidth:0,blurHeight:0}},9013:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/mongoDB.bdbfe282.svg",height:249,width:112,blurWidth:0,blurHeight:0}},3198:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/mysql.f25ccd48.svg",height:252,width:256,blurWidth:0,blurHeight:0}},9551:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/nextJS.5d08e3a4.svg",height:256,width:256,blurWidth:0,blurHeight:0}},9456:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/nginx.a985ae7e.svg",height:291,width:256,blurWidth:0,blurHeight:0}},147:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/numpy.3c09ea44.svg",height:274,width:256,blurWidth:0,blurHeight:0}},6563:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/nuxtJS.b3618890.svg",height:191,width:256,blurWidth:0,blurHeight:0}},6839:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/opencv.777de634.svg",height:238,width:256,blurWidth:0,blurHeight:0}},86:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/photoshop.11ddf3ae.svg",height:50,width:50,blurWidth:0,blurHeight:0}},1268:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/php.92f5d4c3.svg",height:258,width:512,blurWidth:0,blurHeight:0}},8190:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/picsart.8fc4adf4.svg",height:256,width:256,blurWidth:0,blurHeight:0}},6408:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/postgresql.57f0feb0.svg",height:264,width:256,blurWidth:0,blurHeight:0}},2634:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/premierepro.0450e213.svg",height:256,width:256,blurWidth:0,blurHeight:0}},9698:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/python.54da882d.svg",height:255,width:256,blurWidth:0,blurHeight:0}},4423:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/pytorch.e649f8fc.svg",height:310,width:256,blurWidth:0,blurHeight:0}},425:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/react.63480b3c.svg",height:228,width:256,blurWidth:0,blurHeight:0}},6200:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/ruby.734ec281.svg",height:255,width:256,blurWidth:0,blurHeight:0}},3598:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/selenium.d21aeb58.svg",height:269,width:256,blurWidth:0,blurHeight:0}},2816:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/sketch.c9e20e22.svg",height:232,width:256,blurWidth:0,blurHeight:0}},6575:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/strapi.2c93db42.svg",height:252,width:256,blurWidth:0,blurHeight:0}},5671:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/svelte.6406f9ac.svg",height:308,width:256,blurWidth:0,blurHeight:0}},2965:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/swift.6006c4be.svg",height:256,width:256,blurWidth:0,blurHeight:0}},6908:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/tailwind.0327ce72.svg",height:154,width:256,blurWidth:0,blurHeight:0}},3333:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/tensorflow.65f6ca51.svg",height:287,width:256,blurWidth:0,blurHeight:0}},9287:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/typescript.e2083e1d.svg",height:256,width:256,blurWidth:0,blurHeight:0}},1965:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/unity.9841984c.svg",height:256,width:256,blurWidth:0,blurHeight:0}},1202:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/vitejs.5da26425.svg",height:257,width:256,blurWidth:0,blurHeight:0}},1400:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/vue.763d0be3.svg",height:221,width:256,blurWidth:0,blurHeight:0}},4402:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/vuetifyjs.f11a1e4c.svg",height:293,width:256,blurWidth:0,blurHeight:0}},5181:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/webix.9113f93c.svg",height:213,width:256,blurWidth:0,blurHeight:0}},2236:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/wolframalpha.6aeeed81.svg",height:256,width:256,blurWidth:0,blurHeight:0}},6645:function(e,t,A){"use strict";A.r(t),t.default={src:"/_next/static/media/wordpress.d1453069.svg",height:255,width:256,blurWidth:0,blurHeight:0}}},function(e){e.O(0,[465,705,972,242,866,971,117,744],function(){return e(e.s=1486)}),_N_E=e.O()}]);