# gcp-gke

This blueprint helps you kickstart the provisioning of a Google Kubernetes Engine (GKE) cluster on Google Cloud Platform
(GCP) along with the necessary service using Terraform. It is designed to streamline the setup process, allowing you to
focus on deploying and managing your Kubernetes applications.

## Getting Started

- Navigate to the `infrastructure/terraform/gcp-gke` directory within the `blueprints` repository.
- Configure your Google Cloud environment by following the Terraform setup instructions provided in the README.
- Ensure you have a Google Cloud account with the necessary permissions and billing set up.
- Install Terraform on your local machine and initialize it in the directory of your chosen example.
- Apply the Terraform configuration to provision your GKE cluster on GCP.

## Dependencies

This blueprint uses:

- [Terraform](https://www.terraform.io/): An open-source infrastructure as code software tool that provides a consistent
  CLI workflow to manage hundreds of cloud services.
- [Google Kubernetes Engine](https://cloud.google.com/kubernetes-engine?hl=en): A managed, production-ready environment
  for running containerized applications on Google Cloud.

## Local Development

To use this blueprint:

- Set up your GCP credentials.
  - Obtain a service account key file from Google Cloud.
  - Place the key file in the `./credentials` directory within your local blueprint project.
  - Ensure the key file is named `service-account.json`. This should match the path specified in your Terraform
    configurations.
- Create the `variables.auto.tfvars` file by the `variables.auto.tfvars.example` as a reference and define the values
  that match your GCP setup.
- Run `terraform init` to initialize the Terraform configuration.
- Plan your deployment with `terraform plan`.
- Apply the configuration with `terraform apply`.

## Questions & Contributions

If you have any questions or wish to contribute, please open an issue or submit a pull request.
