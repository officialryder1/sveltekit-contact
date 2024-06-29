<script>
    import "../styles.css"
    import Header from "../../lib/components/header.svelte";
    import { invalidateAll} from '$app/navigation'


    let title = "CONTACT US"
    export let data;
  
    $: contacts = data?.contacts;

    
    export const actions = {
        default: async ({request}) =>{
            const formData = await request.formData()

            const name = formData.get('name')
            const email = formData.get('email')
            const company = formData.get('company')
            const job = formData.get('job')
            const id = crypto.randomUUID()
            
            const contact = [{
                id,
                name,
                email,
                company,
                job,
            }]
            contacts.push(contact)
            console.log(formData)
        }
        
    
    }
</script>

<Header {title}/>
<section>
    <h1>Contact List</h1>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Company</th>
                <th>Job</th>
            </tr>
        </thead>
        <tbody>
            {#each contacts as contact (contact.id)}
            <tr>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.company}</td>
                <td>{contact.job}</td>
            </tr>
            {/each}
        </tbody>
    </table>
</section>
<main>
<h1>Contact Us</h1>
<form method="POST" enctype="multipart/form-data">
    <label for="name">Name</label>
    <input type="text" name="name" id="name" />
    <label for="email">Email</label>
    <input type="email" name="email" id="email" />
    <label for="company">Company</label>
    <input text="text" name="company" id="message">
    <label for="job">Job</label>
    <input type="text" name="job" id="job">
    <button type="submit">Send</button>
</form>
</main>
<style>

    form{
        display: block;
        margin:auto;
        padding: 20px;
        max-width: 500px;
    }
    label{
        display: block;
        margin-bottom: 5px;margin-top: 10px;
        font-weight: bold;    
    }
    input{
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }
    button{
        display: block;
        margin: auto;    
        padding: 10px 20px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;    
        font-size: 16px;    
        font-weight: bold;
        margin-top: 20px;
    }
    button:hover{
        background-color: #45a049;
    }
    table{
        border-collapse: collapse;
        width: 100%;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    th, td{
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }
    th{
        background-color: #f2f2f2;
    }    h1{
        text-align: center;
    }
    section{
        display: block;
        margin: auto;
        max-width: 900px;
    }   
</style>
