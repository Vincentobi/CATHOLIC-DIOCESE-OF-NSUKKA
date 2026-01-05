import Deanary from "../deanary";

const deanaries = [
  { name: "Nsukka Deanary", slug: "nsukka" },
  { name: "Enugu-Ezike Deanary", slug: "enugu-ezike" },
  { name: "Obollo-Afor Deanary", slug: "obollo-afor" },
  { name: "Ibagwa-Ani Deanary", slug: "ibagwa-ani" },
  { name: "Uzo-Uwani Deanary", slug: "uzo-uwani" }
];

const seedDeanaries = async () => {
  for (const deanary of deanaries) {
    await Deanary.updateOne(
      { slug: deanary.slug },
      { $set: deanary },
      { upsert: true }
    );
  }

  console.log("✅ Deanaries seeded");
};

export default seedDeanaries;