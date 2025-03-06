import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import Swal from 'sweetalert2'

const Toast=Swal.mixin({
	toast: true,
	position: 'top-end',
	showConfirmButton: false,
	timer: 3000,
	timerProgressBar: true,
	didOpen: (toast) => {
	  toast.addEventListener('mouseenter', Swal.stopTimer)
	  toast.addEventListener('mouseleave', Swal.resumeTimer)
	}
    })

const ContactForm = () => {
	const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7skyuua', 'template_uqeds28', form.current, 'zGAfLV2_BxTkY4d26')
			.then(
				() => {
					Toast.fire({
						icon: 'success',
						title: 'Your message has been sent'
					    })
					form.current.reset();
				},
				() => {
					Toast.fire({
						icon: 'error',
						title: 'There was an error sending your message.'
					    })
				}
			);
}
	return (
		<div className="w-full lg:w-3/4">
			<div className="leading-loose">
				<form	ref={form}
					onSubmit={sendEmail}
					className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
				>
					<p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
						Contact Form
					</p>
					<FormInput
						inputLabel="Full Name"
						labelFor="name"
						inputType="text"
						id="name"
						name="name"
						placeholderText="Your Name"
						ariaLabelName="Name"
					/>
					<FormInput
						inputLabel="Email"
						labelFor="email"
						inputType="email"
						id="email"
						name="email"
						placeholderText="Your email"
						ariaLabelName="Email"
					/>
					<FormInput
						inputLabel="Subject"
						labelFor="subject"
						inputType="text"
						
						id="subject"
						name="subject"
						
						placeholderText="Subject"
						ariaLabelName="Subject"
					/>

					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="message"
						>
							Message
						</label>
						<textarea
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="message"
							name="message"
							cols="14"
							rows="6"
							aria-label="Message"
						></textarea>
					</div>

					<div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-primary-green hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
						<Button
							title="Send Message"
							type="submit"
							aria-label="Send Message"
						/> 
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
