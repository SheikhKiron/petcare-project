import usePets from '../hooks/usePets';
import PetCard from '../Components/PetCard';
import Spinner from '../Components/Spinner';
const Services = () => {
  const{pet,loading}=usePets()
  const pets = pet || [];
  return (
    <div>
      <title>Services for Warm-Paws</title>
      {loading ? (
        <Spinner />
      ) : (
        <div className="py-5">
          <h2 className="text-center py-5 text-2xl font-bold">
            Popular Winter Care Services
          </h2>
          <div
            className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-5 w-11/12 mx-auto"
            data-aos="zoom-in-down"
          >
            {pets.map(pet => (
              <PetCard pet={pet} key={pet.serviceId}></PetCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;