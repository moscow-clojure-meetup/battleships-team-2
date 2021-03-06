goog.provide('shadow.animate');
goog.require('cljs.core');
goog.require('shadow.dom');
goog.require('shadow.object');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('goog.dom.vendor');
goog.require('goog.style');
goog.require('shadow.util');

/**
 * @interface
 */
shadow.animate.Animation = function(){};

/**
 * return a map of {attr initial-value}
 */
shadow.animate._animate_from = (function shadow$animate$_animate_from(this$){
if(((!((this$ == null))) && (!((this$.shadow$animate$Animation$_animate_from$arity$1 == null))))){
return this$.shadow$animate$Animation$_animate_from$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (shadow.animate._animate_from[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (shadow.animate._animate_from["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-from",this$);
}
}
}
});

/**
 * return a map of {attr target-value}
 */
shadow.animate._animate_to = (function shadow$animate$_animate_to(this$){
if(((!((this$ == null))) && (!((this$.shadow$animate$Animation$_animate_to$arity$1 == null))))){
return this$.shadow$animate$Animation$_animate_to$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (shadow.animate._animate_to[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (shadow.animate._animate_to["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-to",this$);
}
}
}
});

/**
 * return a map of {attr target-value}
 */
shadow.animate._animate_toggles = (function shadow$animate$_animate_toggles(this$){
if(((!((this$ == null))) && (!((this$.shadow$animate$Animation$_animate_toggles$arity$1 == null))))){
return this$.shadow$animate$Animation$_animate_toggles$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (shadow.animate._animate_toggles[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (shadow.animate._animate_toggles["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-toggles",this$);
}
}
}
});

/**
 * return a map of {attr timing-function}
 */
shadow.animate._animate_timings = (function shadow$animate$_animate_timings(this$){
if(((!((this$ == null))) && (!((this$.shadow$animate$Animation$_animate_timings$arity$1 == null))))){
return this$.shadow$animate$Animation$_animate_timings$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (shadow.animate._animate_timings[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (shadow.animate._animate_timings["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-timings",this$);
}
}
}
});

/**
 * return a map of {attr transition-delay}
 */
shadow.animate._animate_delays = (function shadow$animate$_animate_delays(this$){
if(((!((this$ == null))) && (!((this$.shadow$animate$Animation$_animate_delays$arity$1 == null))))){
return this$.shadow$animate$Animation$_animate_delays$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (shadow.animate._animate_delays[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (shadow.animate._animate_delays["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-delays",this$);
}
}
}
});

shadow.animate.transition_string = (function shadow$animate$transition_string(duration,adef){
var timings = shadow.animate._animate_timings(adef);
var delays = shadow.animate._animate_delays(adef);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (timings,delays){
return (function (p__19916){
var vec__19917 = p__19916;
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19917,(0),null);
var timing = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19917,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(attr))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration),"ms"," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(timing),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(delays,attr);
if(cljs.core.truth_((function (){var and__3938__auto__ = delay;
if(cljs.core.truth_(and__3938__auto__)){
return (delay > (0));
} else {
return and__3938__auto__;
}
})())){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(delay),"ms"].join('');
} else {
return null;
}
})())].join('');
});})(timings,delays))
,timings));
});

/**
 * @interface
 */
shadow.animate.IAnimator = function(){};

shadow.animate.get_duration = (function shadow$animate$get_duration(animator){
if(((!((animator == null))) && (!((animator.shadow$animate$IAnimator$get_duration$arity$1 == null))))){
return animator.shadow$animate$IAnimator$get_duration$arity$1(animator);
} else {
var x__4243__auto__ = (((animator == null))?null:animator);
var m__4244__auto__ = (shadow.animate.get_duration[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4244__auto__.call(null,animator));
} else {
var m__4244__auto____$1 = (shadow.animate.get_duration["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(animator) : m__4244__auto____$1.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.get-duration",animator);
}
}
}
});

/**
 * apply the initial values
 */
shadow.animate.init_BANG_ = (function shadow$animate$init_BANG_(animator){
if(((!((animator == null))) && (!((animator.shadow$animate$IAnimator$init_BANG_$arity$1 == null))))){
return animator.shadow$animate$IAnimator$init_BANG_$arity$1(animator);
} else {
var x__4243__auto__ = (((animator == null))?null:animator);
var m__4244__auto__ = (shadow.animate.init_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4244__auto__.call(null,animator));
} else {
var m__4244__auto____$1 = (shadow.animate.init_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(animator) : m__4244__auto____$1.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.init!",animator);
}
}
}
});

/**
 * start the animation, must return a channel that closes once the animation is done
 */
shadow.animate.start_BANG_ = (function shadow$animate$start_BANG_(animator){
if(((!((animator == null))) && (!((animator.shadow$animate$IAnimator$start_BANG_$arity$1 == null))))){
return animator.shadow$animate$IAnimator$start_BANG_$arity$1(animator);
} else {
var x__4243__auto__ = (((animator == null))?null:animator);
var m__4244__auto__ = (shadow.animate.start_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4244__auto__.call(null,animator));
} else {
var m__4244__auto____$1 = (shadow.animate.start_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(animator) : m__4244__auto____$1.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.start!",animator);
}
}
}
});

/**
 * cleanup
 */
shadow.animate.finish_BANG_ = (function shadow$animate$finish_BANG_(animator){
if(((!((animator == null))) && (!((animator.shadow$animate$IAnimator$finish_BANG_$arity$1 == null))))){
return animator.shadow$animate$IAnimator$finish_BANG_$arity$1(animator);
} else {
var x__4243__auto__ = (((animator == null))?null:animator);
var m__4244__auto__ = (shadow.animate.finish_BANG_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4244__auto__.call(null,animator));
} else {
var m__4244__auto____$1 = (shadow.animate.finish_BANG_["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(animator) : m__4244__auto____$1.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.finish!",animator);
}
}
}
});


/**
* @constructor
 * @implements {shadow.animate.IAnimator}
*/
shadow.animate.Animator = (function (duration,items){
this.duration = duration;
this.items = items;
});
shadow.animate.Animator.prototype.shadow$animate$IAnimator$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.Animator.prototype.shadow$animate$IAnimator$get_duration$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.duration;
});

shadow.animate.Animator.prototype.shadow$animate$IAnimator$init_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__4408__auto__ = self__.items.length;
var i__18601__auto__ = (0);
while(true){
if((i__18601__auto__ < n__4408__auto__)){
var map__19937_20349 = (self__.items[i__18601__auto__]);
var map__19937_20350__$1 = ((((!((map__19937_20349 == null)))?(((((map__19937_20349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19937_20349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19937_20349):map__19937_20349);
var el_20351 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19937_20350__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var from_20352 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19937_20350__$1,new cljs.core.Keyword(null,"from","from",1815293044));
goog.style.setStyle(el_20351,from_20352);

var G__20353 = (i__18601__auto__ + (1));
i__18601__auto__ = G__20353;
continue;
} else {
return null;
}
break;
}
});

shadow.animate.Animator.prototype.shadow$animate$IAnimator$start_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__4408__auto__ = self__.items.length;
var i__18601__auto__ = (0);
while(true){
if((i__18601__auto__ < n__4408__auto__)){
var map__19939_20354 = (self__.items[i__18601__auto__]);
var map__19939_20355__$1 = ((((!((map__19939_20354 == null)))?(((((map__19939_20354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19939_20354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19939_20354):map__19939_20354);
var el_20356 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19939_20355__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var to_20357 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19939_20355__$1,new cljs.core.Keyword(null,"to","to",192099007));
var transition_20358 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19939_20355__$1,new cljs.core.Keyword(null,"transition","transition",765692007));
(to_20357["transition"] = transition_20358);

goog.style.setStyle(el_20356,to_20357);

var G__20363 = (i__18601__auto__ + (1));
i__18601__auto__ = G__20363;
continue;
} else {
return null;
}
break;
}
});

shadow.animate.Animator.prototype.shadow$animate$IAnimator$finish_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__4408__auto__ = self__.items.length;
var i__18601__auto__ = (0);
while(true){
if((i__18601__auto__ < n__4408__auto__)){
var map__19944_20365 = (self__.items[i__18601__auto__]);
var map__19944_20366__$1 = ((((!((map__19944_20365 == null)))?(((((map__19944_20365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19944_20365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19944_20365):map__19944_20365);
var el_20367 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19944_20366__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var toggles_20368 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19944_20366__$1,new cljs.core.Keyword(null,"toggles","toggles",1077909479));
(toggles_20368["transition"] = null);

goog.style.setStyle(el_20367,toggles_20368);

var G__20372 = (i__18601__auto__ + (1));
i__18601__auto__ = G__20372;
continue;
} else {
return null;
}
break;
}
});

shadow.animate.Animator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"duration","duration",-1210334701,null),new cljs.core.Symbol(null,"items","items",-1622480831,null)], null);
});

shadow.animate.Animator.cljs$lang$type = true;

shadow.animate.Animator.cljs$lang$ctorStr = "shadow.animate/Animator";

shadow.animate.Animator.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"shadow.animate/Animator");
});

/**
 * Positional factory function for shadow.animate/Animator.
 */
shadow.animate.__GT_Animator = (function shadow$animate$__GT_Animator(duration,items){
return (new shadow.animate.Animator(duration,items));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.animate.AnimationStep = (function (el,from,to,toggles,transition,__meta,__extmap,__hash){
this.el = el;
this.from = from;
this.to = to;
this.toggles = toggles;
this.transition = transition;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.animate.AnimationStep.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

shadow.animate.AnimationStep.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k19954,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__19961 = k19954;
var G__19961__$1 = (((G__19961 instanceof cljs.core.Keyword))?G__19961.fqn:null);
switch (G__19961__$1) {
case "el":
return self__.el;

break;
case "from":
return self__.from;

break;
case "to":
return self__.to;

break;
case "toggles":
return self__.toggles;

break;
case "transition":
return self__.transition;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19954,else__4206__auto__);

}
});

shadow.animate.AnimationStep.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#shadow.animate.AnimationStep{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"el","el",-1618201118),self__.el],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"from","from",1815293044),self__.from],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"to","to",192099007),self__.to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"toggles","toggles",1077909479),self__.toggles],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transition","transition",765692007),self__.transition],null))], null),self__.__extmap));
});

shadow.animate.AnimationStep.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19953){
var self__ = this;
var G__19953__$1 = this;
return (new cljs.core.RecordIter((0),G__19953__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"toggles","toggles",1077909479),new cljs.core.Keyword(null,"transition","transition",765692007)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.animate.AnimationStep.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

shadow.animate.AnimationStep.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.animate.AnimationStep.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

shadow.animate.AnimationStep.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__19971 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (630436239 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__19971(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

shadow.animate.AnimationStep.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19955,other19956){
var self__ = this;
var this19955__$1 = this;
return ((!((other19956 == null))) && ((this19955__$1.constructor === other19956.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19955__$1.el,other19956.el)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19955__$1.from,other19956.from)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19955__$1.to,other19956.to)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19955__$1.toggles,other19956.toggles)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19955__$1.transition,other19956.transition)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19955__$1.__extmap,other19956.__extmap)));
});

shadow.animate.AnimationStep.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"el","el",-1618201118),null,new cljs.core.Keyword(null,"transition","transition",765692007),null,new cljs.core.Keyword(null,"toggles","toggles",1077909479),null,new cljs.core.Keyword(null,"from","from",1815293044),null,new cljs.core.Keyword(null,"to","to",192099007),null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

shadow.animate.AnimationStep.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__19953){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__19980 = cljs.core.keyword_identical_QMARK_;
var expr__19981 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__19984 = new cljs.core.Keyword(null,"el","el",-1618201118);
var G__19985 = expr__19981;
return (pred__19980.cljs$core$IFn$_invoke$arity$2 ? pred__19980.cljs$core$IFn$_invoke$arity$2(G__19984,G__19985) : pred__19980.call(null,G__19984,G__19985));
})())){
return (new shadow.animate.AnimationStep(G__19953,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19986 = new cljs.core.Keyword(null,"from","from",1815293044);
var G__19987 = expr__19981;
return (pred__19980.cljs$core$IFn$_invoke$arity$2 ? pred__19980.cljs$core$IFn$_invoke$arity$2(G__19986,G__19987) : pred__19980.call(null,G__19986,G__19987));
})())){
return (new shadow.animate.AnimationStep(self__.el,G__19953,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19988 = new cljs.core.Keyword(null,"to","to",192099007);
var G__19989 = expr__19981;
return (pred__19980.cljs$core$IFn$_invoke$arity$2 ? pred__19980.cljs$core$IFn$_invoke$arity$2(G__19988,G__19989) : pred__19980.call(null,G__19988,G__19989));
})())){
return (new shadow.animate.AnimationStep(self__.el,self__.from,G__19953,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19990 = new cljs.core.Keyword(null,"toggles","toggles",1077909479);
var G__19991 = expr__19981;
return (pred__19980.cljs$core$IFn$_invoke$arity$2 ? pred__19980.cljs$core$IFn$_invoke$arity$2(G__19990,G__19991) : pred__19980.call(null,G__19990,G__19991));
})())){
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,G__19953,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19992 = new cljs.core.Keyword(null,"transition","transition",765692007);
var G__19993 = expr__19981;
return (pred__19980.cljs$core$IFn$_invoke$arity$2 ? pred__19980.cljs$core$IFn$_invoke$arity$2(G__19992,G__19993) : pred__19980.call(null,G__19992,G__19993));
})())){
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,G__19953,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__19953),null));
}
}
}
}
}
});

shadow.animate.AnimationStep.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"el","el",-1618201118),self__.el,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"from","from",1815293044),self__.from,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"to","to",192099007),self__.to,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"toggles","toggles",1077909479),self__.toggles,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"transition","transition",765692007),self__.transition,null))], null),self__.__extmap));
});

shadow.animate.AnimationStep.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__19953){
var self__ = this;
var this__4202__auto____$1 = this;
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,G__19953,self__.__extmap,self__.__hash));
});

shadow.animate.AnimationStep.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

shadow.animate.AnimationStep.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"el","el",22330409,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.Symbol(null,"transition","transition",-1888743762,null)], null);
});

shadow.animate.AnimationStep.cljs$lang$type = true;

shadow.animate.AnimationStep.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"shadow.animate/AnimationStep",null,(1),null));
});

shadow.animate.AnimationStep.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"shadow.animate/AnimationStep");
});

/**
 * Positional factory function for shadow.animate/AnimationStep.
 */
shadow.animate.__GT_AnimationStep = (function shadow$animate$__GT_AnimationStep(el,from,to,toggles,transition){
return (new shadow.animate.AnimationStep(el,from,to,toggles,transition,null,null,null));
});

/**
 * Factory function for shadow.animate/AnimationStep, taking a map of keywords to field values.
 */
shadow.animate.map__GT_AnimationStep = (function shadow$animate$map__GT_AnimationStep(G__19957){
var extmap__4236__auto__ = (function (){var G__20019 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19957,new cljs.core.Keyword(null,"el","el",-1618201118),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"toggles","toggles",1077909479),new cljs.core.Keyword(null,"transition","transition",765692007)], 0));
if(cljs.core.record_QMARK_(G__19957)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20019);
} else {
return G__20019;
}
})();
return (new shadow.animate.AnimationStep(new cljs.core.Keyword(null,"el","el",-1618201118).cljs$core$IFn$_invoke$arity$1(G__19957),new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(G__19957),new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(G__19957),new cljs.core.Keyword(null,"toggles","toggles",1077909479).cljs$core$IFn$_invoke$arity$1(G__19957),new cljs.core.Keyword(null,"transition","transition",765692007).cljs$core$IFn$_invoke$arity$1(G__19957),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

shadow.animate.setup = (function shadow$animate$setup(duration,elements){
var items = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = (function shadow$animate$setup_$_iter__20020(s__20021){
return (new cljs.core.LazySeq(null,(function (){
var s__20021__$1 = s__20021;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__20021__$1);
if(temp__5457__auto__){
var s__20021__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20021__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__20021__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__20023 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__20022 = (0);
while(true){
if((i__20022 < size__4323__auto__)){
var vec__20025 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__20022);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20025,(0),null);
var adef = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20025,(1),null);
cljs.core.chunk_append(b__20023,(function (){
if(((!((adef == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === adef.shadow$animate$Animation$))))?true:(((!adef.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef):false)):cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid animation",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"animation","animation",-1248293244),adef], null));
}

var from = shadow.animate._animate_from(adef);
var to = shadow.animate._animate_to(adef);
var toggles = shadow.animate._animate_toggles(adef);
return (new shadow.animate.AnimationStep(shadow.dom.dom_node(el),cljs.core.clj__GT_js(from),cljs.core.clj__GT_js(to),cljs.core.clj__GT_js(toggles),shadow.animate.transition_string(duration,adef),null,null,null));
})()
);

var G__20399 = (i__20022 + (1));
i__20022 = G__20399;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20023),shadow$animate$setup_$_iter__20020(cljs.core.chunk_rest(s__20021__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20023),null);
}
} else {
var vec__20038 = cljs.core.first(s__20021__$2);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20038,(0),null);
var adef = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20038,(1),null);
return cljs.core.cons((function (){
if(((!((adef == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === adef.shadow$animate$Animation$))))?true:(((!adef.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef):false)):cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid animation",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"animation","animation",-1248293244),adef], null));
}

var from = shadow.animate._animate_from(adef);
var to = shadow.animate._animate_to(adef);
var toggles = shadow.animate._animate_toggles(adef);
return (new shadow.animate.AnimationStep(shadow.dom.dom_node(el),cljs.core.clj__GT_js(from),cljs.core.clj__GT_js(to),cljs.core.clj__GT_js(toggles),shadow.animate.transition_string(duration,adef),null,null,null));
})()
,shadow$animate$setup_$_iter__20020(cljs.core.rest(s__20021__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(elements);
})());
return (new shadow.animate.Animator(duration,items));
});
shadow.animate.continue_BANG_ = (function shadow$animate$continue_BANG_(animator){
shadow.animate.start_BANG_(animator);

var c__16465__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16465__auto__){
return (function (){
var f__16466__auto__ = (function (){var switch__16281__auto__ = ((function (c__16465__auto__){
return (function (state_20070){
var state_val_20071 = (state_20070[(1)]);
if((state_val_20071 === (1))){
var inst_20064 = shadow.animate.get_duration(animator);
var inst_20065 = cljs.core.async.timeout(inst_20064);
var state_20070__$1 = state_20070;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20070__$1,(2),inst_20065);
} else {
if((state_val_20071 === (2))){
var inst_20067 = (state_20070[(2)]);
var inst_20068 = shadow.animate.finish_BANG_(animator);
var state_20070__$1 = (function (){var statearr_20079 = state_20070;
(statearr_20079[(7)] = inst_20067);

(statearr_20079[(8)] = inst_20068);

return statearr_20079;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20070__$1,new cljs.core.Keyword(null,"done","done",-889844188));
} else {
return null;
}
}
});})(c__16465__auto__))
;
return ((function (switch__16281__auto__,c__16465__auto__){
return (function() {
var shadow$animate$continue_BANG__$_state_machine__16282__auto__ = null;
var shadow$animate$continue_BANG__$_state_machine__16282__auto____0 = (function (){
var statearr_20080 = [null,null,null,null,null,null,null,null,null];
(statearr_20080[(0)] = shadow$animate$continue_BANG__$_state_machine__16282__auto__);

(statearr_20080[(1)] = (1));

return statearr_20080;
});
var shadow$animate$continue_BANG__$_state_machine__16282__auto____1 = (function (state_20070){
while(true){
var ret_value__16283__auto__ = (function (){try{while(true){
var result__16284__auto__ = switch__16281__auto__(state_20070);
if(cljs.core.keyword_identical_QMARK_(result__16284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16284__auto__;
}
break;
}
}catch (e20081){if((e20081 instanceof Object)){
var ex__16285__auto__ = e20081;
var statearr_20082_20413 = state_20070;
(statearr_20082_20413[(5)] = ex__16285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20081;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20417 = state_20070;
state_20070 = G__20417;
continue;
} else {
return ret_value__16283__auto__;
}
break;
}
});
shadow$animate$continue_BANG__$_state_machine__16282__auto__ = function(state_20070){
switch(arguments.length){
case 0:
return shadow$animate$continue_BANG__$_state_machine__16282__auto____0.call(this);
case 1:
return shadow$animate$continue_BANG__$_state_machine__16282__auto____1.call(this,state_20070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$animate$continue_BANG__$_state_machine__16282__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$animate$continue_BANG__$_state_machine__16282__auto____0;
shadow$animate$continue_BANG__$_state_machine__16282__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$animate$continue_BANG__$_state_machine__16282__auto____1;
return shadow$animate$continue_BANG__$_state_machine__16282__auto__;
})()
;})(switch__16281__auto__,c__16465__auto__))
})();
var state__16467__auto__ = (function (){var statearr_20090 = (f__16466__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16466__auto__.cljs$core$IFn$_invoke$arity$0() : f__16466__auto__.call(null));
(statearr_20090[(6)] = c__16465__auto__);

return statearr_20090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16467__auto__);
});})(c__16465__auto__))
);

return c__16465__auto__;
});
shadow.animate.start = (function shadow$animate$start(duration,elements){
var animator = shadow.animate.setup(duration,elements);
shadow.animate.init_BANG_(animator);

return shadow.animate.continue_BANG_(animator);
});
/**
 * transition the given attr from -> to using timing function and delay
 * timing defaults to ease, delay to 0
 */
shadow.animate.transition = (function shadow$animate$transition(var_args){
var G__20104 = arguments.length;
switch (G__20104) {
case 3:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.transition.cljs$core$IFn$_invoke$arity$3 = (function (attr,from,to){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5(attr,from,to,"ease",(0));
});

shadow.animate.transition.cljs$core$IFn$_invoke$arity$4 = (function (attr,from,to,timing){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5(attr,from,to,timing,(0));
});

shadow.animate.transition.cljs$core$IFn$_invoke$arity$5 = (function (attr,from,to,timing,delay){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate20119 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate20119 = (function (attr,from,to,timing,delay,meta20120){
this.attr = attr;
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta20120 = meta20120;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate20119.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20121,meta20120__$1){
var self__ = this;
var _20121__$1 = this;
return (new shadow.animate.t_shadow$animate20119(self__.attr,self__.from,self__.to,self__.timing,self__.delay,meta20120__$1));
});

shadow.animate.t_shadow$animate20119.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20121){
var self__ = this;
var _20121__$1 = this;
return self__.meta20120;
});

shadow.animate.t_shadow$animate20119.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate20119.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.from]);
});

shadow.animate.t_shadow$animate20119.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.to]);
});

shadow.animate.t_shadow$animate20119.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate20119.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.timing]);
});

shadow.animate.t_shadow$animate20119.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.delay]);
});

shadow.animate.t_shadow$animate20119.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta20120","meta20120",1559266437,null)], null);
});

shadow.animate.t_shadow$animate20119.cljs$lang$type = true;

shadow.animate.t_shadow$animate20119.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate20119";

shadow.animate.t_shadow$animate20119.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"shadow.animate/t_shadow$animate20119");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate20119.
 */
shadow.animate.__GT_t_shadow$animate20119 = (function shadow$animate$__GT_t_shadow$animate20119(attr__$1,from__$1,to__$1,timing__$1,delay__$1,meta20120){
return (new shadow.animate.t_shadow$animate20119(attr__$1,from__$1,to__$1,timing__$1,delay__$1,meta20120));
});

}

return (new shadow.animate.t_shadow$animate20119(attr,from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
});

shadow.animate.transition.cljs$lang$maxFixedArity = 5;

shadow.animate.toggle = (function shadow$animate$toggle(attr,from,to){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate20156 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate20156 = (function (attr,from,to,meta20157){
this.attr = attr;
this.from = from;
this.to = to;
this.meta20157 = meta20157;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate20156.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20158,meta20157__$1){
var self__ = this;
var _20158__$1 = this;
return (new shadow.animate.t_shadow$animate20156(self__.attr,self__.from,self__.to,meta20157__$1));
});

shadow.animate.t_shadow$animate20156.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20158){
var self__ = this;
var _20158__$1 = this;
return self__.meta20157;
});

shadow.animate.t_shadow$animate20156.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate20156.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate20156.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.from]);
});

shadow.animate.t_shadow$animate20156.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.to]);
});

shadow.animate.t_shadow$animate20156.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate20156.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate20156.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"meta20157","meta20157",1293796875,null)], null);
});

shadow.animate.t_shadow$animate20156.cljs$lang$type = true;

shadow.animate.t_shadow$animate20156.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate20156";

shadow.animate.t_shadow$animate20156.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"shadow.animate/t_shadow$animate20156");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate20156.
 */
shadow.animate.__GT_t_shadow$animate20156 = (function shadow$animate$toggle_$___GT_t_shadow$animate20156(attr__$1,from__$1,to__$1,meta20157){
return (new shadow.animate.t_shadow$animate20156(attr__$1,from__$1,to__$1,meta20157));
});

}

return (new shadow.animate.t_shadow$animate20156(attr,from,to,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * set attr to value when the animation starts
 */
shadow.animate.set_attr = (function shadow$animate$set_attr(var_args){
var G__20188 = arguments.length;
switch (G__20188) {
case 1:
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1 = (function (attrs){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate20196 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate20196 = (function (attrs,meta20197){
this.attrs = attrs;
this.meta20197 = meta20197;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate20196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20198,meta20197__$1){
var self__ = this;
var _20198__$1 = this;
return (new shadow.animate.t_shadow$animate20196(self__.attrs,meta20197__$1));
});

shadow.animate.t_shadow$animate20196.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20198){
var self__ = this;
var _20198__$1 = this;
return self__.meta20197;
});

shadow.animate.t_shadow$animate20196.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate20196.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate20196.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.attrs;
});

shadow.animate.t_shadow$animate20196.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate20196.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate20196.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate20196.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta20197","meta20197",-1174613173,null)], null);
});

shadow.animate.t_shadow$animate20196.cljs$lang$type = true;

shadow.animate.t_shadow$animate20196.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate20196";

shadow.animate.t_shadow$animate20196.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"shadow.animate/t_shadow$animate20196");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate20196.
 */
shadow.animate.__GT_t_shadow$animate20196 = (function shadow$animate$__GT_t_shadow$animate20196(attrs__$1,meta20197){
return (new shadow.animate.t_shadow$animate20196(attrs__$1,meta20197));
});

}

return (new shadow.animate.t_shadow$animate20196(attrs,cljs.core.PersistentArrayMap.EMPTY));
});

shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$2 = (function (attr,value){
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([attr,value]));
});

shadow.animate.set_attr.cljs$lang$maxFixedArity = 2;

/**
 * use to remove a given attribute style when the animation is finished
 * usually only needed to remove attributes we no longer need since they are probably
 * inherited and we only used for previous transitions
 */
shadow.animate.delete_attr = (function shadow$animate$delete_attr(attr){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate20274 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate20274 = (function (attr,meta20275){
this.attr = attr;
this.meta20275 = meta20275;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate20274.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20276,meta20275__$1){
var self__ = this;
var _20276__$1 = this;
return (new shadow.animate.t_shadow$animate20274(self__.attr,meta20275__$1));
});

shadow.animate.t_shadow$animate20274.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20276){
var self__ = this;
var _20276__$1 = this;
return self__.meta20275;
});

shadow.animate.t_shadow$animate20274.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate20274.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate20274.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate20274.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,null]);
});

shadow.animate.t_shadow$animate20274.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate20274.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate20274.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"meta20275","meta20275",-169769384,null)], null);
});

shadow.animate.t_shadow$animate20274.cljs$lang$type = true;

shadow.animate.t_shadow$animate20274.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate20274";

shadow.animate.t_shadow$animate20274.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"shadow.animate/t_shadow$animate20274");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate20274.
 */
shadow.animate.__GT_t_shadow$animate20274 = (function shadow$animate$delete_attr_$___GT_t_shadow$animate20274(attr__$1,meta20275){
return (new shadow.animate.t_shadow$animate20274(attr__$1,meta20275));
});

}

return (new shadow.animate.t_shadow$animate20274(attr,cljs.core.PersistentArrayMap.EMPTY));
});
shadow.animate.combine = (function shadow$animate$combine(var_args){
var args__4534__auto__ = [];
var len__4531__auto___20434 = arguments.length;
var i__4532__auto___20436 = (0);
while(true){
if((i__4532__auto___20436 < len__4531__auto___20434)){
args__4534__auto__.push((arguments[i__4532__auto___20436]));

var G__20438 = (i__4532__auto___20436 + (1));
i__4532__auto___20436 = G__20438;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return shadow.animate.combine.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

shadow.animate.combine.cljs$core$IFn$_invoke$arity$variadic = (function (transitions){
var to = cljs.core.PersistentArrayMap.EMPTY;
var from = cljs.core.PersistentArrayMap.EMPTY;
var toggles = cljs.core.PersistentArrayMap.EMPTY;
var timings = cljs.core.PersistentArrayMap.EMPTY;
var delays = cljs.core.PersistentArrayMap.EMPTY;
var transitions__$1 = transitions;
while(true){
var temp__5455__auto__ = cljs.core.first(transitions__$1);
if(cljs.core.truth_(temp__5455__auto__)){
var adef = temp__5455__auto__;
var G__20439 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([to,shadow.animate._animate_to(adef)], 0));
var G__20440 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([from,shadow.animate._animate_from(adef)], 0));
var G__20441 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([toggles,shadow.animate._animate_toggles(adef)], 0));
var G__20442 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([timings,shadow.animate._animate_timings(adef)], 0));
var G__20443 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([delays,shadow.animate._animate_delays(adef)], 0));
var G__20444 = cljs.core.rest(transitions__$1);
to = G__20439;
from = G__20440;
toggles = G__20441;
timings = G__20442;
delays = G__20443;
transitions__$1 = G__20444;
continue;
} else {
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate20278 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate20278 = (function (transitions,to,from,toggles,timings,delays,temp__5455__auto__,meta20279){
this.transitions = transitions;
this.to = to;
this.from = from;
this.toggles = toggles;
this.timings = timings;
this.delays = delays;
this.temp__5455__auto__ = temp__5455__auto__;
this.meta20279 = meta20279;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate20278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (_20280,meta20279__$1){
var self__ = this;
var _20280__$1 = this;
return (new shadow.animate.t_shadow$animate20278(self__.transitions,self__.to,self__.from,self__.toggles,self__.timings,self__.delays,self__.temp__5455__auto__,meta20279__$1));
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate20278.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (_20280){
var self__ = this;
var _20280__$1 = this;
return self__.meta20279;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate20278.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate20278.prototype.shadow$animate$Animation$_animate_from$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.from;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate20278.prototype.shadow$animate$Animation$_animate_to$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.to;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate20278.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.toggles;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate20278.prototype.shadow$animate$Animation$_animate_timings$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.timings;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate20278.prototype.shadow$animate$Animation$_animate_delays$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.delays;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate20278.getBasis = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transitions","transitions",-405684594,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.Symbol(null,"timings","timings",-569636600,null),new cljs.core.Symbol(null,"delays","delays",-873843187,null),new cljs.core.Symbol(null,"temp__5455__auto__","temp__5455__auto__",980956642,null),new cljs.core.Symbol(null,"meta20279","meta20279",1118077150,null)], null);
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate20278.cljs$lang$type = true;

shadow.animate.t_shadow$animate20278.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate20278";

shadow.animate.t_shadow$animate20278.cljs$lang$ctorPrWriter = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"shadow.animate/t_shadow$animate20278");
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

/**
 * Positional factory function for shadow.animate/t_shadow$animate20278.
 */
shadow.animate.__GT_t_shadow$animate20278 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function shadow$animate$__GT_t_shadow$animate20278(transitions__$2,to__$1,from__$1,toggles__$1,timings__$1,delays__$1,temp__5455__auto____$1,meta20279){
return (new shadow.animate.t_shadow$animate20278(transitions__$2,to__$1,from__$1,toggles__$1,timings__$1,delays__$1,temp__5455__auto____$1,meta20279));
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

}

return (new shadow.animate.t_shadow$animate20278(transitions__$1,to,from,toggles,timings,delays,temp__5455__auto__,cljs.core.PersistentArrayMap.EMPTY));
}
break;
}
});

shadow.animate.combine.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.animate.combine.cljs$lang$applyTo = (function (seq20277){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20277));
});

shadow.animate.fade_in = (function shadow$animate$fade_in(var_args){
var G__20282 = arguments.length;
switch (G__20282) {
case 0:
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1("ease-in");
});

shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1 = (function (timing_function){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"0","1",timing_function);
});

shadow.animate.fade_in.cljs$lang$maxFixedArity = 1;

shadow.animate.fade_out = (function shadow$animate$fade_out(var_args){
var G__20284 = arguments.length;
switch (G__20284) {
case 0:
return shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1("ease-out");
});

shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$1 = (function (timing_function){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"1","0",timing_function);
});

shadow.animate.fade_out.cljs$lang$maxFixedArity = 1;

shadow.animate.vendor_prefix = goog.dom.vendor.getVendorPrefix();
shadow.animate.vendor_transform = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.animate.vendor_prefix),"-transform"].join(''));
shadow.animate.translate_y = (function shadow$animate$translate_y(var_args){
var G__20286 = arguments.length;
switch (G__20286) {
case 3:
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$3 = (function (from,to,timing){
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4(from,to,timing,(0));
});

shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4 = (function (from,to,timing,delay){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate20287 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate20287 = (function (from,to,timing,delay,meta20288){
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta20288 = meta20288;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate20287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20289,meta20288__$1){
var self__ = this;
var _20289__$1 = this;
return (new shadow.animate.t_shadow$animate20287(self__.from,self__.to,self__.timing,self__.delay,meta20288__$1));
});

shadow.animate.t_shadow$animate20287.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20289){
var self__ = this;
var _20289__$1 = this;
return self__.meta20288;
});

shadow.animate.t_shadow$animate20287.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate20287.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.from),")"].join('')], null);
});

shadow.animate.t_shadow$animate20287.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.to),")"].join('')], null);
});

shadow.animate.t_shadow$animate20287.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.timing]);
});

shadow.animate.t_shadow$animate20287.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate20287.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.delay]);
});

shadow.animate.t_shadow$animate20287.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta20288","meta20288",4242806,null)], null);
});

shadow.animate.t_shadow$animate20287.cljs$lang$type = true;

shadow.animate.t_shadow$animate20287.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate20287";

shadow.animate.t_shadow$animate20287.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"shadow.animate/t_shadow$animate20287");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate20287.
 */
shadow.animate.__GT_t_shadow$animate20287 = (function shadow$animate$__GT_t_shadow$animate20287(from__$1,to__$1,timing__$1,delay__$1,meta20288){
return (new shadow.animate.t_shadow$animate20287(from__$1,to__$1,timing__$1,delay__$1,meta20288));
});

}

return (new shadow.animate.t_shadow$animate20287(from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
});

shadow.animate.translate_y.cljs$lang$maxFixedArity = 4;

shadow.animate.translate_x = (function shadow$animate$translate_x(var_args){
var G__20291 = arguments.length;
switch (G__20291) {
case 3:
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$3 = (function (from,to,timing){
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4(from,to,timing,(0));
});

shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4 = (function (from,to,timing,delay){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate20292 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate20292 = (function (from,to,timing,delay,meta20293){
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta20293 = meta20293;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate20292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20294,meta20293__$1){
var self__ = this;
var _20294__$1 = this;
return (new shadow.animate.t_shadow$animate20292(self__.from,self__.to,self__.timing,self__.delay,meta20293__$1));
});

shadow.animate.t_shadow$animate20292.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20294){
var self__ = this;
var _20294__$1 = this;
return self__.meta20293;
});

shadow.animate.t_shadow$animate20292.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate20292.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateX(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.from),")"].join('')], null);
});

shadow.animate.t_shadow$animate20292.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateX(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.to),")"].join('')], null);
});

shadow.animate.t_shadow$animate20292.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.timing]);
});

shadow.animate.t_shadow$animate20292.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate20292.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.delay]);
});

shadow.animate.t_shadow$animate20292.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta20293","meta20293",499088027,null)], null);
});

shadow.animate.t_shadow$animate20292.cljs$lang$type = true;

shadow.animate.t_shadow$animate20292.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate20292";

shadow.animate.t_shadow$animate20292.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"shadow.animate/t_shadow$animate20292");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate20292.
 */
shadow.animate.__GT_t_shadow$animate20292 = (function shadow$animate$__GT_t_shadow$animate20292(from__$1,to__$1,timing__$1,delay__$1,meta20293){
return (new shadow.animate.t_shadow$animate20292(from__$1,to__$1,timing__$1,delay__$1,meta20293));
});

}

return (new shadow.animate.t_shadow$animate20292(from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
});

shadow.animate.translate_x.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.animate.js.map
