# Define the required versions for terraform and necessary providers of this module

terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 4.84.0"
    }

    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = "~> 2.21.1"
    }

    null = {
      source  = "hashicorp/null"
      version = "~> 3.2.1"
    }
  }

  required_version = ">= 1.3.0"
}
