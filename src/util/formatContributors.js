function formatContributors (contributors) {
  return contributors.map(c => {
    // tally additions and deletions
    let additions = 0
    let deletions = 0
    let commits = 0

    c.weeks.forEach(week => {
      additions += week.a
      deletions += week.d
      commits += week.c
    })

    return (
      {
        id: c.author.id,
        avatar_url: c.author.avatar_url,
        html_url: c.author.html_url,
        login: c.author.login,
        commits: commits.toLocaleString(),
        additions: additions.toLocaleString(),
        deletions: deletions.toLocaleString()
      }
    )
  })
}

export default formatContributors
