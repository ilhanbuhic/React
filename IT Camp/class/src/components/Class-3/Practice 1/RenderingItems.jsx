import Item from './Item'

export default function RenderingItems() {
  const products = [
    { name: 'Cips', isBought: true },
    { name: 'Kola', isBought: false },
    { name: 'Protein', isBought: true },
    { name: 'Vitamin', isBought: false },
  ]
  return (
    <>
      <p>Groceries</p>
      <ul>
        {/* Bad example */}
        {/* <Item name='Cips' isBought={true} />
      <Item name='Kola' />
      <Item name='Protein' />
      <Item name='Vitamin' /> */}
        {/* Bad example */}

        {/* Good examole */}
        {products.map((el, index) => (
          <Item key={index} name={el.name} isBought={el.isBought} />
        ))}
        {/* Good examole */}
      </ul>
    </>
  )
}
