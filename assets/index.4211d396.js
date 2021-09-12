import{d as defineComponent,r as ref,a as reactive,c as createBlock,b as createVNode,w as withDirectives,t as toDisplayString,F as Fragment,e as renderList,f as withScopeId,p as pushScopeId,g as popScopeId,o as openBlock,h as resolveDirective,i as resolveComponent,j as createApp,k as dragscrollNext}from"./vendor.5abf9886.js";const p=function(e=".",a="__import__"){try{self[a]=new Function("u","return import(u)")}catch(r){const n=new URL(e,location),t=e=>{URL.revokeObjectURL(e.src),e.remove()};self[a]=e=>new Promise(((r,s)=>{const i=new URL(e,n);if(self[a].moduleMap[i])return r(self[a].moduleMap[i]);const d=new Blob([`import * as m from '${i}';`,`${a}.moduleMap['${i}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(d),onerror(){s(new Error(`Failed to import: ${e}`)),t(l)},onload(){r(self[a].moduleMap[i]),t(l)}});document.head.appendChild(l)})),self[a].moduleMap={}}};p("/JavaScript-Calculator/assets/");var _sfc_main$1=defineComponent({name:"HelloWorld",setup:()=>{const discribe=ref(""),result=ref(""),previousResult=ref(""),buttonsData=reactive([{name:"AC",id:"clear",class:""},{name:"+",id:"add",class:"operators"},{name:"-",id:"subtract",class:"operators"},{name:"*",id:"multiply",class:"operators"},{name:"/",id:"divide",class:"operators"},{name:"=",id:"equals",class:""},{name:"0",id:"zero",class:"numbers"},{name:"1",id:"one",class:"numbers"},{name:"2",id:"two",class:"numbers"},{name:"3",id:"three",class:"numbers"},{name:"4",id:"four",class:"numbers"},{name:"5",id:"five",class:"numbers"},{name:"6",id:"six",class:"numbers"},{name:"7",id:"seven",class:"numbers"},{name:"8",id:"eight",class:"numbers"},{name:"9",id:"nine",class:"numbers"},{name:".",id:"decimal",class:"numbers"}]),inputData=name=>{if(/[1-9]/.test(name))"0"!==result.value?(/[*/+]/.test(result.value)||/=/.test(discribe.value)?result.value=name:result.value+=name,/=/.test(discribe.value)?discribe.value=name:discribe.value+=name):(result.value=name,discribe.value=discribe.value.slice(0,-1)+name);else if(/0/.test(name))"0"!==result.value&&(/[*/+-]/.test(result.value)||/=/.test(discribe.value)?result.value=name:result.value+=name,/=/.test(discribe.value)?discribe.value=name:discribe.value+=name);else if(/\./.test(name))!/\./.test(result.value)&&/\d/.test(result.value)&&(result.value+=name,discribe.value+=name);else if(/[*/+-]/.test(name))if(result.value=name,/=/.test(discribe.value))discribe.value=previousResult.value+name;else{const e=discribe.value.charAt(discribe.value.length-1);/[^*/+-]/.test(e)?discribe.value+=name:/[*/]/.test(e)&&/[*/]/.test(name)?discribe.value=discribe.value.replace(/[*/+-]$/,name):/[*/]/.test(e)&&/[+-]/.test(name)?discribe.value+=name:(/[+-]/.test(e)&&/[*/]/.test(name)||/[+-]/.test(e)&&/[+-]/.test(name))&&(discribe.value=discribe.value.replace(/[*/+-]$/,name))}else if(/=/.test(name)&&!/=/.test(discribe.value)&&""!==discribe.value){const evalVal=parseFloat(eval(discribe.value).toFixed(4));result.value=evalVal.toString(),previousResult.value=evalVal.toString(),discribe.value+=`=${evalVal}`}else/AC/.test(name)&&(result.value="",discribe.value="",previousResult.value="")};return{discribe:discribe,result:result,buttonsData:buttonsData,inputData:inputData}}}),HelloWorld_vue_vue_type_style_index_0_scoped_true_lang='\n[data-v-7d1973fc]::-webkit-scrollbar {\r\n  height: 2px;\n}\n[data-v-7d1973fc]::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\n}\n[data-v-7d1973fc]::-webkit-scrollbar-thumb {\r\n  background: #888;\n}\n[data-v-7d1973fc]::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\n}\n#wrap[data-v-7d1973fc] {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 100px);\r\n  grid-template-rows: repeat(6, 100px);\r\n  grid-template-areas:\r\n    "display display display display"\r\n    "clear clear divide multiply"\r\n    "seven eight nine subtract"\r\n    "four five six add"\r\n    "one two three equals"\r\n    "zero zero decimal equals";\r\n  color: #fff;\r\n  padding: 10px;\r\n  background: #000;\r\n  font-size: 20px;\r\n  font-weight: bold;\n}\n#display[data-v-7d1973fc] {\r\n  grid-area: display;\r\n  background: #000;\r\n  text-align: right;\n}\n#discribe[data-v-7d1973fc] {\r\n  overflow: auto;\r\n  white-space: nowrap;\r\n  font-size: 30px;\r\n  color: #990;\n}\n#result[data-v-7d1973fc] {\r\n  overflow: auto;\r\n  white-space: nowrap;\r\n  font-size: 40px;\n}\n.buttons[data-v-7d1973fc] {\r\n  text-align: center;\r\n  line-height: 100px;\r\n  cursor: pointer;\r\n  border: 1px solid #000;\r\n  transition: all 0.1s;\n}\n.buttons[data-v-7d1973fc]:hover {\r\n  color: #000;\r\n  border: 1px solid #fff;\n}\n.operators[data-v-7d1973fc] {\r\n  background: #999;\n}\n.numbers[data-v-7d1973fc] {\r\n  background: #666;\n}\n#clear[data-v-7d1973fc] {\r\n  grid-area: clear;\r\n  background: #c00;\n}\n#add[data-v-7d1973fc] {\r\n  grid-area: add;\n}\n#multiply[data-v-7d1973fc] {\r\n  grid-area: multiply;\n}\n#divide[data-v-7d1973fc] {\r\n  grid-area: divide;\n}\n#zero[data-v-7d1973fc] {\r\n  grid-area: zero;\n}\n#one[data-v-7d1973fc] {\r\n  grid-area: one;\n}\n#two[data-v-7d1973fc] {\r\n  grid-area: two;\n}\n#three[data-v-7d1973fc] {\r\n  grid-area: three;\n}\n#four[data-v-7d1973fc] {\r\n  grid-area: four;\n}\n#five[data-v-7d1973fc] {\r\n  grid-area: five;\n}\n#six[data-v-7d1973fc] {\r\n  grid-area: six;\n}\n#seven[data-v-7d1973fc] {\r\n  grid-area: seven;\n}\n#eight[data-v-7d1973fc] {\r\n  grid-area: eight;\n}\n#nine[data-v-7d1973fc] {\r\n  grid-area: nine;\n}\n#decimal[data-v-7d1973fc] {\r\n  grid-area: decimal;\n}\n#equals[data-v-7d1973fc] {\r\n  grid-area: equals;\r\n  background: #069;\r\n  line-height: 200px;\n}\r\n';const _withId=withScopeId();pushScopeId("data-v-7d1973fc");const _hoisted_1={id:"wrap"},_hoisted_2={id:"display"};popScopeId();const _sfc_render$1=_withId(((e,a,r,n,t,s)=>{const i=resolveDirective("dragscroll");return openBlock(),createBlock("div",_hoisted_1,[createVNode("div",_hoisted_2,[withDirectives(createVNode("div",{id:"discribe"},toDisplayString(e.discribe?e.discribe:0),513),[[i]]),withDirectives(createVNode("div",{id:"result"},toDisplayString(e.result?e.result:0),513),[[i]])]),(openBlock(!0),createBlock(Fragment,null,renderList(e.buttonsData,((a,r)=>(openBlock(),createBlock("div",{key:r,onClick:r=>e.inputData(a.name),class:["buttons",a.class],id:a.id},toDisplayString(a.name),11,["onClick","id"])))),128))])}));_sfc_main$1.render=_sfc_render$1,_sfc_main$1.__scopeId="data-v-7d1973fc";var _sfc_main=defineComponent({name:"App",components:{HelloWorld:_sfc_main$1}}),App_vue_vue_type_style_index_0_lang="\nbody {\n  margin: 0px;\n}\n#app {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  font-family: Microsoft JhengHei;\n  background: #abc;\n}\n";function _sfc_render(e,a,r,n,t,s){const i=resolveComponent("HelloWorld");return openBlock(),createBlock(i)}_sfc_main.render=_sfc_render,createApp(_sfc_main).directive("dragscroll",dragscrollNext).mount("#app");
