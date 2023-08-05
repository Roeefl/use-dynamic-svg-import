# use-dynamic-svg-import

A small react hook to allow dynamically importing SVG files directly into jsx/tsx file
Meant to use with vite.

# credits

Many thanks to (@junwen-k)[https://stackoverflow.com/users/11125492/junwen-k] for this
See (original thread)[https://stackoverflow.com/a/61472427/6643053]

# how to add to repo

```
pnpm i -D @roeefl/use-dynamic-svg-import
OR
npm i -D @roeefl/use-dynamic-svg-import
```

# how to use in an example Icon fuctional component

```ts
import { useDynamicSvgImport } from '@roeefl/use-dynamic-svg-import';

export function Icon({ name }: { name: string }) {
  const { loading, SvgIcon } = useDynamicSvgImport({ name });

  if (loading) {
    // ...
  }

  return <SvgIcon width={...} height={...} color={...} className={...} />
}
```
