# Warestack Platform Repository

![GitHub stars](https://img.shields.io/github/stars/warestack/platform?style=social)
![GitHub forks](https://img.shields.io/github/forks/warestack/platform?style=social)
![GitHub issues](https://img.shields.io/github/issues/warestack/platform)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Pre-commit hooks status](https://github.com/warestack/platform/workflows/pre-commit-hooks/badge.svg)](https://github.com/warestack/platform/actions)

Welcome to the Warestack Platform Repository! This repository serves as a collection of reusable workflows to help
developers kickstart their pipelines. This repository provides reusable GitHub Actions workflows and composite actions
for any kind of projects.

## What is Reusable Workflow?

A reusable workflow is a GitHub Actions workflow that can be called from another workflow. This allows you to define
common processes once and reuse them across multiple workflows, enhancing modularity and reducing duplication. By using
reusable workflows, teams can maintain consistency in their CI/CD processes and streamline their development pipeline.

### Example Reusable Workflow Use Case

For instance, you might have a reusable workflow for building and deploying applications that can be called from
different project-specific workflows.

### How to Use a Reusable Workflow

To use a reusable workflow, you can define a job in your workflow file that references the reusable workflow. Here’s
how to do it:

- **Define the Job:** Use the uses keyword to specify the path to the reusable workflow file in your repository.
- **Pass Inputs:** Provide any required inputs as defined in the reusable workflow. You can also pass secrets if needed.

Example Usage

Here’s an example of how to call the AWS Build, Push and Deploy to EKS with Helm reusable workflow:

```yaml
jobs:
  deploy:
    uses: warestack/platform/.github/workflows/aws-build-push-and-deploy-to-eks-with-helm.yaml@main
    with:
      environment: 'dev'  # or 'prod'
      region: 'us-west-2'
      image_name: 'my-app'
      release_name: 'my-app-release'
      eks_cluster: 'my-eks-cluster'
      namespace: 'my-namespace'
      public_url: 'myapp.example.com'
      port: 80
      helm_path: './chart/my-app'
    secrets:
      AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
      AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
```

## What is a Composite Action?

A composite action is a type of GitHub Action that allows you to combine multiple steps and scripts into a single
reusable action. This enhances modularity and reusability, enabling developers to encapsulate complex logic or processes
that can be reused across workflows. Composite actions are particularly useful for grouping related commands or steps
that are often used together.

### Example Composite Action Use Case

For example, a composite action might handle the setup of a Docker environment, including building an image, tagging it,
and pushing it to a container registry.

### How to Use a Composite Action

To use a composite action in your workflow, follow these steps:

- **Define the Step:** Use the uses keyword to specify the path to the composite action in your repository.
- **Pass Inputs:** Provide any required inputs as defined in the composite action.

Example Usage

Here’s an example of how to use the Docker Build and Push composite action:

```yaml
steps:
  - name: Build and push Docker image
    uses: warestack/platform/github/composite-actions/docker-build-and-push@v1.0.0
    with:
      environment: 'dev'  # or 'prod'
      registry_url: '123456789012.dkr.ecr.us-west-2.amazonaws.com'
      image_name: 'my-app'
```

## Contributing

We believe in the power of the community. If you've built or want to build a reusable workflow or composite action that
isn't yet in this repository, we'd love for you to contribute.
Check out our [Contributing Guide](./CONTRIBUTING.md) to get started.

## Resources

- [Warestack Official Documentation](https://www.warestack.com/documentation)
- [Warestack Community Discord](https://discord.gg/pqg5sxhx6Y)
- [Warestack Platform](https://www.warestack.com/)

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
