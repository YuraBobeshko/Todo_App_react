(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,n){t.exports=n(17)},15:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(9),i=n.n(r),c=(n(15),n(16),n(6)),s=n(7),l=n(1),u=n(2),d=n(4),p=n(3),f=n(5);function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}var h=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(d.a)(this,Object(p.a)(e).call(this,t))).inputChange=function(t){n.setState({inputValue:t.target.value})},n.submitTodoForm=function(t){t.preventDefault(),n.props.onSubmit(n.state.inputValue),n.setState(function(t){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(n,!0).forEach(function(e){Object(s.a)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},t,{inputValue:""})})},n.state={inputValue:""},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.props.placeholder;return a.a.createElement("form",{onSubmit:this.submitTodoForm},a.a.createElement("input",{type:"text",placeholder:t,className:"new-todo",value:this.state.inputValue,onChange:this.inputChange}))}}]),e}(a.a.Component),b=function(t){function e(){return Object(l.a)(this,e),Object(d.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.props.onSubmit;return a.a.createElement("header",{className:"header"},a.a.createElement("h1",null,"todos"),a.a.createElement(h,{placeholder:"What needs to be done?",onSubmit:t}))}}]),e}(a.a.PureComponent);function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}var v=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(d.a)(this,Object(p.a)(e).call(this,t))).inputChange=function(t){n.setState({inputValue:t.target.value})},n.submitTodoForm=function(t){var e=n.props.todo.id,o=n.state.inputValue;t.preventDefault(),n.props.editItem(o,e),n.setState(function(t){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(n,!0).forEach(function(e){Object(s.a)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},t,{inputValue:o})})},n.cancelEdit=function(t){if(27===t.which){var e=n.props.todo.id,o=n.state.inputValue;n.props.editItem(o,e)}},n.state={inputValue:n.props.todo.title},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.props,e=t.deleteItem,n=t.chooseFinishTask,o=t.changeTodoItem,r=t.todo,i=r.status,c=r.edit,s=r.id,l=r.title;return a.a.createElement("li",{className:"".concat(!1===i?"":"completed","\n        ").concat(c?"editing":""),key:s},a.a.createElement("div",{className:"view"},a.a.createElement("input",{type:"checkbox",className:"toggle",checked:i,onChange:function(){return n(s)}}),a.a.createElement("label",{htmlFor:"todo-".concat(s),onDoubleClick:function(){return o(s)}},l),a.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return e(s)}})),c?a.a.createElement("form",{onSubmit:this.submitTodoForm},a.a.createElement("input",{type:"text",autoFocus:!0,className:"edit",value:this.state.inputValue,onChange:this.inputChange,onKeyPress:this.cancelEdit})):"")}}]),e}(a.a.Component),j=function(t){function e(){var t,n;Object(l.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(d.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(a)))).filteredTodoList=function(){var t=n.props,e=t.activeFilter,o=t.todoList;switch(e){case"active":return o.filter(function(t){return!1===t.status});case"completed":return o.filter(function(t){return!0===t.status});default:return o}},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.props,e=t.deleteItem,n=t.chooseFinishTask,o=t.changeTodoItem,r=t.editItem;return a.a.createElement("ul",{className:"todo-list"},this.filteredTodoList().map(function(t){return a.a.createElement(v,{editItem:r,todo:t,deleteItem:e,chooseFinishTask:n,changeTodoItem:o})}))}}]),e}(a.a.Component),g=function(t){function e(){return Object(l.a)(this,e),Object(d.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.props,e=t.todoList,n=t.deleteItem,o=t.chooseFinishTask,r=t.toggleAllTodos,i=t.activeFilter,c=t.changeTodoItem,s=t.editItem;return a.a.createElement("section",{className:"main",style:{display:"block"}},a.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all"}),a.a.createElement("label",{htmlFor:"mark-all",onClick:r},"Mark all as complete"),a.a.createElement(j,{editItem:s,todoList:e,deleteItem:n,chooseFinishTask:o,activeFilter:i,changeTodoItem:c}))}}]),e}(a.a.PureComponent),y=function(t){function e(){return Object(l.a)(this,e),Object(d.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.props,e=t.activeFilter,n=t.handleActiveFilter;return a.a.createElement("ul",{className:"filters"},a.a.createElement("li",null,a.a.createElement("a",{href:"#/",className:"all"===e?"selected":"",onClick:function(){return n("all")}},"All")),a.a.createElement("li",null,a.a.createElement("a",{href:"#/active",className:"active"===e?"selected":"",onClick:function(){return n("active")}},"Active")),a.a.createElement("li",null,a.a.createElement("a",{href:"#/completed",className:"comleted"===e?"selected":"",onClick:function(){return n("completed")}},"Completed")))}}]),e}(a.a.PureComponent),E=function(t){function e(){var t,n;Object(l.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(d.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(a)))).clearCompletedTitle=function(){return n.props.todoList.some(function(t){return!0===t.status})},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.props,e=t.todoListLength,n=t.clearCompleted,o=t.activeFilter,r=t.handleActiveFilter;return a.a.createElement("footer",{className:"footer",style:{display:"block"}},a.a.createElement("span",{className:"todo-count"},e,1!==e?" items left":" item left"),a.a.createElement(y,{activeFilter:o,handleActiveFilter:r}),a.a.createElement("button",{type:"button",className:"clear-completed",style:{display:"block"},onClick:function(){return n()}},this.clearCompletedTitle()?"Clear completed":""))}}]),e}(a.a.Component);function I(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}function k(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?I(n,!0).forEach(function(e){Object(s.a)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):I(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var T=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(d.a)(this,Object(p.a)(e).call(this,t))).addNewTodo=function(t){if(""!==t){var e={title:t,id:n.state.todoId,status:!1,edit:!1};n.setState(function(t){return k({},t,{todoList:[].concat(Object(c.a)(t.todoList),[e]),todoId:t.todoId+1})})}},n.deleteItem=function(t){var e=n.state.todoList.filter(function(e){return e.id!==t});n.setState(function(t){return k({},t,{todoList:Object(c.a)(e)})})},n.countRelevantTodo=function(){var t=0;return n.state.todoList.forEach(function(e){!1===e.status&&(t+=1)}),t},n.chooseFinishTask=function(t){var e=n.state.todoList,o=Object(c.a)(e),a=o.findIndex(function(e){return e.id===t});!0===o[a].status?o[a].status=!1:o[a].status=!0,n.setState(function(t){return k({},t,{todoList:Object(c.a)(o)})})},n.toggleAllTodos=function(){var t=n.state,e=t.todoList,o=t.allToggle,a=Object(c.a)(e);o?a.forEach(function(t){return t.status=!1}):a.forEach(function(t){return t.status=!0}),n.setState(function(t){return k({},t,{todoList:Object(c.a)(a),allToggle:!t.allToggle})})},n.clearCompleted=function(){n.setState(function(t){return k({},t,{todoList:Object(c.a)(t.todoList.filter(function(t){return!1===t.status}))})})},n.handleActiveFilter=function(t){n.setState(function(e){return k({},e,{activeFilter:t})})},n.changeTodoItem=function(t){var e=n.state.todoList.findIndex(function(e){return e.id===t}),o=Object(c.a)(n.state.todoList);o[e].edit=!0,n.setState(function(t){return k({},t,{todoList:Object(c.a)(o)})})},n.editItem=function(t,e){var o=n.state.todoList,a=Object(c.a)(o),r=a.findIndex(function(t){return t.id===e});a[r]=k({},o[r],{title:t,edit:!1}),t||a.splice(r,1),n.setState(function(t){return k({},t,{todoList:Object(c.a)(a)})})},n.state={todoList:[],todoId:1,allToggle:!1,activeFilter:"all"},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("todoList"))||[],e=localStorage.getItem("todoId");this.setState(function(n){return k({},n,{todoList:Object(c.a)(t),todoId:+e})})}},{key:"componentDidUpdate",value:function(){var t=JSON.stringify(this.state.todoList);localStorage.setItem("todoList",t),localStorage.setItem("todoId",this.state.todoId)}},{key:"render",value:function(){var t=this.state,e=t.todoList,n=t.activeFilter;return a.a.createElement("section",{className:"todoapp"},a.a.createElement(b,{onSubmit:this.addNewTodo}),a.a.createElement(g,{todoList:e,deleteItem:this.deleteItem,chooseFinishTask:this.chooseFinishTask,toggleAllTodos:this.toggleAllTodos,activeFilter:n,changeTodoItem:this.changeTodoItem,editItem:this.editItem}),a.a.createElement(E,{todoListLength:this.countRelevantTodo(),todoList:this.state.todoList,clearCompleted:this.clearCompleted,activeFilter:n,handleActiveFilter:this.handleActiveFilter}))}}]),e}(a.a.Component);i.a.render(a.a.createElement(T,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.08ccc7ac.chunk.js.map