import { writable } from "svelte/store"; 

export const itemStore = writable([ 
    {
		id: 1,
		text: 'lorem ipsum dolor sit amet consectetur'
	}, 
	{
		id: 2,
		text: 'adipisicing elit. consequuntur vel vitae'  
	}, 
	{
		id: 3,
		text: 'commodi alias voluptatem est voluptatem'
	}
])