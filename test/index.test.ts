import { cptmStatus } from '../source'

test('get cptm status', async () => {
  const data = await cptmStatus()
  expect(data.length).toBeGreaterThan(0)
})
