<script>
import { onMount } from "svelte"
import "./styles.css"
import Header from "../lib/components/header.svelte";
let title = "POSTS"
let posts = []

onMount(async () => {
    posts = await getProduct()
})

async function getProduct(){
    const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    const data = await res.json()
    const fileredData = data.slice(0, 3)

    return fileredData
}

$: console.log(posts)

</script>

<Header {title}/>
<main>
    {#await getProduct()}
        <p>Loading....</p>
    {:then data} 
        {#each data as {title, url}}
        <div class="grid">
            <img src="{url}" alt="">
            <p>{title}</p>
        </div>
        {/each}
    {/await}
</main>
<style>
    .grid{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
        
    }
    main{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    p{
        text-align: center;
    }
</style>