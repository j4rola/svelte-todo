<script>

    export let done = 'test' //from DoneList Component  

    const deleteTodo = (e) => {
        console.log()
        e.target.parentNode.style.display = 'none';
    }
</script>

<div>
    <p on:click={deleteTodo}>X</p><h2>Complete</h2><h4>{done.text}</h4>  
</div> 

<style>
    div {
        color: white; 
        border-radius: 10px; 
        background-color: rgb(12, 146, 133); 
        padding-top:10px; 
        padding-bottom:10px;
        margin: 15px;
        padding-inline: 20px;
    }

    p {
        position: relative; 
        width: 10px;
    }

    p:hover {
        cursor: pointer;
    }
    
</style>