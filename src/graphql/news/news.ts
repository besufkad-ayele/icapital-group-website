import { gql } from "@apollo/client";

// 1. Get all articles (flat structure, no pagination or filters)
export const GET_ARTICLES = gql`
  query GetArticles {
    articles {
      title
      slug
      summary
      content
      featuredImage {
        url
        width
        height
      }
      publicationDate
      isFeatured
      metaTitle
      metaDescription
      publicationStatus
      category {
        name
        slug
      }
      author {
        name
        avatar {
          url
          width
          height
        }
      }
      tags {
        name
        slug
      }
      relatedArticles {
        title
        slug
      }
    }
  }
`;

// 2. Get a single article by slug (flat structure)
export const GET_ARTICLE_BY_SLUG = gql`
  query GetArticleBySlug($slug: String!) {
    articles(filters: { slug: { eq: $slug } }) {
      title
      slug
      summary
      content
      featuredImage {
        url
        width
        height
      }
      publicationDate
      isFeatured
      metaTitle
      metaDescription
      publicationStatus
      category {
        name
        slug
      }
      author {
        name
        avatar {
          url
          width
          height
        }
      }
      tags {
        name
        slug
      }
      relatedArticles {
        title
        slug
      }
    }
  }
`;

// 3. Get all categories (flat structure)
export const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      name
      slug
      description
      image {
        url
        width
        height
      }
    }
  }
`;

// 4. Get all authors (flat structure)
export const GET_AUTHORS = gql`
  query GetAuthors {
    authors {
      name
      slug
      bio
      avatar {
        url
        width
        height
      }
      email
      socialLinks
    }
  }
`;

// 5. Get all tags (flat structure)
export const GET_TAGS = gql`
  query GetTags {
    tags {
      name
      slug
    }
  }
`;
 