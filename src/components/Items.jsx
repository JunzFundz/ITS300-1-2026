const item = [
  {
    id: 1,
    name: "Shoes",
    desc: "Size 43/42/41",
    imgs: new URL("../assets/images/hero.png", import.meta.url).href,
  },
  {
    id: 2,
    name: "Phone",
    desc: "Specs: 256GB, 8GB RAM",
    imgs: "https://images.pexels.com/photos/39365021/pexels-photo-39365021.jpeg",
  },
  {
    id: 3,
    name: "Tshirt",
    desc: "Dry fit",
    imgs: "https://images.pexels.com/photos/39442944/pexels-photo-39442944.jpeg",
  },
];

export default function UserList() {
  return (
    <>
      <div className="flex gap-4 justify-center flex-wrap">
        {item.map((items) => (
          <div className="card bg-gray-100 text-gray-800 w-96 shadow-sm">
            <figure>
              <img src={items.imgs} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{items.name}</h2>
              <p>{items.desc}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
