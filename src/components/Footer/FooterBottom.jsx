const FooterBottom = () => {
  return (
    <div className="card px-3 py-2 flex-row align-items-center justify-content-between">
      <p> &copy; 2024 Dhaka School & College. All Rights Reserved. </p>
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
