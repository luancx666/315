import{r as j,o as B,c as C,a as o,b as i,d as s,w as e,e as t,f as h,g as d,F as v,h as w,t as x,i as k,u as N,j as $}from"./index-k_H1kgA9.js";const D={__name:"Menu",setup(y){const c=j([]);B(async()=>{try{const a=await fetch("/data/event.json");if(!a.ok)throw new Error("Network response was not ok");c.value=await a.json()}catch(a){console.error("There was a problem with the fetch operation:",a)}});const m=C(()=>{if(!c.value.length)return[];const a={};return c.value.forEach(n=>{a[n.year]={year:n.year,items:n.data}}),Object.values(a).sort((n,r)=>r.year-n.year)});return(a,n)=>{const r=o("House"),l=o("el-icon"),f=o("el-menu-item"),g=o("Clock"),b=o("Location"),p=o("el-sub-menu"),V=o("el-menu");return s(),i(V,{router:"","default-active":N($).currentRoute.value.fullPath,class:"el-menu-vertical-demo"},{default:e(()=>[t(f,{index:"/home"},{title:e(()=>n[0]||(n[0]=[h("首页")])),default:e(()=>[t(l,null,{default:e(()=>[t(r)]),_:1})]),_:1}),t(p,{index:"/history"},{title:e(()=>[t(l,null,{default:e(()=>[t(g)]),_:1}),n[1]||(n[1]=k("span",null,"历史315数据",-1))]),default:e(()=>[(s(!0),d(v,null,w(m.value,u=>(s(),i(p,{key:u.year,index:`/${u.year}`},{title:e(()=>[t(l,null,{default:e(()=>[t(b)]),_:1}),k("span",null,x(u.year),1)]),default:e(()=>[(s(!0),d(v,null,w(u.items,_=>(s(),i(f,{key:_.id,index:`/${u.year}/${_.id}`},{default:e(()=>[h(x(_.title),1)]),_:2},1032,["index"]))),128))]),_:2},1032,["index"]))),128))]),_:1})]),_:1},8,["default-active"])}}},E={class:"common-layout"},R={__name:"Index",setup(y){return(c,m)=>{const a=o("el-aside"),n=o("RouterView"),r=o("el-main"),l=o("el-container");return s(),d("div",E,[t(l,null,{default:e(()=>[t(a,{class:"menu"},{default:e(()=>[t(D)]),_:1}),t(l,null,{default:e(()=>[t(r,null,{default:e(()=>[t(n)]),_:1})]),_:1})]),_:1})])}}};export{R as default};
