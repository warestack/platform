// Create a Google Compute VPC Network

resource "google_compute_network" "vpc_network" {
  name    = var.vpc_name
  project = var.project_id

  auto_create_subnetworks                   = false
  network_firewall_policy_enforcement_order = "AFTER_CLASSIC_FIREWALL"
}

// Define subnetworks within the VPC Network
resource "google_compute_subnetwork" "subnetwork" {
  count         = length(var.regions)
  name          = "${var.vpc_name}-subnet-${var.regions[count.index]}"
  ip_cidr_range = var.ip_cidr_range[count.index]
  region        = var.regions[count.index]
  network       = google_compute_network.vpc_network.self_link

  secondary_ip_range {
    range_name    = "k8s-pod-range"
    ip_cidr_range = "10.2.0.0/16"
  }

  secondary_ip_range {
    range_name    = "k8s-svc-range"
    ip_cidr_range = "10.3.0.0/16"
  }

  log_config {
    aggregation_interval = "INTERVAL_10_MIN"
    flow_sampling        = 0.5
    metadata             = "INCLUDE_ALL_METADATA"
  }

  private_ip_google_access = true
  #  private_ipv6_google_access = "ENABLE_OUTBOUND_VM_ACCESS_TO_GOOGLE" // Changed from "DISABLE_GOOGLE_ACCESS
}

// Define a firewall rule for the VPC Network
resource "google_compute_firewall" "firewall" {
  name    = "${var.vpc_name}-firewall"
  network = google_compute_network.vpc_network.self_link

  allow {
    protocol = "tcp"
    ports    = ["80"]
  }

  source_ranges = [
    "130.211.0.0/22",
    "35.191.0.0/16"
  ]
}
