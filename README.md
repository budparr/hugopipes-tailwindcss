The Repo is a working example of Hugo's Pipes functionality using TailwindCSS and PurgeCSS.

- [Hugo Pipes](https://gohugo.io/hugo-pipes/)
- [TailwindCSS](https://github.com/tailwindcss/tailwindcss) (with a custom extractor for PurgeCSS)

- [PostCSS](https://github.com/postcss/postcss)
- [PurgeCSS](https://github.com/FullHuman/purgecss)
- [AutoPrefixer](https://github.com/postcss/autoprefixer)
- [PostCSS-Import](https://github.com/postcss/postcss-import) (because the importer that I think is native to Tailwind doesn't seem to work in this context)

The critical file is `/assets/css/postcss.config.js`

This is a base case implementation. I've tested with more elaborate classes, but it's possible that this is not yet set up just perfectly. So, check back or contribute!