function getBeautifulDays(arrayList, kValue) {
	let beautifulDays = []; 
	arrayList.forEach( item => {
        let reversedNumber = Number(String(item).split("").reverse().join("")); 
        // reversing it and typecasting to string
        if(Math.abs(item - reversedNumber) % kValue === 0) 
        // ex Math.abs(24-42) ===> |-18| % 3 === 0 satisfies it  
        {
			beautifulDays.push(item);
		}
	});
	return beautifulDays;
}