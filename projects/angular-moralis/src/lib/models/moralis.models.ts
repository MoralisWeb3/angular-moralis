import { Moralis } from 'moralis';

export type ProviderTypes = 'walletconnect' | 'metamask';

interface PluginSpecs {
  name: string;
  functions: string[];
}

/** Moralis Todo: this can be exported */
export interface StartOptions {
  serverUrl?: string;
  appId?: string;
  moralisSecret?: string;
  plugins?: PluginSpecs[];
  javascriptKey?: string;
  masterKey?: string;
}

export type User = Moralis.User<Moralis.Attributes>;
