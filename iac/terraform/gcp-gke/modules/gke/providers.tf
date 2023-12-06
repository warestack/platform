# Define the Google Cloud and Kubernetes providers

provider "kubernetes" {
  host                   = "https://${data.google_container_cluster.cluster.endpoint}"
  token                  = data.google_client_config.google_client.access_token
  cluster_ca_certificate = base64decode(data.google_container_cluster.cluster.master_auth[0].cluster_ca_certificate)
}

# Import Google Client Configuration and GKE Cluster Data
data "google_client_config" "google_client" {}

data "google_container_cluster" "cluster" {
  name     = google_container_cluster.cluster.name
  location = var.location
}
