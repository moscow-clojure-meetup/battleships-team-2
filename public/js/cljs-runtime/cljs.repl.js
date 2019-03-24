goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__12680){
var map__12681 = p__12680;
var map__12681__$1 = ((((!((map__12681 == null)))?(((((map__12681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12681):map__12681);
var m = map__12681__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12681__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12681__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__12685_12737 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12686_12738 = null;
var count__12687_12739 = (0);
var i__12688_12740 = (0);
while(true){
if((i__12688_12740 < count__12687_12739)){
var f_12741 = chunk__12686_12738.cljs$core$IIndexed$_nth$arity$2(null,i__12688_12740);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_12741], 0));


var G__12742 = seq__12685_12737;
var G__12743 = chunk__12686_12738;
var G__12744 = count__12687_12739;
var G__12745 = (i__12688_12740 + (1));
seq__12685_12737 = G__12742;
chunk__12686_12738 = G__12743;
count__12687_12739 = G__12744;
i__12688_12740 = G__12745;
continue;
} else {
var temp__5457__auto___12750 = cljs.core.seq(seq__12685_12737);
if(temp__5457__auto___12750){
var seq__12685_12751__$1 = temp__5457__auto___12750;
if(cljs.core.chunked_seq_QMARK_(seq__12685_12751__$1)){
var c__4351__auto___12754 = cljs.core.chunk_first(seq__12685_12751__$1);
var G__12755 = cljs.core.chunk_rest(seq__12685_12751__$1);
var G__12756 = c__4351__auto___12754;
var G__12757 = cljs.core.count(c__4351__auto___12754);
var G__12758 = (0);
seq__12685_12737 = G__12755;
chunk__12686_12738 = G__12756;
count__12687_12739 = G__12757;
i__12688_12740 = G__12758;
continue;
} else {
var f_12760 = cljs.core.first(seq__12685_12751__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_12760], 0));


var G__12761 = cljs.core.next(seq__12685_12751__$1);
var G__12762 = null;
var G__12763 = (0);
var G__12764 = (0);
seq__12685_12737 = G__12761;
chunk__12686_12738 = G__12762;
count__12687_12739 = G__12763;
i__12688_12740 = G__12764;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_12765 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_12765], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_12765)))?cljs.core.second(arglists_12765):arglists_12765)], 0));
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

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__12693_12766 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12694_12767 = null;
var count__12695_12768 = (0);
var i__12696_12769 = (0);
while(true){
if((i__12696_12769 < count__12695_12768)){
var vec__12697_12770 = chunk__12694_12767.cljs$core$IIndexed$_nth$arity$2(null,i__12696_12769);
var name_12771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12697_12770,(0),null);
var map__12700_12772 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12697_12770,(1),null);
var map__12700_12773__$1 = ((((!((map__12700_12772 == null)))?(((((map__12700_12772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12700_12772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12700_12772):map__12700_12772);
var doc_12774 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12700_12773__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12775 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12700_12773__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_12771], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_12775], 0));

if(cljs.core.truth_(doc_12774)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_12774], 0));
} else {
}


var G__12776 = seq__12693_12766;
var G__12777 = chunk__12694_12767;
var G__12778 = count__12695_12768;
var G__12779 = (i__12696_12769 + (1));
seq__12693_12766 = G__12776;
chunk__12694_12767 = G__12777;
count__12695_12768 = G__12778;
i__12696_12769 = G__12779;
continue;
} else {
var temp__5457__auto___12780 = cljs.core.seq(seq__12693_12766);
if(temp__5457__auto___12780){
var seq__12693_12781__$1 = temp__5457__auto___12780;
if(cljs.core.chunked_seq_QMARK_(seq__12693_12781__$1)){
var c__4351__auto___12782 = cljs.core.chunk_first(seq__12693_12781__$1);
var G__12783 = cljs.core.chunk_rest(seq__12693_12781__$1);
var G__12784 = c__4351__auto___12782;
var G__12785 = cljs.core.count(c__4351__auto___12782);
var G__12786 = (0);
seq__12693_12766 = G__12783;
chunk__12694_12767 = G__12784;
count__12695_12768 = G__12785;
i__12696_12769 = G__12786;
continue;
} else {
var vec__12714_12787 = cljs.core.first(seq__12693_12781__$1);
var name_12788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12714_12787,(0),null);
var map__12717_12789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12714_12787,(1),null);
var map__12717_12790__$1 = ((((!((map__12717_12789 == null)))?(((((map__12717_12789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12717_12789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12717_12789):map__12717_12789);
var doc_12791 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12717_12790__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12792 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12717_12790__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_12788], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_12792], 0));

if(cljs.core.truth_(doc_12791)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_12791], 0));
} else {
}


var G__12799 = cljs.core.next(seq__12693_12781__$1);
var G__12800 = null;
var G__12801 = (0);
var G__12802 = (0);
seq__12693_12766 = G__12799;
chunk__12694_12767 = G__12800;
count__12695_12768 = G__12801;
i__12696_12769 = G__12802;
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
var temp__5457__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))].join(''),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__12726 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__12727 = null;
var count__12728 = (0);
var i__12729 = (0);
while(true){
if((i__12729 < count__12728)){
var role = chunk__12727.cljs$core$IIndexed$_nth$arity$2(null,i__12729);
var temp__5457__auto___12803__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___12803__$1)){
var spec_12804 = temp__5457__auto___12803__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_12804)], 0));
} else {
}


var G__12805 = seq__12726;
var G__12806 = chunk__12727;
var G__12807 = count__12728;
var G__12808 = (i__12729 + (1));
seq__12726 = G__12805;
chunk__12727 = G__12806;
count__12728 = G__12807;
i__12729 = G__12808;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq(seq__12726);
if(temp__5457__auto____$1){
var seq__12726__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__12726__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__12726__$1);
var G__12809 = cljs.core.chunk_rest(seq__12726__$1);
var G__12810 = c__4351__auto__;
var G__12811 = cljs.core.count(c__4351__auto__);
var G__12812 = (0);
seq__12726 = G__12809;
chunk__12727 = G__12810;
count__12728 = G__12811;
i__12729 = G__12812;
continue;
} else {
var role = cljs.core.first(seq__12726__$1);
var temp__5457__auto___12817__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___12817__$2)){
var spec_12818 = temp__5457__auto___12817__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_12818)], 0));
} else {
}


var G__12821 = cljs.core.next(seq__12726__$1);
var G__12822 = null;
var G__12823 = (0);
var G__12824 = (0);
seq__12726 = G__12821;
chunk__12727 = G__12822;
count__12728 = G__12823;
i__12729 = G__12824;
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

//# sourceMappingURL=cljs.repl.js.map
