import React, { useEffect, useState } from 'react';

export default function Products() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChecked = () => {setChecked(prev => !prev)};  //체크를 누르면 그 전 자료를 보여주고, 다시 체크를 누르면  그전 자료를 보여준다.

  useEffect(() => {
    //fetch('data/products.json')  //data안에 있는 파일을 받아오고
    fetch(`data/${checked ? 'sale_' : ''}products.json`)    //checked를 체크되었으면 sale_product라는 이름을 가진 데이터를 가져오고, 아니면 아무것도 붙이지 않은 product 테이터를 가져온다.
      .then((res) => res.json())   //data를 잘 response하면 json형태로 변환
      .then((data) => {            //data아이템이 잘 들어왔는지 콘솔로 확인하고 setProduct에 data를 넣어 products에 저장한다.
        console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
        setProducts(data);
      });
    return () => {
      console.log('🧹 깨끗하게 청소하는 일들을 합니다.');  //화면에 토굴버튼을 눌러 자료가 사라질때 자료를 개끗하게 지워주는 콜백함수이다.
    };
  }, [checked]);   //[] >> fetch가 한번만 실행하여 자료를 계속해서 호출하지 않도록 해줌, []안에checked를 썼다면 체크가 변경될때마다 새로운 자료를 호출(useEffect 실행)한다는 뜻이다.

  return (
    <>
      <ul>
        <input id='checkBox' type="checkbox" value={checked} onChange={handleChecked} />
        <label htmlFor="checkBox">Show only 🔥 sale</label>
        {products.map((product) => (
          <li key={product.id}>   {/* 고유한 키값 필요함 */}
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </>
  );
}
