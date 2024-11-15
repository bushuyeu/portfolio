import Link from "next/link";
import { formatDate, getPortfolioPosts } from "app/portfolio/utils";

export function PortfolioWorks() {
  let allWorks = getPortfolioPosts();

  return (
    <div>
      {allWorks
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((work) => (
          <Link
            key={work.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/portfolio/${work.slug}`}
          >
            <div className="w-full flex flex-col space-y-2">
              <div className="flex flex-row justify-between items-center">
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight font-medium">
                  {work.metadata.title}
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  {formatDate(work.metadata.publishedAt, false)}
                </p>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400">
                {work.metadata.summary}
              </p>
              {work.metadata.technologies && (
                <div className="flex flex-wrap gap-2">
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
            </div>
          </Link>
        ))}
    </div>
  );
}
