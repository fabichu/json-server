import "./Product.css";

const Product = (props) => {
	return (
		<div id={props.id} className='Product'>
			<h3>{props.title}</h3>
			<p className='price'>{props.price + ' ' + props.currency}</p>
		</div>
	);
}

export default Product;