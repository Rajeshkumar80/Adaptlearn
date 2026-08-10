const embedImpl = async () => ({ data: new Float32Array(384).fill(0.5) });

// Pipeline extractors are callable functions in the real lib; some code paths
// also invoke `extractor.call(text, options)` — support both shapes.
export const pipeline = jest.fn().mockResolvedValue(
  Object.assign(embedImpl, {
    call: jest.fn(async (text: string) => ({ data: new Float32Array(384).fill(0.5) })),
  })
);