day = { 
        1:{ "order": "1st", "qty": "a", "gift": "patchwork in a merkle tree"},
        2:{ "order": "2nd", "qty": "two", "gift": "forked feeds" },
        3:{ "order": "3rd", "qty": "three", "gift" : "hash keys" },
        4:{ "order": "4th", "qty": "four", "gift" : "log streams" },
        5:{ "order": "5th", "qty": "five", "gift" : "LOCAL PEERS" },
        6:{ "order": "6th", "qty": "six", "gift" : "bananas a-tuning" },
        7:{ "order": "7th", "qty": "seven", "gift" : "cels a-singing" },
        8:{ "order": "8th", "qty": "eight","gift" : "mixs a-mixing" },
        9:{ "order": "9th", "qty": "nine","gift" : "noffles waffling" },
        10:{ "order": "10th", "qty": "ten", "gift" : "leezs a-larping" },
        11:{ "order": "11th", "qty": "eleven", "gift" : "sbots serving" },
        12:{ "order": "12th", "qty": "twelve", "gift" : "different ssb clients" }
}

print "On the %s day of SSB, my true pub gave to me" % (day[1]["order"]) 
print "%s %s." % (day[1]["qty"], day[1]["gift"])
print "\n"

for i in range(2, len(day)+1):
    print "On the %s day of SSB, my true pub gave to me" % (day[i]["order"]) 
    for j in range(i, 1, -1):   
        print "%s %s, " % ( day[j]["qty"], day[j]["gift"])
    print "and %s %s." % (day[1]["qty"], day[1]["gift"])
    print "\n"
