(self.webpackChunknodify_docs=self.webpackChunknodify_docs||[]).push([[1688],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return i},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},i=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,p(p({ref:t},i),{},{components:r})):n.createElement(f,p({ref:t},i))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,p[1]=c;for(var s=2;s<a;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2258:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return i}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),p={},c={unversionedId:"api/NodeInput",id:"api/NodeInput",isDocsHomePage:!1,title:"NodeInput Class",description:"Namespace: Nodify",source:"@site/docs/api/NodeInput.md",sourceDirName:"api",slug:"/api/NodeInput",permalink:"/nodify/docs/api/NodeInput",editUrl:"https://github.com/miroiu/nodify/edit/docs/docs/api/NodeInput.md",version:"current",frontMatter:{},sidebar:"api",previous:{title:"Node Class",permalink:"/nodify/docs/api/Node"},next:{title:"NodeOutput Class",permalink:"/nodify/docs/api/NodeOutput"}},l=[{value:"Constructors",id:"constructors",children:[{value:"NodeInput()",id:"nodeinput",children:[]}]},{value:"Fields",id:"fields",children:[{value:"ConnectorTemplateProperty",id:"connectortemplateproperty",children:[]},{value:"HeaderProperty",id:"headerproperty",children:[]},{value:"HeaderTemplateProperty",id:"headertemplateproperty",children:[]}]},{value:"Properties",id:"properties",children:[{value:"ConnectorTemplate",id:"connectortemplate",children:[]},{value:"Header",id:"header",children:[]},{value:"HeaderTemplate",id:"headertemplate",children:[]}]}],s={toc:l};function i(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Namespace:")," Nodify  "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Assembly:")," Nodify  "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Inheritance:")," ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/System.Object"},"Object")," \u2192 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/System.Windows.Threading.DispatcherObject"},"DispatcherObject")," \u2192 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/System.Windows.DependencyObject"},"DependencyObject")," \u2192 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/System.Windows.Media.Visual"},"Visual")," \u2192 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/System.Windows.UIElement"},"UIElement")," \u2192 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/System.Windows.FrameworkElement"},"FrameworkElement")," \u2192 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/System.Windows.Controls.Control"},"Control")," \u2192 ",(0,a.kt)("a",{parentName:"p",href:"Connector"},"Connector")," \u2192 ",(0,a.kt)("a",{parentName:"p",href:"NodeInput"},"NodeInput"),"  "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"References:")," ",(0,a.kt)("a",{parentName:"p",href:"Node"},"Node"),", ",(0,a.kt)("a",{parentName:"p",href:"Connector"},"Connector"),"  "),(0,a.kt)("p",null,"Represents the default control for the ",(0,a.kt)("a",{parentName:"p",href:"Node#inputconnectortemplate"},"Node.InputConnectorTemplate"),".  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public class NodeInput : Connector  \n")),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("h3",{id:"nodeinput"},"NodeInput()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public NodeInput();  \n")),(0,a.kt)("h2",{id:"fields"},"Fields"),(0,a.kt)("h3",{id:"connectortemplateproperty"},"ConnectorTemplateProperty"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public static DependencyProperty ConnectorTemplateProperty;  \n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Field Value"),"  "),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/System.Windows.DependencyProperty"},"DependencyProperty"),"  "),(0,a.kt)("h3",{id:"headerproperty"},"HeaderProperty"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public static DependencyProperty HeaderProperty;  \n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Field Value"),"  "),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/System.Windows.DependencyProperty"},"DependencyProperty"),"  "),(0,a.kt)("h3",{id:"headertemplateproperty"},"HeaderTemplateProperty"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public static DependencyProperty HeaderTemplateProperty;  \n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Field Value"),"  "),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/System.Windows.DependencyProperty"},"DependencyProperty"),"  "),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"connectortemplate"},"ConnectorTemplate"),(0,a.kt)("p",null,"Gets or sets the template used to display the connecting point of this ",(0,a.kt)("a",{parentName:"p",href:"Connector"},"Connector"),".  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public ControlTemplate ConnectorTemplate { get; set; }  \n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Property Value"),"  "),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/System.Windows.Controls.ControlTemplate"},"ControlTemplate"),"  "),(0,a.kt)("h3",{id:"header"},"Header"),(0,a.kt)("p",null,"Gets of sets the data used for the control's header.  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public object Header { get; set; }  \n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Property Value"),"  "),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/System.Object"},"Object"),"  "),(0,a.kt)("h3",{id:"headertemplate"},"HeaderTemplate"),(0,a.kt)("p",null,"Gets or sets the template used to display the content of the control's header.  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public DataTemplate HeaderTemplate { get; set; }  \n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Property Value"),"  "),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/System.Windows.DataTemplate"},"DataTemplate")))}i.isMDXComponent=!0}}]);