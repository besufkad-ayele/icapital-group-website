/**
 * StructuredData Component
 * Injects JSON-LD structured data into page <head>
 * 
 * Usage:
 * <StructuredData data={generateOrganizationSchema()} />
 */

interface StructuredDataProps {
  data: Record<string, any> | Array<Record<string, any>>;
}

export default function StructuredData({ data }: StructuredDataProps) {
  // Handle both single schema and array of schemas
  const schemaData = Array.isArray(data) ? data : [data];

  return (
    <>
      {schemaData.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema, null, 0), // Minified for production
          }}
        />
      ))}
    </>
  );
}
