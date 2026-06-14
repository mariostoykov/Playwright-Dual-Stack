# Playwright-Dual-Stack

An enterprise-grade, multi-stack regression testing ecosystem designed to validate web applications concurrently across diverse browser engines. This repository maintains execution parity across two completely decoupled, production-ready technology stacks: **Playwright-Python (via Pytest)** and **Playwright-TypeScript**.

---

## Purpose & What the Framework Does

The primary objective of this repository is to implement matching end-to-end automated test journeys across two distinct programming languages and environments. By running identical test steps on the same web application, this framework serves as a direct professional blueprint comparing Pythonic testing layers with strongly typed Node.js environments.

### Core Capabilities:
* **True Cross-Browser Testing:** Executes automation simultaneously across **Chromium** (Chrome), **Firefox**, and **Webkit** (Safari) platforms.
* **Multi-Environment Controls:** Parameterized CLI terminal switches allow engineers to seamlessly target different deployment environments (`dev`, `staging`, `prod`).
* **Session State & Auth Caching:** Optimizes performance by executing user login only once per execution window. Active session tokens and cookies are serialized to `auth.json`, bypassing repetitive authentication paths to accelerate run times.
* **Parallel Core Execution:** Distributes data matrices concurrently across multiple host CPU cores (`pytest-xdist` on Python, native parallel workers on TypeScript) to scale execution speed.
* **Automated Failure Interceptors:** Automatically captures a high-resolution web viewport screenshot at the exact millisecond an assertion fails, immediately attaching it to visual HTML reporting dashboards.
