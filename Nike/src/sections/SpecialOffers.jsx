import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../Component/Button";
function SpecialOffers() {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1 ">
        <img
          src={offer}
          alt=""
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div>
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red ">Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text ">
          Embark on a shopping journy that redefines your experience with
          unbeatable deals. from premier selecitons to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm of possiblities designed to fulfill you unique
          desires, surpassing the loftiest expectaitons. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button>
            View Details
            <img src={arrowRight} alt="arrow right" />
          </Button>
          <Button
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          >
            Learn more{" "}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default SpecialOffers;
