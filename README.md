# transvueify-plugin-typescript

A [transvueify](https://github.com/trescenzi/transvueify) plugin which transpiles your code using TypeScript.

First install `transvueify-plugin-typescript`

`npm install transvueify-plugin-typescript --save-dev --g`

Note the global flag - this is important.

Then add it to your `transvueify.config.json`

```json
{
  "plugins": ["transvueify-plugin-typescript"]
}
```

Make sure to set up your `tsconfig.json` to include the compiler options you'd like
as `transvueify-plugin-typescript` respects your `tsconfig.json`.