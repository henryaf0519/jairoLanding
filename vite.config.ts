
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: [
      '@tabler/icons-react',
      '@radix-ui/react-label'
    ]
  }
})
