terraform {
  backend "gcs" {
    prefix      = "terraform/state"
    credentials = "./credentials/service-account.json"
  }
}
