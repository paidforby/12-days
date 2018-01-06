day = {}

day[1] = { order = "1st", qty = "a", gift = "patchwork in a merkle tree"}
day[2] = { order = "2nd", qty = "two", gift = "forked feeds"}
day[3] = { order = "3rd", qty = "three", gift = "hash keys" }
day[4] = { order = "4th", qty = "four", gift = "log streams" }
day[5] = { order = "5th", qty = "five", gift = "LOCAL PEERS" }
day[6] = { order = "6th", qty = "six", gift = "bananas a-tuning" }
day[7] = { order = "7th", qty = "seven", gift = "cels a-singing" }
day[8] = { order = "8th", qty = "eight", gift = "mixs a-mixing" }
day[9] = { order = "9th", qty = "nine", gift = "noffles waffling" }
day[10] = { order = "10th", qty = "ten", gift = "leezs a-larping" }
day[11] = { order = "11th", qty = "eleven", gift = "sbots serving" }
day[12] = { order = "12th", qty = "twelve", gift = "different ssb clients" }

print("On the " ..  day[1].order .. " day of SSB, my true pub gave to me") 
print("a " .. day[1].gift)
print("\n")

for n = 2, 12 do
    print("On the " ..  day[n].order .. " day of SSB, my true pub gave to me") 
    for j = 2, n do  
        print(day[(n+2)-j].qty .. " " .. day[(n+2)-j].gift)    
    end
    print("and a " ..  day[1].gift)
    print "\n"
end
