# Project folder structure

Top-level layout (initial):

/
├─ README.md
├─ Cargo.toml (workspace)
├─ package.json (frontend workspace)
├─ .gitignore
├─ docs/
│  ├─ ARCHITECTURE.md
│  ├─ ROADMAP.md
│  ├─ DEPENDENCIES.md
│  ├─ UI_WIREFRAMES.md
├─ core-engine/
│  ├─ Cargo.toml
│  └─ src/
│     └─ lib.rs
├─ network-scanner/
│  └─ (scanner code)
├─ packet-engine/
│  └─ (capture + parsers)
├─ traffic-analyzer/
├─ windows-integration/
├─ traffic-control/
├─ plugin-sdk/
├─ database/
├─ backend-api/
├─ frontend/
│  ├─ package.json
│  └─ src/
│     └─ main.tsx
├─ shared-types/
├─ assets/
└─ docs/

Each module is a crate (or workspace member) in the top-level Cargo workspace for Rust components. The frontend is a Tauri app using React/TypeScript.
