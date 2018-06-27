import formatContributors from '../util/formatContributors'
import { mockRequest, expectedResponse } from './__mocks__/contributorData'

it('returns an array of contributors', () => {
  expect(formatContributors(mockRequest).length).toEqual(2)
})

it('returns an array of contributors with the correct fields', () => {
  expect(formatContributors(mockRequest)).toEqual(expectedResponse)
})

it('tallies the correct number of additions, deletions, and commits', () => {
  expect(formatContributors(mockRequest)[1].commits).toEqual(expectedResponse[1].commits)
})
