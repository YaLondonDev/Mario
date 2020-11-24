export const IS_DEV = process.env.NODE_ENV !== 'production';

export function registerServiceWorkers() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js');
    });
  }
}

export function unregisterServiceWorkers() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister();
    });
  }
}

export function initializeServiceWorkers() {
  if (IS_DEV) {
    unregisterServiceWorkers();
  } else {
    registerServiceWorkers();
  }
}
