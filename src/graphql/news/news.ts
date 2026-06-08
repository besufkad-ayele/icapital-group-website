import { gql } from "@apollo/client";

// 1. Get all articles (flattened structure)
export const GET_ARTICLES = gql`
  query GetArticles {
    articles {
      documentId
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
        }
      }
      tags {
        name
        slug
      }
      createdAt
      updatedAt
    }
  }
`;

// 2. Get a single article by slug
export const GET_ARTICLE_BY_SLUG = gql`
  query GetArticleBySlug($slug: String!) {
    articles(filters: { slug: { eq: $slug } }) {
      documentId
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

// 3. Get all categories
export const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      documentId
      name
      slug
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
 