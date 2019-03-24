goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__17724){
var vec__17727 = p__17724;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17727,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17727,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__17766 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17766,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17766,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17766,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && (((!((ab == null))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && (((!((a_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && (((!((b_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__17775 = arguments.length;
switch (G__17775) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4037__auto__ = cljs.core.count(a);
var y__4038__auto__ = cljs.core.count(b);
return ((x__4037__auto__ > y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if(((!((x == null))) && (!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4243__auto__ = (((x == null))?null:x);
var m__4244__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4244__auto__.call(null,x));
} else {
var m__4244__auto____$1 = (clojure.data.equality_partition["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__4244__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if(((!((a == null))) && (!((a.clojure$data$Diff$diff_similar$arity$2 == null))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4243__auto__ = (((a == null))?null:a);
var m__4244__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4244__auto__.call(null,a,b));
} else {
var m__4244__auto____$1 = (clojure.data.diff_similar["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__4244__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__17776_17882 = clojure.data.equality_partition;
var G__17778_17883 = "null";
var G__17779_17884 = ((function (G__17776_17882,G__17778_17883){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__17776_17882,G__17778_17883))
;
goog.object.set(G__17776_17882,G__17778_17883,G__17779_17884);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__17782_17885 = clojure.data.equality_partition;
var G__17783_17886 = "string";
var G__17784_17887 = ((function (G__17782_17885,G__17783_17886){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__17782_17885,G__17783_17886))
;
goog.object.set(G__17782_17885,G__17783_17886,G__17784_17887);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__17787_17890 = clojure.data.equality_partition;
var G__17788_17891 = "number";
var G__17789_17892 = ((function (G__17787_17890,G__17788_17891){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__17787_17890,G__17788_17891))
;
goog.object.set(G__17787_17890,G__17788_17891,G__17789_17892);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__17790_17893 = clojure.data.equality_partition;
var G__17791_17894 = "array";
var G__17792_17895 = ((function (G__17790_17893,G__17791_17894){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__17790_17893,G__17791_17894))
;
goog.object.set(G__17790_17893,G__17791_17894,G__17792_17895);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__17794_17897 = clojure.data.equality_partition;
var G__17795_17898 = "function";
var G__17796_17899 = ((function (G__17794_17897,G__17795_17898){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__17794_17897,G__17795_17898))
;
goog.object.set(G__17794_17897,G__17795_17898,G__17796_17899);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__17799_17900 = clojure.data.equality_partition;
var G__17800_17901 = "boolean";
var G__17801_17902 = ((function (G__17799_17900,G__17800_17901){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__17799_17900,G__17800_17901))
;
goog.object.set(G__17799_17900,G__17800_17901,G__17801_17902);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__17802_17904 = clojure.data.equality_partition;
var G__17803_17905 = "_";
var G__17804_17906 = ((function (G__17802_17904,G__17803_17905){
return (function (x){
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__17802_17904,G__17803_17905))
;
goog.object.set(G__17802_17904,G__17803_17905,G__17804_17906);
goog.object.set(clojure.data.Diff,"null",true);

var G__17811_17907 = clojure.data.diff_similar;
var G__17812_17908 = "null";
var G__17813_17909 = ((function (G__17811_17907,G__17812_17908){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__17811_17907,G__17812_17908))
;
goog.object.set(G__17811_17907,G__17812_17908,G__17813_17909);

goog.object.set(clojure.data.Diff,"string",true);

var G__17814_17912 = clojure.data.diff_similar;
var G__17815_17913 = "string";
var G__17816_17914 = ((function (G__17814_17912,G__17815_17913){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__17814_17912,G__17815_17913))
;
goog.object.set(G__17814_17912,G__17815_17913,G__17816_17914);

goog.object.set(clojure.data.Diff,"number",true);

var G__17819_17915 = clojure.data.diff_similar;
var G__17821_17916 = "number";
var G__17822_17917 = ((function (G__17819_17915,G__17821_17916){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__17819_17915,G__17821_17916))
;
goog.object.set(G__17819_17915,G__17821_17916,G__17822_17917);

goog.object.set(clojure.data.Diff,"array",true);

var G__17823_17918 = clojure.data.diff_similar;
var G__17824_17919 = "array";
var G__17825_17920 = ((function (G__17823_17918,G__17824_17919){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__17823_17918,G__17824_17919))
;
goog.object.set(G__17823_17918,G__17824_17919,G__17825_17920);

goog.object.set(clojure.data.Diff,"function",true);

var G__17828_17921 = clojure.data.diff_similar;
var G__17829_17922 = "function";
var G__17830_17923 = ((function (G__17828_17921,G__17829_17922){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__17828_17921,G__17829_17922))
;
goog.object.set(G__17828_17921,G__17829_17922,G__17830_17923);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__17832_17925 = clojure.data.diff_similar;
var G__17833_17926 = "boolean";
var G__17834_17927 = ((function (G__17832_17925,G__17833_17926){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__17832_17925,G__17833_17926))
;
goog.object.set(G__17832_17925,G__17833_17926,G__17834_17927);

goog.object.set(clojure.data.Diff,"_",true);

var G__17835_17930 = clojure.data.diff_similar;
var G__17836_17931 = "_";
var G__17837_17932 = ((function (G__17835_17930,G__17836_17931){
return (function (a,b){
var fexpr__17840 = (function (){var G__17842 = clojure.data.equality_partition(a);
var G__17842__$1 = (((G__17842 instanceof cljs.core.Keyword))?G__17842.fqn:null);
switch (G__17842__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17842__$1)].join('')));

}
})();
return (fexpr__17840.cljs$core$IFn$_invoke$arity$2 ? fexpr__17840.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__17840.call(null,a,b));
});})(G__17835_17930,G__17836_17931))
;
goog.object.set(G__17835_17930,G__17836_17931,G__17837_17932);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
