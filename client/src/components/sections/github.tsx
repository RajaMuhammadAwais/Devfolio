import { useQuery } from "@tanstack/react-query";
import { Github, Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
}

export function GitHubSection() {
  const { data: repos, isLoading, error } = useQuery<GitHubRepo[]>({
    queryKey: ["/api/github/repos"],
  });

  return (
    <section className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-testid="github-title">
            GitHub <span className="gradient-text">Repositories</span>
          </h2>
          <p className="text-muted-foreground text-lg" data-testid="github-description">
            Latest projects and contributions from my GitHub profile
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            // Loading skeletons
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-background border border-border rounded-lg p-6">
                <Skeleton className="h-6 w-3/4 mb-3" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-2/3 mb-4" />
                <div className="flex justify-between items-center">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-16" />
                </div>
              </div>
            ))
          ) : error ? (
            <div className="text-center col-span-full py-8" data-testid="github-error">
              <Github className="h-16 w-16 text-muted-foreground mb-4 mx-auto" />
              <p className="text-muted-foreground">Unable to load repositories. Please check back later.</p>
            </div>
          ) : repos && repos.length > 0 ? (
            repos.map((repo, index) => (
              <div 
                key={repo.id}
                className="github-repo bg-background border border-border rounded-lg p-6 hover:border-primary transition-all duration-300"
                data-testid={`github-repo-${index}`}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold" data-testid={`repo-name-${index}`}>
                    {repo.name}
                  </h3>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    asChild
                    data-testid={`repo-link-${index}`}
                  >
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3" data-testid={`repo-description-${index}`}>
                  {repo.description || 'No description available'}
                </p>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    {repo.language && (
                      <span className="flex items-center gap-1" data-testid={`repo-language-${index}`}>
                        <div className="w-3 h-3 rounded-full bg-primary"></div>
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1" data-testid={`repo-stars-${index}`}>
                      <Star className="h-3 w-3" />
                      {repo.stargazers_count}
                    </span>
                  </div>
                  <span data-testid={`repo-updated-${index}`}>
                    Updated {new Date(repo.updated_at).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center col-span-full py-8" data-testid="github-no-repos">
              <Github className="h-16 w-16 text-muted-foreground mb-4 mx-auto" />
              <p className="text-muted-foreground">No repositories found.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
