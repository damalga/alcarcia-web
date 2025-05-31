import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Si usas una estructura con "src", puedes añadir:
  root: 'src',
  publicDir: '../public', // O ajusta si cambias tu estructura
});
