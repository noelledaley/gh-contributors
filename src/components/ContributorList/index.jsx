import React, { Component } from 'react'
import GitHubContributorService from '../../services/GitHubContributorService'
import Contributor from '../Contributor'

class ContributorList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contributors: null
    }
  }

  componentDidMount() {
    const contributors = this.formatContributors(GitHubContributorService.fetchContributors())
    this.setState({contributors})
  }

  formatContributors = (contributors) => {
    return contributors.map(c => {
      return (
        {
          id: c.author.id,
          avatar_url: c.author.avatar_url,
          html_url: c.author.html_url,
          username: c.author.login,
          commits: c.total
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
        <h1>Contributors to facebook/create-react-app</h1>
        <ol>
          { contributors }
        </ol>
      </div>
    )
  }
}

export default ContributorList
