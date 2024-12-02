"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3051],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var a=n(6540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=c(n),d=i,m=g["".concat(l,".").concat(d)]||g[d]||p[d]||o;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6767:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(8168),i=(n(6540),n(5680));const o={title:"Surpassing 1 Million Downloads - A Retrospective and a Look into the Future",authors:"qingyunwu",tags:["LLM","LLMOps","FLAMLv2"]},r=void 0,s={permalink:"/FLAML/blog/2023/05/07/1M-milestone",source:"@site/blog/2023-05-07-1M-milestone/index.mdx",title:"Surpassing 1 Million Downloads - A Retrospective and a Look into the Future",description:"TL;DR:",date:"2023-05-07T00:00:00.000Z",formattedDate:"May 7, 2023",tags:[{label:"LLM",permalink:"/FLAML/blog/tags/llm"},{label:"LLMOps",permalink:"/FLAML/blog/tags/llm-ops"},{label:"FLAMLv2",permalink:"/FLAML/blog/tags/flam-lv-2"}],readingTime:3.66,truncated:!1,authors:[{name:"Qingyun Wu",title:"Assistant Professor at the Pennsylvania State University",url:"https://qingyun-wu.github.io/",imageURL:"https://github.com/qingyun-wu.png",key:"qingyunwu"}],prevItem:{title:"Achieve More, Pay Less - Use GPT-4 Smartly",permalink:"/FLAML/blog/2023/05/18/GPT-adaptive-humaneval"},nextItem:{title:"Does Model and Inference Parameter Matter in LLM Applications? - A Case Study for MATH",permalink:"/FLAML/blog/2023/04/21/LLM-tuning-math"}},l={authorsImageUrls:[void 0]},c=[{value:"FLAML&#39;s Journey: Past Achievements and Milestones",id:"flamls-journey-past-achievements-and-milestones",children:[{value:"Bring AutoML to One&#39;s Fingertips",id:"bring-automl-to-ones-fingertips",children:[],level:3},{value:"Speed and Efficiency: The FLAML Advantage",id:"speed-and-efficiency-the-flaml-advantage",children:[],level:3},{value:"Easy Customization and Extensibility",id:"easy-customization-and-extensibility",children:[],level:3}],level:2},{value:"Embracing Large Language Models in FLAML v2",id:"embracing-large-language-models-in-flaml-v2",children:[],level:2},{value:"For Further Reading",id:"for-further-reading",children:[],level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,i.yg)("wrapper",(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"TL;DR:")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Celebrating FLAML's milestone: 1 million downloads")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Introducing Large Language Model (LLM) support in the upcoming FLAML v2"))),(0,i.yg)("p",null,"This week, FLAML has reached a significant milestone: 1 million downloads. Originating as an intern research project within Microsoft Research, FLAML has grown into an open-source library used widely across the industry and supported by an active community.\nAs we celebrate this milestone, we want to recognize the passionate contributors and users who have played an essential role in molding FLAML into the flourishing project it is today. Our heartfelt gratitude goes out to each of you for your unwavering support, constructive feedback, and innovative contributions that have driven FLAML to new heights.\nA big shoutout to our industrial collaborators from Azure Core, Azure Machine Learning, Azure Synapse Analytics, Microsoft 365, ML.NET, Vowpal Wabbit, Anyscale, Databricks, and Wise; and academic collaborators from MIT, Penn State University, Stevens Institute of Technology, Tel Aviv University, Texas A & M University, University of Manchester, University of Washington, and The Chinese University of Hong Kong etc."),(0,i.yg)("p",null,"We'd also like to take the opportunity to reflect on FLAML's past achievements and its future roadmap, with a particular focus on large language models (LLM) and LLMOps."),(0,i.yg)("h2",{id:"flamls-journey-past-achievements-and-milestones"},"FLAML's Journey: Past Achievements and Milestones"),(0,i.yg)("h3",{id:"bring-automl-to-ones-fingertips"},"Bring AutoML to One's Fingertips"),(0,i.yg)("p",null,"FLAML offers an off-the-shelf AutoML solution that enables users to quickly discover high-quality models or configurations for common ML/AI tasks. By automatically selecting models and hyperparameters for training or inference, FLAML saves users time and effort. FLAML has significantly reduced development time for developers and data scientists alike, while also providing a convenient way to integrate new algorithms into the pipeline, enabling easy extensions and large-scale parallel tuning. These features make FLAML a valuable tool in R&D efforts for many enterprise users.\nFLAML is capable of handling a variety of common ML tasks, such as ",(0,i.yg)("a",{parentName:"p",href:"https://microsoft.github.io/FLAML/docs/Examples/AutoML-Classification"},"classification"),", ",(0,i.yg)("a",{parentName:"p",href:"https://microsoft.github.io/FLAML/docs/Examples/AutoML-Regression"},"regression"),", ",(0,i.yg)("a",{parentName:"p",href:"https://microsoft.github.io/FLAML/docs/Examples/AutoML-Time%20series%20forecast"},"time series forecasting"),", ",(0,i.yg)("a",{parentName:"p",href:"https://microsoft.github.io/FLAML/docs/Examples/AutoML-Rank"},"NLP tasks"),", and ",(0,i.yg)("a",{parentName:"p",href:"https://microsoft.github.io/autogen/"},"generative tasks"),", providing a comprehensive solution for various applications."),(0,i.yg)("h3",{id:"speed-and-efficiency-the-flaml-advantage"},"Speed and Efficiency: The FLAML Advantage"),(0,i.yg)("p",null,"What sets FLAML apart from other AutoML libraries is its exceptional efficiency, thanks to the economical and efficient hyperparameter optimization and model selection methods developed in our ",(0,i.yg)("a",{parentName:"p",href:"https://microsoft.github.io/FLAML/docs/Research"},"research"),". FLAML is also capable of handling large search spaces with heterogeneous evaluation costs, complex constraints, guidance, and early stopping. The ",(0,i.yg)("a",{parentName:"p",href:"https://microsoft.github.io/FLAML/docs/Use-Cases/Zero-Shot-AutoML"},"zero-shot AutoML")," option further reduces the cost of AutoML, making FLAML an even more attractive solution for a wide range of applications with low resources."),(0,i.yg)("h3",{id:"easy-customization-and-extensibility"},"Easy Customization and Extensibility"),(0,i.yg)("p",null,"FLAML is designed for easy extensibility and customization, allowing users to add custom learners, metrics, search space, etc. For example, the support of hierarchical search spaces allows one to first choose an ML learner and then sampling from the hyperparameter space specific to that learner. The level of customization ranges from minimal (providing only training data and task type as input) to full (tuning a user-defined function). This flexibility and support for easy customization have led to FLAML's adoption in various domains, including security, finance, marketing, engineering, supply chain, insurance, and healthcare, delivering highly accurate results."),(0,i.yg)("h2",{id:"embracing-large-language-models-in-flaml-v2"},"Embracing Large Language Models in FLAML v2"),(0,i.yg)("p",null,"As large language models continue to reshape the AI ecosystem, FLAML is poised to adapt and grow alongside these advancements. Recognizing the importance of large language models, we have recently incorporated an autogen package into FLAML, and are committed to focusing our collective efforts on addressing the unique challenges that arise in LLMOps (Large Language Model Operations)."),(0,i.yg)("p",null,"In its current iteration, FLAML offers support for model selection and inference parameter tuning for large language models. We are actively working on the development of new features, such as low-level inference API with caching, templating, filtering, and higher-level components like LLM-based coding and interactive agents, to enable more effective and economical usage of LLM."),(0,i.yg)("p",null,"We are eagerly preparing for the launch of FLAML v2, where we will place special emphasis on incorporating and enhancing features specifically tailored for large language models (LLMs), further expanding FLAML's capabilities.\nWe invite contributions from anyone interested in this topic and look forward to collaborating with the community as we shape the future of FLAML and LLMOps together."),(0,i.yg)("h2",{id:"for-further-reading"},"For Further Reading"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://microsoft.github.io/autogen/"},"Documentation about ",(0,i.yg)("inlineCode",{parentName:"a"},"flaml.autogen"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/microsoft/FLAML/blob/main/notebook/autogen_chatgpt_gpt4.ipynb"},"Code Example: Tune chatGPT for Math Problem Solving with FLAML"))),(0,i.yg)("p",null,(0,i.yg)("em",{parentName:"p"},"Do you have any experience to share about LLM applications? Do you like to see more support or research of LLMOps? Please join our ",(0,i.yg)("a",{parentName:"em",href:"https://discord.gg/Cppx2vSPVP"},"Discord")," server for discussion.")))}p.isMDXComponent=!0}}]);