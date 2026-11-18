import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const rootDir = process.cwd();
const apiDir = path.join(rootDir, 'src', 'app', 'api');
const backupDir = path.join(rootDir, '.api-pages-backup');
const outDir = path.join(rootDir, 'out');
const nextDir = path.join(rootDir, '.next');
const nextBackupDir = path.join(rootDir, '.next-server-backup');

try {
  // Temporarily stash src/app/api so Next.js output:'export' does not reject POST route handlers
  if (fs.existsSync(apiDir)) {
    if (fs.existsSync(backupDir)) {
      fs.rmSync(backupDir, { recursive: true, force: true });
    }
    fs.renameSync(apiDir, backupDir);
  }

  // Keep existing .next server build intact if localhost server is running
  if (fs.existsSync(nextDir)) {
    if (fs.existsSync(nextBackupDir)) {
      fs.rmSync(nextBackupDir, { recursive: true, force: true });
    }
    try {
      fs.renameSync(nextDir, nextBackupDir);
    } catch {
      // Ignore if locked
    }
  }

  console.log('Building static GitHub Pages export into ./out ...');
  execSync('npx next build', {
    stdio: 'inherit',
    env: {
      ...process.env,
      GITHUB_PAGES: 'true',
      NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH || '/Maldivia',
    },
  });

  // Create .nojekyll inside ./out so GitHub Pages serves /_next/ static assets
  if (fs.existsSync(outDir)) {
    fs.writeFileSync(path.join(outDir, '.nojekyll'), '');
    console.log('Created out/.nojekyll successfully.');
  }
} finally {
  if (fs.existsSync(backupDir)) {
    if (fs.existsSync(apiDir)) {
      fs.rmSync(apiDir, { recursive: true, force: true });
    }
    fs.renameSync(backupDir, apiDir);
  }
  if (fs.existsSync(nextBackupDir)) {
    try {
      if (fs.existsSync(nextDir)) {
        fs.rmSync(nextDir, { recursive: true, force: true });
      }
      fs.renameSync(nextBackupDir, nextDir);
    } catch {
      // Ignore
    }
  }
}
