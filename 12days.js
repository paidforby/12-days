#!/usr/bin/env node
day = { 
        "1st": "a patchwork in a merkyl tree",
        "2nd": "forked feeds",
        "3rd": "hash keys",
        "4th": "",
        "5th": "LOCAL PEERS",
        "6th": "",
        "7th": "cels a-singing",
        "8th": "mixs mixing",
        "9th": "noffles a-waffling",
        "10th": "",
        "11th": "",
        "12th": "" 
};

for (i = 1; i <=12; i++){ 
    process.stdout.write("on the %d day of SSB, my true pub gave to me", i);
    for(j = i; j > 0 ;  j--){   
        process.stdout.write(entry[j]);
    }
    console.log()
}

