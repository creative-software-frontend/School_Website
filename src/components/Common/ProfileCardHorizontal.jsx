import ProfileCardHeading from "./ProfileCardHeading";

const ProfileCardHorizontal = ({ information }) => {
  return (
    <div className="col-lg-6 mb-3">
      <ProfileCardHeading heading={information.heading} />

      <div className="card flex-row mt-2 gap-4">
        <div className="info-icon-wrapper ms-3">
          <i className={information.icon}></i>
        </div>
        <div>
          <ul className="info-list-wrapper pt-2">
            {information.list.map((item, index) => (
              <li key={index}>
                <a className="text-primary" href={item.href}>
                  <i className="me-2 fa fa-arrow-right"></i> {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileCardHorizontal;
