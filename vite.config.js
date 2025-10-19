// vite.config.js (in the vck-ojt-project folder)

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // REMOVE the 'root: 'vck-ojt-app',' line here
  plugins: [react()],
  // If you are keeping files in sub-folders, you might need to adjust the paths
  // in index.html and vite.config.js accordingly.
})