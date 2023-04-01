import Link from 'next/link'

function Test() {
  return (
    <ul>
      <li>
        <Link href="/productpage/13">Go to pages/productpage/[productid].js</Link>
      </li>
      <li>
        <Link href="/productpage/41">Also goes to pages/productpage/[productid].js</Link>
      </li>
    </ul>
  )
}

export default Test