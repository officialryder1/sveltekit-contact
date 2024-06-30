import { writable } from "svelte/store";

let contacts = writable([{
    id: 1,
    name: "John Smite",
    email: "JohnSmite@gmail.com",
    company: "Shadow",
    job: "Eminence in the shadow"
}])

export default contacts