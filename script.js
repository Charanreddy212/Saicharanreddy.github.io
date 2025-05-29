document.getElementById('editToggle').addEventListener('click', () => {
  const password = prompt("Enter edit mode password:");
  if (password === "212") {
    alert("Edit Mode Enabled! You can now edit text directly.");
    document.querySelectorAll('[contenteditable]').forEach(el => {
      el.setAttribute('contenteditable', 'true');
      el.style.borderBottom = "1px dashed #007bff";
    });
  } else {
    alert("Incorrect password. Access denied.");
  }
});
