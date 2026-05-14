# UI Wireframe Concepts

Design language
- Cyberpunk-inspired, dark theme, gold accents, glassmorphism
- Smooth transitions (Framer Motion), animated telemetry
- Dashboard is modular and draggable

Primary views

1) Main Dashboard
- Top header: connection status, active profile, global search
- Big KPI tiles: total bandwidth (live), upload/download, active devices, suspicious alerts
- Realtime charts: bandwidth over time, protocol pie chart
- Alerts timeline on right, activity feed at bottom

2) Topology View
- Interactive graph (Cytoscape): subnets, switches, devices
- Click a device to open device drawer with details
- Animated traffic flows between nodes

3) Device Details
- Overview: IP, MAC, name, vendor, OS
- Live metrics: bandwidth, sessions, recent DNS queries
- Controls: pause internet, block domains, throttle slider, apply profile

4) Packet Viewer
- PCAP-style hex and decoded pane, stream follow
- Filters: BPF support, quick filters (dns, http, tls)
- Export button

5) Policy Editor
- Rule list with priorities and schedules
- Visual rule composer for domain filters, categories, bandwidth limits

6) Alerts & Logs
- Searchable timeline, severity filtering, acknowledgment

Visual accents
- Neon-gold highlights for active items
- Subtle glow and depth with glass panels
- Smooth micro-interactions and tooltips

Accessibility
- High-contrast modes, keyboard navigation, readable fonts

