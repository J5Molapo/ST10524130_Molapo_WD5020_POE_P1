(() => {
  const duration = 3500;
  const halfDuration = duration / 2;
  const storageKey = "trailblazer-page-transition-start";
  const overlay = document.createElement("div");

  overlay.className = "page-transition";
  overlay.setAttribute("aria-hidden", "true");
  overlay.innerHTML = '<img src="Images_Resources/TrailBlazer Logo.png" alt="">';
  document.body.append(overlay);

  let transitionStartedAt = 0;
  try {
    transitionStartedAt = Number(sessionStorage.getItem(storageKey)) || 0;
    sessionStorage.removeItem(storageKey);
  } catch {
    // Continue without a page-load transition if browser storage is unavailable.
  }

  if (transitionStartedAt) {
    const remaining = Math.max(0, duration - (Date.now() - transitionStartedAt));
    if (remaining > 0) {
      overlay.style.setProperty("--transition-duration", `${remaining}ms`);
      overlay.classList.add("is-visible");
      requestAnimationFrame(() => {
        requestAnimationFrame(() => overlay.classList.remove("is-visible"));
      });
    }
  }

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[href]");
    if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (link.target && link.target !== "_self" || link.hasAttribute("download")) return;

    const destination = new URL(link.href, window.location.href);
    if (destination.origin !== window.location.origin || destination.pathname === window.location.pathname) return;
    if (!/\.html?$/i.test(destination.pathname)) return;

    event.preventDefault();
    try {
      sessionStorage.setItem(storageKey, String(Date.now()));
    } catch {
      window.location.assign(destination.href);
      return;
    }

    overlay.style.setProperty("--transition-duration", `${halfDuration}ms`);
    overlay.classList.add("is-visible");
    window.setTimeout(() => window.location.assign(destination.href), halfDuration);
  });
})();