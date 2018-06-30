import React from 'react'
import './Contributor.css'
import PropTypes from 'prop-types'


const Contributor = (contributorData) => {
  const { avatar_url, html_url, login, rank, commits, additions, deletions } = contributorData

  return (
    <div className="Contributor">
      <div className="Contributor-header">
        <div className="Contributor-header-img">
          <img className="Contributor-avatar" src={ avatar_url } alt="github avatar"/>
          <div class="Contributor-rank">
            <p># { rank }</p>
          </div>
        </div>
        <a href={ html_url } target="_blank">{ login }</a>
      </div>
      <div className="Contributor-details">
        <p>{ commits } commits</p>
        <p className="Contributor-details-additions">{ additions }++</p>
        <p className="Contributor-details-deletions">{ deletions }--</p>
      </div>
      <div>
      </div>
    </div>
  )
}

Contributor.propTypes = {
  id: PropTypes.number,
  avatar_url: PropTypes.string,
  html_url: PropTypes.string,
  login: PropTypes.string,
  rank: PropTypes.number,
  commits: PropTypes.string,
  additions: PropTypes.string,
  deletions: PropTypes.string
}

export default Contributor
