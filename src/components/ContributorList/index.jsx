import React, { Component } from 'react'
import Contributor from '../Contributor'
import './styles.css'


// TODO:
// Add loading state
// Decide if fetch should happen in service instead of component

class ContributorList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contributors: null
    }
  }

  componentDidMount() {
     fetch('https://api.github.com/repos/facebook/create-react-app/stats/contributors')
        .then(response =>  response.json())
        .then(contributors => this.formatContributors(contributors))
        .then(formattedContributors => this.setState({contributors: formattedContributors}))
        .catch(error => {
          console.error(error)
        })
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
        <ol>
          { contributors }
        </ol>
      </div>
    )
  }
}

export default ContributorList
