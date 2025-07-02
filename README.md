# Linux-Server-VM-Sandbox
VirtualBox Ubuntu Server 22.04 home lab/vnet setup with SSH and monitoring tools. Plans include hosting a weight & fitness tracker app, along with anything else interesting I come across to stand up. (I'm already running a Plex media server from another project, protected behind a pfSense firewall.)

📄 Check out [Sandbox_Log.md](./Sandbox_Log.md) for more detailed setup logs and ongoing progress.

## 🏗️ Home Lab Setup Summary

### 💻 VM Setup
- Created VirtualBox VM with Ubuntu Server 22.04  
- Installed OpenSSH and Prometheus (Grafana planned)  
- Set up SSH key authentication and port forwarding (host port 2222 → guest port 22)  

### 🛡️ Pi-hole
- Installed Pi-hole for DNS ad-blocking  
- Verified blocking via ping and dig commands  

### 🔧 pfSense VM
- Created pfSense VM with WAN and LAN interfaces  
- Configured VirtualBox adapters: WAN (Bridged/NAT), LAN (Host-only)  
- Enabled DHCP on LAN  
- Confirmed network connectivity between host and pfSense
- Configured pfSense setup via the admin portal on host PC

### ⚙️ Network Fixes
- Removed and recreated VirtualBox Host-Only adapter to fix connectivity  
- Adjusted Windows firewall and antivirus settings  

📄 Check out [Sandbox_Log.md](./Sandbox_Log.md) for more detailed setup logs and ongoing progress.
