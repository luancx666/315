import{r as f,o as N,c as T,a as o,b as h,d as r,w as e,e as t,f as w,g,F as b,h as C,t as V,i as x,u as $,j as z,k as D,l as M,m as S,n as F}from"./index-BWA99bC_.js";const O={__name:"Menu",setup(L){const a=f([]);N(async()=>{try{const l=await fetch("/data/event.json");if(!l.ok)throw new Error("Network response was not ok");a.value=await l.json()}catch(l){console.error("There was a problem with the fetch operation:",l)}});const c=T(()=>{if(!a.value.length)return[];const l={};return a.value.forEach(n=>{l[n.year]={year:n.year,items:n.data}}),Object.values(l).sort((n,d)=>d.year-n.year)});return(l,n)=>{const d=o("House"),_=o("el-icon"),p=o("el-menu-item"),k=o("Clock"),v=o("Location"),i=o("el-sub-menu"),s=o("el-menu");return r(),h(s,{router:"","default-active":$(z).currentRoute.value.fullPath,class:"el-menu-vertical-demo"},{default:e(()=>[t(p,{index:"/home"},{title:e(()=>n[0]||(n[0]=[w("首页")])),default:e(()=>[t(_,null,{default:e(()=>[t(d)]),_:1})]),_:1}),t(i,{index:"/history"},{title:e(()=>[t(_,null,{default:e(()=>[t(k)]),_:1}),n[1]||(n[1]=x("span",null,"历史315数据",-1))]),default:e(()=>[(r(!0),g(b,null,C(c.value,u=>(r(),h(i,{key:u.year,index:`/${u.year}`},{title:e(()=>[t(_,null,{default:e(()=>[t(v)]),_:1}),x("span",null,V(u.year),1)]),default:e(()=>[(r(!0),g(b,null,C(u.items,m=>(r(),h(p,{key:m.id,index:`/${u.year}/${m.id}`},{default:e(()=>[w(V(m.title),1)]),_:2},1032,["index"]))),128))]),_:2},1032,["index"]))),128))]),_:1})]),_:1},8,["default-active"])}}},P={class:"common-layout"},W=["innerHTML"],I={class:"dialog-footer"},q={__name:"Index",setup(L){const a=f(window.innerWidth<768),c=f(!1),l=D(),n=f(!1),d=f("<p>本项目所有数据均来源于互联网公开信息，可能存在信息不完整、更新延迟或表述误差等情况。我们已尽力确保数据准确性，但无法对数据的实时性、完整性和准确性作出绝对保证。使用本项目数据时，请您自行核实关键信息。若发现数据问题，欢迎通过 [邮箱](intellectual.tarantula.hogc@mask.me) 反馈。对于因数据使用产生的任何争议或损失，本项目不承担相关责任。</p>");N(()=>{window.addEventListener("resize",_),["/"].includes(l.path)&&(n.value=!0)});const _=()=>{a.value=window.innerWidth<768},p=()=>{c.value=!c.value};M(()=>l.fullPath,()=>{a.value&&(c.value=!1)}),M(()=>l.path,i=>{["/","/home"].includes(i)&&(n.value=!0)});const k=i=>{v(),i()},v=()=>{n.value=!1};return(i,s)=>{const u=o("el-button"),m=o("el-header"),R=o("el-aside"),j=o("RouterView"),B=o("el-main"),y=o("el-container"),E=o("el-dialog");return r(),g("div",P,[t(y,null,{default:e(()=>[a.value?(r(),h(m,{key:0,style:{height:"60px","padding-left":"20px"}},{default:e(()=>[t(u,{onClick:p},{default:e(()=>s[1]||(s[1]=[w("菜单")])),_:1})]),_:1})):S("",!0),t(R,{style:F({width:a.value?c.value?"200px":"0":"200px",borderRight:a.value&&!c.value?"none":"1px solid #ccc"}),class:"menu"},{default:e(()=>[t(O)]),_:1},8,["style"]),t(y,null,{default:e(()=>[t(B,null,{default:e(()=>[t(j)]),_:1})]),_:1})]),_:1}),t(E,{modelValue:n.value,"onUpdate:modelValue":s[0]||(s[0]=H=>n.value=H),title:"重要声明",width:"80%","close-on-click-modal":!1,"show-close":!1,"before-close":k},{footer:e(()=>[x("span",I,[t(u,{onClick:v},{default:e(()=>s[2]||(s[2]=[w("确认并关闭")])),_:1})])]),default:e(()=>[x("div",{innerHTML:d.value},null,8,W)]),_:1},8,["modelValue"])])}}};export{q as default};
