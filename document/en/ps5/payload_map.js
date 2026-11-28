// @ts-check

const CUSTOM_ACTION_APPCACHE_REMOVE = "appcache-remove";

const payload_map = [
    {
        displayTitle: 'kstuff-1',
        description: 'Auto Added',
        fileName: 'kstuff-1.13-fpkg-dr-test4.elf',
        author: 'Auto',
        projectSource: '',
        binarySource: '',
        version: '1.0',
        toPort: 9021
    },
    {
        displayTitle: 'arabi_hub2222',
        description: 'Auto Added',
        fileName: 'arabi_hub2222.elf',
        author: 'Auto',
        projectSource: '',
        binarySource: '',
        version: '1.0',
        toPort: 9021
    },
    {
        displayTitle: 'rp-get-pin',
        description: 'Auto Added',
        fileName: 'rp-get-pin.elf',
        author: 'Auto',
        projectSource: '',
        binarySource: '',
        version: '1.0',
        toPort: 9021
    },
    {
        displayTitle: 'shadowmountplus12',
        description: 'Auto Added',
        fileName: 'shadowmountplus12.elf',
        author: 'Auto',
        projectSource: '',
        binarySource: '',
        version: '1.0',
        toPort: 9021
    },
    {
        displayTitle: 'shsrv-ps5',
        description: 'Auto Added',
        fileName: 'shsrv-ps5.elf',
        author: 'Auto',
        projectSource: '',
        binarySource: '',
        version: '1.0',
        toPort: 9021
    },
    {
        displayTitle: 'OnionHEN',
        description: 'Auto Added',
        fileName: 'OnionHEN.elf',
        author: 'Auto',
        projectSource: '',
        binarySource: '',
        version: '1.0',
        toPort: 9021
    },
    {
        displayTitle: 'arabi_scanner_poc',
        description: 'Auto Added',
        fileName: 'arabi_scanner_poc.elf',
        author: 'Auto',
        projectSource: '',
        binarySource: '',
        version: '1.0',
        toPort: 9021
    },
    {
        displayTitle: 'ps5-versions',
        description: 'Auto Added',
        fileName: 'ps5-versions.elf',
        author: 'Auto',
        projectSource: '',
        binarySource: '',
        version: '1.0',
        toPort: 9021
    },
    {
        displayTitle: 'arabi_scanner_poc2',
        description: 'Auto Added',
        fileName: 'arabi_scanner_poc2.elf',
        author: 'Auto',
        projectSource: '',
        binarySource: '',
        version: '1.0',
        toPort: 9021
    },
    {
        displayTitle: 'kstuffpkg',
        description: 'Auto Added',
        fileName: 'kstuffpkg.elf',
        author: 'Auto',
        projectSource: '',
        binarySource: '',
        version: '1.0',
        toPort: 9021
    },
    {
        displayTitle: 'ps5debug_dizz',
        description: 'Auto Added',
        fileName: 'ps5debug_dizz.elf',
        author: 'Auto',
        projectSource: '',
        binarySource: '',
        version: '1.0',
        toPort: 9021
    },
    {
        displayTitle: 'websrv-ps5',
        description: 'Auto Added',
        fileName: 'websrv-ps5.elf',
        author: 'Auto',
        projectSource: '',
        binarySource: '',
        version: '1.0',
        toPort: 9021
    },
    {
        displayTitle: 'arabi_hub1111',
        description: 'Auto Added',
        fileName: 'arabi_hub1111.elf',
        author: 'Auto',
        projectSource: '',
        binarySource: '',
        version: '1.0',
        toPort: 9021
    },
    {
        displayTitle: 'etaHEN6',
        description: 'Auto Added',
        fileName: 'etaHEN6.elf',
        author: 'Auto',
        projectSource: '',
        binarySource: '',
        version: '1.0',
        toPort: 9021
    },
    {
        displayTitle: 'ps5_bridgewww',
        description: 'Auto Added',
        fileName: 'ps5_bridgewww.elf',
        author: 'Auto',
        projectSource: '',
        binarySource: '',
        version: '1.0',
        toPort: 9021
    },
    {
        displayTitle: 'byepervisor',
        description: 'Auto Added',
        fileName: 'byepervisor.elf',
        author: 'Auto',
        projectSource: '',
        binarySource: '',
        version: '1.0',
        toPort: 9021
    },
    {
        displayTitle: 'kstufffpkgtest4',
        description: 'Auto Added',
        fileName: 'kstufffpkgtest4.elf',
        author: 'Auto',
        projectSource: '',
        binarySource: '',
        version: '1.0',
        toPort: 9021
    },
    {
        displayTitle: 'arabi_scanner_poc3',
        description: 'Auto Added',
        fileName: 'arabi_scanner_poc3.elf',
        author: 'Auto',
        projectSource: '',
        binarySource: '',
        version: '1.0',
        toPort: 9021
    },
    {
        displayTitle: 'PoorDS4rc38',
        description: 'Auto Added',
        fileName: 'PoorDS4rc38.elf',
        author: 'Auto',
        projectSource: '',
        binarySource: '',
        version: '1.0',
        toPort: 9021
    },
    {
        displayTitle: 'arabi_hub999',
        description: 'Auto Added',
        fileName: 'arabi_hub999.elf',
        author: 'Auto',
        projectSource: '',
        binarySource: '',
        version: '1.0',
        toPort: 9021
    },
    {
        displayTitle: 'elfldr-ps5',
        description: 'Auto Added',
        fileName: 'elfldr-ps5.elf',
        author: 'Auto',
        projectSource: '',
        binarySource: '',
        version: '1.0',
        toPort: 9021
    },
    {
        displayTitle: 'arabi_hub',
        description: 'Auto Added',
        fileName: 'arabi_hub.elf',
        author: 'Auto',
        projectSource: '',
        binarySource: '',
        version: '1.0',
        toPort: 9021
    },
    {
        displayTitle: 'arabi_scanner_poc4',
        description: 'Auto Added',
        fileName: 'arabi_scanner_poc4.elf',
        author: 'Auto',
        projectSource: '',
        binarySource: '',
        version: '1.0',
        toPort: 9021
    },
    {
        displayTitle: 'arabi_hub3',
        description: 'Auto Added',
        fileName: 'arabi_hub3.elf',
        author: 'Auto',
        projectSource: '',
        binarySource: '',
        version: '1.0',
        toPort: 9021
    },
    {
        displayTitle: 'etaHEN-2',
        description: 'Auto Added',
        fileName: 'etaHEN-2.4B.bin',
        author: 'Auto',
        projectSource: '',
        binarySource: '',
        version: '1.0',
        toPort: 9021
    },
    {
        displayTitle: 'arabi_hub11',
        description: 'Auto Added',
        fileName: 'arabi_hub11.elf',
        author: 'Auto',
        projectSource: '',
        binarySource: '',
        version: '1.0',
        toPort: 9021
    },
    {
        displayTitle: 'arabi_hub5',
        description: 'Auto Added',
        fileName: 'arabi_hub5.elf',
        author: 'Auto',
        projectSource: '',
        binarySource: '',
        version: '1.0',
        toPort: 9021
    },
    {
        displayTitle: 'HyperHEN-v0',
        description: 'Auto Added',
        fileName: 'HyperHEN-v0.9.2.elf',
        author: 'Auto',
        projectSource: '',
        binarySource: '',
        version: '1.0',
        toPort: 9021
    },
    {
        displayTitle: 'ps5_bridgezzz',
        description: 'Auto Added',
        fileName: 'ps5_bridgezzz.elf',
        author: 'Auto',
        projectSource: '',
        binarySource: '',
        version: '1.0',
        toPort: 9021
    },
    {
        displayTitle: 'ps5debug_v1',
        description: 'Auto Added',
        fileName: 'ps5debug_v1.0b5.elf',
        author: 'Auto',
        projectSource: '',
        binarySource: '',
        version: '1.0',
        toPort: 9021
    },
    {
        displayTitle: 'ps5-account-tools-v1',
        description: 'Auto Added',
        fileName: 'ps5-account-tools-v1.2.elf',
        author: 'Auto',
        projectSource: '',
        binarySource: '',
        version: '1.0',
        toPort: 9021
    },
    {
        displayTitle: 'PoorDS4rc51',
        description: 'Auto Added',
        fileName: 'PoorDS4rc51.elf',
        author: 'Auto',
        projectSource: '',
        binarySource: '',
        version: '1.0',
        toPort: 9021
    },
    {
        displayTitle: 'kstuff',
        description: 'Auto Added',
        fileName: 'kstuff.elf',
        author: 'Auto',
        projectSource: '',
        binarySource: '',
        version: '1.0',
        toPort: 9021
    },
    {
        displayTitle: 'arabi_hub2',
        description: 'Auto Added',
        fileName: 'arabi_hub2.elf',
        author: 'Auto',
        projectSource: '',
        binarySource: '',
        version: '1.0',
        toPort: 9021
    },
    {
        displayTitle: 'klogsrv-ps5',
        description: 'Auto Added',
        fileName: 'klogsrv-ps5.elf',
        author: 'Auto',
        projectSource: '',
        binarySource: '',
        version: '1.0',
        toPort: 9021
    },
    {
        displayTitle: 'a53pkg',
        description: 'Auto Added',
        fileName: 'a53pkg.elf',
        author: 'Auto',
        projectSource: '',
        binarySource: '',
        version: '1.0',
        toPort: 9021
    },
    {
        displayTitle: 'shadowmountplus8',
        description: 'Auto Added',
        fileName: 'shadowmountplus8.elf',
        author: 'Auto',
        projectSource: '',
        binarySource: '',
        version: '1.0',
        toPort: 9021
    },
    {
        displayTitle: 'kstuff-toggle',
        description: 'Auto Added',
        fileName: 'kstuff-toggle.elf',
        author: 'Auto',
        projectSource: '',
        binarySource: '',
        version: '1.0',
        toPort: 9021
    },
    {
        displayTitle: 'arabi_hub6',
        description: 'Auto Added',
        fileName: 'arabi_hub6.elf',
        author: 'Auto',
        projectSource: '',
        binarySource: '',
        version: '1.0',
        toPort: 9021
    },
    {
        displayTitle: 'OnionHEN13',
        description: 'Auto Added',
        fileName: 'OnionHEN13.elf',
        author: 'Auto',
        projectSource: '',
        binarySource: '',
        version: '1.0',
        toPort: 9021
    },
    {
        displayTitle: 'ps5-backpork',
        description: 'Auto Added',
        fileName: 'ps5-backpork.elf',
        author: 'Auto',
        projectSource: '',
        binarySource: '',
        version: '1.0',
        toPort: 9021
    },
    {
        displayTitle: 'ps5_bridge',
        description: 'Auto Added',
        fileName: 'ps5_bridge.elf',
        author: 'Auto',
        projectSource: '',
        binarySource: '',
        version: '1.0',
        toPort: 9021
    },
    {
        displayTitle: 'gdbsrv-ps5',
        description: 'Auto Added',
        fileName: 'gdbsrv-ps5.elf',
        author: 'Auto',
        projectSource: '',
        binarySource: '',
        version: '1.0',
        toPort: 9021
    },
    {
        displayTitle: 'ftpsrv-ps5',
        description: 'Auto Added',
        fileName: 'ftpsrv-ps5.elf',
        author: 'Auto',
        projectSource: '',
        binarySource: '',
        version: '1.0',
        toPort: 9021
    },
    {
        displayTitle: 'arabi_afr_poc2',
        description: 'Auto Added',
        fileName: 'arabi_afr_poc2.elf',
        author: 'Auto',
        projectSource: '',
        binarySource: '',
        version: '1.0',
        toPort: 9021
    },
    {
        displayTitle: 'shadowmountpluspkg',
        description: 'Auto Added',
        fileName: 'shadowmountpluspkg.elf',
        author: 'Auto',
        projectSource: '',
        binarySource: '',
        version: '1.0',
        toPort: 9021
    },
    {
        displayTitle: 'arabi_hub4',
        description: 'Auto Added',
        fileName: 'arabi_hub4.elf',
        author: 'Auto',
        projectSource: '',
        binarySource: '',
        version: '1.0',
        toPort: 9021
    },
    {
        displayTitle: 'libhijacker-game-patch',
        description: 'Auto Added',
        fileName: 'libhijacker-game-patch.v1.160.elf',
        author: 'Auto',
        projectSource: '',
        binarySource: '',
        version: '1.0',
        toPort: 9021
    },
    {
        displayTitle: 'arabi_afr_poc',
        description: 'Auto Added',
        fileName: 'arabi_afr_poc.elf',
        author: 'Auto',
        projectSource: '',
        binarySource: '',
        version: '1.0',
        toPort: 9021
    },
    {
        displayTitle: "Browser appcache remover",
        description: "Deletes for only the current user in webkit-only mode",
        fileName: "",
        author: "Storm21CH, idlesauce",
        projectSource: "",
        binarySource: "",
        version: "1.0",
        customAction: CUSTOM_ACTION_APPCACHE_REMOVE
    }
];
