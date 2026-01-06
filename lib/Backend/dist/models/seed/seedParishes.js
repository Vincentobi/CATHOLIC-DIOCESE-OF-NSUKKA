import Parish from "../parishes";
import Deanary from "../deanary";
const seedParishes = async () => {
    const nsukka = await Deanary.findOne({ slug: "nsukka" });
    const enuguEzike = await Deanary.findOne({ slug: "enugu-ezike" });
    if (!nsukka || !enuguEzike) {
        throw new Error("Deanaries must be seeded first");
    }
    const parishes = [
        {
            name: "St. Theresa's Cathedral",
            slug: "st-theresas-cathedral",
            town: "Nsukka",
            location: "Nsukka Central",
            isCathedral: true,
            deanary: nsukka._id
        },
        {
            name: "St. Mary's Parish",
            slug: "st-marys-parish-enugu-ezike",
            town: "Enugu-Ezike",
            location: "Enugu-Ezike",
            deanary: enuguEzike._id
        }
    ];
    for (const parish of parishes) {
        await Parish.updateOne({ slug: parish.slug }, { $set: parish }, { upsert: true });
    }
    console.log("✅ Parishes seeded");
};
export default seedParishes;
