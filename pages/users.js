import React from "react";
import User from "../components/user";

export default function users({ users }) {
  return (
    <>
      <div>List of users</div>
      {users.map((user) => {
        return (
          <div key={user.id}>
          <User user={user}/>
          </div>
        );
      })}
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
  return {
    props: {
      users: data,
    },
  };
}
// we can export async function (getStaticProps)
//which can fech data at buld time
//which will help to create a static page with dyncamic data

//when we return data from getStaticProps it gets automatically passed to component above
//which we can used using props

//getStaticProps is runs only on server
// the function will never run on client-side
// the code we write inside getstaticprops wont even be incuded in js bundle which is sent to client-side

// there fore we can write server side code in getstaticprops e.g code we write in NODEJS like file system calls, OS calls etc.

//getstaticprops can be written in only pages folder not in component or any other folder