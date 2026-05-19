import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'SafeGit',
    },
    githubUrl: 'https://github.com/agent-cortex/safegit',
    links: [
      {
        text: 'CLI Repo',
        url: 'https://github.com/agent-cortex/safegit',
        external: true,
      },
      {
        text: 'Site Repo',
        url: 'https://github.com/agent-cortex/safegit-site',
        external: true,
      },
    ],
  };
}
