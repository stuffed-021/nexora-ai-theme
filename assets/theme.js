/**
 * NEXORA AI Storefront Core Nervous System Framework
 * Performance Engine Matrix - Vanilla ES6
 */

class NexoraThemeEngine {
  constructor() {
    this.initGlobalAnimations();
    this.initStickyCartWatcher();
    this.initAccessibilityFocusTrap();
  }

  // Pure CSS IntersectionObserver for high-framerate scroll reveals
  initGlobalAnimations() {
    const fadeElements = document.querySelectorAll('.animate-reveal, .glass-panel');
    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    fadeElements.forEach(el => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
      revealObserver.observe(el);
    });
  }

  // Global standard AJAX cart wrapper pipeline logic
  async modifyDeploymentManifest(variantId, quantity = 1) {
    const config = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ id: variantId, quantity: quantity })
    };

    try {
      const response = await fetch(`${window.routes.cart_add_url}.js`, config);
      if (!response.ok) throw new Error('Hardware transaction pipeline execution failure.');
      const cartData = await response.json();
      
      // Dispatch standard global event for update listeners (mini-cart drawers, counters)
      document.dispatchEvent(new CustomEvent('nexora:cart:updated', { detail: cartData }));
      return cartData;
    } catch (error) {
      console.error('Core Transaction Error:', error);
    }
  }

  initStickyCartWatcher() {
    const buyButton = document.querySelector('[name="add"]');
    const stickyPanel = document.querySelector('.sticky-action-bar');
    if (!buyButton || !stickyPanel) return;

    window.addEventListener('scroll', () => {
      const triggerCoords = buyButton.getBoundingClientRect().bottom;
      if (triggerCoords < 0) {
        stickyPanel.classList.add('is-active');
      } else {
        stickyPanel.classList.remove('is-active');
      }
    }, { passive: true });
  }

  initAccessibilityFocusTrap() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('user-is-tabbing');
      }
    });
  }
}

// Instantiate ecosystem control loops securely
document.addEventListener('DOMContentLoaded', () => {
  window.NexoraCore = new NexoraThemeEngine();
});
