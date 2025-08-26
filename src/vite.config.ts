import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Enable React Fast Refresh
      fastRefresh: true,
      // Include .tsx files
      include: "**/*.tsx"
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./"),
      "@components": resolve(__dirname, "./components"),
      "@utils": resolve(__dirname, "./utils"),
      "@styles": resolve(__dirname, "./styles"),
      "@hooks": resolve(__dirname, "./hooks")
    },
  },
  css: {
    postcss: './postcss.config.js',
    devSourcemap: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    target: 'es2020',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': ['lucide-react', 'motion', 'framer-motion'],
          'radix-vendor': [
            '@radix-ui/react-accordion',
            '@radix-ui/react-alert-dialog',
            '@radix-ui/react-aspect-ratio',
            '@radix-ui/react-avatar',
            '@radix-ui/react-checkbox',
            '@radix-ui/react-collapsible',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-hover-card',
            '@radix-ui/react-label',
            '@radix-ui/react-menubar',
            '@radix-ui/react-navigation-menu',
            '@radix-ui/react-popover',
            '@radix-ui/react-progress',
            '@radix-ui/react-radio-group',
            '@radix-ui/react-scroll-area',
            '@radix-ui/react-select',
            '@radix-ui/react-separator',
            '@radix-ui/react-slider',
            '@radix-ui/react-switch',
            '@radix-ui/react-tabs',
            '@radix-ui/react-toggle',
            '@radix-ui/react-toggle-group',
            '@radix-ui/react-tooltip'
          ],
          'utils-vendor': ['clsx', 'class-variance-authority', 'tailwind-merge'],
          'forms-vendor': ['react-hook-form'],
          'charts-vendor': ['recharts']
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || []
          let extType = info[info.length - 1]
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType || '')) {
            extType = 'images'
          } else if (/woff2?|eot|ttf|otf/i.test(extType || '')) {
            extType = 'fonts'
          }
          return `assets/${extType}/[name]-[hash][extname]`
        }
      }
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    reportCompressedSize: false
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    open: false,
    cors: true,
    hmr: {
      overlay: true
    }
  },
  preview: {
    port: 4173,
    host: '0.0.0.0',
    cors: true
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'lucide-react',
      'motion',
      'framer-motion',
      'clsx',
      'class-variance-authority',
      'tailwind-merge'
    ]
  },
  define: {
    // Eliminate unused features for production
    __DEV__: JSON.stringify(false),
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
  }
})