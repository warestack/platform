resource "google_container_cluster" "cluster" {
  name               = var.cluster_name
  project            = var.project_id
  location           = var.location
  min_master_version = var.master_version

  resource_labels = {
    "provider" = "gcp"
    "tier"     = "free"
  }

  # We can't create a cluster with no node pool defined, but we want to only use
  # separately managed node pools. So we create the smallest possible default
  # node pool and immediately delete it.
  remove_default_node_pool = true
  initial_node_count       = 1

  release_channel {
    channel = "STABLE"
  }

  network    = var.network
  subnetwork = var.subnetwork

  enable_l4_ilb_subsetting = false

  binary_authorization {
    evaluation_mode = "PROJECT_SINGLETON_POLICY_ENFORCE"
  }

  master_auth {
    client_certificate_config {
      issue_client_certificate = false
    }
  }

  default_max_pods_per_node = 32

  ip_allocation_policy {
    cluster_secondary_range_name  = "k8s-pod-range"
    services_secondary_range_name = "k8s-svc-range"
  }

  network_policy {
    enabled  = true
    provider = "PROVIDER_UNSPECIFIED" // Consider setting the value to "CALICO"
  }

  enable_intranode_visibility = true

  private_cluster_config {
    enable_private_nodes    = true
    enable_private_endpoint = false
    master_ipv4_cidr_block  = var.master_ipv4_cidr_block
  }

  workload_identity_config {
    workload_pool = "${var.project_id}.svc.id.goog"
  }

  node_config {
    shielded_instance_config {
      enable_integrity_monitoring = true
      enable_secure_boot          = true
    }

    workload_metadata_config {
      mode = "GCE_METADATA"
    }

  }

  depends_on = [google_project_service.compute, google_project_service.container]
}
