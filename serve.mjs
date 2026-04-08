// serve.mjs — starts the Next.js dev server for Mandel Moving
import { spawn } from 'child_process';

const server = spawn('npm', ['run', 'dev'], {
  stdio: 'inherit',
  shell: true,
});

server.on('exit', (code) => {
  process.exit(code ?? 0);
});
