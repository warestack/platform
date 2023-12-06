// Enable the Identity-Aware Proxy (IAP) API

resource "google_project_service" "iap-api" {
  service            = "iap.googleapis.com"
  disable_on_destroy = false
}
