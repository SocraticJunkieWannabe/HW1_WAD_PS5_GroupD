document.addEventListener('DOMContentLoaded', () => {
  const dropButton = document.getElementById('dropButton');
  const dropMenu   = document.getElementById('dropdownMenu');

  if (dropButton && dropMenu) {
    dropButton.addEventListener('click', (e) => {
      e.stopPropagation();
      dropMenu.classList.toggle('show');
    });

    document.addEventListener('click', () => {
      dropMenu.classList.remove('show');
    });
  }

  // --- Set username + email on dropdown open ---
  const nameEl  = document.getElementById('dropdownUsername');
  const emailEl = document.getElementById('dropdownEmail');

  if (nameEl)  nameEl.textContent  = "John Doe";
  if (emailEl) emailEl.textContent = "john.doe@ut.ee";
});
