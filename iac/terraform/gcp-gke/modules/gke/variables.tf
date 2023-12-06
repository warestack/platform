# Define variables for GKE cluster configuration

variable "project_id" {
  description = "The ID of the Google Cloud project where the GKE cluster will be created."
  type        = string
}

variable "cluster_name" {
  description = "The name of the cluster."
  type        = string
}

variable "location" {
  description = "The Google Cloud region where the GKE cluster will be located."
  type        = string
}

variable "network" {
  description = "The name of the VPC network for the GKE cluster."
  type        = string
}

variable "subnetwork" {
  description = "The name of the VPC subnetwork for the GKE cluster."
  type        = string
}

variable "master_ipv4_cidr_block" {
  description = "The IP range in CIDR notation to use for the hosted master network."
  type        = string
}

variable "master_version" {
  description = "The Kubernetes version for the GKE control plane."
  type        = string
  default     = "1.27.3-gke.100"
}

// END: GKE Cluster Configuration

// START: GKE Node Groups Configuration

variable "node_version" {
  description = "The Kubernetes version for the GKE nodes."
  type        = string
  default     = "1.27.3-gke.100"
}

variable "standard_32_node_count" {
  description = "Desired number of worker nodes in the standard-32 GKE node group."
  type        = number
  default     = 0
}

variable "standard_32_node_disk_size" {
  description = "Disk size of worker nodes in the standard-32 GKE node group."
  type        = number
  default     = 0
}

// END: GKE Node Groups Configuration
