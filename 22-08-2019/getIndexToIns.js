function getIndexToIns( arrayList, valueToInsert ){
	arrayList.sort(( a, b ) => { return a-b }); //returns sorted array
	for( index in arrayList ){
		if(( index !== arrayList.length-1 ) && (( arrayList[index] < valueToInsert ) && ( valueToInsert < arrayList[Number(index)+1] ))){
            // index should always be less than arraylist length  and valueToInsert is checked with the adjacent array elements
            return Number(index)+1;
			}
	}
};