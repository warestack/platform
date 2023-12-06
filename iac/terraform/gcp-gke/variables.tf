// Define variables for GKE cluster configuration

variable "credentials" {
  type        = string
  description = "Location of the service account keyfile."
  default     = "./credentials/service-account.json"
}

variable "project_id" {
  type        = string
  description = "The project ID to host the cluster in."
}

variable "region" {
  type        = string
  description = "The region to host the cluster in."
}

variable "zones" {
  type        = list(any)
  description = "The zones to host the cluster in."
}

variable "resource_prefix" {
  type        = string
  description = "The prefix for all provisioned resources."
}
