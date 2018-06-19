import React from 'react'

const Contributor = (contributorData) => {
  const { avatar_url, html_url, username, commits } = contributorData

  return (
    <div className="Contributor">
      <img src={avatar_url} alt="github avatar"/>
      <a href={html_url} target="_blank">{username}</a>
      <p>{commits}</p>
    </div>
  )
}

export default Contributor
