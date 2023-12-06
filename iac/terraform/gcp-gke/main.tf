// Main configuration file for GKE cluster and necessary GCP services

// Create VPC module to define the network and subnetworks
module "vpc" {
  source        = "./modules/vpc"
  vpc_name      = "${var.resource_prefix}-vpc"
  project_id    = var.project_id
  ip_cidr_range = ["10.1.0.0/16"]
  regions       = [var.region]
}

// Create the GKE module to define the Kubernetes cluster and its config
module "gke" {
  source                 = "./modules/gke"
  cluster_name           = "${var.resource_prefix}-${var.region}-gke"
  project_id             = var.project_id
  location               = var.zones[0]
  network                = module.vpc.vpc_network_name
  subnetwork             = module.vpc.subnetworks_name[0]
  master_ipv4_cidr_block = "10.2.0.0/16"

  // GKE node pools config
  standard_16_node_count     = 1
  standard_16_node_disk_size = 80
}
