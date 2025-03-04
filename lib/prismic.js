import * as prismic from '@prismicio/client';

export const repositoryName = 'hari-portfolio'; // Replace with your Prismic repo name

export const createClient = (config = {}) => {
  return prismic.createClient(repositoryName, {
    fetchOptions:
      process.env.NODE_ENV === 'production' ? { next: { revalidate: 60 } } : {},
    ...config,
  });
};
