const CACHE_NAME = 'plattano-v1'
const STATIC_CACHE_NAME = 'plattano-static-v1'
const IMAGE_CACHE_NAME = 'plattano-images-v1'

// Resources to cache immediately
const STATIC_RESOURCES = [
  '/',
  '/manifest.json',
  '/images/home/high-tech-background-light.webp',
  '/images/home/high-tech-background-dark.webp'
]

// Install event - cache static resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE_NAME).then((cache) => {
        return cache.addAll(STATIC_RESOURCES)
      })
    ])
  )
  self.skipWaiting()
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => {
            return ![
              CACHE_NAME,
              STATIC_CACHE_NAME,
              IMAGE_CACHE_NAME
            ].includes(cacheName)
          })
          .map((cacheName) => caches.delete(cacheName))
      )
    })
  )
  self.clients.claim()
})

// Fetch event - serve from cache with network fallback
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Handle different types of requests
  if (request.destination === 'image') {
    event.respondWith(handleImageRequest(request))
  } else if (url.pathname.startsWith('/_next/static/')) {
    event.respondWith(handleStaticAssets(request))
  } else if (request.mode === 'navigate') {
    event.respondWith(handleNavigationRequest(request))
  } else {
    event.respondWith(handleOtherRequests(request))
  }
})

// Handle image requests with cache-first strategy
async function handleImageRequest(request) {
  const cache = await caches.open(IMAGE_CACHE_NAME)
  const cachedResponse = await cache.match(request)
  
  if (cachedResponse) {
    return cachedResponse
  }
  
  try {
    const networkResponse = await fetch(request)
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone())
    }
    return networkResponse
  } catch (error) {
    console.log('Image fetch failed:', error)
    return new Response('Image not available', { status: 404 })
  }
}

// Handle static assets with cache-first strategy
async function handleStaticAssets(request) {
  const cache = await caches.open(STATIC_CACHE_NAME)
  const cachedResponse = await cache.match(request)
  
  if (cachedResponse) {
    return cachedResponse
  }
  
  try {
    const networkResponse = await fetch(request)
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone())
    }
    return networkResponse
  } catch (error) {
    return new Response('Asset not available', { status: 404 })
  }
}

// Handle navigation requests with network-first strategy
async function handleNavigationRequest(request) {
  try {
    const networkResponse = await fetch(request)
    const cache = await caches.open(CACHE_NAME)
    cache.put(request, networkResponse.clone())
    return networkResponse
  } catch (error) {
    const cache = await caches.open(CACHE_NAME)
    const cachedResponse = await cache.match(request)
    return cachedResponse || new Response('Page not available offline', {
      status: 404,
      headers: { 'Content-Type': 'text/html' }
    })
  }
}

// Handle other requests with network-first strategy
async function handleOtherRequests(request) {
  try {
    return await fetch(request)
  } catch (error) {
    const cache = await caches.open(CACHE_NAME)
    return await cache.match(request) || new Response('Resource not available', {
      status: 404
    })
  }
}