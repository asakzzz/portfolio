import * as React from 'react';
// import { error } from 'console';


export function EmailForm() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    const email = data.get('email')?.toString();
    const message = data.get('message')?.toString();

    await fetch("http://localhost:3000/api/send", {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, message })
    }
    )
  }

  return (
    <form id='EmailForm' onSubmit={handleSubmit} className='flex flex-col border border-amber-50-'>
      <input name='email' className='mb-3' placeholder='Enter your email' />
      <input name='message' className='mb-3' placeholder='Enter your message' />
      <button type='submit' className=''>Submit</button>
    </form>
  )
}


export function EmailTemplate({email , message} : {email : string , message: string}) {
  return (
    <div>
      <p>From: {email}</p>
      <p>{message}</p>
    </div>
  );
}