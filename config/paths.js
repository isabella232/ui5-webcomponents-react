import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const root = path.resolve(__dirname, '..');
const PATHS = {
  root,
  src: path.join(root, 'src'),
  build: path.join(root, 'build'),
  shared: path.join(root, 'shared'),
  temp: path.join(root, 'temp'),
  coverage: path.join(root, 'temp/coverage'),
  jestCoverage: path.join(root, 'temp/jest-coverage'),
  cypressCoverage: path.join(root, 'temp/cypress-coverage'),
  nycOutput: path.join(root, 'temp/.nyc_output'),
  nodeModules: path.join(root, 'node_modules'),
  packages: path.join(root, 'packages')
};

export default PATHS;
