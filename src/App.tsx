import React from 'react';

import { init } from 'dc-extensions-sdk';
import { WithTheme, ManagedCoverageReport, ManagedCriteria } from './components';
import SdkContext, { Sdk } from './components/SdkContext';

interface AppState {
  connected: boolean;
  sdk?: Sdk;
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

  public getWidget(type: string | Array<string> = 'tags'): React.ReactElement {
    const types = Array.of(type).flat();
    const isCoverage = types.includes('coverage');

    return isCoverage ? <ManagedCoverageReport /> : <ManagedCriteria types={types} />;
  }

  public render(): React.ReactElement {
    return (
      <div className="App">
        {this.state.connected === true && (
          <div>
            {this.state.sdk ? (
              <SdkContext sdk={this.state.sdk}>
                <WithTheme>{this.getWidget(this.state.sdk.params.instance.type)}</WithTheme>
              </SdkContext>
            ) : null}
          </div>
        )}
      </div>
    );
  }
}
