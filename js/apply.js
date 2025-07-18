document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const job = params.get('job') || '';
  const location = params.get('location') || '';

  document.getElementById('jobTitle').value = job;
  document.getElementById('location').value = location;
});