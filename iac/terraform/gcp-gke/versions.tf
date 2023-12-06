# Define the required versions for terraform and necessary providers

terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 4.84.0"
    }
  }
  required_version = ">= 0.13"
}
