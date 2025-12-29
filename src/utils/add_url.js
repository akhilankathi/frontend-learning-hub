export const normalizeUrl = (url) =>
  url.startsWith('http://') || url.startsWith('https://')
    ? url
    : `https://${url}`;


export const normalizeLearningData = (data) => {
  return Object.fromEntries(
    Object.entries(data).map(([key, value]) => [
      key,
      {
        ...value,
        sections: value.sections.map((section) => ({
          ...section,
          ...(section.resources && {
            resources: section.resources.map((resource) => ({
              ...resource,
              url: normalizeUrl(resource.url)
            }))
          })
        }))
      }
    ])
  );
};