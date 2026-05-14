# System Architecture

This document describes the full system architecture for netWatch — a Windows-only network intelligence, monitoring, diagnostics and traffic control platform.

High-level goals
- Defensive/monitoring tool only
- High-performance Rust core using async Tokio and multithreading
- Native Windows integration for packet capture (Npcap), packet control (WFP), eventing (ETW, WMI)
- Modular, service-oriented architecture with a plugin SDK
- Tauri-based native desktop UI (React + TypeScript) communicating with backend via secure local channels

Components

1. Frontend (Tauri + React)
   - Single-window native app built with Tauri for OS integrations and native packaging
   - Hardware-accelerated UI using WebGL/CSS, animated dashboards with Framer Motion
   - Communicates with backend via secure WebSocket or gRPC over loopback
   - Responsibilities: visualization, policy editor, topology, packet viewer UI, user flows

2. Backend/Daemon (Rust)
   - Multi-service architecture: core-engine, network-scanner, packet-engine, traffic-analyzer, traffic-control, plugin-host, database access
   - Runs as a privileged service when needed (for WFP hooks). UI launches a user-level agent when admin not available.
   - Exposes a secure RPC API to the frontend (gRPC + TLS on loopback or Tauri's secure IPC invoking Rust commands)

3. Packet Capture & Decoding (packet-engine)
   - Uses libpcap bindings (Npcap driver required) via the pcap crate or direct NDIS/WFP capture where necessary
   - High-performance packet pipeline: capture -> demux -> decode -> classify -> persist/stream
   - Protocol parsers: HTTP(S) metadata, DNS, DHCP, ARP, ICMP, TCP/UDP, TLS metadata, QUIC detection
   - Stream reassembly for TCP flows and selected protocols (HTTP, SMB)

4. Network Scanner (network-scanner)
   - ARP scanner, ICMP sweeper, mDNS/SSDP/NetBIOS discovery, SNMP polls
   - Passive discovery via DHCP snooping, DNS logs
   - OS and service fingerprinting using banner grabs, TTL heuristics, TCP/IP fingerprint heuristics (non-offensive)

5. Traffic Analyzer & Policy Engine (traffic-analyzer + traffic-control)
   - Realtime classification (signature + ML-assisted heuristics) into categories: streaming, gaming, social, etc.
   - Policy engine supports permit/deny/throttle/redirect rules with priorities, schedules, profiles
   - Implementation leverages Windows Filtering Platform (WFP) for enforcement or local VPN/TUN (Wintun) when WFP insufficient

6. Windows Integration (windows-integration)
   - WFP for packet filtering and per-process traffic control
   - Windows Firewall APIs for rule management
   - WMI and ETW collectors for auxiliary telemetry
   - Named pipes, COM, or secure local RPC for privileged operations

7. Database (SQLite)
   - Local storage for device inventory, flow history, DNS logs, alerts, policies
   - Write-behind architecture with batching and WAL mode to minimize IO
   - Indexing strategies for time-series queries and full-text search (FTS5 for domain/name lookups)

8. Plugin System (plugin-sdk)
   - Plugins run in separate processes for isolation
   - Stable ABI/IPC (JSON-RPC over stdio, or gRPC) for analyzers, visual modules, or scanner extensions
   - Signing/permission model for third-party plugins

9. Security
   - Least-privilege principle: run non-privileged components as user processes
   - Privileged operations require elevation and are isolated
   - Input validation, parser sandboxing, safe Rust code, fuzz-testing for parsers

10. Telemetry & Logging
   - Local logs only by default; optional opt-in analytics
   - Structured logs (JSON) with levels, circular buffers for UI

Data Flow (simplified)
- Capture interface -> packet-engine -> decode/classify -> stream to both (1) realtime pub/sub to frontend and (2) persistent store
- Scanners populate device inventory and feed flow metadata to analyzer
- Policy engine subscribes to classification and flows, triggers WFP or TUN rule updates

Scalability & Performance
- Use lock-free ring buffers between capture threads and parser threads
- Batching database writes and indexes
- Backpressure from frontend via flow control over WebSocket/gRPC
- Offload heavy parsing to worker pool; keep capture kernel-to-user latency minimal

Delivery modes
- Installer MSI with optional driver components (Npcap, Wintun)
- Portable user-level installer with limited features (no WFP) without elevation

