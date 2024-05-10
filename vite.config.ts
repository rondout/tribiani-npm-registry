/*
 * @Description: 
 * @Author: shufei.han
 * @LastEditors: shufei.han
 * @Date: 2024-05-07 10:52:11
 * @LastEditTime: 2024-05-10 11:58:16
 */
import { defineConfig, UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export const commonViteConfig:UserConfig = {
  plugins: [
    dts()],
  resolve: {
    alias: {
      "@lib":resolve(__dirname, "./lib"),
      "@":resolve(__dirname, "./src"),
      "@libComponents":resolve(__dirname, "./lib/components"),
      "@components":resolve(__dirname, "./src/components"),
    }
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "lib/main.ts"),
      name: "MyLib",
      // the proper extensions will be added
      // fileName: 'my-lib',
      fileName(format, entryName) {
        return `${entryName}.${format}.js`;
      },
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
      
    },
  },
}
// https://vitejs.dev/config/
export default defineConfig({
  ...commonViteConfig,
  plugins:[
    vue(), 
    dts()
  ]
});
