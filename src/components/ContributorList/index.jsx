import React, { Component } from 'react'
import Contributor from '../Contributor'
import Dropdown from '../Dropdown'
import './ContributorList.css'
import formatContributors from '../../util/formatContributors'


// TODO:
// add loading spinner component

const GITHUB_CONTRIBUTORS_API_URL = 'https://api.github.com/repos/facebook/create-react-app/stats/contributors'

class ContributorList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contributors: null,
      sortByAttribute: "commits",
      isLoading: true
    }
  }

  componentDidMount() {
    const { sortByAttribute } = this.state
    fetch(GITHUB_CONTRIBUTORS_API_URL)
      .then(response =>  response.json())
      .then(contributors => formatContributors(contributors))
      .then(contributors => this.sortContributors(sortByAttribute, contributors))
      .then(contributors => this.setState(
        {
          contributors,
          isLoading: false
        }
      ))
      .catch(error => {
        console.error(error)
      })
  }

  sortContributors = (sortByAttribute, contributors) => {
    return contributors.slice().sort((a, b) => {
      return b[sortByAttribute] - a[sortByAttribute]
    })
  }

  renderContributors = () => {
    const { contributors } = this.state

    return contributors.map((c, i) => {
      const rank = i + 1
      return (
        <li key={c.id}>
          <Contributor rank={ rank } {...c} />
        </li>
      )
    })
  }

  changeSortByAttribute = (e) => {
    if (e.target.value === this.state.sortByAttribute) {
      return
    }
    const newSort = e.target.value
    const contributors = this.sortContributors(newSort, this.state.contributors)
    this.setState({sortByAttribute: newSort, contributors})
  }

  render () {
    const contributors = !this.state.isLoading ? this.renderContributors() : 'Loading contributors...'
    return (
      <div className="ContributorListWrapper">
        <Dropdown onChange={ this.changeSortByAttribute }/>
        <div className="ContributorList">
          <ol>
            { contributors }
          </ol>
        </div>
      </div>
    )
  }
}

export default ContributorList
