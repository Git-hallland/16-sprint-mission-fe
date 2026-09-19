import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ProductCard from "../components/ProductCard.jsx";
import "../styles/market.css";
import { useEffect, useState } from "react";
import { getProducts } from "../api/products.js";

function MarketPage() {
    const [bestProducts, setBestProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const [keyword, setKeyword] = useState("");
    const [orderBy, setOrderBy] = useState("recent");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const bestProductData = await getProducts({
                    page: 1,
                    pageSize: 4,
                    orderBy: "favorite",
                });

                const productData = await getProducts({
                    page: 1,
                    pageSize: 10,
                    orderBy,
                    keyword,
                });

                console.log("베스트:", bestProductData);
                console.log("전체:", productData);

                setBestProducts(bestProductData.list);
                setProducts(productData.list);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, [keyword, orderBy]);

    return (
        <>
            <Header />

            <main className="market-main">
                <section className="market-section">
                    <h2 className="market-section-title">베스트 상품</h2>

                    <div className="best-product-grid">
                        {bestProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                image={product.images[0]}
                                name={product.name}
                                price={product.price}
                                favoriteCount={product.favoriteCount}
                            />
                        ))}
                    </div>
                </section>

                <section className="market-section">
                    <div className="market-toolbar">
                        <h2 className="market-section-title">판매 중인 상품</h2>

                        <div className="market-actions">
                            <input
                                className="market-search"
                                type="text"
                                placeholder="검색할 상품을 입력해주세요"
                                value={keyword}
                                onChange={(e) => setKeyword(e.target.value)}
                            />

                            <button className="market-register-button">
                                상품 등록하기
                            </button>

                            <select
                                className="market-sort"
                                value={orderBy}
                                onChange={(e) => setOrderBy(e.target.value)}
                            >
                                <option value="recent">최신순</option>
                                <option value="favorite">좋아요순</option>
                            </select>
                        </div>
                    </div>

                    <div className="product-grid">
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                image={product.images[0]}
                                name={product.name}
                                price={product.price}
                                favoriteCount={product.favoriteCount}
                            />
                        ))}
                    </div>
                </section>


            </main>

            <Footer />
        </>
    );
}

export default MarketPage;