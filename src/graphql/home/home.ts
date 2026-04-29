import { gql } from "@apollo/client";

// Single optimized query to fetch all home page data in one request
export const GET_HOME_PAGE_DATA = gql`
  query GetHomePageData {
    home {
      hero_slides {
        title
        description
        buttonText
        buttonLink
        backgroundImage {
          url
          width
          height
        }
        bagde
      }
      trustedCompaniesSlider {
        sectionTitle
        logos(pagination: { limit: 100 }) {
          logo {
            url
            width
            height
          }
          altText
        }
      }
      aboutus {
        image {
          url
          width
          height
        }
        tagTitle
        heading
        description
      }
      features {
        tagTitle
        heading
        features {
          icon {
            url
            width
            height
          }
          title
          description
        }
      }
      upcomingEvents {
        title
        tagTitle
        description
        image {
          url
          width
          height
        }
        buttons {
          buttonText
          buttonLink
        }
      }
      journeySection {
        tagTitle
        heading
        image {
          url
          width
          height
        }
        milestones {
          year
          text
        }
      }
      testimonialsSection {
        tagTitle
        heading
        testimonials {
          name
          role
          testimonialText
          image {
            url
            width
            height
          }
        }
      }
      subscribeSection {
        heading
        highlight
        description
        emailPlaceholder
        buttonText
      }
      getStartedSection {
        heading
        description
        buttonText
        buttonLink
        services {
          name
          link
        }
      }
      SectorsSection {
        tagTitle
        heading
        description
        cards {
          title
          description
          link
          originalWebsiteBgColor
          isGradient
          image {
            url
            width
            height
          }
          logo {
            url
            width
            height
          }
        }
      }
      PortfolioSection {
        sectionTitle
        sectionHeading
        portfolios(sort: "updatedAt:desc") {
          title
          slug
          cardImage {
            url
            width
            height
          }
          logoImage {
            url
            width
            height
          }
          clientName
          clientDescription
          clientWebsite
        }
      }
    }
  }
`;

// Individual queries for backward compatibility with other pages
export const GET_HOME = gql`
  query GetHome {
    home {
      hero_slides {
        title
        description
        buttonText
        buttonLink
        backgroundImage {
          url
          width
          height
        }
        bagde
      }
    }
  }
`;

export const GET_TRUSTED_COMPANIES_SLIDER = gql`
  query GetTrustedCompaniesSlider {
    home {
      trustedCompaniesSlider {
        sectionTitle
        logos(pagination: { limit: 100 }) {
          logo {
            url
            width
            height
          }
          altText
        }
      }
    }
  }
`;

export const GET_ABOUT_US_SECTION = gql`
  query GetAboutUsSection {
    home {
      aboutus {
        image {
          url
          width
          height
        }
        tagTitle
        heading
        description
      }
    }
  }
`;

export const GET_FEATURES_SECTION = gql`
  query GetFeaturesSection {
    home {
      features {
        tagTitle
        heading
        features {
          icon {
            url
            width
            height
          }
          title
          description
        }
      }
    }
  }
`;

export const GET_UPCOMING_EVENTS = gql`
  query GetUpcomingEvents {
    home {
      upcomingEvents {
        title
        tagTitle
        description
        image {
          url
          width
          height
        }
        buttons {
          buttonText
          buttonLink
        }
      }
    }
  }
`;

export const GET_JOURNEY_SECTION = gql`
  query GetJourneySection {
    home {
      journeySection {
        tagTitle
        heading
        image {
          url
          width
          height
        }
        milestones {
          year
          text
        }
      }
    }
  }
`;

export const GET_TESTIMONIALS_SECTION = gql`
  query GetTestimonialsSection {
    home {
      testimonialsSection {
        tagTitle
        heading
        testimonials {
          name
          role
          testimonialText
          image {
            url
            width
            height
          }
        }
      }
    }
  }
`;

export const GET_SUBSCRIBE_SECTION = gql`
  query GetSubscribeSection {
    home {
      subscribeSection {
        heading
        highlight
        description
        emailPlaceholder
        buttonText
      }
    }
  }
`;

export const GET_GET_STARTED_SECTION = gql`
  query GetGetStartedSection {
    home {
      getStartedSection {
        heading
        description
        buttonText
        buttonLink
        services {
          name
          link
        }
      }
    }
  }
`;

export const GET_SECTORS_SECTION = gql`
  query GetSectorsSection {
    home {
      SectorsSection {
        tagTitle
        heading
        description
        cards {
          title
          description
          link
          originalWebsiteBgColor
          isGradient
          image {
            url
            width
            height
          }
          logo {
            url
            width
            height
          }
        }
      }
    }
  }
`;

export const GET_HOME_PORTFOLIO_SECTION = gql`
  query GetHomePortfolioSection {
    home {
      PortfolioSection {
        sectionTitle
        sectionHeading
        portfolios(sort: "updatedAt:desc") {
          title
          slug
          cardImage {
            url
            width
            height
          }
          logoImage {
            url
            width
            height
          }
          clientName
          clientDescription
          clientWebsite
        }
      }
    }
  }
`;

export const CREATE_SUBSCRIBER = gql`
  mutation createSubscriber($data: SubscriberInput!) {
    createSubscriber(data: $data) {
      email
      statusType
      subscribedAt
      consent
      source
    }
  }
`;
