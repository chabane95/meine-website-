import { defineConfig } from "astro/config";
import rehypeMathjax from "rehype-mathjax";
import remarkMath from "remark-math";

export default defineConfig({
  // Diese zwei Plugins sorgen dafuer, dass du in Markdown normale LaTeX-Formeln
  // schreiben kannst: inline mit $...$ und als Block mit $$...$$.
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeMathjax]
  },
  devToolbar: {
    enabled: false
  }
});
