import './Contact.css';

export const Contact = () => {

  return (
    <div className="contact-container">
      <h1 className="title">contact us</h1>
      <p>
        You can contact us via email at <a href="mailto:sogenreptiles@gmail.com">sogenreptiles@gmail.com</a>, or fill out this form:
      </p>

      <form className='contact-form' action='https://getform.io/f/8b178fa8-e5dc-4c04-a427-6f81f86a8e27' method="POST">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name='name' required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name='email' required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name='message' required />
        </div>
        <button type="submit">Send</button>
      </form>

      <p>Visit us on <a href='https://www.instagram.com/southerngenetics'>Instagram</a></p>
    </div>
  )
}