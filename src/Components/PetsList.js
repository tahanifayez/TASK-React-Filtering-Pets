import { useState } from "react";
import pets from "../petsData";
import PetItem from "./PetItem";

function PetsList() {
  const [query, setQuery] = useState("");
  const [type,setType]=useState("");
  const filterPets = pets.filter((pet) => {
    return pet.name.toUpperCase().includes(query.toUpperCase());
  });
  // ehne ana sweet function dakhlelha aswe filter ll pets enzeen pet={pet} aqder asmeeh ay shay x y bs ashan afham shno sweet
const typePets=pets.filter((pet)=> pet.type.includes(type));
  const petList = filterPets.map((pet) => <PetItem pet={pet} key={pet.id} />);
  const handleSearch = (event) => {
    setQuery(event.target.value);
    console.log(event);
  };
  const PetSelector=(event)=> {setType(event.target.value);
  console.log(event);
  
  }

  return (
    <section id="doctors" className="doctor-section pt-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-6 col-lg-7">
            <div className="section-title text-center mb-30">
              <h1 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Fur-ends
              </h1>
              <div className="input-group rounded">
                <input
                  SearchBar
                  onChange={handleSearch}
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
              </div>
              <br />
              Type:
              <select 
              onChange={PetSelector}
              
              
              className="form-select">
                <option value="" selected>
                  All
                </option>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Rabbit">Rabbit</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">{petList}</div>
      </div>
    </section>
  );
}

export default PetsList;
