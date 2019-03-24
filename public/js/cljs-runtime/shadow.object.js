goog.provide('shadow.object');
goog.require('cljs.core');
goog.require('shadow.dom');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.data');
goog.require('cljs.core.async.impl.protocols');
goog.require('shadow.util');
shadow.object.console_friendly = shadow.util.console_friendly;
shadow.object.log = shadow.util.log;
shadow.object.debug = shadow.util.log;
shadow.object.info = shadow.util.log;
shadow.object.warn = shadow.util.log;
shadow.object.error = shadow.util.log;
shadow.object.obj_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
shadow.object.next_id = (function shadow$object$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.obj_id,cljs.core.inc);
});
shadow.object.object_defs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.behavior_fns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instances = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_parent = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.events = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.define_event = (function shadow$object$define_event(event_name,desc,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.events,cljs.core.assoc,event_name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),event_name,new cljs.core.Keyword(null,"description","description",-1428560544),desc,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
});
shadow.object.unmunge = (function shadow$object$unmunge(s){
return clojure.string.replace(clojure.string.replace(s,/_DOT_/,"."),/_/,"-");
});
shadow.object.define_event(new cljs.core.Keyword(null,"init","init",-1875481434),"object initialization",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"destroy","destroy",-843660405),"object descruction",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",231901252),"cause of destruction, :parent means the parent was destroyed, :direct is default"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","init","dom/init",-1875647652),"called after the dom was created but has not entered the document yet",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dom","dom",-1236537922),"the dom that was created"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","entered","dom/entered",506699596),"should be called whenever a dom node is added to the document, since that\n   is not in control of this library its up to you to call this\n   use (so/notify-tree! your-obj :dom/entered) to notify the node and every child you created",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160),"need to rethink this",cljs.core.PersistentVector.EMPTY);

/**
 * @interface
 */
shadow.object.IObject = function(){};

shadow.object._id = (function shadow$object$_id(this$){
if(((!((this$ == null))) && (!((this$.shadow$object$IObject$_id$arity$1 == null))))){
return this$.shadow$object$IObject$_id$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (shadow.object._id[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (shadow.object._id["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-id",this$);
}
}
}
});

shadow.object._type = (function shadow$object$_type(this$){
if(((!((this$ == null))) && (!((this$.shadow$object$IObject$_type$arity$1 == null))))){
return this$.shadow$object$IObject$_type$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (shadow.object._type[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (shadow.object._type["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-type",this$);
}
}
}
});

shadow.object._data = (function shadow$object$_data(this$){
if(((!((this$ == null))) && (!((this$.shadow$object$IObject$_data$arity$1 == null))))){
return this$.shadow$object$IObject$_data$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (shadow.object._data[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (shadow.object._data["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-data",this$);
}
}
}
});

/**
 * update and notify watches
 */
shadow.object._update = (function shadow$object$_update(this$,update_fn){
if(((!((this$ == null))) && (!((this$.shadow$object$IObject$_update$arity$2 == null))))){
return this$.shadow$object$IObject$_update$arity$2(this$,update_fn);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (shadow.object._update[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__4244__auto__.call(null,this$,update_fn));
} else {
var m__4244__auto____$1 = (shadow.object._update["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__4244__auto____$1.call(null,this$,update_fn));
} else {
throw cljs.core.missing_protocol("IObject.-update",this$);
}
}
}
});

shadow.object._destroy_BANG_ = (function shadow$object$_destroy_BANG_(this$,cause){
if(((!((this$ == null))) && (!((this$.shadow$object$IObject$_destroy_BANG_$arity$2 == null))))){
return this$.shadow$object$IObject$_destroy_BANG_$arity$2(this$,cause);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (shadow.object._destroy_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__4244__auto__.call(null,this$,cause));
} else {
var m__4244__auto____$1 = (shadow.object._destroy_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__4244__auto____$1.call(null,this$,cause));
} else {
throw cljs.core.missing_protocol("IObject.-destroy!",this$);
}
}
}
});

shadow.object.get_type = (function shadow$object$get_type(this$){
return shadow.object._type(this$);
});
shadow.object.get_type_attr = (function shadow$object$get_type_attr(var_args){
var G__19207 = arguments.length;
switch (G__19207) {
case 2:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2 = (function (oref,key){
if((oref == null)){
return null;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null));
}
});

shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3 = (function (oref,key,default$){
if((oref == null)){
return default$;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null),default$);
}
});

shadow.object.get_type_attr.cljs$lang$maxFixedArity = 3;

shadow.object.get_dom = (function shadow$object$get_dom(oref){
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(oref);
});
goog.exportSymbol('shadow.object.get_dom', shadow.object.get_dom);
shadow.object.get_by_id = (function shadow$object$get_by_id(id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),id);
});
goog.exportSymbol('shadow.object.get_by_id', shadow.object.get_by_id);
shadow.object.get_from_dom = (function shadow$object$get_from_dom(dom){
var oid = shadow.dom.data(dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(oid)){
return shadow.object.get_by_id(parseInt(oid,(10)));
} else {
return null;
}
});
goog.exportSymbol('shadow.object.get_from_dom', shadow.object.get_from_dom);
shadow.object.is_object_QMARK_ = (function shadow$object$is_object_QMARK_(obj_or_dom){
var or__3949__auto__ = ((!((obj_or_dom == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom));
if(or__3949__auto__){
return or__3949__auto__;
} else {
return shadow.object.get_from_dom(obj_or_dom);
}
});
shadow.object.equal_QMARK_ = (function shadow$object$equal_QMARK_(obj,obj_or_dom){
if(((!((obj == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj.shadow$object$IObject$))))?true:(((!obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj))){
} else {
throw (new Error(["Assert failed: ","can only test objects","\n","(satisfies? IObject obj)"].join('')));
}

if(((!((obj_or_dom == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),shadow.object._id(obj_or_dom));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),(function (){var temp__5457__auto__ = shadow.dom.data(obj_or_dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(temp__5457__auto__)){
var oid = temp__5457__auto__;
return parseInt(oid,(10));
} else {
return null;
}
})());
}
});
shadow.object.get_parent = (function shadow$object$get_parent(oref){
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),shadow.object._id(oref));
if(cljs.core.truth_(temp__5457__auto__)){
var parent_id = temp__5457__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),parent_id);
} else {
return null;
}
});
goog.exportSymbol('shadow.object.get_parent', shadow.object.get_parent);
shadow.object.get_parent_of_type = (function shadow$object$get_parent_of_type(oref,parent_type){
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(oref);
while(true){
if(cljs.core.truth_(parent)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._type(parent),parent_type)){
return parent;
} else {
var G__19837 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(parent);
parent = G__19837;
continue;
}
} else {
return null;
}
break;
}
});
goog.exportSymbol('shadow.object.get_parent_of_type', shadow.object.get_parent_of_type);
shadow.object.get_children = (function shadow$object$get_children(parent){
var parent_id = shadow.object._id(parent);
var child_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.instance_children),parent_id,cljs.core.PersistentVector.EMPTY);
var instances = cljs.core.deref(shadow.object.instances);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (parent_id,child_ids,instances){
return (function (p1__19266_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instances,p1__19266_SHARP_);
});})(parent_id,child_ids,instances))
,child_ids));
});
goog.exportSymbol('shadow.object.get_children', shadow.object.get_children);
shadow.object.tree_seq = (function shadow$object$tree_seq(var_args){
var G__19268 = arguments.length;
switch (G__19268) {
case 1:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('shadow.object.tree_seq', shadow.object.tree_seq);

shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1 = (function (root){
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2(root,(function (node){
return true;
}));
});

shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2 = (function (root,branch_QMARK_){
return cljs.core.tree_seq(branch_QMARK_,shadow.object.get_children,root);
});

shadow.object.tree_seq.cljs$lang$maxFixedArity = 2;

shadow.object.get_children_of_type = (function shadow$object$get_children_of_type(oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (type_kw){
return (function (p1__19269_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__19269_SHARP_));
});})(type_kw))
,shadow.object.get_children(oref));
});
/**
 * basically (get-children (:parent this))
 */
shadow.object.get_siblings = (function shadow$object$get_siblings(p__19281){
var map__19282 = p__19281;
var map__19282__$1 = ((((!((map__19282 == null)))?(((((map__19282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19282):map__19282);
var oref = map__19282__$1;
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19282__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
if(cljs.core.truth_(parent)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object has no parent, thus has no siblings",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

return shadow.object.get_children(parent);
});
/**
 * returns set of all siblings of a common type
 */
shadow.object.get_siblings_of_type = (function shadow$object$get_siblings_of_type(var_args){
var G__19296 = arguments.length;
switch (G__19296) {
case 1:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2(oref,oref);
});

shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2 = (function (oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (type_kw){
return (function (p1__19294_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__19294_SHARP_));
});})(type_kw))
,shadow.object.get_siblings(oref));
});

shadow.object.get_siblings_of_type.cljs$lang$maxFixedArity = 2;

shadow.object.get_collection_item = (function shadow$object$get_collection_item(oref){
var item_key = new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,item_key);
});
/**
 * find the object that contains this dom node
 */
shadow.object.find_containing_object = (function shadow$object$find_containing_object(dom){
while(true){
var temp__5455__auto__ = shadow.object.get_from_dom(dom);
if(cljs.core.truth_(temp__5455__auto__)){
var obj = temp__5455__auto__;
return obj;
} else {
var temp__5457__auto__ = dom.parentElement;
if(cljs.core.truth_(temp__5457__auto__)){
var parent = temp__5457__auto__;
var G__19852 = parent;
dom = G__19852;
continue;
} else {
return null;
}
}
break;
}
});
shadow.object.notify_BANG_ = (function shadow$object$notify_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___19853 = arguments.length;
var i__4532__auto___19854 = (0);
while(true){
if((i__4532__auto___19854 < len__4531__auto___19853)){
args__4534__auto__.push((arguments[i__4532__auto___19854]));

var G__19855 = (i__4532__auto___19854 + (1));
i__4532__auto___19854 = G__19855;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var temp__5457__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),ev], null));
if(cljs.core.truth_(temp__5457__auto__)){
var reactions_to_trigger = temp__5457__auto__;
var seq__19301 = cljs.core.seq(reactions_to_trigger);
var chunk__19302 = null;
var count__19303 = (0);
var i__19304 = (0);
while(true){
if((i__19304 < count__19303)){
var rfn = chunk__19302.cljs$core$IIndexed$_nth$arity$2(null,i__19304);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__19856 = seq__19301;
var G__19857 = chunk__19302;
var G__19858 = count__19303;
var G__19859 = (i__19304 + (1));
seq__19301 = G__19856;
chunk__19302 = G__19857;
count__19303 = G__19858;
i__19304 = G__19859;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq(seq__19301);
if(temp__5457__auto____$1){
var seq__19301__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19301__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__19301__$1);
var G__19860 = cljs.core.chunk_rest(seq__19301__$1);
var G__19861 = c__4351__auto__;
var G__19862 = cljs.core.count(c__4351__auto__);
var G__19863 = (0);
seq__19301 = G__19860;
chunk__19302 = G__19861;
count__19303 = G__19862;
i__19304 = G__19863;
continue;
} else {
var rfn = cljs.core.first(seq__19301__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__19864 = cljs.core.next(seq__19301__$1);
var G__19865 = null;
var G__19866 = (0);
var G__19867 = (0);
seq__19301 = G__19864;
chunk__19302 = G__19865;
count__19303 = G__19866;
i__19304 = G__19867;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});

shadow.object.notify_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
shadow.object.notify_BANG_.cljs$lang$applyTo = (function (seq19297){
var G__19298 = cljs.core.first(seq19297);
var seq19297__$1 = cljs.core.next(seq19297);
var G__19299 = cljs.core.first(seq19297__$1);
var seq19297__$2 = cljs.core.next(seq19297__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19298,G__19299,seq19297__$2);
});

shadow.object.do_notify_tree = (function shadow$object$do_notify_tree(current_obj,ev,notify_fn){
var seq__19305_19871 = cljs.core.seq(shadow.object.get_children(current_obj));
var chunk__19306_19872 = null;
var count__19307_19873 = (0);
var i__19308_19874 = (0);
while(true){
if((i__19308_19874 < count__19307_19873)){
var child_19875 = chunk__19306_19872.cljs$core$IIndexed$_nth$arity$2(null,i__19308_19874);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_19875,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_19875,ev,notify_fn));


var G__19876 = seq__19305_19871;
var G__19877 = chunk__19306_19872;
var G__19878 = count__19307_19873;
var G__19879 = (i__19308_19874 + (1));
seq__19305_19871 = G__19876;
chunk__19306_19872 = G__19877;
count__19307_19873 = G__19878;
i__19308_19874 = G__19879;
continue;
} else {
var temp__5457__auto___19880 = cljs.core.seq(seq__19305_19871);
if(temp__5457__auto___19880){
var seq__19305_19881__$1 = temp__5457__auto___19880;
if(cljs.core.chunked_seq_QMARK_(seq__19305_19881__$1)){
var c__4351__auto___19882 = cljs.core.chunk_first(seq__19305_19881__$1);
var G__19883 = cljs.core.chunk_rest(seq__19305_19881__$1);
var G__19884 = c__4351__auto___19882;
var G__19885 = cljs.core.count(c__4351__auto___19882);
var G__19886 = (0);
seq__19305_19871 = G__19883;
chunk__19306_19872 = G__19884;
count__19307_19873 = G__19885;
i__19308_19874 = G__19886;
continue;
} else {
var child_19887 = cljs.core.first(seq__19305_19881__$1);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_19887,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_19887,ev,notify_fn));


var G__19888 = cljs.core.next(seq__19305_19881__$1);
var G__19889 = null;
var G__19890 = (0);
var G__19891 = (0);
seq__19305_19871 = G__19888;
chunk__19306_19872 = G__19889;
count__19307_19873 = G__19890;
i__19308_19874 = G__19891;
continue;
}
} else {
}
}
break;
}

return (notify_fn.cljs$core$IFn$_invoke$arity$1 ? notify_fn.cljs$core$IFn$_invoke$arity$1(current_obj) : notify_fn.call(null,current_obj));
});
shadow.object.notify_tree_BANG_ = (function shadow$object$notify_tree_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___19893 = arguments.length;
var i__4532__auto___19894 = (0);
while(true){
if((i__4532__auto___19894 < len__4531__auto___19893)){
args__4534__auto__.push((arguments[i__4532__auto___19894]));

var G__19895 = (i__4532__auto___19894 + (1));
i__4532__auto___19894 = G__19895;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var notify_fn = (function (obj){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,obj,ev,args);
});
return shadow.object.do_notify_tree(oref,ev,notify_fn);
});

shadow.object.notify_tree_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
shadow.object.notify_tree_BANG_.cljs$lang$applyTo = (function (seq19309){
var G__19310 = cljs.core.first(seq19309);
var seq19309__$1 = cljs.core.next(seq19309);
var G__19311 = cljs.core.first(seq19309__$1);
var seq19309__$2 = cljs.core.next(seq19309__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19310,G__19311,seq19309__$2);
});

shadow.object.notify_down_BANG_ = shadow.object.notify_tree_BANG_;
shadow.object.notify_up_BANG_ = (function shadow$object$notify_up_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___19899 = arguments.length;
var i__4532__auto___19900 = (0);
while(true){
if((i__4532__auto___19900 < len__4531__auto___19899)){
args__4534__auto__.push((arguments[i__4532__auto___19900]));

var G__19901 = (i__4532__auto___19900 + (1));
i__4532__auto___19900 = G__19901;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var current = shadow.object.get_parent(oref);
while(true){
if(cljs.core.truth_(current)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,current,ev,args);

var G__19902 = shadow.object.get_parent(current);
current = G__19902;
continue;
} else {
return null;
}
break;
}
});

shadow.object.notify_up_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
shadow.object.notify_up_BANG_.cljs$lang$applyTo = (function (seq19367){
var G__19368 = cljs.core.first(seq19367);
var seq19367__$1 = cljs.core.next(seq19367);
var G__19369 = cljs.core.first(seq19367__$1);
var seq19367__$2 = cljs.core.next(seq19367__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19368,G__19369,seq19367__$2);
});

shadow.object.update_BANG_ = (function shadow$object$update_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___19903 = arguments.length;
var i__4532__auto___19904 = (0);
while(true){
if((i__4532__auto___19904 < len__4531__auto___19903)){
args__4534__auto__.push((arguments[i__4532__auto___19904]));

var G__19905 = (i__4532__auto___19904 + (1));
i__4532__auto___19904 = G__19905;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,update_fn,args){
if(cljs.core.fn_QMARK_(update_fn)){
} else {
throw ["update! expects a fn as second arg, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([update_fn], 0)))].join('');
}

var id = shadow.object._id(oref);
var data = shadow.object._data(oref);
var work_fn = ((function (id,data){
return (function (data__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(update_fn,data__$1,args);
});})(id,data))
;
return shadow.object._update(oref,work_fn);
});

shadow.object.update_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
shadow.object.update_BANG_.cljs$lang$applyTo = (function (seq19403){
var G__19404 = cljs.core.first(seq19403);
var seq19403__$1 = cljs.core.next(seq19403);
var G__19405 = cljs.core.first(seq19403__$1);
var seq19403__$2 = cljs.core.next(seq19403__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19404,G__19405,seq19403__$2);
});

shadow.object.return_value = (function shadow$object$return_value(oref,return_value){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360),return_value], 0));
});
shadow.object.set_parent_BANG_ = (function shadow$object$set_parent_BANG_(child,parent){
var child_id = shadow.object._id(child);
var parent_id = shadow.object._id(parent);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instance_parent,cljs.core.assoc,child_id,parent_id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.instance_children,((function (child_id,parent_id){
return (function (x){
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,child_id));
});})(child_id,parent_id))
);

return true;
});
shadow.object.dom_destroy = (function shadow$object$dom_destroy(this$,cause){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cause,new cljs.core.Keyword(null,"parent","parent",-878878779))){
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
} else {
var temp__5455__auto__ = shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("dom","remove","dom/remove",-131527420));
if(cljs.core.truth_(temp__5455__auto__)){
var custom_remove = temp__5455__auto__;
var G__19427 = this$;
var G__19428 = new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$);
return (custom_remove.cljs$core$IFn$_invoke$arity$2 ? custom_remove.cljs$core$IFn$_invoke$arity$2(G__19427,G__19428) : custom_remove.call(null,G__19427,G__19428));
} else {
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
}
}
});
shadow.object.destroy_BANG_ = (function shadow$object$destroy_BANG_(var_args){
var G__19431 = arguments.length;
switch (G__19431) {
case 1:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword(null,"direct","direct",-1775717856));
});

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,cause){
return shadow.object._destroy_BANG_(oref,cause);
});

shadow.object.destroy_BANG_.cljs$lang$maxFixedArity = 2;

shadow.object.bind_dom_events = (function shadow$object$bind_dom_events(oref,dom,dom_events){
if((cljs.core.rem(cljs.core.count(dom_events),(2)) === (0))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object defined invalid event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"object-type","object-type",-1889869015),shadow.object._type(oref),new cljs.core.Keyword("dom","events","dom/events",1793437527),dom_events], null));
}

var seq__19435 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),dom_events));
var chunk__19436 = null;
var count__19437 = (0);
var i__19438 = (0);
while(true){
if((i__19438 < count__19437)){
var vec__19440 = chunk__19436.cljs$core$IIndexed$_nth$arity$2(null,i__19438);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19440,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19440,(1),null);
var ev_def = vec__19440;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0)))].join('');
} else {
}

var handler_19915__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__19435,chunk__19436,count__19437,i__19438,vec__19440,ev,handler,ev_def){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__19435,chunk__19436,count__19437,i__19438,vec__19440,ev,handler,ev_def))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__19435,chunk__19436,count__19437,i__19438,handler_19915__$1,vec__19440,ev,handler,ev_def){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_19915__$1.cljs$core$IFn$_invoke$arity$3 ? handler_19915__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_19915__$1.call(null,oref,e,el));
});})(seq__19435,chunk__19436,count__19437,i__19438,handler_19915__$1,vec__19440,ev,handler,ev_def))
);


var G__19920 = seq__19435;
var G__19921 = chunk__19436;
var G__19922 = count__19437;
var G__19923 = (i__19438 + (1));
seq__19435 = G__19920;
chunk__19436 = G__19921;
count__19437 = G__19922;
i__19438 = G__19923;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__19435);
if(temp__5457__auto__){
var seq__19435__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19435__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__19435__$1);
var G__19924 = cljs.core.chunk_rest(seq__19435__$1);
var G__19925 = c__4351__auto__;
var G__19926 = cljs.core.count(c__4351__auto__);
var G__19927 = (0);
seq__19435 = G__19924;
chunk__19436 = G__19925;
count__19437 = G__19926;
i__19438 = G__19927;
continue;
} else {
var vec__19469 = cljs.core.first(seq__19435__$1);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19469,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19469,(1),null);
var ev_def = vec__19469;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0)))].join('');
} else {
}

var handler_19928__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__19435,chunk__19436,count__19437,i__19438,vec__19469,ev,handler,ev_def,seq__19435__$1,temp__5457__auto__){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__19435,chunk__19436,count__19437,i__19438,vec__19469,ev,handler,ev_def,seq__19435__$1,temp__5457__auto__))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__19435,chunk__19436,count__19437,i__19438,handler_19928__$1,vec__19469,ev,handler,ev_def,seq__19435__$1,temp__5457__auto__){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_19928__$1.cljs$core$IFn$_invoke$arity$3 ? handler_19928__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_19928__$1.call(null,oref,e,el));
});})(seq__19435,chunk__19436,count__19437,i__19438,handler_19928__$1,vec__19469,ev,handler,ev_def,seq__19435__$1,temp__5457__auto__))
);


var G__19931 = cljs.core.next(seq__19435__$1);
var G__19932 = null;
var G__19933 = (0);
var G__19934 = (0);
seq__19435 = G__19931;
chunk__19436 = G__19932;
count__19437 = G__19933;
i__19438 = G__19934;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.object.reaction_merge = (function shadow$object$reaction_merge(result,p__19482){
var vec__19483 = p__19482;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19483,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19483,(1),null);
if(cljs.core.truth_((function (){var and__3938__auto__ = event;
if(cljs.core.truth_(and__3938__auto__)){
return handler;
} else {
return and__3938__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid reaction",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
}

var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.List.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,handler));
});
shadow.object.merge_reactions = (function shadow$object$merge_reactions(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behaviors must be vectors",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(behavior))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid behavior",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.reaction_merge,result,cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),behavior)));
});
shadow.object.merge_behaviors = (function shadow$object$merge_behaviors(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,behavior);
} else {
if(cljs.core.map_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watch","watch",380988277)], null),(function (watches){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(watches,new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","events","dom/events",1793437527)], null),(function (default$){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(default$,new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)));
}));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behavior not understood",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));

}
}
});
shadow.object.define = (function shadow$object$define(var_args){
var args__4534__auto__ = [];
var len__4531__auto___19941 = arguments.length;
var i__4532__auto___19942 = (0);
while(true){
if((i__4532__auto___19942 < len__4531__auto___19941)){
args__4534__auto__.push((arguments[i__4532__auto___19942]));

var G__19943 = (i__4532__auto___19942 + (1));
i__4532__auto___19942 = G__19943;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return shadow.object.define.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

shadow.object.define.cljs$core$IFn$_invoke$arity$variadic = (function (id,args){
if((id instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object id needs to be a keyword",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(args))){
} else {
throw ["invalid object definition ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''))," args: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0)))].join('');
}

if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),id)){
console.warn(["object already defined ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
} else {
}

try{var odef = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,args);
var reactions = shadow.object.merge_reactions(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY));
var odef__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(odef,new cljs.core.Keyword("shadow.object","id","shadow.object/id",-647954841),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),reactions], 0));
var odef__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.merge_behaviors,odef__$1,cljs.core.reverse(new cljs.core.Keyword(null,"behaviors","behaviors",120724909).cljs$core$IFn$_invoke$arity$2(odef__$1,cljs.core.PersistentVector.EMPTY)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.object_defs,cljs.core.assoc,id,odef__$2);

return odef__$2;
}catch (e19525){if((e19525 instanceof Object)){
var e = e19525;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("failed to define object",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
} else {
throw e19525;

}
}});

shadow.object.define.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.object.define.cljs$lang$applyTo = (function (seq19511){
var G__19512 = cljs.core.first(seq19511);
var seq19511__$1 = cljs.core.next(seq19511);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19512,seq19511__$1);
});

shadow.object.merge_defaults = (function shadow$object$merge_defaults(data,type){
var defaults = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.Keyword(null,"defaults","defaults",976027214)], null));
if((defaults == null)){
return data;
} else {
if(cljs.core.map_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,data], 0));
} else {
if(cljs.core.fn_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(defaults.cljs$core$IFn$_invoke$arity$0 ? defaults.cljs$core$IFn$_invoke$arity$0() : defaults.call(null)),data], 0));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid object defaults",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"defaults","defaults",976027214),defaults,new cljs.core.Keyword(null,"type","type",1174270348),type], null));

}
}
}
});
shadow.object.make_dom = (function shadow$object$make_dom(var_args){
var G__19539 = arguments.length;
switch (G__19539) {
case 3:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3 = (function (oref,dom_key,events_key){
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4(oref,dom_key,events_key,null);
});

shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4 = (function (oref,dom_key,events_key,value){
var dom_fn = (((dom_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(oref,dom_key):dom_key);
var events = (((events_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3(oref,events_key,cljs.core.PersistentVector.EMPTY):events_key);
var dom = (function (){var G__19540 = (dom_fn.cljs$core$IFn$_invoke$arity$2 ? dom_fn.cljs$core$IFn$_invoke$arity$2(oref,value) : dom_fn.call(null,oref,value));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__19540) : shadow.dom.build.call(null,G__19540));
})();
shadow.object.bind_dom_events(oref,dom,events);

return dom;
});

shadow.object.make_dom.cljs$lang$maxFixedArity = 4;

shadow.object.alive_QMARK_ = (function shadow$object$alive_QMARK_(obj){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.instances),shadow.object._id(obj));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.object.Watch = (function (key,handler,__meta,__extmap,__hash){
this.key = key;
this.handler = handler;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k19543,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__19549 = k19543;
var G__19549__$1 = (((G__19549 instanceof cljs.core.Keyword))?G__19549.fqn:null);
switch (G__19549__$1) {
case "key":
return self__.key;

break;
case "handler":
return self__.handler;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19543,else__4206__auto__);

}
});

shadow.object.Watch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#shadow.object.Watch{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null))], null),self__.__extmap));
});

shadow.object.Watch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19542){
var self__ = this;
var G__19542__$1 = this;
return (new cljs.core.RecordIter((0),G__19542__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"handler","handler",-195596612)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.object.Watch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

shadow.object.Watch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.object.Watch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.object.Watch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__19554 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-17677043 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__19554(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

shadow.object.Watch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19544,other19545){
var self__ = this;
var this19544__$1 = this;
return ((!((other19545 == null))) && ((this19544__$1.constructor === other19545.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19544__$1.key,other19545.key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19544__$1.handler,other19545.handler)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19544__$1.__extmap,other19545.__extmap)));
});

shadow.object.Watch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"handler","handler",-195596612),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

shadow.object.Watch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__19542){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__19565 = cljs.core.keyword_identical_QMARK_;
var expr__19566 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__19568 = new cljs.core.Keyword(null,"key","key",-1516042587);
var G__19569 = expr__19566;
return (pred__19565.cljs$core$IFn$_invoke$arity$2 ? pred__19565.cljs$core$IFn$_invoke$arity$2(G__19568,G__19569) : pred__19565.call(null,G__19568,G__19569));
})())){
return (new shadow.object.Watch(G__19542,self__.handler,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19572 = new cljs.core.Keyword(null,"handler","handler",-195596612);
var G__19573 = expr__19566;
return (pred__19565.cljs$core$IFn$_invoke$arity$2 ? pred__19565.cljs$core$IFn$_invoke$arity$2(G__19572,G__19573) : pred__19565.call(null,G__19572,G__19573));
})())){
return (new shadow.object.Watch(self__.key,G__19542,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__19542),null));
}
}
});

shadow.object.Watch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key","key",-1516042587),self__.key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler,null))], null),self__.__extmap));
});

shadow.object.Watch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__19542){
var self__ = this;
var this__4202__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,G__19542,self__.__extmap,self__.__hash));
});

shadow.object.Watch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

shadow.object.Watch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"handler","handler",1444934915,null)], null);
});

shadow.object.Watch.cljs$lang$type = true;

shadow.object.Watch.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"shadow.object/Watch",null,(1),null));
});

shadow.object.Watch.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"shadow.object/Watch");
});

/**
 * Positional factory function for shadow.object/Watch.
 */
shadow.object.__GT_Watch = (function shadow$object$__GT_Watch(key,handler){
return (new shadow.object.Watch(key,handler,null,null,null));
});

/**
 * Factory function for shadow.object/Watch, taking a map of keywords to field values.
 */
shadow.object.map__GT_Watch = (function shadow$object$map__GT_Watch(G__19547){
var extmap__4236__auto__ = (function (){var G__19587 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19547,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612)], 0));
if(cljs.core.record_QMARK_(G__19547)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19587);
} else {
return G__19587;
}
})();
return (new shadow.object.Watch(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__19547),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(G__19547),null,cljs.core.not_empty(extmap__4236__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IEquiv}
 * @implements {shadow.object.IObject}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {shadow.dom.SVGElement}
 * @implements {cljs.core.ILookup}
*/
shadow.object.ObjectRef = (function (id,type,data,watches,result_chan){
this.id = id;
this.type = type;
this.data = data;
this.watches = watches;
this.result_chan = result_chan;
this.cljs$lang$protocol_mask$partition0$ = 2149613824;
this.cljs$lang$protocol_mask$partition1$ = 2;
});
shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.result_chan,handler);
});

shadow.object.ObjectRef.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
});

shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.data,k);
}
});

shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,d){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.data,k,d);
}
});

shadow.object.ObjectRef.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._write(writer,["#<ObjectRef {:id ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.id),", :type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.type),"}>"].join(''));
});

shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
});

shadow.object.ObjectRef.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (((other instanceof shadow.object.ObjectRef)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.shadow$object$IObject$_id$arity$1(null),shadow.object._id(other))));
});

shadow.object.ObjectRef.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.object.ObjectRef.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
});

shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
throw (new Error("who be calling?"));
});

shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.watches,(new shadow.object.Watch(key,f,null,null,null)));
});

shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p1__19589_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__19589_SHARP_));
});})(this$__$1))
,self__.watches);
});

shadow.object.ObjectRef.prototype.shadow$object$IObject$ = cljs.core.PROTOCOL_SENTINEL;

shadow.object.ObjectRef.prototype.shadow$object$IObject$_id$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.id;
});

shadow.object.ObjectRef.prototype.shadow$object$IObject$_type$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.type;
});

shadow.object.ObjectRef.prototype.shadow$object$IObject$_data$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
});

shadow.object.ObjectRef.prototype.shadow$object$IObject$_update$arity$2 = (function (this$,update_fn){
var self__ = this;
var this$__$1 = this;
var old = self__.data;
var new$ = (update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(self__.data) : update_fn.call(null,self__.data));
self__.data = new$;

var seq__19644 = cljs.core.seq(self__.watches);
var chunk__19645 = null;
var count__19646 = (0);
var i__19647 = (0);
while(true){
if((i__19647 < count__19646)){
var map__19648 = chunk__19645.cljs$core$IIndexed$_nth$arity$2(null,i__19647);
var map__19648__$1 = ((((!((map__19648 == null)))?(((((map__19648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19648):map__19648);
var watch = map__19648__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19648__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19648__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(cljs.core.truth_(shadow.object.alive_QMARK_(this$__$1))){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__20030 = seq__19644;
var G__20031 = chunk__19645;
var G__20032 = count__19646;
var G__20033 = (i__19647 + (1));
seq__19644 = G__20030;
chunk__19645 = G__20031;
count__19646 = G__20032;
i__19647 = G__20033;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__19644);
if(temp__5457__auto__){
var seq__19644__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19644__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__19644__$1);
var G__20034 = cljs.core.chunk_rest(seq__19644__$1);
var G__20035 = c__4351__auto__;
var G__20036 = cljs.core.count(c__4351__auto__);
var G__20037 = (0);
seq__19644 = G__20034;
chunk__19645 = G__20035;
count__19646 = G__20036;
i__19647 = G__20037;
continue;
} else {
var map__19664 = cljs.core.first(seq__19644__$1);
var map__19664__$1 = ((((!((map__19664 == null)))?(((((map__19664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19664):map__19664);
var watch = map__19664__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19664__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19664__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(cljs.core.truth_(shadow.object.alive_QMARK_(this$__$1))){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__20043 = cljs.core.next(seq__19644__$1);
var G__20044 = null;
var G__20045 = (0);
var G__20046 = (0);
seq__19644 = G__20043;
chunk__19645 = G__20044;
count__19646 = G__20045;
i__19647 = G__20046;
continue;
}
} else {
return null;
}
}
break;
}
});

shadow.object.ObjectRef.prototype.shadow$object$IObject$_destroy_BANG_$arity$2 = (function (this$,cause){
var self__ = this;
var this$__$1 = this;
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),self__.id);
var seq__19706_20047 = cljs.core.seq(shadow.object.get_children(this$__$1));
var chunk__19707_20048 = null;
var count__19708_20049 = (0);
var i__19709_20050 = (0);
while(true){
if((i__19709_20050 < count__19708_20049)){
var child_20051 = chunk__19707_20048.cljs$core$IIndexed$_nth$arity$2(null,i__19709_20050);
shadow.object._destroy_BANG_(child_20051,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__20052 = seq__19706_20047;
var G__20053 = chunk__19707_20048;
var G__20054 = count__19708_20049;
var G__20055 = (i__19709_20050 + (1));
seq__19706_20047 = G__20052;
chunk__19707_20048 = G__20053;
count__19708_20049 = G__20054;
i__19709_20050 = G__20055;
continue;
} else {
var temp__5457__auto___20056 = cljs.core.seq(seq__19706_20047);
if(temp__5457__auto___20056){
var seq__19706_20057__$1 = temp__5457__auto___20056;
if(cljs.core.chunked_seq_QMARK_(seq__19706_20057__$1)){
var c__4351__auto___20058 = cljs.core.chunk_first(seq__19706_20057__$1);
var G__20059 = cljs.core.chunk_rest(seq__19706_20057__$1);
var G__20060 = c__4351__auto___20058;
var G__20061 = cljs.core.count(c__4351__auto___20058);
var G__20062 = (0);
seq__19706_20047 = G__20059;
chunk__19707_20048 = G__20060;
count__19708_20049 = G__20061;
i__19709_20050 = G__20062;
continue;
} else {
var child_20063 = cljs.core.first(seq__19706_20057__$1);
shadow.object._destroy_BANG_(child_20063,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__20072 = cljs.core.next(seq__19706_20057__$1);
var G__20073 = null;
var G__20074 = (0);
var G__20075 = (0);
seq__19706_20047 = G__20072;
chunk__19707_20048 = G__20073;
count__19708_20049 = G__20074;
i__19709_20050 = G__20075;
continue;
}
} else {
}
}
break;
}

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$__$1,new cljs.core.Keyword(null,"destroy","destroy",-843660405),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cause], 0));

shadow.object.dom_destroy(this$__$1,cause);

var return_value_20076 = new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360).cljs$core$IFn$_invoke$arity$1(this$__$1);
if((return_value_20076 == null)){
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.result_chan,return_value_20076);
}

cljs.core.async.close_BANG_(self__.result_chan);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instances,cljs.core.dissoc,self__.id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instance_parent,cljs.core.dissoc,self__.id);

if(cljs.core.truth_(parent_id)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(shadow.object.instance_children,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id], null),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.id], 0));
} else {
return null;
}
});

shadow.object.ObjectRef.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
});

shadow.object.ObjectRef.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"result-chan","result-chan",3070926,null)], null);
});

shadow.object.ObjectRef.cljs$lang$type = true;

shadow.object.ObjectRef.cljs$lang$ctorStr = "shadow.object/ObjectRef";

shadow.object.ObjectRef.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"shadow.object/ObjectRef");
});

/**
 * Positional factory function for shadow.object/ObjectRef.
 */
shadow.object.__GT_ObjectRef = (function shadow$object$__GT_ObjectRef(id,type,data,watches,result_chan){
return (new shadow.object.ObjectRef(id,type,data,watches,result_chan));
});

shadow.object.add_reaction_BANG_ = (function shadow$object$add_reaction_BANG_(var_args){
var G__19753 = arguments.length;
switch (G__19753) {
case 3:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (oref,ev,handler_fn){
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev,handler_fn], null));
});

shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,list){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,list], 0));
});

shadow.object.add_reaction_BANG_.cljs$lang$maxFixedArity = 3;

shadow.object.bind_change = (function shadow$object$bind_change(var_args){
var G__19761 = arguments.length;
switch (G__19761) {
case 3:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,callback){
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4(oref,attr,callback,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind-change"));
});

shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4 = (function (oref,attr,callback,watch_key){
if(((!((oref == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === oref.shadow$object$IObject$))))?true:(((!oref.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("binding currently only supports shadow objects, other atoms might leak, may add later",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref,new cljs.core.Keyword(null,"attr","attr",-604132353),attr], null));
}

var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
return cljs.core.add_watch(oref,watch_key,((function (attr__$1){
return (function shadow$object$bind_change_watch(_,___$1,old,new$){
var ov = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old,attr__$1);
var nv = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new$,attr__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ov,nv)){
return null;
} else {
return (callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(ov,nv) : callback.call(null,ov,nv));
}
});})(attr__$1))
);
});

shadow.object.bind_change.cljs$lang$maxFixedArity = 4;

shadow.object.dom_enter = (function shadow$object$dom_enter(parent,child){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(parent,child);

if(cljs.core.truth_(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1(parent))){
return shadow.object.notify_tree_BANG_(child,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
} else {
return null;
}
});
shadow.object.create = (function shadow$object$create(var_args){
var args__4534__auto__ = [];
var len__4531__auto___20100 = arguments.length;
var i__4532__auto___20101 = (0);
while(true){
if((i__4532__auto___20101 < len__4531__auto___20100)){
args__4534__auto__.push((arguments[i__4532__auto___20101]));

var G__20103 = (i__4532__auto___20101 + (1));
i__4532__auto___20101 = G__20103;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return shadow.object.create.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

shadow.object.create.cljs$core$IFn$_invoke$arity$variadic = (function (type,args,node_children){
if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),type)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["cannot create unknown child type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.map_QMARK_(args)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("so/create second arg must be a map",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

var oid = shadow.object.next_id();
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(args);
var result_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var odef = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),type);
var obj = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(shadow.object.merge_defaults(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(args,new cljs.core.Keyword("shadow.object","object-id","shadow.object/object-id",-685993804),oid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.get.cljs$core$IFn$_invoke$arity$3(odef,new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.PersistentArrayMap.EMPTY)], 0)),type),new cljs.core.Keyword(null,"parent","parent",-878878779),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dom","dom",-1236537922)], 0));
var oref = (new shadow.object.ObjectRef(oid,type,obj,cljs.core.PersistentVector.EMPTY,result_chan));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instances,cljs.core.assoc,oid,oref);

if(cljs.core.truth_(parent)){
shadow.object.set_parent_BANG_(oref,parent);
} else {
}

shadow.object.notify_BANG_(oref,new cljs.core.Keyword(null,"init","init",-1875481434));

var dom_events_20122 = new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY);
var temp__5455__auto___20123 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(temp__5455__auto___20123)){
var dom_20124 = temp__5455__auto___20123;
shadow.dom.set_data(dom_20124,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.bind_dom_events(oref,dom_20124,dom_events_20122);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_20124], 0));

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_20124], 0));
} else {
var temp__5457__auto___20125 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5457__auto___20125)){
var dom_fn_20126 = temp__5457__auto___20125;
var dom_20127 = (function (){var G__19773 = (dom_fn_20126.cljs$core$IFn$_invoke$arity$2 ? dom_fn_20126.cljs$core$IFn$_invoke$arity$2(oref,node_children) : dom_fn_20126.call(null,oref,node_children));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__19773) : shadow.dom.build.call(null,G__19773));
})();
shadow.dom.set_data(dom_20127,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_20127], 0));

shadow.object.bind_dom_events(oref,dom_20127,dom_events_20122);

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_20127], 0));
} else {
}
}

var temp__5457__auto___20128 = new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5457__auto___20128)){
var watches_20129 = temp__5457__auto___20128;
var seq__19774_20130 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),watches_20129));
var chunk__19775_20131 = null;
var count__19776_20132 = (0);
var i__19777_20133 = (0);
while(true){
if((i__19777_20133 < count__19776_20132)){
var vec__19778_20134 = chunk__19775_20131.cljs$core$IIndexed$_nth$arity$2(null,i__19777_20133);
var attr_20135 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19778_20134,(0),null);
var handler_20136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19778_20134,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_20135,((function (seq__19774_20130,chunk__19775_20131,count__19776_20132,i__19777_20133,vec__19778_20134,attr_20135,handler_20136,watches_20129,temp__5457__auto___20128,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_20136.cljs$core$IFn$_invoke$arity$3 ? handler_20136.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_20136.call(null,oref,old,new$));
});})(seq__19774_20130,chunk__19775_20131,count__19776_20132,i__19777_20133,vec__19778_20134,attr_20135,handler_20136,watches_20129,temp__5457__auto___20128,oid,parent,result_chan,odef,obj,oref))
);


var G__20137 = seq__19774_20130;
var G__20138 = chunk__19775_20131;
var G__20139 = count__19776_20132;
var G__20140 = (i__19777_20133 + (1));
seq__19774_20130 = G__20137;
chunk__19775_20131 = G__20138;
count__19776_20132 = G__20139;
i__19777_20133 = G__20140;
continue;
} else {
var temp__5457__auto___20141__$1 = cljs.core.seq(seq__19774_20130);
if(temp__5457__auto___20141__$1){
var seq__19774_20142__$1 = temp__5457__auto___20141__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19774_20142__$1)){
var c__4351__auto___20143 = cljs.core.chunk_first(seq__19774_20142__$1);
var G__20144 = cljs.core.chunk_rest(seq__19774_20142__$1);
var G__20145 = c__4351__auto___20143;
var G__20146 = cljs.core.count(c__4351__auto___20143);
var G__20147 = (0);
seq__19774_20130 = G__20144;
chunk__19775_20131 = G__20145;
count__19776_20132 = G__20146;
i__19777_20133 = G__20147;
continue;
} else {
var vec__19781_20148 = cljs.core.first(seq__19774_20142__$1);
var attr_20149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19781_20148,(0),null);
var handler_20150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19781_20148,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_20149,((function (seq__19774_20130,chunk__19775_20131,count__19776_20132,i__19777_20133,vec__19781_20148,attr_20149,handler_20150,seq__19774_20142__$1,temp__5457__auto___20141__$1,watches_20129,temp__5457__auto___20128,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_20150.cljs$core$IFn$_invoke$arity$3 ? handler_20150.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_20150.call(null,oref,old,new$));
});})(seq__19774_20130,chunk__19775_20131,count__19776_20132,i__19777_20133,vec__19781_20148,attr_20149,handler_20150,seq__19774_20142__$1,temp__5457__auto___20141__$1,watches_20129,temp__5457__auto___20128,oid,parent,result_chan,odef,obj,oref))
);


var G__20151 = cljs.core.next(seq__19774_20142__$1);
var G__20152 = null;
var G__20153 = (0);
var G__20154 = (0);
seq__19774_20130 = G__20151;
chunk__19775_20131 = G__20152;
count__19776_20132 = G__20153;
i__19777_20133 = G__20154;
continue;
}
} else {
}
}
break;
}
} else {
}

return oref;
});

shadow.object.create.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
shadow.object.create.cljs$lang$applyTo = (function (seq19768){
var G__19769 = cljs.core.first(seq19768);
var seq19768__$1 = cljs.core.next(seq19768);
var G__19770 = cljs.core.first(seq19768__$1);
var seq19768__$2 = cljs.core.next(seq19768__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19769,G__19770,seq19768__$2);
});

/**
 * [oref attr node-gen] produces a node via (node-gen new-value)
 * watches obj for changes and replaces the generated node on change (node-gen defaults to str)
 * 
 *   only use if the node has no attached behavior like clicks, use bind with an extra object for those
 */
shadow.object.bind_simple = (function shadow$object$bind_simple(var_args){
var G__19786 = arguments.length;
switch (G__19786) {
case 2:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2 = (function (oref,attr){
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3(oref,attr,cljs.core.str);
});

shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,node_gen){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var node_get = ((function (attr__$1){
return (function (p1__19784_SHARP_){
var G__19787 = (node_gen.cljs$core$IFn$_invoke$arity$1 ? node_gen.cljs$core$IFn$_invoke$arity$1(p1__19784_SHARP_) : node_gen.call(null,p1__19784_SHARP_));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__19787) : shadow.dom.build.call(null,G__19787));
});})(attr__$1))
;
var node = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(node_get(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1)));
var bind_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind");
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,((function (attr__$1,node_get,node,bind_key){
return (function (old,new$){
var new_node = node_get(new$);
var current_node = cljs.core.deref(node);
shadow.dom.replace_node(current_node,new_node);

return cljs.core.reset_BANG_(node,new_node);
});})(attr__$1,node_get,node,bind_key))
);

return cljs.core.deref(node);
});

shadow.object.bind_simple.cljs$lang$maxFixedArity = 3;

/**
 * bind the given attribute a child item
 *   the item will be recreated whenever the value changes (old one will be destroyed)
 */
shadow.object.bind = (function shadow$object$bind(oref,attr,item_type,item_key,item_attrs){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var curval = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1);
var make_child_fn = ((function (attr__$1,curval){
return (function (value){
return shadow.object.create(item_type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item_attrs,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),oref,item_key,value])], 0)));
});})(attr__$1,curval))
;
var child = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(make_child_fn(curval));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,((function (attr__$1,curval,make_child_fn,child){
return (function (old,new$){
var new_child = make_child_fn(new$);
var current_node = cljs.core.deref(child);
shadow.dom.replace_node(current_node,new_child);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(child));

cljs.core.reset_BANG_(child,new_child);

var G__19788 = new_child;
var G__19789 = new cljs.core.Keyword("dom","entered","dom/entered",506699596);
return (shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2 ? shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2(G__19788,G__19789) : shadow.object.notify_down_BANG_.call(null,G__19788,G__19789));
});})(attr__$1,curval,make_child_fn,child))
);

return cljs.core.deref(child);
});
shadow.object.coll_destroy_children = (function shadow$object$coll_destroy_children(children,c,diff){
var seq__19790_20159 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(c + diff),c));
var chunk__19791_20160 = null;
var count__19792_20161 = (0);
var i__19793_20162 = (0);
while(true){
if((i__19793_20162 < count__19792_20161)){
var obj_20163 = chunk__19791_20160.cljs$core$IIndexed$_nth$arity$2(null,i__19793_20162);
var obj_20164__$1 = shadow.object.get_from_dom(obj_20163);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_20164__$1);


var G__20165 = seq__19790_20159;
var G__20166 = chunk__19791_20160;
var G__20167 = count__19792_20161;
var G__20168 = (i__19793_20162 + (1));
seq__19790_20159 = G__20165;
chunk__19791_20160 = G__20166;
count__19792_20161 = G__20167;
i__19793_20162 = G__20168;
continue;
} else {
var temp__5457__auto___20169 = cljs.core.seq(seq__19790_20159);
if(temp__5457__auto___20169){
var seq__19790_20170__$1 = temp__5457__auto___20169;
if(cljs.core.chunked_seq_QMARK_(seq__19790_20170__$1)){
var c__4351__auto___20171 = cljs.core.chunk_first(seq__19790_20170__$1);
var G__20172 = cljs.core.chunk_rest(seq__19790_20170__$1);
var G__20173 = c__4351__auto___20171;
var G__20174 = cljs.core.count(c__4351__auto___20171);
var G__20175 = (0);
seq__19790_20159 = G__20172;
chunk__19791_20160 = G__20173;
count__19792_20161 = G__20174;
i__19793_20162 = G__20175;
continue;
} else {
var obj_20176 = cljs.core.first(seq__19790_20170__$1);
var obj_20177__$1 = shadow.object.get_from_dom(obj_20176);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_20177__$1);


var G__20178 = cljs.core.next(seq__19790_20170__$1);
var G__20179 = null;
var G__20180 = (0);
var G__20181 = (0);
seq__19790_20159 = G__20178;
chunk__19791_20160 = G__20179;
count__19792_20161 = G__20180;
i__19793_20162 = G__20181;
continue;
}
} else {
}
}
break;
}

return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(0),(c + diff));
});
shadow.object.bind_children = (function shadow$object$bind_children(var_args){
var G__19796 = arguments.length;
switch (G__19796) {
case 5:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5 = (function (node,parent,attr,item_type,item_key){
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6(node,parent,attr,item_type,item_key,(function (p1__19794_SHARP_){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,p1__19794_SHARP_);
}));
});

shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6 = (function (node,parent,attr,item_type,item_key,coll_transform){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var update_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var coll_dom = (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(node) : shadow.dom.build.call(null,node));
var make_item_fn = ((function (attr__$1,update_children,coll_dom){
return (function (p__19797){
var vec__19798 = p__19797;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19798,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19798,(1),null);
var obj = shadow.object.create(item_type,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),parent,new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048),attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616),key,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366),item_key,item_key,val]));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(obj,item_key,((function (obj,vec__19798,key,val,attr__$1,update_children,coll_dom){
return (function (old,new$){
var parent_key = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(obj));
(shadow.object.log.cljs$core$IFn$_invoke$arity$6 ? shadow.object.log.cljs$core$IFn$_invoke$arity$6("direct child update",parent,obj,key,parent_key,new$) : shadow.object.log.call(null,"direct child update",parent,obj,key,parent_key,new$));

cljs.core.reset_BANG_(update_children,false);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parent_key,new$], 0));

return cljs.core.reset_BANG_(update_children,true);
});})(obj,vec__19798,key,val,attr__$1,update_children,coll_dom))
);

return obj;
});})(attr__$1,update_children,coll_dom))
;
var seq__19801_20184 = cljs.core.seq((function (){var G__19805 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,attr__$1);
return (coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(G__19805) : coll_transform.call(null,G__19805));
})());
var chunk__19802_20185 = null;
var count__19803_20186 = (0);
var i__19804_20187 = (0);
while(true){
if((i__19804_20187 < count__19803_20186)){
var item_20189 = chunk__19802_20185.cljs$core$IIndexed$_nth$arity$2(null,i__19804_20187);
shadow.object.dom_enter(coll_dom,make_item_fn(item_20189));


var G__20190 = seq__19801_20184;
var G__20191 = chunk__19802_20185;
var G__20192 = count__19803_20186;
var G__20193 = (i__19804_20187 + (1));
seq__19801_20184 = G__20190;
chunk__19802_20185 = G__20191;
count__19803_20186 = G__20192;
i__19804_20187 = G__20193;
continue;
} else {
var temp__5457__auto___20194 = cljs.core.seq(seq__19801_20184);
if(temp__5457__auto___20194){
var seq__19801_20195__$1 = temp__5457__auto___20194;
if(cljs.core.chunked_seq_QMARK_(seq__19801_20195__$1)){
var c__4351__auto___20199 = cljs.core.chunk_first(seq__19801_20195__$1);
var G__20200 = cljs.core.chunk_rest(seq__19801_20195__$1);
var G__20201 = c__4351__auto___20199;
var G__20202 = cljs.core.count(c__4351__auto___20199);
var G__20203 = (0);
seq__19801_20184 = G__20200;
chunk__19802_20185 = G__20201;
count__19803_20186 = G__20202;
i__19804_20187 = G__20203;
continue;
} else {
var item_20204 = cljs.core.first(seq__19801_20195__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_20204));


var G__20205 = cljs.core.next(seq__19801_20195__$1);
var G__20206 = null;
var G__20207 = (0);
var G__20208 = (0);
seq__19801_20184 = G__20205;
chunk__19802_20185 = G__20206;
count__19803_20186 = G__20207;
i__19804_20187 = G__20208;
continue;
}
} else {
}
}
break;
}

shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(parent,attr__$1,((function (attr__$1,update_children,coll_dom,make_item_fn){
return (function shadow$object$bind_children_watch(old,new$){
if(cljs.core.truth_(cljs.core.deref(update_children))){
var children = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,shadow.dom.children(coll_dom));
var new_coll = cljs.core.vec((coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(new$) : coll_transform.call(null,new$)));
var count_children = cljs.core.count(children);
var count_new = cljs.core.count(new$);
var diff = (count_new - count_children);
var children__$1 = (((diff < (0)))?shadow.object.coll_destroy_children(children,count_children,diff):children);
var count_children__$1 = (function (){var x__4040__auto__ = count_new;
var y__4041__auto__ = count_children;
return ((x__4040__auto__ < y__4041__auto__) ? x__4040__auto__ : y__4041__auto__);
})();
var n__4408__auto___20209 = count_children__$1;
var idx_20210 = (0);
while(true){
if((idx_20210 < n__4408__auto___20209)){
var cn_20211 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,idx_20210);
var cc_20212 = shadow.object.get_from_dom(cn_20211);
var ckey_20213 = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(cc_20212);
var cval_20214 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cc_20212,item_key);
var vec__19806_20215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new_coll,idx_20210);
var nkey_20216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19806_20215,(0),null);
var nval_20217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19806_20215,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ckey_20213,nkey_20216)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cval_20214,nval_20217)))){
} else {
var new_obj_20218 = make_item_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nkey_20216,nval_20217], null));
shadow.dom.replace_node(cn_20211,new_obj_20218);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cc_20212);

shadow.object.notify_tree_BANG_(new_obj_20218,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
}

var G__20219 = (idx_20210 + (1));
idx_20210 = G__20219;
continue;
} else {
}
break;
}

if((diff > (0))){
var seq__19809_20220 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new_coll,count_children__$1,count_new));
var chunk__19810_20221 = null;
var count__19811_20222 = (0);
var i__19812_20223 = (0);
while(true){
if((i__19812_20223 < count__19811_20222)){
var item_20224 = chunk__19810_20221.cljs$core$IIndexed$_nth$arity$2(null,i__19812_20223);
shadow.object.dom_enter(coll_dom,make_item_fn(item_20224));


var G__20225 = seq__19809_20220;
var G__20226 = chunk__19810_20221;
var G__20227 = count__19811_20222;
var G__20228 = (i__19812_20223 + (1));
seq__19809_20220 = G__20225;
chunk__19810_20221 = G__20226;
count__19811_20222 = G__20227;
i__19812_20223 = G__20228;
continue;
} else {
var temp__5457__auto___20229 = cljs.core.seq(seq__19809_20220);
if(temp__5457__auto___20229){
var seq__19809_20230__$1 = temp__5457__auto___20229;
if(cljs.core.chunked_seq_QMARK_(seq__19809_20230__$1)){
var c__4351__auto___20231 = cljs.core.chunk_first(seq__19809_20230__$1);
var G__20232 = cljs.core.chunk_rest(seq__19809_20230__$1);
var G__20233 = c__4351__auto___20231;
var G__20234 = cljs.core.count(c__4351__auto___20231);
var G__20235 = (0);
seq__19809_20220 = G__20232;
chunk__19810_20221 = G__20233;
count__19811_20222 = G__20234;
i__19812_20223 = G__20235;
continue;
} else {
var item_20236 = cljs.core.first(seq__19809_20230__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_20236));


var G__20237 = cljs.core.next(seq__19809_20230__$1);
var G__20238 = null;
var G__20239 = (0);
var G__20240 = (0);
seq__19809_20220 = G__20237;
chunk__19810_20221 = G__20238;
count__19811_20222 = G__20239;
i__19812_20223 = G__20240;
continue;
}
} else {
}
}
break;
}
} else {
}

return shadow.object.notify_BANG_(parent,new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160));
} else {
return null;
}
});})(attr__$1,update_children,coll_dom,make_item_fn))
);

return coll_dom;
});

shadow.object.bind_children.cljs$lang$maxFixedArity = 6;

shadow.object.remove_in_parent_BANG_ = (function shadow$object$remove_in_parent_BANG_(oref){
var parent = shadow.object.get_parent(oref);
var key = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(oref);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref));
var path = new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048).cljs$core$IFn$_invoke$arity$1(oref);
if(cljs.core.truth_((function (){var and__3938__auto__ = key;
if(cljs.core.truth_(and__3938__auto__)){
return path;
} else {
return and__3938__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("remove-in-parent! should only be called from items created via so/bind-children",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

var coll = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,path);
var new_coll = shadow.util.remove_item_from_coll(coll,key,value);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword("bind","update","bind/update",1048601733),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path,new_coll], 0));
});
shadow.object.inspect_BANG_ = (function shadow$object$inspect_BANG_(oref){
var G__19813 = "inspect!";
var G__19814 = shadow.object._id(oref);
var G__19815 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.object._type(oref))].join('');
var G__19816 = cljs.core.clj__GT_js(cljs.core.deref(shadow.object._data(oref)));
return (shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__19813,G__19814,G__19815,G__19816) : shadow.object.info.call(null,G__19813,G__19814,G__19815,G__19816));
});
shadow.object.dump_BANG_ = (function shadow$object$dump_BANG_(){
(shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- LIVE OBJECTS ------------"));

var seq__19817_20241 = cljs.core.seq(cljs.core.seq(cljs.core.deref(shadow.object.instances)));
var chunk__19818_20242 = null;
var count__19819_20243 = (0);
var i__19820_20244 = (0);
while(true){
if((i__19820_20244 < count__19819_20243)){
var vec__19821_20245 = chunk__19818_20242.cljs$core$IIndexed$_nth$arity$2(null,i__19820_20244);
var id_20246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19821_20245,(0),null);
var oref_20247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19821_20245,(1),null);
var G__19824_20248 = "dump";
var G__19825_20249 = id_20246;
var G__19826_20250 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_20247)], 0));
var G__19827_20251 = cljs.core.deref(shadow.object._data(oref_20247));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__19824_20248,G__19825_20249,G__19826_20250,G__19827_20251) : shadow.object.info.call(null,G__19824_20248,G__19825_20249,G__19826_20250,G__19827_20251));


var G__20252 = seq__19817_20241;
var G__20253 = chunk__19818_20242;
var G__20254 = count__19819_20243;
var G__20255 = (i__19820_20244 + (1));
seq__19817_20241 = G__20252;
chunk__19818_20242 = G__20253;
count__19819_20243 = G__20254;
i__19820_20244 = G__20255;
continue;
} else {
var temp__5457__auto___20256 = cljs.core.seq(seq__19817_20241);
if(temp__5457__auto___20256){
var seq__19817_20257__$1 = temp__5457__auto___20256;
if(cljs.core.chunked_seq_QMARK_(seq__19817_20257__$1)){
var c__4351__auto___20258 = cljs.core.chunk_first(seq__19817_20257__$1);
var G__20259 = cljs.core.chunk_rest(seq__19817_20257__$1);
var G__20260 = c__4351__auto___20258;
var G__20261 = cljs.core.count(c__4351__auto___20258);
var G__20262 = (0);
seq__19817_20241 = G__20259;
chunk__19818_20242 = G__20260;
count__19819_20243 = G__20261;
i__19820_20244 = G__20262;
continue;
} else {
var vec__19828_20263 = cljs.core.first(seq__19817_20257__$1);
var id_20264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19828_20263,(0),null);
var oref_20265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19828_20263,(1),null);
var G__19831_20266 = "dump";
var G__19832_20267 = id_20264;
var G__19833_20268 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_20265)], 0));
var G__19834_20269 = cljs.core.deref(shadow.object._data(oref_20265));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__19831_20266,G__19832_20267,G__19833_20268,G__19834_20269) : shadow.object.info.call(null,G__19831_20266,G__19832_20267,G__19833_20268,G__19834_20269));


var G__20270 = cljs.core.next(seq__19817_20257__$1);
var G__20271 = null;
var G__20272 = (0);
var G__20273 = (0);
seq__19817_20241 = G__20270;
chunk__19818_20242 = G__20271;
count__19819_20243 = G__20272;
i__19820_20244 = G__20273;
continue;
}
} else {
}
}
break;
}

return (shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- //LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- //LIVE OBJECTS ------------"));
});
goog.exportSymbol('shadow.object.dump_BANG_', shadow.object.dump_BANG_);

//# sourceMappingURL=shadow.object.js.map
