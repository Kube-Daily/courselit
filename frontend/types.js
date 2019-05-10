/**
 * This file contains all the PropTypes used across the app.
 */
import PropTypes from 'prop-types'

export const authProps = PropTypes.shape({
  guest: PropTypes.bool,
  token: PropTypes.string
})

export const profileProps = PropTypes.shape({
  isCreator: PropTypes.bool,
  name: PropTypes.string,
  id: PropTypes.string,
  fetched: PropTypes.bool
})

export const protectedRouteProps = {
  condition: PropTypes.bool.isRequired,
  router: PropTypes.object.isRequired,
  redirectTo: PropTypes.string.isRequired,
  renderOnServer: PropTypes.bool.isRequired,
  children: PropTypes.object
}