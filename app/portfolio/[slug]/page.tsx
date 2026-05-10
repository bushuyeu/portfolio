import { notFound } from "next/navigation";
import { getPortfolioPosts } from "app/portfolio/utils";
import { CustomMDX } from "app/components/mdx";

export async function generateStaticParams() {
  let works = getPortfolioPosts();
  return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({ params }) {
  let works = getPortfolioPosts();
  let work = works.find((work) => work.slug === params.slug);

  if (!work) {
    return;
  }

  return {
    title: work.metadata.title,
    description: work.metadata.summary,
  };
}

export default function Work({ params }) {
  let works = getPortfolioPosts();
  let work = works.find((work) => work.slug === params.slug);

  if (!work) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            headline: work.metadata.title,
            description: work.metadata.summary,
            datePublished: work.metadata.publishedAt,
          }),
        }}
      />
      <h1 className="font-semibold text-2xl mb-4 tracking-tighter">
        {work.metadata.title}
      </h1>
      {work.metadata.technologies && (
        <div className="flex flex-wrap gap-2 mb-4">
          {work.metadata.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
      {work.metadata.link && (
        <a
          href={work.metadata.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors mb-4 block"
        >
          View Project →
        </a>
      )}
      <div className="prose prose-neutral dark:prose-invert">
        <CustomMDX source={work.content} />
      </div>
    </section>
  );
}
