function birthdayCakeCandle ( age, arrayList ){
    arrayList.sort( function( a, b ){ return a-b; });  
    // sorts my value so that the largest ones always ends up last
	let candleBlown = 1;  // count can never be zero
	for( index = age-1 ; index >= 0 ; index-- ){  
        //traversing it reversely 
		if( arrayList[ index ] === arrayList[ index-1 ] ){
			candleBlown += 1;
		} else{
			return candleBlown;
	    }
	};
};