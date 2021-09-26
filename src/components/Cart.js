import React from "react";
import { Button } from "@material-ui/core";
import { Close, Message } from "@material-ui/icons";
// import PaypalPay from "/images/Paypal-Payment.png";

const PROMOTIONS = [
  {
    code: "SUMMER",
    discount: "50%",
  },
  {
    code: "AUTUMN",
    discount: "40%",
  },
  {
    code: "WINTER",
    discount: "30%",
  },
];
const PRODUCTS = [
  {
    image:
      "http://2.bp.blogspot.com/-TxBPiJaiih4/To8q8Vd6JuI/AAAAAAAAAEk/bsbPiemPv3Q/s1600/p.jpg",
    name: "Pauva Art (Newari Traditional Art)",
    description: "Painted with traditional equipments best quality",
    quantity: 1,
    price: 1200,
  },
  {
    image: "https://www.pngall.com/wp-content/uploads/3/Art-Transparent.png",
    name: "Modern Art Abstract genre",
    description:
      "Good for walls with bright colors, painted with good qulaity materials",
    quantity: 1,
    price: 800,
  },
  {
    image:
      "https://uploads0.wikiart.org/00339/images/leonardo-da-vinci/mona-lisa-c-1503-1519.jpg",
    name: "Mona Lisa: Leonardo Da Vinci",
    description:
      "Mona Lisa is a wordlwide popular art (copy version) same as original",
    quantity: 1,
    price: 50000,
  },
];
const TAX = 5;

function Cart() {
  const CLONE_PRODUCTS = JSON.parse(JSON.stringify(PRODUCTS));
  const [products, setProducts] = React.useState(CLONE_PRODUCTS);
  const [promoCode, setPromoCode] = React.useState("");
  const [discountPercent, setDiscountPercent] = React.useState(0);

  const itemCount = products.reduce((quantity, product) => {
    return quantity + +product.quantity;
  }, 0);
  const subTotal = products.reduce((total, product) => {
    return total + product.price * +product.quantity;
  }, 0);
  const discount = (subTotal * discountPercent) / 100;

  const onRemoveProduct = (i) => {
    const filteredProduct = products.filter((product, index) => {
      return index != i;
    });

    setProducts(filteredProduct);
  };

  const onEnterPromoCode = (event) => {
    setPromoCode(event.target.value);
  };

  const checkPromoCode = () => {
    for (var i = 0; i < PROMOTIONS.length; i++) {
      if (promoCode === PROMOTIONS[i].code) {
        setDiscountPercent(parseFloat(PROMOTIONS[i].discount.replace("%", "")));
        return;
      }
    }
    alert("Sorry, the Promotional code you entered is not valid!");
  };

  const shopNow = () => {
    alert("shopmore");
  };

  const ProceedToCheckout = () => {};

  return (
    <div>
      <div className="cart-head">
        <h1>Cart</h1>
        <span className="count">{itemCount} items</span>
      </div>

      {products.length > 0 ? (
        <>
          <ProductList products={products} onRemoveProduct={onRemoveProduct} />

          <Summary
            subTotal={subTotal}
            discount={discount}
            tax={TAX}
            onEnterPromoCode={onEnterPromoCode}
            checkPromoCode={checkPromoCode}
            ProceedToCheckout={ProceedToCheckout}
          />
        </>
      ) : (
        <div className="empty-product">
          <h3>There are no products in your cart.</h3>
          <button onClick={() => shopNow()}>Shopping now</button>
        </div>
      )}
    </div>
  );
}

function ProductList({ products, onRemoveProduct }) {
  const Messages = () => {
    window.location.href("/messages");
  };

  return (
    <ul className="items">
      {products.map((product, index) => {
        return (
          <li className="cart-item" key={index}>
            <div className="left">
              <div className="thumbnail">
                <a href="#">
                  <div className="cart-item-img">
                    <img src={product.image} alt={product.name} />
                  </div>
                </a>
              </div>
              <div className="detail-wrap">
                <div className="detail">
                  <div className="name">
                    <a href="#">{product.name}</a>
                  </div>
                  <div className="description">{product.description}</div>
                  <div className="price">{formatCurrency(product.price)}</div>
                </div>
                <div className="right">
                  <div className="message">
                    <Button
                      type="submit"
                      onClick={() => Messages()}
                      variant="contained"
                      color="secondary"
                    >
                      <Message /> Message
                    </Button>
                  </div>

                  <div className="remove">
                    <Button
                      onClick={() => onRemoveProduct(index)}
                      variant="contained"
                      color="secondary"
                    >
                      <Close /> Remove
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

function Summary({
  subTotal,
  discount,
  tax,
  onEnterPromoCode,
  checkPromoCode,
  ProceedToCheckout,
}) {
  const total = subTotal - discount + tax;

  return (
    <section className="checkout">
      <div className="promotion">
        <label htmlFor="promo-code">Have A Promo Code?</label>
        <input
          type="text"
          placeholder="eg: #ce344"
          onChange={onEnterPromoCode}
        />
        <button type="button" onClick={checkPromoCode}>
          Check Promo Code
        </button>
      </div>

      <div className="summary">
        <ul>
          <li>
            Subtotal <span>{formatCurrency(subTotal)}</span>
          </li>
          {discount > 0 && (
            <li>
              Discount <span>{formatCurrency(discount)}</span>
            </li>
          )}
          <li>
            Tax <span>{formatCurrency(tax)}</span>
          </li>
          <li className="total">
            Total <span>{formatCurrency(total)}</span>
          </li>
        </ul>

        <div className="proceed-checkout">
          <Button
            onClick={ProceedToCheckout}
            variant="contained"
            color="secondary"
          >
            <span className="paypic-wrap">
              <img src="/images/Esewa-Payment.png" alt="EsewaPay" />
            </span>
            Check Out
          </Button>
          <Button
            onClick={ProceedToCheckout}
            variant="contained"
            color="secondary"
          >
            <span className="paypic-wrap">
              <img src="/images/Paypal-Payment.png" alt="EsewaPay" />
            </span>
            Check Out
          </Button>
        </div>
      </div>
    </section>
  );
}

function formatCurrency(value) {
  return Number(value).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

export default Cart;
