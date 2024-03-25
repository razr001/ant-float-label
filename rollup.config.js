import typescript from "@rollup/plugin-typescript";
import del from "rollup-plugin-delete";
import css from "rollup-plugin-import-css";
import copy from "rollup-plugin-copy";

const banner = '"use client" \nimport "./index.css"'

export default [{
  input: "./src/index.ts",
  plugins:[
    del({ targets: "dist/*" }),
    typescript(),
    css({minify:true, output: "index.css"}),
    copy({
      targets: [
        { src: "./package.json", dest: "dist/" },
        { src: "./README.md", dest: "dist/" },
        { src: "./LICENSE", dest: "dist/" },
        { src: "./image.png", dest: "dist/" },
      ]
    })
  ],
  output: [
    {
      format: "es",
      file: "dist/index.js",
      banner
    }
  ]
}];