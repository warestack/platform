resource "google_container_node_pool" "e2_standard_16" {
  name       = "e2-standard-16"
  cluster    = google_container_cluster.cluster.name
  location   = var.location
  version    = var.node_version
  node_count = var.standard_32_node_count

  management {
    auto_repair  = true
    auto_upgrade = true
  }

  max_pods_per_node = 32

  node_config {
    disk_size_gb = var.standard_32_node_disk_size
    disk_type    = "pd-standard"
    image_type   = "COS_CONTAINERD"
    machine_type = "e2-standard-16"

    metadata = {
      disable-legacy-endpoints = "true"
    }

    preemptible = true

    oauth_scopes    = local.scopes
    service_account = google_service_account.service_account.email

    shielded_instance_config {
      enable_integrity_monitoring = true
      enable_secure_boot          = true
    }

    workload_metadata_config {
      mode = "GKE_METADATA"
    }
  }

  upgrade_settings {
    max_surge       = 1
    max_unavailable = 0
    strategy        = "SURGE"
  }

}
