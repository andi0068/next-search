import Image from 'next/image';

import Main from '@/components/layouts/main';
import Container from '@/components/layouts/container';
import * as Section from '@/components/layouts/search-section';
import * as Card from '@/components/ui/post-card';
import Icon from '@/components/ui/icon';
import Anchor from '@/components/typography/anchor';
import ArrowRight from '@/components/svgs/arrow-right';
import * as path from '@/utils/path-utils';
import { SearchType } from '@/types';

import Search from './search';

interface PageProps {
  searchParams?: {
    [SearchType.name]?: string;
  };
}

export default async function Home({ searchParams }: PageProps) {
  const query = searchParams?.[SearchType.name] || '';
  const results = await search(query);

  return (
    <Main>
      <Container>
        <Section.Root>
          <Section.Header>
            <Section.Title>Search</Section.Title>
            <Search
              autoFocus
              placeholder="Article name or keywords..."
              className="bg-background-secondary"
            />
          </Section.Header>
          {results.length ? (
            <>
              <Section.Body>
                {results.map((post, i) => (
                  <Card.Root key={i}>
                    <Card.Image asChild>
                      <Image
                        alt={post.image.name}
                        width={post.image.width}
                        height={post.image.height}
                        src={path.image(post.image.name)}
                      />
                    </Card.Image>
                    <Card.Content>
                      <Card.Title>{post.title}</Card.Title>
                      <Card.Footer>
                        <Card.FootCopy>{post.author}</Card.FootCopy>
                        <Card.FootCopy>{post.date}</Card.FootCopy>
                      </Card.Footer>
                    </Card.Content>
                  </Card.Root>
                ))}
              </Section.Body>
              <Section.Footer>
                <p className="text-foreground-tertiary">1.535 results</p>
                <Anchor href="#" className="inline-flex items-center">
                  Show me more results
                  <Icon asChild className="ml-2">
                    <ArrowRight />
                  </Icon>
                </Anchor>
              </Section.Footer>
            </>
          ) : null}
        </Section.Root>
      </Container>
    </Main>
  );
}

async function search(query: string) {
  if (!query) return [];
  return await import('@/data/posts').then((mod) => mod.posts);
}
