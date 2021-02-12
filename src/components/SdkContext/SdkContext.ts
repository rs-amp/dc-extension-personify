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

export interface SdkContextProps {
  sdk?: ContentFieldExtension<any, Parameters>;
}

declare const SdkContext: React.Context<SdkContextProps>;
export default SdkContext;
