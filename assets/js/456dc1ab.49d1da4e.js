"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[533],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(f,r(r({ref:t},c),{},{components:n})):a.createElement(f,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41276:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=n(44996),s=["components"],l={title:"Getting Started"},p=void 0,c={unversionedId:"getting_started",id:"getting_started",title:"Getting Started",description:"This guide takes you through the process of creating a simple covfee interface which gathers continuous data from subjects.",source:"@site/docs/getting_started.mdx",sourceDirName:".",slug:"/getting_started",permalink:"/covfee/docs/getting_started",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/getting_started.mdx",tags:[],version:"current",frontMatter:{title:"Getting Started"},sidebar:"docs",previous:{title:"Installation",permalink:"/covfee/docs/installation"},next:{title:"Deploying to a server",permalink:"/covfee/docs/"}},u=[{value:"1. Install covfee",id:"1-install-covfee",children:[],level:2},{value:"2. Specify your HITs",id:"2-specify-your-hits",children:[{value:"Task 1. Questionnaire",id:"task-1-questionnaire",children:[],level:3},{value:"Task 2. Instructions",id:"task-2-instructions",children:[],level:3},{value:"Task 3. Annotation",id:"task-3-annotation",children:[],level:3},{value:"Task 4. Questionnaire",id:"task-4-questionnaire",children:[],level:3}],level:2},{value:"2. Run covfee",id:"2-run-covfee",children:[],level:2},{value:"3. Annotate!",id:"3-annotate",children:[],level:2},{value:"More",id:"more",children:[],level:2}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide takes you through the process of creating a simple covfee interface which gathers continuous data from subjects. "),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Covfee makes use of ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/JSON"},"JSON")," as input format. In this guide we assume that you are familiar with the JSON syntax."))),(0,i.kt)("h2",{id:"1-install-covfee"},"1. Install covfee"),(0,i.kt)("p",null,"Follow the ",(0,i.kt)("a",{parentName:"p",href:"installation"},"installation instructions")," if you have not done so already."),(0,i.kt)("h2",{id:"2-specify-your-hits"},"2. Specify your HITs"),(0,i.kt)("p",null,"In this example project, we will assume that we have three annotators that will be performing the same HIT (separately). The HIT consists in four tasks: 1) filling a questionnaire where we ask for demographic information, 2) reading the instructions for affect annotation, 3) annotating affect in a video and 4) filling a questionnaire where we ask them for feedback on their experience during the annotation process."),(0,i.kt)("p",null,"This can be set up by creating a covfee project containing the HIT as follows:"),(0,i.kt)("img",{src:(0,r.Z)("/img/covfee_project.png")}),(0,i.kt)("p",null,"Covfee will produce multiple URLs per HIT, which can be sent to the three annotators. Covfee projects may contain multiple HITs (like HIT2 in the picture) but this project only requires a single HIT. Covfee tasks can also be very diverse, and you can even implement your own if you know Javascript. You can see live examples of the tasks available in covfee in the Playground section."),(0,i.kt)("p",null,"You make use of covfee by first creating a JSON file specifying your HITs. First create a folder for your covfee project and a file ",(0,i.kt)("inlineCode",{parentName:"p"},"example.covfee.json")," with the following content:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "name": "My Covfee Project",\n  "email": "example@example.com",\n  "hits": [\n    {\n      "tasks": [\n        ...\n      ]\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"This is the skeleton of a covfee project and ",(0,i.kt)("inlineCode",{parentName:"p"},"example.covfee.json")," will contain the full specification of it. It starts with the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"email")," of the contact person in charge of the study, which will be available to participants. The ",(0,i.kt)("inlineCode",{parentName:"p"},"hits")," section contains an object per HIT, in this case a single one. We will specify our tasks next."),(0,i.kt)("h3",{id:"task-1-questionnaire"},"Task 1. Questionnaire"),(0,i.kt)("p",null,"We will start by specifying the form / questionnaire that we want annotators to fill in in Task 1. We will ask them for their age (number input), sex (select input) and nationality (free text input):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "name": "Demographics",\n  "type": "QuestionnaireTask",\n  "form": {\n    "fields": [\n      {\n        "name": "age",\n        "label": "Your age:",\n        "input": {\n          "inputType": "InputNumber"\n        }\n      },\n      {\n        "name": "sex",\n        "label": "Your sex:",\n        "input": {\n          "inputType": "Select",\n          "options": [\n            {"label": "Male", "value": "m"},\n            {"label": "Female", "value": "f"}\n          ]\n        }\n      },\n      {\n        "name": "nationality",\n        "label": "Your nationality:",\n        "input": {\n          "inputType": "Input"\n        }\n      }\n    ]\n  }\n}\n')),(0,i.kt)("p",null,"Go ahead and paste the text above into the ",(0,i.kt)("inlineCode",{parentName:"p"},"tasks")," section of the project specification."),(0,i.kt)("h3",{id:"task-2-instructions"},"Task 2. Instructions"),(0,i.kt)("p",null,"Next we will specify the instructions task. Covfee's ",(0,i.kt)("inlineCode",{parentName:"p"},"InstructionTask")," supports linking to a ",(0,i.kt)("a",{parentName:"p",href:"https://about.gitlab.com/handbook/markdown-guide/"},"Markdown")," file with instructions. A Markdown file may contain rich text, images, audio and even videos. We will make use of it for our instructions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "name": "Instructions",\n  "type": "InstructionsTask",\n  "content": {\n    "type": "link",\n    "url": "$$wwww$$/instructions.md"\n  }\n}\n')),(0,i.kt)("p",null,"Now we only need to create our ",(0,i.kt)("inlineCode",{parentName:"p"},"instructions.md")," file with the following content:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# Instructions\n\nYou will be shown a video of a person. Please rate their arousal using your keyboard up/down arrows.\n")),(0,i.kt)("p",null,"An important matter is where to place this file. Covfee is able to read local files placed in a specific location: a folder named ",(0,i.kt)("inlineCode",{parentName:"p"},"www")," located directly under your covfee project folder. Go ahead and create this folder and place your ",(0,i.kt)("inlineCode",{parentName:"p"},"instructions.md")," file inside. After, this your file structure should look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"myproject\n    example.covfee.json\n    www\n        instructions.md\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"$$www$$")," special variable above is used to point to the special ",(0,i.kt)("inlineCode",{parentName:"p"},"www")," folder. Note that this is the only way to work with local files unless you set up a file server yourself."))),(0,i.kt)("h3",{id:"task-3-annotation"},"Task 3. Annotation"),(0,i.kt)("p",null,"Next, we will add the continuous task in which subjects must annotate a one dimensional variable: the arousal of the subject, in a video of a person reading:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "name": "Arousal annotation",\n  "type": "Continuous1DTask",\n  "media": {\n    "type": "video",\n    "url": "$$www$$/person_reading.mp4"\n  },\n  "intensityInput": {\n    "mode": "ranktrace"\n  }\n}\n')),(0,i.kt)("p",null,"Here again we want to provide a local video to covfee by placing it in the ",(0,i.kt)("inlineCode",{parentName:"p"},"www")," folder. You can ",(0,i.kt)("a",{parentName:"p",href:"https://cdn.jsdelivr.net/gh/josedvq/covfee@nonseq-buffer/samples/keypoints/www/person_reading.mp4"},"download this video")," to use as a sample. "),(0,i.kt)("p",null,"Alternatively, you can provide the URL of a publicly hosted video like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      ...\n      "url": "https://cdn.jsdelivr.net/gh/josedvq/covfee@nonseq-buffer/samples/keypoints/www/person_reading.mp4"\n      ...\n')),(0,i.kt)("h3",{id:"task-4-questionnaire"},"Task 4. Questionnaire"),(0,i.kt)("p",null,"Finally, we will ask annotators to give their feedback about the annotation process, to know if we can improve something."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "name": "Feedback",\n  "type": "QuestionnaireTask",\n  "form": {\n    "fields": [\n        {\n            "name": "rating",\n            "label": "How would you rate your experience in completing this experiment?",\n            "required": true,\n            "input": {\n                "inputType": "Rate",\n                "half": true\n            }\n        },{\n            "name": "feedback",\n            "label": "Do you have any comments that can help us improve the experience?",\n            "input": {\n                "inputType": "Input.TextArea"\n            }\n        }\n    ]\n  }\n}\n')),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"By now your covfee specification (",(0,i.kt)("inlineCode",{parentName:"p"},"example.covfee.json")," file) should contain four tasks whithin its ",(0,i.kt)("inlineCode",{parentName:"p"},"tasks")," section and look exactly ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/josedvq/covfee/blob/nonseq-buffer/samples/getting_started/example.covfee.json"},"like this file"),". Your project folder should look like this:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"myproject\n    example.covfee.json\n    www\n        instructions.md\n        myvideo.mp4\n")))),(0,i.kt)("h2",{id:"2-run-covfee"},"2. Run covfee"),(0,i.kt)("p",null,"Covfee uses the previous JSON specification to create a database that will store the responses to the tasks. "),(0,i.kt)("p",null,"All you need to do now is to run ",(0,i.kt)("inlineCode",{parentName:"p"},"covfee make")," from the project folder:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd myproject\ncovfee make .\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"covfee make")," will read all the ",(0,i.kt)("inlineCode",{parentName:"p"},".covfee.json")," files in the folder, initialize a database for covfee, run covfee, and launch a browser where you can access the admin panel. You should now see your web browser open and take you to covfee's admin panel."),(0,i.kt)("h2",{id:"3-annotate"},"3. Annotate!"),(0,i.kt)("p",null,"You can get URLs for your HITs from covfee's admin panel, as well as download completed annotations. "),(0,i.kt)("h2",{id:"more"},"More"),(0,i.kt)("p",null,"For more samples, please check the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/josedvq/covfee/tree/master/samples"},"samples folder in Github")))}m.isMDXComponent=!0}}]);