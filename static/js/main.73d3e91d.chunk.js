(this["webpackJsonpDrag-and-Drop"]=this["webpackJsonpDrag-and-Drop"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var l=a(0),r=a(1),n=a.n(r),i=a(4),c=a.n(i),o=(a(14),a(3)),d=a(5),s=a(6),b=a(8),u=a(7),p=(a(15),function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(e){var l;return Object(d.a)(this,a),(l=t.call(this,e)).drag=function(e,t){e.dataTransfer.setData("text",e.target.id),console.log("===>drag",e.target.id)},l.drop=function(e,t){e.preventDefault();var a=e.dataTransfer.getData("text").split("-"),r=parseInt(a[1],10);if(console.log("block_id",t),"block"===a[0]){var n=l.state.dropItem.filter((function(e){return e.block===r&&e.id===parseInt(a[2],10)&&(e.block=t),e}));l.setState(Object(o.a)(Object(o.a)({},l.state),{},{dropItem:n}))}else{var i=l.state.data.filter((function(e){return e.id===r}))[0];i.block=t;var c=l.state.dropItem;c.push(i),console.log("newArr",c);var d=l.state.data.filter((function(e){return e.id!==r}));l.setState({dropItem:c,data:d})}},l.allowDrop=function(e){e.preventDefault()},l.state={dropItem:[],data:[{id:1,label:"Bathroom floor"},{id:2,label:"Full window clean"},{id:3,label:"Lounge chairs"},{id:4,label:"Dining room chairs"},{id:5,label:"High level cleaning"},{id:6,label:"Vacant room clean"},{id:7,label:"Carpet steam cleanning"},{id:8,label:"Celling fans cleanning"},{id:9,label:"Floor scrubbing"},{id:10,label:"Coutryard"}],sections:[{id:1,label:"yearly"},{id:2,label:"half yearly"},{id:3,label:"3 times a year"},{id:4,label:"quarterly"},{id:5,label:"6 times a year"},{id:6,label:"as required"},{id:7,label:"hallways on rotation"},{id:8,label:"na"}]},l}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.data,r=t.sections,i=t.dropItem;return console.log("===>dropItem render",i),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("div",{className:"top-block",children:[Object(l.jsx)("div",{className:"title",children:"Periodicals"}),Object(l.jsx)("div",{className:"periodicals-block",children:a.map((function(t,a){return Object(l.jsx)("div",{className:"label-block",draggable:"true",id:"label-"+t.id,onDragStart:function(t){return e.drag(t,a)},children:t.label},a)}))})]}),Object(l.jsxs)("div",{className:"bottom-block",children:[Object(l.jsx)("div",{className:"title",children:"Frequency"}),r.map((function(t,a){return Object(l.jsxs)("div",{className:"dropable-container "+t.id,children:[Object(l.jsx)("div",{className:"title",children:t.label}),Object(l.jsx)("div",{className:"drop-here",onDrop:function(a){return e.drop(a,t.id)},onDragOver:e.allowDrop,id:"block-"+t.id,children:e.state.dropItem.length>0&&e.state.dropItem.map((function(a,r){return Object(l.jsx)(n.a.Fragment,{children:a.block===t.id&&Object(l.jsx)("div",{className:"label-block",draggable:"true",id:"block-"+a.block+"-"+a.id,onDragStart:function(t){return e.drag(t,r)},children:a.label},r)},r)}))})]},a)}))]})]})}}]),a}(n.a.Component)),g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,l=t.getFID,r=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),l(e),r(e),n(e),i(e)}))};c.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),g()}},[[16,1,2]]]);
//# sourceMappingURL=main.73d3e91d.chunk.js.map