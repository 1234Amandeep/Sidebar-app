const closeBtn = document.querySelector('.close-btn');

const toggleBtn = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar')
});
toggleBtn.addEventListener('click', () => {
  if(sidebar.classList.contains('show-sidebar'))
  {
    sidebar.classList.remove('show-sidebar');
  }
  sidebar.classList.add('show-sidebar');
});
