# GKE Module

This Terraform module creates a Google Kubernetes Engine (GKE) cluster along with its associated resources.

## Overview

This module enables you to provision a GKE cluster on Google Cloud Platform (GCP) with ease. You can manage the GKE
control plane, node pools, and other configurations using Terraform.

## Procedure

- **Change the Kubernetes version in your Terraform file for your GKE Cluster resource:**
  Change the Kubernetes version in the `variables.tf` file for GKE Cluster resource and apply the configuration.
- **Verify the control plane has been upgraded:**
  Confirm the GKE control plane is at the desired version by checking in the GCP console or using the following CLI
  command:

  ```bash
  gcloud container clusters describe <cluster_name> --format="value(currentMasterVersion)"
  ```

- **Prepare your Terraform files for the new Node Groups:**
  Duplicate the GKE node groups one by one and change the Kubernetes version in the `variables.tf` file. Then, apply
  the newly created node group using `-target` Terraform flag (this step will create the new node group only).
- **Verify that the new Node Group is active:**
  The new node group will appear on the AWS console. Wait until the status of the new node group is `ACTIVE`.
- **Drain the old Node Group:**
  Use kubectl to drain all the nodes of the old node group. This will mark the node as unschedulable and evict the
  workloads.

  ```bash
  kubectl drain <node_name> --ignore-daemonsets
  ```

- **Delete the old Node Groups:**
  After ensuring that all workloads are moved and running correctly on the new Node Groups, delete the old Node Groups
  from your Terraform configuration file and apply the changes again. Confirm that the old Node Groups is deleted on the
  GCP console.

## Considerations for Maintenance

### Cron Jobs

If you have cron jobs running at specific times, it's crucial to ensure these jobs do not coincide with the node group
upgrade process. Cron jobs may fail or result in incomplete data if they are disrupted mid-execution. Before starting
the node upgrade, check the status and completion of these cron jobs.

### On Demand Writes

Since writes to services may occur on-demand, it's essential to ensure that:

No write operations are being initiated or are in progress during the GKE node upgrade. It's always advisable to be
cautious and ensure data integrity before performing maintenance.

## Notes

- Google Cloud Platform regularly updates the list of supported Kubernetes versions for GKE. You can find this list in
  the GCP documentation.
- During the upgrade process, ensure that there are no critical applications running that could be affected. Consider
  scheduling the upgrade during low-traffic periods if possible.
- GKE upgrades, especially for node pools, can take some time depending on the number of nodes and workloads running in
  the cluster.
