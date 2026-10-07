@echo off
REM AdaptLearn ML Pipeline — run from ml-pipeline\ directory
REM Uses Python 3.11 (CUDA) for all ML steps

SET PY=C:\Users\Rajesh\AppData\Local\Programs\Python\Python311\python.exe

IF "%1"=="generate" (
    echo === Step 1: Generating VTU QA dataset via Ollama ===
    "%PY%" data_gen/generate_dataset.py %2 %3 %4 %5
    goto end
)

IF "%1"=="generate-all" (
    echo === Step 1: Generating ALL subjects ===
    "%PY%" data_gen/generate_dataset.py --pairs 30
    goto end
)

IF "%1"=="validate" (
    echo === Step 2: Validating dataset ===
    "%PY%" data_gen/validate_dataset.py --fix
    goto end
)

IF "%1"=="train" (
    echo === Step 3: Fine-tuning model ===
    "%PY%" training/train_lora.py %2 %3 %4
    goto end
)

IF "%1"=="export" (
    echo === Step 4: Exporting to Ollama ===
    "%PY%" training/export_to_ollama.py
    goto end
)

IF "%1"=="test" (
    echo === Testing model ===
    "%PY%" training/test_model.py --model adaptlearn --all
    goto end
)

IF "%1"=="full" (
    echo === Full pipeline: generate + validate + train + export ===
    "%PY%" data_gen/generate_dataset.py --pairs 30
    "%PY%" data_gen/validate_dataset.py --fix
    "%PY%" training/train_lora.py
    "%PY%" training/export_to_ollama.py
    goto end
)

echo Usage:
echo   run.bat generate              -- generate all subjects (30 pairs each)
echo   run.bat generate --subject BCS701 --pairs 40
echo   run.bat validate              -- validate and deduplicate dataset
echo   run.bat train                 -- fine-tune on GPU
echo   run.bat export                -- merge + push to Ollama
echo   run.bat test                  -- test the trained model
echo   run.bat full                  -- run all steps in sequence

:end
