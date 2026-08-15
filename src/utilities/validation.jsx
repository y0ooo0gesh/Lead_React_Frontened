export const getEmailFeedback = (email) => {
  if (!email) return ''; 

  if (!email.includes('@')) {
    return `Please include an '@'.`;
  }

  const parts = email.split('@');
  const localPart = parts[0];
  const domainPart = parts[1];

  if (parts.length > 2) {
    return 'An email address can only contain one "@" symbol.';
  }

  if (!domainPart) {
    return `Please enter a part following '${email}'.`;
  }

  if (!domainPart.includes('.')) {
    return `Please complete the mailserver after '${email}'.`;
  }

  const domainSegments = domainPart.split('.');
  const tld = domainSegments[domainSegments.length - 1];

  if (tld.length < 2) {
    return `Please complete the domain (ex: .com, .co, .io).`;
  }

  const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!EMAIL_REGEX.test(email)) {
    return 'Please enter a valid complete email address.';
  }

  return ''; 
};

export const getPhoneFeedback = (phone) => {
  if (!phone) return ''; 

  // 1. Remove all common formatting characters (spaces, dashes, parentheses)
  const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');

  // 2. Continuous Check: Ensure they are only typing valid phone characters
  if (!/^\+?[0-9]*$/.test(cleanPhone)) {
    return 'Phone number can only contain digits, spaces, dashes, and an optional + prefix.';
  }

  // 3. Extract just the digits to check the length
  const digitCount = cleanPhone.replace('+', '').length;
  
  // 4. Global Standard Check: Valid numbers are typically between 7 and 15 digits
  if (digitCount < 7) {
    return 'Phone number is too short. Please enter a valid number.';
  }
  
  if (digitCount > 15) {
    return 'Phone number is too long. Please ensure it is 15 digits or less.';
  }

  return ''; // Return empty string if valid
};