import React, { useState, useEffect }  from 'react';
import AppMenu from '../../Components/menu/AppMenu';
import './Products.css';

import { db } from '../../Config/FireBase';
import { collection, getDocs } from "firebase/firestore";

import { Badge, Button, Card, Image, List, message, Rate, Spin, Typography } from 'antd';

function Products() {

    const [products, setProducts] = useState([]);
    const [loadingg, setLoadingg] = useState(true);
 
    const fetchGet = async () => {
       
        await getDocs(collection(db, "products"))
            .then((querySnapshot) => {               
                const newData = querySnapshot.docs.map((doc) => ({...doc.data(), id:doc.id }));
                setProducts(newData);
                setLoadingg(false);
            }); 
    }
   
    useEffect(() => {
        fetchGet();
    }, [])

    function AddToCartButton( { item } ) {
        const [loading, setLoading] = useState(false);

        const addProductToCart= () => {
            setLoading(true);
            message.success(`${item.title} add com sucesso`);
            setLoading(false);
        }

        return <Button type="link" 
                       onClick={() => { addProductToCart() }}
                       loading={loading}>
                    Add to Cart
                </Button>;

    }

    if(loadingg) {
        return <Spin spinning />;
    }
    
    return (
        <div>
            <AppMenu />
            <div className="container-fluid">
                <List grid={{column: 3}} renderItem={(product, index) => {
                    return <Badge.Ribbon className="itemCardBadge" text={product.discountPercentage} color="pink">
                                <Card 
                                className="itemCard"
                                title={product.title} 
                                key={index} 
                                cover={<Image className="itemCardImage" src={product.thumbnail}/>}
                                actions={[
                                    <Rate allowHalf disabled value={product.rating} />,
                                    <AddToCartButton item={product}/>
                                ]}
                                >
                                    <Card.Meta title={<Typography.Paragraph>
                                                        R$: {product.price} {" "}
                                                        <Typography.Text delete type="danger">
                                                            R$: {parseFloat(product.price + (product.price * product.discountPercentage) / 100).toFixed(2)}
                                                        </Typography.Text>
                                                    </Typography.Paragraph>
                                                    }
                                                description={<Typography.Paragraph ellipsis={{rows:2, expandable:true, symbol:"more"}}>
                                                                {product.description}
                                                            </Typography.Paragraph>}
                                                >
                                    </Card.Meta>
                                </Card>
                            </Badge.Ribbon>
                }} dataSource={products}>

                </List>
            </div>
            
        </div>
    );
}

export default Products;
