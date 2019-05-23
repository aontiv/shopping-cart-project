import React, { Component } from 'react';

import Product from './Product';

// TODO: Move Images To Server
import p1 from '../../img/1.png';
import p2 from '../../img/2.png';
import p3 from '../../img/3.png';
import p4 from '../../img/4.png';
import p5 from '../../img/5.png';
import p6 from '../../img/6.png';
import p7 from '../../img/7.png';
import p8 from '../../img/8.png';
import p9 from '../../img/9.png';
import p10 from '../../img/10.png';
import p11 from '../../img/11.png';
import p12 from '../../img/12.png';

class ProductList extends Component {
    render() {
        return (
            <ul className='list-group list-group-horizontal-md flex-md-wrap align-items-center justify-content-md-center mt-5'>
                <Product
                    product={{
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id.',
                        name: 'product 1',
                        image: p1,
                        price: '$67.99',
                        qCart: 3,
                        qInventory: 10,
                    }}
                    onAddClick={this.props.onAddClick}
                />
                <Product
                    product={{
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id.',
                        name: 'product 2',
                        image: p2,
                        price: '$57.99',
                        qCart: 2,
                        qInventory: 15,
                    }}
                    onAddClick={this.props.onAddClick}
                />
                <Product
                    product={{
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id.',
                        name: 'product 3',
                        image: p3,
                        price: '$75.99',
                        qCart: 4,
                        qInventory: 5,
                    }}
                    onAddClick={this.props.onAddClick}
                />
                <Product
                    product={{
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id.',
                        name: 'product 4',
                        image: p4,
                        price: '$99.99',
                        qCart: 1,
                        qInventory: 2,
                    }}
                    onAddClick={this.props.onAddClick}
                />
                <Product
                    product={{
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id.',
                        name: 'product 5',
                        image: p5,
                        price: '$45.99',
                        qCart: 8,
                        qInventory: 20,
                    }}
                    onAddClick={this.props.onAddClick}
                />
                <Product
                    product={{
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id.',
                        name: 'product 6',
                        image: p6,
                        price: '$35.99',
                        qCart: 1,
                        qInventory: 12,
                    }}
                    onAddClick={this.props.onAddClick}
                />
                <Product
                    product={{
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id.',
                        name: 'product 7',
                        image: p7,
                        price: '$99.99',
                        qCart: 3,
                        qInventory: 10,
                    }}
                    onAddClick={this.props.onAddClick}
                />
                <Product
                    product={{
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id.',
                        name: 'product 8',
                        image: p8,
                        price: '$29.99',
                        qCart: 7,
                        qInventory: 11,
                    }}
                    onAddClick={this.props.onAddClick}
                />
                <Product
                    product={{
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id.',
                        name: 'product 9',
                        image: p9,
                        price: '$45.99',
                        qCart: 3,
                        qInventory: 30,
                    }}
                    onAddClick={this.props.onAddClick}
                />
                <Product
                    product={{
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id.',
                        name: 'product 10',
                        image: p10,
                        price: '$75.99',
                        qCart: 2,
                        qInventory: 35,
                    }}
                    onAddClick={this.props.onAddClick}
                />
                <Product
                    product={{
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id.',
                        name: 'product 11',
                        image: p11,
                        price: '$15.99',
                        qCart: 2,
                        qInventory: 35,
                    }}
                    onAddClick={this.props.onAddClick}
                />
                <Product
                    product={{
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id.',
                        name: 'product 12',
                        image: p12,
                        price: '$105.99',
                        qCart: 5,
                        qInventory: 50,
                    }}
                    onAddClick={this.props.onAddClick}
                />
            </ul>
        );
    }
}

export default ProductList;