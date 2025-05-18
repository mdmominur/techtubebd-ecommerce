import { promises as fs } from 'fs'
import path from 'path'
import Home from '@/components/AppComponents/Home/index.component'

export async function getServerSideProps() {
  const filePath = path.join(process.cwd(), 'data', 'products.json')
  const data = await fs.readFile(filePath, 'utf8')
  const products = JSON.parse(data)
  return { props: { products } }
}

export default function index({ products }) {
  return (
    <>
      <Home products={products}></Home>
    </>
  )
}
