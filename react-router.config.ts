import type { Config } from "@react-router/dev/config";
import { copyFileSync, readdirSync, renameSync, rmdirSync } from "node:fs";
import path, { join } from "node:path";

export default {
  basename: "/portfolio-v1/",
  ssr: false,
  prerender: true,
  buildEnd(args) {
    if (!args.viteConfig.isProduction) return;
    // When deploying to GitHub Pages, if you navigate from / to another
    // route and refresh the tab, it will show the default GH Pages 404
    // page. This happens because GH Pages is not configured to send all
    // traffic to the index.html where we can load our client-side JS.
    // To fix this, we can create a 404.html file that contains the same
    // content as index.html. This way, when the user refreshes the page,
    // GH Pages will serve our 404.html and everything will work as
    //expected.
    const buildPath = args.viteConfig.build.outDir;
    copyFileSync(
      join(buildPath, "portfolio-v1/index.html"),
      join(buildPath, "portfolio-v1/404.html"),
    );

    // Due to enabling prerendering, the build output will be placed in build/client/portfolio-v1
    // instead of build/client. We need to move the contents of that folder
    // to the build/client folder so that the server can serve the files correctly.
    const folderPath = join(buildPath, "portfolio-v1");
    const entries = readdirSync(folderPath);
    entries.forEach((entry) => {
      const entryPath = join(folderPath, entry);
      renameSync(entryPath, join(buildPath, entry));
    });
    rmdirSync(folderPath);
  },
} satisfies Config;
