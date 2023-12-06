// Output: GKE Cluster Endpoint
output "cluster_endpoint" {
  value = module.gke.cluster_endpoint
}

// Output: GKE Cluster Certificate
output "cluster_certificate" {
  value = module.gke.cluster_certificate
}
