module.exports = function (api) {
  api.loadSource(({ addSchemaTypes }) => {
    // contentfullCMSでfieldがあるのに一つも値が入っていなかった場合、
    // gridsome側で型が分からないためにエラーになるので、指定しておいてやる。
    // ※idは必須

    // 講習会情報の定員、給付制度、CPDS
    addSchemaTypes(`
      type ContentfulQualification implements Node {
        id: ID!
        capacity: String
        benefits: String
        CPDS: String
      }
    `)
  })
}