export const pipeline = jest.fn().mockResolvedValue({
  async call(text: string) {
    return { data: new Float32Array(384).fill(0.5) };
  },
});
