day = {}

day[1] = { order = "1st", qty = "a", item = "patchwork in a merkle tree"}
day[2] = { order = "2nd", qty = "two", item = "forked feeds"}
day[3] = { order = "3rd", qty = "three", item = "hash keys" }
day[4] = { order = "4th", qty = "four", item = "log streams" }
            -- 5:{ "order": "5th", "qty": "five", "item" : "LOCAL PEERS" },
            -- 6:{ "order": "6th", "qty": "six", "item" : "bananas a-tuning" },
            -- 7:{ "order": "7th", "qty": "seven", "item" : "cels a-singing" },
            -- 8:{ "order": "8th", "qty": "eight","item" : "mixs a-mixing" },
            -- 9:{ "order": "9th", "qty": "nine","item" : "noffles waffling" },
            -- 10:{ "order": "10th", "qty": "ten", "item" : "leezs a-larping" },
            -- 11:{ "order": "11th", "qty": "eleven", "item" : "sbots serving" },
            -- 12:{ "order": "12th", "qty": "twelve", "item" : "different ssb clients" }

print("On the " ..  day[1].order .. " day of SSB, my true pub gave to me") 
print("a " .. day[1].item)
print("\n")

for k = 2, 4 do
    print("On the " ..  day[k].order .. " day of SSB, my true pub gave to me") 
    for j = 2, k do  
        print(day[j].qty .. " " .. day[j].item)    
    end
    print("and a " ..  day[1].item)
    print "\n"
end
