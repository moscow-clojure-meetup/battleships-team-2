(ns backend.core
  (:require
   [bidi.bidi :as bidi]
   [macchiato.util.response :as r]
   [macchiato.server :as http]
   [mount.core :as mount :refer [defstate]]
   [macchiato.middleware.restful-format :as rf]
   [taoensso.timbre :refer-macros [log trace debug info warn error fatal]]))


(defn start [res req raise]
  (r/ok {:one 1}))

(defn not-found [& _]
  (r/not-found {}))


(def routes
  ["/start" {:get start}])


(defn router [req res raise]
  (if-let [{:keys [handler route-params]} (bidi/match-route* routes (:uri req) req)]
    (handler (assoc req :route-params route-params) res raise)
    (not-found req res raise)))


(defn main []
  (mount/start)
  (let [host "0.0.0.0"
        port 3000]
    (http/start
     {:handler    (rf/wrap-restful-format router)
      :host       host
      :port       port
      :on-success #(info "test started on" host ":" port)})))
