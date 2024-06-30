import { error, invalid, redirect } from '@sveltejs/kit';

let contacts = [{
    id: 1,
    name: "John Smite",
    email: "JohnSmite@gmail.com",
    company: " Shadow",
    job: "Eminence in the shadow"
}]

export const load = () => {
    return {
        contacts
    }
}



export const actions = {
    create: async ({ request }) => {
        const formData = await request.formData();

        const name = formData.get('name');
        const email = formData.get('email');
        const company = formData.get('company');
        const job = formData.get('job');
        const id = crypto.randomUUID();

        if (name.length < 2) {
            return new Response(JSON.stringify({
                error: true,
                message: 'Name must be at least two characters'
            })), {
                status: 400,
                headers: {
                    'Content-Type': 'application/json'
                },
                message: 'Name must be at least three characters'
            }
        }
        if(!email){
            return new Response(JSON.stringify({
                error: true,
            })), {
                status: 400,
                headers: {
                    'Content-Type': 'application/json'
                },
                message: 'Email must be added'
            }
        }

        if(!company){
            return new Response(JSON.stringify({
                error: true,
            })), {
                status: 400,
                headers: {
                    'Content-Type': 'application/json'
                },
                message: 'Company must be added'
            }
        }

        if(!job){
            return new Response(JSON.stringify({
                error: true,
            })), {
                status: 400,
                headers: {
                    'Content-Type': 'application/json'
                },
                message: 'Job must be added'
            }
        }
        // Create a new contact object
        const contact = {
            id,
            name,
            email,
            company,
            job
        };

        // Push the contact object to the contacts array
        contacts.push(contact);

        return {
            success: true,
            message: "Submitted successfully"

        };
    },

    delete: async({request}) => {
        const formData = await request.formData()
        const id = formData.get('id')
    
        contacts = contacts.filter(contact => contact.id != id)
        return{
            success: true
        }
    }


};