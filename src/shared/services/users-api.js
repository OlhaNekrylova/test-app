import axios from "axios";

const usersInstance = axios.create({
    baseURL: "https://6403ad803bdc59fa8f2ae78f.mockapi.io/api/users/"
})

export const fetchUsers = async({ page, filter = 'show all'})=> {

    const {data} = await usersInstance.get("/", {
    params : {  "page": page, "limit": 3 },
    });
    return data;
}
