(ns backend.core
  (:require
   [bidi.bidi :as bidi]
   [macchiato.util.response :as r]
   [macchiato.server :as http]
   [mount.core :as mount :refer [defstate]]
   [macchiato.middleware.defaults :as defaults]
   [taoensso.timbre :refer-macros [log trace debug info warn error fatal]]))

(def server-state (atom {}))
(def avaiting-player (atom nil))

(defn start [req res raise]
  (r/ok {:victory (< (rand 1) 0.7) }))

(defn not-found [req res raise]
  (r/not-found {}))

(def routes
  ["/start" {:post start}])

(defn router [req res raise]
  (defaults/wrap-defaults
   (res
    (if-let [{:keys [handler route-params]} (bidi/match-route* routes (:uri req) req)]
      (-> req (assoc :route-params route-params) (handler res raise))
      (not-found req res raise)))
   defaults/site-defaults))

(defn main []
  (let [host "0.0.0.0" port 3000]
    (http/start
     {:handler    router
      :host       host
      :port       port
      :on-success #(info "test started on" host ":" port)})))
