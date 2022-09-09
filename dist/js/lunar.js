(()=>{"use strict";class LunarHTMLElement{pure;constructor(e,t=!1){this.pure=t||document.querySelector(e)}type(){return this.pure.nodeName.toLowerCase()}parent(e=1){let t=this.pure;do{t=t.parentElement,e--}while(e>0);return t}event(e,t){this.pure.addEventListener(e,(e=>{t(e)}))}}const e={showElement(e,t=!0){e.style.transition="0.3s",t?(e.classList.remove("lunar-hidden"),setTimeout((()=>{e.classList.remove("lunar-opacity-0")}),0)):(e.classList.add("lunar-opacity-0"),e.style.transition="0.3s",setTimeout((()=>e.classList.add("lunar-hidden")),300))},hideableElementsStart(){this.hideable=Array.from(document.querySelectorAll("[hideable]")),this.hideable.forEach((e=>{e.classList.contains("l-hes")||(e.classList.add("lunar-hidden"),e.classList.add("l-hes"))}))},hideControllersStart(){this.hideControllers=Array.from(document.querySelectorAll("[data-hidecontrols]")),this.hideControllers.forEach((e=>{e.classList.contains("l-shc")||(e.addEventListener("click",(()=>{let t=new LunarHTMLElement(e.dataset.hidecontrols).pure,s=t.classList.contains("lunar-hidden");this.showElement(t,s)})),e.classList.add("l-shc"))}))},hideOnLeave(){Array.from(document.querySelectorAll("[hideOnMouseLeave]")).forEach((e=>{e.classList.contains("l-shol")||(e.setAttribute("tabindex","0"),e.addEventListener("mouseleave",(()=>{this.showElement(e,!1)})),e.classList.add("l-shol"))}))},hideOnClickOutside(){Array.from(document.querySelectorAll("[hideOnClickOutside]")).forEach((e=>{e.classList.contains("l-hoco")||(e.setAttribute("tabindex","0"),document.addEventListener("click",(()=>{e===document.activeElement||e.contains(document.activeElement)||e.classList.contains("lunar-hidden")||this.showElement(e,!1)})),e.classList.add("l-hoco"))}))},dynamicLinks(){Array.from(document.querySelectorAll("[link]")).forEach((e=>{e.classList.contains("l-dl")||(e.style.cursor="pointer",e.addEventListener("click",(()=>{location.href=e.getAttribute("link")})),e.classList.add("l-dl"))}))}};window.lunar=new class Lunar{constructor(){this.loadHelpers()}el(e){return new LunarHTMLElement(e)}all(e,t=!1){let s=Array.from(document.querySelectorAll(e));if(t)return s;let l=[];return s.forEach((e=>{l=[...l,new LunarHTMLElement(!1,e)]})),l}hide(t){return t instanceof LunarHTMLElement?e.showElement(t.pure,!1):e.showElement(t,!1)}register(e){e.forEach((e=>{Array.from(document.querySelectorAll(e.selector)).forEach((t=>{if(t.innerHTML=e.html,t.dataset.class){let e=t.firstElementChild;t.dataset.class.split(" ").forEach((t=>{e.classList.add(t)}))}}))})),this.loadHelpers()}loadHelpers(){e.hideControllersStart(),e.hideableElementsStart(),e.hideOnLeave(),e.dynamicLinks(),e.hideOnClickOutside()}}})();