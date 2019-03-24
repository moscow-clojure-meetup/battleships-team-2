goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__16544 = arguments.length;
switch (G__16544) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16545 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16545 = (function (f,blockable,meta16546){
this.f = f;
this.blockable = blockable;
this.meta16546 = meta16546;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16545.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16547,meta16546__$1){
var self__ = this;
var _16547__$1 = this;
return (new cljs.core.async.t_cljs$core$async16545(self__.f,self__.blockable,meta16546__$1));
});

cljs.core.async.t_cljs$core$async16545.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16547){
var self__ = this;
var _16547__$1 = this;
return self__.meta16546;
});

cljs.core.async.t_cljs$core$async16545.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16545.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16545.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async16545.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async16545.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta16546","meta16546",-919829657,null)], null);
});

cljs.core.async.t_cljs$core$async16545.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16545.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16545";

cljs.core.async.t_cljs$core$async16545.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async16545");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16545.
 */
cljs.core.async.__GT_t_cljs$core$async16545 = (function cljs$core$async$__GT_t_cljs$core$async16545(f__$1,blockable__$1,meta16546){
return (new cljs.core.async.t_cljs$core$async16545(f__$1,blockable__$1,meta16546));
});

}

return (new cljs.core.async.t_cljs$core$async16545(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__16550 = arguments.length;
switch (G__16550) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__16553 = arguments.length;
switch (G__16553) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__16555 = arguments.length;
switch (G__16555) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_18543 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18543) : fn1.call(null,val_18543));
} else {
cljs.core.async.impl.dispatch.run(((function (val_18543,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18543) : fn1.call(null,val_18543));
});})(val_18543,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__16557 = arguments.length;
switch (G__16557) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5455__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4408__auto___18558 = n;
var x_18559 = (0);
while(true){
if((x_18559 < n__4408__auto___18558)){
(a[x_18559] = (0));

var G__18560 = (x_18559 + (1));
x_18559 = G__18560;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__18561 = (i + (1));
i = G__18561;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16558 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16558 = (function (flag,meta16559){
this.flag = flag;
this.meta16559 = meta16559;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16560,meta16559__$1){
var self__ = this;
var _16560__$1 = this;
return (new cljs.core.async.t_cljs$core$async16558(self__.flag,meta16559__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async16558.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16560){
var self__ = this;
var _16560__$1 = this;
return self__.meta16559;
});})(flag))
;

cljs.core.async.t_cljs$core$async16558.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16558.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async16558.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16558.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16558.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta16559","meta16559",-586435446,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async16558.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16558.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16558";

cljs.core.async.t_cljs$core$async16558.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async16558");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16558.
 */
cljs.core.async.__GT_t_cljs$core$async16558 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async16558(flag__$1,meta16559){
return (new cljs.core.async.t_cljs$core$async16558(flag__$1,meta16559));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async16558(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16561 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16561 = (function (flag,cb,meta16562){
this.flag = flag;
this.cb = cb;
this.meta16562 = meta16562;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16563,meta16562__$1){
var self__ = this;
var _16563__$1 = this;
return (new cljs.core.async.t_cljs$core$async16561(self__.flag,self__.cb,meta16562__$1));
});

cljs.core.async.t_cljs$core$async16561.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16563){
var self__ = this;
var _16563__$1 = this;
return self__.meta16562;
});

cljs.core.async.t_cljs$core$async16561.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16561.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async16561.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16561.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async16561.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta16562","meta16562",1212587126,null)], null);
});

cljs.core.async.t_cljs$core$async16561.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16561.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16561";

cljs.core.async.t_cljs$core$async16561.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async16561");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16561.
 */
cljs.core.async.__GT_t_cljs$core$async16561 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async16561(flag__$1,cb__$1,meta16562){
return (new cljs.core.async.t_cljs$core$async16561(flag__$1,cb__$1,meta16562));
});

}

return (new cljs.core.async.t_cljs$core$async16561(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16565_SHARP_){
var G__16567 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16565_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16567) : fret.call(null,G__16567));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16566_SHARP_){
var G__16568 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16566_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16568) : fret.call(null,G__16568));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__18574 = (i + (1));
i = G__18574;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___18578 = arguments.length;
var i__4532__auto___18579 = (0);
while(true){
if((i__4532__auto___18579 < len__4531__auto___18578)){
args__4534__auto__.push((arguments[i__4532__auto___18579]));

var G__18580 = (i__4532__auto___18579 + (1));
i__4532__auto___18579 = G__18580;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__16571){
var map__16572 = p__16571;
var map__16572__$1 = ((((!((map__16572 == null)))?(((((map__16572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16572):map__16572);
var opts = map__16572__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq16569){
var G__16570 = cljs.core.first(seq16569);
var seq16569__$1 = cljs.core.next(seq16569);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16570,seq16569__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__16575 = arguments.length;
switch (G__16575) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__16465__auto___18584 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16465__auto___18584){
return (function (){
var f__16466__auto__ = (function (){var switch__16281__auto__ = ((function (c__16465__auto___18584){
return (function (state_16599){
var state_val_16600 = (state_16599[(1)]);
if((state_val_16600 === (7))){
var inst_16595 = (state_16599[(2)]);
var state_16599__$1 = state_16599;
var statearr_16606_18591 = state_16599__$1;
(statearr_16606_18591[(2)] = inst_16595);

(statearr_16606_18591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16600 === (1))){
var state_16599__$1 = state_16599;
var statearr_16608_18592 = state_16599__$1;
(statearr_16608_18592[(2)] = null);

(statearr_16608_18592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16600 === (4))){
var inst_16578 = (state_16599[(7)]);
var inst_16578__$1 = (state_16599[(2)]);
var inst_16579 = (inst_16578__$1 == null);
var state_16599__$1 = (function (){var statearr_16611 = state_16599;
(statearr_16611[(7)] = inst_16578__$1);

return statearr_16611;
})();
if(cljs.core.truth_(inst_16579)){
var statearr_16612_18594 = state_16599__$1;
(statearr_16612_18594[(1)] = (5));

} else {
var statearr_16613_18595 = state_16599__$1;
(statearr_16613_18595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16600 === (13))){
var state_16599__$1 = state_16599;
var statearr_16614_18596 = state_16599__$1;
(statearr_16614_18596[(2)] = null);

(statearr_16614_18596[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16600 === (6))){
var inst_16578 = (state_16599[(7)]);
var state_16599__$1 = state_16599;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16599__$1,(11),to,inst_16578);
} else {
if((state_val_16600 === (3))){
var inst_16597 = (state_16599[(2)]);
var state_16599__$1 = state_16599;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16599__$1,inst_16597);
} else {
if((state_val_16600 === (12))){
var state_16599__$1 = state_16599;
var statearr_16615_18607 = state_16599__$1;
(statearr_16615_18607[(2)] = null);

(statearr_16615_18607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16600 === (2))){
var state_16599__$1 = state_16599;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16599__$1,(4),from);
} else {
if((state_val_16600 === (11))){
var inst_16588 = (state_16599[(2)]);
var state_16599__$1 = state_16599;
if(cljs.core.truth_(inst_16588)){
var statearr_16616_18612 = state_16599__$1;
(statearr_16616_18612[(1)] = (12));

} else {
var statearr_16617_18613 = state_16599__$1;
(statearr_16617_18613[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16600 === (9))){
var state_16599__$1 = state_16599;
var statearr_16618_18617 = state_16599__$1;
(statearr_16618_18617[(2)] = null);

(statearr_16618_18617[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16600 === (5))){
var state_16599__$1 = state_16599;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16619_18621 = state_16599__$1;
(statearr_16619_18621[(1)] = (8));

} else {
var statearr_16620_18622 = state_16599__$1;
(statearr_16620_18622[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16600 === (14))){
var inst_16593 = (state_16599[(2)]);
var state_16599__$1 = state_16599;
var statearr_16621_18626 = state_16599__$1;
(statearr_16621_18626[(2)] = inst_16593);

(statearr_16621_18626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16600 === (10))){
var inst_16585 = (state_16599[(2)]);
var state_16599__$1 = state_16599;
var statearr_16622_18628 = state_16599__$1;
(statearr_16622_18628[(2)] = inst_16585);

(statearr_16622_18628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16600 === (8))){
var inst_16582 = cljs.core.async.close_BANG_(to);
var state_16599__$1 = state_16599;
var statearr_16625_18630 = state_16599__$1;
(statearr_16625_18630[(2)] = inst_16582);

(statearr_16625_18630[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16465__auto___18584))
;
return ((function (switch__16281__auto__,c__16465__auto___18584){
return (function() {
var cljs$core$async$state_machine__16282__auto__ = null;
var cljs$core$async$state_machine__16282__auto____0 = (function (){
var statearr_16626 = [null,null,null,null,null,null,null,null];
(statearr_16626[(0)] = cljs$core$async$state_machine__16282__auto__);

(statearr_16626[(1)] = (1));

return statearr_16626;
});
var cljs$core$async$state_machine__16282__auto____1 = (function (state_16599){
while(true){
var ret_value__16283__auto__ = (function (){try{while(true){
var result__16284__auto__ = switch__16281__auto__(state_16599);
if(cljs.core.keyword_identical_QMARK_(result__16284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16284__auto__;
}
break;
}
}catch (e16627){if((e16627 instanceof Object)){
var ex__16285__auto__ = e16627;
var statearr_16628_18632 = state_16599;
(statearr_16628_18632[(5)] = ex__16285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16627;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18633 = state_16599;
state_16599 = G__18633;
continue;
} else {
return ret_value__16283__auto__;
}
break;
}
});
cljs$core$async$state_machine__16282__auto__ = function(state_16599){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16282__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16282__auto____1.call(this,state_16599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16282__auto____0;
cljs$core$async$state_machine__16282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16282__auto____1;
return cljs$core$async$state_machine__16282__auto__;
})()
;})(switch__16281__auto__,c__16465__auto___18584))
})();
var state__16467__auto__ = (function (){var statearr_16629 = (f__16466__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16466__auto__.cljs$core$IFn$_invoke$arity$0() : f__16466__auto__.call(null));
(statearr_16629[(6)] = c__16465__auto___18584);

return statearr_16629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16467__auto__);
});})(c__16465__auto___18584))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__16632){
var vec__16634 = p__16632;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16634,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16634,(1),null);
var job = vec__16634;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__16465__auto___18644 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16465__auto___18644,res,vec__16634,v,p,job,jobs,results){
return (function (){
var f__16466__auto__ = (function (){var switch__16281__auto__ = ((function (c__16465__auto___18644,res,vec__16634,v,p,job,jobs,results){
return (function (state_16645){
var state_val_16646 = (state_16645[(1)]);
if((state_val_16646 === (1))){
var state_16645__$1 = state_16645;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16645__$1,(2),res,v);
} else {
if((state_val_16646 === (2))){
var inst_16642 = (state_16645[(2)]);
var inst_16643 = cljs.core.async.close_BANG_(res);
var state_16645__$1 = (function (){var statearr_16651 = state_16645;
(statearr_16651[(7)] = inst_16642);

return statearr_16651;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16645__$1,inst_16643);
} else {
return null;
}
}
});})(c__16465__auto___18644,res,vec__16634,v,p,job,jobs,results))
;
return ((function (switch__16281__auto__,c__16465__auto___18644,res,vec__16634,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16282__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16282__auto____0 = (function (){
var statearr_16654 = [null,null,null,null,null,null,null,null];
(statearr_16654[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16282__auto__);

(statearr_16654[(1)] = (1));

return statearr_16654;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16282__auto____1 = (function (state_16645){
while(true){
var ret_value__16283__auto__ = (function (){try{while(true){
var result__16284__auto__ = switch__16281__auto__(state_16645);
if(cljs.core.keyword_identical_QMARK_(result__16284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16284__auto__;
}
break;
}
}catch (e16655){if((e16655 instanceof Object)){
var ex__16285__auto__ = e16655;
var statearr_16656_18647 = state_16645;
(statearr_16656_18647[(5)] = ex__16285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16655;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18649 = state_16645;
state_16645 = G__18649;
continue;
} else {
return ret_value__16283__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16282__auto__ = function(state_16645){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16282__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16282__auto____1.call(this,state_16645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16282__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16282__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16282__auto__;
})()
;})(switch__16281__auto__,c__16465__auto___18644,res,vec__16634,v,p,job,jobs,results))
})();
var state__16467__auto__ = (function (){var statearr_16657 = (f__16466__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16466__auto__.cljs$core$IFn$_invoke$arity$0() : f__16466__auto__.call(null));
(statearr_16657[(6)] = c__16465__auto___18644);

return statearr_16657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16467__auto__);
});})(c__16465__auto___18644,res,vec__16634,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__16659){
var vec__16660 = p__16659;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16660,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16660,(1),null);
var job = vec__16660;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4408__auto___18651 = n;
var __18656 = (0);
while(true){
if((__18656 < n__4408__auto___18651)){
var G__16667_18657 = type;
var G__16667_18658__$1 = (((G__16667_18657 instanceof cljs.core.Keyword))?G__16667_18657.fqn:null);
switch (G__16667_18658__$1) {
case "compute":
var c__16465__auto___18660 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18656,c__16465__auto___18660,G__16667_18657,G__16667_18658__$1,n__4408__auto___18651,jobs,results,process,async){
return (function (){
var f__16466__auto__ = (function (){var switch__16281__auto__ = ((function (__18656,c__16465__auto___18660,G__16667_18657,G__16667_18658__$1,n__4408__auto___18651,jobs,results,process,async){
return (function (state_16680){
var state_val_16681 = (state_16680[(1)]);
if((state_val_16681 === (1))){
var state_16680__$1 = state_16680;
var statearr_16682_18666 = state_16680__$1;
(statearr_16682_18666[(2)] = null);

(statearr_16682_18666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16681 === (2))){
var state_16680__$1 = state_16680;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16680__$1,(4),jobs);
} else {
if((state_val_16681 === (3))){
var inst_16678 = (state_16680[(2)]);
var state_16680__$1 = state_16680;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16680__$1,inst_16678);
} else {
if((state_val_16681 === (4))){
var inst_16670 = (state_16680[(2)]);
var inst_16671 = process(inst_16670);
var state_16680__$1 = state_16680;
if(cljs.core.truth_(inst_16671)){
var statearr_16683_18667 = state_16680__$1;
(statearr_16683_18667[(1)] = (5));

} else {
var statearr_16684_18668 = state_16680__$1;
(statearr_16684_18668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16681 === (5))){
var state_16680__$1 = state_16680;
var statearr_16685_18669 = state_16680__$1;
(statearr_16685_18669[(2)] = null);

(statearr_16685_18669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16681 === (6))){
var state_16680__$1 = state_16680;
var statearr_16686_18670 = state_16680__$1;
(statearr_16686_18670[(2)] = null);

(statearr_16686_18670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16681 === (7))){
var inst_16676 = (state_16680[(2)]);
var state_16680__$1 = state_16680;
var statearr_16687_18671 = state_16680__$1;
(statearr_16687_18671[(2)] = inst_16676);

(statearr_16687_18671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18656,c__16465__auto___18660,G__16667_18657,G__16667_18658__$1,n__4408__auto___18651,jobs,results,process,async))
;
return ((function (__18656,switch__16281__auto__,c__16465__auto___18660,G__16667_18657,G__16667_18658__$1,n__4408__auto___18651,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16282__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16282__auto____0 = (function (){
var statearr_16688 = [null,null,null,null,null,null,null];
(statearr_16688[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16282__auto__);

(statearr_16688[(1)] = (1));

return statearr_16688;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16282__auto____1 = (function (state_16680){
while(true){
var ret_value__16283__auto__ = (function (){try{while(true){
var result__16284__auto__ = switch__16281__auto__(state_16680);
if(cljs.core.keyword_identical_QMARK_(result__16284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16284__auto__;
}
break;
}
}catch (e16689){if((e16689 instanceof Object)){
var ex__16285__auto__ = e16689;
var statearr_16690_18672 = state_16680;
(statearr_16690_18672[(5)] = ex__16285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16680);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16689;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18673 = state_16680;
state_16680 = G__18673;
continue;
} else {
return ret_value__16283__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16282__auto__ = function(state_16680){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16282__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16282__auto____1.call(this,state_16680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16282__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16282__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16282__auto__;
})()
;})(__18656,switch__16281__auto__,c__16465__auto___18660,G__16667_18657,G__16667_18658__$1,n__4408__auto___18651,jobs,results,process,async))
})();
var state__16467__auto__ = (function (){var statearr_16691 = (f__16466__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16466__auto__.cljs$core$IFn$_invoke$arity$0() : f__16466__auto__.call(null));
(statearr_16691[(6)] = c__16465__auto___18660);

return statearr_16691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16467__auto__);
});})(__18656,c__16465__auto___18660,G__16667_18657,G__16667_18658__$1,n__4408__auto___18651,jobs,results,process,async))
);


break;
case "async":
var c__16465__auto___18674 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18656,c__16465__auto___18674,G__16667_18657,G__16667_18658__$1,n__4408__auto___18651,jobs,results,process,async){
return (function (){
var f__16466__auto__ = (function (){var switch__16281__auto__ = ((function (__18656,c__16465__auto___18674,G__16667_18657,G__16667_18658__$1,n__4408__auto___18651,jobs,results,process,async){
return (function (state_16704){
var state_val_16705 = (state_16704[(1)]);
if((state_val_16705 === (1))){
var state_16704__$1 = state_16704;
var statearr_16706_18677 = state_16704__$1;
(statearr_16706_18677[(2)] = null);

(statearr_16706_18677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16705 === (2))){
var state_16704__$1 = state_16704;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16704__$1,(4),jobs);
} else {
if((state_val_16705 === (3))){
var inst_16702 = (state_16704[(2)]);
var state_16704__$1 = state_16704;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16704__$1,inst_16702);
} else {
if((state_val_16705 === (4))){
var inst_16694 = (state_16704[(2)]);
var inst_16695 = async(inst_16694);
var state_16704__$1 = state_16704;
if(cljs.core.truth_(inst_16695)){
var statearr_16708_18682 = state_16704__$1;
(statearr_16708_18682[(1)] = (5));

} else {
var statearr_16710_18684 = state_16704__$1;
(statearr_16710_18684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16705 === (5))){
var state_16704__$1 = state_16704;
var statearr_16711_18685 = state_16704__$1;
(statearr_16711_18685[(2)] = null);

(statearr_16711_18685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16705 === (6))){
var state_16704__$1 = state_16704;
var statearr_16712_18686 = state_16704__$1;
(statearr_16712_18686[(2)] = null);

(statearr_16712_18686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16705 === (7))){
var inst_16700 = (state_16704[(2)]);
var state_16704__$1 = state_16704;
var statearr_16713_18687 = state_16704__$1;
(statearr_16713_18687[(2)] = inst_16700);

(statearr_16713_18687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18656,c__16465__auto___18674,G__16667_18657,G__16667_18658__$1,n__4408__auto___18651,jobs,results,process,async))
;
return ((function (__18656,switch__16281__auto__,c__16465__auto___18674,G__16667_18657,G__16667_18658__$1,n__4408__auto___18651,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16282__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16282__auto____0 = (function (){
var statearr_16714 = [null,null,null,null,null,null,null];
(statearr_16714[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16282__auto__);

(statearr_16714[(1)] = (1));

return statearr_16714;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16282__auto____1 = (function (state_16704){
while(true){
var ret_value__16283__auto__ = (function (){try{while(true){
var result__16284__auto__ = switch__16281__auto__(state_16704);
if(cljs.core.keyword_identical_QMARK_(result__16284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16284__auto__;
}
break;
}
}catch (e16715){if((e16715 instanceof Object)){
var ex__16285__auto__ = e16715;
var statearr_16716_18696 = state_16704;
(statearr_16716_18696[(5)] = ex__16285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16715;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18697 = state_16704;
state_16704 = G__18697;
continue;
} else {
return ret_value__16283__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16282__auto__ = function(state_16704){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16282__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16282__auto____1.call(this,state_16704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16282__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16282__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16282__auto__;
})()
;})(__18656,switch__16281__auto__,c__16465__auto___18674,G__16667_18657,G__16667_18658__$1,n__4408__auto___18651,jobs,results,process,async))
})();
var state__16467__auto__ = (function (){var statearr_16717 = (f__16466__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16466__auto__.cljs$core$IFn$_invoke$arity$0() : f__16466__auto__.call(null));
(statearr_16717[(6)] = c__16465__auto___18674);

return statearr_16717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16467__auto__);
});})(__18656,c__16465__auto___18674,G__16667_18657,G__16667_18658__$1,n__4408__auto___18651,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16667_18658__$1)].join('')));

}

var G__18699 = (__18656 + (1));
__18656 = G__18699;
continue;
} else {
}
break;
}

var c__16465__auto___18700 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16465__auto___18700,jobs,results,process,async){
return (function (){
var f__16466__auto__ = (function (){var switch__16281__auto__ = ((function (c__16465__auto___18700,jobs,results,process,async){
return (function (state_16740){
var state_val_16741 = (state_16740[(1)]);
if((state_val_16741 === (1))){
var state_16740__$1 = state_16740;
var statearr_16742_18706 = state_16740__$1;
(statearr_16742_18706[(2)] = null);

(statearr_16742_18706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16741 === (2))){
var state_16740__$1 = state_16740;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16740__$1,(4),from);
} else {
if((state_val_16741 === (3))){
var inst_16738 = (state_16740[(2)]);
var state_16740__$1 = state_16740;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16740__$1,inst_16738);
} else {
if((state_val_16741 === (4))){
var inst_16720 = (state_16740[(7)]);
var inst_16720__$1 = (state_16740[(2)]);
var inst_16722 = (inst_16720__$1 == null);
var state_16740__$1 = (function (){var statearr_16745 = state_16740;
(statearr_16745[(7)] = inst_16720__$1);

return statearr_16745;
})();
if(cljs.core.truth_(inst_16722)){
var statearr_16746_18707 = state_16740__$1;
(statearr_16746_18707[(1)] = (5));

} else {
var statearr_16751_18708 = state_16740__$1;
(statearr_16751_18708[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16741 === (5))){
var inst_16724 = cljs.core.async.close_BANG_(jobs);
var state_16740__$1 = state_16740;
var statearr_16753_18709 = state_16740__$1;
(statearr_16753_18709[(2)] = inst_16724);

(statearr_16753_18709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16741 === (6))){
var inst_16726 = (state_16740[(8)]);
var inst_16720 = (state_16740[(7)]);
var inst_16726__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_16727 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16728 = [inst_16720,inst_16726__$1];
var inst_16729 = (new cljs.core.PersistentVector(null,2,(5),inst_16727,inst_16728,null));
var state_16740__$1 = (function (){var statearr_16759 = state_16740;
(statearr_16759[(8)] = inst_16726__$1);

return statearr_16759;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16740__$1,(8),jobs,inst_16729);
} else {
if((state_val_16741 === (7))){
var inst_16736 = (state_16740[(2)]);
var state_16740__$1 = state_16740;
var statearr_16767_18710 = state_16740__$1;
(statearr_16767_18710[(2)] = inst_16736);

(statearr_16767_18710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16741 === (8))){
var inst_16726 = (state_16740[(8)]);
var inst_16731 = (state_16740[(2)]);
var state_16740__$1 = (function (){var statearr_16768 = state_16740;
(statearr_16768[(9)] = inst_16731);

return statearr_16768;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16740__$1,(9),results,inst_16726);
} else {
if((state_val_16741 === (9))){
var inst_16733 = (state_16740[(2)]);
var state_16740__$1 = (function (){var statearr_16773 = state_16740;
(statearr_16773[(10)] = inst_16733);

return statearr_16773;
})();
var statearr_16774_18711 = state_16740__$1;
(statearr_16774_18711[(2)] = null);

(statearr_16774_18711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__16465__auto___18700,jobs,results,process,async))
;
return ((function (switch__16281__auto__,c__16465__auto___18700,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16282__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16282__auto____0 = (function (){
var statearr_16775 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16775[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16282__auto__);

(statearr_16775[(1)] = (1));

return statearr_16775;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16282__auto____1 = (function (state_16740){
while(true){
var ret_value__16283__auto__ = (function (){try{while(true){
var result__16284__auto__ = switch__16281__auto__(state_16740);
if(cljs.core.keyword_identical_QMARK_(result__16284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16284__auto__;
}
break;
}
}catch (e16776){if((e16776 instanceof Object)){
var ex__16285__auto__ = e16776;
var statearr_16777_18712 = state_16740;
(statearr_16777_18712[(5)] = ex__16285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16776;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18713 = state_16740;
state_16740 = G__18713;
continue;
} else {
return ret_value__16283__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16282__auto__ = function(state_16740){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16282__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16282__auto____1.call(this,state_16740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16282__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16282__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16282__auto__;
})()
;})(switch__16281__auto__,c__16465__auto___18700,jobs,results,process,async))
})();
var state__16467__auto__ = (function (){var statearr_16778 = (f__16466__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16466__auto__.cljs$core$IFn$_invoke$arity$0() : f__16466__auto__.call(null));
(statearr_16778[(6)] = c__16465__auto___18700);

return statearr_16778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16467__auto__);
});})(c__16465__auto___18700,jobs,results,process,async))
);


var c__16465__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16465__auto__,jobs,results,process,async){
return (function (){
var f__16466__auto__ = (function (){var switch__16281__auto__ = ((function (c__16465__auto__,jobs,results,process,async){
return (function (state_16816){
var state_val_16817 = (state_16816[(1)]);
if((state_val_16817 === (7))){
var inst_16812 = (state_16816[(2)]);
var state_16816__$1 = state_16816;
var statearr_16818_18715 = state_16816__$1;
(statearr_16818_18715[(2)] = inst_16812);

(statearr_16818_18715[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (20))){
var state_16816__$1 = state_16816;
var statearr_16819_18716 = state_16816__$1;
(statearr_16819_18716[(2)] = null);

(statearr_16819_18716[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (1))){
var state_16816__$1 = state_16816;
var statearr_16820_18717 = state_16816__$1;
(statearr_16820_18717[(2)] = null);

(statearr_16820_18717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (4))){
var inst_16781 = (state_16816[(7)]);
var inst_16781__$1 = (state_16816[(2)]);
var inst_16782 = (inst_16781__$1 == null);
var state_16816__$1 = (function (){var statearr_16821 = state_16816;
(statearr_16821[(7)] = inst_16781__$1);

return statearr_16821;
})();
if(cljs.core.truth_(inst_16782)){
var statearr_16822_18718 = state_16816__$1;
(statearr_16822_18718[(1)] = (5));

} else {
var statearr_16823_18719 = state_16816__$1;
(statearr_16823_18719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (15))){
var inst_16794 = (state_16816[(8)]);
var state_16816__$1 = state_16816;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16816__$1,(18),to,inst_16794);
} else {
if((state_val_16817 === (21))){
var inst_16807 = (state_16816[(2)]);
var state_16816__$1 = state_16816;
var statearr_16824_18720 = state_16816__$1;
(statearr_16824_18720[(2)] = inst_16807);

(statearr_16824_18720[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (13))){
var inst_16809 = (state_16816[(2)]);
var state_16816__$1 = (function (){var statearr_16825 = state_16816;
(statearr_16825[(9)] = inst_16809);

return statearr_16825;
})();
var statearr_16826_18725 = state_16816__$1;
(statearr_16826_18725[(2)] = null);

(statearr_16826_18725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (6))){
var inst_16781 = (state_16816[(7)]);
var state_16816__$1 = state_16816;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16816__$1,(11),inst_16781);
} else {
if((state_val_16817 === (17))){
var inst_16802 = (state_16816[(2)]);
var state_16816__$1 = state_16816;
if(cljs.core.truth_(inst_16802)){
var statearr_16827_18729 = state_16816__$1;
(statearr_16827_18729[(1)] = (19));

} else {
var statearr_16828_18730 = state_16816__$1;
(statearr_16828_18730[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (3))){
var inst_16814 = (state_16816[(2)]);
var state_16816__$1 = state_16816;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16816__$1,inst_16814);
} else {
if((state_val_16817 === (12))){
var inst_16791 = (state_16816[(10)]);
var state_16816__$1 = state_16816;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16816__$1,(14),inst_16791);
} else {
if((state_val_16817 === (2))){
var state_16816__$1 = state_16816;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16816__$1,(4),results);
} else {
if((state_val_16817 === (19))){
var state_16816__$1 = state_16816;
var statearr_16829_18731 = state_16816__$1;
(statearr_16829_18731[(2)] = null);

(statearr_16829_18731[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (11))){
var inst_16791 = (state_16816[(2)]);
var state_16816__$1 = (function (){var statearr_16831 = state_16816;
(statearr_16831[(10)] = inst_16791);

return statearr_16831;
})();
var statearr_16834_18732 = state_16816__$1;
(statearr_16834_18732[(2)] = null);

(statearr_16834_18732[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (9))){
var state_16816__$1 = state_16816;
var statearr_16835_18733 = state_16816__$1;
(statearr_16835_18733[(2)] = null);

(statearr_16835_18733[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (5))){
var state_16816__$1 = state_16816;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16836_18734 = state_16816__$1;
(statearr_16836_18734[(1)] = (8));

} else {
var statearr_16837_18735 = state_16816__$1;
(statearr_16837_18735[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (14))){
var inst_16796 = (state_16816[(11)]);
var inst_16794 = (state_16816[(8)]);
var inst_16794__$1 = (state_16816[(2)]);
var inst_16795 = (inst_16794__$1 == null);
var inst_16796__$1 = cljs.core.not(inst_16795);
var state_16816__$1 = (function (){var statearr_16838 = state_16816;
(statearr_16838[(11)] = inst_16796__$1);

(statearr_16838[(8)] = inst_16794__$1);

return statearr_16838;
})();
if(inst_16796__$1){
var statearr_16839_18736 = state_16816__$1;
(statearr_16839_18736[(1)] = (15));

} else {
var statearr_16840_18737 = state_16816__$1;
(statearr_16840_18737[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (16))){
var inst_16796 = (state_16816[(11)]);
var state_16816__$1 = state_16816;
var statearr_16841_18741 = state_16816__$1;
(statearr_16841_18741[(2)] = inst_16796);

(statearr_16841_18741[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (10))){
var inst_16788 = (state_16816[(2)]);
var state_16816__$1 = state_16816;
var statearr_16842_18742 = state_16816__$1;
(statearr_16842_18742[(2)] = inst_16788);

(statearr_16842_18742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (18))){
var inst_16799 = (state_16816[(2)]);
var state_16816__$1 = state_16816;
var statearr_16843_18743 = state_16816__$1;
(statearr_16843_18743[(2)] = inst_16799);

(statearr_16843_18743[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (8))){
var inst_16785 = cljs.core.async.close_BANG_(to);
var state_16816__$1 = state_16816;
var statearr_16844_18746 = state_16816__$1;
(statearr_16844_18746[(2)] = inst_16785);

(statearr_16844_18746[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16465__auto__,jobs,results,process,async))
;
return ((function (switch__16281__auto__,c__16465__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16282__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16282__auto____0 = (function (){
var statearr_16846 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16846[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16282__auto__);

(statearr_16846[(1)] = (1));

return statearr_16846;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16282__auto____1 = (function (state_16816){
while(true){
var ret_value__16283__auto__ = (function (){try{while(true){
var result__16284__auto__ = switch__16281__auto__(state_16816);
if(cljs.core.keyword_identical_QMARK_(result__16284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16284__auto__;
}
break;
}
}catch (e16847){if((e16847 instanceof Object)){
var ex__16285__auto__ = e16847;
var statearr_16848_18747 = state_16816;
(statearr_16848_18747[(5)] = ex__16285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16816);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16847;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18748 = state_16816;
state_16816 = G__18748;
continue;
} else {
return ret_value__16283__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16282__auto__ = function(state_16816){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16282__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16282__auto____1.call(this,state_16816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16282__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16282__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16282__auto__;
})()
;})(switch__16281__auto__,c__16465__auto__,jobs,results,process,async))
})();
var state__16467__auto__ = (function (){var statearr_16849 = (f__16466__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16466__auto__.cljs$core$IFn$_invoke$arity$0() : f__16466__auto__.call(null));
(statearr_16849[(6)] = c__16465__auto__);

return statearr_16849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16467__auto__);
});})(c__16465__auto__,jobs,results,process,async))
);

return c__16465__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__16855 = arguments.length;
switch (G__16855) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__16857 = arguments.length;
switch (G__16857) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__16859 = arguments.length;
switch (G__16859) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__16465__auto___18752 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16465__auto___18752,tc,fc){
return (function (){
var f__16466__auto__ = (function (){var switch__16281__auto__ = ((function (c__16465__auto___18752,tc,fc){
return (function (state_16885){
var state_val_16886 = (state_16885[(1)]);
if((state_val_16886 === (7))){
var inst_16881 = (state_16885[(2)]);
var state_16885__$1 = state_16885;
var statearr_16887_18753 = state_16885__$1;
(statearr_16887_18753[(2)] = inst_16881);

(statearr_16887_18753[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16886 === (1))){
var state_16885__$1 = state_16885;
var statearr_16888_18754 = state_16885__$1;
(statearr_16888_18754[(2)] = null);

(statearr_16888_18754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16886 === (4))){
var inst_16862 = (state_16885[(7)]);
var inst_16862__$1 = (state_16885[(2)]);
var inst_16863 = (inst_16862__$1 == null);
var state_16885__$1 = (function (){var statearr_16889 = state_16885;
(statearr_16889[(7)] = inst_16862__$1);

return statearr_16889;
})();
if(cljs.core.truth_(inst_16863)){
var statearr_16890_18755 = state_16885__$1;
(statearr_16890_18755[(1)] = (5));

} else {
var statearr_16891_18759 = state_16885__$1;
(statearr_16891_18759[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16886 === (13))){
var state_16885__$1 = state_16885;
var statearr_16892_18763 = state_16885__$1;
(statearr_16892_18763[(2)] = null);

(statearr_16892_18763[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16886 === (6))){
var inst_16862 = (state_16885[(7)]);
var inst_16868 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16862) : p.call(null,inst_16862));
var state_16885__$1 = state_16885;
if(cljs.core.truth_(inst_16868)){
var statearr_16893_18764 = state_16885__$1;
(statearr_16893_18764[(1)] = (9));

} else {
var statearr_16894_18765 = state_16885__$1;
(statearr_16894_18765[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16886 === (3))){
var inst_16883 = (state_16885[(2)]);
var state_16885__$1 = state_16885;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16885__$1,inst_16883);
} else {
if((state_val_16886 === (12))){
var state_16885__$1 = state_16885;
var statearr_16895_18766 = state_16885__$1;
(statearr_16895_18766[(2)] = null);

(statearr_16895_18766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16886 === (2))){
var state_16885__$1 = state_16885;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16885__$1,(4),ch);
} else {
if((state_val_16886 === (11))){
var inst_16862 = (state_16885[(7)]);
var inst_16872 = (state_16885[(2)]);
var state_16885__$1 = state_16885;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16885__$1,(8),inst_16872,inst_16862);
} else {
if((state_val_16886 === (9))){
var state_16885__$1 = state_16885;
var statearr_16899_18767 = state_16885__$1;
(statearr_16899_18767[(2)] = tc);

(statearr_16899_18767[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16886 === (5))){
var inst_16865 = cljs.core.async.close_BANG_(tc);
var inst_16866 = cljs.core.async.close_BANG_(fc);
var state_16885__$1 = (function (){var statearr_16900 = state_16885;
(statearr_16900[(8)] = inst_16865);

return statearr_16900;
})();
var statearr_16901_18768 = state_16885__$1;
(statearr_16901_18768[(2)] = inst_16866);

(statearr_16901_18768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16886 === (14))){
var inst_16879 = (state_16885[(2)]);
var state_16885__$1 = state_16885;
var statearr_16902_18776 = state_16885__$1;
(statearr_16902_18776[(2)] = inst_16879);

(statearr_16902_18776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16886 === (10))){
var state_16885__$1 = state_16885;
var statearr_16903_18777 = state_16885__$1;
(statearr_16903_18777[(2)] = fc);

(statearr_16903_18777[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16886 === (8))){
var inst_16874 = (state_16885[(2)]);
var state_16885__$1 = state_16885;
if(cljs.core.truth_(inst_16874)){
var statearr_16904_18778 = state_16885__$1;
(statearr_16904_18778[(1)] = (12));

} else {
var statearr_16905_18779 = state_16885__$1;
(statearr_16905_18779[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16465__auto___18752,tc,fc))
;
return ((function (switch__16281__auto__,c__16465__auto___18752,tc,fc){
return (function() {
var cljs$core$async$state_machine__16282__auto__ = null;
var cljs$core$async$state_machine__16282__auto____0 = (function (){
var statearr_16906 = [null,null,null,null,null,null,null,null,null];
(statearr_16906[(0)] = cljs$core$async$state_machine__16282__auto__);

(statearr_16906[(1)] = (1));

return statearr_16906;
});
var cljs$core$async$state_machine__16282__auto____1 = (function (state_16885){
while(true){
var ret_value__16283__auto__ = (function (){try{while(true){
var result__16284__auto__ = switch__16281__auto__(state_16885);
if(cljs.core.keyword_identical_QMARK_(result__16284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16284__auto__;
}
break;
}
}catch (e16907){if((e16907 instanceof Object)){
var ex__16285__auto__ = e16907;
var statearr_16908_18780 = state_16885;
(statearr_16908_18780[(5)] = ex__16285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16885);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16907;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18781 = state_16885;
state_16885 = G__18781;
continue;
} else {
return ret_value__16283__auto__;
}
break;
}
});
cljs$core$async$state_machine__16282__auto__ = function(state_16885){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16282__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16282__auto____1.call(this,state_16885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16282__auto____0;
cljs$core$async$state_machine__16282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16282__auto____1;
return cljs$core$async$state_machine__16282__auto__;
})()
;})(switch__16281__auto__,c__16465__auto___18752,tc,fc))
})();
var state__16467__auto__ = (function (){var statearr_16909 = (f__16466__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16466__auto__.cljs$core$IFn$_invoke$arity$0() : f__16466__auto__.call(null));
(statearr_16909[(6)] = c__16465__auto___18752);

return statearr_16909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16467__auto__);
});})(c__16465__auto___18752,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__16465__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16465__auto__){
return (function (){
var f__16466__auto__ = (function (){var switch__16281__auto__ = ((function (c__16465__auto__){
return (function (state_16934){
var state_val_16935 = (state_16934[(1)]);
if((state_val_16935 === (7))){
var inst_16930 = (state_16934[(2)]);
var state_16934__$1 = state_16934;
var statearr_16936_18795 = state_16934__$1;
(statearr_16936_18795[(2)] = inst_16930);

(statearr_16936_18795[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16935 === (1))){
var inst_16913 = init;
var state_16934__$1 = (function (){var statearr_16937 = state_16934;
(statearr_16937[(7)] = inst_16913);

return statearr_16937;
})();
var statearr_16938_18796 = state_16934__$1;
(statearr_16938_18796[(2)] = null);

(statearr_16938_18796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16935 === (4))){
var inst_16916 = (state_16934[(8)]);
var inst_16916__$1 = (state_16934[(2)]);
var inst_16918 = (inst_16916__$1 == null);
var state_16934__$1 = (function (){var statearr_16939 = state_16934;
(statearr_16939[(8)] = inst_16916__$1);

return statearr_16939;
})();
if(cljs.core.truth_(inst_16918)){
var statearr_16940_18797 = state_16934__$1;
(statearr_16940_18797[(1)] = (5));

} else {
var statearr_16941_18801 = state_16934__$1;
(statearr_16941_18801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16935 === (6))){
var inst_16913 = (state_16934[(7)]);
var inst_16916 = (state_16934[(8)]);
var inst_16921 = (state_16934[(9)]);
var inst_16921__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16913,inst_16916) : f.call(null,inst_16913,inst_16916));
var inst_16922 = cljs.core.reduced_QMARK_(inst_16921__$1);
var state_16934__$1 = (function (){var statearr_16943 = state_16934;
(statearr_16943[(9)] = inst_16921__$1);

return statearr_16943;
})();
if(inst_16922){
var statearr_16944_18806 = state_16934__$1;
(statearr_16944_18806[(1)] = (8));

} else {
var statearr_16945_18807 = state_16934__$1;
(statearr_16945_18807[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16935 === (3))){
var inst_16932 = (state_16934[(2)]);
var state_16934__$1 = state_16934;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16934__$1,inst_16932);
} else {
if((state_val_16935 === (2))){
var state_16934__$1 = state_16934;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16934__$1,(4),ch);
} else {
if((state_val_16935 === (9))){
var inst_16921 = (state_16934[(9)]);
var inst_16913 = inst_16921;
var state_16934__$1 = (function (){var statearr_16947 = state_16934;
(statearr_16947[(7)] = inst_16913);

return statearr_16947;
})();
var statearr_16948_18808 = state_16934__$1;
(statearr_16948_18808[(2)] = null);

(statearr_16948_18808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16935 === (5))){
var inst_16913 = (state_16934[(7)]);
var state_16934__$1 = state_16934;
var statearr_16949_18809 = state_16934__$1;
(statearr_16949_18809[(2)] = inst_16913);

(statearr_16949_18809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16935 === (10))){
var inst_16928 = (state_16934[(2)]);
var state_16934__$1 = state_16934;
var statearr_16950_18810 = state_16934__$1;
(statearr_16950_18810[(2)] = inst_16928);

(statearr_16950_18810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16935 === (8))){
var inst_16921 = (state_16934[(9)]);
var inst_16924 = cljs.core.deref(inst_16921);
var state_16934__$1 = state_16934;
var statearr_16951_18811 = state_16934__$1;
(statearr_16951_18811[(2)] = inst_16924);

(statearr_16951_18811[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__16465__auto__))
;
return ((function (switch__16281__auto__,c__16465__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__16282__auto__ = null;
var cljs$core$async$reduce_$_state_machine__16282__auto____0 = (function (){
var statearr_16952 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16952[(0)] = cljs$core$async$reduce_$_state_machine__16282__auto__);

(statearr_16952[(1)] = (1));

return statearr_16952;
});
var cljs$core$async$reduce_$_state_machine__16282__auto____1 = (function (state_16934){
while(true){
var ret_value__16283__auto__ = (function (){try{while(true){
var result__16284__auto__ = switch__16281__auto__(state_16934);
if(cljs.core.keyword_identical_QMARK_(result__16284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16284__auto__;
}
break;
}
}catch (e16953){if((e16953 instanceof Object)){
var ex__16285__auto__ = e16953;
var statearr_16954_18814 = state_16934;
(statearr_16954_18814[(5)] = ex__16285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16953;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18815 = state_16934;
state_16934 = G__18815;
continue;
} else {
return ret_value__16283__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__16282__auto__ = function(state_16934){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__16282__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__16282__auto____1.call(this,state_16934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__16282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__16282__auto____0;
cljs$core$async$reduce_$_state_machine__16282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__16282__auto____1;
return cljs$core$async$reduce_$_state_machine__16282__auto__;
})()
;})(switch__16281__auto__,c__16465__auto__))
})();
var state__16467__auto__ = (function (){var statearr_16958 = (f__16466__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16466__auto__.cljs$core$IFn$_invoke$arity$0() : f__16466__auto__.call(null));
(statearr_16958[(6)] = c__16465__auto__);

return statearr_16958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16467__auto__);
});})(c__16465__auto__))
);

return c__16465__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__16465__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16465__auto__,f__$1){
return (function (){
var f__16466__auto__ = (function (){var switch__16281__auto__ = ((function (c__16465__auto__,f__$1){
return (function (state_16964){
var state_val_16965 = (state_16964[(1)]);
if((state_val_16965 === (1))){
var inst_16959 = cljs.core.async.reduce(f__$1,init,ch);
var state_16964__$1 = state_16964;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16964__$1,(2),inst_16959);
} else {
if((state_val_16965 === (2))){
var inst_16961 = (state_16964[(2)]);
var inst_16962 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_16961) : f__$1.call(null,inst_16961));
var state_16964__$1 = state_16964;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16964__$1,inst_16962);
} else {
return null;
}
}
});})(c__16465__auto__,f__$1))
;
return ((function (switch__16281__auto__,c__16465__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__16282__auto__ = null;
var cljs$core$async$transduce_$_state_machine__16282__auto____0 = (function (){
var statearr_16967 = [null,null,null,null,null,null,null];
(statearr_16967[(0)] = cljs$core$async$transduce_$_state_machine__16282__auto__);

(statearr_16967[(1)] = (1));

return statearr_16967;
});
var cljs$core$async$transduce_$_state_machine__16282__auto____1 = (function (state_16964){
while(true){
var ret_value__16283__auto__ = (function (){try{while(true){
var result__16284__auto__ = switch__16281__auto__(state_16964);
if(cljs.core.keyword_identical_QMARK_(result__16284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16284__auto__;
}
break;
}
}catch (e16968){if((e16968 instanceof Object)){
var ex__16285__auto__ = e16968;
var statearr_16969_18825 = state_16964;
(statearr_16969_18825[(5)] = ex__16285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16968;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18826 = state_16964;
state_16964 = G__18826;
continue;
} else {
return ret_value__16283__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__16282__auto__ = function(state_16964){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__16282__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__16282__auto____1.call(this,state_16964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__16282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__16282__auto____0;
cljs$core$async$transduce_$_state_machine__16282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__16282__auto____1;
return cljs$core$async$transduce_$_state_machine__16282__auto__;
})()
;})(switch__16281__auto__,c__16465__auto__,f__$1))
})();
var state__16467__auto__ = (function (){var statearr_16970 = (f__16466__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16466__auto__.cljs$core$IFn$_invoke$arity$0() : f__16466__auto__.call(null));
(statearr_16970[(6)] = c__16465__auto__);

return statearr_16970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16467__auto__);
});})(c__16465__auto__,f__$1))
);

return c__16465__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__16972 = arguments.length;
switch (G__16972) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__16465__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16465__auto__){
return (function (){
var f__16466__auto__ = (function (){var switch__16281__auto__ = ((function (c__16465__auto__){
return (function (state_16997){
var state_val_16998 = (state_16997[(1)]);
if((state_val_16998 === (7))){
var inst_16979 = (state_16997[(2)]);
var state_16997__$1 = state_16997;
var statearr_16999_18834 = state_16997__$1;
(statearr_16999_18834[(2)] = inst_16979);

(statearr_16999_18834[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16998 === (1))){
var inst_16973 = cljs.core.seq(coll);
var inst_16974 = inst_16973;
var state_16997__$1 = (function (){var statearr_17000 = state_16997;
(statearr_17000[(7)] = inst_16974);

return statearr_17000;
})();
var statearr_17001_18837 = state_16997__$1;
(statearr_17001_18837[(2)] = null);

(statearr_17001_18837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16998 === (4))){
var inst_16974 = (state_16997[(7)]);
var inst_16977 = cljs.core.first(inst_16974);
var state_16997__$1 = state_16997;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16997__$1,(7),ch,inst_16977);
} else {
if((state_val_16998 === (13))){
var inst_16991 = (state_16997[(2)]);
var state_16997__$1 = state_16997;
var statearr_17002_18851 = state_16997__$1;
(statearr_17002_18851[(2)] = inst_16991);

(statearr_17002_18851[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16998 === (6))){
var inst_16982 = (state_16997[(2)]);
var state_16997__$1 = state_16997;
if(cljs.core.truth_(inst_16982)){
var statearr_17003_18852 = state_16997__$1;
(statearr_17003_18852[(1)] = (8));

} else {
var statearr_17004_18853 = state_16997__$1;
(statearr_17004_18853[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16998 === (3))){
var inst_16995 = (state_16997[(2)]);
var state_16997__$1 = state_16997;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16997__$1,inst_16995);
} else {
if((state_val_16998 === (12))){
var state_16997__$1 = state_16997;
var statearr_17005_18854 = state_16997__$1;
(statearr_17005_18854[(2)] = null);

(statearr_17005_18854[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16998 === (2))){
var inst_16974 = (state_16997[(7)]);
var state_16997__$1 = state_16997;
if(cljs.core.truth_(inst_16974)){
var statearr_17006_18855 = state_16997__$1;
(statearr_17006_18855[(1)] = (4));

} else {
var statearr_17007_18856 = state_16997__$1;
(statearr_17007_18856[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16998 === (11))){
var inst_16988 = cljs.core.async.close_BANG_(ch);
var state_16997__$1 = state_16997;
var statearr_17008_18863 = state_16997__$1;
(statearr_17008_18863[(2)] = inst_16988);

(statearr_17008_18863[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16998 === (9))){
var state_16997__$1 = state_16997;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17009_18864 = state_16997__$1;
(statearr_17009_18864[(1)] = (11));

} else {
var statearr_17010_18865 = state_16997__$1;
(statearr_17010_18865[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16998 === (5))){
var inst_16974 = (state_16997[(7)]);
var state_16997__$1 = state_16997;
var statearr_17012_18866 = state_16997__$1;
(statearr_17012_18866[(2)] = inst_16974);

(statearr_17012_18866[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16998 === (10))){
var inst_16993 = (state_16997[(2)]);
var state_16997__$1 = state_16997;
var statearr_17013_18867 = state_16997__$1;
(statearr_17013_18867[(2)] = inst_16993);

(statearr_17013_18867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16998 === (8))){
var inst_16974 = (state_16997[(7)]);
var inst_16984 = cljs.core.next(inst_16974);
var inst_16974__$1 = inst_16984;
var state_16997__$1 = (function (){var statearr_17014 = state_16997;
(statearr_17014[(7)] = inst_16974__$1);

return statearr_17014;
})();
var statearr_17015_18868 = state_16997__$1;
(statearr_17015_18868[(2)] = null);

(statearr_17015_18868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16465__auto__))
;
return ((function (switch__16281__auto__,c__16465__auto__){
return (function() {
var cljs$core$async$state_machine__16282__auto__ = null;
var cljs$core$async$state_machine__16282__auto____0 = (function (){
var statearr_17016 = [null,null,null,null,null,null,null,null];
(statearr_17016[(0)] = cljs$core$async$state_machine__16282__auto__);

(statearr_17016[(1)] = (1));

return statearr_17016;
});
var cljs$core$async$state_machine__16282__auto____1 = (function (state_16997){
while(true){
var ret_value__16283__auto__ = (function (){try{while(true){
var result__16284__auto__ = switch__16281__auto__(state_16997);
if(cljs.core.keyword_identical_QMARK_(result__16284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16284__auto__;
}
break;
}
}catch (e17017){if((e17017 instanceof Object)){
var ex__16285__auto__ = e17017;
var statearr_17018_18869 = state_16997;
(statearr_17018_18869[(5)] = ex__16285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17017;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18870 = state_16997;
state_16997 = G__18870;
continue;
} else {
return ret_value__16283__auto__;
}
break;
}
});
cljs$core$async$state_machine__16282__auto__ = function(state_16997){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16282__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16282__auto____1.call(this,state_16997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16282__auto____0;
cljs$core$async$state_machine__16282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16282__auto____1;
return cljs$core$async$state_machine__16282__auto__;
})()
;})(switch__16281__auto__,c__16465__auto__))
})();
var state__16467__auto__ = (function (){var statearr_17019 = (f__16466__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16466__auto__.cljs$core$IFn$_invoke$arity$0() : f__16466__auto__.call(null));
(statearr_17019[(6)] = c__16465__auto__);

return statearr_17019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16467__auto__);
});})(c__16465__auto__))
);

return c__16465__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4244__auto__.call(null,_));
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4244__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4244__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4244__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto__.call(null,m));
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17020 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17020 = (function (ch,cs,meta17021){
this.ch = ch;
this.cs = cs;
this.meta17021 = meta17021;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17020.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17022,meta17021__$1){
var self__ = this;
var _17022__$1 = this;
return (new cljs.core.async.t_cljs$core$async17020(self__.ch,self__.cs,meta17021__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async17020.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17022){
var self__ = this;
var _17022__$1 = this;
return self__.meta17021;
});})(cs))
;

cljs.core.async.t_cljs$core$async17020.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17020.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async17020.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17020.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17020.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17020.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17020.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta17021","meta17021",831317466,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async17020.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17020.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17020";

cljs.core.async.t_cljs$core$async17020.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async17020");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17020.
 */
cljs.core.async.__GT_t_cljs$core$async17020 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async17020(ch__$1,cs__$1,meta17021){
return (new cljs.core.async.t_cljs$core$async17020(ch__$1,cs__$1,meta17021));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async17020(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__16465__auto___18877 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16465__auto___18877,cs,m,dchan,dctr,done){
return (function (){
var f__16466__auto__ = (function (){var switch__16281__auto__ = ((function (c__16465__auto___18877,cs,m,dchan,dctr,done){
return (function (state_17176){
var state_val_17180 = (state_17176[(1)]);
if((state_val_17180 === (7))){
var inst_17172 = (state_17176[(2)]);
var state_17176__$1 = state_17176;
var statearr_17181_18878 = state_17176__$1;
(statearr_17181_18878[(2)] = inst_17172);

(statearr_17181_18878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17180 === (20))){
var inst_17062 = (state_17176[(7)]);
var inst_17080 = cljs.core.first(inst_17062);
var inst_17081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17080,(0),null);
var inst_17082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17080,(1),null);
var state_17176__$1 = (function (){var statearr_17187 = state_17176;
(statearr_17187[(8)] = inst_17081);

return statearr_17187;
})();
if(cljs.core.truth_(inst_17082)){
var statearr_17191_18881 = state_17176__$1;
(statearr_17191_18881[(1)] = (22));

} else {
var statearr_17192_18882 = state_17176__$1;
(statearr_17192_18882[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17180 === (27))){
var inst_17114 = (state_17176[(9)]);
var inst_17031 = (state_17176[(10)]);
var inst_17112 = (state_17176[(11)]);
var inst_17119 = (state_17176[(12)]);
var inst_17119__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17112,inst_17114);
var inst_17120 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17119__$1,inst_17031,done);
var state_17176__$1 = (function (){var statearr_17193 = state_17176;
(statearr_17193[(12)] = inst_17119__$1);

return statearr_17193;
})();
if(cljs.core.truth_(inst_17120)){
var statearr_17194_18883 = state_17176__$1;
(statearr_17194_18883[(1)] = (30));

} else {
var statearr_17195_18884 = state_17176__$1;
(statearr_17195_18884[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17180 === (1))){
var state_17176__$1 = state_17176;
var statearr_17196_18885 = state_17176__$1;
(statearr_17196_18885[(2)] = null);

(statearr_17196_18885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17180 === (24))){
var inst_17062 = (state_17176[(7)]);
var inst_17089 = (state_17176[(2)]);
var inst_17090 = cljs.core.next(inst_17062);
var inst_17040 = inst_17090;
var inst_17041 = null;
var inst_17042 = (0);
var inst_17043 = (0);
var state_17176__$1 = (function (){var statearr_17197 = state_17176;
(statearr_17197[(13)] = inst_17089);

(statearr_17197[(14)] = inst_17042);

(statearr_17197[(15)] = inst_17041);

(statearr_17197[(16)] = inst_17043);

(statearr_17197[(17)] = inst_17040);

return statearr_17197;
})();
var statearr_17198_18886 = state_17176__$1;
(statearr_17198_18886[(2)] = null);

(statearr_17198_18886[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17180 === (39))){
var state_17176__$1 = state_17176;
var statearr_17202_18887 = state_17176__$1;
(statearr_17202_18887[(2)] = null);

(statearr_17202_18887[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17180 === (4))){
var inst_17031 = (state_17176[(10)]);
var inst_17031__$1 = (state_17176[(2)]);
var inst_17032 = (inst_17031__$1 == null);
var state_17176__$1 = (function (){var statearr_17203 = state_17176;
(statearr_17203[(10)] = inst_17031__$1);

return statearr_17203;
})();
if(cljs.core.truth_(inst_17032)){
var statearr_17204_18890 = state_17176__$1;
(statearr_17204_18890[(1)] = (5));

} else {
var statearr_17205_18891 = state_17176__$1;
(statearr_17205_18891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17180 === (15))){
var inst_17042 = (state_17176[(14)]);
var inst_17041 = (state_17176[(15)]);
var inst_17043 = (state_17176[(16)]);
var inst_17040 = (state_17176[(17)]);
var inst_17058 = (state_17176[(2)]);
var inst_17059 = (inst_17043 + (1));
var tmp17199 = inst_17042;
var tmp17200 = inst_17041;
var tmp17201 = inst_17040;
var inst_17040__$1 = tmp17201;
var inst_17041__$1 = tmp17200;
var inst_17042__$1 = tmp17199;
var inst_17043__$1 = inst_17059;
var state_17176__$1 = (function (){var statearr_17206 = state_17176;
(statearr_17206[(14)] = inst_17042__$1);

(statearr_17206[(15)] = inst_17041__$1);

(statearr_17206[(18)] = inst_17058);

(statearr_17206[(16)] = inst_17043__$1);

(statearr_17206[(17)] = inst_17040__$1);

return statearr_17206;
})();
var statearr_17207_18892 = state_17176__$1;
(statearr_17207_18892[(2)] = null);

(statearr_17207_18892[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17180 === (21))){
var inst_17093 = (state_17176[(2)]);
var state_17176__$1 = state_17176;
var statearr_17211_18893 = state_17176__$1;
(statearr_17211_18893[(2)] = inst_17093);

(statearr_17211_18893[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17180 === (31))){
var inst_17119 = (state_17176[(12)]);
var inst_17123 = done(null);
var inst_17124 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17119);
var state_17176__$1 = (function (){var statearr_17212 = state_17176;
(statearr_17212[(19)] = inst_17123);

return statearr_17212;
})();
var statearr_17213_18894 = state_17176__$1;
(statearr_17213_18894[(2)] = inst_17124);

(statearr_17213_18894[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17180 === (32))){
var inst_17111 = (state_17176[(20)]);
var inst_17114 = (state_17176[(9)]);
var inst_17113 = (state_17176[(21)]);
var inst_17112 = (state_17176[(11)]);
var inst_17126 = (state_17176[(2)]);
var inst_17127 = (inst_17114 + (1));
var tmp17208 = inst_17111;
var tmp17209 = inst_17113;
var tmp17210 = inst_17112;
var inst_17111__$1 = tmp17208;
var inst_17112__$1 = tmp17210;
var inst_17113__$1 = tmp17209;
var inst_17114__$1 = inst_17127;
var state_17176__$1 = (function (){var statearr_17216 = state_17176;
(statearr_17216[(20)] = inst_17111__$1);

(statearr_17216[(9)] = inst_17114__$1);

(statearr_17216[(21)] = inst_17113__$1);

(statearr_17216[(22)] = inst_17126);

(statearr_17216[(11)] = inst_17112__$1);

return statearr_17216;
})();
var statearr_17217_18895 = state_17176__$1;
(statearr_17217_18895[(2)] = null);

(statearr_17217_18895[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17180 === (40))){
var inst_17141 = (state_17176[(23)]);
var inst_17145 = done(null);
var inst_17146 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17141);
var state_17176__$1 = (function (){var statearr_17218 = state_17176;
(statearr_17218[(24)] = inst_17145);

return statearr_17218;
})();
var statearr_17219_18897 = state_17176__$1;
(statearr_17219_18897[(2)] = inst_17146);

(statearr_17219_18897[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17180 === (33))){
var inst_17130 = (state_17176[(25)]);
var inst_17132 = cljs.core.chunked_seq_QMARK_(inst_17130);
var state_17176__$1 = state_17176;
if(inst_17132){
var statearr_17220_18899 = state_17176__$1;
(statearr_17220_18899[(1)] = (36));

} else {
var statearr_17221_18900 = state_17176__$1;
(statearr_17221_18900[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17180 === (13))){
var inst_17052 = (state_17176[(26)]);
var inst_17055 = cljs.core.async.close_BANG_(inst_17052);
var state_17176__$1 = state_17176;
var statearr_17222_18901 = state_17176__$1;
(statearr_17222_18901[(2)] = inst_17055);

(statearr_17222_18901[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17180 === (22))){
var inst_17081 = (state_17176[(8)]);
var inst_17086 = cljs.core.async.close_BANG_(inst_17081);
var state_17176__$1 = state_17176;
var statearr_17223_18902 = state_17176__$1;
(statearr_17223_18902[(2)] = inst_17086);

(statearr_17223_18902[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17180 === (36))){
var inst_17130 = (state_17176[(25)]);
var inst_17136 = cljs.core.chunk_first(inst_17130);
var inst_17137 = cljs.core.chunk_rest(inst_17130);
var inst_17138 = cljs.core.count(inst_17136);
var inst_17111 = inst_17137;
var inst_17112 = inst_17136;
var inst_17113 = inst_17138;
var inst_17114 = (0);
var state_17176__$1 = (function (){var statearr_17224 = state_17176;
(statearr_17224[(20)] = inst_17111);

(statearr_17224[(9)] = inst_17114);

(statearr_17224[(21)] = inst_17113);

(statearr_17224[(11)] = inst_17112);

return statearr_17224;
})();
var statearr_17225_18903 = state_17176__$1;
(statearr_17225_18903[(2)] = null);

(statearr_17225_18903[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17180 === (41))){
var inst_17130 = (state_17176[(25)]);
var inst_17148 = (state_17176[(2)]);
var inst_17152 = cljs.core.next(inst_17130);
var inst_17111 = inst_17152;
var inst_17112 = null;
var inst_17113 = (0);
var inst_17114 = (0);
var state_17176__$1 = (function (){var statearr_17226 = state_17176;
(statearr_17226[(20)] = inst_17111);

(statearr_17226[(9)] = inst_17114);

(statearr_17226[(21)] = inst_17113);

(statearr_17226[(27)] = inst_17148);

(statearr_17226[(11)] = inst_17112);

return statearr_17226;
})();
var statearr_17227_18904 = state_17176__$1;
(statearr_17227_18904[(2)] = null);

(statearr_17227_18904[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17180 === (43))){
var state_17176__$1 = state_17176;
var statearr_17228_18906 = state_17176__$1;
(statearr_17228_18906[(2)] = null);

(statearr_17228_18906[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17180 === (29))){
var inst_17160 = (state_17176[(2)]);
var state_17176__$1 = state_17176;
var statearr_17229_18908 = state_17176__$1;
(statearr_17229_18908[(2)] = inst_17160);

(statearr_17229_18908[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17180 === (44))){
var inst_17169 = (state_17176[(2)]);
var state_17176__$1 = (function (){var statearr_17230 = state_17176;
(statearr_17230[(28)] = inst_17169);

return statearr_17230;
})();
var statearr_17231_18909 = state_17176__$1;
(statearr_17231_18909[(2)] = null);

(statearr_17231_18909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17180 === (6))){
var inst_17103 = (state_17176[(29)]);
var inst_17102 = cljs.core.deref(cs);
var inst_17103__$1 = cljs.core.keys(inst_17102);
var inst_17104 = cljs.core.count(inst_17103__$1);
var inst_17105 = cljs.core.reset_BANG_(dctr,inst_17104);
var inst_17110 = cljs.core.seq(inst_17103__$1);
var inst_17111 = inst_17110;
var inst_17112 = null;
var inst_17113 = (0);
var inst_17114 = (0);
var state_17176__$1 = (function (){var statearr_17233 = state_17176;
(statearr_17233[(20)] = inst_17111);

(statearr_17233[(30)] = inst_17105);

(statearr_17233[(9)] = inst_17114);

(statearr_17233[(21)] = inst_17113);

(statearr_17233[(11)] = inst_17112);

(statearr_17233[(29)] = inst_17103__$1);

return statearr_17233;
})();
var statearr_17234_18910 = state_17176__$1;
(statearr_17234_18910[(2)] = null);

(statearr_17234_18910[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17180 === (28))){
var inst_17111 = (state_17176[(20)]);
var inst_17130 = (state_17176[(25)]);
var inst_17130__$1 = cljs.core.seq(inst_17111);
var state_17176__$1 = (function (){var statearr_17235 = state_17176;
(statearr_17235[(25)] = inst_17130__$1);

return statearr_17235;
})();
if(inst_17130__$1){
var statearr_17236_18912 = state_17176__$1;
(statearr_17236_18912[(1)] = (33));

} else {
var statearr_17237_18913 = state_17176__$1;
(statearr_17237_18913[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17180 === (25))){
var inst_17114 = (state_17176[(9)]);
var inst_17113 = (state_17176[(21)]);
var inst_17116 = (inst_17114 < inst_17113);
var inst_17117 = inst_17116;
var state_17176__$1 = state_17176;
if(cljs.core.truth_(inst_17117)){
var statearr_17238_18914 = state_17176__$1;
(statearr_17238_18914[(1)] = (27));

} else {
var statearr_17239_18915 = state_17176__$1;
(statearr_17239_18915[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17180 === (34))){
var state_17176__$1 = state_17176;
var statearr_17240_18920 = state_17176__$1;
(statearr_17240_18920[(2)] = null);

(statearr_17240_18920[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17180 === (17))){
var state_17176__$1 = state_17176;
var statearr_17241_18921 = state_17176__$1;
(statearr_17241_18921[(2)] = null);

(statearr_17241_18921[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17180 === (3))){
var inst_17174 = (state_17176[(2)]);
var state_17176__$1 = state_17176;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17176__$1,inst_17174);
} else {
if((state_val_17180 === (12))){
var inst_17098 = (state_17176[(2)]);
var state_17176__$1 = state_17176;
var statearr_17242_18922 = state_17176__$1;
(statearr_17242_18922[(2)] = inst_17098);

(statearr_17242_18922[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17180 === (2))){
var state_17176__$1 = state_17176;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17176__$1,(4),ch);
} else {
if((state_val_17180 === (23))){
var state_17176__$1 = state_17176;
var statearr_17243_18923 = state_17176__$1;
(statearr_17243_18923[(2)] = null);

(statearr_17243_18923[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17180 === (35))){
var inst_17158 = (state_17176[(2)]);
var state_17176__$1 = state_17176;
var statearr_17244_18924 = state_17176__$1;
(statearr_17244_18924[(2)] = inst_17158);

(statearr_17244_18924[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17180 === (19))){
var inst_17062 = (state_17176[(7)]);
var inst_17070 = cljs.core.chunk_first(inst_17062);
var inst_17073 = cljs.core.chunk_rest(inst_17062);
var inst_17074 = cljs.core.count(inst_17070);
var inst_17040 = inst_17073;
var inst_17041 = inst_17070;
var inst_17042 = inst_17074;
var inst_17043 = (0);
var state_17176__$1 = (function (){var statearr_17245 = state_17176;
(statearr_17245[(14)] = inst_17042);

(statearr_17245[(15)] = inst_17041);

(statearr_17245[(16)] = inst_17043);

(statearr_17245[(17)] = inst_17040);

return statearr_17245;
})();
var statearr_17246_18935 = state_17176__$1;
(statearr_17246_18935[(2)] = null);

(statearr_17246_18935[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17180 === (11))){
var inst_17062 = (state_17176[(7)]);
var inst_17040 = (state_17176[(17)]);
var inst_17062__$1 = cljs.core.seq(inst_17040);
var state_17176__$1 = (function (){var statearr_17247 = state_17176;
(statearr_17247[(7)] = inst_17062__$1);

return statearr_17247;
})();
if(inst_17062__$1){
var statearr_17248_18940 = state_17176__$1;
(statearr_17248_18940[(1)] = (16));

} else {
var statearr_17249_18941 = state_17176__$1;
(statearr_17249_18941[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17180 === (9))){
var inst_17100 = (state_17176[(2)]);
var state_17176__$1 = state_17176;
var statearr_17250_18942 = state_17176__$1;
(statearr_17250_18942[(2)] = inst_17100);

(statearr_17250_18942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17180 === (5))){
var inst_17038 = cljs.core.deref(cs);
var inst_17039 = cljs.core.seq(inst_17038);
var inst_17040 = inst_17039;
var inst_17041 = null;
var inst_17042 = (0);
var inst_17043 = (0);
var state_17176__$1 = (function (){var statearr_17251 = state_17176;
(statearr_17251[(14)] = inst_17042);

(statearr_17251[(15)] = inst_17041);

(statearr_17251[(16)] = inst_17043);

(statearr_17251[(17)] = inst_17040);

return statearr_17251;
})();
var statearr_17252_18943 = state_17176__$1;
(statearr_17252_18943[(2)] = null);

(statearr_17252_18943[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17180 === (14))){
var state_17176__$1 = state_17176;
var statearr_17253_18946 = state_17176__$1;
(statearr_17253_18946[(2)] = null);

(statearr_17253_18946[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17180 === (45))){
var inst_17166 = (state_17176[(2)]);
var state_17176__$1 = state_17176;
var statearr_17254_18947 = state_17176__$1;
(statearr_17254_18947[(2)] = inst_17166);

(statearr_17254_18947[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17180 === (26))){
var inst_17103 = (state_17176[(29)]);
var inst_17162 = (state_17176[(2)]);
var inst_17163 = cljs.core.seq(inst_17103);
var state_17176__$1 = (function (){var statearr_17255 = state_17176;
(statearr_17255[(31)] = inst_17162);

return statearr_17255;
})();
if(inst_17163){
var statearr_17256_18950 = state_17176__$1;
(statearr_17256_18950[(1)] = (42));

} else {
var statearr_17257_18951 = state_17176__$1;
(statearr_17257_18951[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17180 === (16))){
var inst_17062 = (state_17176[(7)]);
var inst_17068 = cljs.core.chunked_seq_QMARK_(inst_17062);
var state_17176__$1 = state_17176;
if(inst_17068){
var statearr_17258_18952 = state_17176__$1;
(statearr_17258_18952[(1)] = (19));

} else {
var statearr_17259_18953 = state_17176__$1;
(statearr_17259_18953[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17180 === (38))){
var inst_17155 = (state_17176[(2)]);
var state_17176__$1 = state_17176;
var statearr_17260_18959 = state_17176__$1;
(statearr_17260_18959[(2)] = inst_17155);

(statearr_17260_18959[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17180 === (30))){
var state_17176__$1 = state_17176;
var statearr_17261_18960 = state_17176__$1;
(statearr_17261_18960[(2)] = null);

(statearr_17261_18960[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17180 === (10))){
var inst_17041 = (state_17176[(15)]);
var inst_17043 = (state_17176[(16)]);
var inst_17051 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17041,inst_17043);
var inst_17052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17051,(0),null);
var inst_17053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17051,(1),null);
var state_17176__$1 = (function (){var statearr_17262 = state_17176;
(statearr_17262[(26)] = inst_17052);

return statearr_17262;
})();
if(cljs.core.truth_(inst_17053)){
var statearr_17268_18964 = state_17176__$1;
(statearr_17268_18964[(1)] = (13));

} else {
var statearr_17269_18965 = state_17176__$1;
(statearr_17269_18965[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17180 === (18))){
var inst_17096 = (state_17176[(2)]);
var state_17176__$1 = state_17176;
var statearr_17270_18966 = state_17176__$1;
(statearr_17270_18966[(2)] = inst_17096);

(statearr_17270_18966[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17180 === (42))){
var state_17176__$1 = state_17176;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17176__$1,(45),dchan);
} else {
if((state_val_17180 === (37))){
var inst_17031 = (state_17176[(10)]);
var inst_17130 = (state_17176[(25)]);
var inst_17141 = (state_17176[(23)]);
var inst_17141__$1 = cljs.core.first(inst_17130);
var inst_17142 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17141__$1,inst_17031,done);
var state_17176__$1 = (function (){var statearr_17271 = state_17176;
(statearr_17271[(23)] = inst_17141__$1);

return statearr_17271;
})();
if(cljs.core.truth_(inst_17142)){
var statearr_17272_18967 = state_17176__$1;
(statearr_17272_18967[(1)] = (39));

} else {
var statearr_17273_18968 = state_17176__$1;
(statearr_17273_18968[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17180 === (8))){
var inst_17042 = (state_17176[(14)]);
var inst_17043 = (state_17176[(16)]);
var inst_17045 = (inst_17043 < inst_17042);
var inst_17046 = inst_17045;
var state_17176__$1 = state_17176;
if(cljs.core.truth_(inst_17046)){
var statearr_17274_18969 = state_17176__$1;
(statearr_17274_18969[(1)] = (10));

} else {
var statearr_17275_18974 = state_17176__$1;
(statearr_17275_18974[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16465__auto___18877,cs,m,dchan,dctr,done))
;
return ((function (switch__16281__auto__,c__16465__auto___18877,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__16282__auto__ = null;
var cljs$core$async$mult_$_state_machine__16282__auto____0 = (function (){
var statearr_17276 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17276[(0)] = cljs$core$async$mult_$_state_machine__16282__auto__);

(statearr_17276[(1)] = (1));

return statearr_17276;
});
var cljs$core$async$mult_$_state_machine__16282__auto____1 = (function (state_17176){
while(true){
var ret_value__16283__auto__ = (function (){try{while(true){
var result__16284__auto__ = switch__16281__auto__(state_17176);
if(cljs.core.keyword_identical_QMARK_(result__16284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16284__auto__;
}
break;
}
}catch (e17277){if((e17277 instanceof Object)){
var ex__16285__auto__ = e17277;
var statearr_17278_18975 = state_17176;
(statearr_17278_18975[(5)] = ex__16285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17277;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18981 = state_17176;
state_17176 = G__18981;
continue;
} else {
return ret_value__16283__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__16282__auto__ = function(state_17176){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__16282__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__16282__auto____1.call(this,state_17176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__16282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__16282__auto____0;
cljs$core$async$mult_$_state_machine__16282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__16282__auto____1;
return cljs$core$async$mult_$_state_machine__16282__auto__;
})()
;})(switch__16281__auto__,c__16465__auto___18877,cs,m,dchan,dctr,done))
})();
var state__16467__auto__ = (function (){var statearr_17279 = (f__16466__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16466__auto__.cljs$core$IFn$_invoke$arity$0() : f__16466__auto__.call(null));
(statearr_17279[(6)] = c__16465__auto___18877);

return statearr_17279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16467__auto__);
});})(c__16465__auto___18877,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__17289 = arguments.length;
switch (G__17289) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto__.call(null,m,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4244__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto__.call(null,m));
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4244__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4244__auto__.call(null,m,state_map));
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4244__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4244__auto__.call(null,m,mode));
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4244__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___18992 = arguments.length;
var i__4532__auto___18993 = (0);
while(true){
if((i__4532__auto___18993 < len__4531__auto___18992)){
args__4534__auto__.push((arguments[i__4532__auto___18993]));

var G__18994 = (i__4532__auto___18993 + (1));
i__4532__auto___18993 = G__18994;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17319){
var map__17320 = p__17319;
var map__17320__$1 = ((((!((map__17320 == null)))?(((((map__17320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17320):map__17320);
var opts = map__17320__$1;
var statearr_17322_18995 = state;
(statearr_17322_18995[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__17320,map__17320__$1,opts){
return (function (val){
var statearr_17324_18996 = state;
(statearr_17324_18996[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__17320,map__17320__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_17325_18997 = state;
(statearr_17325_18997[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17315){
var G__17316 = cljs.core.first(seq17315);
var seq17315__$1 = cljs.core.next(seq17315);
var G__17317 = cljs.core.first(seq17315__$1);
var seq17315__$2 = cljs.core.next(seq17315__$1);
var G__17318 = cljs.core.first(seq17315__$2);
var seq17315__$3 = cljs.core.next(seq17315__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17316,G__17317,G__17318,seq17315__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_(solos)))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17326 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17326 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta17327){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta17327 = meta17327;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17328,meta17327__$1){
var self__ = this;
var _17328__$1 = this;
return (new cljs.core.async.t_cljs$core$async17326(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta17327__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17326.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17328){
var self__ = this;
var _17328__$1 = this;
return self__.meta17327;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17326.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17326.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17326.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17326.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17326.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17326.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17326.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17326.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17326.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta17327","meta17327",-170785711,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17326.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17326.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17326";

cljs.core.async.t_cljs$core$async17326.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async17326");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17326.
 */
cljs.core.async.__GT_t_cljs$core$async17326 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async17326(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta17327){
return (new cljs.core.async.t_cljs$core$async17326(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta17327));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async17326(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16465__auto___19016 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16465__auto___19016,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16466__auto__ = (function (){var switch__16281__auto__ = ((function (c__16465__auto___19016,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17442){
var state_val_17443 = (state_17442[(1)]);
if((state_val_17443 === (7))){
var inst_17346 = (state_17442[(2)]);
var state_17442__$1 = state_17442;
var statearr_17444_19017 = state_17442__$1;
(statearr_17444_19017[(2)] = inst_17346);

(statearr_17444_19017[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17443 === (20))){
var inst_17358 = (state_17442[(7)]);
var state_17442__$1 = state_17442;
var statearr_17445_19018 = state_17442__$1;
(statearr_17445_19018[(2)] = inst_17358);

(statearr_17445_19018[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17443 === (27))){
var state_17442__$1 = state_17442;
var statearr_17446_19019 = state_17442__$1;
(statearr_17446_19019[(2)] = null);

(statearr_17446_19019[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17443 === (1))){
var inst_17333 = (state_17442[(8)]);
var inst_17333__$1 = calc_state();
var inst_17335 = (inst_17333__$1 == null);
var inst_17336 = cljs.core.not(inst_17335);
var state_17442__$1 = (function (){var statearr_17447 = state_17442;
(statearr_17447[(8)] = inst_17333__$1);

return statearr_17447;
})();
if(inst_17336){
var statearr_17448_19020 = state_17442__$1;
(statearr_17448_19020[(1)] = (2));

} else {
var statearr_17449_19021 = state_17442__$1;
(statearr_17449_19021[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17443 === (24))){
var inst_17387 = (state_17442[(9)]);
var inst_17410 = (state_17442[(10)]);
var inst_17396 = (state_17442[(11)]);
var inst_17410__$1 = (inst_17387.cljs$core$IFn$_invoke$arity$1 ? inst_17387.cljs$core$IFn$_invoke$arity$1(inst_17396) : inst_17387.call(null,inst_17396));
var state_17442__$1 = (function (){var statearr_17450 = state_17442;
(statearr_17450[(10)] = inst_17410__$1);

return statearr_17450;
})();
if(cljs.core.truth_(inst_17410__$1)){
var statearr_17451_19022 = state_17442__$1;
(statearr_17451_19022[(1)] = (29));

} else {
var statearr_17452_19023 = state_17442__$1;
(statearr_17452_19023[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17443 === (4))){
var inst_17349 = (state_17442[(2)]);
var state_17442__$1 = state_17442;
if(cljs.core.truth_(inst_17349)){
var statearr_17453_19024 = state_17442__$1;
(statearr_17453_19024[(1)] = (8));

} else {
var statearr_17454_19025 = state_17442__$1;
(statearr_17454_19025[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17443 === (15))){
var inst_17380 = (state_17442[(2)]);
var state_17442__$1 = state_17442;
if(cljs.core.truth_(inst_17380)){
var statearr_17458_19026 = state_17442__$1;
(statearr_17458_19026[(1)] = (19));

} else {
var statearr_17459_19027 = state_17442__$1;
(statearr_17459_19027[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17443 === (21))){
var inst_17386 = (state_17442[(12)]);
var inst_17386__$1 = (state_17442[(2)]);
var inst_17387 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17386__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17388 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17386__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17386__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_17442__$1 = (function (){var statearr_17460 = state_17442;
(statearr_17460[(9)] = inst_17387);

(statearr_17460[(13)] = inst_17388);

(statearr_17460[(12)] = inst_17386__$1);

return statearr_17460;
})();
return cljs.core.async.ioc_alts_BANG_(state_17442__$1,(22),inst_17389);
} else {
if((state_val_17443 === (31))){
var inst_17418 = (state_17442[(2)]);
var state_17442__$1 = state_17442;
if(cljs.core.truth_(inst_17418)){
var statearr_17461_19029 = state_17442__$1;
(statearr_17461_19029[(1)] = (32));

} else {
var statearr_17462_19030 = state_17442__$1;
(statearr_17462_19030[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17443 === (32))){
var inst_17395 = (state_17442[(14)]);
var state_17442__$1 = state_17442;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17442__$1,(35),out,inst_17395);
} else {
if((state_val_17443 === (33))){
var inst_17386 = (state_17442[(12)]);
var inst_17358 = inst_17386;
var state_17442__$1 = (function (){var statearr_17463 = state_17442;
(statearr_17463[(7)] = inst_17358);

return statearr_17463;
})();
var statearr_17466_19031 = state_17442__$1;
(statearr_17466_19031[(2)] = null);

(statearr_17466_19031[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17443 === (13))){
var inst_17358 = (state_17442[(7)]);
var inst_17369 = inst_17358.cljs$lang$protocol_mask$partition0$;
var inst_17370 = (inst_17369 & (64));
var inst_17371 = inst_17358.cljs$core$ISeq$;
var inst_17372 = (cljs.core.PROTOCOL_SENTINEL === inst_17371);
var inst_17373 = ((inst_17370) || (inst_17372));
var state_17442__$1 = state_17442;
if(cljs.core.truth_(inst_17373)){
var statearr_17471_19032 = state_17442__$1;
(statearr_17471_19032[(1)] = (16));

} else {
var statearr_17472_19033 = state_17442__$1;
(statearr_17472_19033[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17443 === (22))){
var inst_17395 = (state_17442[(14)]);
var inst_17396 = (state_17442[(11)]);
var inst_17394 = (state_17442[(2)]);
var inst_17395__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17394,(0),null);
var inst_17396__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17394,(1),null);
var inst_17397 = (inst_17395__$1 == null);
var inst_17398 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17396__$1,change);
var inst_17399 = ((inst_17397) || (inst_17398));
var state_17442__$1 = (function (){var statearr_17473 = state_17442;
(statearr_17473[(14)] = inst_17395__$1);

(statearr_17473[(11)] = inst_17396__$1);

return statearr_17473;
})();
if(cljs.core.truth_(inst_17399)){
var statearr_17475_19035 = state_17442__$1;
(statearr_17475_19035[(1)] = (23));

} else {
var statearr_17476_19036 = state_17442__$1;
(statearr_17476_19036[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17443 === (36))){
var inst_17386 = (state_17442[(12)]);
var inst_17358 = inst_17386;
var state_17442__$1 = (function (){var statearr_17480 = state_17442;
(statearr_17480[(7)] = inst_17358);

return statearr_17480;
})();
var statearr_17481_19037 = state_17442__$1;
(statearr_17481_19037[(2)] = null);

(statearr_17481_19037[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17443 === (29))){
var inst_17410 = (state_17442[(10)]);
var state_17442__$1 = state_17442;
var statearr_17482_19038 = state_17442__$1;
(statearr_17482_19038[(2)] = inst_17410);

(statearr_17482_19038[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17443 === (6))){
var state_17442__$1 = state_17442;
var statearr_17483_19039 = state_17442__$1;
(statearr_17483_19039[(2)] = false);

(statearr_17483_19039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17443 === (28))){
var inst_17406 = (state_17442[(2)]);
var inst_17407 = calc_state();
var inst_17358 = inst_17407;
var state_17442__$1 = (function (){var statearr_17484 = state_17442;
(statearr_17484[(7)] = inst_17358);

(statearr_17484[(15)] = inst_17406);

return statearr_17484;
})();
var statearr_17485_19040 = state_17442__$1;
(statearr_17485_19040[(2)] = null);

(statearr_17485_19040[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17443 === (25))){
var inst_17432 = (state_17442[(2)]);
var state_17442__$1 = state_17442;
var statearr_17486_19041 = state_17442__$1;
(statearr_17486_19041[(2)] = inst_17432);

(statearr_17486_19041[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17443 === (34))){
var inst_17430 = (state_17442[(2)]);
var state_17442__$1 = state_17442;
var statearr_17487_19042 = state_17442__$1;
(statearr_17487_19042[(2)] = inst_17430);

(statearr_17487_19042[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17443 === (17))){
var state_17442__$1 = state_17442;
var statearr_17488_19043 = state_17442__$1;
(statearr_17488_19043[(2)] = false);

(statearr_17488_19043[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17443 === (3))){
var state_17442__$1 = state_17442;
var statearr_17493_19048 = state_17442__$1;
(statearr_17493_19048[(2)] = false);

(statearr_17493_19048[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17443 === (12))){
var inst_17434 = (state_17442[(2)]);
var state_17442__$1 = state_17442;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17442__$1,inst_17434);
} else {
if((state_val_17443 === (2))){
var inst_17333 = (state_17442[(8)]);
var inst_17338 = inst_17333.cljs$lang$protocol_mask$partition0$;
var inst_17339 = (inst_17338 & (64));
var inst_17340 = inst_17333.cljs$core$ISeq$;
var inst_17341 = (cljs.core.PROTOCOL_SENTINEL === inst_17340);
var inst_17342 = ((inst_17339) || (inst_17341));
var state_17442__$1 = state_17442;
if(cljs.core.truth_(inst_17342)){
var statearr_17498_19049 = state_17442__$1;
(statearr_17498_19049[(1)] = (5));

} else {
var statearr_17499_19050 = state_17442__$1;
(statearr_17499_19050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17443 === (23))){
var inst_17395 = (state_17442[(14)]);
var inst_17401 = (inst_17395 == null);
var state_17442__$1 = state_17442;
if(cljs.core.truth_(inst_17401)){
var statearr_17500_19051 = state_17442__$1;
(statearr_17500_19051[(1)] = (26));

} else {
var statearr_17504_19053 = state_17442__$1;
(statearr_17504_19053[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17443 === (35))){
var inst_17421 = (state_17442[(2)]);
var state_17442__$1 = state_17442;
if(cljs.core.truth_(inst_17421)){
var statearr_17505_19055 = state_17442__$1;
(statearr_17505_19055[(1)] = (36));

} else {
var statearr_17506_19056 = state_17442__$1;
(statearr_17506_19056[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17443 === (19))){
var inst_17358 = (state_17442[(7)]);
var inst_17383 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17358);
var state_17442__$1 = state_17442;
var statearr_17511_19057 = state_17442__$1;
(statearr_17511_19057[(2)] = inst_17383);

(statearr_17511_19057[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17443 === (11))){
var inst_17358 = (state_17442[(7)]);
var inst_17362 = (inst_17358 == null);
var inst_17363 = cljs.core.not(inst_17362);
var state_17442__$1 = state_17442;
if(inst_17363){
var statearr_17512_19058 = state_17442__$1;
(statearr_17512_19058[(1)] = (13));

} else {
var statearr_17515_19059 = state_17442__$1;
(statearr_17515_19059[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17443 === (9))){
var inst_17333 = (state_17442[(8)]);
var state_17442__$1 = state_17442;
var statearr_17519_19060 = state_17442__$1;
(statearr_17519_19060[(2)] = inst_17333);

(statearr_17519_19060[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17443 === (5))){
var state_17442__$1 = state_17442;
var statearr_17521_19061 = state_17442__$1;
(statearr_17521_19061[(2)] = true);

(statearr_17521_19061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17443 === (14))){
var state_17442__$1 = state_17442;
var statearr_17522_19064 = state_17442__$1;
(statearr_17522_19064[(2)] = false);

(statearr_17522_19064[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17443 === (26))){
var inst_17396 = (state_17442[(11)]);
var inst_17403 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_17396);
var state_17442__$1 = state_17442;
var statearr_17523_19065 = state_17442__$1;
(statearr_17523_19065[(2)] = inst_17403);

(statearr_17523_19065[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17443 === (16))){
var state_17442__$1 = state_17442;
var statearr_17527_19066 = state_17442__$1;
(statearr_17527_19066[(2)] = true);

(statearr_17527_19066[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17443 === (38))){
var inst_17426 = (state_17442[(2)]);
var state_17442__$1 = state_17442;
var statearr_17528_19069 = state_17442__$1;
(statearr_17528_19069[(2)] = inst_17426);

(statearr_17528_19069[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17443 === (30))){
var inst_17387 = (state_17442[(9)]);
var inst_17388 = (state_17442[(13)]);
var inst_17396 = (state_17442[(11)]);
var inst_17413 = cljs.core.empty_QMARK_(inst_17387);
var inst_17414 = (inst_17388.cljs$core$IFn$_invoke$arity$1 ? inst_17388.cljs$core$IFn$_invoke$arity$1(inst_17396) : inst_17388.call(null,inst_17396));
var inst_17415 = cljs.core.not(inst_17414);
var inst_17416 = ((inst_17413) && (inst_17415));
var state_17442__$1 = state_17442;
var statearr_17530_19070 = state_17442__$1;
(statearr_17530_19070[(2)] = inst_17416);

(statearr_17530_19070[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17443 === (10))){
var inst_17333 = (state_17442[(8)]);
var inst_17354 = (state_17442[(2)]);
var inst_17355 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17354,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17356 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17354,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17357 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17354,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17358 = inst_17333;
var state_17442__$1 = (function (){var statearr_17534 = state_17442;
(statearr_17534[(16)] = inst_17357);

(statearr_17534[(17)] = inst_17355);

(statearr_17534[(7)] = inst_17358);

(statearr_17534[(18)] = inst_17356);

return statearr_17534;
})();
var statearr_17535_19071 = state_17442__$1;
(statearr_17535_19071[(2)] = null);

(statearr_17535_19071[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17443 === (18))){
var inst_17377 = (state_17442[(2)]);
var state_17442__$1 = state_17442;
var statearr_17536_19072 = state_17442__$1;
(statearr_17536_19072[(2)] = inst_17377);

(statearr_17536_19072[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17443 === (37))){
var state_17442__$1 = state_17442;
var statearr_17537_19073 = state_17442__$1;
(statearr_17537_19073[(2)] = null);

(statearr_17537_19073[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17443 === (8))){
var inst_17333 = (state_17442[(8)]);
var inst_17351 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17333);
var state_17442__$1 = state_17442;
var statearr_17538_19074 = state_17442__$1;
(statearr_17538_19074[(2)] = inst_17351);

(statearr_17538_19074[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16465__auto___19016,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__16281__auto__,c__16465__auto___19016,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__16282__auto__ = null;
var cljs$core$async$mix_$_state_machine__16282__auto____0 = (function (){
var statearr_17540 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17540[(0)] = cljs$core$async$mix_$_state_machine__16282__auto__);

(statearr_17540[(1)] = (1));

return statearr_17540;
});
var cljs$core$async$mix_$_state_machine__16282__auto____1 = (function (state_17442){
while(true){
var ret_value__16283__auto__ = (function (){try{while(true){
var result__16284__auto__ = switch__16281__auto__(state_17442);
if(cljs.core.keyword_identical_QMARK_(result__16284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16284__auto__;
}
break;
}
}catch (e17541){if((e17541 instanceof Object)){
var ex__16285__auto__ = e17541;
var statearr_17542_19076 = state_17442;
(statearr_17542_19076[(5)] = ex__16285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17541;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19077 = state_17442;
state_17442 = G__19077;
continue;
} else {
return ret_value__16283__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__16282__auto__ = function(state_17442){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__16282__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__16282__auto____1.call(this,state_17442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__16282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__16282__auto____0;
cljs$core$async$mix_$_state_machine__16282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__16282__auto____1;
return cljs$core$async$mix_$_state_machine__16282__auto__;
})()
;})(switch__16281__auto__,c__16465__auto___19016,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16467__auto__ = (function (){var statearr_17543 = (f__16466__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16466__auto__.cljs$core$IFn$_invoke$arity$0() : f__16466__auto__.call(null));
(statearr_17543[(6)] = c__16465__auto___19016);

return statearr_17543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16467__auto__);
});})(c__16465__auto___19016,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4244__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4244__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4244__auto__.call(null,p,v,ch));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4244__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__17555 = arguments.length;
switch (G__17555) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4244__auto__.call(null,p));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__4244__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4244__auto__.call(null,p,v));
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__4244__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__17561 = arguments.length;
switch (G__17561) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3949__auto__,mults){
return (function (p1__17559_SHARP_){
if(cljs.core.truth_((p1__17559_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17559_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17559_SHARP_.call(null,topic)))){
return p1__17559_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17559_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17563 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17563 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17564){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17564 = meta17564;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17565,meta17564__$1){
var self__ = this;
var _17565__$1 = this;
return (new cljs.core.async.t_cljs$core$async17563(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17564__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17563.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17565){
var self__ = this;
var _17565__$1 = this;
return self__.meta17564;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17563.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17563.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17563.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17563.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17563.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17563.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17563.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17563.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta17564","meta17564",1964523584,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17563.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17563.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17563";

cljs.core.async.t_cljs$core$async17563.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async17563");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17563.
 */
cljs.core.async.__GT_t_cljs$core$async17563 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async17563(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17564){
return (new cljs.core.async.t_cljs$core$async17563(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17564));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async17563(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16465__auto___19117 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16465__auto___19117,mults,ensure_mult,p){
return (function (){
var f__16466__auto__ = (function (){var switch__16281__auto__ = ((function (c__16465__auto___19117,mults,ensure_mult,p){
return (function (state_17658){
var state_val_17659 = (state_17658[(1)]);
if((state_val_17659 === (7))){
var inst_17652 = (state_17658[(2)]);
var state_17658__$1 = state_17658;
var statearr_17660_19118 = state_17658__$1;
(statearr_17660_19118[(2)] = inst_17652);

(statearr_17660_19118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17659 === (20))){
var state_17658__$1 = state_17658;
var statearr_17661_19119 = state_17658__$1;
(statearr_17661_19119[(2)] = null);

(statearr_17661_19119[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17659 === (1))){
var state_17658__$1 = state_17658;
var statearr_17662_19123 = state_17658__$1;
(statearr_17662_19123[(2)] = null);

(statearr_17662_19123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17659 === (24))){
var inst_17635 = (state_17658[(7)]);
var inst_17644 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17635);
var state_17658__$1 = state_17658;
var statearr_17663_19124 = state_17658__$1;
(statearr_17663_19124[(2)] = inst_17644);

(statearr_17663_19124[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17659 === (4))){
var inst_17578 = (state_17658[(8)]);
var inst_17578__$1 = (state_17658[(2)]);
var inst_17579 = (inst_17578__$1 == null);
var state_17658__$1 = (function (){var statearr_17664 = state_17658;
(statearr_17664[(8)] = inst_17578__$1);

return statearr_17664;
})();
if(cljs.core.truth_(inst_17579)){
var statearr_17665_19125 = state_17658__$1;
(statearr_17665_19125[(1)] = (5));

} else {
var statearr_17666_19126 = state_17658__$1;
(statearr_17666_19126[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17659 === (15))){
var inst_17629 = (state_17658[(2)]);
var state_17658__$1 = state_17658;
var statearr_17667_19127 = state_17658__$1;
(statearr_17667_19127[(2)] = inst_17629);

(statearr_17667_19127[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17659 === (21))){
var inst_17649 = (state_17658[(2)]);
var state_17658__$1 = (function (){var statearr_17668 = state_17658;
(statearr_17668[(9)] = inst_17649);

return statearr_17668;
})();
var statearr_17669_19133 = state_17658__$1;
(statearr_17669_19133[(2)] = null);

(statearr_17669_19133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17659 === (13))){
var inst_17606 = (state_17658[(10)]);
var inst_17608 = cljs.core.chunked_seq_QMARK_(inst_17606);
var state_17658__$1 = state_17658;
if(inst_17608){
var statearr_17670_19134 = state_17658__$1;
(statearr_17670_19134[(1)] = (16));

} else {
var statearr_17671_19135 = state_17658__$1;
(statearr_17671_19135[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17659 === (22))){
var inst_17641 = (state_17658[(2)]);
var state_17658__$1 = state_17658;
if(cljs.core.truth_(inst_17641)){
var statearr_17672_19136 = state_17658__$1;
(statearr_17672_19136[(1)] = (23));

} else {
var statearr_17674_19137 = state_17658__$1;
(statearr_17674_19137[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17659 === (6))){
var inst_17637 = (state_17658[(11)]);
var inst_17578 = (state_17658[(8)]);
var inst_17635 = (state_17658[(7)]);
var inst_17635__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17578) : topic_fn.call(null,inst_17578));
var inst_17636 = cljs.core.deref(mults);
var inst_17637__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17636,inst_17635__$1);
var state_17658__$1 = (function (){var statearr_17675 = state_17658;
(statearr_17675[(11)] = inst_17637__$1);

(statearr_17675[(7)] = inst_17635__$1);

return statearr_17675;
})();
if(cljs.core.truth_(inst_17637__$1)){
var statearr_17676_19138 = state_17658__$1;
(statearr_17676_19138[(1)] = (19));

} else {
var statearr_17677_19139 = state_17658__$1;
(statearr_17677_19139[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17659 === (25))){
var inst_17646 = (state_17658[(2)]);
var state_17658__$1 = state_17658;
var statearr_17678_19141 = state_17658__$1;
(statearr_17678_19141[(2)] = inst_17646);

(statearr_17678_19141[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17659 === (17))){
var inst_17606 = (state_17658[(10)]);
var inst_17615 = cljs.core.first(inst_17606);
var inst_17616 = cljs.core.async.muxch_STAR_(inst_17615);
var inst_17617 = cljs.core.async.close_BANG_(inst_17616);
var inst_17618 = cljs.core.next(inst_17606);
var inst_17588 = inst_17618;
var inst_17589 = null;
var inst_17590 = (0);
var inst_17591 = (0);
var state_17658__$1 = (function (){var statearr_17679 = state_17658;
(statearr_17679[(12)] = inst_17588);

(statearr_17679[(13)] = inst_17591);

(statearr_17679[(14)] = inst_17589);

(statearr_17679[(15)] = inst_17617);

(statearr_17679[(16)] = inst_17590);

return statearr_17679;
})();
var statearr_17680_19143 = state_17658__$1;
(statearr_17680_19143[(2)] = null);

(statearr_17680_19143[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17659 === (3))){
var inst_17654 = (state_17658[(2)]);
var state_17658__$1 = state_17658;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17658__$1,inst_17654);
} else {
if((state_val_17659 === (12))){
var inst_17631 = (state_17658[(2)]);
var state_17658__$1 = state_17658;
var statearr_17681_19147 = state_17658__$1;
(statearr_17681_19147[(2)] = inst_17631);

(statearr_17681_19147[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17659 === (2))){
var state_17658__$1 = state_17658;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17658__$1,(4),ch);
} else {
if((state_val_17659 === (23))){
var state_17658__$1 = state_17658;
var statearr_17682_19152 = state_17658__$1;
(statearr_17682_19152[(2)] = null);

(statearr_17682_19152[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17659 === (19))){
var inst_17637 = (state_17658[(11)]);
var inst_17578 = (state_17658[(8)]);
var inst_17639 = cljs.core.async.muxch_STAR_(inst_17637);
var state_17658__$1 = state_17658;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17658__$1,(22),inst_17639,inst_17578);
} else {
if((state_val_17659 === (11))){
var inst_17588 = (state_17658[(12)]);
var inst_17606 = (state_17658[(10)]);
var inst_17606__$1 = cljs.core.seq(inst_17588);
var state_17658__$1 = (function (){var statearr_17683 = state_17658;
(statearr_17683[(10)] = inst_17606__$1);

return statearr_17683;
})();
if(inst_17606__$1){
var statearr_17684_19155 = state_17658__$1;
(statearr_17684_19155[(1)] = (13));

} else {
var statearr_17685_19156 = state_17658__$1;
(statearr_17685_19156[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17659 === (9))){
var inst_17633 = (state_17658[(2)]);
var state_17658__$1 = state_17658;
var statearr_17686_19158 = state_17658__$1;
(statearr_17686_19158[(2)] = inst_17633);

(statearr_17686_19158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17659 === (5))){
var inst_17585 = cljs.core.deref(mults);
var inst_17586 = cljs.core.vals(inst_17585);
var inst_17587 = cljs.core.seq(inst_17586);
var inst_17588 = inst_17587;
var inst_17589 = null;
var inst_17590 = (0);
var inst_17591 = (0);
var state_17658__$1 = (function (){var statearr_17687 = state_17658;
(statearr_17687[(12)] = inst_17588);

(statearr_17687[(13)] = inst_17591);

(statearr_17687[(14)] = inst_17589);

(statearr_17687[(16)] = inst_17590);

return statearr_17687;
})();
var statearr_17688_19162 = state_17658__$1;
(statearr_17688_19162[(2)] = null);

(statearr_17688_19162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17659 === (14))){
var state_17658__$1 = state_17658;
var statearr_17692_19163 = state_17658__$1;
(statearr_17692_19163[(2)] = null);

(statearr_17692_19163[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17659 === (16))){
var inst_17606 = (state_17658[(10)]);
var inst_17610 = cljs.core.chunk_first(inst_17606);
var inst_17611 = cljs.core.chunk_rest(inst_17606);
var inst_17612 = cljs.core.count(inst_17610);
var inst_17588 = inst_17611;
var inst_17589 = inst_17610;
var inst_17590 = inst_17612;
var inst_17591 = (0);
var state_17658__$1 = (function (){var statearr_17693 = state_17658;
(statearr_17693[(12)] = inst_17588);

(statearr_17693[(13)] = inst_17591);

(statearr_17693[(14)] = inst_17589);

(statearr_17693[(16)] = inst_17590);

return statearr_17693;
})();
var statearr_17694_19165 = state_17658__$1;
(statearr_17694_19165[(2)] = null);

(statearr_17694_19165[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17659 === (10))){
var inst_17588 = (state_17658[(12)]);
var inst_17591 = (state_17658[(13)]);
var inst_17589 = (state_17658[(14)]);
var inst_17590 = (state_17658[(16)]);
var inst_17596 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17589,inst_17591);
var inst_17597 = cljs.core.async.muxch_STAR_(inst_17596);
var inst_17598 = cljs.core.async.close_BANG_(inst_17597);
var inst_17599 = (inst_17591 + (1));
var tmp17689 = inst_17588;
var tmp17690 = inst_17589;
var tmp17691 = inst_17590;
var inst_17588__$1 = tmp17689;
var inst_17589__$1 = tmp17690;
var inst_17590__$1 = tmp17691;
var inst_17591__$1 = inst_17599;
var state_17658__$1 = (function (){var statearr_17698 = state_17658;
(statearr_17698[(17)] = inst_17598);

(statearr_17698[(12)] = inst_17588__$1);

(statearr_17698[(13)] = inst_17591__$1);

(statearr_17698[(14)] = inst_17589__$1);

(statearr_17698[(16)] = inst_17590__$1);

return statearr_17698;
})();
var statearr_17703_19166 = state_17658__$1;
(statearr_17703_19166[(2)] = null);

(statearr_17703_19166[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17659 === (18))){
var inst_17626 = (state_17658[(2)]);
var state_17658__$1 = state_17658;
var statearr_17707_19167 = state_17658__$1;
(statearr_17707_19167[(2)] = inst_17626);

(statearr_17707_19167[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17659 === (8))){
var inst_17591 = (state_17658[(13)]);
var inst_17590 = (state_17658[(16)]);
var inst_17593 = (inst_17591 < inst_17590);
var inst_17594 = inst_17593;
var state_17658__$1 = state_17658;
if(cljs.core.truth_(inst_17594)){
var statearr_17708_19168 = state_17658__$1;
(statearr_17708_19168[(1)] = (10));

} else {
var statearr_17709_19169 = state_17658__$1;
(statearr_17709_19169[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16465__auto___19117,mults,ensure_mult,p))
;
return ((function (switch__16281__auto__,c__16465__auto___19117,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__16282__auto__ = null;
var cljs$core$async$state_machine__16282__auto____0 = (function (){
var statearr_17710 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17710[(0)] = cljs$core$async$state_machine__16282__auto__);

(statearr_17710[(1)] = (1));

return statearr_17710;
});
var cljs$core$async$state_machine__16282__auto____1 = (function (state_17658){
while(true){
var ret_value__16283__auto__ = (function (){try{while(true){
var result__16284__auto__ = switch__16281__auto__(state_17658);
if(cljs.core.keyword_identical_QMARK_(result__16284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16284__auto__;
}
break;
}
}catch (e17711){if((e17711 instanceof Object)){
var ex__16285__auto__ = e17711;
var statearr_17712_19170 = state_17658;
(statearr_17712_19170[(5)] = ex__16285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17711;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19171 = state_17658;
state_17658 = G__19171;
continue;
} else {
return ret_value__16283__auto__;
}
break;
}
});
cljs$core$async$state_machine__16282__auto__ = function(state_17658){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16282__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16282__auto____1.call(this,state_17658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16282__auto____0;
cljs$core$async$state_machine__16282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16282__auto____1;
return cljs$core$async$state_machine__16282__auto__;
})()
;})(switch__16281__auto__,c__16465__auto___19117,mults,ensure_mult,p))
})();
var state__16467__auto__ = (function (){var statearr_17713 = (f__16466__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16466__auto__.cljs$core$IFn$_invoke$arity$0() : f__16466__auto__.call(null));
(statearr_17713[(6)] = c__16465__auto___19117);

return statearr_17713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16467__auto__);
});})(c__16465__auto___19117,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__17715 = arguments.length;
switch (G__17715) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__17717 = arguments.length;
switch (G__17717) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__17719 = arguments.length;
switch (G__17719) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__16465__auto___19176 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16465__auto___19176,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16466__auto__ = (function (){var switch__16281__auto__ = ((function (c__16465__auto___19176,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17762){
var state_val_17763 = (state_17762[(1)]);
if((state_val_17763 === (7))){
var state_17762__$1 = state_17762;
var statearr_17764_19177 = state_17762__$1;
(statearr_17764_19177[(2)] = null);

(statearr_17764_19177[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17763 === (1))){
var state_17762__$1 = state_17762;
var statearr_17765_19179 = state_17762__$1;
(statearr_17765_19179[(2)] = null);

(statearr_17765_19179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17763 === (4))){
var inst_17722 = (state_17762[(7)]);
var inst_17725 = (inst_17722 < cnt);
var state_17762__$1 = state_17762;
if(cljs.core.truth_(inst_17725)){
var statearr_17769_19180 = state_17762__$1;
(statearr_17769_19180[(1)] = (6));

} else {
var statearr_17770_19181 = state_17762__$1;
(statearr_17770_19181[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17763 === (15))){
var inst_17758 = (state_17762[(2)]);
var state_17762__$1 = state_17762;
var statearr_17771_19182 = state_17762__$1;
(statearr_17771_19182[(2)] = inst_17758);

(statearr_17771_19182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17763 === (13))){
var inst_17751 = cljs.core.async.close_BANG_(out);
var state_17762__$1 = state_17762;
var statearr_17772_19183 = state_17762__$1;
(statearr_17772_19183[(2)] = inst_17751);

(statearr_17772_19183[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17763 === (6))){
var state_17762__$1 = state_17762;
var statearr_17773_19184 = state_17762__$1;
(statearr_17773_19184[(2)] = null);

(statearr_17773_19184[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17763 === (3))){
var inst_17760 = (state_17762[(2)]);
var state_17762__$1 = state_17762;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17762__$1,inst_17760);
} else {
if((state_val_17763 === (12))){
var inst_17748 = (state_17762[(8)]);
var inst_17748__$1 = (state_17762[(2)]);
var inst_17749 = cljs.core.some(cljs.core.nil_QMARK_,inst_17748__$1);
var state_17762__$1 = (function (){var statearr_17777 = state_17762;
(statearr_17777[(8)] = inst_17748__$1);

return statearr_17777;
})();
if(cljs.core.truth_(inst_17749)){
var statearr_17780_19186 = state_17762__$1;
(statearr_17780_19186[(1)] = (13));

} else {
var statearr_17781_19187 = state_17762__$1;
(statearr_17781_19187[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17763 === (2))){
var inst_17721 = cljs.core.reset_BANG_(dctr,cnt);
var inst_17722 = (0);
var state_17762__$1 = (function (){var statearr_17785 = state_17762;
(statearr_17785[(7)] = inst_17722);

(statearr_17785[(9)] = inst_17721);

return statearr_17785;
})();
var statearr_17786_19188 = state_17762__$1;
(statearr_17786_19188[(2)] = null);

(statearr_17786_19188[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17763 === (11))){
var inst_17722 = (state_17762[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_17762,(10),Object,null,(9));
var inst_17735 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17722) : chs__$1.call(null,inst_17722));
var inst_17736 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17722) : done.call(null,inst_17722));
var inst_17737 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17735,inst_17736);
var state_17762__$1 = state_17762;
var statearr_17793_19190 = state_17762__$1;
(statearr_17793_19190[(2)] = inst_17737);


cljs.core.async.impl.ioc_helpers.process_exception(state_17762__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17763 === (9))){
var inst_17722 = (state_17762[(7)]);
var inst_17739 = (state_17762[(2)]);
var inst_17740 = (inst_17722 + (1));
var inst_17722__$1 = inst_17740;
var state_17762__$1 = (function (){var statearr_17797 = state_17762;
(statearr_17797[(10)] = inst_17739);

(statearr_17797[(7)] = inst_17722__$1);

return statearr_17797;
})();
var statearr_17798_19191 = state_17762__$1;
(statearr_17798_19191[(2)] = null);

(statearr_17798_19191[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17763 === (5))){
var inst_17746 = (state_17762[(2)]);
var state_17762__$1 = (function (){var statearr_17805 = state_17762;
(statearr_17805[(11)] = inst_17746);

return statearr_17805;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17762__$1,(12),dchan);
} else {
if((state_val_17763 === (14))){
var inst_17748 = (state_17762[(8)]);
var inst_17753 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17748);
var state_17762__$1 = state_17762;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17762__$1,(16),out,inst_17753);
} else {
if((state_val_17763 === (16))){
var inst_17755 = (state_17762[(2)]);
var state_17762__$1 = (function (){var statearr_17809 = state_17762;
(statearr_17809[(12)] = inst_17755);

return statearr_17809;
})();
var statearr_17810_19193 = state_17762__$1;
(statearr_17810_19193[(2)] = null);

(statearr_17810_19193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17763 === (10))){
var inst_17730 = (state_17762[(2)]);
var inst_17731 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17762__$1 = (function (){var statearr_17817 = state_17762;
(statearr_17817[(13)] = inst_17730);

return statearr_17817;
})();
var statearr_17818_19194 = state_17762__$1;
(statearr_17818_19194[(2)] = inst_17731);


cljs.core.async.impl.ioc_helpers.process_exception(state_17762__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17763 === (8))){
var inst_17744 = (state_17762[(2)]);
var state_17762__$1 = state_17762;
var statearr_17820_19195 = state_17762__$1;
(statearr_17820_19195[(2)] = inst_17744);

(statearr_17820_19195[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16465__auto___19176,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__16281__auto__,c__16465__auto___19176,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__16282__auto__ = null;
var cljs$core$async$state_machine__16282__auto____0 = (function (){
var statearr_17826 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17826[(0)] = cljs$core$async$state_machine__16282__auto__);

(statearr_17826[(1)] = (1));

return statearr_17826;
});
var cljs$core$async$state_machine__16282__auto____1 = (function (state_17762){
while(true){
var ret_value__16283__auto__ = (function (){try{while(true){
var result__16284__auto__ = switch__16281__auto__(state_17762);
if(cljs.core.keyword_identical_QMARK_(result__16284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16284__auto__;
}
break;
}
}catch (e17827){if((e17827 instanceof Object)){
var ex__16285__auto__ = e17827;
var statearr_17831_19196 = state_17762;
(statearr_17831_19196[(5)] = ex__16285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17827;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19197 = state_17762;
state_17762 = G__19197;
continue;
} else {
return ret_value__16283__auto__;
}
break;
}
});
cljs$core$async$state_machine__16282__auto__ = function(state_17762){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16282__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16282__auto____1.call(this,state_17762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16282__auto____0;
cljs$core$async$state_machine__16282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16282__auto____1;
return cljs$core$async$state_machine__16282__auto__;
})()
;})(switch__16281__auto__,c__16465__auto___19176,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16467__auto__ = (function (){var statearr_17839 = (f__16466__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16466__auto__.cljs$core$IFn$_invoke$arity$0() : f__16466__auto__.call(null));
(statearr_17839[(6)] = c__16465__auto___19176);

return statearr_17839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16467__auto__);
});})(c__16465__auto___19176,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__17844 = arguments.length;
switch (G__17844) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16465__auto___19200 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16465__auto___19200,out){
return (function (){
var f__16466__auto__ = (function (){var switch__16281__auto__ = ((function (c__16465__auto___19200,out){
return (function (state_17877){
var state_val_17878 = (state_17877[(1)]);
if((state_val_17878 === (7))){
var inst_17856 = (state_17877[(7)]);
var inst_17855 = (state_17877[(8)]);
var inst_17855__$1 = (state_17877[(2)]);
var inst_17856__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17855__$1,(0),null);
var inst_17857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17855__$1,(1),null);
var inst_17858 = (inst_17856__$1 == null);
var state_17877__$1 = (function (){var statearr_17879 = state_17877;
(statearr_17879[(7)] = inst_17856__$1);

(statearr_17879[(8)] = inst_17855__$1);

(statearr_17879[(9)] = inst_17857);

return statearr_17879;
})();
if(cljs.core.truth_(inst_17858)){
var statearr_17880_19201 = state_17877__$1;
(statearr_17880_19201[(1)] = (8));

} else {
var statearr_17881_19202 = state_17877__$1;
(statearr_17881_19202[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17878 === (1))){
var inst_17845 = cljs.core.vec(chs);
var inst_17846 = inst_17845;
var state_17877__$1 = (function (){var statearr_17888 = state_17877;
(statearr_17888[(10)] = inst_17846);

return statearr_17888;
})();
var statearr_17889_19203 = state_17877__$1;
(statearr_17889_19203[(2)] = null);

(statearr_17889_19203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17878 === (4))){
var inst_17846 = (state_17877[(10)]);
var state_17877__$1 = state_17877;
return cljs.core.async.ioc_alts_BANG_(state_17877__$1,(7),inst_17846);
} else {
if((state_val_17878 === (6))){
var inst_17872 = (state_17877[(2)]);
var state_17877__$1 = state_17877;
var statearr_17896_19204 = state_17877__$1;
(statearr_17896_19204[(2)] = inst_17872);

(statearr_17896_19204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17878 === (3))){
var inst_17874 = (state_17877[(2)]);
var state_17877__$1 = state_17877;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17877__$1,inst_17874);
} else {
if((state_val_17878 === (2))){
var inst_17846 = (state_17877[(10)]);
var inst_17848 = cljs.core.count(inst_17846);
var inst_17849 = (inst_17848 > (0));
var state_17877__$1 = state_17877;
if(cljs.core.truth_(inst_17849)){
var statearr_17910_19206 = state_17877__$1;
(statearr_17910_19206[(1)] = (4));

} else {
var statearr_17911_19208 = state_17877__$1;
(statearr_17911_19208[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17878 === (11))){
var inst_17846 = (state_17877[(10)]);
var inst_17865 = (state_17877[(2)]);
var tmp17903 = inst_17846;
var inst_17846__$1 = tmp17903;
var state_17877__$1 = (function (){var statearr_17924 = state_17877;
(statearr_17924[(10)] = inst_17846__$1);

(statearr_17924[(11)] = inst_17865);

return statearr_17924;
})();
var statearr_17929_19209 = state_17877__$1;
(statearr_17929_19209[(2)] = null);

(statearr_17929_19209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17878 === (9))){
var inst_17856 = (state_17877[(7)]);
var state_17877__$1 = state_17877;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17877__$1,(11),out,inst_17856);
} else {
if((state_val_17878 === (5))){
var inst_17870 = cljs.core.async.close_BANG_(out);
var state_17877__$1 = state_17877;
var statearr_17934_19210 = state_17877__$1;
(statearr_17934_19210[(2)] = inst_17870);

(statearr_17934_19210[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17878 === (10))){
var inst_17868 = (state_17877[(2)]);
var state_17877__$1 = state_17877;
var statearr_17935_19211 = state_17877__$1;
(statearr_17935_19211[(2)] = inst_17868);

(statearr_17935_19211[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17878 === (8))){
var inst_17856 = (state_17877[(7)]);
var inst_17846 = (state_17877[(10)]);
var inst_17855 = (state_17877[(8)]);
var inst_17857 = (state_17877[(9)]);
var inst_17860 = (function (){var cs = inst_17846;
var vec__17851 = inst_17855;
var v = inst_17856;
var c = inst_17857;
return ((function (cs,vec__17851,v,c,inst_17856,inst_17846,inst_17855,inst_17857,state_val_17878,c__16465__auto___19200,out){
return (function (p1__17841_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17841_SHARP_);
});
;})(cs,vec__17851,v,c,inst_17856,inst_17846,inst_17855,inst_17857,state_val_17878,c__16465__auto___19200,out))
})();
var inst_17861 = cljs.core.filterv(inst_17860,inst_17846);
var inst_17846__$1 = inst_17861;
var state_17877__$1 = (function (){var statearr_17936 = state_17877;
(statearr_17936[(10)] = inst_17846__$1);

return statearr_17936;
})();
var statearr_17937_19216 = state_17877__$1;
(statearr_17937_19216[(2)] = null);

(statearr_17937_19216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16465__auto___19200,out))
;
return ((function (switch__16281__auto__,c__16465__auto___19200,out){
return (function() {
var cljs$core$async$state_machine__16282__auto__ = null;
var cljs$core$async$state_machine__16282__auto____0 = (function (){
var statearr_17938 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17938[(0)] = cljs$core$async$state_machine__16282__auto__);

(statearr_17938[(1)] = (1));

return statearr_17938;
});
var cljs$core$async$state_machine__16282__auto____1 = (function (state_17877){
while(true){
var ret_value__16283__auto__ = (function (){try{while(true){
var result__16284__auto__ = switch__16281__auto__(state_17877);
if(cljs.core.keyword_identical_QMARK_(result__16284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16284__auto__;
}
break;
}
}catch (e17939){if((e17939 instanceof Object)){
var ex__16285__auto__ = e17939;
var statearr_17940_19221 = state_17877;
(statearr_17940_19221[(5)] = ex__16285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17939;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19226 = state_17877;
state_17877 = G__19226;
continue;
} else {
return ret_value__16283__auto__;
}
break;
}
});
cljs$core$async$state_machine__16282__auto__ = function(state_17877){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16282__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16282__auto____1.call(this,state_17877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16282__auto____0;
cljs$core$async$state_machine__16282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16282__auto____1;
return cljs$core$async$state_machine__16282__auto__;
})()
;})(switch__16281__auto__,c__16465__auto___19200,out))
})();
var state__16467__auto__ = (function (){var statearr_17941 = (f__16466__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16466__auto__.cljs$core$IFn$_invoke$arity$0() : f__16466__auto__.call(null));
(statearr_17941[(6)] = c__16465__auto___19200);

return statearr_17941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16467__auto__);
});})(c__16465__auto___19200,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__17943 = arguments.length;
switch (G__17943) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16465__auto___19232 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16465__auto___19232,out){
return (function (){
var f__16466__auto__ = (function (){var switch__16281__auto__ = ((function (c__16465__auto___19232,out){
return (function (state_17969){
var state_val_17970 = (state_17969[(1)]);
if((state_val_17970 === (7))){
var inst_17951 = (state_17969[(7)]);
var inst_17951__$1 = (state_17969[(2)]);
var inst_17952 = (inst_17951__$1 == null);
var inst_17953 = cljs.core.not(inst_17952);
var state_17969__$1 = (function (){var statearr_17971 = state_17969;
(statearr_17971[(7)] = inst_17951__$1);

return statearr_17971;
})();
if(inst_17953){
var statearr_17972_19238 = state_17969__$1;
(statearr_17972_19238[(1)] = (8));

} else {
var statearr_17973_19239 = state_17969__$1;
(statearr_17973_19239[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17970 === (1))){
var inst_17946 = (0);
var state_17969__$1 = (function (){var statearr_17974 = state_17969;
(statearr_17974[(8)] = inst_17946);

return statearr_17974;
})();
var statearr_17975_19241 = state_17969__$1;
(statearr_17975_19241[(2)] = null);

(statearr_17975_19241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17970 === (4))){
var state_17969__$1 = state_17969;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17969__$1,(7),ch);
} else {
if((state_val_17970 === (6))){
var inst_17964 = (state_17969[(2)]);
var state_17969__$1 = state_17969;
var statearr_17976_19242 = state_17969__$1;
(statearr_17976_19242[(2)] = inst_17964);

(statearr_17976_19242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17970 === (3))){
var inst_17966 = (state_17969[(2)]);
var inst_17967 = cljs.core.async.close_BANG_(out);
var state_17969__$1 = (function (){var statearr_17981 = state_17969;
(statearr_17981[(9)] = inst_17966);

return statearr_17981;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17969__$1,inst_17967);
} else {
if((state_val_17970 === (2))){
var inst_17946 = (state_17969[(8)]);
var inst_17948 = (inst_17946 < n);
var state_17969__$1 = state_17969;
if(cljs.core.truth_(inst_17948)){
var statearr_17982_19244 = state_17969__$1;
(statearr_17982_19244[(1)] = (4));

} else {
var statearr_17985_19245 = state_17969__$1;
(statearr_17985_19245[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17970 === (11))){
var inst_17946 = (state_17969[(8)]);
var inst_17956 = (state_17969[(2)]);
var inst_17957 = (inst_17946 + (1));
var inst_17946__$1 = inst_17957;
var state_17969__$1 = (function (){var statearr_17986 = state_17969;
(statearr_17986[(8)] = inst_17946__$1);

(statearr_17986[(10)] = inst_17956);

return statearr_17986;
})();
var statearr_17987_19247 = state_17969__$1;
(statearr_17987_19247[(2)] = null);

(statearr_17987_19247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17970 === (9))){
var state_17969__$1 = state_17969;
var statearr_17990_19249 = state_17969__$1;
(statearr_17990_19249[(2)] = null);

(statearr_17990_19249[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17970 === (5))){
var state_17969__$1 = state_17969;
var statearr_17993_19250 = state_17969__$1;
(statearr_17993_19250[(2)] = null);

(statearr_17993_19250[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17970 === (10))){
var inst_17961 = (state_17969[(2)]);
var state_17969__$1 = state_17969;
var statearr_17996_19251 = state_17969__$1;
(statearr_17996_19251[(2)] = inst_17961);

(statearr_17996_19251[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17970 === (8))){
var inst_17951 = (state_17969[(7)]);
var state_17969__$1 = state_17969;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17969__$1,(11),out,inst_17951);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16465__auto___19232,out))
;
return ((function (switch__16281__auto__,c__16465__auto___19232,out){
return (function() {
var cljs$core$async$state_machine__16282__auto__ = null;
var cljs$core$async$state_machine__16282__auto____0 = (function (){
var statearr_17997 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17997[(0)] = cljs$core$async$state_machine__16282__auto__);

(statearr_17997[(1)] = (1));

return statearr_17997;
});
var cljs$core$async$state_machine__16282__auto____1 = (function (state_17969){
while(true){
var ret_value__16283__auto__ = (function (){try{while(true){
var result__16284__auto__ = switch__16281__auto__(state_17969);
if(cljs.core.keyword_identical_QMARK_(result__16284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16284__auto__;
}
break;
}
}catch (e17999){if((e17999 instanceof Object)){
var ex__16285__auto__ = e17999;
var statearr_18000_19256 = state_17969;
(statearr_18000_19256[(5)] = ex__16285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17999;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19261 = state_17969;
state_17969 = G__19261;
continue;
} else {
return ret_value__16283__auto__;
}
break;
}
});
cljs$core$async$state_machine__16282__auto__ = function(state_17969){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16282__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16282__auto____1.call(this,state_17969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16282__auto____0;
cljs$core$async$state_machine__16282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16282__auto____1;
return cljs$core$async$state_machine__16282__auto__;
})()
;})(switch__16281__auto__,c__16465__auto___19232,out))
})();
var state__16467__auto__ = (function (){var statearr_18001 = (f__16466__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16466__auto__.cljs$core$IFn$_invoke$arity$0() : f__16466__auto__.call(null));
(statearr_18001[(6)] = c__16465__auto___19232);

return statearr_18001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16467__auto__);
});})(c__16465__auto___19232,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18005 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18005 = (function (f,ch,meta18006){
this.f = f;
this.ch = ch;
this.meta18006 = meta18006;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18007,meta18006__$1){
var self__ = this;
var _18007__$1 = this;
return (new cljs.core.async.t_cljs$core$async18005(self__.f,self__.ch,meta18006__$1));
});

cljs.core.async.t_cljs$core$async18005.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18007){
var self__ = this;
var _18007__$1 = this;
return self__.meta18006;
});

cljs.core.async.t_cljs$core$async18005.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18005.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18005.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async18005.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18005.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18012 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18012 = (function (f,ch,meta18006,_,fn1,meta18013){
this.f = f;
this.ch = ch;
this.meta18006 = meta18006;
this._ = _;
this.fn1 = fn1;
this.meta18013 = meta18013;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_18014,meta18013__$1){
var self__ = this;
var _18014__$1 = this;
return (new cljs.core.async.t_cljs$core$async18012(self__.f,self__.ch,self__.meta18006,self__._,self__.fn1,meta18013__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async18012.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_18014){
var self__ = this;
var _18014__$1 = this;
return self__.meta18013;
});})(___$1))
;

cljs.core.async.t_cljs$core$async18012.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18012.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18012.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async18012.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__18002_SHARP_){
var G__18021 = (((p1__18002_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__18002_SHARP_) : self__.f.call(null,p1__18002_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__18021) : f1.call(null,G__18021));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async18012.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18006","meta18006",-2022299012,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async18005","cljs.core.async/t_cljs$core$async18005",-54327254,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta18013","meta18013",489928343,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18012.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18012.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18012";

cljs.core.async.t_cljs$core$async18012.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18012");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18012.
 */
cljs.core.async.__GT_t_cljs$core$async18012 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18012(f__$1,ch__$1,meta18006__$1,___$2,fn1__$1,meta18013){
return (new cljs.core.async.t_cljs$core$async18012(f__$1,ch__$1,meta18006__$1,___$2,fn1__$1,meta18013));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async18012(self__.f,self__.ch,self__.meta18006,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__18025 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__18025) : self__.f.call(null,G__18025));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async18005.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18005.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async18005.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18006","meta18006",-2022299012,null)], null);
});

cljs.core.async.t_cljs$core$async18005.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18005.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18005";

cljs.core.async.t_cljs$core$async18005.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18005");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18005.
 */
cljs.core.async.__GT_t_cljs$core$async18005 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18005(f__$1,ch__$1,meta18006){
return (new cljs.core.async.t_cljs$core$async18005(f__$1,ch__$1,meta18006));
});

}

return (new cljs.core.async.t_cljs$core$async18005(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18029 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18029 = (function (f,ch,meta18030){
this.f = f;
this.ch = ch;
this.meta18030 = meta18030;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18029.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18031,meta18030__$1){
var self__ = this;
var _18031__$1 = this;
return (new cljs.core.async.t_cljs$core$async18029(self__.f,self__.ch,meta18030__$1));
});

cljs.core.async.t_cljs$core$async18029.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18031){
var self__ = this;
var _18031__$1 = this;
return self__.meta18030;
});

cljs.core.async.t_cljs$core$async18029.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18029.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18029.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18029.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async18029.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18029.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async18029.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18030","meta18030",1832208939,null)], null);
});

cljs.core.async.t_cljs$core$async18029.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18029.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18029";

cljs.core.async.t_cljs$core$async18029.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18029");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18029.
 */
cljs.core.async.__GT_t_cljs$core$async18029 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async18029(f__$1,ch__$1,meta18030){
return (new cljs.core.async.t_cljs$core$async18029(f__$1,ch__$1,meta18030));
});

}

return (new cljs.core.async.t_cljs$core$async18029(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18036 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18036 = (function (p,ch,meta18037){
this.p = p;
this.ch = ch;
this.meta18037 = meta18037;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18038,meta18037__$1){
var self__ = this;
var _18038__$1 = this;
return (new cljs.core.async.t_cljs$core$async18036(self__.p,self__.ch,meta18037__$1));
});

cljs.core.async.t_cljs$core$async18036.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18038){
var self__ = this;
var _18038__$1 = this;
return self__.meta18037;
});

cljs.core.async.t_cljs$core$async18036.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18036.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18036.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async18036.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18036.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async18036.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18036.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async18036.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18037","meta18037",613595759,null)], null);
});

cljs.core.async.t_cljs$core$async18036.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18036.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18036";

cljs.core.async.t_cljs$core$async18036.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"cljs.core.async/t_cljs$core$async18036");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18036.
 */
cljs.core.async.__GT_t_cljs$core$async18036 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async18036(p__$1,ch__$1,meta18037){
return (new cljs.core.async.t_cljs$core$async18036(p__$1,ch__$1,meta18037));
});

}

return (new cljs.core.async.t_cljs$core$async18036(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__18065 = arguments.length;
switch (G__18065) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16465__auto___19314 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16465__auto___19314,out){
return (function (){
var f__16466__auto__ = (function (){var switch__16281__auto__ = ((function (c__16465__auto___19314,out){
return (function (state_18098){
var state_val_18099 = (state_18098[(1)]);
if((state_val_18099 === (7))){
var inst_18094 = (state_18098[(2)]);
var state_18098__$1 = state_18098;
var statearr_18100_19326 = state_18098__$1;
(statearr_18100_19326[(2)] = inst_18094);

(statearr_18100_19326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18099 === (1))){
var state_18098__$1 = state_18098;
var statearr_18101_19327 = state_18098__$1;
(statearr_18101_19327[(2)] = null);

(statearr_18101_19327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18099 === (4))){
var inst_18071 = (state_18098[(7)]);
var inst_18071__$1 = (state_18098[(2)]);
var inst_18072 = (inst_18071__$1 == null);
var state_18098__$1 = (function (){var statearr_18104 = state_18098;
(statearr_18104[(7)] = inst_18071__$1);

return statearr_18104;
})();
if(cljs.core.truth_(inst_18072)){
var statearr_18105_19358 = state_18098__$1;
(statearr_18105_19358[(1)] = (5));

} else {
var statearr_18107_19360 = state_18098__$1;
(statearr_18107_19360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18099 === (6))){
var inst_18071 = (state_18098[(7)]);
var inst_18077 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18071) : p.call(null,inst_18071));
var state_18098__$1 = state_18098;
if(cljs.core.truth_(inst_18077)){
var statearr_18111_19365 = state_18098__$1;
(statearr_18111_19365[(1)] = (8));

} else {
var statearr_18112_19366 = state_18098__$1;
(statearr_18112_19366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18099 === (3))){
var inst_18096 = (state_18098[(2)]);
var state_18098__$1 = state_18098;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18098__$1,inst_18096);
} else {
if((state_val_18099 === (2))){
var state_18098__$1 = state_18098;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18098__$1,(4),ch);
} else {
if((state_val_18099 === (11))){
var inst_18088 = (state_18098[(2)]);
var state_18098__$1 = state_18098;
var statearr_18117_19401 = state_18098__$1;
(statearr_18117_19401[(2)] = inst_18088);

(statearr_18117_19401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18099 === (9))){
var state_18098__$1 = state_18098;
var statearr_18118_19402 = state_18098__$1;
(statearr_18118_19402[(2)] = null);

(statearr_18118_19402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18099 === (5))){
var inst_18074 = cljs.core.async.close_BANG_(out);
var state_18098__$1 = state_18098;
var statearr_18122_19406 = state_18098__$1;
(statearr_18122_19406[(2)] = inst_18074);

(statearr_18122_19406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18099 === (10))){
var inst_18091 = (state_18098[(2)]);
var state_18098__$1 = (function (){var statearr_18124 = state_18098;
(statearr_18124[(8)] = inst_18091);

return statearr_18124;
})();
var statearr_18126_19411 = state_18098__$1;
(statearr_18126_19411[(2)] = null);

(statearr_18126_19411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18099 === (8))){
var inst_18071 = (state_18098[(7)]);
var state_18098__$1 = state_18098;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18098__$1,(11),out,inst_18071);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16465__auto___19314,out))
;
return ((function (switch__16281__auto__,c__16465__auto___19314,out){
return (function() {
var cljs$core$async$state_machine__16282__auto__ = null;
var cljs$core$async$state_machine__16282__auto____0 = (function (){
var statearr_18132 = [null,null,null,null,null,null,null,null,null];
(statearr_18132[(0)] = cljs$core$async$state_machine__16282__auto__);

(statearr_18132[(1)] = (1));

return statearr_18132;
});
var cljs$core$async$state_machine__16282__auto____1 = (function (state_18098){
while(true){
var ret_value__16283__auto__ = (function (){try{while(true){
var result__16284__auto__ = switch__16281__auto__(state_18098);
if(cljs.core.keyword_identical_QMARK_(result__16284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16284__auto__;
}
break;
}
}catch (e18133){if((e18133 instanceof Object)){
var ex__16285__auto__ = e18133;
var statearr_18135_19412 = state_18098;
(statearr_18135_19412[(5)] = ex__16285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18133;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19413 = state_18098;
state_18098 = G__19413;
continue;
} else {
return ret_value__16283__auto__;
}
break;
}
});
cljs$core$async$state_machine__16282__auto__ = function(state_18098){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16282__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16282__auto____1.call(this,state_18098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16282__auto____0;
cljs$core$async$state_machine__16282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16282__auto____1;
return cljs$core$async$state_machine__16282__auto__;
})()
;})(switch__16281__auto__,c__16465__auto___19314,out))
})();
var state__16467__auto__ = (function (){var statearr_18139 = (f__16466__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16466__auto__.cljs$core$IFn$_invoke$arity$0() : f__16466__auto__.call(null));
(statearr_18139[(6)] = c__16465__auto___19314);

return statearr_18139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16467__auto__);
});})(c__16465__auto___19314,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__18146 = arguments.length;
switch (G__18146) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__16465__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16465__auto__){
return (function (){
var f__16466__auto__ = (function (){var switch__16281__auto__ = ((function (c__16465__auto__){
return (function (state_18226){
var state_val_18227 = (state_18226[(1)]);
if((state_val_18227 === (7))){
var inst_18216 = (state_18226[(2)]);
var state_18226__$1 = state_18226;
var statearr_18232_19434 = state_18226__$1;
(statearr_18232_19434[(2)] = inst_18216);

(statearr_18232_19434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18227 === (20))){
var inst_18182 = (state_18226[(7)]);
var inst_18196 = (state_18226[(2)]);
var inst_18197 = cljs.core.next(inst_18182);
var inst_18168 = inst_18197;
var inst_18169 = null;
var inst_18170 = (0);
var inst_18171 = (0);
var state_18226__$1 = (function (){var statearr_18233 = state_18226;
(statearr_18233[(8)] = inst_18171);

(statearr_18233[(9)] = inst_18169);

(statearr_18233[(10)] = inst_18170);

(statearr_18233[(11)] = inst_18168);

(statearr_18233[(12)] = inst_18196);

return statearr_18233;
})();
var statearr_18236_19454 = state_18226__$1;
(statearr_18236_19454[(2)] = null);

(statearr_18236_19454[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18227 === (1))){
var state_18226__$1 = state_18226;
var statearr_18239_19457 = state_18226__$1;
(statearr_18239_19457[(2)] = null);

(statearr_18239_19457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18227 === (4))){
var inst_18157 = (state_18226[(13)]);
var inst_18157__$1 = (state_18226[(2)]);
var inst_18158 = (inst_18157__$1 == null);
var state_18226__$1 = (function (){var statearr_18242 = state_18226;
(statearr_18242[(13)] = inst_18157__$1);

return statearr_18242;
})();
if(cljs.core.truth_(inst_18158)){
var statearr_18243_19458 = state_18226__$1;
(statearr_18243_19458[(1)] = (5));

} else {
var statearr_18244_19479 = state_18226__$1;
(statearr_18244_19479[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18227 === (15))){
var state_18226__$1 = state_18226;
var statearr_18248_19480 = state_18226__$1;
(statearr_18248_19480[(2)] = null);

(statearr_18248_19480[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18227 === (21))){
var state_18226__$1 = state_18226;
var statearr_18251_19481 = state_18226__$1;
(statearr_18251_19481[(2)] = null);

(statearr_18251_19481[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18227 === (13))){
var inst_18171 = (state_18226[(8)]);
var inst_18169 = (state_18226[(9)]);
var inst_18170 = (state_18226[(10)]);
var inst_18168 = (state_18226[(11)]);
var inst_18178 = (state_18226[(2)]);
var inst_18179 = (inst_18171 + (1));
var tmp18245 = inst_18169;
var tmp18246 = inst_18170;
var tmp18247 = inst_18168;
var inst_18168__$1 = tmp18247;
var inst_18169__$1 = tmp18245;
var inst_18170__$1 = tmp18246;
var inst_18171__$1 = inst_18179;
var state_18226__$1 = (function (){var statearr_18254 = state_18226;
(statearr_18254[(8)] = inst_18171__$1);

(statearr_18254[(9)] = inst_18169__$1);

(statearr_18254[(14)] = inst_18178);

(statearr_18254[(10)] = inst_18170__$1);

(statearr_18254[(11)] = inst_18168__$1);

return statearr_18254;
})();
var statearr_18255_19504 = state_18226__$1;
(statearr_18255_19504[(2)] = null);

(statearr_18255_19504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18227 === (22))){
var state_18226__$1 = state_18226;
var statearr_18258_19505 = state_18226__$1;
(statearr_18258_19505[(2)] = null);

(statearr_18258_19505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18227 === (6))){
var inst_18157 = (state_18226[(13)]);
var inst_18166 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18157) : f.call(null,inst_18157));
var inst_18167 = cljs.core.seq(inst_18166);
var inst_18168 = inst_18167;
var inst_18169 = null;
var inst_18170 = (0);
var inst_18171 = (0);
var state_18226__$1 = (function (){var statearr_18261 = state_18226;
(statearr_18261[(8)] = inst_18171);

(statearr_18261[(9)] = inst_18169);

(statearr_18261[(10)] = inst_18170);

(statearr_18261[(11)] = inst_18168);

return statearr_18261;
})();
var statearr_18264_19517 = state_18226__$1;
(statearr_18264_19517[(2)] = null);

(statearr_18264_19517[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18227 === (17))){
var inst_18182 = (state_18226[(7)]);
var inst_18188 = cljs.core.chunk_first(inst_18182);
var inst_18190 = cljs.core.chunk_rest(inst_18182);
var inst_18191 = cljs.core.count(inst_18188);
var inst_18168 = inst_18190;
var inst_18169 = inst_18188;
var inst_18170 = inst_18191;
var inst_18171 = (0);
var state_18226__$1 = (function (){var statearr_18268 = state_18226;
(statearr_18268[(8)] = inst_18171);

(statearr_18268[(9)] = inst_18169);

(statearr_18268[(10)] = inst_18170);

(statearr_18268[(11)] = inst_18168);

return statearr_18268;
})();
var statearr_18269_19522 = state_18226__$1;
(statearr_18269_19522[(2)] = null);

(statearr_18269_19522[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18227 === (3))){
var inst_18219 = (state_18226[(2)]);
var state_18226__$1 = state_18226;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18226__$1,inst_18219);
} else {
if((state_val_18227 === (12))){
var inst_18206 = (state_18226[(2)]);
var state_18226__$1 = state_18226;
var statearr_18271_19523 = state_18226__$1;
(statearr_18271_19523[(2)] = inst_18206);

(statearr_18271_19523[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18227 === (2))){
var state_18226__$1 = state_18226;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18226__$1,(4),in$);
} else {
if((state_val_18227 === (23))){
var inst_18214 = (state_18226[(2)]);
var state_18226__$1 = state_18226;
var statearr_18276_19524 = state_18226__$1;
(statearr_18276_19524[(2)] = inst_18214);

(statearr_18276_19524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18227 === (19))){
var inst_18201 = (state_18226[(2)]);
var state_18226__$1 = state_18226;
var statearr_18277_19526 = state_18226__$1;
(statearr_18277_19526[(2)] = inst_18201);

(statearr_18277_19526[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18227 === (11))){
var inst_18182 = (state_18226[(7)]);
var inst_18168 = (state_18226[(11)]);
var inst_18182__$1 = cljs.core.seq(inst_18168);
var state_18226__$1 = (function (){var statearr_18282 = state_18226;
(statearr_18282[(7)] = inst_18182__$1);

return statearr_18282;
})();
if(inst_18182__$1){
var statearr_18283_19528 = state_18226__$1;
(statearr_18283_19528[(1)] = (14));

} else {
var statearr_18284_19529 = state_18226__$1;
(statearr_18284_19529[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18227 === (9))){
var inst_18208 = (state_18226[(2)]);
var inst_18209 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_18226__$1 = (function (){var statearr_18289 = state_18226;
(statearr_18289[(15)] = inst_18208);

return statearr_18289;
})();
if(cljs.core.truth_(inst_18209)){
var statearr_18290_19530 = state_18226__$1;
(statearr_18290_19530[(1)] = (21));

} else {
var statearr_18291_19531 = state_18226__$1;
(statearr_18291_19531[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18227 === (5))){
var inst_18160 = cljs.core.async.close_BANG_(out);
var state_18226__$1 = state_18226;
var statearr_18293_19532 = state_18226__$1;
(statearr_18293_19532[(2)] = inst_18160);

(statearr_18293_19532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18227 === (14))){
var inst_18182 = (state_18226[(7)]);
var inst_18184 = cljs.core.chunked_seq_QMARK_(inst_18182);
var state_18226__$1 = state_18226;
if(inst_18184){
var statearr_18298_19533 = state_18226__$1;
(statearr_18298_19533[(1)] = (17));

} else {
var statearr_18299_19534 = state_18226__$1;
(statearr_18299_19534[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18227 === (16))){
var inst_18204 = (state_18226[(2)]);
var state_18226__$1 = state_18226;
var statearr_18302_19535 = state_18226__$1;
(statearr_18302_19535[(2)] = inst_18204);

(statearr_18302_19535[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18227 === (10))){
var inst_18171 = (state_18226[(8)]);
var inst_18169 = (state_18226[(9)]);
var inst_18176 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18169,inst_18171);
var state_18226__$1 = state_18226;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18226__$1,(13),out,inst_18176);
} else {
if((state_val_18227 === (18))){
var inst_18182 = (state_18226[(7)]);
var inst_18194 = cljs.core.first(inst_18182);
var state_18226__$1 = state_18226;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18226__$1,(20),out,inst_18194);
} else {
if((state_val_18227 === (8))){
var inst_18171 = (state_18226[(8)]);
var inst_18170 = (state_18226[(10)]);
var inst_18173 = (inst_18171 < inst_18170);
var inst_18174 = inst_18173;
var state_18226__$1 = state_18226;
if(cljs.core.truth_(inst_18174)){
var statearr_18305_19537 = state_18226__$1;
(statearr_18305_19537[(1)] = (10));

} else {
var statearr_18306_19538 = state_18226__$1;
(statearr_18306_19538[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16465__auto__))
;
return ((function (switch__16281__auto__,c__16465__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__16282__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__16282__auto____0 = (function (){
var statearr_18307 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18307[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__16282__auto__);

(statearr_18307[(1)] = (1));

return statearr_18307;
});
var cljs$core$async$mapcat_STAR__$_state_machine__16282__auto____1 = (function (state_18226){
while(true){
var ret_value__16283__auto__ = (function (){try{while(true){
var result__16284__auto__ = switch__16281__auto__(state_18226);
if(cljs.core.keyword_identical_QMARK_(result__16284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16284__auto__;
}
break;
}
}catch (e18308){if((e18308 instanceof Object)){
var ex__16285__auto__ = e18308;
var statearr_18309_19541 = state_18226;
(statearr_18309_19541[(5)] = ex__16285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18308;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19546 = state_18226;
state_18226 = G__19546;
continue;
} else {
return ret_value__16283__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__16282__auto__ = function(state_18226){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__16282__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__16282__auto____1.call(this,state_18226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__16282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__16282__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__16282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__16282__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__16282__auto__;
})()
;})(switch__16281__auto__,c__16465__auto__))
})();
var state__16467__auto__ = (function (){var statearr_18313 = (f__16466__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16466__auto__.cljs$core$IFn$_invoke$arity$0() : f__16466__auto__.call(null));
(statearr_18313[(6)] = c__16465__auto__);

return statearr_18313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16467__auto__);
});})(c__16465__auto__))
);

return c__16465__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__18317 = arguments.length;
switch (G__18317) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__18323 = arguments.length;
switch (G__18323) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__18326 = arguments.length;
switch (G__18326) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16465__auto___19553 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16465__auto___19553,out){
return (function (){
var f__16466__auto__ = (function (){var switch__16281__auto__ = ((function (c__16465__auto___19553,out){
return (function (state_18350){
var state_val_18351 = (state_18350[(1)]);
if((state_val_18351 === (7))){
var inst_18345 = (state_18350[(2)]);
var state_18350__$1 = state_18350;
var statearr_18352_19555 = state_18350__$1;
(statearr_18352_19555[(2)] = inst_18345);

(statearr_18352_19555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18351 === (1))){
var inst_18327 = null;
var state_18350__$1 = (function (){var statearr_18353 = state_18350;
(statearr_18353[(7)] = inst_18327);

return statearr_18353;
})();
var statearr_18354_19556 = state_18350__$1;
(statearr_18354_19556[(2)] = null);

(statearr_18354_19556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18351 === (4))){
var inst_18330 = (state_18350[(8)]);
var inst_18330__$1 = (state_18350[(2)]);
var inst_18331 = (inst_18330__$1 == null);
var inst_18332 = cljs.core.not(inst_18331);
var state_18350__$1 = (function (){var statearr_18355 = state_18350;
(statearr_18355[(8)] = inst_18330__$1);

return statearr_18355;
})();
if(inst_18332){
var statearr_18356_19557 = state_18350__$1;
(statearr_18356_19557[(1)] = (5));

} else {
var statearr_18357_19558 = state_18350__$1;
(statearr_18357_19558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18351 === (6))){
var state_18350__$1 = state_18350;
var statearr_18359_19559 = state_18350__$1;
(statearr_18359_19559[(2)] = null);

(statearr_18359_19559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18351 === (3))){
var inst_18347 = (state_18350[(2)]);
var inst_18348 = cljs.core.async.close_BANG_(out);
var state_18350__$1 = (function (){var statearr_18360 = state_18350;
(statearr_18360[(9)] = inst_18347);

return statearr_18360;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18350__$1,inst_18348);
} else {
if((state_val_18351 === (2))){
var state_18350__$1 = state_18350;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18350__$1,(4),ch);
} else {
if((state_val_18351 === (11))){
var inst_18330 = (state_18350[(8)]);
var inst_18339 = (state_18350[(2)]);
var inst_18327 = inst_18330;
var state_18350__$1 = (function (){var statearr_18361 = state_18350;
(statearr_18361[(7)] = inst_18327);

(statearr_18361[(10)] = inst_18339);

return statearr_18361;
})();
var statearr_18362_19560 = state_18350__$1;
(statearr_18362_19560[(2)] = null);

(statearr_18362_19560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18351 === (9))){
var inst_18330 = (state_18350[(8)]);
var state_18350__$1 = state_18350;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18350__$1,(11),out,inst_18330);
} else {
if((state_val_18351 === (5))){
var inst_18327 = (state_18350[(7)]);
var inst_18330 = (state_18350[(8)]);
var inst_18334 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18330,inst_18327);
var state_18350__$1 = state_18350;
if(inst_18334){
var statearr_18365_19561 = state_18350__$1;
(statearr_18365_19561[(1)] = (8));

} else {
var statearr_18366_19562 = state_18350__$1;
(statearr_18366_19562[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18351 === (10))){
var inst_18342 = (state_18350[(2)]);
var state_18350__$1 = state_18350;
var statearr_18367_19563 = state_18350__$1;
(statearr_18367_19563[(2)] = inst_18342);

(statearr_18367_19563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18351 === (8))){
var inst_18327 = (state_18350[(7)]);
var tmp18364 = inst_18327;
var inst_18327__$1 = tmp18364;
var state_18350__$1 = (function (){var statearr_18368 = state_18350;
(statearr_18368[(7)] = inst_18327__$1);

return statearr_18368;
})();
var statearr_18369_19564 = state_18350__$1;
(statearr_18369_19564[(2)] = null);

(statearr_18369_19564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16465__auto___19553,out))
;
return ((function (switch__16281__auto__,c__16465__auto___19553,out){
return (function() {
var cljs$core$async$state_machine__16282__auto__ = null;
var cljs$core$async$state_machine__16282__auto____0 = (function (){
var statearr_18370 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18370[(0)] = cljs$core$async$state_machine__16282__auto__);

(statearr_18370[(1)] = (1));

return statearr_18370;
});
var cljs$core$async$state_machine__16282__auto____1 = (function (state_18350){
while(true){
var ret_value__16283__auto__ = (function (){try{while(true){
var result__16284__auto__ = switch__16281__auto__(state_18350);
if(cljs.core.keyword_identical_QMARK_(result__16284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16284__auto__;
}
break;
}
}catch (e18375){if((e18375 instanceof Object)){
var ex__16285__auto__ = e18375;
var statearr_18380_19570 = state_18350;
(statearr_18380_19570[(5)] = ex__16285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18350);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18375;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19571 = state_18350;
state_18350 = G__19571;
continue;
} else {
return ret_value__16283__auto__;
}
break;
}
});
cljs$core$async$state_machine__16282__auto__ = function(state_18350){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16282__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16282__auto____1.call(this,state_18350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16282__auto____0;
cljs$core$async$state_machine__16282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16282__auto____1;
return cljs$core$async$state_machine__16282__auto__;
})()
;})(switch__16281__auto__,c__16465__auto___19553,out))
})();
var state__16467__auto__ = (function (){var statearr_18385 = (f__16466__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16466__auto__.cljs$core$IFn$_invoke$arity$0() : f__16466__auto__.call(null));
(statearr_18385[(6)] = c__16465__auto___19553);

return statearr_18385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16467__auto__);
});})(c__16465__auto___19553,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__18387 = arguments.length;
switch (G__18387) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16465__auto___19575 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16465__auto___19575,out){
return (function (){
var f__16466__auto__ = (function (){var switch__16281__auto__ = ((function (c__16465__auto___19575,out){
return (function (state_18425){
var state_val_18426 = (state_18425[(1)]);
if((state_val_18426 === (7))){
var inst_18421 = (state_18425[(2)]);
var state_18425__$1 = state_18425;
var statearr_18427_19576 = state_18425__$1;
(statearr_18427_19576[(2)] = inst_18421);

(statearr_18427_19576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18426 === (1))){
var inst_18388 = (new Array(n));
var inst_18389 = inst_18388;
var inst_18390 = (0);
var state_18425__$1 = (function (){var statearr_18428 = state_18425;
(statearr_18428[(7)] = inst_18389);

(statearr_18428[(8)] = inst_18390);

return statearr_18428;
})();
var statearr_18429_19577 = state_18425__$1;
(statearr_18429_19577[(2)] = null);

(statearr_18429_19577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18426 === (4))){
var inst_18393 = (state_18425[(9)]);
var inst_18393__$1 = (state_18425[(2)]);
var inst_18394 = (inst_18393__$1 == null);
var inst_18395 = cljs.core.not(inst_18394);
var state_18425__$1 = (function (){var statearr_18430 = state_18425;
(statearr_18430[(9)] = inst_18393__$1);

return statearr_18430;
})();
if(inst_18395){
var statearr_18431_19578 = state_18425__$1;
(statearr_18431_19578[(1)] = (5));

} else {
var statearr_18432_19579 = state_18425__$1;
(statearr_18432_19579[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18426 === (15))){
var inst_18415 = (state_18425[(2)]);
var state_18425__$1 = state_18425;
var statearr_18433_19580 = state_18425__$1;
(statearr_18433_19580[(2)] = inst_18415);

(statearr_18433_19580[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18426 === (13))){
var state_18425__$1 = state_18425;
var statearr_18434_19583 = state_18425__$1;
(statearr_18434_19583[(2)] = null);

(statearr_18434_19583[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18426 === (6))){
var inst_18390 = (state_18425[(8)]);
var inst_18411 = (inst_18390 > (0));
var state_18425__$1 = state_18425;
if(cljs.core.truth_(inst_18411)){
var statearr_18435_19584 = state_18425__$1;
(statearr_18435_19584[(1)] = (12));

} else {
var statearr_18436_19585 = state_18425__$1;
(statearr_18436_19585[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18426 === (3))){
var inst_18423 = (state_18425[(2)]);
var state_18425__$1 = state_18425;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18425__$1,inst_18423);
} else {
if((state_val_18426 === (12))){
var inst_18389 = (state_18425[(7)]);
var inst_18413 = cljs.core.vec(inst_18389);
var state_18425__$1 = state_18425;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18425__$1,(15),out,inst_18413);
} else {
if((state_val_18426 === (2))){
var state_18425__$1 = state_18425;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18425__$1,(4),ch);
} else {
if((state_val_18426 === (11))){
var inst_18405 = (state_18425[(2)]);
var inst_18406 = (new Array(n));
var inst_18389 = inst_18406;
var inst_18390 = (0);
var state_18425__$1 = (function (){var statearr_18437 = state_18425;
(statearr_18437[(7)] = inst_18389);

(statearr_18437[(10)] = inst_18405);

(statearr_18437[(8)] = inst_18390);

return statearr_18437;
})();
var statearr_18438_19588 = state_18425__$1;
(statearr_18438_19588[(2)] = null);

(statearr_18438_19588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18426 === (9))){
var inst_18389 = (state_18425[(7)]);
var inst_18403 = cljs.core.vec(inst_18389);
var state_18425__$1 = state_18425;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18425__$1,(11),out,inst_18403);
} else {
if((state_val_18426 === (5))){
var inst_18389 = (state_18425[(7)]);
var inst_18398 = (state_18425[(11)]);
var inst_18393 = (state_18425[(9)]);
var inst_18390 = (state_18425[(8)]);
var inst_18397 = (inst_18389[inst_18390] = inst_18393);
var inst_18398__$1 = (inst_18390 + (1));
var inst_18399 = (inst_18398__$1 < n);
var state_18425__$1 = (function (){var statearr_18439 = state_18425;
(statearr_18439[(11)] = inst_18398__$1);

(statearr_18439[(12)] = inst_18397);

return statearr_18439;
})();
if(cljs.core.truth_(inst_18399)){
var statearr_18440_19590 = state_18425__$1;
(statearr_18440_19590[(1)] = (8));

} else {
var statearr_18441_19591 = state_18425__$1;
(statearr_18441_19591[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18426 === (14))){
var inst_18418 = (state_18425[(2)]);
var inst_18419 = cljs.core.async.close_BANG_(out);
var state_18425__$1 = (function (){var statearr_18443 = state_18425;
(statearr_18443[(13)] = inst_18418);

return statearr_18443;
})();
var statearr_18444_19592 = state_18425__$1;
(statearr_18444_19592[(2)] = inst_18419);

(statearr_18444_19592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18426 === (10))){
var inst_18409 = (state_18425[(2)]);
var state_18425__$1 = state_18425;
var statearr_18445_19595 = state_18425__$1;
(statearr_18445_19595[(2)] = inst_18409);

(statearr_18445_19595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18426 === (8))){
var inst_18389 = (state_18425[(7)]);
var inst_18398 = (state_18425[(11)]);
var tmp18442 = inst_18389;
var inst_18389__$1 = tmp18442;
var inst_18390 = inst_18398;
var state_18425__$1 = (function (){var statearr_18446 = state_18425;
(statearr_18446[(7)] = inst_18389__$1);

(statearr_18446[(8)] = inst_18390);

return statearr_18446;
})();
var statearr_18447_19598 = state_18425__$1;
(statearr_18447_19598[(2)] = null);

(statearr_18447_19598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16465__auto___19575,out))
;
return ((function (switch__16281__auto__,c__16465__auto___19575,out){
return (function() {
var cljs$core$async$state_machine__16282__auto__ = null;
var cljs$core$async$state_machine__16282__auto____0 = (function (){
var statearr_18448 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18448[(0)] = cljs$core$async$state_machine__16282__auto__);

(statearr_18448[(1)] = (1));

return statearr_18448;
});
var cljs$core$async$state_machine__16282__auto____1 = (function (state_18425){
while(true){
var ret_value__16283__auto__ = (function (){try{while(true){
var result__16284__auto__ = switch__16281__auto__(state_18425);
if(cljs.core.keyword_identical_QMARK_(result__16284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16284__auto__;
}
break;
}
}catch (e18449){if((e18449 instanceof Object)){
var ex__16285__auto__ = e18449;
var statearr_18450_19601 = state_18425;
(statearr_18450_19601[(5)] = ex__16285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18449;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19602 = state_18425;
state_18425 = G__19602;
continue;
} else {
return ret_value__16283__auto__;
}
break;
}
});
cljs$core$async$state_machine__16282__auto__ = function(state_18425){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16282__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16282__auto____1.call(this,state_18425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16282__auto____0;
cljs$core$async$state_machine__16282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16282__auto____1;
return cljs$core$async$state_machine__16282__auto__;
})()
;})(switch__16281__auto__,c__16465__auto___19575,out))
})();
var state__16467__auto__ = (function (){var statearr_18451 = (f__16466__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16466__auto__.cljs$core$IFn$_invoke$arity$0() : f__16466__auto__.call(null));
(statearr_18451[(6)] = c__16465__auto___19575);

return statearr_18451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16467__auto__);
});})(c__16465__auto___19575,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18453 = arguments.length;
switch (G__18453) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16465__auto___19604 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16465__auto___19604,out){
return (function (){
var f__16466__auto__ = (function (){var switch__16281__auto__ = ((function (c__16465__auto___19604,out){
return (function (state_18495){
var state_val_18496 = (state_18495[(1)]);
if((state_val_18496 === (7))){
var inst_18491 = (state_18495[(2)]);
var state_18495__$1 = state_18495;
var statearr_18497_19605 = state_18495__$1;
(statearr_18497_19605[(2)] = inst_18491);

(statearr_18497_19605[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18496 === (1))){
var inst_18454 = [];
var inst_18455 = inst_18454;
var inst_18456 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18495__$1 = (function (){var statearr_18498 = state_18495;
(statearr_18498[(7)] = inst_18456);

(statearr_18498[(8)] = inst_18455);

return statearr_18498;
})();
var statearr_18499_19606 = state_18495__$1;
(statearr_18499_19606[(2)] = null);

(statearr_18499_19606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18496 === (4))){
var inst_18459 = (state_18495[(9)]);
var inst_18459__$1 = (state_18495[(2)]);
var inst_18460 = (inst_18459__$1 == null);
var inst_18461 = cljs.core.not(inst_18460);
var state_18495__$1 = (function (){var statearr_18500 = state_18495;
(statearr_18500[(9)] = inst_18459__$1);

return statearr_18500;
})();
if(inst_18461){
var statearr_18501_19607 = state_18495__$1;
(statearr_18501_19607[(1)] = (5));

} else {
var statearr_18502_19608 = state_18495__$1;
(statearr_18502_19608[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18496 === (15))){
var inst_18485 = (state_18495[(2)]);
var state_18495__$1 = state_18495;
var statearr_18503_19609 = state_18495__$1;
(statearr_18503_19609[(2)] = inst_18485);

(statearr_18503_19609[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18496 === (13))){
var state_18495__$1 = state_18495;
var statearr_18504_19610 = state_18495__$1;
(statearr_18504_19610[(2)] = null);

(statearr_18504_19610[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18496 === (6))){
var inst_18455 = (state_18495[(8)]);
var inst_18480 = inst_18455.length;
var inst_18481 = (inst_18480 > (0));
var state_18495__$1 = state_18495;
if(cljs.core.truth_(inst_18481)){
var statearr_18505_19618 = state_18495__$1;
(statearr_18505_19618[(1)] = (12));

} else {
var statearr_18506_19619 = state_18495__$1;
(statearr_18506_19619[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18496 === (3))){
var inst_18493 = (state_18495[(2)]);
var state_18495__$1 = state_18495;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18495__$1,inst_18493);
} else {
if((state_val_18496 === (12))){
var inst_18455 = (state_18495[(8)]);
var inst_18483 = cljs.core.vec(inst_18455);
var state_18495__$1 = state_18495;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18495__$1,(15),out,inst_18483);
} else {
if((state_val_18496 === (2))){
var state_18495__$1 = state_18495;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18495__$1,(4),ch);
} else {
if((state_val_18496 === (11))){
var inst_18459 = (state_18495[(9)]);
var inst_18463 = (state_18495[(10)]);
var inst_18473 = (state_18495[(2)]);
var inst_18474 = [];
var inst_18475 = inst_18474.push(inst_18459);
var inst_18455 = inst_18474;
var inst_18456 = inst_18463;
var state_18495__$1 = (function (){var statearr_18507 = state_18495;
(statearr_18507[(11)] = inst_18473);

(statearr_18507[(7)] = inst_18456);

(statearr_18507[(12)] = inst_18475);

(statearr_18507[(8)] = inst_18455);

return statearr_18507;
})();
var statearr_18508_19625 = state_18495__$1;
(statearr_18508_19625[(2)] = null);

(statearr_18508_19625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18496 === (9))){
var inst_18455 = (state_18495[(8)]);
var inst_18471 = cljs.core.vec(inst_18455);
var state_18495__$1 = state_18495;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18495__$1,(11),out,inst_18471);
} else {
if((state_val_18496 === (5))){
var inst_18456 = (state_18495[(7)]);
var inst_18459 = (state_18495[(9)]);
var inst_18463 = (state_18495[(10)]);
var inst_18463__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18459) : f.call(null,inst_18459));
var inst_18464 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18463__$1,inst_18456);
var inst_18465 = cljs.core.keyword_identical_QMARK_(inst_18456,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_18466 = ((inst_18464) || (inst_18465));
var state_18495__$1 = (function (){var statearr_18509 = state_18495;
(statearr_18509[(10)] = inst_18463__$1);

return statearr_18509;
})();
if(cljs.core.truth_(inst_18466)){
var statearr_18510_19639 = state_18495__$1;
(statearr_18510_19639[(1)] = (8));

} else {
var statearr_18511_19640 = state_18495__$1;
(statearr_18511_19640[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18496 === (14))){
var inst_18488 = (state_18495[(2)]);
var inst_18489 = cljs.core.async.close_BANG_(out);
var state_18495__$1 = (function (){var statearr_18513 = state_18495;
(statearr_18513[(13)] = inst_18488);

return statearr_18513;
})();
var statearr_18514_19641 = state_18495__$1;
(statearr_18514_19641[(2)] = inst_18489);

(statearr_18514_19641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18496 === (10))){
var inst_18478 = (state_18495[(2)]);
var state_18495__$1 = state_18495;
var statearr_18515_19642 = state_18495__$1;
(statearr_18515_19642[(2)] = inst_18478);

(statearr_18515_19642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18496 === (8))){
var inst_18455 = (state_18495[(8)]);
var inst_18459 = (state_18495[(9)]);
var inst_18463 = (state_18495[(10)]);
var inst_18468 = inst_18455.push(inst_18459);
var tmp18512 = inst_18455;
var inst_18455__$1 = tmp18512;
var inst_18456 = inst_18463;
var state_18495__$1 = (function (){var statearr_18516 = state_18495;
(statearr_18516[(7)] = inst_18456);

(statearr_18516[(8)] = inst_18455__$1);

(statearr_18516[(14)] = inst_18468);

return statearr_18516;
})();
var statearr_18517_19643 = state_18495__$1;
(statearr_18517_19643[(2)] = null);

(statearr_18517_19643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16465__auto___19604,out))
;
return ((function (switch__16281__auto__,c__16465__auto___19604,out){
return (function() {
var cljs$core$async$state_machine__16282__auto__ = null;
var cljs$core$async$state_machine__16282__auto____0 = (function (){
var statearr_18518 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18518[(0)] = cljs$core$async$state_machine__16282__auto__);

(statearr_18518[(1)] = (1));

return statearr_18518;
});
var cljs$core$async$state_machine__16282__auto____1 = (function (state_18495){
while(true){
var ret_value__16283__auto__ = (function (){try{while(true){
var result__16284__auto__ = switch__16281__auto__(state_18495);
if(cljs.core.keyword_identical_QMARK_(result__16284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16284__auto__;
}
break;
}
}catch (e18519){if((e18519 instanceof Object)){
var ex__16285__auto__ = e18519;
var statearr_18520_19662 = state_18495;
(statearr_18520_19662[(5)] = ex__16285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18519;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19663 = state_18495;
state_18495 = G__19663;
continue;
} else {
return ret_value__16283__auto__;
}
break;
}
});
cljs$core$async$state_machine__16282__auto__ = function(state_18495){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16282__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16282__auto____1.call(this,state_18495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16282__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16282__auto____0;
cljs$core$async$state_machine__16282__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16282__auto____1;
return cljs$core$async$state_machine__16282__auto__;
})()
;})(switch__16281__auto__,c__16465__auto___19604,out))
})();
var state__16467__auto__ = (function (){var statearr_18521 = (f__16466__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16466__auto__.cljs$core$IFn$_invoke$arity$0() : f__16466__auto__.call(null));
(statearr_18521[(6)] = c__16465__auto___19604);

return statearr_18521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16467__auto__);
});})(c__16465__auto___19604,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
