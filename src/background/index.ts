import { ipcRenderer } from 'electron';

export function compute() {
  // return 'some compute result'
  let progress = 0;
  for (let i = 0; i < 100000000; i += 1) {
    if (i % 1000000 === 0) {
      progress += 1;
      ipcRenderer.send('command', 'progress', progress);
    }
  }
  ipcRenderer.send('command', 'progress', 100);
  return 'some compute result';
}
