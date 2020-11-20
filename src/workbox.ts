export const IS_DEVELOP = process.env.NODE_ENV !== 'production';

export function registerServiceWorkers() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      console.log('serviceWorker register');
      navigator.serviceWorker.register('/service-worker.js');
    });
  }
}

export function unregisterServiceWorkers() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      console.log('serviceWorker unregister');
      registration.unregister();
    });
  }
}

export function initializeServiceWorkers() {
  if (IS_DEVELOP) {
    unregisterServiceWorkers();
  } else {
    registerServiceWorkers();
  }
}
