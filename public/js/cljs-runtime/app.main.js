goog.provide('app.main');
goog.require('cljs.core');
goog.require('app.lib');
app.main.a = (1);
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.b !== 'undefined')){
} else {
app.main.b = (2);
}
app.main.main_BANG_ = (function app$main$main_BANG_(){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[main]: loading"], 0));
});
app.main.reload_BANG_ = (function app$main$reload_BANG_(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[main] reloaded lib:",app.lib.c,app.lib.d], 0));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[main] reloaded:",app.main.a,app.main.b], 0));
});

//# sourceMappingURL=app.main.js.map
