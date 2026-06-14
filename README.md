<<<<<<< HEAD
# Dual-Language-Cross-Browser-Test-Framework

An enterprise-grade, multi-stack regression testing ecosystem designed to validate web applications concurrently across diverse browser engines. This repository maintains execution parity across two completely decoupled, production-ready technology stacks: **Playwright-Python (via Pytest)** and **Playwright-TypeScript**.

---

## Purpose of the framework

The primary objective of this repository is to implement matching end-to-end automated test journeys across two distinct programming languages and environments. By running identical test steps on the same web application, this framework serves as a direct professional blueprint comparing Pythonic testing layers with strongly typed Node.js environments.

### Core Capabilities:
* **True Cross-Browser Testing:** Executes automation simultaneously across **Chromium** (Chrome/Edge), **Firefox**, and **WebKit** (Safari) engines.
* **Multi-Environment Controls:** Parameterized CLI terminal switches allow engineers to seamlessly target different deployment environments (`dev`, `staging`, `prod`).
* **Session State & Auth Caching:** Optimizes performance by executing user login only once per execution window. Active session tokens and cookies are serialized to a local storage state (`auth.json`), bypassing repetitive authentication paths to accelerate run times.
* **Parallel Core Execution:** Distributes data matrices concurrently across multiple host CPU cores (`pytest-xdist` on Python, native parallel workers on TypeScript) to scale execution speed.
* **Automated Failure Diagnostics:** Automatically captures a high-resolution web viewport screenshot at the exact millisecond an assertion fails, immediately embedding the visual proof into localized HTML reporting dashboards.
=======
# Playwright-Dual-Stack

An enterprise-grade, multi-stack regression testing ecosystem designed to validate web applications concurrently across diverse browser engines. This repository maintains execution parity across two completely decoupled, production-ready technology stacks: Playwright-Python (via Pytest) and Playwright-TypeScript.

---

Purpose of the framework

The primary objective of this repository is to implement matching end-to-end automated test journeys across two distinct programming languages and environments. By running identical test steps on the same web application, this framework serves as a direct professional blueprint comparing Pythonic testing layers with strongly typed Node.js environments.

Core Capabilities:

True Cross-Browser Testing: Executes automation simultaneously across Chromium (Chrome/Edge), Firefox, and WebKit (Safari) engines.

Multi-Environment Controls: Parameterized CLI terminal switches allow engineers to seamlessly target different deployment environments (dev, staging, prod).

Session State & Auth Caching: Optimizes performance by executing user login only once per execution window. Active session tokens and cookies are serialized to a local storage state (auth.json), bypassing repetitive authentication paths to accelerate run times.

Parallel Core Execution: Distributes data matrices concurrently across multiple host CPU cores (pytest-xdist on Python, native parallel workers on TypeScript) to scale execution speed.

Automated Failure Diagnostics: Automatically captures a high-resolution web viewport screenshot at the exact millisecond an assertion fails, immediately embedding the visual proof into localized HTML reporting dashboards.
>>>>>>> 64266697def38c730704befa9f2745a16e6873c7
