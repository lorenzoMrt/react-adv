import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"


const product = {
    id: '1',
    title: 'Another Coffee mug',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping store</h1>
            <hr/>
            <div style= {{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                
                <ProductCard product={product}>
                    <ProductImage/>
                    <ProductTitle title='Depressive mug'/>
                    <ProductButtons/>
                </ProductCard>
                
                <ProductCard product={product}>
                    <ProductCard.Image/>
                    <ProductCard.Title/>
                    <ProductCard.Buttons/>
                </ProductCard>
            </div>
        </div>
    )
}
