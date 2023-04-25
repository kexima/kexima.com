#!/bin/bash

# 优先运行 Firefox-devlopper
if [ `command -v firefox-dev` ]; then
    start firefox-dev -private-window "http://www.kexima.com"
else
    start chrome -incognito "http://www.kexima.com"
fi
hugo server -w -D -p 80 --bind 0.0.0.0 --baseURL http://www.kexima.com --contentDir content --forceSyncStatic --ignoreCache --noHTTPCache --disableFastRender --noBuildLock