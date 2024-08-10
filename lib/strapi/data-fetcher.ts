const graphQlDataFetcher = async (query: string, variables: any) => {
  const response = await fetch(String(process.env.STRAPI_API_TOKEN), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  return await response.json()
}
