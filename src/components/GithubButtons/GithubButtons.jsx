import React from 'react';
import GitHubButton from 'react-github-btn';

const GithubButton = () => (
  <>
    <GitHubButton
      className="github-button"
      href="https://github.com/dimitri12482/Portfolioweb/fork"
      data-icon="octicon-repo-forked"
      data-size="large"
      data-show-count="true"
      aria-label="Fork dimitri12482 on GitHub"
    >
      Fork
    </GitHubButton>
    <GitHubButton
      className="github-button"
      href="https://github.com/dimitri12482/Portfolioweb"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="Star dimitri12482 on GitHub"
    >
      Star
    </GitHubButton>
  </>
);
export default GithubButton;
