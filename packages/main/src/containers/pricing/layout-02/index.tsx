import { Pricing02 } from "@ht/components";

const PricingArea = () => {
    return (
        <div className="grid gap-5 lg:grid-cols-3">
            <Pricing02
                title="Personal"
                price="$19"
                path="/pricing-02"
                period="month"
                features={[
                    "Li Europan lingues es",
                    "Membres del sam familie",
                    "Por scientie, musica",
                    "Europa usa li sam",
                    "Lor separat existentie",
                ]}
            />

            <Pricing02
                title="Team"
                price="$99"
                path="/pricing-02"
                period="month"
                features={[
                    "Li Europan lingues es",
                    "Membres del sam familie",
                    "Por scientie, musica",
                    "Europa usa li sam",
                    "Lor separat existentie",
                ]}
            />

            <Pricing02
                title="Corporate"
                price="$199"
                path="/pricing-02"
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
