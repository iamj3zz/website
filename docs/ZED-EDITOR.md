# Zed Editor Guide

A comprehensive guide to keyboard shortcuts and best practices for efficient coding with Zed editor.

## Why Zed?

Zed is a high-performance code editor built in Rust, designed for speed and minimalism. Key advantages:

- **Lightning fast** - Uses Vulkan/Metal for GPU-accelerated rendering
- **Low memory footprint** - Much lighter than VS Code
- **Built-in AI assistance** - Native Claude integration
- **Multiplayer collaboration** - Real-time code sharing
- **Modern defaults** - Sensible out-of-the-box configuration

---

## Essential Keyboard Shortcuts

> **Note**: Shortcuts shown for Linux/Windows. On macOS, replace `Ctrl` with `Cmd` and `Alt` with `Option`.

### Core Commands

| Shortcut | Action |
|----------|--------|
| `Ctrl+Shift+P` | Command Palette (access any command) |
| `Ctrl+,` | Open Settings |
| `Ctrl+Shift+X` | Extensions Store |
| `Ctrl+Q` | Quit Zed |

### File Operations

| Shortcut | Action |
|----------|--------|
| `Ctrl+N` | New file |
| `Ctrl+Shift+N` | New window |
| `Ctrl+O` | Open folder |
| `Ctrl+S` | Save |
| `Ctrl+Shift+S` | Save As |
| `Ctrl+Alt+S` | Save All |
| `Ctrl+W` | Close tab |
| `Ctrl+Shift+W` | Close window |

### Navigation

| Shortcut | Action |
|----------|--------|
| `Ctrl+P` / `Ctrl+E` | Quick file open (fuzzy finder) |
| `Ctrl+G` | Go to line/column |
| `Ctrl+Shift+O` | Go to symbol in file |
| `F12` | Go to definition |
| `Ctrl+F12` | Go to type definition |
| `Alt+Shift+F12` | Find all references |
| `Ctrl+Alt+-` | Navigate back |
| `Ctrl+Alt+Right/Left` | Navigate between tabs |
| `F8` / `Shift+F8` | Next/Previous problem |

### Search

| Shortcut | Action |
|----------|--------|
| `Ctrl+F` | Find in file |
| `Ctrl+H` | Find and replace |
| `Ctrl+Shift+F` | Find in project (global search) |
| `Ctrl+Shift+H` | Replace in project |

### Editing

| Shortcut | Action |
|----------|--------|
| `Ctrl+Z` | Undo |
| `Ctrl+Shift+Z` | Redo |
| `Ctrl+X` | Cut line (no selection) / Cut selection |
| `Ctrl+C` | Copy line (no selection) / Copy selection |
| `Ctrl+V` | Paste |
| `Ctrl+/` | Toggle line comment |
| `Ctrl+Shift+D` | Duplicate line/selection |
| `Alt+Up/Down` | Move line up/down |
| `Ctrl+Shift+K` | Delete line |
| `Ctrl+Enter` | Insert line below |
| `Ctrl+Shift+Enter` | Insert line above |

### Multi-Cursor & Selection

| Shortcut | Action |
|----------|--------|
| `Ctrl+A` | Select all |
| `Alt+Shift+Up/Down` | Add cursor above/below |
| `Ctrl+D` | Select word / Select next occurrence |
| `Ctrl+Shift+L` | Select all occurrences |
| `Alt+Shift+Right/Left` | Expand/Shrink selection |
| `Ctrl+L` | Select entire line |

### Panels & Layout

| Shortcut | Action |
|----------|--------|
| `Ctrl+B` | Toggle left dock (file explorer) |
| `Ctrl+Alt+B` | Toggle right dock |
| `Ctrl+J` | Toggle bottom dock (terminal) |
| `Ctrl+Alt+Y` | Close all docks |
| `Ctrl+Shift+E` | Project panel |
| `Ctrl+Shift+B` | Outline panel |
| `Ctrl+\`` | Terminal panel |
| `Ctrl+Shift+M` | Diagnostics panel |

### Split Panes

| Shortcut | Action |
|----------|--------|
| `Ctrl+K` then `Up` | Split up |
| `Ctrl+K` then `Down` | Split down |
| `Ctrl+K` then `Left` | Split left |
| `Ctrl+K` then `Right` | Split right |
| `Ctrl+1/2/3...` | Focus pane by number |

### Terminal

| Shortcut | Action |
|----------|--------|
| `Ctrl+\`` | Toggle terminal |
| `Ctrl+Shift+\`` | New terminal instance |

### Git Integration

| Shortcut | Action |
|----------|--------|
| `Ctrl+Shift+G` | Toggle Git panel |
| `Ctrl+G` `Ctrl+G` | Git fetch |
| `Ctrl+G` `Down` | Git pull |
| `Ctrl+G` `Up` | Git push |
| `Ctrl+G` `D` | Git diff |

### AI Assistant

| Shortcut | Action |
|----------|--------|
| `Ctrl+Shift+?` | Open AI Assistant panel |
| `Ctrl+Alt+N` | New text thread |
| `Ctrl+Alt+T` | New chat thread |
| `Ctrl+I` | Agent profile menu |
| `Ctrl+Alt+/` | Model selection |
| `Ctrl+Enter` | Send prompt / Inline AI |
| `Ctrl+Shift+Enter` | Suggest edits |

### Code Folding

| Shortcut | Action |
|----------|--------|
| `Ctrl+Shift+[` | Fold code block |
| `Ctrl+Shift+]` | Unfold code block |
| `Ctrl+K` `Ctrl+0` | Fold all |
| `Ctrl+K` `Ctrl+J` | Unfold all |

---

## Vim Mode Shortcuts

Enable Vim mode in settings (`"vim_mode": true`) for these additional shortcuts:

### Navigation (Vim)

| Shortcut | Action |
|----------|--------|
| `h/j/k/l` | Left/Down/Up/Right |
| `w/b` | Word forward/backward |
| `e` | End of word |
| `0` / `$` | Start/End of line |
| `gg` / `G` | Start/End of file |
| `Ctrl+D/U` | Half page down/up |
| `:n` (e.g., `:10`) | Go to line n |

### Editing (Vim)

| Shortcut | Action |
|----------|--------|
| `i` / `a` | Insert before/after cursor |
| `I` / `A` | Insert at start/end of line |
| `o` / `O` | New line below/above |
| `u` | Undo |
| `Ctrl+R` | Redo |
| `dd` | Delete line |
| `yy` | Yank (copy) line |
| `p` / `P` | Paste after/before |
| `cc` | Change line |
| `ciw` | Change inner word |

### Code Intelligence (Vim)

| Shortcut | Action |
|----------|--------|
| `gd` | Go to definition |
| `gh` | Hover (show definition) |
| `g]` / `g[` | Next/Previous diagnostic |
| `za` | Toggle code fold |
| `zR` / `zM` | Open/Close all folds |
| `cd` | Rename symbol |

---

## Best Practices for Efficient Coding

### 1. Master the Command Palette

The Command Palette (`Ctrl+Shift+P`) is your gateway to everything:
- Search for any action without memorizing shortcuts
- Discover new features
- Execute commands by typing partial matches

**Tip**: Start typing any action name - Zed uses fuzzy matching.

### 2. Use Fuzzy File Navigation

Press `Ctrl+P` to open files instantly:
- Type partial file names: `usrcnt` matches `UserController`
- Include path segments: `src/comp/btn` finds `src/components/Button.tsx`
- Use recent files list for quick switching

### 3. Leverage Symbol Navigation

Navigate code structures efficiently:
- `Ctrl+Shift+O` - Jump to functions, classes, methods in current file
- `F12` - Go to definition under cursor
- `Alt+Shift+F12` - Find all references (great for refactoring)

### 4. Multi-Cursor Editing

Edit multiple locations simultaneously:
1. `Ctrl+D` - Select word, press again to select next occurrence
2. `Ctrl+Shift+L` - Select ALL occurrences at once
3. `Alt+Shift+Up/Down` - Add cursors vertically

**Use case**: Rename a variable in multiple places instantly.

### 5. Effective Panel Management

Keep your workspace clean:
- `Ctrl+B` - Toggle file explorer only when needed
- `Ctrl+J` - Toggle terminal
- `Ctrl+Alt+Y` - Close all panels for full-screen editing
- Use split panes (`Ctrl+K` + direction) for side-by-side editing

### 6. Git Workflow Integration

Use built-in Git features:
- `Ctrl+Shift+G` - Open Git panel
- Stage, commit, push without leaving editor
- Use AI to generate commit messages (`Alt+Tab` in Git panel)

### 7. AI-Assisted Development

Maximize AI productivity:
- `Ctrl+Shift+?` - Open AI assistant for questions
- `Ctrl+Enter` - Inline AI for quick completions
- Create custom prompts for repetitive tasks (save prompts for reuse)
- Use context tabs to maintain conversation history

### 8. Code Folding for Overview

When working with large files:
- `Ctrl+K` `Ctrl+0` - Fold all to see structure
- Unfold sections as needed
- `Ctrl+Shift+B` - Use Outline panel for navigation

### 9. Task Automation

Define custom tasks in `.zed/tasks.json`:
```json
[
  {
    "label": "Run Tests",
    "command": "npm test",
    "args": [],
    "use_new_terminal": true
  }
]
```

Run with `Ctrl+Shift+R` to execute tasks without typing commands.

### 10. Customize Your Setup

Edit settings (`Ctrl+,`) for your workflow:

```json
{
  "theme": "One Dark",
  "vim_mode": true,
  "relative_line_numbers": true,
  "tab_size": 2,
  "format_on_save": "on",
  "autosave": "on_focus_change",
  "soft_wrap": "editor_width"
}
```

### 11. Use Project-Specific Settings

Create `.zed/settings.json` in your project root for:
- Language-specific formatting
- Custom tab sizes per project
- Project-specific tasks

### 12. Keyboard-Driven Workflow

Minimize mouse usage:
1. Open files with `Ctrl+P`
2. Navigate with `Ctrl+G` (go to line) and symbol search
3. Use Vim mode for in-file navigation
4. Split panes instead of switching windows

---

## Recommended Configuration

### settings.json

Access via `Ctrl+Alt+,` or Command Palette > "Open Settings (JSON)":

```json
{
  "theme": "One Dark",
  "buffer_font_family": "JetBrains Mono",
  "buffer_font_size": 14,
  "ui_font_size": 14,

  "vim_mode": true,
  "relative_line_numbers": true,

  "tab_size": 2,
  "soft_wrap": "editor_width",
  "show_whitespaces": "boundary",

  "autosave": {
    "after_delay": {
      "milliseconds": 1000
    }
  },

  "format_on_save": "on",

  "terminal": {
    "font_family": "JetBrains Mono",
    "font_size": 13
  },

  "git": {
    "inline_blame": {
      "enabled": true
    }
  },

  "assistant": {
    "default_model": {
      "provider": "anthropic",
      "model": "claude-sonnet-4-5-20250929"
    }
  }
}
```

### keymap.json

Customize shortcuts via `Ctrl+Shift+P` > "Open Keymap":

```json
[
  {
    "context": "Editor",
    "bindings": {
      "ctrl-shift-d": "editor::DuplicateLine",
      "ctrl-shift-k": "editor::DeleteLine"
    }
  }
]
```

---

## Quick Reference Card

### Most Used Shortcuts

| Action | Shortcut |
|--------|----------|
| Command Palette | `Ctrl+Shift+P` |
| Quick Open File | `Ctrl+P` |
| Find in Project | `Ctrl+Shift+F` |
| Go to Definition | `F12` |
| Toggle Terminal | `Ctrl+\`` |
| Toggle Comment | `Ctrl+/` |
| Select Next Occurrence | `Ctrl+D` |
| Move Line | `Alt+Up/Down` |
| Duplicate Line | `Ctrl+Shift+D` |
| Save | `Ctrl+S` |

### Navigation Flow

```
Ctrl+P          -> Open file
Ctrl+Shift+O    -> Jump to symbol
Ctrl+G          -> Go to line
F12             -> Go to definition
Ctrl+Alt+-      -> Go back
```

### Editing Flow

```
Ctrl+D          -> Select word
Ctrl+D (repeat) -> Select next occurrences
Edit all        -> Type once, update everywhere
Ctrl+Shift+Z    -> Redo if needed
```

---

## Resources

- [Official Zed Documentation](https://zed.dev/docs)
- [Key Bindings Reference](https://zed.dev/docs/key-bindings)
- [Vim Mode Documentation](https://zed.dev/docs/vim)
- [Tasks Documentation](https://zed.dev/docs/tasks)

---

## Troubleshooting

### Common Issues

**Shortcuts not working?**
- Check for conflicts in keymap.json
- Verify context (some shortcuts only work in specific panels)
- Ensure no system shortcuts override Zed

**Vim mode issues?**
- Confirm `"vim_mode": true` in settings
- Some shortcuts differ from traditional Vim
- Use `:` in Vim mode for command entry

**Performance issues?**
- Zed is already optimized; if slow, check extensions
- Disable unused language servers
- Check system GPU driver compatibility

---

*Last updated: November 2025*
