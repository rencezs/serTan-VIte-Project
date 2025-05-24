import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import { resolve } from 'path' 
// https://vite.dev/config/
export default defineConfig({
 /* base: "/setTan-Vite-ProjectTP/",*/
  plugins: [preact()],
   server: {
     host: true,
  port: 3000,
  allowedHosts: 'all',
  open: true, 
  },
   build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        second: resolve(__dirname, 'SecondPage.html'),
        third: resolve(__dirname, 'ContactAllOf.html'),
      }
    }
  }
  
})

  
