export interface CodeResponse {
  language: "c" | "java" | "python" | "cpp";
  programTitle: string;
  sourceCode: string;
  explanation: string;
  timeComplexity: string;
  spaceComplexity: string;
  sampleInputOutput: string;
}

const PROGRAM_TEMPLATES: Record<string, CodeResponse> = {
  bfs: {
    language: "c",
    programTitle: "Breadth First Search (BFS) Traversal of a Graph in C",
    sourceCode: `#include <stdio.h>
#include <stdlib.h>

#define MAX 20

int adj[MAX][MAX];
int visited[MAX];
int queue[MAX];
int front = -1, rear = -1;

void enqueue(int vertex) {
    if (rear == MAX - 1) return;
    if (front == -1) front = 0;
    queue[++rear] = vertex;
}

int dequeue() {
    if (front == -1 || front > rear) return -1;
    return queue[front++];
}

void bfs(int start, int n) {
    enqueue(start);
    visited[start] = 1;
    printf("BFS Order: ");
    while (front <= rear && front != -1) {
        int curr = dequeue();
        printf("%d ", curr);
        for (int i = 0; i < n; i++) {
            if (adj[curr][i] == 1 && !visited[i]) {
                enqueue(i);
                visited[i] = 1;
            }
        }
    }
    printf("\\n");
}

int main() {
    int n = 4;
    // Sample graph: 0-1, 0-2, 1-2, 2-3
    adj[0][1] = adj[1][0] = 1;
    adj[0][2] = adj[2][0] = 1;
    adj[1][2] = adj[2][1] = 1;
    adj[2][3] = adj[3][2] = 1;

    bfs(0, n);
    return 0;
}`,
    explanation: "Breadth First Search explores all neighbor vertices at the present depth before moving to vertices at the next depth level using a First-In-First-Out (FIFO) queue.",
    timeComplexity: "O(V + E) where V is the number of vertices and E is the number of edges.",
    spaceComplexity: "O(V) for visited array and queue tracking.",
    sampleInputOutput: "Input Graph: 4 vertices (0 to 3)\\nOutput: BFS Order: 0 1 2 3",
  },
  dfs: {
    language: "c",
    programTitle: "Depth First Search (DFS) Traversal of a Graph in C",
    sourceCode: `#include <stdio.h>

#define MAX 20
int adj[MAX][MAX];
int visited[MAX];

void dfs(int vertex, int n) {
    visited[vertex] = 1;
    printf("%d ", vertex);
    for (int i = 0; i < n; i++) {
        if (adj[vertex][i] == 1 && !visited[i]) {
            dfs(i, n);
        }
    }
}

int main() {
    int n = 4;
    adj[0][1] = adj[1][0] = 1;
    adj[0][2] = adj[2][0] = 1;
    adj[1][2] = adj[2][1] = 1;
    adj[2][3] = adj[3][2] = 1;

    printf("DFS Order: ");
    dfs(0, n);
    printf("\\n");
    return 0;
}`,
    explanation: "Depth First Search explores as far as possible along each branch before backtracking using recursive call stack or an explicit LIFO stack.",
    timeComplexity: "O(V + E)",
    spaceComplexity: "O(V) for the recursive call stack.",
    sampleInputOutput: "Output: DFS Order: 0 1 2 3",
  },
};

export function isCodeQuestion(question: string): boolean {
  return /\b(write a\s+(\w+\s+)?program|c program|java program|python code|source code|implement in c|implement in java|c code|bfs program|dfs program)\b/i.test(question);
}

export function resolveCodePipeline(question: string): CodeResponse | null {
  const q = question.toLowerCase();
  if (/\b(bfs|breadth first search)\b/i.test(q)) {
    return PROGRAM_TEMPLATES.bfs;
  }
  if (/\b(dfs|depth first search)\b/i.test(q)) {
    return PROGRAM_TEMPLATES.dfs;
  }
  return null;
}
