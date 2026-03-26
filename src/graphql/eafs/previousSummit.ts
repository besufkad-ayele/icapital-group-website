import { gql } from "@apollo/client";

export const GET_PREVIOUS_SUMMIT_PAGE = gql`
  query GetPreviousSummitPage {
    previousSummitPage {
      heroTitle
      heroSubTitle
      eafs_previous_summit_highlights {
        title
        year
        highlight
        slug
        banner {
          url
          width
          height
        }
      }
    }
  }
`;

export const GET_SUMMIT_DETAIL_BY_SLUG = gql`
  query GetSummitDetailBySlug($slug: String!) {
    eafsPreviousSummitDetails(filters: { slug: { eq: $slug } }) {
      summitTitle
      date
      location
      heroBackgroundImage {
        url
        width
        height
      }
      recapRewind {
        recapTitle
        recapDescription
        youtubeURL
      }
      openingRemark {
        remarkTitle
        remarkDescription
        speaker
        speakerRole
        youtubeURL
        downloadFile {
          url
          name
        }
      }
      openingSession {
        title
        description
        videoItem {
          youtubeURL
          caption
        }
      }
      sessionBlock {
        sessionTitle
        sessionDescription
        presentations {
          title
          videoItem {
            youtubeURL
            caption
          }
        }
        panelDiscussions {
          title
          videoItem {
            youtubeURL
            caption
          }
        }
      }
      summitDescription
      organizersPartners {
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
      strategicPartners {
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
      platinuimSponsors {
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
