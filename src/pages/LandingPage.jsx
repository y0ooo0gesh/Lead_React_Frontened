import React from 'react';
import LeadCaptureForm from '../components/form/LeadCaptureForm';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      
      {/* Header / Hero Section */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <h1 className="mt-6 text-3xl font-extrabold text-gray-900">
          AI-Enhanced Lead Capture
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          Submit your inquiry below. Our system will intelligently analyze your request 
          before securely syncing it to our Salesforce CRM.
        </p>
      </div>

      {/* Form Container */}
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {/* 
            The form component is isolated here. 
            LandingPage doesn't need to know how the form works, 
            it only needs to display it. 
          */}
          <LeadCaptureForm />
        </div>
      </div>

    </div>
  );
};

export default LandingPage;