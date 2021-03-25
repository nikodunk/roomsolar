#!/bin/bash

git add .
git commit -m "newest blog source deploy `date`"


echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"
git push origin main