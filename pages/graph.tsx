import { gql, useQuery } from '@apollo/client'

const GET_ACTIVE_ITEMS = gql`
  {
    activeItems(
      where: { buyer: "0x0000000000000000000000000000000000000000" }
    ) {
      id
      buyer
      seller
      nftAddress
      tokenId
      price
    }
  }
`

const Graph = () => {
  const { data, loading, error } = useQuery(GET_ACTIVE_ITEMS)
  console.log('🚀 -> file: graph.tsx -> line 20 -> Graph -> data', data)
  return <div>{JSON.stringify(data?.activeItems)}</div>
}

export default Graph
