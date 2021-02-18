import { ContentFieldExtension } from 'dc-extensions-sdk';
import React from 'react';

interface Parameters {
  instance: {
    type: string | undefined;
  };
  installation: {
    apiUrl: string;
  };
}

export type Sdk = ContentFieldExtension<any, Parameters>;

interface SdkContextProps {
  sdk: ContentFieldExtension<any, Parameters>;
  children?: React.ReactNode;
}

const SdkContext = React.createContext<Sdk | null>(null);
export function useSdkContext(): Sdk {
  return React.useContext(SdkContext) as Sdk;
}
export default function WithSdkContext({ sdk, children }: SdkContextProps) {
  return <SdkContext.Provider value={sdk}>{children}</SdkContext.Provider>;
}
