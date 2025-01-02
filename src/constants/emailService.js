// emailService.js

import emailjs from '@emailjs/browser';

export const sendEmail = (name, email, message) => {
  const templateParams = {
    to_name: name,
    from_name: email,
    message: message,
  };

  return emailjs.send(
    "service_okxqwra", // your service ID
    "template_8lgiss3", // your template ID
    templateParams,
    "Ti-ly3LAA78rZ2isq" // your user ID
  );
};
