function Drawer(){
    return(
        <div style={{display: "none"}} className="overlay">
        <div className="drawer">
          <h2 
            className="mb-20 d-flex justify-between">
            Корзина <img className="removeBtn cu-p" src="/img/btn-remove.svg" alt="remove"/>
          </h2>
          
          
         

          <div className="items">
            <div className="cartItem d-flex align-center mb-20">
              <div style={{backgroundImage: "url(/img/sneakers/2.jpg)"}} className="cartItemImg"></div>
              {/* <img className="mr-20" width={70} height={70} src="/img/sneakers/2.jpg" alt="sneakers"/> */}
              <div className="mr-20 flex">
                <p className="mb-5">Мужские кросовки NIKE Blazer Mid Surde</p>
                <b>12 999 грн.</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="remove"/>
            </div>

            <div className="cartItem d-flex align-center mb-20">
              <div style={{backgroundImage: "url(/img/sneakers/2.jpg)"}} className="cartItemImg"></div>
              {/* <img className="mr-20" width={70} height={70} src="/img/sneakers/2.jpg" alt="sneakers"/> */}
              <div className="mr-20 flex">
                <p className="mb-5">Мужские кросовки NIKE Blazer Mid Surde</p>
                <b>12 999 грн.</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="remove"/>
            </div>
          </div>

          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21 498 грн.</b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 грн.</b>
              </li>
            </ul>
            <button 
              className="greenBtn">Оформить заказ 
              <img src="img/arrow.svg" alt="search"/>
            </button>
          </div>
          
        </div>
      </div>
    );
}

export default Drawer;