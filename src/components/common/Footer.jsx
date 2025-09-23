import React from "react";
import { siteMeta } from "../../data/siteContent";

export default function Footer() {
  return (
    <footer className="mt-20 py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm">© {new Date().getFullYear()} {siteMeta.name}. All rights reserved.</div>
        <div className="flex gap-4">
          <a href={siteMeta.github} target="_blank" className="text-sm hover:text-primary">GitHub</a>
          <a href={siteMeta.linkedin} target="_blank" className="text-sm hover:text-primary">LinkedIn</a>
          <a href={siteMeta.resumeUrl} className="text-sm hover:text-primary">Resume</a>
        </div>
      </div>
    </footer>
  );
}
