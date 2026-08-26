// ORBIT background check-in — service worker.
// Honest scope: this can only show a generic, pre-written notification. It cannot run any of the
// app's real logic (no live streak/state data, no AI call) because none of that JS is loaded when
// the tab is closed. Clicking the notification opens/focuses the app, where ORBIT can actually help.

const CHECKIN_MESSAGES = [
  "Still going, sir? Worth a quick check-in.",
  "Your tracker's waiting whenever you're ready, sir.",
  "A few minutes today keeps the streak alive, sir.",
  "Checking in — anything to log from today, sir?"
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Fires on the browser's own schedule — Chrome/Edge only, app must be installed, and the browser
// (not this code) decides real timing based on how often you actually use the app.
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'orbit-checkin') {
    const msg = CHECKIN_MESSAGES[Math.floor(Math.random() * CHECKIN_MESSAGES.length)];
    event.waitUntil(
      self.registration.showNotification('ORBIT', {
        body: msg,
        icon: 'icon-192.png',
        tag: 'orbit-checkin',
        renotify: true
      })
    );
  }
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if ('focus' in client) return client.focus();
      }
      if (self.clients.openWindow) return self.clients.openWindow('./');
    })
  );
});
