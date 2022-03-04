<script> 
    import {v4 as uuidv4} from 'uuid'
    import { itemStore } from '../store'
    import {createEventDispatcher} from 'svelte'

    const dispatch = createEventDispatcher()

    //export let todos = 'todos'

    let text = ''

    const handleSubmit = () => {
        
        const newItem = {
            id: uuidv4(),
            text: text
        }

        dispatch('handle-submit', newItem)

        text = ''

    }

</script>

<div>
    <form on:submit|preventDefault={() => handleSubmit()}> 
        <div id='form'> 
            <h1>My Todo List</h1>
            <input bind:value = {text} type="text" placeholder="Add an item"> 
            <button type="submit">Submit</button> 
        </div> 
    </form>
</div>

<style>
    div {
        width: 35vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }



    

    input {
        padding: 10px;
        margin-top: 40px;
    }

    button {
        margin-top: 20px;
        margin-bottom: 35px;
        height: 45px;
        border-radius: 5px;
        width: 100px;
        border: solid gray 1px;
    }

    h1 {
    color: rgb(75, 75, 75);
    }

</style>