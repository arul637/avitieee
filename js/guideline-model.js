const modals = document.querySelectorAll('.modal');
  const openButtons = [
    ['manuscript-preparation', 'open-manuscript-preparation'],
    ['paper-submission', 'open-paper-submission'],
    ['plagiarism-policy', 'open-plagiarism-policy'],
    ['ethical-statement', 'open-ethical-statement'],
    ['review-policy', 'open-review-policy'],
    ['publication-policy', 'open-publication-policy']
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