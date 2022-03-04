<script>
	import {v4 as uuidv4} from 'uuid'
	import Form from './components/Form.svelte'
	import TodoList from './components/TodoList.svelte'
	import DoneList from './components/DoneList.svelte'
	

	let todos = [{
		id: 1,
		text: 'not done yet'
	}]   

	let completed = [{
		id: 8,
		text: 'this one is done'
	}, {
		id: 9,
		text: 'this one is done'
	}]

	const addItem = (e) => {

		const newItem = e.detail
		console.log(newItem)
		todos = [newItem, ...todos] 
		console.log(todos)

	}

	const markDone = (e) => {
		
		const doneItem = {
			id: uuidv4(),
			text: e.detail 
		} 

		completed = [doneItem, ...completed]

		console.log(e)
	}

</script>

<main>

	<Form  on:handle-submit={addItem}/>

	<div id='wrapper'>

		<div id='todo'>
			<TodoList on:handle-done={markDone} {todos}/>    
		</div>
		
		<div id='done'>
			<DoneList  {completed}/>   
		</div>

	</div>

</main>

<style>   

	#wrapper {

		display: flex;
		flex-direction: row;
		justify-content: space-between;

	}


</style>