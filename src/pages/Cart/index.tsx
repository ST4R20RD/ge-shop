import { useContext, useEffect } from "react";
import { useGetAllProducts } from "../../lib/api-hooks";
import { ShopContext, ShopContextType } from "../../context/ShopContext";
import { InCartProductBox } from "./InCartProductBox";
import { FetchState } from "../../utils/types";
import { useNavigate } from "react-router-dom";
import { FaApplePay, FaCcMastercard, FaGooglePay, FaPaypal, FaShieldAlt } from "react-icons/fa";
import { LiaCcVisa } from "react-icons/lia";
import styled from "styled-components";
import { ClipLoader } from "react-spinners";
import { Modal } from "../../components";

export function Cart() {
  const [allProducts, getAllProducts, productsFetchState] = useGetAllProducts();
  const { cartItems, getTotalCartAmount, checkout, selectedCurrency } = useContext(
    ShopContext
  ) as ShopContextType;
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  useEffect(() => {
    getAllProducts();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex flex-col items-center w-fit ">
      <h1 className="dark:text-white">Cart</h1>
      <section className="flex flex-col-reverse md:flex-row justify-center">
        <ProductList className="flex flex-col items-center overflow-y-auto min-h-fit">
          {productsFetchState === FetchState.LOADING && (
            <Modal>
              <ClipLoader color="#FFF" />
            </Modal>
          )}
          {productsFetchState === FetchState.SUCCESS &&
            (totalAmount && totalAmount > 0 ? (
              <>
                {allProducts
                  .filter((product) => cartItems[product.id] > 0)
                  .map((product) => {
                    return <InCartProductBox key={product.id} product={product} />;
                  })}
              </>
            ) : (
              <h1 className="mr-5 dark:text-white"> Your Shopping Cart is Empty</h1>
            ))}
        </ProductList>
        <div className="flex flex-col items-center mt-2 sm:ml-4">
          <div className="text-xl font-semibold rounded-lg bg-white p-5 w-80 mb-2">
            <h1> Total: </h1>
            <h2 className="my-5 text-right">
              {selectedCurrency === "Dollar" && "$"}
              {totalAmount.toFixed(2)}
              {selectedCurrency === "Euro" && "€"}
            </h2>
            <div className="flex flex-col">
              <button
                className="rounded-md border p-5 py-3 my-2 text-red-600 text-xl bg-red-100"
                onClick={() => navigate("/")}
              >
                Continue Shopping
              </button>
              <button
                className="rounded-md border px-5 py-3 my-2 text-white text-xl bg-red-600"
                onClick={() => {
                  checkout();
                  navigate("/checkout");
                }}
              >
                Checkout
              </button>
            </div>
          </div>
          <div className="text-xl font-semibold rounded-lg bg-white p-5 w-80">
            <p>Pagar com</p>
            <Payments className="flex text-4xl my-5">
              <LiaCcVisa />
              <FaCcMastercard />
              <FaPaypal />
              <FaGooglePay />
              <FaApplePay />
            </Payments>
            <div className="flex text-sm font-semibold ">
              <FaShieldAlt color="#007B61" className="absolute mt-1" size={15} />
              &nbsp;&nbsp;&nbsp;&nbsp; Proteção ao cliente Recupere o seu reembolso se o artigo não
              for entregue ou de acordo com a descrição.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const Payments = styled.div`
  svg {
    margin: 0 8px;
  }
`;
const ProductList = styled.div`
  height: calc(100vh - 112px);
`;
