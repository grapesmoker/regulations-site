define(["jquery","underscore","backbone","content-view","regs-data","definition-view","sub-head-view","toc-view","regs-dispatch","sidebar-view","konami","header-view","analytics-handler"],function(e,t,n,r,i,s,o,u,a,f,l,c,h){return{getTree:function(t){var n=this;t.children().each(function(){var t=e(this),r=t.attr("id"),s=t.find("ol"),o;i.set({text:r,content:t.html()}),typeof (r,s)!="undefined"&&(o=s?e(s):t,n.getTree(o))})},bindEvents:function(){new l(function(){document.getElementById("menu-link").className+=" hamburgerify",e(".inline-interpretation .expand-button").addClass("carrotify"),e("#about-tool").html('Made with <span style="color: red"><3</span> by:'),e("#about-reg").html("Find our brilliant attorneys at:")})},fetchModelForms:function(){var t=function(t){var n=e(t),r=n.data("imgUrl"),i=n.data("imgAlt");r&&n.parent().append('<img class="reg-image" src="'+r+'" alt="'+i+'" />')};e("noscript").each(function(){var e=this;setTimeout(function(){t(e)},2e3,e)})},init:function(){var t,n,s=e(".main-content .reg-section");window.Regs={},window.Regs.subhead=new o,window.Regs.toc=new u,window.Regs.sidebar=new f,window.Regs.regContent=new r,window.Regs.analytics=new h,window.Regs.mainHeader=new c,t=s.attr("id"),a.set("section",t),n=s.data("base-version"),a.set("version",n),i.set(t,s.html()),this.bindEvents(),this.fetchModelForms()}}});