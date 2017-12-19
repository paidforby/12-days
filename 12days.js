#!/usr/bin/env node
day = [ 
        {order: "1st", qty: "a", item: "patchwork in a merkle tree"},
        {order: "2nd", qty: "two", item: "forked feeds"},
        {order: "3rd", qty: "three", item: "hash keys"},
        {order: "4th", qty: "four", item: "log streams"},
        {order: "5th", qty: "five", item: "LOCAL PEERS"},
        {order: "6th", qty: "six", item: "bananas a-tuning"},
        {order: "7th", qty: "seven", item: "cels a-singing"},
        {order: "8th", qty: "eight", item: "mixs a-mixing"},
        {order: "9th", qty: "nine", item: "noffles waffling"},
        {order: "10th", qty: "ten", item: "leezs a-larping"},
        {order: "11th", qty: "eleven", item: "sbots serving"},
        {order: "12th", qty: "twelve", item: "different ssb clients"},
];

console.log("On the %s day of SSB, my true pub gave to me.", day[0].order);
console.log("%s %s\n", day[0].qty, day[0].item)

for (i = 1; i <= 11; i++){ 
    console.log("On the %s day of SSB, my true pub gave to me", day[i].order);
    for(j = i; j >= 1  ;  j--){   
        console.log("%s %s,", day[j].qty, day[j].item);
    }
    console.log("and %s %s.\n", day[0].qty, day[0].item)
}

