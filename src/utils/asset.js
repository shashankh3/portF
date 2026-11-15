// Resolve a file in `public/` against the deployment base path.
//
// Vite/Vue CLI inject `BASE_URL` from `publicPath`. Absolute paths like
// `/videos/demo.mp4` ignore that prefix, which breaks project pages served
// from a subdirectory (for example https://user.github.io/repo/).

export function resolveAsset(path, base = '/') {
  const prefix = String(base || '/').replace(/\/+$/, '');
  return `${prefix}/${String(path).replace(/^\/+/, '')}`;
}

export function asset(path) {
  return resolveAsset(path, process.env.BASE_URL || '/');
}
