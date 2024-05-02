import react from "@vitejs/plugin-react-swc";
import pkg from "./package.json";
import { visualizer } from "rollup-plugin-visualizer";
import biomePlugin from "vite-plugin-biome"
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), visualizer(), biomePlugin({
    mode: "check",
    files: "src/**/*.ts",
  })],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "ReactWindowSystem",
      fileName: "[format]/[name]",
      formats: ["es", "cjs"],
    },
    rollupOptions:{
      external: [
        ...Object.keys(pkg.peerDependencies),
        ...Object.keys(pkg.dependencies)
      ],
      output:{
        preserveModules: true,
        exports: "named",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        }
      }
    }
  },
});
