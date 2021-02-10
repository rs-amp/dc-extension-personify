import React from 'react';

import { init, ContentFieldExtension, Params } from 'dc-extensions-sdk';
import { SdkContext, withTheme } from 'unofficial-dynamic-content-ui';
import ManagedCoverageReport from './components/ManagedCoverageReport/ManagedCoverageReport';
import ManagedCriteria from './components/ManagedCriteria/ManagedCriteria';

interface AppState {
  connected: boolean;
  sdk?: ContentFieldExtension;
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
    const sdk = await init<ContentFieldExtension<any, Params>>();
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
              <SdkContext.Provider value={{ sdk: this.state.sdk as any }}>
                {withTheme(
                  ((this.state.schema['ui:extension'] || {}).params || {}).type === 'criteria' ? (
                    <ManagedCriteria />
                  ) : (
                    <ManagedCoverageReport />
                  )
                )}
              </SdkContext.Provider>
            ) : null}
          </div>
        ) : (
          <div>&nbsp;</div>
        )}
      </div>
    );
  }
}
