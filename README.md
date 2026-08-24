# Playwright Dual-Stack Test Framework

[![Dual-stack CI](https://github.com/mariostoykov/Playwright-dual-stack/actions/workflows/playwright-tests.yml/badge.svg)](https://github.com/mariostoykov/Playwright-dual-stack/actions/workflows/playwright-tests.yml)
![Browsers](https://img.shields.io/badge/browsers-Chromium%20%7C%20Firefox%20%7C%20WebKit-2f855a)
![Stacks](https://img.shields.io/badge/stacks-TypeScript%20%7C%20Python-3178c6)

A cross-browser web test framework that implements comparable Sauce Demo journeys in Playwright TypeScript and Playwright Python with Pytest. It demonstrates the engineering practices expected in a professional QA automation project: page objects, authenticated session state, data-driven coverage, reproducible dependencies, and CI evidence.

## Project snapshot

| Area | Implementation |
|---|---|
| Application under test | Sauce Demo public web application |
| Automation stacks | Playwright Test with TypeScript; Playwright with Python and Pytest |
| Browser coverage | Chromium, Firefox, and WebKit |
| Authentication | Runtime login with locally generated storage state |
| CI | GitHub Actions on `main` pushes, pull requests, and manual runs |
| Evidence | HTML reports, screenshots, and traces retained as artifacts |

## Why this project matters

The same business journeys are implemented in two languages, making the design choices directly comparable. The framework shows how a QA engineer can separate page behavior from test intent, protect session state, parameterize environments, run tests across browser engines, and preserve failure evidence for review.

## What it covers

- Chromium, Firefox, and WebKit execution in both stacks.
- Smoke coverage for the login page.
- Successful and unsuccessful login scenarios.
- Authenticated inventory access using saved browser state.
- Dynamic environment and credential configuration.
- HTML reports, screenshots, and failure traces in CI.

## Repository structure

| Path | Purpose |
|---|---|
| `playwright-js/` | TypeScript Playwright project with page objects, setup, tests, and its own npm lockfile. |
| `playwright-python/` | Python Playwright/Pytest project with page objects, fixtures, tests, and pinned requirements. |
| `.github/workflows/playwright-tests.yml` | Runs both stacks on pushes and pull requests to `main`, or manually. |

## Test architecture

Both stacks contain equivalent journeys:

- `health`/smoke: verifies the application opens and has the expected title.
- `login`: validates valid users, locked-out users, special users, and invalid credentials.
- `inventory`: validates that an authenticated user can open the inventory page.

The TypeScript login matrix is stored in `playwright-js/tests/data/login-scenarios.ts`. Both stacks use page objects for login and inventory interactions. Authentication state is generated at runtime and ignored by Git; it is never intended to be committed.

## Local setup

### TypeScript

```bash
cd playwright-js
npm ci
npx playwright install
npm test
```

### Python

Use Python 3.11 or newer:

```bash
cd playwright-python
python -m venv .venv
python -m pip install -r requirements.txt
python -m playwright install
python -m pytest --browser chromium --browser firefox --browser webkit --env prod
```

## Configuration

The default application is Sauce Demo. Override it without editing source code:

```text
BASE_URL=https://www.saucedemo.com
SAUCE_USERNAME=standard_user
SAUCE_PASSWORD=secret_sauce
```

Python also accepts `DEV_BASE_URL` and `STAGING_BASE_URL`. The `--env` option selects `dev`, `staging`, or `prod`; all default to the known public URL until real environments are supplied.

## Continuous integration

GitHub Actions runs two independent jobs from `.github/workflows/playwright-tests.yml`:

1. Python installs `playwright-python/requirements.txt`, installs Chromium, Firefox, and WebKit, then runs Pytest.
2. TypeScript runs `npm ci` inside `playwright-js`, installs browsers, then runs Playwright tests.

Each job uploads its HTML report as a seven-day artifact. The TypeScript job also uploads `test-results` containing failure screenshots and traces.

Open the [GitHub Actions workflow](https://github.com/mariostoykov/Playwright-dual-stack/actions/workflows/playwright-tests.yml) to inspect runs and download artifacts.

## Known limitations

- Sauce Demo is an external public site and may be unavailable or change behavior.
- Python execution could not be validated locally on the development machine because Python was not installed; CI is the execution environment for that stack.
- The framework validates UI behavior and selected error messages; it is not a performance or load-testing system.

Repository: https://github.com/mariostoykov/Playwright-dual-stack
