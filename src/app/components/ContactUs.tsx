"use client";
import React, { useState, FormEvent } from "react";

import { cn } from "@/app/utils/cn";


import { Button } from "./ui/moving-border";
// Define interface for contact response
interface ContactResponse {
  msg: string[];
  success: boolean;
}

function Page() {
  // Define state variables
  const [fullname, setFullname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [state, setState] = useState<string>(""); // New state field
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string[]>([]);
  const [success, setSuccess] = useState<boolean>(false);

  // Define form submission handler
  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    // Log form data
    console.log("Full name: ", fullname);
    console.log("Email: ", email);
    console.log("Phone Number: ", phoneNumber);
    console.log("State: ", state); // Log state
    console.log("Message: ", message);

    // Send form data to backend
    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        phoneNumber,
        state, // Include state in the request body
        message,
      }),
    });

    // Parse response from backend
    const { msg, success: isSuccess }: ContactResponse = await res.json();
    setError(msg);
    setSuccess(isSuccess);

    // If successful, clear form fields
    if (isSuccess) {
      setFullname("");
      setEmail("");
      setPhoneNumber("");
      setState(""); // Clear state field
      setMessage("");
    }
  };

  const BottomGradient = () => {
    return (
      <>
        <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      </>
    );
  };

  const LabelInputContainer = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div className={cn("flex flex-col space-y-2 w-full", className)}>
        {children}
      </div>
    );
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md w-full rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black mt-60">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Welcome to BackboneJEE
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Enter your details here for Free Councelling
        </p>

       

        <form
          onSubmit={handleSubmit}
          className="py-4 mt-4  flex flex-col gap-5"
        >
          {/* Full Name input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="fullname">Full Name*</label>
            <input
              onChange={(e) => setFullname(e.target.value)}
              value={fullname}
              type="text"
              id="fullname"
              placeholder="John Doe"
              className="shadow-md px-6 py-2 border border-slate-300 bg-black text-white"
            />
          </div>

          {/* Email input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email*</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="text"
              id="email"
              placeholder="ramesh@gmail.com"
              className="shadow-md px-6 py-2 border border-slate-300 bg-black text-white "
            />
          </div>

          {/* Phone Number input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="phoneNumber">Phone Number*</label>
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
              type="text"
              id="phoneNumber"
              placeholder="1234567890"
              className="shadow-md px-6 py-2 border border-slate-300 bg-black text-white "
            />
          </div>

          {/* State input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="state">State*</label>
            <input
              onChange={(e) => setState(e.target.value)}
              value={state}
              type="text"
              id="state"
              placeholder="Delhi"
              className="shadow-md px-6 py-2 border border-slate-300 bg-black text-white "
            />
          </div>

          {/* Message textarea */}
          <div className="flex flex-col gap-2">
            <label htmlFor="message">Your Message*</label>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              className="h-32 shadow-md px-6 py-2 border border-slate-300 bg-black text-white "
              id="message"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          {/* Submit button */}
          <Button
            type="submit"
            
            // className="font-bold bg-dark hover:bg-green-600 text-white h-10 px-5 rounded-md transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:-translate-y-1 motion-reduce:transform-none"
            borderRadius="15rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800
                    font-bold text-lg
                    "
          >
            Send
           
          </Button>
           {/* <button 
         type="submit"
         className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] mt-5">
           Send &rarr;
           <BottomGradient />
         </button> */}
        </form>

        {/* Display error messages */}
        <div className="bg-black flex flex-col ">
          {error &&
            error.map((e) => (
              <div
                key={e}
                className={`${
                  success ? "text-green-800" : "text-red-600"
                } px-5 py-1 font-bold`}
              >
                {e}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
