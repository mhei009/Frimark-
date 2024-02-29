import { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    setIsSubmitted(true);
  };

  return (
    <div>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <FormControl id="name" mb={4}>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              aria-label="Your name"
              required
            />
          </FormControl>

          <FormControl id="email" mb={4}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              aria-label="Your email"
              required
            />
          </FormControl>

          <FormControl id="question" mb={4}>
            <FormLabel>Message</FormLabel>
            <Textarea
              name="question"
              value={formData.question}
              onChange={handleChange}
              aria-label="Put your message or ask your question"
              resize="vertical"
              required
            />
          </FormControl>

          <Button className="submit" type="submit" colorScheme="teal">
            Submit
          </Button>
        </form>
      ) : (
        <div>
          <p>
            Thank you for contacting us, we will get back to you as soon as
            possible.
          </p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
