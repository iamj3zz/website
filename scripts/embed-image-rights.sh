#!/bin/bash

# embed-image-rights.sh — Embed IPTC/XMP rights + AI-training opt-out
# metadata into image file(s) or all images under a directory.
#
# Usage:
#   ./scripts/embed-image-rights.sh <file-or-directory> [...]
#
# No-ops (non-fatal, exit 0) if exiftool isn't installed — this lets callers
# (process-artworks.sh, the Lefthook pre-commit hook) run unconditionally
# without needing their own exiftool presence check.

set -uo pipefail

if ! command -v exiftool &>/dev/null; then
    echo "exiftool not installed — skipping rights metadata embed" >&2
    exit 0
fi

RIGHTS_NOTICE="© J3ZZ. All Rights Reserved. Not licensed for AI/ML training."
LICENSE_URL="https://www.j3zz.com/licensing/"

for target in "$@"; do
    if [ -d "$target" ]; then
        find "$target" -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' \) -print0 | \
            xargs -0 -r exiftool -overwrite_original -q -q \
                -XMP-xmpRights:Marked="True" \
                -XMP-xmpRights:WebStatement="$LICENSE_URL" \
                -IPTC:CopyrightNotice="$RIGHTS_NOTICE" \
                -XMP-dc:Rights="$RIGHTS_NOTICE"
    elif [ -f "$target" ]; then
        exiftool -overwrite_original -q -q \
            -XMP-xmpRights:Marked="True" \
            -XMP-xmpRights:WebStatement="$LICENSE_URL" \
            -IPTC:CopyrightNotice="$RIGHTS_NOTICE" \
            -XMP-dc:Rights="$RIGHTS_NOTICE" \
            "$target"
    fi
done
exit 0
