"use client";
import { getStrapiImageUrl } from "@/utils/getStrapiImageUrl";
import Image from "next/image";

interface OrganizersPartnersProps {
  organizersPartners: {
    heading?: string;
    logosCard?: {
      companyName?: string;
      companyLogo?: { url: string; width?: number; height?: number } | null;
    }[];
  };
}


const OrganizersPartners = ({
  organizersPartners,
}: OrganizersPartnersProps) => (
  <section className="bg-[#FAFAFA] py-16 md:py-24">
    <div className="container mx-auto px-6 md:px-12 lg:px-24">
      <h2 className="mb-12 text-center text-2xl font-bold text-[#253E5E] md:text-3xl">
        {organizersPartners?.heading }
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
        {organizersPartners?.logosCard?.map((logo, i) => (
          <div
            key={logo.companyName || i}
            className="flex h-24 w-48 items-center justify-center rounded bg-white p-4 shadow-sm transition-transform duration-200 hover:scale-105"
          >
            {logo.companyLogo?.url && (
              <Image
                src={getStrapiImageUrl(logo.companyLogo.url)}
                alt={logo.companyName || "Company Logo"}
                width={logo.companyLogo.width || 160}
                height={logo.companyLogo.height || 64}
                className="object-contain"
                style={{ maxHeight: 64, maxWidth: 160 }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OrganizersPartners;
