import React from 'react';

import { init, ContentFieldExtension } from 'dc-extensions-sdk';
import ManagedCoverageReport from './components/ManagedCoverageReport/ManagedCoverageReport';
import ManagedCriteria from './components/ManagedCriteria/ManagedCriteria';
import { WithTheme, SdkContext } from './components';
import { Sdk, SdkContextProps } from './components/SdkContext/SdkContext';

interface AppState extends SdkContextProps {
  connected: boolean;
  value?: any;
  schema?: any;
  openDialog?: string;
  openDialogCallback?: (value: any) => void;
}

export default class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = { connected: false };
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  public componentDidMount(): void {
    this.handleConnect();
  }

  public async handleConnect(): Promise<void> {
    const sdk = await init<Sdk>();
    sdk.frame.startAutoResizer();

    const value = await sdk.field.getValue();
    this.setState({
      sdk,
      connected: true,
      value,
      schema: {
        ...sdk.field.schema,
      },
    });
  }

  public async handleValueChange(value: string): Promise<void> {
    if (this.state.connected && this.state.sdk) {
      try {
        await this.state.sdk.field.setValue(value);
        // tslint:disable-next-line
      } catch (err) {}
    }
  }

  public render(): React.ReactElement {
    return (
      <div className="App">
        {this.state.connected === true ? (
          <div>
            {this.state.sdk ? (
              <SdkContext.Provider value={{ sdk: this.state.sdk }}>
                <WithTheme>
                  {this.state.sdk.params.instance.type === 'criteria' ? <ManagedCriteria /> : <ManagedCoverageReport />}
                </WithTheme>
              </SdkContext.Provider>
            ) : null}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
