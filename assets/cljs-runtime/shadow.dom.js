goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33586 = coll;
var G__33587 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33586,G__33587) : shadow.dom.lazy_native_coll_seq.call(null,G__33586,G__33587));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__33630 = arguments.length;
switch (G__33630) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__33633 = arguments.length;
switch (G__33633) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__33639 = arguments.length;
switch (G__33639) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__33641 = arguments.length;
switch (G__33641) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__33645 = arguments.length;
switch (G__33645) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__33648 = document;
var G__33649 = shadow.dom.dom_node(el);
return goog.dom.contains(G__33648,G__33649);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__33651 = shadow.dom.dom_node(parent);
var G__33652 = shadow.dom.dom_node(el);
return goog.dom.contains(G__33651,G__33652);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__33654 = shadow.dom.dom_node(el);
var G__33655 = cls;
return goog.dom.classlist.add(G__33654,G__33655);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__33657 = shadow.dom.dom_node(el);
var G__33658 = cls;
return goog.dom.classlist.remove(G__33657,G__33658);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33663 = arguments.length;
switch (G__33663) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__33667 = shadow.dom.dom_node(el);
var G__33668 = cls;
return goog.dom.classlist.toggle(G__33667,G__33668);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33675){if((e33675 instanceof Object)){
var e = e33675;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33675;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33678 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33679 = null;
var count__33680 = (0);
var i__33681 = (0);
while(true){
if((i__33681 < count__33680)){
var el = chunk__33679.cljs$core$IIndexed$_nth$arity$2(null,i__33681);
var handler_34282__$1 = ((function (seq__33678,chunk__33679,count__33680,i__33681,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33678,chunk__33679,count__33680,i__33681,el))
;
var G__33688_34283 = el;
var G__33689_34284 = cljs.core.name(ev);
var G__33690_34285 = handler_34282__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33688_34283,G__33689_34284,G__33690_34285) : shadow.dom.dom_listen.call(null,G__33688_34283,G__33689_34284,G__33690_34285));


var G__34286 = seq__33678;
var G__34287 = chunk__33679;
var G__34288 = count__33680;
var G__34289 = (i__33681 + (1));
seq__33678 = G__34286;
chunk__33679 = G__34287;
count__33680 = G__34288;
i__33681 = G__34289;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__33678);
if(temp__5720__auto__){
var seq__33678__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33678__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33678__$1);
var G__34290 = cljs.core.chunk_rest(seq__33678__$1);
var G__34291 = c__4550__auto__;
var G__34292 = cljs.core.count(c__4550__auto__);
var G__34293 = (0);
seq__33678 = G__34290;
chunk__33679 = G__34291;
count__33680 = G__34292;
i__33681 = G__34293;
continue;
} else {
var el = cljs.core.first(seq__33678__$1);
var handler_34294__$1 = ((function (seq__33678,chunk__33679,count__33680,i__33681,el,seq__33678__$1,temp__5720__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33678,chunk__33679,count__33680,i__33681,el,seq__33678__$1,temp__5720__auto__))
;
var G__33691_34295 = el;
var G__33692_34296 = cljs.core.name(ev);
var G__33693_34297 = handler_34294__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33691_34295,G__33692_34296,G__33693_34297) : shadow.dom.dom_listen.call(null,G__33691_34295,G__33692_34296,G__33693_34297));


var G__34298 = cljs.core.next(seq__33678__$1);
var G__34299 = null;
var G__34300 = (0);
var G__34301 = (0);
seq__33678 = G__34298;
chunk__33679 = G__34299;
count__33680 = G__34300;
i__33681 = G__34301;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33696 = arguments.length;
switch (G__33696) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__33700 = shadow.dom.dom_node(el);
var G__33701 = cljs.core.name(ev);
var G__33702 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33700,G__33701,G__33702) : shadow.dom.dom_listen.call(null,G__33700,G__33701,G__33702));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__33706 = shadow.dom.dom_node(el);
var G__33707 = cljs.core.name(ev);
var G__33708 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__33706,G__33707,G__33708) : shadow.dom.dom_listen_remove.call(null,G__33706,G__33707,G__33708));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33711 = cljs.core.seq(events);
var chunk__33712 = null;
var count__33713 = (0);
var i__33714 = (0);
while(true){
if((i__33714 < count__33713)){
var vec__33725 = chunk__33712.cljs$core$IIndexed$_nth$arity$2(null,i__33714);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33725,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33725,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34303 = seq__33711;
var G__34304 = chunk__33712;
var G__34305 = count__33713;
var G__34306 = (i__33714 + (1));
seq__33711 = G__34303;
chunk__33712 = G__34304;
count__33713 = G__34305;
i__33714 = G__34306;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__33711);
if(temp__5720__auto__){
var seq__33711__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33711__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33711__$1);
var G__34307 = cljs.core.chunk_rest(seq__33711__$1);
var G__34308 = c__4550__auto__;
var G__34309 = cljs.core.count(c__4550__auto__);
var G__34310 = (0);
seq__33711 = G__34307;
chunk__33712 = G__34308;
count__33713 = G__34309;
i__33714 = G__34310;
continue;
} else {
var vec__33730 = cljs.core.first(seq__33711__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33730,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33730,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34311 = cljs.core.next(seq__33711__$1);
var G__34312 = null;
var G__34313 = (0);
var G__34314 = (0);
seq__33711 = G__34311;
chunk__33712 = G__34312;
count__33713 = G__34313;
i__33714 = G__34314;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33737 = cljs.core.seq(styles);
var chunk__33738 = null;
var count__33739 = (0);
var i__33740 = (0);
while(true){
if((i__33740 < count__33739)){
var vec__33759 = chunk__33738.cljs$core$IIndexed$_nth$arity$2(null,i__33740);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33759,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33759,(1),null);
var G__33762_34315 = dom;
var G__33763_34316 = cljs.core.name(k);
var G__33764_34317 = (((v == null))?"":v);
goog.style.setStyle(G__33762_34315,G__33763_34316,G__33764_34317);


var G__34318 = seq__33737;
var G__34319 = chunk__33738;
var G__34320 = count__33739;
var G__34321 = (i__33740 + (1));
seq__33737 = G__34318;
chunk__33738 = G__34319;
count__33739 = G__34320;
i__33740 = G__34321;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__33737);
if(temp__5720__auto__){
var seq__33737__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33737__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33737__$1);
var G__34322 = cljs.core.chunk_rest(seq__33737__$1);
var G__34323 = c__4550__auto__;
var G__34324 = cljs.core.count(c__4550__auto__);
var G__34325 = (0);
seq__33737 = G__34322;
chunk__33738 = G__34323;
count__33739 = G__34324;
i__33740 = G__34325;
continue;
} else {
var vec__33767 = cljs.core.first(seq__33737__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33767,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33767,(1),null);
var G__33771_34326 = dom;
var G__33772_34327 = cljs.core.name(k);
var G__33773_34328 = (((v == null))?"":v);
goog.style.setStyle(G__33771_34326,G__33772_34327,G__33773_34328);


var G__34329 = cljs.core.next(seq__33737__$1);
var G__34330 = null;
var G__34331 = (0);
var G__34332 = (0);
seq__33737 = G__34329;
chunk__33738 = G__34330;
count__33739 = G__34331;
i__33740 = G__34332;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33779_34333 = key;
var G__33779_34334__$1 = (((G__33779_34333 instanceof cljs.core.Keyword))?G__33779_34333.fqn:null);
switch (G__33779_34334__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_34336 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_34336,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_34336,"aria-");
}
})())){
el.setAttribute(ks_34336,value);
} else {
(el[ks_34336] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__33789 = shadow.dom.dom_node(el);
var G__33790 = cls;
return goog.dom.classlist.contains(G__33789,G__33790);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33800){
var map__33801 = p__33800;
var map__33801__$1 = (((((!((map__33801 == null))))?(((((map__33801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33801):map__33801);
var props = map__33801__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33801__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33806 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33806,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33806,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33806,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33810 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33810,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33810;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33812 = arguments.length;
switch (G__33812) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33816){
var vec__33817 = p__33816;
var seq__33818 = cljs.core.seq(vec__33817);
var first__33819 = cljs.core.first(seq__33818);
var seq__33818__$1 = cljs.core.next(seq__33818);
var nn = first__33819;
var first__33819__$1 = cljs.core.first(seq__33818__$1);
var seq__33818__$2 = cljs.core.next(seq__33818__$1);
var np = first__33819__$1;
var nc = seq__33818__$2;
var node = vec__33817;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33820 = nn;
var G__33821 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33820,G__33821) : create_fn.call(null,G__33820,G__33821));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33822 = nn;
var G__33823 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33822,G__33823) : create_fn.call(null,G__33822,G__33823));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33824 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33824,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33824,(1),null);
var seq__33827_34340 = cljs.core.seq(node_children);
var chunk__33828_34341 = null;
var count__33829_34342 = (0);
var i__33830_34343 = (0);
while(true){
if((i__33830_34343 < count__33829_34342)){
var child_struct_34344 = chunk__33828_34341.cljs$core$IIndexed$_nth$arity$2(null,i__33830_34343);
var children_34345 = shadow.dom.dom_node(child_struct_34344);
if(cljs.core.seq_QMARK_(children_34345)){
var seq__33849_34346 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34345));
var chunk__33851_34347 = null;
var count__33852_34348 = (0);
var i__33853_34349 = (0);
while(true){
if((i__33853_34349 < count__33852_34348)){
var child_34350 = chunk__33851_34347.cljs$core$IIndexed$_nth$arity$2(null,i__33853_34349);
if(cljs.core.truth_(child_34350)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34350);


var G__34353 = seq__33849_34346;
var G__34354 = chunk__33851_34347;
var G__34355 = count__33852_34348;
var G__34356 = (i__33853_34349 + (1));
seq__33849_34346 = G__34353;
chunk__33851_34347 = G__34354;
count__33852_34348 = G__34355;
i__33853_34349 = G__34356;
continue;
} else {
var G__34357 = seq__33849_34346;
var G__34358 = chunk__33851_34347;
var G__34359 = count__33852_34348;
var G__34360 = (i__33853_34349 + (1));
seq__33849_34346 = G__34357;
chunk__33851_34347 = G__34358;
count__33852_34348 = G__34359;
i__33853_34349 = G__34360;
continue;
}
} else {
var temp__5720__auto___34361 = cljs.core.seq(seq__33849_34346);
if(temp__5720__auto___34361){
var seq__33849_34362__$1 = temp__5720__auto___34361;
if(cljs.core.chunked_seq_QMARK_(seq__33849_34362__$1)){
var c__4550__auto___34363 = cljs.core.chunk_first(seq__33849_34362__$1);
var G__34364 = cljs.core.chunk_rest(seq__33849_34362__$1);
var G__34365 = c__4550__auto___34363;
var G__34366 = cljs.core.count(c__4550__auto___34363);
var G__34367 = (0);
seq__33849_34346 = G__34364;
chunk__33851_34347 = G__34365;
count__33852_34348 = G__34366;
i__33853_34349 = G__34367;
continue;
} else {
var child_34368 = cljs.core.first(seq__33849_34362__$1);
if(cljs.core.truth_(child_34368)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34368);


var G__34370 = cljs.core.next(seq__33849_34362__$1);
var G__34371 = null;
var G__34372 = (0);
var G__34373 = (0);
seq__33849_34346 = G__34370;
chunk__33851_34347 = G__34371;
count__33852_34348 = G__34372;
i__33853_34349 = G__34373;
continue;
} else {
var G__34374 = cljs.core.next(seq__33849_34362__$1);
var G__34375 = null;
var G__34376 = (0);
var G__34377 = (0);
seq__33849_34346 = G__34374;
chunk__33851_34347 = G__34375;
count__33852_34348 = G__34376;
i__33853_34349 = G__34377;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34345);
}


var G__34379 = seq__33827_34340;
var G__34380 = chunk__33828_34341;
var G__34381 = count__33829_34342;
var G__34382 = (i__33830_34343 + (1));
seq__33827_34340 = G__34379;
chunk__33828_34341 = G__34380;
count__33829_34342 = G__34381;
i__33830_34343 = G__34382;
continue;
} else {
var temp__5720__auto___34384 = cljs.core.seq(seq__33827_34340);
if(temp__5720__auto___34384){
var seq__33827_34385__$1 = temp__5720__auto___34384;
if(cljs.core.chunked_seq_QMARK_(seq__33827_34385__$1)){
var c__4550__auto___34386 = cljs.core.chunk_first(seq__33827_34385__$1);
var G__34387 = cljs.core.chunk_rest(seq__33827_34385__$1);
var G__34388 = c__4550__auto___34386;
var G__34389 = cljs.core.count(c__4550__auto___34386);
var G__34390 = (0);
seq__33827_34340 = G__34387;
chunk__33828_34341 = G__34388;
count__33829_34342 = G__34389;
i__33830_34343 = G__34390;
continue;
} else {
var child_struct_34391 = cljs.core.first(seq__33827_34385__$1);
var children_34392 = shadow.dom.dom_node(child_struct_34391);
if(cljs.core.seq_QMARK_(children_34392)){
var seq__33856_34393 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34392));
var chunk__33858_34394 = null;
var count__33859_34395 = (0);
var i__33860_34396 = (0);
while(true){
if((i__33860_34396 < count__33859_34395)){
var child_34398 = chunk__33858_34394.cljs$core$IIndexed$_nth$arity$2(null,i__33860_34396);
if(cljs.core.truth_(child_34398)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34398);


var G__34400 = seq__33856_34393;
var G__34401 = chunk__33858_34394;
var G__34402 = count__33859_34395;
var G__34403 = (i__33860_34396 + (1));
seq__33856_34393 = G__34400;
chunk__33858_34394 = G__34401;
count__33859_34395 = G__34402;
i__33860_34396 = G__34403;
continue;
} else {
var G__34404 = seq__33856_34393;
var G__34405 = chunk__33858_34394;
var G__34406 = count__33859_34395;
var G__34407 = (i__33860_34396 + (1));
seq__33856_34393 = G__34404;
chunk__33858_34394 = G__34405;
count__33859_34395 = G__34406;
i__33860_34396 = G__34407;
continue;
}
} else {
var temp__5720__auto___34408__$1 = cljs.core.seq(seq__33856_34393);
if(temp__5720__auto___34408__$1){
var seq__33856_34410__$1 = temp__5720__auto___34408__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33856_34410__$1)){
var c__4550__auto___34411 = cljs.core.chunk_first(seq__33856_34410__$1);
var G__34412 = cljs.core.chunk_rest(seq__33856_34410__$1);
var G__34413 = c__4550__auto___34411;
var G__34414 = cljs.core.count(c__4550__auto___34411);
var G__34415 = (0);
seq__33856_34393 = G__34412;
chunk__33858_34394 = G__34413;
count__33859_34395 = G__34414;
i__33860_34396 = G__34415;
continue;
} else {
var child_34416 = cljs.core.first(seq__33856_34410__$1);
if(cljs.core.truth_(child_34416)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34416);


var G__34417 = cljs.core.next(seq__33856_34410__$1);
var G__34418 = null;
var G__34419 = (0);
var G__34420 = (0);
seq__33856_34393 = G__34417;
chunk__33858_34394 = G__34418;
count__33859_34395 = G__34419;
i__33860_34396 = G__34420;
continue;
} else {
var G__34421 = cljs.core.next(seq__33856_34410__$1);
var G__34422 = null;
var G__34423 = (0);
var G__34424 = (0);
seq__33856_34393 = G__34421;
chunk__33858_34394 = G__34422;
count__33859_34395 = G__34423;
i__33860_34396 = G__34424;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34392);
}


var G__34425 = cljs.core.next(seq__33827_34385__$1);
var G__34426 = null;
var G__34427 = (0);
var G__34428 = (0);
seq__33827_34340 = G__34425;
chunk__33828_34341 = G__34426;
count__33829_34342 = G__34427;
i__33830_34343 = G__34428;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__33880 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__33880);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33885 = cljs.core.seq(node);
var chunk__33886 = null;
var count__33887 = (0);
var i__33888 = (0);
while(true){
if((i__33888 < count__33887)){
var n = chunk__33886.cljs$core$IIndexed$_nth$arity$2(null,i__33888);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34438 = seq__33885;
var G__34439 = chunk__33886;
var G__34440 = count__33887;
var G__34441 = (i__33888 + (1));
seq__33885 = G__34438;
chunk__33886 = G__34439;
count__33887 = G__34440;
i__33888 = G__34441;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__33885);
if(temp__5720__auto__){
var seq__33885__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33885__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33885__$1);
var G__34442 = cljs.core.chunk_rest(seq__33885__$1);
var G__34443 = c__4550__auto__;
var G__34444 = cljs.core.count(c__4550__auto__);
var G__34445 = (0);
seq__33885 = G__34442;
chunk__33886 = G__34443;
count__33887 = G__34444;
i__33888 = G__34445;
continue;
} else {
var n = cljs.core.first(seq__33885__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34450 = cljs.core.next(seq__33885__$1);
var G__34451 = null;
var G__34452 = (0);
var G__34453 = (0);
seq__33885 = G__34450;
chunk__33886 = G__34451;
count__33887 = G__34452;
i__33888 = G__34453;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__33894 = shadow.dom.dom_node(new$);
var G__33895 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__33894,G__33895);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33901 = arguments.length;
switch (G__33901) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33910 = arguments.length;
switch (G__33910) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33921 = arguments.length;
switch (G__33921) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34467 = arguments.length;
var i__4731__auto___34468 = (0);
while(true){
if((i__4731__auto___34468 < len__4730__auto___34467)){
args__4736__auto__.push((arguments[i__4731__auto___34468]));

var G__34469 = (i__4731__auto___34468 + (1));
i__4731__auto___34468 = G__34469;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33935_34473 = cljs.core.seq(nodes);
var chunk__33936_34474 = null;
var count__33937_34475 = (0);
var i__33938_34476 = (0);
while(true){
if((i__33938_34476 < count__33937_34475)){
var node_34477 = chunk__33936_34474.cljs$core$IIndexed$_nth$arity$2(null,i__33938_34476);
fragment.appendChild(shadow.dom._to_dom(node_34477));


var G__34478 = seq__33935_34473;
var G__34479 = chunk__33936_34474;
var G__34480 = count__33937_34475;
var G__34481 = (i__33938_34476 + (1));
seq__33935_34473 = G__34478;
chunk__33936_34474 = G__34479;
count__33937_34475 = G__34480;
i__33938_34476 = G__34481;
continue;
} else {
var temp__5720__auto___34482 = cljs.core.seq(seq__33935_34473);
if(temp__5720__auto___34482){
var seq__33935_34483__$1 = temp__5720__auto___34482;
if(cljs.core.chunked_seq_QMARK_(seq__33935_34483__$1)){
var c__4550__auto___34484 = cljs.core.chunk_first(seq__33935_34483__$1);
var G__34485 = cljs.core.chunk_rest(seq__33935_34483__$1);
var G__34486 = c__4550__auto___34484;
var G__34487 = cljs.core.count(c__4550__auto___34484);
var G__34488 = (0);
seq__33935_34473 = G__34485;
chunk__33936_34474 = G__34486;
count__33937_34475 = G__34487;
i__33938_34476 = G__34488;
continue;
} else {
var node_34489 = cljs.core.first(seq__33935_34483__$1);
fragment.appendChild(shadow.dom._to_dom(node_34489));


var G__34490 = cljs.core.next(seq__33935_34483__$1);
var G__34491 = null;
var G__34492 = (0);
var G__34493 = (0);
seq__33935_34473 = G__34490;
chunk__33936_34474 = G__34491;
count__33937_34475 = G__34492;
i__33938_34476 = G__34493;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq33930){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33930));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33948_34494 = cljs.core.seq(scripts);
var chunk__33949_34495 = null;
var count__33950_34496 = (0);
var i__33951_34497 = (0);
while(true){
if((i__33951_34497 < count__33950_34496)){
var vec__33962_34498 = chunk__33949_34495.cljs$core$IIndexed$_nth$arity$2(null,i__33951_34497);
var script_tag_34499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33962_34498,(0),null);
var script_body_34500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33962_34498,(1),null);
eval(script_body_34500);


var G__34501 = seq__33948_34494;
var G__34502 = chunk__33949_34495;
var G__34503 = count__33950_34496;
var G__34504 = (i__33951_34497 + (1));
seq__33948_34494 = G__34501;
chunk__33949_34495 = G__34502;
count__33950_34496 = G__34503;
i__33951_34497 = G__34504;
continue;
} else {
var temp__5720__auto___34505 = cljs.core.seq(seq__33948_34494);
if(temp__5720__auto___34505){
var seq__33948_34506__$1 = temp__5720__auto___34505;
if(cljs.core.chunked_seq_QMARK_(seq__33948_34506__$1)){
var c__4550__auto___34507 = cljs.core.chunk_first(seq__33948_34506__$1);
var G__34508 = cljs.core.chunk_rest(seq__33948_34506__$1);
var G__34509 = c__4550__auto___34507;
var G__34510 = cljs.core.count(c__4550__auto___34507);
var G__34511 = (0);
seq__33948_34494 = G__34508;
chunk__33949_34495 = G__34509;
count__33950_34496 = G__34510;
i__33951_34497 = G__34511;
continue;
} else {
var vec__33966_34512 = cljs.core.first(seq__33948_34506__$1);
var script_tag_34513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33966_34512,(0),null);
var script_body_34514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33966_34512,(1),null);
eval(script_body_34514);


var G__34517 = cljs.core.next(seq__33948_34506__$1);
var G__34518 = null;
var G__34519 = (0);
var G__34520 = (0);
seq__33948_34494 = G__34517;
chunk__33949_34495 = G__34518;
count__33950_34496 = G__34519;
i__33951_34497 = G__34520;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__33970){
var vec__33971 = p__33970;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33971,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33971,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__33976 = shadow.dom.dom_node(el);
var G__33977 = cls;
return goog.dom.getAncestorByClass(G__33976,G__33977);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33981 = arguments.length;
switch (G__33981) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__33984 = shadow.dom.dom_node(el);
var G__33985 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__33984,G__33985);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__33986 = shadow.dom.dom_node(el);
var G__33987 = cljs.core.name(tag);
var G__33988 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__33986,G__33987,G__33988);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__33990 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__33990);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__33992 = shadow.dom.dom_node(dom);
var G__33993 = value;
return goog.dom.forms.setValue(G__33992,G__33993);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33996 = cljs.core.seq(style_keys);
var chunk__33997 = null;
var count__33998 = (0);
var i__33999 = (0);
while(true){
if((i__33999 < count__33998)){
var it = chunk__33997.cljs$core$IIndexed$_nth$arity$2(null,i__33999);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34537 = seq__33996;
var G__34538 = chunk__33997;
var G__34539 = count__33998;
var G__34540 = (i__33999 + (1));
seq__33996 = G__34537;
chunk__33997 = G__34538;
count__33998 = G__34539;
i__33999 = G__34540;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__33996);
if(temp__5720__auto__){
var seq__33996__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33996__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33996__$1);
var G__34541 = cljs.core.chunk_rest(seq__33996__$1);
var G__34542 = c__4550__auto__;
var G__34543 = cljs.core.count(c__4550__auto__);
var G__34544 = (0);
seq__33996 = G__34541;
chunk__33997 = G__34542;
count__33998 = G__34543;
i__33999 = G__34544;
continue;
} else {
var it = cljs.core.first(seq__33996__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34548 = cljs.core.next(seq__33996__$1);
var G__34549 = null;
var G__34550 = (0);
var G__34551 = (0);
seq__33996 = G__34548;
chunk__33997 = G__34549;
count__33998 = G__34550;
i__33999 = G__34551;
continue;
}
} else {
return null;
}
}
break;
}
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
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k34003,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__34012 = k34003;
var G__34012__$1 = (((G__34012 instanceof cljs.core.Keyword))?G__34012.fqn:null);
switch (G__34012__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34003,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__34015){
var vec__34016 = p__34015;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34016,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34016,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34002){
var self__ = this;
var G__34002__$1 = this;
return (new cljs.core.RecordIter((0),G__34002__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__34025 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__34025(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34004,other34005){
var self__ = this;
var this34004__$1 = this;
return (((!((other34005 == null)))) && ((this34004__$1.constructor === other34005.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34004__$1.x,other34005.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34004__$1.y,other34005.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34004__$1.__extmap,other34005.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__34002){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__34029 = cljs.core.keyword_identical_QMARK_;
var expr__34030 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__34033 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__34034 = expr__34030;
return (pred__34029.cljs$core$IFn$_invoke$arity$2 ? pred__34029.cljs$core$IFn$_invoke$arity$2(G__34033,G__34034) : pred__34029.call(null,G__34033,G__34034));
})())){
return (new shadow.dom.Coordinate(G__34002,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34035 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__34036 = expr__34030;
return (pred__34029.cljs$core$IFn$_invoke$arity$2 ? pred__34029.cljs$core$IFn$_invoke$arity$2(G__34035,G__34036) : pred__34029.call(null,G__34035,G__34036));
})())){
return (new shadow.dom.Coordinate(self__.x,G__34002,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__34002),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__34002){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__34002,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__34006){
var extmap__4424__auto__ = (function (){var G__34042 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34006,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__34006)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34042);
} else {
return G__34042;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__34006),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__34006),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__34044 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__34044);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__34047 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__34047);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__34050 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__34050);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
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
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k34053,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__34058 = k34053;
var G__34058__$1 = (((G__34058 instanceof cljs.core.Keyword))?G__34058.fqn:null);
switch (G__34058__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34053,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__34061){
var vec__34062 = p__34061;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34062,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34062,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34052){
var self__ = this;
var G__34052__$1 = this;
return (new cljs.core.RecordIter((0),G__34052__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__34070 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__34070(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34054,other34055){
var self__ = this;
var this34054__$1 = this;
return (((!((other34055 == null)))) && ((this34054__$1.constructor === other34055.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34054__$1.w,other34055.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34054__$1.h,other34055.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34054__$1.__extmap,other34055.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__34052){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__34074 = cljs.core.keyword_identical_QMARK_;
var expr__34075 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__34078 = new cljs.core.Keyword(null,"w","w",354169001);
var G__34079 = expr__34075;
return (pred__34074.cljs$core$IFn$_invoke$arity$2 ? pred__34074.cljs$core$IFn$_invoke$arity$2(G__34078,G__34079) : pred__34074.call(null,G__34078,G__34079));
})())){
return (new shadow.dom.Size(G__34052,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34081 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__34082 = expr__34075;
return (pred__34074.cljs$core$IFn$_invoke$arity$2 ? pred__34074.cljs$core$IFn$_invoke$arity$2(G__34081,G__34082) : pred__34074.call(null,G__34081,G__34082));
})())){
return (new shadow.dom.Size(self__.w,G__34052,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__34052),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__34052){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__34052,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__34056){
var extmap__4424__auto__ = (function (){var G__34087 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34056,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__34056)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34087);
} else {
return G__34087;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__34056),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__34056),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__34088 = shadow.dom.dom_node(el);
return goog.style.getSize(G__34088);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__34574 = (i + (1));
var G__34575 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34574;
ret = G__34575;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34093){
var vec__34094 = p__34093;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34094,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34094,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__34098 = arguments.length;
switch (G__34098) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__34099_34578 = new_node;
var G__34100_34579 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__34099_34578,G__34100_34579);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__34101_34580 = new_node;
var G__34102_34581 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__34101_34580,G__34102_34581);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5718__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5718__auto__)){
var child = temp__5718__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34582 = ps;
var G__34583 = (i + (1));
el__$1 = G__34582;
i = G__34583;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__34107 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__34107);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__34114 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__34114);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__34116 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__34116);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__34118 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34118,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34118,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34118,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__34122_34591 = cljs.core.seq(props);
var chunk__34123_34592 = null;
var count__34124_34593 = (0);
var i__34125_34594 = (0);
while(true){
if((i__34125_34594 < count__34124_34593)){
var vec__34135_34595 = chunk__34123_34592.cljs$core$IIndexed$_nth$arity$2(null,i__34125_34594);
var k_34596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34135_34595,(0),null);
var v_34597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34135_34595,(1),null);
el.setAttributeNS((function (){var temp__5720__auto__ = cljs.core.namespace(k_34596);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34596),v_34597);


var G__34598 = seq__34122_34591;
var G__34599 = chunk__34123_34592;
var G__34600 = count__34124_34593;
var G__34601 = (i__34125_34594 + (1));
seq__34122_34591 = G__34598;
chunk__34123_34592 = G__34599;
count__34124_34593 = G__34600;
i__34125_34594 = G__34601;
continue;
} else {
var temp__5720__auto___34602 = cljs.core.seq(seq__34122_34591);
if(temp__5720__auto___34602){
var seq__34122_34603__$1 = temp__5720__auto___34602;
if(cljs.core.chunked_seq_QMARK_(seq__34122_34603__$1)){
var c__4550__auto___34604 = cljs.core.chunk_first(seq__34122_34603__$1);
var G__34605 = cljs.core.chunk_rest(seq__34122_34603__$1);
var G__34606 = c__4550__auto___34604;
var G__34607 = cljs.core.count(c__4550__auto___34604);
var G__34608 = (0);
seq__34122_34591 = G__34605;
chunk__34123_34592 = G__34606;
count__34124_34593 = G__34607;
i__34125_34594 = G__34608;
continue;
} else {
var vec__34140_34609 = cljs.core.first(seq__34122_34603__$1);
var k_34610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34140_34609,(0),null);
var v_34611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34140_34609,(1),null);
el.setAttributeNS((function (){var temp__5720__auto____$1 = cljs.core.namespace(k_34610);
if(cljs.core.truth_(temp__5720__auto____$1)){
var ns = temp__5720__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34610),v_34611);


var G__34612 = cljs.core.next(seq__34122_34603__$1);
var G__34613 = null;
var G__34614 = (0);
var G__34615 = (0);
seq__34122_34591 = G__34612;
chunk__34123_34592 = G__34613;
count__34124_34593 = G__34614;
i__34125_34594 = G__34615;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__34150 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34150,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34150,(1),null);
var seq__34153_34617 = cljs.core.seq(node_children);
var chunk__34155_34618 = null;
var count__34156_34619 = (0);
var i__34157_34620 = (0);
while(true){
if((i__34157_34620 < count__34156_34619)){
var child_struct_34621 = chunk__34155_34618.cljs$core$IIndexed$_nth$arity$2(null,i__34157_34620);
if((!((child_struct_34621 == null)))){
if(typeof child_struct_34621 === 'string'){
var text_34622 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34622),child_struct_34621].join(''));
} else {
var children_34623 = shadow.dom.svg_node(child_struct_34621);
if(cljs.core.seq_QMARK_(children_34623)){
var seq__34188_34624 = cljs.core.seq(children_34623);
var chunk__34190_34625 = null;
var count__34191_34626 = (0);
var i__34192_34627 = (0);
while(true){
if((i__34192_34627 < count__34191_34626)){
var child_34628 = chunk__34190_34625.cljs$core$IIndexed$_nth$arity$2(null,i__34192_34627);
if(cljs.core.truth_(child_34628)){
node.appendChild(child_34628);


var G__34629 = seq__34188_34624;
var G__34630 = chunk__34190_34625;
var G__34631 = count__34191_34626;
var G__34632 = (i__34192_34627 + (1));
seq__34188_34624 = G__34629;
chunk__34190_34625 = G__34630;
count__34191_34626 = G__34631;
i__34192_34627 = G__34632;
continue;
} else {
var G__34633 = seq__34188_34624;
var G__34634 = chunk__34190_34625;
var G__34635 = count__34191_34626;
var G__34636 = (i__34192_34627 + (1));
seq__34188_34624 = G__34633;
chunk__34190_34625 = G__34634;
count__34191_34626 = G__34635;
i__34192_34627 = G__34636;
continue;
}
} else {
var temp__5720__auto___34638 = cljs.core.seq(seq__34188_34624);
if(temp__5720__auto___34638){
var seq__34188_34639__$1 = temp__5720__auto___34638;
if(cljs.core.chunked_seq_QMARK_(seq__34188_34639__$1)){
var c__4550__auto___34640 = cljs.core.chunk_first(seq__34188_34639__$1);
var G__34641 = cljs.core.chunk_rest(seq__34188_34639__$1);
var G__34642 = c__4550__auto___34640;
var G__34643 = cljs.core.count(c__4550__auto___34640);
var G__34644 = (0);
seq__34188_34624 = G__34641;
chunk__34190_34625 = G__34642;
count__34191_34626 = G__34643;
i__34192_34627 = G__34644;
continue;
} else {
var child_34645 = cljs.core.first(seq__34188_34639__$1);
if(cljs.core.truth_(child_34645)){
node.appendChild(child_34645);


var G__34646 = cljs.core.next(seq__34188_34639__$1);
var G__34647 = null;
var G__34648 = (0);
var G__34649 = (0);
seq__34188_34624 = G__34646;
chunk__34190_34625 = G__34647;
count__34191_34626 = G__34648;
i__34192_34627 = G__34649;
continue;
} else {
var G__34650 = cljs.core.next(seq__34188_34639__$1);
var G__34651 = null;
var G__34652 = (0);
var G__34653 = (0);
seq__34188_34624 = G__34650;
chunk__34190_34625 = G__34651;
count__34191_34626 = G__34652;
i__34192_34627 = G__34653;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34623);
}
}


var G__34654 = seq__34153_34617;
var G__34655 = chunk__34155_34618;
var G__34656 = count__34156_34619;
var G__34657 = (i__34157_34620 + (1));
seq__34153_34617 = G__34654;
chunk__34155_34618 = G__34655;
count__34156_34619 = G__34656;
i__34157_34620 = G__34657;
continue;
} else {
var G__34658 = seq__34153_34617;
var G__34659 = chunk__34155_34618;
var G__34660 = count__34156_34619;
var G__34661 = (i__34157_34620 + (1));
seq__34153_34617 = G__34658;
chunk__34155_34618 = G__34659;
count__34156_34619 = G__34660;
i__34157_34620 = G__34661;
continue;
}
} else {
var temp__5720__auto___34662 = cljs.core.seq(seq__34153_34617);
if(temp__5720__auto___34662){
var seq__34153_34663__$1 = temp__5720__auto___34662;
if(cljs.core.chunked_seq_QMARK_(seq__34153_34663__$1)){
var c__4550__auto___34664 = cljs.core.chunk_first(seq__34153_34663__$1);
var G__34665 = cljs.core.chunk_rest(seq__34153_34663__$1);
var G__34666 = c__4550__auto___34664;
var G__34667 = cljs.core.count(c__4550__auto___34664);
var G__34668 = (0);
seq__34153_34617 = G__34665;
chunk__34155_34618 = G__34666;
count__34156_34619 = G__34667;
i__34157_34620 = G__34668;
continue;
} else {
var child_struct_34669 = cljs.core.first(seq__34153_34663__$1);
if((!((child_struct_34669 == null)))){
if(typeof child_struct_34669 === 'string'){
var text_34670 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34670),child_struct_34669].join(''));
} else {
var children_34671 = shadow.dom.svg_node(child_struct_34669);
if(cljs.core.seq_QMARK_(children_34671)){
var seq__34197_34672 = cljs.core.seq(children_34671);
var chunk__34199_34673 = null;
var count__34200_34674 = (0);
var i__34201_34675 = (0);
while(true){
if((i__34201_34675 < count__34200_34674)){
var child_34676 = chunk__34199_34673.cljs$core$IIndexed$_nth$arity$2(null,i__34201_34675);
if(cljs.core.truth_(child_34676)){
node.appendChild(child_34676);


var G__34677 = seq__34197_34672;
var G__34678 = chunk__34199_34673;
var G__34679 = count__34200_34674;
var G__34680 = (i__34201_34675 + (1));
seq__34197_34672 = G__34677;
chunk__34199_34673 = G__34678;
count__34200_34674 = G__34679;
i__34201_34675 = G__34680;
continue;
} else {
var G__34681 = seq__34197_34672;
var G__34682 = chunk__34199_34673;
var G__34683 = count__34200_34674;
var G__34684 = (i__34201_34675 + (1));
seq__34197_34672 = G__34681;
chunk__34199_34673 = G__34682;
count__34200_34674 = G__34683;
i__34201_34675 = G__34684;
continue;
}
} else {
var temp__5720__auto___34685__$1 = cljs.core.seq(seq__34197_34672);
if(temp__5720__auto___34685__$1){
var seq__34197_34686__$1 = temp__5720__auto___34685__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34197_34686__$1)){
var c__4550__auto___34687 = cljs.core.chunk_first(seq__34197_34686__$1);
var G__34688 = cljs.core.chunk_rest(seq__34197_34686__$1);
var G__34689 = c__4550__auto___34687;
var G__34690 = cljs.core.count(c__4550__auto___34687);
var G__34691 = (0);
seq__34197_34672 = G__34688;
chunk__34199_34673 = G__34689;
count__34200_34674 = G__34690;
i__34201_34675 = G__34691;
continue;
} else {
var child_34692 = cljs.core.first(seq__34197_34686__$1);
if(cljs.core.truth_(child_34692)){
node.appendChild(child_34692);


var G__34693 = cljs.core.next(seq__34197_34686__$1);
var G__34694 = null;
var G__34695 = (0);
var G__34696 = (0);
seq__34197_34672 = G__34693;
chunk__34199_34673 = G__34694;
count__34200_34674 = G__34695;
i__34201_34675 = G__34696;
continue;
} else {
var G__34697 = cljs.core.next(seq__34197_34686__$1);
var G__34698 = null;
var G__34699 = (0);
var G__34700 = (0);
seq__34197_34672 = G__34697;
chunk__34199_34673 = G__34698;
count__34200_34674 = G__34699;
i__34201_34675 = G__34700;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34671);
}
}


var G__34701 = cljs.core.next(seq__34153_34663__$1);
var G__34702 = null;
var G__34703 = (0);
var G__34704 = (0);
seq__34153_34617 = G__34701;
chunk__34155_34618 = G__34702;
count__34156_34619 = G__34703;
i__34157_34620 = G__34704;
continue;
} else {
var G__34705 = cljs.core.next(seq__34153_34663__$1);
var G__34706 = null;
var G__34707 = (0);
var G__34708 = (0);
seq__34153_34617 = G__34705;
chunk__34155_34618 = G__34706;
count__34156_34619 = G__34707;
i__34157_34620 = G__34708;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__34210_34709 = shadow.dom._to_svg;
var G__34211_34710 = "string";
var G__34212_34711 = ((function (G__34210_34709,G__34211_34710){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__34210_34709,G__34211_34710))
;
goog.object.set(G__34210_34709,G__34211_34710,G__34212_34711);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__34217_34712 = shadow.dom._to_svg;
var G__34218_34713 = "null";
var G__34219_34714 = ((function (G__34217_34712,G__34218_34713){
return (function (_){
return null;
});})(G__34217_34712,G__34218_34713))
;
goog.object.set(G__34217_34712,G__34218_34713,G__34219_34714);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34715 = arguments.length;
var i__4731__auto___34716 = (0);
while(true){
if((i__4731__auto___34716 < len__4730__auto___34715)){
args__4736__auto__.push((arguments[i__4731__auto___34716]));

var G__34717 = (i__4731__auto___34716 + (1));
i__4731__auto___34716 = G__34717;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq34221){
var G__34222 = cljs.core.first(seq34221);
var seq34221__$1 = cljs.core.next(seq34221);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34222,seq34221__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__34228 = arguments.length;
switch (G__34228) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__34236_34719 = shadow.dom.dom_node(el);
var G__34237_34720 = cljs.core.name(event);
var G__34238_34721 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__34236_34719,G__34237_34720,G__34238_34721) : shadow.dom.dom_listen.call(null,G__34236_34719,G__34237_34720,G__34238_34721));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__31279__auto___34727 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31279__auto___34727,buf,chan,event_fn){
return (function (){
var f__31280__auto__ = (function (){var switch__31054__auto__ = ((function (c__31279__auto___34727,buf,chan,event_fn){
return (function (state_34243){
var state_val_34244 = (state_34243[(1)]);
if((state_val_34244 === (1))){
var state_34243__$1 = state_34243;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34243__$1,(2),once_or_cleanup);
} else {
if((state_val_34244 === (2))){
var inst_34240 = (state_34243[(2)]);
var inst_34241 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34243__$1 = (function (){var statearr_34246 = state_34243;
(statearr_34246[(7)] = inst_34240);

return statearr_34246;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34243__$1,inst_34241);
} else {
return null;
}
}
});})(c__31279__auto___34727,buf,chan,event_fn))
;
return ((function (switch__31054__auto__,c__31279__auto___34727,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__31055__auto__ = null;
var shadow$dom$state_machine__31055__auto____0 = (function (){
var statearr_34249 = [null,null,null,null,null,null,null,null];
(statearr_34249[(0)] = shadow$dom$state_machine__31055__auto__);

(statearr_34249[(1)] = (1));

return statearr_34249;
});
var shadow$dom$state_machine__31055__auto____1 = (function (state_34243){
while(true){
var ret_value__31056__auto__ = (function (){try{while(true){
var result__31057__auto__ = switch__31054__auto__(state_34243);
if(cljs.core.keyword_identical_QMARK_(result__31057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31057__auto__;
}
break;
}
}catch (e34251){if((e34251 instanceof Object)){
var ex__31058__auto__ = e34251;
var statearr_34252_34731 = state_34243;
(statearr_34252_34731[(5)] = ex__31058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34251;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34732 = state_34243;
state_34243 = G__34732;
continue;
} else {
return ret_value__31056__auto__;
}
break;
}
});
shadow$dom$state_machine__31055__auto__ = function(state_34243){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__31055__auto____0.call(this);
case 1:
return shadow$dom$state_machine__31055__auto____1.call(this,state_34243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__31055__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__31055__auto____0;
shadow$dom$state_machine__31055__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__31055__auto____1;
return shadow$dom$state_machine__31055__auto__;
})()
;})(switch__31054__auto__,c__31279__auto___34727,buf,chan,event_fn))
})();
var state__31281__auto__ = (function (){var statearr_34254 = (f__31280__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31280__auto__.cljs$core$IFn$_invoke$arity$0() : f__31280__auto__.call(null));
(statearr_34254[(6)] = c__31279__auto___34727);

return statearr_34254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31281__auto__);
});})(c__31279__auto___34727,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
