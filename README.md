# React Testing Library notes

It doesn't work well with this version of CRA out of the box when following the docs and/or using msw.

You need to:
- Update RTL
- update Jest DOM
- install jest-environment-jsdom-sixteen
- update test script to "react-scripts test --env=jest-environment-jsdom-sixteen"

# mockServiceWorker
Follow the installation instructions from the msw docs.

RTL docs don't show msw being used the same way as the msw docs, these examples show the RTL way of doing things.

# Getting random failures

When saving a file, some tests seems to throw the first time, but if you get jest to run all again it's fine. It appears there's some timeout in RTL (or possibly msw) that expects you to have the fastest hardware.