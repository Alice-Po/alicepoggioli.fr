import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Alice Poggioli",
  DESCRIPTION: "Entrepreneuse web indépendante",
  AUTHOR: "Alice Poggioli",
}

// Work Page
export const WORK: Page = {
  TITLE: "Expériences professionnelles",
  DESCRIPTION: "",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projets",
  DESCRIPTION: "",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Rechercher",
  DESCRIPTION: "",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Accueil", 
    HREF: "/", 
  },
  { 
    TEXT: "Expériences", 
    HREF: "/experiences", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projets", 
    HREF: "/projets", 
  },
]

// Socials
export const SOCIALS: Socials = [
  // { 
  //   NAME: "Email",
  //   ICON: "email", 
  //   TEXT: "markhorn.dev@gmail.com",
  //   HREF: "mailto:markhorn.dev@gmail.com",
  // },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "Alice-Po",
    HREF: "https://github.com/Alice-Po"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "alice-poggioli",
    HREF: "https://www.linkedin.com/in/alice-poggioli/",
  }
]

