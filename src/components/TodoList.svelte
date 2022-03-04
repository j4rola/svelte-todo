<script>
 import { fade, scale } from 'svelte/transition'
 import TodoItem from './TodoItem.svelte'     

 export let todos = 'todos'   
</script>


{#each todos as todo (todo.id)} 
    <div in:scale out:fade>
        <TodoItem on:handle-done todo={todo}/> 
    </div> 
{/each}
