import {Form, redirect, useActionData} from "react-router-dom";



const Contact = () => {
    const data = useActionData();

    return (
        <div className="contact">
            <h1>Contact Us</h1>
            <Form method="post" replace>
                <label>
                    <span>Your Email:</span>
                    <input type="email" name="email"
                           required placeholder="name@examle.com"/>
                    {data && data.email !== "" ? (<span className="flex mt-3 flex-col text-red-600 font-extrabold">{data.email}</span>) : ''}
                </label>
                <label>
                    <span>Your message:</span>
                    <textarea name="message" required placeholder="Write your message here..."></textarea>
                    {data && data.message !== "" ? (<span className="flex mt-3 flex-col text-red-600 font-extrabold ">{data.message}</span>) : ''}
                </label>
                <button type="submit">Submit</button>
            </Form>
        </div>
    )
}

export default Contact;

export const contactAction = async ({ request }) => {
    const data = await request.formData();
    const reg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    const submission = {
        email: data.get("email"),
        message: data.get("message"),
        errors: {}
    }

    if(!reg.test(submission.email))
        submission.errors.email = "Please enter valid email address";

    if(submission.message.length < 10)
        submission.errors.message = "Message must be over 10 chars long";

    if(Object.keys(submission.errors).length)
        return submission.errors;

    return redirect("/react-router/help")

}