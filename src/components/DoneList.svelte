<script>
    import DoneItem from './DoneItem.svelte'    
   
    export let completed = 'completed'   
</script>
   
   
{#each completed as done (done.id)}  
    <div>
        <DoneItem done={done}/> 
    </div>   
{/each}   