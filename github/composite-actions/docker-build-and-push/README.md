# Build and Push Docker Image Composite Action

This composite GitHub Action builds a Docker image from your repository and pushes it to any specified container
registry. It is versatile and can be used with various container registries like Docker Hub, Google Container Registry
(GCR), Azure Container Registry (ACR), or AWS Elastic Container Registry (ECR), assuming that authentication to the
registry is handled separately.

## Inputs

- `image-name`: The name of the Docker image to build and push. This is a required input.
- `registry-url`: The URL of the container registry where the image will be pushed. This is a required input.

## Outputs

- `image-tag`: The tag of the Docker image that was pushed to the container registry.

## Example Usage

Include this action in your workflow `.yaml` file by adding a step like the one shown below:

```yaml
steps:
  # ...
  # Other steps such as setting up the job, checking out the code, and logging into the registry
  # ...

  - name: Build and push Docker image to a registry
    uses: warestack/blueprints/ci-cd-and-automation/github/composite-actions/action.yaml@main
    with:
      image-name: 'sample-app'
      registry-url: ${{ steps.<login_step_id>.outputs.registry }}
```

Replace the `image-name` and `registry-url` with your image's name and your registry's URL, respectively. For AWS ECR,
this will typically be the output from the amazon-ecr-login action. For other registries, it will be the step that
performs the authentication and sets the registry URL.

## Notes

- The Docker build context is set to the root of your repository.
- The tag for the image is automatically generated using the short SHA of the commit and the current date and time.
- Ensure Docker is available in the runner environment where this action will be used.
- Authentication to the Docker registry should be handled in a step prior to using this action. For AWS ECR, use the
  `aws-actions/amazon-ecr-login` action. For other registries, follow the registry's recommended login procedure.

For a real-world usage example, see the [`example_workflow.yaml`](examples/example_workflow.yaml) in the examples
directory.

## Questions & Contributions

If you have any questions or wish to contribute, please open an issue or submit a pull request.
