export const mockRequest = [
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
      "id": 2,
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

export const expectedResponse = [
  {
    id: 1,
    avatar_url: "https://github.com/images/error/octocat_happy.gif",
    html_url: "https://github.com/octocat",
    login: "octocat",
    commits: 10,
    additions: 6898,
    deletions: 77
  },
  {
    id: 2,
    avatar_url: "https://github.com/images/error/doggocat_happy.gif",
    html_url: "https://github.com/doggocat",
    login: "doggocat",
    commits: 25,
    additions: 10,
    deletions: 80
  }
]
