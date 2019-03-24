goog.provide('shadow.xhr');
goog.require('cljs.core');
goog.require('goog.result');
goog.require('goog.result.SimpleResult');
goog.require('goog.labs.net.xhr');
goog.require('cljs.reader');
goog.require('goog.uri.utils');
goog.require('goog.json');
goog.require('shadow.object');
goog.require('shadow.dom');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('shadow.util');
shadow.xhr.result_chain = (function shadow$xhr$result_chain(res,handler){
return goog.result.chain(res,handler);
});
shadow.xhr.result_combine = (function shadow$xhr$result_combine(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34980 = arguments.length;
var i__4731__auto___34981 = (0);
while(true){
if((i__4731__auto___34981 < len__4730__auto___34980)){
args__4736__auto__.push((arguments[i__4731__auto___34981]));

var G__34982 = (i__4731__auto___34981 + (1));
i__4731__auto___34981 = G__34982;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.xhr.result_combine.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.xhr.result_combine.cljs$core$IFn$_invoke$arity$variadic = (function (results){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.result.combine,results);
});

shadow.xhr.result_combine.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.xhr.result_combine.cljs$lang$applyTo = (function (seq34835){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34835));
});

shadow.xhr.result_wait_on_success = (function shadow$xhr$result_wait_on_success(res,callback){
return goog.result.waitOnSuccess(res,callback);
});
shadow.xhr.result_success_QMARK_ = (function shadow$xhr$result_success_QMARK_(res){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.result.Result.State.SUCCESS,res.getState());
});
shadow.xhr.result_value = (function shadow$xhr$result_value(res){
return res.getValue();
});
shadow.xhr.result_immediate = (function shadow$xhr$result_immediate(value){
return goog.result.successfulResult(value);
});
shadow.xhr.result_error = (function shadow$xhr$result_error(res,callback){
return goog.result.waitOnError(res,callback);
});
shadow.xhr.edn_transform = (function shadow$xhr$edn_transform(body){
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(body);
});
shadow.xhr.json_transform = (function shadow$xhr$json_transform(body){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(body));
});
shadow.xhr.goog_keys = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"timeout","timeout",-318625318),"timeoutMs",new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),"withCredentials",new cljs.core.Keyword(null,"headers","headers",-835030129),"headers",new cljs.core.Keyword(null,"mime-type","mime-type",1058646439),"mimeType"], null);
shadow.xhr.make_request_options = (function shadow$xhr$make_request_options(options){
var obj = ({});
var seq__34871_34997 = cljs.core.seq(options);
var chunk__34872_34998 = null;
var count__34873_34999 = (0);
var i__34874_35000 = (0);
while(true){
if((i__34874_35000 < count__34873_34999)){
var vec__34896_35002 = chunk__34872_34998.cljs$core$IIndexed$_nth$arity$2(null,i__34874_35000);
var k_35003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34896_35002,(0),null);
var v_35004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34896_35002,(1),null);
(obj[cljs.core.get.cljs$core$IFn$_invoke$arity$2(shadow.xhr.goog_keys,k_35003)] = cljs.core.clj__GT_js(v_35004));


var G__35011 = seq__34871_34997;
var G__35012 = chunk__34872_34998;
var G__35013 = count__34873_34999;
var G__35014 = (i__34874_35000 + (1));
seq__34871_34997 = G__35011;
chunk__34872_34998 = G__35012;
count__34873_34999 = G__35013;
i__34874_35000 = G__35014;
continue;
} else {
var temp__5720__auto___35020 = cljs.core.seq(seq__34871_34997);
if(temp__5720__auto___35020){
var seq__34871_35021__$1 = temp__5720__auto___35020;
if(cljs.core.chunked_seq_QMARK_(seq__34871_35021__$1)){
var c__4550__auto___35022 = cljs.core.chunk_first(seq__34871_35021__$1);
var G__35023 = cljs.core.chunk_rest(seq__34871_35021__$1);
var G__35024 = c__4550__auto___35022;
var G__35025 = cljs.core.count(c__4550__auto___35022);
var G__35026 = (0);
seq__34871_34997 = G__35023;
chunk__34872_34998 = G__35024;
count__34873_34999 = G__35025;
i__34874_35000 = G__35026;
continue;
} else {
var vec__34900_35028 = cljs.core.first(seq__34871_35021__$1);
var k_35029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34900_35028,(0),null);
var v_35030 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34900_35028,(1),null);
(obj[cljs.core.get.cljs$core$IFn$_invoke$arity$2(shadow.xhr.goog_keys,k_35029)] = cljs.core.clj__GT_js(v_35030));


var G__35035 = cljs.core.next(seq__34871_35021__$1);
var G__35036 = null;
var G__35037 = (0);
var G__35038 = (0);
seq__34871_34997 = G__35035;
chunk__34872_34998 = G__35036;
count__34873_34999 = G__35037;
i__34874_35000 = G__35038;
continue;
}
} else {
}
}
break;
}

return obj;
});
shadow.xhr.content_transforms = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, ["text/edn",shadow.xhr.edn_transform,"application/edn",shadow.xhr.edn_transform,"application/json",shadow.xhr.json_transform,"text/html",cljs.core.identity,"text/plain",cljs.core.identity], null));
shadow.xhr.register_transform = (function shadow$xhr$register_transform(content_type,transform_fn){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.xhr.content_transforms,cljs.core.assoc,content_type,transform_fn);
});
shadow.xhr.auto_transform = (function shadow$xhr$auto_transform(req){
var content_type = (function (){var ct = clojure.string.lower_case(req.getResponseHeader("Content-Type"));
var sep = ct.indexOf(";");
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),sep)){
return ct.substring((0),sep);
} else {
return ct;
}
})();
var transform_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.xhr.content_transforms),content_type);
if((transform_fn == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("unsupported content-type",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"req","req",-326448303),req,new cljs.core.Keyword(null,"content-type","content-type",-508222634),content_type], null));
} else {
var G__34904 = req.responseText;
return (transform_fn.cljs$core$IFn$_invoke$arity$1 ? transform_fn.cljs$core$IFn$_invoke$arity$1(G__34904) : transform_fn.call(null,G__34904));
}
});
shadow.xhr.make_url = (function shadow$xhr$make_url(url,params){
var G__34913 = url;
var G__34914 = cljs.core.clj__GT_js(params);
return goog.uri.utils.appendParamsFromMap(G__34913,G__34914);
});
shadow.xhr.transform_request_body = (function shadow$xhr$transform_request_body(data){
if(typeof data === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain; charset=utf-8",data], null);
} else {
if((((!((data == null))))?(((((data.cljs$lang$protocol_mask$partition0$ & (2147483648))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IPrintWithWriter$))))?true:(((!data.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,data))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/edn; charset=utf-8",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/octet-stream",data], null);

}
}
});
shadow.xhr.as_url = (function shadow$xhr$as_url(input){
if(typeof input === 'string'){
return input;
} else {
if(((cljs.core.vector_QMARK_(input)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(input))) && (typeof cljs.core.first(input) === 'string') && (cljs.core.map_QMARK_(cljs.core.second(input))))){
var vec__34921 = input;
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34921,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34921,(1),null);
return shadow.xhr.make_url(url,params);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("doesnt look like an url",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),input], null));

}
}
});
shadow.xhr.e__GT_data = (function shadow$xhr$e__GT_data(e){
return e;
});
shadow.xhr.event_handler = (function shadow$xhr$event_handler(req,events,event_type){
return (function (e){
if(cljs.core.map_QMARK_(events)){
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(events,event_type);
if(cljs.core.truth_(temp__5720__auto__)){
var c = temp__5720__auto__;
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [req,shadow.xhr.e__GT_data(e)], null));
} else {
return null;
}
} else {
if((!((events == null)))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(events,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_type,req,shadow.xhr.e__GT_data(e)], null));
} else {
return null;

}
}
});
});
shadow.xhr.request_ok_QMARK_ = (function shadow$xhr$request_ok_QMARK_(status){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),status);
});
shadow.xhr.request_error_QMARK_ = (function shadow$xhr$request_error_QMARK_(status){
return (status >= (400));
});
/**
 * creates a channel and performs xhr request like (chan :GET "/something")
 * 
 * accepts url as string or [url params]
 * 
 * this channel will receive one message [status body req] on load
 * loadend will close the result channel, so you will get nil results on request errors/timeouts
 * 
 * use options hash to pass in extra channels
 * 
 * (chan :POST "/something" some-data {:events chan-or-map
 *                                       :upload chan-or-map})
 * 
 * when given a chan that channels receives messages in form of [event-type event-data req]
 * when given a map a channel is expected for each eventtype and will receive [event-data req]
 * {:timeout some-chan}, if no channel for a given event is present, no message is sent
 * 
 * event types are :loadstart :progress :abort :error :timeout :loadend :load (see xhr spec)
 * only exception is that status >= 500 does not return a result and produces an error event instead
 */
shadow.xhr.chan = (function shadow$xhr$chan(var_args){
var G__34932 = arguments.length;
switch (G__34932) {
case 2:
return shadow.xhr.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.xhr.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.xhr.chan.cljs$core$IFn$_invoke$arity$2 = (function (method,url){
return shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4(method,url,null,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.xhr.chan.cljs$core$IFn$_invoke$arity$3 = (function (method,url,data){
return shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4(method,url,data,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4 = (function (method,url,data,p__34933){
var map__34934 = p__34933;
var map__34934__$1 = (((((!((map__34934 == null))))?(((((map__34934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34934):map__34934);
var options = map__34934__$1;
var events = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34934__$1,new cljs.core.Keyword(null,"events","events",1792552201));
var upload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34934__$1,new cljs.core.Keyword(null,"upload","upload",-255769218));
var body_only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34934__$1,new cljs.core.Keyword(null,"body-only","body-only",-698120682));
var req = (new XMLHttpRequest());
var body_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"GET","GET",1736591026),method);
var vec__34937 = ((body_QMARK_)?shadow.xhr.transform_request_body(data):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null));
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34937,(0),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34937,(1),null);
var result_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
if(cljs.core.truth_((function (){var and__4120__auto__ = body_QMARK_;
if(and__4120__auto__){
return upload;
} else {
return and__4120__auto__;
}
})())){
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"loadstart","loadstart",1841209333),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"loadstart","loadstart",1841209333)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"progress","progress",244323547),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"progress","progress",244323547)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"abort","abort",521193198),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"abort","abort",521193198)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"error","error",-978969032),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"error","error",-978969032)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"timeout","timeout",-318625318),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"timeout","timeout",-318625318)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"loadend","loadend",1430560564),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"loadend","loadend",1430560564)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"load","load",-1318641184),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"loadend","loadend",1430560564)));
} else {
}

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"loadstart","loadstart",1841209333),shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"loadstart","loadstart",1841209333)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"progress","progress",244323547),shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"progress","progress",244323547)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"abort","abort",521193198),shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"abort","abort",521193198)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"timeout","timeout",-318625318),shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"timeout","timeout",-318625318)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"loadend","loadend",1430560564),(function (){var callback = shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"loadend","loadend",1430560564));
return ((function (callback,req,body_QMARK_,vec__34937,content_type,body,result_chan,map__34934,map__34934__$1,options,events,upload,body_only){
return (function (e){
(callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(e) : callback.call(null,e));

return cljs.core.async.close_BANG_(result_chan);
});
;})(callback,req,body_QMARK_,vec__34937,content_type,body,result_chan,map__34934,map__34934__$1,options,events,upload,body_only))
})());

var error_handler_35088 = shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"error","error",-978969032));
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"error","error",-978969032),error_handler_35088);

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"load","load",-1318641184),(function (){var callback = shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"load","load",-1318641184));
return ((function (callback,error_handler_35088,req,body_QMARK_,vec__34937,content_type,body,result_chan,map__34934,map__34934__$1,options,events,upload,body_only){
return (function (e){
var status = req.status;
var body__$1 = (function (){var temp__5718__auto__ = new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(temp__5718__auto__)){
var transform = temp__5718__auto__;
var G__34941 = req.responseText;
var G__34942 = req;
return (transform.cljs$core$IFn$_invoke$arity$2 ? transform.cljs$core$IFn$_invoke$arity$2(G__34941,G__34942) : transform.call(null,G__34941,G__34942));
} else {
return shadow.xhr.auto_transform(req);
}
})();
if(shadow.xhr.request_error_QMARK_(status)){
return (error_handler_35088.cljs$core$IFn$_invoke$arity$1 ? error_handler_35088.cljs$core$IFn$_invoke$arity$1(e) : error_handler_35088.call(null,e));
} else {
(callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(e) : callback.call(null,e));

if(cljs.core.truth_(body_only)){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(result_chan,body__$1);
} else {
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(result_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,body__$1,req], null));
}
}
});
;})(callback,error_handler_35088,req,body_QMARK_,vec__34937,content_type,body,result_chan,map__34934,map__34934__$1,options,events,upload,body_only))
})());

req.open(cljs.core.name(method),shadow.xhr.as_url(url),true);

req.responseType = "text";

req.withCredentials = (!(new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235).cljs$core$IFn$_invoke$arity$1(options) === false));

if(body_QMARK_){
req.setRequestHeader("Content-Type",content_type);
} else {
}

if(body_QMARK_){
req.send(body);
} else {
req.send();
}

return result_chan;
});

shadow.xhr.chan.cljs$lang$maxFixedArity = 4;

shadow.xhr.request = (function shadow$xhr$request(var_args){
var G__34944 = arguments.length;
switch (G__34944) {
case 2:
return shadow.xhr.request.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.xhr.request.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.xhr.request.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.xhr.request.cljs$core$IFn$_invoke$arity$2 = (function (method,url){
return shadow.xhr.request.cljs$core$IFn$_invoke$arity$4(method,url,null,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.xhr.request.cljs$core$IFn$_invoke$arity$3 = (function (method,url,data){
return shadow.xhr.request.cljs$core$IFn$_invoke$arity$4(method,url,data,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.xhr.request.cljs$core$IFn$_invoke$arity$4 = (function (method,url,data,options){
if((((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"DELETE","DELETE",1688673772),null,new cljs.core.Keyword(null,"GET","GET",1736591026),null], null), null),method)))) && ((data == null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("request needs data",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"options","options",99638489),options], null));
} else {
}

var body_QMARK_ = (!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"GET","GET",1736591026),method)) || ((data == null)))));
var vec__34945 = shadow.xhr.transform_request_body(data);
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34945,(0),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34945,(1),null);
var req = (function (){var G__34948 = cljs.core.name(method);
var G__34949 = (cljs.core.truth_((function (){var and__4120__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"GET","GET",1736591026),method);
if(and__4120__auto__){
return data;
} else {
return and__4120__auto__;
}
})())?shadow.xhr.make_url(url,data):url);
var G__34950 = ((body_QMARK_)?body:null);
var G__34951 = shadow.xhr.make_request_options(((body_QMARK_)?cljs.core.assoc_in(options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"Content-Type"], null),content_type):options));
return goog.labs.net.xhr.send(G__34948,G__34949,G__34950,G__34951);
})();
var req__$1 = goog.result.SimpleResult.fromPromise(req);
return goog.result.transform(req__$1,shadow.xhr.auto_transform);
});

shadow.xhr.request.cljs$lang$maxFixedArity = 4;

shadow.xhr.upload = (function shadow$xhr$upload(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35133 = arguments.length;
var i__4731__auto___35134 = (0);
while(true){
if((i__4731__auto___35134 < len__4730__auto___35133)){
args__4736__auto__.push((arguments[i__4731__auto___35134]));

var G__35135 = (i__4731__auto___35134 + (1));
i__4731__auto___35134 = G__35135;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return shadow.xhr.upload.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

shadow.xhr.upload.cljs$core$IFn$_invoke$arity$variadic = (function (url,file,events){
var xhr = (new XMLHttpRequest());
var seq__34955_35140 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),events));
var chunk__34957_35141 = null;
var count__34958_35142 = (0);
var i__34959_35143 = (0);
while(true){
if((i__34959_35143 < count__34958_35142)){
var vec__34967_35144 = chunk__34957_35141.cljs$core$IIndexed$_nth$arity$2(null,i__34959_35143);
var ev_id_35145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34967_35144,(0),null);
var ev_handler_35146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34967_35144,(1),null);
var target_35185 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"progress","progress",244323547),ev_id_35145))?(xhr["upload"]):xhr);
target_35185.addEventListener(cljs.core.name(ev_id_35145),ev_handler_35146);


var G__35187 = seq__34955_35140;
var G__35189 = chunk__34957_35141;
var G__35190 = count__34958_35142;
var G__35191 = (i__34959_35143 + (1));
seq__34955_35140 = G__35187;
chunk__34957_35141 = G__35189;
count__34958_35142 = G__35190;
i__34959_35143 = G__35191;
continue;
} else {
var temp__5720__auto___35196 = cljs.core.seq(seq__34955_35140);
if(temp__5720__auto___35196){
var seq__34955_35197__$1 = temp__5720__auto___35196;
if(cljs.core.chunked_seq_QMARK_(seq__34955_35197__$1)){
var c__4550__auto___35198 = cljs.core.chunk_first(seq__34955_35197__$1);
var G__35199 = cljs.core.chunk_rest(seq__34955_35197__$1);
var G__35200 = c__4550__auto___35198;
var G__35201 = cljs.core.count(c__4550__auto___35198);
var G__35202 = (0);
seq__34955_35140 = G__35199;
chunk__34957_35141 = G__35200;
count__34958_35142 = G__35201;
i__34959_35143 = G__35202;
continue;
} else {
var vec__34970_35204 = cljs.core.first(seq__34955_35197__$1);
var ev_id_35205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34970_35204,(0),null);
var ev_handler_35206 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34970_35204,(1),null);
var target_35211 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"progress","progress",244323547),ev_id_35205))?(xhr["upload"]):xhr);
target_35211.addEventListener(cljs.core.name(ev_id_35205),ev_handler_35206);


var G__35214 = cljs.core.next(seq__34955_35197__$1);
var G__35215 = null;
var G__35216 = (0);
var G__35217 = (0);
seq__34955_35140 = G__35214;
chunk__34957_35141 = G__35215;
count__34958_35142 = G__35216;
i__34959_35143 = G__35217;
continue;
}
} else {
}
}
break;
}

var G__34975 = xhr;
G__34975.open("PUT",url);

G__34975.send(file);

return G__34975;
});

shadow.xhr.upload.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
shadow.xhr.upload.cljs$lang$applyTo = (function (seq34952){
var G__34953 = cljs.core.first(seq34952);
var seq34952__$1 = cljs.core.next(seq34952);
var G__34954 = cljs.core.first(seq34952__$1);
var seq34952__$2 = cljs.core.next(seq34952__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34953,G__34954,seq34952__$2);
});


//# sourceMappingURL=shadow.xhr.js.map
