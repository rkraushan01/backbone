// import React from 'react'
// import { useEffect } from 'react';
// import { useState } from 'react';


  
// function RazorpayForm() {

// const [mounted, setMounted] = useState(false);
//   useEffect(() => setMounted(true), []);
//   useEffect(() => {
//     const Script = document.createElement("script");
//     //id should be same as given to form element
//     const Form = document.getElementById("donateForm");
//     Script.setAttribute(
//       "src",
//       "https://checkout.razorpay.com/v1/payment-button.js"
//     );
//     Script.setAttribute("data-payment_button_id", "pl_O021xA8tDEiXlz");
//     if (Form) {
//       Form.appendChild(Script);
//     }
//   }, [mounted]);


// return mounted ? <form id="donateForm"></form> : null
// }

// export default RazorpayForm

import React, { useEffect, useState, FC } from 'react';

const RazorpayForm: FC = () => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const script = document.createElement("script");
      const form = document.getElementById("donateForm") as HTMLFormElement; // Type assertion for HTMLFormElement

      script.setAttribute("src", "https://checkout.razorpay.com/v1/payment-button.js");
      script.setAttribute("data-payment_button_id", "pl_O021xA8tDEiXlz");

      if (form) {
        form.appendChild(script);
      }
    }
  }, [mounted]);

  return mounted ? <form id="donateForm"></form> : null;
};

export default RazorpayForm;
