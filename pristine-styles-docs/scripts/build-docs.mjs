import { copyFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const rootDir = resolve(process.cwd());
const docsDir = resolve(rootDir, 'docs');

mkdirSync(docsDir, { recursive: true });
copyFileSync(resolve(rootDir, 'pristine-styles.css'), resolve(docsDir, 'pristine-styles.css'));
writeFileSync(resolve(docsDir, '.nojekyll'), '');