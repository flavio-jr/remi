/**
 * Handle REST API calls
 * @param {Object} http
 * @param {String} resource 
 * @param {Object} resolver
 */
export default http => 
  (resource, resolver) => ({
    /**
     * Gets the resource list from server
     * @param {Object} qs 
     * @returns {Promise}
     */
    list (qs = {}) {
      return http
        .get(resource, {
          params: qs
        })
        .then(res => resolver.setEntityList(res.data))
    },

    /**
     * Stores an entity
     * @param {Object} data
     * @returns {Promise}
     */
    store (data) {
      return http
        .post(resource, data)
        .then(res => resolver.setEntity(res.data))
    },

    /**
     * Updates an entity
     * @param {Object} data
     * @param {*} identifier
     * @returns {Promise}
     */
    update (data, identifier) {
      return http
        .put(`${resource}/${identifier}`, data)
    },

    /**
     * Destroys an entity
     * @param {*} identifier 
     * @returns {Promise}
     */
    destroy (identifier) {
      return http
        .delete(`${resource}/${identifier}`)
    }
  })