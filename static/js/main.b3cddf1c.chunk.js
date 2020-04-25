(this.webpackJsonpreacttemplate=this.webpackJsonpreacttemplate||[]).push([[0],{17:function(e,t,a){e.exports=a(40)},22:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(15),s=a.n(r),c=(a(22),a(2)),o=a(3),u=a(5),i=a(4),m={headerStyle:{backgroundColor:"#111D44",color:"white",textAlign:"center",padding:"20px",fontSize:30,fontFamily:"Roboto Slab"}};function h(){return l.a.createElement("div",null,l.a.createElement("header",null,l.a.createElement("h1",{style:m.headerStyle},"Employee  Directory")))}var f=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={search:"",filterState:"",serchOn:!1},e.handleFilterChange=function(t){t.preventDefault(),e.setState({filterState:t.target.value})},e.handleSearch=function(t){t.preventDefault();var a=e.state.search.trim().toLowerCase();console.log(a),e.setState({serchOn:!0,search:""}),e.props.handleSearchEvent(e.state.filterState,a)},e.showAll=function(t){t.preventDefault(),e.setState({filterState:"",serchOn:!1}),e.props.handleShowAll()},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("form",{className:"form-inline"},l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"input-group"},l.a.createElement("label",{className:"ml-3"}," Filter By:"),l.a.createElement("select",{className:"ml-2",value:this.state.filterState,onChange:this.handleFilterChange},l.a.createElement("option",null,"Select"),l.a.createElement("option",{value:"name"},"Name"),l.a.createElement("option",{value:"email"},"Email")))),"email"===this.state.filterState&&l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{className:"form-control mr-sm-2 ml-5",type:"text",placeholder:"Employee email","aria-label":"Search",value:this.state.search,onChange:function(t){return e.setState({search:t.target.value})}})),"name"===this.state.filterState&&l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{className:"form-control mr-sm-2 ml-5",type:"text",placeholder:"Employee Name","aria-label":"Search",value:this.state.search,onChange:function(t){return e.setState({search:t.target.value})}})),""!==this.state.filterState&&l.a.createElement("button",{className:"btn btn-outline-primary ml-2 my-sm-0",type:"submit",onClick:this.handleSearch},"Search"),this.state.serchOn&&l.a.createElement("button",{className:"btn btn-outline-primary ml-2 my-sm-0",type:"submit",onClick:this.showAll},"Show All")))}}]),a}(l.a.Component),d=a(16),p=a.n(d),E="https://randomuser.me/api/?results=10",v=function(){return console.log(E),p.a.get(E)},S=function(e,t){var a=e.name.first.toUpperCase(),n=t.name.first.toUpperCase(),l=0;return a>n?l=1:a<n&&(l=-1),l},y=function(e,t){var a=e.dob.date.substring(0,10),n=t.dob.date.substring(0,10),l=0;return a>n?l=1:a<n&&(l=-1),l};function b(e){var t={color:"#007BFF"};return console.log(e.results),l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col",style:t},"Image"),l.a.createElement("th",{scope:"col"},l.a.createElement("a",{href:"#",onClick:e.sortByName},"Name")),l.a.createElement("th",{scope:"col",style:t},"Phone"),l.a.createElement("th",{scope:"col",style:t},"Email"),l.a.createElement("th",{scope:"col",style:t},l.a.createElement("a",{href:"#",onClick:e.sortByDOB},"DOB")))),l.a.createElement("tbody",null,e.results.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("th",{scope:"row"},l.a.createElement("img",{src:e.picture.thumbnail,alt:"Mark's pic"})),l.a.createElement("td",null,e.name.first," ",e.name.last),l.a.createElement("td",null,e.phone),l.a.createElement("td",null,e.email),l.a.createElement("td",null,e.dob.date.substring(0,10)))}))))}var g=function(e){return l.a.createElement("div",{className:"container".concat(e.fluid?"-fluid":"")},e.children)};var C=function(e){return l.a.createElement("div",{className:"row".concat(e.fluid?"-fluid":"")},e.children)};var N=function(e){var t=e.size.split(" ").map((function(e){return"col-"+e})).join(" ");return l.a.createElement("div",{className:t},e.children)},w=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={searchValue:"",results:[],filteredResults:[],noResults:!1},e.handleSearchEvent=function(t,a){console.log("Selected filter is "+t+" and searchValue is "+a),e.setState({searchValue:a});var n="name"===t?e.state.results.filter((function(e){return e.name.first.toLowerCase()===a||e.name.last.toLowerCase()===a||"".concat(e.name.first.toLowerCase()," ").concat(e.name.last.toLowerCase())===a})):e.state.results.filter((function(e){return e.email.toLowerCase()===a}));0===n.length&&e.setState({noResults:!e.state.noResults}),e.setState({filteredResults:n})},e.handleInputChange=function(e){e.preventDefault(),console.log("handleInputChange method")},e.handleShowAll=function(){e.setState({noResults:!1,filteredResults:e.state.results})},e.searchAPI=function(t){v().then((function(t){return e.setState({results:t.data.results}),e.setState({filteredResults:t.data.results})})).catch((function(e){return console.log(e)}))},e.sortByName=function(){var t=e.state.results;return t.sort(S),e.setState({results:t})},e.sortByDOB=function(){var t=e.state.results;return t.sort(y),e.setState({results:t})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.searchAPI()}},{key:"render",value:function(){return l.a.createElement(g,{fluid:"-fluid"},l.a.createElement(C,null,l.a.createElement(N,{size:"sm-12"},l.a.createElement("div",null,l.a.createElement(h,null),l.a.createElement(f,{handleSearchEvent:this.handleSearchEvent,handleInputChange:this.handleInputChange,handleShowAll:this.handleShowAll}),l.a.createElement("br",null),this.state.noResults?l.a.createElement("h3",null,"No Results Found"):l.a.createElement(b,{results:this.state.filteredResults,sortByName:this.sortByName,sortByDOB:this.sortByDOB})))))}}]),a}(n.Component);var O=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(w,null))};s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(O,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.b3cddf1c.chunk.js.map