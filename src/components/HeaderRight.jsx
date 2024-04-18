function HeaderRight() {
  const socialMedia = [
    { name: "tw", link: "https://twitter.com" },
    { name: "fb", link: "https://facebook.com" },
    { name: "ig", link: "https://instagram.com" },
  ];
  return (
    <div className="h-32 px-6 border-4 border-black flex flex-row justify-between items-center">
      <div className="flex gap-2 ">
        {socialMedia.map((item, index) => (
          <>
            <a
              key={item.name}
              href={item.link}
              className="text-xl font-bold hover:text-blue-500"
            >
              {item.name}
            </a>
            {index < 2 && <span className="font-bold text-xl">•</span>}
          </>
        ))}
      </div>
      <div>
        <p className="text-right text-xl font-medium tracking-wide leading-7">
          We are <span className="font-bold">hiring</span> engineers!
        </p>
        <p className=" text-right text-xl font-medium tracking-wide leading-7">
          for more information <span className="font-bold">contact us</span>
        </p>
      </div>
    </div>
  );
}
export default HeaderRight;
