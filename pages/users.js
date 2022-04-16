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
