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
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35852 = arguments.length;
var i__4731__auto___35853 = (0);
while(true){
if((i__4731__auto___35853 < len__4730__auto___35852)){
args__4736__auto__.push((arguments[i__4731__auto___35853]));

var G__35854 = (i__4731__auto___35853 + (1));
i__4731__auto___35853 = G__35854;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35634){
var G__35635 = cljs.core.first(seq35634);
var seq35634__$1 = cljs.core.next(seq35634);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35635,seq35634__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5718__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5718__auto__)){
var s = temp__5718__auto__;
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
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__35640){
var map__35641 = p__35640;
var map__35641__$1 = (((((!((map__35641 == null))))?(((((map__35641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35641):map__35641);
var src = map__35641__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35641__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35641__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4131__auto__){
return or__4131__auto__;
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
var seq__35647 = cljs.core.seq(sources);
var chunk__35648 = null;
var count__35649 = (0);
var i__35650 = (0);
while(true){
if((i__35650 < count__35649)){
var map__35655 = chunk__35648.cljs$core$IIndexed$_nth$arity$2(null,i__35650);
var map__35655__$1 = (((((!((map__35655 == null))))?(((((map__35655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35655):map__35655);
var src = map__35655__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35655__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35655__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35655__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35655__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__35856 = seq__35647;
var G__35857 = chunk__35648;
var G__35858 = count__35649;
var G__35859 = (i__35650 + (1));
seq__35647 = G__35856;
chunk__35648 = G__35857;
count__35649 = G__35858;
i__35650 = G__35859;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35647);
if(temp__5720__auto__){
var seq__35647__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35647__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35647__$1);
var G__35860 = cljs.core.chunk_rest(seq__35647__$1);
var G__35861 = c__4550__auto__;
var G__35862 = cljs.core.count(c__4550__auto__);
var G__35863 = (0);
seq__35647 = G__35860;
chunk__35648 = G__35861;
count__35649 = G__35862;
i__35650 = G__35863;
continue;
} else {
var map__35658 = cljs.core.first(seq__35647__$1);
var map__35658__$1 = (((((!((map__35658 == null))))?(((((map__35658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35658):map__35658);
var src = map__35658__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35658__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35658__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35658__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35658__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__35867 = cljs.core.next(seq__35647__$1);
var G__35868 = null;
var G__35869 = (0);
var G__35870 = (0);
seq__35647 = G__35867;
chunk__35648 = G__35868;
count__35649 = G__35869;
i__35650 = G__35870;
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
var seq__35661 = cljs.core.seq(js_requires);
var chunk__35662 = null;
var count__35663 = (0);
var i__35664 = (0);
while(true){
if((i__35664 < count__35663)){
var js_ns = chunk__35662.cljs$core$IIndexed$_nth$arity$2(null,i__35664);
var require_str_35874 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35874);


var G__35875 = seq__35661;
var G__35876 = chunk__35662;
var G__35877 = count__35663;
var G__35878 = (i__35664 + (1));
seq__35661 = G__35875;
chunk__35662 = G__35876;
count__35663 = G__35877;
i__35664 = G__35878;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35661);
if(temp__5720__auto__){
var seq__35661__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35661__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35661__$1);
var G__35879 = cljs.core.chunk_rest(seq__35661__$1);
var G__35880 = c__4550__auto__;
var G__35881 = cljs.core.count(c__4550__auto__);
var G__35882 = (0);
seq__35661 = G__35879;
chunk__35662 = G__35880;
count__35663 = G__35881;
i__35664 = G__35882;
continue;
} else {
var js_ns = cljs.core.first(seq__35661__$1);
var require_str_35883 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35883);


var G__35884 = cljs.core.next(seq__35661__$1);
var G__35885 = null;
var G__35886 = (0);
var G__35887 = (0);
seq__35661 = G__35884;
chunk__35662 = G__35885;
count__35663 = G__35886;
i__35664 = G__35887;
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
var G__35665 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__35665) : callback.call(null,G__35665));
} else {
var G__35666 = shadow.cljs.devtools.client.env.files_url();
var G__35667 = ((function (G__35666){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__35666))
;
var G__35668 = "POST";
var G__35669 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__35670 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__35666,G__35667,G__35668,G__35669,G__35670);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__35672){
var map__35673 = p__35672;
var map__35673__$1 = (((((!((map__35673 == null))))?(((((map__35673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35673):map__35673);
var msg = map__35673__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35673__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35673__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__35675 = info;
var map__35675__$1 = (((((!((map__35675 == null))))?(((((map__35675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35675):map__35675);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35675__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35675__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__35675,map__35675__$1,sources,compiled,map__35673,map__35673__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35677(s__35678){
return (new cljs.core.LazySeq(null,((function (map__35675,map__35675__$1,sources,compiled,map__35673,map__35673__$1,msg,info,reload_info){
return (function (){
var s__35678__$1 = s__35678;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__35678__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var map__35683 = cljs.core.first(xs__6277__auto__);
var map__35683__$1 = (((((!((map__35683 == null))))?(((((map__35683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35683):map__35683);
var src = map__35683__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35683__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35683__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__35678__$1,map__35683,map__35683__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__35675,map__35675__$1,sources,compiled,map__35673,map__35673__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35677_$_iter__35679(s__35680){
return (new cljs.core.LazySeq(null,((function (s__35678__$1,map__35683,map__35683__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__35675,map__35675__$1,sources,compiled,map__35673,map__35673__$1,msg,info,reload_info){
return (function (){
var s__35680__$1 = s__35680;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__35680__$1);
if(temp__5720__auto____$1){
var s__35680__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35680__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__35680__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__35682 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__35681 = (0);
while(true){
if((i__35681 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__35681);
cljs.core.chunk_append(b__35682,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35889 = (i__35681 + (1));
i__35681 = G__35889;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35682),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35677_$_iter__35679(cljs.core.chunk_rest(s__35680__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35682),null);
}
} else {
var warning = cljs.core.first(s__35680__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35677_$_iter__35679(cljs.core.rest(s__35680__$2)));
}
} else {
return null;
}
break;
}
});})(s__35678__$1,map__35683,map__35683__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__35675,map__35675__$1,sources,compiled,map__35673,map__35673__$1,msg,info,reload_info))
,null,null));
});})(s__35678__$1,map__35683,map__35683__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__35675,map__35675__$1,sources,compiled,map__35673,map__35673__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35677(cljs.core.rest(s__35678__$1)));
} else {
var G__35890 = cljs.core.rest(s__35678__$1);
s__35678__$1 = G__35890;
continue;
}
} else {
var G__35891 = cljs.core.rest(s__35678__$1);
s__35678__$1 = G__35891;
continue;
}
} else {
return null;
}
break;
}
});})(map__35675,map__35675__$1,sources,compiled,map__35673,map__35673__$1,msg,info,reload_info))
,null,null));
});})(map__35675,map__35675__$1,sources,compiled,map__35673,map__35673__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__35687_35892 = cljs.core.seq(warnings);
var chunk__35688_35893 = null;
var count__35689_35894 = (0);
var i__35690_35895 = (0);
while(true){
if((i__35690_35895 < count__35689_35894)){
var map__35699_35896 = chunk__35688_35893.cljs$core$IIndexed$_nth$arity$2(null,i__35690_35895);
var map__35699_35897__$1 = (((((!((map__35699_35896 == null))))?(((((map__35699_35896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35699_35896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35699_35896):map__35699_35896);
var w_35898 = map__35699_35897__$1;
var msg_35899__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35699_35897__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35900 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35699_35897__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35901 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35699_35897__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35902 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35699_35897__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35902)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35900),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35901),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35899__$1)].join(''));


var G__35904 = seq__35687_35892;
var G__35905 = chunk__35688_35893;
var G__35906 = count__35689_35894;
var G__35907 = (i__35690_35895 + (1));
seq__35687_35892 = G__35904;
chunk__35688_35893 = G__35905;
count__35689_35894 = G__35906;
i__35690_35895 = G__35907;
continue;
} else {
var temp__5720__auto___35908 = cljs.core.seq(seq__35687_35892);
if(temp__5720__auto___35908){
var seq__35687_35909__$1 = temp__5720__auto___35908;
if(cljs.core.chunked_seq_QMARK_(seq__35687_35909__$1)){
var c__4550__auto___35910 = cljs.core.chunk_first(seq__35687_35909__$1);
var G__35912 = cljs.core.chunk_rest(seq__35687_35909__$1);
var G__35913 = c__4550__auto___35910;
var G__35914 = cljs.core.count(c__4550__auto___35910);
var G__35915 = (0);
seq__35687_35892 = G__35912;
chunk__35688_35893 = G__35913;
count__35689_35894 = G__35914;
i__35690_35895 = G__35915;
continue;
} else {
var map__35705_35916 = cljs.core.first(seq__35687_35909__$1);
var map__35705_35917__$1 = (((((!((map__35705_35916 == null))))?(((((map__35705_35916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35705_35916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35705_35916):map__35705_35916);
var w_35918 = map__35705_35917__$1;
var msg_35919__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35705_35917__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35920 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35705_35917__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35921 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35705_35917__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35922 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35705_35917__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35922)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35920),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35921),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35919__$1)].join(''));


var G__35923 = cljs.core.next(seq__35687_35909__$1);
var G__35924 = null;
var G__35925 = (0);
var G__35926 = (0);
seq__35687_35892 = G__35923;
chunk__35688_35893 = G__35924;
count__35689_35894 = G__35925;
i__35690_35895 = G__35926;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__35675,map__35675__$1,sources,compiled,warnings,map__35673,map__35673__$1,msg,info,reload_info){
return (function (p__35711){
var map__35712 = p__35711;
var map__35712__$1 = (((((!((map__35712 == null))))?(((((map__35712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35712):map__35712);
var src = map__35712__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35712__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35712__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__35675,map__35675__$1,sources,compiled,warnings,map__35673,map__35673__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__35675,map__35675__$1,sources,compiled,warnings,map__35673,map__35673__$1,msg,info,reload_info){
return (function (p__35715){
var map__35718 = p__35715;
var map__35718__$1 = (((((!((map__35718 == null))))?(((((map__35718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35718):map__35718);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35718__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__35675,map__35675__$1,sources,compiled,warnings,map__35673,map__35673__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__35675,map__35675__$1,sources,compiled,warnings,map__35673,map__35673__$1,msg,info,reload_info){
return (function (p__35721){
var map__35722 = p__35721;
var map__35722__$1 = (((((!((map__35722 == null))))?(((((map__35722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35722):map__35722);
var rc = map__35722__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35722__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__35675,map__35675__$1,sources,compiled,warnings,map__35673,map__35673__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__35675,map__35675__$1,sources,compiled,warnings,map__35673,map__35673__$1,msg,info,reload_info){
return (function (p1__35671_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35671_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__35675,map__35675__$1,sources,compiled,warnings,map__35673,map__35673__$1,msg,info,reload_info))
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
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new),"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__35732){
var map__35733 = p__35732;
var map__35733__$1 = (((((!((map__35733 == null))))?(((((map__35733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35733):map__35733);
var msg = map__35733__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35733__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35735 = cljs.core.seq(updates);
var chunk__35737 = null;
var count__35738 = (0);
var i__35739 = (0);
while(true){
if((i__35739 < count__35738)){
var path = chunk__35737.cljs$core$IIndexed$_nth$arity$2(null,i__35739);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35776_35927 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35779_35928 = null;
var count__35780_35929 = (0);
var i__35781_35930 = (0);
while(true){
if((i__35781_35930 < count__35780_35929)){
var node_35931 = chunk__35779_35928.cljs$core$IIndexed$_nth$arity$2(null,i__35781_35930);
var path_match_35932 = shadow.cljs.devtools.client.browser.match_paths(node_35931.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35932)){
var new_link_35933 = (function (){var G__35792 = node_35931.cloneNode(true);
G__35792.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35932),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35792;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35932], 0));

goog.dom.insertSiblingAfter(new_link_35933,node_35931);

goog.dom.removeNode(node_35931);


var G__35934 = seq__35776_35927;
var G__35935 = chunk__35779_35928;
var G__35936 = count__35780_35929;
var G__35937 = (i__35781_35930 + (1));
seq__35776_35927 = G__35934;
chunk__35779_35928 = G__35935;
count__35780_35929 = G__35936;
i__35781_35930 = G__35937;
continue;
} else {
var G__35938 = seq__35776_35927;
var G__35939 = chunk__35779_35928;
var G__35940 = count__35780_35929;
var G__35941 = (i__35781_35930 + (1));
seq__35776_35927 = G__35938;
chunk__35779_35928 = G__35939;
count__35780_35929 = G__35940;
i__35781_35930 = G__35941;
continue;
}
} else {
var temp__5720__auto___35942 = cljs.core.seq(seq__35776_35927);
if(temp__5720__auto___35942){
var seq__35776_35943__$1 = temp__5720__auto___35942;
if(cljs.core.chunked_seq_QMARK_(seq__35776_35943__$1)){
var c__4550__auto___35944 = cljs.core.chunk_first(seq__35776_35943__$1);
var G__35945 = cljs.core.chunk_rest(seq__35776_35943__$1);
var G__35946 = c__4550__auto___35944;
var G__35947 = cljs.core.count(c__4550__auto___35944);
var G__35948 = (0);
seq__35776_35927 = G__35945;
chunk__35779_35928 = G__35946;
count__35780_35929 = G__35947;
i__35781_35930 = G__35948;
continue;
} else {
var node_35949 = cljs.core.first(seq__35776_35943__$1);
var path_match_35950 = shadow.cljs.devtools.client.browser.match_paths(node_35949.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35950)){
var new_link_35951 = (function (){var G__35795 = node_35949.cloneNode(true);
G__35795.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35950),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35795;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35950], 0));

goog.dom.insertSiblingAfter(new_link_35951,node_35949);

goog.dom.removeNode(node_35949);


var G__35952 = cljs.core.next(seq__35776_35943__$1);
var G__35953 = null;
var G__35954 = (0);
var G__35955 = (0);
seq__35776_35927 = G__35952;
chunk__35779_35928 = G__35953;
count__35780_35929 = G__35954;
i__35781_35930 = G__35955;
continue;
} else {
var G__35956 = cljs.core.next(seq__35776_35943__$1);
var G__35957 = null;
var G__35958 = (0);
var G__35959 = (0);
seq__35776_35927 = G__35956;
chunk__35779_35928 = G__35957;
count__35780_35929 = G__35958;
i__35781_35930 = G__35959;
continue;
}
}
} else {
}
}
break;
}


var G__35960 = seq__35735;
var G__35961 = chunk__35737;
var G__35962 = count__35738;
var G__35963 = (i__35739 + (1));
seq__35735 = G__35960;
chunk__35737 = G__35961;
count__35738 = G__35962;
i__35739 = G__35963;
continue;
} else {
var G__35964 = seq__35735;
var G__35965 = chunk__35737;
var G__35966 = count__35738;
var G__35967 = (i__35739 + (1));
seq__35735 = G__35964;
chunk__35737 = G__35965;
count__35738 = G__35966;
i__35739 = G__35967;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35735);
if(temp__5720__auto__){
var seq__35735__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35735__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35735__$1);
var G__35968 = cljs.core.chunk_rest(seq__35735__$1);
var G__35969 = c__4550__auto__;
var G__35970 = cljs.core.count(c__4550__auto__);
var G__35971 = (0);
seq__35735 = G__35968;
chunk__35737 = G__35969;
count__35738 = G__35970;
i__35739 = G__35971;
continue;
} else {
var path = cljs.core.first(seq__35735__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35796_35972 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35799_35973 = null;
var count__35800_35974 = (0);
var i__35801_35975 = (0);
while(true){
if((i__35801_35975 < count__35800_35974)){
var node_35976 = chunk__35799_35973.cljs$core$IIndexed$_nth$arity$2(null,i__35801_35975);
var path_match_35977 = shadow.cljs.devtools.client.browser.match_paths(node_35976.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35977)){
var new_link_35978 = (function (){var G__35806 = node_35976.cloneNode(true);
G__35806.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35977),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35806;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35977], 0));

goog.dom.insertSiblingAfter(new_link_35978,node_35976);

goog.dom.removeNode(node_35976);


var G__35979 = seq__35796_35972;
var G__35980 = chunk__35799_35973;
var G__35981 = count__35800_35974;
var G__35982 = (i__35801_35975 + (1));
seq__35796_35972 = G__35979;
chunk__35799_35973 = G__35980;
count__35800_35974 = G__35981;
i__35801_35975 = G__35982;
continue;
} else {
var G__35983 = seq__35796_35972;
var G__35984 = chunk__35799_35973;
var G__35985 = count__35800_35974;
var G__35986 = (i__35801_35975 + (1));
seq__35796_35972 = G__35983;
chunk__35799_35973 = G__35984;
count__35800_35974 = G__35985;
i__35801_35975 = G__35986;
continue;
}
} else {
var temp__5720__auto___35987__$1 = cljs.core.seq(seq__35796_35972);
if(temp__5720__auto___35987__$1){
var seq__35796_35988__$1 = temp__5720__auto___35987__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35796_35988__$1)){
var c__4550__auto___35989 = cljs.core.chunk_first(seq__35796_35988__$1);
var G__35990 = cljs.core.chunk_rest(seq__35796_35988__$1);
var G__35991 = c__4550__auto___35989;
var G__35992 = cljs.core.count(c__4550__auto___35989);
var G__35993 = (0);
seq__35796_35972 = G__35990;
chunk__35799_35973 = G__35991;
count__35800_35974 = G__35992;
i__35801_35975 = G__35993;
continue;
} else {
var node_35994 = cljs.core.first(seq__35796_35988__$1);
var path_match_35995 = shadow.cljs.devtools.client.browser.match_paths(node_35994.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35995)){
var new_link_35996 = (function (){var G__35807 = node_35994.cloneNode(true);
G__35807.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35995),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35807;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35995], 0));

goog.dom.insertSiblingAfter(new_link_35996,node_35994);

goog.dom.removeNode(node_35994);


var G__35997 = cljs.core.next(seq__35796_35988__$1);
var G__35998 = null;
var G__35999 = (0);
var G__36000 = (0);
seq__35796_35972 = G__35997;
chunk__35799_35973 = G__35998;
count__35800_35974 = G__35999;
i__35801_35975 = G__36000;
continue;
} else {
var G__36001 = cljs.core.next(seq__35796_35988__$1);
var G__36002 = null;
var G__36003 = (0);
var G__36004 = (0);
seq__35796_35972 = G__36001;
chunk__35799_35973 = G__36002;
count__35800_35974 = G__36003;
i__35801_35975 = G__36004;
continue;
}
}
} else {
}
}
break;
}


var G__36005 = cljs.core.next(seq__35735__$1);
var G__36006 = null;
var G__36007 = (0);
var G__36008 = (0);
seq__35735 = G__36005;
chunk__35737 = G__36006;
count__35738 = G__36007;
i__35739 = G__36008;
continue;
} else {
var G__36011 = cljs.core.next(seq__35735__$1);
var G__36012 = null;
var G__36013 = (0);
var G__36014 = (0);
seq__35735 = G__36011;
chunk__35737 = G__36012;
count__35738 = G__36013;
i__35739 = G__36014;
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
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__35815){
var map__35816 = p__35815;
var map__35816__$1 = (((((!((map__35816 == null))))?(((((map__35816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35816):map__35816);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35816__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35816__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__35816,map__35816__$1,id,js){
return (function (){
return eval(js);
});})(map__35816,map__35816__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__35821){
var map__35822 = p__35821;
var map__35822__$1 = (((((!((map__35822 == null))))?(((((map__35822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35822):map__35822);
var msg = map__35822__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35822__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35822__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35822__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35822__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__35822,map__35822__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__35824){
var map__35825 = p__35824;
var map__35825__$1 = (((((!((map__35825 == null))))?(((((map__35825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35825):map__35825);
var src = map__35825__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35825__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__35822,map__35822__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__35822,map__35822__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__35822,map__35822__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__35827){
var map__35828 = p__35827;
var map__35828__$1 = (((((!((map__35828 == null))))?(((((map__35828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35828):map__35828);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35828__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35828__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__35828,map__35828__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__35828,map__35828__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__35833){
var map__35834 = p__35833;
var map__35834__$1 = (((((!((map__35834 == null))))?(((((map__35834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35834):map__35834);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35834__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35834__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__35838){
var map__35839 = p__35838;
var map__35839__$1 = (((((!((map__35839 == null))))?(((((map__35839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35839):map__35839);
var msg = map__35839__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35839__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__35841 = type;
var G__35841__$1 = (((G__35841 instanceof cljs.core.Keyword))?G__35841.fqn:null);
switch (G__35841__$1) {
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
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
return shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__35842 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__35843 = ((function (G__35842){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__35842))
;
var G__35844 = "POST";
var G__35845 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__35846 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__35842,G__35843,G__35844,G__35845,G__35846);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5720__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
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

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
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
}catch (e35849){var e = e35849;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5720__auto___36028 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto___36028)){
var s_36029 = temp__5720__auto___36028;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_36029.onclose = ((function (s_36029,temp__5720__auto___36028){
return (function (e){
return null;
});})(s_36029,temp__5720__auto___36028))
;

s_36029.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5720__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
