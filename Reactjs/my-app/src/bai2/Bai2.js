import "./Bai2.scss";

const Bai2 = () => {
  return (
    <>
      <div class="profile">
        <div class="profile__img">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPl6cN04e_V_Qgy4ik4CHODlay32-cYL5MMw&s"
            alt=""
          />
        </div>
        <div class="profile__name">
          <h3>Đình Nam</h3>
        </div>
        <div class="profile__job">
          <h4>Fullstask Developer</h4>
        </div>
        <div class="profile__adress">
          <span>
            <box-icon name="tiktok" type="logo"></box-icon>
          </span>
          <span>
            <box-icon type="logo" name="facebook-circle"></box-icon>
          </span>
          <span>
            <box-icon name="youtube" type="logo"></box-icon>
          </span>
          <span>
            <box-icon name="github" type="logo"></box-icon>
          </span>
        </div>
        <div class="profile__action">
          <button class="profile__action--contract">Contract me</button>
        </div>
      </div>
    </>
  );
};

export default Bai2;
