#! /usr/bin/env node

import inquirer from "inquirer";

let students = ["Khubaib", "Aish"];

let studentDetailes: string[] = [];

let password: string;

let id: string = "" ;


async function getStart() {
  let registration = await inquirer.prompt([
    {
      name: "value",
      message: "Select Option",
      type: "list",
      choices: ["Login", "SignUp", "Logout"],
    },
  ]);

  if (registration.value === "SignUp") {
    let signUp = await inquirer.prompt({
      name: "value",
      message: "Select Course",
      type: "list",
      choices: ["Gen AI", "Blockchain", "Internet of Things"],
    });

    if (signUp.value) {
      let getInfo = await inquirer.prompt([
        {
          name: "usrname",
          message: "Enter your name...",
          type: "input",
        },
        {
          name: "contact",
          message: "Enter your contact number...",
          type: "number",
        },
        {
          name: "gender",
          message: "Select Gender",
          type: "list",
          choices: ["male", "female"]
        },

        {
          name: "email",
          message: "Enter your Email...",
          type: "input"
        },
        {
          name: "pass",
          message: "Enter your Password...",
          type: "password"
        },
      ]);

for (let i = 1; i < 7; i++) {
     let  num = Math.round(Math.random() * 9);
     id += num;
      }
      

      students.push(getInfo.usrname);

      studentDetailes.push( `${"Name: " + getInfo.usrname}, ${"Contact: " + getInfo.contact}, ${"Gender: " + getInfo.gender}, ${"Email: " + getInfo.email}, ${"Password: " + getInfo.pass}, ${"ID: " + id}, ${"Course: " + signUp.value}`);

      password = getInfo.pass;


      getStart();
    }
  } else if (registration.value === "Login") {
    let login = await inquirer.prompt({
      name: "value",
      message: "Select your name",
      type: "list",
      choices: students
    })

    if (login.value !== "Khubaib" && "Aish") {
      let confirmPass = await inquirer.prompt({
        name: "value",
        message: "Enter your password",
        type: "number"
      })      

      if (confirmPass.value == password) {
        console.log("Login Sucessfully");

        console.log(studentDetailes);
        
        getStart();

      } else {
        console.log("Incorrect Password");
        
      }
    }

  } else {
    console.log("Logout");
    
  }
}

getStart();
