import formatContributors from './formatContributors'

// TODO: finish tests!

const mock = [
  {
    "author": {
      "login": "octocat",
      "id": 1,
      "avatar_url": "https://github.com/images/error/octocat_happy.gif",
      "html_url": "https://github.com/octocat",
    },
    "weeks": [
      {
        "w": "1367712000",
        "a": 6898,
        "d": 77,
        "c": 10
      }
    ]
  },
  {
    "author": {
      "login": "doggocat",
      "id": 1,
      "avatar_url": "https://github.com/images/error/doggocat_happy.gif",
      "html_url": "https://github.com/doggocat",
    },
    "weeks": [
      {
        "w": "1367712000",
        "a": 6,
        "d": 77,
        "c": 10
      },
      {
        "w": "1368317504",
        "a": 4,
        "d": 3,
        "c": 15
      }
    ]
  },
]

const expected = {

}

it('returns an array of contributors', () => {
  expect(formatContributors(mock).length).toEqual(2)
})

it('returns an array of contributors with the correct fields', () => {

})

it('tallies the correct number of additions, deletions, and commits', () => {
})
