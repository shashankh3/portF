// Resolve a file in `public/` against the deployment base path.
//
// Vite/Vue CLI inject `BASE_URL` from `publicPath`. Absolute paths like
// `/videos/demo.mp4` ignore that prefix, which breaks project pages served
// from a subdirectory (for example https://user.github.io/repo/).

const EXTERNAL_URL_RE = /^[a-z][a-z\d+.-]*:\/\//i;

export function resolveAsset(path, base = '/') {
  const rawPath = String(path ?? '');
  if (EXTERNAL_URL_RE.test(rawPath) || rawPath.startsWith('data:')) {
    return rawPath;
  }

  const normalizedBase = typeof base === 'string' && base.trim() ? base.trim() : '/';
  const prefix = normalizedBase.replace(/\/+$/, '');
  return `${prefix}/${rawPath.replace(/^\/+/, '')}`;
}

export function asset(path) {
  return resolveAsset(path, process.env.BASE_URL || '/');
}
