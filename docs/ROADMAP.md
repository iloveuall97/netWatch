# Roadmap & Implementation Phases

Phase 0 — Discovery & Architecture (2–4 weeks)
- Finalize architecture and module boundaries
- Create proto/gRPC schemas and shared types
- CI pipelines and contributor guidelines
- Installer and packaging plan

Phase 1 — Core Capture & Storage (6–10 weeks)
- Implement packet-engine: capture, demux, basic parsers (Ethernet/IP/TCP/UDP/DNS)
- Build database schema and write-behind storage
- Expose a local RPC API for streaming captures

Phase 2 — Device Discovery & Inventory (4–6 weeks)
- Implement network-scanner: ARP, ICMP, mDNS, DHCP snooping
- Device inventory UI and DB integration

Phase 3 — Traffic Analyzer & Metrics (6–8 weeks)
- Protocol classification, top-talkers, per-device bandwidth
- Realtime dashboard metrics

Phase 4 — Traffic Control & Policy Engine (6–10 weeks)
- Implement rule engine, WFP integration, throttling, DNS filtering
- Policy UI and scheduling

Phase 5 — Packet Viewer, Export, and Reporting (4–6 weeks)
- PCAP export, packet viewer with stream follow
- Reports: CSV/JSON/HTML

Phase 6 — Plugin System & Advanced Features (6–10 weeks)
- Plugin SDK, signed plugin model
- Optional modules: WiFi analyzer, WHOIS, geolocation, Wake-on-LAN

Phase 7 — Hardening, Tests, Packaging, Beta (4–8 weeks)
- Fuzz testing parsers, stress tests, performance tuning
- Installer and code signing
- Documentation and enterprise packaging

Ongoing: UX polish, telemetry (opt-in), community feedback

Milestones and success criteria for each phase are described in docs/milestones.md (TODO).
