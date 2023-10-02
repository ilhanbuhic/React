export default function Item({ name, isBought }) {
  return (
    <li>
      {/* {name} {isBought ? '✅' : '❌'} */}
      {name} {isBought && '✅'}
    </li>
  )
}
