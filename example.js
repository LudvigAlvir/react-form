const arr = [
	{
		id: 1,
		amount: 0,
	},
	{
		id: 2,
		amount: 0,
	},
	{
		id: 3,
		amount: 0,
	},
	{
		id: 4,
		amount: 0,
	},
];

function remove(arr, id) {
	let out = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].id == id) {
			if (arr[i].amount == 1) {
				continue;
			} else {
				out.push({
					id: arr[i].id,
					amount: arr[i].amount - 1,
				});
			}
		} else {
			out.push(arr[i]);
		}
	}
	return out;
}




grrrrrrr.get("/"){
    try{
        const res = dosomething()
        if(error){
            send.error()
        }
        else{
            send.res()
        }
    }catch(e){
       res.status(500).send("error connecting to sevice")
    }
}
