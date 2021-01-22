import React from 'react';
import GitHubButton from 'react-github-btn';

const GithubButton = () => (
  <>
    <GitHubButton
      className="github-button"
      href="https://github.com/cobidev/gatsby-simplefolio/fork"
      data-icon="octicon-repo-forked"
      data-size="large"
      data-show-count="true"
      aria-label="Fork cobidev/gatsby-simplefolio on GitHub"
    >
      Fork
    </GitHubButton>
    <GitHubButton
      className="github-button"
      href="//https://github.com/dimitri12482"
     
    </GitHubButton>
  </>
);

export default GithubButton;
