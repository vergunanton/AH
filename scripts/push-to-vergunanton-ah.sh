#!/usr/bin/env bash
# Push the design system codebase to https://github.com/vergunanton/AH
# Run locally while logged in as GitHub user vergunanton (gh auth login / SSH).
set -euo pipefail

TARGET="${1:-https://github.com/vergunanton/AH.git}"
BRANCH="${2:-main}"

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Run this script from the repository root."
  exit 1
fi

echo "Remote target: $TARGET"
echo "Branch: $BRANCH"
echo ""
echo "Ensure the AH repo exists (create empty repo on GitHub if needed)."
echo ""

if git remote get-url ah >/dev/null 2>&1; then
  git remote set-url ah "$TARGET"
else
  git remote add ah "$TARGET"
fi

git push -u ah HEAD:"$BRANCH"

echo ""
echo "Done. In Figma: Admin → Figma GitHub app → connect vergunanton → allow repo AH → Allow cloning."
