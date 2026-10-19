---
name: ushell-modulebase-development
description: Implementation-specific entry skill for UShell.ModuleBase.JS (npm ushell-modulebase), the U-Shell widget contract package (IWidget, IWidgetHost, UsecaseState, datasource/datastore interfaces). Use before changing code, build or docs in this repository. Contains only implementation details. The contract's target state and evolution rules live in the root skills of ProjectUShell/UShell.Docs, which must always be loaded as well.
---

# UShell.ModuleBase.JS - implementation details

> **This skill covers implementation details only.** The target state of the widget contract,
> compatibility rules and backlog live in **UShell.Docs** (root level of the U-Shell skill
> set). Always load them first:
>
> - `ushell-architecture` (mandatory root entry)
> - `ushell-widget-contract` (target state of everything in this package)
> - plus, depending on the task: `ushell-interaction-dynamics`, `ushell-data-auth-scope`, `ushell-module-development`
>
> Location: sibling checkout `../UShell.Docs/.agents/skills/<name>/SKILL.md`, otherwise
> https://github.com/ProjectUShell/UShell.Docs/tree/master/.agents/skills
>
> Design knowledge discovered while working here goes into those skills, not into this file.

## Repository layout

- `src/iWidget.ts`, `src/iWidgetHost.ts`, `src/usecaseState.ts` - widget contract.
- `src/iDataSource.ts`, `src/IDataStore.ts`, `src/IDataSourceManager.ts`, `src/DataSourceService.ts` - data abstractions on top of `fusefx-modeldescription` / `fusefx-repositorycontract`.
- `src/index.ts` - public exports.
- `doc/` - KVU versioning (`versioninfo.json`, `changelog.md`). **Never edit `doc/changelog.md`.**
- Build: `npm run build` (tsc).

## Local rules

- This package is consumed by the shell (ReactFrontend), CommonComponents and remote widgets compiled against **older** versions. Changes are additive only:
  - new members are optional (or detected at runtime),
  - existing members keep name, signature and semantics,
  - no React- or framework-specific types (the contract must stay usable for WebComponents).
- Every change here must be implemented in `ReactFrontend/.../WidgetHost.ts` and `CommonComponents/.../LocalWidgetHost.ts`.
- Reference backlog IDs (`UB-xx` from `UShell.Docs/doc/backlog.md`) in commit messages and PR descriptions.
