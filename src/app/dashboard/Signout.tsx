"use client"
import { showToast } from "@/components/toasts";
import { auth, signOut } from "@/lib/auth";
import { handleSignout } from "../actions/authActions";
import { useTransition } from "react";

export default function Signout() {
const [isPending, startTransition] = useTransition();


  const onSignOut = async ():Promise<void> => {
    startTransition(async () => {
        await handleSignout()
    showToast("success","Signed out successfully");
    } )
    //   try {
    //     const rep=await handleSignout();
    //     console.log(rep,"...resp on signout");
        
    //     showToast("success","Signed out successfully");
    //   } catch (err:any) {
    //     showToast("error",`Sign out failed with errror- ${err.message}`);
    //   }
    // });
  };

  return (
  <>

        <button onClick={onSignOut} disabled={isPending} className="bg-red-600 text-white p-2 rounded mt-4">
          Sign out
        </button>
       </>
  )
}
