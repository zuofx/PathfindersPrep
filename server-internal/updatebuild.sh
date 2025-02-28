#!/bin/bash
cd /home/huy/GitHub/PathfindersPrep/pathfinders
npm run build
pm2 restart PathfindersProd
