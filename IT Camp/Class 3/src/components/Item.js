// export default function Item(props) {
//     return <li>[props.name]</li>
// }
export default function Item({ name, isBought }) {
  return (
    <li>
      {/* {name} {isBought ? '✅' : '❌'} */}
      {name} {isBought && "✅"}
    </li>
  )
}
