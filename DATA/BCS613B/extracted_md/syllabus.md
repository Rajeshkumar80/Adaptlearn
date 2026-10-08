<!-- PROVENANCE: subject_code=BCS613B | semester=6 | source_type=SYLLABUS | source_file=BCS613B_Natural_Language_Processing.md | confidence=1.0 -->

# BCS613B — Natural Language Processing

> **VTU B.E. CSE | 2022 Scheme | 6th Semester**

---

## 📋 Course Information

| Field | Details |
|---|---|
| **Subject Name** | Natural Language Processing |
| **Subject Code** | BCS613B |
| **Semester** | 6th |
| **Credits** | 03 |
| **Teaching Hours/Week** | 3L : 0T : 0P : 0S |
| **Total Pedagogy Hours** | 40 |
| **CIE Marks** | 50 |
| **SEE Marks** | 50 |
| **Total Marks** | 100 |
| **Exam Duration** | 3 Hours |

---

## 🎯 Course Objectives

1. Understand foundational concepts of computational linguistics and natural language processing.
2. Master text preprocessing techniques: tokenization, lemmatization, stemming, and N-gram language models.
3. Learn morphological analysis, Part-of-Speech (POS) tagging, and Hidden Markov Models.
4. Analyze syntactic and semantic parsing, Named Entity Recognition (NER), and word sense disambiguation.
5. Explore modern deep learning for NLP: Word2Vec, GloVe, RNNs, Transformers (BERT, GPT), and LLMs.

---

## 📚 Module-Wise Syllabus

### Module 1: Introduction to NLP & Text Preprocessing
- Overview of Natural Language Processing: Applications, Ambiguity in natural language (Lexical, Syntactic, Semantic)
- NLP Pipeline: Text acquisition, Preprocessing, Feature extraction, Modeling, Evaluation
- Text Preprocessing: Tokenization, Sentence segmentation, Stop word removal, Normalization
- Stemming (Porter Stemmer, Lancaster Stemmer) vs Lemmatization (WordNet Lemmatizer)
- Regular Expressions in NLP, Text representation: Bag of Words (BoW), Term Frequency-Inverse Document Frequency (TF-IDF)

### Module 2: Language Modeling & Part-of-Speech Tagging
- N-gram Language Models: Bigrams, Trigrams, Chain rule of probability, Maximum Likelihood Estimation
- Evaluating Language Models: Perplexity metric
- Smoothing Techniques: Laplace (Add-1) smoothing, Add-k smoothing, Good-Turing, Backoff and Interpolation (Kneser-Ney smoothing)
- Part-of-Speech (POS) Tagging: Penn Treebank POS tag set, Ambiguity in POS tagging
- Rule-Based Tagging, Stochastic POS Tagging: Hidden Markov Models (HMM), Viterbi algorithm for decoding POS sequences

### Module 3: Syntactic & Semantic Analysis
- Formal Grammars for English: Context-Free Grammars (CFG) for natural languages
- Syntactic Parsing: Top-Down vs Bottom-Up parsing, Cocke-Younger-Kasami (CYK) algorithm, Earley parser
- Dependency Grammars and Dependency Parsing: Head-dependent relations, Transition-based dependency parsing
- Lexical Semantics: Word senses, Word relations (Synonymy, Antonymy, Hyponymy, Hypernymy)
- Word Sense Disambiguation (WSD): Supervised WSD, Dictionary-based approaches (Lesk algorithm)
- Named Entity Recognition (NER): Entity types, Sequence labeling formulations

### Module 4: Word Embeddings & Distributed Representations
- Limitations of Sparse Representations (One-Hot, TF-IDF)
- Distributed Representations: Distributional hypothesis ('You shall know a word by the company it keeps')
- Word2Vec: Continuous Bag of Words (CBOW) and Skip-Gram models, Negative sampling, Hierarchical softmax
- Global Vectors for Word Representation (GloVe): Objective function, Co-occurrence matrix factorization
- FastText: Subword information and handling out-of-vocabulary (OOV) tokens
- Evaluating Embeddings: Word similarity tasks, Analogical reasoning tasks

### Module 5: Deep Learning for NLP & Pre-trained Transformers
- Sequential Models for NLP: Recurrent Neural Networks (RNN), Vanishing gradient problem
- Long Short-Term Memory (LSTM) Networks and Gated Recurrent Units (GRU)
- Encoder-Decoder Architecture and Sequence-to-Sequence (Seq2Seq) models for Machine Translation
- Attention Mechanism: Bahdanau attention, Luong attention, Scaled Dot-Product Attention
- The Transformer Architecture: Self-Attention, Multi-Head Attention, Positional Encoding, Feedforward layers
- Pretrained Language Models: BERT (Masked LM, Next Sentence Prediction), GPT series (Autoregressive generation), Overview of Large Language Models (LLMs) and Prompt Engineering

---

## ✅ Course Outcomes (COs)

| CO | Description |
|---|---|
| **CO1** | Apply fundamental text processing techniques and construct N-gram language models with smoothing. |
| **CO2** | Implement Hidden Markov Models and the Viterbi algorithm for Part-of-Speech tagging. |
| **CO3** | Analyze syntactic tree structures using CYK parsing and perform Named Entity Recognition. |
| **CO4** | Train and utilize continuous vector word representations (Word2Vec, GloVe, FastText). |
| **CO5** | Explain deep learning sequence architectures (LSTM) and modern Transformer models (BERT, GPT). |

---

## 📖 Textbooks & References

- **Speech and Language Processing** — Daniel Jurafsky and James H. Martin, 3rd Edition, Pearson.
- **Natural Language Processing with Python** — Steven Bird, Ewan Klein, Edward Loper, O'Reilly Media.
- **Transformers for Natural Language Processing** — Denis Rothman, Packt Publishing.

---

> ⚠️ *Always refer to the official VTU website or your college's academic portal for the most current syllabus updates.*
