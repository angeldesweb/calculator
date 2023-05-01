import { ipv4Network , getMaskPrefix } from 'ip-simple-tool/dist/ip-simple-tool.esm';

export const getScope = (network) => {
    const handler = ipv4Network(network);
    const result = handler.getScope();
    return handler.getScope();
}

export const getPrefix = (netmask) => {
    const prefix = getMaskPrefix(netmask);
    return prefix;
}