import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 想打包似乎说是修改这个
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()]
})
