(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{61:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),c=(n(0),n(92)),i={title:"Contract Testing",slug:"/basics/off-chain-testing"},o={unversionedId:"basics/off-chain-testing",id:"basics/off-chain-testing",isDocsHomePage:!1,title:"Contract Testing",description:"Testing contracts off-chain is done by cargo test and users can simply use the standard routines",source:"@site/docs/basics/off-chain-testing.md",slug:"/basics/off-chain-testing",permalink:"/ink-docs/basics/off-chain-testing",editUrl:"https://github.com/ink-docs/edit/master/docs/basics/off-chain-testing.md",version:"current",sidebar:"reference",previous:{title:"Cross-Contract Calling",permalink:"/ink-docs/basics/cross-contract-calling"},next:{title:"Overview",permalink:"/ink-docs/ink-macros-attributes"}},s=[{value:"Off-chain Testing",id:"off-chain-testing",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Testing contracts off-chain is done by ",Object(c.b)("inlineCode",{parentName:"p"},"cargo test")," and users can simply use the standard routines\nof creating unit test modules within the ink! project:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-rust"}),"#[cfg(test)]\nmod tests {\n    use super::*;\n\n    #[test]\n    fn my_test() { ... }\n}\n")),Object(c.b)("p",null,"Test instances of contracts can be created with something like:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-rust"}),"let contract = MyContract::my_constructor(a, b);\n")),Object(c.b)("p",null,"Messages can simply be called on the returned instance as if ",Object(c.b)("inlineCode",{parentName:"p"},"MyContract::my_constructor")," returns a\n",Object(c.b)("inlineCode",{parentName:"p"},"Self")," instance."),Object(c.b)("p",null,"See the ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/paritytech/ink/blob/master/examples/flipper/src/lib.rs"}),"flipper example"),"."),Object(c.b)("h3",{id:"off-chain-testing"},"Off-chain Testing"),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"#[ink::test]")," proc. macro enables off-chain testing. See e.g. the ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/paritytech/ink/blob/master/examples/erc20/lib.rs#L278-L280"}),Object(c.b)("inlineCode",{parentName:"a"},"examples/erc20"))," contract on how to utilize those or ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://paritytech.github.io/ink/ink_lang/attr.test.html"}),"the documentation")," for details."),Object(c.b)("p",null,"TODO"))}p.isMDXComponent=!0},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,m=u["".concat(i,".").concat(f)]||u[f]||b[f]||c;return n?a.a.createElement(m,o(o({ref:t},l),{},{components:n})):a.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<c;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);