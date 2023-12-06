// Input variables for the VPC Network module

variable "project_id" {
  description = "The project ID to create the VPC network in."
  type        = string
}

variable "vpc_name" {
  description = "The name to be used for the VPC network."
  type        = string
}

variable "regions" {
  description = "The regions to create the VPC network in."
  type        = list(any)
}

variable "ip_cidr_range" {
  description = "The range of IP addresses belonging to the subnetwork."
  type        = list(any)
}
