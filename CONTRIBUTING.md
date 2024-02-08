# Contributing to Warestack

Thank you for considering contributing to Warestack Blueprints! This repository serves as a collection of project
templates to help developers kickstart their projects. Whether you're adding a new seed, improving an existing one, or
simply fixing a typo, your contributions are greatly valued.

## Types of Contributions

We appreciate and accept various contributions, such as:

- New blueprints for different technology stacks.
- Improvements or updates to existing blueprints.
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

Ensure that your contributions do not break existing blueprints and are well-documented. New blueprints should be
accompanied by sufficient documentation for users to implement them effectively.

## Guidelines

### General

Keep these guidelines in mind when contributing:

- Code and configurations should be well-documented and maintainable.
- Describe in the PR what the changes are, their purpose, and any issues they address or enhancements they provide.
- Before submitting, test your changes thoroughly. Ensure they don't negatively impact existing blueprints.
- All PRs should be reviewed by at least one other contributor or maintainer.
- Avoid large monolithic PRs; keep them focused and modular.

### Git Branch Naming

Branch prefixes help to make it clear what the purpose of the PR branch is and make it easier for reviewers to
understand the changes being made. It's important to use consistent prefixes across all PR branches in the repository
to maintain a clear and organized codebase.

- `feature/`: New blueprints or significant enhancements to existing ones.
- `fix/`: Bug fixes or minor tweaks.
- `docs/`: Documentation improvements or additions.
- `refactor/`: Code or configuration changes that don't add new features.
- `test`: Adding or updating tests for blueprints.
- `chore/`: Miscellaneous tasks, dependency updates, etc.

- Examples:

- `feature/react-nginx-deployment`: Introducing a React.js seed with NGINX.
- `fix/mongo-config-issue`: Resolving a configuration issue with the MongoDB seed.
- `docs/mysql-setup`: Adding more clarity to the MySQL seed documentation.

_**Note: Commits directly on master are not accepted.**_

### Git Commit Messages

- Use **present tense** ("Add feature..." not "Added feature..").
- Use **imperative mood**  ("Change configuration..." not "Changes configuration...").
- Describe what you do and not how or why you do

The following are good examples for commit messages:

```txt
Introduce Express.js seed with PostgreSQL
Fix configuration inconsistency in Django seed
Update README for clearer implementation steps
```

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
- On our [Discord channel](https://discord.gg/mDQd2kcX).

## Code of Conduct

We uphold a standard of inclusivity, respect, and cooperation. Review our Code of Conduct to ensure a positive and
welcoming environment for all contributors.

Thank you for enriching Warestack Blueprints!
