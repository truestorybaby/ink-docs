(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{51:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(2),r=n(6),o=(n(0),n(92)),i={title:"Mutating Storage Values",slug:"/basics/mutating-values"},u={unversionedId:"basics/mutating-values",id:"basics/mutating-values",isDocsHomePage:!1,title:"Mutating Storage Values",description:"It's time to modify some storage!",source:"@site/docs/basics/mutating-values.md",slug:"/basics/mutating-values",permalink:"/ink-docs/basics/mutating-values",editUrl:"https://github.com/ink-docs/edit/master/docs/basics/mutating-values.md",version:"current",sidebar:"reference",previous:{title:"Reading Values from Storage",permalink:"/ink-docs/basics/reading-values"},next:{title:"Events",permalink:"/ink-docs/basics/events"}},s=[{value:"Mutable and Immutable Functions",id:"mutable-and-immutable-functions",children:[]},{value:"Lazy Storage Values",id:"lazy-storage-values",children:[]}],c={rightToc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"It's time to modify some storage!"),Object(o.b)("h2",{id:"mutable-and-immutable-functions"},"Mutable and Immutable Functions"),Object(o.b)("p",null,"You may have noticed that the function templates included ",Object(o.b)("inlineCode",{parentName:"p"},"self")," as the first parameter of the contract functions. It is through ",Object(o.b)("inlineCode",{parentName:"p"},"self")," that you gain access to all your contract functions and storage items."),Object(o.b)("p",null,"If you are simply ",Object(o.b)("em",{parentName:"p"},"reading")," from the contract storage, you only need to pass ",Object(o.b)("inlineCode",{parentName:"p"},"&self"),". But if you want to ",Object(o.b)("em",{parentName:"p"},"modify")," storage items, you will need to explicitly mark it as mutable, ",Object(o.b)("inlineCode",{parentName:"p"},"&mut self"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),"impl MyContract {\n    #[ink(message)]\n    pub fn my_getter(&self) -> u32 {\n        self.my_number\n    }\n\n    #[ink(message)]\n    pub fn my_setter(&mut self, new_value: u32) {\n        self.my_number = new_value;\n    }\n}\n")),Object(o.b)("h2",{id:"lazy-storage-values"},"Lazy Storage Values"),Object(o.b)("p",null,"There is ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://paritytech.github.io/ink/ink_storage/struct.Lazy.html"}),"a ",Object(o.b)("inlineCode",{parentName:"a"},"Lazy")," type")," that can be used for ink! storage values that don't need to be loaded in some or most cases. Because they do not meet this criteria, many simple ink! examples, including those in this workshop, do not require the use ",Object(o.b)("inlineCode",{parentName:"p"},"Lazy")," values. Since there is some overhead associated with ",Object(o.b)("inlineCode",{parentName:"p"},"Lazy")," values, they should only be used where required."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),"#[ink(storage)]\npub struct MyContract {\n    // Store some number\n    my_number: ink_storage::Lazy<u32>,\n}\n\nimpl MyContract {\n    #[ink(constructor)]\n    pub fn new(init_value: i32) -> Self {\n        Self {\n            my_number: Default::default(),\n        }\n    }\n\n    #[ink(message)]\n    pub fn my_setter(&mut self, new_value: u32) {\n        ink_storage::Lazy::<u32>::set(&mut self.my_number, new_value);\n    }\n\n    #[ink(message)]\n    pub fn my_adder(&mut self, add_value: u32) {\n        let my_number = &mut self.my_number;\n        let cur = ink_storage::Lazy::<u32>::get(my_number);\n        ink_storage::Lazy::<u32>::set(my_number, cur + add_value);\n    }\n}\n")))}l.isMDXComponent=!0},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),l=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},m=function(e){var t=l(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),p=a,d=m["".concat(i,".").concat(p)]||m[p]||b[p]||o;return n?r.a.createElement(d,u(u({ref:t},c),{},{components:n})):r.a.createElement(d,u({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);