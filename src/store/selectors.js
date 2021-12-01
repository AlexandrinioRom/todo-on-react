import { createSelector } from 'reselect'

export * as todoSelectors from './selectors'
export const filter = createSelector(state, state => state.filter)