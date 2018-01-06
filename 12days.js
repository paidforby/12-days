#!/usr/bin/env node

day = [ 
        {order: "1st", qty: "a", gift: "patchwork in a merkle tree"},
        {order: "2nd", qty: "two", gift: "forked feeds"},
        {order: "3rd", qty: "three", gift: "hash keys"},
        {order: "4th", qty: "four", gift: "log streams"},
        {order: "5th", qty: "five", gift: "LOCAL PEERS"},
        {order: "6th", qty: "six", gift: "bananas a-tuning"},
        {order: "7th", qty: "seven", gift: "cels a-singing"},
        {order: "8th", qty: "eight", gift: "mixs a-mixing"},
        {order: "9th", qty: "nine", gift: "noffles waffling"},
        {order: "10th", qty: "ten", gift: "leezs a-larping"},
        {order: "11th", qty: "eleven", gift: "sbots serving"},
        {order: "12th", qty: "twelve", gift: "different ssb clients"},
];

console.log("On the %s day of SSB, my true pub gave to me.", day[0].order);
console.log("%s %s\n", day[0].qty, day[0].gift);

for (i = 1; i <= 11; i++){ 
    console.log("On the %s day of SSB, my true pub gave to me", day[i].order);
    for(j = i; j >= 1  ;  j--){   
        console.log("%s %s,", day[j].qty, day[j].gift);
    }
    console.log("and %s %s.\n", day[0].qty, day[0].gift);
}

