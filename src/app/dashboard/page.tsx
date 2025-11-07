"use server"
import { auth } from "@/lib/auth";
import Signout from "./Signout";

export default async function DashboardPage() {
  const session = await auth();
console.log(session,"---session");

  if (!session) {
    return <p>Access denied. Please log in.</p>;
  }

  return (
  <>
  <h1>Welcome, {session.user?.name || session.user?.email}</h1>
<Signout/>
       </>
  )
}
