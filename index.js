const express = require("express")
const { ApolloServer } = require("apollo-server-express")

const typeDefs = require("./api/Types")
const resolvers = require("./api/Resolvers")
// you should be set up the database server
const app = express()
const port = process.env.PORT || 5000
const schema={
typeDefs,
	resolvers
}

const server = new ApolloServer({
     schema
})

server.applyMiddleware({ app })

app.listen(port, () =>
	console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
)
