import "dotenv/config.js"
import '../../config/database.js'
import User from "../User.js"



// Array of users (15 users as required)
const users = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      address: "123 Elm Street",
      phone: 5551234567,
      password: "hashed_password_1",
      online: false,
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      address: "456 Oak Avenue",
      phone: 5552345678,
      password: "hashed_password_2",
      online: true,
    },
    {
      name: "Michael Johnson",
      email: "michael.johnson@example.com",
      address: "789 Maple Drive",
      phone: 5553456789,
      password: "hashed_password_3",
      online: false,
    },
    {
      name: "Emily Davis",
      email: "emily.davis@example.com",
      address: "321 Pine Lane",
      phone: 5554567890,
      password: "hashed_password_4",
      online: true,
    },
    {
      name: "Christopher Brown",
      email: "chris.brown@example.com",
      address: "654 Cedar Road",
      phone: 5555678901,
      password: "hashed_password_5",
      online: false,
    },
    {
      name: "Amanda Wilson",
      email: "amanda.wilson@example.com",
      address: "987 Spruce Boulevard",
      phone: 5556789012,
      password: "hashed_password_6",
      online: true,
    },
    {
      name: "David Martinez",
      email: "david.martinez@example.com",
      address: "246 Palm Street",
      phone: 5557890123,
      password: "hashed_password_7",
      online: false,
    },
    {
      name: "Laura Anderson",
      email: "laura.anderson@example.com",
      address: "135 Birch Circle",
      phone: 5558901234,
      password: "hashed_password_8",
      online: true,
    },
    {
      name: "Daniel Thomas",
      email: "daniel.thomas@example.com",
      address: "468 Willow Parkway",
      phone: 5559012345,
      password: "hashed_password_9",
      online: false,
    },
    {
      name: "Jessica Taylor",
      email: "jessica.taylor@example.com",
      address: "357 Aspen Plaza",
      phone: 5550123456,
      password: "hashed_password_10",
      online: true,
    },
    {
      name: "Ryan Moore",
      email: "ryan.moore@example.com",
      address: "951 Oakwood Avenue",
      phone: 5551234568,
      password: "hashed_password_11",
      online: false,
    },
    {
      name: "Sara White",
      email: "sara.white@example.com",
      address: "753 Chestnut Road",
      phone: 5552345679,
      password: "hashed_password_12",
      online: true,
    },
    {
      name: "Brian Harris",
      email: "brian.harris@example.com",
      address: "159 Redwood Boulevard",
      phone: 5553456780,
      password: "hashed_password_13",
      online: false,
    },
    {
      name: "Sophia Martin",
      email: "sophia.martin@example.com",
      address: "852 Pinewood Lane",
      phone: 5554567891,
      password: "hashed_password_14",
      online: true,
    },
    {
      name: "Ethan Clark",
      email: "ethan.clark@example.com",
      address: "753 Willow Street",
      phone: 5555678902,
      password: "hashed_password_15",
      online: false,
    }
  ];
  

User.insertMany(users)