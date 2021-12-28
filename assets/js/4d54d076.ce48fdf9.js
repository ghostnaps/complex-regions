"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[80],{11933:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var o=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],r={sidebar_position:3},s="Contributing",p={unversionedId:"contributing",id:"contributing",isDocsHomePage:!1,title:"Contributing",description:"Thank you for your interest in contributing to this repository! This guide will help you get your environment setup so you can have the best possible development experience.",source:"@site/docs/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/complex-regions/docs/contributing",editUrl:"https://github.com/vocksel/complex-regions/edit/master/docs/contributing.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Creating Regions",permalink:"/complex-regions/docs/creating-regions"},next:{title:"Credits",permalink:"/complex-regions/docs/credits"}},u=[{value:"Getting Started",id:"getting-started",children:[{value:"VS Code",id:"vs-code",children:[],level:3},{value:"Foreman",id:"foreman",children:[],level:3}],level:2},{value:"Development",id:"development",children:[],level:2},{value:"Testing",id:"testing",children:[],level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"contributing"},"Contributing"),(0,i.kt)("p",null,"Thank you for your interest in contributing to this repository! This guide will help you get your environment setup so you can have the best possible development experience."),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("h3",{id:"vs-code"},"VS Code"),(0,i.kt)("p",null,"You should be using ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"Visual Studio Code")," as your text editor and have the following extensions installed:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=evaera.vscode-rojo"},"Rojo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=Kampfkarren.selene-vscode"},"Selene")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=JohnnyMorganz.stylua"},"StyLua"))),(0,i.kt)("p",null,'Once installed, the Rojo extension will display a welcome screen. Scroll down to the section for the Roblox Studio plugin and select "Manage it for me." Next time you open a place in Studio you will have the Rojo plugin ready to go.'),(0,i.kt)("h3",{id:"foreman"},"Foreman"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Roblox/foreman/"},"Foreman")," handles the installation of several of our other tools, like Rojo, Wally, Selene, and StyLua."),(0,i.kt)("p",null,"To install through Cargo, run the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cargo install foreman\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"cargo")," command is a part of ",(0,i.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/"},"Rust"),". If you don't wish to install Rust on your device you can get the latest Foreman binary from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Roblox/foreman/releases/latest"},"releases page"),"."))),(0,i.kt)("p",null,"To make the tools that Foreman installs avialable on your system you will also need to manually add its ",(0,i.kt)("inlineCode",{parentName:"p"},"bin")," folder to your ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Windows",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"C:\\Users\\You\\.foreman\\bin")," to your ",(0,i.kt)("inlineCode",{parentName:"li"},"PATH")),(0,i.kt)("li",{parentName:"ul"},"Follow ",(0,i.kt)("a",{parentName:"li",href:"https://www.architectryan.com/2018/03/17/add-to-the-path-on-windows-10/"},"this guide")," for how to do that"))),(0,i.kt)("li",{parentName:"ul"},"MacOS",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Open Terminal"),(0,i.kt)("li",{parentName:"ul"},"Open the corresponding file for your terminal",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Bash: ",(0,i.kt)("inlineCode",{parentName:"li"},"nano ~/.bash_profile")),(0,i.kt)("li",{parentName:"ul"},"ZSH: ",(0,i.kt)("inlineCode",{parentName:"li"},"nano ~/.zshrc")))),(0,i.kt)("li",{parentName:"ul"},"Append ",(0,i.kt)("inlineCode",{parentName:"li"},'export PATH="$PATH:~/.foreman/bin')," to the end of the file")))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Changes to the ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH")," will only take effect in new terminals. If you are not able to invoke the tools that Foreman manages, try closing and reopening your terminal."))),(0,i.kt)("h2",{id:"development"},"Development"),(0,i.kt)("p",null,"With the above requirements satisfied, run the following commands from your clone of this repository to start developing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# Install Rojo, Wally, Selene, StyLua, and others\nforeman install\n\n# Install this package's dependencie\nwally install\n\n# Serve the project\nrojo serve dev.project.json\n")),(0,i.kt)("p",null,"Now you can open Studio to a new Baseplate and start syncing with the Rojo plugin."),(0,i.kt)("h2",{id:"testing"},"Testing"),(0,i.kt)("p",null,"While developing, you should also be writing unit tests. Unit tests are written in ",(0,i.kt)("inlineCode",{parentName:"p"},".spec.lua")," files. You can see examples of this throughout the repository's codebase."),(0,i.kt)("p",null,"To run tests, simply start the experience in Studio. You will see in the output if tests are passing or failing."),(0,i.kt)("p",null,"If your code is not properly tested, maintainers will let you know and offer suggestions on how to improve your tests so you can get your pull request merged."))}m.isMDXComponent=!0}}]);