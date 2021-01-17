import path from 'path';

const IS_DEV = process.env.NODE_ENV?.trim() === 'development';
const SRC_DIR = path.join(__dirname, '../src');
const BUILD_DIR = path.join(__dirname, '../build');
const PUBLIC_DIR = path.join(__dirname, '../public');

export { IS_DEV, SRC_DIR, BUILD_DIR, PUBLIC_DIR };
