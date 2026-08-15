import React, { useState } from 'react';
import InputField from '../common/InputField';
import Button from '../common/Button';
import { getEmailFeedback, getPhoneFeedback } from '../../utilities/validation';

const LeadCaptureForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); 
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    
    if (name === 'email') {
      const feedback = getEmailFeedback(value);
      e.target.setCustomValidity(feedback);
      e.target.reportValidity();
    }

    if (name === 'phone') {
      const feedback = getPhoneFeedback(value);
      e.target.setCustomValidity(feedback);
      e.target.reportValidity();
    }
  };

const handleSubmit = async (e) => {
    e.preventDefault();
    
    setStatus('submitting');
    setErrorMessage('');

    try {
      const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';
      
      const response = await fetch(`${apiUrl}/api/leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), 
      });

      if (!response.ok) {
        throw new Error('Our servers are currently busy. Please try again later.');
      }

      setStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });

    } catch (error) {
      setStatus('error');
      setErrorMessage(error.message);
    }
  };

  // Success State UI
  if (status === 'success') {
    return (
      <div className="text-center py-4">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
          <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900">Request Submitted!</h3>
        <p className="mt-2 text-sm text-gray-500">
          Your information has been successfully sent to our AI orchestration layer and synced with Salesforce.
        </p>
        {/* Replaced standard button with custom Button component */}
        <Button 
          variant="secondary"
          onClick={() => setStatus('idle')}
          className="mt-6 mx-auto"
        >
          Submit another inquiry
        </Button>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      
      {/* Error Message Display */}
      {status === 'error' && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-red-700">{errorMessage}</p>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
        {/* Replaced verbose HTML with clean InputField components */}
        <InputField
          label="First Name"
          name="firstName"
          required
          value={formData.firstName}
          onChange={handleChange}
        />

        <InputField
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>

      <InputField
        label="Email address"
        type="email"
        name="email"
        required
        value={formData.email}
        onChange={handleChange}
      />

      <InputField
          label="Phone Number (Including country code starting with +)"
          type="tel"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
        />

      <InputField
        label="Company"
        name="company"
        value={formData.company}
        onChange={handleChange}
      />

      {/* 
        Note: The message field remains a native textarea because our 
        InputField component is specifically designed to render an <input> tag. 
      */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">How can we help?</label>
        <div className="mt-1">
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      {/* Replaced submit button with custom Button component */}
      <div>
        <Button
          type="submit"
          isLoading={status === 'submitting'}
          className="w-full"
        >
          {status === 'submitting' ? 'Processing via AI...' : 'Submit to Salesforce'}
        </Button>
      </div>
    </form>
  );
};

export default LeadCaptureForm;