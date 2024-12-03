export const signUpValidation = (userData, setFormErrors) => {
  let errors = {};
  let isValid = true;

  // Validate first name
  if (!userData || !userData.f_name) {
    errors.f_name = ["First name is required"];
    isValid = false;
  } else if (userData.f_name.length > 20) {
    errors.f_name = ["First name must be under 20 characters"];
    isValid = false;
  }

  // Validate last name
  if (!userData || !userData.l_name) {
    errors.l_name = ["Last name is required"];
    isValid = false;
  } else if (userData.l_name.length > 20) {
    errors.l_name = ["Last name must be under 20 characters"];
    isValid = false;
  }

  // Validate email
  if (!userData || !userData.email) {
    errors.email = ["Email is required"];
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
    errors.email = ["Invalid email format"];
    isValid = false;
  }

  // Validate phone number
  if (!userData || !userData.contact_no) {
    errors.contact_no = ["Phone number is required"];
    isValid = false;
  } else if (!/^\d{10}$/.test(userData.contact_no)) {
    errors.contact_no = [
      "Contact number must be exactly 10 digits and should not contain special characters",
    ];
    isValid = false;
  }

  // Validate password
  if (!userData || !userData.password) {
    errors.password = ["Password is required"];
    isValid = false;
  } else if (userData.password.length < 8 || userData.password.length > 20) {
    errors.password = ["Password must be between 8 to 20 characters"];
    isValid = false;
  }

  // Validate confirm password
  if (!userData || !userData.confirm_password) {
    errors.confirm_password = ["Confirm password is required"];
    isValid = false;
  } else if (userData.confirm_password !== userData.password) {
    errors.confirm_password = ["Passwords do not match"];
    isValid = false;
  }

  // Optional field: company name
  if (userData.company_name && userData.company_name.length > 50) {
    errors.company_name = ["Company name must be under 50 characters"];
    isValid = false;
  }

  // Set errors and return validation status
  setFormErrors(errors);
  return isValid;
};

export const signInValidation = (userData, setFormErrors) => {
  let isValid = true;
  let errors = {};

  if (!userData || !userData?.email) {
    if (!errors || !errors?.email) {
      if (!errors) errors = {};
      errors.email = [];
    }
    errors?.email?.push("Email is required");
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData?.email)) {
    if (!errors || !errors?.email) {
      if (!errors) errors = {};
      errors.email = [];
    }
    errors?.email?.push("Invalid email format");
    isValid = false;
  }

  if (!userData || !userData?.password) {
    if (!errors || !errors?.password) {
      if (!errors) errors = {};
      errors.password = [];
    }
    errors?.password?.push("Password is required");
    isValid = false;
  } else if (
    userData?.password?.length < 0 ||
    userData?.password?.length > 20
  ) {
    if (!errors || !errors?.password) {
      if (!errors) errors = {};
      errors.password = [];
    }
    errors?.password?.push("Password must be between 7 to 20 characters");
    isValid = false;
  }

  setFormErrors(errors);
  return isValid;
};

export const editProfileValidation = (userData, setFormErrors) => {
  let isValid = true;
  let errors = {};

  // First name validation
  if (!userData || !userData?.first_name) {
    if (!errors || !errors?.first_name) {
      if (!errors) errors = {};
      errors.first_name = [];
    }
    errors?.first_name?.push("First name is required");
    isValid = false;
  } else if (
    userData?.first_name?.length < 2 ||
    userData?.first_name?.length > 50
  ) {
    if (!errors || !errors?.first_name) {
      if (!errors) errors = {};
      errors.first_name = [];
    }
    errors?.first_name?.push("First name must be between 2 and 50 characters");
    isValid = false;
  }

  // Last name validation
  if (!userData || !userData?.last_name) {
    if (!errors || !errors?.last_name) {
      if (!errors) errors = {};
      errors.last_name = [];
    }
    errors?.last_name?.push("Last name is required");
    isValid = false;
  } else if (
    userData?.last_name?.length < 2 ||
    userData?.last_name?.length > 50
  ) {
    if (!errors || !errors?.last_name) {
      if (!errors) errors = {};
      errors.last_name = [];
    }
    errors?.last_name?.push("Last name must be between 2 and 50 characters");
    isValid = false;
  }

  // Phone number validation
  if (!userData || !userData?.phone) {
    if (!errors || !errors?.phone) {
      if (!errors) errors = {};
      errors.phone = [];
    }
    errors?.phone?.push("Phone number is required");
    isValid = false;
  } else if (!/^\d{10}$/.test(userData?.phone)) {
    if (!errors || !errors?.phone) {
      if (!errors) errors = {};
      errors.phone = [];
    }
    errors?.phone?.push("Phone number must be 10 digits");
    isValid = false;
  }

  setFormErrors(errors);
  return isValid;
};

export const contactFormValidation = (formData, setFormErrors) => {
  let isValid = true;
  let errors = {};

  // First name validation
  if (!formData || !formData?.first_name) {
    if (!errors?.first_name) {
      errors.first_name = [];
    }
    errors.first_name.push("First name is required");
    isValid = false;
  } else if (formData?.first_name?.length < 2 || formData?.first_name?.length > 50) {
    if (!errors?.first_name) {
      errors.first_name = [];
    }
    errors.first_name.push("First name must be between 2 and 50 characters");
    isValid = false;
  }

  // Last name validation
  if (!formData || !formData?.last_name) {
    if (!errors?.last_name) {
      errors.last_name = [];
    }
    errors.last_name.push("Last name is required");
    isValid = false;
  } else if (formData?.last_name?.length < 2 || formData?.last_name?.length > 50) {
    if (!errors?.last_name) {
      errors.last_name = [];
    }
    errors.last_name.push("Last name must be between 2 and 50 characters");
    isValid = false;
  }

  // Phone number validation
  if (!formData || !formData?.phone) {
    if (!errors?.phone) {
      errors.phone = [];
    }
    errors.phone.push("Phone number is required");
    isValid = false;
  } else if (!/^\d{10}$/.test(formData?.phone)) {
    if (!errors?.phone) {
      errors.phone = [];
    }
    errors.phone.push("Phone number must be 10 digits");
    isValid = false;
  }

  // Email validation
  if (!formData || !formData?.email) {
    if (!errors?.email) {
      errors.email = [];
    }
    errors.email.push("Email is required");
    isValid = false;
  } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(formData?.email)) {
    if (!errors?.email) {
      errors.email = [];
    }
    errors.email.push("Please enter a valid email address");
    isValid = false;
  }

  // Message validation (optional)
  if (formData?.message && formData?.message.length > 500) {
    if (!errors?.message) {
      errors.message = [];
    }
    errors.message.push("Message cannot exceed 500 characters");
    isValid = false;
  }

  setFormErrors(errors);
  return isValid;
};
