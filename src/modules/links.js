import { nanoid } from "nanoid";

const links = [
    {
        id: nanoid(),
        text: "Home page",
        link: "/"
    },
    {
        id: nanoid(),
        text: "Tweets page",
        link: "/tweets"
    },
];

export default links;