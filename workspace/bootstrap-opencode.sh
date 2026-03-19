#!/bin/bash
# Auto-install OpenCode CLI if missing
if ! command -v opencode &>/dev/null; then
  curl -fsSL https://opencode.ai/install | bash
  source ~/.bashrc
  echo "[bootstrap] OpenCode installed."
else
  echo "[bootstrap] OpenCode already present: $(opencode --version)"
fi
