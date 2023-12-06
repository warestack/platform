resource "null_resource" "get_gke_credentials" {
  triggers = {
    always_run = timestamp()
  }
  provisioner "local-exec" {
    command = "gcloud container clusters get-credentials ${google_container_cluster.cluster.name} --zone ${var.location} --project ${var.project_id}"
  }
  depends_on = [google_container_cluster.cluster]
}
