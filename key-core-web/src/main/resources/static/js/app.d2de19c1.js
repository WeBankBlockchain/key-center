(function(e){function t(t){for(var n,l,i=t[0],s=t[1],c=t[2],u=0,d=[];u<i.length;u++)l=i[u],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&d.push(r[l][0]),r[l]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,i=1;i<a.length;i++){var s=a[i];0!==r[s]&&(n=!1)}n&&(o.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},r={app:0},o=[];function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var p=s;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"49f4":function(e,t,a){e.exports={theme:"#1890ff"}},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("a026"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("KeyTool")],1)},o=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-collapse",{staticStyle:{"margin-left":"20%","margin-right":"20%"},model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[a("el-collapse-item",{attrs:{title:"密钥生成",name:"1"}},[a("el-card",{staticClass:"box-card"},[a("create-new")],1)],1),a("el-collapse-item",{attrs:{id:"transform",title:"格式转换",name:"2"}},[a("el-card",[a("transform",{ref:"transform"})],1)],1),a("el-collapse-item",{attrs:{title:"私钥转公钥与地址",name:"4"}},[a("el-card",[a("detail-key")],1)],1),a("el-collapse-item",{attrs:{title:"助记词生成",name:"5"}},[a("el-card",[a("mnemonic")],1)],1)],1)],1)},i=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"head-container"},[a("p",{staticClass:"param",staticStyle:{"margin-left":"10px"}},[a("span",{staticStyle:{"margin-left":"10px"},domProps:{textContent:e._s("曲线类型选择：")}}),a("el-radio",{attrs:{label:"secp256k1"},model:{value:e.eccType,callback:function(t){e.eccType=t},expression:"eccType"}},[e._v("secp256k1")]),a("el-radio",{attrs:{label:"sm2p256v1"},model:{value:e.eccType,callback:function(t){e.eccType=t},expression:"eccType"}},[e._v("sm2p256v1")]),a("br"),a("br"),a("span",{staticStyle:{"margin-left":"10px"},domProps:{textContent:e._s("输出格式选择：")}}),a("el-radio",{attrs:{label:"plain"},on:{click:function(t){e.generated=!1}},model:{value:e.encType,callback:function(t){e.encType=t},expression:"encType"}},[e._v("明文")]),a("el-radio",{attrs:{label:"pem"},on:{click:function(t){e.generated=!1}},model:{value:e.encType,callback:function(t){e.encType=t},expression:"encType"}},[e._v("pem")]),a("el-radio",{attrs:{label:"json"},on:{click:function(t){e.generated=!1}},model:{value:e.encType,callback:function(t){e.encType=t},expression:"encType"}},[e._v("keystore")]),a("el-radio",{attrs:{label:"p12"},on:{click:function(t){e.generated=!1}},model:{value:e.encType,callback:function(t){e.encType=t},expression:"encType"}},[e._v("p12")])],1),a("p",{staticClass:"input"},[a("el-form",{ref:"dataForm",staticStyle:{"margin-left":"10px"},attrs:{model:e.dataForm,rule:e.dataRule,"label-width":"80px"}},["json"===e.encType||"p12"===e.encType?a("el-form-item",{attrs:{label:"加密密码",prop:"password"}},[a("el-input",{model:{value:e.dataForm.password,callback:function(t){e.$set(e.dataForm,"password",t)},expression:"dataForm.password"}})],1):e._e()],1)],1),a("p",{staticClass:"operations",staticStyle:{"margin-left":"10px"}},[e.generated?e._e():a("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-plus"},on:{click:function(t){return e.generateHandle()}}},[e._v("生成")]),e.generated?a("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-refresh"},on:{click:function(t){return e.generateHandle()}}},[e._v("重新生成")]):e._e(),e.resultVisible?a("el-button",{attrs:{type:"plain",size:"mini",icon:"el-icon-arrow-up"},on:{click:function(t){return e.setVisibleHandle(!1)}}},[e._v("收起结果")]):e._e(),e.resultVisible?e._e():a("el-button",{attrs:{type:"plain",size:"mini",icon:"el-icon-arrow-down"},on:{click:function(t){return e.setVisibleHandle(!0)}}},[e._v("展开结果")])],1),e.resultVisible?a("p",{staticClass:"result",staticStyle:{"margin-left":"10px"}},[a("el-table",{ref:"table",attrs:{data:e.result,size:"small"}},[a("el-table-column",{attrs:{label:"类型",prop:"category",width:"100px"}}),a("el-table-column",{attrs:{label:"内容",prop:"content"}})],1)],1):e._e()])},c=[],p=(a("99af"),a("c975"),a("d3b7"),a("25f0"),a("bc3a")),u=a.n(p),d=a("5c96"),m=a.n(d),f=u.a.create({baseURL:"/"});f.interceptors.response.use((function(e){var t=e.status;return t<200||t>300?(d["Notification"].error({title:e.message}),Promise.reject("error")):e.data}),(function(e){try{e.response.data.status}catch(t){if(-1!==e.toString().indexOf("Error: timeout"))return d["Notification"].error({title:"网络请求超时",duration:5e3}),Promise.reject(e)}return d["Notification"].error({title:"接口请求失败",duration:5e3}),Promise.reject(e)}));var y=f;function b(e){return y({url:"api/keygen/random",method:"get",params:{curve:e}})}function v(e,t,a){var n=new FormData;return n.append("file",e.raw),y({url:"api/keygen/transform",method:"post",responseType:t,headers:{"Content-Type":"multipart/form-data"},params:{password:a.password,tgtFormat:a.tgtFormat},data:n})}function g(){return y({url:"api/keygen/mnemonic",method:"get"})}function h(e,t,a){return y({url:"api/keygen/mnemonicExport",method:"get",params:{mnemonic:e,password:t,eccType:a}})}function x(e){var t="/",a="".concat(t,"api/keygen/encrypt?privKey=").concat(e.privKey,"&eccType=").concat(e.eccType,"&encType=").concat(e.encType,"&password=").concat(e.password);location.href=a}function T(e,t){var a=new FormData;return a.append("file",e.raw),console.log(e),y({url:"api/keygen/decrypt",method:"post",headers:{"Content-Type":"multipart/form-data"},params:{password:t},data:a})}function _(e){return y({url:"api/keygen/detail",method:"get",params:e})}var w={random:b,transform:v,mnemonic:g,mnemonicExport:h,encrypt:x,decrypt:T,detail:_},k={data:function(){return{eccType:"secp256k1",encType:"plain",dataForm:{password:""},dataRule:{password:[{required:!0,message:"不能为空",trigger:"blur"}]},result:[],generated:!1,resultVisible:!1}},methods:{init:function(){this.resetHandle()},generateHandle:function(){var e=this;w.random(this.eccType).then((function(t){console.log(t.code),t&&0===t.code?(e.result=[{category:"私钥",content:t.data.privateKeyHex},{category:"公钥",content:t.data.pubKeyHex},{category:"地址",content:t.data.address}],"plain"!==e.encType&&w.encrypt({privKey:t.data.privateKeyHex,password:e.dataForm.password,eccType:e.eccType,encType:e.encType}),e.generated=!0,e.resultVisible=!0):e.$message.error(t.msg)}))},setVisibleHandle:function(e){this.resultVisible=e}}},M=k,F=(a("b4b5"),a("2877")),K=Object(F["a"])(M,s,c,!1,null,null,null),P=K.exports,D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"head-container",staticStyle:{"margin-left":"10px"}},[a("p",{staticClass:"operations"},[e.generated?e._e():a("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-plus"},on:{click:function(t){return e.generateHandle()}}},[e._v("生成")]),e.generated?a("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-refresh"},on:{click:function(t){return e.generateHandle()}}},[e._v("重新生成")]):e._e()],1),e.generated?a("p",{staticClass:"result"},[a("el-table",{ref:"table",attrs:{data:e.data,size:"small"}},[a("el-table-column",{attrs:{label:"助记词",prop:"mnemonic"}})],1)],1):e._e(),e.generated?a("p",{staticClass:"export"},[a("el-form",{ref:"export",attrs:{model:e.exportData,rules:e.exportRule,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"口令",prop:"password"}},[a("el-input",{attrs:{placeholder:"导出口令"},model:{value:e.exportData.password,callback:function(t){e.$set(e.exportData,"password",t)},expression:"exportData.password"}})],1)],1),a("span",{staticStyle:{"margin-left":"10px"},domProps:{textContent:e._s("曲线类型选择：")}}),a("el-radio",{attrs:{label:"secp256k1"},model:{value:e.exportData.eccType,callback:function(t){e.$set(e.exportData,"eccType",t)},expression:"exportData.eccType"}},[e._v("secp256k1")]),a("el-radio",{attrs:{label:"sm2p256v1"},model:{value:e.exportData.eccType,callback:function(t){e.$set(e.exportData,"eccType",t)},expression:"exportData.eccType"}},[e._v("sm2p256v1")]),a("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-download"},on:{click:function(t){return e.onExport()}}},[e._v("导出")])],1):e._e(),e.exportView?a("p",{staticClass:"exportResult"},[a("el-table",{ref:"keyPair",attrs:{data:e.keyPair,size:"small"}},[a("el-table-column",{attrs:{label:"类型",prop:"category",width:"100px"}}),a("el-table-column",{attrs:{label:"内容",prop:"content"}})],1)],1):e._e()])},C=[],j={data:function(){return{generated:!1,data:[],mnemonic:"",exportView:!1,exportData:{password:"",eccType:"secp256k1"},exportRule:{password:[{required:!0,message:"不能为空",trigger:"blur"}]},encType:"pem",keyPair:[]}},methods:{generateHandle:function(){var e=this;this.exportView=!1,this.generated=!1,w.mnemonic().then((function(t){t&&0===t.code?(e.data=[{mnemonic:t.data}],e.mnemonic=t.data,e.generated=!0):e.$message.error(t.msg)}))},onExport:function(){var e=this;this.exportView=!0,w.mnemonicExport(this.mnemonic,this.exportData.password,this.exportData.eccType).then((function(t){console.log(t.code),t&&0===t.code?(e.keyPair=[{category:"私钥",content:t.data.privateKeyHex},{category:"公钥",content:t.data.pubKeyHex},{category:"地址",content:t.data.address}],w.encrypt({privKey:t.data.privateKeyHex,password:e.exportData.password,eccType:e.exportData.eccType,encType:e.encType})):e.$message.error(t.msg)}))}}},E=j,$=Object(F["a"])(E,D,C,!1,null,null,null),H=$.exports,O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"head-container"},[a("p",{staticClass:"input"},[a("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"私钥明文",prop:"privateKey"}},[a("el-input",{attrs:{placeholder:""},model:{value:e.dataForm.privateKey,callback:function(t){e.$set(e.dataForm,"privateKey",t)},expression:"dataForm.privateKey"}})],1)],1)],1),a("p",{staticClass:"options",staticStyle:{"margin-left":"10px"}},[a("el-radio",{attrs:{label:"secp256k1"},model:{value:e.eccType,callback:function(t){e.eccType=t},expression:"eccType"}},[e._v("secp256k1")]),a("el-radio",{attrs:{label:"sm2p256v1"},model:{value:e.eccType,callback:function(t){e.eccType=t},expression:"eccType"}},[e._v("sm2p256v1")])],1),a("p",{staticClass:"confirm",staticStyle:{"margin-left":"10px"}},[a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-view"},on:{click:function(t){return e.detailHandle()}}},[e._v("查看")]),e.resultVisible?a("el-button",{attrs:{type:"plain",size:"mini",icon:"el-icon-circle-close"},on:{click:function(t){return e.clear()}}},[e._v("清除结果")]):e._e()],1)]),a("p",{staticClass:"result",staticStyle:{"margin-left":"10px"}},[e.resultVisible?a("el-table",{ref:"table",attrs:{data:e.result,size:"small"}},[a("el-table-column",{attrs:{label:"类型",prop:"category",width:"100px"}}),a("el-table-column",{attrs:{label:"内容",prop:"content"}})],1):e._e()],1)])},S=[],V={data:function(){return{eccType:"secp256k1",dataForm:{privateKey:""},dataRule:{privateKey:[{required:!0,message:"不能为空",trigger:"blur"}]},result:[],resultVisible:!1}},methods:{detailHandle:function(){var e=this;w.detail({privKey:this.dataForm.privateKey,eccType:this.eccType}).then((function(t){t&&0===t.code?(e.result=[{category:"公钥",content:t.data.pubKeyHex},{category:"地址",content:t.data.address}],e.resultVisible=!0):e.$message.error(t.msg)}))},clear:function(){this.resultVisible=!1,this.dataForm.privateKey="",this.result=[]}}},z=V,R=Object(F["a"])(z,O,S,!1,null,null,null),N=R.exports,q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"input"},[a("span",{domProps:{textContent:e._s("输入模式选择：")}}),a("el-radio-group",{on:{change:e.inputChange},model:{value:e.inputMode,callback:function(t){e.inputMode=t},expression:"inputMode"}},[a("el-radio",{attrs:{label:"plain"},model:{value:e.inputMode,callback:function(t){e.inputMode=t},expression:"inputMode"}},[e._v("明文")]),a("el-radio",{attrs:{label:"file"},model:{value:e.inputMode,callback:function(t){e.inputMode=t},expression:"inputMode"}},[e._v("文件")])],1),"plain"===e.inputMode?a("p",[a("el-form",{ref:"inputPlainForm",attrs:{model:e.inputPlainData,rules:e.inputPlainRule,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"私钥明文",prop:"privateKey"}},[a("el-input",{attrs:{placeholder:"16进制"},model:{value:e.inputPlainData.privateKey,callback:function(t){e.$set(e.inputPlainData,"privateKey",t)},expression:"inputPlainData.privateKey"}})],1)],1),a("span",{domProps:{textContent:e._s("曲线类型选择：")}}),a("el-radio",{attrs:{label:"secp256k1"},model:{value:e.eccType,callback:function(t){e.eccType=t},expression:"eccType"}},[e._v("secp256k1")]),a("el-radio",{attrs:{label:"sm2p256v1"},model:{value:e.eccType,callback:function(t){e.eccType=t},expression:"eccType"}},[e._v("sm2p256v1")])],1):e._e(),"file"===e.inputMode?a("el-upload",{ref:"inputFileUpload",attrs:{limit:1,action:e.inputFile.url,"file-list":e.inputFile.fileList,"auto-upload":!1,"on-change":e.changeHandle,"on-exceed":e.handleExceed,"on-success":e.successHandle}},[a("br"),a("el-button",{attrs:{size:"mini",icon:"el-icon-upload",type:"primary"}},[e._v("选取文件")]),a("br"),a("br")],1):e._e(),"plain"===e.inputMode||""!==e.inputFile.fileExt?a("p",[a("span",{domProps:{textContent:e._s("输出格式选择：")}}),"plain"!==e.inputMode?a("el-radio",{attrs:{label:"plain"},model:{value:e.outputMode,callback:function(t){e.outputMode=t},expression:"outputMode"}},[e._v("明文")]):e._e(),"plain"===e.inputMode||"pem"!==e.inputFile.fileExt?a("el-radio",{attrs:{label:"pem"},model:{value:e.outputMode,callback:function(t){e.outputMode=t},expression:"outputMode"}},[e._v("pem")]):e._e(),"plain"===e.inputMode||"p12"!==e.inputFile.fileExt?a("el-radio",{attrs:{label:"p12"},model:{value:e.outputMode,callback:function(t){e.outputMode=t},expression:"outputMode"}},[e._v("p12")]):e._e(),"plain"===e.inputMode||"json"!==e.inputFile.fileExt&&"keystore"!==e.inputFile.fileExt?a("el-radio",{attrs:{label:"json"},model:{value:e.outputMode,callback:function(t){e.outputMode=t},expression:"outputMode"}},[e._v("keystore")]):e._e()],1):e._e(),e.needPassword?a("el-form",{ref:"transform",attrs:{model:e.transformData,rules:e.transformRule,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"转换密码",prop:"password"}},[a("el-input",{attrs:{placeholder:"输入密码"},model:{value:e.transformData.password,callback:function(t){e.$set(e.transformData,"password",t)},expression:"transformData.password"}})],1)],1):e._e()],1),a("div",{staticClass:"transform"},[a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-download"},on:{click:function(t){return e.onTransform()}}},[e._v("转换")])],1)]),a("div",{staticClass:"output"},[e.generated?a("el-table",{ref:"table",attrs:{data:e.outputPlainResult,size:"small"}},[a("el-table-column",{attrs:{label:"私钥",prop:"privateKey"}})],1):e._e()],1)])},L=[],U=(a("b0c0"),a("ac1f"),a("1276"),{data:function(){return{inputMode:"plain",outputMode:"pem",eccType:"secp256k1",inputPlainData:{privateKey:"",password:""},inputPlainRule:{privateKey:[{required:!0,message:"不能为空",trigger:"blur"}]},inputFile:{url:"",file:"",fileList:[],fileExt:""},outputPlainResult:[],transformData:{password:""},transformRule:{password:[{required:!1,message:"不能为空",trigger:"blur"}]},generated:!1,inited:!1}},computed:{needPassword:function(){return"p12"===this.outputMode||"json"===this.outputMode||"p12"===this.inputFile.fileExt||"json"===this.inputFile.fileExt||"keystore"===this.inputFile.fileExt}},methods:{inputChange:function(){"plain"===this.inputMode?this.outputMode="pem":this.outputMode="plain"},changeHandle:function(e){this.file=e,this.inputFile.fileExt=e.name.split(".").pop()},handleExceed:function(){this.$message.warning("最多选择一个文件!")},successHandle:function(e,t,a){this.file=t,this.fileList=a,e&&0===e.code||this.$message.error(e.msg)},onTransform:function(){var e=this;"plain"===this.inputMode?""==this.inputPlainData.privateKey?this.$message.error("私钥不能为空"):w.encrypt({privKey:this.inputPlainData.privateKey,password:this.transformData.password,eccType:this.eccType,encType:this.outputMode}):"plain"===this.outputMode?w.decrypt(this.$refs.inputFileUpload.uploadFiles[0],this.transformData.password).then((function(t){t&&0===t.code?(e.outputPlainResult=[{privateKey:t.data}],e.generated=!0):e.$message.error(t.msg)})):w.decrypt(this.$refs.inputFileUpload.uploadFiles[0],this.transformData.password).then((function(t){t&&0===t.code?w.encrypt({privKey:t.data,password:e.transformData.password,eccType:e.eccType,encType:e.outputMode}):e.$message.error(t.msg)}))}}}),J=U,A=Object(F["a"])(J,q,L,!1,null,null,null),B=A.exports,G={components:{CreateNew:P,Mnemonic:H,DetailKey:N,Transform:B},data:function(){return{activeNames:["1"]}},methods:{}},I=G,Q=Object(F["a"])(I,l,i,!1,null,null,null),W=Q.exports,X={name:"App",components:{KeyTool:W},data:function(){}},Y=X,Z=(a("034f"),Object(F["a"])(Y,r,o,!1,null,null,null)),ee=Z.exports;a("49f4");n["default"].use(m.a,{size:"small"}),new n["default"]({el:"#app",render:function(e){return e(ee)}})},"670a":function(e,t,a){},"85ec":function(e,t,a){},b4b5:function(e,t,a){"use strict";var n=a("670a"),r=a.n(n);r.a}});