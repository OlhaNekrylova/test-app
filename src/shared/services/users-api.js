import axios from "axios";

const usersInstance = axios.create({
    baseURL: "https://6403ad803bdc59fa8f2ae78f.mockapi.io/api/users/"
})

export const fetchUsers = async()=> {
    const {data} = await usersInstance.get("/");
    return data;
}

// export const addContact = async(data) => {
//     const {data: result} = await contactsInstance.post("/", data);
//     return result;
// }

// export const deleteContact = async(id) => {
//     const {data} = await contactsInstance.delete(`/${id}`);
//     return data;
// }