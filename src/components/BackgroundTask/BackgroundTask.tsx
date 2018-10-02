import path from 'path';
import { requireTaskPool } from 'electron-remote';
import { ipcRenderer } from 'electron';
import React from 'react';

type State = Readonly<{
  progress: number;
  inProgress: boolean;
  computeDone: boolean;
  computeResult: string;
}>;

class BackgroundTask extends React.Component<{}, State> {
  readonly state: State = {
    progress: 0,
    inProgress: false,
    computeDone: false,
    computeResult: '',
  };

  async componentDidMount() {
    ipcRenderer.on('progress', this.onProgress);
  }

  componentWillUnmount() {
    ipcRenderer.removeListener('progress', this.onProgress);
  }

  onProgress = (event: Event, progress: number) => {
    this.setState({
      progress,
    });
  };

  sendCommand = async () => {
    this.setState({
      inProgress: true,
      computeDone: false,
    });
    // This method will run synchronously, but in a background BrowserWindow process
    // so this browserWindow will not block
    console.time('compute');
    const bg = requireTaskPool(path.resolve(__dirname, 'background.js'));
    const d = await bg.compute();
    this.setState({
      progress: 0,
      inProgress: false,
      computeDone: true,
      computeResult: d,
    });
    console.timeEnd('compute');
  };

  render() {
    return (
      <div>
        <button onClick={this.sendCommand}>Compute</button>
        {this.state.inProgress ? <div>Progress: {this.state.progress}</div> : null}
        {this.state.computeDone ? <div>Compute Result: {this.state.computeResult}</div> : null}
      </div>
    );
  }
}

export default BackgroundTask;
