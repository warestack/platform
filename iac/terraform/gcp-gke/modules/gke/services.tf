# Enable required Google Cloud services

resource "google_project_service" "compute" {
  service            = "compute.googleapis.com"
  disable_on_destroy = false
}

resource "google_project_service" "container" {
  service            = "container.googleapis.com"
  disable_on_destroy = false
}

resource "google_project_service" "trace" {
  service            = "cloudtrace.googleapis.com"
  disable_on_destroy = false
}
