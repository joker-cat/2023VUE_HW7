import{bH as b,bM as v,aE as i,u as n,v as t,bz as u,bo as h,bk as $,t as k,F as m,aP as _,H as P,b3 as c,aI as U,aF as w,bL as g,ao as C,I as f,aR as y}from"./index-ofjNOyMn.js";const E={data(){return{main:"",additional:"",addModal:null,addProduct:{data:{title:"",category:"",origin_price:"",price:"",unit:"個",description:"",content:"",is_enabled:0,imageUrl:"",imagesUrl:[]}}}},methods:{isImage(d){return new Promise(e=>{const l=new Image;l.src=d,l.onload=function(){e(!0)},l.onerror=function(){e(!1)}})},async mainImage(){this.main.trim()!==""&&await this.isImage(this.main)&&(this.mydata.imageUrl=this.main,this.main="")},additionalImage(){this.mydata.imagesUrl.length===5||this.additional.trim()===""||this.isImage(this.mydata.imagesUrl)&&(this.mydata.imagesUrl.push(this.additional),this.additional="")},postProduct(){this.$axios.post("/admin/product",{...this.addProduct}).then(d=>{d.data.success&&(this.reset(),this.$emit("reloadRender"),alert("已新增"))}).catch(d=>{console.log(d)})},openModal(){this.addModal.show()},closeModal(){this.addModal.hide()},reset(){this.addProduct.data={title:"",category:"",origin_price:"",price:"",unit:"個",description:"",content:"",is_enabled:0,imageUrl:"",imagesUrl:[]}}},computed:{mydata(){return this.addProduct.data},isDisabled(){return this.mydata.title===""||this.mydata.category===""||this.mydata.origin_price===""||this.mydata.price===""||this.mydata.description===""||this.mydata.content===""||this.mydata.imageUrl===""||this.mydata.imagesUrl.length===0}},mounted(){this.addModal=new v.Modal(this.$refs.addModal)}},A={ref:"addModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},N={class:"modal-dialog modal-md"},T={class:"modal-content border-0"},j=t("div",{class:"modal-header bg-dark text-white"},[t("h5",{id:"productModalLabel",class:"modal-title"},[t("span",null,"新增產品")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),L={class:"modal-body"},O={class:"mb-3"},S=t("label",{for:"addProductTitle",class:"form-label col-3"},"商品名稱",-1),B={class:"mb-3"},z=t("label",{for:"addProductCategory",class:"form-label col-3"},"系列",-1),F={class:"mb-3"},H=t("label",{for:"addProductOriginPrice",class:"form-label col-3"},"原價",-1),q={class:"mb-3"},G=t("label",{for:"addProductPrice",class:"form-label col-3"},"售價",-1),J={class:"mb-3"},K=t("label",{for:"addProductDescription",class:"form-label col-3"},"商品描述",-1),Q={class:"mb-3"},W=t("label",{for:"addProductContent",class:"form-label col-3"},"商品內容",-1),X={class:"mb-3"},Y=t("label",{for:"addProductIs_enabled",class:"form-label col-3"},"是否啟用",-1),Z={class:"mb-3"},tt={class:"input-group mb-3"},et={class:"input-group mb-3"},ot={class:"mb-2"},st=t("label",{for:"imageUrl",class:"form-label"},"圖片展示(請新增圖片網址)",-1),dt=["src"],at=["src"],lt={class:"modal-footer"},it=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消",-1),nt=["disabled"];function ct(d,e,l,p,s,a){return i(),n("div",A,[t("div",N,[t("div",T,[j,t("div",L,[t("form",null,[t("div",O,[S,u(t("input",{type:"text",class:"form-label",id:"addProductTitle","onUpdate:modelValue":e[0]||(e[0]=o=>s.addProduct.data.title=o),placeholder:"joooker小丑"},null,512),[[h,s.addProduct.data.title]])]),t("div",B,[z,u(t("input",{type:"text",class:"form-label",id:"addProductCategory","onUpdate:modelValue":e[1]||(e[1]=o=>s.addProduct.data.category=o),placeholder:"搞怪系列"},null,512),[[h,s.addProduct.data.category]])]),t("div",F,[H,u(t("input",{type:"text",class:"form-label",id:"addProductOriginPrice","onUpdate:modelValue":e[2]||(e[2]=o=>s.addProduct.data.origin_price=o),placeholder:"原價"},null,512),[[h,s.addProduct.data.origin_price,void 0,{number:!0}]])]),t("div",q,[G,u(t("input",{type:"text",class:"form-label",id:"addProductPrice","onUpdate:modelValue":e[3]||(e[3]=o=>s.addProduct.data.price=o),placeholder:"售價"},null,512),[[h,s.addProduct.data.price,void 0,{number:!0}]])]),t("div",J,[K,u(t("input",{type:"text",class:"form-label",id:"addProductDescription","onUpdate:modelValue":e[4]||(e[4]=o=>s.addProduct.data.description=o),placeholder:"描述"},null,512),[[h,s.addProduct.data.description]])]),t("div",Q,[W,u(t("input",{type:"text",class:"form-label",id:"addProductContent","onUpdate:modelValue":e[5]||(e[5]=o=>s.addProduct.data.content=o),placeholder:"內容"},null,512),[[h,s.addProduct.data.content]])]),t("div",X,[Y,u(t("input",{type:"checkbox",class:"form-label",id:"addProductIs_enabled","onUpdate:modelValue":e[6]||(e[6]=o=>s.addProduct.data.is_enabled=o),"true-value":1,"false-value":0,placeholder:"內容"},null,512),[[$,s.addProduct.data.is_enabled]])]),t("div",Z,[t("div",null,[t("div",tt,[u(t("input",{type:"text",class:"form-control",placeholder:"新增主圖網址(限1個)","aria-label":"新增主圖網址(限1個)","aria-describedby":"button-addon1","onUpdate:modelValue":e[7]||(e[7]=o=>s.main=o)},null,512),[[h,s.main]]),t("button",{class:"btn btn-outline-secondary",type:"button",id:"button-addon1",onClick:e[8]||(e[8]=(...o)=>a.mainImage&&a.mainImage(...o))},"+")]),t("div",et,[u(t("input",{type:"text",class:"form-control",placeholder:"新增附圖網址(限5個)","aria-label":"新增附圖網址(限5個)","aria-describedby":"button-addon2","onUpdate:modelValue":e[9]||(e[9]=o=>s.additional=o)},null,512),[[h,s.additional]]),t("button",{class:"btn btn-outline-secondary",type:"button",id:"button-addon2",onClick:e[10]||(e[10]=(...o)=>a.additionalImage&&a.additionalImage(...o))},"+")])]),t("div",ot,[st,s.addProduct.data.imageUrl!==""?(i(),n("img",{key:0,class:"img-fluid",src:s.addProduct.data.imageUrl,alt:"圖片ERR"},null,8,dt)):k("",!0),(i(!0),n(m,null,_(s.addProduct.data.imagesUrl,o=>(i(),n("img",{key:o,src:o,alt:"圖片error",class:"images m-2",style:{width:"200px"}},null,8,at))),128))])])])]),t("div",lt,[it,t("button",{type:"button",class:"btn btn-primary",onClick:e[11]||(e[11]=(...o)=>a.postProduct&&a.postProduct(...o)),disabled:a.isDisabled},"新增產品",8,nt)])])])],512)}const rt=b(E,[["render",ct]]),ut={props:["choose"],data(){return{inputNull:[],editModal:null,warmObj:{title:"商品名稱",price:"售價",origin_price:"原價",category:"系列",description:"商品描述",content:"商品內容"},change:{data:{...this.choose}}}},created(){this.change={data:{...this.choose}}},watch:{choose(d){this.change={data:{...d}}}},computed:{trunBoolen(){return!!this.change.data.is_enabled}},methods:{checkEmptyValues(){for(const d in this.change.data)this.change.data[d]===""&&this.inputNull.push(this.warmObj[d])},putProducts(){this.checkEmptyValues(),this.inputNull.length===0?this.$axios.put(`/admin/product/${this.choose.id}`,this.change).then(d=>{d.data.success&&(this.hasCookie=d.data.success,this.$emit("reloadRender"),alert("修改成功"))}).catch(d=>{console.log(d)}):alert("請確實填寫 : "+this.inputNull.join(" , "))},openModal(){this.editModal.show()},closeModal(){this.editModal.hide()}},mounted(){this.editModal=new v.Modal(this.$refs.editModal)}},ht={ref:"editModal",class:"modal fade",tabindex:"-1","aria-labelledby":"putProductModalLabel","aria-hidden":"true"},mt={class:"modal-dialog"},_t={class:"modal-content border-0"},bt=t("div",{class:"modal-header bg-danger text-white"},[t("h5",{class:"modal-title"},[t("span",null,"編輯產品")])],-1),pt={class:"modal-body"},gt={class:"mb-3"},ft=t("label",{for:"addProductTitle",class:"form-label col-3"},"商品名稱",-1),yt={class:"mb-3"},Pt=t("label",{for:"addProductCategory",class:"form-label col-3"},"系列",-1),vt={class:"mb-3"},Mt=t("label",{for:"addProductOriginPrice",class:"form-label col-3"},"原價",-1),xt={class:"mb-3"},Ct=t("label",{for:"addProductPrice",class:"form-label col-3"},"售價",-1),$t={class:"mb-3"},kt=t("label",{for:"addProductDescription",class:"form-label col-3"},"商品描述",-1),Ut={class:"mb-3"},wt=t("label",{for:"addProductContent",class:"form-label col-3"},"商品內容",-1),It={class:"mb-3"},Vt=t("label",{for:"addProductIs_enabled",class:"form-label col-3"},"是否啟用",-1),Dt=["checked"],Rt={class:"mb-3"},Et={class:"mb-2 text-center"},At=t("p",null,"圖片展示",-1),Nt=["src"],Tt=["src"],jt={class:"modal-footer"},Lt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Ot(d,e,l,p,s,a){return i(),n("div",ht,[t("div",mt,[t("div",_t,[bt,t("div",pt,[t("form",null,[t("div",gt,[ft,u(t("input",{type:"text",class:"form-label",id:"addProductTitle","onUpdate:modelValue":e[0]||(e[0]=o=>s.change.data.title=o),placeholder:"joooker小丑"},null,512),[[h,s.change.data.title]])]),t("div",yt,[Pt,u(t("input",{type:"text",class:"form-label",id:"addProductCategory","onUpdate:modelValue":e[1]||(e[1]=o=>s.change.data.category=o),placeholder:"搞怪系列"},null,512),[[h,s.change.data.category]])]),t("div",vt,[Mt,u(t("input",{type:"text",class:"form-label",id:"addProductOriginPrice","onUpdate:modelValue":e[2]||(e[2]=o=>s.change.data.origin_price=o),placeholder:"原價"},null,512),[[h,s.change.data.origin_price,void 0,{number:!0}]])]),t("div",xt,[Ct,u(t("input",{type:"text",class:"form-label",id:"addProductPrice","onUpdate:modelValue":e[3]||(e[3]=o=>s.change.data.price=o),placeholder:"售價"},null,512),[[h,s.change.data.price,void 0,{number:!0}]])]),t("div",$t,[kt,u(t("input",{type:"text",class:"form-label",id:"addProductDescription","onUpdate:modelValue":e[4]||(e[4]=o=>s.change.data.description=o),placeholder:"描述"},null,512),[[h,s.change.data.description]])]),t("div",Ut,[wt,u(t("input",{type:"text",class:"form-label",id:"addProductContent","onUpdate:modelValue":e[5]||(e[5]=o=>s.change.data.content=o),placeholder:"內容"},null,512),[[h,s.change.data.content]])]),t("div",It,[Vt,u(t("input",{type:"checkbox",class:"form-label",id:"addProductIs_enabled",checked:a.trunBoolen,"onUpdate:modelValue":e[6]||(e[6]=o=>s.change.data.is_enabled=o),"true-value":1,"false-value":0,placeholder:"內容"},null,8,Dt),[[$,s.change.data.is_enabled]])]),t("div",Rt,[t("div",Et,[At,t("img",{class:"img-fluid",src:s.change.data.imageUrl,alt:"圖片ERR"},null,8,Nt),(i(!0),n(m,null,_(s.change.data.imagesUrl,o=>(i(),n("img",{key:o,src:o,alt:"圖片error",class:"images m-2",style:{width:"200px"}},null,8,Tt))),128))])])])]),t("div",jt,[Lt,t("button",{type:"button",class:"btn btn-danger",onClick:e[7]||(e[7]=(...o)=>a.putProducts&&a.putProducts(...o))},"確認修改")])])])],512)}const St=b(ut,[["render",Ot]]),Bt={props:["userChoose"],data(){return{infoModal:null}},computed:{chooseIsNull(){return Object.keys(this.userChoose).length!==0}},methods:{openModal(){this.infoModal.show()},closeModal(){this.infoModal.hide()}},mounted(){this.infoModal=new v.Modal(this.$refs.infoModal)}},I=d=>(U("data-v-44ef4cfa"),d=d(),w(),d),zt={class:"modal fade",ref:"infoModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Ft={class:"modal-dialog"},Ht={class:"modal-content"},qt=I(()=>t("div",{class:"modal-header"},[t("h2",{class:"text-center"},"單一產品細節"),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),Gt={class:"modal-body"},Jt={class:"card mb-3"},Kt=["src"],Qt={class:"card-body"},Wt={class:"card-title"},Xt={class:"badge bg-primary ms-2"},Yt={class:"card-text"},Zt={class:"card-text"},te={class:"d-flex"},ee={class:"card-text me-2"},oe={class:"card-text text-secondary"},se={class:"text-center"},de=["src"],ae=I(()=>t("div",{class:"modal-footer"},[t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close"),t("button",{type:"button",class:"btn btn-primary"},"Save changes")],-1));function le(d,e,l,p,s,a){return i(),n("div",zt,[t("div",Ft,[t("div",Ht,[qt,t("div",Gt,[a.chooseIsNull?(i(),n(m,{key:0},[t("div",Jt,[t("img",{src:l.userChoose.imageUrl,class:"card-img-top primary-image",alt:"主圖"},null,8,Kt),t("div",Qt,[t("h5",Wt,[P(c(l.userChoose.title)+" ",1),t("span",Xt,c(l.userChoose.category),1)]),t("p",Yt,"商品描述："+c(l.userChoose.description),1),t("p",Zt,"商品內容："+c(l.userChoose.content),1),t("div",te,[t("p",ee,c(l.userChoose.price),1),t("p",oe,[t("del",null,c(l.userChoose.origin_price),1)]),P(" 元 / "+c(l.userChoose.unit),1)])])]),t("div",se,[(i(!0),n(m,null,_(l.userChoose.imagesUrl,(o,M)=>(i(),n("img",{key:o+M,src:o,alt:"圖片error",class:"images m-2"},null,8,de))),128))])],64)):k("",!0)]),ae])])],512)}const ie=b(Bt,[["render",le],["__scopeId","data-v-44ef4cfa"]]),ne={props:["chooseProduct"],data(){return{delModal:null}},methods:{allowDelete(){this.$emit("reloadRender",this.chooseProduct.id)},openModal(){this.delModal.show()},closeModal(){this.delModal.hide()}},mounted(){this.delModal=new v.Modal(this.$refs.delModal)}},V=d=>(U("data-v-7e7434f6"),d=d(),w(),d),ce={ref:"delModal",class:"modal fade",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},re={class:"modal-dialog"},ue={class:"modal-content"},he=V(()=>t("div",{class:"modal-header"},[t("h5",{class:"modal-title"},"確定要刪除嗎?"),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),me={class:"modal-body"},_e={class:"card mb-3"},be=["src"],pe={class:"card-body"},ge={class:"card-title"},fe={class:"badge bg-primary ms-2"},ye={class:"card-text"},Pe={class:"card-text"},ve={class:"d-flex"},Me={class:"card-text me-2"},xe={class:"card-text text-secondary"},Ce={class:"text-center"},$e=["src"],ke={class:"modal-footer"},Ue=V(()=>t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"關閉",-1));function we(d,e,l,p,s,a){return i(),n("div",ce,[t("div",re,[t("div",ue,[he,t("div",me,[t("div",_e,[t("img",{src:l.chooseProduct.imageUrl,class:"card-img-top primary-image",alt:"主圖"},null,8,be),t("div",pe,[t("h5",ge,[P(c(l.chooseProduct.title)+" ",1),t("span",fe,c(l.chooseProduct.category),1)]),t("p",ye,"商品描述："+c(l.chooseProduct.description),1),t("p",Pe,"商品內容："+c(l.chooseProduct.content),1),t("div",ve,[t("p",Me,c(l.chooseProduct.price),1),t("p",xe,[t("del",null,c(l.chooseProduct.origin_price),1)]),P(" 元 / "+c(l.chooseProduct.unit),1)])])]),t("div",Ce,[(i(!0),n(m,null,_(l.chooseProduct.imagesUrl,o=>(i(),n("img",{key:o,src:o,alt:"圖片error",class:"images m-2"},null,8,$e))),128))])]),t("div",ke,[Ue,t("button",{type:"button",class:"btn btn-primary",onClick:e[0]||(e[0]=(...o)=>a.allowDelete&&a.allowDelete(...o))},"確定")])])])],512)}const Ie=b(ne,[["render",we],["__scopeId","data-v-7e7434f6"]]),Ve={data(){return{pathname:"",hasCookie:!1,userChoose:{},putChoose:{},delChoose:{},allProducts:[],pagination:{},pages:1,addProduct:{data:{title:"",category:"",origin_price:"",price:"",unit:"個",description:"",content:"",is_enabled:0,imageUrl:"",imagesUrl:[]}}}},created(){if(!g.hasItem("token")){this.$router.push("/");return}},methods:{delProduct(d){this.$axios.delete(`/admin/product/${d}`).then(e=>{e.data.success&&(this.hasCookie=e.data.success,this.colseDelModal(),this.renderProduct(),alert("已刪除"))}).catch(e=>{console.log(e)})},renderProduct(d=1){this.$axios.get(`/admin/products?page=${d}`).then(e=>{this.pagination=e.data.pagination,this.allProducts=e.data.products}).catch(e=>{console.log(e)})},openAddModal(){this.$refs.callAddModal.openModal()},openEditModal(d){this.putChoose={...d},this.$refs.callEditModal.openModal()},openDelModal(d){this.delChoose={...d},this.$refs.callDelModal.openModal()},openInfoModal(d){this.userChoose={...d},this.$refs.callInfoModal.openModal()},colseAddModal(){this.$refs.callAddModal.closeModal(),this.renderProduct()},colseEditModal(){this.$refs.callEditModal.closeModal(),this.renderProduct()},colseDelModal(){this.$refs.callDelModal.closeModal(),this.renderProduct()},signout(){this.$axios.post("https://ec-course-api.hexschool.io/v2/logout").then(()=>{alert("已登出"),g.removeItem("token"),this.$router.push("/")}).catch(()=>{alert("登出失敗")})}},mounted(){g.hasItem("token")&&(this.$axios.defaults.headers.common.Authorization=g.getItem("token"),this.renderProduct())},components:{AddProduct:rt,EditProduct:St,ProductInfonation:ie,DeleteProductModal:Ie}},De={class:"table align-middle table-hover mt-4"},Re=t("thead",null,[t("tr",null,[t("th",{width:"180"},"產品名稱"),t("th",{width:"50"},"原價"),t("th",{width:"50"},"售價"),t("th",{width:"70"},"是否啟用"),t("th",{width:"130"},"查看細節"),t("th",{width:"140"},"管理")])],-1),Ee={width:"180"},Ae={width:"50"},Ne={width:"50"},Te={width:"70"},je={key:0,class:"text-success"},Le={key:1},Oe={width:"130"},Se=["onClick"],Be={width:"140"},ze=["onClick"],Fe=["onClick"],He={class:"d-flex justify-content-between align-items-center px-4"},qe={"aria-label":"Page navigation example d-flex"},Ge={class:"pagination p-0 m-auto"},Je=t("span",{"aria-hidden":"true"},"«",-1),Ke=[Je],Qe=["onClick"],We=t("span",{"aria-hidden":"true"},"»",-1),Xe=[We];function Ye(d,e,l,p,s,a){const o=y("ProductInfonation"),M=y("DeleteProductModal"),D=y("AddProduct"),R=y("EditProduct");return i(),n(m,null,[t("table",De,[Re,t("tbody",null,[(i(!0),n(m,null,_(s.allProducts,r=>(i(),n("tr",{key:r.id},[t("td",Ee,c(r.title),1),t("td",Ae,c(r.origin_price),1),t("td",Ne,c(r.price),1),t("td",Te,[r.is_enabled===1?(i(),n("span",je,"啟用")):(i(),n("span",Le,"未啟用"))]),t("td",Oe,[t("button",{type:"button",class:"btn btn-primary",onClick:x=>a.openInfoModal(r)}," 查看細節 ",8,Se)]),t("td",Be,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm me-3",onClick:x=>a.openEditModal(r)}," 編輯 ",8,ze),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:x=>a.openDelModal(r)}," 刪除 ",8,Fe)])]))),128))])]),t("div",He,[t("span",null,"目前有 "+c(s.allProducts.length)+" 項產品",1),t("div",qe,[t("ul",Ge,[t("li",{class:C(["page-item",{disabled:!s.pagination.has_pre}])},[t("a",{class:"page-link","aria-label":"Previous",style:{cursor:"pointer"},onClick:e[0]||(e[0]=r=>a.renderProduct(s.pagination.current_page-1))},Ke)],2),(i(!0),n(m,null,_(s.pagination.total_pages,r=>(i(),n("li",{class:C(["page-item",{active:r===s.pagination.current_page}]),key:"mypage"+r},[t("a",{class:"page-link",style:{cursor:"pointer"},onClick:x=>a.renderProduct(r)},c(r),9,Qe)],2))),128)),t("li",{class:C(["page-item",{disabled:!s.pagination.has_next}])},[t("a",{class:"page-link","aria-label":"Next",style:{cursor:"pointer"},onClick:e[1]||(e[1]=r=>a.renderProduct(s.pagination.current_page+1))},Xe)],2)])]),t("button",{class:"btn btn-success",onClick:e[2]||(e[2]=(...r)=>a.openAddModal&&a.openAddModal(...r))},"建立新的產品")]),f(o,{ref:"callInfoModal",userChoose:s.userChoose},null,8,["userChoose"]),f(M,{ref:"callDelModal",chooseProduct:s.delChoose,onReloadRender:a.delProduct},null,8,["chooseProduct","onReloadRender"]),f(D,{ref:"callAddModal",onReloadRender:a.colseAddModal},null,8,["onReloadRender"]),f(R,{ref:"callEditModal",choose:s.putChoose,onReloadRender:a.colseEditModal},null,8,["choose","onReloadRender"])],64)}const to=b(Ve,[["render",Ye]]);export{to as default};