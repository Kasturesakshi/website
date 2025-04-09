 
 
 
import React, { useState } from 'react';
import '../styles/contact.css';

function Contact() {
  const [userInput, setUserInput] = useState('');
  const [aiResponse, setAiResponse] = useState('');

  const handleAsk = () => {
    if (userInput.trim()) {
      const question = userInput.toLowerCase();

      let response = "We're here to assist you! 😊";

      if (question.includes("location") || question.includes("where is")) {
        response = "Our college is located in Gargoti, Maharashtra.";
      } else if (question.includes("admission") || question.includes("form") || question.includes("apply")) {
        response = "You can apply for admission by visiting our official website or contacting the college office. Admission forms are available both online and offline.";
      } else if (question.includes("email")) {
        response = "You can contact us via email at khcollege@gmail.com.";
      } else if (question.includes("phone") || question.includes("contact number") || question.includes("mobile")) {
        response = "You can reach us at +91 98765 43210.";
      } else if (question.includes("website")) {
        response = "Our official website is: https://www.khgroup.com";
      } else if (question.includes("twitter")) {
        response = "Follow us on Twitter: https://twitter.com/khcollege";
      }

      setAiResponse(`You asked: "${userInput}" - ${response}`);
      setUserInput('');
    }
  };

  return (
    <div className="contact-container">
      <h2 className="contact-header">We are happy to help you</h2>
      <div className="contact-info">
        <p><strong> Address:</strong> Shri Mouni Vidyapeeth's Karmaveer Hire Arts, Science, Commerce and Education College, Gargoti</p>
        <p><strong>Email:</strong> khcollege@gmail.com</p>
        <p><strong> Phone:</strong> +91 98765 43210</p>
        <p><strong> Twitter:</strong> <a href="https://twitter.com/khcollege" target="_blank">@khcollege</a></p>
        <p><strong> Website:</strong> <a href="https://www.khgroup.com" target="_blank">www.khgroup.com</a></p>
      </div>

      <div className="chat-box">
        <h3>🤖 Ask our AI Assistant</h3>
        <div className="chat-input">
          <input 
            type="text" 
            placeholder="Type your question..." 
            value={userInput} 
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button onClick={handleAsk}>Ask</button>
        </div>
        {aiResponse && <div className="chat-response">{aiResponse}</div>}
      </div>
    </div>
  );
}

export default Contact;
