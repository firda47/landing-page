document.addEventListener('DOMContentLoaded', () => {
  const yearEls = document.querySelectorAll('.js-year');
  const year = new Date().getFullYear();
  yearEls.forEach(el => {
    el.textContent = year;
  });

  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === current) {
      link.classList.add('active');
    }
  });

  const isSamePage = targetUrl => targetUrl.pathname === window.location.pathname && targetUrl.search === window.location.search;
  const isInternalLink = href => {
    if (!href || href.startsWith('#')) return false;
    if (href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) return false;
    return true;
  };

  document.querySelectorAll('a[href]').forEach(link => {
    link.addEventListener('click', event => {
      if (link.target === '_blank') return;
      const href = link.getAttribute('href');
      if (!isInternalLink(href)) return;

      let targetUrl;
      try {
        targetUrl = new URL(href, window.location.href);
      } catch {
        return;
      }

      if (targetUrl.origin !== window.location.origin || isSamePage(targetUrl)) return;
      event.preventDefault();
      document.body.classList.add('page-fade-out');
      setTimeout(() => {
        window.location.href = targetUrl.href;
      }, 250);
    });
  });
});
