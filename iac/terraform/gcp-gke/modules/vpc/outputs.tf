// Output variables for the VPC Network module

output "vpc_network" {
  value       = google_compute_network.vpc_network.self_link
  description = "The self-link of the created VPC network."
}

output "vpc_network_name" {
  value       = google_compute_network.vpc_network.name
  description = "The name of the created VPC network."
}

output "subnetworks_name" {
  value       = google_compute_subnetwork.subnetwork[*].name
  description = "The self-links of the created subnetworks within the VPC network."
}
