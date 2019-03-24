goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__27287){
var map__27288 = p__27287;
var map__27288__$1 = (((((!((map__27288 == null))))?(((((map__27288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27288):map__27288);
var m = map__27288__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27288__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27288__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27294_27504 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27295_27505 = null;
var count__27296_27506 = (0);
var i__27297_27507 = (0);
while(true){
if((i__27297_27507 < count__27296_27506)){
var f_27508 = chunk__27295_27505.cljs$core$IIndexed$_nth$arity$2(null,i__27297_27507);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_27508], 0));


var G__27509 = seq__27294_27504;
var G__27510 = chunk__27295_27505;
var G__27511 = count__27296_27506;
var G__27512 = (i__27297_27507 + (1));
seq__27294_27504 = G__27509;
chunk__27295_27505 = G__27510;
count__27296_27506 = G__27511;
i__27297_27507 = G__27512;
continue;
} else {
var temp__5720__auto___27513 = cljs.core.seq(seq__27294_27504);
if(temp__5720__auto___27513){
var seq__27294_27514__$1 = temp__5720__auto___27513;
if(cljs.core.chunked_seq_QMARK_(seq__27294_27514__$1)){
var c__4550__auto___27515 = cljs.core.chunk_first(seq__27294_27514__$1);
var G__27516 = cljs.core.chunk_rest(seq__27294_27514__$1);
var G__27517 = c__4550__auto___27515;
var G__27518 = cljs.core.count(c__4550__auto___27515);
var G__27519 = (0);
seq__27294_27504 = G__27516;
chunk__27295_27505 = G__27517;
count__27296_27506 = G__27518;
i__27297_27507 = G__27519;
continue;
} else {
var f_27520 = cljs.core.first(seq__27294_27514__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_27520], 0));


var G__27521 = cljs.core.next(seq__27294_27514__$1);
var G__27522 = null;
var G__27523 = (0);
var G__27524 = (0);
seq__27294_27504 = G__27521;
chunk__27295_27505 = G__27522;
count__27296_27506 = G__27523;
i__27297_27507 = G__27524;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27527 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_27527], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_27527)))?cljs.core.second(arglists_27527):arglists_27527)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27302_27528 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27303_27529 = null;
var count__27304_27530 = (0);
var i__27305_27531 = (0);
while(true){
if((i__27305_27531 < count__27304_27530)){
var vec__27320_27532 = chunk__27303_27529.cljs$core$IIndexed$_nth$arity$2(null,i__27305_27531);
var name_27533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27320_27532,(0),null);
var map__27323_27534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27320_27532,(1),null);
var map__27323_27535__$1 = (((((!((map__27323_27534 == null))))?(((((map__27323_27534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27323_27534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27323_27534):map__27323_27534);
var doc_27536 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27323_27535__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27537 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27323_27535__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_27533], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_27537], 0));

if(cljs.core.truth_(doc_27536)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_27536], 0));
} else {
}


var G__27543 = seq__27302_27528;
var G__27544 = chunk__27303_27529;
var G__27545 = count__27304_27530;
var G__27546 = (i__27305_27531 + (1));
seq__27302_27528 = G__27543;
chunk__27303_27529 = G__27544;
count__27304_27530 = G__27545;
i__27305_27531 = G__27546;
continue;
} else {
var temp__5720__auto___27547 = cljs.core.seq(seq__27302_27528);
if(temp__5720__auto___27547){
var seq__27302_27548__$1 = temp__5720__auto___27547;
if(cljs.core.chunked_seq_QMARK_(seq__27302_27548__$1)){
var c__4550__auto___27550 = cljs.core.chunk_first(seq__27302_27548__$1);
var G__27551 = cljs.core.chunk_rest(seq__27302_27548__$1);
var G__27552 = c__4550__auto___27550;
var G__27553 = cljs.core.count(c__4550__auto___27550);
var G__27554 = (0);
seq__27302_27528 = G__27551;
chunk__27303_27529 = G__27552;
count__27304_27530 = G__27553;
i__27305_27531 = G__27554;
continue;
} else {
var vec__27325_27555 = cljs.core.first(seq__27302_27548__$1);
var name_27556 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27325_27555,(0),null);
var map__27328_27557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27325_27555,(1),null);
var map__27328_27558__$1 = (((((!((map__27328_27557 == null))))?(((((map__27328_27557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27328_27557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27328_27557):map__27328_27557);
var doc_27559 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27328_27558__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27560 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27328_27558__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_27556], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_27560], 0));

if(cljs.core.truth_(doc_27559)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_27559], 0));
} else {
}


var G__27561 = cljs.core.next(seq__27302_27548__$1);
var G__27562 = null;
var G__27563 = (0);
var G__27564 = (0);
seq__27302_27528 = G__27561;
chunk__27303_27529 = G__27562;
count__27304_27530 = G__27563;
i__27305_27531 = G__27564;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__27335 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__27336 = null;
var count__27337 = (0);
var i__27338 = (0);
while(true){
if((i__27338 < count__27337)){
var role = chunk__27336.cljs$core$IIndexed$_nth$arity$2(null,i__27338);
var temp__5720__auto___27565__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___27565__$1)){
var spec_27566 = temp__5720__auto___27565__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_27566)], 0));
} else {
}


var G__27567 = seq__27335;
var G__27568 = chunk__27336;
var G__27569 = count__27337;
var G__27570 = (i__27338 + (1));
seq__27335 = G__27567;
chunk__27336 = G__27568;
count__27337 = G__27569;
i__27338 = G__27570;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__27335);
if(temp__5720__auto____$1){
var seq__27335__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__27335__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__27335__$1);
var G__27571 = cljs.core.chunk_rest(seq__27335__$1);
var G__27572 = c__4550__auto__;
var G__27573 = cljs.core.count(c__4550__auto__);
var G__27574 = (0);
seq__27335 = G__27571;
chunk__27336 = G__27572;
count__27337 = G__27573;
i__27338 = G__27574;
continue;
} else {
var role = cljs.core.first(seq__27335__$1);
var temp__5720__auto___27575__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___27575__$2)){
var spec_27576 = temp__5720__auto___27575__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_27576)], 0));
} else {
}


var G__27579 = cljs.core.next(seq__27335__$1);
var G__27580 = null;
var G__27581 = (0);
var G__27582 = (0);
seq__27335 = G__27579;
chunk__27336 = G__27580;
count__27337 = G__27581;
i__27338 = G__27582;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__27585 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__27586 = cljs.core.ex_cause(t);
via = G__27585;
t = G__27586;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__27358 = datafied_throwable;
var map__27358__$1 = (((((!((map__27358 == null))))?(((((map__27358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27358):map__27358);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27358__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27358__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27358__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__27359 = cljs.core.last(via);
var map__27359__$1 = (((((!((map__27359 == null))))?(((((map__27359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27359):map__27359);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27359__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27359__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27359__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__27360 = data;
var map__27360__$1 = (((((!((map__27360 == null))))?(((((map__27360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27360):map__27360);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27360__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27360__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27360__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__27362 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__27362__$1 = (((((!((map__27362 == null))))?(((((map__27362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27362):map__27362);
var top_data = map__27362__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27362__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__27376 = phase;
var G__27376__$1 = (((G__27376 instanceof cljs.core.Keyword))?G__27376.fqn:null);
switch (G__27376__$1) {
case "read-source":
var map__27377 = data;
var map__27377__$1 = (((((!((map__27377 == null))))?(((((map__27377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27377):map__27377);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27377__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27377__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__27382 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__27382__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27382,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__27382);
var G__27382__$2 = (cljs.core.truth_((function (){var fexpr__27385 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__27385.cljs$core$IFn$_invoke$arity$1 ? fexpr__27385.cljs$core$IFn$_invoke$arity$1(source) : fexpr__27385.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27382__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__27382__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27382__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__27382__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__27386 = top_data;
var G__27386__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27386,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__27386);
var G__27386__$2 = (cljs.core.truth_((function (){var fexpr__27387 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__27387.cljs$core$IFn$_invoke$arity$1 ? fexpr__27387.cljs$core$IFn$_invoke$arity$1(source) : fexpr__27387.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27386__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__27386__$1);
var G__27386__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27386__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__27386__$2);
var G__27386__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27386__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__27386__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27386__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__27386__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__27397 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27397,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27397,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27397,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27397,(3),null);
var G__27400 = top_data;
var G__27400__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27400,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__27400);
var G__27400__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27400__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__27400__$1);
var G__27400__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27400__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__27400__$2);
var G__27400__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27400__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__27400__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27400__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__27400__$4;
}

break;
case "execution":
var vec__27406 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27406,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27406,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27406,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27406,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__27406,source__$1,method,file,line,G__27376,G__27376__$1,map__27358,map__27358__$1,via,trace,phase,map__27359,map__27359__$1,type,message,data,map__27360,map__27360__$1,problems,fn,caller,map__27362,map__27362__$1,top_data,source){
return (function (p1__27356_SHARP_){
var or__4131__auto__ = (p1__27356_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__27410 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__27410.cljs$core$IFn$_invoke$arity$1 ? fexpr__27410.cljs$core$IFn$_invoke$arity$1(p1__27356_SHARP_) : fexpr__27410.call(null,p1__27356_SHARP_));
}
});})(vec__27406,source__$1,method,file,line,G__27376,G__27376__$1,map__27358,map__27358__$1,via,trace,phase,map__27359,map__27359__$1,type,message,data,map__27360,map__27360__$1,problems,fn,caller,map__27362,map__27362__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__27416 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__27416__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27416,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__27416);
var G__27416__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27416__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__27416__$1);
var G__27416__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27416__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__27416__$2);
var G__27416__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27416__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__27416__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27416__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__27416__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27376__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__27425){
var map__27435 = p__27425;
var map__27435__$1 = (((((!((map__27435 == null))))?(((((map__27435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27435):map__27435);
var triage_data = map__27435__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27435__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27435__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27435__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27435__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27435__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27435__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27435__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27435__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__27447 = phase;
var G__27447__$1 = (((G__27447 instanceof cljs.core.Keyword))?G__27447.fqn:null);
switch (G__27447__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__27448 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__27449 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27450 = loc;
var G__27451 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27455_27604 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27456_27605 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27457_27606 = true;
var _STAR_print_fn_STAR__temp_val__27458_27607 = ((function (_STAR_print_newline_STAR__orig_val__27455_27604,_STAR_print_fn_STAR__orig_val__27456_27605,_STAR_print_newline_STAR__temp_val__27457_27606,sb__4661__auto__,G__27448,G__27449,G__27450,G__27447,G__27447__$1,loc,class_name,simple_class,cause_type,format,map__27435,map__27435__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__27455_27604,_STAR_print_fn_STAR__orig_val__27456_27605,_STAR_print_newline_STAR__temp_val__27457_27606,sb__4661__auto__,G__27448,G__27449,G__27450,G__27447,G__27447__$1,loc,class_name,simple_class,cause_type,format,map__27435,map__27435__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27457_27606;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27458_27607;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__27455_27604,_STAR_print_fn_STAR__orig_val__27456_27605,_STAR_print_newline_STAR__temp_val__27457_27606,_STAR_print_fn_STAR__temp_val__27458_27607,sb__4661__auto__,G__27448,G__27449,G__27450,G__27447,G__27447__$1,loc,class_name,simple_class,cause_type,format,map__27435,map__27435__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__27455_27604,_STAR_print_fn_STAR__orig_val__27456_27605,_STAR_print_newline_STAR__temp_val__27457_27606,_STAR_print_fn_STAR__temp_val__27458_27607,sb__4661__auto__,G__27448,G__27449,G__27450,G__27447,G__27447__$1,loc,class_name,simple_class,cause_type,format,map__27435,map__27435__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__27420_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__27420_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__27455_27604,_STAR_print_fn_STAR__orig_val__27456_27605,_STAR_print_newline_STAR__temp_val__27457_27606,_STAR_print_fn_STAR__temp_val__27458_27607,sb__4661__auto__,G__27448,G__27449,G__27450,G__27447,G__27447__$1,loc,class_name,simple_class,cause_type,format,map__27435,map__27435__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__27455_27604,_STAR_print_fn_STAR__orig_val__27456_27605,_STAR_print_newline_STAR__temp_val__27457_27606,_STAR_print_fn_STAR__temp_val__27458_27607,sb__4661__auto__,G__27448,G__27449,G__27450,G__27447,G__27447__$1,loc,class_name,simple_class,cause_type,format,map__27435,map__27435__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27456_27605;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27455_27604;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__27448,G__27449,G__27450,G__27451) : format.call(null,G__27448,G__27449,G__27450,G__27451));

break;
case "macroexpansion":
var G__27460 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__27461 = cause_type;
var G__27462 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27463 = loc;
var G__27464 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27460,G__27461,G__27462,G__27463,G__27464) : format.call(null,G__27460,G__27461,G__27462,G__27463,G__27464));

break;
case "compile-syntax-check":
var G__27465 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__27466 = cause_type;
var G__27467 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27468 = loc;
var G__27469 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27465,G__27466,G__27467,G__27468,G__27469) : format.call(null,G__27465,G__27466,G__27467,G__27468,G__27469));

break;
case "compilation":
var G__27471 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__27472 = cause_type;
var G__27473 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27474 = loc;
var G__27475 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27471,G__27472,G__27473,G__27474,G__27475) : format.call(null,G__27471,G__27472,G__27473,G__27474,G__27475));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__27476 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__27477 = symbol;
var G__27478 = loc;
var G__27479 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27480_27620 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27481_27621 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27482_27622 = true;
var _STAR_print_fn_STAR__temp_val__27483_27623 = ((function (_STAR_print_newline_STAR__orig_val__27480_27620,_STAR_print_fn_STAR__orig_val__27481_27621,_STAR_print_newline_STAR__temp_val__27482_27622,sb__4661__auto__,G__27476,G__27477,G__27478,G__27447,G__27447__$1,loc,class_name,simple_class,cause_type,format,map__27435,map__27435__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__27480_27620,_STAR_print_fn_STAR__orig_val__27481_27621,_STAR_print_newline_STAR__temp_val__27482_27622,sb__4661__auto__,G__27476,G__27477,G__27478,G__27447,G__27447__$1,loc,class_name,simple_class,cause_type,format,map__27435,map__27435__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27482_27622;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27483_27623;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__27480_27620,_STAR_print_fn_STAR__orig_val__27481_27621,_STAR_print_newline_STAR__temp_val__27482_27622,_STAR_print_fn_STAR__temp_val__27483_27623,sb__4661__auto__,G__27476,G__27477,G__27478,G__27447,G__27447__$1,loc,class_name,simple_class,cause_type,format,map__27435,map__27435__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__27480_27620,_STAR_print_fn_STAR__orig_val__27481_27621,_STAR_print_newline_STAR__temp_val__27482_27622,_STAR_print_fn_STAR__temp_val__27483_27623,sb__4661__auto__,G__27476,G__27477,G__27478,G__27447,G__27447__$1,loc,class_name,simple_class,cause_type,format,map__27435,map__27435__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__27422_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__27422_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__27480_27620,_STAR_print_fn_STAR__orig_val__27481_27621,_STAR_print_newline_STAR__temp_val__27482_27622,_STAR_print_fn_STAR__temp_val__27483_27623,sb__4661__auto__,G__27476,G__27477,G__27478,G__27447,G__27447__$1,loc,class_name,simple_class,cause_type,format,map__27435,map__27435__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__27480_27620,_STAR_print_fn_STAR__orig_val__27481_27621,_STAR_print_newline_STAR__temp_val__27482_27622,_STAR_print_fn_STAR__temp_val__27483_27623,sb__4661__auto__,G__27476,G__27477,G__27478,G__27447,G__27447__$1,loc,class_name,simple_class,cause_type,format,map__27435,map__27435__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27481_27621;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27480_27620;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__27476,G__27477,G__27478,G__27479) : format.call(null,G__27476,G__27477,G__27478,G__27479));
} else {
var G__27489 = "Execution error%s at %s(%s).\n%s\n";
var G__27490 = cause_type;
var G__27491 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27492 = loc;
var G__27493 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27489,G__27490,G__27491,G__27492,G__27493) : format.call(null,G__27489,G__27490,G__27491,G__27492,G__27493));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27447__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
