(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[0],{31:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),r=n(24),c=n.n(r),l=(n(31),n(23)),i=n(8),o=n(2),d=n(3),j=n.n(d),u=n(7),b=n(5),h=n(6),m=n(10),O=n(9),x=n(0);function p(e){return e.visible&&Object(x.jsx)("div",{className:"position-absolute vh-100 vw-100 d-flex justify-content-center align-items-center bg-secondary opacity-75",children:Object(x.jsx)("div",{className:"spinner-border text-light",role:"status",children:Object(x.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})}var f=n(14),v=n(16),g="https://dm885.smessie.com";function y(e){return Object(v.a)(e).reduce((function(e,t){return t.name&&(e[t.name]=t.value),e}),{})}var N=function(){function e(){Object(b.a)(this,e)}return Object(h.a)(e,null,[{key:"rawCall",value:function(t,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=arguments.length>3?arguments[3]:void 0;return fetch("".concat(g,"/").concat(n),{method:t,headers:Object(f.a)(Object(f.a)({"Content-Type":"application/json"},a),{},{Authorization:e.accessToken?"Bearer ".concat(e.accessToken):void 0}),body:s?JSON.stringify(s):void 0}).then((function(e){return 404===e.status?{error:!0}:e.json()})).catch((function(r){return console.error("".concat(g,"/").concat(n),{method:t,headers:Object(f.a)(Object(f.a)({"Content-Type":"application/json"},a),{},{Authorization:e.accessToken?"Bearer ".concat(e.accessToken):void 0}),body:s?JSON.stringify(s):void 0},r),!1}))}},{key:"call",value:function(){var t=Object(u.a)(j.a.mark((function t(){var n,a,s,r,c,l,i=arguments;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=i.length>0&&void 0!==i[0]?i[0]:"GET",s=i.length>1?i[1]:void 0,r=i.length>2?i[2]:void 0,c=i.length>3&&void 0!==i[3]?i[3]:{},t.next=6,e.rawCall(a,s,Object(f.a)({Authorization:null!==(n=e.authToken)&&void 0!==n?n:void 0},c),r);case 6:if((l=t.sent)||!e.refreshToken){t.next=15;break}return t.next=10,e.getAccessToken();case 10:return t.next=12,e.call(a,s,r,c);case 12:return t.abrupt("return",t.sent);case 15:return t.abrupt("return",l);case 16:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"getAccessToken",value:function(){var t=Object(u.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.rawCall("POST","auth/accessToken",{},{refreshToken:e.refreshToken});case 2:(n=t.sent)&&!n.error?e.accessToken=n.accessToken:e.refreshToken=!1;case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}]),e}();N.authToken=!1,N.refreshToken=!1,N.accessToken=!1;var k=["Gecode","OR-tool"],w=["In queue","Computing","Completed"],S=function(e){Object(m.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={loading:!1},e}return Object(h.a)(n,[{key:"checkLogin",value:function(){var e=Object(u.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.setState({loading:!0}),n=y(t.target.elements),e.next=5,N.call("POST","auth/login",n);case 5:(a=e.sent)&&!a.error?(this.props.history.push("/"),this.props.setRefreshToken(a.refreshToken,a.userRank)):(alert("Wrong username, or password."),this.setState({loading:!1}));case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(x.jsxs)("div",{className:"d-flex justify-content-center align-items-center vh-100",children:[Object(x.jsx)(p,{visible:this.state.loading}),Object(x.jsxs)("form",{onSubmit:function(t){return e.checkLogin(t)},className:"d-flex flex-column align-self-center w-25",children:[Object(x.jsx)("label",{children:"Username:"}),Object(x.jsx)("input",{name:"username",className:"form-control",type:"input"}),Object(x.jsx)("label",{children:"Password:"}),Object(x.jsx)("input",{name:"password",className:"form-control",type:"password"}),Object(x.jsx)("button",{className:"btn btn-primary mt-3",children:"Sign in"}),Object(x.jsx)("div",{className:"d-flex justify-content-center pt-2",children:Object(x.jsx)(i.b,{to:"/signup",children:"New user"})})]})]})}}]),n}(s.a.Component),T=Object(o.f)(S),C=function(e){Object(m.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={user:[{id:1,username:"oliver",recourseLimit:6}]},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=this;N.call("GET","/users").then((function(t){t&&!t.error&&e.setState({user:t.data})}))}},{key:"isInt",value:function(e){return/^\+?(0|[1-9]\d*)$/.test(e)}},{key:"render",value:function(){var e=this;return Object(x.jsx)("div",{className:"container",children:Object(x.jsx)("div",{className:"row",children:Object(x.jsxs)("div",{className:"col-md-12",children:[Object(x.jsx)("h1",{children:"User List"}),Object(x.jsxs)("table",{className:"table table-striped",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Username"}),Object(x.jsx)("th",{children:"Delete"}),Object(x.jsx)("th",{children:"Stop Que"}),Object(x.jsx)("th",{children:"Recourse Limit"})]})}),Object(x.jsx)("tbody",{children:this.state.user.map((function(t){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:t.username}),Object(x.jsx)("td",{children:Object(x.jsx)("button",{className:"btn btn-danger",onClick:function(){N.call("DELETE","/users/".concat(t.id)).then((function(t){t&&!t.error&&e.getData()}))},children:"Delete"})}),Object(x.jsx)("td",{children:Object(x.jsx)("button",{className:"btn btn-danger",onClick:function(){N.call("PUT","/users/".concat(t.id,"/stop")).then((function(t){t&&!t.error&&e.getData()}))},children:"Stop Que"})}),Object(x.jsx)("td",{children:Object(x.jsx)("button",{className:"btn btn-secondary",onClick:function(){var n=prompt("Set recourse limit for user: "+t.username,t.recourseLimit);!0===e.isInt(n)?N.call("PUT","/users/".concat(t.id,"/recourseLimit/").concat(n)).then((function(n){n&&!n.error&&(e.getData(),t.username)})):t.username},children:t.recourseLimit})})]},t.id)}))})]})]})})})}}]),n}(s.a.Component),D=Object(o.f)(C),A=function(e){Object(m.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={solvers:[{id:10,name:"test"}],editing:0},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.call("GET","/solvers");case 2:(t=e.sent)&&!t.error&&this.setState({data:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(u.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete it?")){e.next=6;break}return e.next=4,N.call("DELETE","/solvers/"+t);case 4:return e.next=6,this.getData();case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"upload",value:function(){var e=Object(u.a)(j.a.mark((function e(t){var n,a,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.files[0],(a=new FormData).append("file",n),e.next=5,N.call("PUT","/solvers/"+this.state.editing+"/image",a,{"Content-Type":"application/x-www-form-urlencoded"});case 5:(s=e.sent)&&!s.error&&alert("The file has been uploaded!");case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t="number"===typeof this.state.editing,n="new"===this.state.editing,a=t?this.state.solvers[this.state.editing]:{};return Object(x.jsxs)("div",{className:"container-fluid",children:[(t||n)&&Object(x.jsxs)("div",{className:"pb-2 mb-2 border-bottom",children:[Object(x.jsx)("h1",{children:t?"Editing solver":"New solver"}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col-sm-2",children:Object(x.jsx)("label",{htmlFor:"name",children:"Name"})}),Object(x.jsx)("div",{className:"col-sm-10 pb-1",children:Object(x.jsx)("input",{className:"form-control",name:"name",defaultValue:a.name})}),Object(x.jsx)("div",{className:"col-sm-2",children:Object(x.jsx)("label",{htmlFor:"name",children:"Image"})}),Object(x.jsx)("div",{className:"col-sm-10",children:Object(x.jsx)("input",{className:"form-control",type:"file",name:"name",disabled:n,accept:".png,.jpg",onChange:function(t){return e.upload(t)}})})]}),Object(x.jsx)("button",{onClick:function(){return e.setState({editing:"new"})},className:"btn btn-light",children:"Save"})]}),Object(x.jsx)("h1",{children:"Solvers"}),Object(x.jsx)("button",{onClick:function(){return e.setState({editing:"new"})},className:"btn btn-primary",children:"New solver"}),Object(x.jsxs)("table",{className:"table",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{scope:"col",children:"#"}),Object(x.jsx)("th",{scope:"col",children:"Name"}),Object(x.jsx)("th",{scope:"col"})]})}),Object(x.jsx)("tbody",{children:this.state.solvers.map((function(t,n){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{scope:"row",children:t.id}),Object(x.jsx)("td",{children:t.name}),Object(x.jsxs)("td",{children:[Object(x.jsx)("button",{onClick:function(){return e.setState({editing:n})},className:"btn m-1 mt-0 mb-0 btn-secondary",children:"Edit"}),Object(x.jsx)("button",{onClick:function(){return e.delete(t.id)},className:"btn btn-danger",children:"Delete"})]})]},t.id)}))})]})]})}}]),n}(s.a.Component),F=function(e){Object(m.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={loading:!1},e}return Object(h.a)(n,[{key:"signUp",value:function(){var e=Object(u.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),0!==(n=y(t.target.elements)).username.length){e.next=6;break}alert("A username is required"),e.next=20;break;case 6:if(0!==n.password.length){e.next=10;break}alert("A password is required"),e.next=20;break;case 10:if(n.password===n.passwordRepeat){e.next=14;break}alert("The two given password are not the same"),e.next=20;break;case 14:return this.setState({loading:!0}),e.next=17,N.call("POST","auth/register",n);case 17:a=e.sent,this.setState({loading:!1}),a&&!a.error?(alert("Your user has been created!"),this.props.history.push("/")):alert("A unkown error orcurred, try again");case 20:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(x.jsxs)("div",{className:"d-flex justify-content-center align-items-center vh-100",children:[Object(x.jsx)(p,{visible:this.state.loading}),Object(x.jsxs)("form",{onSubmit:function(t){return e.signUp(t)},className:"d-flex flex-column align-self-center w-25",children:[Object(x.jsx)("label",{children:"Username:"}),Object(x.jsx)("input",{name:"username",required:!0,className:"form-control",type:"input"}),Object(x.jsx)("label",{children:"Password:"}),Object(x.jsx)("input",{name:"password",required:!0,className:"form-control",type:"password"}),Object(x.jsx)("label",{children:"Repeat password:"}),Object(x.jsx)("input",{name:"passwordRepeat",required:!0,className:"form-control",type:"password"}),Object(x.jsx)("button",{className:"btn btn-primary mt-3",children:"Create account"}),Object(x.jsx)("div",{className:"d-flex justify-content-center pt-2",children:Object(x.jsx)(i.b,{to:"/",children:"Go back"})})]})]})}}]),n}(s.a.Component),E=Object(o.f)(F),I=function(e){Object(m.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={history:[],models:[],data:[]},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.getData()}},{key:"delete",value:function(){var e=Object(u.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete it?")){e.next=6;break}return e.next=4,N.call("DELETE","files/".concat(t));case 4:e.sent&&this.getData();case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getData",value:function(){var e=this;N.call("GET","jobs").then((function(t){t&&!t.error&&e.setState({history:t.data})})),N.call("GET","files/all/0").then((function(t){t&&!t.error&&e.setState({models:t.results})})),N.call("GET","files/all/1").then((function(t){t&&!t.error&&e.setState({data:t.results})}))}},{key:"render",value:function(){var e=this;return Object(x.jsxs)("div",{className:"container pt-4",children:[Object(x.jsx)("div",{className:"row align-items-start",children:Object(x.jsx)("div",{className:"col-md-12",children:Object(x.jsxs)("div",{className:"card card-body",children:[Object(x.jsx)("h3",{className:"text-center",children:"History"}),Object(x.jsxs)("table",{className:"table table-hover",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"#"}),Object(x.jsx)("th",{children:"Time"}),Object(x.jsx)("th",{children:"Status"})]})}),Object(x.jsx)("tbody",{children:this.state.history.map((function(e){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:e.id}),Object(x.jsx)("td",{children:new Date(e.timestamp).toLocaleString()}),Object(x.jsx)("td",{children:w[e.status]})]},e.id)}))})]})]})})}),Object(x.jsx)("div",{className:"row pt-1",children:Object(x.jsx)(i.b,{to:"/newRun",className:"d-grid gap-2",children:Object(x.jsx)("button",{type:"button",className:"btn btn-primary",children:"Start new run!"})})}),Object(x.jsxs)("div",{className:"row pt-4",children:[Object(x.jsxs)("div",{className:"col-md-6",children:[Object(x.jsxs)("div",{className:"card card-body",children:[Object(x.jsx)("h3",{className:"text-center",children:"Models"}),Object(x.jsxs)("table",{className:"table table-hover",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"#"}),Object(x.jsx)("th",{children:"Name"})]})}),Object(x.jsx)("tbody",{children:this.state.models.map((function(t){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:t.fileId}),Object(x.jsx)("td",{children:t.filename}),Object(x.jsx)("td",{children:Object(x.jsx)(i.b,{to:"/model/".concat(t.id),className:"text-dark",children:Object(x.jsx)("i",{className:"bi bi-pencil-square"})})}),Object(x.jsx)("td",{children:Object(x.jsx)("i",{onClick:function(){return e.delete(t.fileId)},role:"button",className:"bi bi-trash"})}),Object(x.jsx)("td",{children:Object(x.jsx)("i",{className:"bi bi-cloud-arrow-up"})})]},t.id)}))})]})]}),Object(x.jsx)(i.b,{to:"/model/new",children:Object(x.jsx)("button",{type:"button",className:"btn btn-primary mt-1 w-100",children:"Create new model!"})})]}),Object(x.jsxs)("div",{className:"col-md-6",children:[Object(x.jsxs)("div",{className:"card card-body",children:[Object(x.jsx)("h3",{className:"text-center",children:"Data"}),Object(x.jsxs)("table",{className:"table table-hover",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"#"}),Object(x.jsx)("th",{children:"Name"})]})}),Object(x.jsx)("tbody",{children:this.state.data.map((function(t){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:t.fileId}),Object(x.jsx)("td",{children:t.filename}),Object(x.jsx)("td",{children:Object(x.jsx)(i.b,{to:"/data/".concat(t.fileId),className:"text-dark",children:Object(x.jsx)("i",{className:"bi bi-pencil-square"})})}),Object(x.jsx)("td",{children:Object(x.jsx)("i",{onClick:function(){return e.delete(t.fileId)},role:"button",className:"bi bi-trash"})}),Object(x.jsx)("td",{children:Object(x.jsx)("i",{className:"bi bi-cloud-arrow-up"})})]},t.id)}))})]})]}),Object(x.jsx)(i.b,{to:"/data/new",children:Object(x.jsx)("button",{type:"button",className:"btn btn-primary mt-1 w-100",children:"Create new dataset!"})})]})]})]})}}]),n}(s.a.Component),P=function(e){Object(m.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).newSolver={solver:k[0],flagA:!1,flagF:!1,flagP:1,flagM:100,memory:0},e.state={models:[],data:[],currentModel:0,currentDataset:0,solvers:[]},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=this;N.call("GET","files/all/0").then((function(t){t&&!t.error&&e.setState({models:t.results})})),N.call("GET","files/all/1").then((function(t){t&&!t.error&&e.setState({data:t.results})})),N.call("GET","solvers").then((function(e){e&&!e.error&&console.log("Got solvers",e)}))}},{key:"updateSolver",value:function(e,t,n){var a=Object(v.a)(this.state.solvers),s=Object(f.a)({},a[n]);s[e]=t,a[n]=s,this.setState({solvers:a})}},{key:"addSolver",value:function(){this.setState({solvers:[].concat(Object(v.a)(this.state.solvers),[Object(f.a)({},this.newSolver)])})}},{key:"save",value:function(){var e=Object(u.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==(t={model:this.state.currentModel,dataset:this.state.currentDataset,solvers:Object(v.a)(this.state.solvers)}).model){e.next=5;break}alert("A valid model needs to be choosen"),e.next=13;break;case 5:if(0!==t.solvers.length){e.next=9;break}alert("You need atleast one solver"),e.next=13;break;case 9:return e.next=11,N.call("POST","jobs",t);case 11:(n=e.sent)&&!n.error?(alert("Your run has been saved!"),this.props.history.push("/")):alert("Something went wrong, try again.");case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(x.jsxs)("div",{className:"container pt-4",children:[Object(x.jsx)("h1",{children:"New run"}),Object(x.jsx)("label",{children:"Model:"}),Object(x.jsx)("div",{className:"dropdown",children:Object(x.jsxs)("select",{className:"form-select form-select-lg mb-2",onChange:function(t){return e.setState({currentModel:Number(t.target.value)})},defaultValue:this.state.currentModel,"aria-label":".form-select-lg",style:{width:"40%"},children:[Object(x.jsx)("option",{value:"0",children:"Choose a model"}),this.state.models.map((function(e){return Object(x.jsx)("option",{value:e.fileId,children:e.filename},e.fileId)}))]})}),Object(x.jsx)("label",{children:"Dataset:"}),Object(x.jsx)("div",{className:"dropdown",children:Object(x.jsxs)("select",{className:"form-select form-select-lg mb-2",onChange:function(t){return e.setState({currentDataset:Number(t.target.value)})},defaultValue:this.state.currentDataset,"aria-label":".form-select-lg",style:{width:"40%"},children:[Object(x.jsx)("option",{value:"0",children:"Choose a dataset"}),this.state.data.map((function(e){return Object(x.jsx)("option",{value:e.fileId,children:e.filename},e.fileId)}))]})}),Object(x.jsxs)("div",{class:"custom-control custom-checkbox",children:[Object(x.jsx)("input",{type:"checkbox",class:"custom-control-input",id:"customCheck1"}),Object(x.jsx)("label",{class:"custom-control-label",for:"customCheck1",children:" Parallel run"})]}),Object(x.jsx)("div",{className:"col-sm-4",children:Object(x.jsx)("label",{htmlFor:"timeLimit",children:"Time limit in seconds"})}),Object(x.jsx)("div",{className:"col-sm-8",children:Object(x.jsx)("input",{type:"number",id:"timeLim",name:"timeLim"})}),this.state.solvers.map((function(t,n){return Object(x.jsxs)("div",{className:"pt-4 pb-4 border-top",children:[Object(x.jsx)("label",{htmlFor:"solver",children:Object(x.jsxs)("h5",{children:["Solver #",n+1]})}),Object(x.jsx)("select",{onChange:function(t){return e.updateSolver("solver",t.target.value,n)},className:"form-select form-select-lg mb-2","aria-label":".form-select-lg example",id:"solver",children:k.map((function(e,t){return Object(x.jsx)("option",{value:e,children:e},t)}))}),Object(x.jsx)("h6",{children:"Flags"}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col-sm-4",children:Object(x.jsx)("label",{htmlFor:"flagA",children:"All solutions?"})}),Object(x.jsx)("div",{className:"col-sm-8",children:Object(x.jsx)("input",{type:"checkbox",id:"flagA",onChange:function(t){return e.updateSolver("flagA",t.target.checked,n)},defaultChecked:t.flagA,name:"flagA"})}),Object(x.jsx)("div",{className:"col-sm-4",children:Object(x.jsx)("label",{htmlFor:"flagF",children:"Free search?"})}),Object(x.jsx)("div",{className:"col-sm-8",children:Object(x.jsx)("input",{type:"checkbox",onChange:function(t){return e.updateSolver("flagF",t.target.checked,n)},id:"flagF",defaultChecked:t.flagF,name:"flagF"})}),Object(x.jsx)("div",{className:"col-sm-4",children:Object(x.jsx)("label",{htmlFor:"flagP",children:"Threads"})}),Object(x.jsx)("div",{className:"col-sm-8",children:Object(x.jsx)("input",{type:"number",onChange:function(t){return e.updateSolver("solver",Number(t.target.value),n)},min:"0",defaultValue:t.flagP,id:"flagP",name:"flagP"})}),Object(x.jsx)("div",{className:"col-sm-4",children:Object(x.jsx)("label",{htmlFor:"memory",children:"Memeory (0 = not set)"})}),Object(x.jsx)("div",{className:"col-sm-8",children:Object(x.jsx)("input",{type:"number",onChange:function(t){return e.updateSolver("memory",Number(t.target.value),n)},min:"0",defaultValue:t.memory,id:"memory",name:"memory"})})]})]},n)})),Object(x.jsxs)("div",{class:"btn-group mr-2",role:"group",children:[Object(x.jsx)("button",{onClick:function(){return e.save()},className:"btn btn-primary mt-2",children:"Save"}),Object(x.jsx)("button",{onClick:function(){return e.addSolver()},className:"btn btn-secondary mt-2",children:"New solver"})]})]})}}]),n}(s.a.Component),L=Object(o.f)(P),M=[".mzn",".dzn"],G=["model","data"],R=function(e){Object(m.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={name:"",content:""},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("new"===this.props.match.params.id){e.next=5;break}return e.next=3,N.call("GET","files/".concat(this.props.match.params.id));case 3:(t=e.sent)&&!t.error&&this.setState({name:t.filename,content:t.data});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"save",value:function(){var e=Object(u.a)(j.a.mark((function e(t){var n,a,s,r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),0!==(n=y(t.target.elements)).filename.length){e.next=6;break}alert("The name input is required for the "+G[this.props.type]),e.next=13;break;case 6:return a="new"!==this.props.match.params.id,s=a?"files/"+this.props.match.params.id:"files",r=a?"PUT":"POST",e.next=11,N.call(r,s,Object(f.a)(Object(f.a)({},n),{},{data:this.state.content,filetype:this.props.type}));case 11:(c=e.sent)&&!c.error?(alert("The "+G[this.props.type]+" has been saved!"),this.props.history.push("/")):alert("Something went wrong, try again");case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"parseFile",value:function(e){var t=this,n=e.target.files[0],a=new FileReader;a.onload=function(e){t.setState({content:e.target.result})},a.readAsText(n)}},{key:"render",value:function(){var e=this,t=G[this.props.type],n="new"!==this.props.match.params.id;return Object(x.jsx)("div",{className:"container pt-4",children:Object(x.jsxs)("form",{onSubmit:function(t){return e.save(t)},children:[Object(x.jsx)("h1",{children:n?"Edit "+t:"New "+t}),Object(x.jsxs)("div",{className:"form-group pb-2",children:[Object(x.jsx)("label",{for:"nameInp",children:"Name"}),Object(x.jsx)("input",{type:"input",disabled:n,defaultValue:this.state.name,className:"form-control",id:"nameInp",name:"filename",placeholder:"".concat(t," name")})]}),Object(x.jsxs)("div",{className:"form-group pb-2",children:[Object(x.jsx)("label",{for:"contentInp",children:"Model"}),Object(x.jsx)("input",{id:"contentInp",type:"file",onChange:function(t){return e.parseFile(t)},accept:M[this.props.type],className:"form-control"})]}),Object(x.jsx)("button",{className:"btn btn-primary mt-2",children:"Save"})]})})}}]),n}(s.a.Component),q=Object(o.f)(R),U=function(e){Object(m.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={logs:[]},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=this;N.call("GET","logs").then((function(t){t&&!t.error&&e.setState({logs:t.data})}))}},{key:"render",value:function(){return Object(x.jsx)("div",{className:"container pt-8",children:Object(x.jsx)("div",{className:"row align-items-start",children:Object(x.jsx)("div",{className:"col-md-12",children:Object(x.jsxs)("div",{className:"card card-body",children:[Object(x.jsx)("h3",{className:"text-center",children:"Logs"}),Object(x.jsxs)("table",{className:"table table-hover",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"#"}),Object(x.jsx)("th",{children:"id"}),Object(x.jsx)("th",{children:"Session"}),Object(x.jsx)("th",{children:"Request"}),Object(x.jsx)("th",{children:"Path"})]})}),Object(x.jsx)("tbody",{children:this.state.logs.map((function(e){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:e.id}),Object(x.jsx)("td",{children:e.userId}),Object(x.jsx)("td",{children:e.sessionId}),Object(x.jsx)("td",{children:e.requestId}),Object(x.jsx)("td",{children:e.logPath})]},e.id)}))})]})]})})})})}}]),n}(s.a.Component);function V(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(1),c=Object(l.a)(r,2),d=c[0],j=c[1],u=function(e){N.refreshToken=e,s(e)};return Object(x.jsx)(i.a,{children:n?Object(x.jsxs)(x.Fragment,{children:[d>0&&Object(x.jsxs)("nav",{className:"container-fluid navbar navbar-expand-lg navbar-light bg-light",children:[Object(x.jsx)(i.b,{className:"navbar-brand",to:"/",children:"MiniZinc"}),Object(x.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(x.jsx)("span",{className:"navbar-toggler-icon"})}),Object(x.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(x.jsxs)("ul",{className:"navbar-nav",children:[Object(x.jsx)("li",{className:"nav-item active",children:Object(x.jsx)(i.b,{className:"nav-link",to:"/",children:"Jobs"})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)(i.b,{className:"nav-link",to:"/users",children:"Users"})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)(i.b,{className:"nav-link",to:"/solvers",children:"Solvers"})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)(i.b,{className:"nav-link",to:"/log",children:"Logs"})})]})})]}),Object(x.jsxs)(o.c,{children:[Object(x.jsx)(o.a,{path:"/",exact:!0,children:Object(x.jsx)(I,{})}),Object(x.jsx)(o.a,{exact:!0,path:"/newRun",children:Object(x.jsx)(L,{})}),d>0&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(o.a,{exact:!0,path:"/users",children:Object(x.jsx)(D,{})}),Object(x.jsx)(o.a,{exact:!0,path:"/solvers",children:Object(x.jsx)(A,{})}),Object(x.jsx)(o.a,{exact:!0,path:"/log",children:Object(x.jsx)(U,{})})]}),Object(x.jsx)(o.a,{exact:!0,path:"/model/:id",children:Object(x.jsx)(q,{type:0})}),Object(x.jsx)(o.a,{exact:!0,path:"/data/:id",children:Object(x.jsx)(q,{type:1})}),Object(x.jsx)(o.a,{path:"*",children:Object(x.jsx)(I,{})})]})]}):Object(x.jsxs)(o.c,{children:[Object(x.jsx)(o.a,{path:"/signup",children:Object(x.jsx)(E,{})}),Object(x.jsx)(o.a,{path:"*",children:Object(x.jsx)(T,{setRefreshToken:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;j(t),u(e)}})})]})})}var z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))};c.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(V,{})}),document.getElementById("root")),z()}},[[42,1,2]]]);
//# sourceMappingURL=main.36be1348.chunk.js.map