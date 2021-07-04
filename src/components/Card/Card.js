import styles from "./Card.module.scss";

function Card({name, price, img}){
    return(
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src="/img/unliked.svg" alt="unliked"/> 
            </div>
            <img width={133} height={112} src={img} alt=""/>
                <h5>{name}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>{price} грн.</b>
                </div>
                <button className="button" onClick={() => alert("123")}>
                <img width={11} height={11} src="/img/plus.svg" alt="Plus"></img>
                </button>
            </div>
        </div>
    );
}

export default Card;