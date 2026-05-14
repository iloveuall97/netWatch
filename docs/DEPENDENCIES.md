# Recommended Dependencies

Rust (backend/core)
- tokio (async runtime)
- anyhow, thiserror (error handling)
- tracing, tracing-subscriber (observability)
- pcap (libpcap bindings) or libpcap-sys + npcap dependency for Windows capture
- pnet (packet parsing/low-level) or custom fast parsers
- nom (binary parsing) for protocol parsers
- rusqlite or sqlx (with sqlite feature) for SQLite access
- r2d2 or connection pooling utility where needed
- serde, serde_json (serialization)
- tonic (gRPC) or warp/axum for local HTTP+WebSocket API
- tonic-build / prost for gRPC proto generation
- windows / windows-sys crates for Windows API, WFP integration
- wintun (bindings) for TUN/VPN if needed
- once_cell, lazy_static
- parking_lot (locks)
- crossbeam or flume (channels)
- ringbuf (lock-free ring buffers) or custom

Frontend (Tauri + React + TS)
- tauri (native wrapper)
- react, react-dom
- typescript
- vite (fast dev server) or Tauri's bundling
- tailwindcss
- framer-motion
- cytoscape.js (topology)
- d3.js (visualizations)
- recharts or visx
- react-query or SWR (data caching)
- zustand or redux-toolkit (state management)
- axios or native fetch
- socket.io-client or @grpc/grpc-js for gRPC-web / websocket

Developer tools
- clang-format, rustfmt, cargo-audit
- clippy
- wasm-pack (if any wasm modules)
- GitHub Actions for CI, unit tests, integration tests

Native tools (installer/runtime)
- Npcap (for packet capture) - distribute via installer prerequisites or advise user to install
- Wintun (if using TUN-based enforcement)

Security & sandboxing
- wasm or process isolation for risky parsers
- sandboxed plugin runner using separate processes

