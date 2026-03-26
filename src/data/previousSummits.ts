export interface PreviousSummit {
  id: string;
  title: string;
  subtitle?: string;
  date: string;
  dateLabel?: string;
  location: string;
  locationLabel?: string;
  description: string;
  highlights: string[];
  image: string;
  openingRemark?: {
    description: string;
    speakerName: string;
    speakerRole: string;
    videoId: string;
    downloadUrl: string;
  };
  openingSession?: {
    description: string;
    videos: { videoId: string; caption: string }[];
  };
  sessionOne?: {
    description: string;
    presentations: { videoId: string; caption: string }[];
  };
}

export const previousSummits: Record<string, PreviousSummit> = {
  "1": {
    id: "1",
    title: "1st East Africa Finance Summit",
    subtitle: '"Pioneering Financial Integration in East Africa"',
    date: "May 10-11, 2016",
    dateLabel: "10th - 11th May, 2016",
    location: "Skylight Hotel, Nairobi",
    locationLabel: "Skylight Hotel, Nairobi",
    description:
      "The inaugural summit set the stage for regional financial collaboration and innovation.",
    highlights: [
      "100+ participants",
      "10+ speakers",
      "Focus on integration and innovation",
    ],
    image: "/images/summits/summit-1.jpg",
    openingRemark: {
      description:
        "Lorem ipsum fringilla faucibus dignissim congue posuere cursus. Sit viverra mi elementum lectus euismod massa aliquet faucibus. Aliquam amet viverra adipiscing semper praesent tempus lorem a dui. Eros mauris tortor in ipsum integer et adipiscing et egestas. Dictumst odio suspendisse feugiat duis nunc iaculis. Pulvinar nisl tristique mi at. Risus sed et et sed imperdiet odio ornare et.",
      speakerName: "H.E. MR John Doe",
      speakerRole: "Governor of Lorem Ipsum",
      videoId: "Q3hqGwo7kIg",
      downloadUrl: "/downloads/opening-remark-1.pdf",
    },
    openingSession: {
      description:
        "The welcoming speech was delivered by Gemechu Waktola (PhD), CEO of the i-Capital Africa Institute. Introductory Remarks were given by representatives of the summit co-organizers; Kennesia Lemi, Jimma University; Yared Molla, Association of Ethiopian Insurers and Yodit Kassa, Association of Chartered Certified Accountants (ACCA). The summit was, then, officially opened by H.E. Ahmed Shide, Ministry of Finance.",
      videos: [
        {
          videoId: "Q3hqGwo7kIg",
          caption: "Lorem Ipsum sit  fringila dingilism mi lectus",
        },
        {
          videoId: "Q3hqGwo7kIg",
          caption: "Lorem Ipsum sit  fringila dingilism mi lectus",
        },
        {
          videoId: "Q3hqGwo7kIg",
          caption: "Lorem Ipsum sit  fringila dingilism mi lectus",
        },
      ],
    },
  },
  "2": {
    id: "2",
    title: "2nd East Africa Finance Summit",
    subtitle: '"Building Bridges in Finance"',
    date: "May 12-13, 2017",
    dateLabel: "12th - 13th May, 2017",
    location: "Skylight Hotel, Nairobi",
    locationLabel: "Skylight Hotel, Nairobi",
    description:
      "The second summit focused on cross-border partnerships and financial inclusion.",
    highlights: [
      "150+ participants",
      "12+ speakers",
      "Cross-border finance focus",
    ],
    image: "/images/summits/summit-2.jpg",
    openingRemark: {
      description:
        "Lorem ipsum fringilla faucibus dignissim congue posuere cursus. Sit viverra mi elementum lectus euismod massa aliquet faucibus. Aliquam amet viverra adipiscing semper praesent tempus lorem a dui. Eros mauris tortor in ipsum integer et adipiscing et egestas. Dictumst odio suspendisse feugiat duis nunc iaculis. Pulvinar nisl tristique mi at. Risus sed et et sed imperdiet odio ornare et.",
      speakerName: "H.E. MR John Doe",
      speakerRole: "Governor of Lorem Ipsum",
      videoId: "Q3hqGwo7kIg",
      downloadUrl: "/downloads/opening-remark-2.pdf",
    },
    openingSession: {
      description:
        "The welcoming speech was delivered by Gemechu Waktola (PhD), CEO of the i-Capital Africa Institute. Introductory Remarks were given by representatives of the summit co-organizers; Kennesia Lemi, Jimma University; Yared Molla, Association of Ethiopian Insurers and Yodit Kassa, Association of Chartered Certified Accountants (ACCA). The summit was, then, officially opened by H.E. Ahmed Shide, Ministry of Finance.",
      videos: [
        {
          videoId: "Q3hqGwo7kIg",
          caption: "Lorem Ipsum sit  fringila dingilism mi lectus",
        },
        {
          videoId: "Q3hqGwo7kIg",
          caption: "Lorem Ipsum sit  fringila dingilism mi lectus",
        },
        {
          videoId: "Q3hqGwo7kIg",
          caption: "Lorem Ipsum sit  fringila dingilism mi lectus",
        },
      ],
    },
  },
  "3": {
    id: "3",
    title: "3rd East Africa Finance Summit",
    subtitle: '"Innovating for Growth"',
    date: "May 14-15, 2018",
    dateLabel: "14th - 15th May, 2018",
    location: "Skylight Hotel, Nairobi",
    locationLabel: "Skylight Hotel, Nairobi",
    description:
      "The third summit highlighted fintech and digital transformation in the region.",
    highlights: [
      "200+ participants",
      "15+ speakers",
      "Fintech and digital focus",
    ],
    image: "/images/summits/summit-3.jpg",
    openingRemark: {
      description:
        "Lorem ipsum fringilla faucibus dignissim congue posuere cursus. Sit viverra mi elementum lectus euismod massa aliquet faucibus. Aliquam amet viverra adipiscing semper praesent tempus lorem a dui. Eros mauris tortor in ipsum integer et adipiscing et egestas. Dictumst odio suspendisse feugiat duis nunc iaculis. Pulvinar nisl tristique mi at. Risus sed et et sed imperdiet odio ornare et.",
      speakerName: "H.E. MR John Doe",
      speakerRole: "Governor of Lorem Ipsum",
      videoId: "Q3hqGwo7kIg",
      downloadUrl: "/downloads/opening-remark-3.pdf",
    },
    openingSession: {
      description:
        "The welcoming speech was delivered by Gemechu Waktola (PhD), CEO of the i-Capital Africa Institute. Introductory Remarks were given by representatives of the summit co-organizers; Kennesia Lemi, Jimma University; Yared Molla, Association of Ethiopian Insurers and Yodit Kassa, Association of Chartered Certified Accountants (ACCA). The summit was, then, officially opened by H.E. Ahmed Shide, Ministry of Finance.",
      videos: [
        {
          videoId: "Q3hqGwo7kIg",
          caption: "Lorem Ipsum sit  fringila dingilism mi lectus",
        },
        {
          videoId: "Q3hqGwo7kIg",
          caption: "Lorem Ipsum sit  fringila dingilism mi lectus",
        },
        {
          videoId: "Q3hqGwo7kIg",
          caption: "Lorem Ipsum sit  fringila dingilism mi lectus",
        },
      ],
    },
  },
  "4": {
    id: "4",
    title: "4th East Africa Finance Summit",
    subtitle: '"Sustainable Finance for the Future"',
    date: "May 16-17, 2019",
    dateLabel: "16th - 17th May, 2019",
    location: "Skylight Hotel, Nairobi",
    locationLabel: "Skylight Hotel, Nairobi",
    description:
      "The fourth summit addressed sustainability and green finance initiatives.",
    highlights: [
      "250+ participants",
      "18+ speakers",
      "Sustainability and green finance",
    ],
    image: "/images/summits/summit-4.jpg",
    openingRemark: {
      description:
        "Lorem ipsum fringilla faucibus dignissim congue posuere cursus. Sit viverra mi elementum lectus euismod massa aliquet faucibus. Aliquam amet viverra adipiscing semper praesent tempus lorem a dui. Eros mauris tortor in ipsum integer et adipiscing et egestas. Dictumst odio suspendisse feugiat duis nunc iaculis. Pulvinar nisl tristique mi at. Risus sed et et sed imperdiet odio ornare et.",
      speakerName: "H.E. MR John Doe",
      speakerRole: "Governor of Lorem Ipsum",
      videoId: "Q3hqGwo7kIg",
      downloadUrl: "/downloads/opening-remark-4.pdf",
    },
    openingSession: {
      description:
        "The welcoming speech was delivered by Gemechu Waktola (PhD), CEO of the i-Capital Africa Institute. Introductory Remarks were given by representatives of the summit co-organizers; Kennesia Lemi, Jimma University; Yared Molla, Association of Ethiopian Insurers and Yodit Kassa, Association of Chartered Certified Accountants (ACCA). The summit was, then, officially opened by H.E. Ahmed Shide, Ministry of Finance.",
      videos: [
        {
          videoId: "Q3hqGwo7kIg",
          caption: "Lorem Ipsum sit  fringila dingilism mi lectus",
        },
        {
          videoId: "Q3hqGwo7kIg",
          caption: "Lorem Ipsum sit  fringila dingilism mi lectus",
        },
        {
          videoId: "Q3hqGwo7kIg",
          caption: "Lorem Ipsum sit  fringila dingilism mi lectus",
        },
      ],
    },
  },
  "5": {
    id: "5",
    title: "5th East Africa Finance Summit",
    subtitle:
      '"Reshaping the Future of Finance Sector in the Age of Disruption"',
    date: "May 9-10, 2024",
    dateLabel: "9th - 10th May, 2024",
    location: "Skylight Hotel, Ethiopia",
    locationLabel: "Skylight Hotel, Ethiopia",
    description:
      "The fifth summit explored disruptive trends and the future of finance in East Africa.",
    highlights: [
      "300+ participants",
      "20+ speakers",
      "Disruptive trends in finance",
    ],
    image: "/images/summits/summit-5.jpg",
    openingRemark: {
      description:
        "Lorem ipsum fringilla faucibus dignissim congue posuere cursus. Sit viverra mi elementum lectus euismod massa aliquet faucibus. Aliquam amet viverra adipiscing semper praesent tempus lorem a dui. Eros mauris tortor in ipsum integer et adipiscing et egestas. Dictumst odio suspendisse feugiat duis nunc iaculis. Pulvinar nisl tristique mi at. Risus sed et et sed imperdiet odio ornare et.",
      speakerName: "H.E. MR John Doe",
      speakerRole: "Governor of Lorem Ipsum",
      videoId: "Q3hqGwo7kIg",
      downloadUrl: "/downloads/opening-remark-5.pdf",
    },
    openingSession: {
      description:
        "The welcoming speech was delivered by Gemechu Waktola (PhD), CEO of the i-Capital Africa Institute. Introductory Remarks were given by representatives of the summit co-organizers; Kennesia Lemi, Jimma University; Yared Molla, Association of Ethiopian Insurers and Yodit Kassa, Association of Chartered Certified Accountants (ACCA). The summit was, then, officially opened by H.E. Ahmed Shide, Ministry of Finance.",
      videos: [
        {
          videoId: "Q3hqGwo7kIg",
          caption: "Lorem Ipsum sit  fringila dingilism mi lectus",
        },
        {
          videoId: "Q3hqGwo7kIg",
          caption: "Lorem Ipsum sit  fringila dingilism mi lectus",
        },
        {
          videoId: "Q3hqGwo7kIg",
          caption: "Lorem Ipsum sit  fringila dingilism mi lectus",
        },
      ],
    },
  },
  "6": {
    id: "6",
    title: "6th East Africa Finance Summit",
    subtitle: '"Driving Financial Inclusion"',
    date: "May 12-13, 2021",
    dateLabel: "12th - 13th May, 2021",
    location: "Skylight Hotel, Kampala",
    locationLabel: "Skylight Hotel, Kampala",
    description:
      "The sixth summit focused on financial inclusion and access to finance for all.",
    highlights: [
      "350+ participants",
      "25+ speakers",
      "Financial inclusion focus",
    ],
    image: "/images/summits/summit-6.jpg",
    openingRemark: {
      description:
        "Lorem ipsum fringilla faucibus dignissim congue posuere cursus. Sit viverra mi elementum lectus euismod massa aliquet faucibus. Aliquam amet viverra adipiscing semper praesent tempus lorem a dui. Eros mauris tortor in ipsum integer et adipiscing et egestas. Dictumst odio suspendisse feugiat duis nunc iaculis. Pulvinar nisl tristique mi at. Risus sed et et sed imperdiet odio ornare et.",
      speakerName: "H.E. MR John Doe",
      speakerRole: "Governor of Lorem Ipsum",
      videoId: "Q3hqGwo7kIg",
      downloadUrl: "/downloads/opening-remark-6.pdf",
    },
    openingSession: {
      description:
        "The welcoming speech was delivered by Gemechu Waktola (PhD), CEO of the i-Capital Africa Institute. Introductory Remarks were given by representatives of the summit co-organizers; Kennesia Lemi, Jimma University; Yared Molla, Association of Ethiopian Insurers and Yodit Kassa, Association of Chartered Certified Accountants (ACCA). The summit was, then, officially opened by H.E. Ahmed Shide, Ministry of Finance.",
      videos: [
        {
          videoId: "Q3hqGwo7kIg",
          caption: "Lorem Ipsum sit  fringila dingilism mi lectus",
        },
        {
          videoId: "Q3hqGwo7kIg",
          caption: "Lorem Ipsum sit  fringila dingilism mi lectus",
        },
        {
          videoId: "Q3hqGwo7kIg",
          caption: "Lorem Ipsum sit  fringila dingilism mi lectus",
        },
      ],
    },
  },
  "7": {
    id: "7",
    title: "7th East Africa Finance Summit",
    subtitle:
      '"Reshaping the Future of Finance Sector in the Age of Disruption"',
    date: "May 15-16, 2022",
    dateLabel: "15th - 16th May, 2022",
    location: "Skylight Hotel, Kampala",
    locationLabel: "Skylight Hotel, Kampala",
    description:
      "The 7th East Africa Finance Summit brought together key stakeholders in the financial sector to discuss emerging trends, challenges, and opportunities in the region's financial landscape.",
    highlights: [
      "Over 400 participants from across East Africa",
      "30+ expert speakers and panelists",
      "15+ interactive sessions and workshops",
      "Networking opportunities with industry leaders",
    ],
    image: "/images/summits/summit-7.jpg",
    openingRemark: {
      description:
        "Lorem ipsum fringilla faucibus dignissim congue posuere cursus. Sit viverra mi elementum lectus euismod massa aliquet faucibus. Aliquam amet viverra adipiscing semper praesent tempus lorem a dui. Eros mauris tortor in ipsum integer et adipiscing et egestas. Dictumst odio suspendisse feugiat duis nunc iaculis. Pulvinar nisl tristique mi at. Risus sed et et sed imperdiet odio ornare et.",
      speakerName: "H.E. MR John Doe",
      speakerRole: "Governor of Lorem Ipsum",
      videoId: "Q3hqGwo7kIg",
      downloadUrl: "/downloads/opening-remark-7.pdf",
    },
    openingSession: {
      description:
        "The welcoming speech was delivered by Gemechu Waktola (PhD), CEO of the i-Capital Africa Institute. Introductory Remarks were given by representatives of the summit co-organizers; Kennesia Lemi, Jimma University; Yared Molla, Association of Ethiopian Insurers and Yodit Kassa, Association of Chartered Certified Accountants (ACCA). The summit was, then, officially opened by H.E. Ahmed Shide, Ministry of Finance.",
      videos: [
        {
          videoId: "Q3hqGwo7kIg",
          caption: "Lorem Ipsum sit  fringila dingilism mi lectus",
        },
        {
          videoId: "Q3hqGwo7kIg",
          caption: "Lorem Ipsum sit  fringila dingilism mi lectus",
        },
        {
          videoId: "Q3hqGwo7kIg",
          caption: "Lorem Ipsum sit  fringila dingilism mi lectus",
        },
      ],
    },
  },
  "8": {
    id: "8",
    title: "8th East Africa Finance Summit",
    subtitle: '"Digital Transformation and Sustainable Finance"',
    date: "May 15-16, 2023",
    dateLabel: "15th - 16th May, 2023",
    location: "Skylight Hotel, Kampala",
    locationLabel: "Skylight Hotel, Kampala",
    description:
      "The 8th East Africa Finance Summit focused on digital transformation and sustainable finance, bringing together industry leaders to shape the future of finance in the region.",
    highlights: [
      "450+ participants from across East Africa",
      "35+ expert speakers and panelists",
      "20+ interactive sessions and workshops",
      "Focus on digital transformation and sustainable finance",
    ],
    image: "/images/summits/summit-8.jpg",
  },
};
