goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return cljs.core._vreset_BANG_(shadow.cljs.devtools.client.browser.active_modules_ref,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(shadow.cljs.devtools.client.browser.active_modules_ref),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4534__auto__ = [];
var len__4531__auto___20599 = arguments.length;
var i__4532__auto___20600 = (0);
while(true){
if((i__4532__auto___20600 < len__4531__auto___20599)){
args__4534__auto__.push((arguments[i__4532__auto___20600]));

var G__20601 = (i__4532__auto___20600 + (1));
i__4532__auto___20600 = G__20601;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20459){
var G__20460 = cljs.core.first(seq20459);
var seq20459__$1 = cljs.core.next(seq20459);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20460,seq20459__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5455__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5455__auto__)){
var s = temp__5455__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__20472){
var map__20473 = p__20472;
var map__20473__$1 = ((((!((map__20473 == null)))?(((((map__20473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20473):map__20473);
var src = map__20473__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20473__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20473__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__3949__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__3949__auto__){
return or__3949__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20479 = cljs.core.seq(sources);
var chunk__20480 = null;
var count__20481 = (0);
var i__20482 = (0);
while(true){
if((i__20482 < count__20481)){
var map__20483 = chunk__20480.cljs$core$IIndexed$_nth$arity$2(null,i__20482);
var map__20483__$1 = ((((!((map__20483 == null)))?(((((map__20483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20483):map__20483);
var src = map__20483__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20483__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20483__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20483__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20483__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__20602 = seq__20479;
var G__20603 = chunk__20480;
var G__20604 = count__20481;
var G__20605 = (i__20482 + (1));
seq__20479 = G__20602;
chunk__20480 = G__20603;
count__20481 = G__20604;
i__20482 = G__20605;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__20479);
if(temp__5457__auto__){
var seq__20479__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20479__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__20479__$1);
var G__20606 = cljs.core.chunk_rest(seq__20479__$1);
var G__20607 = c__4351__auto__;
var G__20608 = cljs.core.count(c__4351__auto__);
var G__20609 = (0);
seq__20479 = G__20606;
chunk__20480 = G__20607;
count__20481 = G__20608;
i__20482 = G__20609;
continue;
} else {
var map__20487 = cljs.core.first(seq__20479__$1);
var map__20487__$1 = ((((!((map__20487 == null)))?(((((map__20487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20487):map__20487);
var src = map__20487__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20487__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20487__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20487__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20487__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__20610 = cljs.core.next(seq__20479__$1);
var G__20611 = null;
var G__20612 = (0);
var G__20613 = (0);
seq__20479 = G__20610;
chunk__20480 = G__20611;
count__20481 = G__20612;
i__20482 = G__20613;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__20493 = cljs.core.seq(js_requires);
var chunk__20494 = null;
var count__20495 = (0);
var i__20496 = (0);
while(true){
if((i__20496 < count__20495)){
var js_ns = chunk__20494.cljs$core$IIndexed$_nth$arity$2(null,i__20496);
var require_str_20614 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_20614);


var G__20615 = seq__20493;
var G__20616 = chunk__20494;
var G__20617 = count__20495;
var G__20618 = (i__20496 + (1));
seq__20493 = G__20615;
chunk__20494 = G__20616;
count__20495 = G__20617;
i__20496 = G__20618;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__20493);
if(temp__5457__auto__){
var seq__20493__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20493__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__20493__$1);
var G__20619 = cljs.core.chunk_rest(seq__20493__$1);
var G__20620 = c__4351__auto__;
var G__20621 = cljs.core.count(c__4351__auto__);
var G__20622 = (0);
seq__20493 = G__20619;
chunk__20494 = G__20620;
count__20495 = G__20621;
i__20496 = G__20622;
continue;
} else {
var js_ns = cljs.core.first(seq__20493__$1);
var require_str_20623 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_20623);


var G__20624 = cljs.core.next(seq__20493__$1);
var G__20625 = null;
var G__20626 = (0);
var G__20627 = (0);
seq__20493 = G__20624;
chunk__20494 = G__20625;
count__20495 = G__20626;
i__20496 = G__20627;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__20498 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__20498) : callback.call(null,G__20498));
} else {
var G__20500 = shadow.cljs.devtools.client.env.files_url();
var G__20501 = ((function (G__20500){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__20500))
;
var G__20502 = "POST";
var G__20503 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__20504 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__20500,G__20501,G__20502,G__20503,G__20504);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__20507){
var map__20508 = p__20507;
var map__20508__$1 = ((((!((map__20508 == null)))?(((((map__20508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20508):map__20508);
var msg = map__20508__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20508__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20508__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__20512 = info;
var map__20512__$1 = ((((!((map__20512 == null)))?(((((map__20512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20512.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20512):map__20512);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20512__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20512__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (map__20512,map__20512__$1,sources,compiled,map__20508,map__20508__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20514(s__20515){
return (new cljs.core.LazySeq(null,((function (map__20512,map__20512__$1,sources,compiled,map__20508,map__20508__$1,msg,info,reload_info){
return (function (){
var s__20515__$1 = s__20515;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__20515__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__20520 = cljs.core.first(xs__6012__auto__);
var map__20520__$1 = ((((!((map__20520 == null)))?(((((map__20520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20520):map__20520);
var src = map__20520__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20520__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20520__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4320__auto__ = ((function (s__20515__$1,map__20520,map__20520__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__20512,map__20512__$1,sources,compiled,map__20508,map__20508__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20514_$_iter__20516(s__20517){
return (new cljs.core.LazySeq(null,((function (s__20515__$1,map__20520,map__20520__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__20512,map__20512__$1,sources,compiled,map__20508,map__20508__$1,msg,info,reload_info){
return (function (){
var s__20517__$1 = s__20517;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__20517__$1);
if(temp__5457__auto____$1){
var s__20517__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20517__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__20517__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__20519 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__20518 = (0);
while(true){
if((i__20518 < size__4323__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__20518);
cljs.core.chunk_append(b__20519,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__20628 = (i__20518 + (1));
i__20518 = G__20628;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20519),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20514_$_iter__20516(cljs.core.chunk_rest(s__20517__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20519),null);
}
} else {
var warning = cljs.core.first(s__20517__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20514_$_iter__20516(cljs.core.rest(s__20517__$2)));
}
} else {
return null;
}
break;
}
});})(s__20515__$1,map__20520,map__20520__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__20512,map__20512__$1,sources,compiled,map__20508,map__20508__$1,msg,info,reload_info))
,null,null));
});})(s__20515__$1,map__20520,map__20520__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__20512,map__20512__$1,sources,compiled,map__20508,map__20508__$1,msg,info,reload_info))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(warnings));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20514(cljs.core.rest(s__20515__$1)));
} else {
var G__20629 = cljs.core.rest(s__20515__$1);
s__20515__$1 = G__20629;
continue;
}
} else {
var G__20630 = cljs.core.rest(s__20515__$1);
s__20515__$1 = G__20630;
continue;
}
} else {
return null;
}
break;
}
});})(map__20512,map__20512__$1,sources,compiled,map__20508,map__20508__$1,msg,info,reload_info))
,null,null));
});})(map__20512,map__20512__$1,sources,compiled,map__20508,map__20508__$1,msg,info,reload_info))
;
return iter__4324__auto__(sources);
})()));
var seq__20522_20631 = cljs.core.seq(warnings);
var chunk__20523_20632 = null;
var count__20524_20633 = (0);
var i__20525_20634 = (0);
while(true){
if((i__20525_20634 < count__20524_20633)){
var map__20526_20635 = chunk__20523_20632.cljs$core$IIndexed$_nth$arity$2(null,i__20525_20634);
var map__20526_20636__$1 = ((((!((map__20526_20635 == null)))?(((((map__20526_20635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20526_20635.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20526_20635):map__20526_20635);
var w_20637 = map__20526_20636__$1;
var msg_20638__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20526_20636__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_20639 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20526_20636__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_20640 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20526_20636__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_20641 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20526_20636__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_20641)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_20639),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_20640),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_20638__$1)].join(''));


var G__20642 = seq__20522_20631;
var G__20643 = chunk__20523_20632;
var G__20644 = count__20524_20633;
var G__20645 = (i__20525_20634 + (1));
seq__20522_20631 = G__20642;
chunk__20523_20632 = G__20643;
count__20524_20633 = G__20644;
i__20525_20634 = G__20645;
continue;
} else {
var temp__5457__auto___20646 = cljs.core.seq(seq__20522_20631);
if(temp__5457__auto___20646){
var seq__20522_20647__$1 = temp__5457__auto___20646;
if(cljs.core.chunked_seq_QMARK_(seq__20522_20647__$1)){
var c__4351__auto___20648 = cljs.core.chunk_first(seq__20522_20647__$1);
var G__20649 = cljs.core.chunk_rest(seq__20522_20647__$1);
var G__20650 = c__4351__auto___20648;
var G__20651 = cljs.core.count(c__4351__auto___20648);
var G__20652 = (0);
seq__20522_20631 = G__20649;
chunk__20523_20632 = G__20650;
count__20524_20633 = G__20651;
i__20525_20634 = G__20652;
continue;
} else {
var map__20528_20653 = cljs.core.first(seq__20522_20647__$1);
var map__20528_20654__$1 = ((((!((map__20528_20653 == null)))?(((((map__20528_20653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20528_20653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20528_20653):map__20528_20653);
var w_20655 = map__20528_20654__$1;
var msg_20656__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20528_20654__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_20657 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20528_20654__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_20658 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20528_20654__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_20659 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20528_20654__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_20659)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_20657),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_20658),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_20656__$1)].join(''));


var G__20660 = cljs.core.next(seq__20522_20647__$1);
var G__20661 = null;
var G__20662 = (0);
var G__20663 = (0);
seq__20522_20631 = G__20660;
chunk__20523_20632 = G__20661;
count__20524_20633 = G__20662;
i__20525_20634 = G__20663;
continue;
}
} else {
}
}
break;
}

if(!(shadow.cljs.devtools.client.env.autoload)){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__20512,map__20512__$1,sources,compiled,warnings,map__20508,map__20508__$1,msg,info,reload_info){
return (function (p__20530){
var map__20531 = p__20530;
var map__20531__$1 = ((((!((map__20531 == null)))?(((((map__20531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20531):map__20531);
var src = map__20531__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20531__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20531__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__20512,map__20512__$1,sources,compiled,warnings,map__20508,map__20508__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__20512,map__20512__$1,sources,compiled,warnings,map__20508,map__20508__$1,msg,info,reload_info){
return (function (p__20533){
var map__20534 = p__20533;
var map__20534__$1 = ((((!((map__20534 == null)))?(((((map__20534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20534):map__20534);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20534__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__20512,map__20512__$1,sources,compiled,warnings,map__20508,map__20508__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__20512,map__20512__$1,sources,compiled,warnings,map__20508,map__20508__$1,msg,info,reload_info){
return (function (p__20536){
var map__20537 = p__20536;
var map__20537__$1 = ((((!((map__20537 == null)))?(((((map__20537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20537):map__20537);
var rc = map__20537__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20537__$1,new cljs.core.Keyword(null,"module","module",1424618191));
var or__3949__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format);
if(or__3949__auto__){
return or__3949__auto__;
} else {
return shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module);
}
});})(map__20512,map__20512__$1,sources,compiled,warnings,map__20508,map__20508__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__20512,map__20512__$1,sources,compiled,warnings,map__20508,map__20508__$1,msg,info,reload_info){
return (function (p1__20506_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__20506_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__20512,map__20512__$1,sources,compiled,warnings,map__20508,map__20508__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
var and__3938__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new);
if(and__3938__auto__){
return rel_new;
} else {
return and__3938__auto__;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__3938__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__3938__auto__){
var and__3938__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__3938__auto____$1){
return new$;
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__20539){
var map__20540 = p__20539;
var map__20540__$1 = ((((!((map__20540 == null)))?(((((map__20540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20540):map__20540);
var msg = map__20540__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20540__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__20542 = cljs.core.seq(updates);
var chunk__20544 = null;
var count__20545 = (0);
var i__20546 = (0);
while(true){
if((i__20546 < count__20545)){
var path = chunk__20544.cljs$core$IIndexed$_nth$arity$2(null,i__20546);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__20549_20664 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__20552_20665 = null;
var count__20553_20666 = (0);
var i__20554_20667 = (0);
while(true){
if((i__20554_20667 < count__20553_20666)){
var node_20668 = chunk__20552_20665.cljs$core$IIndexed$_nth$arity$2(null,i__20554_20667);
var path_match_20669 = shadow.cljs.devtools.client.browser.match_paths(node_20668.getAttribute("href"),path);
if(cljs.core.truth_(path_match_20669)){
var new_link_20670 = (function (){var G__20558 = node_20668.cloneNode(true);
G__20558.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_20669),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20558;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_20669], 0));

goog.dom.insertSiblingAfter(new_link_20670,node_20668);

goog.dom.removeNode(node_20668);


var G__20671 = seq__20549_20664;
var G__20672 = chunk__20552_20665;
var G__20673 = count__20553_20666;
var G__20674 = (i__20554_20667 + (1));
seq__20549_20664 = G__20671;
chunk__20552_20665 = G__20672;
count__20553_20666 = G__20673;
i__20554_20667 = G__20674;
continue;
} else {
var G__20675 = seq__20549_20664;
var G__20676 = chunk__20552_20665;
var G__20677 = count__20553_20666;
var G__20678 = (i__20554_20667 + (1));
seq__20549_20664 = G__20675;
chunk__20552_20665 = G__20676;
count__20553_20666 = G__20677;
i__20554_20667 = G__20678;
continue;
}
} else {
var temp__5457__auto___20679 = cljs.core.seq(seq__20549_20664);
if(temp__5457__auto___20679){
var seq__20549_20680__$1 = temp__5457__auto___20679;
if(cljs.core.chunked_seq_QMARK_(seq__20549_20680__$1)){
var c__4351__auto___20681 = cljs.core.chunk_first(seq__20549_20680__$1);
var G__20682 = cljs.core.chunk_rest(seq__20549_20680__$1);
var G__20683 = c__4351__auto___20681;
var G__20684 = cljs.core.count(c__4351__auto___20681);
var G__20685 = (0);
seq__20549_20664 = G__20682;
chunk__20552_20665 = G__20683;
count__20553_20666 = G__20684;
i__20554_20667 = G__20685;
continue;
} else {
var node_20686 = cljs.core.first(seq__20549_20680__$1);
var path_match_20687 = shadow.cljs.devtools.client.browser.match_paths(node_20686.getAttribute("href"),path);
if(cljs.core.truth_(path_match_20687)){
var new_link_20688 = (function (){var G__20559 = node_20686.cloneNode(true);
G__20559.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_20687),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20559;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_20687], 0));

goog.dom.insertSiblingAfter(new_link_20688,node_20686);

goog.dom.removeNode(node_20686);


var G__20689 = cljs.core.next(seq__20549_20680__$1);
var G__20690 = null;
var G__20691 = (0);
var G__20692 = (0);
seq__20549_20664 = G__20689;
chunk__20552_20665 = G__20690;
count__20553_20666 = G__20691;
i__20554_20667 = G__20692;
continue;
} else {
var G__20693 = cljs.core.next(seq__20549_20680__$1);
var G__20694 = null;
var G__20695 = (0);
var G__20696 = (0);
seq__20549_20664 = G__20693;
chunk__20552_20665 = G__20694;
count__20553_20666 = G__20695;
i__20554_20667 = G__20696;
continue;
}
}
} else {
}
}
break;
}


var G__20697 = seq__20542;
var G__20698 = chunk__20544;
var G__20699 = count__20545;
var G__20700 = (i__20546 + (1));
seq__20542 = G__20697;
chunk__20544 = G__20698;
count__20545 = G__20699;
i__20546 = G__20700;
continue;
} else {
var G__20701 = seq__20542;
var G__20702 = chunk__20544;
var G__20703 = count__20545;
var G__20704 = (i__20546 + (1));
seq__20542 = G__20701;
chunk__20544 = G__20702;
count__20545 = G__20703;
i__20546 = G__20704;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq(seq__20542);
if(temp__5457__auto__){
var seq__20542__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20542__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__20542__$1);
var G__20705 = cljs.core.chunk_rest(seq__20542__$1);
var G__20706 = c__4351__auto__;
var G__20707 = cljs.core.count(c__4351__auto__);
var G__20708 = (0);
seq__20542 = G__20705;
chunk__20544 = G__20706;
count__20545 = G__20707;
i__20546 = G__20708;
continue;
} else {
var path = cljs.core.first(seq__20542__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__20560_20709 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__20563_20710 = null;
var count__20564_20711 = (0);
var i__20565_20712 = (0);
while(true){
if((i__20565_20712 < count__20564_20711)){
var node_20713 = chunk__20563_20710.cljs$core$IIndexed$_nth$arity$2(null,i__20565_20712);
var path_match_20714 = shadow.cljs.devtools.client.browser.match_paths(node_20713.getAttribute("href"),path);
if(cljs.core.truth_(path_match_20714)){
var new_link_20715 = (function (){var G__20568 = node_20713.cloneNode(true);
G__20568.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_20714),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20568;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_20714], 0));

goog.dom.insertSiblingAfter(new_link_20715,node_20713);

goog.dom.removeNode(node_20713);


var G__20716 = seq__20560_20709;
var G__20717 = chunk__20563_20710;
var G__20718 = count__20564_20711;
var G__20719 = (i__20565_20712 + (1));
seq__20560_20709 = G__20716;
chunk__20563_20710 = G__20717;
count__20564_20711 = G__20718;
i__20565_20712 = G__20719;
continue;
} else {
var G__20720 = seq__20560_20709;
var G__20721 = chunk__20563_20710;
var G__20722 = count__20564_20711;
var G__20723 = (i__20565_20712 + (1));
seq__20560_20709 = G__20720;
chunk__20563_20710 = G__20721;
count__20564_20711 = G__20722;
i__20565_20712 = G__20723;
continue;
}
} else {
var temp__5457__auto___20724__$1 = cljs.core.seq(seq__20560_20709);
if(temp__5457__auto___20724__$1){
var seq__20560_20725__$1 = temp__5457__auto___20724__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20560_20725__$1)){
var c__4351__auto___20726 = cljs.core.chunk_first(seq__20560_20725__$1);
var G__20727 = cljs.core.chunk_rest(seq__20560_20725__$1);
var G__20728 = c__4351__auto___20726;
var G__20729 = cljs.core.count(c__4351__auto___20726);
var G__20730 = (0);
seq__20560_20709 = G__20727;
chunk__20563_20710 = G__20728;
count__20564_20711 = G__20729;
i__20565_20712 = G__20730;
continue;
} else {
var node_20731 = cljs.core.first(seq__20560_20725__$1);
var path_match_20732 = shadow.cljs.devtools.client.browser.match_paths(node_20731.getAttribute("href"),path);
if(cljs.core.truth_(path_match_20732)){
var new_link_20733 = (function (){var G__20570 = node_20731.cloneNode(true);
G__20570.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_20732),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20570;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_20732], 0));

goog.dom.insertSiblingAfter(new_link_20733,node_20731);

goog.dom.removeNode(node_20731);


var G__20734 = cljs.core.next(seq__20560_20725__$1);
var G__20735 = null;
var G__20736 = (0);
var G__20737 = (0);
seq__20560_20709 = G__20734;
chunk__20563_20710 = G__20735;
count__20564_20711 = G__20736;
i__20565_20712 = G__20737;
continue;
} else {
var G__20738 = cljs.core.next(seq__20560_20725__$1);
var G__20739 = null;
var G__20740 = (0);
var G__20741 = (0);
seq__20560_20709 = G__20738;
chunk__20563_20710 = G__20739;
count__20564_20711 = G__20740;
i__20565_20712 = G__20741;
continue;
}
}
} else {
}
}
break;
}


var G__20742 = cljs.core.next(seq__20542__$1);
var G__20743 = null;
var G__20744 = (0);
var G__20745 = (0);
seq__20542 = G__20742;
chunk__20544 = G__20743;
count__20545 = G__20744;
i__20546 = G__20745;
continue;
} else {
var G__20746 = cljs.core.next(seq__20542__$1);
var G__20747 = null;
var G__20748 = (0);
var G__20749 = (0);
seq__20542 = G__20746;
chunk__20544 = G__20747;
count__20545 = G__20748;
i__20546 = G__20749;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__20572){
var map__20573 = p__20572;
var map__20573__$1 = ((((!((map__20573 == null)))?(((((map__20573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20573):map__20573);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20573__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20573__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__20573,map__20573__$1,id,js){
return (function (){
return eval(js);
});})(map__20573,map__20573__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__20575){
var map__20576 = p__20575;
var map__20576__$1 = ((((!((map__20576 == null)))?(((((map__20576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20576):map__20576);
var msg = map__20576__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20576__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20576__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20576__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20576__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__20576,map__20576__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__20578){
var map__20579 = p__20578;
var map__20579__$1 = ((((!((map__20579 == null)))?(((((map__20579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20579):map__20579);
var src = map__20579__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20579__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__3938__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__3938__auto__;
}
});})(map__20576,map__20576__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__20576,map__20576__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__20576,map__20576__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__20581){
var map__20582 = p__20581;
var map__20582__$1 = ((((!((map__20582 == null)))?(((((map__20582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20582):map__20582);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20582__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20582__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__20582,map__20582__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__20582,map__20582__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__20584){
var map__20585 = p__20584;
var map__20585__$1 = ((((!((map__20585 == null)))?(((((map__20585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20585.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20585):map__20585);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20585__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20585__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__20587){
var map__20588 = p__20587;
var map__20588__$1 = ((((!((map__20588 == null)))?(((((map__20588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20588):map__20588);
var msg = map__20588__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20588__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__20591 = type;
var G__20591__$1 = (((G__20591 instanceof cljs.core.Keyword))?G__20591.fqn:null);
switch (G__20591__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "repl/session-start":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"\" not running"].join(''));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__20593 = ["http",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((shadow.cljs.devtools.client.env.ssl)?"s":null)),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.proc_id),"/browser"].join('');
var G__20594 = ((function (G__20593){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__20593))
;
var G__20595 = "POST";
var G__20596 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__20597 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__20593,G__20594,G__20595,G__20596,G__20597);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__3949__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e20598){var e = e20598;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5457__auto___20751 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto___20751)){
var s_20752 = temp__5457__auto___20751;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_20752.onclose = ((function (s_20752,temp__5457__auto___20751){
return (function (e){
return null;
});})(s_20752,temp__5457__auto___20751))
;

s_20752.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
return s.close();
} else {
return null;
}
}));

setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
