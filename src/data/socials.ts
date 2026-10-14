export const socialLinks = [
  { id: 'github', name: 'GitHub', url: 'https://github.com/Endier-Ray' },
  { id: 'linkedin', name: 'LinkedIn', url: 'https://www.linkedin.com/in/ramon-ceja-c/' },
] as const;

export type SocialPlatform = (typeof socialLinks)[number]['id'];
