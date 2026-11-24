/* EXIF 프레임 — 서비스 워커
 *
 * 목적: 안드로이드 Chrome이 '앱 설치'(WebAPK)를 제공하려면 fetch를 처리하는
 *       서비스 워커가 있어야 합니다. 이 앱은 사진을 브라우저 안에서만 처리하므로
 *       오프라인 캐시는 두지 않습니다. (항상 최신 index.html을 그대로 받아옵니다)
 *       그래서 새 버전을 올려도 예전 화면이 남는 문제가 생기지 않습니다.
 */
self.addEventListener('install', function (event) {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function (event) {
  // 그대로 네트워크로 넘깁니다 (캐시하지 않음 → 항상 최신 버전).
  event.respondWith(fetch(event.request));
});
