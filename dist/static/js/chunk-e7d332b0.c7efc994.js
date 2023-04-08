(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e7d332b0"],{"0e3a":function(e,t,r){"use strict";r("a5cb")},"634a":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"order-container"},[r("el-form",{staticClass:"search",attrs:{inline:""}},[r("el-form-item",[r("el-input",{attrs:{placeholder:"订单号"},model:{value:e.searchObj.order_number,callback:function(t){e.$set(e.searchObj,"order_number",t)},expression:"searchObj.order_number"}})],1),r("el-form-item",[r("el-select",{attrs:{placeholder:"订单状态"},model:{value:e.searchObj.status,callback:function(t){e.$set(e.searchObj,"status",t)},expression:"searchObj.status"}},e._l(e.statusList,(function(e){return r("el-option",{key:e.status,attrs:{label:e.statusName,value:e.status}})})),1)],1),r("el-button",{staticClass:"btn",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.findOrder}},[e._v("查询")]),r("el-button",{staticClass:"btn",attrs:{type:"info"},on:{click:e.resetSearch}},[e._v("清空")])],1),r("el-button",{staticClass:"deleteBtn",attrs:{type:"danger",icon:"el-icon-delete",disabled:e.multipleSelection.length<=0},on:{click:e.deleteSelected}},[e._v("删除已选")]),r("el-table",{staticClass:"orderTable",attrs:{data:e.orderList,border:"",stripe:""},on:{"selection-change":e.handleSelectionChange}},[r("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),r("el-table-column",{attrs:{prop:"userInfo.name",label:"用户名称",width:"90",align:"center"}}),r("el-table-column",{attrs:{prop:"order_number",label:"订单号",width:"155",align:"center"}}),r("el-table-column",{attrs:{prop:"goods_info.goods_img",label:"商品信息（图片——名称——数量）",align:"center",width:"350"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return e._l(s.goods_info,(function(t){return r("div",{key:t.id,staticClass:"goodsInfoContainer"},[r("div",[r("el-carousel",{staticStyle:{width:"120px",margin:"0 auto"},attrs:{"indicator-position":"outside",arrow:"never",height:"120px"}},e._l(t.goods_img,(function(t,s){return r("el-carousel-item",{key:s},[r("img",{staticStyle:{width:"120px",height:"120px"},attrs:{src:""+e.srcUrl+t}})])})),1)],1),r("div",{staticClass:"goodsInfoCSS"},[e._v(" "+e._s(t.goods_name)+" ")]),r("div",{staticClass:"goodsInfoCSS"},[e._v("x"+e._s(t.number))])])}))}}])}),r("el-table-column",{attrs:{prop:"addressInfo.consignee",label:"收货人",align:"center",width:"145"}}),r("el-table-column",{attrs:{prop:"total",label:"金额(元)",align:"center",width:"90"}}),r("el-table-column",{attrs:{label:"商品状态",prop:"status",align:"center",width:"90"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[r("span",[e._v(e._s(e.orderStatus(s)))])]}}])}),r("el-table-column",{attrs:{prop:"order_remark",label:"订单备注",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[r("span",[e._v(e._s(null==s.order_remark||""==s.order_remark?"无":""+s.order_remark))])]}}])}),r("el-table-column",{attrs:{label:"设置",align:"center",width:"275"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[r("el-button",{attrs:{icon:"el-icon-edit",type:"primary",plain:"",disabled:s.status>=2},on:{click:function(t){return e.updateOrderStatus(s)}}},[e._v("修改订单状态")]),r("el-button",{attrs:{type:"danger",icon:"el-icon-delete"},on:{click:function(t){return e.deleteOrder(s)}}},[e._v("删除")])]}}])})],1),r("el-dialog",{attrs:{title:"修改订单状态",visible:e.dialogFormVisible,width:"600px","before-close":e.closeDialog},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[r("el-descriptions",{attrs:{border:"",column:2}},[r("el-descriptions-item",{attrs:{label:"用户名称"}},[e._v(e._s(e.orderInfo.name))]),r("el-descriptions-item",{attrs:{label:"订单号"}},[e._v(e._s(e.orderInfo.order_number))]),r("el-descriptions-item",{attrs:{label:"收货人"}},[e._v(e._s(e.orderInfo.consignee))]),r("el-descriptions-item",{attrs:{label:"金额(元)"}},[e._v(e._s(e.orderInfo.total))]),r("el-descriptions-item",{attrs:{label:"订单状态"}},[e._v(e._s(e.orderStatus(this.orderInfo)))]),r("el-descriptions-item",{attrs:{label:"订单备注"}},[e._v(e._s(e.orderInfo.order_remark))])],1),r("div",{staticClass:"radio"},[r("span",[e._v("修改到")]),r("el-radio",{attrs:{label:"2",border:""},model:{value:e.orderInfo.newStatus,callback:function(t){e.$set(e.orderInfo,"newStatus",t)},expression:"orderInfo.newStatus"}},[e._v("已发货")]),r("el-radio",{attrs:{label:"3",border:""},model:{value:e.orderInfo.newStatus,callback:function(t){e.$set(e.orderInfo,"newStatus",t)},expression:"orderInfo.newStatus"}},[e._v("已签收")]),r("el-radio",{attrs:{label:"4",border:""},model:{value:e.orderInfo.newStatus,callback:function(t){e.$set(e.orderInfo,"newStatus",t)},expression:"orderInfo.newStatus"}},[e._v("取消")])],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:e.closeDialog}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.updateOrder}},[e._v("确 定")])],1)],1),r("div",{staticClass:"pagination"},[r("el-pagination",{attrs:{"current-page":e.pageNum,"pager-count":5,"page-sizes":[3,5,7],"page-size":e.pageSize,layout:" prev, pager,  next, sizes,jumper,->,total",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.getOrderList}})],1)],1)},a=[],n=r("5530"),o=r("b85c"),i=r("c7eb"),c=r("1da1"),l=(r("b0c0"),r("2f62")),u={name:"Order",data:function(){return{user_id:0,pageNum:1,pageSize:5,dialogFormVisible:!1,searchObj:{order_number:"",status:null},tempSearchObj:{order_number:"",status:null},multipleSelection:[],statusList:[{status:0,statusName:"未支付"},{status:1,statusName:"已支付"},{status:2,statusName:"已发货"},{status:3,statusName:"已签收"},{status:4,statusName:"取消"}],orderInfo:{id:null,name:"",order_number:"",consignee:"",total:"",status:null,order_remark:"",newStatus:null,goods_info:[]}}},methods:{getOrderList:function(){var e=arguments,t=this;return Object(c["a"])(Object(i["a"])().mark((function r(){var s,a,n,o,c,l,u,d;return Object(i["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return s=e.length>0&&void 0!==e[0]?e[0]:1,t.pageNum=s,a=t.pageNum,n=t.pageSize,o=t.user_id,c=t.tempSearchObj,l=c.order_number,u=c.status,d={pageSize:n,pageNum:a},0!=o&&Object.assign(d,{user_id:o}),l&&Object.assign(d,{order_number:l}),null!==u&&Object.assign(d,{status:u}),r.prev=8,r.next=11,t.$store.dispatch("order/getOrderList",d);case 11:t.$message({type:"success",message:"获取订单列表成功"}),r.next=17;break;case 14:r.prev=14,r.t0=r["catch"](8),t.$message({type:"error",message:r.t0});case 17:case"end":return r.stop()}}),r,null,[[8,14]])})))()},findOrder:function(){var e=this.searchObj,t=e.order_number,r=e.status;this.tempSearchObj={order_number:t,status:r},this.getOrderList()},resetSearch:function(){this.searchObj={order_number:"",status:null},this.tempSearchObj={order_number:"",status:null},this.getOrderList()},deleteSelected:function(){var e=this;return Object(c["a"])(Object(i["a"])().mark((function t(){var r,s,a,n;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=[],s=Object(o["a"])(e.multipleSelection);try{for(s.s();!(a=s.n()).done;)n=a.value,r.push(n.id)}catch(l){s.e(l)}finally{s.f()}e.$confirm("确定删除这 ".concat(e.multipleSelection.length," 条订单吗?"),"提示",{type:"warning"}).then(Object(c["a"])(Object(i["a"])().mark((function t(){return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("order/deleteOrder",{ids:r});case 2:return t.next=4,e.getOrderList(e.orderList.length===e.multipleSelection.length?e.pageNum-1:e.pageNum);case 4:e.$message({type:"success",message:"删除订单成功"});case 5:case"end":return t.stop()}}),t)})))).catch((function(t){"cancel"==t?e.$message.info("已取消删除"):e.$message({type:"error",message:t})}));case 4:case"end":return t.stop()}}),t)})))()},handleSelectionChange:function(e){this.multipleSelection=e},handleSizeChange:function(e){this.pageSize=e,this.getOrderList()},orderStatus:function(e){switch(e.status){case 0:return"未支付";case 1:return"已支付";case 2:return"已发货";case 3:return"已签收";case 4:return"取消"}},closeDialog:function(){this.dialogFormVisible=!1,this.orderInfo.id=null,this.orderInfo.name="",this.orderInfo.order_number="",this.orderInfo.consignee="",this.orderInfo.total="",this.orderInfo.status=null,this.orderInfo.newStatus=null,this.orderInfo.order_remark="",this.orderInfo.goods_info=[],this.$message({type:"info",message:"已取消"})},updateGoods:function(e){var t=this;return Object(c["a"])(Object(i["a"])().mark((function r(){var s,a,n,c,l;return Object(i["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:s=Object(o["a"])(e),r.prev=1,s.s();case 3:if((a=s.n()).done){r.next=18;break}return n=a.value,c=0,c=n.goods_num+1*n.number,l={id:n.id,goods_num:c},r.prev=8,r.next=11,t.$store.dispatch("goods/updateGoods",l);case 11:r.next=16;break;case 13:r.prev=13,r.t0=r["catch"](8),t.$message({type:"error",message:r.t0});case 16:r.next=3;break;case 18:r.next=23;break;case 20:r.prev=20,r.t1=r["catch"](1),s.e(r.t1);case 23:return r.prev=23,s.f(),r.finish(23);case 26:case"end":return r.stop()}}),r,null,[[1,20,23,26],[8,13]])})))()},updateOrderStatus:function(e){this.dialogFormVisible=!0,this.orderInfo.id=e.id,this.orderInfo.name=e.userInfo.name,this.orderInfo.order_number=e.order_number,this.orderInfo.consignee=e.addressInfo.consignee,this.orderInfo.total=e.total,this.orderInfo.status=e.status,this.orderInfo.newStatus="2",this.orderInfo.goods_info=e.goods_info,this.orderInfo.order_remark=null==e.order_remark||""==e.order_remark?"无":"".concat(e.order_remark)},updateOrder:function(){var e=this;return Object(c["a"])(Object(i["a"])().mark((function t(){var r;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0!=e.orderInfo.status){t.next=5;break}if(2!=e.orderInfo.newStatus&&3!=e.orderInfo.newStatus){t.next=5;break}return e.$message({type:"error",message:"用户尚未支付，不能发货或签收"}),e.dialogFormVisible=!1,t.abrupt("return");case 5:return t.prev=5,4==e.orderInfo.newStatus&&e.updateGoods(e.orderInfo.goods_info),r={status:1*e.orderInfo.newStatus},t.next=10,e.$store.dispatch("order/updateOrder",{id:e.orderInfo.id,data:r});case 10:e.getOrderList(e.pageNum),e.$message({type:"success",message:"修改订单状态成功"}),t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](5),e.$message({type:"error",message:t.t0});case 17:e.dialogFormVisible=!1;case 18:case"end":return t.stop()}}),t,null,[[5,14]])})))()},deleteOrder:function(e){var t=this;return Object(c["a"])(Object(i["a"])().mark((function r(){return Object(i["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$confirm("确定删除订单号为 '".concat(e.order_number,"' 这个订单吗?"),"提示",{type:"warning"}).then(Object(c["a"])(Object(i["a"])().mark((function r(){return Object(i["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$store.dispatch("order/deleteOrder",{ids:[e.id]});case 2:t.getOrderList(1===t.orderList.length?t.pageNum-1:t.pageNum),t.$message({type:"success",message:"删除订单成功"});case 4:case"end":return r.stop()}}),r)})))).catch((function(e){"cancel"==e?t.$message.info("已取消删除"):t.$message({type:"error",message:e})}));case 1:case"end":return r.stop()}}),r)})))()}},mounted:function(){this.$route.query.user_id?(this.user_id=1*this.$route.query.user_id,this.getOrderList()):this.getOrderList()},computed:Object(n["a"])({},Object(l["c"])({orderList:function(e){return e.order.orderList},total:function(e){return e.order.total}}))},d=u,p=(r("0e3a"),r("e4df"),r("2877")),m=Object(p["a"])(d,s,a,!1,null,"22a90521",null);t["default"]=m.exports},a097:function(e,t,r){},a5cb:function(e,t,r){},e4df:function(e,t,r){"use strict";r("a097")}}]);