import { ContentFieldExtension } from 'dc-extensions-sdk';
import React from 'react';

interface SharedParameters {
  type: string | undefined;
  apiUrl: string;
}
interface ContentFieldExtensionParameters {
  instance: SharedParameters;
  installation: SharedParameters;
}

export type Sdk = ContentFieldExtension<any, ContentFieldExtensionParameters>;

interface SdkContextProps {
  sdk: ContentFieldExtension<any, ContentFieldExtensionParameters>;
  children?: React.ReactNode;
}

const SdkContext = React.createContext<Sdk | null>(null);
export function useSdkContext(): Sdk {
  return React.useContext(SdkContext) as Sdk;
}
export default function WithSdkContext({ sdk, children }: SdkContextProps) {
  sdk.params.instance = { ...sdk.params.installation, ...sdk.params.instance };
  return <SdkContext.Provider value={sdk}>{children}</SdkContext.Provider>;
}
