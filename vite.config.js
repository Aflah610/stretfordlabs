import { defineConfig } from 'vite'

// Relative asset URLs, so the same build works both at the domain root (stretfordlabs.in)
// and under the repo path on GitHub Pages (aflah610.github.io/stretfordlabs/).
export default defineConfig({
  base: './',
})
