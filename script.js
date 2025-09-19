<script>
  function handleFormSubmit(event) {
    event.preventDefault(); // prevent default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const dataType = document.getElementById('dataType').value;
    const reason = document.getElementById('reason').value;

    // Simulate data access or submission
    console.log("Requesting access to:", dataType);
    console.log("User:", name, email);
    console.log("Reason:", reason);

    alert("Data access request submitted! (Check console for details)");
  }

  // Attach to form (if not using inline `onsubmit`)
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('form');
    if (form) {
      form.addEventListener('submit', handleFormSubmit);
    }
  });
</script>