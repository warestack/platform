# Define a Google Cloud router for each subnetwork
resource "google_compute_router" "cloud_nat_router" {
  # Create one router for each subnetwork
  count   = length(google_compute_subnetwork.subnetwork)
  name    = "cloud-nat-router-${google_compute_subnetwork.subnetwork[count.index].name}"
  region  = google_compute_subnetwork.subnetwork[count.index].region
  network = google_compute_network.vpc_network.self_link

  # Define BGP settings (note that ASN is hard-coded here)
  bgp {
    asn = 64514
  }
}

# Define a NAT configuration for each router
resource "google_compute_router_nat" "nat" {
  # Create one NAT config for each router
  count  = length(google_compute_subnetwork.subnetwork)
  name   = google_compute_router.cloud_nat_router[count.index].name
  router = google_compute_router.cloud_nat_router[count.index].name
  region = google_compute_router.cloud_nat_router[count.index].region

  # Automatically allocate NAT IPs
  nat_ip_allocate_option             = "AUTO_ONLY"
  source_subnetwork_ip_ranges_to_nat = "ALL_SUBNETWORKS_ALL_IP_RANGES"

  # Log configuration (logging is disabled, only errors are logged)
  log_config {
    enable = false
    filter = "ERRORS_ONLY"
  }
}

# Execute an external script to fetch NAT IPs
#data "external" "nat_ips" {
#  program = [
#    "C:/Program Files/Git/bin/bash.exe",
#    "${path.module}/templates/nat_ips.sh"
#  ]
#}
