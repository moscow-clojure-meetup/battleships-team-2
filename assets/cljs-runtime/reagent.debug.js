goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__35453__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35453 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35454__i = 0, G__35454__a = new Array(arguments.length -  0);
while (G__35454__i < G__35454__a.length) {G__35454__a[G__35454__i] = arguments[G__35454__i + 0]; ++G__35454__i;}
  args = new cljs.core.IndexedSeq(G__35454__a,0,null);
} 
return G__35453__delegate.call(this,args);};
G__35453.cljs$lang$maxFixedArity = 0;
G__35453.cljs$lang$applyTo = (function (arglist__35455){
var args = cljs.core.seq(arglist__35455);
return G__35453__delegate(args);
});
G__35453.cljs$core$IFn$_invoke$arity$variadic = G__35453__delegate;
return G__35453;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__35458__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35458 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35459__i = 0, G__35459__a = new Array(arguments.length -  0);
while (G__35459__i < G__35459__a.length) {G__35459__a[G__35459__i] = arguments[G__35459__i + 0]; ++G__35459__i;}
  args = new cljs.core.IndexedSeq(G__35459__a,0,null);
} 
return G__35458__delegate.call(this,args);};
G__35458.cljs$lang$maxFixedArity = 0;
G__35458.cljs$lang$applyTo = (function (arglist__35460){
var args = cljs.core.seq(arglist__35460);
return G__35458__delegate(args);
});
G__35458.cljs$core$IFn$_invoke$arity$variadic = G__35458__delegate;
return G__35458;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
