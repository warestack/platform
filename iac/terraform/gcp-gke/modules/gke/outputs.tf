# Output: Cluster Name
output "cluster_name" {
  value       = google_container_cluster.cluster.name
  description = "The name of the GKE cluster that was created."
}

# Output: Cluster Endpoint
output "cluster_endpoint" {
  value       = google_container_cluster.cluster.endpoint
  description = "The endpoint URL for the GKE cluster's Kubernetes API server."
}

# Output: Cluster Certificate
output "cluster_certificate" {
  value       = google_container_cluster.cluster.master_auth[0].cluster_ca_certificate
  description = "The cluster CA certificate used for secure communication with the GKE cluster."
}

# Output: Service Account
output "service_account" {
  value       = google_service_account.service_account
  description = "The service account information created for GKE cluster operations."
}

# Output: GKE Cluster Information
output "gke" {
  value       = google_container_cluster.cluster
  description = "Detailed information about the GKE cluster, including its configuration."
}
