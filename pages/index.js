import React from "react";

import Link from "next/link";

export default function Home() {
  return (<><h1>Home Page</h1>
  <Link href='/users'><a>Users</a></Link><br></br>
  <Link href='/posts'><a>Posts</a></Link></>
  );
}
