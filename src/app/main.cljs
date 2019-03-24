(ns app.main
  (:require [app.lib :as lib]
            [reagent.core :as r]))

(defn gen-table [n]
  (apply vector
         (for [x (range n)]
           (apply vector
                  (for [y (range n)]
                    {:class "cell"})))))

(defn ai-shot []
  [(rand-int 8)
   (rand-int 8)])

;; {:class STR}
(defonce state (r/atom {:table (gen-table 8)
                        :counter 0
                        :my-ships [(ai-shot)]
                        :comp-ships [(ai-shot)]}))

(let [[[x y]] (:my-ships @state)]
  (swap! state assoc-in [:table x y :class] "ship"))

(defn shot [[x y]]
  (swap! state assoc-in [:table x y :class] "beaten"))

(defn on-cell-click [x y]
  ;; (js/alert (str "I'm " x " " y))
  (swap! state assoc-in [:table x y :class] "beaten")
  (let [coord (ai-shot)]
    (if (= coord (nth (:my-ships @state) 0))
      (do (js/alert "you lose")
          (swap! state assoc-in [:table x y :class] "player-died"))
      (if (= [x y] (nth (:comp-ships @state) 0))
        (do (js/alert "you win")
            (swap! state assoc-in [:table x y :class] "enemy-died"))
        (shot coord)))))

(defn render-table []
  (let [table (:table @state)]
    [:div {:class "grid"}
    (map-indexed (fn [x row]
           [:div {:class "row" :key [x]}       
            (map-indexed (fn [y cell]
                   [:div {:class (:class cell)
                          :key [x y]
                          :on-click #(on-cell-click x y)}]) row)])
                 table)]))

(defn main! []
  (r/render [render-table]
            (.getElementById js/document "app")))

;; (defn reload! []
;;   (println "[main] reloaded lib:" lib/c lib/d)
;;   (println "[main] reloaded:" a b))

(comment (js/alert "hi")
         (gen-table)
         (reset! state {:table [[{:class "cell"} {:class "cell"}]
                                [{:class "cell"} {:class "cell"}]]
                        :counter 3})
         (reset! state {:table (gen-table 8)
                        :counter 3})
         (render-table))
