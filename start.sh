#!/bin/bash
concurrently "json-server --watch --port 4000 ./api/info.json" "react-scripts start"
