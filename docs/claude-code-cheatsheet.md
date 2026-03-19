# Claude Code Cheat Sheet

Quick reference guide for Claude Code CLI commands, shortcuts, and workflows.

## Installation & Quick Start

```bash
npm install -g @anthropic-ai/claude-code
claude                    # Launch interactive REPL
claude --version         # Check version
claude update            # Update to latest
```

## Essential Commands

### Navigation & Session

| Command | Description |
|---------|-------------|
| `/help` | Display available commands |
| `/exit` | Terminate REPL |
| `/clear` | Reset conversation history |
| `/config` | Access configuration panel |
| `/doctor` | Verify installation status |
| `/cos` | Display session costs and duration |
| `/compact` | Summarize conversation to save context |

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+C` | Cancel current operation |
| `Ctrl+D` | Exit application |
| `Tab` | Auto-complete |
| `Up/Down` | Navigate command history |

## CLI Modes

### Interactive Mode
```bash
claude                           # Start REPL
claude "explain this codebase"   # REPL with initial prompt
```

### Print Mode (Non-interactive)
```bash
claude -p "explain this function"           # Single query, output to stdout
cat logs.txt | claude -p "explain errors"   # Pipe content for analysis
```

### Session Management
```bash
claude -c                        # Continue last conversation
claude --continue                # Same as -c
claude -r "session-id" "query"   # Resume specific session by ID
```

## Model Selection

```bash
claude --model sonnet                        # Use Sonnet (faster, cheaper)
claude --model opus                          # Use Opus (most capable)
claude --model claude-sonnet-4-20250514      # Specific version
```

## Directory & File Operations

```bash
claude --add-dir ../apps ../lib              # Add multiple working directories
```

## Output Formats

```bash
claude -p "query" --output-format text         # Plain text (default)
claude -p "query" --output-format json         # JSON output for scripting
claude -p "query" --output-format stream-json  # Streaming JSON
```

## Tool Permissions

### Allow Specific Tools
```bash
claude --allowedTools "Bash(git:*)" "Write" "Read"
claude --allowedTools "Bash(git log:*)" "Bash(git status:*)"
```

### Disallow Dangerous Tools
```bash
claude --disallowedTools "Bash(rm:*)" "Bash(sudo:*)"
```

### Skip All Permission Prompts (Use with Caution)
```bash
claude --dangerously-skip-permissions
```

### Combined Example
```bash
claude --allowedTools "Bash(git:*)" "Write" "Read" \
       --disallowedTools "Bash(rm:*)" "Bash(sudo:*)"
```

## Session Control

```bash
claude -p --max-turns 3 "focused query"    # Limit iterations
claude --verbose                           # Enable detailed logging
```

## Advanced Usage

### Piping & Automation

```bash
# Analyze git history
git log --oneline -10 | claude -p "summarize these commits"

# Error analysis
cat error.log | claude -p "find the root cause"

# Code review
git diff HEAD~1 | claude -p "review for security issues" > review.md

# Generate changelog
git log --oneline -20 | claude -p "create changelog" > CHANGELOG.md
```

### Batch Processing

```bash
# Analyze multiple files
find . -name "*.js" -exec claude -p "analyze: {}" \; > report.txt

# Generate documentation
for file in src/*.py; do
  claude -p "generate docstring for $file" >> docs.md
done
```

### JSON Output for Scripts

```bash
# Save analysis as JSON
claude -p "analyze codebase" --output-format json > analysis.json

# Parse with jq
SESSION_ID=$(claude -p "task" --output-format json | jq -r '.session_id')
```

## Custom Slash Commands

Create custom commands in `.claude/commands/` directory:

```bash
mkdir -p .claude/commands
```

Example: `.claude/commands/review.md`
```markdown
Review this code for:
1. Security vulnerabilities
2. Performance issues
3. Best practice violations
```

Use with: `/project:review`

## MCP (Model Context Protocol)

```bash
claude --mcp                    # Configure MCP servers
/mcp                            # Access MCP in REPL
```

## IDE Integration

```bash
/ide vscode                     # Configure VS Code integration
/ide configure                  # General IDE setup
```

## Performance Optimization

### Best Practices

1. **Clear between tasks**: Use `/clear` to reset context
2. **Limit turns**: Use `--max-turns` for focused queries
3. **Compact conversations**: Use `/compact` for long sessions
4. **Check costs**: Use `/cos` to monitor usage

### Examples

```bash
# Quick, focused analysis
claude -p --max-turns 1 "quick code review"

# Compact long conversation
/compact "keep architecture decisions only"

# Parallel processing
claude -p "task 1" & claude -p "task 2" & wait
```

## Troubleshooting

### Installation Issues
```bash
claude --version                           # Check installation
claude /doctor                             # Run diagnostics
npm reinstall -g @anthropic-ai/claude-code # Reinstall
```

### Performance Issues
```bash
/clear                                     # Reset conversation
/compact "keep essentials"                 # Reduce context
claude -p --max-turns 3 "query"            # Limit iterations
```

### Permission Issues
```bash
claude --allowedTools "Bash(git:*)"        # Grant specific permissions
claude --disallowedTools "Bash(rm:*)"      # Restrict dangerous commands
```

## Common Workflows

### Code Review Workflow
```bash
# Security review
git diff main | claude -p "review for security vulnerabilities"

# Performance review
git diff main | claude -p "identify performance issues"

# Style review
git diff main | claude -p "check code style and best practices"
```

### Documentation Workflow
```bash
# Generate README
claude -p "generate README for this project" > README.md

# API documentation
claude -p "document all public functions" > API.md

# Changelog
git log --oneline v1.0..HEAD | claude -p "create changelog" > CHANGELOG.md
```

### Debugging Workflow
```bash
# Analyze error logs
cat error.log | claude -p "identify root cause and suggest fixes"

# Debug specific file
claude -p "find bugs in src/auth.js"

# Stack trace analysis
cat stacktrace.txt | claude -p "explain this error and how to fix it"
```

## Security Best Practices

1. **Never use** `--dangerously-skip-permissions` in production
2. **Always restrict** dangerous commands with `--disallowedTools`
3. **Keep updated**: Run `claude update` regularly
4. **Audit usage**: Check `/cos` for unexpected activity
5. **Use specific permissions**: Prefer `Bash(git log:*)` over `Bash(git:*)`

## Quick Reference Card

| Task | Command |
|------|---------|
| Start REPL | `claude` |
| Quick query | `claude -p "query"` |
| Continue session | `claude -c` |
| Resume by ID | `claude -r "id" "query"` |
| Check costs | `/cos` |
| Clear history | `/clear` |
| Compact context | `/compact` |
| Use Opus model | `claude --model opus` |
| JSON output | `--output-format json` |
| Limit turns | `--max-turns N` |
| Add directories | `--add-dir path1 path2` |
| Allow tools | `--allowedTools "Tool"` |
| Block tools | `--disallowedTools "Tool"` |

## Resources

- [Official Claude Code Documentation](https://docs.anthropic.com)
- [MCP Documentation](https://docs.anthropic.com/mcp)
- [GitHub Repository](https://github.com/anthropics/claude-code)
