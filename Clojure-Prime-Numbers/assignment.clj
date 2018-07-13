(defn is-prime? [n] 
  
(if (< 1 n)
    
(empty? (filter #(= 0 (mod n %)) (range 2 n)))
    false))




(defn prime-seq [from to]

(let [prime-seqs (range from to)]
  
(-> (filter is-prime? prime-seqs)
     
)))




(defn doprimes [from to]
  
(def seqf(take 10(reverse(prime-seq from to))))
  
(doseq [x seqf] (println x))
  
(println (str "Total = " (reduce + seqf)))
)