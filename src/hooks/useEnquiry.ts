'use client'
import { useState, useRef, type FormEvent } from 'react'
export function useEnquiry() {
 const [sending,setSending]=useState(false)
 const [status,setStatus]=useState('')
 const busy=useRef(false)
 async function submit(event:FormEvent<HTMLFormElement>) {
  event.preventDefault()
  if(busy.current)return
  const form=event.currentTarget, data=new FormData(form)
  busy.current=true;setSending(true);setStatus('')
  try {
   const response=await fetch('/api/enquiry',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name:data.get('name')||'Website enquiry',email:data.get('email'),phone:data.get('Phone')||'',message:data.get('field')||'Please contact me about Climate City.',website:data.get('website')||''}),signal:AbortSignal.timeout(30000)})
   const result=await response.json()
   if(!response.ok||!result.ok)throw new Error(result.error||'Unable to send your enquiry. Please try again.')
   setStatus('Thank you. Your enquiry has been sent.');form.reset()
  } catch(error) {setStatus(error instanceof Error&&error.name!=='TimeoutError'?error.message:'Sending timed out. Please email enquires@theclimatecity.com if you need assistance.')}
  finally{busy.current=false;setSending(false)}
 }
 return {sending,status,submit}
}
