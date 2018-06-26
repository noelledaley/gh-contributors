import React from 'react'
import './Contributor.css'


const Contributor = (contributorData) => {
  const { avatar_url, html_url, login, commits, additions, deletions } = contributorData

  return (
    <div className="Contributor">
      <img className="Contributor-avatar" src={avatar_url} alt="github avatar"/>
      <div>
        <a href={html_url} target="_blank">{login}</a>
        <p>Commits: { commits }</p>
        <p>Additions: { additions }</p>
        <p>Deletions: { deletions }</p>
      </div>
    </div>
  )
}

export default Contributor
