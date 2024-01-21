const FooterBottom = () => {
  return (
    <div className="card px-3 py-2 flex-row align-items-center justify-content-between">
      <p>All Rights Reserved 2024 &copy; Dhaka School & College</p>
      <p>
        Powered By:{" "}
        <a href="#" target="_blank">
          Creative Software
        </a>
      </p>
      <div>
        <img
          src="/images/play-store.png"
          alt=""
          style={{ width: "100px", objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default FooterBottom;
