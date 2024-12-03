import "./Bai1.scss";

const Bai1 = () => {
  return (
    <>
      <div class="card">
        <div class="card__hearth">
          <box-icon name="heart"></box-icon>
        </div>
        <div class="card__cart">
          <box-icon name="shopping-bag"></box-icon>
        </div>
        <div class="card__img">
          <img
            src="https://sneakerdaily.vn/wp-content/uploads/2023/08/Off-White-x-Air-Jordan-1-Retro-High-OG-Chicago-AA3834-101.jpg.webp"
            alt=""
          />
        </div>
        <div class="card__tillte">Nike zoom KD 12</div>
        <div class="card__price">$99</div>
        <div class="card__size">
          <h3>Size</h3>
          <span>6</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
        </div>
        <div class="card__color">
          <h3>Color</h3>
          <span class="card__color--green"></span>
          <span class="card__color--red"></span>
          <span class="card__color--gray"></span>
        </div>
        <div class="card__action">
          <button>By now</button>
          <button>Add cart</button>
        </div>
      </div>
    </>
  );
};

export default Bai1;
