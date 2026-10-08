#!/bin/bash

# protect-concepts.sh — Mark confidential concept dossiers (assets/concepts/)
# as unlisted: viewable by anyone who has the URL, but never indexed,
# followed, cached or snippeted by search engines, and never leaked to
# other sites through the Referer header.
#
# Usage:
#   ./scripts/protect-concepts.sh                 # all HTML under assets/concepts/
#   ./scripts/protect-concepts.sh <file-or-dir> [...]
#
# Idempotent: files that already carry the marker are left untouched.
# Only .html/.htm files are modified; other arguments are ignored.

set -uo pipefail

MARKER="concepts-unlisted"
TAGS='<meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex, noai, noimageai"><!-- '"$MARKER"' -->
<meta name="referrer" content="no-referrer">'

protect_file() {
    local file="$1"
    grep -q "$MARKER" "$file" && return 0
    if ! grep -qi '<head[^>]*>' "$file"; then
        echo "⚠️  No <head> in $file — cannot add noindex meta" >&2
        return 1
    fi
    # Insert right after the first <head> tag (rewritten in place, no temp file)
    if ! TAGS="$TAGS" perl -e '
        local $/; open(my $in, "<", $ARGV[0]) or die "$!\n"; my $c = <$in>; close $in;
        $c =~ s/(<head[^>]*>)/$1\n$ENV{TAGS}/i;
        open(my $out, ">", $ARGV[0]) or die "$!\n"; print $out $c; close $out or die "$!\n";
    ' "$file"; then
        echo "❌ Failed to update $file" >&2
        return 1
    fi
    echo "🔒 $file"
}

[ $# -eq 0 ] && set -- assets/concepts

status=0
for target in "$@"; do
    if [ -d "$target" ]; then
        while IFS= read -r -d '' f; do
            protect_file "$f" || status=1
        done < <(find "$target" -type f \( -iname '*.html' -o -iname '*.htm' \) -print0)
    elif [ -f "$target" ]; then
        case "$target" in
            *.html|*.htm|*.HTML|*.HTM) protect_file "$target" || status=1 ;;
        esac
    fi
done
exit $status
