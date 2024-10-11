# Contributing to Warestack Platform

Thank you for considering contributing to Warestack Platform! We welcome contributions that help improve our workflows,
composite actions, and overall project functionality.

## Types of Contributions

We appreciate and accept various contributions, such as:

- New workflows or composite actions for different technology stacks.
- Improvements or updates to existing ones.
- Documentation updates and clarifications.
- Bug fixes within the seed configurations or scripts.
- Typo fixes.

## How to Contribute

To ensure a smooth contribution process:

- **Fork** the repository to your own GitHub account.
- **Clone** the forked repository to your local machine.
- **Create a new branch** for your contributions. Name it descriptively.
- **Make your changes**, whether in code or documentation.
- **Commit** your changes to your branch. Adhere to the commit message guidelines provided below.
- **Push** your changes to your fork on GitHub.
- **Open a pull request (PR)** against the main repository. Please include a detailed description of your contribution.

Ensure that your contributions do not break existing ones and are well-documented. New ones should be
accompanied by sufficient documentation for users to implement them effectively.

## Guidelines

### General

Keep these guidelines in mind when contributing:

- Code and configurations should be well-documented and maintainable.
- Describe in the PR what the changes are, their purpose, and any issues they address or enhancements they provide.
- Before submitting, test your changes thoroughly. Ensure they don't negatively impact existing ones.
- All PRs should be reviewed by at least one other contributor or maintainer.
- Avoid large monolithic PRs; keep them focused and modular.

### Labels for Issues and PRs

When creating a PR, make sure to attach appropriate labels. This helps in categorizing and reviewing PRs efficiently:

- `bug`: Marks issues that are bugs needing to be fixed.
- `documentation`: Used for changes that update or improve documentation.
- `duplicate`: For issues or PRs that are duplicates of existing ones.
- `enhancement`: Indicates a feature improvement or enhancement.
- `good first issue`: Marks issues that are suitable for newcomers to the project.
- `help wanted`: Indicates that the project is seeking help on this issue or PR.
- `invalid`: For issues or PRs that are not valid or applicable.
- `wontfix`: Marks issues that will not be fixed or addressed.

## What Makes a Good PR?

- **Comprehensive Documentation**: Every reusable workflows and composite action should have a detailed README
  explaining how to set up, and use it.
- **Maintainability**: Code should be clean, readable, and modular.
- **Scalability**: Design reusable workflows and composite actions with scalability in mind, following best practices.
- **Security**: Basic security practices should be in place.
- **Community Driven**: We value and appreciate every PR. Community feedback and improvements help in refining the
  collection.

### Git Branch Naming

Branch prefixes help to make it clear what the purpose of the PR branch is and make it easier for reviewers to
understand the changes being made. It's important to use consistent prefixes across all PR branches in the repository
to maintain a clear and organized codebase.

- `feature/`: New composite action or significant enhancements to existing ones.
- `fix/`: Bug fixes or minor tweaks.
- `docs/`: Documentation improvements or additions.
- `refactor/`: Code or configuration changes that don't add new features.
- `test`: Adding or updating tests for existing ones.
- `chore/`: Miscellaneous tasks, dependency updates, etc.

Good examples for branch names:

- `feature/aws-eks-deployment`: Implementing deployment workflows for AWS EKS.
- `fix/docker-build-push`: Resolving issues with the Docker build and push action.
- `docs/helm-chart-usage`: Enhancing documentation for using Helm charts in deployments.

_**Note: Commits directly on main are not accepted.**_

### Git Commit Messages

- Use **present tense** ("Add feature..." not "Added feature..").
- Use **imperative mood**  ("Change configuration..." not "Changes configuration...").
- Describe what you do and not how or why you do

Good examples for commit messages:

- `Add reusable workflow for building and deploying Docker images`
- `Fix bug in AWS configuration action for EKS`
- `Update README to include usage examples for composite actions`

### Automated Checks via GitHub Actions

Our repository uses GitHub Actions to enforce quality checks on pull requests:

- **Markdown Linting:** Enforces a consistent style for our Markdown documentation using `markdownlint`.
- **Pre-commit Hooks:** Various pre-commit hooks are in place:
  - **Trailing Whitespaces and File Endings:** Ensure no trailing whitespace and files end with a newline.
  - **Spell Check:** Utilizes codespell to catch spelling mistakes.
  - **YAML/JSON Linting:** Validates the syntax of YAML and JSON configurations.

The following are good examples for commit messages:

These checks run automatically on every pull request. If they fail, you'll need to address the issues before your
changes can be merged. Please check the output of the failed GitHub Action for details on any failures.

## Getting Help

If you have any questions or need help contributing to this repository, please reach out to the maintainers through:

- The issue tracker.
- Organization Discussions in GitHub.
- On our [Discord channel](https://discord.gg/mDQd2kcX).

## Code of Conduct

We uphold a standard of inclusivity, respect, and cooperation. Review our Code of Conduct to ensure a positive and
welcoming environment for all contributors.

Thank you for enriching Warestack Platform!
