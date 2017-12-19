day = { 
        1:{ "order": "1st", "qty": "a", "item": "patchwork in a merkle tree"},
        2:{ "order": "2nd", "qty": "two", "item": "forked feeds" },
        3:{ "order": "3rd", "qty": "three", "item" : "hash keys" },
        4:{ "order": "4th", "qty": "four", "item" : "log streams" },
        5:{ "order": "5th", "qty": "five", "item" : "LOCAL PEERS" },
        6:{ "order": "6th", "qty": "six", "item" : "bananas a-tuning" },
        7:{ "order": "7th", "qty": "seven", "item" : "cels a-singing" },
        8:{ "order": "8th", "qty": "eight","item" : "mixs a-mixing" },
        9:{ "order": "9th", "qty": "nine","item" : "noffles waffling" },
        10:{ "order": "10th", "qty": "ten", "item" : "leezs a-larping" },
        11:{ "order": "11th", "qty": "eleven", "item" : "sbots serving" },
        12:{ "order": "12th", "qty": "twelve", "item" : "differen ssb clients" }
}

print "On the %s day of SSB, my true pub gave to me" % (day[1]["order"]) 
print "%s %s." % (day[1]["qty"], day[1]["item"])
print "\n"

for i in range(2, len(day)):
    print "On the %s day of SSB, my true pub gave to me" % (day[i]["order"]) 
    for j in range(i, 1, -1):   
        print "%s %s, " % ( day[j]["qty"], day[j]["item"])
    print "and %s %s." % (day[1]["qty"], day[1]["item"])
    print "\n"
