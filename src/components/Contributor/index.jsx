import React from 'react'
import './styles.css'


const Contributor = (contributorData) => {
  const { avatar_url, html_url, username, commits } = contributorData

  return (
    <div className="Contributor">
      <img className="Contributor-avatar" src={avatar_url} alt="github avatar"/>
      <div>
        <a href={html_url} target="_blank">{username}</a>
        <p>Commits: {commits}</p>
        <p>Additions: {commits}</p>
        <p>Deletions: {commits}</p>
      </div>
    </div>
  )
}

export default Contributor
