// ev.ts
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-12-29';

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
);

export const token = assertValue(
  process.env.NEXT_PUBLIC_SANITY_TOKEN,
  'Missing environment variable: NEXT_PUBLIC_SANITY_TOKEN'
);

// Helper function to assert that the environment variable is not undefined
function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage); // Throw error if variable is missing
  }
  return v;
}