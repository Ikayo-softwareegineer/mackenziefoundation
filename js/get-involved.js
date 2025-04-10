document.getElementById("showRegister").addEventListener("click", () => {
    toggleForm("registerForm");
  });
  document.getElementById("showLogin").addEventListener("click", () => {
    toggleForm("loginForm");
  });
  document.getElementById("showForgot").addEventListener("click", () => {
    toggleForm("forgotForm");
  });
  
  function toggleForm(activeFormId) {
    const forms = document.querySelectorAll(".form-section");
    forms.forEach(form => form.classList.add("d-none"));
    const activeForm = document.getElementById(activeFormId);
    if (activeForm) activeForm.classList.remove("d-none");
  }
  