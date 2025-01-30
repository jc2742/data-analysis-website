export default function Header() {
  const links = [
    { label: 'Home', link: '/' },
    { label: 'Portfolio', link: '#Portfolio' },
    { label: 'Mission', link: '#Mission' },
  ];
  return (
    <header className="bg-black text-white text-center py-12">
      <h1 className="text-3xl font-bold">Tina Kwok</h1>
      <p className="text-xl">Data Analyst</p>
      <nav className="mt-2">
        <ul className="flex justify-center space-x-6">
          {links.map((item) => (
            <li key={item.label} className="hover:underline cursor-pointer">
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
