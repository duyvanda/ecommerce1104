import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";
import products from "../products";

function ProductScreen({ match }) {
	const product = products.find((p) => p._id == match.params.id);
	return (
		<div>
			<Link to="/" className="btn btn-primary my-3">
				Go Back
			</Link>
			<Row>
				<Col md={6}>
					<Image src={product.image} alt={product.name} fluid />
				</Col>
				<Col md={3}>
					<ListGroup variant="flush">
						<ListGroup.Item>
							<h3>{product.name}</h3>
						</ListGroup.Item>

						<ListGroup.Item>
							{product.rating} from {product.numReviews} reviews
						</ListGroup.Item>

						<ListGroup.Item>Price: ${product.price}</ListGroup.Item>
					</ListGroup>
				</Col>

				<Col md={3}>
					<ListGroup variant="flush">
						<ListGroup.Item>
							<h3>{product.price}</h3>
						</ListGroup.Item>

						<ListGroup.Item>
							Status: {product.countInStock > 0 ? "Instock" : "Out Of Stock"}
						</ListGroup.Item>

						<ListGroup.Item>
							<div className="d-grid gap-2">
								<Button
									variant="primary"
									size="md"
									disabled={product.countInStock == 0}
								>
									ADD TO CART
								</Button>
							</div>
						</ListGroup.Item>
					</ListGroup>
				</Col>
			</Row>
		</div>
	);
}

export default ProductScreen;
