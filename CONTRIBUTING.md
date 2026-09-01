# Contributing to Playwright-Dual-Stack

Thank you for your interest in contributing to this project! This document provides guidelines and instructions for contributing.

## How to Contribute

### Reporting Bugs

1. **Check existing issues** - Search the [issues](../../issues) to avoid duplicates
2. **Provide detailed information:**
   - Clear, descriptive title
   - Detailed description of the problem
   - Steps to reproduce
   - Expected vs actual behavior
   - Environment details (OS, Python/Node version, browser versions)
   - Relevant code snippets or logs

### Suggesting Enhancements

1. **Use the Issues tab** to suggest new features
2. **Describe the enhancement:**
   - Clear use case
   - How it benefits the project
   - Possible implementation approach
3. **Be open to discussion** about the feature's scope and design

### Submitting Pull Requests

#### Setup Development Environment

**For Python:**
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

**For TypeScript/JavaScript:**
```bash
npm install
# or
yarn install
```

#### Code Style Guidelines

- **Python:** Follow [PEP 8](https://www.python.org/dev/peps/pep-0008/)
  - Use 4 spaces for indentation
  - Max line length: 100 characters
  - Use descriptive variable/function names

- **TypeScript/JavaScript:** Follow [Airbnb style guide](https://github.com/airbnb/javascript)
  - Use 2 spaces for indentation
  - Use semicolons
  - Use meaningful variable names

#### Testing Requirements

- Write tests for new features
- Ensure all tests pass before submitting PR
- Maintain or improve code coverage

**Python:**
```bash
pytest
```

**TypeScript/JavaScript:**
```bash
npm test
```

#### Commit Messages

Follow conventional commit format:
```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:** feat, fix, docs, style, refactor, perf, test, chore

**Example:**
```
feat(auth): add login validation

Added email and password validation before submission

Closes #123
```

#### PR Submission Checklist

- [ ] Code follows style guidelines
- [ ] All tests pass
- [ ] New tests added for new features
- [ ] Documentation updated
- [ ] Changes have been tested locally
- [ ] PR description clearly describes changes
- [ ] No unrelated changes included

## Development Workflow

1. **Fork the repository**
2. **Create a feature branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Test thoroughly**
5. **Commit with clear messages**
6. **Push to your fork**
7. **Submit a Pull Request**

## Code Review Process

- At least one maintainer review required
- Address feedback constructively
- Keep discussions professional and focused
- PR will be merged once approved and tests pass

## Project Structure

- `/src` - Source code
- `/tests` - Test files
- `/docs` - Documentation
- `/examples` - Example scripts

## Questions?

- Open an [issue](../../issues) for questions
- Check existing documentation
- Review previous issues/PRs for similar topics

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

Thank you for contributing! 🎉
