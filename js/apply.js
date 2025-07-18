document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const job = params.get('job') || '';
  const location = params.get('location') || '';

  document.getElementById('jobTitle').value = job;
  document.getElementById('location').value = location;

  // Set applyDate to today
  const dateInput = document.getElementById('applyDate');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0]; // yyyy-mm-dd format
    dateInput.value = today;
  }
});