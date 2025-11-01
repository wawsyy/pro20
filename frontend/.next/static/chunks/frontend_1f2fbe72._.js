(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/hooks/useEthersSigner.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEthersSigner",
    ()=>useEthersSigner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWalletClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useWalletClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/provider-browser.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
function walletClientToSigner(walletClient) {
    var _chain_contracts_ensRegistry, _chain_contracts;
    const { account, chain, transport } = walletClient;
    const network = {
        chainId: chain.id,
        name: chain.name,
        ensAddress: (_chain_contracts = chain.contracts) === null || _chain_contracts === void 0 ? void 0 : (_chain_contracts_ensRegistry = _chain_contracts.ensRegistry) === null || _chain_contracts_ensRegistry === void 0 ? void 0 : _chain_contracts_ensRegistry.address
    };
    const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrowserProvider"](transport, network);
    const signer = provider.getSigner(account.address);
    return signer;
}
function useEthersSigner() {
    let { chainId } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _s();
    const { data: walletClient } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWalletClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWalletClient"])({
        chainId
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useEthersSigner.useMemo": ()=>walletClient ? walletClientToSigner(walletClient) : undefined
    }["useEthersSigner.useMemo"], [
        walletClient
    ]);
}
_s(useEthersSigner, "vfVS/4VJW/mjjsXkOCTaGc/C+9E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWalletClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWalletClient"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/hooks/useZamaInstance.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useZamaInstance",
    ()=>useZamaInstance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
// SDK CDN URL
const SDK_CDN_URL = 'https://cdn.zama.ai/relayer-sdk-js/0.2.0/relayer-sdk-js.umd.cjs';
// Local network chain ID
const LOCAL_CHAIN_ID = 31337;
const LOCAL_RPC_URL = 'http://localhost:8545';
function isSDKLoaded() {
    var _window_relayerSDK, _window_relayerSDK1, _window_relayerSDK2;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return typeof window.relayerSDK !== 'undefined' && typeof ((_window_relayerSDK = window.relayerSDK) === null || _window_relayerSDK === void 0 ? void 0 : _window_relayerSDK.initSDK) === 'function' && typeof ((_window_relayerSDK1 = window.relayerSDK) === null || _window_relayerSDK1 === void 0 ? void 0 : _window_relayerSDK1.createInstance) === 'function' && ((_window_relayerSDK2 = window.relayerSDK) === null || _window_relayerSDK2 === void 0 ? void 0 : _window_relayerSDK2.SepoliaConfig) !== undefined;
}
function loadSDKFromCDN() {
    return new Promise((resolve, reject)=>{
        // Check if already loaded
        if (isSDKLoaded()) {
            resolve();
            return;
        }
        // Check if script already exists
        const existingScript = document.querySelector('script[src="'.concat(SDK_CDN_URL, '"]'));
        if (existingScript) {
            // Wait a bit for script to load
            const checkInterval = setInterval(()=>{
                if (isSDKLoaded()) {
                    clearInterval(checkInterval);
                    resolve();
                }
            }, 100);
            // Timeout after 10 seconds
            setTimeout(()=>{
                clearInterval(checkInterval);
                if (!isSDKLoaded()) {
                    reject(new Error('SDK script loaded but window.relayerSDK is not available'));
                }
            }, 10000);
            return;
        }
        // Create and load script
        const script = document.createElement('script');
        script.src = SDK_CDN_URL;
        script.type = 'text/javascript';
        script.async = true;
        script.onload = ()=>{
            if (!isSDKLoaded()) {
                reject(new Error("SDK script loaded from ".concat(SDK_CDN_URL, ", but window.relayerSDK is invalid")));
                return;
            }
            resolve();
        };
        script.onerror = ()=>{
            reject(new Error("Failed to load SDK from ".concat(SDK_CDN_URL)));
        };
        document.head.appendChild(script);
    });
}
// Fetch relayer metadata from Hardhat node using RPC call
async function fetchHardhatNodeRelayerMetadata(rpcUrl) {
    try {
        const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].JsonRpcProvider(rpcUrl);
        // Use fhevm_relayer_metadata RPC method
        const metadata = await provider.send('fhevm_relayer_metadata', []);
        if (metadata && typeof metadata.ACLAddress === 'string' && metadata.ACLAddress.startsWith('0x') && typeof metadata.InputVerifierAddress === 'string' && metadata.InputVerifierAddress.startsWith('0x') && typeof metadata.KMSVerifierAddress === 'string' && metadata.KMSVerifierAddress.startsWith('0x')) {
            return {
                ACLAddress: metadata.ACLAddress,
                InputVerifierAddress: metadata.InputVerifierAddress,
                KMSVerifierAddress: metadata.KMSVerifierAddress
            };
        }
    } catch (err) {
        console.warn('[useZamaInstance] Failed to fetch Hardhat node metadata:', err);
    }
    return null;
}
// Create mock instance for local network
async function createMockInstance(chainId, rpcUrl) {
    console.log('[useZamaInstance] Creating mock instance for local network...');
    // Fetch metadata from Hardhat node
    const metadata = await fetchHardhatNodeRelayerMetadata(rpcUrl);
    if (!metadata) {
        throw new Error('Failed to fetch relayer metadata from Hardhat node. Make sure Hardhat node is running with FHEVM plugin.');
    }
    // Dynamically import mock utils to avoid including in production bundle
    const { MockFhevmInstance } = await __turbopack_context__.A("[project]/frontend/node_modules/@fhevm/mock-utils/_esm/index.js [app-client] (ecmascript, async loader)");
    const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].JsonRpcProvider(rpcUrl);
    const instance = await MockFhevmInstance.create(provider, provider, {
        aclContractAddress: metadata.ACLAddress,
        chainId: chainId,
        gatewayChainId: 55815,
        inputVerifierContractAddress: metadata.InputVerifierAddress,
        kmsContractAddress: metadata.KMSVerifierAddress,
        verifyingContractAddressDecryption: '0x5ffdaAB0373E62E2ea2944776209aEf29E631A64',
        verifyingContractAddressInputVerification: '0x812b06e1CDCE800494b79fFE4f925A504a9A9810'
    });
    console.log('[useZamaInstance] Mock instance created');
    return instance;
}
function useZamaInstance(chainId, provider) {
    _s();
    const [instance, setInstance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useZamaInstance.useEffect": ()=>{
            // Only run in browser
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            let mounted = true;
            const initZama = {
                "useZamaInstance.useEffect.initZama": async ()=>{
                    try {
                        var _window_relayerSDK_SepoliaConfig;
                        setIsLoading(true);
                        setError(null);
                        // Check if this is local network - use mock mode
                        if (chainId === LOCAL_CHAIN_ID) {
                            console.log('[useZamaInstance] Using mock mode for local network');
                            const mockInstance = await createMockInstance(LOCAL_CHAIN_ID, LOCAL_RPC_URL);
                            if (mounted) {
                                setInstance(mockInstance);
                            }
                            return;
                        }
                        // For other networks (like Sepolia), use real relayer
                        if (!chainId || chainId !== 11155111) {
                            console.warn('[useZamaInstance] Unsupported network:', chainId);
                            if (mounted) {
                                setError("Unsupported network: ".concat(chainId, ". Only Hardhat Local (31337) and Sepolia (11155111) are supported."));
                            }
                            return;
                        }
                        console.log('[useZamaInstance] Loading SDK from CDN for Sepolia network');
                        await loadSDKFromCDN();
                        console.log('[useZamaInstance] SDK loaded from CDN');
                        if (!window.relayerSDK) {
                            throw new Error('window.relayerSDK is not available after loading');
                        }
                        // Initialize SDK
                        console.log('[useZamaInstance] Initializing SDK...');
                        if (!window.relayerSDK.__initialized__) {
                            const initResult = await window.relayerSDK.initSDK();
                            window.relayerSDK.__initialized__ = initResult;
                            if (!initResult) {
                                throw new Error('SDK initialization failed');
                            }
                        }
                        console.log('[useZamaInstance] SDK initialized');
                        // Get provider - validate it's a valid EIP-1193 provider
                        const networkProvider = provider || "object" !== 'undefined' && window.ethereum || undefined;
                        if (!networkProvider) {
                            throw new Error('No provider available. Please connect your wallet.');
                        }
                        // Validate provider has required EIP-1193 methods
                        if (typeof networkProvider.request !== 'function') {
                            throw new Error('Invalid EIP-1193 provider: missing request method');
                        }
                        // Get ACL address from SepoliaConfig
                        const aclAddress = (_window_relayerSDK_SepoliaConfig = window.relayerSDK.SepoliaConfig) === null || _window_relayerSDK_SepoliaConfig === void 0 ? void 0 : _window_relayerSDK_SepoliaConfig.aclContractAddress;
                        if (!aclAddress) {
                            throw new Error('ACL address not found in SepoliaConfig');
                        }
                        // Create config with network provider
                        // The SDK expects the provider to be a valid EIP-1193 provider
                        const config = {
                            ...window.relayerSDK.SepoliaConfig,
                            network: networkProvider
                        };
                        console.log('[useZamaInstance] Creating instance with config:', {
                            aclContractAddress: config.aclContractAddress,
                            chainId: config.chainId,
                            hasNetwork: !!config.network,
                            providerType: typeof networkProvider,
                            hasRequest: typeof networkProvider.request === 'function'
                        });
                        // Create instance with retry logic for relayer connection issues
                        let zamaInstance;
                        const maxRetries = 3;
                        let lastError = null;
                        for(let attempt = 1; attempt <= maxRetries; attempt++){
                            try {
                                console.log("[useZamaInstance] Attempting to create instance (attempt ".concat(attempt, "/").concat(maxRetries, ")..."));
                                zamaInstance = await window.relayerSDK.createInstance(config);
                                console.log('[useZamaInstance] Instance created successfully');
                                break;
                            } catch (err) {
                                var _err_message, _err_message1, _err_message2;
                                lastError = err;
                                const isRelayerError = (err === null || err === void 0 ? void 0 : (_err_message = err.message) === null || _err_message === void 0 ? void 0 : _err_message.includes('Relayer')) || (err === null || err === void 0 ? void 0 : (_err_message1 = err.message) === null || _err_message1 === void 0 ? void 0 : _err_message1.includes('Bad JSON')) || (err === null || err === void 0 ? void 0 : (_err_message2 = err.message) === null || _err_message2 === void 0 ? void 0 : _err_message2.includes('connection'));
                                if (isRelayerError && attempt < maxRetries) {
                                    const delay = attempt * 2000; // Exponential backoff: 2s, 4s, 6s
                                    console.warn("[useZamaInstance] Relayer connection failed, retrying in ".concat(delay, "ms... (attempt ").concat(attempt, "/").concat(maxRetries, ")"));
                                    await new Promise({
                                        "useZamaInstance.useEffect.initZama": (resolve)=>setTimeout(resolve, delay)
                                    }["useZamaInstance.useEffect.initZama"]);
                                    continue;
                                }
                                throw err;
                            }
                        }
                        if (!zamaInstance) {
                            throw lastError || new Error('Failed to create Zama instance after retries');
                        }
                        if (mounted) {
                            setInstance(zamaInstance);
                        }
                    } catch (err) {
                        var _err_message3, _err_message4, _err_message5, _err_message6;
                        console.error('[useZamaInstance] Failed to initialize Zama instance:', err);
                        console.error('[useZamaInstance] Error details:', {
                            message: err === null || err === void 0 ? void 0 : err.message,
                            stack: err === null || err === void 0 ? void 0 : err.stack,
                            name: err === null || err === void 0 ? void 0 : err.name
                        });
                        // Provide user-friendly error messages
                        let errorMessage = (err === null || err === void 0 ? void 0 : err.message) || 'Failed to initialize encryption service';
                        if ((err === null || err === void 0 ? void 0 : (_err_message3 = err.message) === null || _err_message3 === void 0 ? void 0 : _err_message3.includes('Relayer')) || (err === null || err === void 0 ? void 0 : (_err_message4 = err.message) === null || _err_message4 === void 0 ? void 0 : _err_message4.includes('Bad JSON'))) {
                            errorMessage = 'Unable to connect to Zama relayer service. This may be a temporary network issue. Please try again in a few moments or switch to local network for testing.';
                        } else if ((err === null || err === void 0 ? void 0 : (_err_message5 = err.message) === null || _err_message5 === void 0 ? void 0 : _err_message5.includes('connection')) || (err === null || err === void 0 ? void 0 : (_err_message6 = err.message) === null || _err_message6 === void 0 ? void 0 : _err_message6.includes('ERR_CONNECTION'))) {
                            errorMessage = 'Network connection error. Please check your internet connection and try again.';
                        }
                        if (mounted) {
                            setError(errorMessage);
                        }
                    } finally{
                        if (mounted) {
                            setIsLoading(false);
                        }
                    }
                }
            }["useZamaInstance.useEffect.initZama"];
            // Small delay to ensure window is ready
            const timer = setTimeout({
                "useZamaInstance.useEffect.timer": ()=>{
                    initZama();
                }
            }["useZamaInstance.useEffect.timer"], 100);
            return ({
                "useZamaInstance.useEffect": ()=>{
                    mounted = false;
                    clearTimeout(timer);
                }
            })["useZamaInstance.useEffect"];
        }
    }["useZamaInstance.useEffect"], [
        chainId,
        provider
    ]);
    return {
        instance,
        isLoading,
        error
    };
}
_s(useZamaInstance, "LB7baC/F2TorFmS7WScPq4ER0G4=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/abi/EncryptedDonationLogAddresses.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
  This file is auto-generated.
  Command: 'npm run genabi'
*/ __turbopack_context__.s([
    "EncryptedDonationLogAddresses",
    ()=>EncryptedDonationLogAddresses
]);
const EncryptedDonationLogAddresses = {
    "11155111": {
        address: "0x7D43afa1E649EB6B2Af71B674227e13EEf3B09fA",
        chainId: 11155111,
        chainName: "sepolia"
    },
    "31337": {
        address: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
        chainId: 31337,
        chainName: "hardhat"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/abi/EncryptedDonationLogABI.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
  This file is auto-generated.
  Command: 'npm run genabi'
*/ __turbopack_context__.s([
    "EncryptedDonationLogABI",
    ()=>EncryptedDonationLogABI
]);
const EncryptedDonationLogABI = {
    "abi": [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "recordId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "viewer",
                    "type": "address"
                }
            ],
            "name": "DonationDecrypted",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "recordId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "submitter",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "blockNumber",
                    "type": "uint256"
                }
            ],
            "name": "DonationSubmitted",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "recordId",
                    "type": "uint256"
                }
            ],
            "name": "getEncryptedAmount",
            "outputs": [
                {
                    "internalType": "euint32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "recordId",
                    "type": "uint256"
                }
            ],
            "name": "getEncryptedTimestamp",
            "outputs": [
                {
                    "internalType": "euint32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "recordId",
                    "type": "uint256"
                }
            ],
            "name": "getRecordMetadata",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "submitter",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "blockNumber",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                }
            ],
            "name": "getUserDonationCount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "index",
                    "type": "uint256"
                }
            ],
            "name": "getUserDonationIdAt",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "nextRecordId",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "protocolId",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "recordId",
                    "type": "uint256"
                }
            ],
            "name": "recordExists",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "records",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "submitter",
                    "type": "address"
                },
                {
                    "internalType": "euint32",
                    "name": "encryptedAmount",
                    "type": "bytes32"
                },
                {
                    "internalType": "euint32",
                    "name": "encryptedTimestamp",
                    "type": "bytes32"
                },
                {
                    "internalType": "uint256",
                    "name": "blockNumber",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "exists",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "externalEuint32",
                    "name": "encryptedAmount",
                    "type": "bytes32"
                },
                {
                    "internalType": "externalEuint32",
                    "name": "encryptedTimestamp",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes",
                    "name": "inputProof",
                    "type": "bytes"
                }
            ],
            "name": "submitDonation",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "recordId",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "userDonations",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/components/DonationLogDemo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DonationLogDemo",
    ()=>DonationLogDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@rainbow-me/rainbowkit/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/usePublicClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@wagmi/core/dist/esm/actions/readContract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$useEthersSigner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/hooks/useEthersSigner.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$useZamaInstance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/hooks/useZamaInstance.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$abi$2f$EncryptedDonationLogAddresses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/abi/EncryptedDonationLogAddresses.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$abi$2f$EncryptedDonationLogABI$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/abi/EncryptedDonationLogABI.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$config$2f$wagmi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/config/wagmi.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
const DonationLogDemo = ()=>{
    var _EncryptedDonationLogAddresses_chainId_toString;
    _s();
    const { address, isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"])();
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"])(); // Use useChainId hook for more reliable chain detection
    const publicClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePublicClient"])();
    const ethersSignerPromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$useEthersSigner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEthersSigner"])({
        chainId
    });
    // Get provider - use window.ethereum directly for EIP-1193 compatibility
    const provider = ("TURBOPACK compile-time truthy", 1) ? window.ethereum : "TURBOPACK unreachable";
    const { instance: zama, isLoading: zamaLoading, error: zamaError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$useZamaInstance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useZamaInstance"])(chainId, provider);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [donationAmount, setDonationAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [donationRecords, setDonationRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoadingRecords, setIsLoadingRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [decryptingRecordId, setDecryptingRecordId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DonationLogDemo.useEffect": ()=>{
            setMounted(true);
        }
    }["DonationLogDemo.useEffect"], []);
    // Debug: Log chainId changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DonationLogDemo.useEffect": ()=>{
            if (mounted && chainId) {
                var _EncryptedDonationLogAddresses_chainId_toString;
                console.log('[DonationLogDemo] Current chainId:', chainId);
                console.log('[DonationLogDemo] Contract address:', (_EncryptedDonationLogAddresses_chainId_toString = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$abi$2f$EncryptedDonationLogAddresses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EncryptedDonationLogAddresses"][chainId.toString()]) === null || _EncryptedDonationLogAddresses_chainId_toString === void 0 ? void 0 : _EncryptedDonationLogAddresses_chainId_toString.address);
            }
        }
    }["DonationLogDemo.useEffect"], [
        chainId,
        mounted
    ]);
    const contractAddress = chainId ? (_EncryptedDonationLogAddresses_chainId_toString = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$abi$2f$EncryptedDonationLogAddresses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EncryptedDonationLogAddresses"][chainId.toString()]) === null || _EncryptedDonationLogAddresses_chainId_toString === void 0 ? void 0 : _EncryptedDonationLogAddresses_chainId_toString.address : undefined;
    const isDeployed = contractAddress && contractAddress !== __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].ZeroAddress;
    const loadDonationRecords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DonationLogDemo.useCallback[loadDonationRecords]": async ()=>{
            if (!isConnected || !address || !contractAddress || !publicClient) return;
            setIsLoadingRecords(true);
            try {
                // Use viem readContract for view functions
                let count = 0n;
                try {
                    const countResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContract"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$config$2f$wagmi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"], {
                        address: contractAddress,
                        abi: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$abi$2f$EncryptedDonationLogABI$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EncryptedDonationLogABI"].abi,
                        functionName: 'getUserDonationCount',
                        args: [
                            address
                        ]
                    });
                    count = typeof countResult === 'bigint' ? countResult : BigInt(countResult || 0);
                    console.log('[loadDonationRecords] getUserDonationCount result:', count);
                } catch (err) {
                    // If call fails, user might have no records
                    console.log('[loadDonationRecords] getUserDonationCount failed, assuming 0:', err.message);
                    count = 0n;
                }
                const countNumber = Number(count);
                const records = [];
                for(let i = 0; i < countNumber; i++){
                    try {
                        var _metadata_blockNumber;
                        const recordId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContract"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$config$2f$wagmi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"], {
                            address: contractAddress,
                            abi: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$abi$2f$EncryptedDonationLogABI$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EncryptedDonationLogABI"].abi,
                            functionName: 'getUserDonationIdAt',
                            args: [
                                address,
                                BigInt(i)
                            ]
                        });
                        const metadata = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$actions$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContract"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$config$2f$wagmi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"], {
                            address: contractAddress,
                            abi: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$abi$2f$EncryptedDonationLogABI$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EncryptedDonationLogABI"].abi,
                            functionName: 'getRecordMetadata',
                            args: [
                                typeof recordId === 'bigint' ? recordId : BigInt(recordId)
                            ]
                        });
                        const recordIdNumber = typeof recordId === 'bigint' ? Number(recordId) : Number(recordId);
                        const blockNumber = typeof metadata === 'object' && metadata && 'blockNumber' in metadata ? typeof metadata.blockNumber === 'bigint' ? metadata.blockNumber.toString() : ((_metadata_blockNumber = metadata.blockNumber) === null || _metadata_blockNumber === void 0 ? void 0 : _metadata_blockNumber.toString()) || '0' : typeof metadata === 'bigint' ? metadata.toString() : String(metadata || '0');
                        records.push({
                            recordId: recordIdNumber,
                            amount: "Encrypted",
                            timestamp: "Encrypted",
                            blockNumber: blockNumber
                        });
                    } catch (err) {
                        console.error("[loadDonationRecords] Error loading record ".concat(i, ":"), err);
                    }
                }
                setDonationRecords(records);
            } catch (error) {
                console.error("[loadDonationRecords] Error loading records:", error);
                setMessage("Failed to load donation records: ".concat(error.message || 'Unknown error'));
            } finally{
                setIsLoadingRecords(false);
            }
        }
    }["DonationLogDemo.useCallback[loadDonationRecords]"], [
        isConnected,
        address,
        contractAddress,
        publicClient
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DonationLogDemo.useEffect": ()=>{
            if (isConnected && contractAddress) {
                loadDonationRecords();
            }
        }
    }["DonationLogDemo.useEffect"], [
        isConnected,
        contractAddress,
        loadDonationRecords
    ]);
    const handleSubmitDonation = async ()=>{
        if (!isConnected || !ethersSignerPromise || !zama || !contractAddress || !donationAmount) {
            setMessage("Please connect wallet and enter donation amount");
            return;
        }
        setIsSubmitting(true);
        setMessage("Submitting donation...");
        try {
            const signer = await ethersSignerPromise;
            const amount = parseInt(donationAmount);
            const timestamp = Math.floor(Date.now() / 1000);
            if (isNaN(amount) || amount <= 0) {
                setMessage("Please enter a valid donation amount");
                setIsSubmitting(false);
                return;
            }
            // Encrypt amount and timestamp
            const encryptedInput = await zama.createEncryptedInput(contractAddress, address).add32(amount).add32(timestamp).encrypt();
            const contract = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(contractAddress, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$abi$2f$EncryptedDonationLogABI$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EncryptedDonationLogABI"].abi, signer);
            const tx = await contract.submitDonation(encryptedInput.handles[0], encryptedInput.handles[1], encryptedInput.inputProof);
            setMessage("Transaction submitted: ".concat(tx.hash, ". Waiting for confirmation..."));
            await tx.wait();
            setMessage("Donation submitted successfully!");
            setDonationAmount("");
            await loadDonationRecords();
        } catch (error) {
            console.error("Error submitting donation:", error);
            setMessage("Error: ".concat(error.message || "Failed to submit donation"));
        } finally{
            setIsSubmitting(false);
        }
    };
    const handleDecryptRecord = async (recordId)=>{
        if (!isConnected || !ethersSignerPromise || !zama || !contractAddress || !address) {
            setMessage("Please connect wallet");
            return;
        }
        setDecryptingRecordId(recordId);
        setMessage("Decrypting record ".concat(recordId, "..."));
        try {
            const signer = await ethersSignerPromise;
            const contract = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(contractAddress, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$abi$2f$EncryptedDonationLogABI$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EncryptedDonationLogABI"].abi, signer);
            const encryptedAmount = await contract.getEncryptedAmount(recordId);
            const encryptedTimestamp = await contract.getEncryptedTimestamp(recordId);
            // Check if handles are zero (uninitialized)
            if (encryptedAmount === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].ZeroHash || encryptedTimestamp === __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].ZeroHash) {
                setMessage("Record is not initialized");
                return;
            }
            // Generate keypair for decryption
            const keypair = zama.generateKeypair();
            // Decrypt amount
            const amountHandlePairs = [
                {
                    handle: encryptedAmount,
                    contractAddress: contractAddress
                }
            ];
            const startTimeStamp = Math.floor(Date.now() / 1000).toString();
            const durationDays = "10";
            const contractAddresses = [
                contractAddress
            ];
            const eip712 = zama.createEIP712(keypair.publicKey, contractAddresses, startTimeStamp, durationDays);
            // Sign typed data
            const signature = await signer.signTypedData(eip712.domain, {
                UserDecryptRequestVerification: eip712.types.UserDecryptRequestVerification
            }, eip712.message);
            // Decrypt amount
            const amountResult = await zama.userDecrypt(amountHandlePairs, keypair.privateKey, keypair.publicKey, signature.replace("0x", ""), contractAddresses, address, startTimeStamp, durationDays);
            const decryptedAmount = amountResult[encryptedAmount];
            // Decrypt timestamp (generate new keypair for second decryption)
            const timestampKeypair = zama.generateKeypair();
            const timestampHandlePairs = [
                {
                    handle: encryptedTimestamp,
                    contractAddress: contractAddress
                }
            ];
            const timestampEip712 = zama.createEIP712(timestampKeypair.publicKey, contractAddresses, startTimeStamp, durationDays);
            const timestampSignature = await signer.signTypedData(timestampEip712.domain, {
                UserDecryptRequestVerification: timestampEip712.types.UserDecryptRequestVerification
            }, timestampEip712.message);
            const timestampResult = await zama.userDecrypt(timestampHandlePairs, timestampKeypair.privateKey, timestampKeypair.publicKey, timestampSignature.replace("0x", ""), contractAddresses, address, startTimeStamp, durationDays);
            const decryptedTimestamp = timestampResult[encryptedTimestamp];
            // Update the record in the list
            setDonationRecords((prev)=>prev.map((record)=>record.recordId === recordId ? {
                        ...record,
                        amount: decryptedAmount.toString(),
                        timestamp: new Date(Number(decryptedTimestamp) * 1000).toLocaleString()
                    } : record));
            setMessage("Record ".concat(recordId, " decrypted successfully!"));
        } catch (error) {
            console.error("Error decrypting record:", error);
            setMessage("Error: ".concat(error.message || "Failed to decrypt record"));
        } finally{
            setDecryptingRecordId(null);
        }
    };
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto mt-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl p-8 shadow-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold mb-4 text-center",
                    children: "Loading..."
                }, void 0, false, {
                    fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                    lineNumber: 307,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                lineNumber: 306,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/frontend/components/DonationLogDemo.tsx",
            lineNumber: 305,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (!isConnected) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto mt-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl p-8 shadow-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold mb-4 text-center",
                        children: "Connect Your Wallet"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                        lineNumber: 317,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 mb-6 text-center",
                        children: "Please connect your wallet to start using the Encrypted Donation Log"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                        lineNumber: 318,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ConnectButton"], {}, void 0, false, {
                            fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                            lineNumber: 320,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                        lineNumber: 319,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                lineNumber: 316,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/frontend/components/DonationLogDemo.tsx",
            lineNumber: 315,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (!isDeployed) {
        const chainName = chainId === 31337 ? 'Hardhat Local (31337)' : chainId === 11155111 ? 'Sepolia (11155111)' : "Chain ".concat(chainId || 'unknown');
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto mt-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl p-8 shadow-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold mb-4 text-center text-red-600",
                        children: "Contract Not Deployed"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                        lineNumber: 332,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 text-center mb-4",
                        children: [
                            "The EncryptedDonationLog contract is not deployed on ",
                            chainName,
                            ". Please deploy it first."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                        lineNumber: 333,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-50 border border-gray-200 rounded-lg p-4 mt-4 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-700 mb-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Debug Info:"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                                    lineNumber: 338,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                                lineNumber: 337,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-600 font-mono",
                                children: [
                                    "Detected Chain ID: ",
                                    chainId || 'undefined',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                                        lineNumber: 341,
                                        columnNumber: 58
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Contract Address: ",
                                    contractAddress || 'Not found',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                                        lineNumber: 342,
                                        columnNumber: 65
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Wallet Connected: ",
                                    isConnected ? 'Yes' : 'No'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                                lineNumber: 340,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                        lineNumber: 336,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    chainId === 31337 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-blue-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "For Local Network:"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                                    lineNumber: 349,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                " Make sure Hardhat node is running and run:",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                                    lineNumber: 349,
                                    columnNumber: 95
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                    className: "bg-blue-100 px-2 py-1 rounded",
                                    children: "npx hardhat deploy --network localhost"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                                    lineNumber: 350,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                            lineNumber: 348,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                        lineNumber: 347,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    chainId === 11155111 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-yellow-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Note:"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                                    lineNumber: 357,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                " You are connected to Sepolia testnet. Switch to Hardhat Local (31337) to use the local contract, or deploy the contract to Sepolia."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                            lineNumber: 356,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                        lineNumber: 355,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                lineNumber: 331,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/frontend/components/DonationLogDemo.tsx",
            lineNumber: 330,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // Show relayer error message if on Sepolia
    const showRelayerError = chainId === 11155111 && zamaError && (zamaError.includes('relayer') || zamaError.includes('Relayer') || zamaError.includes('network issue'));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid w-full gap-6 px-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end items-center gap-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$rainbow$2d$me$2f$rainbowkit$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ConnectButton"], {}, void 0, false, {
                    fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                    lineNumber: 373,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                lineNumber: 372,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            showRelayerError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-yellow-50 border-2 border-yellow-400 rounded-xl p-4 shadow-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-yellow-600 text-xl",
                            children: "⚠️"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                            lineNumber: 379,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold text-yellow-800 mb-2",
                                    children: "Zama Relayer Service Unavailable"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                                    lineNumber: 381,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-yellow-700 mb-3",
                                    children: "The Zama relayer service for Sepolia testnet is currently unavailable. This may be due to:"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                                    lineNumber: 384,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-disc list-inside text-yellow-700 mb-3 space-y-1 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Network connectivity issues"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                                            lineNumber: 388,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Temporary service outage"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                                            lineNumber: 389,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Firewall or proxy restrictions"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                                            lineNumber: 390,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                                    lineNumber: 387,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-lg p-3 mt-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-semibold text-gray-800 mb-2",
                                            children: "💡 Recommended Solution:"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                                            lineNumber: 393,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-700",
                                            children: [
                                                "Switch to ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Hardhat Local (31337)"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                                                    lineNumber: 395,
                                                    columnNumber: 29
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " network to use mock mode for testing. Mock mode doesn't require the relayer service and works offline."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                                            lineNumber: 394,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-600 mt-2",
                                            children: 'To switch: Click the wallet button above → Select "Hardhat Local" network'
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                                            lineNumber: 398,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                                    lineNumber: 392,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                            lineNumber: 380,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                    lineNumber: 378,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                lineNumber: 377,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl p-6 shadow-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold mb-4",
                        children: "Submit New Donation"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                        lineNumber: 408,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Donation Amount"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                                        lineNumber: 411,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        value: donationAmount,
                                        onChange: (e)=>setDonationAmount(e.target.value),
                                        placeholder: "Enter amount",
                                        className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent",
                                        disabled: isSubmitting || zamaLoading
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                                        lineNumber: 414,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                                lineNumber: 410,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSubmitDonation,
                                disabled: isSubmitting || zamaLoading || !donationAmount,
                                className: "w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                                children: isSubmitting ? "Submitting..." : zamaLoading ? "Loading..." : "Submit Encrypted Donation"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                                lineNumber: 423,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                        lineNumber: 409,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                lineNumber: 407,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl p-6 shadow-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold",
                                children: "My Donation Records"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                                lineNumber: 435,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: loadDonationRecords,
                                disabled: isLoadingRecords,
                                className: "px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50",
                                children: isLoadingRecords ? "Loading..." : "Refresh"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                                lineNumber: 436,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                        lineNumber: 434,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    donationRecords.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500 text-center py-8",
                        children: "No donation records found"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                        lineNumber: 446,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: donationRecords.map((record)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border border-gray-200 rounded-lg p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-start",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-500",
                                                    children: [
                                                        "Record ID: ",
                                                        record.recordId
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                                                    lineNumber: 453,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-lg font-semibold mt-2",
                                                    children: [
                                                        "Amount: ",
                                                        record.amount
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                                                    lineNumber: 454,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-600 mt-1",
                                                    children: [
                                                        "Timestamp: ",
                                                        record.timestamp
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                                                    lineNumber: 457,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-400 mt-1",
                                                    children: [
                                                        "Block: ",
                                                        record.blockNumber
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                                                    lineNumber: 460,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                                            lineNumber: 452,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        record.amount === "Encrypted" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleDecryptRecord(record.recordId),
                                            disabled: decryptingRecordId === record.recordId || zamaLoading,
                                            className: "ml-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                                            children: decryptingRecordId === record.recordId ? "Decrypting..." : "Decrypt"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                                            lineNumber: 465,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                                    lineNumber: 451,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, record.recordId, false, {
                                fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                                lineNumber: 450,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                        lineNumber: 448,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                lineNumber: 433,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-blue-50 border border-blue-200 rounded-lg p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-blue-800",
                    children: message
                }, void 0, false, {
                    fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                    lineNumber: 482,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                lineNumber: 481,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            zamaError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-red-50 border border-red-200 rounded-lg p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-800",
                    children: [
                        "Zama Error: ",
                        zamaError
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                    lineNumber: 488,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/frontend/components/DonationLogDemo.tsx",
                lineNumber: 487,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/DonationLogDemo.tsx",
        lineNumber: 371,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(DonationLogDemo, "wow1rsCS9Wy6BWDB8Sc7PcR2WMw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePublicClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$useEthersSigner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEthersSigner"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$useZamaInstance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useZamaInstance"]
    ];
});
_c = DonationLogDemo;
var _c;
__turbopack_context__.k.register(_c, "DonationLogDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_1f2fbe72._.js.map