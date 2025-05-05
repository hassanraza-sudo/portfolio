import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitMessage({ 
          type: 'success', 
          text: 'Thank you for your message! I will get back to you soon.' 
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitMessage(null);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <section
      id="contact"
      className={`py-20 ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Get In Touch
          </h2>
          <div className={`w-20 h-1 rounded ${
            theme === 'dark' ? 'bg-blue-500' : 'bg-blue-600'
          }`}></div>
          <p className={`mt-4 text-center max-w-2xl ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Have a question or want to work together? Feel free to contact me.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className={`p-6 rounded-lg ${
              theme === 'dark' ? 'bg-gray-900' : 'bg-white'
            } shadow-md`}>
              <h3 className={`text-xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className={`p-3 rounded-full mr-4 ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
                  }`}>
                    <Mail className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} size={20} />
                  </div>
                  <div>
                    <h4 className={`text-sm font-semibold mb-1 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Email
                    </h4>
                    <p className={`${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      <a 
                        href="mailto:hassanraza.bscsf22@iba-suk.edu.pk" 
                        className="hover:underline"
                      >
                        hassanraza.bscsf22@iba-suk.edu.pk
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className={`p-3 rounded-full mr-4 ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
                  }`}>
                    <Phone className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} size={20} />
                  </div>
                  <div>
                    <h4 className={`text-sm font-semibold mb-1 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Phone
                    </h4>
                    <p className={`${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      <a 
                        href="tel:+923097497170" 
                        className="hover:underline"
                      >
                        0309-7497170
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className={`p-3 rounded-full mr-4 ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
                  }`}>
                    <MapPin className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} size={20} />
                  </div>
                  <div>
                    <h4 className={`text-sm font-semibold mb-1 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Location
                    </h4>
                    <p className={`${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      Sukkur, Sindh, Pakistan
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className={`text-sm font-semibold mb-3 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Best Time to Contact
                </h4>
                <p className={`${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  I'm most responsive during weekdays between 9AM and 6PM (PKT).
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 order-1 lg:order-2">
            <div className={`p-6 rounded-lg ${
              theme === 'dark' ? 'bg-gray-900' : 'bg-white'
            } shadow-md`}>
              <h3 className={`text-xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Send a Message
              </h3>
              
              {submitMessage && (
                <div className={`mb-6 p-4 rounded-lg ${
                  submitMessage.type === 'success'
                    ? theme === 'dark' ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-800'
                    : theme === 'dark' ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-800'
                }`}>
                  {submitMessage.text}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label 
                      htmlFor="name" 
                      className={`block mb-2 text-sm font-medium ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg outline-none transition ${
                        theme === 'dark' 
                          ? 'bg-gray-800 text-white border border-gray-700 focus:border-blue-500' 
                          : 'bg-gray-50 text-gray-900 border border-gray-300 focus:border-blue-500'
                      } ${errors.name ? theme === 'dark' ? 'border-red-500' : 'border-red-500' : ''}`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="email" 
                      className={`block mb-2 text-sm font-medium ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg outline-none transition ${
                        theme === 'dark' 
                          ? 'bg-gray-800 text-white border border-gray-700 focus:border-blue-500' 
                          : 'bg-gray-50 text-gray-900 border border-gray-300 focus:border-blue-500'
                      } ${errors.email ? theme === 'dark' ? 'border-red-500' : 'border-red-500' : ''}`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>
                
                <div className="mb-4">
                  <label 
                    htmlFor="subject" 
                    className={`block mb-2 text-sm font-medium ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg outline-none transition ${
                      theme === 'dark' 
                        ? 'bg-gray-800 text-white border border-gray-700 focus:border-blue-500' 
                        : 'bg-gray-50 text-gray-900 border border-gray-300 focus:border-blue-500'
                    } ${errors.subject ? theme === 'dark' ? 'border-red-500' : 'border-red-500' : ''}`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                  )}
                </div>
                
                <div className="mb-6">
                  <label 
                    htmlFor="message" 
                    className={`block mb-2 text-sm font-medium ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg outline-none transition ${
                      theme === 'dark' 
                        ? 'bg-gray-800 text-white border border-gray-700 focus:border-blue-500' 
                        : 'bg-gray-50 text-gray-900 border border-gray-300 focus:border-blue-500'
                    } ${errors.message ? theme === 'dark' ? 'border-red-500' : 'border-red-500' : ''}`}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors ${
                    isSubmitting
                      ? theme === 'dark' ? 'bg-gray-700 text-gray-400' : 'bg-gray-300 text-gray-600'
                      : theme === 'dark' 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                  } w-full sm:w-auto`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;