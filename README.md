# dash-button-example

## development

 - MacOS X
 - Node.js v7

### network

```bash
$ ifconfig

...snip
en0: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500
    options=10b<RXCSUM,TXCSUM,VLAN_HWTAGGING,AV>
    ether xx:xx:xx:xx:xx:xx
    inet6 fe80::6a5b:35ff:fe95:20da%en0 prefixlen 64 scopeid 0x4
    inet 192.168.0.5 netmask 0xfffffff0 broadcast 192.168.0.15
    nd6 options=1<PERFORMNUD>
    media: autoselect (100baseTX <full-duplex>)
    status: active
en1: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500
    ether xx:xx:xx:xx:xx:xx
    inet6 fe80::aa86:ddff:fe8a:1be6%en1 prefixlen 64 scopeid 0x5
    inet 192.168.0.29 netmask 0xfffffff0 broadcast 192.168.0.31
    nd6 options=1<PERFORMNUD>
    media: autoselect
    status: active
```

### scan the mac address

```bash
$ sudo npm run scan -- --interface en1

> dash@1.0.0 scan /path/to/file
> dash-button scan "--interface" "en1"

Scanning for DHCP requests and ARP probes on en1...
Detected a DHCP request or ARP probe from XX:XX:XX:XX:XX:XX <- Button Push
```

### create server
Please set your dash button mac address

```bash
$ git clone https://github.com/hiro-su/dash-button-example.git
$ cd dash-button-example
$ npm install
$ vim index.js

...snip
const DASH_BUTTON_MAC_ADDRESS = 'YOUR DASH BUTTON MAC ADDRESS';
const button = new DashButton(DASH_BUTTON_MAC_ADDRESS, { networkInterface: 'en1' });
```

### start

```bash
$ sudo npm start

> dash@1.0.0 start /path/to/file
> bin/dash

DASH/1 <- Button Push
DASH/2 <- Button Push
DASH/3 <- Button Push
```
