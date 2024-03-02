"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[724],{4724:function(e,t,a){a.r(t),a.d(t,{default:function(){return n}});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"main-content"},[t("div",{staticStyle:{width:"70%","background-color":"white",margin:"30px auto","border-radius":"20px"}},[t("div",{staticStyle:{"padding-bottom":"10px"}},[t("div",{staticStyle:{display:"flex","font-size":"18px",color:"#000000FF","line-height":"80px","border-bottom":"#cccccc 1px solid"}},[t("div",{staticStyle:{"margin-left":"20px",flex:"1"}},[e._v("全部商品（"+e._s(e.goodsData.length)+"件）")]),t("div",{staticStyle:{flex:"2","text-align":"right"}},[t("el-select",{staticStyle:{width:"70%"},attrs:{placeholder:"请选择收货地址"},model:{value:e.addressId,callback:function(t){e.addressId=t},expression:"addressId"}},e._l(e.addressData,(function(e){return t("el-option",{attrs:{label:e.username+" - "+e.useraddress+" - "+e.phone,value:e.id}})})),1)],1),t("div",{staticStyle:{flex:"1","font-size":"16px","text-align":"right","padding-right":"20px"}},[e._v(" 已选商品 ￥ "+e._s(e.totalPrice)+" "),t("el-button",{attrs:{type:"danger",round:""},on:{click:e.pay}},[e._v("下单")])],1)]),t("div",{staticStyle:{margin:"20px 0",padding:"0 50px"}},[t("div",{staticClass:"table"},[t("el-table",{attrs:{data:e.goodsData,strip:""},on:{"selection-change":e.handleSelectionChange}},[t("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),t("el-table-column",{attrs:{label:"商品图片",width:"120px"},scopedSlots:e._u([{key:"default",fn:function(a){return[a.row.goodsImg?t("el-image",{staticStyle:{width:"80px",height:"60px","border-radius":"3px"},attrs:{src:a.row.goodsImg,"preview-src-list":[a.row.goodsImg]}}):e._e()]}}])}),t("el-table-column",{attrs:{prop:"goodsName",label:"商品名称",width:"240px"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("a",{attrs:{href:"/front/detail?id="+a.row.goodsId}},[e._v(e._s(a.row.goodsName))])]}}])}),t("el-table-column",{attrs:{prop:"businessName",label:"店铺名称"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("a",{attrs:{href:"/front/business?id="+a.row.businessId}},[e._v(e._s(a.row.businessName))])]}}])}),t("el-table-column",{attrs:{prop:"goodsPrice",label:"商品价格"}}),t("el-table-column",{attrs:{prop:"num",label:"选择数量"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-input-number",{staticStyle:{width:"100px"},attrs:{min:1},on:{change:function(t){return e.handleChange(a.row)}},model:{value:a.row.num,callback:function(t){e.$set(a.row,"num",t)},expression:"scope.row.num"}})]}}])}),t("el-table-column",{attrs:{label:"操作",align:"center",width:"180"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{size:"mini",type:"danger",plain:""},on:{click:function(t){return e.del(a.row.id)}}},[e._v("移除购物车")])]}}])})],1),t("div",{staticClass:"pagination",staticStyle:{"margin-top":"20px"}},[t("el-pagination",{attrs:{background:"","current-page":e.pageNum,"page-sizes":[5,10,20],"page-size":e.pageSize,layout:"total, prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentChange}})],1)],1)])])])])},o=[],r={data(){return{user:JSON.parse(localStorage.getItem("xm-user")||"{}"),goodsData:[],pageNum:1,pageSize:10,totalPrice:0,total:0,addressId:null,addressData:[],selectedData:[]}},mounted(){this.loadGoods(1),this.loadAddress()},methods:{loadAddress(){this.$request.get("/address/selectAll").then((e=>{"200"===e.code?this.addressData=e.data:this.$message.error(e.msg)}))},loadGoods(e){e&&(this.pageNum=e),this.$request.get("/cart/selectPage",{params:{pageNum:this.pageNum,pageSize:this.pageSize}}).then((e=>{"200"===e.code?(this.goodsData=e.data?.list,this.total=e.data?.total):this.$message.error(e.msg)}))},navTo(e){location.href=e},del(e){this.$request.delete("/cart/delete/"+e).then((e=>{"200"===e.code?(this.$message.success("移除成功"),this.loadGoods(1)):this.$message.error(e.msg)}))},handleCurrentChange(e){this.loadGoods(e)},handleSelectionChange(e){this.totalPrice=0,this.selectedData=e,this.selectedData.forEach((e=>{this.totalPrice+=e.goodsPrice*e.num}))},handleChange(e){this.totalPrice=0,this.selectedData.forEach((e=>{this.totalPrice+=e.goodsPrice*e.num}))},pay(){if(!this.addressId)return void this.$message.warning("请选择收货地址");if(!this.selectedData||0===this.selectedData.length)return void this.$message.warning("请选择商品");let e={userId:this.user.id,addressId:this.addressId,status:"待发货",cartData:this.selectedData};this.$request.post("/orders/add",e).then((e=>{"200"===e.code?(this.$message.success("操作成功"),this.loadGoods(1)):this.$message.error(e.msg)}))}}},l=r,i=a(1656),d=(0,i.A)(l,s,o,!1,null,null,null),n=d.exports}}]);
//# sourceMappingURL=724.8fe41aa9.js.map