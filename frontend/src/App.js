import data from "./data";


function App() {
  return (
    <div className = "grid-container">
    <header className="row">
        <div>
            <a className = 'brand' href="index.html">EraCourse</a>
        </div>

        <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign in </a>
        </div>
    </header>

    <main>
       <div className = 'wrapper'>
           {
               data.courses.map(product=>(
                <div key = 'product._id' className="card">
                <a href={`/product/${product._id}`}>
                    <img className = "card__img" src={product.image} alt="404"></img>
                </a>
                <div className = "row1">
                    <div className ="card-category">{product.category}</div> 
                    <div className="card-price">
                        {product.price}
                    </div>
                </div>
                <div className="card-body">
                <a href={`/product/${product._id}`}>
                        <h2>{product.name}</h2>
                    </a>
                    <div className="rating">
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star-o"></i></span>
                        <span><i className="fa fa-star-o"></i></span>
                    </div>
                   
                </div>
            </div>
               ))
           }
           
           
       </div>
    </main>

    <footer className = 'row center'>
        All rights reserved
    </footer>
</div>
  );
}

export default App;
