const nodemailer = require('nodemailer');

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {res.setHeader('Allow', 'POST');return res.status(405).json({error:'Method not allowed'});}
  if (!['https://theclimatecity.com','https://www.theclimatecity.com','https://climate-city-swart.vercel.app'].includes(req.headers.origin)) return res.status(403).json({error:'Please use the website form.'});
  if (!String(req.headers['content-type'] || '').startsWith('application/json')) return res.status(415).json({error:'Invalid request'});
  let body;
  try {body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;} catch {return res.status(400).json({error:'Invalid request'});}
  const {name='', email='', phone='', message='', website=''} = body || {};
  if (website) return res.status(400).json({error:'Unable to submit this enquiry.'});
  if (![name,email,phone,message].every(v=>typeof v==='string') || name.trim().length<2 || name.length>256 || email.length>254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || /[\r\n]/.test(email) || phone.length>80 || !message.trim() || message.length>5000) return res.status(400).json({error:'Please check your name, email and message.'});
  const {ZOHO_SMTP_HOST, ZOHO_SMTP_USER, ZOHO_SMTP_PASSWORD} = process.env;
  if (!ZOHO_SMTP_HOST || !ZOHO_SMTP_USER || !ZOHO_SMTP_PASSWORD) return res.status(503).json({error:'Online sending is not available yet. Please email enquires@theclimatecity.com.'});
  const transport = nodemailer.createTransport({host:ZOHO_SMTP_HOST,port:465,secure:true,auth:{user:ZOHO_SMTP_USER,pass:ZOHO_SMTP_PASSWORD},connectionTimeout:10000,socketTimeout:15000});
  try {
    const sent = await transport.sendMail({from:{name:'Climate City website',address:ZOHO_SMTP_USER},to:'enquires@theclimatecity.com',replyTo:email,subject:'Climate City enquiry',text:`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`});
    if (!sent.accepted?.length) throw new Error('Not accepted');
    return res.status(200).json({ok:true});
  } catch {return res.status(502).json({error:'Your enquiry could not be sent. Please try again or email enquires@theclimatecity.com.'});}
  finally {transport.close();}
};
