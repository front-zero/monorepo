import { Pricing03 } from "@ht/components";

const PricingArea = () => {
    return (
        <div className="grid gap-2.5 sm:grid-cols-2 xl:grid-cols-4">
            <Pricing03
                title="Personal"
                price="$19"
                path="/pricing-03"
                period="month"
                features={[
                    "Li Europan lingues es",
                    "Membres del sam familie",
                    "Por scientie, musica",
                    "Europa usa li sam",
                    "Lor separat existentie",
                ]}
            />

            <Pricing03
                title="Team"
                price="$99"
                path="/pricing-03"
                period="month"
                features={[
                    "Li Europan lingues es",
                    "Membres del sam familie",
                    "Por scientie, musica",
                    "Europa usa li sam",
                    "Lor separat existentie",
                ]}
                isFeatured
            />

            <Pricing03
                title="Corporate"
                price="$199"
                path="/pricing-03"
                period="month"
                features={[
                    "Li Europan lingues es",
                    "Membres del sam familie",
                    "Por scientie, musica",
                    "Europa usa li sam",
                    "Lor separat existentie",
                ]}
            />
            <Pricing03
                title="Business"
                price="$299"
                path="/pricing-03"
                period="month"
                features={[
                    "Li Europan lingues es",
                    "Membres del sam familie",
                    "Por scientie, musica",
                    "Europa usa li sam",
                    "Lor separat existentie",
                ]}
            />
        </div>
    );
};

export default PricingArea;
