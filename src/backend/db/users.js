import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    bio: "", 
    imageUrl: "https://res.cloudinary.com/dniz23rju/image/upload/v1647158103/sample.jpg",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Saksham",
    lastName: "Munjal",
    username: "sakshammunjal",
    bio: "", 
    imageUrl: "https://res.cloudinary.com/dniz23rju/image/upload/v1647158103/sample.jpg",
    password: "saksham123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balak",
    username: "adarshbalak",
    password: "adarsh123",
    bio: "", 
    imageUrl: "https://res.cloudinary.com/dniz23rju/image/upload/v1647158103/sample.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
