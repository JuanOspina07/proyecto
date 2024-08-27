import React from 'react';
import './Diseño.css'; // Asegúrate de tener estilos específicos si es necesario
import producto1 from './ImagenesWeb/producto1.jpg';
import producto2 from './ImagenesWeb/producto2.jpg';
import producto3 from './ImagenesWeb/producto3.png';
import producto4 from './ImagenesWeb/producto4.png';
import producto5 from './ImagenesWeb/producto5.webp';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


const ProductList = () => {
    return (
        <div className="page-content">
            <div className="productos">
                <div className='nom'> <h3>Oporto</h3></div>
                <img src={producto1} alt="Camiseta" />
                <div className='Orden'>
                    <h3>$100</h3>
                    <button className="shadow__btn">
                    <ShoppingCartIcon/>
                    </button>
                </div>
            </div>
            <div className="productos">
                <div className='nom'> <h3>Real Madrid</h3></div>
                <img src={producto2} alt="Camiseta" />
                <div className='Orden'>
                    <h3>$100</h3>
                    <button className="shadow__btn">
                    <ShoppingCartIcon/>
                    </button>
                </div>
            </div>
            <div className="productos">
                <div className='nom'> <h3>Liverpool</h3></div>
                <img src={producto3} alt="Camiseta" />
                <div className='Orden'>
                    <h3>$100</h3>
                    <button className="shadow__btn">
                    <ShoppingCartIcon/>
                    </button>
                </div>
            </div>
            <div className="productos">
                <div className='nom'> <h3>Azul</h3></div>
                <img src={producto4} alt="Camiseta" />
                <div className='Orden'>
                    <h3>$100</h3>
                    <button className="shadow__btn">
                    <ShoppingCartIcon/>
                    </button>
                </div>
                
            </div>
            <div className="productos">
                <div className='nom'> <h3>Laura</h3></div>
                <img src={producto5} alt="Camiseta" />
                <div className='Orden'>
                    <h3>$100</h3>
                    <button className="shadow__btn">
                    <ShoppingCartIcon/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
