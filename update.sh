#!/bin/bash

# Default directory
DEFAULT_DIR="/Users/rohitkumar/code/github_pages"
DEFAULT_URL="localhost:8000/"
# Default commit message
DEFAULT_MSG="New posts - $(date "+%A %d %B %Y %r")"

# Prompt user to change directory
read -p "Enter directory path [$DEFAULT_DIR]: " DIR
if [ -z "$DIR" ]; then
    DIR="$DEFAULT_DIR"
fi

# Prompt user to change URL
read -p "Enter URL [$DEFAULT_URL]: " URL
if [ -z "$URL" ]; then
    URL="$DEFAULT_URL"
fi

# Prompt user to change commit message
read -p "Enter commit message [$DEFAULT_MSG]: " MSG
if [ -z "$MSG" ]; then
    MSG="$DEFAULT_MSG"
fi

# Change to the directory
cd "$DIR"

# Download files from localhost:8000
wget -r --mirror --convert-links --adjust-extension --page-requisites --no-parent http://localhost:8000/

# Move to the other directory
cd skywalker-plain.github.io

# Copy downloaded files to the current directory
cp -r ../localhost:8000/* .

# Add and commit changes to git
git add --all
git commit -m "$MSG"
git push -u origin main
