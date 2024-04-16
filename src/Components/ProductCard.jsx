export default function ProductCard(props) {
    const { data = {}, addToCart = () => {}, isAdded = false,imageUrl =data.image } = props;
    return <div className={`container product-card b-r-10 justify-center ${isAdded && 'bg-secondary'}`} onClick={isAdded ? () => {} : () => addToCart(data)}>
        <img src={imageUrl} alt={data.name} className="product-image" />
        <h2 className="m-b-10 truncate-text">{data.name}</h2>
        <div className=" justify-between">
            <p>{data.description}</p>
            <p class="bi bi-apple">Brand:{data.brand}</p>
            <p class="bi bi-tag">{data.price}</p>
            <p class="bi bi-star-half"> : ({data.ratings})</p>
        </div>
    </div>
}