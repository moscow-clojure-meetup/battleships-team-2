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
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_id$arity$1 == null)))))){
return this$.shadow$object$IObject$_id$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.object._id[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.object._id["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-id",this$);
}
}
}
});

shadow.object._type = (function shadow$object$_type(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_type$arity$1 == null)))))){
return this$.shadow$object$IObject$_type$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.object._type[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.object._type["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-type",this$);
}
}
}
});

shadow.object._data = (function shadow$object$_data(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_data$arity$1 == null)))))){
return this$.shadow$object$IObject$_data$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.object._data[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.object._data["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
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
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_update$arity$2 == null)))))){
return this$.shadow$object$IObject$_update$arity$2(this$,update_fn);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.object._update[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__4434__auto__.call(null,this$,update_fn));
} else {
var m__4431__auto__ = (shadow.object._update["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__4431__auto__.call(null,this$,update_fn));
} else {
throw cljs.core.missing_protocol("IObject.-update",this$);
}
}
}
});

shadow.object._destroy_BANG_ = (function shadow$object$_destroy_BANG_(this$,cause){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_destroy_BANG_$arity$2 == null)))))){
return this$.shadow$object$IObject$_destroy_BANG_$arity$2(this$,cause);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.object._destroy_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__4434__auto__.call(null,this$,cause));
} else {
var m__4431__auto__ = (shadow.object._destroy_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__4431__auto__.call(null,this$,cause));
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
var G__34339 = arguments.length;
switch (G__34339) {
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
var or__4131__auto__ = (((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.object.get_from_dom(obj_or_dom);
}
});
shadow.object.equal_QMARK_ = (function shadow$object$equal_QMARK_(obj,obj_or_dom){
if((((!((obj == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj.shadow$object$IObject$))))?true:(((!obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj))){
} else {
throw (new Error(["Assert failed: ","can only test objects","\n","(satisfies? IObject obj)"].join('')));
}

if((((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),shadow.object._id(obj_or_dom));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),(function (){var temp__5720__auto__ = shadow.dom.data(obj_or_dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(temp__5720__auto__)){
var oid = temp__5720__auto__;
return parseInt(oid,(10));
} else {
return null;
}
})());
}
});
shadow.object.get_parent = (function shadow$object$get_parent(oref){
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),shadow.object._id(oref));
if(cljs.core.truth_(temp__5720__auto__)){
var parent_id = temp__5720__auto__;
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
var G__34833 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(parent);
parent = G__34833;
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
return (function (p1__34383_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instances,p1__34383_SHARP_);
});})(parent_id,child_ids,instances))
,child_ids));
});
goog.exportSymbol('shadow.object.get_children', shadow.object.get_children);
shadow.object.tree_seq = (function shadow$object$tree_seq(var_args){
var G__34399 = arguments.length;
switch (G__34399) {
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
return (function (p1__34409_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__34409_SHARP_));
});})(type_kw))
,shadow.object.get_children(oref));
});
/**
 * basically (get-children (:parent this))
 */
shadow.object.get_siblings = (function shadow$object$get_siblings(p__34429){
var map__34430 = p__34429;
var map__34430__$1 = (((((!((map__34430 == null))))?(((((map__34430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34430):map__34430);
var oref = map__34430__$1;
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34430__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
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
var G__34434 = arguments.length;
switch (G__34434) {
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
return (function (p1__34432_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__34432_SHARP_));
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
var temp__5718__auto__ = shadow.object.get_from_dom(dom);
if(cljs.core.truth_(temp__5718__auto__)){
var obj = temp__5718__auto__;
return obj;
} else {
var temp__5720__auto__ = dom.parentElement;
if(cljs.core.truth_(temp__5720__auto__)){
var parent = temp__5720__auto__;
var G__34837 = parent;
dom = G__34837;
continue;
} else {
return null;
}
}
break;
}
});
shadow.object.notify_BANG_ = (function shadow$object$notify_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34838 = arguments.length;
var i__4731__auto___34839 = (0);
while(true){
if((i__4731__auto___34839 < len__4730__auto___34838)){
args__4736__auto__.push((arguments[i__4731__auto___34839]));

var G__34840 = (i__4731__auto___34839 + (1));
i__4731__auto___34839 = G__34840;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var temp__5720__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),ev], null));
if(cljs.core.truth_(temp__5720__auto__)){
var reactions_to_trigger = temp__5720__auto__;
var seq__34446 = cljs.core.seq(reactions_to_trigger);
var chunk__34447 = null;
var count__34448 = (0);
var i__34449 = (0);
while(true){
if((i__34449 < count__34448)){
var rfn = chunk__34447.cljs$core$IIndexed$_nth$arity$2(null,i__34449);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__34841 = seq__34446;
var G__34842 = chunk__34447;
var G__34843 = count__34448;
var G__34844 = (i__34449 + (1));
seq__34446 = G__34841;
chunk__34447 = G__34842;
count__34448 = G__34843;
i__34449 = G__34844;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__34446);
if(temp__5720__auto____$1){
var seq__34446__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__34446__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__34446__$1);
var G__34845 = cljs.core.chunk_rest(seq__34446__$1);
var G__34846 = c__4550__auto__;
var G__34847 = cljs.core.count(c__4550__auto__);
var G__34848 = (0);
seq__34446 = G__34845;
chunk__34447 = G__34846;
count__34448 = G__34847;
i__34449 = G__34848;
continue;
} else {
var rfn = cljs.core.first(seq__34446__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__34849 = cljs.core.next(seq__34446__$1);
var G__34850 = null;
var G__34851 = (0);
var G__34852 = (0);
seq__34446 = G__34849;
chunk__34447 = G__34850;
count__34448 = G__34851;
i__34449 = G__34852;
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
shadow.object.notify_BANG_.cljs$lang$applyTo = (function (seq34435){
var G__34436 = cljs.core.first(seq34435);
var seq34435__$1 = cljs.core.next(seq34435);
var G__34437 = cljs.core.first(seq34435__$1);
var seq34435__$2 = cljs.core.next(seq34435__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34436,G__34437,seq34435__$2);
});

shadow.object.do_notify_tree = (function shadow$object$do_notify_tree(current_obj,ev,notify_fn){
var seq__34456_34853 = cljs.core.seq(shadow.object.get_children(current_obj));
var chunk__34457_34854 = null;
var count__34458_34855 = (0);
var i__34459_34856 = (0);
while(true){
if((i__34459_34856 < count__34458_34855)){
var child_34857 = chunk__34457_34854.cljs$core$IIndexed$_nth$arity$2(null,i__34459_34856);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_34857,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_34857,ev,notify_fn));


var G__34858 = seq__34456_34853;
var G__34859 = chunk__34457_34854;
var G__34860 = count__34458_34855;
var G__34861 = (i__34459_34856 + (1));
seq__34456_34853 = G__34858;
chunk__34457_34854 = G__34859;
count__34458_34855 = G__34860;
i__34459_34856 = G__34861;
continue;
} else {
var temp__5720__auto___34862 = cljs.core.seq(seq__34456_34853);
if(temp__5720__auto___34862){
var seq__34456_34863__$1 = temp__5720__auto___34862;
if(cljs.core.chunked_seq_QMARK_(seq__34456_34863__$1)){
var c__4550__auto___34864 = cljs.core.chunk_first(seq__34456_34863__$1);
var G__34865 = cljs.core.chunk_rest(seq__34456_34863__$1);
var G__34866 = c__4550__auto___34864;
var G__34867 = cljs.core.count(c__4550__auto___34864);
var G__34868 = (0);
seq__34456_34853 = G__34865;
chunk__34457_34854 = G__34866;
count__34458_34855 = G__34867;
i__34459_34856 = G__34868;
continue;
} else {
var child_34875 = cljs.core.first(seq__34456_34863__$1);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_34875,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_34875,ev,notify_fn));


var G__34876 = cljs.core.next(seq__34456_34863__$1);
var G__34877 = null;
var G__34878 = (0);
var G__34879 = (0);
seq__34456_34853 = G__34876;
chunk__34457_34854 = G__34877;
count__34458_34855 = G__34878;
i__34459_34856 = G__34879;
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
var args__4736__auto__ = [];
var len__4730__auto___34883 = arguments.length;
var i__4731__auto___34884 = (0);
while(true){
if((i__4731__auto___34884 < len__4730__auto___34883)){
args__4736__auto__.push((arguments[i__4731__auto___34884]));

var G__34885 = (i__4731__auto___34884 + (1));
i__4731__auto___34884 = G__34885;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var notify_fn = (function (obj){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,obj,ev,args);
});
return shadow.object.do_notify_tree(oref,ev,notify_fn);
});

shadow.object.notify_tree_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
shadow.object.notify_tree_BANG_.cljs$lang$applyTo = (function (seq34460){
var G__34461 = cljs.core.first(seq34460);
var seq34460__$1 = cljs.core.next(seq34460);
var G__34462 = cljs.core.first(seq34460__$1);
var seq34460__$2 = cljs.core.next(seq34460__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34461,G__34462,seq34460__$2);
});

shadow.object.notify_down_BANG_ = shadow.object.notify_tree_BANG_;
shadow.object.notify_up_BANG_ = (function shadow$object$notify_up_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34886 = arguments.length;
var i__4731__auto___34887 = (0);
while(true){
if((i__4731__auto___34887 < len__4730__auto___34886)){
args__4736__auto__.push((arguments[i__4731__auto___34887]));

var G__34888 = (i__4731__auto___34887 + (1));
i__4731__auto___34887 = G__34888;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var current = shadow.object.get_parent(oref);
while(true){
if(cljs.core.truth_(current)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,current,ev,args);

var G__34889 = shadow.object.get_parent(current);
current = G__34889;
continue;
} else {
return null;
}
break;
}
});

shadow.object.notify_up_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
shadow.object.notify_up_BANG_.cljs$lang$applyTo = (function (seq34464){
var G__34465 = cljs.core.first(seq34464);
var seq34464__$1 = cljs.core.next(seq34464);
var G__34466 = cljs.core.first(seq34464__$1);
var seq34464__$2 = cljs.core.next(seq34464__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34465,G__34466,seq34464__$2);
});

shadow.object.update_BANG_ = (function shadow$object$update_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34890 = arguments.length;
var i__4731__auto___34891 = (0);
while(true){
if((i__4731__auto___34891 < len__4730__auto___34890)){
args__4736__auto__.push((arguments[i__4731__auto___34891]));

var G__34895 = (i__4731__auto___34891 + (1));
i__4731__auto___34891 = G__34895;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,update_fn,args){
if(cljs.core.fn_QMARK_(update_fn)){
} else {
throw ["update! expects a fn as second arg, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([update_fn], 0))].join('');
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
shadow.object.update_BANG_.cljs$lang$applyTo = (function (seq34470){
var G__34471 = cljs.core.first(seq34470);
var seq34470__$1 = cljs.core.next(seq34470);
var G__34472 = cljs.core.first(seq34470__$1);
var seq34470__$2 = cljs.core.next(seq34470__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34471,G__34472,seq34470__$2);
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
var temp__5718__auto__ = shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("dom","remove","dom/remove",-131527420));
if(cljs.core.truth_(temp__5718__auto__)){
var custom_remove = temp__5718__auto__;
var G__34515 = this$;
var G__34516 = new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$);
return (custom_remove.cljs$core$IFn$_invoke$arity$2 ? custom_remove.cljs$core$IFn$_invoke$arity$2(G__34515,G__34516) : custom_remove.call(null,G__34515,G__34516));
} else {
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
}
}
});
shadow.object.destroy_BANG_ = (function shadow$object$destroy_BANG_(var_args){
var G__34522 = arguments.length;
switch (G__34522) {
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

var seq__34524 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),dom_events));
var chunk__34525 = null;
var count__34526 = (0);
var i__34527 = (0);
while(true){
if((i__34527 < count__34526)){
var vec__34534 = chunk__34525.cljs$core$IIndexed$_nth$arity$2(null,i__34527);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34534,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34534,(1),null);
var ev_def = vec__34534;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))].join('');
} else {
}

var handler_34903__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__34524,chunk__34525,count__34526,i__34527,vec__34534,ev,handler,ev_def){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__34524,chunk__34525,count__34526,i__34527,vec__34534,ev,handler,ev_def))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__34524,chunk__34525,count__34526,i__34527,handler_34903__$1,vec__34534,ev,handler,ev_def){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_34903__$1.cljs$core$IFn$_invoke$arity$3 ? handler_34903__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_34903__$1.call(null,oref,e,el));
});})(seq__34524,chunk__34525,count__34526,i__34527,handler_34903__$1,vec__34534,ev,handler,ev_def))
);


var G__34905 = seq__34524;
var G__34906 = chunk__34525;
var G__34907 = count__34526;
var G__34908 = (i__34527 + (1));
seq__34524 = G__34905;
chunk__34525 = G__34906;
count__34526 = G__34907;
i__34527 = G__34908;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__34524);
if(temp__5720__auto__){
var seq__34524__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34524__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__34524__$1);
var G__34909 = cljs.core.chunk_rest(seq__34524__$1);
var G__34910 = c__4550__auto__;
var G__34911 = cljs.core.count(c__4550__auto__);
var G__34912 = (0);
seq__34524 = G__34909;
chunk__34525 = G__34910;
count__34526 = G__34911;
i__34527 = G__34912;
continue;
} else {
var vec__34545 = cljs.core.first(seq__34524__$1);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34545,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34545,(1),null);
var ev_def = vec__34545;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))].join('');
} else {
}

var handler_34915__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__34524,chunk__34525,count__34526,i__34527,vec__34545,ev,handler,ev_def,seq__34524__$1,temp__5720__auto__){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__34524,chunk__34525,count__34526,i__34527,vec__34545,ev,handler,ev_def,seq__34524__$1,temp__5720__auto__))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__34524,chunk__34525,count__34526,i__34527,handler_34915__$1,vec__34545,ev,handler,ev_def,seq__34524__$1,temp__5720__auto__){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_34915__$1.cljs$core$IFn$_invoke$arity$3 ? handler_34915__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_34915__$1.call(null,oref,e,el));
});})(seq__34524,chunk__34525,count__34526,i__34527,handler_34915__$1,vec__34545,ev,handler,ev_def,seq__34524__$1,temp__5720__auto__))
);


var G__34917 = cljs.core.next(seq__34524__$1);
var G__34918 = null;
var G__34919 = (0);
var G__34920 = (0);
seq__34524 = G__34917;
chunk__34525 = G__34918;
count__34526 = G__34919;
i__34527 = G__34920;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.object.reaction_merge = (function shadow$object$reaction_merge(result,p__34552){
var vec__34553 = p__34552;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34553,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34553,(1),null);
if(cljs.core.truth_((function (){var and__4120__auto__ = event;
if(cljs.core.truth_(and__4120__auto__)){
return handler;
} else {
return and__4120__auto__;
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
var args__4736__auto__ = [];
var len__4730__auto___34928 = arguments.length;
var i__4731__auto___34929 = (0);
while(true){
if((i__4731__auto___34929 < len__4730__auto___34928)){
args__4736__auto__.push((arguments[i__4731__auto___34929]));

var G__34930 = (i__4731__auto___34929 + (1));
i__4731__auto___34929 = G__34930;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.object.define.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.object.define.cljs$core$IFn$_invoke$arity$variadic = (function (id,args){
if((id instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object id needs to be a keyword",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(args))){
} else {
throw ["invalid object definition ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," args: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0))].join('');
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
}catch (e34559){if((e34559 instanceof Object)){
var e = e34559;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("failed to define object",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
} else {
throw e34559;

}
}});

shadow.object.define.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.object.define.cljs$lang$applyTo = (function (seq34557){
var G__34558 = cljs.core.first(seq34557);
var seq34557__$1 = cljs.core.next(seq34557);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34558,seq34557__$1);
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
var G__34561 = arguments.length;
switch (G__34561) {
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
var dom = (function (){var G__34563 = (dom_fn.cljs$core$IFn$_invoke$arity$2 ? dom_fn.cljs$core$IFn$_invoke$arity$2(oref,value) : dom_fn.call(null,oref,value));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__34563) : shadow.dom.build.call(null,G__34563));
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
 * @implements {cljs.core.IKVReduce}
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
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k34565,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__34569 = k34565;
var G__34569__$1 = (((G__34569 instanceof cljs.core.Keyword))?G__34569.fqn:null);
switch (G__34569__$1) {
case "key":
return self__.key;

break;
case "handler":
return self__.handler;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34565,else__4388__auto__);

}
});

shadow.object.Watch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__34570){
var vec__34571 = p__34570;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34571,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34571,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.object.Watch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.object.Watch{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null))], null),self__.__extmap));
});

shadow.object.Watch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34564){
var self__ = this;
var G__34564__$1 = this;
return (new cljs.core.RecordIter((0),G__34564__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"handler","handler",-195596612)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.object.Watch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.object.Watch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.object.Watch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.object.Watch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__34576 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-17677043 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__34576(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.object.Watch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34566,other34567){
var self__ = this;
var this34566__$1 = this;
return (((!((other34567 == null)))) && ((this34566__$1.constructor === other34567.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34566__$1.key,other34567.key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34566__$1.handler,other34567.handler)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34566__$1.__extmap,other34567.__extmap)));
});

shadow.object.Watch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"handler","handler",-195596612),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.object.Watch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__34564){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__34584 = cljs.core.keyword_identical_QMARK_;
var expr__34585 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__34587 = new cljs.core.Keyword(null,"key","key",-1516042587);
var G__34588 = expr__34585;
return (pred__34584.cljs$core$IFn$_invoke$arity$2 ? pred__34584.cljs$core$IFn$_invoke$arity$2(G__34587,G__34588) : pred__34584.call(null,G__34587,G__34588));
})())){
return (new shadow.object.Watch(G__34564,self__.handler,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34589 = new cljs.core.Keyword(null,"handler","handler",-195596612);
var G__34590 = expr__34585;
return (pred__34584.cljs$core$IFn$_invoke$arity$2 ? pred__34584.cljs$core$IFn$_invoke$arity$2(G__34589,G__34590) : pred__34584.call(null,G__34589,G__34590));
})())){
return (new shadow.object.Watch(self__.key,G__34564,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__34564),null));
}
}
});

shadow.object.Watch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key","key",-1516042587),self__.key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler,null))], null),self__.__extmap));
});

shadow.object.Watch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__34564){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,G__34564,self__.__extmap,self__.__hash));
});

shadow.object.Watch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.object.Watch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"handler","handler",1444934915,null)], null);
});

shadow.object.Watch.cljs$lang$type = true;

shadow.object.Watch.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.object/Watch",null,(1),null));
});

shadow.object.Watch.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.object/Watch");
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
shadow.object.map__GT_Watch = (function shadow$object$map__GT_Watch(G__34568){
var extmap__4424__auto__ = (function (){var G__34616 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34568,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612)], 0));
if(cljs.core.record_QMARK_(G__34568)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34616);
} else {
return G__34616;
}
})();
return (new shadow.object.Watch(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__34568),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(G__34568),null,cljs.core.not_empty(extmap__4424__auto__),null));
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
return (function (p1__34637_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__34637_SHARP_));
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

var seq__34722 = cljs.core.seq(self__.watches);
var chunk__34723 = null;
var count__34724 = (0);
var i__34725 = (0);
while(true){
if((i__34725 < count__34724)){
var map__34733 = chunk__34723.cljs$core$IIndexed$_nth$arity$2(null,i__34725);
var map__34733__$1 = (((((!((map__34733 == null))))?(((((map__34733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34733):map__34733);
var watch = map__34733__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34733__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34733__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__34976 = seq__34722;
var G__34977 = chunk__34723;
var G__34978 = count__34724;
var G__34979 = (i__34725 + (1));
seq__34722 = G__34976;
chunk__34723 = G__34977;
count__34724 = G__34978;
i__34725 = G__34979;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__34722);
if(temp__5720__auto__){
var seq__34722__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34722__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__34722__$1);
var G__34983 = cljs.core.chunk_rest(seq__34722__$1);
var G__34984 = c__4550__auto__;
var G__34985 = cljs.core.count(c__4550__auto__);
var G__34986 = (0);
seq__34722 = G__34983;
chunk__34723 = G__34984;
count__34724 = G__34985;
i__34725 = G__34986;
continue;
} else {
var map__34735 = cljs.core.first(seq__34722__$1);
var map__34735__$1 = (((((!((map__34735 == null))))?(((((map__34735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34735):map__34735);
var watch = map__34735__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34735__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34735__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__34989 = cljs.core.next(seq__34722__$1);
var G__34990 = null;
var G__34991 = (0);
var G__34992 = (0);
seq__34722 = G__34989;
chunk__34723 = G__34990;
count__34724 = G__34991;
i__34725 = G__34992;
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
var seq__34737_34993 = cljs.core.seq(shadow.object.get_children(this$__$1));
var chunk__34738_34994 = null;
var count__34739_34995 = (0);
var i__34740_34996 = (0);
while(true){
if((i__34740_34996 < count__34739_34995)){
var child_35001 = chunk__34738_34994.cljs$core$IIndexed$_nth$arity$2(null,i__34740_34996);
shadow.object._destroy_BANG_(child_35001,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__35005 = seq__34737_34993;
var G__35006 = chunk__34738_34994;
var G__35007 = count__34739_34995;
var G__35008 = (i__34740_34996 + (1));
seq__34737_34993 = G__35005;
chunk__34738_34994 = G__35006;
count__34739_34995 = G__35007;
i__34740_34996 = G__35008;
continue;
} else {
var temp__5720__auto___35009 = cljs.core.seq(seq__34737_34993);
if(temp__5720__auto___35009){
var seq__34737_35010__$1 = temp__5720__auto___35009;
if(cljs.core.chunked_seq_QMARK_(seq__34737_35010__$1)){
var c__4550__auto___35015 = cljs.core.chunk_first(seq__34737_35010__$1);
var G__35016 = cljs.core.chunk_rest(seq__34737_35010__$1);
var G__35017 = c__4550__auto___35015;
var G__35018 = cljs.core.count(c__4550__auto___35015);
var G__35019 = (0);
seq__34737_34993 = G__35016;
chunk__34738_34994 = G__35017;
count__34739_34995 = G__35018;
i__34740_34996 = G__35019;
continue;
} else {
var child_35027 = cljs.core.first(seq__34737_35010__$1);
shadow.object._destroy_BANG_(child_35027,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__35031 = cljs.core.next(seq__34737_35010__$1);
var G__35032 = null;
var G__35033 = (0);
var G__35034 = (0);
seq__34737_34993 = G__35031;
chunk__34738_34994 = G__35032;
count__34739_34995 = G__35033;
i__34740_34996 = G__35034;
continue;
}
} else {
}
}
break;
}

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$__$1,new cljs.core.Keyword(null,"destroy","destroy",-843660405),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cause], 0));

shadow.object.dom_destroy(this$__$1,cause);

var return_value_35041 = new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360).cljs$core$IFn$_invoke$arity$1(this$__$1);
if((return_value_35041 == null)){
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.result_chan,return_value_35041);
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

shadow.object.ObjectRef.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.object/ObjectRef");
});

/**
 * Positional factory function for shadow.object/ObjectRef.
 */
shadow.object.__GT_ObjectRef = (function shadow$object$__GT_ObjectRef(id,type,data,watches,result_chan){
return (new shadow.object.ObjectRef(id,type,data,watches,result_chan));
});

shadow.object.add_reaction_BANG_ = (function shadow$object$add_reaction_BANG_(var_args){
var G__34742 = arguments.length;
switch (G__34742) {
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
var G__34744 = arguments.length;
switch (G__34744) {
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
if((((!((oref == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === oref.shadow$object$IObject$))))?true:(((!oref.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref))){
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
var args__4736__auto__ = [];
var len__4730__auto___35055 = arguments.length;
var i__4731__auto___35056 = (0);
while(true){
if((i__4731__auto___35056 < len__4730__auto___35055)){
args__4736__auto__.push((arguments[i__4731__auto___35056]));

var G__35057 = (i__4731__auto___35056 + (1));
i__4731__auto___35056 = G__35057;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return shadow.object.create.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
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

var dom_events_35058 = new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY);
var temp__5718__auto___35059 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(temp__5718__auto___35059)){
var dom_35060 = temp__5718__auto___35059;
shadow.dom.set_data(dom_35060,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.bind_dom_events(oref,dom_35060,dom_events_35058);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_35060], 0));

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_35060], 0));
} else {
var temp__5720__auto___35062 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5720__auto___35062)){
var dom_fn_35063 = temp__5720__auto___35062;
var dom_35064 = (function (){var G__34749 = (dom_fn_35063.cljs$core$IFn$_invoke$arity$2 ? dom_fn_35063.cljs$core$IFn$_invoke$arity$2(oref,node_children) : dom_fn_35063.call(null,oref,node_children));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__34749) : shadow.dom.build.call(null,G__34749));
})();
shadow.dom.set_data(dom_35064,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_35064], 0));

shadow.object.bind_dom_events(oref,dom_35064,dom_events_35058);

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_35064], 0));
} else {
}
}

var temp__5720__auto___35065 = new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5720__auto___35065)){
var watches_35066 = temp__5720__auto___35065;
var seq__34750_35067 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),watches_35066));
var chunk__34751_35068 = null;
var count__34752_35069 = (0);
var i__34753_35070 = (0);
while(true){
if((i__34753_35070 < count__34752_35069)){
var vec__34760_35071 = chunk__34751_35068.cljs$core$IIndexed$_nth$arity$2(null,i__34753_35070);
var attr_35072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34760_35071,(0),null);
var handler_35073 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34760_35071,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_35072,((function (seq__34750_35067,chunk__34751_35068,count__34752_35069,i__34753_35070,vec__34760_35071,attr_35072,handler_35073,watches_35066,temp__5720__auto___35065,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_35073.cljs$core$IFn$_invoke$arity$3 ? handler_35073.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_35073.call(null,oref,old,new$));
});})(seq__34750_35067,chunk__34751_35068,count__34752_35069,i__34753_35070,vec__34760_35071,attr_35072,handler_35073,watches_35066,temp__5720__auto___35065,oid,parent,result_chan,odef,obj,oref))
);


var G__35074 = seq__34750_35067;
var G__35075 = chunk__34751_35068;
var G__35076 = count__34752_35069;
var G__35077 = (i__34753_35070 + (1));
seq__34750_35067 = G__35074;
chunk__34751_35068 = G__35075;
count__34752_35069 = G__35076;
i__34753_35070 = G__35077;
continue;
} else {
var temp__5720__auto___35078__$1 = cljs.core.seq(seq__34750_35067);
if(temp__5720__auto___35078__$1){
var seq__34750_35079__$1 = temp__5720__auto___35078__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34750_35079__$1)){
var c__4550__auto___35080 = cljs.core.chunk_first(seq__34750_35079__$1);
var G__35081 = cljs.core.chunk_rest(seq__34750_35079__$1);
var G__35082 = c__4550__auto___35080;
var G__35083 = cljs.core.count(c__4550__auto___35080);
var G__35084 = (0);
seq__34750_35067 = G__35081;
chunk__34751_35068 = G__35082;
count__34752_35069 = G__35083;
i__34753_35070 = G__35084;
continue;
} else {
var vec__34763_35085 = cljs.core.first(seq__34750_35079__$1);
var attr_35086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34763_35085,(0),null);
var handler_35087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34763_35085,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_35086,((function (seq__34750_35067,chunk__34751_35068,count__34752_35069,i__34753_35070,vec__34763_35085,attr_35086,handler_35087,seq__34750_35079__$1,temp__5720__auto___35078__$1,watches_35066,temp__5720__auto___35065,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_35087.cljs$core$IFn$_invoke$arity$3 ? handler_35087.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_35087.call(null,oref,old,new$));
});})(seq__34750_35067,chunk__34751_35068,count__34752_35069,i__34753_35070,vec__34763_35085,attr_35086,handler_35087,seq__34750_35079__$1,temp__5720__auto___35078__$1,watches_35066,temp__5720__auto___35065,oid,parent,result_chan,odef,obj,oref))
);


var G__35089 = cljs.core.next(seq__34750_35079__$1);
var G__35090 = null;
var G__35091 = (0);
var G__35092 = (0);
seq__34750_35067 = G__35089;
chunk__34751_35068 = G__35090;
count__34752_35069 = G__35091;
i__34753_35070 = G__35092;
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
shadow.object.create.cljs$lang$applyTo = (function (seq34746){
var G__34747 = cljs.core.first(seq34746);
var seq34746__$1 = cljs.core.next(seq34746);
var G__34748 = cljs.core.first(seq34746__$1);
var seq34746__$2 = cljs.core.next(seq34746__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34747,G__34748,seq34746__$2);
});

/**
 * [oref attr node-gen] produces a node via (node-gen new-value)
 * watches obj for changes and replaces the generated node on change (node-gen defaults to str)
 * 
 *   only use if the node has no attached behavior like clicks, use bind with an extra object for those
 */
shadow.object.bind_simple = (function shadow$object$bind_simple(var_args){
var G__34768 = arguments.length;
switch (G__34768) {
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
return (function (p1__34766_SHARP_){
var G__34769 = (node_gen.cljs$core$IFn$_invoke$arity$1 ? node_gen.cljs$core$IFn$_invoke$arity$1(p1__34766_SHARP_) : node_gen.call(null,p1__34766_SHARP_));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__34769) : shadow.dom.build.call(null,G__34769));
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

var G__34770 = new_child;
var G__34771 = new cljs.core.Keyword("dom","entered","dom/entered",506699596);
return (shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2 ? shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2(G__34770,G__34771) : shadow.object.notify_down_BANG_.call(null,G__34770,G__34771));
});})(attr__$1,curval,make_child_fn,child))
);

return cljs.core.deref(child);
});
shadow.object.coll_destroy_children = (function shadow$object$coll_destroy_children(children,c,diff){
var seq__34772_35107 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(c + diff),c));
var chunk__34773_35108 = null;
var count__34774_35109 = (0);
var i__34775_35110 = (0);
while(true){
if((i__34775_35110 < count__34774_35109)){
var obj_35111 = chunk__34773_35108.cljs$core$IIndexed$_nth$arity$2(null,i__34775_35110);
var obj_35112__$1 = shadow.object.get_from_dom(obj_35111);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_35112__$1);


var G__35114 = seq__34772_35107;
var G__35115 = chunk__34773_35108;
var G__35116 = count__34774_35109;
var G__35117 = (i__34775_35110 + (1));
seq__34772_35107 = G__35114;
chunk__34773_35108 = G__35115;
count__34774_35109 = G__35116;
i__34775_35110 = G__35117;
continue;
} else {
var temp__5720__auto___35118 = cljs.core.seq(seq__34772_35107);
if(temp__5720__auto___35118){
var seq__34772_35119__$1 = temp__5720__auto___35118;
if(cljs.core.chunked_seq_QMARK_(seq__34772_35119__$1)){
var c__4550__auto___35120 = cljs.core.chunk_first(seq__34772_35119__$1);
var G__35121 = cljs.core.chunk_rest(seq__34772_35119__$1);
var G__35122 = c__4550__auto___35120;
var G__35123 = cljs.core.count(c__4550__auto___35120);
var G__35124 = (0);
seq__34772_35107 = G__35121;
chunk__34773_35108 = G__35122;
count__34774_35109 = G__35123;
i__34775_35110 = G__35124;
continue;
} else {
var obj_35125 = cljs.core.first(seq__34772_35119__$1);
var obj_35126__$1 = shadow.object.get_from_dom(obj_35125);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_35126__$1);


var G__35127 = cljs.core.next(seq__34772_35119__$1);
var G__35128 = null;
var G__35129 = (0);
var G__35130 = (0);
seq__34772_35107 = G__35127;
chunk__34773_35108 = G__35128;
count__34774_35109 = G__35129;
i__34775_35110 = G__35130;
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
var G__34778 = arguments.length;
switch (G__34778) {
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
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6(node,parent,attr,item_type,item_key,(function (p1__34776_SHARP_){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,p1__34776_SHARP_);
}));
});

shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6 = (function (node,parent,attr,item_type,item_key,coll_transform){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var update_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var coll_dom = (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(node) : shadow.dom.build.call(null,node));
var make_item_fn = ((function (attr__$1,update_children,coll_dom){
return (function (p__34779){
var vec__34780 = p__34779;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34780,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34780,(1),null);
var obj = shadow.object.create(item_type,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),parent,new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048),attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616),key,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366),item_key,item_key,val]));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(obj,item_key,((function (obj,vec__34780,key,val,attr__$1,update_children,coll_dom){
return (function (old,new$){
var parent_key = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(obj));
(shadow.object.log.cljs$core$IFn$_invoke$arity$6 ? shadow.object.log.cljs$core$IFn$_invoke$arity$6("direct child update",parent,obj,key,parent_key,new$) : shadow.object.log.call(null,"direct child update",parent,obj,key,parent_key,new$));

cljs.core.reset_BANG_(update_children,false);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parent_key,new$], 0));

return cljs.core.reset_BANG_(update_children,true);
});})(obj,vec__34780,key,val,attr__$1,update_children,coll_dom))
);

return obj;
});})(attr__$1,update_children,coll_dom))
;
var seq__34783_35147 = cljs.core.seq((function (){var G__34788 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,attr__$1);
return (coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(G__34788) : coll_transform.call(null,G__34788));
})());
var chunk__34784_35148 = null;
var count__34785_35149 = (0);
var i__34786_35150 = (0);
while(true){
if((i__34786_35150 < count__34785_35149)){
var item_35151 = chunk__34784_35148.cljs$core$IIndexed$_nth$arity$2(null,i__34786_35150);
shadow.object.dom_enter(coll_dom,make_item_fn(item_35151));


var G__35152 = seq__34783_35147;
var G__35153 = chunk__34784_35148;
var G__35154 = count__34785_35149;
var G__35155 = (i__34786_35150 + (1));
seq__34783_35147 = G__35152;
chunk__34784_35148 = G__35153;
count__34785_35149 = G__35154;
i__34786_35150 = G__35155;
continue;
} else {
var temp__5720__auto___35156 = cljs.core.seq(seq__34783_35147);
if(temp__5720__auto___35156){
var seq__34783_35157__$1 = temp__5720__auto___35156;
if(cljs.core.chunked_seq_QMARK_(seq__34783_35157__$1)){
var c__4550__auto___35161 = cljs.core.chunk_first(seq__34783_35157__$1);
var G__35162 = cljs.core.chunk_rest(seq__34783_35157__$1);
var G__35163 = c__4550__auto___35161;
var G__35164 = cljs.core.count(c__4550__auto___35161);
var G__35165 = (0);
seq__34783_35147 = G__35162;
chunk__34784_35148 = G__35163;
count__34785_35149 = G__35164;
i__34786_35150 = G__35165;
continue;
} else {
var item_35167 = cljs.core.first(seq__34783_35157__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_35167));


var G__35168 = cljs.core.next(seq__34783_35157__$1);
var G__35169 = null;
var G__35170 = (0);
var G__35171 = (0);
seq__34783_35147 = G__35168;
chunk__34784_35148 = G__35169;
count__34785_35149 = G__35170;
i__34786_35150 = G__35171;
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
var count_children__$1 = (function (){var x__4222__auto__ = count_new;
var y__4223__auto__ = count_children;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var n__4607__auto___35172 = count_children__$1;
var idx_35173 = (0);
while(true){
if((idx_35173 < n__4607__auto___35172)){
var cn_35177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,idx_35173);
var cc_35178 = shadow.object.get_from_dom(cn_35177);
var ckey_35179 = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(cc_35178);
var cval_35180 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cc_35178,item_key);
var vec__34789_35181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new_coll,idx_35173);
var nkey_35182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34789_35181,(0),null);
var nval_35183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34789_35181,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ckey_35179,nkey_35182)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cval_35180,nval_35183)))){
} else {
var new_obj_35186 = make_item_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nkey_35182,nval_35183], null));
shadow.dom.replace_node(cn_35177,new_obj_35186);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cc_35178);

shadow.object.notify_tree_BANG_(new_obj_35186,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
}

var G__35188 = (idx_35173 + (1));
idx_35173 = G__35188;
continue;
} else {
}
break;
}

if((diff > (0))){
var seq__34792_35192 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new_coll,count_children__$1,count_new));
var chunk__34793_35193 = null;
var count__34794_35194 = (0);
var i__34795_35195 = (0);
while(true){
if((i__34795_35195 < count__34794_35194)){
var item_35203 = chunk__34793_35193.cljs$core$IIndexed$_nth$arity$2(null,i__34795_35195);
shadow.object.dom_enter(coll_dom,make_item_fn(item_35203));


var G__35207 = seq__34792_35192;
var G__35208 = chunk__34793_35193;
var G__35209 = count__34794_35194;
var G__35210 = (i__34795_35195 + (1));
seq__34792_35192 = G__35207;
chunk__34793_35193 = G__35208;
count__34794_35194 = G__35209;
i__34795_35195 = G__35210;
continue;
} else {
var temp__5720__auto___35212 = cljs.core.seq(seq__34792_35192);
if(temp__5720__auto___35212){
var seq__34792_35213__$1 = temp__5720__auto___35212;
if(cljs.core.chunked_seq_QMARK_(seq__34792_35213__$1)){
var c__4550__auto___35218 = cljs.core.chunk_first(seq__34792_35213__$1);
var G__35219 = cljs.core.chunk_rest(seq__34792_35213__$1);
var G__35220 = c__4550__auto___35218;
var G__35221 = cljs.core.count(c__4550__auto___35218);
var G__35222 = (0);
seq__34792_35192 = G__35219;
chunk__34793_35193 = G__35220;
count__34794_35194 = G__35221;
i__34795_35195 = G__35222;
continue;
} else {
var item_35223 = cljs.core.first(seq__34792_35213__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_35223));


var G__35224 = cljs.core.next(seq__34792_35213__$1);
var G__35225 = null;
var G__35226 = (0);
var G__35227 = (0);
seq__34792_35192 = G__35224;
chunk__34793_35193 = G__35225;
count__34794_35194 = G__35226;
i__34795_35195 = G__35227;
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
if(cljs.core.truth_((function (){var and__4120__auto__ = key;
if(cljs.core.truth_(and__4120__auto__)){
return path;
} else {
return and__4120__auto__;
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
var G__34796 = "inspect!";
var G__34797 = shadow.object._id(oref);
var G__34798 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.object._type(oref));
var G__34799 = cljs.core.clj__GT_js(cljs.core.deref(shadow.object._data(oref)));
return (shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__34796,G__34797,G__34798,G__34799) : shadow.object.info.call(null,G__34796,G__34797,G__34798,G__34799));
});
shadow.object.dump_BANG_ = (function shadow$object$dump_BANG_(){
(shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- LIVE OBJECTS ------------"));

var seq__34800_35237 = cljs.core.seq(cljs.core.seq(cljs.core.deref(shadow.object.instances)));
var chunk__34801_35238 = null;
var count__34802_35239 = (0);
var i__34803_35240 = (0);
while(true){
if((i__34803_35240 < count__34802_35239)){
var vec__34818_35241 = chunk__34801_35238.cljs$core$IIndexed$_nth$arity$2(null,i__34803_35240);
var id_35242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34818_35241,(0),null);
var oref_35243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34818_35241,(1),null);
var G__34821_35245 = "dump";
var G__34822_35246 = id_35242;
var G__34823_35247 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_35243)], 0));
var G__34824_35248 = cljs.core.deref(shadow.object._data(oref_35243));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__34821_35245,G__34822_35246,G__34823_35247,G__34824_35248) : shadow.object.info.call(null,G__34821_35245,G__34822_35246,G__34823_35247,G__34824_35248));


var G__35250 = seq__34800_35237;
var G__35251 = chunk__34801_35238;
var G__35252 = count__34802_35239;
var G__35253 = (i__34803_35240 + (1));
seq__34800_35237 = G__35250;
chunk__34801_35238 = G__35251;
count__34802_35239 = G__35252;
i__34803_35240 = G__35253;
continue;
} else {
var temp__5720__auto___35255 = cljs.core.seq(seq__34800_35237);
if(temp__5720__auto___35255){
var seq__34800_35256__$1 = temp__5720__auto___35255;
if(cljs.core.chunked_seq_QMARK_(seq__34800_35256__$1)){
var c__4550__auto___35257 = cljs.core.chunk_first(seq__34800_35256__$1);
var G__35258 = cljs.core.chunk_rest(seq__34800_35256__$1);
var G__35259 = c__4550__auto___35257;
var G__35260 = cljs.core.count(c__4550__auto___35257);
var G__35261 = (0);
seq__34800_35237 = G__35258;
chunk__34801_35238 = G__35259;
count__34802_35239 = G__35260;
i__34803_35240 = G__35261;
continue;
} else {
var vec__34825_35262 = cljs.core.first(seq__34800_35256__$1);
var id_35263 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34825_35262,(0),null);
var oref_35264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34825_35262,(1),null);
var G__34828_35266 = "dump";
var G__34829_35267 = id_35263;
var G__34830_35268 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_35264)], 0));
var G__34831_35269 = cljs.core.deref(shadow.object._data(oref_35264));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__34828_35266,G__34829_35267,G__34830_35268,G__34831_35269) : shadow.object.info.call(null,G__34828_35266,G__34829_35267,G__34830_35268,G__34831_35269));


var G__35270 = cljs.core.next(seq__34800_35256__$1);
var G__35271 = null;
var G__35272 = (0);
var G__35273 = (0);
seq__34800_35237 = G__35270;
chunk__34801_35238 = G__35271;
count__34802_35239 = G__35272;
i__34803_35240 = G__35273;
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
