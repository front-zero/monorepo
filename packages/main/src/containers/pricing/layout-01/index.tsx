import { Card, Pricing01 } from "@ht/components";

const PricingArea = () => {
    return (
        <Card className="p-10 sm:p-[60px] grid gap-7 lg:gap-0 lg:grid-cols-3">
            <div className="relative px-3.8 before:absolute before:content-[''] before:top-0 before:left-0 before:w-full before:h-px lg:before:w-px lg:before:h-full before:bg-ghost first:before:hidden">
                <Pricing01
                    icon="icon ion-model-s"
                    title="Personal"
                    description="Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum."
                    price="$19"
                    path="/pricing-01"
                />
            </div>
            <div className="relative px-3.8 before:absolute before:content-[''] before:top-0 before:left-0 before:w-full before:h-px lg:before:w-px lg:before:h-full before:bg-ghost first:before:hidden">
                <Pricing01
                    icon="icon ion-android-boat"
                    title="Team"
                    description="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur."
                    price="$99"
                    path="/pricing-01"
                />
            </div>
            <div className="relative px-3.8 before:absolute before:content-[''] before:top-0 before:left-0 before:w-full before:h-px lg:before:w-px lg:before:h-full before:bg-ghost first:before:hidden">
                <Pricing01
                    icon="icon ion-plane"
                    title="Corporate"
                    description="Nemo enim ipsam volu ptatem quia voluptas sit asp ernatur aut odit aut fugit, sed quia conse quuntur magni dolores eos qui ratione."
                    price="$199"
                    path="/pricing-01"
                />
            </div>
        </Card>
    );
};

export default PricingArea;
