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
if(((!((this$ == null))) && (!((this$.shadow$dom$IElement$_to_dom$arity$1 == null))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (shadow.dom._to_dom["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
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
if(((!((this$ == null))) && (!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (shadow.dom._to_svg["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__18589 = coll;
var G__18590 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__18589,G__18590) : shadow.dom.lazy_native_coll_seq.call(null,G__18589,G__18590));
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
var or__3949__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
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

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"shadow.dom/NativeColl");
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
if(((!((el == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode([cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)].join(''));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__18642 = arguments.length;
switch (G__18642) {
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
var G__18646 = arguments.length;
switch (G__18646) {
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
var G__18650 = arguments.length;
switch (G__18650) {
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
var G__18663 = arguments.length;
switch (G__18663) {
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
var G__18676 = arguments.length;
switch (G__18676) {
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
var G__18679 = document;
var G__18681 = shadow.dom.dom_node(el);
return goog.dom.contains(G__18679,G__18681);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__18689 = shadow.dom.dom_node(parent);
var G__18690 = shadow.dom.dom_node(el);
return goog.dom.contains(G__18689,G__18690);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__18691 = shadow.dom.dom_node(el);
var G__18692 = cls;
return goog.dom.classlist.add(G__18691,G__18692);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__18693 = shadow.dom.dom_node(el);
var G__18694 = cls;
return goog.dom.classlist.remove(G__18693,G__18694);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__18698 = arguments.length;
switch (G__18698) {
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
var G__18703 = shadow.dom.dom_node(el);
var G__18704 = cls;
return goog.dom.classlist.toggle(G__18703,G__18704);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__3949__auto__ = !((typeof document !== 'undefined'));
if(or__3949__auto__){
return or__3949__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e18714){if((e18714 instanceof Object)){
var e = e18714;
return console.log("didnt support attachEvent",el,e);
} else {
throw e18714;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__3949__auto__ = !((typeof document !== 'undefined'));
if(or__3949__auto__){
return or__3949__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__18721 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__18722 = null;
var count__18723 = (0);
var i__18724 = (0);
while(true){
if((i__18724 < count__18723)){
var el = chunk__18722.cljs$core$IIndexed$_nth$arity$2(null,i__18724);
var handler_19212__$1 = ((function (seq__18721,chunk__18722,count__18723,i__18724,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__18721,chunk__18722,count__18723,i__18724,el))
;
var G__18726_19213 = el;
var G__18727_19214 = cljs.core.name(ev);
var G__18728_19215 = handler_19212__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__18726_19213,G__18727_19214,G__18728_19215) : shadow.dom.dom_listen.call(null,G__18726_19213,G__18727_19214,G__18728_19215));


var G__19217 = seq__18721;
var G__19218 = chunk__18722;
var G__19219 = count__18723;
var G__19220 = (i__18724 + (1));
seq__18721 = G__19217;
chunk__18722 = G__19218;
count__18723 = G__19219;
i__18724 = G__19220;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__18721);
if(temp__5457__auto__){
var seq__18721__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18721__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__18721__$1);
var G__19222 = cljs.core.chunk_rest(seq__18721__$1);
var G__19223 = c__4351__auto__;
var G__19224 = cljs.core.count(c__4351__auto__);
var G__19225 = (0);
seq__18721 = G__19222;
chunk__18722 = G__19223;
count__18723 = G__19224;
i__18724 = G__19225;
continue;
} else {
var el = cljs.core.first(seq__18721__$1);
var handler_19227__$1 = ((function (seq__18721,chunk__18722,count__18723,i__18724,el,seq__18721__$1,temp__5457__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__18721,chunk__18722,count__18723,i__18724,el,seq__18721__$1,temp__5457__auto__))
;
var G__18738_19229 = el;
var G__18739_19230 = cljs.core.name(ev);
var G__18740_19231 = handler_19227__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__18738_19229,G__18739_19230,G__18740_19231) : shadow.dom.dom_listen.call(null,G__18738_19229,G__18739_19230,G__18740_19231));


var G__19233 = cljs.core.next(seq__18721__$1);
var G__19234 = null;
var G__19235 = (0);
var G__19236 = (0);
seq__18721 = G__19233;
chunk__18722 = G__19234;
count__18723 = G__19235;
i__18724 = G__19236;
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
var G__18745 = arguments.length;
switch (G__18745) {
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
var G__18756 = shadow.dom.dom_node(el);
var G__18757 = cljs.core.name(ev);
var G__18758 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__18756,G__18757,G__18758) : shadow.dom.dom_listen.call(null,G__18756,G__18757,G__18758));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__18760 = shadow.dom.dom_node(el);
var G__18761 = cljs.core.name(ev);
var G__18762 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__18760,G__18761,G__18762) : shadow.dom.dom_listen_remove.call(null,G__18760,G__18761,G__18762));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__18769 = cljs.core.seq(events);
var chunk__18770 = null;
var count__18771 = (0);
var i__18772 = (0);
while(true){
if((i__18772 < count__18771)){
var vec__18773 = chunk__18770.cljs$core$IIndexed$_nth$arity$2(null,i__18772);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18773,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18773,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19252 = seq__18769;
var G__19253 = chunk__18770;
var G__19254 = count__18771;
var G__19255 = (i__18772 + (1));
seq__18769 = G__19252;
chunk__18770 = G__19253;
count__18771 = G__19254;
i__18772 = G__19255;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__18769);
if(temp__5457__auto__){
var seq__18769__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18769__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__18769__$1);
var G__19257 = cljs.core.chunk_rest(seq__18769__$1);
var G__19258 = c__4351__auto__;
var G__19259 = cljs.core.count(c__4351__auto__);
var G__19260 = (0);
seq__18769 = G__19257;
chunk__18770 = G__19258;
count__18771 = G__19259;
i__18772 = G__19260;
continue;
} else {
var vec__18782 = cljs.core.first(seq__18769__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18782,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18782,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19262 = cljs.core.next(seq__18769__$1);
var G__19263 = null;
var G__19264 = (0);
var G__19265 = (0);
seq__18769 = G__19262;
chunk__18770 = G__19263;
count__18771 = G__19264;
i__18772 = G__19265;
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
var seq__18785 = cljs.core.seq(styles);
var chunk__18786 = null;
var count__18787 = (0);
var i__18788 = (0);
while(true){
if((i__18788 < count__18787)){
var vec__18789 = chunk__18786.cljs$core$IIndexed$_nth$arity$2(null,i__18788);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18789,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18789,(1),null);
var G__18792_19270 = dom;
var G__18793_19271 = cljs.core.name(k);
var G__18794_19272 = (((v == null))?"":v);
goog.style.setStyle(G__18792_19270,G__18793_19271,G__18794_19272);


var G__19273 = seq__18785;
var G__19274 = chunk__18786;
var G__19275 = count__18787;
var G__19276 = (i__18788 + (1));
seq__18785 = G__19273;
chunk__18786 = G__19274;
count__18787 = G__19275;
i__18788 = G__19276;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__18785);
if(temp__5457__auto__){
var seq__18785__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18785__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__18785__$1);
var G__19277 = cljs.core.chunk_rest(seq__18785__$1);
var G__19278 = c__4351__auto__;
var G__19279 = cljs.core.count(c__4351__auto__);
var G__19280 = (0);
seq__18785 = G__19277;
chunk__18786 = G__19278;
count__18787 = G__19279;
i__18788 = G__19280;
continue;
} else {
var vec__18798 = cljs.core.first(seq__18785__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18798,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18798,(1),null);
var G__18802_19283 = dom;
var G__18803_19284 = cljs.core.name(k);
var G__18804_19285 = (((v == null))?"":v);
goog.style.setStyle(G__18802_19283,G__18803_19284,G__18804_19285);


var G__19287 = cljs.core.next(seq__18785__$1);
var G__19288 = null;
var G__19289 = (0);
var G__19290 = (0);
seq__18785 = G__19287;
chunk__18786 = G__19288;
count__18787 = G__19289;
i__18788 = G__19290;
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
var G__18805_19291 = key;
var G__18805_19292__$1 = (((G__18805_19291 instanceof cljs.core.Keyword))?G__18805_19291.fqn:null);
switch (G__18805_19292__$1) {
case "id":
el.id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');

break;
case "class":
el.className = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');

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
var ks_19300 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__3949__auto__ = goog.string.startsWith(ks_19300,"data-");
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return goog.string.startsWith(ks_19300,"aria-");
}
})())){
el.setAttribute(ks_19300,value);
} else {
(el[ks_19300] = value);
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
var G__18812 = shadow.dom.dom_node(el);
var G__18813 = cls;
return goog.dom.classlist.contains(G__18812,G__18813);
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
throw ["cant have id after class?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1)].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__18816){
var map__18817 = p__18816;
var map__18817__$1 = ((((!((map__18817 == null)))?(((((map__18817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18817):map__18817);
var props = map__18817__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18817__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__18819 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18819,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18819,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18819,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__18822 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__18822,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__18822;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__18824 = arguments.length;
switch (G__18824) {
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
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
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
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__18828){
var vec__18829 = p__18828;
var seq__18830 = cljs.core.seq(vec__18829);
var first__18831 = cljs.core.first(seq__18830);
var seq__18830__$1 = cljs.core.next(seq__18830);
var nn = first__18831;
var first__18831__$1 = cljs.core.first(seq__18830__$1);
var seq__18830__$2 = cljs.core.next(seq__18830__$1);
var np = first__18831__$1;
var nc = seq__18830__$2;
var node = vec__18829;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18832 = nn;
var G__18833 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18832,G__18833) : create_fn.call(null,G__18832,G__18833));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18835 = nn;
var G__18836 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18835,G__18836) : create_fn.call(null,G__18835,G__18836));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__18838 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18838,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18838,(1),null);
var seq__18841_19315 = cljs.core.seq(node_children);
var chunk__18842_19316 = null;
var count__18843_19317 = (0);
var i__18844_19318 = (0);
while(true){
if((i__18844_19318 < count__18843_19317)){
var child_struct_19319 = chunk__18842_19316.cljs$core$IIndexed$_nth$arity$2(null,i__18844_19318);
var children_19320 = shadow.dom.dom_node(child_struct_19319);
if(cljs.core.seq_QMARK_(children_19320)){
var seq__18845_19321 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19320));
var chunk__18847_19322 = null;
var count__18848_19323 = (0);
var i__18849_19324 = (0);
while(true){
if((i__18849_19324 < count__18848_19323)){
var child_19325 = chunk__18847_19322.cljs$core$IIndexed$_nth$arity$2(null,i__18849_19324);
if(cljs.core.truth_(child_19325)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19325);


var G__19328 = seq__18845_19321;
var G__19329 = chunk__18847_19322;
var G__19330 = count__18848_19323;
var G__19331 = (i__18849_19324 + (1));
seq__18845_19321 = G__19328;
chunk__18847_19322 = G__19329;
count__18848_19323 = G__19330;
i__18849_19324 = G__19331;
continue;
} else {
var G__19332 = seq__18845_19321;
var G__19333 = chunk__18847_19322;
var G__19334 = count__18848_19323;
var G__19335 = (i__18849_19324 + (1));
seq__18845_19321 = G__19332;
chunk__18847_19322 = G__19333;
count__18848_19323 = G__19334;
i__18849_19324 = G__19335;
continue;
}
} else {
var temp__5457__auto___19336 = cljs.core.seq(seq__18845_19321);
if(temp__5457__auto___19336){
var seq__18845_19337__$1 = temp__5457__auto___19336;
if(cljs.core.chunked_seq_QMARK_(seq__18845_19337__$1)){
var c__4351__auto___19338 = cljs.core.chunk_first(seq__18845_19337__$1);
var G__19339 = cljs.core.chunk_rest(seq__18845_19337__$1);
var G__19340 = c__4351__auto___19338;
var G__19341 = cljs.core.count(c__4351__auto___19338);
var G__19342 = (0);
seq__18845_19321 = G__19339;
chunk__18847_19322 = G__19340;
count__18848_19323 = G__19341;
i__18849_19324 = G__19342;
continue;
} else {
var child_19343 = cljs.core.first(seq__18845_19337__$1);
if(cljs.core.truth_(child_19343)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19343);


var G__19344 = cljs.core.next(seq__18845_19337__$1);
var G__19345 = null;
var G__19346 = (0);
var G__19347 = (0);
seq__18845_19321 = G__19344;
chunk__18847_19322 = G__19345;
count__18848_19323 = G__19346;
i__18849_19324 = G__19347;
continue;
} else {
var G__19348 = cljs.core.next(seq__18845_19337__$1);
var G__19349 = null;
var G__19350 = (0);
var G__19351 = (0);
seq__18845_19321 = G__19348;
chunk__18847_19322 = G__19349;
count__18848_19323 = G__19350;
i__18849_19324 = G__19351;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19320);
}


var G__19352 = seq__18841_19315;
var G__19353 = chunk__18842_19316;
var G__19354 = count__18843_19317;
var G__19355 = (i__18844_19318 + (1));
seq__18841_19315 = G__19352;
chunk__18842_19316 = G__19353;
count__18843_19317 = G__19354;
i__18844_19318 = G__19355;
continue;
} else {
var temp__5457__auto___19356 = cljs.core.seq(seq__18841_19315);
if(temp__5457__auto___19356){
var seq__18841_19357__$1 = temp__5457__auto___19356;
if(cljs.core.chunked_seq_QMARK_(seq__18841_19357__$1)){
var c__4351__auto___19359 = cljs.core.chunk_first(seq__18841_19357__$1);
var G__19361 = cljs.core.chunk_rest(seq__18841_19357__$1);
var G__19362 = c__4351__auto___19359;
var G__19363 = cljs.core.count(c__4351__auto___19359);
var G__19364 = (0);
seq__18841_19315 = G__19361;
chunk__18842_19316 = G__19362;
count__18843_19317 = G__19363;
i__18844_19318 = G__19364;
continue;
} else {
var child_struct_19370 = cljs.core.first(seq__18841_19357__$1);
var children_19371 = shadow.dom.dom_node(child_struct_19370);
if(cljs.core.seq_QMARK_(children_19371)){
var seq__18857_19372 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19371));
var chunk__18859_19373 = null;
var count__18860_19374 = (0);
var i__18861_19375 = (0);
while(true){
if((i__18861_19375 < count__18860_19374)){
var child_19376 = chunk__18859_19373.cljs$core$IIndexed$_nth$arity$2(null,i__18861_19375);
if(cljs.core.truth_(child_19376)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19376);


var G__19377 = seq__18857_19372;
var G__19378 = chunk__18859_19373;
var G__19379 = count__18860_19374;
var G__19380 = (i__18861_19375 + (1));
seq__18857_19372 = G__19377;
chunk__18859_19373 = G__19378;
count__18860_19374 = G__19379;
i__18861_19375 = G__19380;
continue;
} else {
var G__19381 = seq__18857_19372;
var G__19382 = chunk__18859_19373;
var G__19383 = count__18860_19374;
var G__19384 = (i__18861_19375 + (1));
seq__18857_19372 = G__19381;
chunk__18859_19373 = G__19382;
count__18860_19374 = G__19383;
i__18861_19375 = G__19384;
continue;
}
} else {
var temp__5457__auto___19385__$1 = cljs.core.seq(seq__18857_19372);
if(temp__5457__auto___19385__$1){
var seq__18857_19386__$1 = temp__5457__auto___19385__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18857_19386__$1)){
var c__4351__auto___19387 = cljs.core.chunk_first(seq__18857_19386__$1);
var G__19388 = cljs.core.chunk_rest(seq__18857_19386__$1);
var G__19389 = c__4351__auto___19387;
var G__19390 = cljs.core.count(c__4351__auto___19387);
var G__19391 = (0);
seq__18857_19372 = G__19388;
chunk__18859_19373 = G__19389;
count__18860_19374 = G__19390;
i__18861_19375 = G__19391;
continue;
} else {
var child_19392 = cljs.core.first(seq__18857_19386__$1);
if(cljs.core.truth_(child_19392)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19392);


var G__19393 = cljs.core.next(seq__18857_19386__$1);
var G__19394 = null;
var G__19395 = (0);
var G__19396 = (0);
seq__18857_19372 = G__19393;
chunk__18859_19373 = G__19394;
count__18860_19374 = G__19395;
i__18861_19375 = G__19396;
continue;
} else {
var G__19397 = cljs.core.next(seq__18857_19386__$1);
var G__19398 = null;
var G__19399 = (0);
var G__19400 = (0);
seq__18857_19372 = G__19397;
chunk__18859_19373 = G__19398;
count__18860_19374 = G__19399;
i__18861_19375 = G__19400;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19371);
}


var G__19407 = cljs.core.next(seq__18841_19357__$1);
var G__19408 = null;
var G__19409 = (0);
var G__19410 = (0);
seq__18841_19315 = G__19407;
chunk__18842_19316 = G__19408;
count__18843_19317 = G__19409;
i__18844_19318 = G__19410;
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
var G__18871 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__18871);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if(((!((node == null)))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__18873 = cljs.core.seq(node);
var chunk__18874 = null;
var count__18875 = (0);
var i__18876 = (0);
while(true){
if((i__18876 < count__18875)){
var n = chunk__18874.cljs$core$IIndexed$_nth$arity$2(null,i__18876);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19414 = seq__18873;
var G__19415 = chunk__18874;
var G__19416 = count__18875;
var G__19417 = (i__18876 + (1));
seq__18873 = G__19414;
chunk__18874 = G__19415;
count__18875 = G__19416;
i__18876 = G__19417;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__18873);
if(temp__5457__auto__){
var seq__18873__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18873__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__18873__$1);
var G__19418 = cljs.core.chunk_rest(seq__18873__$1);
var G__19419 = c__4351__auto__;
var G__19420 = cljs.core.count(c__4351__auto__);
var G__19421 = (0);
seq__18873 = G__19418;
chunk__18874 = G__19419;
count__18875 = G__19420;
i__18876 = G__19421;
continue;
} else {
var n = cljs.core.first(seq__18873__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19422 = cljs.core.next(seq__18873__$1);
var G__19423 = null;
var G__19424 = (0);
var G__19425 = (0);
seq__18873 = G__19422;
chunk__18874 = G__19423;
count__18875 = G__19424;
i__18876 = G__19425;
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
var G__18879 = shadow.dom.dom_node(new$);
var G__18880 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__18879,G__18880);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__18889 = arguments.length;
switch (G__18889) {
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
var G__18898 = arguments.length;
switch (G__18898) {
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
var G__18907 = arguments.length;
switch (G__18907) {
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
var or__3949__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4534__auto__ = [];
var len__4531__auto___19439 = arguments.length;
var i__4532__auto___19443 = (0);
while(true){
if((i__4532__auto___19443 < len__4531__auto___19439)){
args__4534__auto__.push((arguments[i__4532__auto___19443]));

var G__19444 = (i__4532__auto___19443 + (1));
i__4532__auto___19443 = G__19444;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__18916_19445 = cljs.core.seq(nodes);
var chunk__18917_19446 = null;
var count__18918_19447 = (0);
var i__18919_19448 = (0);
while(true){
if((i__18919_19448 < count__18918_19447)){
var node_19449 = chunk__18917_19446.cljs$core$IIndexed$_nth$arity$2(null,i__18919_19448);
fragment.appendChild(shadow.dom._to_dom(node_19449));


var G__19450 = seq__18916_19445;
var G__19451 = chunk__18917_19446;
var G__19452 = count__18918_19447;
var G__19453 = (i__18919_19448 + (1));
seq__18916_19445 = G__19450;
chunk__18917_19446 = G__19451;
count__18918_19447 = G__19452;
i__18919_19448 = G__19453;
continue;
} else {
var temp__5457__auto___19455 = cljs.core.seq(seq__18916_19445);
if(temp__5457__auto___19455){
var seq__18916_19456__$1 = temp__5457__auto___19455;
if(cljs.core.chunked_seq_QMARK_(seq__18916_19456__$1)){
var c__4351__auto___19459 = cljs.core.chunk_first(seq__18916_19456__$1);
var G__19460 = cljs.core.chunk_rest(seq__18916_19456__$1);
var G__19461 = c__4351__auto___19459;
var G__19462 = cljs.core.count(c__4351__auto___19459);
var G__19463 = (0);
seq__18916_19445 = G__19460;
chunk__18917_19446 = G__19461;
count__18918_19447 = G__19462;
i__18919_19448 = G__19463;
continue;
} else {
var node_19464 = cljs.core.first(seq__18916_19456__$1);
fragment.appendChild(shadow.dom._to_dom(node_19464));


var G__19465 = cljs.core.next(seq__18916_19456__$1);
var G__19466 = null;
var G__19467 = (0);
var G__19468 = (0);
seq__18916_19445 = G__19465;
chunk__18917_19446 = G__19466;
count__18918_19447 = G__19467;
i__18919_19448 = G__19468;
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
shadow.dom.fragment.cljs$lang$applyTo = (function (seq18911){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18911));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__18925_19472 = cljs.core.seq(scripts);
var chunk__18926_19473 = null;
var count__18927_19474 = (0);
var i__18928_19475 = (0);
while(true){
if((i__18928_19475 < count__18927_19474)){
var vec__18929_19476 = chunk__18926_19473.cljs$core$IIndexed$_nth$arity$2(null,i__18928_19475);
var script_tag_19477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18929_19476,(0),null);
var script_body_19478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18929_19476,(1),null);
eval(script_body_19478);


var G__19486 = seq__18925_19472;
var G__19487 = chunk__18926_19473;
var G__19488 = count__18927_19474;
var G__19489 = (i__18928_19475 + (1));
seq__18925_19472 = G__19486;
chunk__18926_19473 = G__19487;
count__18927_19474 = G__19488;
i__18928_19475 = G__19489;
continue;
} else {
var temp__5457__auto___19490 = cljs.core.seq(seq__18925_19472);
if(temp__5457__auto___19490){
var seq__18925_19491__$1 = temp__5457__auto___19490;
if(cljs.core.chunked_seq_QMARK_(seq__18925_19491__$1)){
var c__4351__auto___19492 = cljs.core.chunk_first(seq__18925_19491__$1);
var G__19493 = cljs.core.chunk_rest(seq__18925_19491__$1);
var G__19494 = c__4351__auto___19492;
var G__19495 = cljs.core.count(c__4351__auto___19492);
var G__19496 = (0);
seq__18925_19472 = G__19493;
chunk__18926_19473 = G__19494;
count__18927_19474 = G__19495;
i__18928_19475 = G__19496;
continue;
} else {
var vec__18932_19497 = cljs.core.first(seq__18925_19491__$1);
var script_tag_19498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18932_19497,(0),null);
var script_body_19499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18932_19497,(1),null);
eval(script_body_19499);


var G__19500 = cljs.core.next(seq__18925_19491__$1);
var G__19501 = null;
var G__19502 = (0);
var G__19503 = (0);
seq__18925_19472 = G__19500;
chunk__18926_19473 = G__19501;
count__18927_19474 = G__19502;
i__18928_19475 = G__19503;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__18936){
var vec__18937 = p__18936;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18937,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18937,(1),null);
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
var G__18944 = shadow.dom.dom_node(el);
var G__18945 = cls;
return goog.dom.getAncestorByClass(G__18944,G__18945);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__18949 = arguments.length;
switch (G__18949) {
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
var G__18954 = shadow.dom.dom_node(el);
var G__18955 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__18954,G__18955);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__18956 = shadow.dom.dom_node(el);
var G__18957 = cljs.core.name(tag);
var G__18958 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__18956,G__18957,G__18958);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__18961 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__18961);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__18962 = shadow.dom.dom_node(dom);
var G__18963 = value;
return goog.dom.forms.setValue(G__18962,G__18963);
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
var seq__18970 = cljs.core.seq(style_keys);
var chunk__18971 = null;
var count__18972 = (0);
var i__18973 = (0);
while(true){
if((i__18973 < count__18972)){
var it = chunk__18971.cljs$core$IIndexed$_nth$arity$2(null,i__18973);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19507 = seq__18970;
var G__19508 = chunk__18971;
var G__19509 = count__18972;
var G__19510 = (i__18973 + (1));
seq__18970 = G__19507;
chunk__18971 = G__19508;
count__18972 = G__19509;
i__18973 = G__19510;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__18970);
if(temp__5457__auto__){
var seq__18970__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18970__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__18970__$1);
var G__19513 = cljs.core.chunk_rest(seq__18970__$1);
var G__19514 = c__4351__auto__;
var G__19515 = cljs.core.count(c__4351__auto__);
var G__19516 = (0);
seq__18970 = G__19513;
chunk__18971 = G__19514;
count__18972 = G__19515;
i__18973 = G__19516;
continue;
} else {
var it = cljs.core.first(seq__18970__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19518 = cljs.core.next(seq__18970__$1);
var G__19519 = null;
var G__19520 = (0);
var G__19521 = (0);
seq__18970 = G__19518;
chunk__18971 = G__19519;
count__18972 = G__19520;
i__18973 = G__19521;
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
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k18977,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__18982 = k18977;
var G__18982__$1 = (((G__18982 instanceof cljs.core.Keyword))?G__18982.fqn:null);
switch (G__18982__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18977,else__4206__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18976){
var self__ = this;
var G__18976__$1 = this;
return (new cljs.core.RecordIter((0),G__18976__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__18984 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__18984(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18978,other18979){
var self__ = this;
var this18978__$1 = this;
return ((!((other18979 == null))) && ((this18978__$1.constructor === other18979.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18978__$1.x,other18979.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18978__$1.y,other18979.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18978__$1.__extmap,other18979.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__18976){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__18985 = cljs.core.keyword_identical_QMARK_;
var expr__18986 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__18988 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__18989 = expr__18986;
return (pred__18985.cljs$core$IFn$_invoke$arity$2 ? pred__18985.cljs$core$IFn$_invoke$arity$2(G__18988,G__18989) : pred__18985.call(null,G__18988,G__18989));
})())){
return (new shadow.dom.Coordinate(G__18976,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18990 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__18991 = expr__18986;
return (pred__18985.cljs$core$IFn$_invoke$arity$2 ? pred__18985.cljs$core$IFn$_invoke$arity$2(G__18990,G__18991) : pred__18985.call(null,G__18990,G__18991));
})())){
return (new shadow.dom.Coordinate(self__.x,G__18976,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__18976),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__18976){
var self__ = this;
var this__4202__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__18976,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"shadow.dom/Coordinate");
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__18980){
var extmap__4236__auto__ = (function (){var G__18998 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18980,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__18980)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18998);
} else {
return G__18998;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__18980),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__18980),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__18999 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__18999);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__19000 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__19000);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__19001 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__19001);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
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
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k19003,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__19007 = k19003;
var G__19007__$1 = (((G__19007 instanceof cljs.core.Keyword))?G__19007.fqn:null);
switch (G__19007__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19003,else__4206__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#shadow.dom.Size{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19002){
var self__ = this;
var G__19002__$1 = this;
return (new cljs.core.RecordIter((0),G__19002__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__19008 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__19008(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19004,other19005){
var self__ = this;
var this19004__$1 = this;
return ((!((other19005 == null))) && ((this19004__$1.constructor === other19005.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19004__$1.w,other19005.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19004__$1.h,other19005.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19004__$1.__extmap,other19005.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__19002){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__19009 = cljs.core.keyword_identical_QMARK_;
var expr__19010 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__19012 = new cljs.core.Keyword(null,"w","w",354169001);
var G__19013 = expr__19010;
return (pred__19009.cljs$core$IFn$_invoke$arity$2 ? pred__19009.cljs$core$IFn$_invoke$arity$2(G__19012,G__19013) : pred__19009.call(null,G__19012,G__19013));
})())){
return (new shadow.dom.Size(G__19002,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19014 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__19015 = expr__19010;
return (pred__19009.cljs$core$IFn$_invoke$arity$2 ? pred__19009.cljs$core$IFn$_invoke$arity$2(G__19014,G__19015) : pred__19009.call(null,G__19014,G__19015));
})())){
return (new shadow.dom.Size(self__.w,G__19002,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__19002),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__19002){
var self__ = this;
var this__4202__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__19002,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"shadow.dom/Size");
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__19006){
var extmap__4236__auto__ = (function (){var G__19028 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19006,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__19006)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19028);
} else {
return G__19028;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__19006),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__19006),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__19034 = shadow.dom.dom_node(el);
return goog.style.getSize(G__19034);
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
var a__4405__auto__ = opts;
var l__4406__auto__ = a__4405__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4406__auto__)){
var G__19581 = (i + (1));
var G__19582 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__19581;
ret = G__19582;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19044){
var vec__19045 = p__19044;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19045,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19045,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__19054 = arguments.length;
switch (G__19054) {
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
var G__19062_19593 = new_node;
var G__19063_19594 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__19062_19593,G__19063_19594);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__19067_19596 = new_node;
var G__19068_19597 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__19067_19596,G__19068_19597);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5455__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5455__auto__)){
var child = temp__5455__auto__;
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
var G__19599 = ps;
var G__19600 = (i + (1));
el__$1 = G__19599;
i = G__19600;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__19075 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__19075);
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
var G__19078 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__19078);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__19079 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__19079);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__19080 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19080,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19080,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19080,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__19083_19611 = cljs.core.seq(props);
var chunk__19084_19612 = null;
var count__19085_19613 = (0);
var i__19086_19614 = (0);
while(true){
if((i__19086_19614 < count__19085_19613)){
var vec__19088_19615 = chunk__19084_19612.cljs$core$IIndexed$_nth$arity$2(null,i__19086_19614);
var k_19616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19088_19615,(0),null);
var v_19617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19088_19615,(1),null);
el.setAttributeNS((function (){var temp__5457__auto__ = cljs.core.namespace(k_19616);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19616),v_19617);


var G__19620 = seq__19083_19611;
var G__19621 = chunk__19084_19612;
var G__19622 = count__19085_19613;
var G__19623 = (i__19086_19614 + (1));
seq__19083_19611 = G__19620;
chunk__19084_19612 = G__19621;
count__19085_19613 = G__19622;
i__19086_19614 = G__19623;
continue;
} else {
var temp__5457__auto___19624 = cljs.core.seq(seq__19083_19611);
if(temp__5457__auto___19624){
var seq__19083_19626__$1 = temp__5457__auto___19624;
if(cljs.core.chunked_seq_QMARK_(seq__19083_19626__$1)){
var c__4351__auto___19627 = cljs.core.chunk_first(seq__19083_19626__$1);
var G__19628 = cljs.core.chunk_rest(seq__19083_19626__$1);
var G__19629 = c__4351__auto___19627;
var G__19630 = cljs.core.count(c__4351__auto___19627);
var G__19631 = (0);
seq__19083_19611 = G__19628;
chunk__19084_19612 = G__19629;
count__19085_19613 = G__19630;
i__19086_19614 = G__19631;
continue;
} else {
var vec__19091_19632 = cljs.core.first(seq__19083_19626__$1);
var k_19633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19091_19632,(0),null);
var v_19634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19091_19632,(1),null);
el.setAttributeNS((function (){var temp__5457__auto____$1 = cljs.core.namespace(k_19633);
if(cljs.core.truth_(temp__5457__auto____$1)){
var ns = temp__5457__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19633),v_19634);


var G__19635 = cljs.core.next(seq__19083_19626__$1);
var G__19636 = null;
var G__19637 = (0);
var G__19638 = (0);
seq__19083_19611 = G__19635;
chunk__19084_19612 = G__19636;
count__19085_19613 = G__19637;
i__19086_19614 = G__19638;
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
if(((!((el == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__19096 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19096,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19096,(1),null);
var seq__19099_19650 = cljs.core.seq(node_children);
var chunk__19101_19651 = null;
var count__19102_19652 = (0);
var i__19103_19653 = (0);
while(true){
if((i__19103_19653 < count__19102_19652)){
var child_struct_19654 = chunk__19101_19651.cljs$core$IIndexed$_nth$arity$2(null,i__19103_19653);
if(!((child_struct_19654 == null))){
if(typeof child_struct_19654 === 'string'){
var text_19655 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19655),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_19654)].join(''));
} else {
var children_19656 = shadow.dom.svg_node(child_struct_19654);
if(cljs.core.seq_QMARK_(children_19656)){
var seq__19105_19657 = cljs.core.seq(children_19656);
var chunk__19107_19658 = null;
var count__19108_19659 = (0);
var i__19109_19660 = (0);
while(true){
if((i__19109_19660 < count__19108_19659)){
var child_19661 = chunk__19107_19658.cljs$core$IIndexed$_nth$arity$2(null,i__19109_19660);
if(cljs.core.truth_(child_19661)){
node.appendChild(child_19661);


var G__19665 = seq__19105_19657;
var G__19666 = chunk__19107_19658;
var G__19667 = count__19108_19659;
var G__19668 = (i__19109_19660 + (1));
seq__19105_19657 = G__19665;
chunk__19107_19658 = G__19666;
count__19108_19659 = G__19667;
i__19109_19660 = G__19668;
continue;
} else {
var G__19669 = seq__19105_19657;
var G__19670 = chunk__19107_19658;
var G__19671 = count__19108_19659;
var G__19672 = (i__19109_19660 + (1));
seq__19105_19657 = G__19669;
chunk__19107_19658 = G__19670;
count__19108_19659 = G__19671;
i__19109_19660 = G__19672;
continue;
}
} else {
var temp__5457__auto___19673 = cljs.core.seq(seq__19105_19657);
if(temp__5457__auto___19673){
var seq__19105_19674__$1 = temp__5457__auto___19673;
if(cljs.core.chunked_seq_QMARK_(seq__19105_19674__$1)){
var c__4351__auto___19675 = cljs.core.chunk_first(seq__19105_19674__$1);
var G__19676 = cljs.core.chunk_rest(seq__19105_19674__$1);
var G__19677 = c__4351__auto___19675;
var G__19678 = cljs.core.count(c__4351__auto___19675);
var G__19679 = (0);
seq__19105_19657 = G__19676;
chunk__19107_19658 = G__19677;
count__19108_19659 = G__19678;
i__19109_19660 = G__19679;
continue;
} else {
var child_19680 = cljs.core.first(seq__19105_19674__$1);
if(cljs.core.truth_(child_19680)){
node.appendChild(child_19680);


var G__19681 = cljs.core.next(seq__19105_19674__$1);
var G__19682 = null;
var G__19683 = (0);
var G__19684 = (0);
seq__19105_19657 = G__19681;
chunk__19107_19658 = G__19682;
count__19108_19659 = G__19683;
i__19109_19660 = G__19684;
continue;
} else {
var G__19685 = cljs.core.next(seq__19105_19674__$1);
var G__19686 = null;
var G__19687 = (0);
var G__19688 = (0);
seq__19105_19657 = G__19685;
chunk__19107_19658 = G__19686;
count__19108_19659 = G__19687;
i__19109_19660 = G__19688;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19656);
}
}


var G__19689 = seq__19099_19650;
var G__19690 = chunk__19101_19651;
var G__19691 = count__19102_19652;
var G__19692 = (i__19103_19653 + (1));
seq__19099_19650 = G__19689;
chunk__19101_19651 = G__19690;
count__19102_19652 = G__19691;
i__19103_19653 = G__19692;
continue;
} else {
var G__19693 = seq__19099_19650;
var G__19694 = chunk__19101_19651;
var G__19695 = count__19102_19652;
var G__19696 = (i__19103_19653 + (1));
seq__19099_19650 = G__19693;
chunk__19101_19651 = G__19694;
count__19102_19652 = G__19695;
i__19103_19653 = G__19696;
continue;
}
} else {
var temp__5457__auto___19697 = cljs.core.seq(seq__19099_19650);
if(temp__5457__auto___19697){
var seq__19099_19698__$1 = temp__5457__auto___19697;
if(cljs.core.chunked_seq_QMARK_(seq__19099_19698__$1)){
var c__4351__auto___19699 = cljs.core.chunk_first(seq__19099_19698__$1);
var G__19700 = cljs.core.chunk_rest(seq__19099_19698__$1);
var G__19701 = c__4351__auto___19699;
var G__19702 = cljs.core.count(c__4351__auto___19699);
var G__19703 = (0);
seq__19099_19650 = G__19700;
chunk__19101_19651 = G__19701;
count__19102_19652 = G__19702;
i__19103_19653 = G__19703;
continue;
} else {
var child_struct_19704 = cljs.core.first(seq__19099_19698__$1);
if(!((child_struct_19704 == null))){
if(typeof child_struct_19704 === 'string'){
var text_19710 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19710),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_19704)].join(''));
} else {
var children_19711 = shadow.dom.svg_node(child_struct_19704);
if(cljs.core.seq_QMARK_(children_19711)){
var seq__19111_19712 = cljs.core.seq(children_19711);
var chunk__19113_19713 = null;
var count__19114_19714 = (0);
var i__19115_19715 = (0);
while(true){
if((i__19115_19715 < count__19114_19714)){
var child_19716 = chunk__19113_19713.cljs$core$IIndexed$_nth$arity$2(null,i__19115_19715);
if(cljs.core.truth_(child_19716)){
node.appendChild(child_19716);


var G__19717 = seq__19111_19712;
var G__19718 = chunk__19113_19713;
var G__19719 = count__19114_19714;
var G__19720 = (i__19115_19715 + (1));
seq__19111_19712 = G__19717;
chunk__19113_19713 = G__19718;
count__19114_19714 = G__19719;
i__19115_19715 = G__19720;
continue;
} else {
var G__19721 = seq__19111_19712;
var G__19722 = chunk__19113_19713;
var G__19723 = count__19114_19714;
var G__19724 = (i__19115_19715 + (1));
seq__19111_19712 = G__19721;
chunk__19113_19713 = G__19722;
count__19114_19714 = G__19723;
i__19115_19715 = G__19724;
continue;
}
} else {
var temp__5457__auto___19725__$1 = cljs.core.seq(seq__19111_19712);
if(temp__5457__auto___19725__$1){
var seq__19111_19726__$1 = temp__5457__auto___19725__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19111_19726__$1)){
var c__4351__auto___19727 = cljs.core.chunk_first(seq__19111_19726__$1);
var G__19728 = cljs.core.chunk_rest(seq__19111_19726__$1);
var G__19729 = c__4351__auto___19727;
var G__19730 = cljs.core.count(c__4351__auto___19727);
var G__19731 = (0);
seq__19111_19712 = G__19728;
chunk__19113_19713 = G__19729;
count__19114_19714 = G__19730;
i__19115_19715 = G__19731;
continue;
} else {
var child_19732 = cljs.core.first(seq__19111_19726__$1);
if(cljs.core.truth_(child_19732)){
node.appendChild(child_19732);


var G__19733 = cljs.core.next(seq__19111_19726__$1);
var G__19734 = null;
var G__19735 = (0);
var G__19736 = (0);
seq__19111_19712 = G__19733;
chunk__19113_19713 = G__19734;
count__19114_19714 = G__19735;
i__19115_19715 = G__19736;
continue;
} else {
var G__19737 = cljs.core.next(seq__19111_19726__$1);
var G__19738 = null;
var G__19739 = (0);
var G__19740 = (0);
seq__19111_19712 = G__19737;
chunk__19113_19713 = G__19738;
count__19114_19714 = G__19739;
i__19115_19715 = G__19740;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19711);
}
}


var G__19741 = cljs.core.next(seq__19099_19698__$1);
var G__19742 = null;
var G__19743 = (0);
var G__19744 = (0);
seq__19099_19650 = G__19741;
chunk__19101_19651 = G__19742;
count__19102_19652 = G__19743;
i__19103_19653 = G__19744;
continue;
} else {
var G__19745 = cljs.core.next(seq__19099_19698__$1);
var G__19746 = null;
var G__19747 = (0);
var G__19748 = (0);
seq__19099_19650 = G__19745;
chunk__19101_19651 = G__19746;
count__19102_19652 = G__19747;
i__19103_19653 = G__19748;
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

var G__19120_19750 = shadow.dom._to_svg;
var G__19121_19751 = "string";
var G__19122_19752 = ((function (G__19120_19750,G__19121_19751){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__19120_19750,G__19121_19751))
;
goog.object.set(G__19120_19750,G__19121_19751,G__19122_19752);

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

var G__19128_19754 = shadow.dom._to_svg;
var G__19129_19755 = "null";
var G__19130_19756 = ((function (G__19128_19754,G__19129_19755){
return (function (_){
return null;
});})(G__19128_19754,G__19129_19755))
;
goog.object.set(G__19128_19754,G__19129_19755,G__19130_19756);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4534__auto__ = [];
var len__4531__auto___19757 = arguments.length;
var i__4532__auto___19758 = (0);
while(true){
if((i__4532__auto___19758 < len__4531__auto___19757)){
args__4534__auto__.push((arguments[i__4532__auto___19758]));

var G__19759 = (i__4532__auto___19758 + (1));
i__4532__auto___19758 = G__19759;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq19131){
var G__19132 = cljs.core.first(seq19131);
var seq19131__$1 = cljs.core.next(seq19131);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19132,seq19131__$1);
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
var G__19142 = arguments.length;
switch (G__19142) {
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
var G__19144_19764 = shadow.dom.dom_node(el);
var G__19145_19765 = cljs.core.name(event);
var G__19146_19766 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__19144_19764,G__19145_19765,G__19146_19766) : shadow.dom.dom_listen.call(null,G__19144_19764,G__19145_19765,G__19146_19766));

if(cljs.core.truth_((function (){var and__3938__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__3938__auto__)){
return !(once_or_cleanup === true);
} else {
return and__3938__auto__;
}
})())){
var c__16465__auto___19767 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16465__auto___19767,buf,chan,event_fn){
return (function (){
var f__16466__auto__ = (function (){var switch__16281__auto__ = ((function (c__16465__auto___19767,buf,chan,event_fn){
return (function (state_19153){
var state_val_19154 = (state_19153[(1)]);
if((state_val_19154 === (1))){
var state_19153__$1 = state_19153;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19153__$1,(2),once_or_cleanup);
} else {
if((state_val_19154 === (2))){
var inst_19149 = (state_19153[(2)]);
var inst_19150 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_19153__$1 = (function (){var statearr_19157 = state_19153;
(statearr_19157[(7)] = inst_19149);

return statearr_19157;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19153__$1,inst_19150);
} else {
return null;
}
}
});})(c__16465__auto___19767,buf,chan,event_fn))
;
return ((function (switch__16281__auto__,c__16465__auto___19767,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__16282__auto__ = null;
var shadow$dom$state_machine__16282__auto____0 = (function (){
var statearr_19159 = [null,null,null,null,null,null,null,null];
(statearr_19159[(0)] = shadow$dom$state_machine__16282__auto__);

(statearr_19159[(1)] = (1));

return statearr_19159;
});
var shadow$dom$state_machine__16282__auto____1 = (function (state_19153){
while(true){
var ret_value__16283__auto__ = (function (){try{while(true){
var result__16284__auto__ = switch__16281__auto__(state_19153);
if(cljs.core.keyword_identical_QMARK_(result__16284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16284__auto__;
}
break;
}
}catch (e19160){if((e19160 instanceof Object)){
var ex__16285__auto__ = e19160;
var statearr_19161_19771 = state_19153;
(statearr_19161_19771[(5)] = ex__16285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19160;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19772 = state_19153;
state_19153 = G__19772;
continue;
} else {
return ret_value__16283__auto__;
}
break;
}
});
shadow$dom$state_machine__16282__auto__ = function(state_19153){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__16282__auto____0.call(this);
case 1:
return shadow$dom$state_machine__16282__auto____1.call(this,state_19153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__16282__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__16282__auto____0;
shadow$dom$state_machine__16282__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__16282__auto____1;
return shadow$dom$state_machine__16282__auto__;
})()
;})(switch__16281__auto__,c__16465__auto___19767,buf,chan,event_fn))
})();
var state__16467__auto__ = (function (){var statearr_19164 = (f__16466__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16466__auto__.cljs$core$IFn$_invoke$arity$0() : f__16466__auto__.call(null));
(statearr_19164[(6)] = c__16465__auto___19767);

return statearr_19164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16467__auto__);
});})(c__16465__auto___19767,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
