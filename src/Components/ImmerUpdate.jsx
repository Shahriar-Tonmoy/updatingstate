import { useImmer } from "use-immer"

export default function ImmerUpdate(){
    const [person, updatePerson] = useImmer(
        {
            Name: 'Tonmoy',
            Address: {
                Country: "Bangladesh",
                City: "Dhaka",
                Area: "Gandaria"
            }
        }
    )
    const handleNameChange = (e) =>{
        updatePerson(draft => {
            draft.Name = e.target.value;
        });
    }

    function handleCountryChange(e){
        updatePerson(draft => {
            draft.Address.Country = e.target.value;
        });
    }

    const handleCityChange = (e) =>{
        updatePerson(draft => {
            draft.Address.City = e.target.value;
        });
    }

    const handleAreaChange = (e) =>{
        updatePerson(draft => {
            draft.Address.Area = e.target.value;
        });
    }
    
    return(
        <>
            <h1>Immer</h1>
            <label>
                Name:
                <input 
                    value={person.Name}
                    onChange={handleNameChange}
                />
            </label>
            <label>
                Country:
                <input 
                    value={person.Address.Country}
                    onChange={handleCountryChange}
                />
            </label>
            <label>
                City:
                <input 
                    value={person.Address.City}
                    onChange={handleCityChange}
                />
            </label>
            <label>
                Area:
                <input 
                    value={person.Address.Area}
                    onChange={handleAreaChange}
                />
            </label>
            <p>
                He is <i>{person.Name}</i>
            </p>
            <p>
                he is from <b>{person.Address.Country}</b>
            </p>
            <p>
                There is a big city named <b>{person.Address.City}</b>
            </p>
            <p>
                There is an interesting area named -  <b>{person.Address.Area}</b>
            </p>

        </>
    )
}
