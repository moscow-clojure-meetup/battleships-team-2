goog.provide('app.main');
goog.require('cljs.core');
goog.require('app.lib');
goog.require('reagent.core');
app.main.gen_table = (function app$main$gen_table(n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,(function (){var iter__4523__auto__ = (function app$main$gen_table_$_iter__42122(s__42123){
return (new cljs.core.LazySeq(null,(function (){
var s__42123__$1 = s__42123;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__42123__$1);
if(temp__5720__auto__){
var s__42123__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42123__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__42123__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__42125 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__42124 = (0);
while(true){
if((i__42124 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__42124);
cljs.core.chunk_append(b__42125,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,(function (){var iter__4523__auto__ = ((function (i__42124,x,c__4521__auto__,size__4522__auto__,b__42125,s__42123__$2,temp__5720__auto__){
return (function app$main$gen_table_$_iter__42122_$_iter__42126(s__42127){
return (new cljs.core.LazySeq(null,((function (i__42124,x,c__4521__auto__,size__4522__auto__,b__42125,s__42123__$2,temp__5720__auto__){
return (function (){
var s__42127__$1 = s__42127;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__42127__$1);
if(temp__5720__auto____$1){
var s__42127__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__42127__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__42127__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__42129 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__42128 = (0);
while(true){
if((i__42128 < size__4522__auto____$1)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto____$1,i__42128);
cljs.core.chunk_append(b__42129,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"cell"], null));

var G__42144 = (i__42128 + (1));
i__42128 = G__42144;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42129),app$main$gen_table_$_iter__42122_$_iter__42126(cljs.core.chunk_rest(s__42127__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42129),null);
}
} else {
var y = cljs.core.first(s__42127__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"cell"], null),app$main$gen_table_$_iter__42122_$_iter__42126(cljs.core.rest(s__42127__$2)));
}
} else {
return null;
}
break;
}
});})(i__42124,x,c__4521__auto__,size__4522__auto__,b__42125,s__42123__$2,temp__5720__auto__))
,null,null));
});})(i__42124,x,c__4521__auto__,size__4522__auto__,b__42125,s__42123__$2,temp__5720__auto__))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
})()));

var G__42145 = (i__42124 + (1));
i__42124 = G__42145;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42125),app$main$gen_table_$_iter__42122(cljs.core.chunk_rest(s__42123__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42125),null);
}
} else {
var x = cljs.core.first(s__42123__$2);
return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,(function (){var iter__4523__auto__ = ((function (x,s__42123__$2,temp__5720__auto__){
return (function app$main$gen_table_$_iter__42122_$_iter__42130(s__42131){
return (new cljs.core.LazySeq(null,((function (x,s__42123__$2,temp__5720__auto__){
return (function (){
var s__42131__$1 = s__42131;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__42131__$1);
if(temp__5720__auto____$1){
var s__42131__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__42131__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__42131__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__42133 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__42132 = (0);
while(true){
if((i__42132 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__42132);
cljs.core.chunk_append(b__42133,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"cell"], null));

var G__42146 = (i__42132 + (1));
i__42132 = G__42146;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42133),app$main$gen_table_$_iter__42122_$_iter__42130(cljs.core.chunk_rest(s__42131__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42133),null);
}
} else {
var y = cljs.core.first(s__42131__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"cell"], null),app$main$gen_table_$_iter__42122_$_iter__42130(cljs.core.rest(s__42131__$2)));
}
} else {
return null;
}
break;
}
});})(x,s__42123__$2,temp__5720__auto__))
,null,null));
});})(x,s__42123__$2,temp__5720__auto__))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
})()),app$main$gen_table_$_iter__42122(cljs.core.rest(s__42123__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
})());
});
app.main.ai_shot = (function app$main$ai_shot(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int((8)),cljs.core.rand_int((8))], null);
});
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.state !== 'undefined')){
} else {
app.main.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"table","table",-564943036),app.main.gen_table((8)),new cljs.core.Keyword(null,"counter","counter",804008177),(0),new cljs.core.Keyword(null,"my-ships","my-ships",-1905567144),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.ai_shot()], null),new cljs.core.Keyword(null,"comp-ships","comp-ships",22548218),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.ai_shot()], null)], null));
}
var vec__42134_42147 = new cljs.core.Keyword(null,"my-ships","my-ships",-1905567144).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.state));
var vec__42137_42148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42134_42147,(0),null);
var x_42149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42137_42148,(0),null);
var y_42150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42137_42148,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.main.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),x_42149,y_42150,new cljs.core.Keyword(null,"class","class",-2030961996)], null),"ship");
app.main.shot = (function app$main$shot(p__42140){
var vec__42141 = p__42140;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42141,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42141,(1),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.main.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),x,y,new cljs.core.Keyword(null,"class","class",-2030961996)], null),"beaten");
});
app.main.on_cell_click = (function app$main$on_cell_click(x,y){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.main.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),x,y,new cljs.core.Keyword(null,"class","class",-2030961996)], null),"beaten");

var coord = app.main.ai_shot();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(coord,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"my-ships","my-ships",-1905567144).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.state)),(0)))){
alert("you lose");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.main.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),x,y,new cljs.core.Keyword(null,"class","class",-2030961996)], null),"player-died");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"comp-ships","comp-ships",22548218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.state)),(0)))){
alert("you win");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.main.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),x,y,new cljs.core.Keyword(null,"class","class",-2030961996)], null),"enemy-died");
} else {
return app.main.shot(coord);
}
}
});
app.main.render_table = (function app$main$render_table(){
var table = new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.state));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid"], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (table){
return (function (x,row){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"row",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (table){
return (function (y,cell){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (table){
return (function (){
return app.main.on_cell_click(x,y);
});})(table))
], null)], null);
});})(table))
,row)], null);
});})(table))
,table)], null);
});
app.main.main_BANG_ = (function app$main$main_BANG_(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.render_table], null),document.getElementById("app"));
});

//# sourceMappingURL=app.main.js.map
