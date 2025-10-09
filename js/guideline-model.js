const modals = document.querySelectorAll('.modal');
  const openButtons = [
    ['openPaper', 'modalPaper'],
    ['openManuscript', 'modalManuscript'],
    ['openConference', 'modalConference'],
    ['openInstitution', 'modalInstitution'],
    ['openDepartment', 'modalDepartment'],
    ['openPolicies', 'modalPolicies'],
    ['openScopus', 'modalScopus']
  ];

  openButtons.forEach(([btnId, modalId]) => {
    const btn = document.getElementById(btnId);
    const modal = document.getElementById(modalId);
    const closeBtn = modal.querySelector('.close-btn');

    btn.onclick = () => modal.style.display = 'flex';
    closeBtn.onclick = () => modal.style.display = 'none';
  });

  window.onclick = function(e) {
    modals.forEach(m => { if (e.target === m) m.style.display = 'none'; });
  };