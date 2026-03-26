/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the
   * `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO
   * 8601 standard for representation of dates and times using the Gregorian calendar.
   */
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  Long: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type AdvisorySolutions = {
  __typename?: 'AdvisorySolutions';
  callToAction?: Maybe<Scalars['String']['output']>;
  clients?: Maybe<Array<Maybe<ComponentOrganizerOrganizer>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<UploadFileEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  solution?: Maybe<Array<Maybe<ComponentSolutionSolution>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  youtubeUrl?: Maybe<Scalars['String']['output']>;
};


export type AdvisorySolutionsClientsArgs = {
  filters?: InputMaybe<ComponentOrganizerOrganizerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type AdvisorySolutionsSolutionArgs = {
  filters?: InputMaybe<ComponentSolutionSolutionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AdvisorySolutionsEntity = {
  __typename?: 'AdvisorySolutionsEntity';
  attributes?: Maybe<AdvisorySolutions>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type AdvisorySolutionsEntityResponse = {
  __typename?: 'AdvisorySolutionsEntityResponse';
  data?: Maybe<AdvisorySolutionsEntity>;
};

export type AdvisorySolutionsInput = {
  callToAction?: InputMaybe<Scalars['String']['input']>;
  clients?: InputMaybe<Array<InputMaybe<ComponentOrganizerOrganizerInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  solution?: InputMaybe<Array<InputMaybe<ComponentSolutionSolutionInput>>>;
  youtubeUrl?: InputMaybe<Scalars['String']['input']>;
};

export type ApplyEafs = {
  __typename?: 'ApplyEafs';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<UploadFileEntityResponse>;
  message?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ApplyEafsEntity = {
  __typename?: 'ApplyEafsEntity';
  attributes?: Maybe<ApplyEafs>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ApplyEafsEntityResponse = {
  __typename?: 'ApplyEafsEntityResponse';
  data?: Maybe<ApplyEafsEntity>;
};

export type ApplyEafsInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['ID']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Author = {
  __typename?: 'Author';
  blogs?: Maybe<BlogRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type AuthorBlogsArgs = {
  filters?: InputMaybe<BlogFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AuthorEntity = {
  __typename?: 'AuthorEntity';
  attributes?: Maybe<Author>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type AuthorEntityResponse = {
  __typename?: 'AuthorEntityResponse';
  data?: Maybe<AuthorEntity>;
};

export type AuthorEntityResponseCollection = {
  __typename?: 'AuthorEntityResponseCollection';
  data: Array<AuthorEntity>;
  meta: ResponseCollectionMeta;
};

export type AuthorFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<AuthorFiltersInput>>>;
  blogs?: InputMaybe<BlogFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<AuthorFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AuthorFiltersInput>>>;
  position?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type AuthorInput = {
  blogs?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Blog = {
  __typename?: 'Blog';
  author?: Maybe<AuthorEntityResponse>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  hits?: Maybe<Scalars['Long']['output']>;
  image?: Maybe<UploadFileEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type BlogEntity = {
  __typename?: 'BlogEntity';
  attributes?: Maybe<Blog>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type BlogEntityResponse = {
  __typename?: 'BlogEntityResponse';
  data?: Maybe<BlogEntity>;
};

export type BlogEntityResponseCollection = {
  __typename?: 'BlogEntityResponseCollection';
  data: Array<BlogEntity>;
  meta: ResponseCollectionMeta;
};

export type BlogFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<BlogFiltersInput>>>;
  author?: InputMaybe<AuthorFiltersInput>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  hits?: InputMaybe<LongFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<BlogFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<BlogFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  tags?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type BlogInput = {
  author?: InputMaybe<Scalars['ID']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  hits?: InputMaybe<Scalars['Long']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type BlogRelationResponseCollection = {
  __typename?: 'BlogRelationResponseCollection';
  data: Array<BlogEntity>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nei?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentCategoryCategory = {
  __typename?: 'ComponentCategoryCategory';
  file?: Maybe<Array<Maybe<ComponentFileFile>>>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};


export type ComponentCategoryCategoryFileArgs = {
  filters?: InputMaybe<ComponentFileFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentCategoryCategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentCategoryCategoryFiltersInput>>>;
  file?: InputMaybe<ComponentFileFileFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentCategoryCategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentCategoryCategoryFiltersInput>>>;
};

export type ComponentCategoryCategoryInput = {
  file?: InputMaybe<Array<InputMaybe<ComponentFileFileInput>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentCbsPointCbsPoint = {
  __typename?: 'ComponentCbsPointCbsPoint';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentCbsPointCbsPointFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentCbsPointCbsPointFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentCbsPointCbsPointFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentCbsPointCbsPointFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentCbsPointCbsPointInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentCertificationPackageCertificationPackage = {
  __typename?: 'ComponentCertificationPackageCertificationPackage';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ComponentCertificationPackageCertificationPackageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentCertificationPackageCertificationPackageFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentCertificationPackageCertificationPackageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentCertificationPackageCertificationPackageFiltersInput>>>;
};

export type ComponentCertificationPackageCertificationPackageInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentClientCounterClientCounter = {
  __typename?: 'ComponentClientCounterClientCounter';
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['Long']['output']>;
};

export type ComponentClientCounterClientCounterFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentClientCounterClientCounterFiltersInput>>>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentClientCounterClientCounterFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentClientCounterClientCounterFiltersInput>>>;
  value?: InputMaybe<LongFilterInput>;
};

export type ComponentClientCounterClientCounterInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['Long']['input']>;
};

export type ComponentEafsSessionEafsSession = {
  __typename?: 'ComponentEafsSessionEafsSession';
  id: Scalars['ID']['output'];
  moderator?: Maybe<ComponentPersonPerson>;
  points?: Maybe<Array<Maybe<ComponentPointPoints>>>;
  speaker?: Maybe<Array<Maybe<ComponentPersonPerson>>>;
  title?: Maybe<Scalars['String']['output']>;
};


export type ComponentEafsSessionEafsSessionPointsArgs = {
  filters?: InputMaybe<ComponentPointPointsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentEafsSessionEafsSessionSpeakerArgs = {
  filters?: InputMaybe<ComponentPersonPersonFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentEafsSessionEafsSessionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentEafsSessionEafsSessionFiltersInput>>>;
  moderator?: InputMaybe<ComponentPersonPersonFiltersInput>;
  not?: InputMaybe<ComponentEafsSessionEafsSessionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentEafsSessionEafsSessionFiltersInput>>>;
  points?: InputMaybe<ComponentPointPointsFiltersInput>;
  speaker?: InputMaybe<ComponentPersonPersonFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentEafsSessionEafsSessionInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  moderator?: InputMaybe<ComponentPersonPersonInput>;
  points?: InputMaybe<Array<InputMaybe<ComponentPointPointsInput>>>;
  speaker?: InputMaybe<Array<InputMaybe<ComponentPersonPersonInput>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentEafsSettingEafsSetting = {
  __typename?: 'ComponentEafsSettingEafsSetting';
  id: Scalars['ID']['output'];
  order?: Maybe<Scalars['Int']['output']>;
  published?: Maybe<Scalars['Boolean']['output']>;
  sectionName?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentEafsSettingEafsSettingFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentEafsSettingEafsSettingFiltersInput>>>;
  not?: InputMaybe<ComponentEafsSettingEafsSettingFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentEafsSettingEafsSettingFiltersInput>>>;
  order?: InputMaybe<IntFilterInput>;
  published?: InputMaybe<BooleanFilterInput>;
  sectionName?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentEafsSettingEafsSettingInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  sectionName?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentExposureProgramExposureProgram = {
  __typename?: 'ComponentExposureProgramExposureProgram';
  id: Scalars['ID']['output'];
  points?: Maybe<Array<Maybe<ComponentPointPoints>>>;
  title?: Maybe<Scalars['String']['output']>;
};


export type ComponentExposureProgramExposureProgramPointsArgs = {
  filters?: InputMaybe<ComponentPointPointsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentExposureProgramExposureProgramFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentExposureProgramExposureProgramFiltersInput>>>;
  not?: InputMaybe<ComponentExposureProgramExposureProgramFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentExposureProgramExposureProgramFiltersInput>>>;
  points?: InputMaybe<ComponentPointPointsFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentExposureProgramExposureProgramInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  points?: InputMaybe<Array<InputMaybe<ComponentPointPointsInput>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentFileFile = {
  __typename?: 'ComponentFileFile';
  content?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type ComponentFileFileFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentFileFileFiltersInput>>>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentFileFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentFileFileFiltersInput>>>;
};

export type ComponentFileFileInput = {
  content?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentIntroIntro = {
  __typename?: 'ComponentIntroIntro';
  description?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
  position?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentIntroIntroInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentLsBannerLsBanner = {
  __typename?: 'ComponentLsBannerLsBanner';
  callToAction?: Maybe<Scalars['String']['output']>;
  callToActionLink?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
};

export type ComponentLsBannerLsBannerInput = {
  callToAction?: InputMaybe<Scalars['String']['input']>;
  callToActionLink?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentOpeningRemarkOpeningRemark = {
  __typename?: 'ComponentOpeningRemarkOpeningRemark';
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  picture?: Maybe<UploadFileEntityResponse>;
  position?: Maybe<Scalars['String']['output']>;
  remark?: Maybe<Scalars['String']['output']>;
  speechFile?: Maybe<UploadFileEntityResponse>;
  youtubeUrl?: Maybe<Scalars['String']['output']>;
};

export type ComponentOpeningRemarkOpeningRemarkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentOpeningRemarkOpeningRemarkFiltersInput>>>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentOpeningRemarkOpeningRemarkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentOpeningRemarkOpeningRemarkFiltersInput>>>;
  position?: InputMaybe<StringFilterInput>;
  remark?: InputMaybe<StringFilterInput>;
  youtubeUrl?: InputMaybe<StringFilterInput>;
};

export type ComponentOpeningRemarkOpeningRemarkInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['ID']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  remark?: InputMaybe<Scalars['String']['input']>;
  speechFile?: InputMaybe<Scalars['ID']['input']>;
  youtubeUrl?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentOrganizerOrganizer = {
  __typename?: 'ComponentOrganizerOrganizer';
  id: Scalars['ID']['output'];
  logo?: Maybe<UploadFileEntityResponse>;
  name?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ComponentOrganizerOrganizerFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentOrganizerOrganizerFiltersInput>>>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentOrganizerOrganizerFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentOrganizerOrganizerFiltersInput>>>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentOrganizerOrganizerInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  logo?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentOrganizerSponsor = {
  __typename?: 'ComponentOrganizerSponsor';
  id: Scalars['ID']['output'];
};

export type ComponentPersonPerson = {
  __typename?: 'ComponentPersonPerson';
  bio?: Maybe<Scalars['String']['output']>;
  document?: Maybe<UploadFileEntityResponse>;
  honourable?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  picture?: Maybe<UploadFileEntityResponse>;
  position?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Enum_Componentpersonperson_Type>;
};

export type ComponentPersonPersonFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentPersonPersonFiltersInput>>>;
  bio?: InputMaybe<StringFilterInput>;
  honourable?: InputMaybe<BooleanFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentPersonPersonFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentPersonPersonFiltersInput>>>;
  position?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
};

export type ComponentPersonPersonInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  document?: InputMaybe<Scalars['ID']['input']>;
  honourable?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['ID']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Enum_Componentpersonperson_Type>;
};

export type ComponentPlatformPlatform = {
  __typename?: 'ComponentPlatformPlatform';
  banner?: Maybe<UploadFileEntityResponse>;
  description?: Maybe<Scalars['String']['output']>;
  enableApplication?: Maybe<Scalars['Boolean']['output']>;
  enableRegistration?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  themeColor?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentPlatformPlatformFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentPlatformPlatformFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  enableApplication?: InputMaybe<BooleanFilterInput>;
  enableRegistration?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ComponentPlatformPlatformFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentPlatformPlatformFiltersInput>>>;
  themeColor?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentPlatformPlatformInput = {
  banner?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  enableApplication?: InputMaybe<Scalars['Boolean']['input']>;
  enableRegistration?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  themeColor?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentPointPoints = {
  __typename?: 'ComponentPointPoints';
  content?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentPointPointsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentPointPointsFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentPointPointsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentPointPointsFiltersInput>>>;
};

export type ComponentPointPointsInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentPricingPricing = {
  __typename?: 'ComponentPricingPricing';
  id: Scalars['ID']['output'];
  price?: Maybe<Scalars['Float']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
};

export type ComponentPricingPricingFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentPricingPricingFiltersInput>>>;
  not?: InputMaybe<ComponentPricingPricingFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentPricingPricingFiltersInput>>>;
  price?: InputMaybe<FloatFilterInput>;
  size?: InputMaybe<IntFilterInput>;
};

export type ComponentPricingPricingInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type ComponentSessionSession = {
  __typename?: 'ComponentSessionSession';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  sessionVideo?: Maybe<Array<Maybe<ComponentSessionVideoVideo>>>;
  title?: Maybe<Scalars['String']['output']>;
};


export type ComponentSessionSessionSessionVideoArgs = {
  filters?: InputMaybe<ComponentSessionVideoVideoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSessionSessionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSessionSessionFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSessionSessionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSessionSessionFiltersInput>>>;
  sessionVideo?: InputMaybe<ComponentSessionVideoVideoFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSessionSessionInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  sessionVideo?: InputMaybe<Array<InputMaybe<ComponentSessionVideoVideoInput>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSessionVideoVideo = {
  __typename?: 'ComponentSessionVideoVideo';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
  youtubeUrl?: Maybe<Scalars['String']['output']>;
};

export type ComponentSessionVideoVideoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSessionVideoVideoFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSessionVideoVideoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSessionVideoVideoFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  youtubeUrl?: InputMaybe<StringFilterInput>;
};

export type ComponentSessionVideoVideoInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  youtubeUrl?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSlideSlide = {
  __typename?: 'ComponentSlideSlide';
  background?: Maybe<UploadFileEntityResponse>;
  cta?: Maybe<Scalars['String']['output']>;
  ctaLink?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentSlideSlideFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSlideSlideFiltersInput>>>;
  cta?: InputMaybe<StringFilterInput>;
  ctaLink?: InputMaybe<StringFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSlideSlideFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSlideSlideFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSlideSlideInput = {
  background?: InputMaybe<Scalars['ID']['input']>;
  cta?: InputMaybe<Scalars['String']['input']>;
  ctaLink?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSolutionPointSolutionPoint = {
  __typename?: 'ComponentSolutionPointSolutionPoint';
  id: Scalars['ID']['output'];
  point?: Maybe<Scalars['String']['output']>;
};

export type ComponentSolutionPointSolutionPointFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSolutionPointSolutionPointFiltersInput>>>;
  not?: InputMaybe<ComponentSolutionPointSolutionPointFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSolutionPointSolutionPointFiltersInput>>>;
  point?: InputMaybe<StringFilterInput>;
};

export type ComponentSolutionPointSolutionPointInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  point?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSolutionSolution = {
  __typename?: 'ComponentSolutionSolution';
  SolutionPoint?: Maybe<Array<Maybe<ComponentSolutionPointSolutionPoint>>>;
  icon?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};


export type ComponentSolutionSolutionSolutionPointArgs = {
  filters?: InputMaybe<ComponentSolutionPointSolutionPointFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSolutionSolutionFiltersInput = {
  SolutionPoint?: InputMaybe<ComponentSolutionPointSolutionPointFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentSolutionSolutionFiltersInput>>>;
  not?: InputMaybe<ComponentSolutionSolutionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSolutionSolutionFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSolutionSolutionInput = {
  SolutionPoint?: InputMaybe<Array<InputMaybe<ComponentSolutionPointSolutionPointInput>>>;
  icon?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSponsorSponsor = {
  __typename?: 'ComponentSponsorSponsor';
  id: Scalars['ID']['output'];
  level?: Maybe<Enum_Componentsponsorsponsor_Level>;
  logo?: Maybe<UploadFileEntityResponse>;
  name?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ComponentSponsorSponsorFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSponsorSponsorFiltersInput>>>;
  level?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSponsorSponsorFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSponsorSponsorFiltersInput>>>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentSponsorSponsorInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  level?: InputMaybe<Enum_Componentsponsorsponsor_Level>;
  logo?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentStatsticsStatstics = {
  __typename?: 'ComponentStatsticsStatstics';
  amount?: Maybe<Scalars['Long']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
};

export type ComponentStatsticsStatsticsFiltersInput = {
  amount?: InputMaybe<LongFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentStatsticsStatsticsFiltersInput>>>;
  color?: InputMaybe<StringFilterInput>;
  label?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentStatsticsStatsticsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentStatsticsStatsticsFiltersInput>>>;
  order?: InputMaybe<IntFilterInput>;
};

export type ComponentStatsticsStatsticsInput = {
  amount?: InputMaybe<Scalars['Long']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
};

export type ComponentSummitIntroSummitIntro = {
  __typename?: 'ComponentSummitIntroSummitIntro';
  fullDescription?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  shortDescription?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  youtubeUrl?: Maybe<Scalars['String']['output']>;
};

export type ComponentSummitIntroSummitIntroFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSummitIntroSummitIntroFiltersInput>>>;
  fullDescription?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSummitIntroSummitIntroFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSummitIntroSummitIntroFiltersInput>>>;
  shortDescription?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  youtubeUrl?: InputMaybe<StringFilterInput>;
};

export type ComponentSummitIntroSummitIntroInput = {
  fullDescription?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  youtubeUrl?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSummitSummit = {
  __typename?: 'ComponentSummitSummit';
  background?: Maybe<UploadFileEntityResponse>;
  date?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  openingRemark?: Maybe<ComponentOpeningRemarkOpeningRemark>;
  slogan?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  summitIntro?: Maybe<ComponentSummitIntroSummitIntro>;
};

export type ComponentUpcomingUpcoming = {
  __typename?: 'ComponentUpcomingUpcoming';
  background?: Maybe<UploadFileEntityResponse>;
  banner?: Maybe<UploadFileEntityResponse>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  intro?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<UploadFileEntityResponse>;
  menuTitle?: Maybe<Scalars['String']['output']>;
  organizer?: Maybe<Array<Maybe<ComponentOrganizerOrganizer>>>;
  organizerIntro?: Maybe<Scalars['String']['output']>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  sponsor?: Maybe<Array<Maybe<ComponentSponsorSponsor>>>;
  sponsorIntro?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  youtubeUrl?: Maybe<Scalars['String']['output']>;
};


export type ComponentUpcomingUpcomingOrganizerArgs = {
  filters?: InputMaybe<ComponentOrganizerOrganizerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentUpcomingUpcomingSponsorArgs = {
  filters?: InputMaybe<ComponentSponsorSponsorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentUpcomingUpcomingInput = {
  background?: InputMaybe<Scalars['ID']['input']>;
  banner?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  intro?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['ID']['input']>;
  menuTitle?: InputMaybe<Scalars['String']['input']>;
  organizer?: InputMaybe<Array<InputMaybe<ComponentOrganizerOrganizerInput>>>;
  organizerIntro?: InputMaybe<Scalars['String']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  sponsor?: InputMaybe<Array<InputMaybe<ComponentSponsorSponsorInput>>>;
  sponsorIntro?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  youtubeUrl?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentVisionMissionValueVisionMissionValue = {
  __typename?: 'ComponentVisionMissionValueVisionMissionValue';
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentVisionMissionValueVisionMissionValueFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentVisionMissionValueVisionMissionValueFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentVisionMissionValueVisionMissionValueFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentVisionMissionValueVisionMissionValueFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentVisionMissionValueVisionMissionValueInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentWordAnimationItemWordAnimationItem = {
  __typename?: 'ComponentWordAnimationItemWordAnimationItem';
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
  words?: Maybe<Scalars['String']['output']>;
};

export type ComponentWordAnimationItemWordAnimationItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentWordAnimationItemWordAnimationItemFiltersInput>>>;
  not?: InputMaybe<ComponentWordAnimationItemWordAnimationItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentWordAnimationItemWordAnimationItemFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  words?: InputMaybe<StringFilterInput>;
};

export type ComponentWordAnimationItemWordAnimationItemInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  words?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentWordAnimationWordAnimation = {
  __typename?: 'ComponentWordAnimationWordAnimation';
  WordAnimationItem?: Maybe<Array<Maybe<ComponentWordAnimationItemWordAnimationItem>>>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};


export type ComponentWordAnimationWordAnimationWordAnimationItemArgs = {
  filters?: InputMaybe<ComponentWordAnimationItemWordAnimationItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentWordAnimationWordAnimationInput = {
  WordAnimationItem?: InputMaybe<Array<InputMaybe<ComponentWordAnimationItemWordAnimationItemInput>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CrossBorderSolutions = {
  __typename?: 'CrossBorderSolutions';
  CBSPoint?: Maybe<Array<Maybe<ComponentCbsPointCbsPoint>>>;
  CertificationPackage?: Maybe<Array<Maybe<ComponentCertificationPackageCertificationPackage>>>;
  callToAction?: Maybe<Scalars['String']['output']>;
  clients?: Maybe<Array<Maybe<ComponentOrganizerOrganizer>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<UploadFileEntityResponse>;
  partners?: Maybe<Array<Maybe<ComponentOrganizerOrganizer>>>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  youtubeUrl?: Maybe<Scalars['String']['output']>;
};


export type CrossBorderSolutionsCbsPointArgs = {
  filters?: InputMaybe<ComponentCbsPointCbsPointFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CrossBorderSolutionsCertificationPackageArgs = {
  filters?: InputMaybe<ComponentCertificationPackageCertificationPackageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CrossBorderSolutionsClientsArgs = {
  filters?: InputMaybe<ComponentOrganizerOrganizerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CrossBorderSolutionsPartnersArgs = {
  filters?: InputMaybe<ComponentOrganizerOrganizerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CrossBorderSolutionsEntity = {
  __typename?: 'CrossBorderSolutionsEntity';
  attributes?: Maybe<CrossBorderSolutions>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CrossBorderSolutionsEntityResponse = {
  __typename?: 'CrossBorderSolutionsEntityResponse';
  data?: Maybe<CrossBorderSolutionsEntity>;
};

export type CrossBorderSolutionsInput = {
  CBSPoint?: InputMaybe<Array<InputMaybe<ComponentCbsPointCbsPointInput>>>;
  CertificationPackage?: InputMaybe<Array<InputMaybe<ComponentCertificationPackageCertificationPackageInput>>>;
  callToAction?: InputMaybe<Scalars['String']['input']>;
  clients?: InputMaybe<Array<InputMaybe<ComponentOrganizerOrganizerInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  partners?: InputMaybe<Array<InputMaybe<ComponentOrganizerOrganizerInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  youtubeUrl?: InputMaybe<Scalars['String']['input']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  nei?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Document = {
  __typename?: 'Document';
  background?: Maybe<UploadFileEntityResponse>;
  category?: Maybe<Array<Maybe<ComponentCategoryCategory>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Enum_Document_Type>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type DocumentCategoryArgs = {
  filters?: InputMaybe<ComponentCategoryCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DocumentEntity = {
  __typename?: 'DocumentEntity';
  attributes?: Maybe<Document>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type DocumentEntityResponse = {
  __typename?: 'DocumentEntityResponse';
  data?: Maybe<DocumentEntity>;
};

export type DocumentEntityResponseCollection = {
  __typename?: 'DocumentEntityResponseCollection';
  data: Array<DocumentEntity>;
  meta: ResponseCollectionMeta;
};

export type DocumentFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<DocumentFiltersInput>>>;
  category?: InputMaybe<ComponentCategoryCategoryFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  date?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<DocumentFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<DocumentFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type DocumentInput = {
  background?: InputMaybe<Scalars['ID']['input']>;
  category?: InputMaybe<Array<InputMaybe<ComponentCategoryCategoryInput>>>;
  date?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Enum_Document_Type>;
};

export enum Enum_Componentpersonperson_Type {
  Moderator = 'MODERATOR',
  Speaker = 'SPEAKER'
}

export enum Enum_Componentsponsorsponsor_Level {
  Gold = 'Gold',
  Platinum = 'Platinum',
  Silver = 'Silver'
}

export enum Enum_Document_Type {
  Chcda = 'CHCDA',
  Eacms = 'EACMS',
  Eafs = 'EAFS'
}

export enum Enum_Participant_Type {
  Organization = 'Organization',
  Personal = 'Personal'
}

export enum Enum_Sponsorexhibitor_Type {
  Exhibition = 'Exhibition',
  Sponsorship = 'Sponsorship'
}

export enum Enum_Summit_Type {
  Chcda = 'CHCDA',
  Eacms = 'EACMS',
  Eafs = 'EAFS'
}

export type ExposureLearningPrograms = {
  __typename?: 'ExposureLearningPrograms';
  ExposureProgram?: Maybe<Array<Maybe<ComponentExposureProgramExposureProgram>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  image?: Maybe<UploadFileEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ExposureLearningProgramsExposureProgramArgs = {
  filters?: InputMaybe<ComponentExposureProgramExposureProgramFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ExposureLearningProgramsEntity = {
  __typename?: 'ExposureLearningProgramsEntity';
  attributes?: Maybe<ExposureLearningPrograms>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ExposureLearningProgramsEntityResponse = {
  __typename?: 'ExposureLearningProgramsEntityResponse';
  data?: Maybe<ExposureLearningProgramsEntity>;
};

export type ExposureLearningProgramsInput = {
  ExposureProgram?: InputMaybe<Array<InputMaybe<ComponentExposureProgramExposureProgramInput>>>;
  image?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nei?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph = AdvisorySolutions | ApplyEafs | Author | Blog | ComponentCategoryCategory | ComponentCbsPointCbsPoint | ComponentCertificationPackageCertificationPackage | ComponentClientCounterClientCounter | ComponentEafsSessionEafsSession | ComponentEafsSettingEafsSetting | ComponentExposureProgramExposureProgram | ComponentFileFile | ComponentIntroIntro | ComponentLsBannerLsBanner | ComponentOpeningRemarkOpeningRemark | ComponentOrganizerOrganizer | ComponentOrganizerSponsor | ComponentPersonPerson | ComponentPlatformPlatform | ComponentPointPoints | ComponentPricingPricing | ComponentSessionSession | ComponentSessionVideoVideo | ComponentSlideSlide | ComponentSolutionPointSolutionPoint | ComponentSolutionSolution | ComponentSponsorSponsor | ComponentStatsticsStatstics | ComponentSummitIntroSummitIntro | ComponentSummitSummit | ComponentUpcomingUpcoming | ComponentVisionMissionValueVisionMissionValue | ComponentWordAnimationItemWordAnimationItem | ComponentWordAnimationWordAnimation | CrossBorderSolutions | Document | ExposureLearningPrograms | Home | I18NLocale | KnowledgeSharing | LearningSolutions | Participant | RegistrationEacms | RegistrationEafs | Setting | SponsorExhibitor | Summit | UpcomingChcda | UpcomingEacms | UpcomingEafs | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | WhoWeAre;

export type Home = {
  __typename?: 'Home';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  menu?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slides?: Maybe<Array<Maybe<ComponentSlideSlide>>>;
  slogan?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type HomeSlidesArgs = {
  filters?: InputMaybe<ComponentSlideSlideFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HomeEntity = {
  __typename?: 'HomeEntity';
  attributes?: Maybe<Home>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type HomeEntityResponse = {
  __typename?: 'HomeEntityResponse';
  data?: Maybe<HomeEntity>;
};

export type HomeInput = {
  menu?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slides?: InputMaybe<Array<InputMaybe<ComponentSlideSlideInput>>>;
  slogan?: InputMaybe<Scalars['String']['input']>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  nei?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nei?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nei?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type KnowledgeSharing = {
  __typename?: 'KnowledgeSharing';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  intro?: Maybe<Scalars['String']['output']>;
  platform?: Maybe<Array<Maybe<ComponentPlatformPlatform>>>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  quote?: Maybe<Scalars['String']['output']>;
  quoteAuthor?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type KnowledgeSharingPlatformArgs = {
  filters?: InputMaybe<ComponentPlatformPlatformFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type KnowledgeSharingEntity = {
  __typename?: 'KnowledgeSharingEntity';
  attributes?: Maybe<KnowledgeSharing>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type KnowledgeSharingEntityResponse = {
  __typename?: 'KnowledgeSharingEntityResponse';
  data?: Maybe<KnowledgeSharingEntity>;
};

export type KnowledgeSharingInput = {
  intro?: InputMaybe<Scalars['String']['input']>;
  platform?: InputMaybe<Array<InputMaybe<ComponentPlatformPlatformInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  quote?: InputMaybe<Scalars['String']['input']>;
  quoteAuthor?: InputMaybe<Scalars['String']['input']>;
};

export type LearningSolutions = {
  __typename?: 'LearningSolutions';
  LSBanner?: Maybe<ComponentLsBannerLsBanner>;
  callToAction?: Maybe<Scalars['String']['output']>;
  clients?: Maybe<Array<Maybe<ComponentOrganizerOrganizer>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<UploadFileEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  solution?: Maybe<Array<Maybe<ComponentSolutionSolution>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  youtubeUrl?: Maybe<Scalars['String']['output']>;
};


export type LearningSolutionsClientsArgs = {
  filters?: InputMaybe<ComponentOrganizerOrganizerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type LearningSolutionsSolutionArgs = {
  filters?: InputMaybe<ComponentSolutionSolutionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LearningSolutionsEntity = {
  __typename?: 'LearningSolutionsEntity';
  attributes?: Maybe<LearningSolutions>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type LearningSolutionsEntityResponse = {
  __typename?: 'LearningSolutionsEntityResponse';
  data?: Maybe<LearningSolutionsEntity>;
};

export type LearningSolutionsInput = {
  LSBanner?: InputMaybe<ComponentLsBannerLsBannerInput>;
  callToAction?: InputMaybe<Scalars['String']['input']>;
  clients?: InputMaybe<Array<InputMaybe<ComponentOrganizerOrganizerInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  solution?: InputMaybe<Array<InputMaybe<ComponentSolutionSolutionInput>>>;
  youtubeUrl?: InputMaybe<Scalars['String']['input']>;
};

export type LongFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  contains?: InputMaybe<Scalars['Long']['input']>;
  containsi?: InputMaybe<Scalars['Long']['input']>;
  endsWith?: InputMaybe<Scalars['Long']['input']>;
  eq?: InputMaybe<Scalars['Long']['input']>;
  eqi?: InputMaybe<Scalars['Long']['input']>;
  gt?: InputMaybe<Scalars['Long']['input']>;
  gte?: InputMaybe<Scalars['Long']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  lt?: InputMaybe<Scalars['Long']['input']>;
  lte?: InputMaybe<Scalars['Long']['input']>;
  ne?: InputMaybe<Scalars['Long']['input']>;
  nei?: InputMaybe<Scalars['Long']['input']>;
  not?: InputMaybe<LongFilterInput>;
  notContains?: InputMaybe<Scalars['Long']['input']>;
  notContainsi?: InputMaybe<Scalars['Long']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  startsWith?: InputMaybe<Scalars['Long']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createAuthor?: Maybe<AuthorEntityResponse>;
  createBlog?: Maybe<BlogEntityResponse>;
  createDocument?: Maybe<DocumentEntityResponse>;
  createParticipant?: Maybe<ParticipantEntityResponse>;
  createSetting?: Maybe<SettingEntityResponse>;
  createSponsorExhibitor?: Maybe<SponsorExhibitorEntityResponse>;
  createSummit?: Maybe<SummitEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteAdvisorySolutions?: Maybe<AdvisorySolutionsEntityResponse>;
  deleteApplyEafs?: Maybe<ApplyEafsEntityResponse>;
  deleteAuthor?: Maybe<AuthorEntityResponse>;
  deleteBlog?: Maybe<BlogEntityResponse>;
  deleteCrossBorderSolutions?: Maybe<CrossBorderSolutionsEntityResponse>;
  deleteDocument?: Maybe<DocumentEntityResponse>;
  deleteExposureLearningPrograms?: Maybe<ExposureLearningProgramsEntityResponse>;
  deleteHome?: Maybe<HomeEntityResponse>;
  deleteKnowledgeSharing?: Maybe<KnowledgeSharingEntityResponse>;
  deleteLearningSolutions?: Maybe<LearningSolutionsEntityResponse>;
  deleteParticipant?: Maybe<ParticipantEntityResponse>;
  deleteRegistrationEacms?: Maybe<RegistrationEacmsEntityResponse>;
  deleteRegistrationEafs?: Maybe<RegistrationEafsEntityResponse>;
  deleteSetting?: Maybe<SettingEntityResponse>;
  deleteSponsorExhibitor?: Maybe<SponsorExhibitorEntityResponse>;
  deleteSummit?: Maybe<SummitEntityResponse>;
  deleteUpcomingChcda?: Maybe<UpcomingChcdaEntityResponse>;
  deleteUpcomingEacms?: Maybe<UpcomingEacmsEntityResponse>;
  deleteUpcomingEafs?: Maybe<UpcomingEafsEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteWhoWeAre?: Maybe<WhoWeAreEntityResponse>;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateAdvisorySolutions?: Maybe<AdvisorySolutionsEntityResponse>;
  updateApplyEafs?: Maybe<ApplyEafsEntityResponse>;
  updateAuthor?: Maybe<AuthorEntityResponse>;
  updateBlog?: Maybe<BlogEntityResponse>;
  updateCrossBorderSolutions?: Maybe<CrossBorderSolutionsEntityResponse>;
  updateDocument?: Maybe<DocumentEntityResponse>;
  updateExposureLearningPrograms?: Maybe<ExposureLearningProgramsEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateHome?: Maybe<HomeEntityResponse>;
  updateKnowledgeSharing?: Maybe<KnowledgeSharingEntityResponse>;
  updateLearningSolutions?: Maybe<LearningSolutionsEntityResponse>;
  updateParticipant?: Maybe<ParticipantEntityResponse>;
  updateRegistrationEacms?: Maybe<RegistrationEacmsEntityResponse>;
  updateRegistrationEafs?: Maybe<RegistrationEafsEntityResponse>;
  updateSetting?: Maybe<SettingEntityResponse>;
  updateSponsorExhibitor?: Maybe<SponsorExhibitorEntityResponse>;
  updateSummit?: Maybe<SummitEntityResponse>;
  updateUpcomingChcda?: Maybe<UpcomingChcdaEntityResponse>;
  updateUpcomingEacms?: Maybe<UpcomingEacmsEntityResponse>;
  updateUpcomingEafs?: Maybe<UpcomingEafsEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateWhoWeAre?: Maybe<WhoWeAreEntityResponse>;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateAuthorArgs = {
  data: AuthorInput;
};


export type MutationCreateBlogArgs = {
  data: BlogInput;
};


export type MutationCreateDocumentArgs = {
  data: DocumentInput;
};


export type MutationCreateParticipantArgs = {
  data: ParticipantInput;
};


export type MutationCreateSettingArgs = {
  data: SettingInput;
};


export type MutationCreateSponsorExhibitorArgs = {
  data: SponsorExhibitorInput;
};


export type MutationCreateSummitArgs = {
  data: SummitInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteAuthorArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteBlogArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteDocumentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteParticipantArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSettingArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSponsorExhibitorArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSummitArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateAdvisorySolutionsArgs = {
  data: AdvisorySolutionsInput;
};


export type MutationUpdateApplyEafsArgs = {
  data: ApplyEafsInput;
};


export type MutationUpdateAuthorArgs = {
  data: AuthorInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateBlogArgs = {
  data: BlogInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCrossBorderSolutionsArgs = {
  data: CrossBorderSolutionsInput;
};


export type MutationUpdateDocumentArgs = {
  data: DocumentInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateExposureLearningProgramsArgs = {
  data: ExposureLearningProgramsInput;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateHomeArgs = {
  data: HomeInput;
};


export type MutationUpdateKnowledgeSharingArgs = {
  data: KnowledgeSharingInput;
};


export type MutationUpdateLearningSolutionsArgs = {
  data: LearningSolutionsInput;
};


export type MutationUpdateParticipantArgs = {
  data: ParticipantInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateRegistrationEacmsArgs = {
  data: RegistrationEacmsInput;
};


export type MutationUpdateRegistrationEafsArgs = {
  data: RegistrationEafsInput;
};


export type MutationUpdateSettingArgs = {
  data: SettingInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateSponsorExhibitorArgs = {
  data: SponsorExhibitorInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateSummitArgs = {
  data: SummitInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUpcomingChcdaArgs = {
  data: UpcomingChcdaInput;
};


export type MutationUpdateUpcomingEacmsArgs = {
  data: UpcomingEacmsInput;
};


export type MutationUpdateUpcomingEafsArgs = {
  data: UpcomingEafsInput;
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateWhoWeAreArgs = {
  data: WhoWeAreInput;
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type Participant = {
  __typename?: 'Participant';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  organization?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
  tin?: Maybe<Scalars['Long']['output']>;
  type?: Maybe<Enum_Participant_Type>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ParticipantEntity = {
  __typename?: 'ParticipantEntity';
  attributes?: Maybe<Participant>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ParticipantEntityResponse = {
  __typename?: 'ParticipantEntityResponse';
  data?: Maybe<ParticipantEntity>;
};

export type ParticipantEntityResponseCollection = {
  __typename?: 'ParticipantEntityResponseCollection';
  data: Array<ParticipantEntity>;
  meta: ResponseCollectionMeta;
};

export type ParticipantFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ParticipantFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  fullName?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ParticipantFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ParticipantFiltersInput>>>;
  organization?: InputMaybe<StringFilterInput>;
  phone?: InputMaybe<StringFilterInput>;
  position?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  reason?: InputMaybe<StringFilterInput>;
  tin?: InputMaybe<LongFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ParticipantInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  organization?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
  tin?: InputMaybe<Scalars['Long']['input']>;
  type?: InputMaybe<Enum_Participant_Type>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  advisorySolutions?: Maybe<AdvisorySolutionsEntityResponse>;
  applyEafs?: Maybe<ApplyEafsEntityResponse>;
  author?: Maybe<AuthorEntityResponse>;
  authors?: Maybe<AuthorEntityResponseCollection>;
  blog?: Maybe<BlogEntityResponse>;
  blogs?: Maybe<BlogEntityResponseCollection>;
  crossBorderSolutions?: Maybe<CrossBorderSolutionsEntityResponse>;
  document?: Maybe<DocumentEntityResponse>;
  documents?: Maybe<DocumentEntityResponseCollection>;
  exposureLearningPrograms?: Maybe<ExposureLearningProgramsEntityResponse>;
  home?: Maybe<HomeEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  knowledgeSharing?: Maybe<KnowledgeSharingEntityResponse>;
  learningSolutions?: Maybe<LearningSolutionsEntityResponse>;
  me?: Maybe<UsersPermissionsMe>;
  participant?: Maybe<ParticipantEntityResponse>;
  participants?: Maybe<ParticipantEntityResponseCollection>;
  registrationEacms?: Maybe<RegistrationEacmsEntityResponse>;
  registrationEafs?: Maybe<RegistrationEafsEntityResponse>;
  setting?: Maybe<SettingEntityResponse>;
  settings?: Maybe<SettingEntityResponseCollection>;
  sponsorExhibitor?: Maybe<SponsorExhibitorEntityResponse>;
  sponsorsExhibitors?: Maybe<SponsorExhibitorEntityResponseCollection>;
  summit?: Maybe<SummitEntityResponse>;
  summits?: Maybe<SummitEntityResponseCollection>;
  upcomingChcda?: Maybe<UpcomingChcdaEntityResponse>;
  upcomingEacms?: Maybe<UpcomingEacmsEntityResponse>;
  upcomingEafs?: Maybe<UpcomingEafsEntityResponse>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  whoWeAre?: Maybe<WhoWeAreEntityResponse>;
};


export type QueryAdvisorySolutionsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryApplyEafsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryAuthorArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryAuthorsArgs = {
  filters?: InputMaybe<AuthorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlogArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryBlogsArgs = {
  filters?: InputMaybe<BlogFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCrossBorderSolutionsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryDocumentArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryDocumentsArgs = {
  filters?: InputMaybe<DocumentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryExposureLearningProgramsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryHomeArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryKnowledgeSharingArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryLearningSolutionsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryParticipantArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryParticipantsArgs = {
  filters?: InputMaybe<ParticipantFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryRegistrationEacmsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryRegistrationEafsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QuerySettingArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySettingsArgs = {
  filters?: InputMaybe<SettingFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySponsorExhibitorArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySponsorsExhibitorsArgs = {
  filters?: InputMaybe<SponsorExhibitorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySummitArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySummitsArgs = {
  filters?: InputMaybe<SummitFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUpcomingChcdaArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryUpcomingEacmsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryUpcomingEafsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryWhoWeAreArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type RegistrationEacms = {
  __typename?: 'RegistrationEacms';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<UploadFileEntityResponse>;
  name?: Maybe<Scalars['String']['output']>;
  points?: Maybe<Array<Maybe<ComponentPointPoints>>>;
  pricing?: Maybe<Array<Maybe<ComponentPricingPricing>>>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type RegistrationEacmsPointsArgs = {
  filters?: InputMaybe<ComponentPointPointsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type RegistrationEacmsPricingArgs = {
  filters?: InputMaybe<ComponentPricingPricingFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type RegistrationEacmsEntity = {
  __typename?: 'RegistrationEacmsEntity';
  attributes?: Maybe<RegistrationEacms>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type RegistrationEacmsEntityResponse = {
  __typename?: 'RegistrationEacmsEntityResponse';
  data?: Maybe<RegistrationEacmsEntity>;
};

export type RegistrationEacmsInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Array<InputMaybe<ComponentPointPointsInput>>>;
  pricing?: InputMaybe<Array<InputMaybe<ComponentPricingPricingInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type RegistrationEafs = {
  __typename?: 'RegistrationEafs';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<UploadFileEntityResponse>;
  message?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  points?: Maybe<Array<Maybe<ComponentPointPoints>>>;
  pricing?: Maybe<Array<Maybe<ComponentPricingPricing>>>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type RegistrationEafsPointsArgs = {
  filters?: InputMaybe<ComponentPointPointsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type RegistrationEafsPricingArgs = {
  filters?: InputMaybe<ComponentPricingPricingFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type RegistrationEafsEntity = {
  __typename?: 'RegistrationEafsEntity';
  attributes?: Maybe<RegistrationEafs>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type RegistrationEafsEntityResponse = {
  __typename?: 'RegistrationEafsEntityResponse';
  data?: Maybe<RegistrationEafsEntity>;
};

export type RegistrationEafsInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['ID']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Array<InputMaybe<ComponentPointPointsInput>>>;
  pricing?: InputMaybe<Array<InputMaybe<ComponentPricingPricingInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type Setting = {
  __typename?: 'Setting';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  eafsUpcomingSummit?: Maybe<Scalars['Boolean']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SettingEntity = {
  __typename?: 'SettingEntity';
  attributes?: Maybe<Setting>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type SettingEntityResponse = {
  __typename?: 'SettingEntityResponse';
  data?: Maybe<SettingEntity>;
};

export type SettingEntityResponseCollection = {
  __typename?: 'SettingEntityResponseCollection';
  data: Array<SettingEntity>;
  meta: ResponseCollectionMeta;
};

export type SettingFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SettingFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  eafsUpcomingSummit?: InputMaybe<BooleanFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<SettingFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SettingFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SettingInput = {
  eafsUpcomingSummit?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SponsorExhibitor = {
  __typename?: 'SponsorExhibitor';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  organizationName?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  type?: Maybe<Enum_Sponsorexhibitor_Type>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SponsorExhibitorEntity = {
  __typename?: 'SponsorExhibitorEntity';
  attributes?: Maybe<SponsorExhibitor>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type SponsorExhibitorEntityResponse = {
  __typename?: 'SponsorExhibitorEntityResponse';
  data?: Maybe<SponsorExhibitorEntity>;
};

export type SponsorExhibitorEntityResponseCollection = {
  __typename?: 'SponsorExhibitorEntityResponseCollection';
  data: Array<SponsorExhibitorEntity>;
  meta: ResponseCollectionMeta;
};

export type SponsorExhibitorFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SponsorExhibitorFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<SponsorExhibitorFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SponsorExhibitorFiltersInput>>>;
  organizationName?: InputMaybe<StringFilterInput>;
  phone?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SponsorExhibitorInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  organizationName?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  type?: InputMaybe<Enum_Sponsorexhibitor_Type>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nei?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Summit = {
  __typename?: 'Summit';
  background?: Maybe<UploadFileEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  intro?: Maybe<ComponentSummitIntroSummitIntro>;
  name?: Maybe<Scalars['String']['output']>;
  openingRemark?: Maybe<ComponentOpeningRemarkOpeningRemark>;
  organizer?: Maybe<Array<Maybe<ComponentOrganizerOrganizer>>>;
  organizerIntro?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  session?: Maybe<Array<Maybe<ComponentSessionSession>>>;
  slogan?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sponsor?: Maybe<Array<Maybe<ComponentSponsorSponsor>>>;
  sponsorIntro?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Enum_Summit_Type>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type SummitOrganizerArgs = {
  filters?: InputMaybe<ComponentOrganizerOrganizerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SummitSessionArgs = {
  filters?: InputMaybe<ComponentSessionSessionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SummitSponsorArgs = {
  filters?: InputMaybe<ComponentSponsorSponsorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SummitEntity = {
  __typename?: 'SummitEntity';
  attributes?: Maybe<Summit>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type SummitEntityResponse = {
  __typename?: 'SummitEntityResponse';
  data?: Maybe<SummitEntity>;
};

export type SummitEntityResponseCollection = {
  __typename?: 'SummitEntityResponseCollection';
  data: Array<SummitEntity>;
  meta: ResponseCollectionMeta;
};

export type SummitFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SummitFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  date?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  intro?: InputMaybe<ComponentSummitIntroSummitIntroFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<SummitFiltersInput>;
  openingRemark?: InputMaybe<ComponentOpeningRemarkOpeningRemarkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SummitFiltersInput>>>;
  organizer?: InputMaybe<ComponentOrganizerOrganizerFiltersInput>;
  organizerIntro?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  session?: InputMaybe<ComponentSessionSessionFiltersInput>;
  slogan?: InputMaybe<StringFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  sponsor?: InputMaybe<ComponentSponsorSponsorFiltersInput>;
  sponsorIntro?: InputMaybe<StringFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SummitInput = {
  background?: InputMaybe<Scalars['ID']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  intro?: InputMaybe<ComponentSummitIntroSummitIntroInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  openingRemark?: InputMaybe<ComponentOpeningRemarkOpeningRemarkInput>;
  organizer?: InputMaybe<Array<InputMaybe<ComponentOrganizerOrganizerInput>>>;
  organizerIntro?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  session?: InputMaybe<Array<InputMaybe<ComponentSessionSessionInput>>>;
  slogan?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sponsor?: InputMaybe<Array<InputMaybe<ComponentSponsorSponsorInput>>>;
  sponsorIntro?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Enum_Summit_Type>;
};

export type UpcomingChcda = {
  __typename?: 'UpcomingChcda';
  content?: Maybe<ComponentUpcomingUpcoming>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UpcomingChcdaEntity = {
  __typename?: 'UpcomingChcdaEntity';
  attributes?: Maybe<UpcomingChcda>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UpcomingChcdaEntityResponse = {
  __typename?: 'UpcomingChcdaEntityResponse';
  data?: Maybe<UpcomingChcdaEntity>;
};

export type UpcomingChcdaInput = {
  content?: InputMaybe<ComponentUpcomingUpcomingInput>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpcomingEacms = {
  __typename?: 'UpcomingEacms';
  content?: Maybe<ComponentUpcomingUpcoming>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UpcomingEacmsEntity = {
  __typename?: 'UpcomingEacmsEntity';
  attributes?: Maybe<UpcomingEacms>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UpcomingEacmsEntityResponse = {
  __typename?: 'UpcomingEacmsEntityResponse';
  data?: Maybe<UpcomingEacmsEntity>;
};

export type UpcomingEacmsInput = {
  content?: InputMaybe<ComponentUpcomingUpcomingInput>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpcomingEafs = {
  __typename?: 'UpcomingEafs';
  content?: Maybe<ComponentUpcomingUpcoming>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  eafsSetting?: Maybe<Array<Maybe<ComponentEafsSettingEafsSetting>>>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  exhibitor?: Maybe<Array<Maybe<ComponentOrganizerOrganizer>>>;
  guests?: Maybe<Array<Maybe<ComponentPersonPerson>>>;
  introDocument?: Maybe<UploadFileEntityResponse>;
  introVideo?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  session?: Maybe<Array<Maybe<ComponentEafsSessionEafsSession>>>;
  statstics?: Maybe<Array<Maybe<ComponentStatsticsStatstics>>>;
  strategicPartner?: Maybe<Array<Maybe<ComponentOrganizerOrganizer>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UpcomingEafsEafsSettingArgs = {
  filters?: InputMaybe<ComponentEafsSettingEafsSettingFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UpcomingEafsExhibitorArgs = {
  filters?: InputMaybe<ComponentOrganizerOrganizerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UpcomingEafsGuestsArgs = {
  filters?: InputMaybe<ComponentPersonPersonFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UpcomingEafsSessionArgs = {
  filters?: InputMaybe<ComponentEafsSessionEafsSessionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UpcomingEafsStatsticsArgs = {
  filters?: InputMaybe<ComponentStatsticsStatsticsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UpcomingEafsStrategicPartnerArgs = {
  filters?: InputMaybe<ComponentOrganizerOrganizerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UpcomingEafsEntity = {
  __typename?: 'UpcomingEafsEntity';
  attributes?: Maybe<UpcomingEafs>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UpcomingEafsEntityResponse = {
  __typename?: 'UpcomingEafsEntityResponse';
  data?: Maybe<UpcomingEafsEntity>;
};

export type UpcomingEafsInput = {
  content?: InputMaybe<ComponentUpcomingUpcomingInput>;
  eafsSetting?: InputMaybe<Array<InputMaybe<ComponentEafsSettingEafsSettingInput>>>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  exhibitor?: InputMaybe<Array<InputMaybe<ComponentOrganizerOrganizerInput>>>;
  guests?: InputMaybe<Array<InputMaybe<ComponentPersonPersonInput>>>;
  introDocument?: InputMaybe<Scalars['ID']['input']>;
  introVideo?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  session?: InputMaybe<Array<InputMaybe<ComponentEafsSessionEafsSessionInput>>>;
  statstics?: InputMaybe<Array<InputMaybe<ComponentStatsticsStatsticsInput>>>;
  strategicPartner?: InputMaybe<Array<InputMaybe<ComponentOrganizerOrganizerInput>>>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  ext?: InputMaybe<Scalars['String']['input']>;
  folder?: InputMaybe<Scalars['ID']['input']>;
  folderPath?: InputMaybe<Scalars['String']['input']>;
  formats?: InputMaybe<Scalars['JSON']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  previewUrl?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String']['output'];
  pathId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  pathId?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type WhoWeAre = {
  __typename?: 'WhoWeAre';
  ClientCounter?: Maybe<Array<Maybe<ComponentClientCounterClientCounter>>>;
  Intro?: Maybe<ComponentIntroIntro>;
  VisionMissionValue?: Maybe<Array<Maybe<ComponentVisionMissionValueVisionMissionValue>>>;
  WordAnimation?: Maybe<ComponentWordAnimationWordAnimation>;
  banner?: Maybe<UploadFileEntityResponse>;
  clientCounterTitle?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  visionMissionValueBackground?: Maybe<UploadFileEntityResponse>;
};


export type WhoWeAreClientCounterArgs = {
  filters?: InputMaybe<ComponentClientCounterClientCounterFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type WhoWeAreVisionMissionValueArgs = {
  filters?: InputMaybe<ComponentVisionMissionValueVisionMissionValueFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type WhoWeAreEntity = {
  __typename?: 'WhoWeAreEntity';
  attributes?: Maybe<WhoWeAre>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type WhoWeAreEntityResponse = {
  __typename?: 'WhoWeAreEntityResponse';
  data?: Maybe<WhoWeAreEntity>;
};

export type WhoWeAreInput = {
  ClientCounter?: InputMaybe<Array<InputMaybe<ComponentClientCounterClientCounterInput>>>;
  Intro?: InputMaybe<ComponentIntroIntroInput>;
  VisionMissionValue?: InputMaybe<Array<InputMaybe<ComponentVisionMissionValueVisionMissionValueInput>>>;
  WordAnimation?: InputMaybe<ComponentWordAnimationWordAnimationInput>;
  banner?: InputMaybe<Scalars['ID']['input']>;
  clientCounterTitle?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  visionMissionValueBackground?: InputMaybe<Scalars['ID']['input']>;
};

export type AdvisorySolutionsQueryVariables = Exact<{ [key: string]: never; }>;


export type AdvisorySolutionsQuery = { __typename?: 'Query', advisorySolutions?: { __typename?: 'AdvisorySolutionsEntityResponse', data?: { __typename?: 'AdvisorySolutionsEntity', id?: string | null, attributes?: { __typename?: 'AdvisorySolutions', callToAction?: string | null, description?: string | null, createdAt?: any | null, publishedAt?: any | null, updatedAt?: any | null, youtubeUrl?: string | null, clients?: Array<{ __typename?: 'ComponentOrganizerOrganizer', id: string, name?: string | null, url?: string | null, logo?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null> | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, solution?: Array<{ __typename?: 'ComponentSolutionSolution', id: string, title?: string | null, icon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, SolutionPoint?: Array<{ __typename?: 'ComponentSolutionPointSolutionPoint', id: string, point?: string | null } | null> | null } | null> | null } | null } | null } | null };

export type BlogByIdQueryVariables = Exact<{
  blogId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type BlogByIdQuery = { __typename?: 'Query', blog?: { __typename?: 'BlogEntityResponse', data?: { __typename?: 'BlogEntity', id?: string | null, attributes?: { __typename?: 'Blog', hits?: any | null } | null } | null } | null };

export type BlogQueryVariables = Exact<{
  filters?: InputMaybe<BlogFiltersInput>;
}>;


export type BlogQuery = { __typename?: 'Query', blogs?: { __typename?: 'BlogEntityResponseCollection', data: Array<{ __typename?: 'BlogEntity', id?: string | null, attributes?: { __typename?: 'Blog', content?: string | null, description?: string | null, slug?: string | null, tags?: string | null, title?: string | null, hits?: any | null, updatedAt?: any | null, publishedAt?: any | null, createdAt?: any | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', id?: string | null, attributes?: { __typename?: 'Author', name?: string | null, email?: string | null, createdAt?: any | null, position?: string | null, publishedAt?: any | null, updatedAt?: any | null } | null } | null } | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null }> } | null };

export type BlogsQueryVariables = Exact<{ [key: string]: never; }>;


export type BlogsQuery = { __typename?: 'Query', blogs?: { __typename?: 'BlogEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', page: number, pageCount: number, pageSize: number, total: number } }, data: Array<{ __typename?: 'BlogEntity', id?: string | null, attributes?: { __typename?: 'Blog', content?: string | null, description?: string | null, slug?: string | null, tags?: string | null, title?: string | null, hits?: any | null, updatedAt?: any | null, publishedAt?: any | null, createdAt?: any | null, author?: { __typename?: 'AuthorEntityResponse', data?: { __typename?: 'AuthorEntity', id?: string | null, attributes?: { __typename?: 'Author', name?: string | null, email?: string | null, createdAt?: any | null, position?: string | null, publishedAt?: any | null, updatedAt?: any | null } | null } | null } | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null }> } | null };

export type UpdateBlogMutationVariables = Exact<{
  updateBlogId: Scalars['ID']['input'];
  data: BlogInput;
}>;


export type UpdateBlogMutation = { __typename?: 'Mutation', updateBlog?: { __typename?: 'BlogEntityResponse', data?: { __typename?: 'BlogEntity', id?: string | null } | null } | null };

export type CrossBorderSolutionsQueryVariables = Exact<{ [key: string]: never; }>;


export type CrossBorderSolutionsQuery = { __typename?: 'Query', crossBorderSolutions?: { __typename?: 'CrossBorderSolutionsEntityResponse', data?: { __typename?: 'CrossBorderSolutionsEntity', id?: string | null, attributes?: { __typename?: 'CrossBorderSolutions', youtubeUrl?: string | null, updatedAt?: any | null, publishedAt?: any | null, description?: string | null, createdAt?: any | null, callToAction?: string | null, CBSPoint?: Array<{ __typename?: 'ComponentCbsPointCbsPoint', description?: string | null, id: string, title?: string | null } | null> | null, CertificationPackage?: Array<{ __typename?: 'ComponentCertificationPackageCertificationPackage', description?: string | null, id: string, name?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null> | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, clients?: Array<{ __typename?: 'ComponentOrganizerOrganizer', id: string, name?: string | null, url?: string | null, logo?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null> | null, partners?: Array<{ __typename?: 'ComponentOrganizerOrganizer', id: string, name?: string | null, url?: string | null, logo?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null> | null } | null } | null } | null, exposureLearningPrograms?: { __typename?: 'ExposureLearningProgramsEntityResponse', data?: { __typename?: 'ExposureLearningProgramsEntity', id?: string | null, attributes?: { __typename?: 'ExposureLearningPrograms', createdAt?: any | null, publishedAt?: any | null, updatedAt?: any | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, ExposureProgram?: Array<{ __typename?: 'ComponentExposureProgramExposureProgram', id: string, title?: string | null, points?: Array<{ __typename?: 'ComponentPointPoints', id: string, content?: string | null } | null> | null } | null> | null } | null } | null } | null };

export type HomeQueryVariables = Exact<{ [key: string]: never; }>;


export type HomeQuery = { __typename?: 'Query', home?: { __typename?: 'HomeEntityResponse', data?: { __typename?: 'HomeEntity', attributes?: { __typename?: 'Home', createdAt?: any | null, menu?: string | null, publishedAt?: any | null, slogan?: string | null, slides?: Array<{ __typename?: 'ComponentSlideSlide', cta?: string | null, ctaLink?: string | null, description?: string | null, title?: string | null, id: string, background?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null> | null } | null } | null } | null };

export type ApplyEafsQueryVariables = Exact<{ [key: string]: never; }>;


export type ApplyEafsQuery = { __typename?: 'Query', applyEafs?: { __typename?: 'ApplyEafsEntityResponse', data?: { __typename?: 'ApplyEafsEntity', attributes?: { __typename?: 'ApplyEafs', createdAt?: any | null, description?: string | null, message?: string | null, title?: string | null, logo?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null } | null } | null } | null } | null } | null } | null };

export type CreateParticipantMutationVariables = Exact<{
  data: ParticipantInput;
}>;


export type CreateParticipantMutation = { __typename?: 'Mutation', createParticipant?: { __typename?: 'ParticipantEntityResponse', data?: { __typename?: 'ParticipantEntity', id?: string | null } | null } | null };

export type CreateSponsorExhibitorMutationVariables = Exact<{
  data: SponsorExhibitorInput;
}>;


export type CreateSponsorExhibitorMutation = { __typename?: 'Mutation', createSponsorExhibitor?: { __typename?: 'SponsorExhibitorEntityResponse', data?: { __typename?: 'SponsorExhibitorEntity', id?: string | null } | null } | null };

export type DocumentsQueryVariables = Exact<{
  filters: DocumentFiltersInput;
}>;


export type DocumentsQuery = { __typename?: 'Query', documents?: { __typename?: 'DocumentEntityResponseCollection', data: Array<{ __typename?: 'DocumentEntity', attributes?: { __typename?: 'Document', name?: string | null, date?: string | null, slug?: string | null, status?: string | null, type?: Enum_Document_Type | null, category?: Array<{ __typename?: 'ComponentCategoryCategory', name?: string | null, file?: Array<{ __typename?: 'ComponentFileFile', name?: string | null, content?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', ext?: string | null, url: string } | null } | null } | null } | null> | null } | null> | null, background?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null }> } | null };

export type KnowledgeSharingQueryVariables = Exact<{ [key: string]: never; }>;


export type KnowledgeSharingQuery = { __typename?: 'Query', knowledgeSharing?: { __typename?: 'KnowledgeSharingEntityResponse', data?: { __typename?: 'KnowledgeSharingEntity', attributes?: { __typename?: 'KnowledgeSharing', intro?: string | null, quote?: string | null, quoteAuthor?: string | null, platform?: Array<{ __typename?: 'ComponentPlatformPlatform', description?: string | null, enableApplication?: boolean | null, enableRegistration?: boolean | null, themeColor?: string | null, title?: string | null, banner?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null> | null } | null } | null } | null };

export type RegistrationEafsQueryVariables = Exact<{ [key: string]: never; }>;


export type RegistrationEafsQuery = { __typename?: 'Query', registrationEafs?: { __typename?: 'RegistrationEafsEntityResponse', data?: { __typename?: 'RegistrationEafsEntity', attributes?: { __typename?: 'RegistrationEafs', createdAt?: any | null, description?: string | null, name?: string | null, title?: string | null, logo?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, points?: Array<{ __typename?: 'ComponentPointPoints', content?: string | null } | null> | null, pricing?: Array<{ __typename?: 'ComponentPricingPricing', price?: number | null, size?: number | null } | null> | null } | null } | null } | null };

export type SummitsQueryVariables = Exact<{
  filters: SummitFiltersInput;
}>;


export type SummitsQuery = { __typename?: 'Query', summits?: { __typename?: 'SummitEntityResponseCollection', data: Array<{ __typename?: 'SummitEntity', attributes?: { __typename?: 'Summit', date?: string | null, slug?: string | null, type?: Enum_Summit_Type | null, name?: string | null, slogan?: string | null, status?: string | null, organizerIntro?: string | null, sponsorIntro?: string | null, background?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, intro?: { __typename?: 'ComponentSummitIntroSummitIntro', fullDescription?: string | null, shortDescription?: string | null, title?: string | null, youtubeUrl?: string | null } | null, openingRemark?: { __typename?: 'ComponentOpeningRemarkOpeningRemark', name?: string | null, position?: string | null, remark?: string | null, youtubeUrl?: string | null, picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, speechFile?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null, session?: Array<{ __typename?: 'ComponentSessionSession', description?: string | null, title?: string | null, sessionVideo?: Array<{ __typename?: 'ComponentSessionVideoVideo', description?: string | null, title?: string | null, youtubeUrl?: string | null } | null> | null } | null> | null, organizer?: Array<{ __typename?: 'ComponentOrganizerOrganizer', name?: string | null, url?: string | null, logo?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null> | null, sponsor?: Array<{ __typename?: 'ComponentSponsorSponsor', name?: string | null, url?: string | null, logo?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null> | null } | null }> } | null };

export type UpcomingChcdaQueryVariables = Exact<{ [key: string]: never; }>;


export type UpcomingChcdaQuery = { __typename?: 'Query', upcomingChcda?: { __typename?: 'UpcomingChcdaEntityResponse', data?: { __typename?: 'UpcomingChcdaEntity', attributes?: { __typename?: 'UpcomingChcda', enabled?: boolean | null, content?: { __typename?: 'ComponentUpcomingUpcoming', description?: string | null, intro?: string | null, menuTitle?: string | null, organizerIntro?: string | null, sponsorIntro?: string | null, title?: string | null, youtubeUrl?: string | null, background?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, banner?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, logo?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, organizer?: Array<{ __typename?: 'ComponentOrganizerOrganizer', name?: string | null, url?: string | null, logo?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null> | null, sponsor?: Array<{ __typename?: 'ComponentSponsorSponsor', name?: string | null, url?: string | null, logo?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null> | null } | null } | null } | null } | null };

export type UpcomingEacmsQueryVariables = Exact<{ [key: string]: never; }>;


export type UpcomingEacmsQuery = { __typename?: 'Query', upcomingEacms?: { __typename?: 'UpcomingEacmsEntityResponse', data?: { __typename?: 'UpcomingEacmsEntity', attributes?: { __typename?: 'UpcomingEacms', enabled?: boolean | null, content?: { __typename?: 'ComponentUpcomingUpcoming', description?: string | null, intro?: string | null, menuTitle?: string | null, organizerIntro?: string | null, sponsorIntro?: string | null, title?: string | null, youtubeUrl?: string | null, background?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, banner?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, logo?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, organizer?: Array<{ __typename?: 'ComponentOrganizerOrganizer', name?: string | null, url?: string | null, logo?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null> | null, sponsor?: Array<{ __typename?: 'ComponentSponsorSponsor', name?: string | null, url?: string | null, logo?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null> | null } | null } | null } | null } | null };

export type UpcomingEafsQueryVariables = Exact<{ [key: string]: never; }>;


export type UpcomingEafsQuery = { __typename?: 'Query', upcomingEafs?: { __typename?: 'UpcomingEafsEntityResponse', data?: { __typename?: 'UpcomingEafsEntity', attributes?: { __typename?: 'UpcomingEafs', enabled?: boolean | null, introVideo?: string | null, content?: { __typename?: 'ComponentUpcomingUpcoming', description?: string | null, intro?: string | null, menuTitle?: string | null, organizerIntro?: string | null, sponsorIntro?: string | null, title?: string | null, youtubeUrl?: string | null, background?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, banner?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, logo?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, organizer?: Array<{ __typename?: 'ComponentOrganizerOrganizer', name?: string | null, url?: string | null, logo?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null } | null } | null } | null } | null> | null, sponsor?: Array<{ __typename?: 'ComponentSponsorSponsor', name?: string | null, url?: string | null, level?: Enum_Componentsponsorsponsor_Level | null, logo?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null } | null } | null } | null } | null> | null } | null, exhibitor?: Array<{ __typename?: 'ComponentOrganizerOrganizer', name?: string | null, url?: string | null, logo?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null } | null } | null } | null } | null> | null, guests?: Array<{ __typename?: 'ComponentPersonPerson', name?: string | null, position?: string | null, bio?: string | null, honourable?: boolean | null, picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null } | null } | null } | null } | null> | null, introDocument?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, session?: Array<{ __typename?: 'ComponentEafsSessionEafsSession', title?: string | null, moderator?: { __typename?: 'ComponentPersonPerson', name?: string | null, position?: string | null, picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null, speaker?: Array<{ __typename?: 'ComponentPersonPerson', name?: string | null, position?: string | null, type?: Enum_Componentpersonperson_Type | null, bio?: string | null, picture?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, document?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null> | null, points?: Array<{ __typename?: 'ComponentPointPoints', content?: string | null } | null> | null } | null> | null, strategicPartner?: Array<{ __typename?: 'ComponentOrganizerOrganizer', name?: string | null, url?: string | null, logo?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null } | null } | null } | null } | null> | null, eafsSetting?: Array<{ __typename?: 'ComponentEafsSettingEafsSetting', order?: number | null, published?: boolean | null, sectionName?: string | null, title?: string | null } | null> | null, statstics?: Array<{ __typename?: 'ComponentStatsticsStatstics', amount?: any | null, color?: string | null, label?: string | null, order?: number | null, icon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null> | null } | null } | null } | null };

export type LearningSolutionsQueryVariables = Exact<{ [key: string]: never; }>;


export type LearningSolutionsQuery = { __typename?: 'Query', learningSolutions?: { __typename?: 'LearningSolutionsEntityResponse', data?: { __typename?: 'LearningSolutionsEntity', id?: string | null, attributes?: { __typename?: 'LearningSolutions', youtubeUrl?: string | null, updatedAt?: any | null, publishedAt?: any | null, callToAction?: string | null, createdAt?: any | null, description?: string | null, LSBanner?: { __typename?: 'ComponentLsBannerLsBanner', callToAction?: string | null, callToActionLink?: string | null, id: string, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null, clients?: Array<{ __typename?: 'ComponentOrganizerOrganizer', id: string, name?: string | null, url?: string | null, logo?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null> | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, solution?: Array<{ __typename?: 'ComponentSolutionSolution', id: string, title?: string | null, icon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, SolutionPoint?: Array<{ __typename?: 'ComponentSolutionPointSolutionPoint', id: string, point?: string | null } | null> | null } | null> | null } | null } | null } | null };

export type WhoWeAreQueryVariables = Exact<{ [key: string]: never; }>;


export type WhoWeAreQuery = { __typename?: 'Query', whoWeAre?: { __typename?: 'WhoWeAreEntityResponse', data?: { __typename?: 'WhoWeAreEntity', id?: string | null, attributes?: { __typename?: 'WhoWeAre', clientCounterTitle?: string | null, createdAt?: any | null, publishedAt?: any | null, updatedAt?: any | null, ClientCounter?: Array<{ __typename?: 'ComponentClientCounterClientCounter', id: string, name?: string | null, value?: any | null } | null> | null, Intro?: { __typename?: 'ComponentIntroIntro', description?: string | null, fullName?: string | null, id: string, position?: string | null, title?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null, VisionMissionValue?: Array<{ __typename?: 'ComponentVisionMissionValueVisionMissionValue', id: string, title?: string | null, description?: string | null, icon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null> | null, WordAnimation?: { __typename?: 'ComponentWordAnimationWordAnimation', title?: string | null, id: string, WordAnimationItem?: Array<{ __typename?: 'ComponentWordAnimationItemWordAnimationItem', id: string, title?: string | null, words?: string | null } | null> | null } | null, banner?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, visionMissionValueBackground?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null } | null } | null };


export const AdvisorySolutionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"advisorySolutions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"advisorySolutions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"publicationState"},"value":{"kind":"EnumValue","value":"LIVE"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"callToAction"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"youtubeUrl"}},{"kind":"Field","name":{"kind":"Name","value":"clients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"solution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"SolutionPoint"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"point"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<AdvisorySolutionsQuery, AdvisorySolutionsQueryVariables>;
export const BlogByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"blogById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"blogId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blog"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"blogId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hits"}}]}}]}}]}}]}}]} as unknown as DocumentNode<BlogByIdQuery, BlogByIdQueryVariables>;
export const BlogDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"blog"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"BlogFiltersInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blogs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"publicationState"},"value":{"kind":"EnumValue","value":"LIVE"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"hits"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<BlogQuery, BlogQueryVariables>;
export const BlogsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"blogs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blogs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"publicationState"},"value":{"kind":"EnumValue","value":"LIVE"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pageCount"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"hits"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<BlogsQuery, BlogsQueryVariables>;
export const UpdateBlogDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateBlog"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateBlogId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BlogInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateBlog"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateBlogId"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateBlogMutation, UpdateBlogMutationVariables>;
export const CrossBorderSolutionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"crossBorderSolutions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"crossBorderSolutions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"publicationState"},"value":{"kind":"EnumValue","value":"LIVE"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"youtubeUrl"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"CBSPoint"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"callToAction"}},{"kind":"Field","name":{"kind":"Name","value":"CertificationPackage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"clients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"partners"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"exposureLearningPrograms"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"publicationState"},"value":{"kind":"EnumValue","value":"LIVE"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"ExposureProgram"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"points"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<CrossBorderSolutionsQuery, CrossBorderSolutionsQueryVariables>;
export const HomeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"home"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"home"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"menu"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slides"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"background"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"cta"}},{"kind":"Field","name":{"kind":"Name","value":"ctaLink"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slogan"}}]}}]}}]}}]}}]} as unknown as DocumentNode<HomeQuery, HomeQueryVariables>;
export const ApplyEafsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"applyEafs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"applyEafs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ApplyEafsQuery, ApplyEafsQueryVariables>;
export const CreateParticipantDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createParticipant"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ParticipantInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createParticipant"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<CreateParticipantMutation, CreateParticipantMutationVariables>;
export const CreateSponsorExhibitorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createSponsorExhibitor"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SponsorExhibitorInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSponsorExhibitor"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<CreateSponsorExhibitorMutation, CreateSponsorExhibitorMutationVariables>;
export const DocumentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"documents"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DocumentFiltersInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documents"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ext"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"background"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}}]} as unknown as DocumentNode<DocumentsQuery, DocumentsQueryVariables>;
export const KnowledgeSharingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"knowledgeSharing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"knowledgeSharing"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"publicationState"},"value":{"kind":"EnumValue","value":"LIVE"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"intro"}},{"kind":"Field","name":{"kind":"Name","value":"quote"}},{"kind":"Field","name":{"kind":"Name","value":"quoteAuthor"}},{"kind":"Field","name":{"kind":"Name","value":"platform"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"banner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"enableApplication"}},{"kind":"Field","name":{"kind":"Name","value":"enableRegistration"}},{"kind":"Field","name":{"kind":"Name","value":"themeColor"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<KnowledgeSharingQuery, KnowledgeSharingQueryVariables>;
export const RegistrationEafsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"registrationEafs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"registrationEafs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"points"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pricing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"size"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]} as unknown as DocumentNode<RegistrationEafsQuery, RegistrationEafsQueryVariables>;
export const SummitsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"summits"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SummitFiltersInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"summits"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"background"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"intro"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullDescription"}},{"kind":"Field","name":{"kind":"Name","value":"shortDescription"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"youtubeUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"openingRemark"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"remark"}},{"kind":"Field","name":{"kind":"Name","value":"speechFile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"youtubeUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slogan"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"session"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"sessionVideo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"youtubeUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organizer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organizerIntro"}},{"kind":"Field","name":{"kind":"Name","value":"sponsor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sponsorIntro"}}]}}]}}]}}]}}]} as unknown as DocumentNode<SummitsQuery, SummitsQueryVariables>;
export const UpcomingChcdaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"upcomingChcda"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upcomingChcda"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"background"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"banner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"intro"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"menuTitle"}},{"kind":"Field","name":{"kind":"Name","value":"organizer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organizerIntro"}},{"kind":"Field","name":{"kind":"Name","value":"sponsor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sponsorIntro"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"youtubeUrl"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpcomingChcdaQuery, UpcomingChcdaQueryVariables>;
export const UpcomingEacmsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"upcomingEacms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upcomingEacms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"background"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"banner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"intro"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"menuTitle"}},{"kind":"Field","name":{"kind":"Name","value":"organizer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organizerIntro"}},{"kind":"Field","name":{"kind":"Name","value":"sponsor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sponsorIntro"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"youtubeUrl"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpcomingEacmsQuery, UpcomingEacmsQueryVariables>;
export const UpcomingEafsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"upcomingEafs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upcomingEafs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"background"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"banner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"intro"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"menuTitle"}},{"kind":"Field","name":{"kind":"Name","value":"organizer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organizerIntro"}},{"kind":"Field","name":{"kind":"Name","value":"sponsor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"level"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sponsorIntro"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"youtubeUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exhibitor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"guests"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"honourable"}}]}},{"kind":"Field","name":{"kind":"Name","value":"introDocument"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"introVideo"}},{"kind":"Field","name":{"kind":"Name","value":"session"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"moderator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}},{"kind":"Field","name":{"kind":"Name","value":"speaker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"document"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"points"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"strategicPartner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"eafsSetting"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"order"}},{"kind":"Field","name":{"kind":"Name","value":"published"}},{"kind":"Field","name":{"kind":"Name","value":"sectionName"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"statstics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"order"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpcomingEafsQuery, UpcomingEafsQueryVariables>;
export const LearningSolutionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LearningSolutions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"learningSolutions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"publicationState"},"value":{"kind":"EnumValue","value":"LIVE"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"youtubeUrl"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"LSBanner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"callToAction"}},{"kind":"Field","name":{"kind":"Name","value":"callToActionLink"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"callToAction"}},{"kind":"Field","name":{"kind":"Name","value":"clients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"solution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"SolutionPoint"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"point"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<LearningSolutionsQuery, LearningSolutionsQueryVariables>;
export const WhoWeAreDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"whoWeAre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"whoWeAre"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"publicationState"},"value":{"kind":"EnumValue","value":"LIVE"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ClientCounter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Intro"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"VisionMissionValue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"WordAnimation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"WordAnimationItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"words"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"banner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"clientCounterTitle"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"visionMissionValueBackground"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<WhoWeAreQuery, WhoWeAreQueryVariables>;