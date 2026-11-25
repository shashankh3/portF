import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import {
  about,
  achievement,
  certifications,
  contact,
  education,
  experience,
  footer,
  githubActivity,
  hero,
  navLinks,
  profile,
  projects,
  sectionIds,
  skillGroups,
  workSection
} from '@/data/portfolio.js';

const PUBLIC_DIR = resolve(process.cwd(), 'public');

describe('portfolio data integrity', () => {
  it('references existing static assets in public/', () => {
    expect(existsSync(resolve(PUBLIC_DIR, profile.faviconUrl.slice(1)))).toBe(true);
    expect(existsSync(resolve(PUBLIC_DIR, profile.resumeUrl.slice(1)))).toBe(true);

    for (const project of projects) {
      expect(existsSync(resolve(PUBLIC_DIR, project.video.src.slice(1)))).toBe(true);
      expect(existsSync(resolve(PUBLIC_DIR, project.video.poster.slice(1)))).toBe(true);
    }
  });

  it('has unique project ids, valid links, and consistent section ids', () => {
    const ids = projects.map((project) => project.id);
    expect(new Set(ids).size).toBe(ids.length);
    expect(sectionIds).toEqual(['work', 'experience', 'stack', 'contact']);
    expect(navLinks.some((link) => link.cta && link.external)).toBe(true);

    for (const project of projects) {
      expect(project.links.length).toBeGreaterThan(0);
      for (const link of project.links) {
        expect(link.href).toMatch(/^https:\/\//);
      }
    }
  });

  it('contains populated profile, sections, and valid achievement scores', () => {
    expect(hero.phrases.length).toBeGreaterThan(0);
    expect(hero.phrases.every((phrase) => phrase.startsWith(' '))).toBe(true);
    expect(about.paragraphs.length).toBeGreaterThan(0);
    expect(workSection.title).toBeTruthy();
    expect(githubActivity.endpoint).toContain(profile.githubUsername);
    expect(experience.length).toBeGreaterThan(0);
    expect(skillGroups.length).toBeGreaterThan(0);
    expect(education.length).toBeGreaterThan(0);
    expect(certifications.length).toBeGreaterThan(0);
    expect(contact.links.length).toBeGreaterThan(0);
    expect(footer.owner).toBe(profile.name);

    for (const score of achievement.scores) {
      expect(score.value).toBeGreaterThanOrEqual(0);
      expect(score.value).toBeLessThanOrEqual(100);
    }
  });
});
