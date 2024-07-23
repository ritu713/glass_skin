import { ProductType } from '../../../Server/shared/types'


type Props = {
    prods : ProductType[]
}

const ProductDisplay = ({prods} : Props) => {
  return (<>
    <p className='mx-[15rem]  mt-[5rem] text-xl text-stone-600 font-bold'>Amazing! Here's your results...</p>
    <div className='mx-[15rem] grid grid-cols-2'>
      {
        prods.map(product => {
            return <div className='px-5 py-3 border border-gray-400'>
                <h4 className='text-xl text-stone-600'>{product.name}</h4>
                <span className='text-lg text-stone-500 mx-10'>{product.brand}</span>
                
                <span className='text-lg text-stone-500'>{product.price}</span>
                <br/>
                <a href={product.url} className='text-lg text-blue-600'>View Product on Myntra</a>
            </div>
        })
      }
    </div>
    </>
  )
}

export default ProductDisplay
