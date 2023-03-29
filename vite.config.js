import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import path from "path";

const pathSrc = path.resolve(__dirname, "src");

export default ({ mode }) => {
  const env = { ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    server: {
      port: 3000,
      host: true,
      proxy: {
        "/api": {
          target: env.VITE_PROXY_DOMAIN,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
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
  });
};
