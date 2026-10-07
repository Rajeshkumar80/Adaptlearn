@echo off
REM Start Ollama with 3 parallel request slots for fast data generation
set OLLAMA_NUM_PARALLEL=3
title Ollama (3x parallel mode)
ollama serve
