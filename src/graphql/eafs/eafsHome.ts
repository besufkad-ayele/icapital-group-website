import { gql } from "@apollo/client";

export const GET_EAFS_HERO_SECTION = gql`
  query GetEAFSHeroSection {
    eafsHome {
      EAFSHeroSection {
        tagTitle
        heading
        description
        buttonText
        buttonLink
      }
    }
  }
`;

export const GET_EAFS_ABOUT_SECTION = gql`
  query GetEAFSAboutSection {
    eafsHome {
      EAFSAboutSection {
        heading
        description
        image {
          url
          height
          width
        }
        buttonText
        buttonLink
      }
    }
  }
`;

export const GET_EAFS_WHY_TO_ATTEND = gql`
  query GetEAFSWhyToAttend {
    eafsHome {
      EAFSWhyToAttend {
        heading
        reasonCard {
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

export const GET_EAFS_KEY_THEMES = gql`
  query GetEAFSKeyThemes {
    eafsHome {
      EAFSKeyThemes {
        heading
        keyThemesCard {
          title
          icon {
            url
            width
            height
          }
          description
        }
      }
    }
  }
`;

export const GET_EAFS_EXPLORE_PREVIOUS_SUMMITS = gql`
  query GetEAFSExplorePreviousSummits {
    eafsHome {
      EAFSExplorePreviousSummits {
        image {
          url
          width
          height
        }
        description
        buttonText
        buttonLink
        heading
      }
    }
  }
`;

export const GET_EAFS_WHO_ATTENDS = gql`
  query GetEAFSWhoAttends {
    eafsHome {
      EAFSWhoAttends {
        heading
        subHeading
        whoAttendsCard {
          icon {
            url
            width
            height
          }
          Name
        }
      }
    }
  }
`;

export const GET_EAFS_PREVIOUS_SPEECHES = gql`
  query GetEAFSPreviousSpeeches {
    eafsHome {
      EAFSPreviousSpeeches {
        heading
        subHeading
        previousSpeechesVideo {
          speakerName
          role
          youtubeUrl
          summitNumber
        }
      }
    }
  }
`;

export const GET_EAFS_SUMMIT_TESTIMONIAL = gql`
  query GetEAFSSummitTestimonial {
    eafsHome {
      EAFSSummitTestimonial {
        heading
        summitTestimonialCard {
          testimonialQuote
          attendeeName
          summitNumber
          avatar {
            url
            width
            height
          }
        }
      }
    }
  }
`;

export const GET_EAFS_ORGANIZERS_PARTNERS = gql`
  query GetEAFSOrganizersPartners {
    eafsHome {
      EAFSOrganizersPartners {
        heading
        logosCard {
          companyName
          companyLogo {
            url
            width
            height
          }
        }
      }
    }
  }
`;

export const GET_EAFS_NUMBERS = gql`
  query GetEAFSNumbers {
    eafsHome {
      EAFSInNumbers {
        heading
        numbersCard {
          icon {
            url
            width
            height
          }
          endNumber
          Name
        }
      }
    }
  }
`;

export const GET_EAFS_REGISTER_NOW = gql`
  query GetEAFSRegisterNow {
    eafsHome {
      EAFSRegisterNow {
        heading
        subHeading
        buttonText
        buttonLink
      }
    }
  }
`;
