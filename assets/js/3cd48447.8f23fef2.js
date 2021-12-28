"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[129],{28150:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return g},default:function(){return d}});var i=t(87462),r=t(63366),a=(t(67294),t(3905)),o=["components"],s={sidebar_position:2},c="Creating Regions",l={unversionedId:"creating-regions",id:"creating-regions",isDocsHomePage:!1,title:"Creating Regions",description:"A region can be a singular BasePart instance, or a Model containing several BaseParts that make up the region. The latter is where this package shines.",source:"@site/docs/creating-regions.md",sourceDirName:".",slug:"/creating-regions",permalink:"/complex-regions/docs/creating-regions",editUrl:"https://github.com/vocksel/complex-regions/edit/master/docs/creating-regions.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Getting Started",permalink:"/complex-regions/docs/intro"},next:{title:"Contributing",permalink:"/complex-regions/docs/contributing"}},g=[],p={toc:g};function d(e){var n=e.components,t=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"creating-regions"},"Creating Regions"),(0,a.kt)("p",null,"A region can be a singular ",(0,a.kt)("inlineCode",{parentName:"p"},"BasePart")," instance, or a ",(0,a.kt)("inlineCode",{parentName:"p"},"Model")," containing several ",(0,a.kt)("inlineCode",{parentName:"p"},"BasePart"),"s that make up the region. The latter is where this package shines."),(0,a.kt)("p",null,"To create a region add a new ",(0,a.kt)("inlineCode",{parentName:"p"},"Model")," into the Workspace, rename it to Region, and add some Parts inside of it. Make sure to set ",(0,a.kt)("inlineCode",{parentName:"p"},"CanCollide = false")," for each Part so that other instances can enter the region."),(0,a.kt)("p",null,"Next, create a new LocalScript in StarterPlayerScripts with the following contents:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local Players = game:GetService("Players")\nlocal ReplicatedStorage = game:GetService("ReplicatedStorage")\n\nlocal ComplexRegions = require(ReplicatedStorage.Packages.ComplexRegions)\n\nlocal region = ComplexRegions.Region.new(workspace.Region)\n\n-- The whitelist determines which instances can interact with the region. In\n-- this case, we will respond when our Character enters.\nregion:setWhitelist({\n    Players.LocalPlayer.Character\n})\n\n-- This starts up a Heartbeat connection and is required for the region to\n-- respond to instances in the whitelist entering and leaving.\nregion:listen()\n\nregion.entered:Connect(function(character: Model)\n    print(character, "entered", region)\nend)\n\nregion.left:Connect(function(character: Model)\n    print(character, "left", region)\nend)\n')),(0,a.kt)("p",null,"Now when you start the experience and walk in and out of the region messages will print in the output."))}d.isMDXComponent=!0}}]);