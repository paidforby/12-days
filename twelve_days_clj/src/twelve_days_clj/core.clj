(ns twelve_days_clj.core
    (:gen-class))

;; It's time for some German love! 
(def days 
    [{ :order "first" :qty "a" :gift "patchwork in a merkle tree"}
     { :order "second" :qty "two" :gift "forked feeds"}
     { :order "third" :qty "three" :gift "hash keys"}
     { :order "fourth" :qty "four" :gift "log streams"}
     { :order "fifth" :qty "five" :gift "LOCAL PEERS"}
     { :order "sixth" :qty "six" :gift "bananas-a-tuning"}
     { :order "seventh" :qty "seven" :gift "cels-a-singing"}
     { :order "eighth" :qty "eight" :gift "mixs mixing"}
     { :order "ninth" :qty "nine" :gift "noffles waffling"}
     { :order "tenth" :qty "ten" :gift "leezs larping"}
     { :order "eleventh" :qty "eleven" :gift "sbots serving"}
     { :order "twelfth" :qty "twelve" :gift "different ssb cljents"}])

(defn chorus [day]
    (println "On the" ((days day) :order) "day of SSB, my true pub gave to me"))

(defn line [day n]
  (if (and (= n 0) (not (= day 0))) (print "and "))
  (println ((days n) :qty) ((days n) :gift))) 

(defn lines [day] 
  (loop [n day]
    (line day n)
    (if (= n 0) 
      (println)
      (recur (dec n)))))

(defn sing [end]
  (loop [day 0]
    (chorus day)
    (lines day)
    (if (= day end)
      (println) 
      (recur (inc day)))))

(defn -main []
  (sing 11))

