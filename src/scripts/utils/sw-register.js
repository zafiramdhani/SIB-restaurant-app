const swRegister = async () => {
  if ('serviceWorker' in navigator) {
    await navigator.serviceWorker.register('/service-worker.js').then((registration) => {
      console.log('SW Registered: ', registration);
    }).catch((registrationError) => {
      console.log(`Service Worker is not supported in this browser ${registrationError}`);
    });
    // eslint-disable-next-line no-useless-return
    return;
  }
};

export default swRegister;
