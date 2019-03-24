goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31358 = arguments.length;
switch (G__31358) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31363 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31363 = (function (f,blockable,meta31364){
this.f = f;
this.blockable = blockable;
this.meta31364 = meta31364;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31365,meta31364__$1){
var self__ = this;
var _31365__$1 = this;
return (new cljs.core.async.t_cljs$core$async31363(self__.f,self__.blockable,meta31364__$1));
});

cljs.core.async.t_cljs$core$async31363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31365){
var self__ = this;
var _31365__$1 = this;
return self__.meta31364;
});

cljs.core.async.t_cljs$core$async31363.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31363.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31363.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async31363.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31363.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31364","meta31364",-396727719,null)], null);
});

cljs.core.async.t_cljs$core$async31363.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31363.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31363";

cljs.core.async.t_cljs$core$async31363.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31363");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31363.
 */
cljs.core.async.__GT_t_cljs$core$async31363 = (function cljs$core$async$__GT_t_cljs$core$async31363(f__$1,blockable__$1,meta31364){
return (new cljs.core.async.t_cljs$core$async31363(f__$1,blockable__$1,meta31364));
});

}

return (new cljs.core.async.t_cljs$core$async31363(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if((!((buff == null)))){
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
var G__31374 = arguments.length;
switch (G__31374) {
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
var G__31378 = arguments.length;
switch (G__31378) {
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
var G__31380 = arguments.length;
switch (G__31380) {
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
var val_33416 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33416) : fn1.call(null,val_33416));
} else {
cljs.core.async.impl.dispatch.run(((function (val_33416,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33416) : fn1.call(null,val_33416));
});})(val_33416,ret))
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
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__31382 = arguments.length;
switch (G__31382) {
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
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5718__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5718__auto__))
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
var n__4607__auto___33422 = n;
var x_33423 = (0);
while(true){
if((x_33423 < n__4607__auto___33422)){
(a[x_33423] = (0));

var G__33424 = (x_33423 + (1));
x_33423 = G__33424;
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

var G__33425 = (i + (1));
i = G__33425;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31409 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31409 = (function (flag,meta31410){
this.flag = flag;
this.meta31410 = meta31410;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31409.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31411,meta31410__$1){
var self__ = this;
var _31411__$1 = this;
return (new cljs.core.async.t_cljs$core$async31409(self__.flag,meta31410__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31409.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31411){
var self__ = this;
var _31411__$1 = this;
return self__.meta31410;
});})(flag))
;

cljs.core.async.t_cljs$core$async31409.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31409.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31409.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31409.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31409.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31410","meta31410",1822578715,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31409.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31409.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31409";

cljs.core.async.t_cljs$core$async31409.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31409");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31409.
 */
cljs.core.async.__GT_t_cljs$core$async31409 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31409(flag__$1,meta31410){
return (new cljs.core.async.t_cljs$core$async31409(flag__$1,meta31410));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31409(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31413 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31413 = (function (flag,cb,meta31414){
this.flag = flag;
this.cb = cb;
this.meta31414 = meta31414;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31413.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31415,meta31414__$1){
var self__ = this;
var _31415__$1 = this;
return (new cljs.core.async.t_cljs$core$async31413(self__.flag,self__.cb,meta31414__$1));
});

cljs.core.async.t_cljs$core$async31413.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31415){
var self__ = this;
var _31415__$1 = this;
return self__.meta31414;
});

cljs.core.async.t_cljs$core$async31413.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31413.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async31413.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31413.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31413.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31414","meta31414",858955076,null)], null);
});

cljs.core.async.t_cljs$core$async31413.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31413.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31413";

cljs.core.async.t_cljs$core$async31413.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31413");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31413.
 */
cljs.core.async.__GT_t_cljs$core$async31413 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31413(flag__$1,cb__$1,meta31414){
return (new cljs.core.async.t_cljs$core$async31413(flag__$1,cb__$1,meta31414));
});

}

return (new cljs.core.async.t_cljs$core$async31413(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__31416_SHARP_){
var G__31418 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31416_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31418) : fret.call(null,G__31418));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31417_SHARP_){
var G__31419 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31417_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31419) : fret.call(null,G__31419));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33440 = (i + (1));
i = G__33440;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
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
var args__4736__auto__ = [];
var len__4730__auto___33449 = arguments.length;
var i__4731__auto___33450 = (0);
while(true){
if((i__4731__auto___33450 < len__4730__auto___33449)){
args__4736__auto__.push((arguments[i__4731__auto___33450]));

var G__33451 = (i__4731__auto___33450 + (1));
i__4731__auto___33450 = G__33451;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31422){
var map__31423 = p__31422;
var map__31423__$1 = (((((!((map__31423 == null))))?(((((map__31423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31423):map__31423);
var opts = map__31423__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31420){
var G__31421 = cljs.core.first(seq31420);
var seq31420__$1 = cljs.core.next(seq31420);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31421,seq31420__$1);
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
var G__31426 = arguments.length;
switch (G__31426) {
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
var c__31279__auto___33470 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31279__auto___33470){
return (function (){
var f__31280__auto__ = (function (){var switch__31054__auto__ = ((function (c__31279__auto___33470){
return (function (state_31458){
var state_val_31459 = (state_31458[(1)]);
if((state_val_31459 === (7))){
var inst_31454 = (state_31458[(2)]);
var state_31458__$1 = state_31458;
var statearr_31463_33475 = state_31458__$1;
(statearr_31463_33475[(2)] = inst_31454);

(statearr_31463_33475[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (1))){
var state_31458__$1 = state_31458;
var statearr_31465_33476 = state_31458__$1;
(statearr_31465_33476[(2)] = null);

(statearr_31465_33476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (4))){
var inst_31437 = (state_31458[(7)]);
var inst_31437__$1 = (state_31458[(2)]);
var inst_31438 = (inst_31437__$1 == null);
var state_31458__$1 = (function (){var statearr_31467 = state_31458;
(statearr_31467[(7)] = inst_31437__$1);

return statearr_31467;
})();
if(cljs.core.truth_(inst_31438)){
var statearr_31468_33480 = state_31458__$1;
(statearr_31468_33480[(1)] = (5));

} else {
var statearr_31469_33481 = state_31458__$1;
(statearr_31469_33481[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (13))){
var state_31458__$1 = state_31458;
var statearr_31478_33483 = state_31458__$1;
(statearr_31478_33483[(2)] = null);

(statearr_31478_33483[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (6))){
var inst_31437 = (state_31458[(7)]);
var state_31458__$1 = state_31458;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31458__$1,(11),to,inst_31437);
} else {
if((state_val_31459 === (3))){
var inst_31456 = (state_31458[(2)]);
var state_31458__$1 = state_31458;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31458__$1,inst_31456);
} else {
if((state_val_31459 === (12))){
var state_31458__$1 = state_31458;
var statearr_31482_33484 = state_31458__$1;
(statearr_31482_33484[(2)] = null);

(statearr_31482_33484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (2))){
var state_31458__$1 = state_31458;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31458__$1,(4),from);
} else {
if((state_val_31459 === (11))){
var inst_31447 = (state_31458[(2)]);
var state_31458__$1 = state_31458;
if(cljs.core.truth_(inst_31447)){
var statearr_31487_33485 = state_31458__$1;
(statearr_31487_33485[(1)] = (12));

} else {
var statearr_31488_33486 = state_31458__$1;
(statearr_31488_33486[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (9))){
var state_31458__$1 = state_31458;
var statearr_31489_33487 = state_31458__$1;
(statearr_31489_33487[(2)] = null);

(statearr_31489_33487[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (5))){
var state_31458__$1 = state_31458;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31490_33488 = state_31458__$1;
(statearr_31490_33488[(1)] = (8));

} else {
var statearr_31491_33489 = state_31458__$1;
(statearr_31491_33489[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (14))){
var inst_31452 = (state_31458[(2)]);
var state_31458__$1 = state_31458;
var statearr_31492_33490 = state_31458__$1;
(statearr_31492_33490[(2)] = inst_31452);

(statearr_31492_33490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (10))){
var inst_31444 = (state_31458[(2)]);
var state_31458__$1 = state_31458;
var statearr_31493_33491 = state_31458__$1;
(statearr_31493_33491[(2)] = inst_31444);

(statearr_31493_33491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (8))){
var inst_31441 = cljs.core.async.close_BANG_(to);
var state_31458__$1 = state_31458;
var statearr_31494_33492 = state_31458__$1;
(statearr_31494_33492[(2)] = inst_31441);

(statearr_31494_33492[(1)] = (10));


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
});})(c__31279__auto___33470))
;
return ((function (switch__31054__auto__,c__31279__auto___33470){
return (function() {
var cljs$core$async$state_machine__31055__auto__ = null;
var cljs$core$async$state_machine__31055__auto____0 = (function (){
var statearr_31495 = [null,null,null,null,null,null,null,null];
(statearr_31495[(0)] = cljs$core$async$state_machine__31055__auto__);

(statearr_31495[(1)] = (1));

return statearr_31495;
});
var cljs$core$async$state_machine__31055__auto____1 = (function (state_31458){
while(true){
var ret_value__31056__auto__ = (function (){try{while(true){
var result__31057__auto__ = switch__31054__auto__(state_31458);
if(cljs.core.keyword_identical_QMARK_(result__31057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31057__auto__;
}
break;
}
}catch (e31496){if((e31496 instanceof Object)){
var ex__31058__auto__ = e31496;
var statearr_31497_33493 = state_31458;
(statearr_31497_33493[(5)] = ex__31058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31496;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33494 = state_31458;
state_31458 = G__33494;
continue;
} else {
return ret_value__31056__auto__;
}
break;
}
});
cljs$core$async$state_machine__31055__auto__ = function(state_31458){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31055__auto____1.call(this,state_31458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31055__auto____0;
cljs$core$async$state_machine__31055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31055__auto____1;
return cljs$core$async$state_machine__31055__auto__;
})()
;})(switch__31054__auto__,c__31279__auto___33470))
})();
var state__31281__auto__ = (function (){var statearr_31498 = (f__31280__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31280__auto__.cljs$core$IFn$_invoke$arity$0() : f__31280__auto__.call(null));
(statearr_31498[(6)] = c__31279__auto___33470);

return statearr_31498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31281__auto__);
});})(c__31279__auto___33470))
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
return (function (p__31500){
var vec__31501 = p__31500;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31501,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31501,(1),null);
var job = vec__31501;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__31279__auto___33499 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31279__auto___33499,res,vec__31501,v,p,job,jobs,results){
return (function (){
var f__31280__auto__ = (function (){var switch__31054__auto__ = ((function (c__31279__auto___33499,res,vec__31501,v,p,job,jobs,results){
return (function (state_31509){
var state_val_31510 = (state_31509[(1)]);
if((state_val_31510 === (1))){
var state_31509__$1 = state_31509;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31509__$1,(2),res,v);
} else {
if((state_val_31510 === (2))){
var inst_31506 = (state_31509[(2)]);
var inst_31507 = cljs.core.async.close_BANG_(res);
var state_31509__$1 = (function (){var statearr_31511 = state_31509;
(statearr_31511[(7)] = inst_31506);

return statearr_31511;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31509__$1,inst_31507);
} else {
return null;
}
}
});})(c__31279__auto___33499,res,vec__31501,v,p,job,jobs,results))
;
return ((function (switch__31054__auto__,c__31279__auto___33499,res,vec__31501,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31055__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31055__auto____0 = (function (){
var statearr_31512 = [null,null,null,null,null,null,null,null];
(statearr_31512[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31055__auto__);

(statearr_31512[(1)] = (1));

return statearr_31512;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31055__auto____1 = (function (state_31509){
while(true){
var ret_value__31056__auto__ = (function (){try{while(true){
var result__31057__auto__ = switch__31054__auto__(state_31509);
if(cljs.core.keyword_identical_QMARK_(result__31057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31057__auto__;
}
break;
}
}catch (e31513){if((e31513 instanceof Object)){
var ex__31058__auto__ = e31513;
var statearr_31514_33508 = state_31509;
(statearr_31514_33508[(5)] = ex__31058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31513;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33509 = state_31509;
state_31509 = G__33509;
continue;
} else {
return ret_value__31056__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31055__auto__ = function(state_31509){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31055__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31055__auto____1.call(this,state_31509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31055__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31055__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31055__auto__;
})()
;})(switch__31054__auto__,c__31279__auto___33499,res,vec__31501,v,p,job,jobs,results))
})();
var state__31281__auto__ = (function (){var statearr_31515 = (f__31280__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31280__auto__.cljs$core$IFn$_invoke$arity$0() : f__31280__auto__.call(null));
(statearr_31515[(6)] = c__31279__auto___33499);

return statearr_31515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31281__auto__);
});})(c__31279__auto___33499,res,vec__31501,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31516){
var vec__31518 = p__31516;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31518,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31518,(1),null);
var job = vec__31518;
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
var n__4607__auto___33513 = n;
var __33514 = (0);
while(true){
if((__33514 < n__4607__auto___33513)){
var G__31521_33515 = type;
var G__31521_33516__$1 = (((G__31521_33515 instanceof cljs.core.Keyword))?G__31521_33515.fqn:null);
switch (G__31521_33516__$1) {
case "compute":
var c__31279__auto___33518 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33514,c__31279__auto___33518,G__31521_33515,G__31521_33516__$1,n__4607__auto___33513,jobs,results,process,async){
return (function (){
var f__31280__auto__ = (function (){var switch__31054__auto__ = ((function (__33514,c__31279__auto___33518,G__31521_33515,G__31521_33516__$1,n__4607__auto___33513,jobs,results,process,async){
return (function (state_31534){
var state_val_31535 = (state_31534[(1)]);
if((state_val_31535 === (1))){
var state_31534__$1 = state_31534;
var statearr_31536_33519 = state_31534__$1;
(statearr_31536_33519[(2)] = null);

(statearr_31536_33519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31535 === (2))){
var state_31534__$1 = state_31534;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31534__$1,(4),jobs);
} else {
if((state_val_31535 === (3))){
var inst_31532 = (state_31534[(2)]);
var state_31534__$1 = state_31534;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31534__$1,inst_31532);
} else {
if((state_val_31535 === (4))){
var inst_31524 = (state_31534[(2)]);
var inst_31525 = process(inst_31524);
var state_31534__$1 = state_31534;
if(cljs.core.truth_(inst_31525)){
var statearr_31539_33520 = state_31534__$1;
(statearr_31539_33520[(1)] = (5));

} else {
var statearr_31544_33521 = state_31534__$1;
(statearr_31544_33521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31535 === (5))){
var state_31534__$1 = state_31534;
var statearr_31546_33523 = state_31534__$1;
(statearr_31546_33523[(2)] = null);

(statearr_31546_33523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31535 === (6))){
var state_31534__$1 = state_31534;
var statearr_31551_33524 = state_31534__$1;
(statearr_31551_33524[(2)] = null);

(statearr_31551_33524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31535 === (7))){
var inst_31530 = (state_31534[(2)]);
var state_31534__$1 = state_31534;
var statearr_31559_33525 = state_31534__$1;
(statearr_31559_33525[(2)] = inst_31530);

(statearr_31559_33525[(1)] = (3));


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
});})(__33514,c__31279__auto___33518,G__31521_33515,G__31521_33516__$1,n__4607__auto___33513,jobs,results,process,async))
;
return ((function (__33514,switch__31054__auto__,c__31279__auto___33518,G__31521_33515,G__31521_33516__$1,n__4607__auto___33513,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31055__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31055__auto____0 = (function (){
var statearr_31561 = [null,null,null,null,null,null,null];
(statearr_31561[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31055__auto__);

(statearr_31561[(1)] = (1));

return statearr_31561;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31055__auto____1 = (function (state_31534){
while(true){
var ret_value__31056__auto__ = (function (){try{while(true){
var result__31057__auto__ = switch__31054__auto__(state_31534);
if(cljs.core.keyword_identical_QMARK_(result__31057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31057__auto__;
}
break;
}
}catch (e31566){if((e31566 instanceof Object)){
var ex__31058__auto__ = e31566;
var statearr_31567_33527 = state_31534;
(statearr_31567_33527[(5)] = ex__31058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31566;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33530 = state_31534;
state_31534 = G__33530;
continue;
} else {
return ret_value__31056__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31055__auto__ = function(state_31534){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31055__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31055__auto____1.call(this,state_31534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31055__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31055__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31055__auto__;
})()
;})(__33514,switch__31054__auto__,c__31279__auto___33518,G__31521_33515,G__31521_33516__$1,n__4607__auto___33513,jobs,results,process,async))
})();
var state__31281__auto__ = (function (){var statearr_31568 = (f__31280__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31280__auto__.cljs$core$IFn$_invoke$arity$0() : f__31280__auto__.call(null));
(statearr_31568[(6)] = c__31279__auto___33518);

return statearr_31568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31281__auto__);
});})(__33514,c__31279__auto___33518,G__31521_33515,G__31521_33516__$1,n__4607__auto___33513,jobs,results,process,async))
);


break;
case "async":
var c__31279__auto___33531 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33514,c__31279__auto___33531,G__31521_33515,G__31521_33516__$1,n__4607__auto___33513,jobs,results,process,async){
return (function (){
var f__31280__auto__ = (function (){var switch__31054__auto__ = ((function (__33514,c__31279__auto___33531,G__31521_33515,G__31521_33516__$1,n__4607__auto___33513,jobs,results,process,async){
return (function (state_31581){
var state_val_31582 = (state_31581[(1)]);
if((state_val_31582 === (1))){
var state_31581__$1 = state_31581;
var statearr_31583_33532 = state_31581__$1;
(statearr_31583_33532[(2)] = null);

(statearr_31583_33532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (2))){
var state_31581__$1 = state_31581;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31581__$1,(4),jobs);
} else {
if((state_val_31582 === (3))){
var inst_31579 = (state_31581[(2)]);
var state_31581__$1 = state_31581;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31581__$1,inst_31579);
} else {
if((state_val_31582 === (4))){
var inst_31571 = (state_31581[(2)]);
var inst_31572 = async(inst_31571);
var state_31581__$1 = state_31581;
if(cljs.core.truth_(inst_31572)){
var statearr_31584_33543 = state_31581__$1;
(statearr_31584_33543[(1)] = (5));

} else {
var statearr_31585_33545 = state_31581__$1;
(statearr_31585_33545[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (5))){
var state_31581__$1 = state_31581;
var statearr_31586_33546 = state_31581__$1;
(statearr_31586_33546[(2)] = null);

(statearr_31586_33546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (6))){
var state_31581__$1 = state_31581;
var statearr_31587_33549 = state_31581__$1;
(statearr_31587_33549[(2)] = null);

(statearr_31587_33549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (7))){
var inst_31577 = (state_31581[(2)]);
var state_31581__$1 = state_31581;
var statearr_31588_33550 = state_31581__$1;
(statearr_31588_33550[(2)] = inst_31577);

(statearr_31588_33550[(1)] = (3));


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
});})(__33514,c__31279__auto___33531,G__31521_33515,G__31521_33516__$1,n__4607__auto___33513,jobs,results,process,async))
;
return ((function (__33514,switch__31054__auto__,c__31279__auto___33531,G__31521_33515,G__31521_33516__$1,n__4607__auto___33513,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31055__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31055__auto____0 = (function (){
var statearr_31589 = [null,null,null,null,null,null,null];
(statearr_31589[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31055__auto__);

(statearr_31589[(1)] = (1));

return statearr_31589;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31055__auto____1 = (function (state_31581){
while(true){
var ret_value__31056__auto__ = (function (){try{while(true){
var result__31057__auto__ = switch__31054__auto__(state_31581);
if(cljs.core.keyword_identical_QMARK_(result__31057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31057__auto__;
}
break;
}
}catch (e31590){if((e31590 instanceof Object)){
var ex__31058__auto__ = e31590;
var statearr_31591_33553 = state_31581;
(statearr_31591_33553[(5)] = ex__31058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31590;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33554 = state_31581;
state_31581 = G__33554;
continue;
} else {
return ret_value__31056__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31055__auto__ = function(state_31581){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31055__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31055__auto____1.call(this,state_31581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31055__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31055__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31055__auto__;
})()
;})(__33514,switch__31054__auto__,c__31279__auto___33531,G__31521_33515,G__31521_33516__$1,n__4607__auto___33513,jobs,results,process,async))
})();
var state__31281__auto__ = (function (){var statearr_31592 = (f__31280__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31280__auto__.cljs$core$IFn$_invoke$arity$0() : f__31280__auto__.call(null));
(statearr_31592[(6)] = c__31279__auto___33531);

return statearr_31592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31281__auto__);
});})(__33514,c__31279__auto___33531,G__31521_33515,G__31521_33516__$1,n__4607__auto___33513,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31521_33516__$1)].join('')));

}

var G__33555 = (__33514 + (1));
__33514 = G__33555;
continue;
} else {
}
break;
}

var c__31279__auto___33556 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31279__auto___33556,jobs,results,process,async){
return (function (){
var f__31280__auto__ = (function (){var switch__31054__auto__ = ((function (c__31279__auto___33556,jobs,results,process,async){
return (function (state_31617){
var state_val_31618 = (state_31617[(1)]);
if((state_val_31618 === (7))){
var inst_31611 = (state_31617[(2)]);
var state_31617__$1 = state_31617;
var statearr_31619_33557 = state_31617__$1;
(statearr_31619_33557[(2)] = inst_31611);

(statearr_31619_33557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31618 === (1))){
var state_31617__$1 = state_31617;
var statearr_31620_33558 = state_31617__$1;
(statearr_31620_33558[(2)] = null);

(statearr_31620_33558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31618 === (4))){
var inst_31595 = (state_31617[(7)]);
var inst_31595__$1 = (state_31617[(2)]);
var inst_31596 = (inst_31595__$1 == null);
var state_31617__$1 = (function (){var statearr_31621 = state_31617;
(statearr_31621[(7)] = inst_31595__$1);

return statearr_31621;
})();
if(cljs.core.truth_(inst_31596)){
var statearr_31622_33559 = state_31617__$1;
(statearr_31622_33559[(1)] = (5));

} else {
var statearr_31624_33560 = state_31617__$1;
(statearr_31624_33560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31618 === (6))){
var inst_31595 = (state_31617[(7)]);
var inst_31600 = (state_31617[(8)]);
var inst_31600__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31601 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31603 = [inst_31595,inst_31600__$1];
var inst_31604 = (new cljs.core.PersistentVector(null,2,(5),inst_31601,inst_31603,null));
var state_31617__$1 = (function (){var statearr_31629 = state_31617;
(statearr_31629[(8)] = inst_31600__$1);

return statearr_31629;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31617__$1,(8),jobs,inst_31604);
} else {
if((state_val_31618 === (3))){
var inst_31613 = (state_31617[(2)]);
var state_31617__$1 = state_31617;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31617__$1,inst_31613);
} else {
if((state_val_31618 === (2))){
var state_31617__$1 = state_31617;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31617__$1,(4),from);
} else {
if((state_val_31618 === (9))){
var inst_31608 = (state_31617[(2)]);
var state_31617__$1 = (function (){var statearr_31630 = state_31617;
(statearr_31630[(9)] = inst_31608);

return statearr_31630;
})();
var statearr_31631_33561 = state_31617__$1;
(statearr_31631_33561[(2)] = null);

(statearr_31631_33561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31618 === (5))){
var inst_31598 = cljs.core.async.close_BANG_(jobs);
var state_31617__$1 = state_31617;
var statearr_31632_33562 = state_31617__$1;
(statearr_31632_33562[(2)] = inst_31598);

(statearr_31632_33562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31618 === (8))){
var inst_31600 = (state_31617[(8)]);
var inst_31606 = (state_31617[(2)]);
var state_31617__$1 = (function (){var statearr_31633 = state_31617;
(statearr_31633[(10)] = inst_31606);

return statearr_31633;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31617__$1,(9),results,inst_31600);
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
});})(c__31279__auto___33556,jobs,results,process,async))
;
return ((function (switch__31054__auto__,c__31279__auto___33556,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31055__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31055__auto____0 = (function (){
var statearr_31634 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31634[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31055__auto__);

(statearr_31634[(1)] = (1));

return statearr_31634;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31055__auto____1 = (function (state_31617){
while(true){
var ret_value__31056__auto__ = (function (){try{while(true){
var result__31057__auto__ = switch__31054__auto__(state_31617);
if(cljs.core.keyword_identical_QMARK_(result__31057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31057__auto__;
}
break;
}
}catch (e31635){if((e31635 instanceof Object)){
var ex__31058__auto__ = e31635;
var statearr_31637_33563 = state_31617;
(statearr_31637_33563[(5)] = ex__31058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31635;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33564 = state_31617;
state_31617 = G__33564;
continue;
} else {
return ret_value__31056__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31055__auto__ = function(state_31617){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31055__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31055__auto____1.call(this,state_31617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31055__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31055__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31055__auto__;
})()
;})(switch__31054__auto__,c__31279__auto___33556,jobs,results,process,async))
})();
var state__31281__auto__ = (function (){var statearr_31638 = (f__31280__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31280__auto__.cljs$core$IFn$_invoke$arity$0() : f__31280__auto__.call(null));
(statearr_31638[(6)] = c__31279__auto___33556);

return statearr_31638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31281__auto__);
});})(c__31279__auto___33556,jobs,results,process,async))
);


var c__31279__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31279__auto__,jobs,results,process,async){
return (function (){
var f__31280__auto__ = (function (){var switch__31054__auto__ = ((function (c__31279__auto__,jobs,results,process,async){
return (function (state_31681){
var state_val_31682 = (state_31681[(1)]);
if((state_val_31682 === (7))){
var inst_31677 = (state_31681[(2)]);
var state_31681__$1 = state_31681;
var statearr_31683_33565 = state_31681__$1;
(statearr_31683_33565[(2)] = inst_31677);

(statearr_31683_33565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31682 === (20))){
var state_31681__$1 = state_31681;
var statearr_31684_33566 = state_31681__$1;
(statearr_31684_33566[(2)] = null);

(statearr_31684_33566[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31682 === (1))){
var state_31681__$1 = state_31681;
var statearr_31685_33567 = state_31681__$1;
(statearr_31685_33567[(2)] = null);

(statearr_31685_33567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31682 === (4))){
var inst_31641 = (state_31681[(7)]);
var inst_31641__$1 = (state_31681[(2)]);
var inst_31642 = (inst_31641__$1 == null);
var state_31681__$1 = (function (){var statearr_31689 = state_31681;
(statearr_31689[(7)] = inst_31641__$1);

return statearr_31689;
})();
if(cljs.core.truth_(inst_31642)){
var statearr_31690_33568 = state_31681__$1;
(statearr_31690_33568[(1)] = (5));

} else {
var statearr_31692_33569 = state_31681__$1;
(statearr_31692_33569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31682 === (15))){
var inst_31659 = (state_31681[(8)]);
var state_31681__$1 = state_31681;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31681__$1,(18),to,inst_31659);
} else {
if((state_val_31682 === (21))){
var inst_31672 = (state_31681[(2)]);
var state_31681__$1 = state_31681;
var statearr_31698_33570 = state_31681__$1;
(statearr_31698_33570[(2)] = inst_31672);

(statearr_31698_33570[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31682 === (13))){
var inst_31674 = (state_31681[(2)]);
var state_31681__$1 = (function (){var statearr_31699 = state_31681;
(statearr_31699[(9)] = inst_31674);

return statearr_31699;
})();
var statearr_31700_33571 = state_31681__$1;
(statearr_31700_33571[(2)] = null);

(statearr_31700_33571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31682 === (6))){
var inst_31641 = (state_31681[(7)]);
var state_31681__$1 = state_31681;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31681__$1,(11),inst_31641);
} else {
if((state_val_31682 === (17))){
var inst_31667 = (state_31681[(2)]);
var state_31681__$1 = state_31681;
if(cljs.core.truth_(inst_31667)){
var statearr_31701_33572 = state_31681__$1;
(statearr_31701_33572[(1)] = (19));

} else {
var statearr_31702_33573 = state_31681__$1;
(statearr_31702_33573[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31682 === (3))){
var inst_31679 = (state_31681[(2)]);
var state_31681__$1 = state_31681;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31681__$1,inst_31679);
} else {
if((state_val_31682 === (12))){
var inst_31656 = (state_31681[(10)]);
var state_31681__$1 = state_31681;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31681__$1,(14),inst_31656);
} else {
if((state_val_31682 === (2))){
var state_31681__$1 = state_31681;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31681__$1,(4),results);
} else {
if((state_val_31682 === (19))){
var state_31681__$1 = state_31681;
var statearr_31703_33578 = state_31681__$1;
(statearr_31703_33578[(2)] = null);

(statearr_31703_33578[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31682 === (11))){
var inst_31656 = (state_31681[(2)]);
var state_31681__$1 = (function (){var statearr_31704 = state_31681;
(statearr_31704[(10)] = inst_31656);

return statearr_31704;
})();
var statearr_31705_33579 = state_31681__$1;
(statearr_31705_33579[(2)] = null);

(statearr_31705_33579[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31682 === (9))){
var state_31681__$1 = state_31681;
var statearr_31708_33580 = state_31681__$1;
(statearr_31708_33580[(2)] = null);

(statearr_31708_33580[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31682 === (5))){
var state_31681__$1 = state_31681;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31712_33581 = state_31681__$1;
(statearr_31712_33581[(1)] = (8));

} else {
var statearr_31716_33582 = state_31681__$1;
(statearr_31716_33582[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31682 === (14))){
var inst_31659 = (state_31681[(8)]);
var inst_31661 = (state_31681[(11)]);
var inst_31659__$1 = (state_31681[(2)]);
var inst_31660 = (inst_31659__$1 == null);
var inst_31661__$1 = cljs.core.not(inst_31660);
var state_31681__$1 = (function (){var statearr_31720 = state_31681;
(statearr_31720[(8)] = inst_31659__$1);

(statearr_31720[(11)] = inst_31661__$1);

return statearr_31720;
})();
if(inst_31661__$1){
var statearr_31721_33583 = state_31681__$1;
(statearr_31721_33583[(1)] = (15));

} else {
var statearr_31722_33584 = state_31681__$1;
(statearr_31722_33584[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31682 === (16))){
var inst_31661 = (state_31681[(11)]);
var state_31681__$1 = state_31681;
var statearr_31723_33585 = state_31681__$1;
(statearr_31723_33585[(2)] = inst_31661);

(statearr_31723_33585[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31682 === (10))){
var inst_31652 = (state_31681[(2)]);
var state_31681__$1 = state_31681;
var statearr_31724_33588 = state_31681__$1;
(statearr_31724_33588[(2)] = inst_31652);

(statearr_31724_33588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31682 === (18))){
var inst_31664 = (state_31681[(2)]);
var state_31681__$1 = state_31681;
var statearr_31726_33589 = state_31681__$1;
(statearr_31726_33589[(2)] = inst_31664);

(statearr_31726_33589[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31682 === (8))){
var inst_31649 = cljs.core.async.close_BANG_(to);
var state_31681__$1 = state_31681;
var statearr_31727_33590 = state_31681__$1;
(statearr_31727_33590[(2)] = inst_31649);

(statearr_31727_33590[(1)] = (10));


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
});})(c__31279__auto__,jobs,results,process,async))
;
return ((function (switch__31054__auto__,c__31279__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31055__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31055__auto____0 = (function (){
var statearr_31728 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31728[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31055__auto__);

(statearr_31728[(1)] = (1));

return statearr_31728;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31055__auto____1 = (function (state_31681){
while(true){
var ret_value__31056__auto__ = (function (){try{while(true){
var result__31057__auto__ = switch__31054__auto__(state_31681);
if(cljs.core.keyword_identical_QMARK_(result__31057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31057__auto__;
}
break;
}
}catch (e31729){if((e31729 instanceof Object)){
var ex__31058__auto__ = e31729;
var statearr_31730_33591 = state_31681;
(statearr_31730_33591[(5)] = ex__31058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31729;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33593 = state_31681;
state_31681 = G__33593;
continue;
} else {
return ret_value__31056__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31055__auto__ = function(state_31681){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31055__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31055__auto____1.call(this,state_31681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31055__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31055__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31055__auto__;
})()
;})(switch__31054__auto__,c__31279__auto__,jobs,results,process,async))
})();
var state__31281__auto__ = (function (){var statearr_31733 = (f__31280__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31280__auto__.cljs$core$IFn$_invoke$arity$0() : f__31280__auto__.call(null));
(statearr_31733[(6)] = c__31279__auto__);

return statearr_31733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31281__auto__);
});})(c__31279__auto__,jobs,results,process,async))
);

return c__31279__auto__;
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
var G__31736 = arguments.length;
switch (G__31736) {
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
var G__31743 = arguments.length;
switch (G__31743) {
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
var G__31752 = arguments.length;
switch (G__31752) {
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
var c__31279__auto___33599 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31279__auto___33599,tc,fc){
return (function (){
var f__31280__auto__ = (function (){var switch__31054__auto__ = ((function (c__31279__auto___33599,tc,fc){
return (function (state_31785){
var state_val_31786 = (state_31785[(1)]);
if((state_val_31786 === (7))){
var inst_31781 = (state_31785[(2)]);
var state_31785__$1 = state_31785;
var statearr_31790_33600 = state_31785__$1;
(statearr_31790_33600[(2)] = inst_31781);

(statearr_31790_33600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31786 === (1))){
var state_31785__$1 = state_31785;
var statearr_31792_33601 = state_31785__$1;
(statearr_31792_33601[(2)] = null);

(statearr_31792_33601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31786 === (4))){
var inst_31762 = (state_31785[(7)]);
var inst_31762__$1 = (state_31785[(2)]);
var inst_31763 = (inst_31762__$1 == null);
var state_31785__$1 = (function (){var statearr_31793 = state_31785;
(statearr_31793[(7)] = inst_31762__$1);

return statearr_31793;
})();
if(cljs.core.truth_(inst_31763)){
var statearr_31794_33605 = state_31785__$1;
(statearr_31794_33605[(1)] = (5));

} else {
var statearr_31795_33606 = state_31785__$1;
(statearr_31795_33606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31786 === (13))){
var state_31785__$1 = state_31785;
var statearr_31796_33607 = state_31785__$1;
(statearr_31796_33607[(2)] = null);

(statearr_31796_33607[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31786 === (6))){
var inst_31762 = (state_31785[(7)]);
var inst_31768 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31762) : p.call(null,inst_31762));
var state_31785__$1 = state_31785;
if(cljs.core.truth_(inst_31768)){
var statearr_31797_33608 = state_31785__$1;
(statearr_31797_33608[(1)] = (9));

} else {
var statearr_31798_33609 = state_31785__$1;
(statearr_31798_33609[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31786 === (3))){
var inst_31783 = (state_31785[(2)]);
var state_31785__$1 = state_31785;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31785__$1,inst_31783);
} else {
if((state_val_31786 === (12))){
var state_31785__$1 = state_31785;
var statearr_31799_33610 = state_31785__$1;
(statearr_31799_33610[(2)] = null);

(statearr_31799_33610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31786 === (2))){
var state_31785__$1 = state_31785;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31785__$1,(4),ch);
} else {
if((state_val_31786 === (11))){
var inst_31762 = (state_31785[(7)]);
var inst_31772 = (state_31785[(2)]);
var state_31785__$1 = state_31785;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31785__$1,(8),inst_31772,inst_31762);
} else {
if((state_val_31786 === (9))){
var state_31785__$1 = state_31785;
var statearr_31803_33611 = state_31785__$1;
(statearr_31803_33611[(2)] = tc);

(statearr_31803_33611[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31786 === (5))){
var inst_31765 = cljs.core.async.close_BANG_(tc);
var inst_31766 = cljs.core.async.close_BANG_(fc);
var state_31785__$1 = (function (){var statearr_31805 = state_31785;
(statearr_31805[(8)] = inst_31765);

return statearr_31805;
})();
var statearr_31806_33613 = state_31785__$1;
(statearr_31806_33613[(2)] = inst_31766);

(statearr_31806_33613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31786 === (14))){
var inst_31779 = (state_31785[(2)]);
var state_31785__$1 = state_31785;
var statearr_31807_33614 = state_31785__$1;
(statearr_31807_33614[(2)] = inst_31779);

(statearr_31807_33614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31786 === (10))){
var state_31785__$1 = state_31785;
var statearr_31809_33615 = state_31785__$1;
(statearr_31809_33615[(2)] = fc);

(statearr_31809_33615[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31786 === (8))){
var inst_31774 = (state_31785[(2)]);
var state_31785__$1 = state_31785;
if(cljs.core.truth_(inst_31774)){
var statearr_31810_33618 = state_31785__$1;
(statearr_31810_33618[(1)] = (12));

} else {
var statearr_31811_33620 = state_31785__$1;
(statearr_31811_33620[(1)] = (13));

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
});})(c__31279__auto___33599,tc,fc))
;
return ((function (switch__31054__auto__,c__31279__auto___33599,tc,fc){
return (function() {
var cljs$core$async$state_machine__31055__auto__ = null;
var cljs$core$async$state_machine__31055__auto____0 = (function (){
var statearr_31813 = [null,null,null,null,null,null,null,null,null];
(statearr_31813[(0)] = cljs$core$async$state_machine__31055__auto__);

(statearr_31813[(1)] = (1));

return statearr_31813;
});
var cljs$core$async$state_machine__31055__auto____1 = (function (state_31785){
while(true){
var ret_value__31056__auto__ = (function (){try{while(true){
var result__31057__auto__ = switch__31054__auto__(state_31785);
if(cljs.core.keyword_identical_QMARK_(result__31057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31057__auto__;
}
break;
}
}catch (e31814){if((e31814 instanceof Object)){
var ex__31058__auto__ = e31814;
var statearr_31815_33621 = state_31785;
(statearr_31815_33621[(5)] = ex__31058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31814;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33622 = state_31785;
state_31785 = G__33622;
continue;
} else {
return ret_value__31056__auto__;
}
break;
}
});
cljs$core$async$state_machine__31055__auto__ = function(state_31785){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31055__auto____1.call(this,state_31785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31055__auto____0;
cljs$core$async$state_machine__31055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31055__auto____1;
return cljs$core$async$state_machine__31055__auto__;
})()
;})(switch__31054__auto__,c__31279__auto___33599,tc,fc))
})();
var state__31281__auto__ = (function (){var statearr_31816 = (f__31280__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31280__auto__.cljs$core$IFn$_invoke$arity$0() : f__31280__auto__.call(null));
(statearr_31816[(6)] = c__31279__auto___33599);

return statearr_31816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31281__auto__);
});})(c__31279__auto___33599,tc,fc))
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
var c__31279__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31279__auto__){
return (function (){
var f__31280__auto__ = (function (){var switch__31054__auto__ = ((function (c__31279__auto__){
return (function (state_31841){
var state_val_31842 = (state_31841[(1)]);
if((state_val_31842 === (7))){
var inst_31837 = (state_31841[(2)]);
var state_31841__$1 = state_31841;
var statearr_31847_33624 = state_31841__$1;
(statearr_31847_33624[(2)] = inst_31837);

(statearr_31847_33624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31842 === (1))){
var inst_31821 = init;
var state_31841__$1 = (function (){var statearr_31850 = state_31841;
(statearr_31850[(7)] = inst_31821);

return statearr_31850;
})();
var statearr_31851_33625 = state_31841__$1;
(statearr_31851_33625[(2)] = null);

(statearr_31851_33625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31842 === (4))){
var inst_31824 = (state_31841[(8)]);
var inst_31824__$1 = (state_31841[(2)]);
var inst_31825 = (inst_31824__$1 == null);
var state_31841__$1 = (function (){var statearr_31852 = state_31841;
(statearr_31852[(8)] = inst_31824__$1);

return statearr_31852;
})();
if(cljs.core.truth_(inst_31825)){
var statearr_31853_33626 = state_31841__$1;
(statearr_31853_33626[(1)] = (5));

} else {
var statearr_31854_33627 = state_31841__$1;
(statearr_31854_33627[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31842 === (6))){
var inst_31828 = (state_31841[(9)]);
var inst_31824 = (state_31841[(8)]);
var inst_31821 = (state_31841[(7)]);
var inst_31828__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31821,inst_31824) : f.call(null,inst_31821,inst_31824));
var inst_31829 = cljs.core.reduced_QMARK_(inst_31828__$1);
var state_31841__$1 = (function (){var statearr_31857 = state_31841;
(statearr_31857[(9)] = inst_31828__$1);

return statearr_31857;
})();
if(inst_31829){
var statearr_31859_33629 = state_31841__$1;
(statearr_31859_33629[(1)] = (8));

} else {
var statearr_31861_33631 = state_31841__$1;
(statearr_31861_33631[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31842 === (3))){
var inst_31839 = (state_31841[(2)]);
var state_31841__$1 = state_31841;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31841__$1,inst_31839);
} else {
if((state_val_31842 === (2))){
var state_31841__$1 = state_31841;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31841__$1,(4),ch);
} else {
if((state_val_31842 === (9))){
var inst_31828 = (state_31841[(9)]);
var inst_31821 = inst_31828;
var state_31841__$1 = (function (){var statearr_31863 = state_31841;
(statearr_31863[(7)] = inst_31821);

return statearr_31863;
})();
var statearr_31864_33634 = state_31841__$1;
(statearr_31864_33634[(2)] = null);

(statearr_31864_33634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31842 === (5))){
var inst_31821 = (state_31841[(7)]);
var state_31841__$1 = state_31841;
var statearr_31865_33635 = state_31841__$1;
(statearr_31865_33635[(2)] = inst_31821);

(statearr_31865_33635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31842 === (10))){
var inst_31835 = (state_31841[(2)]);
var state_31841__$1 = state_31841;
var statearr_31866_33636 = state_31841__$1;
(statearr_31866_33636[(2)] = inst_31835);

(statearr_31866_33636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31842 === (8))){
var inst_31828 = (state_31841[(9)]);
var inst_31831 = cljs.core.deref(inst_31828);
var state_31841__$1 = state_31841;
var statearr_31867_33637 = state_31841__$1;
(statearr_31867_33637[(2)] = inst_31831);

(statearr_31867_33637[(1)] = (10));


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
});})(c__31279__auto__))
;
return ((function (switch__31054__auto__,c__31279__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__31055__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31055__auto____0 = (function (){
var statearr_31868 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31868[(0)] = cljs$core$async$reduce_$_state_machine__31055__auto__);

(statearr_31868[(1)] = (1));

return statearr_31868;
});
var cljs$core$async$reduce_$_state_machine__31055__auto____1 = (function (state_31841){
while(true){
var ret_value__31056__auto__ = (function (){try{while(true){
var result__31057__auto__ = switch__31054__auto__(state_31841);
if(cljs.core.keyword_identical_QMARK_(result__31057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31057__auto__;
}
break;
}
}catch (e31869){if((e31869 instanceof Object)){
var ex__31058__auto__ = e31869;
var statearr_31870_33642 = state_31841;
(statearr_31870_33642[(5)] = ex__31058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31869;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33643 = state_31841;
state_31841 = G__33643;
continue;
} else {
return ret_value__31056__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31055__auto__ = function(state_31841){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31055__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31055__auto____1.call(this,state_31841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__31055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31055__auto____0;
cljs$core$async$reduce_$_state_machine__31055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31055__auto____1;
return cljs$core$async$reduce_$_state_machine__31055__auto__;
})()
;})(switch__31054__auto__,c__31279__auto__))
})();
var state__31281__auto__ = (function (){var statearr_31871 = (f__31280__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31280__auto__.cljs$core$IFn$_invoke$arity$0() : f__31280__auto__.call(null));
(statearr_31871[(6)] = c__31279__auto__);

return statearr_31871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31281__auto__);
});})(c__31279__auto__))
);

return c__31279__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__31279__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31279__auto__,f__$1){
return (function (){
var f__31280__auto__ = (function (){var switch__31054__auto__ = ((function (c__31279__auto__,f__$1){
return (function (state_31878){
var state_val_31879 = (state_31878[(1)]);
if((state_val_31879 === (1))){
var inst_31873 = cljs.core.async.reduce(f__$1,init,ch);
var state_31878__$1 = state_31878;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31878__$1,(2),inst_31873);
} else {
if((state_val_31879 === (2))){
var inst_31875 = (state_31878[(2)]);
var inst_31876 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31875) : f__$1.call(null,inst_31875));
var state_31878__$1 = state_31878;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31878__$1,inst_31876);
} else {
return null;
}
}
});})(c__31279__auto__,f__$1))
;
return ((function (switch__31054__auto__,c__31279__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__31055__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31055__auto____0 = (function (){
var statearr_31880 = [null,null,null,null,null,null,null];
(statearr_31880[(0)] = cljs$core$async$transduce_$_state_machine__31055__auto__);

(statearr_31880[(1)] = (1));

return statearr_31880;
});
var cljs$core$async$transduce_$_state_machine__31055__auto____1 = (function (state_31878){
while(true){
var ret_value__31056__auto__ = (function (){try{while(true){
var result__31057__auto__ = switch__31054__auto__(state_31878);
if(cljs.core.keyword_identical_QMARK_(result__31057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31057__auto__;
}
break;
}
}catch (e31881){if((e31881 instanceof Object)){
var ex__31058__auto__ = e31881;
var statearr_31882_33646 = state_31878;
(statearr_31882_33646[(5)] = ex__31058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31881;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33647 = state_31878;
state_31878 = G__33647;
continue;
} else {
return ret_value__31056__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31055__auto__ = function(state_31878){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31055__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31055__auto____1.call(this,state_31878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__31055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31055__auto____0;
cljs$core$async$transduce_$_state_machine__31055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31055__auto____1;
return cljs$core$async$transduce_$_state_machine__31055__auto__;
})()
;})(switch__31054__auto__,c__31279__auto__,f__$1))
})();
var state__31281__auto__ = (function (){var statearr_31883 = (f__31280__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31280__auto__.cljs$core$IFn$_invoke$arity$0() : f__31280__auto__.call(null));
(statearr_31883[(6)] = c__31279__auto__);

return statearr_31883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31281__auto__);
});})(c__31279__auto__,f__$1))
);

return c__31279__auto__;
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
var G__31885 = arguments.length;
switch (G__31885) {
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
var c__31279__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31279__auto__){
return (function (){
var f__31280__auto__ = (function (){var switch__31054__auto__ = ((function (c__31279__auto__){
return (function (state_31910){
var state_val_31911 = (state_31910[(1)]);
if((state_val_31911 === (7))){
var inst_31892 = (state_31910[(2)]);
var state_31910__$1 = state_31910;
var statearr_31912_33653 = state_31910__$1;
(statearr_31912_33653[(2)] = inst_31892);

(statearr_31912_33653[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (1))){
var inst_31886 = cljs.core.seq(coll);
var inst_31887 = inst_31886;
var state_31910__$1 = (function (){var statearr_31913 = state_31910;
(statearr_31913[(7)] = inst_31887);

return statearr_31913;
})();
var statearr_31914_33656 = state_31910__$1;
(statearr_31914_33656[(2)] = null);

(statearr_31914_33656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (4))){
var inst_31887 = (state_31910[(7)]);
var inst_31890 = cljs.core.first(inst_31887);
var state_31910__$1 = state_31910;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31910__$1,(7),ch,inst_31890);
} else {
if((state_val_31911 === (13))){
var inst_31904 = (state_31910[(2)]);
var state_31910__$1 = state_31910;
var statearr_31915_33659 = state_31910__$1;
(statearr_31915_33659[(2)] = inst_31904);

(statearr_31915_33659[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (6))){
var inst_31895 = (state_31910[(2)]);
var state_31910__$1 = state_31910;
if(cljs.core.truth_(inst_31895)){
var statearr_31916_33660 = state_31910__$1;
(statearr_31916_33660[(1)] = (8));

} else {
var statearr_31917_33661 = state_31910__$1;
(statearr_31917_33661[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (3))){
var inst_31908 = (state_31910[(2)]);
var state_31910__$1 = state_31910;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31910__$1,inst_31908);
} else {
if((state_val_31911 === (12))){
var state_31910__$1 = state_31910;
var statearr_31918_33664 = state_31910__$1;
(statearr_31918_33664[(2)] = null);

(statearr_31918_33664[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (2))){
var inst_31887 = (state_31910[(7)]);
var state_31910__$1 = state_31910;
if(cljs.core.truth_(inst_31887)){
var statearr_31919_33665 = state_31910__$1;
(statearr_31919_33665[(1)] = (4));

} else {
var statearr_31920_33666 = state_31910__$1;
(statearr_31920_33666[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (11))){
var inst_31901 = cljs.core.async.close_BANG_(ch);
var state_31910__$1 = state_31910;
var statearr_31921_33669 = state_31910__$1;
(statearr_31921_33669[(2)] = inst_31901);

(statearr_31921_33669[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (9))){
var state_31910__$1 = state_31910;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31922_33670 = state_31910__$1;
(statearr_31922_33670[(1)] = (11));

} else {
var statearr_31923_33671 = state_31910__$1;
(statearr_31923_33671[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (5))){
var inst_31887 = (state_31910[(7)]);
var state_31910__$1 = state_31910;
var statearr_31924_33672 = state_31910__$1;
(statearr_31924_33672[(2)] = inst_31887);

(statearr_31924_33672[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (10))){
var inst_31906 = (state_31910[(2)]);
var state_31910__$1 = state_31910;
var statearr_31925_33673 = state_31910__$1;
(statearr_31925_33673[(2)] = inst_31906);

(statearr_31925_33673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (8))){
var inst_31887 = (state_31910[(7)]);
var inst_31897 = cljs.core.next(inst_31887);
var inst_31887__$1 = inst_31897;
var state_31910__$1 = (function (){var statearr_31926 = state_31910;
(statearr_31926[(7)] = inst_31887__$1);

return statearr_31926;
})();
var statearr_31927_33674 = state_31910__$1;
(statearr_31927_33674[(2)] = null);

(statearr_31927_33674[(1)] = (2));


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
});})(c__31279__auto__))
;
return ((function (switch__31054__auto__,c__31279__auto__){
return (function() {
var cljs$core$async$state_machine__31055__auto__ = null;
var cljs$core$async$state_machine__31055__auto____0 = (function (){
var statearr_31928 = [null,null,null,null,null,null,null,null];
(statearr_31928[(0)] = cljs$core$async$state_machine__31055__auto__);

(statearr_31928[(1)] = (1));

return statearr_31928;
});
var cljs$core$async$state_machine__31055__auto____1 = (function (state_31910){
while(true){
var ret_value__31056__auto__ = (function (){try{while(true){
var result__31057__auto__ = switch__31054__auto__(state_31910);
if(cljs.core.keyword_identical_QMARK_(result__31057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31057__auto__;
}
break;
}
}catch (e31929){if((e31929 instanceof Object)){
var ex__31058__auto__ = e31929;
var statearr_31930_33676 = state_31910;
(statearr_31930_33676[(5)] = ex__31058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31929;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33677 = state_31910;
state_31910 = G__33677;
continue;
} else {
return ret_value__31056__auto__;
}
break;
}
});
cljs$core$async$state_machine__31055__auto__ = function(state_31910){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31055__auto____1.call(this,state_31910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31055__auto____0;
cljs$core$async$state_machine__31055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31055__auto____1;
return cljs$core$async$state_machine__31055__auto__;
})()
;})(switch__31054__auto__,c__31279__auto__))
})();
var state__31281__auto__ = (function (){var statearr_31937 = (f__31280__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31280__auto__.cljs$core$IFn$_invoke$arity$0() : f__31280__auto__.call(null));
(statearr_31937[(6)] = c__31279__auto__);

return statearr_31937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31281__auto__);
});})(c__31279__auto__))
);

return c__31279__auto__;
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
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
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
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31961 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31961 = (function (ch,cs,meta31962){
this.ch = ch;
this.cs = cs;
this.meta31962 = meta31962;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31963,meta31962__$1){
var self__ = this;
var _31963__$1 = this;
return (new cljs.core.async.t_cljs$core$async31961(self__.ch,self__.cs,meta31962__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31961.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31963){
var self__ = this;
var _31963__$1 = this;
return self__.meta31962;
});})(cs))
;

cljs.core.async.t_cljs$core$async31961.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31961.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31961.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31961.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31961.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31961.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31961.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31962","meta31962",328271802,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31961.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31961.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31961";

cljs.core.async.t_cljs$core$async31961.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31961");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31961.
 */
cljs.core.async.__GT_t_cljs$core$async31961 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31961(ch__$1,cs__$1,meta31962){
return (new cljs.core.async.t_cljs$core$async31961(ch__$1,cs__$1,meta31962));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31961(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__31279__auto___33695 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31279__auto___33695,cs,m,dchan,dctr,done){
return (function (){
var f__31280__auto__ = (function (){var switch__31054__auto__ = ((function (c__31279__auto___33695,cs,m,dchan,dctr,done){
return (function (state_32111){
var state_val_32112 = (state_32111[(1)]);
if((state_val_32112 === (7))){
var inst_32107 = (state_32111[(2)]);
var state_32111__$1 = state_32111;
var statearr_32113_33697 = state_32111__$1;
(statearr_32113_33697[(2)] = inst_32107);

(statearr_32113_33697[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32112 === (20))){
var inst_32009 = (state_32111[(7)]);
var inst_32021 = cljs.core.first(inst_32009);
var inst_32022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32021,(0),null);
var inst_32023 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32021,(1),null);
var state_32111__$1 = (function (){var statearr_32114 = state_32111;
(statearr_32114[(8)] = inst_32022);

return statearr_32114;
})();
if(cljs.core.truth_(inst_32023)){
var statearr_32115_33698 = state_32111__$1;
(statearr_32115_33698[(1)] = (22));

} else {
var statearr_32116_33699 = state_32111__$1;
(statearr_32116_33699[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32112 === (27))){
var inst_32058 = (state_32111[(9)]);
var inst_32051 = (state_32111[(10)]);
var inst_31978 = (state_32111[(11)]);
var inst_32053 = (state_32111[(12)]);
var inst_32058__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32051,inst_32053);
var inst_32059 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32058__$1,inst_31978,done);
var state_32111__$1 = (function (){var statearr_32117 = state_32111;
(statearr_32117[(9)] = inst_32058__$1);

return statearr_32117;
})();
if(cljs.core.truth_(inst_32059)){
var statearr_32118_33703 = state_32111__$1;
(statearr_32118_33703[(1)] = (30));

} else {
var statearr_32119_33704 = state_32111__$1;
(statearr_32119_33704[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32112 === (1))){
var state_32111__$1 = state_32111;
var statearr_32120_33705 = state_32111__$1;
(statearr_32120_33705[(2)] = null);

(statearr_32120_33705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32112 === (24))){
var inst_32009 = (state_32111[(7)]);
var inst_32028 = (state_32111[(2)]);
var inst_32029 = cljs.core.next(inst_32009);
var inst_31987 = inst_32029;
var inst_31988 = null;
var inst_31989 = (0);
var inst_31990 = (0);
var state_32111__$1 = (function (){var statearr_32121 = state_32111;
(statearr_32121[(13)] = inst_31988);

(statearr_32121[(14)] = inst_31987);

(statearr_32121[(15)] = inst_32028);

(statearr_32121[(16)] = inst_31990);

(statearr_32121[(17)] = inst_31989);

return statearr_32121;
})();
var statearr_32122_33709 = state_32111__$1;
(statearr_32122_33709[(2)] = null);

(statearr_32122_33709[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32112 === (39))){
var state_32111__$1 = state_32111;
var statearr_32129_33710 = state_32111__$1;
(statearr_32129_33710[(2)] = null);

(statearr_32129_33710[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32112 === (4))){
var inst_31978 = (state_32111[(11)]);
var inst_31978__$1 = (state_32111[(2)]);
var inst_31979 = (inst_31978__$1 == null);
var state_32111__$1 = (function (){var statearr_32130 = state_32111;
(statearr_32130[(11)] = inst_31978__$1);

return statearr_32130;
})();
if(cljs.core.truth_(inst_31979)){
var statearr_32134_33718 = state_32111__$1;
(statearr_32134_33718[(1)] = (5));

} else {
var statearr_32135_33719 = state_32111__$1;
(statearr_32135_33719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32112 === (15))){
var inst_31988 = (state_32111[(13)]);
var inst_31987 = (state_32111[(14)]);
var inst_31990 = (state_32111[(16)]);
var inst_31989 = (state_32111[(17)]);
var inst_32005 = (state_32111[(2)]);
var inst_32006 = (inst_31990 + (1));
var tmp32123 = inst_31988;
var tmp32124 = inst_31987;
var tmp32125 = inst_31989;
var inst_31987__$1 = tmp32124;
var inst_31988__$1 = tmp32123;
var inst_31989__$1 = tmp32125;
var inst_31990__$1 = inst_32006;
var state_32111__$1 = (function (){var statearr_32136 = state_32111;
(statearr_32136[(13)] = inst_31988__$1);

(statearr_32136[(14)] = inst_31987__$1);

(statearr_32136[(16)] = inst_31990__$1);

(statearr_32136[(17)] = inst_31989__$1);

(statearr_32136[(18)] = inst_32005);

return statearr_32136;
})();
var statearr_32137_33723 = state_32111__$1;
(statearr_32137_33723[(2)] = null);

(statearr_32137_33723[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32112 === (21))){
var inst_32032 = (state_32111[(2)]);
var state_32111__$1 = state_32111;
var statearr_32144_33724 = state_32111__$1;
(statearr_32144_33724[(2)] = inst_32032);

(statearr_32144_33724[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32112 === (31))){
var inst_32058 = (state_32111[(9)]);
var inst_32062 = done(null);
var inst_32063 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32058);
var state_32111__$1 = (function (){var statearr_32148 = state_32111;
(statearr_32148[(19)] = inst_32062);

return statearr_32148;
})();
var statearr_32149_33728 = state_32111__$1;
(statearr_32149_33728[(2)] = inst_32063);

(statearr_32149_33728[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32112 === (32))){
var inst_32050 = (state_32111[(20)]);
var inst_32052 = (state_32111[(21)]);
var inst_32051 = (state_32111[(10)]);
var inst_32053 = (state_32111[(12)]);
var inst_32065 = (state_32111[(2)]);
var inst_32066 = (inst_32053 + (1));
var tmp32138 = inst_32050;
var tmp32139 = inst_32052;
var tmp32140 = inst_32051;
var inst_32050__$1 = tmp32138;
var inst_32051__$1 = tmp32140;
var inst_32052__$1 = tmp32139;
var inst_32053__$1 = inst_32066;
var state_32111__$1 = (function (){var statearr_32155 = state_32111;
(statearr_32155[(20)] = inst_32050__$1);

(statearr_32155[(21)] = inst_32052__$1);

(statearr_32155[(22)] = inst_32065);

(statearr_32155[(10)] = inst_32051__$1);

(statearr_32155[(12)] = inst_32053__$1);

return statearr_32155;
})();
var statearr_32156_33729 = state_32111__$1;
(statearr_32156_33729[(2)] = null);

(statearr_32156_33729[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32112 === (40))){
var inst_32078 = (state_32111[(23)]);
var inst_32082 = done(null);
var inst_32083 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32078);
var state_32111__$1 = (function (){var statearr_32160 = state_32111;
(statearr_32160[(24)] = inst_32082);

return statearr_32160;
})();
var statearr_32161_33733 = state_32111__$1;
(statearr_32161_33733[(2)] = inst_32083);

(statearr_32161_33733[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32112 === (33))){
var inst_32069 = (state_32111[(25)]);
var inst_32071 = cljs.core.chunked_seq_QMARK_(inst_32069);
var state_32111__$1 = state_32111;
if(inst_32071){
var statearr_32165_33734 = state_32111__$1;
(statearr_32165_33734[(1)] = (36));

} else {
var statearr_32166_33735 = state_32111__$1;
(statearr_32166_33735[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32112 === (13))){
var inst_31999 = (state_32111[(26)]);
var inst_32002 = cljs.core.async.close_BANG_(inst_31999);
var state_32111__$1 = state_32111;
var statearr_32175_33736 = state_32111__$1;
(statearr_32175_33736[(2)] = inst_32002);

(statearr_32175_33736[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32112 === (22))){
var inst_32022 = (state_32111[(8)]);
var inst_32025 = cljs.core.async.close_BANG_(inst_32022);
var state_32111__$1 = state_32111;
var statearr_32199_33741 = state_32111__$1;
(statearr_32199_33741[(2)] = inst_32025);

(statearr_32199_33741[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32112 === (36))){
var inst_32069 = (state_32111[(25)]);
var inst_32073 = cljs.core.chunk_first(inst_32069);
var inst_32074 = cljs.core.chunk_rest(inst_32069);
var inst_32075 = cljs.core.count(inst_32073);
var inst_32050 = inst_32074;
var inst_32051 = inst_32073;
var inst_32052 = inst_32075;
var inst_32053 = (0);
var state_32111__$1 = (function (){var statearr_32201 = state_32111;
(statearr_32201[(20)] = inst_32050);

(statearr_32201[(21)] = inst_32052);

(statearr_32201[(10)] = inst_32051);

(statearr_32201[(12)] = inst_32053);

return statearr_32201;
})();
var statearr_32203_33748 = state_32111__$1;
(statearr_32203_33748[(2)] = null);

(statearr_32203_33748[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32112 === (41))){
var inst_32069 = (state_32111[(25)]);
var inst_32086 = (state_32111[(2)]);
var inst_32087 = cljs.core.next(inst_32069);
var inst_32050 = inst_32087;
var inst_32051 = null;
var inst_32052 = (0);
var inst_32053 = (0);
var state_32111__$1 = (function (){var statearr_32204 = state_32111;
(statearr_32204[(20)] = inst_32050);

(statearr_32204[(21)] = inst_32052);

(statearr_32204[(27)] = inst_32086);

(statearr_32204[(10)] = inst_32051);

(statearr_32204[(12)] = inst_32053);

return statearr_32204;
})();
var statearr_32205_33749 = state_32111__$1;
(statearr_32205_33749[(2)] = null);

(statearr_32205_33749[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32112 === (43))){
var state_32111__$1 = state_32111;
var statearr_32206_33753 = state_32111__$1;
(statearr_32206_33753[(2)] = null);

(statearr_32206_33753[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32112 === (29))){
var inst_32095 = (state_32111[(2)]);
var state_32111__$1 = state_32111;
var statearr_32208_33757 = state_32111__$1;
(statearr_32208_33757[(2)] = inst_32095);

(statearr_32208_33757[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32112 === (44))){
var inst_32104 = (state_32111[(2)]);
var state_32111__$1 = (function (){var statearr_32214 = state_32111;
(statearr_32214[(28)] = inst_32104);

return statearr_32214;
})();
var statearr_32215_33758 = state_32111__$1;
(statearr_32215_33758[(2)] = null);

(statearr_32215_33758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32112 === (6))){
var inst_32042 = (state_32111[(29)]);
var inst_32041 = cljs.core.deref(cs);
var inst_32042__$1 = cljs.core.keys(inst_32041);
var inst_32043 = cljs.core.count(inst_32042__$1);
var inst_32044 = cljs.core.reset_BANG_(dctr,inst_32043);
var inst_32049 = cljs.core.seq(inst_32042__$1);
var inst_32050 = inst_32049;
var inst_32051 = null;
var inst_32052 = (0);
var inst_32053 = (0);
var state_32111__$1 = (function (){var statearr_32219 = state_32111;
(statearr_32219[(20)] = inst_32050);

(statearr_32219[(21)] = inst_32052);

(statearr_32219[(30)] = inst_32044);

(statearr_32219[(29)] = inst_32042__$1);

(statearr_32219[(10)] = inst_32051);

(statearr_32219[(12)] = inst_32053);

return statearr_32219;
})();
var statearr_32220_33765 = state_32111__$1;
(statearr_32220_33765[(2)] = null);

(statearr_32220_33765[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32112 === (28))){
var inst_32050 = (state_32111[(20)]);
var inst_32069 = (state_32111[(25)]);
var inst_32069__$1 = cljs.core.seq(inst_32050);
var state_32111__$1 = (function (){var statearr_32221 = state_32111;
(statearr_32221[(25)] = inst_32069__$1);

return statearr_32221;
})();
if(inst_32069__$1){
var statearr_32222_33766 = state_32111__$1;
(statearr_32222_33766[(1)] = (33));

} else {
var statearr_32223_33770 = state_32111__$1;
(statearr_32223_33770[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32112 === (25))){
var inst_32052 = (state_32111[(21)]);
var inst_32053 = (state_32111[(12)]);
var inst_32055 = (inst_32053 < inst_32052);
var inst_32056 = inst_32055;
var state_32111__$1 = state_32111;
if(cljs.core.truth_(inst_32056)){
var statearr_32228_33774 = state_32111__$1;
(statearr_32228_33774[(1)] = (27));

} else {
var statearr_32229_33775 = state_32111__$1;
(statearr_32229_33775[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32112 === (34))){
var state_32111__$1 = state_32111;
var statearr_32233_33776 = state_32111__$1;
(statearr_32233_33776[(2)] = null);

(statearr_32233_33776[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32112 === (17))){
var state_32111__$1 = state_32111;
var statearr_32234_33777 = state_32111__$1;
(statearr_32234_33777[(2)] = null);

(statearr_32234_33777[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32112 === (3))){
var inst_32109 = (state_32111[(2)]);
var state_32111__$1 = state_32111;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32111__$1,inst_32109);
} else {
if((state_val_32112 === (12))){
var inst_32037 = (state_32111[(2)]);
var state_32111__$1 = state_32111;
var statearr_32235_33778 = state_32111__$1;
(statearr_32235_33778[(2)] = inst_32037);

(statearr_32235_33778[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32112 === (2))){
var state_32111__$1 = state_32111;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32111__$1,(4),ch);
} else {
if((state_val_32112 === (23))){
var state_32111__$1 = state_32111;
var statearr_32239_33780 = state_32111__$1;
(statearr_32239_33780[(2)] = null);

(statearr_32239_33780[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32112 === (35))){
var inst_32093 = (state_32111[(2)]);
var state_32111__$1 = state_32111;
var statearr_32243_33781 = state_32111__$1;
(statearr_32243_33781[(2)] = inst_32093);

(statearr_32243_33781[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32112 === (19))){
var inst_32009 = (state_32111[(7)]);
var inst_32013 = cljs.core.chunk_first(inst_32009);
var inst_32014 = cljs.core.chunk_rest(inst_32009);
var inst_32015 = cljs.core.count(inst_32013);
var inst_31987 = inst_32014;
var inst_31988 = inst_32013;
var inst_31989 = inst_32015;
var inst_31990 = (0);
var state_32111__$1 = (function (){var statearr_32244 = state_32111;
(statearr_32244[(13)] = inst_31988);

(statearr_32244[(14)] = inst_31987);

(statearr_32244[(16)] = inst_31990);

(statearr_32244[(17)] = inst_31989);

return statearr_32244;
})();
var statearr_32245_33782 = state_32111__$1;
(statearr_32245_33782[(2)] = null);

(statearr_32245_33782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32112 === (11))){
var inst_32009 = (state_32111[(7)]);
var inst_31987 = (state_32111[(14)]);
var inst_32009__$1 = cljs.core.seq(inst_31987);
var state_32111__$1 = (function (){var statearr_32249 = state_32111;
(statearr_32249[(7)] = inst_32009__$1);

return statearr_32249;
})();
if(inst_32009__$1){
var statearr_32250_33783 = state_32111__$1;
(statearr_32250_33783[(1)] = (16));

} else {
var statearr_32254_33784 = state_32111__$1;
(statearr_32254_33784[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32112 === (9))){
var inst_32039 = (state_32111[(2)]);
var state_32111__$1 = state_32111;
var statearr_32255_33785 = state_32111__$1;
(statearr_32255_33785[(2)] = inst_32039);

(statearr_32255_33785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32112 === (5))){
var inst_31985 = cljs.core.deref(cs);
var inst_31986 = cljs.core.seq(inst_31985);
var inst_31987 = inst_31986;
var inst_31988 = null;
var inst_31989 = (0);
var inst_31990 = (0);
var state_32111__$1 = (function (){var statearr_32256 = state_32111;
(statearr_32256[(13)] = inst_31988);

(statearr_32256[(14)] = inst_31987);

(statearr_32256[(16)] = inst_31990);

(statearr_32256[(17)] = inst_31989);

return statearr_32256;
})();
var statearr_32258_33786 = state_32111__$1;
(statearr_32258_33786[(2)] = null);

(statearr_32258_33786[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32112 === (14))){
var state_32111__$1 = state_32111;
var statearr_32259_33787 = state_32111__$1;
(statearr_32259_33787[(2)] = null);

(statearr_32259_33787[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32112 === (45))){
var inst_32101 = (state_32111[(2)]);
var state_32111__$1 = state_32111;
var statearr_32262_33788 = state_32111__$1;
(statearr_32262_33788[(2)] = inst_32101);

(statearr_32262_33788[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32112 === (26))){
var inst_32042 = (state_32111[(29)]);
var inst_32097 = (state_32111[(2)]);
var inst_32098 = cljs.core.seq(inst_32042);
var state_32111__$1 = (function (){var statearr_32263 = state_32111;
(statearr_32263[(31)] = inst_32097);

return statearr_32263;
})();
if(inst_32098){
var statearr_32264_33791 = state_32111__$1;
(statearr_32264_33791[(1)] = (42));

} else {
var statearr_32265_33792 = state_32111__$1;
(statearr_32265_33792[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32112 === (16))){
var inst_32009 = (state_32111[(7)]);
var inst_32011 = cljs.core.chunked_seq_QMARK_(inst_32009);
var state_32111__$1 = state_32111;
if(inst_32011){
var statearr_32266_33793 = state_32111__$1;
(statearr_32266_33793[(1)] = (19));

} else {
var statearr_32267_33794 = state_32111__$1;
(statearr_32267_33794[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32112 === (38))){
var inst_32090 = (state_32111[(2)]);
var state_32111__$1 = state_32111;
var statearr_32268_33795 = state_32111__$1;
(statearr_32268_33795[(2)] = inst_32090);

(statearr_32268_33795[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32112 === (30))){
var state_32111__$1 = state_32111;
var statearr_32269_33796 = state_32111__$1;
(statearr_32269_33796[(2)] = null);

(statearr_32269_33796[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32112 === (10))){
var inst_31988 = (state_32111[(13)]);
var inst_31990 = (state_32111[(16)]);
var inst_31998 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31988,inst_31990);
var inst_31999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31998,(0),null);
var inst_32000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31998,(1),null);
var state_32111__$1 = (function (){var statearr_32270 = state_32111;
(statearr_32270[(26)] = inst_31999);

return statearr_32270;
})();
if(cljs.core.truth_(inst_32000)){
var statearr_32271_33797 = state_32111__$1;
(statearr_32271_33797[(1)] = (13));

} else {
var statearr_32272_33798 = state_32111__$1;
(statearr_32272_33798[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32112 === (18))){
var inst_32035 = (state_32111[(2)]);
var state_32111__$1 = state_32111;
var statearr_32273_33799 = state_32111__$1;
(statearr_32273_33799[(2)] = inst_32035);

(statearr_32273_33799[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32112 === (42))){
var state_32111__$1 = state_32111;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32111__$1,(45),dchan);
} else {
if((state_val_32112 === (37))){
var inst_32078 = (state_32111[(23)]);
var inst_32069 = (state_32111[(25)]);
var inst_31978 = (state_32111[(11)]);
var inst_32078__$1 = cljs.core.first(inst_32069);
var inst_32079 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32078__$1,inst_31978,done);
var state_32111__$1 = (function (){var statearr_32277 = state_32111;
(statearr_32277[(23)] = inst_32078__$1);

return statearr_32277;
})();
if(cljs.core.truth_(inst_32079)){
var statearr_32278_33803 = state_32111__$1;
(statearr_32278_33803[(1)] = (39));

} else {
var statearr_32279_33804 = state_32111__$1;
(statearr_32279_33804[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32112 === (8))){
var inst_31990 = (state_32111[(16)]);
var inst_31989 = (state_32111[(17)]);
var inst_31992 = (inst_31990 < inst_31989);
var inst_31993 = inst_31992;
var state_32111__$1 = state_32111;
if(cljs.core.truth_(inst_31993)){
var statearr_32280_33805 = state_32111__$1;
(statearr_32280_33805[(1)] = (10));

} else {
var statearr_32281_33809 = state_32111__$1;
(statearr_32281_33809[(1)] = (11));

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
});})(c__31279__auto___33695,cs,m,dchan,dctr,done))
;
return ((function (switch__31054__auto__,c__31279__auto___33695,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__31055__auto__ = null;
var cljs$core$async$mult_$_state_machine__31055__auto____0 = (function (){
var statearr_32282 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32282[(0)] = cljs$core$async$mult_$_state_machine__31055__auto__);

(statearr_32282[(1)] = (1));

return statearr_32282;
});
var cljs$core$async$mult_$_state_machine__31055__auto____1 = (function (state_32111){
while(true){
var ret_value__31056__auto__ = (function (){try{while(true){
var result__31057__auto__ = switch__31054__auto__(state_32111);
if(cljs.core.keyword_identical_QMARK_(result__31057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31057__auto__;
}
break;
}
}catch (e32285){if((e32285 instanceof Object)){
var ex__31058__auto__ = e32285;
var statearr_32286_33813 = state_32111;
(statearr_32286_33813[(5)] = ex__31058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32285;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33814 = state_32111;
state_32111 = G__33814;
continue;
} else {
return ret_value__31056__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31055__auto__ = function(state_32111){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31055__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31055__auto____1.call(this,state_32111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__31055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31055__auto____0;
cljs$core$async$mult_$_state_machine__31055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31055__auto____1;
return cljs$core$async$mult_$_state_machine__31055__auto__;
})()
;})(switch__31054__auto__,c__31279__auto___33695,cs,m,dchan,dctr,done))
})();
var state__31281__auto__ = (function (){var statearr_32287 = (f__31280__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31280__auto__.cljs$core$IFn$_invoke$arity$0() : f__31280__auto__.call(null));
(statearr_32287[(6)] = c__31279__auto___33695);

return statearr_32287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31281__auto__);
});})(c__31279__auto___33695,cs,m,dchan,dctr,done))
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
var G__32293 = arguments.length;
switch (G__32293) {
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
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33837 = arguments.length;
var i__4731__auto___33838 = (0);
while(true){
if((i__4731__auto___33838 < len__4730__auto___33837)){
args__4736__auto__.push((arguments[i__4731__auto___33838]));

var G__33839 = (i__4731__auto___33838 + (1));
i__4731__auto___33838 = G__33839;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32326){
var map__32327 = p__32326;
var map__32327__$1 = (((((!((map__32327 == null))))?(((((map__32327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32327):map__32327);
var opts = map__32327__$1;
var statearr_32332_33840 = state;
(statearr_32332_33840[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts(((function (map__32327,map__32327__$1,opts){
return (function (val){
var statearr_32336_33841 = state;
(statearr_32336_33841[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__32327,map__32327__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_32337_33842 = state;
(statearr_32337_33842[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32316){
var G__32317 = cljs.core.first(seq32316);
var seq32316__$1 = cljs.core.next(seq32316);
var G__32318 = cljs.core.first(seq32316__$1);
var seq32316__$2 = cljs.core.next(seq32316__$1);
var G__32319 = cljs.core.first(seq32316__$2);
var seq32316__$3 = cljs.core.next(seq32316__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32317,G__32318,G__32319,seq32316__$3);
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32344 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32344 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32345){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32345 = meta32345;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32346,meta32345__$1){
var self__ = this;
var _32346__$1 = this;
return (new cljs.core.async.t_cljs$core$async32344(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32345__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32344.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32346){
var self__ = this;
var _32346__$1 = this;
return self__.meta32345;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32344.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32344.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32344.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32344.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32344.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32344.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32344.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32344.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32344.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32345","meta32345",300726568,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32344.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32344.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32344";

cljs.core.async.t_cljs$core$async32344.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32344");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32344.
 */
cljs.core.async.__GT_t_cljs$core$async32344 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32344(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32345){
return (new cljs.core.async.t_cljs$core$async32344(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32345));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32344(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31279__auto___33855 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31279__auto___33855,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__31280__auto__ = (function (){var switch__31054__auto__ = ((function (c__31279__auto___33855,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32464){
var state_val_32465 = (state_32464[(1)]);
if((state_val_32465 === (7))){
var inst_32379 = (state_32464[(2)]);
var state_32464__$1 = state_32464;
var statearr_32466_33861 = state_32464__$1;
(statearr_32466_33861[(2)] = inst_32379);

(statearr_32466_33861[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (20))){
var inst_32391 = (state_32464[(7)]);
var state_32464__$1 = state_32464;
var statearr_32467_33863 = state_32464__$1;
(statearr_32467_33863[(2)] = inst_32391);

(statearr_32467_33863[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (27))){
var state_32464__$1 = state_32464;
var statearr_32468_33864 = state_32464__$1;
(statearr_32468_33864[(2)] = null);

(statearr_32468_33864[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (1))){
var inst_32366 = (state_32464[(8)]);
var inst_32366__$1 = calc_state();
var inst_32368 = (inst_32366__$1 == null);
var inst_32369 = cljs.core.not(inst_32368);
var state_32464__$1 = (function (){var statearr_32469 = state_32464;
(statearr_32469[(8)] = inst_32366__$1);

return statearr_32469;
})();
if(inst_32369){
var statearr_32470_33865 = state_32464__$1;
(statearr_32470_33865[(1)] = (2));

} else {
var statearr_32471_33866 = state_32464__$1;
(statearr_32471_33866[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (24))){
var inst_32424 = (state_32464[(9)]);
var inst_32415 = (state_32464[(10)]);
var inst_32438 = (state_32464[(11)]);
var inst_32438__$1 = (inst_32415.cljs$core$IFn$_invoke$arity$1 ? inst_32415.cljs$core$IFn$_invoke$arity$1(inst_32424) : inst_32415.call(null,inst_32424));
var state_32464__$1 = (function (){var statearr_32472 = state_32464;
(statearr_32472[(11)] = inst_32438__$1);

return statearr_32472;
})();
if(cljs.core.truth_(inst_32438__$1)){
var statearr_32473_33867 = state_32464__$1;
(statearr_32473_33867[(1)] = (29));

} else {
var statearr_32474_33868 = state_32464__$1;
(statearr_32474_33868[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (4))){
var inst_32382 = (state_32464[(2)]);
var state_32464__$1 = state_32464;
if(cljs.core.truth_(inst_32382)){
var statearr_32475_33869 = state_32464__$1;
(statearr_32475_33869[(1)] = (8));

} else {
var statearr_32476_33870 = state_32464__$1;
(statearr_32476_33870[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (15))){
var inst_32409 = (state_32464[(2)]);
var state_32464__$1 = state_32464;
if(cljs.core.truth_(inst_32409)){
var statearr_32477_33871 = state_32464__$1;
(statearr_32477_33871[(1)] = (19));

} else {
var statearr_32478_33872 = state_32464__$1;
(statearr_32478_33872[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (21))){
var inst_32414 = (state_32464[(12)]);
var inst_32414__$1 = (state_32464[(2)]);
var inst_32415 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32414__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32416 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32414__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32417 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32414__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32464__$1 = (function (){var statearr_32483 = state_32464;
(statearr_32483[(12)] = inst_32414__$1);

(statearr_32483[(13)] = inst_32416);

(statearr_32483[(10)] = inst_32415);

return statearr_32483;
})();
return cljs.core.async.ioc_alts_BANG_(state_32464__$1,(22),inst_32417);
} else {
if((state_val_32465 === (31))){
var inst_32446 = (state_32464[(2)]);
var state_32464__$1 = state_32464;
if(cljs.core.truth_(inst_32446)){
var statearr_32489_33873 = state_32464__$1;
(statearr_32489_33873[(1)] = (32));

} else {
var statearr_32490_33874 = state_32464__$1;
(statearr_32490_33874[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (32))){
var inst_32423 = (state_32464[(14)]);
var state_32464__$1 = state_32464;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32464__$1,(35),out,inst_32423);
} else {
if((state_val_32465 === (33))){
var inst_32414 = (state_32464[(12)]);
var inst_32391 = inst_32414;
var state_32464__$1 = (function (){var statearr_32491 = state_32464;
(statearr_32491[(7)] = inst_32391);

return statearr_32491;
})();
var statearr_32492_33875 = state_32464__$1;
(statearr_32492_33875[(2)] = null);

(statearr_32492_33875[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (13))){
var inst_32391 = (state_32464[(7)]);
var inst_32398 = inst_32391.cljs$lang$protocol_mask$partition0$;
var inst_32399 = (inst_32398 & (64));
var inst_32400 = inst_32391.cljs$core$ISeq$;
var inst_32401 = (cljs.core.PROTOCOL_SENTINEL === inst_32400);
var inst_32402 = ((inst_32399) || (inst_32401));
var state_32464__$1 = state_32464;
if(cljs.core.truth_(inst_32402)){
var statearr_32493_33876 = state_32464__$1;
(statearr_32493_33876[(1)] = (16));

} else {
var statearr_32494_33877 = state_32464__$1;
(statearr_32494_33877[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (22))){
var inst_32424 = (state_32464[(9)]);
var inst_32423 = (state_32464[(14)]);
var inst_32422 = (state_32464[(2)]);
var inst_32423__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32422,(0),null);
var inst_32424__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32422,(1),null);
var inst_32425 = (inst_32423__$1 == null);
var inst_32426 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32424__$1,change);
var inst_32427 = ((inst_32425) || (inst_32426));
var state_32464__$1 = (function (){var statearr_32499 = state_32464;
(statearr_32499[(9)] = inst_32424__$1);

(statearr_32499[(14)] = inst_32423__$1);

return statearr_32499;
})();
if(cljs.core.truth_(inst_32427)){
var statearr_32500_33878 = state_32464__$1;
(statearr_32500_33878[(1)] = (23));

} else {
var statearr_32501_33879 = state_32464__$1;
(statearr_32501_33879[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (36))){
var inst_32414 = (state_32464[(12)]);
var inst_32391 = inst_32414;
var state_32464__$1 = (function (){var statearr_32502 = state_32464;
(statearr_32502[(7)] = inst_32391);

return statearr_32502;
})();
var statearr_32503_33881 = state_32464__$1;
(statearr_32503_33881[(2)] = null);

(statearr_32503_33881[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (29))){
var inst_32438 = (state_32464[(11)]);
var state_32464__$1 = state_32464;
var statearr_32504_33882 = state_32464__$1;
(statearr_32504_33882[(2)] = inst_32438);

(statearr_32504_33882[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (6))){
var state_32464__$1 = state_32464;
var statearr_32505_33884 = state_32464__$1;
(statearr_32505_33884[(2)] = false);

(statearr_32505_33884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (28))){
var inst_32434 = (state_32464[(2)]);
var inst_32435 = calc_state();
var inst_32391 = inst_32435;
var state_32464__$1 = (function (){var statearr_32506 = state_32464;
(statearr_32506[(15)] = inst_32434);

(statearr_32506[(7)] = inst_32391);

return statearr_32506;
})();
var statearr_32507_33889 = state_32464__$1;
(statearr_32507_33889[(2)] = null);

(statearr_32507_33889[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (25))){
var inst_32460 = (state_32464[(2)]);
var state_32464__$1 = state_32464;
var statearr_32508_33890 = state_32464__$1;
(statearr_32508_33890[(2)] = inst_32460);

(statearr_32508_33890[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (34))){
var inst_32458 = (state_32464[(2)]);
var state_32464__$1 = state_32464;
var statearr_32509_33891 = state_32464__$1;
(statearr_32509_33891[(2)] = inst_32458);

(statearr_32509_33891[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (17))){
var state_32464__$1 = state_32464;
var statearr_32510_33892 = state_32464__$1;
(statearr_32510_33892[(2)] = false);

(statearr_32510_33892[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (3))){
var state_32464__$1 = state_32464;
var statearr_32511_33893 = state_32464__$1;
(statearr_32511_33893[(2)] = false);

(statearr_32511_33893[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (12))){
var inst_32462 = (state_32464[(2)]);
var state_32464__$1 = state_32464;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32464__$1,inst_32462);
} else {
if((state_val_32465 === (2))){
var inst_32366 = (state_32464[(8)]);
var inst_32371 = inst_32366.cljs$lang$protocol_mask$partition0$;
var inst_32372 = (inst_32371 & (64));
var inst_32373 = inst_32366.cljs$core$ISeq$;
var inst_32374 = (cljs.core.PROTOCOL_SENTINEL === inst_32373);
var inst_32375 = ((inst_32372) || (inst_32374));
var state_32464__$1 = state_32464;
if(cljs.core.truth_(inst_32375)){
var statearr_32512_33896 = state_32464__$1;
(statearr_32512_33896[(1)] = (5));

} else {
var statearr_32513_33897 = state_32464__$1;
(statearr_32513_33897[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (23))){
var inst_32423 = (state_32464[(14)]);
var inst_32429 = (inst_32423 == null);
var state_32464__$1 = state_32464;
if(cljs.core.truth_(inst_32429)){
var statearr_32514_33898 = state_32464__$1;
(statearr_32514_33898[(1)] = (26));

} else {
var statearr_32515_33900 = state_32464__$1;
(statearr_32515_33900[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (35))){
var inst_32449 = (state_32464[(2)]);
var state_32464__$1 = state_32464;
if(cljs.core.truth_(inst_32449)){
var statearr_32516_33902 = state_32464__$1;
(statearr_32516_33902[(1)] = (36));

} else {
var statearr_32517_33903 = state_32464__$1;
(statearr_32517_33903[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (19))){
var inst_32391 = (state_32464[(7)]);
var inst_32411 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32391);
var state_32464__$1 = state_32464;
var statearr_32518_33904 = state_32464__$1;
(statearr_32518_33904[(2)] = inst_32411);

(statearr_32518_33904[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (11))){
var inst_32391 = (state_32464[(7)]);
var inst_32395 = (inst_32391 == null);
var inst_32396 = cljs.core.not(inst_32395);
var state_32464__$1 = state_32464;
if(inst_32396){
var statearr_32519_33905 = state_32464__$1;
(statearr_32519_33905[(1)] = (13));

} else {
var statearr_32520_33906 = state_32464__$1;
(statearr_32520_33906[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (9))){
var inst_32366 = (state_32464[(8)]);
var state_32464__$1 = state_32464;
var statearr_32521_33907 = state_32464__$1;
(statearr_32521_33907[(2)] = inst_32366);

(statearr_32521_33907[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (5))){
var state_32464__$1 = state_32464;
var statearr_32522_33909 = state_32464__$1;
(statearr_32522_33909[(2)] = true);

(statearr_32522_33909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (14))){
var state_32464__$1 = state_32464;
var statearr_32523_33911 = state_32464__$1;
(statearr_32523_33911[(2)] = false);

(statearr_32523_33911[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (26))){
var inst_32424 = (state_32464[(9)]);
var inst_32431 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32424);
var state_32464__$1 = state_32464;
var statearr_32524_33912 = state_32464__$1;
(statearr_32524_33912[(2)] = inst_32431);

(statearr_32524_33912[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (16))){
var state_32464__$1 = state_32464;
var statearr_32525_33913 = state_32464__$1;
(statearr_32525_33913[(2)] = true);

(statearr_32525_33913[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (38))){
var inst_32454 = (state_32464[(2)]);
var state_32464__$1 = state_32464;
var statearr_32526_33914 = state_32464__$1;
(statearr_32526_33914[(2)] = inst_32454);

(statearr_32526_33914[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (30))){
var inst_32424 = (state_32464[(9)]);
var inst_32416 = (state_32464[(13)]);
var inst_32415 = (state_32464[(10)]);
var inst_32441 = cljs.core.empty_QMARK_(inst_32415);
var inst_32442 = (inst_32416.cljs$core$IFn$_invoke$arity$1 ? inst_32416.cljs$core$IFn$_invoke$arity$1(inst_32424) : inst_32416.call(null,inst_32424));
var inst_32443 = cljs.core.not(inst_32442);
var inst_32444 = ((inst_32441) && (inst_32443));
var state_32464__$1 = state_32464;
var statearr_32527_33915 = state_32464__$1;
(statearr_32527_33915[(2)] = inst_32444);

(statearr_32527_33915[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (10))){
var inst_32366 = (state_32464[(8)]);
var inst_32387 = (state_32464[(2)]);
var inst_32388 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32387,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32387,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32390 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32387,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32391 = inst_32366;
var state_32464__$1 = (function (){var statearr_32528 = state_32464;
(statearr_32528[(16)] = inst_32388);

(statearr_32528[(7)] = inst_32391);

(statearr_32528[(17)] = inst_32390);

(statearr_32528[(18)] = inst_32389);

return statearr_32528;
})();
var statearr_32529_33916 = state_32464__$1;
(statearr_32529_33916[(2)] = null);

(statearr_32529_33916[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (18))){
var inst_32406 = (state_32464[(2)]);
var state_32464__$1 = state_32464;
var statearr_32530_33917 = state_32464__$1;
(statearr_32530_33917[(2)] = inst_32406);

(statearr_32530_33917[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (37))){
var state_32464__$1 = state_32464;
var statearr_32531_33918 = state_32464__$1;
(statearr_32531_33918[(2)] = null);

(statearr_32531_33918[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32465 === (8))){
var inst_32366 = (state_32464[(8)]);
var inst_32384 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32366);
var state_32464__$1 = state_32464;
var statearr_32532_33920 = state_32464__$1;
(statearr_32532_33920[(2)] = inst_32384);

(statearr_32532_33920[(1)] = (10));


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
});})(c__31279__auto___33855,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__31054__auto__,c__31279__auto___33855,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__31055__auto__ = null;
var cljs$core$async$mix_$_state_machine__31055__auto____0 = (function (){
var statearr_32533 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32533[(0)] = cljs$core$async$mix_$_state_machine__31055__auto__);

(statearr_32533[(1)] = (1));

return statearr_32533;
});
var cljs$core$async$mix_$_state_machine__31055__auto____1 = (function (state_32464){
while(true){
var ret_value__31056__auto__ = (function (){try{while(true){
var result__31057__auto__ = switch__31054__auto__(state_32464);
if(cljs.core.keyword_identical_QMARK_(result__31057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31057__auto__;
}
break;
}
}catch (e32534){if((e32534 instanceof Object)){
var ex__31058__auto__ = e32534;
var statearr_32535_33922 = state_32464;
(statearr_32535_33922[(5)] = ex__31058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32534;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33923 = state_32464;
state_32464 = G__33923;
continue;
} else {
return ret_value__31056__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31055__auto__ = function(state_32464){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31055__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31055__auto____1.call(this,state_32464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__31055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31055__auto____0;
cljs$core$async$mix_$_state_machine__31055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31055__auto____1;
return cljs$core$async$mix_$_state_machine__31055__auto__;
})()
;})(switch__31054__auto__,c__31279__auto___33855,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__31281__auto__ = (function (){var statearr_32536 = (f__31280__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31280__auto__.cljs$core$IFn$_invoke$arity$0() : f__31280__auto__.call(null));
(statearr_32536[(6)] = c__31279__auto___33855);

return statearr_32536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31281__auto__);
});})(c__31279__auto___33855,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32548 = arguments.length;
switch (G__32548) {
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
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
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
var G__32551 = arguments.length;
switch (G__32551) {
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
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__32549_SHARP_){
if(cljs.core.truth_((p1__32549_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32549_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32549_SHARP_.call(null,topic)))){
return p1__32549_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32549_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32552 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32552 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32553){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32553 = meta32553;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32554,meta32553__$1){
var self__ = this;
var _32554__$1 = this;
return (new cljs.core.async.t_cljs$core$async32552(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32553__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32552.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32554){
var self__ = this;
var _32554__$1 = this;
return self__.meta32553;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32552.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32552.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32552.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32552.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32552.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32552.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32552.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32552.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32553","meta32553",-270231369,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32552.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32552.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32552";

cljs.core.async.t_cljs$core$async32552.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32552");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32552.
 */
cljs.core.async.__GT_t_cljs$core$async32552 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32552(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32553){
return (new cljs.core.async.t_cljs$core$async32552(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32553));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32552(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31279__auto___33926 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31279__auto___33926,mults,ensure_mult,p){
return (function (){
var f__31280__auto__ = (function (){var switch__31054__auto__ = ((function (c__31279__auto___33926,mults,ensure_mult,p){
return (function (state_32626){
var state_val_32627 = (state_32626[(1)]);
if((state_val_32627 === (7))){
var inst_32622 = (state_32626[(2)]);
var state_32626__$1 = state_32626;
var statearr_32628_33927 = state_32626__$1;
(statearr_32628_33927[(2)] = inst_32622);

(statearr_32628_33927[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (20))){
var state_32626__$1 = state_32626;
var statearr_32629_33928 = state_32626__$1;
(statearr_32629_33928[(2)] = null);

(statearr_32629_33928[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (1))){
var state_32626__$1 = state_32626;
var statearr_32630_33929 = state_32626__$1;
(statearr_32630_33929[(2)] = null);

(statearr_32630_33929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (24))){
var inst_32605 = (state_32626[(7)]);
var inst_32614 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32605);
var state_32626__$1 = state_32626;
var statearr_32631_33931 = state_32626__$1;
(statearr_32631_33931[(2)] = inst_32614);

(statearr_32631_33931[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (4))){
var inst_32557 = (state_32626[(8)]);
var inst_32557__$1 = (state_32626[(2)]);
var inst_32558 = (inst_32557__$1 == null);
var state_32626__$1 = (function (){var statearr_32632 = state_32626;
(statearr_32632[(8)] = inst_32557__$1);

return statearr_32632;
})();
if(cljs.core.truth_(inst_32558)){
var statearr_32633_33932 = state_32626__$1;
(statearr_32633_33932[(1)] = (5));

} else {
var statearr_32634_33933 = state_32626__$1;
(statearr_32634_33933[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (15))){
var inst_32599 = (state_32626[(2)]);
var state_32626__$1 = state_32626;
var statearr_32635_33934 = state_32626__$1;
(statearr_32635_33934[(2)] = inst_32599);

(statearr_32635_33934[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (21))){
var inst_32619 = (state_32626[(2)]);
var state_32626__$1 = (function (){var statearr_32636 = state_32626;
(statearr_32636[(9)] = inst_32619);

return statearr_32636;
})();
var statearr_32637_33939 = state_32626__$1;
(statearr_32637_33939[(2)] = null);

(statearr_32637_33939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (13))){
var inst_32581 = (state_32626[(10)]);
var inst_32583 = cljs.core.chunked_seq_QMARK_(inst_32581);
var state_32626__$1 = state_32626;
if(inst_32583){
var statearr_32638_33940 = state_32626__$1;
(statearr_32638_33940[(1)] = (16));

} else {
var statearr_32639_33941 = state_32626__$1;
(statearr_32639_33941[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (22))){
var inst_32611 = (state_32626[(2)]);
var state_32626__$1 = state_32626;
if(cljs.core.truth_(inst_32611)){
var statearr_32640_33942 = state_32626__$1;
(statearr_32640_33942[(1)] = (23));

} else {
var statearr_32641_33943 = state_32626__$1;
(statearr_32641_33943[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (6))){
var inst_32557 = (state_32626[(8)]);
var inst_32605 = (state_32626[(7)]);
var inst_32607 = (state_32626[(11)]);
var inst_32605__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32557) : topic_fn.call(null,inst_32557));
var inst_32606 = cljs.core.deref(mults);
var inst_32607__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32606,inst_32605__$1);
var state_32626__$1 = (function (){var statearr_32642 = state_32626;
(statearr_32642[(7)] = inst_32605__$1);

(statearr_32642[(11)] = inst_32607__$1);

return statearr_32642;
})();
if(cljs.core.truth_(inst_32607__$1)){
var statearr_32643_33944 = state_32626__$1;
(statearr_32643_33944[(1)] = (19));

} else {
var statearr_32644_33945 = state_32626__$1;
(statearr_32644_33945[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (25))){
var inst_32616 = (state_32626[(2)]);
var state_32626__$1 = state_32626;
var statearr_32645_33946 = state_32626__$1;
(statearr_32645_33946[(2)] = inst_32616);

(statearr_32645_33946[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (17))){
var inst_32581 = (state_32626[(10)]);
var inst_32590 = cljs.core.first(inst_32581);
var inst_32591 = cljs.core.async.muxch_STAR_(inst_32590);
var inst_32592 = cljs.core.async.close_BANG_(inst_32591);
var inst_32593 = cljs.core.next(inst_32581);
var inst_32567 = inst_32593;
var inst_32568 = null;
var inst_32569 = (0);
var inst_32570 = (0);
var state_32626__$1 = (function (){var statearr_32646 = state_32626;
(statearr_32646[(12)] = inst_32569);

(statearr_32646[(13)] = inst_32568);

(statearr_32646[(14)] = inst_32592);

(statearr_32646[(15)] = inst_32567);

(statearr_32646[(16)] = inst_32570);

return statearr_32646;
})();
var statearr_32647_33947 = state_32626__$1;
(statearr_32647_33947[(2)] = null);

(statearr_32647_33947[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (3))){
var inst_32624 = (state_32626[(2)]);
var state_32626__$1 = state_32626;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32626__$1,inst_32624);
} else {
if((state_val_32627 === (12))){
var inst_32601 = (state_32626[(2)]);
var state_32626__$1 = state_32626;
var statearr_32648_33952 = state_32626__$1;
(statearr_32648_33952[(2)] = inst_32601);

(statearr_32648_33952[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (2))){
var state_32626__$1 = state_32626;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32626__$1,(4),ch);
} else {
if((state_val_32627 === (23))){
var state_32626__$1 = state_32626;
var statearr_32649_33956 = state_32626__$1;
(statearr_32649_33956[(2)] = null);

(statearr_32649_33956[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (19))){
var inst_32557 = (state_32626[(8)]);
var inst_32607 = (state_32626[(11)]);
var inst_32609 = cljs.core.async.muxch_STAR_(inst_32607);
var state_32626__$1 = state_32626;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32626__$1,(22),inst_32609,inst_32557);
} else {
if((state_val_32627 === (11))){
var inst_32581 = (state_32626[(10)]);
var inst_32567 = (state_32626[(15)]);
var inst_32581__$1 = cljs.core.seq(inst_32567);
var state_32626__$1 = (function (){var statearr_32650 = state_32626;
(statearr_32650[(10)] = inst_32581__$1);

return statearr_32650;
})();
if(inst_32581__$1){
var statearr_32651_33960 = state_32626__$1;
(statearr_32651_33960[(1)] = (13));

} else {
var statearr_32652_33961 = state_32626__$1;
(statearr_32652_33961[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (9))){
var inst_32603 = (state_32626[(2)]);
var state_32626__$1 = state_32626;
var statearr_32653_33965 = state_32626__$1;
(statearr_32653_33965[(2)] = inst_32603);

(statearr_32653_33965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (5))){
var inst_32564 = cljs.core.deref(mults);
var inst_32565 = cljs.core.vals(inst_32564);
var inst_32566 = cljs.core.seq(inst_32565);
var inst_32567 = inst_32566;
var inst_32568 = null;
var inst_32569 = (0);
var inst_32570 = (0);
var state_32626__$1 = (function (){var statearr_32654 = state_32626;
(statearr_32654[(12)] = inst_32569);

(statearr_32654[(13)] = inst_32568);

(statearr_32654[(15)] = inst_32567);

(statearr_32654[(16)] = inst_32570);

return statearr_32654;
})();
var statearr_32655_33969 = state_32626__$1;
(statearr_32655_33969[(2)] = null);

(statearr_32655_33969[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (14))){
var state_32626__$1 = state_32626;
var statearr_32660_33974 = state_32626__$1;
(statearr_32660_33974[(2)] = null);

(statearr_32660_33974[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (16))){
var inst_32581 = (state_32626[(10)]);
var inst_32585 = cljs.core.chunk_first(inst_32581);
var inst_32586 = cljs.core.chunk_rest(inst_32581);
var inst_32587 = cljs.core.count(inst_32585);
var inst_32567 = inst_32586;
var inst_32568 = inst_32585;
var inst_32569 = inst_32587;
var inst_32570 = (0);
var state_32626__$1 = (function (){var statearr_32661 = state_32626;
(statearr_32661[(12)] = inst_32569);

(statearr_32661[(13)] = inst_32568);

(statearr_32661[(15)] = inst_32567);

(statearr_32661[(16)] = inst_32570);

return statearr_32661;
})();
var statearr_32662_33975 = state_32626__$1;
(statearr_32662_33975[(2)] = null);

(statearr_32662_33975[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (10))){
var inst_32569 = (state_32626[(12)]);
var inst_32568 = (state_32626[(13)]);
var inst_32567 = (state_32626[(15)]);
var inst_32570 = (state_32626[(16)]);
var inst_32575 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32568,inst_32570);
var inst_32576 = cljs.core.async.muxch_STAR_(inst_32575);
var inst_32577 = cljs.core.async.close_BANG_(inst_32576);
var inst_32578 = (inst_32570 + (1));
var tmp32656 = inst_32569;
var tmp32657 = inst_32568;
var tmp32658 = inst_32567;
var inst_32567__$1 = tmp32658;
var inst_32568__$1 = tmp32657;
var inst_32569__$1 = tmp32656;
var inst_32570__$1 = inst_32578;
var state_32626__$1 = (function (){var statearr_32663 = state_32626;
(statearr_32663[(12)] = inst_32569__$1);

(statearr_32663[(13)] = inst_32568__$1);

(statearr_32663[(17)] = inst_32577);

(statearr_32663[(15)] = inst_32567__$1);

(statearr_32663[(16)] = inst_32570__$1);

return statearr_32663;
})();
var statearr_32664_33978 = state_32626__$1;
(statearr_32664_33978[(2)] = null);

(statearr_32664_33978[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (18))){
var inst_32596 = (state_32626[(2)]);
var state_32626__$1 = state_32626;
var statearr_32665_33980 = state_32626__$1;
(statearr_32665_33980[(2)] = inst_32596);

(statearr_32665_33980[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (8))){
var inst_32569 = (state_32626[(12)]);
var inst_32570 = (state_32626[(16)]);
var inst_32572 = (inst_32570 < inst_32569);
var inst_32573 = inst_32572;
var state_32626__$1 = state_32626;
if(cljs.core.truth_(inst_32573)){
var statearr_32666_33982 = state_32626__$1;
(statearr_32666_33982[(1)] = (10));

} else {
var statearr_32667_33983 = state_32626__$1;
(statearr_32667_33983[(1)] = (11));

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
});})(c__31279__auto___33926,mults,ensure_mult,p))
;
return ((function (switch__31054__auto__,c__31279__auto___33926,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__31055__auto__ = null;
var cljs$core$async$state_machine__31055__auto____0 = (function (){
var statearr_32668 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32668[(0)] = cljs$core$async$state_machine__31055__auto__);

(statearr_32668[(1)] = (1));

return statearr_32668;
});
var cljs$core$async$state_machine__31055__auto____1 = (function (state_32626){
while(true){
var ret_value__31056__auto__ = (function (){try{while(true){
var result__31057__auto__ = switch__31054__auto__(state_32626);
if(cljs.core.keyword_identical_QMARK_(result__31057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31057__auto__;
}
break;
}
}catch (e32669){if((e32669 instanceof Object)){
var ex__31058__auto__ = e32669;
var statearr_32670_33989 = state_32626;
(statearr_32670_33989[(5)] = ex__31058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32626);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32669;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33991 = state_32626;
state_32626 = G__33991;
continue;
} else {
return ret_value__31056__auto__;
}
break;
}
});
cljs$core$async$state_machine__31055__auto__ = function(state_32626){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31055__auto____1.call(this,state_32626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31055__auto____0;
cljs$core$async$state_machine__31055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31055__auto____1;
return cljs$core$async$state_machine__31055__auto__;
})()
;})(switch__31054__auto__,c__31279__auto___33926,mults,ensure_mult,p))
})();
var state__31281__auto__ = (function (){var statearr_32671 = (f__31280__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31280__auto__.cljs$core$IFn$_invoke$arity$0() : f__31280__auto__.call(null));
(statearr_32671[(6)] = c__31279__auto___33926);

return statearr_32671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31281__auto__);
});})(c__31279__auto___33926,mults,ensure_mult,p))
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
var G__32673 = arguments.length;
switch (G__32673) {
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
var G__32675 = arguments.length;
switch (G__32675) {
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
var G__32677 = arguments.length;
switch (G__32677) {
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
var c__31279__auto___34001 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31279__auto___34001,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__31280__auto__ = (function (){var switch__31054__auto__ = ((function (c__31279__auto___34001,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32717){
var state_val_32718 = (state_32717[(1)]);
if((state_val_32718 === (7))){
var state_32717__$1 = state_32717;
var statearr_32720_34007 = state_32717__$1;
(statearr_32720_34007[(2)] = null);

(statearr_32720_34007[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32718 === (1))){
var state_32717__$1 = state_32717;
var statearr_32721_34008 = state_32717__$1;
(statearr_32721_34008[(2)] = null);

(statearr_32721_34008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32718 === (4))){
var inst_32680 = (state_32717[(7)]);
var inst_32682 = (inst_32680 < cnt);
var state_32717__$1 = state_32717;
if(cljs.core.truth_(inst_32682)){
var statearr_32722_34009 = state_32717__$1;
(statearr_32722_34009[(1)] = (6));

} else {
var statearr_32723_34010 = state_32717__$1;
(statearr_32723_34010[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32718 === (15))){
var inst_32712 = (state_32717[(2)]);
var state_32717__$1 = state_32717;
var statearr_32724_34011 = state_32717__$1;
(statearr_32724_34011[(2)] = inst_32712);

(statearr_32724_34011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32718 === (13))){
var inst_32705 = cljs.core.async.close_BANG_(out);
var state_32717__$1 = state_32717;
var statearr_32725_34013 = state_32717__$1;
(statearr_32725_34013[(2)] = inst_32705);

(statearr_32725_34013[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32718 === (6))){
var state_32717__$1 = state_32717;
var statearr_32726_34014 = state_32717__$1;
(statearr_32726_34014[(2)] = null);

(statearr_32726_34014[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32718 === (3))){
var inst_32714 = (state_32717[(2)]);
var state_32717__$1 = state_32717;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32717__$1,inst_32714);
} else {
if((state_val_32718 === (12))){
var inst_32702 = (state_32717[(8)]);
var inst_32702__$1 = (state_32717[(2)]);
var inst_32703 = cljs.core.some(cljs.core.nil_QMARK_,inst_32702__$1);
var state_32717__$1 = (function (){var statearr_32731 = state_32717;
(statearr_32731[(8)] = inst_32702__$1);

return statearr_32731;
})();
if(cljs.core.truth_(inst_32703)){
var statearr_32732_34019 = state_32717__$1;
(statearr_32732_34019[(1)] = (13));

} else {
var statearr_32735_34020 = state_32717__$1;
(statearr_32735_34020[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32718 === (2))){
var inst_32679 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32680 = (0);
var state_32717__$1 = (function (){var statearr_32738 = state_32717;
(statearr_32738[(9)] = inst_32679);

(statearr_32738[(7)] = inst_32680);

return statearr_32738;
})();
var statearr_32739_34021 = state_32717__$1;
(statearr_32739_34021[(2)] = null);

(statearr_32739_34021[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32718 === (11))){
var inst_32680 = (state_32717[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_32717,(10),Object,null,(9));
var inst_32689 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32680) : chs__$1.call(null,inst_32680));
var inst_32690 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32680) : done.call(null,inst_32680));
var inst_32691 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32689,inst_32690);
var state_32717__$1 = state_32717;
var statearr_32740_34022 = state_32717__$1;
(statearr_32740_34022[(2)] = inst_32691);


cljs.core.async.impl.ioc_helpers.process_exception(state_32717__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32718 === (9))){
var inst_32680 = (state_32717[(7)]);
var inst_32693 = (state_32717[(2)]);
var inst_32694 = (inst_32680 + (1));
var inst_32680__$1 = inst_32694;
var state_32717__$1 = (function (){var statearr_32747 = state_32717;
(statearr_32747[(10)] = inst_32693);

(statearr_32747[(7)] = inst_32680__$1);

return statearr_32747;
})();
var statearr_32748_34023 = state_32717__$1;
(statearr_32748_34023[(2)] = null);

(statearr_32748_34023[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32718 === (5))){
var inst_32700 = (state_32717[(2)]);
var state_32717__$1 = (function (){var statearr_32751 = state_32717;
(statearr_32751[(11)] = inst_32700);

return statearr_32751;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32717__$1,(12),dchan);
} else {
if((state_val_32718 === (14))){
var inst_32702 = (state_32717[(8)]);
var inst_32707 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32702);
var state_32717__$1 = state_32717;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32717__$1,(16),out,inst_32707);
} else {
if((state_val_32718 === (16))){
var inst_32709 = (state_32717[(2)]);
var state_32717__$1 = (function (){var statearr_32755 = state_32717;
(statearr_32755[(12)] = inst_32709);

return statearr_32755;
})();
var statearr_32756_34024 = state_32717__$1;
(statearr_32756_34024[(2)] = null);

(statearr_32756_34024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32718 === (10))){
var inst_32684 = (state_32717[(2)]);
var inst_32685 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32717__$1 = (function (){var statearr_32757 = state_32717;
(statearr_32757[(13)] = inst_32684);

return statearr_32757;
})();
var statearr_32758_34026 = state_32717__$1;
(statearr_32758_34026[(2)] = inst_32685);


cljs.core.async.impl.ioc_helpers.process_exception(state_32717__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32718 === (8))){
var inst_32698 = (state_32717[(2)]);
var state_32717__$1 = state_32717;
var statearr_32759_34027 = state_32717__$1;
(statearr_32759_34027[(2)] = inst_32698);

(statearr_32759_34027[(1)] = (5));


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
});})(c__31279__auto___34001,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__31054__auto__,c__31279__auto___34001,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__31055__auto__ = null;
var cljs$core$async$state_machine__31055__auto____0 = (function (){
var statearr_32764 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32764[(0)] = cljs$core$async$state_machine__31055__auto__);

(statearr_32764[(1)] = (1));

return statearr_32764;
});
var cljs$core$async$state_machine__31055__auto____1 = (function (state_32717){
while(true){
var ret_value__31056__auto__ = (function (){try{while(true){
var result__31057__auto__ = switch__31054__auto__(state_32717);
if(cljs.core.keyword_identical_QMARK_(result__31057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31057__auto__;
}
break;
}
}catch (e32767){if((e32767 instanceof Object)){
var ex__31058__auto__ = e32767;
var statearr_32768_34028 = state_32717;
(statearr_32768_34028[(5)] = ex__31058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32767;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34032 = state_32717;
state_32717 = G__34032;
continue;
} else {
return ret_value__31056__auto__;
}
break;
}
});
cljs$core$async$state_machine__31055__auto__ = function(state_32717){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31055__auto____1.call(this,state_32717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31055__auto____0;
cljs$core$async$state_machine__31055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31055__auto____1;
return cljs$core$async$state_machine__31055__auto__;
})()
;})(switch__31054__auto__,c__31279__auto___34001,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__31281__auto__ = (function (){var statearr_32773 = (f__31280__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31280__auto__.cljs$core$IFn$_invoke$arity$0() : f__31280__auto__.call(null));
(statearr_32773[(6)] = c__31279__auto___34001);

return statearr_32773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31281__auto__);
});})(c__31279__auto___34001,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__32778 = arguments.length;
switch (G__32778) {
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
var c__31279__auto___34038 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31279__auto___34038,out){
return (function (){
var f__31280__auto__ = (function (){var switch__31054__auto__ = ((function (c__31279__auto___34038,out){
return (function (state_32817){
var state_val_32818 = (state_32817[(1)]);
if((state_val_32818 === (7))){
var inst_32793 = (state_32817[(7)]);
var inst_32792 = (state_32817[(8)]);
var inst_32792__$1 = (state_32817[(2)]);
var inst_32793__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32792__$1,(0),null);
var inst_32794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32792__$1,(1),null);
var inst_32799 = (inst_32793__$1 == null);
var state_32817__$1 = (function (){var statearr_32822 = state_32817;
(statearr_32822[(7)] = inst_32793__$1);

(statearr_32822[(9)] = inst_32794);

(statearr_32822[(8)] = inst_32792__$1);

return statearr_32822;
})();
if(cljs.core.truth_(inst_32799)){
var statearr_32823_34039 = state_32817__$1;
(statearr_32823_34039[(1)] = (8));

} else {
var statearr_32824_34040 = state_32817__$1;
(statearr_32824_34040[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (1))){
var inst_32782 = cljs.core.vec(chs);
var inst_32783 = inst_32782;
var state_32817__$1 = (function (){var statearr_32825 = state_32817;
(statearr_32825[(10)] = inst_32783);

return statearr_32825;
})();
var statearr_32826_34041 = state_32817__$1;
(statearr_32826_34041[(2)] = null);

(statearr_32826_34041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (4))){
var inst_32783 = (state_32817[(10)]);
var state_32817__$1 = state_32817;
return cljs.core.async.ioc_alts_BANG_(state_32817__$1,(7),inst_32783);
} else {
if((state_val_32818 === (6))){
var inst_32813 = (state_32817[(2)]);
var state_32817__$1 = state_32817;
var statearr_32827_34043 = state_32817__$1;
(statearr_32827_34043[(2)] = inst_32813);

(statearr_32827_34043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (3))){
var inst_32815 = (state_32817[(2)]);
var state_32817__$1 = state_32817;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32817__$1,inst_32815);
} else {
if((state_val_32818 === (2))){
var inst_32783 = (state_32817[(10)]);
var inst_32785 = cljs.core.count(inst_32783);
var inst_32786 = (inst_32785 > (0));
var state_32817__$1 = state_32817;
if(cljs.core.truth_(inst_32786)){
var statearr_32829_34045 = state_32817__$1;
(statearr_32829_34045[(1)] = (4));

} else {
var statearr_32830_34046 = state_32817__$1;
(statearr_32830_34046[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (11))){
var inst_32783 = (state_32817[(10)]);
var inst_32806 = (state_32817[(2)]);
var tmp32828 = inst_32783;
var inst_32783__$1 = tmp32828;
var state_32817__$1 = (function (){var statearr_32831 = state_32817;
(statearr_32831[(11)] = inst_32806);

(statearr_32831[(10)] = inst_32783__$1);

return statearr_32831;
})();
var statearr_32832_34048 = state_32817__$1;
(statearr_32832_34048[(2)] = null);

(statearr_32832_34048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (9))){
var inst_32793 = (state_32817[(7)]);
var state_32817__$1 = state_32817;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32817__$1,(11),out,inst_32793);
} else {
if((state_val_32818 === (5))){
var inst_32811 = cljs.core.async.close_BANG_(out);
var state_32817__$1 = state_32817;
var statearr_32840_34049 = state_32817__$1;
(statearr_32840_34049[(2)] = inst_32811);

(statearr_32840_34049[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (10))){
var inst_32809 = (state_32817[(2)]);
var state_32817__$1 = state_32817;
var statearr_32843_34051 = state_32817__$1;
(statearr_32843_34051[(2)] = inst_32809);

(statearr_32843_34051[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32818 === (8))){
var inst_32783 = (state_32817[(10)]);
var inst_32793 = (state_32817[(7)]);
var inst_32794 = (state_32817[(9)]);
var inst_32792 = (state_32817[(8)]);
var inst_32801 = (function (){var cs = inst_32783;
var vec__32788 = inst_32792;
var v = inst_32793;
var c = inst_32794;
return ((function (cs,vec__32788,v,c,inst_32783,inst_32793,inst_32794,inst_32792,state_val_32818,c__31279__auto___34038,out){
return (function (p1__32776_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32776_SHARP_);
});
;})(cs,vec__32788,v,c,inst_32783,inst_32793,inst_32794,inst_32792,state_val_32818,c__31279__auto___34038,out))
})();
var inst_32802 = cljs.core.filterv(inst_32801,inst_32783);
var inst_32783__$1 = inst_32802;
var state_32817__$1 = (function (){var statearr_32848 = state_32817;
(statearr_32848[(10)] = inst_32783__$1);

return statearr_32848;
})();
var statearr_32849_34057 = state_32817__$1;
(statearr_32849_34057[(2)] = null);

(statearr_32849_34057[(1)] = (2));


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
});})(c__31279__auto___34038,out))
;
return ((function (switch__31054__auto__,c__31279__auto___34038,out){
return (function() {
var cljs$core$async$state_machine__31055__auto__ = null;
var cljs$core$async$state_machine__31055__auto____0 = (function (){
var statearr_32854 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32854[(0)] = cljs$core$async$state_machine__31055__auto__);

(statearr_32854[(1)] = (1));

return statearr_32854;
});
var cljs$core$async$state_machine__31055__auto____1 = (function (state_32817){
while(true){
var ret_value__31056__auto__ = (function (){try{while(true){
var result__31057__auto__ = switch__31054__auto__(state_32817);
if(cljs.core.keyword_identical_QMARK_(result__31057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31057__auto__;
}
break;
}
}catch (e32859){if((e32859 instanceof Object)){
var ex__31058__auto__ = e32859;
var statearr_32860_34059 = state_32817;
(statearr_32860_34059[(5)] = ex__31058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32859;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34060 = state_32817;
state_32817 = G__34060;
continue;
} else {
return ret_value__31056__auto__;
}
break;
}
});
cljs$core$async$state_machine__31055__auto__ = function(state_32817){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31055__auto____1.call(this,state_32817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31055__auto____0;
cljs$core$async$state_machine__31055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31055__auto____1;
return cljs$core$async$state_machine__31055__auto__;
})()
;})(switch__31054__auto__,c__31279__auto___34038,out))
})();
var state__31281__auto__ = (function (){var statearr_32866 = (f__31280__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31280__auto__.cljs$core$IFn$_invoke$arity$0() : f__31280__auto__.call(null));
(statearr_32866[(6)] = c__31279__auto___34038);

return statearr_32866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31281__auto__);
});})(c__31279__auto___34038,out))
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
var G__32873 = arguments.length;
switch (G__32873) {
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
var c__31279__auto___34066 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31279__auto___34066,out){
return (function (){
var f__31280__auto__ = (function (){var switch__31054__auto__ = ((function (c__31279__auto___34066,out){
return (function (state_32904){
var state_val_32905 = (state_32904[(1)]);
if((state_val_32905 === (7))){
var inst_32884 = (state_32904[(7)]);
var inst_32884__$1 = (state_32904[(2)]);
var inst_32886 = (inst_32884__$1 == null);
var inst_32887 = cljs.core.not(inst_32886);
var state_32904__$1 = (function (){var statearr_32910 = state_32904;
(statearr_32910[(7)] = inst_32884__$1);

return statearr_32910;
})();
if(inst_32887){
var statearr_32911_34067 = state_32904__$1;
(statearr_32911_34067[(1)] = (8));

} else {
var statearr_32913_34068 = state_32904__$1;
(statearr_32913_34068[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (1))){
var inst_32877 = (0);
var state_32904__$1 = (function (){var statearr_32916 = state_32904;
(statearr_32916[(8)] = inst_32877);

return statearr_32916;
})();
var statearr_32917_34069 = state_32904__$1;
(statearr_32917_34069[(2)] = null);

(statearr_32917_34069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (4))){
var state_32904__$1 = state_32904;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32904__$1,(7),ch);
} else {
if((state_val_32905 === (6))){
var inst_32898 = (state_32904[(2)]);
var state_32904__$1 = state_32904;
var statearr_32918_34071 = state_32904__$1;
(statearr_32918_34071[(2)] = inst_32898);

(statearr_32918_34071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (3))){
var inst_32900 = (state_32904[(2)]);
var inst_32901 = cljs.core.async.close_BANG_(out);
var state_32904__$1 = (function (){var statearr_32919 = state_32904;
(statearr_32919[(9)] = inst_32900);

return statearr_32919;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32904__$1,inst_32901);
} else {
if((state_val_32905 === (2))){
var inst_32877 = (state_32904[(8)]);
var inst_32881 = (inst_32877 < n);
var state_32904__$1 = state_32904;
if(cljs.core.truth_(inst_32881)){
var statearr_32924_34072 = state_32904__$1;
(statearr_32924_34072[(1)] = (4));

} else {
var statearr_32925_34073 = state_32904__$1;
(statearr_32925_34073[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (11))){
var inst_32877 = (state_32904[(8)]);
var inst_32890 = (state_32904[(2)]);
var inst_32891 = (inst_32877 + (1));
var inst_32877__$1 = inst_32891;
var state_32904__$1 = (function (){var statearr_32927 = state_32904;
(statearr_32927[(10)] = inst_32890);

(statearr_32927[(8)] = inst_32877__$1);

return statearr_32927;
})();
var statearr_32929_34077 = state_32904__$1;
(statearr_32929_34077[(2)] = null);

(statearr_32929_34077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (9))){
var state_32904__$1 = state_32904;
var statearr_32932_34080 = state_32904__$1;
(statearr_32932_34080[(2)] = null);

(statearr_32932_34080[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (5))){
var state_32904__$1 = state_32904;
var statearr_32934_34083 = state_32904__$1;
(statearr_32934_34083[(2)] = null);

(statearr_32934_34083[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (10))){
var inst_32895 = (state_32904[(2)]);
var state_32904__$1 = state_32904;
var statearr_32935_34084 = state_32904__$1;
(statearr_32935_34084[(2)] = inst_32895);

(statearr_32935_34084[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32905 === (8))){
var inst_32884 = (state_32904[(7)]);
var state_32904__$1 = state_32904;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32904__$1,(11),out,inst_32884);
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
});})(c__31279__auto___34066,out))
;
return ((function (switch__31054__auto__,c__31279__auto___34066,out){
return (function() {
var cljs$core$async$state_machine__31055__auto__ = null;
var cljs$core$async$state_machine__31055__auto____0 = (function (){
var statearr_32939 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32939[(0)] = cljs$core$async$state_machine__31055__auto__);

(statearr_32939[(1)] = (1));

return statearr_32939;
});
var cljs$core$async$state_machine__31055__auto____1 = (function (state_32904){
while(true){
var ret_value__31056__auto__ = (function (){try{while(true){
var result__31057__auto__ = switch__31054__auto__(state_32904);
if(cljs.core.keyword_identical_QMARK_(result__31057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31057__auto__;
}
break;
}
}catch (e32943){if((e32943 instanceof Object)){
var ex__31058__auto__ = e32943;
var statearr_32944_34085 = state_32904;
(statearr_32944_34085[(5)] = ex__31058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32943;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34086 = state_32904;
state_32904 = G__34086;
continue;
} else {
return ret_value__31056__auto__;
}
break;
}
});
cljs$core$async$state_machine__31055__auto__ = function(state_32904){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31055__auto____1.call(this,state_32904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31055__auto____0;
cljs$core$async$state_machine__31055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31055__auto____1;
return cljs$core$async$state_machine__31055__auto__;
})()
;})(switch__31054__auto__,c__31279__auto___34066,out))
})();
var state__31281__auto__ = (function (){var statearr_32948 = (f__31280__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31280__auto__.cljs$core$IFn$_invoke$arity$0() : f__31280__auto__.call(null));
(statearr_32948[(6)] = c__31279__auto___34066);

return statearr_32948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31281__auto__);
});})(c__31279__auto___34066,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32955 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32955 = (function (f,ch,meta32956){
this.f = f;
this.ch = ch;
this.meta32956 = meta32956;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32957,meta32956__$1){
var self__ = this;
var _32957__$1 = this;
return (new cljs.core.async.t_cljs$core$async32955(self__.f,self__.ch,meta32956__$1));
});

cljs.core.async.t_cljs$core$async32955.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32957){
var self__ = this;
var _32957__$1 = this;
return self__.meta32956;
});

cljs.core.async.t_cljs$core$async32955.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32955.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32955.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async32955.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32955.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32971 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32971 = (function (f,ch,meta32956,_,fn1,meta32972){
this.f = f;
this.ch = ch;
this.meta32956 = meta32956;
this._ = _;
this.fn1 = fn1;
this.meta32972 = meta32972;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32973,meta32972__$1){
var self__ = this;
var _32973__$1 = this;
return (new cljs.core.async.t_cljs$core$async32971(self__.f,self__.ch,self__.meta32956,self__._,self__.fn1,meta32972__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32971.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32973){
var self__ = this;
var _32973__$1 = this;
return self__.meta32972;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32971.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32971.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32971.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32971.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32953_SHARP_){
var G__32981 = (((p1__32953_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32953_SHARP_) : self__.f.call(null,p1__32953_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32981) : f1.call(null,G__32981));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32971.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32956","meta32956",-1974383156,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32955","cljs.core.async/t_cljs$core$async32955",781864847,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32972","meta32972",1885381019,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32971.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32971.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32971";

cljs.core.async.t_cljs$core$async32971.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32971");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32971.
 */
cljs.core.async.__GT_t_cljs$core$async32971 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32971(f__$1,ch__$1,meta32956__$1,___$2,fn1__$1,meta32972){
return (new cljs.core.async.t_cljs$core$async32971(f__$1,ch__$1,meta32956__$1,___$2,fn1__$1,meta32972));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32971(self__.f,self__.ch,self__.meta32956,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32990 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32990) : self__.f.call(null,G__32990));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32955.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32955.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32955.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32956","meta32956",-1974383156,null)], null);
});

cljs.core.async.t_cljs$core$async32955.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32955.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32955";

cljs.core.async.t_cljs$core$async32955.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32955");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32955.
 */
cljs.core.async.__GT_t_cljs$core$async32955 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32955(f__$1,ch__$1,meta32956){
return (new cljs.core.async.t_cljs$core$async32955(f__$1,ch__$1,meta32956));
});

}

return (new cljs.core.async.t_cljs$core$async32955(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33001 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33001 = (function (f,ch,meta33002){
this.f = f;
this.ch = ch;
this.meta33002 = meta33002;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33003,meta33002__$1){
var self__ = this;
var _33003__$1 = this;
return (new cljs.core.async.t_cljs$core$async33001(self__.f,self__.ch,meta33002__$1));
});

cljs.core.async.t_cljs$core$async33001.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33003){
var self__ = this;
var _33003__$1 = this;
return self__.meta33002;
});

cljs.core.async.t_cljs$core$async33001.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33001.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async33001.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33001.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33001.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33001.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async33001.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33002","meta33002",-2649914,null)], null);
});

cljs.core.async.t_cljs$core$async33001.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33001.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33001";

cljs.core.async.t_cljs$core$async33001.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33001");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33001.
 */
cljs.core.async.__GT_t_cljs$core$async33001 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33001(f__$1,ch__$1,meta33002){
return (new cljs.core.async.t_cljs$core$async33001(f__$1,ch__$1,meta33002));
});

}

return (new cljs.core.async.t_cljs$core$async33001(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33023 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33023 = (function (p,ch,meta33024){
this.p = p;
this.ch = ch;
this.meta33024 = meta33024;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33025,meta33024__$1){
var self__ = this;
var _33025__$1 = this;
return (new cljs.core.async.t_cljs$core$async33023(self__.p,self__.ch,meta33024__$1));
});

cljs.core.async.t_cljs$core$async33023.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33025){
var self__ = this;
var _33025__$1 = this;
return self__.meta33024;
});

cljs.core.async.t_cljs$core$async33023.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33023.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async33023.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async33023.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33023.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33023.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33023.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async33023.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33024","meta33024",-1878408117,null)], null);
});

cljs.core.async.t_cljs$core$async33023.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33023.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33023";

cljs.core.async.t_cljs$core$async33023.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33023");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33023.
 */
cljs.core.async.__GT_t_cljs$core$async33023 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33023(p__$1,ch__$1,meta33024){
return (new cljs.core.async.t_cljs$core$async33023(p__$1,ch__$1,meta33024));
});

}

return (new cljs.core.async.t_cljs$core$async33023(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33055 = arguments.length;
switch (G__33055) {
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
var c__31279__auto___34104 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31279__auto___34104,out){
return (function (){
var f__31280__auto__ = (function (){var switch__31054__auto__ = ((function (c__31279__auto___34104,out){
return (function (state_33078){
var state_val_33079 = (state_33078[(1)]);
if((state_val_33079 === (7))){
var inst_33074 = (state_33078[(2)]);
var state_33078__$1 = state_33078;
var statearr_33087_34105 = state_33078__$1;
(statearr_33087_34105[(2)] = inst_33074);

(statearr_33087_34105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (1))){
var state_33078__$1 = state_33078;
var statearr_33088_34106 = state_33078__$1;
(statearr_33088_34106[(2)] = null);

(statearr_33088_34106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (4))){
var inst_33060 = (state_33078[(7)]);
var inst_33060__$1 = (state_33078[(2)]);
var inst_33061 = (inst_33060__$1 == null);
var state_33078__$1 = (function (){var statearr_33091 = state_33078;
(statearr_33091[(7)] = inst_33060__$1);

return statearr_33091;
})();
if(cljs.core.truth_(inst_33061)){
var statearr_33094_34108 = state_33078__$1;
(statearr_33094_34108[(1)] = (5));

} else {
var statearr_33095_34109 = state_33078__$1;
(statearr_33095_34109[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (6))){
var inst_33060 = (state_33078[(7)]);
var inst_33065 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33060) : p.call(null,inst_33060));
var state_33078__$1 = state_33078;
if(cljs.core.truth_(inst_33065)){
var statearr_33096_34110 = state_33078__$1;
(statearr_33096_34110[(1)] = (8));

} else {
var statearr_33097_34111 = state_33078__$1;
(statearr_33097_34111[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (3))){
var inst_33076 = (state_33078[(2)]);
var state_33078__$1 = state_33078;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33078__$1,inst_33076);
} else {
if((state_val_33079 === (2))){
var state_33078__$1 = state_33078;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33078__$1,(4),ch);
} else {
if((state_val_33079 === (11))){
var inst_33068 = (state_33078[(2)]);
var state_33078__$1 = state_33078;
var statearr_33099_34112 = state_33078__$1;
(statearr_33099_34112[(2)] = inst_33068);

(statearr_33099_34112[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (9))){
var state_33078__$1 = state_33078;
var statearr_33100_34113 = state_33078__$1;
(statearr_33100_34113[(2)] = null);

(statearr_33100_34113[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (5))){
var inst_33063 = cljs.core.async.close_BANG_(out);
var state_33078__$1 = state_33078;
var statearr_33101_34115 = state_33078__$1;
(statearr_33101_34115[(2)] = inst_33063);

(statearr_33101_34115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (10))){
var inst_33071 = (state_33078[(2)]);
var state_33078__$1 = (function (){var statearr_33102 = state_33078;
(statearr_33102[(8)] = inst_33071);

return statearr_33102;
})();
var statearr_33103_34117 = state_33078__$1;
(statearr_33103_34117[(2)] = null);

(statearr_33103_34117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (8))){
var inst_33060 = (state_33078[(7)]);
var state_33078__$1 = state_33078;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33078__$1,(11),out,inst_33060);
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
});})(c__31279__auto___34104,out))
;
return ((function (switch__31054__auto__,c__31279__auto___34104,out){
return (function() {
var cljs$core$async$state_machine__31055__auto__ = null;
var cljs$core$async$state_machine__31055__auto____0 = (function (){
var statearr_33104 = [null,null,null,null,null,null,null,null,null];
(statearr_33104[(0)] = cljs$core$async$state_machine__31055__auto__);

(statearr_33104[(1)] = (1));

return statearr_33104;
});
var cljs$core$async$state_machine__31055__auto____1 = (function (state_33078){
while(true){
var ret_value__31056__auto__ = (function (){try{while(true){
var result__31057__auto__ = switch__31054__auto__(state_33078);
if(cljs.core.keyword_identical_QMARK_(result__31057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31057__auto__;
}
break;
}
}catch (e33105){if((e33105 instanceof Object)){
var ex__31058__auto__ = e33105;
var statearr_33106_34121 = state_33078;
(statearr_33106_34121[(5)] = ex__31058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33105;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34126 = state_33078;
state_33078 = G__34126;
continue;
} else {
return ret_value__31056__auto__;
}
break;
}
});
cljs$core$async$state_machine__31055__auto__ = function(state_33078){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31055__auto____1.call(this,state_33078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31055__auto____0;
cljs$core$async$state_machine__31055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31055__auto____1;
return cljs$core$async$state_machine__31055__auto__;
})()
;})(switch__31054__auto__,c__31279__auto___34104,out))
})();
var state__31281__auto__ = (function (){var statearr_33107 = (f__31280__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31280__auto__.cljs$core$IFn$_invoke$arity$0() : f__31280__auto__.call(null));
(statearr_33107[(6)] = c__31279__auto___34104);

return statearr_33107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31281__auto__);
});})(c__31279__auto___34104,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33109 = arguments.length;
switch (G__33109) {
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
var c__31279__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31279__auto__){
return (function (){
var f__31280__auto__ = (function (){var switch__31054__auto__ = ((function (c__31279__auto__){
return (function (state_33173){
var state_val_33174 = (state_33173[(1)]);
if((state_val_33174 === (7))){
var inst_33168 = (state_33173[(2)]);
var state_33173__$1 = state_33173;
var statearr_33175_34134 = state_33173__$1;
(statearr_33175_34134[(2)] = inst_33168);

(statearr_33175_34134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33174 === (20))){
var inst_33138 = (state_33173[(7)]);
var inst_33149 = (state_33173[(2)]);
var inst_33150 = cljs.core.next(inst_33138);
var inst_33124 = inst_33150;
var inst_33125 = null;
var inst_33126 = (0);
var inst_33127 = (0);
var state_33173__$1 = (function (){var statearr_33180 = state_33173;
(statearr_33180[(8)] = inst_33149);

(statearr_33180[(9)] = inst_33124);

(statearr_33180[(10)] = inst_33126);

(statearr_33180[(11)] = inst_33125);

(statearr_33180[(12)] = inst_33127);

return statearr_33180;
})();
var statearr_33181_34138 = state_33173__$1;
(statearr_33181_34138[(2)] = null);

(statearr_33181_34138[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33174 === (1))){
var state_33173__$1 = state_33173;
var statearr_33186_34139 = state_33173__$1;
(statearr_33186_34139[(2)] = null);

(statearr_33186_34139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33174 === (4))){
var inst_33113 = (state_33173[(13)]);
var inst_33113__$1 = (state_33173[(2)]);
var inst_33114 = (inst_33113__$1 == null);
var state_33173__$1 = (function (){var statearr_33191 = state_33173;
(statearr_33191[(13)] = inst_33113__$1);

return statearr_33191;
})();
if(cljs.core.truth_(inst_33114)){
var statearr_33192_34143 = state_33173__$1;
(statearr_33192_34143[(1)] = (5));

} else {
var statearr_33193_34144 = state_33173__$1;
(statearr_33193_34144[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33174 === (15))){
var state_33173__$1 = state_33173;
var statearr_33197_34145 = state_33173__$1;
(statearr_33197_34145[(2)] = null);

(statearr_33197_34145[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33174 === (21))){
var state_33173__$1 = state_33173;
var statearr_33198_34146 = state_33173__$1;
(statearr_33198_34146[(2)] = null);

(statearr_33198_34146[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33174 === (13))){
var inst_33124 = (state_33173[(9)]);
var inst_33126 = (state_33173[(10)]);
var inst_33125 = (state_33173[(11)]);
var inst_33127 = (state_33173[(12)]);
var inst_33134 = (state_33173[(2)]);
var inst_33135 = (inst_33127 + (1));
var tmp33194 = inst_33124;
var tmp33195 = inst_33126;
var tmp33196 = inst_33125;
var inst_33124__$1 = tmp33194;
var inst_33125__$1 = tmp33196;
var inst_33126__$1 = tmp33195;
var inst_33127__$1 = inst_33135;
var state_33173__$1 = (function (){var statearr_33199 = state_33173;
(statearr_33199[(9)] = inst_33124__$1);

(statearr_33199[(14)] = inst_33134);

(statearr_33199[(10)] = inst_33126__$1);

(statearr_33199[(11)] = inst_33125__$1);

(statearr_33199[(12)] = inst_33127__$1);

return statearr_33199;
})();
var statearr_33200_34148 = state_33173__$1;
(statearr_33200_34148[(2)] = null);

(statearr_33200_34148[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33174 === (22))){
var state_33173__$1 = state_33173;
var statearr_33201_34149 = state_33173__$1;
(statearr_33201_34149[(2)] = null);

(statearr_33201_34149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33174 === (6))){
var inst_33113 = (state_33173[(13)]);
var inst_33122 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33113) : f.call(null,inst_33113));
var inst_33123 = cljs.core.seq(inst_33122);
var inst_33124 = inst_33123;
var inst_33125 = null;
var inst_33126 = (0);
var inst_33127 = (0);
var state_33173__$1 = (function (){var statearr_33202 = state_33173;
(statearr_33202[(9)] = inst_33124);

(statearr_33202[(10)] = inst_33126);

(statearr_33202[(11)] = inst_33125);

(statearr_33202[(12)] = inst_33127);

return statearr_33202;
})();
var statearr_33203_34159 = state_33173__$1;
(statearr_33203_34159[(2)] = null);

(statearr_33203_34159[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33174 === (17))){
var inst_33138 = (state_33173[(7)]);
var inst_33142 = cljs.core.chunk_first(inst_33138);
var inst_33143 = cljs.core.chunk_rest(inst_33138);
var inst_33144 = cljs.core.count(inst_33142);
var inst_33124 = inst_33143;
var inst_33125 = inst_33142;
var inst_33126 = inst_33144;
var inst_33127 = (0);
var state_33173__$1 = (function (){var statearr_33204 = state_33173;
(statearr_33204[(9)] = inst_33124);

(statearr_33204[(10)] = inst_33126);

(statearr_33204[(11)] = inst_33125);

(statearr_33204[(12)] = inst_33127);

return statearr_33204;
})();
var statearr_33205_34166 = state_33173__$1;
(statearr_33205_34166[(2)] = null);

(statearr_33205_34166[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33174 === (3))){
var inst_33170 = (state_33173[(2)]);
var state_33173__$1 = state_33173;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33173__$1,inst_33170);
} else {
if((state_val_33174 === (12))){
var inst_33158 = (state_33173[(2)]);
var state_33173__$1 = state_33173;
var statearr_33206_34167 = state_33173__$1;
(statearr_33206_34167[(2)] = inst_33158);

(statearr_33206_34167[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33174 === (2))){
var state_33173__$1 = state_33173;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33173__$1,(4),in$);
} else {
if((state_val_33174 === (23))){
var inst_33166 = (state_33173[(2)]);
var state_33173__$1 = state_33173;
var statearr_33207_34168 = state_33173__$1;
(statearr_33207_34168[(2)] = inst_33166);

(statearr_33207_34168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33174 === (19))){
var inst_33153 = (state_33173[(2)]);
var state_33173__$1 = state_33173;
var statearr_33208_34169 = state_33173__$1;
(statearr_33208_34169[(2)] = inst_33153);

(statearr_33208_34169[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33174 === (11))){
var inst_33124 = (state_33173[(9)]);
var inst_33138 = (state_33173[(7)]);
var inst_33138__$1 = cljs.core.seq(inst_33124);
var state_33173__$1 = (function (){var statearr_33209 = state_33173;
(statearr_33209[(7)] = inst_33138__$1);

return statearr_33209;
})();
if(inst_33138__$1){
var statearr_33210_34170 = state_33173__$1;
(statearr_33210_34170[(1)] = (14));

} else {
var statearr_33211_34171 = state_33173__$1;
(statearr_33211_34171[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33174 === (9))){
var inst_33160 = (state_33173[(2)]);
var inst_33161 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33173__$1 = (function (){var statearr_33212 = state_33173;
(statearr_33212[(15)] = inst_33160);

return statearr_33212;
})();
if(cljs.core.truth_(inst_33161)){
var statearr_33213_34172 = state_33173__$1;
(statearr_33213_34172[(1)] = (21));

} else {
var statearr_33214_34173 = state_33173__$1;
(statearr_33214_34173[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33174 === (5))){
var inst_33116 = cljs.core.async.close_BANG_(out);
var state_33173__$1 = state_33173;
var statearr_33215_34174 = state_33173__$1;
(statearr_33215_34174[(2)] = inst_33116);

(statearr_33215_34174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33174 === (14))){
var inst_33138 = (state_33173[(7)]);
var inst_33140 = cljs.core.chunked_seq_QMARK_(inst_33138);
var state_33173__$1 = state_33173;
if(inst_33140){
var statearr_33216_34181 = state_33173__$1;
(statearr_33216_34181[(1)] = (17));

} else {
var statearr_33217_34182 = state_33173__$1;
(statearr_33217_34182[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33174 === (16))){
var inst_33156 = (state_33173[(2)]);
var state_33173__$1 = state_33173;
var statearr_33218_34183 = state_33173__$1;
(statearr_33218_34183[(2)] = inst_33156);

(statearr_33218_34183[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33174 === (10))){
var inst_33125 = (state_33173[(11)]);
var inst_33127 = (state_33173[(12)]);
var inst_33132 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_33125,inst_33127);
var state_33173__$1 = state_33173;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33173__$1,(13),out,inst_33132);
} else {
if((state_val_33174 === (18))){
var inst_33138 = (state_33173[(7)]);
var inst_33147 = cljs.core.first(inst_33138);
var state_33173__$1 = state_33173;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33173__$1,(20),out,inst_33147);
} else {
if((state_val_33174 === (8))){
var inst_33126 = (state_33173[(10)]);
var inst_33127 = (state_33173[(12)]);
var inst_33129 = (inst_33127 < inst_33126);
var inst_33130 = inst_33129;
var state_33173__$1 = state_33173;
if(cljs.core.truth_(inst_33130)){
var statearr_33219_34184 = state_33173__$1;
(statearr_33219_34184[(1)] = (10));

} else {
var statearr_33220_34185 = state_33173__$1;
(statearr_33220_34185[(1)] = (11));

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
});})(c__31279__auto__))
;
return ((function (switch__31054__auto__,c__31279__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31055__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31055__auto____0 = (function (){
var statearr_33221 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33221[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31055__auto__);

(statearr_33221[(1)] = (1));

return statearr_33221;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31055__auto____1 = (function (state_33173){
while(true){
var ret_value__31056__auto__ = (function (){try{while(true){
var result__31057__auto__ = switch__31054__auto__(state_33173);
if(cljs.core.keyword_identical_QMARK_(result__31057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31057__auto__;
}
break;
}
}catch (e33222){if((e33222 instanceof Object)){
var ex__31058__auto__ = e33222;
var statearr_33223_34186 = state_33173;
(statearr_33223_34186[(5)] = ex__31058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33222;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34187 = state_33173;
state_33173 = G__34187;
continue;
} else {
return ret_value__31056__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31055__auto__ = function(state_33173){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31055__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31055__auto____1.call(this,state_33173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__31055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31055__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31055__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31055__auto__;
})()
;})(switch__31054__auto__,c__31279__auto__))
})();
var state__31281__auto__ = (function (){var statearr_33224 = (f__31280__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31280__auto__.cljs$core$IFn$_invoke$arity$0() : f__31280__auto__.call(null));
(statearr_33224[(6)] = c__31279__auto__);

return statearr_33224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31281__auto__);
});})(c__31279__auto__))
);

return c__31279__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33226 = arguments.length;
switch (G__33226) {
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
var G__33228 = arguments.length;
switch (G__33228) {
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
var G__33230 = arguments.length;
switch (G__33230) {
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
var c__31279__auto___34203 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31279__auto___34203,out){
return (function (){
var f__31280__auto__ = (function (){var switch__31054__auto__ = ((function (c__31279__auto___34203,out){
return (function (state_33254){
var state_val_33255 = (state_33254[(1)]);
if((state_val_33255 === (7))){
var inst_33249 = (state_33254[(2)]);
var state_33254__$1 = state_33254;
var statearr_33256_34204 = state_33254__$1;
(statearr_33256_34204[(2)] = inst_33249);

(statearr_33256_34204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33255 === (1))){
var inst_33231 = null;
var state_33254__$1 = (function (){var statearr_33257 = state_33254;
(statearr_33257[(7)] = inst_33231);

return statearr_33257;
})();
var statearr_33258_34205 = state_33254__$1;
(statearr_33258_34205[(2)] = null);

(statearr_33258_34205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33255 === (4))){
var inst_33234 = (state_33254[(8)]);
var inst_33234__$1 = (state_33254[(2)]);
var inst_33235 = (inst_33234__$1 == null);
var inst_33236 = cljs.core.not(inst_33235);
var state_33254__$1 = (function (){var statearr_33259 = state_33254;
(statearr_33259[(8)] = inst_33234__$1);

return statearr_33259;
})();
if(inst_33236){
var statearr_33260_34206 = state_33254__$1;
(statearr_33260_34206[(1)] = (5));

} else {
var statearr_33261_34207 = state_33254__$1;
(statearr_33261_34207[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33255 === (6))){
var state_33254__$1 = state_33254;
var statearr_33262_34208 = state_33254__$1;
(statearr_33262_34208[(2)] = null);

(statearr_33262_34208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33255 === (3))){
var inst_33251 = (state_33254[(2)]);
var inst_33252 = cljs.core.async.close_BANG_(out);
var state_33254__$1 = (function (){var statearr_33263 = state_33254;
(statearr_33263[(9)] = inst_33251);

return statearr_33263;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33254__$1,inst_33252);
} else {
if((state_val_33255 === (2))){
var state_33254__$1 = state_33254;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33254__$1,(4),ch);
} else {
if((state_val_33255 === (11))){
var inst_33234 = (state_33254[(8)]);
var inst_33243 = (state_33254[(2)]);
var inst_33231 = inst_33234;
var state_33254__$1 = (function (){var statearr_33264 = state_33254;
(statearr_33264[(7)] = inst_33231);

(statearr_33264[(10)] = inst_33243);

return statearr_33264;
})();
var statearr_33265_34209 = state_33254__$1;
(statearr_33265_34209[(2)] = null);

(statearr_33265_34209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33255 === (9))){
var inst_33234 = (state_33254[(8)]);
var state_33254__$1 = state_33254;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33254__$1,(11),out,inst_33234);
} else {
if((state_val_33255 === (5))){
var inst_33231 = (state_33254[(7)]);
var inst_33234 = (state_33254[(8)]);
var inst_33238 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33234,inst_33231);
var state_33254__$1 = state_33254;
if(inst_33238){
var statearr_33267_34213 = state_33254__$1;
(statearr_33267_34213[(1)] = (8));

} else {
var statearr_33268_34214 = state_33254__$1;
(statearr_33268_34214[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33255 === (10))){
var inst_33246 = (state_33254[(2)]);
var state_33254__$1 = state_33254;
var statearr_33269_34215 = state_33254__$1;
(statearr_33269_34215[(2)] = inst_33246);

(statearr_33269_34215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33255 === (8))){
var inst_33231 = (state_33254[(7)]);
var tmp33266 = inst_33231;
var inst_33231__$1 = tmp33266;
var state_33254__$1 = (function (){var statearr_33270 = state_33254;
(statearr_33270[(7)] = inst_33231__$1);

return statearr_33270;
})();
var statearr_33271_34216 = state_33254__$1;
(statearr_33271_34216[(2)] = null);

(statearr_33271_34216[(1)] = (2));


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
});})(c__31279__auto___34203,out))
;
return ((function (switch__31054__auto__,c__31279__auto___34203,out){
return (function() {
var cljs$core$async$state_machine__31055__auto__ = null;
var cljs$core$async$state_machine__31055__auto____0 = (function (){
var statearr_33272 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33272[(0)] = cljs$core$async$state_machine__31055__auto__);

(statearr_33272[(1)] = (1));

return statearr_33272;
});
var cljs$core$async$state_machine__31055__auto____1 = (function (state_33254){
while(true){
var ret_value__31056__auto__ = (function (){try{while(true){
var result__31057__auto__ = switch__31054__auto__(state_33254);
if(cljs.core.keyword_identical_QMARK_(result__31057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31057__auto__;
}
break;
}
}catch (e33273){if((e33273 instanceof Object)){
var ex__31058__auto__ = e33273;
var statearr_33274_34220 = state_33254;
(statearr_33274_34220[(5)] = ex__31058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33273;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34223 = state_33254;
state_33254 = G__34223;
continue;
} else {
return ret_value__31056__auto__;
}
break;
}
});
cljs$core$async$state_machine__31055__auto__ = function(state_33254){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31055__auto____1.call(this,state_33254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31055__auto____0;
cljs$core$async$state_machine__31055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31055__auto____1;
return cljs$core$async$state_machine__31055__auto__;
})()
;})(switch__31054__auto__,c__31279__auto___34203,out))
})();
var state__31281__auto__ = (function (){var statearr_33275 = (f__31280__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31280__auto__.cljs$core$IFn$_invoke$arity$0() : f__31280__auto__.call(null));
(statearr_33275[(6)] = c__31279__auto___34203);

return statearr_33275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31281__auto__);
});})(c__31279__auto___34203,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33277 = arguments.length;
switch (G__33277) {
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
var c__31279__auto___34225 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31279__auto___34225,out){
return (function (){
var f__31280__auto__ = (function (){var switch__31054__auto__ = ((function (c__31279__auto___34225,out){
return (function (state_33315){
var state_val_33316 = (state_33315[(1)]);
if((state_val_33316 === (7))){
var inst_33311 = (state_33315[(2)]);
var state_33315__$1 = state_33315;
var statearr_33317_34226 = state_33315__$1;
(statearr_33317_34226[(2)] = inst_33311);

(statearr_33317_34226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33316 === (1))){
var inst_33278 = (new Array(n));
var inst_33279 = inst_33278;
var inst_33280 = (0);
var state_33315__$1 = (function (){var statearr_33318 = state_33315;
(statearr_33318[(7)] = inst_33280);

(statearr_33318[(8)] = inst_33279);

return statearr_33318;
})();
var statearr_33319_34229 = state_33315__$1;
(statearr_33319_34229[(2)] = null);

(statearr_33319_34229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33316 === (4))){
var inst_33283 = (state_33315[(9)]);
var inst_33283__$1 = (state_33315[(2)]);
var inst_33284 = (inst_33283__$1 == null);
var inst_33285 = cljs.core.not(inst_33284);
var state_33315__$1 = (function (){var statearr_33320 = state_33315;
(statearr_33320[(9)] = inst_33283__$1);

return statearr_33320;
})();
if(inst_33285){
var statearr_33321_34230 = state_33315__$1;
(statearr_33321_34230[(1)] = (5));

} else {
var statearr_33322_34231 = state_33315__$1;
(statearr_33322_34231[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33316 === (15))){
var inst_33305 = (state_33315[(2)]);
var state_33315__$1 = state_33315;
var statearr_33323_34232 = state_33315__$1;
(statearr_33323_34232[(2)] = inst_33305);

(statearr_33323_34232[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33316 === (13))){
var state_33315__$1 = state_33315;
var statearr_33324_34233 = state_33315__$1;
(statearr_33324_34233[(2)] = null);

(statearr_33324_34233[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33316 === (6))){
var inst_33280 = (state_33315[(7)]);
var inst_33301 = (inst_33280 > (0));
var state_33315__$1 = state_33315;
if(cljs.core.truth_(inst_33301)){
var statearr_33325_34234 = state_33315__$1;
(statearr_33325_34234[(1)] = (12));

} else {
var statearr_33326_34235 = state_33315__$1;
(statearr_33326_34235[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33316 === (3))){
var inst_33313 = (state_33315[(2)]);
var state_33315__$1 = state_33315;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33315__$1,inst_33313);
} else {
if((state_val_33316 === (12))){
var inst_33279 = (state_33315[(8)]);
var inst_33303 = cljs.core.vec(inst_33279);
var state_33315__$1 = state_33315;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33315__$1,(15),out,inst_33303);
} else {
if((state_val_33316 === (2))){
var state_33315__$1 = state_33315;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33315__$1,(4),ch);
} else {
if((state_val_33316 === (11))){
var inst_33295 = (state_33315[(2)]);
var inst_33296 = (new Array(n));
var inst_33279 = inst_33296;
var inst_33280 = (0);
var state_33315__$1 = (function (){var statearr_33327 = state_33315;
(statearr_33327[(7)] = inst_33280);

(statearr_33327[(10)] = inst_33295);

(statearr_33327[(8)] = inst_33279);

return statearr_33327;
})();
var statearr_33328_34245 = state_33315__$1;
(statearr_33328_34245[(2)] = null);

(statearr_33328_34245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33316 === (9))){
var inst_33279 = (state_33315[(8)]);
var inst_33293 = cljs.core.vec(inst_33279);
var state_33315__$1 = state_33315;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33315__$1,(11),out,inst_33293);
} else {
if((state_val_33316 === (5))){
var inst_33288 = (state_33315[(11)]);
var inst_33280 = (state_33315[(7)]);
var inst_33283 = (state_33315[(9)]);
var inst_33279 = (state_33315[(8)]);
var inst_33287 = (inst_33279[inst_33280] = inst_33283);
var inst_33288__$1 = (inst_33280 + (1));
var inst_33289 = (inst_33288__$1 < n);
var state_33315__$1 = (function (){var statearr_33329 = state_33315;
(statearr_33329[(11)] = inst_33288__$1);

(statearr_33329[(12)] = inst_33287);

return statearr_33329;
})();
if(cljs.core.truth_(inst_33289)){
var statearr_33330_34247 = state_33315__$1;
(statearr_33330_34247[(1)] = (8));

} else {
var statearr_33331_34248 = state_33315__$1;
(statearr_33331_34248[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33316 === (14))){
var inst_33308 = (state_33315[(2)]);
var inst_33309 = cljs.core.async.close_BANG_(out);
var state_33315__$1 = (function (){var statearr_33333 = state_33315;
(statearr_33333[(13)] = inst_33308);

return statearr_33333;
})();
var statearr_33334_34250 = state_33315__$1;
(statearr_33334_34250[(2)] = inst_33309);

(statearr_33334_34250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33316 === (10))){
var inst_33299 = (state_33315[(2)]);
var state_33315__$1 = state_33315;
var statearr_33335_34253 = state_33315__$1;
(statearr_33335_34253[(2)] = inst_33299);

(statearr_33335_34253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33316 === (8))){
var inst_33288 = (state_33315[(11)]);
var inst_33279 = (state_33315[(8)]);
var tmp33332 = inst_33279;
var inst_33279__$1 = tmp33332;
var inst_33280 = inst_33288;
var state_33315__$1 = (function (){var statearr_33336 = state_33315;
(statearr_33336[(7)] = inst_33280);

(statearr_33336[(8)] = inst_33279__$1);

return statearr_33336;
})();
var statearr_33337_34255 = state_33315__$1;
(statearr_33337_34255[(2)] = null);

(statearr_33337_34255[(1)] = (2));


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
});})(c__31279__auto___34225,out))
;
return ((function (switch__31054__auto__,c__31279__auto___34225,out){
return (function() {
var cljs$core$async$state_machine__31055__auto__ = null;
var cljs$core$async$state_machine__31055__auto____0 = (function (){
var statearr_33338 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33338[(0)] = cljs$core$async$state_machine__31055__auto__);

(statearr_33338[(1)] = (1));

return statearr_33338;
});
var cljs$core$async$state_machine__31055__auto____1 = (function (state_33315){
while(true){
var ret_value__31056__auto__ = (function (){try{while(true){
var result__31057__auto__ = switch__31054__auto__(state_33315);
if(cljs.core.keyword_identical_QMARK_(result__31057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31057__auto__;
}
break;
}
}catch (e33339){if((e33339 instanceof Object)){
var ex__31058__auto__ = e33339;
var statearr_33340_34256 = state_33315;
(statearr_33340_34256[(5)] = ex__31058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33339;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34257 = state_33315;
state_33315 = G__34257;
continue;
} else {
return ret_value__31056__auto__;
}
break;
}
});
cljs$core$async$state_machine__31055__auto__ = function(state_33315){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31055__auto____1.call(this,state_33315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31055__auto____0;
cljs$core$async$state_machine__31055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31055__auto____1;
return cljs$core$async$state_machine__31055__auto__;
})()
;})(switch__31054__auto__,c__31279__auto___34225,out))
})();
var state__31281__auto__ = (function (){var statearr_33341 = (f__31280__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31280__auto__.cljs$core$IFn$_invoke$arity$0() : f__31280__auto__.call(null));
(statearr_33341[(6)] = c__31279__auto___34225);

return statearr_33341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31281__auto__);
});})(c__31279__auto___34225,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33343 = arguments.length;
switch (G__33343) {
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
var c__31279__auto___34261 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31279__auto___34261,out){
return (function (){
var f__31280__auto__ = (function (){var switch__31054__auto__ = ((function (c__31279__auto___34261,out){
return (function (state_33385){
var state_val_33386 = (state_33385[(1)]);
if((state_val_33386 === (7))){
var inst_33381 = (state_33385[(2)]);
var state_33385__$1 = state_33385;
var statearr_33387_34262 = state_33385__$1;
(statearr_33387_34262[(2)] = inst_33381);

(statearr_33387_34262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (1))){
var inst_33344 = [];
var inst_33345 = inst_33344;
var inst_33346 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33385__$1 = (function (){var statearr_33388 = state_33385;
(statearr_33388[(7)] = inst_33346);

(statearr_33388[(8)] = inst_33345);

return statearr_33388;
})();
var statearr_33389_34264 = state_33385__$1;
(statearr_33389_34264[(2)] = null);

(statearr_33389_34264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (4))){
var inst_33349 = (state_33385[(9)]);
var inst_33349__$1 = (state_33385[(2)]);
var inst_33350 = (inst_33349__$1 == null);
var inst_33351 = cljs.core.not(inst_33350);
var state_33385__$1 = (function (){var statearr_33390 = state_33385;
(statearr_33390[(9)] = inst_33349__$1);

return statearr_33390;
})();
if(inst_33351){
var statearr_33391_34266 = state_33385__$1;
(statearr_33391_34266[(1)] = (5));

} else {
var statearr_33392_34267 = state_33385__$1;
(statearr_33392_34267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (15))){
var inst_33375 = (state_33385[(2)]);
var state_33385__$1 = state_33385;
var statearr_33393_34268 = state_33385__$1;
(statearr_33393_34268[(2)] = inst_33375);

(statearr_33393_34268[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (13))){
var state_33385__$1 = state_33385;
var statearr_33394_34269 = state_33385__$1;
(statearr_33394_34269[(2)] = null);

(statearr_33394_34269[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (6))){
var inst_33345 = (state_33385[(8)]);
var inst_33370 = inst_33345.length;
var inst_33371 = (inst_33370 > (0));
var state_33385__$1 = state_33385;
if(cljs.core.truth_(inst_33371)){
var statearr_33395_34270 = state_33385__$1;
(statearr_33395_34270[(1)] = (12));

} else {
var statearr_33396_34271 = state_33385__$1;
(statearr_33396_34271[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (3))){
var inst_33383 = (state_33385[(2)]);
var state_33385__$1 = state_33385;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33385__$1,inst_33383);
} else {
if((state_val_33386 === (12))){
var inst_33345 = (state_33385[(8)]);
var inst_33373 = cljs.core.vec(inst_33345);
var state_33385__$1 = state_33385;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33385__$1,(15),out,inst_33373);
} else {
if((state_val_33386 === (2))){
var state_33385__$1 = state_33385;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33385__$1,(4),ch);
} else {
if((state_val_33386 === (11))){
var inst_33353 = (state_33385[(10)]);
var inst_33349 = (state_33385[(9)]);
var inst_33363 = (state_33385[(2)]);
var inst_33364 = [];
var inst_33365 = inst_33364.push(inst_33349);
var inst_33345 = inst_33364;
var inst_33346 = inst_33353;
var state_33385__$1 = (function (){var statearr_33397 = state_33385;
(statearr_33397[(7)] = inst_33346);

(statearr_33397[(11)] = inst_33365);

(statearr_33397[(12)] = inst_33363);

(statearr_33397[(8)] = inst_33345);

return statearr_33397;
})();
var statearr_33398_34273 = state_33385__$1;
(statearr_33398_34273[(2)] = null);

(statearr_33398_34273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (9))){
var inst_33345 = (state_33385[(8)]);
var inst_33361 = cljs.core.vec(inst_33345);
var state_33385__$1 = state_33385;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33385__$1,(11),out,inst_33361);
} else {
if((state_val_33386 === (5))){
var inst_33353 = (state_33385[(10)]);
var inst_33346 = (state_33385[(7)]);
var inst_33349 = (state_33385[(9)]);
var inst_33353__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33349) : f.call(null,inst_33349));
var inst_33354 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33353__$1,inst_33346);
var inst_33355 = cljs.core.keyword_identical_QMARK_(inst_33346,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33356 = ((inst_33354) || (inst_33355));
var state_33385__$1 = (function (){var statearr_33399 = state_33385;
(statearr_33399[(10)] = inst_33353__$1);

return statearr_33399;
})();
if(cljs.core.truth_(inst_33356)){
var statearr_33400_34275 = state_33385__$1;
(statearr_33400_34275[(1)] = (8));

} else {
var statearr_33401_34276 = state_33385__$1;
(statearr_33401_34276[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (14))){
var inst_33378 = (state_33385[(2)]);
var inst_33379 = cljs.core.async.close_BANG_(out);
var state_33385__$1 = (function (){var statearr_33403 = state_33385;
(statearr_33403[(13)] = inst_33378);

return statearr_33403;
})();
var statearr_33404_34277 = state_33385__$1;
(statearr_33404_34277[(2)] = inst_33379);

(statearr_33404_34277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (10))){
var inst_33368 = (state_33385[(2)]);
var state_33385__$1 = state_33385;
var statearr_33405_34278 = state_33385__$1;
(statearr_33405_34278[(2)] = inst_33368);

(statearr_33405_34278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (8))){
var inst_33353 = (state_33385[(10)]);
var inst_33345 = (state_33385[(8)]);
var inst_33349 = (state_33385[(9)]);
var inst_33358 = inst_33345.push(inst_33349);
var tmp33402 = inst_33345;
var inst_33345__$1 = tmp33402;
var inst_33346 = inst_33353;
var state_33385__$1 = (function (){var statearr_33406 = state_33385;
(statearr_33406[(7)] = inst_33346);

(statearr_33406[(14)] = inst_33358);

(statearr_33406[(8)] = inst_33345__$1);

return statearr_33406;
})();
var statearr_33407_34279 = state_33385__$1;
(statearr_33407_34279[(2)] = null);

(statearr_33407_34279[(1)] = (2));


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
});})(c__31279__auto___34261,out))
;
return ((function (switch__31054__auto__,c__31279__auto___34261,out){
return (function() {
var cljs$core$async$state_machine__31055__auto__ = null;
var cljs$core$async$state_machine__31055__auto____0 = (function (){
var statearr_33408 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33408[(0)] = cljs$core$async$state_machine__31055__auto__);

(statearr_33408[(1)] = (1));

return statearr_33408;
});
var cljs$core$async$state_machine__31055__auto____1 = (function (state_33385){
while(true){
var ret_value__31056__auto__ = (function (){try{while(true){
var result__31057__auto__ = switch__31054__auto__(state_33385);
if(cljs.core.keyword_identical_QMARK_(result__31057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31057__auto__;
}
break;
}
}catch (e33409){if((e33409 instanceof Object)){
var ex__31058__auto__ = e33409;
var statearr_33410_34280 = state_33385;
(statearr_33410_34280[(5)] = ex__31058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33409;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34281 = state_33385;
state_33385 = G__34281;
continue;
} else {
return ret_value__31056__auto__;
}
break;
}
});
cljs$core$async$state_machine__31055__auto__ = function(state_33385){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31055__auto____1.call(this,state_33385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31055__auto____0;
cljs$core$async$state_machine__31055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31055__auto____1;
return cljs$core$async$state_machine__31055__auto__;
})()
;})(switch__31054__auto__,c__31279__auto___34261,out))
})();
var state__31281__auto__ = (function (){var statearr_33411 = (f__31280__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31280__auto__.cljs$core$IFn$_invoke$arity$0() : f__31280__auto__.call(null));
(statearr_33411[(6)] = c__31279__auto___34261);

return statearr_33411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31281__auto__);
});})(c__31279__auto___34261,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
