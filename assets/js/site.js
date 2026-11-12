document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menu');
  const nav = document.querySelector('.nav');
  const dropdown = document.querySelector('.nav-dropdown');
  const toggle = dropdown?.querySelector('.nav-dropdown-toggle');
  const closeDropdown = () => {
    dropdown?.classList.remove('is-open');
    toggle?.setAttribute('aria-expanded','false');
  };
  const closeNav = () => {
    nav?.classList.remove('open');
    menuButton?.setAttribute('aria-expanded','false');
    menuButton?.setAttribute('aria-label','Open navigation');
    closeDropdown();
  };
  menuButton?.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded',String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    if (!isOpen) closeDropdown();
  });
  toggle?.addEventListener('click', () => {
    const isOpen = dropdown.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded',String(isOpen));
  });
  document.addEventListener('click',event => {
    if (dropdown && !dropdown.contains(event.target)) closeDropdown();
  });
  document.addEventListener('keydown',event => {
    if (event.key === 'Escape') { closeDropdown(); if (nav?.classList.contains('open')) closeNav(); }
  });
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click',closeNav));
});
