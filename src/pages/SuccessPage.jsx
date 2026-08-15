import React from 'react';
// Import the custom Button component you built earlier
import Button from '../components/common/Button';

const SuccessPage = () => {
  // A simple function to return the user to the starting page.
  // If you add react-router-dom later, you would replace this with the useNavigate() hook.
  const handleReturnHome = () => {
    window.location.href = '/'; 
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        
        <div className="bg-white py-10 px-4 shadow sm:rounded-lg sm:px-10 text-center flex flex-col items-center">
          
          {/* Success Checkmark Icon */}
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
            <svg 
              className="h-8 w-8 text-green-600" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              aria-hidden="true"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M5 13l4 4L19 7" 
              />
            </svg>
          </div>
          
          {/* Typography */}
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
            Submission Successful!
          </h2>
          
          <p className="text-sm text-gray-600 mb-8 px-2">
            Thank you for reaching out. Your inquiry has been securely synced with our Salesforce system. Our team will review your details and get back to you shortly.
          </p>
          
          {/* Reusable Button */}
          <Button 
            onClick={handleReturnHome} 
            className="w-full"
          >
            Return to Home
          </Button>

        </div>

      </div>
    </div>
  );
};

export default SuccessPage;