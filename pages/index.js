export default function Home() {
  const drinks = [
    {
      brand: "Butched Barber",
      flavor: "Peach Mango Green Tea",
      ingredients: [
        { victim: "Joshua Muma (Post-Haircut)", Barber: "WILL BE FOUND", - "was not intended to be this bad fo a cut" },
        
      ],
    },
    {
      brand: "Monster",
      flavor: "Original",
      ingredients: [
        { name: "Caffeine (160mg)", benefit: "Energy boost", harm: "Insomnia, jitters" },
        { name: "Taurine", benefit: "Neuroprotection", harm: "Possible hypertension" },
        { name: "Ginseng", benefit: "Cognitive enhancement", harm: "May cause headaches" },
        { name: "Glucose", benefit: "Immediate energy", harm: "Blood sugar spike" },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-10">
      <header className="text-center mb-10">
        <img src="/eflogo.png" alt="En-Form Logo" className="h-24 mx-auto mb-4" />
        <h1 className="text-4xl font-bold">En-Form</h1>
        <p className="mt-2 text-lg text-gray-600">
          In-depth analysis of every energy drink — flavor by flavor.
        </p>
      </header>

      {drinks.map((drink, index) => (
        <section key={index} className="mb-10 border-b pb-6">
          <h2 className="text-2xl font-semibold mb-2">{drink.brand}: {drink.flavor}</h2>
          <ul className="space-y-2">
            {drink.ingredients.map((ing, i) => (
              <li key={i} className="border rounded p-3 bg-gray-50">
                <strong>{ing.name}</strong><br />
                ✅ Benefit: {ing.benefit}<br />
                ⚠️ Harm: {ing.harm}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
