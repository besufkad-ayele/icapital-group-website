export const client = async ({
  query,
  variables,
}: {
  query: string;
  variables?: object;
}) => {
  const result = await fetch(process.env.NEXT_PUBLIC_API ?? "", {
    method: "POST",
    body: JSON.stringify({
      query,
      variables: variables ?? {},
    }),
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer 0f1c863cb1570726f7747d56e83b77605fd1ab2712b2039d27b3434e1fde4abae241e984df4c856f28676c0d146385ce88b59a2ad679b3205057990746c05c8ecddb4ab93a02ace0253b33dad60532e2471a73ec8db6e1d89ef8d70a97b760cb54b3dd92910190e7a54eba5e275e7f5c9d9c1e0c4e53d8643de7a4a5b3f7fe03`,
    },
    next: { revalidate: 60 },
  });
  return await result.json();
};
