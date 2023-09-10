# About

These contents are actually the same as [Memanah Rajawali](https://github.com/fxadilima/memanah-rajawali),
but has been modified, so that it can be deployed statically with Deno Deploy.

To convert the _markdown_ documents, we need to run [simple build script](tests/build.tsx) with Deno.

The simple server only expect requests for `.md` or `.mdx` documents, and will look for `.md.html` inside
known location.

There's no error handling for the moment, in case it could not find it.

