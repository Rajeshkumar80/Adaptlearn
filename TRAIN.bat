@echo off
title AdaptLearn — ML Training Pipeline
color 0B

SET PY=C:\Users\Rajesh\AppData\Local\Programs\Python\Python311\python.exe

echo.
echo  ==========================================
echo   AdaptLearn — ML Training Pipeline
echo  ==========================================
echo.
echo  Uses Python 3.11 (CUDA - RTX 4050)
echo  Model: Qwen2.5-1.5B-Instruct + LoRA
echo.

IF "%1"=="generate" (
    echo Generating QA dataset from VTU notes...
    echo This runs in background - takes several hours for full corpus.
    start "Data Generation" cmd /k ""%PY%" D:\Adaptlearn\ml-pipeline\data_gen\generate_dataset.py --pairs 30"
    goto end
)

IF "%1"=="generate-one" (
    echo Generating for one subject: %2
    "%PY%" D:\Adaptlearn\ml-pipeline\data_gen\generate_dataset.py --subject %2 --pairs 30
    goto end
)

IF "%1"=="validate" (
    echo Validating dataset...
    "%PY%" D:\Adaptlearn\ml-pipeline\data_gen\validate_dataset.py --fix
    goto end
)

IF "%1"=="train" (
    echo Fine-tuning model on GPU...
    "%PY%" D:\Adaptlearn\ml-pipeline\training\train_lora.py --epochs 3
    goto end
)

IF "%1"=="export" (
    echo Exporting to Ollama...
    "%PY%" D:\Adaptlearn\ml-pipeline\training\export_to_ollama.py
    goto end
)

IF "%1"=="test" (
    echo Testing model...
    "%PY%" D:\Adaptlearn\ml-pipeline\training\test_model.py --model adaptlearn --all
    goto end
)

IF "%1"=="auto" (
    echo Auto-train: generate + wait for 300 pairs + train + export
    start "Data Generation" cmd /k ""%PY%" D:\Adaptlearn\ml-pipeline\data_gen\generate_dataset.py --pairs 30"
    timeout /t 3 /nobreak >nul
    "%PY%" D:\Adaptlearn\ml-pipeline\auto_train.py --min-pairs 300
    goto end
)

IF "%1"=="status" (
    echo Current dataset status:
    if exist "D:\Adaptlearn\ml-pipeline\output\training_data.jsonl" (
        for /f %%i in ('find /c /v "" "D:\Adaptlearn\ml-pipeline\output\training_data.jsonl"') do echo   Pairs: %%i
    ) else (
        echo   No data yet.
    )
    goto end
)

echo Usage:
echo   TRAIN.bat generate          -- generate all subjects in background
echo   TRAIN.bat generate-one BCS701 -- generate one subject
echo   TRAIN.bat validate          -- validate + deduplicate dataset
echo   TRAIN.bat train             -- fine-tune on GPU (RTX 4050)
echo   TRAIN.bat export            -- export to Ollama as 'adaptlearn'
echo   TRAIN.bat test              -- test the trained model
echo   TRAIN.bat auto              -- generate + auto-start training at 300 pairs
echo   TRAIN.bat status            -- show current pair count

:end
echo.
