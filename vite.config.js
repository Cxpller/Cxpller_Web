import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import path from "path";

const pathSrc = path.resolve(__dirname, "src");

export default ({ mode }) => {
  const env = { ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    base: env.VITE_APP_ENV == "production" ? `/${env.VITE_FILE_NAME}` : "",
    //base: env.VITE_APP_ENV == "production" ? `/${env.VITE_FILE_NAME}` : "",
    server: {
      port: 3000,
      host: true,
      proxy: {
        // "/api": {
        //   target: env.VITE_PROXY_DOMAIN,
        //   changeOrigin: true,
        //   rewrite: (path) => path.replace(/^\/api/, ""),
        // },
      },
      hmr: true, //热更新
    },
    plugins: [
      vue(),
      Pages({
        dirs: "src/views", // 需要生成路由的文件目录
        exclude: ["**/components/*.vue"], // 排除在外的目录，即不将所有 components 目录下的 .vue 文件生成路由
      }),
    ],
    resolve: {
      alias: {
        "~/": `${pathSrc}/`,
        "@img": `${pathSrc}/assets/img`,
      },
    },
    // build: {
    //   terserOptions: {
    //     compress: {
    //       drop_console: true,
    //       drop_debugger: true,
    //     },
    //   },
    //   // chunkSizeWarningLimit: 1500,大文件报警阈值设置,不建议使用
    //   rollupOptions: {
    //     output: {
    //       //静态资源分类打包
    //       chunkFileNames: "js/[name]-[hash].js",
    //       entryFileNames: "js/[name]-[hash].js",
    //       assetFileNames: "[ext]/[name]-[hash].[ext]",
    //       manualChunks(id) {
    //         //静态资源分拆打包
    //         if (id.includes("node_modules")) {
    //           return id.toString().split("node_modules/")[1].split("/")[0].toString();
    //         }
    //       },
    //     },
    //   },
    // },
  });
};
