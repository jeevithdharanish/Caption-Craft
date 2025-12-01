export default function PageHeaders({
  h1Text = 'Hello',
  h2Text = 'Subheader',
}) {
  return (
    <section className="text-center mb-4 sm:mb-6">
      <h1 className="text-xl sm:text-3xl" style={{textShadow: '1px 1px 0 rgba(0,0,0,.2)'}}>
        {h1Text}
      </h1>
      <h2 className="text-white/75 text-sm sm:text-base">
        {h2Text}
      </h2>
    </section>
  );
}

