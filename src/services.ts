import emailjs from "@emailjs/browser"

export const sendEmail = (email: string, name: string, message: string) => {
    emailjs.send
        (  
            "service_4wwrknk",
            "template_1574dva",
            {
                from_name: name,
                reply_to: email,
                message: message,
                to_name: "Raven"
            },
            "oW8cZFj7xsg2ZVzK9"
        );
}