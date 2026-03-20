function showTab(tabId) {

  // hide all
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
  });

  // show selected
  document.getElementById(tabId).classList.add('active');

}