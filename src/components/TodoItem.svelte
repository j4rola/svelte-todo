<script>
    import {createEventDispatcher} from 'svelte'

    const dispatch = createEventDispatcher()

    export let todo = undefined //from TodoList Component  

    const deleteTodo = (e) => {
        console.log()
        e.target.parentNode.style.display = 'none';
    } 

    const move = (e) => {
        const text = e.target.parentNode.children[1].innerText 
        
        
        dispatch('handle-done', text)  
        deleteTodo(e)
    }
</script>

<div>
    <p on:click={deleteTodo}>X</p><h2>{todo.text}</h2>  
    <button on:click={move} >Done</button>
</div> 

<style>
    div {
        color: white; 
        border-radius: 10px; 
        background-color: rgb(33, 106, 201); 
        display: 'none';
        margin: 15px;
        padding-top:10px;
        padding-bottom:10px;
        padding-inline: 20px;
    }

    p {
        position: relative; 
        width: 10px
    }

    p:hover {
        cursor: pointer;
    }

    button {
        margin-inline: 50px;
    }
</style>