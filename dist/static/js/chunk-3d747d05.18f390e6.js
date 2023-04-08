(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d747d05"],{"13b6":function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"address-container"},[t("el-form",{staticClass:"search",attrs:{inline:""}},[t("el-form-item",[t("el-input",{attrs:{placeholder:"收货人手机号"},model:{value:e.searchObj.phone,callback:function(s){e.$set(e.searchObj,"phone",s)},expression:"searchObj.phone"}})],1),t("el-form-item",[t("el-input",{attrs:{placeholder:"收货人姓名"},model:{value:e.searchObj.consignee,callback:function(s){e.$set(e.searchObj,"consignee",s)},expression:"searchObj.consignee"}})],1),t("el-button",{staticClass:"btn",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.findAddress}},[e._v("查询")]),t("el-button",{staticClass:"btn",attrs:{type:"info"},on:{click:e.resetSearch}},[e._v("清空")])],1),t("el-button",{staticClass:"addBtn",attrs:{type:"primary",icon:"el-icon-circle-plus-outline"},on:{click:e.openAddAddress}},[e._v("新增收货地址")]),t("el-button",{staticClass:"deleteBtn",attrs:{type:"danger",icon:"el-icon-delete",disabled:e.multipleSelection.length<=0},on:{click:e.deleteSelected}},[e._v("删除已选")]),t("el-dialog",{attrs:{title:e.titleName,visible:e.dialogFormVisible,width:"720px","lock-scroll":!1,"before-close":e.closeDialog},on:{"update:visible":function(s){e.dialogFormVisible=s}}},[t("el-form",{ref:"addOrUpdateAddress",staticStyle:{width:"80%"},attrs:{model:e.addressInfo,"label-width":"120px",rules:e.addOrUpdateAddressRules}},[t("el-form-item",{attrs:{label:"收货人姓名：",prop:"consignee"}},[t("el-input",{ref:"consignee",attrs:{placeholder:"请输入收货人姓名",autocomplete:"off",name:"consignee",type:"text",maxlength:"16"},model:{value:e.addressInfo.consignee,callback:function(s){e.$set(e.addressInfo,"consignee",s)},expression:"addressInfo.consignee"}})],1),t("el-form-item",{attrs:{prop:"phone",label:"手机号："}},[t("el-input",{ref:"phone",attrs:{placeholder:"请输入你的手机号",name:"phone",type:"text",maxlength:"11"},model:{value:e.addressInfo.phone,callback:function(s){e.$set(e.addressInfo,"phone",s)},expression:"addressInfo.phone"}})],1),t("el-form-item",{attrs:{prop:"area",label:"省市区："}},[e.dialogFormVisible?t("area-select",{attrs:{level:2,type:"text",data:e.pcaa,size:"small"},model:{value:e.addressInfo.area,callback:function(s){e.$set(e.addressInfo,"area",s)},expression:"addressInfo.area"}}):e._e()],1),t("el-form-item",{attrs:{label:"详细地址：",prop:"address"}},[t("el-input",{ref:"address",attrs:{placeholder:"请输入收货的详细地址",autocomplete:"off",name:"address",type:"textarea",rows:3},model:{value:e.addressInfo.address,callback:function(s){e.$set(e.addressInfo,"address",s)},expression:"addressInfo.address"}})],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:e.closeDialog}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:function(s){return e.addOrUpdateAddress("addOrUpdateAddress")}}},[e._v("确 定")])],1)],1),t("el-table",{staticClass:"addressTable",attrs:{data:e.addressList,border:"",stripe:""},on:{"selection-change":e.handleSelectionChange}},[t("el-table-column",{attrs:{type:"selection",width:"55"}}),t("el-table-column",{attrs:{prop:"userInfo.name",label:"用户名",align:"center",width:"145"}}),t("el-table-column",{attrs:{prop:"consignee",label:"收货人姓名",align:"center",width:"145"}}),t("el-table-column",{attrs:{prop:"phone",label:"收货人手机号",align:"center",width:"145"}}),t("el-table-column",{attrs:{label:"收货地区",align:"center",width:"220"},scopedSlots:e._u([{key:"default",fn:function(s){var a=s.row;return[t("span",{staticStyle:{"margin-right":"10px"}},[e._v(e._s(a.area[0]))]),t("span",{staticStyle:{"margin-right":"10px"}},[e._v(e._s(a.area[1]))]),t("span",[e._v(e._s(a.area[2]))])]}}])}),t("el-table-column",{attrs:{prop:"address",label:"收货详细地址",align:"center"}}),t("el-table-column",{attrs:{label:"设置",align:"center",width:"340"},scopedSlots:e._u([{key:"default",fn:function(s){var a=s.row;return[t("el-button",{attrs:{type:a.is_default?"success":"info",icon:"el-icon-location",plain:"",disabled:a.is_default},on:{click:function(s){return e.setDefault(a)}}},[e._v("默认地址")]),t("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(s){return e.openUpdateAddress(a)}}},[e._v("修改")]),t("el-button",{attrs:{type:"danger",icon:"el-icon-delete"},on:{click:function(s){return e.deleteAddress(a)}}},[e._v("删除")])]}}])})],1),t("div",{staticClass:"pagination"},[t("el-pagination",{attrs:{"current-page":e.pageNum,"pager-count":5,"page-sizes":[3,5,7],"page-size":e.pageSize,layout:" prev, pager,  next, sizes,jumper,->,total",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.getAddressList}})],1)],1)},r=[],n=t("5530"),i=t("b85c"),d=t("c7eb"),o=t("1da1"),c=(t("ac1f"),t("00b4"),t("2f62")),l=t("92e9"),u={name:"Address",data:function(){var e=function(e,s,t){var a=/^[\u4E00-\u9FA5A-Za-z0-9_]+$/;s?a.test(s)?t():t(new Error("用户名要求1~16之间，不包括特殊字符")):t(new Error("用户名不能为空！"))},s=function(e,s,t){var a=/^1[3456789]\d{9}$/;s?a.test(s)?t():t(new Error("手机号格式不正确！")):t(new Error("手机号不能为空！"))},t=function(e,s,t){s?t():t(new Error("收货地省市区不能为空"))},a=function(e,s,t){s?t():t(new Error("收货地省市区不能为空"))};return{user_id:0,pageNum:1,pageSize:5,searchObj:{consignee:"",phone:""},tempSearchObj:{consignee:"",phone:""},addressInfo:{consignee:"",phone:"",address:"",area:[]},addOrUpdateAddressRules:{consignee:[{required:!0,trigger:"blur",validator:e}],phone:[{required:!0,trigger:"blur",validator:s}],area:[{required:!0,trigger:"blur",validator:t}],address:[{required:!0,trigger:"blur",validator:a}]},multipleSelection:[],titleName:"新增收货地址",dialogFormVisible:!1,pcaa:l["pcaa"],addressId:null}},methods:{getAddressList:function(){var e=arguments,s=this;return Object(o["a"])(Object(d["a"])().mark((function t(){var a,r,n,i,o,c,l,u;return Object(d["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.length>0&&void 0!==e[0]?e[0]:1,s.pageNum=a,r=s.pageNum,n=s.pageSize,i=s.user_id,o=s.tempSearchObj,c=o.consignee,l=o.phone,u={pageSize:n,pageNum:r},0!=i&&Object.assign(u,{user_id:i}),c&&Object.assign(u,{consignee:c}),l&&Object.assign(u,{phone:l}),t.prev=8,t.next=11,s.$store.dispatch("address/getAddressList",u);case 11:s.$message({type:"success",message:"获取地址列表成功"}),t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](8),s.$message({type:"error",message:t.t0});case 17:case"end":return t.stop()}}),t,null,[[8,14]])})))()},findAddress:function(){var e=this.searchObj,s=e.phone,t=e.consignee;this.tempSearchObj={phone:s,consignee:t},this.getAddressList()},resetSearch:function(){this.searchObj={phone:"",consignee:""},this.tempSearchObj={phone:"",consignee:""},this.getAddressList()},deleteSelected:function(){var e=this;return Object(o["a"])(Object(d["a"])().mark((function s(){var t,a,r,n;return Object(d["a"])().wrap((function(s){while(1)switch(s.prev=s.next){case 0:t=[],a=Object(i["a"])(e.multipleSelection);try{for(a.s();!(r=a.n()).done;)n=r.value,t.push(n.id)}catch(c){a.e(c)}finally{a.f()}e.$confirm("确定删除这 ".concat(e.multipleSelection.length," 条地址吗?"),"提示",{type:"warning"}).then(Object(o["a"])(Object(d["a"])().mark((function s(){return Object(d["a"])().wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,e.$store.dispatch("address/deleteAddress",{ids:t});case 2:return s.next=4,e.getAddressList(e.addressList.length===e.multipleSelection.length?e.pageNum-1:e.pageNum);case 4:e.$message({type:"success",message:"删除地址成功"});case 5:case"end":return s.stop()}}),s)})))).catch((function(s){"cancel"==s?e.$message.info("已取消删除"):e.$message({type:"error",message:s})}));case 4:case"end":return s.stop()}}),s)})))()},handleSelectionChange:function(e){this.multipleSelection=e},handleSizeChange:function(e){this.pageSize=e,this.getAddressList()},setDefault:function(e){var s=this;return Object(o["a"])(Object(d["a"])().mark((function t(){return Object(d["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.$store.dispatch("address/updateAddress",{id:e.id,user_id:e.userInfo.id,data:{is_default:!0}});case 3:s.getAddressList(),s.$message({type:"success",message:"设置为默认地址成功"}),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),s.$message({type:"error",message:t.t0});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},deleteAddress:function(e){var s=this;return Object(o["a"])(Object(d["a"])().mark((function t(){return Object(d["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:s.$confirm("确定删除 '".concat(e.address,"' 这条地址吗?"),"提示",{type:"warning"}).then(Object(o["a"])(Object(d["a"])().mark((function t(){return Object(d["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.$store.dispatch("address/deleteAddress",{ids:[e.id]});case 2:s.getAddressList(1===s.addressList.length?s.pageNum-1:s.pageNum),s.$message({type:"success",message:"删除地址成功"});case 4:case"end":return t.stop()}}),t)})))).catch((function(e){"cancel"==e?s.$message.info("已取消删除"):s.$message({type:"error",message:e})}));case 1:case"end":return t.stop()}}),t)})))()},openAddAddress:function(){this.dialogFormVisible=!0,this.titleName="新增收货地址",this.addressInfo.consignee="",this.addressInfo.phone="",this.addressInfo.area=[],this.addressInfo.address="",this.addressId=null},openUpdateAddress:function(e){this.dialogFormVisible=!0,this.titleName="修改收货地址",this.addressId=e.id,this.addressInfo.consignee=e.consignee,this.addressInfo.phone=e.phone,this.addressInfo.area=e.area,this.addressInfo.address=e.address},closeDialog:function(){this.dialogFormVisible=!1,this.addressInfo.consignee="",this.addressInfo.phone="",this.addressInfo.area=[],this.addressInfo.address="",this.addressId=null,this.$refs.addOrUpdateAddress.resetFields()},addOrUpdateAddress:function(e){var s=this;this.$refs[e].validate(function(){var e=Object(o["a"])(Object(d["a"])().mark((function e(t){var a;return Object(d["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t){e.next=18;break}if(a={consignee:s.addressInfo.consignee,phone:s.addressInfo.phone,area:"".concat(s.addressInfo.area),address:s.addressInfo.address},e.prev=2,"新增收货地址"!=s.titleName){e.next=8;break}return e.next=6,s.$store.dispatch("address/addAddress",{user_id:s.user_id,data:a});case 6:e.next=10;break;case 8:return e.next=10,s.$store.dispatch("address/updateAddress",{id:s.addressId,user_id:s.user_id,data:a});case 10:s.dialogFormVisible=!1,s.$message({type:"success",message:"".concat(s.titleName,"成功")}),s.getAddressList(),e.next=18;break;case 15:e.prev=15,e.t0=e["catch"](2),s.$message({type:"error",message:e.t0});case 18:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(s){return e.apply(this,arguments)}}())}},mounted:function(){this.$route.query.user_id?(this.user_id=1*this.$route.query.user_id,this.getAddressList()):(this.$router.push("/user/index"),this.$message({type:"warning",message:"请先选择用户"}))},computed:Object(n["a"])({},Object(c["c"])({addressList:function(e){return e.address.addressList},total:function(e){return e.address.total}}))},p=u,h=(t("8601"),t("e778"),t("2877")),f=Object(h["a"])(p,a,r,!1,null,"9fbcdfa0",null);s["default"]=f.exports},"6dae":function(e,s,t){},8601:function(e,s,t){"use strict";t("b296")},b296:function(e,s,t){},e778:function(e,s,t){"use strict";t("6dae")}}]);