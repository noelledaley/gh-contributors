import React, { Component } from 'react'
import Contributor from '../Contributor'
import './styles.css'


// TODO:
// Add loading state
// Decide if fetch should happen in service instead of component

const GITHUB_CONTRIBUTORS_API_URL = 'https://api.github.com/repos/facebook/create-react-app/stats/contributors'

class ContributorList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contributors: null
    }
  }

  componentDidMount() {
     fetch(GITHUB_CONTRIBUTORS_API_URL)
        .then(response =>  response.json())
        .then(contributors => this.formatContributors(contributors))
        .then(formattedContributors => this.setState({contributors: formattedContributors}))
        .catch(error => {
          console.error(error)
        })
    }

  formatContributors = (contributors) => {
    return contributors.map(c => {
      let additions = 0
      let deletions = 0

      c.weeks.forEach(week => {
        additions += week.a
        deletions += week.d
      })

      return (
        {
          id: c.author.id,
          avatar_url: c.author.avatar_url,
          html_url: c.author.html_url,
          username: c.author.login,
          commits: c.total,
          additions,
          deletions
        }
      )
    })
  }

  renderContributors = () => {
    const { contributors } = this.state

    return contributors.map(c => {
      return (
        <li key={c.id}>
          <Contributor {...c} />
        </li>
      )
    })
  }

  render () {
    const contributors = this.state.contributors ? this.renderContributors() : ''
    return (
      <div className="ContributorList">
        <ol>
          { contributors }
        </ol>
      </div>
    )
  }
}

export default ContributorList
